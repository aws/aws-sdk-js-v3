/**
 * <p>Describes a database image, or blueprint. A blueprint describes the major engine version of a database.</p>
 */
export interface _RelationalDatabaseBlueprint {
  /**
   * <p>The ID for the database blueprint.</p>
   */
  blueprintId?: string;

  /**
   * <p>The database software of the database blueprint (for example, <code>MySQL</code>).</p>
   */
  engine?: "mysql" | string;

  /**
   * <p>The database engine version for the database blueprint (for example, <code>5.7.23</code>).</p>
   */
  engineVersion?: string;

  /**
   * <p>The description of the database engine for the database blueprint.</p>
   */
  engineDescription?: string;

  /**
   * <p>The description of the database engine version for the database blueprint.</p>
   */
  engineVersionDescription?: string;

  /**
   * <p>A Boolean value indicating whether the engine version is the default for the database blueprint.</p>
   */
  isEngineDefault?: boolean;
}

export type _UnmarshalledRelationalDatabaseBlueprint = _RelationalDatabaseBlueprint;
