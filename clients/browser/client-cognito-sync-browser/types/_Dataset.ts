/**
 * A collection of data for an identity pool. An identity pool can have multiple datasets. A dataset is per identity and can be general or associated with a particular entity in an application (like a saved game). Datasets are automatically created if they don't exist. Data is synced by dataset, and a dataset can hold up to 1MB of key-value pairs.
 */
export interface _Dataset {
  /**
   * A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.
   */
  IdentityId?: string;

  /**
   * A string of up to 128 characters. Allowed characters are a-z, A-Z, 0-9, '_' (underscore), '-' (dash), and '.' (dot).
   */
  DatasetName?: string;

  /**
   * Date on which the dataset was created.
   */
  CreationDate?: Date | string | number;

  /**
   * Date when the dataset was last modified.
   */
  LastModifiedDate?: Date | string | number;

  /**
   * The device that made the last change to this dataset.
   */
  LastModifiedBy?: string;

  /**
   * Total size in bytes of the records in this dataset.
   */
  DataStorage?: number;

  /**
   * Number of records in this dataset.
   */
  NumRecords?: number;
}

export interface _UnmarshalledDataset extends _Dataset {
  /**
   * Date on which the dataset was created.
   */
  CreationDate?: Date;

  /**
   * Date when the dataset was last modified.
   */
  LastModifiedDate?: Date;
}
