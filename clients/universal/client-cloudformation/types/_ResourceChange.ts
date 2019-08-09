import {
  _ResourceChangeDetail,
  _UnmarshalledResourceChangeDetail
} from "./_ResourceChangeDetail";

/**
 * <p>The <code>ResourceChange</code> structure describes the resource and the action that AWS CloudFormation will perform on it if you execute this change set.</p>
 */
export interface _ResourceChange {
  /**
   * <p>The action that AWS CloudFormation takes on the resource, such as <code>Add</code> (adds a new resource), <code>Modify</code> (changes a resource), or <code>Remove</code> (deletes a resource).</p>
   */
  Action?: "Add" | "Modify" | "Remove" | string;

  /**
   * <p>The resource's logical ID, which is defined in the stack's template.</p>
   */
  LogicalResourceId?: string;

  /**
   * <p>The resource's physical ID (resource name). Resources that you are adding don't have physical IDs because they haven't been created.</p>
   */
  PhysicalResourceId?: string;

  /**
   * <p>The type of AWS CloudFormation resource, such as <code>AWS::S3::Bucket</code>.</p>
   */
  ResourceType?: string;

  /**
   * <p>For the <code>Modify</code> action, indicates whether AWS CloudFormation will replace the resource by creating a new one and deleting the old one. This value depends on the value of the <code>RequiresRecreation</code> property in the <code>ResourceTargetDefinition</code> structure. For example, if the <code>RequiresRecreation</code> field is <code>Always</code> and the <code>Evaluation</code> field is <code>Static</code>, <code>Replacement</code> is <code>True</code>. If the <code>RequiresRecreation</code> field is <code>Always</code> and the <code>Evaluation</code> field is <code>Dynamic</code>, <code>Replacement</code> is <code>Conditionally</code>.</p> <p>If you have multiple changes with different <code>RequiresRecreation</code> values, the <code>Replacement</code> value depends on the change with the most impact. A <code>RequiresRecreation</code> value of <code>Always</code> has the most impact, followed by <code>Conditionally</code>, and then <code>Never</code>.</p>
   */
  Replacement?: "True" | "False" | "Conditional" | string;

  /**
   * <p>For the <code>Modify</code> action, indicates which resource attribute is triggering this update, such as a change in the resource attribute's <code>Metadata</code>, <code>Properties</code>, or <code>Tags</code>.</p>
   */
  Scope?:
    | Array<
        | "Properties"
        | "Metadata"
        | "CreationPolicy"
        | "UpdatePolicy"
        | "DeletionPolicy"
        | "Tags"
        | string
      >
    | Iterable<
        | "Properties"
        | "Metadata"
        | "CreationPolicy"
        | "UpdatePolicy"
        | "DeletionPolicy"
        | "Tags"
        | string
      >;

  /**
   * <p>For the <code>Modify</code> action, a list of <code>ResourceChangeDetail</code> structures that describes the changes that AWS CloudFormation will make to the resource. </p>
   */
  Details?: Array<_ResourceChangeDetail> | Iterable<_ResourceChangeDetail>;
}

export interface _UnmarshalledResourceChange extends _ResourceChange {
  /**
   * <p>For the <code>Modify</code> action, indicates which resource attribute is triggering this update, such as a change in the resource attribute's <code>Metadata</code>, <code>Properties</code>, or <code>Tags</code>.</p>
   */
  Scope?: Array<
    | "Properties"
    | "Metadata"
    | "CreationPolicy"
    | "UpdatePolicy"
    | "DeletionPolicy"
    | "Tags"
    | string
  >;

  /**
   * <p>For the <code>Modify</code> action, a list of <code>ResourceChangeDetail</code> structures that describes the changes that AWS CloudFormation will make to the resource. </p>
   */
  Details?: Array<_UnmarshalledResourceChangeDetail>;
}
