/**
 * <p>Contains information about whether the resource's actual configuration differs, or has <i>drifted</i>, from its expected configuration.</p>
 */
export interface _StackResourceDriftInformation {
  /**
   * <p>Status of the resource's actual configuration compared to its expected configuration</p> <ul> <li> <p> <code>DELETED</code>: The resource differs from its expected configuration in that it has been deleted.</p> </li> <li> <p> <code>MODIFIED</code>: The resource differs from its expected configuration.</p> </li> <li> <p> <code>NOT_CHECKED</code>: AWS CloudFormation has not checked if the resource differs from its expected configuration.</p> <p>Any resources that do not currently support drift detection have a status of <code>NOT_CHECKED</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift-resource-list.html">Resources that Support Drift Detection</a>. </p> </li> <li> <p> <code>IN_SYNC</code>: The resources's actual configuration matches its expected configuration.</p> </li> </ul>
   */
  StackResourceDriftStatus:
    | "IN_SYNC"
    | "MODIFIED"
    | "DELETED"
    | "NOT_CHECKED"
    | string;

  /**
   * <p>When AWS CloudFormation last checked if the resource had drifted from its expected configuration.</p>
   */
  LastCheckTimestamp?: Date | string | number;
}

export interface _UnmarshalledStackResourceDriftInformation
  extends _StackResourceDriftInformation {
  /**
   * <p>When AWS CloudFormation last checked if the resource had drifted from its expected configuration.</p>
   */
  LastCheckTimestamp?: Date;
}
