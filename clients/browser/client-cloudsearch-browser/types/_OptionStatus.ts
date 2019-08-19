/**
 * <p>The status of domain configuration option.</p>
 */
export interface _OptionStatus {
  /**
   * <p>A timestamp for when this option was created.</p>
   */
  CreationDate: Date | string | number;

  /**
   * <p>A timestamp for when this option was last updated.</p>
   */
  UpdateDate: Date | string | number;

  /**
   * <p>A unique integer that indicates when this option was last updated.</p>
   */
  UpdateVersion?: number;

  /**
   * <p>The state of processing a change to an option. Possible values:</p> <ul> <li> <code>RequiresIndexDocuments</code>: the option's latest value will not be deployed until <a>IndexDocuments</a> has been called and indexing is complete.</li> <li> <code>Processing</code>: the option's latest value is in the process of being activated. </li> <li> <code>Active</code>: the option's latest value is completely deployed.</li> <li> <code>FailedToValidate</code>: the option value is not compatible with the domain's data and cannot be used to index the data. You must either modify the option value or update or remove the incompatible documents.</li> </ul>
   */
  State:
    | "RequiresIndexDocuments"
    | "Processing"
    | "Active"
    | "FailedToValidate"
    | string;

  /**
   * <p>Indicates that the option will be deleted once processing is complete.</p>
   */
  PendingDeletion?: boolean;
}

export interface _UnmarshalledOptionStatus extends _OptionStatus {
  /**
   * <p>A timestamp for when this option was created.</p>
   */
  CreationDate: Date;

  /**
   * <p>A timestamp for when this option was last updated.</p>
   */
  UpdateDate: Date;
}
