import { _UnmarshalledLifecyclePolicyPreviewResult } from "./_LifecyclePolicyPreviewResult";
import { _UnmarshalledLifecyclePolicyPreviewSummary } from "./_LifecyclePolicyPreviewSummary";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetLifecyclePolicyPreviewOutput shape
 */
export interface GetLifecyclePolicyPreviewOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The registry ID associated with the request.</p>
   */
  registryId?: string;

  /**
   * <p>The repository name associated with the request.</p>
   */
  repositoryName?: string;

  /**
   * <p>The JSON lifecycle policy text.</p>
   */
  lifecyclePolicyText?: string;

  /**
   * <p>The status of the lifecycle policy preview request.</p>
   */
  status?: "IN_PROGRESS" | "COMPLETE" | "EXPIRED" | "FAILED" | string;

  /**
   * <p>The <code>nextToken</code> value to include in a future <code>GetLifecyclePolicyPreview</code> request. When the results of a <code>GetLifecyclePolicyPreview</code> request exceed <code>maxResults</code>, this value can be used to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  nextToken?: string;

  /**
   * <p>The results of the lifecycle policy preview request.</p>
   */
  previewResults?: Array<_UnmarshalledLifecyclePolicyPreviewResult>;

  /**
   * <p>The list of images that is returned as a result of the action.</p>
   */
  summary?: _UnmarshalledLifecyclePolicyPreviewSummary;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
