import { _UnmarshalledBotMetadata } from "./_BotMetadata";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetBotsOutput shape
 */
export interface GetBotsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An array of <code>botMetadata</code> objects, with one entry for each bot. </p>
   */
  bots?: Array<_UnmarshalledBotMetadata>;

  /**
   * <p>If the response is truncated, it includes a pagination token that you can specify in your next request to fetch the next page of bots. </p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
