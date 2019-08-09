import { _UnmarshalledProvisioningArtifactView } from "./_ProvisioningArtifactView";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListProvisioningArtifactsForServiceActionOutput shape
 */
export interface ListProvisioningArtifactsForServiceActionOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An array of objects with information about product views and provisioning artifacts.</p>
   */
  ProvisioningArtifactViews?: Array<_UnmarshalledProvisioningArtifactView>;

  /**
   * <p>The page token to use to retrieve the next set of results. If there are no additional results, this value is null.</p>
   */
  NextPageToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
