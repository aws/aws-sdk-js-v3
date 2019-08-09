import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateIPSetInput shape
 */
export interface CreateIPSetInput {
  /**
   * <p>The unique ID of the detector of the GuardDuty account for which you want to create an IPSet.</p>
   */
  DetectorId: string;

  /**
   * <p>The user friendly name to identify the IPSet. This name is displayed in all findings that are triggered by activity that involves IP addresses included in this IPSet.</p>
   */
  Name: string;

  /**
   * <p>The format of the file that contains the IPSet.</p>
   */
  Format:
    | "TXT"
    | "STIX"
    | "OTX_CSV"
    | "ALIEN_VAULT"
    | "PROOF_POINT"
    | "FIRE_EYE"
    | string;

  /**
   * <p>The URI of the file that contains the IPSet. For example (https://s3.us-west-2.amazonaws.com/my-bucket/my-object-key)</p>
   */
  Location: string;

  /**
   * <p>A boolean value that indicates whether GuardDuty is to start using the uploaded IPSet.</p>
   */
  Activate: boolean;

  /**
   * <p>The idempotency token for the create request.</p>
   */
  ClientToken?: string;

  /**
   * <p>The tags to be added to a new IP set resource.</p>
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
