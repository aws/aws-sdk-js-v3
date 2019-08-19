import { _UnmarshalledRecipeSummary } from "./_RecipeSummary";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListRecipesOutput shape
 */
export interface ListRecipesOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The list of available recipes.</p>
   */
  recipes?: Array<_UnmarshalledRecipeSummary>;

  /**
   * <p>A token for getting the next set of recipes.</p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
