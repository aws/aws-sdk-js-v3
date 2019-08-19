/**
 * <p>Contains information about whether the stack's actual configuration differs, or has <i>drifted</i>, from its expected configuration, as defined in the stack template and any values specified as template parameters. A stack is considered to have drifted if one or more of its resources have drifted.</p>
 */
export interface _StackDriftInformation {
  /**
   * <p>Status of the stack's actual configuration compared to its expected template configuration. </p> <ul> <li> <p> <code>DRIFTED</code>: The stack differs from its expected template configuration. A stack is considered to have drifted if one or more of its resources have drifted.</p> </li> <li> <p> <code>NOT_CHECKED</code>: AWS CloudFormation has not checked if the stack differs from its expected template configuration.</p> </li> <li> <p> <code>IN_SYNC</code>: The stack's actual configuration matches its expected template configuration.</p> </li> <li> <p> <code>UNKNOWN</code>: This value is reserved for future use.</p> </li> </ul>
   */
  StackDriftStatus: "DRIFTED" | "IN_SYNC" | "UNKNOWN" | "NOT_CHECKED" | string;

  /**
   * <p>Most recent time when a drift detection operation was initiated on the stack, or any of its individual resources that support drift detection.</p>
   */
  LastCheckTimestamp?: Date | string | number;
}

export interface _UnmarshalledStackDriftInformation
  extends _StackDriftInformation {
  /**
   * <p>Most recent time when a drift detection operation was initiated on the stack, or any of its individual resources that support drift detection.</p>
   */
  LastCheckTimestamp?: Date;
}
