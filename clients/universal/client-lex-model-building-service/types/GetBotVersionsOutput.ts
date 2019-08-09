import { _UnmarshalledBotMetadata } from "./_BotMetadata";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetBotVersionsOutput shape
 */
export interface GetBotVersionsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An array of <code>BotMetadata</code> objects, one for each numbered version of the bot plus one for the <code>$LATEST</code> version.</p>
   */
  bots?: Array<_UnmarshalledBotMetadata>;

  /**
   * <p>A pagination token for fetching the next page of bot versions. If the response to this call is truncated, Amazon Lex returns a pagination token in the response. To fetch the next page of versions, specify the pagination token in the next request. </p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
