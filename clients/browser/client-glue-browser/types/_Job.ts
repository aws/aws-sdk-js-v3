import {
  _ExecutionProperty,
  _UnmarshalledExecutionProperty
} from "./_ExecutionProperty";
import { _JobCommand, _UnmarshalledJobCommand } from "./_JobCommand";
import {
  _ConnectionsList,
  _UnmarshalledConnectionsList
} from "./_ConnectionsList";
import {
  _NotificationProperty,
  _UnmarshalledNotificationProperty
} from "./_NotificationProperty";

/**
 * <p>Specifies a job definition.</p>
 */
export interface _Job {
  /**
   * <p>The name you assign to this job definition.</p>
   */
  Name?: string;

  /**
   * <p>A description of the job.</p>
   */
  Description?: string;

  /**
   * <p>This field is reserved for future use.</p>
   */
  LogUri?: string;

  /**
   * <p>The name or Amazon Resource Name (ARN) of the IAM role associated with this job.</p>
   */
  Role?: string;

  /**
   * <p>The time and date that this job definition was created.</p>
   */
  CreatedOn?: Date | string | number;

  /**
   * <p>The last point in time when this job definition was modified.</p>
   */
  LastModifiedOn?: Date | string | number;

  /**
   * <p>An <code>ExecutionProperty</code> specifying the maximum number of concurrent runs allowed for this job.</p>
   */
  ExecutionProperty?: _ExecutionProperty;

  /**
   * <p>The <code>JobCommand</code> that executes this job.</p>
   */
  Command?: _JobCommand;

  /**
   * <p>The default arguments for this job, specified as name-value pairs.</p> <p>You can specify arguments here that your own job-execution script consumes, as well as arguments that AWS Glue itself consumes.</p> <p>For information about how to specify and consume your own Job arguments, see the <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-python-calling.html">Calling AWS Glue APIs in Python</a> topic in the developer guide.</p> <p>For information about the key-value pairs that AWS Glue consumes to set up your job, see the <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-etl-glue-arguments.html">Special Parameters Used by AWS Glue</a> topic in the developer guide.</p>
   */
  DefaultArguments?: { [key: string]: string } | Iterable<[string, string]>;

  /**
   * <p>The connections used for this job.</p>
   */
  Connections?: _ConnectionsList;

  /**
   * <p>The maximum number of times to retry this job after a JobRun fails.</p>
   */
  MaxRetries?: number;

  /**
   * <p>This field is deprecated. Use <code>MaxCapacity</code> instead.</p> <p>The number of AWS Glue data processing units (DPUs) allocated to runs of this job. You can allocate from 2 to 100 DPUs; the default is 10. A DPU is a relative measure of processing power that consists of 4 vCPUs of compute capacity and 16 GB of memory. For more information, see the <a href="https://aws.amazon.com/glue/pricing/">AWS Glue pricing page</a>.</p> <p/>
   */
  AllocatedCapacity?: number;

  /**
   * <p>The job timeout in minutes. This is the maximum time that a job run can consume resources before it is terminated and enters <code>TIMEOUT</code> status. The default is 2,880 minutes (48 hours).</p>
   */
  Timeout?: number;

  /**
   * <p>The number of AWS Glue data processing units (DPUs) that can be allocated when this job runs. A DPU is a relative measure of processing power that consists of 4 vCPUs of compute capacity and 16 GB of memory. For more information, see the <a href="https://aws.amazon.com/glue/pricing/">AWS Glue pricing page</a>.</p> <p>Do not set <code>Max Capacity</code> if using <code>WorkerType</code> and <code>NumberOfWorkers</code>.</p> <p>The value that can be allocated for <code>MaxCapacity</code> depends on whether you are running a Python shell job or an Apache Spark ETL job:</p> <ul> <li> <p>When you specify a Python shell job (<code>JobCommand.Name</code>="pythonshell"), you can allocate either 0.0625 or 1 DPU. The default is 0.0625 DPU.</p> </li> <li> <p>When you specify an Apache Spark ETL job (<code>JobCommand.Name</code>="glueetl"), you can allocate from 2 to 100 DPUs. The default is 10 DPUs. This job type cannot have a fractional DPU allocation.</p> </li> </ul>
   */
  MaxCapacity?: number;

  /**
   * <p>The type of predefined worker that is allocated when a job runs. Accepts a value of Standard, G.1X, or G.2X.</p> <ul> <li> <p>For the <code>Standard</code> worker type, each worker provides 4 vCPU, 16 GB of memory and a 50GB disk, and 2 executors per worker.</p> </li> <li> <p>For the <code>G.1X</code> worker type, each worker maps to 1 DPU (4 vCPU, 16 GB of memory, 64 GB disk), and provides 1 executor per worker. We recommend this worker type for memory-intensive jobs.</p> </li> <li> <p>For the <code>G.2X</code> worker type, each worker maps to 2 DPU (8 vCPU, 32 GB of memory, 128 GB disk), and provides 1 executor per worker. We recommend this worker type for memory-intensive jobs.</p> </li> </ul>
   */
  WorkerType?: "Standard" | "G.1X" | "G.2X" | string;

  /**
   * <p>The number of workers of a defined <code>workerType</code> that are allocated when a job runs.</p> <p>The maximum number of workers you can define are 299 for <code>G.1X</code>, and 149 for <code>G.2X</code>. </p>
   */
  NumberOfWorkers?: number;

  /**
   * <p>The name of the <code>SecurityConfiguration</code> structure to be used with this job.</p>
   */
  SecurityConfiguration?: string;

  /**
   * <p>Specifies configuration properties of a job notification.</p>
   */
  NotificationProperty?: _NotificationProperty;

  /**
   * <p>Glue version determines the versions of Apache Spark and Python that AWS Glue supports. The Python version indicates the version supported for jobs of type Spark. </p> <p>For more information about the available AWS Glue versions and corresponding Spark and Python versions, see <a href="https://docs.aws.amazon.com/glue/latest/dg/add-job.html">Glue version</a> in the developer guide.</p> <p>Jobs that are created without specifying a Glue version default to Glue 0.9.</p>
   */
  GlueVersion?: string;
}

export interface _UnmarshalledJob extends _Job {
  /**
   * <p>The time and date that this job definition was created.</p>
   */
  CreatedOn?: Date;

  /**
   * <p>The last point in time when this job definition was modified.</p>
   */
  LastModifiedOn?: Date;

  /**
   * <p>An <code>ExecutionProperty</code> specifying the maximum number of concurrent runs allowed for this job.</p>
   */
  ExecutionProperty?: _UnmarshalledExecutionProperty;

  /**
   * <p>The <code>JobCommand</code> that executes this job.</p>
   */
  Command?: _UnmarshalledJobCommand;

  /**
   * <p>The default arguments for this job, specified as name-value pairs.</p> <p>You can specify arguments here that your own job-execution script consumes, as well as arguments that AWS Glue itself consumes.</p> <p>For information about how to specify and consume your own Job arguments, see the <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-python-calling.html">Calling AWS Glue APIs in Python</a> topic in the developer guide.</p> <p>For information about the key-value pairs that AWS Glue consumes to set up your job, see the <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-etl-glue-arguments.html">Special Parameters Used by AWS Glue</a> topic in the developer guide.</p>
   */
  DefaultArguments?: { [key: string]: string };

  /**
   * <p>The connections used for this job.</p>
   */
  Connections?: _UnmarshalledConnectionsList;

  /**
   * <p>Specifies configuration properties of a job notification.</p>
   */
  NotificationProperty?: _UnmarshalledNotificationProperty;
}
