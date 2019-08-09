/**
 * <p>Information about a resource property whose actual value differs from its expected value, as defined in the stack template and any values specified as template parameters. These will be present only for resources whose <code>StackResourceDriftStatus</code> is <code>MODIFIED</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html">Detecting Unregulated Configuration Changes to Stacks and Resources</a>.</p>
 */
export interface _PropertyDifference {
  /**
   * <p>The fully-qualified path to the resource property.</p>
   */
  PropertyPath: string;

  /**
   * <p>The expected property value of the resource property, as defined in the stack template and any values specified as template parameters.</p>
   */
  ExpectedValue: string;

  /**
   * <p>The actual property value of the resource property.</p>
   */
  ActualValue: string;

  /**
   * <p>The type of property difference.</p> <ul> <li> <p> <code>ADD</code>: A value has been added to a resource property that is an array or list data type.</p> </li> <li> <p> <code>REMOVE</code>: The property has been removed from the current resource configuration.</p> </li> <li> <p> <code>NOT_EQUAL</code>: The current property value differs from its expected value (as defined in the stack template and any values specified as template parameters).</p> </li> </ul>
   */
  DifferenceType: "ADD" | "REMOVE" | "NOT_EQUAL" | string;
}

export type _UnmarshalledPropertyDifference = _PropertyDifference;
