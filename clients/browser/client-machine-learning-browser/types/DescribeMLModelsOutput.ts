import { _UnmarshalledMLModel } from "./_MLModel";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the output of a <code>DescribeMLModels</code> operation. The content is essentially a list of <code>MLModel</code>.</p>
 */
export interface DescribeMLModelsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of <code>MLModel</code> that meet the search criteria.</p>
   */
  Results?: Array<_UnmarshalledMLModel>;

  /**
   * <p>The ID of the next page in the paginated results that indicates at least one more page follows.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
