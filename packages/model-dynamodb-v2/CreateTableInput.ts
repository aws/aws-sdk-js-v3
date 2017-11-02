import {_AttributeDefinition} from './_AttributeDefinition';
import {_KeySchemaElement} from './_KeySchemaElement';
import {_LocalSecondaryIndex} from './_LocalSecondaryIndex';
import {_GlobalSecondaryIndex} from './_GlobalSecondaryIndex';
import {_ProvisionedThroughput} from './_ProvisionedThroughput';
import {_StreamSpecification} from './_StreamSpecification';

/**
 * CreateTableInput shape
 */
export interface CreateTableInput {
    /**
     * _AttributeDefinitions shape
     */
    AttributeDefinitions: Array<_AttributeDefinition>|Iterable<_AttributeDefinition>;
    
    /**
     * _TableName shape
     */
    TableName: string;
    
    /**
     * _KeySchema shape
     */
    KeySchema: Array<_KeySchemaElement>|Iterable<_KeySchemaElement>;
    
    /**
     * _LocalSecondaryIndexList shape
     */
    LocalSecondaryIndexes?: Array<_LocalSecondaryIndex>|Iterable<_LocalSecondaryIndex>;
    
    /**
     * _GlobalSecondaryIndexList shape
     */
    GlobalSecondaryIndexes?: Array<_GlobalSecondaryIndex>|Iterable<_GlobalSecondaryIndex>;
    
    /**
     * _ProvisionedThroughput shape
     */
    ProvisionedThroughput: _ProvisionedThroughput;
    
    /**
     * _StreamSpecification shape
     */
    StreamSpecification?: _StreamSpecification;
}