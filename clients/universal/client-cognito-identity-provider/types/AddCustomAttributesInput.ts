import { _SchemaAttributeType } from "./_SchemaAttributeType";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the request to add custom attributes.</p>
 */
export interface AddCustomAttributesInput {
  /**
   * <p>The user pool ID for the user pool where you want to add custom attributes.</p>
   */
  UserPoolId: string;

  /**
   * <p>An array of custom attributes, such as Mutable and Name.</p>
   */
  CustomAttributes:
    | Array<_SchemaAttributeType>
    | Iterable<_SchemaAttributeType>;

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
