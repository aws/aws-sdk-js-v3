import { _UnmarshalledLicenseConfigurationAssociation } from "./_LicenseConfigurationAssociation";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListAssociationsForLicenseConfigurationOutput shape
 */
export interface ListAssociationsForLicenseConfigurationOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Lists association objects for the license configuration, each containing the association time, number of consumed licenses, resource ARN, resource ID, account ID that owns the resource, resource size, and resource type.</p>
   */
  LicenseConfigurationAssociations?: Array<
    _UnmarshalledLicenseConfigurationAssociation
  >;

  /**
   * <p>Token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
