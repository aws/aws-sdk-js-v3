import { _S3ObjectOwner, _UnmarshalledS3ObjectOwner } from "./_S3ObjectOwner";
import { _S3Grant, _UnmarshalledS3Grant } from "./_S3Grant";

/**
 * <p/>
 */
export interface _S3AccessControlList {
  /**
   * <p/>
   */
  Owner: _S3ObjectOwner;

  /**
   * <p/>
   */
  Grants?: Array<_S3Grant> | Iterable<_S3Grant>;
}

export interface _UnmarshalledS3AccessControlList extends _S3AccessControlList {
  /**
   * <p/>
   */
  Owner: _UnmarshalledS3ObjectOwner;

  /**
   * <p/>
   */
  Grants?: Array<_UnmarshalledS3Grant>;
}
