/**
 * <p>The instance details to specify which volumes should be snapshotted.</p>
 */
export interface _InstanceSpecification {
  /**
   * <p>The instance to specify which volumes should be snapshotted.</p>
   */
  InstanceId?: string;

  /**
   * <p>Excludes the root volume from being snapshotted.</p>
   */
  ExcludeBootVolume?: boolean;
}

export type _UnmarshalledInstanceSpecification = _InstanceSpecification;
