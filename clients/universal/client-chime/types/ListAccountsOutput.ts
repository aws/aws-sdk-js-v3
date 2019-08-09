import { _UnmarshalledAccount } from "./_Account";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListAccountsOutput shape
 */
export interface ListAccountsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>List of Amazon Chime accounts and account details.</p>
   */
  Accounts?: Array<_UnmarshalledAccount>;

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
