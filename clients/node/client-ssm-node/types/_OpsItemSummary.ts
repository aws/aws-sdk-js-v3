import {
  _OpsItemDataValue,
  _UnmarshalledOpsItemDataValue
} from "./_OpsItemDataValue";

/**
 * <p>A count of OpsItems.</p>
 */
export interface _OpsItemSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the IAM entity that created the OpsItem.</p>
   */
  CreatedBy?: string;

  /**
   * <p>The date and time the OpsItem was created.</p>
   */
  CreatedTime?: Date | string | number;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM entity that created the OpsItem.</p>
   */
  LastModifiedBy?: string;

  /**
   * <p>The date and time the OpsItem was last updated.</p>
   */
  LastModifiedTime?: Date | string | number;

  /**
   * <p>The importance of this OpsItem in relation to other OpsItems in the system.</p>
   */
  Priority?: number;

  /**
   * <p>The impacted AWS resource.</p>
   */
  Source?: string;

  /**
   * <p>The OpsItem status. Status can be <code>Open</code>, <code>In Progress</code>, or <code>Resolved</code>.</p>
   */
  Status?: "Open" | "InProgress" | "Resolved" | string;

  /**
   * <p>The ID of the OpsItem.</p>
   */
  OpsItemId?: string;

  /**
   * <p>A short heading that describes the nature of the OpsItem and the impacted resource.</p>
   */
  Title?: string;

  /**
   * <p>Operational data is custom data that provides useful reference details about the OpsItem. </p>
   */
  OperationalData?:
    | { [key: string]: _OpsItemDataValue }
    | Iterable<[string, _OpsItemDataValue]>;
}

export interface _UnmarshalledOpsItemSummary extends _OpsItemSummary {
  /**
   * <p>The date and time the OpsItem was created.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>The date and time the OpsItem was last updated.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>Operational data is custom data that provides useful reference details about the OpsItem. </p>
   */
  OperationalData?: { [key: string]: _UnmarshalledOpsItemDataValue };
}
