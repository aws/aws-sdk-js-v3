/**
 * <p>Specifies code executed when a job is run.</p>
 */
export interface _JobCommand {
  /**
   * <p>The name of the job command. For an Apache Spark ETL job, this must be <code>glueetl</code>. For a Python shell job, it must be <code>pythonshell</code>.</p>
   */
  Name?: string;

  /**
   * <p>Specifies the Amazon Simple Storage Service (Amazon S3) path to a script that executes a job.</p>
   */
  ScriptLocation?: string;

  /**
   * <p>The Python version being used to execute a Python shell job. Allowed values are 2 or 3.</p>
   */
  PythonVersion?: string;
}

export type _UnmarshalledJobCommand = _JobCommand;
