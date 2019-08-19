import { _UnmarshalledBotAliasMetadata } from "./_BotAliasMetadata";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetBotAliasesOutput shape
 */
export interface GetBotAliasesOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An array of <code>BotAliasMetadata</code> objects, each describing a bot alias.</p>
   */
  BotAliases?: Array<_UnmarshalledBotAliasMetadata>;

  /**
   * <p>A pagination token for fetching next page of aliases. If the response to this call is truncated, Amazon Lex returns a pagination token in the response. To fetch the next page of aliases, specify the pagination token in the next request. </p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
