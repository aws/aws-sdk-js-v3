import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>A request to associate a configuration set with a dedicated IP pool.</p>
 */
export interface PutConfigurationSetDeliveryOptionsInput {
  /**
   * <p>The name of the configuration set that you want to associate with a dedicated IP pool.</p>
   */
  ConfigurationSetName: string;

  /**
   * <p>Whether Amazon Pinpoint should require that incoming email is delivered over a connection encrypted with Transport Layer Security (TLS).</p>
   */
  TlsPolicy?: "REQUIRE" | "OPTIONAL" | string;

  /**
   * <p>The name of the dedicated IP pool that you want to associate with the configuration set.</p>
   */
  SendingPoolName?: string;

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
