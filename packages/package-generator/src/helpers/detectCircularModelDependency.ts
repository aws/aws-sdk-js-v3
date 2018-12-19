import {TreeModel, TreeModelMember, TreeModelOperationMember, TreeModelMap} from '@aws-sdk/build-types'

export type CircularDependenciesMap = Map<TreeModelMember, Set<TreeModelMember>>;

export function detectCircularModelDependency(model: TreeModel): CircularDependenciesMap {
    const {operations} = model;
    let circularDependencies: CircularDependenciesMap = new Map();
    for (const name of Object.keys(operations)) {
        const operation = operations[name];
        const ioShape: Array<'input'|'output'> = ['input', 'output'];
        for (const io of ioShape) {
            const ioMember = operation[io];
            circularDependencies = mergeDependencyMap(
                circularDependencies,
                detectCircularDependencyFromIO(ioMember)
            );
        }
    }
    return circularDependencies;
}

function detectCircularDependencyFromIO(member: TreeModelMember, visitedMember: Set<TreeModelMember> = new Set()): CircularDependenciesMap {
    if (member.shape.type === 'map') {
        return detectCircularDependencyFromMap(member, visitedMember);
    } else if (member.shape.type === 'structure') {
        return detectCircularDependencyFromStructure(member, visitedMember);
    } else if (member.shape.type === 'list') {
        return detectCircularDependencyFromList(member, visitedMember);
    } else {
        return new Map();
    }
}

function detectCircularDependencyFromMap(member: TreeModelMember, visitedMember: Set<TreeModelMember> = new Set()): CircularDependenciesMap {
    if (member.shape.type !== 'map') throw new Error('cannot parse non-Map shaped member.');
    const backwardsDependencies: Set<TreeModelMember> = new Set();
    let circularDependencyFromValue = new Map<TreeModelMember, Set<TreeModelMember>>();
    let circularDependencyFromKey = new Map<TreeModelMember, Set<TreeModelMember>>();
    if (visitedMember.has(member.shape.value)) {
        backwardsDependencies.add(member.shape.value);
    } else {
        visitedMember.add(member.shape.value);
        circularDependencyFromValue = detectCircularDependencyFromIO(member.shape.value, visitedMember);
        visitedMember.delete(member.shape.value);
    }
    if (visitedMember.has(member.shape.key)) {
        backwardsDependencies.add(member.shape.key);
    } else {
        visitedMember.add(member.shape.key);
        circularDependencyFromKey = detectCircularDependencyFromIO(member.shape.key, visitedMember);
        visitedMember.delete(member.shape.key);
    }
    let circularDependencies: CircularDependenciesMap = mergeDependencyMap(circularDependencyFromKey, circularDependencyFromValue);
    if (backwardsDependencies.size > 0) {
        circularDependencies = mergeDependencyMap(circularDependencies, new Map([[member, backwardsDependencies]]));
    }
    return circularDependencies;
}

function detectCircularDependencyFromStructure(member: TreeModelMember, visitedMember: Set<TreeModelMember> = new Set()): CircularDependenciesMap {
    if (member.shape.type !== 'structure') throw new Error('cannot parse non-Structure shaped member.');
    const backwardsDependencies: Set<TreeModelMember> = new Set();
    let circularDependencies: CircularDependenciesMap = new Map();
    for (const name of Object.keys(member.shape.members)) {
        const subMember = member.shape.members[name];
        if (visitedMember.has(subMember)) {
            backwardsDependencies.add(subMember);
        } else {
            visitedMember.add(subMember);
            const circularDependencyFromSub = detectCircularDependencyFromIO(subMember, visitedMember);
            visitedMember.delete(subMember);
            circularDependencies = mergeDependencyMap(circularDependencies, circularDependencyFromSub);
        }
    }
    if (backwardsDependencies.size > 0) {
        circularDependencies = mergeDependencyMap(circularDependencies, new Map([[member, backwardsDependencies]]));
    }
    return circularDependencies;
}

function detectCircularDependencyFromList(member: TreeModelMember, visitedMember: Set<TreeModelMember> = new Set()): CircularDependenciesMap {
    if (member.shape.type !== 'list') throw new Error('cannot parse non-List shaped member.');
    let circularDependencies: CircularDependenciesMap = new Map();
    if (!visitedMember.has(member.shape.member)) {
        visitedMember.add(member.shape.member);
        circularDependencies = detectCircularDependencyFromIO(member.shape.member, visitedMember);
        visitedMember.delete(member.shape.member);
    } else {
        const backwardsDependencies: Set<TreeModelMember> = new Set([member.shape.member]);
        circularDependencies = mergeDependencyMap(circularDependencies, new Map([[member, backwardsDependencies]]));
    }
    return circularDependencies;
}

function mergeDependencyMap(mapA: CircularDependenciesMap, mapB: CircularDependenciesMap): CircularDependenciesMap {
    const toReturn = new Map([...mapA.entries()]);
    for (const [Bkey, Bvalue] of mapB.entries()) {
        if (toReturn.has(Bkey)) {
            const updatedAvalue = new Set([
                ...toReturn.get(Bkey)!.values(),
                ...Bvalue.values()
            ]);
            toReturn.set(Bkey, updatedAvalue);
        } else {
            toReturn.set(Bkey, Bvalue);
        }
    }
    return toReturn;
}
