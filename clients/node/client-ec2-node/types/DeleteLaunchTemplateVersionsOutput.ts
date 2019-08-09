import { _UnmarshalledDeleteLaunchTemplateVersionsResponseSuccessItem } from "./_DeleteLaunchTemplateVersionsResponseSuccessItem";
import { _UnmarshalledDeleteLaunchTemplateVersionsResponseErrorItem } from "./_DeleteLaunchTemplateVersionsResponseErrorItem";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DeleteLaunchTemplateVersionsOutput shape
 */
export interface DeleteLaunchTemplateVersionsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the launch template versions that were successfully deleted.</p>
   */
  SuccessfullyDeletedLaunchTemplateVersions?: Array<
    _UnmarshalledDeleteLaunchTemplateVersionsResponseSuccessItem
  >;

  /**
   * <p>Information about the launch template versions that could not be deleted.</p>
   */
  UnsuccessfullyDeletedLaunchTemplateVersions?: Array<
    _UnmarshalledDeleteLaunchTemplateVersionsResponseErrorItem
  >;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
