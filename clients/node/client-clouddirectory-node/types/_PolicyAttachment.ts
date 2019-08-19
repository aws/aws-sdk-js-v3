/**
 * <p>Contains the <code>PolicyType</code>, <code>PolicyId</code>, and the <code>ObjectIdentifier</code> to which it is attached. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/key_concepts_directory.html#key_concepts_policies">Policies</a>.</p>
 */
export interface _PolicyAttachment {
  /**
   * <p>The ID of <code>PolicyAttachment</code>.</p>
   */
  PolicyId?: string;

  /**
   * <p>The <code>ObjectIdentifier</code> that is associated with <code>PolicyAttachment</code>.</p>
   */
  ObjectIdentifier?: string;

  /**
   * <p>The type of policy that can be associated with <code>PolicyAttachment</code>.</p>
   */
  PolicyType?: string;
}

export type _UnmarshalledPolicyAttachment = _PolicyAttachment;
