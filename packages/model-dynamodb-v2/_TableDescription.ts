import {_AttributeDefinition, _UnmarshalledAttributeDefinition} from './_AttributeDefinition';
import {_KeySchemaElement, _UnmarshalledKeySchemaElement} from './_KeySchemaElement';
import {_ProvisionedThroughputDescription, _UnmarshalledProvisionedThroughputDescription} from './_ProvisionedThroughputDescription';
import {_LocalSecondaryIndexDescription, _UnmarshalledLocalSecondaryIndexDescription} from './_LocalSecondaryIndexDescription';
import {_GlobalSecondaryIndexDescription, _UnmarshalledGlobalSecondaryIndexDescription} from './_GlobalSecondaryIndexDescription';
import {_StreamSpecification, _UnmarshalledStreamSpecification} from './_StreamSpecification';

/**
 * _TableDescription shape
 */
export interface _TableDescription {
    /**
     * _AttributeDefinitions shape
     */
    AttributeDefinitions?: Array<_AttributeDefinition>|Iterable<_AttributeDefinition>;
    
    /**
     * _TableName shape
     */
    TableName?: string;
    
    /**
     * _KeySchema shape
     */
    KeySchema?: Array<_KeySchemaElement>|Iterable<_KeySchemaElement>;
    
    /**
     * _TableStatus shape
     */
    TableStatus?: 'CREATING'|'UPDATING'|'DELETING'|'ACTIVE'|string;
    
    /**
     * _Date shape
     */
    CreationDateTime?: Date|string|number;
    
    /**
     * _ProvisionedThroughputDescription shape
     */
    ProvisionedThroughput?: _ProvisionedThroughputDescription;
    
    /**
     * _Long shape
     */
    TableSizeBytes?: number;
    
    /**
     * _Long shape
     */
    ItemCount?: number;
    
    /**
     * _String shape
     */
    TableArn?: string;
    
    /**
     * _LocalSecondaryIndexDescriptionList shape
     */
    LocalSecondaryIndexes?: Array<_LocalSecondaryIndexDescription>|Iterable<_LocalSecondaryIndexDescription>;
    
    /**
     * _GlobalSecondaryIndexDescriptionList shape
     */
    GlobalSecondaryIndexes?: Array<_GlobalSecondaryIndexDescription>|Iterable<_GlobalSecondaryIndexDescription>;
    
    /**
     * _StreamSpecification shape
     */
    StreamSpecification?: _StreamSpecification;
    
    /**
     * _String shape
     */
    LatestStreamLabel?: string;
    
    /**
     * _StreamArn shape
     */
    LatestStreamArn?: string;
}

export interface _UnmarshalledTableDescription extends _TableDescription {
    /**
     * _AttributeDefinitions shape
     */
    AttributeDefinitions?: Array<_UnmarshalledAttributeDefinition>;
    
    /**
     * _KeySchema shape
     */
    KeySchema?: Array<_UnmarshalledKeySchemaElement>;
    
    /**
     * _Date shape
     */
    CreationDateTime?: Date;
    
    /**
     * _ProvisionedThroughputDescription shape
     */
    ProvisionedThroughput?: _UnmarshalledProvisionedThroughputDescription;
    
    /**
     * _LocalSecondaryIndexDescriptionList shape
     */
    LocalSecondaryIndexes?: Array<_UnmarshalledLocalSecondaryIndexDescription>;
    
    /**
     * _GlobalSecondaryIndexDescriptionList shape
     */
    GlobalSecondaryIndexes?: Array<_UnmarshalledGlobalSecondaryIndexDescription>;
    
    /**
     * _StreamSpecification shape
     */
    StreamSpecification?: _UnmarshalledStreamSpecification;
}