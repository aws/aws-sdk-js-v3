/**
 * <p>Provides the current status of the entity.</p>
 */
export interface _OptionStatus {
  /**
   * <p>Timestamp which tells the creation date for the entity.</p>
   */
  CreationDate: Date | string | number;

  /**
   * <p>Timestamp which tells the last updated time for the entity.</p>
   */
  UpdateDate: Date | string | number;

  /**
   * <p>Specifies the latest version for the entity.</p>
   */
  UpdateVersion?: number;

  /**
   * <p>Provides the <code>OptionState</code> for the Elasticsearch domain.</p>
   */
  State: "RequiresIndexDocuments" | "Processing" | "Active" | string;

  /**
   * <p>Indicates whether the Elasticsearch domain is being deleted.</p>
   */
  PendingDeletion?: boolean;
}

export interface _UnmarshalledOptionStatus extends _OptionStatus {
  /**
   * <p>Timestamp which tells the creation date for the entity.</p>
   */
  CreationDate: Date;

  /**
   * <p>Timestamp which tells the last updated time for the entity.</p>
   */
  UpdateDate: Date;
}
