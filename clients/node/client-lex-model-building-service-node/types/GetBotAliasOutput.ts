import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetBotAliasOutput shape
 */
export interface GetBotAliasOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The name of the bot alias.</p>
   */
  name?: string;

  /**
   * <p>A description of the bot alias.</p>
   */
  description?: string;

  /**
   * <p>The version of the bot that the alias points to.</p>
   */
  botVersion?: string;

  /**
   * <p>The name of the bot that the alias points to.</p>
   */
  botName?: string;

  /**
   * <p>The date that the bot alias was updated. When you create a resource, the creation date and the last updated date are the same.</p>
   */
  lastUpdatedDate?: Date;

  /**
   * <p>The date that the bot alias was created.</p>
   */
  createdDate?: Date;

  /**
   * <p>Checksum of the bot alias.</p>
   */
  checksum?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
