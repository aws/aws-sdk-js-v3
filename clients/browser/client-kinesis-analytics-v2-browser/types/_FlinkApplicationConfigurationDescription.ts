import {
  _CheckpointConfigurationDescription,
  _UnmarshalledCheckpointConfigurationDescription
} from "./_CheckpointConfigurationDescription";
import {
  _MonitoringConfigurationDescription,
  _UnmarshalledMonitoringConfigurationDescription
} from "./_MonitoringConfigurationDescription";
import {
  _ParallelismConfigurationDescription,
  _UnmarshalledParallelismConfigurationDescription
} from "./_ParallelismConfigurationDescription";

/**
 * <p>Describes configuration parameters for a Java-based Amazon Kinesis Data Analytics application.</p>
 */
export interface _FlinkApplicationConfigurationDescription {
  /**
   * <p>Describes an application's checkpointing configuration. Checkpointing is the process of persisting application state for fault tolerance.</p>
   */
  CheckpointConfigurationDescription?: _CheckpointConfigurationDescription;

  /**
   * <p>Describes configuration parameters for Amazon CloudWatch logging for an application.</p>
   */
  MonitoringConfigurationDescription?: _MonitoringConfigurationDescription;

  /**
   * <p>Describes parameters for how an application executes multiple tasks simultaneously.</p>
   */
  ParallelismConfigurationDescription?: _ParallelismConfigurationDescription;

  /**
   * <p>The job plan for an application. For more information about the job plan, see <a href="https://ci.apache.org/projects/flink/flink-docs-stable/internals/job_scheduling.html">Jobs and Scheduling</a> in the <a href="https://ci.apache.org/projects/flink/flink-docs-release-1.6/">Apache Flink Documentation</a>. To retrieve the job plan for the application, use the <a>DescribeApplicationRequest$IncludeAdditionalDetails</a> parameter of the <a>DescribeApplication</a> operation.</p>
   */
  JobPlanDescription?: string;
}

export interface _UnmarshalledFlinkApplicationConfigurationDescription
  extends _FlinkApplicationConfigurationDescription {
  /**
   * <p>Describes an application's checkpointing configuration. Checkpointing is the process of persisting application state for fault tolerance.</p>
   */
  CheckpointConfigurationDescription?: _UnmarshalledCheckpointConfigurationDescription;

  /**
   * <p>Describes configuration parameters for Amazon CloudWatch logging for an application.</p>
   */
  MonitoringConfigurationDescription?: _UnmarshalledMonitoringConfigurationDescription;

  /**
   * <p>Describes parameters for how an application executes multiple tasks simultaneously.</p>
   */
  ParallelismConfigurationDescription?: _UnmarshalledParallelismConfigurationDescription;
}
