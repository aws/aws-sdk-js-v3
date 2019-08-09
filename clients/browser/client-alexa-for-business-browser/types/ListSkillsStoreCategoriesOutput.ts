import { _UnmarshalledCategory } from "./_Category";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListSkillsStoreCategoriesOutput shape
 */
export interface ListSkillsStoreCategoriesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The list of categories.</p>
   */
  CategoryList?: Array<_UnmarshalledCategory>;

  /**
   * <p>The tokens used for pagination.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
