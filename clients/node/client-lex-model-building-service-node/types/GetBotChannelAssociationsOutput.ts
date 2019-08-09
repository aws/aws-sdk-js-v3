import { _UnmarshalledBotChannelAssociation } from "./_BotChannelAssociation";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetBotChannelAssociationsOutput shape
 */
export interface GetBotChannelAssociationsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An array of objects, one for each association, that provides information about the Amazon Lex bot and its association with the channel. </p>
   */
  botChannelAssociations?: Array<_UnmarshalledBotChannelAssociation>;

  /**
   * <p>A pagination token that fetches the next page of associations. If the response to this call is truncated, Amazon Lex returns a pagination token in the response. To fetch the next page of associations, specify the pagination token in the next request. </p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
