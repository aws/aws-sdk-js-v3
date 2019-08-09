import { _UnmarshalledQualificationType } from "./_QualificationType";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListQualificationTypesOutput shape
 */
export interface ListQualificationTypesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p> The number of Qualification types on this page in the filtered results list, equivalent to the number of types this operation returns. </p>
   */
  NumResults?: number;

  /**
   * <p>If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk returns a pagination token in the response. You can use this pagination token to retrieve the next set of results. </p>
   */
  NextToken?: string;

  /**
   * <p> The list of QualificationType elements returned by the query. </p>
   */
  QualificationTypes?: Array<_UnmarshalledQualificationType>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
