import { _UnmarshalledRelationalDatabaseBundle } from "./_RelationalDatabaseBundle";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetRelationalDatabaseBundlesOutput shape
 */
export interface GetRelationalDatabaseBundlesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An object describing the result of your get relational database bundles request.</p>
   */
  bundles?: Array<_UnmarshalledRelationalDatabaseBundle>;

  /**
   * <p>A token used for advancing to the next page of results of your get relational database bundles request.</p>
   */
  nextPageToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
