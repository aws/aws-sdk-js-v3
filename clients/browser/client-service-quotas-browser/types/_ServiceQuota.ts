import { _MetricInfo, _UnmarshalledMetricInfo } from "./_MetricInfo";
import { _QuotaPeriod, _UnmarshalledQuotaPeriod } from "./_QuotaPeriod";
import { _ErrorReason, _UnmarshalledErrorReason } from "./_ErrorReason";

/**
 * <p>A structure that contains the full set of details that define the service quota.</p>
 */
export interface _ServiceQuota {
  /**
   * <p>Specifies the service that you want to use.</p>
   */
  ServiceCode?: string;

  /**
   * <p>The name of the AWS service specified in the increase request. </p>
   */
  ServiceName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the service quota.</p>
   */
  QuotaArn?: string;

  /**
   * <p>The code identifier for the service quota specified.</p>
   */
  QuotaCode?: string;

  /**
   * <p>The name identifier of the service quota.</p>
   */
  QuotaName?: string;

  /**
   * <p>The value of service quota.</p>
   */
  Value?: number;

  /**
   * <p>The unit of measurement for the value of the service quota.</p>
   */
  Unit?: string;

  /**
   * <p>Specifies if the quota value can be increased.</p>
   */
  Adjustable?: boolean;

  /**
   * <p>Specifies if the quota is global.</p>
   */
  GlobalQuota?: boolean;

  /**
   * <p>Specifies the details about the measurement. </p>
   */
  UsageMetric?: _MetricInfo;

  /**
   * <p>Identifies the unit and value of how time is measured.</p>
   */
  Period?: _QuotaPeriod;

  /**
   * <p>Specifies the <code>ErrorCode</code> and <code>ErrorMessage</code> when success isn't achieved.</p>
   */
  ErrorReason?: _ErrorReason;
}

export interface _UnmarshalledServiceQuota extends _ServiceQuota {
  /**
   * <p>Specifies the details about the measurement. </p>
   */
  UsageMetric?: _UnmarshalledMetricInfo;

  /**
   * <p>Identifies the unit and value of how time is measured.</p>
   */
  Period?: _UnmarshalledQuotaPeriod;

  /**
   * <p>Specifies the <code>ErrorCode</code> and <code>ErrorMessage</code> when success isn't achieved.</p>
   */
  ErrorReason?: _UnmarshalledErrorReason;
}
