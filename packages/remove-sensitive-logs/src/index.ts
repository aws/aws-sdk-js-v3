import {
    Member,
    SerializationModel
} from '@aws-sdk/types';

function mapObjToShape(obj: any, shape: SerializationModel): any {
    if (shape.sensitive) {
        return '<**-redacted-**>'
    }
    if (shape.type === 'structure') {
        let structure: {[key: string]: any} = {};
        for (const key of Object.keys(obj)) {
            if (obj[key] === null || obj[key] === undefined || !(key in shape.members)) {
                continue;
            }
            const value = obj[key];
            const member = shape.members[key];
            structure[key] = mapObjToMember(value, member);
        }
        return structure;
    } else if (shape.type === 'list') {
        let list = [];
        const isSensitive = shape.member.sensitive;
        for (const value of obj) {
            list.push(mapObjToMember(value, shape.member));
        }
        return list;
    } else if (shape.type === 'map') {
        let map: {[key: string]: any} = {};;
        for (const key of Object.keys(obj)) {
            map[key] = mapObjToMember(obj[key], shape.value);
        }
        return map;
    } else {
        return obj;
    }
}

function mapObjToMember(obj: any, member: Member): any {
    if (obj === undefined || obj === null) {
        return undefined
    }
    if (member.sensitive) {
        return '<**-redacted-**>';
    }
    return mapObjToShape(obj, member.shape);
}
 
export function removeSensitiveLogs (obj: any, member: Member): string {
    return JSON.stringify(mapObjToMember(obj, member));
}
