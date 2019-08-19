import { _Parameter } from "./_Parameter";
import { _StackSetOperationPreferences } from "./_StackSetOperationPreferences";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateStackInstancesInput shape
 */
export interface CreateStackInstancesInput {
  /**
   * <p>The name or unique ID of the stack set that you want to create stack instances from.</p>
   */
  StackSetName: string;

  /**
   * <p>The names of one or more AWS accounts that you want to create stack instances in the specified region(s) for.</p>
   */
  Accounts: Array<string> | Iterable<string>;

  /**
   * <p>The names of one or more regions where you want to create stack instances using the specified AWS account(s). </p>
   */
  Regions: Array<string> | Iterable<string>;

  /**
   * <p>A list of stack set parameters whose values you want to override in the selected stack instances.</p> <p>Any overridden parameter values will be applied to all stack instances in the specified accounts and regions. When specifying parameters and their values, be aware of how AWS CloudFormation sets parameter values during stack instance operations:</p> <ul> <li> <p>To override the current value for a parameter, include the parameter and specify its value.</p> </li> <li> <p>To leave a parameter set to its present value, you can do one of the following:</p> <ul> <li> <p>Do not include the parameter in the list.</p> </li> <li> <p>Include the parameter and specify <code>UsePreviousValue</code> as <code>true</code>. (You cannot specify both a value and set <code>UsePreviousValue</code> to <code>true</code>.)</p> </li> </ul> </li> <li> <p>To set all overridden parameter back to the values specified in the stack set, specify a parameter list but do not include any parameters.</p> </li> <li> <p>To leave all parameters set to their present values, do not specify this property at all.</p> </li> </ul> <p>During stack set updates, any parameter values overridden for a stack instance are not updated, but retain their overridden value.</p> <p>You can only override the parameter <i>values</i> that are specified in the stack set; to add or delete a parameter itself, use <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_UpdateStackSet.html">UpdateStackSet</a> to update the stack set template.</p>
   */
  ParameterOverrides?: Array<_Parameter> | Iterable<_Parameter>;

  /**
   * <p>Preferences for how AWS CloudFormation performs this stack set operation.</p>
   */
  OperationPreferences?: _StackSetOperationPreferences;

  /**
   * <p>The unique identifier for this stack set operation. </p> <p>The operation ID also functions as an idempotency token, to ensure that AWS CloudFormation performs the stack set operation only once, even if you retry the request multiple times. You might retry stack set operation requests to ensure that AWS CloudFormation successfully received them.</p> <p>If you don't specify an operation ID, the SDK generates one automatically. </p> <p>Repeating this stack set operation with a new operation ID retries all stack instances whose status is <code>OUTDATED</code>. </p>
   */
  OperationId?: string;

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
