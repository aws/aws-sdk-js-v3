import { _DevEndpointCustomLibraries } from "./_DevEndpointCustomLibraries";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateDevEndpointInput shape
 */
export interface UpdateDevEndpointInput {
  /**
   * <p>The name of the <code>DevEndpoint</code> to be updated.</p>
   */
  EndpointName: string;

  /**
   * <p>The public key for the <code>DevEndpoint</code> to use.</p>
   */
  PublicKey?: string;

  /**
   * <p>The list of public keys for the <code>DevEndpoint</code> to use.</p>
   */
  AddPublicKeys?: Array<string> | Iterable<string>;

  /**
   * <p>The list of public keys to be deleted from the <code>DevEndpoint</code>.</p>
   */
  DeletePublicKeys?: Array<string> | Iterable<string>;

  /**
   * <p>Custom Python or Java libraries to be loaded in the <code>DevEndpoint</code>.</p>
   */
  CustomLibraries?: _DevEndpointCustomLibraries;

  /**
   * <p> <code>True</code> if the list of custom libraries to be loaded in the development endpoint needs to be updated, or <code>False</code> if otherwise.</p>
   */
  UpdateEtlLibraries?: boolean;

  /**
   * <p>The list of argument keys to be deleted from the map of arguments used to configure the <code>DevEndpoint</code>.</p>
   */
  DeleteArguments?: Array<string> | Iterable<string>;

  /**
   * <p>The map of arguments to add the map of arguments used to configure the <code>DevEndpoint</code>.</p>
   */
  AddArguments?: { [key: string]: string } | Iterable<[string, string]>;

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
