import { _UnmarshalledExclusionPreview } from "./_ExclusionPreview";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetExclusionsPreviewOutput shape
 */
export interface GetExclusionsPreviewOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Specifies the status of the request to generate an exclusions preview.</p>
   */
  previewStatus: "WORK_IN_PROGRESS" | "COMPLETED" | string;

  /**
   * <p>Information about the exclusions included in the preview.</p>
   */
  exclusionPreviews?: Array<_UnmarshalledExclusionPreview>;

  /**
   * <p>When a response is generated, if there is more data to be listed, this parameters is present in the response and contains the value to use for the nextToken parameter in a subsequent pagination request. If there is no more data to be listed, this parameter is set to null.</p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
