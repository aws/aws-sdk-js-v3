import { _Predecessor, _UnmarshalledPredecessor } from "./_Predecessor";
import {
  _NotificationProperty,
  _UnmarshalledNotificationProperty
} from "./_NotificationProperty";

/**
 * <p>Contains information about a job run.</p>
 */
export interface _JobRun {
  /**
   * <p>The ID of this job run.</p>
   */
  Id?: string;

  /**
   * <p>The number of the attempt to run this job.</p>
   */
  Attempt?: number;

  /**
   * <p>The ID of the previous run of this job. For example, the <code>JobRunId</code> specified in the <code>StartJobRun</code> action.</p>
   */
  PreviousRunId?: string;

  /**
   * <p>The name of the trigger that started this job run.</p>
   */
  TriggerName?: string;

  /**
   * <p>The name of the job definition being used in this run.</p>
   */
  JobName?: string;

  /**
   * <p>The date and time at which this job run was started.</p>
   */
  StartedOn?: Date | string | number;

  /**
   * <p>The last time that this job run was modified.</p>
   */
  LastModifiedOn?: Date | string | number;

  /**
   * <p>The date and time that this job run completed.</p>
   */
  CompletedOn?: Date | string | number;

  /**
   * <p>The current state of the job run.</p>
   */
  JobRunState?:
    | "STARTING"
    | "RUNNING"
    | "STOPPING"
    | "STOPPED"
    | "SUCCEEDED"
    | "FAILED"
    | "TIMEOUT"
    | string;

  /**
   * <p>The job arguments associated with this run. For this job run, they replace the default arguments set in the job definition itself.</p> <p>You can specify arguments here that your own job-execution script consumes, as well as arguments that AWS Glue itself consumes.</p> <p>For information about how to specify and consume your own job arguments, see the <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-python-calling.html">Calling AWS Glue APIs in Python</a> topic in the developer guide.</p> <p>For information about the key-value pairs that AWS Glue consumes to set up your job, see the <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-etl-glue-arguments.html">Special Parameters Used by AWS Glue</a> topic in the developer guide.</p>
   */
  Arguments?: { [key: string]: string } | Iterable<[string, string]>;

  /**
   * <p>An error message associated with this job run.</p>
   */
  ErrorMessage?: string;

  /**
   * <p>A list of predecessors to this job run.</p>
   */
  PredecessorRuns?: Array<_Predecessor> | Iterable<_Predecessor>;

  /**
   * <p>This field is deprecated. Use <code>MaxCapacity</code> instead.</p> <p>The number of AWS Glue data processing units (DPUs) allocated to this JobRun. From 2 to 100 DPUs can be allocated; the default is 10. A DPU is a relative measure of processing power that consists of 4 vCPUs of compute capacity and 16 GB of memory. For more information, see the <a href="https://aws.amazon.com/glue/pricing/">AWS Glue pricing page</a>.</p>
   */
  AllocatedCapacity?: number;

  /**
   * <p>The amount of time (in seconds) that the job run consumed resources.</p>
   */
  ExecutionTime?: number;

  /**
   * <p>The <code>JobRun</code> timeout in minutes. This is the maximum time that a job run can consume resources before it is terminated and enters <code>TIMEOUT</code> status. The default is 2,880 minutes (48 hours). This overrides the timeout value set in the parent job.</p>
   */
  Timeout?: number;

  /**
   * <p>The number of AWS Glue data processing units (DPUs) that can be allocated when this job runs. A DPU is a relative measure of processing power that consists of 4 vCPUs of compute capacity and 16 GB of memory. For more information, see the <a href="https://docs.aws.amazon.com/https:/aws.amazon.com/glue/pricing/">AWS Glue pricing page</a>.</p> <p>Do not set <code>Max Capacity</code> if using <code>WorkerType</code> and <code>NumberOfWorkers</code>.</p> <p>The value that can be allocated for <code>MaxCapacity</code> depends on whether you are running a Python shell job or an Apache Spark ETL job:</p> <ul> <li> <p>When you specify a Python shell job (<code>JobCommand.Name</code>="pythonshell"), you can allocate either 0.0625 or 1 DPU. The default is 0.0625 DPU.</p> </li> <li> <p>When you specify an Apache Spark ETL job (<code>JobCommand.Name</code>="glueetl"), you can allocate from 2 to 100 DPUs. The default is 10 DPUs. This job type cannot have a fractional DPU allocation.</p> </li> </ul>
   */
  MaxCapacity?: number;

  /**
   * <p>The type of predefined worker that is allocated when a job runs. Accepts a value of Standard, G.1X, or G.2X.</p> <ul> <li> <p>For the <code>Standard</code> worker type, each worker provides 4 vCPU, 16 GB of memory and a 50GB disk, and 2 executors per worker.</p> </li> <li> <p>For the <code>G.1X</code> worker type, each worker provides 4 vCPU, 16 GB of memory and a 64GB disk, and 1 executor per worker.</p> </li> <li> <p>For the <code>G.2X</code> worker type, each worker provides 8 vCPU, 32 GB of memory and a 128GB disk, and 1 executor per worker.</p> </li> </ul>
   */
  WorkerType?: "Standard" | "G.1X" | "G.2X" | string;

  /**
   * <p>The number of workers of a defined <code>workerType</code> that are allocated when a job runs.</p> <p>The maximum number of workers you can define are 299 for <code>G.1X</code>, and 149 for <code>G.2X</code>. </p>
   */
  NumberOfWorkers?: number;

  /**
   * <p>The name of the <code>SecurityConfiguration</code> structure to be used with this job run.</p>
   */
  SecurityConfiguration?: string;

  /**
   * <p>The name of the log group for secure logging that can be server-side encrypted in Amazon CloudWatch using AWS KMS. This name can be <code>/aws-glue/jobs/</code>, in which case the default encryption is <code>NONE</code>. If you add a role name and <code>SecurityConfiguration</code> name (in other words, <code>/aws-glue/jobs-yourRoleName-yourSecurityConfigurationName/</code>), then that security configuration is used to encrypt the log group.</p>
   */
  LogGroupName?: string;

  /**
   * <p>Specifies configuration properties of a job run notification.</p>
   */
  NotificationProperty?: _NotificationProperty;

  /**
   * <p>Glue version determines the versions of Apache Spark and Python that AWS Glue supports. The Python version indicates the version supported for jobs of type Spark. </p> <p>For more information about the available AWS Glue versions and corresponding Spark and Python versions, see <a href="https://docs.aws.amazon.com/glue/latest/dg/add-job.html">Glue version</a> in the developer guide.</p> <p>Jobs that are created without specifying a Glue version default to Glue 0.9.</p>
   */
  GlueVersion?: string;
}

export interface _UnmarshalledJobRun extends _JobRun {
  /**
   * <p>The date and time at which this job run was started.</p>
   */
  StartedOn?: Date;

  /**
   * <p>The last time that this job run was modified.</p>
   */
  LastModifiedOn?: Date;

  /**
   * <p>The date and time that this job run completed.</p>
   */
  CompletedOn?: Date;

  /**
   * <p>The job arguments associated with this run. For this job run, they replace the default arguments set in the job definition itself.</p> <p>You can specify arguments here that your own job-execution script consumes, as well as arguments that AWS Glue itself consumes.</p> <p>For information about how to specify and consume your own job arguments, see the <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-python-calling.html">Calling AWS Glue APIs in Python</a> topic in the developer guide.</p> <p>For information about the key-value pairs that AWS Glue consumes to set up your job, see the <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-etl-glue-arguments.html">Special Parameters Used by AWS Glue</a> topic in the developer guide.</p>
   */
  Arguments?: { [key: string]: string };

  /**
   * <p>A list of predecessors to this job run.</p>
   */
  PredecessorRuns?: Array<_UnmarshalledPredecessor>;

  /**
   * <p>Specifies configuration properties of a job run notification.</p>
   */
  NotificationProperty?: _UnmarshalledNotificationProperty;
}
