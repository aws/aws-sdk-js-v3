/**
 * <p>Describes updates to parameters for how a Java-based Kinesis Data Analytics application executes multiple tasks simultaneously.</p>
 */
export interface _ParallelismConfigurationUpdate {
  /**
   * <p>Describes updates to whether the application uses the default parallelism for the Kinesis Data Analytics service, or if a custom parallelism is used.</p>
   */
  ConfigurationTypeUpdate?: "DEFAULT" | "CUSTOM" | string;

  /**
   * <p>Describes updates to the initial number of parallel tasks an application can perform.</p>
   */
  ParallelismUpdate?: number;

  /**
   * <p>Describes updates to the number of parallel tasks an application can perform per Kinesis Processing Unit (KPU) used by the application.</p>
   */
  ParallelismPerKPUUpdate?: number;

  /**
   * <p>Describes updates to whether the Kinesis Data Analytics service can increase the parallelism of the application in response to increased throughput.</p>
   */
  AutoScalingEnabledUpdate?: boolean;
}

export type _UnmarshalledParallelismConfigurationUpdate = _ParallelismConfigurationUpdate;
