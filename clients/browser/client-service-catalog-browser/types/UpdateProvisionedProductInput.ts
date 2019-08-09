import { _UpdateProvisioningParameter } from "./_UpdateProvisioningParameter";
import { _UpdateProvisioningPreferences } from "./_UpdateProvisioningPreferences";
import { _Tag } from "./_Tag";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateProvisionedProductInput shape
 */
export interface UpdateProvisionedProductInput {
  /**
   * <p>The language code.</p> <ul> <li> <p> <code>en</code> - English (default)</p> </li> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>
   */
  AcceptLanguage?: string;

  /**
   * <p>The name of the provisioned product. You cannot specify both <code>ProvisionedProductName</code> and <code>ProvisionedProductId</code>.</p>
   */
  ProvisionedProductName?: string;

  /**
   * <p>The identifier of the provisioned product. You cannot specify both <code>ProvisionedProductName</code> and <code>ProvisionedProductId</code>.</p>
   */
  ProvisionedProductId?: string;

  /**
   * <p>The identifier of the product.</p>
   */
  ProductId?: string;

  /**
   * <p>The identifier of the provisioning artifact.</p>
   */
  ProvisioningArtifactId?: string;

  /**
   * <p>The new path identifier. This value is optional if the product has a default path, and required if the product has more than one path.</p>
   */
  PathId?: string;

  /**
   * <p>The new parameters.</p>
   */
  ProvisioningParameters?:
    | Array<_UpdateProvisioningParameter>
    | Iterable<_UpdateProvisioningParameter>;

  /**
   * <p>An object that contains information about the provisioning preferences for a stack set.</p>
   */
  ProvisioningPreferences?: _UpdateProvisioningPreferences;

  /**
   * <p>One or more tags. Requires the product to have <code>RESOURCE_UPDATE</code> constraint with <code>TagUpdatesOnProvisionedProduct</code> set to <code>ALLOWED</code> to allow tag updates.</p>
   */
  Tags?: Array<_Tag> | Iterable<_Tag>;

  /**
   * <p>The idempotency token that uniquely identifies the provisioning update request.</p>
   */
  UpdateToken: string;

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
