import { _UnmarshalledDocumentClassificationJobProperties } from "./_DocumentClassificationJobProperties";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListDocumentClassificationJobsOutput shape
 */
export interface ListDocumentClassificationJobsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list containing the properties of each job returned.</p>
   */
  DocumentClassificationJobPropertiesList?: Array<
    _UnmarshalledDocumentClassificationJobProperties
  >;

  /**
   * <p>Identifies the next page of results to return.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
