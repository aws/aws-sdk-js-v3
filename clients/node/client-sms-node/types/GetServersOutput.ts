import { _UnmarshalledServer } from "./_Server";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetServersOutput shape
 */
export interface GetServersOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The time when the server was last modified.</p>
   */
  lastModifiedOn?: Date;

  /**
   * <p>The status of the server catalog.</p>
   */
  serverCatalogStatus?:
    | "NOT_IMPORTED"
    | "IMPORTING"
    | "AVAILABLE"
    | "DELETED"
    | "EXPIRED"
    | string;

  /**
   * <p>Information about the servers.</p>
   */
  serverList?: Array<_UnmarshalledServer>;

  /**
   * <p>The token required to retrieve the next set of results. This value is null when there are no more results to return.</p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
