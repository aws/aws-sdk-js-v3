import { _S3Grantee, _UnmarshalledS3Grantee } from "./_S3Grantee";

/**
 * <p/>
 */
export interface _S3Grant {
  /**
   * <p/>
   */
  Grantee?: _S3Grantee;

  /**
   * <p/>
   */
  Permission?:
    | "FULL_CONTROL"
    | "READ"
    | "WRITE"
    | "READ_ACP"
    | "WRITE_ACP"
    | string;
}

export interface _UnmarshalledS3Grant extends _S3Grant {
  /**
   * <p/>
   */
  Grantee?: _UnmarshalledS3Grantee;
}
