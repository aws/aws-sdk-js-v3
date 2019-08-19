/**
 * <p>A rollback trigger AWS CloudFormation monitors during creation and updating of stacks. If any of the alarms you specify goes to ALARM state during the stack operation or within the specified monitoring period afterwards, CloudFormation rolls back the entire stack operation. </p>
 */
export interface _RollbackTrigger {
  /**
   * <p>The Amazon Resource Name (ARN) of the rollback trigger.</p> <p>If a specified trigger is missing, the entire stack operation fails and is rolled back. </p>
   */
  Arn: string;

  /**
   * <p>The resource type of the rollback trigger. Currently, <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cw-alarm.html">AWS::CloudWatch::Alarm</a> is the only supported resource type.</p>
   */
  Type: string;
}

export type _UnmarshalledRollbackTrigger = _RollbackTrigger;
