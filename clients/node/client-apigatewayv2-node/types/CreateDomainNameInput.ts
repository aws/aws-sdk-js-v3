import { _DomainNameConfiguration } from "./_DomainNameConfiguration";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateDomainNameInput shape
 */
export interface CreateDomainNameInput {
  /**
   * <p>The domain name.</p>
   */
  DomainName: string;

  /**
   * <p>The domain name configurations.</p>
   */
  DomainNameConfigurations?:
    | Array<_DomainNameConfiguration>
    | Iterable<_DomainNameConfiguration>;

  /**
   * <p>The key-value map of strings. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with aws:. The tag value can be up to 256 characters..</p>
   */
  Tags?: { [key: string]: string } | Iterable<[string, string]>;

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
