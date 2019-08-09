import { _Scope, _UnmarshalledScope } from "./_Scope";
import { _Source, _UnmarshalledSource } from "./_Source";

/**
 * <p>An AWS Config rule represents an AWS Lambda function that you create for a custom rule or a predefined function for an AWS managed rule. The function evaluates configuration items to assess whether your AWS resources comply with your desired configurations. This function can run when AWS Config detects a configuration change to an AWS resource and at a periodic frequency that you choose (for example, every 24 hours).</p> <note> <p>You can use the AWS CLI and AWS SDKs if you want to create a rule that triggers evaluations for your resources when AWS Config delivers the configuration snapshot. For more information, see <a>ConfigSnapshotDeliveryProperties</a>.</p> </note> <p>For more information about developing and using AWS Config rules, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config.html">Evaluating AWS Resource Configurations with AWS Config</a> in the <i>AWS Config Developer Guide</i>.</p>
 */
export interface _ConfigRule {
  /**
   * <p>The name that you assign to the AWS Config rule. The name is required if you are adding a new rule.</p>
   */
  ConfigRuleName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Config rule.</p>
   */
  ConfigRuleArn?: string;

  /**
   * <p>The ID of the AWS Config rule.</p>
   */
  ConfigRuleId?: string;

  /**
   * <p>The description that you provide for the AWS Config rule.</p>
   */
  Description?: string;

  /**
   * <p>Defines which resources can trigger an evaluation for the rule. The scope can include one or more resource types, a combination of one resource type and one resource ID, or a combination of a tag key and value. Specify a scope to constrain the resources that can trigger an evaluation for the rule. If you do not specify a scope, evaluations are triggered when any resource in the recording group changes.</p>
   */
  Scope?: _Scope;

  /**
   * <p>Provides the rule owner (AWS or customer), the rule identifier, and the notifications that cause the function to evaluate your AWS resources.</p>
   */
  Source: _Source;

  /**
   * <p>A string, in JSON format, that is passed to the AWS Config rule Lambda function.</p>
   */
  InputParameters?: string;

  /**
   * <p>The maximum frequency with which AWS Config runs evaluations for a rule. You can specify a value for <code>MaximumExecutionFrequency</code> when:</p> <ul> <li> <p>You are using an AWS managed rule that is triggered at a periodic frequency.</p> </li> <li> <p>Your custom rule is triggered when AWS Config delivers the configuration snapshot. For more information, see <a>ConfigSnapshotDeliveryProperties</a>.</p> </li> </ul> <note> <p>By default, rules with a periodic trigger are evaluated every 24 hours. To change the frequency, specify a valid value for the <code>MaximumExecutionFrequency</code> parameter.</p> </note>
   */
  MaximumExecutionFrequency?:
    | "One_Hour"
    | "Three_Hours"
    | "Six_Hours"
    | "Twelve_Hours"
    | "TwentyFour_Hours"
    | string;

  /**
   * <p>Indicates whether the AWS Config rule is active or is currently being deleted by AWS Config. It can also indicate the evaluation status for the AWS Config rule.</p> <p>AWS Config sets the state of the rule to <code>EVALUATING</code> temporarily after you use the <code>StartConfigRulesEvaluation</code> request to evaluate your resources against the AWS Config rule.</p> <p>AWS Config sets the state of the rule to <code>DELETING_RESULTS</code> temporarily after you use the <code>DeleteEvaluationResults</code> request to delete the current evaluation results for the AWS Config rule.</p> <p>AWS Config temporarily sets the state of a rule to <code>DELETING</code> after you use the <code>DeleteConfigRule</code> request to delete the rule. After AWS Config deletes the rule, the rule and all of its evaluations are erased and are no longer available.</p>
   */
  ConfigRuleState?:
    | "ACTIVE"
    | "DELETING"
    | "DELETING_RESULTS"
    | "EVALUATING"
    | string;

  /**
   * <p>Service principal name of the service that created the rule.</p> <note> <p>The field is populated only if the service linked rule is created by a service. The field is empty if you create your own rule.</p> </note>
   */
  CreatedBy?: string;
}

export interface _UnmarshalledConfigRule extends _ConfigRule {
  /**
   * <p>Defines which resources can trigger an evaluation for the rule. The scope can include one or more resource types, a combination of one resource type and one resource ID, or a combination of a tag key and value. Specify a scope to constrain the resources that can trigger an evaluation for the rule. If you do not specify a scope, evaluations are triggered when any resource in the recording group changes.</p>
   */
  Scope?: _UnmarshalledScope;

  /**
   * <p>Provides the rule owner (AWS or customer), the rule identifier, and the notifications that cause the function to evaluate your AWS resources.</p>
   */
  Source: _UnmarshalledSource;
}
