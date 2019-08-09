import { _UnmarshalledCustomerGateway } from "./_CustomerGateway";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the output of CreateCustomerGateway.</p>
 */
export interface CreateCustomerGatewayOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the customer gateway.</p>
   */
  CustomerGateway?: _UnmarshalledCustomerGateway;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
