import {
    Member,
    SerializationModel
} from '@aws/types';

function mapToShape(obj: any, shape: SerializationModel): any {
    if (obj === undefined || obj === null) {
        return undefined
    }
    if (shape.sensitive) {
        return '******'
    }
    if (shape.type === 'structure') {
        let structure: {[key: string]: any} = {};
        for (const key of Object.keys(obj)) {
            if (obj[key] === null || obj[key] === undefined || !(key in shape.members)) {
                continue;
            }
            const value = obj[key];
            const member = shape.members[key];
            structure[key] = removeSensitiveLogs(value, member);
        }
        return structure;
    } else if (shape.type === 'list') {
        let list = [];
        const isSensitive = shape.member.sensitive;
        for (const value of obj) {
            list.push(removeSensitiveLogs(value, shape.member));
        }
        return list;
    } else if (shape.type === 'map') {
        let map: {[key: string]: any} = {};;
        for (const key of Object.keys(obj)) {
            map[key] = removeSensitiveLogs(obj[key], shape.value);
        }
        return map;
    } else {
        return obj;
    }
}

export function removeSensitiveLogs(obj: any, member: Member): any {
    let safeObj: any;
    if (obj === undefined || obj === null) {
        safeObj = undefined
    }
    if (member.sensitive) {
        safeObj = '******';
    }
    return mapToShape(obj, member.shape);
}
