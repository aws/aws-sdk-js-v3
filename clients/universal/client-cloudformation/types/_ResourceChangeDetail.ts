import {
  _ResourceTargetDefinition,
  _UnmarshalledResourceTargetDefinition
} from "./_ResourceTargetDefinition";

/**
 * <p>For a resource with <code>Modify</code> as the action, the <code>ResourceChange</code> structure describes the changes AWS CloudFormation will make to that resource.</p>
 */
export interface _ResourceChangeDetail {
  /**
   * <p>A <code>ResourceTargetDefinition</code> structure that describes the field that AWS CloudFormation will change and whether the resource will be recreated.</p>
   */
  Target?: _ResourceTargetDefinition;

  /**
   * <p>Indicates whether AWS CloudFormation can determine the target value, and whether the target value will change before you execute a change set.</p> <p>For <code>Static</code> evaluations, AWS CloudFormation can determine that the target value will change, and its value. For example, if you directly modify the <code>InstanceType</code> property of an EC2 instance, AWS CloudFormation knows that this property value will change, and its value, so this is a <code>Static</code> evaluation.</p> <p>For <code>Dynamic</code> evaluations, cannot determine the target value because it depends on the result of an intrinsic function, such as a <code>Ref</code> or <code>Fn::GetAtt</code> intrinsic function, when the stack is updated. For example, if your template includes a reference to a resource that is conditionally recreated, the value of the reference (the physical ID of the resource) might change, depending on if the resource is recreated. If the resource is recreated, it will have a new physical ID, so all references to that resource will also be updated.</p>
   */
  Evaluation?: "Static" | "Dynamic" | string;

  /**
   * <p>The group to which the <code>CausingEntity</code> value belongs. There are five entity groups:</p> <ul> <li> <p> <code>ResourceReference</code> entities are <code>Ref</code> intrinsic functions that refer to resources in the template, such as <code>{ "Ref" : "MyEC2InstanceResource" }</code>.</p> </li> <li> <p> <code>ParameterReference</code> entities are <code>Ref</code> intrinsic functions that get template parameter values, such as <code>{ "Ref" : "MyPasswordParameter" }</code>.</p> </li> <li> <p> <code>ResourceAttribute</code> entities are <code>Fn::GetAtt</code> intrinsic functions that get resource attribute values, such as <code>{ "Fn::GetAtt" : [ "MyEC2InstanceResource", "PublicDnsName" ] }</code>.</p> </li> <li> <p> <code>DirectModification</code> entities are changes that are made directly to the template.</p> </li> <li> <p> <code>Automatic</code> entities are <code>AWS::CloudFormation::Stack</code> resource types, which are also known as nested stacks. If you made no changes to the <code>AWS::CloudFormation::Stack</code> resource, AWS CloudFormation sets the <code>ChangeSource</code> to <code>Automatic</code> because the nested stack's template might have changed. Changes to a nested stack's template aren't visible to AWS CloudFormation until you run an update on the parent stack.</p> </li> </ul>
   */
  ChangeSource?:
    | "ResourceReference"
    | "ParameterReference"
    | "ResourceAttribute"
    | "DirectModification"
    | "Automatic"
    | string;

  /**
   * <p>The identity of the entity that triggered this change. This entity is a member of the group that is specified by the <code>ChangeSource</code> field. For example, if you modified the value of the <code>KeyPairName</code> parameter, the <code>CausingEntity</code> is the name of the parameter (<code>KeyPairName</code>).</p> <p>If the <code>ChangeSource</code> value is <code>DirectModification</code>, no value is given for <code>CausingEntity</code>.</p>
   */
  CausingEntity?: string;
}

export interface _UnmarshalledResourceChangeDetail
  extends _ResourceChangeDetail {
  /**
   * <p>A <code>ResourceTargetDefinition</code> structure that describes the field that AWS CloudFormation will change and whether the resource will be recreated.</p>
   */
  Target?: _UnmarshalledResourceTargetDefinition;
}
