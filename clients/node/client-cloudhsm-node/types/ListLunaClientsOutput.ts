import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListLunaClientsOutput shape
 */
export interface ListLunaClientsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The list of clients.</p>
   */
  ClientList: Array<string>;

  /**
   * <p>If not null, more results are available. Pass this to <code>ListLunaClients</code> to retrieve the next set of items.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
