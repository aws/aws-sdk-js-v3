import { _UnmarshalledAccount } from "./_Account";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetAccountOutput shape
 */
export interface GetAccountOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The Amazon Chime account details.</p>
   */
  Account?: _UnmarshalledAccount;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
