import { describe, expect,it } from 'vitest';

import {AttributePath} from '../expressions';
import {Schema} from './Schema';
import {toSchemaName} from './toSchemaName';


const testCases = new Map<string, string>();
const schema: Schema = {
    unchanged: {type: 'String'},
    property: {
        type: 'String',
        attributeName: 'attributeName',
    },
    foo: {
        type: 'Document',
        attributeName: 'topLevelFoo',
        members: {
            foo: {
                type: 'String',
                attributeName: 'fizz',
            },
            bar: {
                type: 'String',
                attributeName: 'buzz',
            },
            baz: {
                type: 'String',
                attributeName: 'pop',
            }
        }
    },
    bar: {
        type: 'List',
        attributeName: 'topLevelBar',
        memberType: {
            type: 'Document',
            members: {
                tom: {
                    type: 'String',
                    attributeName: 'jerry'
                },
                bugs: {
                    type: 'String',
                    attributeName: 'daffy'
                },
                itchy: {
                    type: 'List',
                    attributeName: 'scratchy',
                    memberType: {
                        type: 'List',
                        memberType: {
                            type: 'Document',
                            members: {
                                nameToReplace: {
                                    type: 'String',
                                    attributeName: 'replacementName'
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    untypedHash: {
        type: 'Hash',
        attributeName: 'terminalType'
    }
};

testCases.set('unchanged', 'unchanged');
testCases.set('property', 'attributeName');
testCases.set('foo.foo', 'topLevelFoo.fizz');
testCases.set('foo.bar', 'topLevelFoo.buzz');
testCases.set('foo.baz', 'topLevelFoo.pop');
testCases.set('bar[11].tom', 'topLevelBar[11].jerry');
testCases.set('bar[21].bugs', 'topLevelBar[21].daffy');
testCases.set(
    'bar[1].itchy[23][2].nameToReplace',
    'topLevelBar[1].scratchy[23][2].replacementName'
);
testCases.set('untypedHash.foo.bar.baz', 'terminalType.foo.bar.baz');
testCases.set(
    'unknownProperty.access[1][2].baz',
    'unknownProperty.access[1][2].baz'
);

describe('toSchemaName', () => {
    for (const [input, output] of testCases) {
        it(`should convert a path of ${input} to ${output}`, () => {
            expect(toSchemaName(input, schema).elements)
                .toEqual(new AttributePath(output).elements);
        });
    }
});
