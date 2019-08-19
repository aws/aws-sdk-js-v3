/**
 * <p>Contains the configuration parameters for a job-completion report.</p>
 */
export interface _JobReport {
  /**
   * <p>The bucket where specified job-completion report will be stored.</p>
   */
  Bucket?: string;

  /**
   * <p>The format of the specified job-completion report.</p>
   */
  Format?: "Report_CSV_20180820" | string;

  /**
   * <p>Indicates whether the specified job will generate a job-completion report.</p>
   */
  Enabled: boolean;

  /**
   * <p>An optional prefix to describe where in the specified bucket the job-completion report will be stored. Amazon S3 will store the job-completion report at &lt;prefix&gt;/job-&lt;job-id&gt;/report.json.</p>
   */
  Prefix?: string;

  /**
   * <p>Indicates whether the job-completion report will include details of all tasks or only failed tasks.</p>
   */
  ReportScope?: "AllTasks" | "FailedTasksOnly" | string;
}

export type _UnmarshalledJobReport = _JobReport;
