import {
  _ResourceChangeDetail,
  _UnmarshalledResourceChangeDetail
} from "./_ResourceChangeDetail";

/**
 * <p>Information about a resource change that will occur when a plan is executed.</p>
 */
export interface _ResourceChange {
  /**
   * <p>The change action.</p>
   */
  Action?: "ADD" | "MODIFY" | "REMOVE" | string;

  /**
   * <p>The ID of the resource, as defined in the CloudFormation template.</p>
   */
  LogicalResourceId?: string;

  /**
   * <p>The ID of the resource, if it was already created.</p>
   */
  PhysicalResourceId?: string;

  /**
   * <p>The type of resource.</p>
   */
  ResourceType?: string;

  /**
   * <p>If the change type is <code>Modify</code>, indicates whether the existing resource is deleted and replaced with a new one.</p>
   */
  Replacement?: "TRUE" | "FALSE" | "CONDITIONAL" | string;

  /**
   * <p>The change scope.</p>
   */
  Scope?:
    | Array<
        | "PROPERTIES"
        | "METADATA"
        | "CREATIONPOLICY"
        | "UPDATEPOLICY"
        | "DELETIONPOLICY"
        | "TAGS"
        | string
      >
    | Iterable<
        | "PROPERTIES"
        | "METADATA"
        | "CREATIONPOLICY"
        | "UPDATEPOLICY"
        | "DELETIONPOLICY"
        | "TAGS"
        | string
      >;

  /**
   * <p>Information about the resource changes.</p>
   */
  Details?: Array<_ResourceChangeDetail> | Iterable<_ResourceChangeDetail>;
}

export interface _UnmarshalledResourceChange extends _ResourceChange {
  /**
   * <p>The change scope.</p>
   */
  Scope?: Array<
    | "PROPERTIES"
    | "METADATA"
    | "CREATIONPOLICY"
    | "UPDATEPOLICY"
    | "DELETIONPOLICY"
    | "TAGS"
    | string
  >;

  /**
   * <p>Information about the resource changes.</p>
   */
  Details?: Array<_UnmarshalledResourceChangeDetail>;
}
