import { _Attribute } from "./_Attribute";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the inputs for the <a>CreateComputer</a> operation.</p>
 */
export interface CreateComputerInput {
  /**
   * <p>The identifier of the directory in which to create the computer account.</p>
   */
  DirectoryId: string;

  /**
   * <p>The name of the computer account.</p>
   */
  ComputerName: string;

  /**
   * <p>A one-time password that is used to join the computer to the directory. You should generate a random, strong password to use for this parameter.</p>
   */
  Password: string;

  /**
   * <p>The fully-qualified distinguished name of the organizational unit to place the computer account in.</p>
   */
  OrganizationalUnitDistinguishedName?: string;

  /**
   * <p>An array of <a>Attribute</a> objects that contain any LDAP attributes to apply to the computer account.</p>
   */
  ComputerAttributes?: Array<_Attribute> | Iterable<_Attribute>;

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
