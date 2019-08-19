import { _UnmarshalledProvisioningArtifactDetail } from "./_ProvisioningArtifactDetail";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListProvisioningArtifactsOutput shape
 */
export interface ListProvisioningArtifactsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the provisioning artifacts.</p>
   */
  ProvisioningArtifactDetails?: Array<_UnmarshalledProvisioningArtifactDetail>;

  /**
   * <p>The page token to use to retrieve the next set of results. If there are no additional results, this value is null.</p>
   */
  NextPageToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
