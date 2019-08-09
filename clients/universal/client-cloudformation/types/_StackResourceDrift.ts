import {
  _PhysicalResourceIdContextKeyValuePair,
  _UnmarshalledPhysicalResourceIdContextKeyValuePair
} from "./_PhysicalResourceIdContextKeyValuePair";
import {
  _PropertyDifference,
  _UnmarshalledPropertyDifference
} from "./_PropertyDifference";

/**
 * <p>Contains the drift information for a resource that has been checked for drift. This includes actual and expected property values for resources in which AWS CloudFormation has detected drift. Only resource properties explicitly defined in the stack template are checked for drift. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html">Detecting Unregulated Configuration Changes to Stacks and Resources</a>.</p> <p>Resources that do not currently support drift detection cannot be checked. For a list of resources that support drift detection, see <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift-resource-list.html">Resources that Support Drift Detection</a>.</p> <p>Use <a>DetectStackResourceDrift</a> to detect drift on individual resources, or <a>DetectStackDrift</a> to detect drift on all resources in a given stack that support drift detection.</p>
 */
export interface _StackResourceDrift {
  /**
   * <p>The ID of the stack.</p>
   */
  StackId: string;

  /**
   * <p>The logical name of the resource specified in the template.</p>
   */
  LogicalResourceId: string;

  /**
   * <p>The name or unique identifier that corresponds to a physical instance ID of a resource supported by AWS CloudFormation. </p>
   */
  PhysicalResourceId?: string;

  /**
   * <p>Context information that enables AWS CloudFormation to uniquely identify a resource. AWS CloudFormation uses context key-value pairs in cases where a resource's logical and physical IDs are not enough to uniquely identify that resource. Each context key-value pair specifies a unique resource that contains the targeted resource.</p>
   */
  PhysicalResourceIdContext?:
    | Array<_PhysicalResourceIdContextKeyValuePair>
    | Iterable<_PhysicalResourceIdContextKeyValuePair>;

  /**
   * <p>The type of the resource.</p>
   */
  ResourceType: string;

  /**
   * <p>A JSON structure containing the expected property values of the stack resource, as defined in the stack template and any values specified as template parameters. </p> <p>For resources whose <code>StackResourceDriftStatus</code> is <code>DELETED</code>, this structure will not be present. </p>
   */
  ExpectedProperties?: string;

  /**
   * <p>A JSON structure containing the actual property values of the stack resource.</p> <p>For resources whose <code>StackResourceDriftStatus</code> is <code>DELETED</code>, this structure will not be present. </p>
   */
  ActualProperties?: string;

  /**
   * <p>A collection of the resource properties whose actual values differ from their expected values. These will be present only for resources whose <code>StackResourceDriftStatus</code> is <code>MODIFIED</code>. </p>
   */
  PropertyDifferences?:
    | Array<_PropertyDifference>
    | Iterable<_PropertyDifference>;

  /**
   * <p>Status of the resource's actual configuration compared to its expected configuration</p> <ul> <li> <p> <code>DELETED</code>: The resource differs from its expected template configuration because the resource has been deleted.</p> </li> <li> <p> <code>MODIFIED</code>: One or more resource properties differ from their expected values (as defined in the stack template and any values specified as template parameters).</p> </li> <li> <p> <code>IN_SYNC</code>: The resources's actual configuration matches its expected template configuration.</p> </li> <li> <p> <code>NOT_CHECKED</code>: AWS CloudFormation does not currently return this value.</p> </li> </ul>
   */
  StackResourceDriftStatus:
    | "IN_SYNC"
    | "MODIFIED"
    | "DELETED"
    | "NOT_CHECKED"
    | string;

  /**
   * <p>Time at which AWS CloudFormation performed drift detection on the stack resource.</p>
   */
  Timestamp: Date | string | number;
}

export interface _UnmarshalledStackResourceDrift extends _StackResourceDrift {
  /**
   * <p>Context information that enables AWS CloudFormation to uniquely identify a resource. AWS CloudFormation uses context key-value pairs in cases where a resource's logical and physical IDs are not enough to uniquely identify that resource. Each context key-value pair specifies a unique resource that contains the targeted resource.</p>
   */
  PhysicalResourceIdContext?: Array<
    _UnmarshalledPhysicalResourceIdContextKeyValuePair
  >;

  /**
   * <p>A collection of the resource properties whose actual values differ from their expected values. These will be present only for resources whose <code>StackResourceDriftStatus</code> is <code>MODIFIED</code>. </p>
   */
  PropertyDifferences?: Array<_UnmarshalledPropertyDifference>;

  /**
   * <p>Time at which AWS CloudFormation performed drift detection on the stack resource.</p>
   */
  Timestamp: Date;
}
