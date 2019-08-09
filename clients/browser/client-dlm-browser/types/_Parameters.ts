/**
 * <p>Optional parameters that can be added to the policy. The set of valid parameters depends on the combination of <code>policyType</code> and <code>resourceType</code> values.</p>
 */
export interface _Parameters {
  /**
   * <p>When executing an EBS Snapshot Management – Instance policy, execute all CreateSnapshots calls with the <code>excludeBootVolume</code> set to the supplied field. Defaults to false. Only valid for EBS Snapshot Management – Instance policies.</p>
   */
  ExcludeBootVolume?: boolean;
}

export type _UnmarshalledParameters = _Parameters;
