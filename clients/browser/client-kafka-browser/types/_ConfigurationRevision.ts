/**
 *
 *             <p>Describes a configuration revision.</p>
 *
 */
export interface _ConfigurationRevision {
  /**
   *
   *             <p>The time when the configuration revision was created.</p>
   *
   */
  CreationTime: Date | string | number;

  /**
   *
   *             <p>The description of the configuration revision.</p>
   *
   */
  Description?: string;

  /**
   *
   *             <p>The revision number.</p>
   *
   */
  Revision: number;
}

export interface _UnmarshalledConfigurationRevision
  extends _ConfigurationRevision {
  /**
   *
   *             <p>The time when the configuration revision was created.</p>
   *
   */
  CreationTime: Date;
}
