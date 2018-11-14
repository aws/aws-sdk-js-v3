import {_ReplicaDescription, _UnmarshalledReplicaDescription} from './_ReplicaDescription';

/**
 * <p>Contains details about the global table.</p>
 */
export interface _GlobalTableDescription {
    /**
     * <p>The regions where the global table has replicas.</p>
     */
    ReplicationGroup?: Array<_ReplicaDescription>|Iterable<_ReplicaDescription>;

    /**
     * <p>The unique identifier of the global table.</p>
     */
    GlobalTableArn?: string;

    /**
     * <p>The creation time of the global table.</p>
     */
    CreationDateTime?: Date|string|number;

    /**
     * <p>The current state of the global table:</p> <ul> <li> <p> <code>CREATING</code> - The global table is being created.</p> </li> <li> <p> <code>UPDATING</code> - The global table is being updated.</p> </li> <li> <p> <code>DELETING</code> - The global table is being deleted.</p> </li> <li> <p> <code>ACTIVE</code> - The global table is ready for use.</p> </li> </ul>
     */
    GlobalTableStatus?: 'CREATING'|'ACTIVE'|'DELETING'|'UPDATING'|string;

    /**
     * <p>The global table name.</p>
     */
    GlobalTableName?: string;
}

export interface _UnmarshalledGlobalTableDescription extends _GlobalTableDescription {
    /**
     * <p>The regions where the global table has replicas.</p>
     */
    ReplicationGroup?: Array<_UnmarshalledReplicaDescription>;

    /**
     * <p>The creation time of the global table.</p>
     */
    CreationDateTime?: Date;
}