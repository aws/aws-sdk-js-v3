import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateTypeInput shape
 */
export interface CreateTypeInput {
  /**
   * <p>The API ID.</p>
   */
  apiId: string;

  /**
   * <p>The type definition, in GraphQL Schema Definition Language (SDL) format.</p> <p>For more information, see the <a href="http://graphql.org/learn/schema/">GraphQL SDL documentation</a>.</p>
   */
  definition: string;

  /**
   * <p>The type format: SDL or JSON.</p>
   */
  format: "SDL" | "JSON" | string;

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
