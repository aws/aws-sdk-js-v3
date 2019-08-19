import { _UnmarshalledProvisioningArtifactDetail } from "./_ProvisioningArtifactDetail";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateProvisioningArtifactOutput shape
 */
export interface CreateProvisioningArtifactOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the provisioning artifact.</p>
   */
  ProvisioningArtifactDetail?: _UnmarshalledProvisioningArtifactDetail;

  /**
   * <p>The URL of the CloudFormation template in Amazon S3, in JSON format.</p>
   */
  Info?: { [key: string]: string };

  /**
   * <p>The status of the current request.</p>
   */
  Status?: "AVAILABLE" | "CREATING" | "FAILED" | string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
