import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateServiceActionInput shape
 */
export interface CreateServiceActionInput {
  /**
   * <p>The self-service action name.</p>
   */
  Name: string;

  /**
   * <p>The service action definition type. For example, <code>SSM_AUTOMATION</code>.</p>
   */
  DefinitionType: "SSM_AUTOMATION" | string;

  /**
   * <p>The self-service action definition. Can be one of the following:</p> <dl> <dt>Name</dt> <dd> <p>The name of the AWS Systems Manager Document. For example, <code>AWS-RestartEC2Instance</code>.</p> </dd> <dt>Version</dt> <dd> <p>The AWS Systems Manager automation document version. For example, <code>"Version": "1"</code> </p> </dd> <dt>AssumeRole</dt> <dd> <p>The Amazon Resource Name (ARN) of the role that performs the self-service actions on your behalf. For example, <code>"AssumeRole": "arn:aws:iam::12345678910:role/ActionRole"</code>.</p> <p>To reuse the provisioned product launch role, set to <code>"AssumeRole": "LAUNCH_ROLE"</code>.</p> </dd> <dt>Parameters</dt> <dd> <p>The list of parameters in JSON format.</p> <p>For example: <code>[{\"Name\":\"InstanceId\",\"Type\":\"TARGET\"}]</code>.</p> </dd> </dl>
   */
  Definition:
    | {
        [key in
          | "Name"
          | "Version"
          | "AssumeRole"
          | "Parameters"
          | string]: string
      }
    | Iterable<
        ["Name" | "Version" | "AssumeRole" | "Parameters" | string, string]
      >;

  /**
   * <p>The self-service action description.</p>
   */
  Description?: string;

  /**
   * <p>The language code.</p> <ul> <li> <p> <code>en</code> - English (default)</p> </li> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>
   */
  AcceptLanguage?: string;

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
