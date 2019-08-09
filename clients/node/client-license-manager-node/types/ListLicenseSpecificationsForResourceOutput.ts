import { _UnmarshalledLicenseSpecification } from "./_LicenseSpecification";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListLicenseSpecificationsForResourceOutput shape
 */
export interface ListLicenseSpecificationsForResourceOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>License configurations associated with a resource.</p>
   */
  LicenseSpecifications?: Array<_UnmarshalledLicenseSpecification>;

  /**
   * <p>Token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
