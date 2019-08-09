import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateAddressOutput shape
 */
export interface CreateAddressOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The automatically generated ID for a specific address. You'll use this ID when you create a job to specify which address you want the Snowball for that job shipped to.</p>
   */
  AddressId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
