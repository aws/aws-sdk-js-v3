import {_Replica, _UnmarshalledReplica} from './_Replica';

/**
 * <p>Represents the properties of a global table.</p>
 */
export interface _GlobalTable {
    /**
     * <p>The global table name.</p>
     */
    GlobalTableName?: string;

    /**
     * <p>The regions where the global table has replicas.</p>
     */
    ReplicationGroup?: Array<_Replica>|Iterable<_Replica>;
}

export interface _UnmarshalledGlobalTable extends _GlobalTable {
    /**
     * <p>The regions where the global table has replicas.</p>
     */
    ReplicationGroup?: Array<_UnmarshalledReplica>;
}