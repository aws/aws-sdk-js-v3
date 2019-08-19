import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * AssociateAddressOutput shape
 */
export interface AssociateAddressOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>[EC2-VPC] The ID that represents the association of the Elastic IP address with an instance.</p>
   */
  AssociationId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
