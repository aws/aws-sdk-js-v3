// smithy-typescript generated code
import { SENSITIVE_STRING } from "@smithy/smithy-client";

import {
  AccessBudgetsPrivacyTemplateParametersInput,
  AccessBudgetsPrivacyTemplateUpdateParameters,
  AnalysisType,
  DifferentialPrivacyAggregationType,
  MemberAbility,
  MembershipProtectedJobResultConfiguration,
  MLMemberAbilities,
  PrivacyBudget,
  PrivacyBudgetTemplateAutoRefresh,
  PrivacyBudgetTemplateParametersOutput,
  PrivacyBudgetType,
  ResultFormat,
} from "./models_0";

/**
 * <p>Contains the configuration to write the query results to S3.</p>
 * @public
 */
export interface ProtectedQueryS3OutputConfiguration {
  /**
   * <p>Intended file format of the result.</p>
   * @public
   */
  resultFormat: ResultFormat | undefined;

  /**
   * <p>The S3 bucket to unload the protected query results.</p>
   * @public
   */
  bucket: string | undefined;

  /**
   * <p>The S3 prefix to unload the protected query results.</p>
   * @public
   */
  keyPrefix?: string | undefined;

  /**
   * <p>Indicates whether files should be output as a single file (<code>TRUE</code>) or output as multiple files (<code>FALSE</code>). This parameter is only supported for analyses with the Spark analytics engine.</p>
   * @public
   */
  singleFileOutput?: boolean | undefined;
}

/**
 * <p>Contains configurations for protected query results.</p>
 * @public
 */
export type MembershipProtectedQueryOutputConfiguration =
  | MembershipProtectedQueryOutputConfiguration.S3Member
  | MembershipProtectedQueryOutputConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace MembershipProtectedQueryOutputConfiguration {
  /**
   * <p>Contains the configuration to write the query results to S3.</p>
   * @public
   */
  export interface S3Member {
    s3: ProtectedQueryS3OutputConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    s3?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    s3: (value: ProtectedQueryS3OutputConfiguration) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: MembershipProtectedQueryOutputConfiguration, visitor: Visitor<T>): T => {
    if (value.s3 !== undefined) return visitor.s3(value.s3);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Contains configurations for protected query results.</p>
 * @public
 */
export interface MembershipProtectedQueryResultConfiguration {
  /**
   * <p>Configuration for protected query results.</p>
   * @public
   */
  outputConfiguration: MembershipProtectedQueryOutputConfiguration | undefined;

  /**
   * <p>The unique ARN for an IAM role that is used by Clean Rooms to write protected query results to the result location, given by the member who can receive results.</p>
   * @public
   */
  roleArn?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const MembershipJobLogStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type MembershipJobLogStatus = (typeof MembershipJobLogStatus)[keyof typeof MembershipJobLogStatus];

/**
 * <p>An object representing the payment responsibilities accepted by the collaboration member for query and job compute costs.</p>
 * @public
 */
export interface MembershipJobComputePaymentConfig {
  /**
   * <p>Indicates whether the collaboration member has accepted to pay for job compute costs (<code>TRUE</code>) or has not accepted to pay for query and job compute costs (<code>FALSE</code>).</p> <p>There is only one member who pays for queries and jobs. </p> <p>An error message is returned for the following reasons: </p> <ul> <li> <p>If you set the value to <code>FALSE</code> but you are responsible to pay for query and job compute costs. </p> </li> <li> <p>If you set the value to <code>TRUE</code> but you are not responsible to pay for query and job compute costs. </p> </li> </ul>
   * @public
   */
  isResponsible: boolean | undefined;
}

/**
 * <p>An object representing the collaboration member's model inference payment responsibilities set by the collaboration creator.</p>
 * @public
 */
export interface MembershipModelInferencePaymentConfig {
  /**
   * <p>Indicates whether the collaboration member has accepted to pay for model inference costs (<code>TRUE</code>) or has not accepted to pay for model inference costs (<code>FALSE</code>).</p> <p>If the collaboration creator has not specified anyone to pay for model inference costs, then the member who can query is the default payer. </p> <p>An error message is returned for the following reasons: </p> <ul> <li> <p>If you set the value to <code>FALSE</code> but you are responsible to pay for model inference costs. </p> </li> <li> <p>If you set the value to <code>TRUE</code> but you are not responsible to pay for model inference costs. </p> </li> </ul>
   * @public
   */
  isResponsible: boolean | undefined;
}

/**
 * <p>An object representing the collaboration member's model training payment responsibilities set by the collaboration creator.</p>
 * @public
 */
export interface MembershipModelTrainingPaymentConfig {
  /**
   * <p>Indicates whether the collaboration member has accepted to pay for model training costs (<code>TRUE</code>) or has not accepted to pay for model training costs (<code>FALSE</code>).</p> <p>If the collaboration creator has not specified anyone to pay for model training costs, then the member who can query is the default payer. </p> <p>An error message is returned for the following reasons: </p> <ul> <li> <p>If you set the value to <code>FALSE</code> but you are responsible to pay for model training costs. </p> </li> <li> <p>If you set the value to <code>TRUE</code> but you are not responsible to pay for model training costs. </p> </li> </ul>
   * @public
   */
  isResponsible: boolean | undefined;
}

/**
 * <p>An object representing the collaboration member's machine learning payment responsibilities set by the collaboration creator.</p>
 * @public
 */
export interface MembershipMLPaymentConfig {
  /**
   * <p>The payment responsibilities accepted by the member for model training.</p>
   * @public
   */
  modelTraining?: MembershipModelTrainingPaymentConfig | undefined;

  /**
   * <p>The payment responsibilities accepted by the member for model inference.</p>
   * @public
   */
  modelInference?: MembershipModelInferencePaymentConfig | undefined;
}

/**
 * <p>An object representing the payment responsibilities accepted by the collaboration member for query compute costs.</p>
 * @public
 */
export interface MembershipQueryComputePaymentConfig {
  /**
   * <p>Indicates whether the collaboration member has accepted to pay for query compute costs (<code>TRUE</code>) or has not accepted to pay for query compute costs (<code>FALSE</code>).</p> <p>If the collaboration creator has not specified anyone to pay for query compute costs, then the member who can query is the default payer. </p> <p>An error message is returned for the following reasons: </p> <ul> <li> <p>If you set the value to <code>FALSE</code> but you are responsible to pay for query compute costs. </p> </li> <li> <p>If you set the value to <code>TRUE</code> but you are not responsible to pay for query compute costs. </p> </li> </ul>
   * @public
   */
  isResponsible: boolean | undefined;
}

/**
 * <p>An object representing the payment responsibilities accepted by the collaboration member.</p>
 * @public
 */
export interface MembershipPaymentConfiguration {
  /**
   * <p>The payment responsibilities accepted by the collaboration member for query compute costs.</p>
   * @public
   */
  queryCompute: MembershipQueryComputePaymentConfig | undefined;

  /**
   * <p>The payment responsibilities accepted by the collaboration member for machine learning costs.</p>
   * @public
   */
  machineLearning?: MembershipMLPaymentConfig | undefined;

  /**
   * <p>The payment responsibilities accepted by the collaboration member for job compute costs.</p>
   * @public
   */
  jobCompute?: MembershipJobComputePaymentConfig | undefined;
}

/**
 * @public
 * @enum
 */
export const MembershipQueryLogStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type MembershipQueryLogStatus = (typeof MembershipQueryLogStatus)[keyof typeof MembershipQueryLogStatus];

/**
 * @public
 */
export interface CreateMembershipInput {
  /**
   * <p>The unique ID for the associated collaboration.</p>
   * @public
   */
  collaborationIdentifier: string | undefined;

  /**
   * <p>An indicator as to whether query logging has been enabled or disabled for the membership.</p> <p>When <code>ENABLED</code>, Clean Rooms logs details about queries run within this collaboration and those logs can be viewed in Amazon CloudWatch Logs. The default value is <code>DISABLED</code>.</p>
   * @public
   */
  queryLogStatus: MembershipQueryLogStatus | undefined;

  /**
   * <p>An indicator as to whether job logging has been enabled or disabled for the collaboration. </p> <p>When <code>ENABLED</code>, Clean Rooms logs details about jobs run within this collaboration and those logs can be viewed in Amazon CloudWatch Logs. The default value is <code>DISABLED</code>.</p>
   * @public
   */
  jobLogStatus?: MembershipJobLogStatus | undefined;

  /**
   * <p>An optional label that you can assign to a resource when you create it. Each tag consists of a key and an optional value, both of which you define. When you use tagging, you can also use tag-based access control in IAM policies to control access to this resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The default protected query result configuration as specified by the member who can receive results.</p>
   * @public
   */
  defaultResultConfiguration?: MembershipProtectedQueryResultConfiguration | undefined;

  /**
   * <p>The default job result configuration that determines how job results are protected and managed within this membership. This configuration applies to all jobs.</p>
   * @public
   */
  defaultJobResultConfiguration?: MembershipProtectedJobResultConfiguration | undefined;

  /**
   * <p>The payment responsibilities accepted by the collaboration member.</p> <p>Not required if the collaboration member has the member ability to run queries. </p> <p>Required if the collaboration member doesn't have the member ability to run queries but is configured as a payer by the collaboration creator. </p>
   * @public
   */
  paymentConfiguration?: MembershipPaymentConfiguration | undefined;
}

/**
 * @public
 * @enum
 */
export const MembershipStatus = {
  ACTIVE: "ACTIVE",
  COLLABORATION_DELETED: "COLLABORATION_DELETED",
  REMOVED: "REMOVED",
} as const;

/**
 * @public
 */
export type MembershipStatus = (typeof MembershipStatus)[keyof typeof MembershipStatus];

/**
 * <p>The membership object.</p>
 * @public
 */
export interface Membership {
  /**
   * <p>The unique ID of the membership.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The unique ARN for the membership.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The unique ARN for the membership's associated collaboration.</p>
   * @public
   */
  collaborationArn: string | undefined;

  /**
   * <p>The unique ID for the membership's collaboration.</p>
   * @public
   */
  collaborationId: string | undefined;

  /**
   * <p>The identifier used to reference members of the collaboration. Currently only supports Amazon Web Services account ID.</p>
   * @public
   */
  collaborationCreatorAccountId: string | undefined;

  /**
   * <p>The display name of the collaboration creator.</p>
   * @public
   */
  collaborationCreatorDisplayName: string | undefined;

  /**
   * <p>The name of the membership's collaboration.</p>
   * @public
   */
  collaborationName: string | undefined;

  /**
   * <p>The time when the membership was created.</p>
   * @public
   */
  createTime: Date | undefined;

  /**
   * <p>The time the membership metadata was last updated.</p>
   * @public
   */
  updateTime: Date | undefined;

  /**
   * <p>The status of the membership.</p>
   * @public
   */
  status: MembershipStatus | undefined;

  /**
   * <p>The abilities granted to the collaboration member.</p>
   * @public
   */
  memberAbilities: MemberAbility[] | undefined;

  /**
   * <p>Specifies the ML member abilities that are granted to a collaboration member.</p>
   * @public
   */
  mlMemberAbilities?: MLMemberAbilities | undefined;

  /**
   * <p>An indicator as to whether query logging has been enabled or disabled for the membership.</p> <p>When <code>ENABLED</code>, Clean Rooms logs details about queries run within this collaboration and those logs can be viewed in Amazon CloudWatch Logs. The default value is <code>DISABLED</code>.</p>
   * @public
   */
  queryLogStatus: MembershipQueryLogStatus | undefined;

  /**
   * <p>An indicator as to whether job logging has been enabled or disabled for the collaboration. </p> <p>When <code>ENABLED</code>, Clean Rooms logs details about jobs run within this collaboration and those logs can be viewed in Amazon CloudWatch Logs. The default value is <code>DISABLED</code>.</p>
   * @public
   */
  jobLogStatus?: MembershipJobLogStatus | undefined;

  /**
   * <p>The default protected query result configuration as specified by the member who can receive results.</p>
   * @public
   */
  defaultResultConfiguration?: MembershipProtectedQueryResultConfiguration | undefined;

  /**
   * <p> The default job result configuration for the membership.</p>
   * @public
   */
  defaultJobResultConfiguration?: MembershipProtectedJobResultConfiguration | undefined;

  /**
   * <p>The payment responsibilities accepted by the collaboration member.</p>
   * @public
   */
  paymentConfiguration: MembershipPaymentConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateMembershipOutput {
  /**
   * <p>The membership that was created.</p>
   * @public
   */
  membership: Membership | undefined;
}

/**
 * @public
 */
export interface DeleteMembershipInput {
  /**
   * <p>The identifier for a membership resource.</p>
   * @public
   */
  membershipIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteMembershipOutput {}

/**
 * @public
 */
export interface GetMembershipInput {
  /**
   * <p>The identifier for a membership resource.</p>
   * @public
   */
  membershipIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetMembershipOutput {
  /**
   * <p>The membership retrieved for the provided identifier.</p>
   * @public
   */
  membership: Membership | undefined;
}

/**
 * @public
 */
export interface GetProtectedJobInput {
  /**
   * <p> The identifier for a membership in a protected job instance.</p>
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * <p> The identifier for the protected job instance.</p>
   * @public
   */
  protectedJobIdentifier: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ProtectedJobWorkerComputeType = {
  CR1X: "CR.1X",
  CR4X: "CR.4X",
} as const;

/**
 * @public
 */
export type ProtectedJobWorkerComputeType =
  (typeof ProtectedJobWorkerComputeType)[keyof typeof ProtectedJobWorkerComputeType];

/**
 * <p>The configuration of the compute resources for a PySpark job.</p>
 * @public
 */
export interface ProtectedJobWorkerComputeConfiguration {
  /**
   * <p>The worker compute configuration type.</p>
   * @public
   */
  type: ProtectedJobWorkerComputeType | undefined;

  /**
   * <p>The number of workers for a PySpark job.</p>
   * @public
   */
  number: number | undefined;
}

/**
 * <p>The configuration of the compute resources for a PySpark job.</p>
 * @public
 */
export type ProtectedJobComputeConfiguration =
  | ProtectedJobComputeConfiguration.WorkerMember
  | ProtectedJobComputeConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace ProtectedJobComputeConfiguration {
  /**
   * <p>The worker configuration for the compute environment.</p>
   * @public
   */
  export interface WorkerMember {
    worker: ProtectedJobWorkerComputeConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    worker?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    worker: (value: ProtectedJobWorkerComputeConfiguration) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ProtectedJobComputeConfiguration, visitor: Visitor<T>): T => {
    if (value.worker !== undefined) return visitor.worker(value.worker);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>The protected job error.</p>
 * @public
 */
export interface ProtectedJobError {
  /**
   * <p> The message for the protected job error.</p>
   * @public
   */
  message: string | undefined;

  /**
   * <p> The error code for the protected job.</p>
   * @public
   */
  code: string | undefined;
}

/**
 * <p>The parameters for the protected job.</p>
 * @public
 */
export interface ProtectedJobParameters {
  /**
   * <p> The ARN of the analysis template.</p>
   * @public
   */
  analysisTemplateArn?: string | undefined;
}

/**
 * <p>Details about the member who received the job result.</p>
 * @public
 */
export interface ProtectedJobSingleMemberOutput {
  /**
   * <p>The Amazon Web Services account ID of the member in the collaboration who can receive results from analyses.</p>
   * @public
   */
  accountId: string | undefined;
}

/**
 * <p>Contains output information for protected jobs with an S3 output type.</p>
 * @public
 */
export interface ProtectedJobS3Output {
  /**
   * <p> The S3 location for the protected job output.</p>
   * @public
   */
  location: string | undefined;
}

/**
 * <p>Contains details about the protected job output.</p>
 * @public
 */
export type ProtectedJobOutput =
  | ProtectedJobOutput.MemberListMember
  | ProtectedJobOutput.S3Member
  | ProtectedJobOutput.$UnknownMember;

/**
 * @public
 */
export namespace ProtectedJobOutput {
  /**
   * <p>If present, the output for a protected job with an `S3` output type.</p>
   * @public
   */
  export interface S3Member {
    s3: ProtectedJobS3Output;
    memberList?: never;
    $unknown?: never;
  }

  /**
   * <p>The list of member Amazon Web Services account(s) that received the results of the job. </p>
   * @public
   */
  export interface MemberListMember {
    s3?: never;
    memberList: ProtectedJobSingleMemberOutput[];
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    s3?: never;
    memberList?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    s3: (value: ProtectedJobS3Output) => T;
    memberList: (value: ProtectedJobSingleMemberOutput[]) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ProtectedJobOutput, visitor: Visitor<T>): T => {
    if (value.s3 !== undefined) return visitor.s3(value.s3);
    if (value.memberList !== undefined) return visitor.memberList(value.memberList);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Details about the job results.</p>
 * @public
 */
export interface ProtectedJobResult {
  /**
   * <p> The output of the protected job.</p>
   * @public
   */
  output: ProtectedJobOutput | undefined;
}

/**
 * <p> The protected job member output configuration output.</p>
 * @public
 */
export interface ProtectedJobMemberOutputConfigurationOutput {
  /**
   * <p> The account ID.</p>
   * @public
   */
  accountId: string | undefined;
}

/**
 * <p> The output configuration for a protected job's S3 output.</p>
 * @public
 */
export interface ProtectedJobS3OutputConfigurationOutput {
  /**
   * <p> The S3 bucket for job output.</p>
   * @public
   */
  bucket: string | undefined;

  /**
   * <p>The S3 prefix to unload the protected job results.</p>
   * @public
   */
  keyPrefix?: string | undefined;
}

/**
 * <p> The protected job output configuration output.</p>
 * @public
 */
export type ProtectedJobOutputConfigurationOutput =
  | ProtectedJobOutputConfigurationOutput.MemberMember
  | ProtectedJobOutputConfigurationOutput.S3Member
  | ProtectedJobOutputConfigurationOutput.$UnknownMember;

/**
 * @public
 */
export namespace ProtectedJobOutputConfigurationOutput {
  /**
   * <p>If present, the output for a protected job with an `S3` output type.</p>
   * @public
   */
  export interface S3Member {
    s3: ProtectedJobS3OutputConfigurationOutput;
    member?: never;
    $unknown?: never;
  }

  /**
   * <p> The member output configuration for a protected job.</p>
   * @public
   */
  export interface MemberMember {
    s3?: never;
    member: ProtectedJobMemberOutputConfigurationOutput;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    s3?: never;
    member?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    s3: (value: ProtectedJobS3OutputConfigurationOutput) => T;
    member: (value: ProtectedJobMemberOutputConfigurationOutput) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ProtectedJobOutputConfigurationOutput, visitor: Visitor<T>): T => {
    if (value.s3 !== undefined) return visitor.s3(value.s3);
    if (value.member !== undefined) return visitor.member(value.member);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>The output configuration for a protected job result.</p>
 * @public
 */
export interface ProtectedJobResultConfigurationOutput {
  /**
   * <p>The output configuration.</p>
   * @public
   */
  outputConfiguration: ProtectedJobOutputConfigurationOutput | undefined;
}

/**
 * <p> Information related to the utilization of resources that have been billed or charged for in a given context, such as a protected job.</p>
 * @public
 */
export interface BilledJobResourceUtilization {
  /**
   * <p> The number of Clean Rooms Processing Unit (CRPU) hours that have been billed.</p>
   * @public
   */
  units: number | undefined;
}

/**
 * <p>Contains statistics about the execution of the protected job.</p>
 * @public
 */
export interface ProtectedJobStatistics {
  /**
   * <p>The duration of the protected job, from creation until job completion, in milliseconds.</p>
   * @public
   */
  totalDurationInMillis?: number | undefined;

  /**
   * <p> The billed resource utilization for the protected job.</p>
   * @public
   */
  billedResourceUtilization?: BilledJobResourceUtilization | undefined;
}

/**
 * @public
 * @enum
 */
export const ProtectedJobStatus = {
  CANCELLED: "CANCELLED",
  CANCELLING: "CANCELLING",
  FAILED: "FAILED",
  STARTED: "STARTED",
  SUBMITTED: "SUBMITTED",
  SUCCESS: "SUCCESS",
} as const;

/**
 * @public
 */
export type ProtectedJobStatus = (typeof ProtectedJobStatus)[keyof typeof ProtectedJobStatus];

/**
 * <p>The parameters for an Clean Rooms protected job.</p>
 * @public
 */
export interface ProtectedJob {
  /**
   * <p>The identifier for a protected job instance.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>he identifier for the membership.</p>
   * @public
   */
  membershipId: string | undefined;

  /**
   * <p>The ARN of the membership.</p>
   * @public
   */
  membershipArn: string | undefined;

  /**
   * <p> The creation time of the protected job.</p>
   * @public
   */
  createTime: Date | undefined;

  /**
   * <p> The job parameters for the protected job.</p>
   * @public
   */
  jobParameters?: ProtectedJobParameters | undefined;

  /**
   * <p> The status of the protected job.</p>
   * @public
   */
  status: ProtectedJobStatus | undefined;

  /**
   * <p>Contains any details needed to write the job results.</p>
   * @public
   */
  resultConfiguration?: ProtectedJobResultConfigurationOutput | undefined;

  /**
   * <p> The statistics of the protected job.</p>
   * @public
   */
  statistics?: ProtectedJobStatistics | undefined;

  /**
   * <p> The result of the protected job.</p>
   * @public
   */
  result?: ProtectedJobResult | undefined;

  /**
   * <p> The error from the protected job.</p>
   * @public
   */
  error?: ProtectedJobError | undefined;

  /**
   * <p>The compute configuration for the protected job.</p>
   * @public
   */
  computeConfiguration?: ProtectedJobComputeConfiguration | undefined;
}

/**
 * @public
 */
export interface GetProtectedJobOutput {
  /**
   * <p> The protected job metadata.</p>
   * @public
   */
  protectedJob: ProtectedJob | undefined;
}

/**
 * @public
 */
export interface GetProtectedQueryInput {
  /**
   * <p>The identifier for a membership in a protected query instance.</p>
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * <p>The identifier for a protected query instance.</p>
   * @public
   */
  protectedQueryIdentifier: string | undefined;
}

/**
 * @public
 * @enum
 */
export const WorkerComputeType = {
  CR1X: "CR.1X",
  CR4X: "CR.4X",
} as const;

/**
 * @public
 */
export type WorkerComputeType = (typeof WorkerComputeType)[keyof typeof WorkerComputeType];

/**
 * <p> The configuration of the compute resources for workers running an analysis with the Clean Rooms SQL analytics engine.</p>
 * @public
 */
export interface WorkerComputeConfiguration {
  /**
   * <p> The worker compute configuration type.</p>
   * @public
   */
  type?: WorkerComputeType | undefined;

  /**
   * <p> The number of workers.</p> <p>SQL queries support a minimum value of 2 and a maximum value of 400. </p> <p>PySpark jobs support a minimum value of 4 and a maximum value of 128.</p>
   * @public
   */
  number?: number | undefined;
}

/**
 * <p> The configuration of the compute resources for an analysis with the Spark analytics engine.</p>
 * @public
 */
export type ComputeConfiguration = ComputeConfiguration.WorkerMember | ComputeConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace ComputeConfiguration {
  /**
   * <p> The worker configuration for the compute environment.</p>
   * @public
   */
  export interface WorkerMember {
    worker: WorkerComputeConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    worker?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    worker: (value: WorkerComputeConfiguration) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ComputeConfiguration, visitor: Visitor<T>): T => {
    if (value.worker !== undefined) return visitor.worker(value.worker);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Provides the sensitivity parameters.</p>
 * @public
 */
export interface DifferentialPrivacySensitivityParameters {
  /**
   * <p>The type of aggregation function that was run.</p>
   * @public
   */
  aggregationType: DifferentialPrivacyAggregationType | undefined;

  /**
   * <p>The aggregation expression that was run.</p>
   * @public
   */
  aggregationExpression: string | undefined;

  /**
   * <p>The maximum number of rows contributed by a user in a SQL query.</p>
   * @public
   */
  userContributionLimit: number | undefined;

  /**
   * <p>The lower bound of the aggregation expression.</p>
   * @public
   */
  minColumnValue?: number | undefined;

  /**
   * <p>The upper bound of the aggregation expression.</p>
   * @public
   */
  maxColumnValue?: number | undefined;
}

/**
 * <p>An array that contains the sensitivity parameters.</p>
 * @public
 */
export interface DifferentialPrivacyParameters {
  /**
   * <p>Provides the sensitivity parameters that you can use to better understand the total amount of noise in query results.</p>
   * @public
   */
  sensitivityParameters: DifferentialPrivacySensitivityParameters[] | undefined;
}

/**
 * <p>Details of errors thrown by the protected query.</p>
 * @public
 */
export interface ProtectedQueryError {
  /**
   * <p>A description of why the query failed.</p>
   * @public
   */
  message: string | undefined;

  /**
   * <p>An error code for the error.</p>
   * @public
   */
  code: string | undefined;
}

/**
 * <p>Details about the member who received the query result.</p>
 * @public
 */
export interface ProtectedQuerySingleMemberOutput {
  /**
   * <p>The Amazon Web Services account ID of the member in the collaboration who can receive results for the query.</p>
   * @public
   */
  accountId: string | undefined;
}

/**
 * <p>Contains output information for protected queries with an S3 output type.</p>
 * @public
 */
export interface ProtectedQueryS3Output {
  /**
   * <p>The S3 location of the result.</p>
   * @public
   */
  location: string | undefined;
}

/**
 * <p> Contains the output information for a protected query with a distribute output configuration.</p> <p> This output type allows query results to be distributed to multiple receivers, including S3 and collaboration members. It is only available for queries using the Spark analytics engine.</p>
 * @public
 */
export interface ProtectedQueryDistributeOutput {
  /**
   * <p>Contains output information for protected queries with an S3 output type.</p>
   * @public
   */
  s3?: ProtectedQueryS3Output | undefined;

  /**
   * <p> Contains the output results for each member location specified in the distribute output configuration. Each entry provides details about the result distribution to a specific collaboration member. </p>
   * @public
   */
  memberList?: ProtectedQuerySingleMemberOutput[] | undefined;
}

/**
 * <p>Contains details about the protected query output.</p>
 * @public
 */
export type ProtectedQueryOutput =
  | ProtectedQueryOutput.DistributeMember
  | ProtectedQueryOutput.MemberListMember
  | ProtectedQueryOutput.S3Member
  | ProtectedQueryOutput.$UnknownMember;

/**
 * @public
 */
export namespace ProtectedQueryOutput {
  /**
   * <p>If present, the output for a protected query with an <code>S3</code> output type.</p>
   * @public
   */
  export interface S3Member {
    s3: ProtectedQueryS3Output;
    memberList?: never;
    distribute?: never;
    $unknown?: never;
  }

  /**
   * <p>The list of member Amazon Web Services account(s) that received the results of the query. </p>
   * @public
   */
  export interface MemberListMember {
    s3?: never;
    memberList: ProtectedQuerySingleMemberOutput[];
    distribute?: never;
    $unknown?: never;
  }

  /**
   * <p>Contains output information for protected queries that use a <code>distribute</code> output type. This output type lets you send query results to multiple locations - either to S3 or to collaboration members. </p> <note> <p> You can only use the <code>distribute</code> output type with the Spark analytics engine. </p> </note>
   * @public
   */
  export interface DistributeMember {
    s3?: never;
    memberList?: never;
    distribute: ProtectedQueryDistributeOutput;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    s3?: never;
    memberList?: never;
    distribute?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    s3: (value: ProtectedQueryS3Output) => T;
    memberList: (value: ProtectedQuerySingleMemberOutput[]) => T;
    distribute: (value: ProtectedQueryDistributeOutput) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ProtectedQueryOutput, visitor: Visitor<T>): T => {
    if (value.s3 !== undefined) return visitor.s3(value.s3);
    if (value.memberList !== undefined) return visitor.memberList(value.memberList);
    if (value.distribute !== undefined) return visitor.distribute(value.distribute);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Details about the query results.</p>
 * @public
 */
export interface ProtectedQueryResult {
  /**
   * <p>The output of the protected query.</p>
   * @public
   */
  output: ProtectedQueryOutput | undefined;
}

/**
 * <p> Contains configuration details for the protected query member output.</p>
 * @public
 */
export interface ProtectedQueryMemberOutputConfiguration {
  /**
   * <p>The unique identifier for the account.</p>
   * @public
   */
  accountId: string | undefined;
}

/**
 * <p> Specifies where you'll distribute the results of your protected query. You must configure either an S3 destination or a collaboration member destination.</p>
 * @public
 */
export type ProtectedQueryDistributeOutputConfigurationLocation =
  | ProtectedQueryDistributeOutputConfigurationLocation.MemberMember
  | ProtectedQueryDistributeOutputConfigurationLocation.S3Member
  | ProtectedQueryDistributeOutputConfigurationLocation.$UnknownMember;

/**
 * @public
 */
export namespace ProtectedQueryDistributeOutputConfigurationLocation {
  /**
   * <p>Contains the configuration to write the query results to S3.</p>
   * @public
   */
  export interface S3Member {
    s3: ProtectedQueryS3OutputConfiguration;
    member?: never;
    $unknown?: never;
  }

  /**
   * <p> Contains configuration details for the protected query member output.</p>
   * @public
   */
  export interface MemberMember {
    s3?: never;
    member: ProtectedQueryMemberOutputConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    s3?: never;
    member?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    s3: (value: ProtectedQueryS3OutputConfiguration) => T;
    member: (value: ProtectedQueryMemberOutputConfiguration) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ProtectedQueryDistributeOutputConfigurationLocation, visitor: Visitor<T>): T => {
    if (value.s3 !== undefined) return visitor.s3(value.s3);
    if (value.member !== undefined) return visitor.member(value.member);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p> Specifies the configuration for distributing protected query results to multiple receivers, including S3 and collaboration members.</p>
 * @public
 */
export interface ProtectedQueryDistributeOutputConfiguration {
  /**
   * <p> A list of locations where you want to distribute the protected query results. Each location must specify either an S3 destination or a collaboration member destination.</p> <important> <p>You can't specify more than one S3 location.</p> <p>You can't specify the query runner's account as a member location.</p> <p>You must include either an S3 or member output configuration for each location, but not both.</p> </important>
   * @public
   */
  locations: ProtectedQueryDistributeOutputConfigurationLocation[] | undefined;
}

/**
 * <p>Contains configuration details for protected query output.</p>
 * @public
 */
export type ProtectedQueryOutputConfiguration =
  | ProtectedQueryOutputConfiguration.DistributeMember
  | ProtectedQueryOutputConfiguration.MemberMember
  | ProtectedQueryOutputConfiguration.S3Member
  | ProtectedQueryOutputConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace ProtectedQueryOutputConfiguration {
  /**
   * <p>Required configuration for a protected query with an <code>s3</code> output type.</p>
   * @public
   */
  export interface S3Member {
    s3: ProtectedQueryS3OutputConfiguration;
    member?: never;
    distribute?: never;
    $unknown?: never;
  }

  /**
   * <p> Required configuration for a protected query with a <code>member</code> output type.</p>
   * @public
   */
  export interface MemberMember {
    s3?: never;
    member: ProtectedQueryMemberOutputConfiguration;
    distribute?: never;
    $unknown?: never;
  }

  /**
   * <p> Required configuration for a protected query with a <code>distribute</code> output type.</p>
   * @public
   */
  export interface DistributeMember {
    s3?: never;
    member?: never;
    distribute: ProtectedQueryDistributeOutputConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    s3?: never;
    member?: never;
    distribute?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    s3: (value: ProtectedQueryS3OutputConfiguration) => T;
    member: (value: ProtectedQueryMemberOutputConfiguration) => T;
    distribute: (value: ProtectedQueryDistributeOutputConfiguration) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ProtectedQueryOutputConfiguration, visitor: Visitor<T>): T => {
    if (value.s3 !== undefined) return visitor.s3(value.s3);
    if (value.member !== undefined) return visitor.member(value.member);
    if (value.distribute !== undefined) return visitor.distribute(value.distribute);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Contains configurations for protected query results.</p>
 * @public
 */
export interface ProtectedQueryResultConfiguration {
  /**
   * <p>Configuration for protected query results.</p>
   * @public
   */
  outputConfiguration: ProtectedQueryOutputConfiguration | undefined;
}

/**
 * <p>The parameters for the SQL type Protected Query.</p>
 * @public
 */
export interface ProtectedQuerySQLParameters {
  /**
   * <p>The query string to be submitted.</p>
   * @public
   */
  queryString?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) associated with the analysis template within a collaboration.</p>
   * @public
   */
  analysisTemplateArn?: string | undefined;

  /**
   * <p>The protected query SQL parameters.</p>
   * @public
   */
  parameters?: Record<string, string> | undefined;
}

/**
 * <p> Information related to the utilization of resources that have been billed or charged for in a given context, such as a protected query.</p>
 * @public
 */
export interface BilledResourceUtilization {
  /**
   * <p> The number of Clean Rooms Processing Unit (CRPU) hours that have been billed.</p>
   * @public
   */
  units: number | undefined;
}

/**
 * <p>Contains statistics about the execution of the protected query.</p>
 * @public
 */
export interface ProtectedQueryStatistics {
  /**
   * <p>The duration of the protected query, from creation until query completion, in milliseconds.</p>
   * @public
   */
  totalDurationInMillis?: number | undefined;

  /**
   * <p> The billed resource utilization.</p>
   * @public
   */
  billedResourceUtilization?: BilledResourceUtilization | undefined;
}

/**
 * @public
 * @enum
 */
export const ProtectedQueryStatus = {
  CANCELLED: "CANCELLED",
  CANCELLING: "CANCELLING",
  FAILED: "FAILED",
  STARTED: "STARTED",
  SUBMITTED: "SUBMITTED",
  SUCCESS: "SUCCESS",
  TIMED_OUT: "TIMED_OUT",
} as const;

/**
 * @public
 */
export type ProtectedQueryStatus = (typeof ProtectedQueryStatus)[keyof typeof ProtectedQueryStatus];

/**
 * <p>The parameters for an Clean Rooms protected query.</p>
 * @public
 */
export interface ProtectedQuery {
  /**
   * <p>The identifier for a protected query instance.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The identifier for the membership.</p>
   * @public
   */
  membershipId: string | undefined;

  /**
   * <p>The ARN of the membership.</p>
   * @public
   */
  membershipArn: string | undefined;

  /**
   * <p>The time at which the protected query was created.</p>
   * @public
   */
  createTime: Date | undefined;

  /**
   * <p>The protected query SQL parameters.</p>
   * @public
   */
  sqlParameters?: ProtectedQuerySQLParameters | undefined;

  /**
   * <p>The status of the query.</p>
   * @public
   */
  status: ProtectedQueryStatus | undefined;

  /**
   * <p>Contains any details needed to write the query results.</p>
   * @public
   */
  resultConfiguration?: ProtectedQueryResultConfiguration | undefined;

  /**
   * <p>Statistics about protected query execution.</p>
   * @public
   */
  statistics?: ProtectedQueryStatistics | undefined;

  /**
   * <p>The result of the protected query.</p>
   * @public
   */
  result?: ProtectedQueryResult | undefined;

  /**
   * <p>An error thrown by the protected query.</p>
   * @public
   */
  error?: ProtectedQueryError | undefined;

  /**
   * <p>The sensitivity parameters of the differential privacy results of the protected query.</p>
   * @public
   */
  differentialPrivacy?: DifferentialPrivacyParameters | undefined;

  /**
   * <p> The compute configuration for the protected query.</p>
   * @public
   */
  computeConfiguration?: ComputeConfiguration | undefined;
}

/**
 * @public
 */
export interface GetProtectedQueryOutput {
  /**
   * <p>The query processing metadata.</p>
   * @public
   */
  protectedQuery: ProtectedQuery | undefined;
}

/**
 * @public
 */
export interface ListMembershipsInput {
  /**
   * <p>The pagination token that's used to fetch the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results that are returned for an API request call. The service chooses a default number if you don't set one. The service might return a `nextToken` even if the `maxResults` value has not been met.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A filter which will return only memberships in the specified status.</p>
   * @public
   */
  status?: MembershipStatus | undefined;
}

/**
 * <p>The membership object listed by the request.</p>
 * @public
 */
export interface MembershipSummary {
  /**
   * <p>The unique ID for the membership's collaboration.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The unique ARN for the membership.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The unique ARN for the membership's associated collaboration.</p>
   * @public
   */
  collaborationArn: string | undefined;

  /**
   * <p>The unique ID for the membership's collaboration.</p>
   * @public
   */
  collaborationId: string | undefined;

  /**
   * <p>The identifier of the Amazon Web Services principal that created the collaboration. Currently only supports Amazon Web Services account ID.</p>
   * @public
   */
  collaborationCreatorAccountId: string | undefined;

  /**
   * <p>The display name of the collaboration creator.</p>
   * @public
   */
  collaborationCreatorDisplayName: string | undefined;

  /**
   * <p>The name for the membership's collaboration.</p>
   * @public
   */
  collaborationName: string | undefined;

  /**
   * <p>The time when the membership was created.</p>
   * @public
   */
  createTime: Date | undefined;

  /**
   * <p>The time the membership metadata was last updated.</p>
   * @public
   */
  updateTime: Date | undefined;

  /**
   * <p>The status of the membership.</p>
   * @public
   */
  status: MembershipStatus | undefined;

  /**
   * <p>The abilities granted to the collaboration member.</p>
   * @public
   */
  memberAbilities: MemberAbility[] | undefined;

  /**
   * <p>Provides a summary of the ML abilities for the collaboration member.</p>
   * @public
   */
  mlMemberAbilities?: MLMemberAbilities | undefined;

  /**
   * <p>The payment responsibilities accepted by the collaboration member.</p>
   * @public
   */
  paymentConfiguration: MembershipPaymentConfiguration | undefined;
}

/**
 * @public
 */
export interface ListMembershipsOutput {
  /**
   * <p>The pagination token that's used to fetch the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The list of memberships returned from the ListMemberships operation.</p>
   * @public
   */
  membershipSummaries: MembershipSummary[] | undefined;
}

/**
 * @public
 */
export interface ListPrivacyBudgetsInput {
  /**
   * <p>A unique identifier for one of your memberships for a collaboration. The privacy budget is retrieved from the collaboration that this membership belongs to. Accepts a membership ID.</p>
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * <p>The privacy budget type.</p>
   * @public
   */
  privacyBudgetType: PrivacyBudgetType | undefined;

  /**
   * <p>The pagination token that's used to fetch the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results that are returned for an API request call. The service chooses a default number if you don't set one. The service might return a `nextToken` even if the `maxResults` value has not been met.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the access budget resource to filter privacy budgets by.</p>
   * @public
   */
  accessBudgetResourceArn?: string | undefined;
}

/**
 * <p>An array that summaries the specified privacy budget. This summary includes collaboration information, creation information, membership information, and privacy budget information.</p>
 * @public
 */
export interface PrivacyBudgetSummary {
  /**
   * <p>The unique identifier of the privacy budget.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The unique identifier of the privacy budget template.</p>
   * @public
   */
  privacyBudgetTemplateId: string | undefined;

  /**
   * <p>The ARN of the privacy budget template.</p>
   * @public
   */
  privacyBudgetTemplateArn: string | undefined;

  /**
   * <p>The identifier for a membership resource.</p>
   * @public
   */
  membershipId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the member who created the privacy budget summary.</p>
   * @public
   */
  membershipArn: string | undefined;

  /**
   * <p>The unique identifier of the collaboration that contains this privacy budget.</p>
   * @public
   */
  collaborationId: string | undefined;

  /**
   * <p>The ARN of the collaboration that contains this privacy budget.</p>
   * @public
   */
  collaborationArn: string | undefined;

  /**
   * <p>Specifies the type of the privacy budget.</p>
   * @public
   */
  type: PrivacyBudgetType | undefined;

  /**
   * <p>The time at which the privacy budget was created.</p>
   * @public
   */
  createTime: Date | undefined;

  /**
   * <p>The most recent time at which the privacy budget was updated.</p>
   * @public
   */
  updateTime: Date | undefined;

  /**
   * <p>The provided privacy budget.</p>
   * @public
   */
  budget: PrivacyBudget | undefined;
}

/**
 * @public
 */
export interface ListPrivacyBudgetsOutput {
  /**
   * <p>An array that summarizes the privacy budgets. The summary includes collaboration information, membership information, privacy budget template information, and privacy budget details.</p>
   * @public
   */
  privacyBudgetSummaries: PrivacyBudgetSummary[] | undefined;

  /**
   * <p>The pagination token that's used to fetch the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListProtectedJobsInput {
  /**
   * <p>The identifier for the membership in the collaboration.</p>
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * <p>A filter on the status of the protected job.</p>
   * @public
   */
  status?: ProtectedJobStatus | undefined;

  /**
   * <p>The pagination token that's used to fetch the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results that are returned for an API request call. The service chooses a default number if you don't set one. The service might return a `nextToken` even if the `maxResults` value has not been met. </p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const ProtectedJobAnalysisType = {
  DIRECT_ANALYSIS: "DIRECT_ANALYSIS",
} as const;

/**
 * @public
 */
export type ProtectedJobAnalysisType = (typeof ProtectedJobAnalysisType)[keyof typeof ProtectedJobAnalysisType];

/**
 * <p>The protected job direct analysis configuration details.</p>
 * @public
 */
export interface ProtectedJobDirectAnalysisConfigurationDetails {
  /**
   * <p> The receiver account IDs.</p>
   * @public
   */
  receiverAccountIds?: string[] | undefined;
}

/**
 * <p>The protected job configuration details.</p>
 * @public
 */
export type ProtectedJobConfigurationDetails =
  | ProtectedJobConfigurationDetails.DirectAnalysisConfigurationDetailsMember
  | ProtectedJobConfigurationDetails.$UnknownMember;

/**
 * @public
 */
export namespace ProtectedJobConfigurationDetails {
  /**
   * <p>The details needed to configure the direct analysis.</p>
   * @public
   */
  export interface DirectAnalysisConfigurationDetailsMember {
    directAnalysisConfigurationDetails: ProtectedJobDirectAnalysisConfigurationDetails;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    directAnalysisConfigurationDetails?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    directAnalysisConfigurationDetails: (value: ProtectedJobDirectAnalysisConfigurationDetails) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ProtectedJobConfigurationDetails, visitor: Visitor<T>): T => {
    if (value.directAnalysisConfigurationDetails !== undefined)
      return visitor.directAnalysisConfigurationDetails(value.directAnalysisConfigurationDetails);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>The protected job receiver configuration.</p>
 * @public
 */
export interface ProtectedJobReceiverConfiguration {
  /**
   * <p> The analysis type for the protected job receiver configuration.</p>
   * @public
   */
  analysisType: ProtectedJobAnalysisType | undefined;

  /**
   * <p> The configuration details for the protected job receiver.</p>
   * @public
   */
  configurationDetails?: ProtectedJobConfigurationDetails | undefined;
}

/**
 * <p>The protected job summary for the objects listed by the request.</p>
 * @public
 */
export interface ProtectedJobSummary {
  /**
   * <p> The ID of the protected job.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The unique ID for the membership that initiated the protected job.</p>
   * @public
   */
  membershipId: string | undefined;

  /**
   * <p>The unique ARN for the membership that initiated the protected job.</p>
   * @public
   */
  membershipArn: string | undefined;

  /**
   * <p>The time the protected job was created.</p>
   * @public
   */
  createTime: Date | undefined;

  /**
   * <p>The status of the protected job.</p>
   * @public
   */
  status: ProtectedJobStatus | undefined;

  /**
   * <p> The receiver configurations for the protected job.</p>
   * @public
   */
  receiverConfigurations: ProtectedJobReceiverConfiguration[] | undefined;
}

/**
 * @public
 */
export interface ListProtectedJobsOutput {
  /**
   * <p>The pagination token that's used to fetch the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>A list of protected job summaries.</p>
   * @public
   */
  protectedJobs: ProtectedJobSummary[] | undefined;
}

/**
 * @public
 */
export interface ListProtectedQueriesInput {
  /**
   * <p>The identifier for the membership in the collaboration.</p>
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * <p>A filter on the status of the protected query.</p>
   * @public
   */
  status?: ProtectedQueryStatus | undefined;

  /**
   * <p>The pagination token that's used to fetch the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results that are returned for an API request call. The service chooses a default number if you don't set one. The service might return a `nextToken` even if the `maxResults` value has not been met. </p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p> The direct analysis configuration details.</p>
 * @public
 */
export interface DirectAnalysisConfigurationDetails {
  /**
   * <p> The account IDs for the member who received the results of a protected query.</p>
   * @public
   */
  receiverAccountIds?: string[] | undefined;
}

/**
 * <p> The configuration details.</p>
 * @public
 */
export type ConfigurationDetails =
  | ConfigurationDetails.DirectAnalysisConfigurationDetailsMember
  | ConfigurationDetails.$UnknownMember;

/**
 * @public
 */
export namespace ConfigurationDetails {
  /**
   * <p> The direct analysis configuration details.</p>
   * @public
   */
  export interface DirectAnalysisConfigurationDetailsMember {
    directAnalysisConfigurationDetails: DirectAnalysisConfigurationDetails;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    directAnalysisConfigurationDetails?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    directAnalysisConfigurationDetails: (value: DirectAnalysisConfigurationDetails) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ConfigurationDetails, visitor: Visitor<T>): T => {
    if (value.directAnalysisConfigurationDetails !== undefined)
      return visitor.directAnalysisConfigurationDetails(value.directAnalysisConfigurationDetails);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p> The receiver configuration for a protected query.</p>
 * @public
 */
export interface ReceiverConfiguration {
  /**
   * <p> The type of analysis for the protected query. The results of the query can be analyzed directly (<code>DIRECT_ANALYSIS</code>) or used as input into additional analyses (<code>ADDITIONAL_ANALYSIS</code>), such as a query that is a seed for a lookalike ML model.</p>
   * @public
   */
  analysisType: AnalysisType | undefined;

  /**
   * <p> The configuration details of the receiver configuration.</p>
   * @public
   */
  configurationDetails?: ConfigurationDetails | undefined;
}

/**
 * <p>The protected query summary for the objects listed by the request.</p>
 * @public
 */
export interface ProtectedQuerySummary {
  /**
   * <p>The unique ID of the protected query.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The unique ID for the membership that initiated the protected query.</p>
   * @public
   */
  membershipId: string | undefined;

  /**
   * <p>The unique ARN for the membership that initiated the protected query.</p>
   * @public
   */
  membershipArn: string | undefined;

  /**
   * <p>The time the protected query was created.</p>
   * @public
   */
  createTime: Date | undefined;

  /**
   * <p>The status of the protected query.</p>
   * @public
   */
  status: ProtectedQueryStatus | undefined;

  /**
   * <p> The receiver configuration.</p>
   * @public
   */
  receiverConfigurations: ReceiverConfiguration[] | undefined;
}

/**
 * @public
 */
export interface ListProtectedQueriesOutput {
  /**
   * <p>The pagination token that's used to fetch the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>A list of protected queries.</p>
   * @public
   */
  protectedQueries: ProtectedQuerySummary[] | undefined;
}

/**
 * <p>The epsilon and noise parameters that you want to preview.</p>
 * @public
 */
export interface DifferentialPrivacyPreviewParametersInput {
  /**
   * <p>The epsilon value that you want to preview.</p>
   * @public
   */
  epsilon: number | undefined;

  /**
   * <p>Noise added per query is measured in terms of the number of users whose contributions you want to obscure. This value governs the rate at which the privacy budget is depleted.</p>
   * @public
   */
  usersNoisePerQuery: number | undefined;
}

/**
 * <p>Specifies the updated epsilon and noise parameters to preview. The preview allows you to see how the maximum number of each type of aggregation function would change with the new parameters.</p>
 * @public
 */
export type PreviewPrivacyImpactParametersInput =
  | PreviewPrivacyImpactParametersInput.DifferentialPrivacyMember
  | PreviewPrivacyImpactParametersInput.$UnknownMember;

/**
 * @public
 */
export namespace PreviewPrivacyImpactParametersInput {
  /**
   * <p>An array that specifies the epsilon and noise parameters.</p>
   * @public
   */
  export interface DifferentialPrivacyMember {
    differentialPrivacy: DifferentialPrivacyPreviewParametersInput;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    differentialPrivacy?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    differentialPrivacy: (value: DifferentialPrivacyPreviewParametersInput) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: PreviewPrivacyImpactParametersInput, visitor: Visitor<T>): T => {
    if (value.differentialPrivacy !== undefined) return visitor.differentialPrivacy(value.differentialPrivacy);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface PreviewPrivacyImpactInput {
  /**
   * <p>A unique identifier for one of your memberships for a collaboration. Accepts a membership ID.</p>
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * <p>Specifies the desired epsilon and noise parameters to preview.</p>
   * @public
   */
  parameters: PreviewPrivacyImpactParametersInput | undefined;
}

/**
 * <p>Provides an estimate of the number of aggregation functions that the member who can query can run given the epsilon and noise parameters.</p>
 * @public
 */
export interface DifferentialPrivacyPreviewAggregation {
  /**
   * <p>The type of aggregation function.</p>
   * @public
   */
  type: DifferentialPrivacyAggregationType | undefined;

  /**
   * <p>The maximum number of aggregations that the member who can query can run given the epsilon and noise parameters.</p>
   * @public
   */
  maxCount: number | undefined;
}

/**
 * <p>Information about the number of aggregation functions that the member who can query can run given the epsilon and noise parameters.</p>
 * @public
 */
export interface DifferentialPrivacyPrivacyImpact {
  /**
   * <p>The number of aggregation functions that you can perform.</p>
   * @public
   */
  aggregations: DifferentialPrivacyPreviewAggregation[] | undefined;
}

/**
 * <p>Provides an estimate of the number of aggregation functions that the member who can query can run given the epsilon and noise parameters.</p>
 * @public
 */
export type PrivacyImpact = PrivacyImpact.DifferentialPrivacyMember | PrivacyImpact.$UnknownMember;

/**
 * @public
 */
export namespace PrivacyImpact {
  /**
   * <p>An object that lists the number and type of aggregation functions you can perform.</p>
   * @public
   */
  export interface DifferentialPrivacyMember {
    differentialPrivacy: DifferentialPrivacyPrivacyImpact;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    differentialPrivacy?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    differentialPrivacy: (value: DifferentialPrivacyPrivacyImpact) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: PrivacyImpact, visitor: Visitor<T>): T => {
    if (value.differentialPrivacy !== undefined) return visitor.differentialPrivacy(value.differentialPrivacy);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface PreviewPrivacyImpactOutput {
  /**
   * <p>An estimate of the number of aggregation functions that the member who can query can run given the epsilon and noise parameters. This does not change the privacy budget.</p>
   * @public
   */
  privacyImpact: PrivacyImpact | undefined;
}

/**
 * <p> The protected job member output configuration input.</p>
 * @public
 */
export interface ProtectedJobMemberOutputConfigurationInput {
  /**
   * <p> The account ID.</p>
   * @public
   */
  accountId: string | undefined;
}

/**
 * <p> The protected job output configuration input.</p>
 * @public
 */
export type ProtectedJobOutputConfigurationInput =
  | ProtectedJobOutputConfigurationInput.MemberMember
  | ProtectedJobOutputConfigurationInput.$UnknownMember;

/**
 * @public
 */
export namespace ProtectedJobOutputConfigurationInput {
  /**
   * <p> The member of the protected job output configuration input.</p>
   * @public
   */
  export interface MemberMember {
    member: ProtectedJobMemberOutputConfigurationInput;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    member?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    member: (value: ProtectedJobMemberOutputConfigurationInput) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ProtectedJobOutputConfigurationInput, visitor: Visitor<T>): T => {
    if (value.member !== undefined) return visitor.member(value.member);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>The protected job result configuration input.</p>
 * @public
 */
export interface ProtectedJobResultConfigurationInput {
  /**
   * <p> The output configuration for a protected job result.</p>
   * @public
   */
  outputConfiguration: ProtectedJobOutputConfigurationInput | undefined;
}

/**
 * @public
 * @enum
 */
export const ProtectedJobType = {
  PYSPARK: "PYSPARK",
} as const;

/**
 * @public
 */
export type ProtectedJobType = (typeof ProtectedJobType)[keyof typeof ProtectedJobType];

/**
 * @public
 */
export interface StartProtectedJobInput {
  /**
   * <p> The type of protected job to start.</p>
   * @public
   */
  type: ProtectedJobType | undefined;

  /**
   * <p>A unique identifier for the membership to run this job against. Currently accepts a membership ID.</p>
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * <p> The job parameters.</p>
   * @public
   */
  jobParameters: ProtectedJobParameters | undefined;

  /**
   * <p>The details needed to write the job results.</p>
   * @public
   */
  resultConfiguration?: ProtectedJobResultConfigurationInput | undefined;

  /**
   * <p>The compute configuration for the protected job.</p>
   * @public
   */
  computeConfiguration?: ProtectedJobComputeConfiguration | undefined;
}

/**
 * @public
 */
export interface StartProtectedJobOutput {
  /**
   * <p> The protected job.</p>
   * @public
   */
  protectedJob: ProtectedJob | undefined;
}

/**
 * @public
 * @enum
 */
export const ProtectedQueryType = {
  SQL: "SQL",
} as const;

/**
 * @public
 */
export type ProtectedQueryType = (typeof ProtectedQueryType)[keyof typeof ProtectedQueryType];

/**
 * @public
 */
export interface StartProtectedQueryInput {
  /**
   * <p>The type of the protected query to be started.</p>
   * @public
   */
  type: ProtectedQueryType | undefined;

  /**
   * <p>A unique identifier for the membership to run this query against. Currently accepts a membership ID.</p>
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * <p>The protected SQL query parameters.</p>
   * @public
   */
  sqlParameters: ProtectedQuerySQLParameters | undefined;

  /**
   * <p>The details needed to write the query results.</p>
   * @public
   */
  resultConfiguration?: ProtectedQueryResultConfiguration | undefined;

  /**
   * <p> The compute configuration for the protected query.</p>
   * @public
   */
  computeConfiguration?: ComputeConfiguration | undefined;
}

/**
 * @public
 */
export interface StartProtectedQueryOutput {
  /**
   * <p>The protected query.</p>
   * @public
   */
  protectedQuery: ProtectedQuery | undefined;
}

/**
 * @public
 */
export interface UpdateMembershipInput {
  /**
   * <p>The unique identifier of the membership.</p>
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * <p>An indicator as to whether query logging has been enabled or disabled for the membership.</p> <p>When <code>ENABLED</code>, Clean Rooms logs details about queries run within this collaboration and those logs can be viewed in Amazon CloudWatch Logs. The default value is <code>DISABLED</code>.</p>
   * @public
   */
  queryLogStatus?: MembershipQueryLogStatus | undefined;

  /**
   * <p>An indicator as to whether job logging has been enabled or disabled for the collaboration. </p> <p>When <code>ENABLED</code>, Clean Rooms logs details about jobs run within this collaboration and those logs can be viewed in Amazon CloudWatch Logs. The default value is <code>DISABLED</code>.</p>
   * @public
   */
  jobLogStatus?: MembershipJobLogStatus | undefined;

  /**
   * <p>The default protected query result configuration as specified by the member who can receive results.</p>
   * @public
   */
  defaultResultConfiguration?: MembershipProtectedQueryResultConfiguration | undefined;

  /**
   * <p> The default job result configuration.</p>
   * @public
   */
  defaultJobResultConfiguration?: MembershipProtectedJobResultConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateMembershipOutput {
  /**
   * <p>The membership object.</p>
   * @public
   */
  membership: Membership | undefined;
}

/**
 * @public
 * @enum
 */
export const TargetProtectedJobStatus = {
  CANCELLED: "CANCELLED",
} as const;

/**
 * @public
 */
export type TargetProtectedJobStatus = (typeof TargetProtectedJobStatus)[keyof typeof TargetProtectedJobStatus];

/**
 * @public
 */
export interface UpdateProtectedJobInput {
  /**
   * <p>The identifier for a member of a protected job instance.</p>
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * <p> The identifier of the protected job to update.</p>
   * @public
   */
  protectedJobIdentifier: string | undefined;

  /**
   * <p>The target status of a protected job. Used to update the execution status of a currently running job.</p>
   * @public
   */
  targetStatus: TargetProtectedJobStatus | undefined;
}

/**
 * @public
 */
export interface UpdateProtectedJobOutput {
  /**
   * <p>The protected job output.</p>
   * @public
   */
  protectedJob: ProtectedJob | undefined;
}

/**
 * @public
 * @enum
 */
export const TargetProtectedQueryStatus = {
  CANCELLED: "CANCELLED",
} as const;

/**
 * @public
 */
export type TargetProtectedQueryStatus = (typeof TargetProtectedQueryStatus)[keyof typeof TargetProtectedQueryStatus];

/**
 * @public
 */
export interface UpdateProtectedQueryInput {
  /**
   * <p>The identifier for a member of a protected query instance.</p>
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * <p>The identifier for a protected query instance.</p>
   * @public
   */
  protectedQueryIdentifier: string | undefined;

  /**
   * <p>The target status of a query. Used to update the execution status of a currently running query.</p>
   * @public
   */
  targetStatus: TargetProtectedQueryStatus | undefined;
}

/**
 * @public
 */
export interface UpdateProtectedQueryOutput {
  /**
   * <p>The protected query output.</p>
   * @public
   */
  protectedQuery: ProtectedQuery | undefined;
}

/**
 * <p>The epsilon and noise parameter values that you want to use for the differential privacy template.</p>
 * @public
 */
export interface DifferentialPrivacyTemplateParametersInput {
  /**
   * <p>The epsilon value that you want to use.</p>
   * @public
   */
  epsilon: number | undefined;

  /**
   * <p>Noise added per query is measured in terms of the number of users whose contributions you want to obscure. This value governs the rate at which the privacy budget is depleted.</p>
   * @public
   */
  usersNoisePerQuery: number | undefined;
}

/**
 * <p>The epsilon and noise parameters that you want to use for the privacy budget template.</p>
 * @public
 */
export type PrivacyBudgetTemplateParametersInput =
  | PrivacyBudgetTemplateParametersInput.AccessBudgetMember
  | PrivacyBudgetTemplateParametersInput.DifferentialPrivacyMember
  | PrivacyBudgetTemplateParametersInput.$UnknownMember;

/**
 * @public
 */
export namespace PrivacyBudgetTemplateParametersInput {
  /**
   * <p>An object that specifies the epsilon and noise parameters.</p>
   * @public
   */
  export interface DifferentialPrivacyMember {
    differentialPrivacy: DifferentialPrivacyTemplateParametersInput;
    accessBudget?: never;
    $unknown?: never;
  }

  /**
   * <p>Access budget configuration for the privacy budget template input, enabling integration with access budget functionality.</p>
   * @public
   */
  export interface AccessBudgetMember {
    differentialPrivacy?: never;
    accessBudget: AccessBudgetsPrivacyTemplateParametersInput;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    differentialPrivacy?: never;
    accessBudget?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    differentialPrivacy: (value: DifferentialPrivacyTemplateParametersInput) => T;
    accessBudget: (value: AccessBudgetsPrivacyTemplateParametersInput) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: PrivacyBudgetTemplateParametersInput, visitor: Visitor<T>): T => {
    if (value.differentialPrivacy !== undefined) return visitor.differentialPrivacy(value.differentialPrivacy);
    if (value.accessBudget !== undefined) return visitor.accessBudget(value.accessBudget);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface CreatePrivacyBudgetTemplateInput {
  /**
   * <p>A unique identifier for one of your memberships for a collaboration. The privacy budget template is created in the collaboration that this membership belongs to. Accepts a membership ID.</p>
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * <p>How often the privacy budget refreshes.</p> <important> <p>If you plan to regularly bring new data into the collaboration, you can use <code>CALENDAR_MONTH</code> to automatically get a new privacy budget for the collaboration every calendar month. Choosing this option allows arbitrary amounts of information to be revealed about rows of the data when repeatedly queries across refreshes. Avoid choosing this if the same rows will be repeatedly queried between privacy budget refreshes.</p> </important>
   * @public
   */
  autoRefresh?: PrivacyBudgetTemplateAutoRefresh | undefined;

  /**
   * <p>Specifies the type of the privacy budget template.</p>
   * @public
   */
  privacyBudgetType: PrivacyBudgetType | undefined;

  /**
   * <p>Specifies your parameters for the privacy budget template.</p>
   * @public
   */
  parameters: PrivacyBudgetTemplateParametersInput | undefined;

  /**
   * <p>An optional label that you can assign to a resource when you create it. Each tag consists of a key and an optional value, both of which you define. When you use tagging, you can also use tag-based access control in IAM policies to control access to this resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * <p>An object that defines the privacy budget template.</p>
 * @public
 */
export interface PrivacyBudgetTemplate {
  /**
   * <p>The unique identifier of the privacy budget template.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The ARN of the privacy budget template.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The identifier for a membership resource.</p>
   * @public
   */
  membershipId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the member who created the privacy budget template.</p>
   * @public
   */
  membershipArn: string | undefined;

  /**
   * <p>The unique ID of the collaboration that contains this privacy budget template.</p>
   * @public
   */
  collaborationId: string | undefined;

  /**
   * <p>The ARN of the collaboration that contains this privacy budget template.</p>
   * @public
   */
  collaborationArn: string | undefined;

  /**
   * <p>The time at which the privacy budget template was created.</p>
   * @public
   */
  createTime: Date | undefined;

  /**
   * <p>The most recent time at which the privacy budget template was updated.</p>
   * @public
   */
  updateTime: Date | undefined;

  /**
   * <p>Specifies the type of the privacy budget template.</p>
   * @public
   */
  privacyBudgetType: PrivacyBudgetType | undefined;

  /**
   * <p>How often the privacy budget refreshes.</p> <important> <p>If you plan to regularly bring new data into the collaboration, use <code>CALENDAR_MONTH</code> to automatically get a new privacy budget for the collaboration every calendar month. Choosing this option allows arbitrary amounts of information to be revealed about rows of the data when repeatedly queried across refreshes. Avoid choosing this if the same rows will be repeatedly queried between privacy budget refreshes.</p> </important>
   * @public
   */
  autoRefresh: PrivacyBudgetTemplateAutoRefresh | undefined;

  /**
   * <p>Specifies the epsilon and noise parameters for the privacy budget template.</p>
   * @public
   */
  parameters: PrivacyBudgetTemplateParametersOutput | undefined;
}

/**
 * @public
 */
export interface CreatePrivacyBudgetTemplateOutput {
  /**
   * <p>A summary of the elements in the privacy budget template.</p>
   * @public
   */
  privacyBudgetTemplate: PrivacyBudgetTemplate | undefined;
}

/**
 * @public
 */
export interface DeletePrivacyBudgetTemplateInput {
  /**
   * <p>A unique identifier for one of your memberships for a collaboration. The privacy budget template is deleted from the collaboration that this membership belongs to. Accepts a membership ID.</p>
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * <p>A unique identifier for your privacy budget template. </p>
   * @public
   */
  privacyBudgetTemplateIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeletePrivacyBudgetTemplateOutput {}

/**
 * @public
 */
export interface GetPrivacyBudgetTemplateInput {
  /**
   * <p>A unique identifier for one of your memberships for a collaboration. The privacy budget template is retrieved from the collaboration that this membership belongs to. Accepts a membership ID.</p>
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * <p>A unique identifier for your privacy budget template.</p>
   * @public
   */
  privacyBudgetTemplateIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetPrivacyBudgetTemplateOutput {
  /**
   * <p>Returns the details of the privacy budget template that you requested.</p>
   * @public
   */
  privacyBudgetTemplate: PrivacyBudgetTemplate | undefined;
}

/**
 * @public
 */
export interface ListPrivacyBudgetTemplatesInput {
  /**
   * <p>A unique identifier for one of your memberships for a collaboration. The privacy budget templates are retrieved from the collaboration that this membership belongs to. Accepts a membership ID.</p>
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * <p>The pagination token that's used to fetch the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results that are returned for an API request call. The service chooses a default number if you don't set one. The service might return a `nextToken` even if the `maxResults` value has not been met.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>A summary of the privacy budget template. The summary includes membership information, collaboration information, and creation information.</p>
 * @public
 */
export interface PrivacyBudgetTemplateSummary {
  /**
   * <p>The unique identifier of the privacy budget template.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The ARN of the privacy budget template.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The identifier for a membership resource.</p>
   * @public
   */
  membershipId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the member who created the privacy budget template.</p>
   * @public
   */
  membershipArn: string | undefined;

  /**
   * <p>The unique ID of the collaboration that contains this privacy budget template.</p>
   * @public
   */
  collaborationId: string | undefined;

  /**
   * <p>The ARN of the collaboration that contains this privacy budget template.</p>
   * @public
   */
  collaborationArn: string | undefined;

  /**
   * <p>The type of the privacy budget template.</p>
   * @public
   */
  privacyBudgetType: PrivacyBudgetType | undefined;

  /**
   * <p>The time at which the privacy budget template was created.</p>
   * @public
   */
  createTime: Date | undefined;

  /**
   * <p>The most recent time at which the privacy budget template was updated.</p>
   * @public
   */
  updateTime: Date | undefined;
}

/**
 * @public
 */
export interface ListPrivacyBudgetTemplatesOutput {
  /**
   * <p>The pagination token that's used to fetch the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>An array that summarizes the privacy budget templates. The summary includes collaboration information, creation information, and privacy budget type.</p>
   * @public
   */
  privacyBudgetTemplateSummaries: PrivacyBudgetTemplateSummary[] | undefined;
}

/**
 * <p>The epsilon and noise parameter values that you want to update in the differential privacy template.</p>
 * @public
 */
export interface DifferentialPrivacyTemplateUpdateParameters {
  /**
   * <p>The updated epsilon value that you want to use.</p>
   * @public
   */
  epsilon?: number | undefined;

  /**
   * <p>The updated value of noise added per query. It is measured in terms of the number of users whose contributions you want to obscure. This value governs the rate at which the privacy budget is depleted.</p>
   * @public
   */
  usersNoisePerQuery?: number | undefined;
}

/**
 * <p>The epsilon and noise parameters that you want to update in the privacy budget template.</p>
 * @public
 */
export type PrivacyBudgetTemplateUpdateParameters =
  | PrivacyBudgetTemplateUpdateParameters.AccessBudgetMember
  | PrivacyBudgetTemplateUpdateParameters.DifferentialPrivacyMember
  | PrivacyBudgetTemplateUpdateParameters.$UnknownMember;

/**
 * @public
 */
export namespace PrivacyBudgetTemplateUpdateParameters {
  /**
   * <p>An object that specifies the new values for the epsilon and noise parameters.</p>
   * @public
   */
  export interface DifferentialPrivacyMember {
    differentialPrivacy: DifferentialPrivacyTemplateUpdateParameters;
    accessBudget?: never;
    $unknown?: never;
  }

  /**
   * <p> The new access budget configuration that completely replaces the existing access budget settings in the privacy budget template.</p>
   * @public
   */
  export interface AccessBudgetMember {
    differentialPrivacy?: never;
    accessBudget: AccessBudgetsPrivacyTemplateUpdateParameters;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    differentialPrivacy?: never;
    accessBudget?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    differentialPrivacy: (value: DifferentialPrivacyTemplateUpdateParameters) => T;
    accessBudget: (value: AccessBudgetsPrivacyTemplateUpdateParameters) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: PrivacyBudgetTemplateUpdateParameters, visitor: Visitor<T>): T => {
    if (value.differentialPrivacy !== undefined) return visitor.differentialPrivacy(value.differentialPrivacy);
    if (value.accessBudget !== undefined) return visitor.accessBudget(value.accessBudget);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface UpdatePrivacyBudgetTemplateInput {
  /**
   * <p>A unique identifier for one of your memberships for a collaboration. The privacy budget template is updated in the collaboration that this membership belongs to. Accepts a membership ID.</p>
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * <p>A unique identifier for your privacy budget template that you want to update.</p>
   * @public
   */
  privacyBudgetTemplateIdentifier: string | undefined;

  /**
   * <p>Specifies the type of the privacy budget template.</p>
   * @public
   */
  privacyBudgetType: PrivacyBudgetType | undefined;

  /**
   * <p>Specifies the epsilon and noise parameters for the privacy budget template.</p>
   * @public
   */
  parameters?: PrivacyBudgetTemplateUpdateParameters | undefined;
}

/**
 * @public
 */
export interface UpdatePrivacyBudgetTemplateOutput {
  /**
   * <p>Summary of the privacy budget template.</p>
   * @public
   */
  privacyBudgetTemplate: PrivacyBudgetTemplate | undefined;
}

/**
 * @public
 */
export interface TagResourceInput {
  /**
   * <p>The Amazon Resource Name (ARN) associated with the resource you want to tag.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>A map of objects specifying each key name and value.</p>
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceOutput {}

/**
 * @public
 */
export interface UntagResourceInput {
  /**
   * <p>The Amazon Resource Name (ARN) associated with the resource you want to remove the tag from.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>A list of key names of tags to be removed.</p>
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceOutput {}

/**
 * @internal
 */
export const ProtectedQuerySQLParametersFilterSensitiveLog = (obj: ProtectedQuerySQLParameters): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ProtectedQueryFilterSensitiveLog = (obj: ProtectedQuery): any => ({
  ...obj,
  ...(obj.sqlParameters && { sqlParameters: SENSITIVE_STRING }),
  ...(obj.resultConfiguration && { resultConfiguration: obj.resultConfiguration }),
  ...(obj.result && { result: obj.result }),
  ...(obj.computeConfiguration && { computeConfiguration: obj.computeConfiguration }),
});

/**
 * @internal
 */
export const GetProtectedQueryOutputFilterSensitiveLog = (obj: GetProtectedQueryOutput): any => ({
  ...obj,
  ...(obj.protectedQuery && { protectedQuery: ProtectedQueryFilterSensitiveLog(obj.protectedQuery) }),
});

/**
 * @internal
 */
export const StartProtectedQueryInputFilterSensitiveLog = (obj: StartProtectedQueryInput): any => ({
  ...obj,
  ...(obj.sqlParameters && { sqlParameters: SENSITIVE_STRING }),
  ...(obj.resultConfiguration && { resultConfiguration: obj.resultConfiguration }),
  ...(obj.computeConfiguration && { computeConfiguration: obj.computeConfiguration }),
});

/**
 * @internal
 */
export const StartProtectedQueryOutputFilterSensitiveLog = (obj: StartProtectedQueryOutput): any => ({
  ...obj,
  ...(obj.protectedQuery && { protectedQuery: ProtectedQueryFilterSensitiveLog(obj.protectedQuery) }),
});

/**
 * @internal
 */
export const UpdateProtectedQueryOutputFilterSensitiveLog = (obj: UpdateProtectedQueryOutput): any => ({
  ...obj,
  ...(obj.protectedQuery && { protectedQuery: ProtectedQueryFilterSensitiveLog(obj.protectedQuery) }),
});
