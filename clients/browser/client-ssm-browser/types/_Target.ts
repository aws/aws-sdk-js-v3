/**
 * <p>An array of search criteria that targets instances using a Key,Value combination that you specify. </p> <p>Supported formats include the following.</p> <ul> <li> <p> <code>Key=InstanceIds,Values=<i>instance-id-1</i>,<i>instance-id-2</i>,<i>instance-id-3</i> </code> </p> </li> <li> <p> <code>Key=tag:<i>my-tag-key</i>,Values=<i>my-tag-value-1</i>,<i>my-tag-value-2</i> </code> </p> </li> <li> <p> <code>Key=tag-key,Values=<i>my-tag-key-1</i>,<i>my-tag-key-2</i> </code> </p> </li> <li> <p>(Maintenance window targets only) <code>Key=resource-groups:Name,Values=<i>resource-group-name</i> </code> </p> </li> <li> <p>(Maintenance window targets only) <code>Key=resource-groups:ResourceTypeFilters,Values=<i>resource-type-1</i>,<i>resource-type-2</i> </code> </p> </li> </ul> <p>For example:</p> <ul> <li> <p> <code>Key=InstanceIds,Values=i-02573cafcfEXAMPLE,i-0471e04240EXAMPLE,i-07782c72faEXAMPLE</code> </p> </li> <li> <p> <code>Key=tag:CostCenter,Values=CostCenter1,CostCenter2,CostCenter3</code> </p> </li> <li> <p> <code>Key=tag-key,Values=Name,Instance-Type,CostCenter</code> </p> </li> <li> <p>(Maintenance window targets only) <code>Key=resource-groups:Name,Values=ProductionResourceGroup</code> </p> </li> <li> <p>(Maintenance window targets only) <code>Key=resource-groups:ResourceTypeFilters,Values=<i>AWS::EC2::INSTANCE</i>,<i>AWS::EC2::VPC</i> </code> </p> </li> </ul> <p>For information about how to send commands that target instances using <code>Key,Value</code> parameters, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/send-commands-multiple.html#send-commands-targeting">Using Targets and Rate Controls to Send Commands to a Fleet</a> in the <i>AWS Systems Manager User Guide</i>.</p>
 */
export interface _Target {
  /**
   * <p>User-defined criteria for sending commands that target instances that meet the criteria.</p>
   */
  Key?: string;

  /**
   * <p>User-defined criteria that maps to <code>Key</code>. For example, if you specified <code>tag:ServerRole</code>, you could specify <code>value:WebServer</code> to run a command on instances that include Amazon EC2 tags of <code>ServerRole,WebServer</code>. </p>
   */
  Values?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledTarget extends _Target {
  /**
   * <p>User-defined criteria that maps to <code>Key</code>. For example, if you specified <code>tag:ServerRole</code>, you could specify <code>value:WebServer</code> to run a command on instances that include Amazon EC2 tags of <code>ServerRole,WebServer</code>. </p>
   */
  Values?: Array<string>;
}
