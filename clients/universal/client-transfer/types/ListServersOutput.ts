import { _UnmarshalledListedServer } from "./_ListedServer";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListServersOutput shape
 */
export interface ListServersOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>When you can get additional results from the <code>ListServers</code> operation, a <code>NextToken</code> parameter is returned in the output. In a following command, you can pass in the <code>NextToken</code> parameter to continue listing additional servers.</p>
   */
  NextToken?: string;

  /**
   * <p>An array of servers that were listed.</p>
   */
  Servers: Array<_UnmarshalledListedServer>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
