import {_PutRequest, _UnmarshalledPutRequest} from './_PutRequest';
import {_DeleteRequest, _UnmarshalledDeleteRequest} from './_DeleteRequest';

/**
 * <p>Represents an operation to perform - either <code>DeleteItem</code> or <code>PutItem</code>. You can only request one of these operations, not both, in a single <code>WriteRequest</code>. If you do need to perform both of these operations, you will need to provide two separate <code>WriteRequest</code> objects.</p>
 */
export interface _WriteRequest {
    /**
     * <p>A request to perform a <code>PutItem</code> operation.</p>
     */
    PutRequest?: _PutRequest;

    /**
     * <p>A request to perform a <code>DeleteItem</code> operation.</p>
     */
    DeleteRequest?: _DeleteRequest;
}

export interface _UnmarshalledWriteRequest extends _WriteRequest {
    /**
     * <p>A request to perform a <code>PutItem</code> operation.</p>
     */
    PutRequest?: _UnmarshalledPutRequest;

    /**
     * <p>A request to perform a <code>DeleteItem</code> operation.</p>
     */
    DeleteRequest?: _UnmarshalledDeleteRequest;
}