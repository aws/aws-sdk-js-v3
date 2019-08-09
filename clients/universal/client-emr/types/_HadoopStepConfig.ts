/**
 * <p>A cluster step consisting of a JAR file whose main function will be executed. The main function submits a job for Hadoop to execute and waits for the job to finish or fail.</p>
 */
export interface _HadoopStepConfig {
  /**
   * <p>The path to the JAR file that runs during the step.</p>
   */
  Jar?: string;

  /**
   * <p>The list of Java properties that are set when the step runs. You can use these properties to pass key value pairs to your main function.</p>
   */
  Properties?: { [key: string]: string } | Iterable<[string, string]>;

  /**
   * <p>The name of the main class in the specified Java file. If not specified, the JAR file should specify a main class in its manifest file.</p>
   */
  MainClass?: string;

  /**
   * <p>The list of command line arguments to pass to the JAR file's main function for execution.</p>
   */
  Args?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledHadoopStepConfig extends _HadoopStepConfig {
  /**
   * <p>The list of Java properties that are set when the step runs. You can use these properties to pass key value pairs to your main function.</p>
   */
  Properties?: { [key: string]: string };

  /**
   * <p>The list of command line arguments to pass to the JAR file's main function for execution.</p>
   */
  Args?: Array<string>;
}
