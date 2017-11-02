import {_AttributeDefinition} from './_AttributeDefinition';
import {_ProvisionedThroughput} from './_ProvisionedThroughput';
import {_GlobalSecondaryIndexUpdate} from './_GlobalSecondaryIndexUpdate';
import {_StreamSpecification} from './_StreamSpecification';

/**
 * UpdateTableInput shape
 */
export interface UpdateTableInput {
    /**
     * _AttributeDefinitions shape
     */
    AttributeDefinitions?: Array<_AttributeDefinition>|Iterable<_AttributeDefinition>;
    
    /**
     * _TableName shape
     */
    TableName: string;
    
    /**
     * _ProvisionedThroughput shape
     */
    ProvisionedThroughput?: _ProvisionedThroughput;
    
    /**
     * _GlobalSecondaryIndexUpdateList shape
     */
    GlobalSecondaryIndexUpdates?: Array<_GlobalSecondaryIndexUpdate>|Iterable<_GlobalSecondaryIndexUpdate>;
    
    /**
     * _StreamSpecification shape
     */
    StreamSpecification?: _StreamSpecification;
}