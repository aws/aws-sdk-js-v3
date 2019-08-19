import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * EnablePolicyTypeInput shape
 */
export interface EnablePolicyTypeInput {
  /**
   * <p>The unique identifier (ID) of the root in which you want to enable a policy type. You can get the ID from the <a>ListRoots</a> operation.</p> <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for a root ID string requires "r-" followed by from 4 to 32 lower-case letters or digits.</p>
   */
  RootId: string;

  /**
   * <p>The policy type that you want to enable.</p>
   */
  PolicyType: "SERVICE_CONTROL_POLICY" | string;

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
