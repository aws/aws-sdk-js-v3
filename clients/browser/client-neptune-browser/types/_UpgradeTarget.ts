/**
 * <p>The version of the database engine that a DB instance can be upgraded to.</p>
 */
export interface _UpgradeTarget {
  /**
   * <p>The name of the upgrade target database engine.</p>
   */
  Engine?: string;

  /**
   * <p>The version number of the upgrade target database engine.</p>
   */
  EngineVersion?: string;

  /**
   * <p>The version of the database engine that a DB instance can be upgraded to.</p>
   */
  Description?: string;

  /**
   * <p>A value that indicates whether the target version is applied to any source DB instances that have AutoMinorVersionUpgrade set to true.</p>
   */
  AutoUpgrade?: boolean;

  /**
   * <p>A value that indicates whether a database engine is upgraded to a major version.</p>
   */
  IsMajorVersionUpgrade?: boolean;
}

export type _UnmarshalledUpgradeTarget = _UpgradeTarget;
