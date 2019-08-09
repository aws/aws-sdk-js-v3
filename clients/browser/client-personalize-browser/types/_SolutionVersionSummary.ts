/**
 * <p>Provides a summary of the properties of a solution version. For a complete listing, call the <a>DescribeSolutionVersion</a> API.</p>
 */
export interface _SolutionVersionSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the solution version.</p>
   */
  solutionVersionArn?: string;

  /**
   * <p>The status of the solution version.</p> <p>A solution version can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> </ul>
   */
  status?: string;

  /**
   * <p>The date and time (in Unix time) that this version of a solution was created.</p>
   */
  creationDateTime?: Date | string | number;

  /**
   * <p>The date and time (in Unix time) that the solution version was last updated.</p>
   */
  lastUpdatedDateTime?: Date | string | number;

  /**
   * <p>If a solution version fails, the reason behind the failure.</p>
   */
  failureReason?: string;
}

export interface _UnmarshalledSolutionVersionSummary
  extends _SolutionVersionSummary {
  /**
   * <p>The date and time (in Unix time) that this version of a solution was created.</p>
   */
  creationDateTime?: Date;

  /**
   * <p>The date and time (in Unix time) that the solution version was last updated.</p>
   */
  lastUpdatedDateTime?: Date;
}
