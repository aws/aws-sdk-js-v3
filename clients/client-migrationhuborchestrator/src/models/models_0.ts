// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@aws-sdk/smithy-client";

import { MigrationHubOrchestratorServiceException as __BaseException } from "./MigrationHubOrchestratorServiceException";

/**
 * <p>You do not have sufficient access to perform this action.</p>
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  $retryable = {};
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDeniedException, __BaseException>) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedException.prototype);
  }
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  resourceArn: string | undefined;
}

export interface ListTagsForResourceResponse {
  /**
   * <p>The tags added to a resource.</p>
   */
  tags?: Record<string, string>;
}

/**
 * <p>The resource is not available.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
  }
}

/**
 * <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  $retryable = {};
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
  }
}

/**
 * <p>A map of key value pairs that is generated when you create a migration workflow. The
 *             key value pairs will differ based on your selection of the template.</p>
 */
export type StepInput =
  | StepInput.IntegerValueMember
  | StepInput.ListOfStringsValueMember
  | StepInput.MapOfStringValueMember
  | StepInput.StringValueMember
  | StepInput.$UnknownMember;

export namespace StepInput {
  /**
   * <p>The value of the integer.</p>
   */
  export interface IntegerValueMember {
    integerValue: number;
    stringValue?: never;
    listOfStringsValue?: never;
    mapOfStringValue?: never;
    $unknown?: never;
  }

  /**
   * <p>String value.</p>
   */
  export interface StringValueMember {
    integerValue?: never;
    stringValue: string;
    listOfStringsValue?: never;
    mapOfStringValue?: never;
    $unknown?: never;
  }

  /**
   * <p>List of string values.</p>
   */
  export interface ListOfStringsValueMember {
    integerValue?: never;
    stringValue?: never;
    listOfStringsValue: string[];
    mapOfStringValue?: never;
    $unknown?: never;
  }

  /**
   * <p>Map of string values.</p>
   */
  export interface MapOfStringValueMember {
    integerValue?: never;
    stringValue?: never;
    listOfStringsValue?: never;
    mapOfStringValue: Record<string, string>;
    $unknown?: never;
  }

  export interface $UnknownMember {
    integerValue?: never;
    stringValue?: never;
    listOfStringsValue?: never;
    mapOfStringValue?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    integerValue: (value: number) => T;
    stringValue: (value: string) => T;
    listOfStringsValue: (value: string[]) => T;
    mapOfStringValue: (value: Record<string, string>) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: StepInput, visitor: Visitor<T>): T => {
    if (value.integerValue !== undefined) return visitor.integerValue(value.integerValue);
    if (value.stringValue !== undefined) return visitor.stringValue(value.stringValue);
    if (value.listOfStringsValue !== undefined) return visitor.listOfStringsValue(value.listOfStringsValue);
    if (value.mapOfStringValue !== undefined) return visitor.mapOfStringValue(value.mapOfStringValue);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

export interface CreateMigrationWorkflowRequest {
  /**
   * <p>The name of the migration workflow.</p>
   */
  name: string | undefined;

  /**
   * <p>The description of the migration workflow.</p>
   */
  description?: string;

  /**
   * <p>The ID of the template.</p>
   */
  templateId: string | undefined;

  /**
   * <p>The configuration ID of the application configured in Application Discovery Service.</p>
   */
  applicationConfigurationId: string | undefined;

  /**
   * <p>The input parameters required to create a migration workflow.</p>
   */
  inputParameters: Record<string, StepInput> | undefined;

  /**
   * <p>The servers on which a step will be run.</p>
   */
  stepTargets?: string[];

  /**
   * <p>The tags to add on a migration workflow.</p>
   */
  tags?: Record<string, string>;
}

export enum MigrationWorkflowStatusEnum {
  COMPLETED = "COMPLETED",
  CREATING = "CREATING",
  CREATION_FAILED = "CREATION_FAILED",
  DELETED = "DELETED",
  DELETING = "DELETING",
  DELETION_FAILED = "DELETION_FAILED",
  IN_PROGRESS = "IN_PROGRESS",
  NOT_STARTED = "NOT_STARTED",
  PAUSED = "PAUSED",
  PAUSING = "PAUSING",
  PAUSING_FAILED = "PAUSING_FAILED",
  STARTING = "STARTING",
  USER_ATTENTION_REQUIRED = "USER_ATTENTION_REQUIRED",
  WORKFLOW_FAILED = "WORKFLOW_FAILED",
}

export interface CreateMigrationWorkflowResponse {
  /**
   * <p>The ID of the migration workflow.</p>
   */
  id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the migration workflow.</p>
   */
  arn?: string;

  /**
   * <p>The name of the migration workflow.</p>
   */
  name?: string;

  /**
   * <p>The description of the migration workflow.</p>
   */
  description?: string;

  /**
   * <p>The ID of the template.</p>
   */
  templateId?: string;

  /**
   * <p>The configuration ID of the application configured in Application Discovery Service.</p>
   */
  adsApplicationConfigurationId?: string;

  /**
   * <p>The inputs for creating a migration workflow.</p>
   */
  workflowInputs?: Record<string, StepInput>;

  /**
   * <p>The servers on which a step will be run.</p>
   */
  stepTargets?: string[];

  /**
   * <p>The status of the migration workflow.</p>
   */
  status?: MigrationWorkflowStatusEnum | string;

  /**
   * <p>The time at which the migration workflow was created.</p>
   */
  creationTime?: Date;

  /**
   * <p>The tags to add on a migration workflow.</p>
   */
  tags?: Record<string, string>;
}

/**
 * <p>An internal error has occurred.</p>
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerException, __BaseException>) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerException.prototype);
  }
}

/**
 * <p>The request was denied due to request throttling.</p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottlingException, __BaseException>) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottlingException.prototype);
  }
}

export interface DeleteMigrationWorkflowRequest {
  /**
   * <p>The ID of the migration workflow you want to delete.</p>
   */
  id: string | undefined;
}

export interface DeleteMigrationWorkflowResponse {
  /**
   * <p>The ID of the migration workflow.</p>
   */
  id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the migration workflow.</p>
   */
  arn?: string;

  /**
   * <p>The status of the migration workflow.</p>
   */
  status?: MigrationWorkflowStatusEnum | string;
}

export interface GetMigrationWorkflowRequest {
  /**
   * <p>The ID of the migration workflow.</p>
   */
  id: string | undefined;
}

/**
 * <p>List of AWS services utilized in a migration workflow.</p>
 */
export interface Tool {
  /**
   * <p>The name of an AWS service. </p>
   */
  name?: string;

  /**
   * <p>The URL of an AWS service.</p>
   */
  url?: string;
}

export interface GetMigrationWorkflowResponse {
  /**
   * <p>The ID of the migration workflow.</p>
   */
  id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the migration workflow.</p>
   */
  arn?: string;

  /**
   * <p>The name of the migration workflow.</p>
   */
  name?: string;

  /**
   * <p>The description of the migration workflow.</p>
   */
  description?: string;

  /**
   * <p>The ID of the template.</p>
   */
  templateId?: string;

  /**
   * <p>The configuration ID of the application configured in Application Discovery Service.</p>
   */
  adsApplicationConfigurationId?: string;

  /**
   * <p>The name of the application configured in Application Discovery Service.</p>
   */
  adsApplicationName?: string;

  /**
   * <p>The status of the migration workflow.</p>
   */
  status?: MigrationWorkflowStatusEnum | string;

  /**
   * <p>The status message of the migration workflow.</p>
   */
  statusMessage?: string;

  /**
   * <p>The time at which the migration workflow was created.</p>
   */
  creationTime?: Date;

  /**
   * <p>The time at which the migration workflow was last started.</p>
   */
  lastStartTime?: Date;

  /**
   * <p>The time at which the migration workflow was last stopped.</p>
   */
  lastStopTime?: Date;

  /**
   * <p>The time at which the migration workflow was last modified.</p>
   */
  lastModifiedTime?: Date;

  /**
   * <p>The time at which the migration workflow ended.</p>
   */
  endTime?: Date;

  /**
   * <p>List of AWS services utilized in a migration workflow.</p>
   */
  tools?: Tool[];

  /**
   * <p>The total number of steps in the migration workflow.</p>
   */
  totalSteps?: number;

  /**
   * <p>Get a list of completed steps in the migration workflow.</p>
   */
  completedSteps?: number;

  /**
   * <p>The inputs required for creating the migration workflow.</p>
   */
  workflowInputs?: Record<string, StepInput>;

  /**
   * <p>The tags added to the migration workflow.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>The Amazon S3 bucket where the migration logs are stored.</p>
   */
  workflowBucket?: string;
}

export interface ListMigrationWorkflowsRequest {
  /**
   * <p>The maximum number of results that can be returned.</p>
   */
  maxResults?: number;

  /**
   * <p>The pagination token.</p>
   */
  nextToken?: string;

  /**
   * <p>The ID of the template.</p>
   */
  templateId?: string;

  /**
   * <p>The name of the application configured in Application Discovery Service.</p>
   */
  adsApplicationConfigurationName?: string;

  /**
   * <p>The status of the migration workflow.</p>
   */
  status?: MigrationWorkflowStatusEnum | string;

  /**
   * <p>The name of the migration workflow.</p>
   */
  name?: string;
}

/**
 * <p>The summary of a migration workflow.</p>
 */
export interface MigrationWorkflowSummary {
  /**
   * <p>The ID of the migration workflow.</p>
   */
  id?: string;

  /**
   * <p>The name of the migration workflow.</p>
   */
  name?: string;

  /**
   * <p>The ID of the template.</p>
   */
  templateId?: string;

  /**
   * <p>The name of the application configured in Application Discovery Service.</p>
   */
  adsApplicationConfigurationName?: string;

  /**
   * <p>The status of the migration workflow.</p>
   */
  status?: MigrationWorkflowStatusEnum | string;

  /**
   * <p>The time at which the migration workflow was created.</p>
   */
  creationTime?: Date;

  /**
   * <p>The time at which the migration workflow ended.</p>
   */
  endTime?: Date;

  /**
   * <p>The status message of the migration workflow.</p>
   */
  statusMessage?: string;

  /**
   * <p>The steps completed in the migration workflow.</p>
   */
  completedSteps?: number;

  /**
   * <p>All the steps in a migration workflow.</p>
   */
  totalSteps?: number;
}

export interface ListMigrationWorkflowsResponse {
  /**
   * <p>The pagination token.</p>
   */
  nextToken?: string;

  /**
   * <p>The summary of the migration workflow.</p>
   */
  migrationWorkflowSummary: MigrationWorkflowSummary[] | undefined;
}

export interface StartMigrationWorkflowRequest {
  /**
   * <p>The ID of the migration workflow.</p>
   */
  id: string | undefined;
}

export interface StartMigrationWorkflowResponse {
  /**
   * <p>The ID of the migration workflow.</p>
   */
  id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the migration workflow.</p>
   */
  arn?: string;

  /**
   * <p>The status of the migration workflow.</p>
   */
  status?: MigrationWorkflowStatusEnum | string;

  /**
   * <p>The status message of the migration workflow.</p>
   */
  statusMessage?: string;

  /**
   * <p>The time at which the migration workflow was last started.</p>
   */
  lastStartTime?: Date;
}

export interface StopMigrationWorkflowRequest {
  /**
   * <p>The ID of the migration workflow.</p>
   */
  id: string | undefined;
}

export interface StopMigrationWorkflowResponse {
  /**
   * <p>The ID of the migration workflow.</p>
   */
  id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the migration workflow.</p>
   */
  arn?: string;

  /**
   * <p>The status of the migration workflow.</p>
   */
  status?: MigrationWorkflowStatusEnum | string;

  /**
   * <p>The status message of the migration workflow.</p>
   */
  statusMessage?: string;

  /**
   * <p>The time at which the migration workflow was stopped.</p>
   */
  lastStopTime?: Date;
}

export interface UpdateMigrationWorkflowRequest {
  /**
   * <p>The ID of the migration workflow.</p>
   */
  id: string | undefined;

  /**
   * <p>The name of the migration workflow.</p>
   */
  name?: string;

  /**
   * <p>The description of the migration workflow.</p>
   */
  description?: string;

  /**
   * <p>The input parameters required to update a migration workflow.</p>
   */
  inputParameters?: Record<string, StepInput>;

  /**
   * <p>The servers on which a step will be run.</p>
   */
  stepTargets?: string[];
}

export interface UpdateMigrationWorkflowResponse {
  /**
   * <p>The ID of the migration workflow.</p>
   */
  id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the migration workflow.</p>
   */
  arn?: string;

  /**
   * <p>The name of the migration workflow.</p>
   */
  name?: string;

  /**
   * <p>The description of the migration workflow.</p>
   */
  description?: string;

  /**
   * <p>The ID of the template.</p>
   */
  templateId?: string;

  /**
   * <p>The ID of the application configured in Application Discovery Service.</p>
   */
  adsApplicationConfigurationId?: string;

  /**
   * <p>The inputs required to update a migration workflow.</p>
   */
  workflowInputs?: Record<string, StepInput>;

  /**
   * <p>The servers on which a step will be run.</p>
   */
  stepTargets?: string[];

  /**
   * <p>The status of the migration workflow.</p>
   */
  status?: MigrationWorkflowStatusEnum | string;

  /**
   * <p>The time at which the migration workflow was created.</p>
   */
  creationTime?: Date;

  /**
   * <p>The time at which the migration workflow was last modified.</p>
   */
  lastModifiedTime?: Date;

  /**
   * <p>The tags added to the migration workflow.</p>
   */
  tags?: Record<string, string>;
}

export interface GetMigrationWorkflowTemplateRequest {
  /**
   * <p>The ID of the template.</p>
   */
  id: string | undefined;
}

export enum DataType {
  INTEGER = "INTEGER",
  STRING = "STRING",
  STRINGLIST = "STRINGLIST",
  STRINGMAP = "STRINGMAP",
}

/**
 * <p>The input parameters of a template.</p>
 */
export interface TemplateInput {
  /**
   * <p>The name of the template.</p>
   */
  inputName?: string;

  /**
   * <p>The data type of the template input.</p>
   */
  dataType?: DataType | string;

  /**
   * <p>Determine if an input is required from the template.</p>
   */
  required?: boolean;
}

export enum TemplateStatus {
  CREATED = "CREATED",
}

export interface GetMigrationWorkflowTemplateResponse {
  /**
   * <p>The ID of the template.</p>
   */
  id?: string;

  /**
   * <p>The name of the template.</p>
   */
  name?: string;

  /**
   * <p>The time at which the template was last created.</p>
   */
  description?: string;

  /**
   * <p>The inputs provided for the creation of the migration workflow.</p>
   */
  inputs?: TemplateInput[];

  /**
   * <p>List of AWS services utilized in a migration workflow.</p>
   */
  tools?: Tool[];

  /**
   * <p>The status of the template.</p>
   */
  status?: TemplateStatus | string;

  /**
   * <p>The time at which the template was last created.</p>
   */
  creationTime?: Date;
}

export interface ListMigrationWorkflowTemplatesRequest {
  /**
   * <p>The maximum number of results that can be returned.</p>
   */
  maxResults?: number;

  /**
   * <p>The pagination token.</p>
   */
  nextToken?: string;

  /**
   * <p>The name of the template.</p>
   */
  name?: string;
}

/**
 * <p>The summary of the template.</p>
 */
export interface TemplateSummary {
  /**
   * <p>The ID of the template.</p>
   */
  id?: string;

  /**
   * <p>The name of the template.</p>
   */
  name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the template.</p>
   */
  arn?: string;

  /**
   * <p>The description of the template.</p>
   */
  description?: string;
}

export interface ListMigrationWorkflowTemplatesResponse {
  /**
   * <p>The pagination token.</p>
   */
  nextToken?: string;

  /**
   * <p>The summary of the template.</p>
   */
  templateSummary: TemplateSummary[] | undefined;
}

export interface ListPluginsRequest {
  /**
   * <p>The maximum number of plugins that can be returned.</p>
   */
  maxResults?: number;

  /**
   * <p>The pagination token.</p>
   */
  nextToken?: string;
}

export enum PluginHealth {
  PLUGIN_HEALTHY = "HEALTHY",
  PLUGIN_UNHEALTHY = "UNHEALTHY",
}

/**
 * <p>The summary of the Migration Hub Orchestrator plugin.</p>
 */
export interface PluginSummary {
  /**
   * <p>The ID of the plugin.</p>
   */
  pluginId?: string;

  /**
   * <p>The name of the host.</p>
   */
  hostname?: string;

  /**
   * <p>The status of the plugin.</p>
   */
  status?: PluginHealth | string;

  /**
   * <p>The IP address at which the plugin is located.</p>
   */
  ipAddress?: string;

  /**
   * <p>The version of the plugin.</p>
   */
  version?: string;

  /**
   * <p>The time at which the plugin was registered.</p>
   */
  registeredTime?: string;
}

export interface ListPluginsResponse {
  /**
   * <p>The pagination token.</p>
   */
  nextToken?: string;

  /**
   * <p>Migration Hub Orchestrator plugins.</p>
   */
  plugins?: PluginSummary[];
}

export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource to which you want to add tags.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>A collection of labels, in the form of key:value pairs, that apply to this
   *             resource.</p>
   */
  tags: Record<string, string> | undefined;
}

export interface TagResourceResponse {}

export interface GetTemplateStepRequest {
  /**
   * <p>The ID of the step.</p>
   */
  id: string | undefined;

  /**
   * <p>The ID of the template.</p>
   */
  templateId: string | undefined;

  /**
   * <p>The ID of the step group.</p>
   */
  stepGroupId: string | undefined;
}

/**
 * <p>The output of the step.</p>
 */
export interface StepOutput {
  /**
   * <p>The name of the step.</p>
   */
  name?: string;

  /**
   * <p>The data type of the step output.</p>
   */
  dataType?: DataType | string;

  /**
   * <p>Determine if an output is required from a step.</p>
   */
  required?: boolean;
}

export enum StepActionType {
  AUTOMATED = "AUTOMATED",
  MANUAL = "MANUAL",
}

/**
 * <p>Command to be run on a particular operating system.</p>
 */
export interface PlatformCommand {
  /**
   * <p>Command for Linux.</p>
   */
  linux?: string;

  /**
   * <p>Command for Windows.</p>
   */
  windows?: string;
}

export enum RunEnvironment {
  AWS = "AWS",
  ONPREMISE = "ONPREMISE",
}

/**
 * <p>The script location for a particular operating system.</p>
 */
export interface PlatformScriptKey {
  /**
   * <p>The script location for Linux.</p>
   */
  linux?: string;

  /**
   * <p>The script location for Windows.</p>
   */
  windows?: string;
}

export enum TargetType {
  ALL = "ALL",
  NONE = "NONE",
  SINGLE = "SINGLE",
}

/**
 * <p>The custom script to run tests on source or target environments.</p>
 */
export interface StepAutomationConfiguration {
  /**
   * <p>The Amazon S3 bucket where the script is located.</p>
   */
  scriptLocationS3Bucket?: string;

  /**
   * <p>The Amazon S3 key for the script location.</p>
   */
  scriptLocationS3Key?: PlatformScriptKey;

  /**
   * <p>The command to run the script.</p>
   */
  command?: PlatformCommand;

  /**
   * <p>The source or target environment.</p>
   */
  runEnvironment?: RunEnvironment | string;

  /**
   * <p>The servers on which to run the script.</p>
   */
  targetType?: TargetType | string;
}

export interface GetTemplateStepResponse {
  /**
   * <p>The ID of the step.</p>
   */
  id?: string;

  /**
   * <p>The ID of the step group.</p>
   */
  stepGroupId?: string;

  /**
   * <p>The ID of the template.</p>
   */
  templateId?: string;

  /**
   * <p>The name of the step.</p>
   */
  name?: string;

  /**
   * <p>The description of the step.</p>
   */
  description?: string;

  /**
   * <p>The action type of the step. You must run and update the status of a manual step for
   *             the workflow to continue after the completion of the step.</p>
   */
  stepActionType?: StepActionType | string;

  /**
   * <p>The time at which the step was created.</p>
   */
  creationTime?: string;

  /**
   * <p>The previous step.</p>
   */
  previous?: string[];

  /**
   * <p>The next step.</p>
   */
  next?: string[];

  /**
   * <p>The outputs of the step.</p>
   */
  outputs?: StepOutput[];

  /**
   * <p>The custom script to run tests on source or target environments.</p>
   */
  stepAutomationConfiguration?: StepAutomationConfiguration;
}

export interface ListTemplateStepsRequest {
  /**
   * <p>The maximum number of results that can be returned.</p>
   */
  maxResults?: number;

  /**
   * <p>The pagination token.</p>
   */
  nextToken?: string;

  /**
   * <p>The ID of the template.</p>
   */
  templateId: string | undefined;

  /**
   * <p>The ID of the step group.</p>
   */
  stepGroupId: string | undefined;
}

export enum Owner {
  AWSManaged = "AWS_MANAGED",
  CUSTOM = "CUSTOM",
}

/**
 * <p>The summary of the step.</p>
 */
export interface TemplateStepSummary {
  /**
   * <p>The ID of the step.</p>
   */
  id?: string;

  /**
   * <p>The ID of the step group.</p>
   */
  stepGroupId?: string;

  /**
   * <p>The ID of the template.</p>
   */
  templateId?: string;

  /**
   * <p>The name of the step.</p>
   */
  name?: string;

  /**
   * <p>The action type of the step. You must run and update the status of a manual step for
   *             the workflow to continue after the completion of the step.</p>
   */
  stepActionType?: StepActionType | string;

  /**
   * <p>The servers on which to run the script.</p>
   */
  targetType?: TargetType | string;

  /**
   * <p>The owner of the step.</p>
   */
  owner?: Owner | string;

  /**
   * <p>The previous step.</p>
   */
  previous?: string[];

  /**
   * <p>The next step.</p>
   */
  next?: string[];
}

export interface ListTemplateStepsResponse {
  /**
   * <p>The pagination token.</p>
   */
  nextToken?: string;

  /**
   * <p>The list of summaries of steps in a template.</p>
   */
  templateStepSummaryList?: TemplateStepSummary[];
}

export interface GetTemplateStepGroupRequest {
  /**
   * <p>The ID of the template.</p>
   */
  templateId: string | undefined;

  /**
   * <p>The ID of the step group.</p>
   */
  id: string | undefined;
}

export enum StepGroupStatus {
  AWAITING_DEPENDENCIES = "AWAITING_DEPENDENCIES",
  COMPLETED = "COMPLETED",
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
  PAUSED = "PAUSED",
  PAUSING = "PAUSING",
  READY = "READY",
  USER_ATTENTION_REQUIRED = "USER_ATTENTION_REQUIRED",
}

export interface GetTemplateStepGroupResponse {
  /**
   * <p>The ID of the template.</p>
   */
  templateId?: string;

  /**
   * <p>The ID of the step group.</p>
   */
  id?: string;

  /**
   * <p>The name of the step group.</p>
   */
  name?: string;

  /**
   * <p>The description of the step group.</p>
   */
  description?: string;

  /**
   * <p>The status of the step group.</p>
   */
  status?: StepGroupStatus | string;

  /**
   * <p>The time at which the step group was created.</p>
   */
  creationTime?: Date;

  /**
   * <p>The time at which the step group was last modified.</p>
   */
  lastModifiedTime?: Date;

  /**
   * <p>List of AWS services utilized in a migration workflow.</p>
   */
  tools?: Tool[];

  /**
   * <p>The previous step group.</p>
   */
  previous?: string[];

  /**
   * <p>The next step group.</p>
   */
  next?: string[];
}

export interface ListTemplateStepGroupsRequest {
  /**
   * <p>The maximum number of results that can be returned.</p>
   */
  maxResults?: number;

  /**
   * <p>The pagination token.</p>
   */
  nextToken?: string;

  /**
   * <p>The ID of the template.</p>
   */
  templateId: string | undefined;
}

/**
 * <p>The summary of the step group in the template.</p>
 */
export interface TemplateStepGroupSummary {
  /**
   * <p>The ID of the step group.</p>
   */
  id?: string;

  /**
   * <p>The name of the step group.</p>
   */
  name?: string;

  /**
   * <p>The previous step group.</p>
   */
  previous?: string[];

  /**
   * <p>The next step group.</p>
   */
  next?: string[];
}

export interface ListTemplateStepGroupsResponse {
  /**
   * <p>The pagination token.</p>
   */
  nextToken?: string;

  /**
   * <p>The summary of the step group in the template.</p>
   */
  templateStepGroupSummary: TemplateStepGroupSummary[] | undefined;
}

export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource from which you want to remove
   *             tags.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>One or more tag keys. Specify only the tag keys, not the tag values.</p>
   */
  tagKeys: string[] | undefined;
}

export interface UntagResourceResponse {}

/**
 * <p>A structure to hold multiple values of an output.</p>
 */
export type WorkflowStepOutputUnion =
  | WorkflowStepOutputUnion.IntegerValueMember
  | WorkflowStepOutputUnion.ListOfStringValueMember
  | WorkflowStepOutputUnion.StringValueMember
  | WorkflowStepOutputUnion.$UnknownMember;

export namespace WorkflowStepOutputUnion {
  /**
   * <p>The integer value. </p>
   */
  export interface IntegerValueMember {
    integerValue: number;
    stringValue?: never;
    listOfStringValue?: never;
    $unknown?: never;
  }

  /**
   * <p>The string value.</p>
   */
  export interface StringValueMember {
    integerValue?: never;
    stringValue: string;
    listOfStringValue?: never;
    $unknown?: never;
  }

  /**
   * <p>The list of string value.</p>
   */
  export interface ListOfStringValueMember {
    integerValue?: never;
    stringValue?: never;
    listOfStringValue: string[];
    $unknown?: never;
  }

  export interface $UnknownMember {
    integerValue?: never;
    stringValue?: never;
    listOfStringValue?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    integerValue: (value: number) => T;
    stringValue: (value: string) => T;
    listOfStringValue: (value: string[]) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: WorkflowStepOutputUnion, visitor: Visitor<T>): T => {
    if (value.integerValue !== undefined) return visitor.integerValue(value.integerValue);
    if (value.stringValue !== undefined) return visitor.stringValue(value.stringValue);
    if (value.listOfStringValue !== undefined) return visitor.listOfStringValue(value.listOfStringValue);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>The output of a step.</p>
 */
export interface WorkflowStepOutput {
  /**
   * <p>The name of the step.</p>
   */
  name?: string;

  /**
   * <p>The data type of the output.</p>
   */
  dataType?: DataType | string;

  /**
   * <p>Determine if an output is required from a step.</p>
   */
  required?: boolean;

  /**
   * <p>The value of the output.</p>
   */
  value?: WorkflowStepOutputUnion;
}

/**
 * <p>The custom script to run tests on source or target environments.</p>
 */
export interface WorkflowStepAutomationConfiguration {
  /**
   * <p>The Amazon S3 bucket where the script is located.</p>
   */
  scriptLocationS3Bucket?: string;

  /**
   * <p>The Amazon S3 key for the script location.</p>
   */
  scriptLocationS3Key?: PlatformScriptKey;

  /**
   * <p>The command required to run the script.</p>
   */
  command?: PlatformCommand;

  /**
   * <p>The source or target environment.</p>
   */
  runEnvironment?: RunEnvironment | string;

  /**
   * <p>The servers on which to run the script.</p>
   */
  targetType?: TargetType | string;
}

export interface CreateWorkflowStepRequest {
  /**
   * <p>The name of the step.</p>
   */
  name: string | undefined;

  /**
   * <p>The ID of the step group.</p>
   */
  stepGroupId: string | undefined;

  /**
   * <p>The ID of the migration workflow.</p>
   */
  workflowId: string | undefined;

  /**
   * <p>The action type of the step. You must run and update the status of a manual step for
   *             the workflow to continue after the completion of the step.</p>
   */
  stepActionType: StepActionType | string | undefined;

  /**
   * <p>The description of the step.</p>
   */
  description?: string;

  /**
   * <p>The custom script to run tests on source or target environments.</p>
   */
  workflowStepAutomationConfiguration?: WorkflowStepAutomationConfiguration;

  /**
   * <p>The servers on which a step will be run.</p>
   */
  stepTarget?: string[];

  /**
   * <p>The key value pairs added for the expected output.</p>
   */
  outputs?: WorkflowStepOutput[];

  /**
   * <p>The previous step.</p>
   */
  previous?: string[];

  /**
   * <p>The next step.</p>
   */
  next?: string[];
}

export interface CreateWorkflowStepResponse {
  /**
   * <p>The ID of the step.</p>
   */
  id?: string;

  /**
   * <p>The ID of the step group.</p>
   */
  stepGroupId?: string;

  /**
   * <p>The ID of the migration workflow.</p>
   */
  workflowId?: string;

  /**
   * <p>The name of the step.</p>
   */
  name?: string;
}

export interface DeleteWorkflowStepRequest {
  /**
   * <p>The ID of the step you want to delete.</p>
   */
  id: string | undefined;

  /**
   * <p>The ID of the step group that contains the step you want to delete.</p>
   */
  stepGroupId: string | undefined;

  /**
   * <p>The ID of the migration workflow.</p>
   */
  workflowId: string | undefined;
}

export interface DeleteWorkflowStepResponse {}

export interface GetWorkflowStepRequest {
  /**
   * <p>The ID of the migration workflow.</p>
   */
  workflowId: string | undefined;

  /**
   * <p>desThe ID of the step group.</p>
   */
  stepGroupId: string | undefined;

  /**
   * <p>The ID of the step.</p>
   */
  id: string | undefined;
}

export enum StepStatus {
  AWAITING_DEPENDENCIES = "AWAITING_DEPENDENCIES",
  COMPLETED = "COMPLETED",
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
  PAUSED = "PAUSED",
  READY = "READY",
  USER_ATTENTION_REQUIRED = "USER_ATTENTION_REQUIRED",
}

export interface GetWorkflowStepResponse {
  /**
   * <p>The name of the step.</p>
   */
  name?: string;

  /**
   * <p>The ID of the step group.</p>
   */
  stepGroupId?: string;

  /**
   * <p>The ID of the migration workflow.</p>
   */
  workflowId?: string;

  /**
   * <p>The ID of the step.</p>
   */
  stepId?: string;

  /**
   * <p>The description of the step.</p>
   */
  description?: string;

  /**
   * <p>The action type of the step. You must run and update the status of a manual step for
   *             the workflow to continue after the completion of the step.</p>
   */
  stepActionType?: StepActionType | string;

  /**
   * <p>The owner of the step.</p>
   */
  owner?: Owner | string;

  /**
   * <p>The custom script to run tests on source or target environments.</p>
   */
  workflowStepAutomationConfiguration?: WorkflowStepAutomationConfiguration;

  /**
   * <p>The servers on which a step will be run.</p>
   */
  stepTarget?: string[];

  /**
   * <p>The outputs of the step.</p>
   */
  outputs?: WorkflowStepOutput[];

  /**
   * <p>The previous step.</p>
   */
  previous?: string[];

  /**
   * <p>The next step.</p>
   */
  next?: string[];

  /**
   * <p>The status of the step.</p>
   */
  status?: StepStatus | string;

  /**
   * <p>The status message of the migration workflow.</p>
   */
  statusMessage?: string;

  /**
   * <p>The output location of the script.</p>
   */
  scriptOutputLocation?: string;

  /**
   * <p>The time at which the step was created.</p>
   */
  creationTime?: Date;

  /**
   * <p>The time at which the workflow was last started.</p>
   */
  lastStartTime?: Date;

  /**
   * <p>The time at which the step ended.</p>
   */
  endTime?: Date;

  /**
   * <p>The number of servers that have been migrated.</p>
   */
  noOfSrvCompleted?: number;

  /**
   * <p>The number of servers that have failed to migrate.</p>
   */
  noOfSrvFailed?: number;

  /**
   * <p>The total number of servers that have been migrated.</p>
   */
  totalNoOfSrv?: number;
}

export interface ListWorkflowStepsRequest {
  /**
   * <p>The pagination token.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results that can be returned.</p>
   */
  maxResults?: number;

  /**
   * <p>The ID of the migration workflow.</p>
   */
  workflowId: string | undefined;

  /**
   * <p>The ID of the step group.</p>
   */
  stepGroupId: string | undefined;
}

/**
 * <p>The summary of the step in a migration workflow.</p>
 */
export interface WorkflowStepSummary {
  /**
   * <p>The ID of the step.</p>
   */
  stepId?: string;

  /**
   * <p>The name of the step.</p>
   */
  name?: string;

  /**
   * <p>The action type of the step. You must run and update the status of a manual step for
   *             the workflow to continue after the completion of the step.</p>
   */
  stepActionType?: StepActionType | string;

  /**
   * <p>The owner of the step.</p>
   */
  owner?: Owner | string;

  /**
   * <p>The previous step.</p>
   */
  previous?: string[];

  /**
   * <p>The next step.</p>
   */
  next?: string[];

  /**
   * <p>The status of the step.</p>
   */
  status?: StepStatus | string;

  /**
   * <p>The status message of the migration workflow.</p>
   */
  statusMessage?: string;

  /**
   * <p>The number of servers that have been migrated.</p>
   */
  noOfSrvCompleted?: number;

  /**
   * <p>The number of servers that have failed to migrate.</p>
   */
  noOfSrvFailed?: number;

  /**
   * <p>The total number of servers that have been migrated.</p>
   */
  totalNoOfSrv?: number;

  /**
   * <p>The description of the step.</p>
   */
  description?: string;

  /**
   * <p>The location of the script.</p>
   */
  scriptLocation?: string;
}

export interface ListWorkflowStepsResponse {
  /**
   * <p>The pagination token.</p>
   */
  nextToken?: string;

  /**
   * <p>The summary of steps in a migration workflow.</p>
   */
  workflowStepsSummary: WorkflowStepSummary[] | undefined;
}

export interface RetryWorkflowStepRequest {
  /**
   * <p>The ID of the migration workflow.</p>
   */
  workflowId: string | undefined;

  /**
   * <p>The ID of the step group.</p>
   */
  stepGroupId: string | undefined;

  /**
   * <p>The ID of the step.</p>
   */
  id: string | undefined;
}

export interface RetryWorkflowStepResponse {
  /**
   * <p>The ID of the step group.</p>
   */
  stepGroupId?: string;

  /**
   * <p>The ID of the migration workflow.</p>
   */
  workflowId?: string;

  /**
   * <p>The ID of the step.</p>
   */
  id?: string;

  /**
   * <p>The status of the step.</p>
   */
  status?: StepStatus | string;
}

export interface UpdateWorkflowStepRequest {
  /**
   * <p>The ID of the step.</p>
   */
  id: string | undefined;

  /**
   * <p>The ID of the step group.</p>
   */
  stepGroupId: string | undefined;

  /**
   * <p>The ID of the migration workflow.</p>
   */
  workflowId: string | undefined;

  /**
   * <p>The name of the step.</p>
   */
  name?: string;

  /**
   * <p>The description of the step.</p>
   */
  description?: string;

  /**
   * <p>The action type of the step. You must run and update the status of a manual step for
   *             the workflow to continue after the completion of the step.</p>
   */
  stepActionType?: StepActionType | string;

  /**
   * <p>The custom script to run tests on the source and target environments.</p>
   */
  workflowStepAutomationConfiguration?: WorkflowStepAutomationConfiguration;

  /**
   * <p>The servers on which a step will be run.</p>
   */
  stepTarget?: string[];

  /**
   * <p>The outputs of a step.</p>
   */
  outputs?: WorkflowStepOutput[];

  /**
   * <p>The previous step.</p>
   */
  previous?: string[];

  /**
   * <p>The next step.</p>
   */
  next?: string[];

  /**
   * <p>The status of the step.</p>
   */
  status?: StepStatus | string;
}

export interface UpdateWorkflowStepResponse {
  /**
   * <p>The ID of the step.</p>
   */
  id?: string;

  /**
   * <p>The ID of the step group.</p>
   */
  stepGroupId?: string;

  /**
   * <p>The ID of the migration workflow.</p>
   */
  workflowId?: string;

  /**
   * <p>The name of the step.</p>
   */
  name?: string;
}

export interface CreateWorkflowStepGroupRequest {
  /**
   * <p>The ID of the migration workflow that will contain the step group.</p>
   */
  workflowId: string | undefined;

  /**
   * <p>The name of the step group.</p>
   */
  name: string | undefined;

  /**
   * <p>The description of the step group.</p>
   */
  description?: string;

  /**
   * <p>The next step group.</p>
   */
  next?: string[];

  /**
   * <p>The previous step group.</p>
   */
  previous?: string[];
}

export interface CreateWorkflowStepGroupResponse {
  /**
   * <p>The ID of the migration workflow that contains the step group.</p>
   */
  workflowId?: string;

  /**
   * <p>The name of the step group.</p>
   */
  name?: string;

  /**
   * <p>The ID of the step group.</p>
   */
  id?: string;

  /**
   * <p>The description of the step group.</p>
   */
  description?: string;

  /**
   * <p>List of AWS services utilized in a migration workflow.</p>
   */
  tools?: Tool[];

  /**
   * <p>The next step group.</p>
   */
  next?: string[];

  /**
   * <p>The previous step group.</p>
   */
  previous?: string[];

  /**
   * <p>The time at which the step group is created.</p>
   */
  creationTime?: Date;
}

export interface DeleteWorkflowStepGroupRequest {
  /**
   * <p>The ID of the migration workflow.</p>
   */
  workflowId: string | undefined;

  /**
   * <p>The ID of the step group you want to delete.</p>
   */
  id: string | undefined;
}

export interface DeleteWorkflowStepGroupResponse {}

export interface GetWorkflowStepGroupRequest {
  /**
   * <p>The ID of the step group.</p>
   */
  id: string | undefined;

  /**
   * <p>The ID of the migration workflow.</p>
   */
  workflowId: string | undefined;
}

export interface GetWorkflowStepGroupResponse {
  /**
   * <p>The ID of the step group.</p>
   */
  id?: string;

  /**
   * <p>The ID of the migration workflow.</p>
   */
  workflowId?: string;

  /**
   * <p>The name of the step group.</p>
   */
  name?: string;

  /**
   * <p>The description of the step group.</p>
   */
  description?: string;

  /**
   * <p>The status of the step group.</p>
   */
  status?: StepGroupStatus | string;

  /**
   * <p>The owner of the step group.</p>
   */
  owner?: Owner | string;

  /**
   * <p>The time at which the step group was created.</p>
   */
  creationTime?: Date;

  /**
   * <p>The time at which the step group was last modified.</p>
   */
  lastModifiedTime?: Date;

  /**
   * <p>The time at which the step group ended.</p>
   */
  endTime?: Date;

  /**
   * <p>List of AWS services utilized in a migration workflow.</p>
   */
  tools?: Tool[];

  /**
   * <p>The previous step group.</p>
   */
  previous?: string[];

  /**
   * <p>The next step group.</p>
   */
  next?: string[];
}

export interface ListWorkflowStepGroupsRequest {
  /**
   * <p>The pagination token.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results that can be returned.</p>
   */
  maxResults?: number;

  /**
   * <p>The ID of the migration workflow.</p>
   */
  workflowId: string | undefined;
}

/**
 * <p>The summary of a step group in a workflow.</p>
 */
export interface WorkflowStepGroupSummary {
  /**
   * <p>The ID of the step group.</p>
   */
  id?: string;

  /**
   * <p>The name of the step group.</p>
   */
  name?: string;

  /**
   * <p>The owner of the step group.</p>
   */
  owner?: Owner | string;

  /**
   * <p>The status of the step group.</p>
   */
  status?: StepGroupStatus | string;

  /**
   * <p>The previous step group.</p>
   */
  previous?: string[];

  /**
   * <p>The next step group.</p>
   */
  next?: string[];
}

export interface ListWorkflowStepGroupsResponse {
  /**
   * <p>The pagination token.</p>
   */
  nextToken?: string;

  /**
   * <p>The summary of step groups in a migration workflow.</p>
   */
  workflowStepGroupsSummary: WorkflowStepGroupSummary[] | undefined;
}

export interface UpdateWorkflowStepGroupRequest {
  /**
   * <p>The ID of the migration workflow.</p>
   */
  workflowId: string | undefined;

  /**
   * <p>The ID of the step group.</p>
   */
  id: string | undefined;

  /**
   * <p>The name of the step group.</p>
   */
  name?: string;

  /**
   * <p>The description of the step group.</p>
   */
  description?: string;

  /**
   * <p>The next step group.</p>
   */
  next?: string[];

  /**
   * <p>The previous step group.</p>
   */
  previous?: string[];
}

export interface UpdateWorkflowStepGroupResponse {
  /**
   * <p>The ID of the migration workflow.</p>
   */
  workflowId?: string;

  /**
   * <p>The name of the step group.</p>
   */
  name?: string;

  /**
   * <p>The ID of the step group.</p>
   */
  id?: string;

  /**
   * <p>The description of the step group.</p>
   */
  description?: string;

  /**
   * <p>List of AWS services utilized in a migration workflow.</p>
   */
  tools?: Tool[];

  /**
   * <p>The next step group.</p>
   */
  next?: string[];

  /**
   * <p>The previous step group.</p>
   */
  previous?: string[];

  /**
   * <p>The time at which the step group was last modified.</p>
   */
  lastModifiedTime?: Date;
}

/**
 * @internal
 */
export const ListTagsForResourceRequestFilterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceResponseFilterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StepInputFilterSensitiveLog = (obj: StepInput): any => {
  if (obj.integerValue !== undefined) return { integerValue: obj.integerValue };
  if (obj.stringValue !== undefined) return { stringValue: obj.stringValue };
  if (obj.listOfStringsValue !== undefined) return { listOfStringsValue: obj.listOfStringsValue };
  if (obj.mapOfStringValue !== undefined) return { mapOfStringValue: obj.mapOfStringValue };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const CreateMigrationWorkflowRequestFilterSensitiveLog = (obj: CreateMigrationWorkflowRequest): any => ({
  ...obj,
  ...(obj.inputParameters && { inputParameters: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateMigrationWorkflowResponseFilterSensitiveLog = (obj: CreateMigrationWorkflowResponse): any => ({
  ...obj,
  ...(obj.workflowInputs && { workflowInputs: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DeleteMigrationWorkflowRequestFilterSensitiveLog = (obj: DeleteMigrationWorkflowRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteMigrationWorkflowResponseFilterSensitiveLog = (obj: DeleteMigrationWorkflowResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetMigrationWorkflowRequestFilterSensitiveLog = (obj: GetMigrationWorkflowRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ToolFilterSensitiveLog = (obj: Tool): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetMigrationWorkflowResponseFilterSensitiveLog = (obj: GetMigrationWorkflowResponse): any => ({
  ...obj,
  ...(obj.workflowInputs && { workflowInputs: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListMigrationWorkflowsRequestFilterSensitiveLog = (obj: ListMigrationWorkflowsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MigrationWorkflowSummaryFilterSensitiveLog = (obj: MigrationWorkflowSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListMigrationWorkflowsResponseFilterSensitiveLog = (obj: ListMigrationWorkflowsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartMigrationWorkflowRequestFilterSensitiveLog = (obj: StartMigrationWorkflowRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartMigrationWorkflowResponseFilterSensitiveLog = (obj: StartMigrationWorkflowResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopMigrationWorkflowRequestFilterSensitiveLog = (obj: StopMigrationWorkflowRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopMigrationWorkflowResponseFilterSensitiveLog = (obj: StopMigrationWorkflowResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateMigrationWorkflowRequestFilterSensitiveLog = (obj: UpdateMigrationWorkflowRequest): any => ({
  ...obj,
  ...(obj.inputParameters && { inputParameters: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateMigrationWorkflowResponseFilterSensitiveLog = (obj: UpdateMigrationWorkflowResponse): any => ({
  ...obj,
  ...(obj.workflowInputs && { workflowInputs: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetMigrationWorkflowTemplateRequestFilterSensitiveLog = (
  obj: GetMigrationWorkflowTemplateRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TemplateInputFilterSensitiveLog = (obj: TemplateInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetMigrationWorkflowTemplateResponseFilterSensitiveLog = (
  obj: GetMigrationWorkflowTemplateResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListMigrationWorkflowTemplatesRequestFilterSensitiveLog = (
  obj: ListMigrationWorkflowTemplatesRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TemplateSummaryFilterSensitiveLog = (obj: TemplateSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListMigrationWorkflowTemplatesResponseFilterSensitiveLog = (
  obj: ListMigrationWorkflowTemplatesResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListPluginsRequestFilterSensitiveLog = (obj: ListPluginsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PluginSummaryFilterSensitiveLog = (obj: PluginSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListPluginsResponseFilterSensitiveLog = (obj: ListPluginsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceRequestFilterSensitiveLog = (obj: TagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceResponseFilterSensitiveLog = (obj: TagResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetTemplateStepRequestFilterSensitiveLog = (obj: GetTemplateStepRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StepOutputFilterSensitiveLog = (obj: StepOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PlatformCommandFilterSensitiveLog = (obj: PlatformCommand): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PlatformScriptKeyFilterSensitiveLog = (obj: PlatformScriptKey): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StepAutomationConfigurationFilterSensitiveLog = (obj: StepAutomationConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetTemplateStepResponseFilterSensitiveLog = (obj: GetTemplateStepResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTemplateStepsRequestFilterSensitiveLog = (obj: ListTemplateStepsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TemplateStepSummaryFilterSensitiveLog = (obj: TemplateStepSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTemplateStepsResponseFilterSensitiveLog = (obj: ListTemplateStepsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetTemplateStepGroupRequestFilterSensitiveLog = (obj: GetTemplateStepGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetTemplateStepGroupResponseFilterSensitiveLog = (obj: GetTemplateStepGroupResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTemplateStepGroupsRequestFilterSensitiveLog = (obj: ListTemplateStepGroupsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TemplateStepGroupSummaryFilterSensitiveLog = (obj: TemplateStepGroupSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTemplateStepGroupsResponseFilterSensitiveLog = (obj: ListTemplateStepGroupsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceRequestFilterSensitiveLog = (obj: UntagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceResponseFilterSensitiveLog = (obj: UntagResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const WorkflowStepOutputUnionFilterSensitiveLog = (obj: WorkflowStepOutputUnion): any => {
  if (obj.integerValue !== undefined) return { integerValue: obj.integerValue };
  if (obj.stringValue !== undefined) return { stringValue: obj.stringValue };
  if (obj.listOfStringValue !== undefined) return { listOfStringValue: obj.listOfStringValue };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const WorkflowStepOutputFilterSensitiveLog = (obj: WorkflowStepOutput): any => ({
  ...obj,
  ...(obj.value && { value: WorkflowStepOutputUnionFilterSensitiveLog(obj.value) }),
});

/**
 * @internal
 */
export const WorkflowStepAutomationConfigurationFilterSensitiveLog = (
  obj: WorkflowStepAutomationConfiguration
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateWorkflowStepRequestFilterSensitiveLog = (obj: CreateWorkflowStepRequest): any => ({
  ...obj,
  ...(obj.outputs && { outputs: obj.outputs.map((item) => WorkflowStepOutputFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const CreateWorkflowStepResponseFilterSensitiveLog = (obj: CreateWorkflowStepResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteWorkflowStepRequestFilterSensitiveLog = (obj: DeleteWorkflowStepRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteWorkflowStepResponseFilterSensitiveLog = (obj: DeleteWorkflowStepResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetWorkflowStepRequestFilterSensitiveLog = (obj: GetWorkflowStepRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetWorkflowStepResponseFilterSensitiveLog = (obj: GetWorkflowStepResponse): any => ({
  ...obj,
  ...(obj.outputs && { outputs: obj.outputs.map((item) => WorkflowStepOutputFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const ListWorkflowStepsRequestFilterSensitiveLog = (obj: ListWorkflowStepsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const WorkflowStepSummaryFilterSensitiveLog = (obj: WorkflowStepSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListWorkflowStepsResponseFilterSensitiveLog = (obj: ListWorkflowStepsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RetryWorkflowStepRequestFilterSensitiveLog = (obj: RetryWorkflowStepRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RetryWorkflowStepResponseFilterSensitiveLog = (obj: RetryWorkflowStepResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateWorkflowStepRequestFilterSensitiveLog = (obj: UpdateWorkflowStepRequest): any => ({
  ...obj,
  ...(obj.outputs && { outputs: obj.outputs.map((item) => WorkflowStepOutputFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const UpdateWorkflowStepResponseFilterSensitiveLog = (obj: UpdateWorkflowStepResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateWorkflowStepGroupRequestFilterSensitiveLog = (obj: CreateWorkflowStepGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateWorkflowStepGroupResponseFilterSensitiveLog = (obj: CreateWorkflowStepGroupResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteWorkflowStepGroupRequestFilterSensitiveLog = (obj: DeleteWorkflowStepGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteWorkflowStepGroupResponseFilterSensitiveLog = (obj: DeleteWorkflowStepGroupResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetWorkflowStepGroupRequestFilterSensitiveLog = (obj: GetWorkflowStepGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetWorkflowStepGroupResponseFilterSensitiveLog = (obj: GetWorkflowStepGroupResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListWorkflowStepGroupsRequestFilterSensitiveLog = (obj: ListWorkflowStepGroupsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const WorkflowStepGroupSummaryFilterSensitiveLog = (obj: WorkflowStepGroupSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListWorkflowStepGroupsResponseFilterSensitiveLog = (obj: ListWorkflowStepGroupsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateWorkflowStepGroupRequestFilterSensitiveLog = (obj: UpdateWorkflowStepGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateWorkflowStepGroupResponseFilterSensitiveLog = (obj: UpdateWorkflowStepGroupResponse): any => ({
  ...obj,
});
