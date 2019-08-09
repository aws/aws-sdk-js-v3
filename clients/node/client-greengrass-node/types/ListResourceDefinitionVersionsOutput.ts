import { _UnmarshalledVersionInformation } from "./_VersionInformation";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListResourceDefinitionVersionsOutput shape
 */
export interface ListResourceDefinitionVersionsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;

  /**
   * Information about a version.
   */
  Versions?: Array<_UnmarshalledVersionInformation>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
