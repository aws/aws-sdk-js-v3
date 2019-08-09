import { _UnmarshalledJobTemplate } from "./_JobTemplate";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListJobTemplatesOutput shape
 */
export interface ListJobTemplatesOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * List of Job templates.
   */
  JobTemplates?: Array<_UnmarshalledJobTemplate>;

  /**
   * Use this string to request the next batch of job templates.
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
