import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CopyProductInput shape
 */
export interface CopyProductInput {
  /**
   * <p>The language code.</p> <ul> <li> <p> <code>en</code> - English (default)</p> </li> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>
   */
  AcceptLanguage?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the source product.</p>
   */
  SourceProductArn: string;

  /**
   * <p>The identifier of the target product. By default, a new product is created.</p>
   */
  TargetProductId?: string;

  /**
   * <p>A name for the target product. The default is the name of the source product.</p>
   */
  TargetProductName?: string;

  /**
   * <p>The identifiers of the provisioning artifacts (also known as versions) of the product to copy. By default, all provisioning artifacts are copied.</p>
   */
  SourceProvisioningArtifactIdentifiers?:
    | Array<
        { [key in "Id" | string]: string } | Iterable<["Id" | string, string]>
      >
    | Iterable<
        { [key in "Id" | string]: string } | Iterable<["Id" | string, string]>
      >;

  /**
   * <p>The copy options. If the value is <code>CopyTags</code>, the tags from the source product are copied to the target product.</p>
   */
  CopyOptions?: Array<"CopyTags" | string> | Iterable<"CopyTags" | string>;

  /**
   * <p> A unique identifier that you provide to ensure idempotency. If multiple requests differ only by the idempotency token, the same response is returned for each repeated request. </p>
   */
  IdempotencyToken: string;

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
