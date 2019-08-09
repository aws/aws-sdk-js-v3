/**
 * <p>Describes the hardware of a database.</p>
 */
export interface _RelationalDatabaseHardware {
  /**
   * <p>The number of vCPUs for the database.</p>
   */
  cpuCount?: number;

  /**
   * <p>The size of the disk for the database.</p>
   */
  diskSizeInGb?: number;

  /**
   * <p>The amount of RAM in GB for the database.</p>
   */
  ramSizeInGb?: number;
}

export type _UnmarshalledRelationalDatabaseHardware = _RelationalDatabaseHardware;
