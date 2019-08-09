import { _PolicyToPath, _UnmarshalledPolicyToPath } from "./_PolicyToPath";

/**
 * <p>Represents the output of a <a>LookupPolicy</a> response operation.</p>
 */
export interface _BatchLookupPolicyResponse {
  /**
   * <p>Provides list of path to policies. Policies contain <code>PolicyId</code>, <code>ObjectIdentifier</code>, and <code>PolicyType</code>. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/key_concepts_directory.html#key_concepts_policies">Policies</a>.</p>
   */
  PolicyToPathList?: Array<_PolicyToPath> | Iterable<_PolicyToPath>;

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}

export interface _UnmarshalledBatchLookupPolicyResponse
  extends _BatchLookupPolicyResponse {
  /**
   * <p>Provides list of path to policies. Policies contain <code>PolicyId</code>, <code>ObjectIdentifier</code>, and <code>PolicyType</code>. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/key_concepts_directory.html#key_concepts_policies">Policies</a>.</p>
   */
  PolicyToPathList?: Array<_UnmarshalledPolicyToPath>;
}
