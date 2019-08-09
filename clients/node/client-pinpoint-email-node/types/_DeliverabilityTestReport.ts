/**
 * <p>An object that contains metadata related to a predictive inbox placement test.</p>
 */
export interface _DeliverabilityTestReport {
  /**
   * <p>A unique string that identifies the predictive inbox placement test.</p>
   */
  ReportId?: string;

  /**
   * <p>A name that helps you identify a predictive inbox placement test report.</p>
   */
  ReportName?: string;

  /**
   * <p>The subject line for an email that you submitted in a predictive inbox placement test.</p>
   */
  Subject?: string;

  /**
   * <p>The sender address that you specified for the predictive inbox placement test.</p>
   */
  FromEmailAddress?: string;

  /**
   * <p>The date and time when the predictive inbox placement test was created, in Unix time format.</p>
   */
  CreateDate?: Date | string | number;

  /**
   * <p>The status of the predictive inbox placement test. If the status is <code>IN_PROGRESS</code>, then the predictive inbox placement test is currently running. Predictive inbox placement tests are usually complete within 24 hours of creating the test. If the status is <code>COMPLETE</code>, then the test is finished, and you can use the <code>GetDeliverabilityTestReport</code> to view the results of the test.</p>
   */
  DeliverabilityTestStatus?: "IN_PROGRESS" | "COMPLETED" | string;
}

export interface _UnmarshalledDeliverabilityTestReport
  extends _DeliverabilityTestReport {
  /**
   * <p>The date and time when the predictive inbox placement test was created, in Unix time format.</p>
   */
  CreateDate?: Date;
}
