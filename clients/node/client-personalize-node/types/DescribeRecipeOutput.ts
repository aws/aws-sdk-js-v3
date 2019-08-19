import { _UnmarshalledRecipe } from "./_Recipe";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeRecipeOutput shape
 */
export interface DescribeRecipeOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An object that describes the recipe.</p>
   */
  recipe?: _UnmarshalledRecipe;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
