import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateConfigurationInput shape
 */
export interface CreateConfigurationInput {
  /**
   *
   *             <p>The description of the configuration.</p>
   *
   */
  Description?: string;

  /**
   *
   *             <p>The versions of Apache Kafka with which you can use this MSK configuration.</p>
   *
   */
  KafkaVersions: Array<string> | Iterable<string>;

  /**
   *
   *             <p>The name of the configuration.</p>
   *
   */
  Name: string;

  /**
   *
   *             <p>Contents of the <filename>server.properties</filename> file. When using the API, you must ensure that the contents of the file are base64 encoded.
   *                When using the AWS Management Console, the SDK, or the AWS CLI, the contents of <filename>server.properties</filename> can be in plaintext.</p>
   *
   */
  ServerProperties: ArrayBuffer | ArrayBufferView | string;

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
