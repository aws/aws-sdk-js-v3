import { _KeyValue, _UnmarshalledKeyValue } from "./_KeyValue";

/**
 * <p>A job flow step consisting of a JAR file whose main function will be executed. The main function submits a job for Hadoop to execute and waits for the job to finish or fail.</p>
 */
export interface _HadoopJarStepConfig {
  /**
   * <p>A list of Java properties that are set when the step runs. You can use these properties to pass key value pairs to your main function.</p>
   */
  Properties?: Array<_KeyValue> | Iterable<_KeyValue>;

  /**
   * <p>A path to a JAR file run during the step.</p>
   */
  Jar: string;

  /**
   * <p>The name of the main class in the specified Java file. If not specified, the JAR file should specify a Main-Class in its manifest file.</p>
   */
  MainClass?: string;

  /**
   * <p>A list of command line arguments passed to the JAR file's main function when executed.</p>
   */
  Args?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledHadoopJarStepConfig extends _HadoopJarStepConfig {
  /**
   * <p>A list of Java properties that are set when the step runs. You can use these properties to pass key value pairs to your main function.</p>
   */
  Properties?: Array<_UnmarshalledKeyValue>;

  /**
   * <p>A list of command line arguments passed to the JAR file's main function when executed.</p>
   */
  Args?: Array<string>;
}
