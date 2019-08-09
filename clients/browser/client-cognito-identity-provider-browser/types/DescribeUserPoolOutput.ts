import { _UnmarshalledUserPoolType } from "./_UserPoolType";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the response to describe the user pool.</p>
 */
export interface DescribeUserPoolOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The container of metadata returned by the server to describe the pool.</p>
   */
  UserPool?: _UnmarshalledUserPoolType;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
