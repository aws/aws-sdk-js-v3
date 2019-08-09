import { _UnmarshalledInternetGateway } from "./_InternetGateway";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateInternetGatewayOutput shape
 */
export interface CreateInternetGatewayOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the internet gateway.</p>
   */
  InternetGateway?: _UnmarshalledInternetGateway;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
