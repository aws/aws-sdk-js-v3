/**
 * <p>A structure that contains information about a requested change for a quota.</p>
 */
export interface _RequestedServiceQuotaChange {
  /**
   * <p>The unique identifier of a requested service quota change.</p>
   */
  Id?: string;

  /**
   * <p>The case Id for the service quota increase request.</p>
   */
  CaseId?: string;

  /**
   * <p>Specifies the service that you want to use.</p>
   */
  ServiceCode?: string;

  /**
   * <p>The name of the AWS service specified in the increase request. </p>
   */
  ServiceName?: string;

  /**
   * <p>Specifies the service quota that you want to use.</p>
   */
  QuotaCode?: string;

  /**
   * <p>Name of the service quota.</p>
   */
  QuotaName?: string;

  /**
   * <p>New increased value for the service quota.</p>
   */
  DesiredValue?: number;

  /**
   * <p>State of the service quota increase request.</p>
   */
  Status?:
    | "PENDING"
    | "CASE_OPENED"
    | "APPROVED"
    | "DENIED"
    | "CASE_CLOSED"
    | string;

  /**
   * <p>The date and time when the service quota increase request was received and the case Id was created. </p>
   */
  Created?: Date | string | number;

  /**
   * <p>The date and time of the most recent change in the service quota increase request.</p>
   */
  LastUpdated?: Date | string | number;

  /**
   * <p>The IAM identity who submitted the service quota increase request.</p>
   */
  Requester?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the service quota.</p>
   */
  QuotaArn?: string;

  /**
   * <p>Identifies if the quota is global.</p>
   */
  GlobalQuota?: boolean;

  /**
   * <p>Specifies the unit used for the quota.</p>
   */
  Unit?: string;
}

export interface _UnmarshalledRequestedServiceQuotaChange
  extends _RequestedServiceQuotaChange {
  /**
   * <p>The date and time when the service quota increase request was received and the case Id was created. </p>
   */
  Created?: Date;

  /**
   * <p>The date and time of the most recent change in the service quota increase request.</p>
   */
  LastUpdated?: Date;
}
