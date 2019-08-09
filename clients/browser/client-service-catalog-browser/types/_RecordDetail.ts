import { _RecordError, _UnmarshalledRecordError } from "./_RecordError";
import { _RecordTag, _UnmarshalledRecordTag } from "./_RecordTag";

/**
 * <p>Information about a request operation.</p>
 */
export interface _RecordDetail {
  /**
   * <p>The identifier of the record.</p>
   */
  RecordId?: string;

  /**
   * <p>The user-friendly name of the provisioned product.</p>
   */
  ProvisionedProductName?: string;

  /**
   * <p>The status of the provisioned product.</p> <ul> <li> <p> <code>CREATED</code> - The request was created but the operation has not started.</p> </li> <li> <p> <code>IN_PROGRESS</code> - The requested operation is in progress.</p> </li> <li> <p> <code>IN_PROGRESS_IN_ERROR</code> - The provisioned product is under change but the requested operation failed and some remediation is occurring. For example, a rollback.</p> </li> <li> <p> <code>SUCCEEDED</code> - The requested operation has successfully completed.</p> </li> <li> <p> <code>FAILED</code> - The requested operation has unsuccessfully completed. Investigate using the error messages returned.</p> </li> </ul>
   */
  Status?:
    | "CREATED"
    | "IN_PROGRESS"
    | "IN_PROGRESS_IN_ERROR"
    | "SUCCEEDED"
    | "FAILED"
    | string;

  /**
   * <p>The UTC time stamp of the creation time.</p>
   */
  CreatedTime?: Date | string | number;

  /**
   * <p>The time when the record was last updated.</p>
   */
  UpdatedTime?: Date | string | number;

  /**
   * <p>The type of provisioned product. The supported values are <code>CFN_STACK</code> and <code>CFN_STACKSET</code>.</p>
   */
  ProvisionedProductType?: string;

  /**
   * <p>The record type.</p> <ul> <li> <p> <code>PROVISION_PRODUCT</code> </p> </li> <li> <p> <code>UPDATE_PROVISIONED_PRODUCT</code> </p> </li> <li> <p> <code>TERMINATE_PROVISIONED_PRODUCT</code> </p> </li> </ul>
   */
  RecordType?: string;

  /**
   * <p>The identifier of the provisioned product.</p>
   */
  ProvisionedProductId?: string;

  /**
   * <p>The product identifier.</p>
   */
  ProductId?: string;

  /**
   * <p>The identifier of the provisioning artifact.</p>
   */
  ProvisioningArtifactId?: string;

  /**
   * <p>The path identifier.</p>
   */
  PathId?: string;

  /**
   * <p>The errors that occurred.</p>
   */
  RecordErrors?: Array<_RecordError> | Iterable<_RecordError>;

  /**
   * <p>One or more tags.</p>
   */
  RecordTags?: Array<_RecordTag> | Iterable<_RecordTag>;
}

export interface _UnmarshalledRecordDetail extends _RecordDetail {
  /**
   * <p>The UTC time stamp of the creation time.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>The time when the record was last updated.</p>
   */
  UpdatedTime?: Date;

  /**
   * <p>The errors that occurred.</p>
   */
  RecordErrors?: Array<_UnmarshalledRecordError>;

  /**
   * <p>One or more tags.</p>
   */
  RecordTags?: Array<_UnmarshalledRecordTag>;
}
