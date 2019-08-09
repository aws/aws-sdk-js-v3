import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateResourceInput shape
 */
export interface CreateResourceInput {
  /**
   * <p>The identifier associated with the organization for which the resource is created.</p>
   */
  OrganizationId: string;

  /**
   * <p>The name of the new resource.</p>
   */
  Name: string;

  /**
   * <p>The type of the new resource. The available types are <code>equipment</code> and <code>room</code>.</p>
   */
  Type: "ROOM" | "EQUIPMENT" | string;

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
