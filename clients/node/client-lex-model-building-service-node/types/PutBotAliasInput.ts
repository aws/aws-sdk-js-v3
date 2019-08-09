import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * PutBotAliasInput shape
 */
export interface PutBotAliasInput {
  /**
   * <p>The name of the alias. The name is <i>not</i> case sensitive.</p>
   */
  name: string;

  /**
   * <p>A description of the alias.</p>
   */
  description?: string;

  /**
   * <p>The version of the bot.</p>
   */
  botVersion: string;

  /**
   * <p>The name of the bot.</p>
   */
  botName: string;

  /**
   * <p>Identifies a specific revision of the <code>$LATEST</code> version.</p> <p>When you create a new bot alias, leave the <code>checksum</code> field blank. If you specify a checksum you get a <code>BadRequestException</code> exception.</p> <p>When you want to update a bot alias, set the <code>checksum</code> field to the checksum of the most recent revision of the <code>$LATEST</code> version. If you don't specify the <code> checksum</code> field, or if the checksum does not match the <code>$LATEST</code> version, you get a <code>PreconditionFailedException</code> exception.</p>
   */
  checksum?: string;

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}
