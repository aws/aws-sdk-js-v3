import { _UnmarshalledDefinitionInformation } from "./_DefinitionInformation";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListConnectorDefinitionsOutput shape
 */
export interface ListConnectorDefinitionsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * Information about a definition.
   */
  Definitions?: Array<_UnmarshalledDefinitionInformation>;

  /**
   * The token for the next set of results, or ''null'' if there are no additional results.
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
