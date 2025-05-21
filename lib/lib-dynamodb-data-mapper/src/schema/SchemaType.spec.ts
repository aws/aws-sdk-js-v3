import { describe, expect,it } from 'vitest';

import {Schema} from "./Schema";
import {isSchemaType} from "./SchemaType";


describe('isSchemaType', () => {
    it('should reject scalar values', () => {
        for (const scalar of ['string', 123, true, null, void 0]) {
            expect(isSchemaType(scalar)).toBe(false);
        }
    });

    it('should accept values with a string `attributeName` property', () => {
        expect(isSchemaType({
            type: 'Boolean',
            attributeName: 'boolProp'
        })).toBe(true);
    });

    it('should reject values with a non-string `attributeName` property', () => {
        expect(isSchemaType({
            type: 'Boolean',
            attributeName: 123
        })).toBe(false);
    });

    describe('keyable types', () => {
        for (const dataType of ['Binary', 'Date', 'Number', 'String']) {
            it(
                `should accept ${dataType} type declarations with a keyType`,
                () => {
                    expect(isSchemaType({
                        type: dataType,
                        keyType: 'HASH',
                    })).toBe(true);
                }
            );

            it(
                `should reject ${dataType} type declarations with an unrecognized keyType`,
                () => {
                    expect(isSchemaType({
                        type: dataType,
                        keyType: 'foo',
                    })).toBe(false);
                }
            );

            it(
                `should accept ${dataType} type declarations with a hash of indexKeyConfigurations`,
                () => {
                    expect(isSchemaType({
                        type: dataType,
                        indexKeyConfigurations: {foo: 'HASH'},
                    })).toBe(true);
                }
            );

            it(
                `should reject ${dataType} type declarations with a hash of invalid indexKeyConfigurations`,
                () => {
                    expect(isSchemaType({
                        type: dataType,
                        indexKeyConfigurations: {foo: 'bar', fizz: 'buzz'},
                    })).toBe(false);
                }
            );

            it(
                `should reject ${dataType} type declarations with scalar indexKeyConfiguration`,
                () => {
                    for (const scalar of ['string', 123, null, true]) {
                        expect(isSchemaType({
                            type: dataType,
                            indexKeyConfigurations: scalar,
                        })).toBe(false);
                    }
                }
            );
        }
    });

    describe('Any types', () => {
        it('should accept Any types', () => {
            expect(isSchemaType({type: 'Any'})).toBe(true);
        });
    });

    describe('Binary types', () => {
        it('should accept Binary types', () => {
            expect(isSchemaType({type: 'Binary'})).toBe(true);
        });
    });

    describe('Boolean types', () => {
        it('should accept Boolean types', () => {
            expect(isSchemaType({type: 'Boolean'})).toBe(true);
        });
    });

    describe('Custom types', () => {
        it(
            'should accept Custom types with a defined marshaller and unmarshaller',
            () => {
                expect(isSchemaType({
                    type: 'Custom',
                    marshall: () => {},
                    unmarshall: () => {},
                })).toBe(true);
            }
        );

        it('should reject Custom types without a defined marshaller', () => {
            expect(isSchemaType({
                type: 'Custom',
                unmarshall: () => {},
            })).toBe(false);
        });

        it('should reject Custom types without a defined unmarshaller', () => {
            expect(isSchemaType({
                type: 'Custom',
                marshall: () => {},
            })).toBe(false);
        });
    });

    describe('Date types', () => {
        it('should accept Date types', () => {
            expect(isSchemaType({type: 'Date'})).toBe(true);
        });
    });

    describe('Document types', () => {
        it('should accept Document types', () => {
            expect(isSchemaType({
                type: 'Document',
                members: {
                    str: {type: 'String'}
                },
            })).toBe(true);
        });

        it('should reject Document types with non-SchemaType members', () => {
            expect(isSchemaType({
                type: 'Document',
                members: {
                    foo: 'bar',
                },
            })).toBe(false);
        });

        it('should reject Document types without declared members', () => {
            expect(isSchemaType({
                type: 'Document'
            })).toBe(false);
        });

        it('should accept Document types with a valueConstructor', () => {
            expect(isSchemaType({
                type: 'Document',
                members: {},
                valueConstructor: Date,
            })).toBe(true);
        });

        it(
            'should reject Document types with a non-function valueConstructor',
            () => {
                expect(isSchemaType({
                    type: 'Document',
                    members: {},
                    valueConstructor: 'foo',
                })).toBe(false);
            }
        );
    });

    describe('List types', () => {
        it('should accept List types', () => {
            expect(isSchemaType({
                type: 'List',
                memberType: {type: 'Boolean'},
            })).toBe(true);
        });

        it('should reject List types without a defined memberType', () => {
            expect(isSchemaType({type: 'List'})).toBe(false);
        });

        it('should reject List types with malformed memberTypes', () => {
            expect(isSchemaType({
                type: 'List',
                memberType: 'Boolean',
            })).toBe(false);
        });
    });

    describe('Map types', () => {
        it('should accept Map types', () => {
            expect(isSchemaType({
                type: 'Map',
                memberType: {type: 'Boolean'},
            })).toBe(true);
        });

        it('should reject Map types without a defined memberType', () => {
            expect(isSchemaType({type: 'Map'})).toBe(false);
        });

        it('should reject Map types with malformed memberTypes', () => {
            expect(isSchemaType({
                type: 'Map',
                memberType: 'Boolean',
            })).toBe(false);
        });
    });

    describe('Null types', () => {
        it('should accept Null types', () => {
            expect(isSchemaType({type: 'Null'})).toBe(true);
        });
    });

    describe('Number types', () => {
        it('should accept Number types', () => {
            expect(isSchemaType({type: 'Number'})).toBe(true);
        });
    });

    describe('Set types', () => {
        it('should accept StringSet types', () => {
            expect(isSchemaType({type: 'Set', memberType: 'String'}))
                .toBe(true);
        });

        it('should accept NumberSet types', () => {
            expect(isSchemaType({type: 'Set', memberType: 'Number'}))
                .toBe(true);
        });

        it('should accept BinarySet types', () => {
            expect(isSchemaType({type: 'Set', memberType: 'Binary'}))
                .toBe(true);
        });
    });

    describe('String types', () => {
        it('should accept String types', () => {
            expect(isSchemaType({type: 'String'})).toBe(true);
        });
    });

    describe('Tuple types', () => {
        it('should accept Tuple types', () => {
            expect(isSchemaType({
                type: 'Tuple',
                members: [{type: 'Boolean'}, {type: 'String'}],
            })).toBe(true);
        });

        it('should reject Tuple types without defined members', () => {
            expect(isSchemaType({type: 'Tuple'})).toBe(false);
        });

        it('should reject Tuple types with malformed members', () => {
            expect(isSchemaType({
                type: 'Tuple',
                members: ['Boolean', 'String'],
            })).toBe(false);
        });
    });

    describe('recursive schemas', () => {
        it('should accept valid recursive schemas', () => {
            const document: Schema = {};
            document.recursive = {
                type: "Document",
                members: document,
            };

            expect(isSchemaType(document.recursive)).toBe(true);
        });
    });
});
