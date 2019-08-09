import { _UnmarshalledMaster } from "./_Master";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetMasterAccountOutput shape
 */
export interface GetMasterAccountOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Master account details.</p>
   */
  Master: _UnmarshalledMaster;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
