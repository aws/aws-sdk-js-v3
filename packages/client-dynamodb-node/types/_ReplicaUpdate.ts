import {_CreateReplicaAction, _UnmarshalledCreateReplicaAction} from './_CreateReplicaAction';
import {_DeleteReplicaAction, _UnmarshalledDeleteReplicaAction} from './_DeleteReplicaAction';

/**
 * <p>Represents one of the following:</p> <ul> <li> <p>A new replica to be added to an existing global table.</p> </li> <li> <p>New parameters for an existing replica.</p> </li> <li> <p>An existing replica to be removed from an existing global table.</p> </li> </ul>
 */
export interface _ReplicaUpdate {
    /**
     * <p>The parameters required for creating a replica on an existing global table.</p>
     */
    Create?: _CreateReplicaAction;

    /**
     * <p>The name of the existing replica to be removed.</p>
     */
    Delete?: _DeleteReplicaAction;
}

export interface _UnmarshalledReplicaUpdate extends _ReplicaUpdate {
    /**
     * <p>The parameters required for creating a replica on an existing global table.</p>
     */
    Create?: _UnmarshalledCreateReplicaAction;

    /**
     * <p>The name of the existing replica to be removed.</p>
     */
    Delete?: _UnmarshalledDeleteReplicaAction;
}