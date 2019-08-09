/**
 * <p>Describes a problem that is detected by correlating observations.</p>
 */
export interface _Problem {
  /**
   * <p>The ID of the problem.</p>
   */
  Id?: string;

  /**
   * <p>The name of the problem.</p>
   */
  Title?: string;

  /**
   * <p>A detailed analysis of the problem using machine learning.</p>
   */
  Insights?: string;

  /**
   * <p>The status of the problem.</p>
   */
  Status?: "IGNORE" | "RESOLVED" | "PENDING" | string;

  /**
   * <p>The resource affected by the problem.</p>
   */
  AffectedResource?: string;

  /**
   * <p>The time when the problem started, in epoch seconds.</p>
   */
  StartTime?: Date | string | number;

  /**
   * <p>The time when the problem ended, in epoch seconds.</p>
   */
  EndTime?: Date | string | number;

  /**
   * <p>A measure of the level of impact of the problem.</p>
   */
  SeverityLevel?: "LOW" | "MEDIUM" | "HIGH" | string;

  /**
   * <p>The name of the resource group affected by the problem.</p>
   */
  ResourceGroupName?: string;

  /**
   * <p>Feedback provided by the user about the problem.</p>
   */
  Feedback?:
    | {
        [key in "INSIGHTS_FEEDBACK" | string]:
          | "NOT_SPECIFIED"
          | "USEFUL"
          | "NOT_USEFUL"
          | string
      }
    | Iterable<
        [
          "INSIGHTS_FEEDBACK" | string,
          "NOT_SPECIFIED" | "USEFUL" | "NOT_USEFUL" | string
        ]
      >;
}

export interface _UnmarshalledProblem extends _Problem {
  /**
   * <p>The time when the problem started, in epoch seconds.</p>
   */
  StartTime?: Date;

  /**
   * <p>The time when the problem ended, in epoch seconds.</p>
   */
  EndTime?: Date;

  /**
   * <p>Feedback provided by the user about the problem.</p>
   */
  Feedback?: {
    [key in "INSIGHTS_FEEDBACK" | string]:
      | "NOT_SPECIFIED"
      | "USEFUL"
      | "NOT_USEFUL"
      | string
  };
}
