/**
 * <p>Represents an operating-system neutral workspace for running and managing tests.</p>
 */
export interface _Project {
  /**
   * <p>The project's ARN.</p>
   */
  arn?: string;

  /**
   * <p>The project's name.</p>
   */
  name?: string;

  /**
   * <p>The default number of minutes (at the project level) a test run will execute before it times out. The default value is 150 minutes.</p>
   */
  defaultJobTimeoutMinutes?: number;

  /**
   * <p>When the project was created.</p>
   */
  created?: Date | string | number;
}

export interface _UnmarshalledProject extends _Project {
  /**
   * <p>When the project was created.</p>
   */
  created?: Date;
}
