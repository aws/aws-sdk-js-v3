import { _UnmarshalledThingDocument } from "./_ThingDocument";
import { _UnmarshalledThingGroupDocument } from "./_ThingGroupDocument";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * SearchIndexOutput shape
 */
export interface SearchIndexOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The token used to get the next set of results, or null if there are no additional results.</p>
   */
  nextToken?: string;

  /**
   * <p>The things that match the search query.</p>
   */
  things?: Array<_UnmarshalledThingDocument>;

  /**
   * <p>The thing groups that match the search query.</p>
   */
  thingGroups?: Array<_UnmarshalledThingGroupDocument>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
