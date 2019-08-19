/**
 * <p>Describes parameters for how a Java-based Amazon Kinesis Data Analytics application executes multiple tasks simultaneously. For more information about parallelism, see <a href="https://ci.apache.org/projects/flink/flink-docs-stable/dev/parallel.html">Parallel Execution</a> in the <a href="https://ci.apache.org/projects/flink/flink-docs-release-1.6/">Apache Flink Documentation</a>.</p>
 */
export interface _ParallelismConfiguration {
  /**
   * <p>Describes whether the application uses the default parallelism for the Kinesis Data Analytics service.</p>
   */
  ConfigurationType: "DEFAULT" | "CUSTOM" | string;

  /**
   * <p>Describes the initial number of parallel tasks that a Java-based Kinesis Data Analytics application can perform. The Kinesis Data Analytics service can increase this number automatically if <a>ParallelismConfiguration$AutoScalingEnabled</a> is set to <code>true</code>.</p>
   */
  Parallelism?: number;

  /**
   * <p>Describes the number of parallel tasks that a Java-based Kinesis Data Analytics application can perform per Kinesis Processing Unit (KPU) used by the application. For more information about KPUs, see <a href="http://aws.amazon.com/kinesis/data-analytics/pricing/">Amazon Kinesis Data Analytics Pricing</a>.</p>
   */
  ParallelismPerKPU?: number;

  /**
   * <p>Describes whether the Kinesis Data Analytics service can increase the parallelism of the application in response to increased throughput.</p>
   */
  AutoScalingEnabled?: boolean;
}

export type _UnmarshalledParallelismConfiguration = _ParallelismConfiguration;
