import {_PutRequest, _UnmarshalledPutRequest} from './_PutRequest';
import {_DeleteRequest, _UnmarshalledDeleteRequest} from './_DeleteRequest';

/**
 * _WriteRequest shape
 */
export interface _WriteRequest {
    /**
     * _PutRequest shape
     */
    PutRequest?: _PutRequest;
    
    /**
     * _DeleteRequest shape
     */
    DeleteRequest?: _DeleteRequest;
}

export interface _UnmarshalledWriteRequest extends _WriteRequest {
    /**
     * _PutRequest shape
     */
    PutRequest?: _UnmarshalledPutRequest;
    
    /**
     * _DeleteRequest shape
     */
    DeleteRequest?: _UnmarshalledDeleteRequest;
}