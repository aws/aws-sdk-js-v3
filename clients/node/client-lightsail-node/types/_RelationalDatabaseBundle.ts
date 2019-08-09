/**
 * <p>Describes a database bundle. A bundle describes the performance specifications of the database.</p>
 */
export interface _RelationalDatabaseBundle {
  /**
   * <p>The ID for the database bundle.</p>
   */
  bundleId?: string;

  /**
   * <p>The name for the database bundle.</p>
   */
  name?: string;

  /**
   * <p>The cost of the database bundle in US currency.</p>
   */
  price?: number;

  /**
   * <p>The amount of RAM in GB (for example, <code>2.0</code>) for the database bundle.</p>
   */
  ramSizeInGb?: number;

  /**
   * <p>The size of the disk for the database bundle.</p>
   */
  diskSizeInGb?: number;

  /**
   * <p>The data transfer rate per month in GB for the database bundle.</p>
   */
  transferPerMonthInGb?: number;

  /**
   * <p>The number of virtual CPUs (vCPUs) for the database bundle.</p>
   */
  cpuCount?: number;

  /**
   * <p>A Boolean value indicating whether the database bundle is encrypted.</p>
   */
  isEncrypted?: boolean;

  /**
   * <p>A Boolean value indicating whether the database bundle is active.</p>
   */
  isActive?: boolean;
}

export type _UnmarshalledRelationalDatabaseBundle = _RelationalDatabaseBundle;
