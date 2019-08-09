import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateConstraintInput shape
 */
export interface CreateConstraintInput {
  /**
   * <p>The language code.</p> <ul> <li> <p> <code>en</code> - English (default)</p> </li> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>
   */
  AcceptLanguage?: string;

  /**
   * <p>The portfolio identifier.</p>
   */
  PortfolioId: string;

  /**
   * <p>The product identifier.</p>
   */
  ProductId: string;

  /**
   * <p>The constraint parameters, in JSON format. The syntax depends on the constraint type as follows:</p> <dl> <dt>LAUNCH</dt> <dd> <p>Specify the <code>RoleArn</code> property as follows:</p> <p> <code>{"RoleArn" : "arn:aws:iam::123456789012:role/LaunchRole"}</code> </p> <p>You cannot have both a <code>LAUNCH</code> and a <code>STACKSET</code> constraint.</p> <p>You also cannot have more than one <code>LAUNCH</code> constraint on a product and portfolio.</p> </dd> <dt>NOTIFICATION</dt> <dd> <p>Specify the <code>NotificationArns</code> property as follows:</p> <p> <code>{"NotificationArns" : ["arn:aws:sns:us-east-1:123456789012:Topic"]}</code> </p> </dd> <dt>RESOURCE_UPDATE</dt> <dd> <p>Specify the <code>TagUpdatesOnProvisionedProduct</code> property as follows:</p> <p> <code>{"Version":"2.0","Properties":{"TagUpdateOnProvisionedProduct":"String"}}</code> </p> <p>The <code>TagUpdatesOnProvisionedProduct</code> property accepts a string value of <code>ALLOWED</code> or <code>NOT_ALLOWED</code>.</p> </dd> <dt>STACKSET</dt> <dd> <p>Specify the <code>Parameters</code> property as follows:</p> <p> <code>{"Version": "String", "Properties": {"AccountList": [ "String" ], "RegionList": [ "String" ], "AdminRole": "String", "ExecutionRole": "String"}}</code> </p> <p>You cannot have both a <code>LAUNCH</code> and a <code>STACKSET</code> constraint.</p> <p>You also cannot have more than one <code>STACKSET</code> constraint on a product and portfolio.</p> <p>Products with a <code>STACKSET</code> constraint will launch an AWS CloudFormation stack set.</p> </dd> <dt>TEMPLATE</dt> <dd> <p>Specify the <code>Rules</code> property. For more information, see <a href="http://docs.aws.amazon.com/servicecatalog/latest/adminguide/reference-template_constraint_rules.html">Template Constraint Rules</a>.</p> </dd> </dl>
   */
  Parameters: string;

  /**
   * <p>The type of constraint.</p> <ul> <li> <p> <code>LAUNCH</code> </p> </li> <li> <p> <code>NOTIFICATION</code> </p> </li> <li> <p> <code>RESOURCE_UPDATE</code> </p> </li> <li> <p> <code>STACKSET</code> </p> </li> <li> <p> <code>TEMPLATE</code> </p> </li> </ul>
   */
  Type: string;

  /**
   * <p>The description of the constraint.</p>
   */
  Description?: string;

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
