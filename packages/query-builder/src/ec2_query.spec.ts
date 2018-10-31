import {QueryBuilder} from "./";
import {Member, OperationModel} from "@aws-sdk/types";
import {minimalOperation} from './operations.fixtures'

describe('EC2 QueryBUilder (should pass general query tests first)', () => {
    const queryBody = new QueryBuilder(jest.fn(), jest.fn(), 'ec2');

    describe('Structure', () => {
        it('should serialize structure with both lowercased locationName or queryName', () => {
            const structure: Member = {
                shape: {
                    type: 'structure',
                    required: [],
                    members: {
                        Foo: {
                            shape: {type: 'string'}
                        },
                        Bar: {
                            shape: {type: 'string'},
                            locationName: 'barLocationName'
                        },
                        Yuck: {
                            shape: {type: 'string'},
                            locationName: 'yuckLocationName',
                            queryName: 'yuckQueryName'
                        }
                    }
                }
            }
            const operation: OperationModel = {
                ...minimalOperation,
                input: structure
            }
            const toSerialize = {Foo: 'val1', Bar: 'val2', Yuck: 'val3'};
            expect(queryBody.build({operation, input: toSerialize})).toEqual('BarLocationName=val2&Foo=val1&yuckQueryName=val3');
        });

        it('serialize nested structure members', () => {
            const structure: Member = {
                shape: {
                    type: 'structure',
                    required: [],
                    members: {
                        StructArg: {
                            shape: {
                                type: 'structure',
                                required: [],
                                members: {
                                    MemberArg: {
                                        shape: {
                                            type: 'string'
                                        },
                                        locationName: 'Scalar'
                                    }
                                }
                            },
                            locationName: 'Struct'                        
                        }
                    }
                }   
            }
            const operation: OperationModel = {
                ...minimalOperation,
                input: structure
            }
            const toSerialize = {StructArg: {MemberArg: 'Foo'}};
            expect(queryBody.build({operation, input: toSerialize})).toEqual('Struct.Scalar=Foo');
        });
    });

    describe('List', () => {
        it('should serialize non-flattened list as it\'s flattened', () => {
            const structure: Member = {
                shape: {
                    type: 'structure',
                    required: [],
                    members: {
                        ListArg: {
                            shape: {
                                type: 'list',
                                member: {shape: {type: 'string'}}
                            }
                        }
                    }
                }
            };
            const operation: OperationModel = {
                ...minimalOperation,
                input: structure
            }
            const toSerialize = {ListArg: ['mem1', 'mem2', 'mem3']};
            expect(queryBody.build({operation, input: toSerialize})).toEqual('ListArg.1=mem1&ListArg.2=mem2&ListArg.3=mem3');
        });

        it('should ignore the member locationName in a list', () => {
            const structure: Member = {
                shape: {
                    type: 'structure',
                    required: [],
                    members: {
                        ListArg: {
                            shape: {
                                type: 'list',
                                member: {
                                    shape: {type: 'string'},
                                    locationName: 'item'
                                }
                            }
                        }
                    }
                }
            };
            const operation: OperationModel = {
                ...minimalOperation,
                input: structure
            }
            const toSerialize = {ListArg: ['mem1', 'mem2', 'mem3']};
            expect(queryBody.build({operation, input: toSerialize})).toEqual('ListArg.1=mem1&ListArg.2=mem2&ListArg.3=mem3');
        });

        it('should serialize list with queryName', () => {
            const structure: Member = {
                shape: {
                    type: 'structure',
                    required: [],
                    members: {
                        ListArg: {
                            shape: {
                                type: 'list',
                                member: {shape: {type: 'string'}}
                            },
                            locationName: 'ListArgLocationName',
                            queryName: 'ListArgQueryName'
                        }
                    }
                }
            };
            const operation: OperationModel = {
                ...minimalOperation,
                input: structure
            }
            const toSerialize = {ListArg: ['mem1', 'mem2', 'mem3']};
            expect(queryBody.build({operation, input: toSerialize})).toEqual('ListArgQueryName.1=mem1&ListArgQueryName.2=mem2&ListArgQueryName.3=mem3');
        });
    });
});