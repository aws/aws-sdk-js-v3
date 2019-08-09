import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateProvisioningArtifactInput shape
 */
export interface UpdateProvisioningArtifactInput {
  /**
   * <p>The language code.</p> <ul> <li> <p> <code>en</code> - English (default)</p> </li> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>
   */
  AcceptLanguage?: string;

  /**
   * <p>The product identifier.</p>
   */
  ProductId: string;

  /**
   * <p>The identifier of the provisioning artifact.</p>
   */
  ProvisioningArtifactId: string;

  /**
   * <p>The updated name of the provisioning artifact.</p>
   */
  Name?: string;

  /**
   * <p>The updated description of the provisioning artifact.</p>
   */
  Description?: string;

  /**
   * <p>Indicates whether the product version is active.</p>
   */
  Active?: boolean;

  /**
   * <p>Information set by the administrator to provide guidance to end users about which provisioning artifacts to use.</p> <p>The <code>DEFAULT</code> value indicates that the product version is active.</p> <p>The administrator can set the guidance to <code>DEPRECATED</code> to inform users that the product version is deprecated. Users are able to make updates to a provisioned product of a deprecated version but cannot launch new provisioned products using a deprecated version.</p>
   */
  Guidance?: "DEFAULT" | "DEPRECATED" | string;

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
