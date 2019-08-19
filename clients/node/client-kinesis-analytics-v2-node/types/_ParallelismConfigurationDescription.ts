/**
 * <p>Describes parameters for how a Java-based Kinesis Data Analytics application executes multiple tasks simultaneously.</p>
 */
export interface _ParallelismConfigurationDescription {
  /**
   * <p>Describes whether the application uses the default parallelism for the Kinesis Data Analytics service. </p>
   */
  ConfigurationType?: "DEFAULT" | "CUSTOM" | string;

  /**
   * <p>Describes the initial number of parallel tasks that a Java-based Kinesis Data Analytics application can perform. </p>
   */
  Parallelism?: number;

  /**
   * <p>Describes the number of parallel tasks that a Java-based Kinesis Data Analytics application can perform per Kinesis Processing Unit (KPU) used by the application.</p>
   */
  ParallelismPerKPU?: number;

  /**
   * <p>Describes the current number of parallel tasks that a Java-based Kinesis Data Analytics application can perform.</p>
   */
  CurrentParallelism?: number;

  /**
   * <p>Describes whether the Kinesis Data Analytics service can increase the parallelism of the application in response to increased throughput.</p>
   */
  AutoScalingEnabled?: boolean;
}

export type _UnmarshalledParallelismConfigurationDescription = _ParallelismConfigurationDescription;
