import { _UnmarshalledEntity } from "./_Entity";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DetectPHIOutput shape
 */
export interface DetectPHIOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p> The collection of PHI entities extracted from the input text and their associated information. For each entity, the response provides the entity text, the entity category, where the entity text begins and ends, and the level of confidence that Comprehend Medical has in its detection. </p>
   */
  Entities: Array<_UnmarshalledEntity>;

  /**
   * <p> If the result of the previous request to DetectPHI was truncated, include the Paginationtoken to fetch the next page of PHI entities. </p>
   */
  PaginationToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
