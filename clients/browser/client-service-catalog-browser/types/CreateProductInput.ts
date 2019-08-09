import { _Tag } from "./_Tag";
import { _ProvisioningArtifactProperties } from "./_ProvisioningArtifactProperties";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateProductInput shape
 */
export interface CreateProductInput {
  /**
   * <p>The language code.</p> <ul> <li> <p> <code>en</code> - English (default)</p> </li> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>
   */
  AcceptLanguage?: string;

  /**
   * <p>The name of the product.</p>
   */
  Name: string;

  /**
   * <p>The owner of the product.</p>
   */
  Owner: string;

  /**
   * <p>The description of the product.</p>
   */
  Description?: string;

  /**
   * <p>The distributor of the product.</p>
   */
  Distributor?: string;

  /**
   * <p>The support information about the product.</p>
   */
  SupportDescription?: string;

  /**
   * <p>The contact email for product support.</p>
   */
  SupportEmail?: string;

  /**
   * <p>The contact URL for product support.</p>
   */
  SupportUrl?: string;

  /**
   * <p>The type of product.</p>
   */
  ProductType: "CLOUD_FORMATION_TEMPLATE" | "MARKETPLACE" | string;

  /**
   * <p>One or more tags.</p>
   */
  Tags?: Array<_Tag> | Iterable<_Tag>;

  /**
   * <p>The configuration of the provisioning artifact.</p>
   */
  ProvisioningArtifactParameters: _ProvisioningArtifactProperties;

  /**
   * <p>A unique identifier that you provide to ensure idempotency. If multiple requests differ only by the idempotency token, the same response is returned for each repeated request.</p>
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
