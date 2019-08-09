import {
  _InstanceAssociationOutputUrl,
  _UnmarshalledInstanceAssociationOutputUrl
} from "./_InstanceAssociationOutputUrl";

/**
 * <p>Status information about the instance association.</p>
 */
export interface _InstanceAssociationStatusInfo {
  /**
   * <p>The association ID.</p>
   */
  AssociationId?: string;

  /**
   * <p>The name of the association.</p>
   */
  Name?: string;

  /**
   * <p>The association document versions.</p>
   */
  DocumentVersion?: string;

  /**
   * <p>The version of the association applied to the instance.</p>
   */
  AssociationVersion?: string;

  /**
   * <p>The instance ID where the association was created.</p>
   */
  InstanceId?: string;

  /**
   * <p>The date the instance association ran. </p>
   */
  ExecutionDate?: Date | string | number;

  /**
   * <p>Status information about the instance association.</p>
   */
  Status?: string;

  /**
   * <p>Detailed status information about the instance association.</p>
   */
  DetailedStatus?: string;

  /**
   * <p>Summary information about association execution.</p>
   */
  ExecutionSummary?: string;

  /**
   * <p>An error code returned by the request to create the association.</p>
   */
  ErrorCode?: string;

  /**
   * <p>A URL for an Amazon S3 bucket where you want to store the results of this request.</p>
   */
  OutputUrl?: _InstanceAssociationOutputUrl;

  /**
   * <p>The name of the association applied to the instance.</p>
   */
  AssociationName?: string;
}

export interface _UnmarshalledInstanceAssociationStatusInfo
  extends _InstanceAssociationStatusInfo {
  /**
   * <p>The date the instance association ran. </p>
   */
  ExecutionDate?: Date;

  /**
   * <p>A URL for an Amazon S3 bucket where you want to store the results of this request.</p>
   */
  OutputUrl?: _UnmarshalledInstanceAssociationOutputUrl;
}
