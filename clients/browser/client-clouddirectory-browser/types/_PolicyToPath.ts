import {
  _PolicyAttachment,
  _UnmarshalledPolicyAttachment
} from "./_PolicyAttachment";

/**
 * <p>Used when a regular object exists in a <a>Directory</a> and you want to find all of the policies that are associated with that object and the parent to that object.</p>
 */
export interface _PolicyToPath {
  /**
   * <p>The path that is referenced from the root.</p>
   */
  Path?: string;

  /**
   * <p>List of policy objects.</p>
   */
  Policies?: Array<_PolicyAttachment> | Iterable<_PolicyAttachment>;
}

export interface _UnmarshalledPolicyToPath extends _PolicyToPath {
  /**
   * <p>List of policy objects.</p>
   */
  Policies?: Array<_UnmarshalledPolicyAttachment>;
}
