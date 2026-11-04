// smithy-typescript generated code
import type {
  DataType,
  MigrationWorkflowStatusEnum,
  Owner,
  PluginHealth,
  RunEnvironment,
  StepActionType,
  StepGroupStatus,
  StepStatus,
  TargetType,
  TemplateStatus,
} from "./enums";

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource.
   *
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * The tags added to a resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * A map of key value pairs that is generated when you create a migration workflow. The key value pairs will differ based on your selection of the template.
 *
 * @public
 */
export type StepInput =
  | StepInput.IntegerValueMember
  | StepInput.ListOfStringsValueMember
  | StepInput.MapOfStringValueMember
  | StepInput.StringValueMember
  | StepInput.$UnknownMember;

/**
 * @public
 */
export namespace StepInput {
  /**
   * The value of the integer.
   *
   * @public
   */
  export interface IntegerValueMember {
    integerValue: number;
    stringValue?: never;
    listOfStringsValue?: never;
    mapOfStringValue?: never;
    $unknown?: never;
  }

  /**
   * String value.
   *
   * @public
   */
  export interface StringValueMember {
    integerValue?: never;
    stringValue: string;
    listOfStringsValue?: never;
    mapOfStringValue?: never;
    $unknown?: never;
  }

  /**
   * List of string values.
   *
   * @public
   */
  export interface ListOfStringsValueMember {
    integerValue?: never;
    stringValue?: never;
    listOfStringsValue: string[];
    mapOfStringValue?: never;
    $unknown?: never;
  }

  /**
   * Map of string values.
   *
   * @public
   */
  export interface MapOfStringValueMember {
    integerValue?: never;
    stringValue?: never;
    listOfStringsValue?: never;
    mapOfStringValue: Record<string, string>;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    integerValue?: never;
    stringValue?: never;
    listOfStringsValue?: never;
    mapOfStringValue?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    integerValue: (value: number) => T;
    stringValue: (value: string) => T;
    listOfStringsValue: (value: string[]) => T;
    mapOfStringValue: (value: Record<string, string>) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CreateMigrationWorkflowRequest {
  /**
   * The name of the migration workflow.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the migration workflow.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The ID of the template.
   *
   * @public
   */
  templateId: string | undefined;

  /**
   * The configuration ID of the application configured in Application Discovery Service.
   *
   * @public
   */
  applicationConfigurationId?: string | undefined;

  /**
   * The input parameters required to create a migration workflow.
   *
   * @public
   */
  inputParameters: Record<string, StepInput> | undefined;

  /**
   * The servers on which a step will be run.
   *
   * @public
   */
  stepTargets?: string[] | undefined;

  /**
   * The tags to add on a migration workflow.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateMigrationWorkflowResponse {
  /**
   * The ID of the migration workflow.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the migration workflow.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The name of the migration workflow.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The description of the migration workflow.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The ID of the template.
   *
   * @public
   */
  templateId?: string | undefined;

  /**
   * The configuration ID of the application configured in Application Discovery Service.
   *
   * @public
   */
  adsApplicationConfigurationId?: string | undefined;

  /**
   * The inputs for creating a migration workflow.
   *
   * @public
   */
  workflowInputs?: Record<string, StepInput> | undefined;

  /**
   * The servers on which a step will be run.
   *
   * @public
   */
  stepTargets?: string[] | undefined;

  /**
   * The status of the migration workflow.
   *
   * @public
   */
  status?: MigrationWorkflowStatusEnum | undefined;

  /**
   * The time at which the migration workflow was created.
   *
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * The tags to add on a migration workflow.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface DeleteMigrationWorkflowRequest {
  /**
   * The ID of the migration workflow you want to delete.
   *
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface DeleteMigrationWorkflowResponse {
  /**
   * The ID of the migration workflow.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the migration workflow.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The status of the migration workflow.
   *
   * @public
   */
  status?: MigrationWorkflowStatusEnum | undefined;
}

/**
 * @public
 */
export interface GetMigrationWorkflowRequest {
  /**
   * The ID of the migration workflow.
   *
   * @public
   */
  id: string | undefined;
}

/**
 * List of AWS services utilized in a migration workflow.
 *
 * @public
 */
export interface Tool {
  /**
   * The name of an AWS service.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The URL of an AWS service.
   *
   * @public
   */
  url?: string | undefined;
}

/**
 * @public
 */
export interface GetMigrationWorkflowResponse {
  /**
   * The ID of the migration workflow.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the migration workflow.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The name of the migration workflow.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The description of the migration workflow.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The ID of the template.
   *
   * @public
   */
  templateId?: string | undefined;

  /**
   * The configuration ID of the application configured in Application Discovery Service.
   *
   * @public
   */
  adsApplicationConfigurationId?: string | undefined;

  /**
   * The name of the application configured in Application Discovery Service.
   *
   * @public
   */
  adsApplicationName?: string | undefined;

  /**
   * The status of the migration workflow.
   *
   * @public
   */
  status?: MigrationWorkflowStatusEnum | undefined;

  /**
   * The status message of the migration workflow.
   *
   * @public
   */
  statusMessage?: string | undefined;

  /**
   * The time at which the migration workflow was created.
   *
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * The time at which the migration workflow was last started.
   *
   * @public
   */
  lastStartTime?: Date | undefined;

  /**
   * The time at which the migration workflow was last stopped.
   *
   * @public
   */
  lastStopTime?: Date | undefined;

  /**
   * The time at which the migration workflow was last modified.
   *
   * @public
   */
  lastModifiedTime?: Date | undefined;

  /**
   * The time at which the migration workflow ended.
   *
   * @public
   */
  endTime?: Date | undefined;

  /**
   * List of AWS services utilized in a migration workflow.
   *
   * @public
   */
  tools?: Tool[] | undefined;

  /**
   * The total number of steps in the migration workflow.
   *
   * @public
   */
  totalSteps?: number | undefined;

  /**
   * Get a list of completed steps in the migration workflow.
   *
   * @public
   */
  completedSteps?: number | undefined;

  /**
   * The inputs required for creating the migration workflow.
   *
   * @public
   */
  workflowInputs?: Record<string, StepInput> | undefined;

  /**
   * The tags added to the migration workflow.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The Amazon S3 bucket where the migration logs are stored.
   *
   * @public
   */
  workflowBucket?: string | undefined;
}

/**
 * @public
 */
export interface ListMigrationWorkflowsRequest {
  /**
   * The maximum number of results that can be returned.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The pagination token.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The ID of the template.
   *
   * @public
   */
  templateId?: string | undefined;

  /**
   * The name of the application configured in Application Discovery Service.
   *
   * @public
   */
  adsApplicationConfigurationName?: string | undefined;

  /**
   * The status of the migration workflow.
   *
   * @public
   */
  status?: MigrationWorkflowStatusEnum | undefined;

  /**
   * The name of the migration workflow.
   *
   * @public
   */
  name?: string | undefined;
}

/**
 * The summary of a migration workflow.
 *
 * @public
 */
export interface MigrationWorkflowSummary {
  /**
   * The ID of the migration workflow.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The name of the migration workflow.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The ID of the template.
   *
   * @public
   */
  templateId?: string | undefined;

  /**
   * The name of the application configured in Application Discovery Service.
   *
   * @public
   */
  adsApplicationConfigurationName?: string | undefined;

  /**
   * The status of the migration workflow.
   *
   * @public
   */
  status?: MigrationWorkflowStatusEnum | undefined;

  /**
   * The time at which the migration workflow was created.
   *
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * The time at which the migration workflow ended.
   *
   * @public
   */
  endTime?: Date | undefined;

  /**
   * The status message of the migration workflow.
   *
   * @public
   */
  statusMessage?: string | undefined;

  /**
   * The steps completed in the migration workflow.
   *
   * @public
   */
  completedSteps?: number | undefined;

  /**
   * All the steps in a migration workflow.
   *
   * @public
   */
  totalSteps?: number | undefined;
}

/**
 * @public
 */
export interface ListMigrationWorkflowsResponse {
  /**
   * The pagination token.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The summary of the migration workflow.
   *
   * @public
   */
  migrationWorkflowSummary: MigrationWorkflowSummary[] | undefined;
}

/**
 * @public
 */
export interface StartMigrationWorkflowRequest {
  /**
   * The ID of the migration workflow.
   *
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface StartMigrationWorkflowResponse {
  /**
   * The ID of the migration workflow.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the migration workflow.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The status of the migration workflow.
   *
   * @public
   */
  status?: MigrationWorkflowStatusEnum | undefined;

  /**
   * The status message of the migration workflow.
   *
   * @public
   */
  statusMessage?: string | undefined;

  /**
   * The time at which the migration workflow was last started.
   *
   * @public
   */
  lastStartTime?: Date | undefined;
}

/**
 * @public
 */
export interface StopMigrationWorkflowRequest {
  /**
   * The ID of the migration workflow.
   *
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface StopMigrationWorkflowResponse {
  /**
   * The ID of the migration workflow.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the migration workflow.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The status of the migration workflow.
   *
   * @public
   */
  status?: MigrationWorkflowStatusEnum | undefined;

  /**
   * The status message of the migration workflow.
   *
   * @public
   */
  statusMessage?: string | undefined;

  /**
   * The time at which the migration workflow was stopped.
   *
   * @public
   */
  lastStopTime?: Date | undefined;
}

/**
 * @public
 */
export interface UpdateMigrationWorkflowRequest {
  /**
   * The ID of the migration workflow.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The name of the migration workflow.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The description of the migration workflow.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The input parameters required to update a migration workflow.
   *
   * @public
   */
  inputParameters?: Record<string, StepInput> | undefined;

  /**
   * The servers on which a step will be run.
   *
   * @public
   */
  stepTargets?: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateMigrationWorkflowResponse {
  /**
   * The ID of the migration workflow.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the migration workflow.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The name of the migration workflow.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The description of the migration workflow.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The ID of the template.
   *
   * @public
   */
  templateId?: string | undefined;

  /**
   * The ID of the application configured in Application Discovery Service.
   *
   * @public
   */
  adsApplicationConfigurationId?: string | undefined;

  /**
   * The inputs required to update a migration workflow.
   *
   * @public
   */
  workflowInputs?: Record<string, StepInput> | undefined;

  /**
   * The servers on which a step will be run.
   *
   * @public
   */
  stepTargets?: string[] | undefined;

  /**
   * The status of the migration workflow.
   *
   * @public
   */
  status?: MigrationWorkflowStatusEnum | undefined;

  /**
   * The time at which the migration workflow was created.
   *
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * The time at which the migration workflow was last modified.
   *
   * @public
   */
  lastModifiedTime?: Date | undefined;

  /**
   * The tags added to the migration workflow.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * The migration workflow template used as the source for the new template.
 *
 * @public
 */
export type TemplateSource =
  | TemplateSource.WorkflowIdMember
  | TemplateSource.$UnknownMember;

/**
 * @public
 */
export namespace TemplateSource {
  /**
   * The ID of the workflow from the source migration workflow template.
   *
   * @public
   */
  export interface WorkflowIdMember {
    workflowId: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    workflowId?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    workflowId: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CreateTemplateRequest {
  /**
   * The name of the migration workflow template.
   *
   * @public
   */
  templateName: string | undefined;

  /**
   * A description of the migration workflow template.
   *
   * @public
   */
  templateDescription?: string | undefined;

  /**
   * The source of the migration workflow template.
   *
   * @public
   */
  templateSource: TemplateSource | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see [Idempotency](https://smithy.io/2.0/spec/behavior-traits.html#idempotencytoken-trait) in the Smithy documentation.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The tags to add to the migration workflow template.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateTemplateResponse {
  /**
   * The ID of the migration workflow template.
   *
   * @public
   */
  templateId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the migration workflow template. The format for an Migration Hub Orchestrator template ARN is `arn:aws:migrationhub-orchestrator:region:account:template/template-abcd1234`. For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference-arns.html) in the *AWS General Reference*.
   *
   * @public
   */
  templateArn?: string | undefined;

  /**
   * The tags added to the migration workflow template.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface DeleteTemplateRequest {
  /**
   * The ID of the request to delete a migration workflow template.
   *
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface DeleteTemplateResponse {}

/**
 * @public
 */
export interface GetMigrationWorkflowTemplateRequest {
  /**
   * The ID of the template.
   *
   * @public
   */
  id: string | undefined;
}

/**
 * The input parameters of a template.
 *
 * @public
 */
export interface TemplateInput {
  /**
   * The name of the template.
   *
   * @public
   */
  inputName?: string | undefined;

  /**
   * The data type of the template input.
   *
   * @public
   */
  dataType?: DataType | undefined;

  /**
   * Determine if an input is required from the template.
   *
   * @public
   */
  required?: boolean | undefined;
}

/**
 * @public
 */
export interface GetMigrationWorkflowTemplateResponse {
  /**
   * The ID of the template.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * &gt;The Amazon Resource Name (ARN) of the migration workflow template. The format for an Migration Hub Orchestrator template ARN is `arn:aws:migrationhub-orchestrator:region:account:template/template-abcd1234`. For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference-arns.html) in the *AWS General Reference*.
   *
   * @public
   */
  templateArn?: string | undefined;

  /**
   * The name of the template.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The time at which the template was last created.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The inputs provided for the creation of the migration workflow.
   *
   * @public
   */
  inputs?: TemplateInput[] | undefined;

  /**
   * List of AWS services utilized in a migration workflow.
   *
   * @public
   */
  tools?: Tool[] | undefined;

  /**
   * The time at which the template was last created.
   *
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * The owner of the migration workflow template.
   *
   * @public
   */
  owner?: string | undefined;

  /**
   * The status of the template.
   *
   * @public
   */
  status?: TemplateStatus | undefined;

  /**
   * The status message of retrieving migration workflow templates.
   *
   * @public
   */
  statusMessage?: string | undefined;

  /**
   * The class of the migration workflow template. The available template classes are:
   *
   * - A2C
   * - MGN
   * - SAP_MULTI
   * - SQL_EC2
   * - SQL_RDS
   * - VMIE
   *
   * @public
   */
  templateClass?: string | undefined;

  /**
   * The tags added to the migration workflow template.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListMigrationWorkflowTemplatesRequest {
  /**
   * The maximum number of results that can be returned.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The pagination token.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The name of the template.
   *
   * @public
   */
  name?: string | undefined;
}

/**
 * The summary of the template.
 *
 * @public
 */
export interface TemplateSummary {
  /**
   * The ID of the template.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The name of the template.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the template.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The description of the template.
   *
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface ListMigrationWorkflowTemplatesResponse {
  /**
   * The pagination token.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The summary of the template.
   *
   * @public
   */
  templateSummary: TemplateSummary[] | undefined;
}

/**
 * @public
 */
export interface UpdateTemplateRequest {
  /**
   * The ID of the request to update a migration workflow template.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The name of the migration workflow template to update.
   *
   * @public
   */
  templateName?: string | undefined;

  /**
   * The description of the migration workflow template to update.
   *
   * @public
   */
  templateDescription?: string | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateTemplateResponse {
  /**
   * The ID of the migration workflow template being updated.
   *
   * @public
   */
  templateId?: string | undefined;

  /**
   * The ARN of the migration workflow template being updated. The format for an Migration Hub Orchestrator template ARN is `arn:aws:migrationhub-orchestrator:region:account:template/template-abcd1234`. For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference-arns.html) in the *AWS General Reference*.
   *
   * @public
   */
  templateArn?: string | undefined;

  /**
   * The tags added to the migration workflow template.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListPluginsRequest {
  /**
   * The maximum number of plugins that can be returned.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The pagination token.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * The summary of the Migration Hub Orchestrator plugin.
 *
 * @public
 */
export interface PluginSummary {
  /**
   * The ID of the plugin.
   *
   * @public
   */
  pluginId?: string | undefined;

  /**
   * The name of the host.
   *
   * @public
   */
  hostname?: string | undefined;

  /**
   * The status of the plugin.
   *
   * @public
   */
  status?: PluginHealth | undefined;

  /**
   * The IP address at which the plugin is located.
   *
   * @public
   */
  ipAddress?: string | undefined;

  /**
   * The version of the plugin.
   *
   * @public
   */
  version?: string | undefined;

  /**
   * The time at which the plugin was registered.
   *
   * @public
   */
  registeredTime?: string | undefined;
}

/**
 * @public
 */
export interface ListPluginsResponse {
  /**
   * The pagination token.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Migration Hub Orchestrator plugins.
   *
   * @public
   */
  plugins?: PluginSummary[] | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource to which you want to add tags.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * A collection of labels, in the form of key:value pairs, that apply to this resource.
   *
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface GetTemplateStepRequest {
  /**
   * The ID of the step.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The ID of the template.
   *
   * @public
   */
  templateId: string | undefined;

  /**
   * The ID of the step group.
   *
   * @public
   */
  stepGroupId: string | undefined;
}

/**
 * The output of the step.
 *
 * @public
 */
export interface StepOutput {
  /**
   * The name of the step.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The data type of the step output.
   *
   * @public
   */
  dataType?: DataType | undefined;

  /**
   * Determine if an output is required from a step.
   *
   * @public
   */
  required?: boolean | undefined;
}

/**
 * Command to be run on a particular operating system.
 *
 * @public
 */
export interface PlatformCommand {
  /**
   * Command for Linux.
   *
   * @public
   */
  linux?: string | undefined;

  /**
   * Command for Windows.
   *
   * @public
   */
  windows?: string | undefined;
}

/**
 * The script location for a particular operating system.
 *
 * @public
 */
export interface PlatformScriptKey {
  /**
   * The script location for Linux.
   *
   * @public
   */
  linux?: string | undefined;

  /**
   * The script location for Windows.
   *
   * @public
   */
  windows?: string | undefined;
}

/**
 * The custom script to run tests on source or target environments.
 *
 * @public
 */
export interface StepAutomationConfiguration {
  /**
   * The Amazon S3 bucket where the script is located.
   *
   * @public
   */
  scriptLocationS3Bucket?: string | undefined;

  /**
   * The Amazon S3 key for the script location.
   *
   * @public
   */
  scriptLocationS3Key?: PlatformScriptKey | undefined;

  /**
   * The command to run the script.
   *
   * @public
   */
  command?: PlatformCommand | undefined;

  /**
   * The source or target environment.
   *
   * @public
   */
  runEnvironment?: RunEnvironment | undefined;

  /**
   * The servers on which to run the script.
   *
   * @public
   */
  targetType?: TargetType | undefined;
}

/**
 * @public
 */
export interface GetTemplateStepResponse {
  /**
   * The ID of the step.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The ID of the step group.
   *
   * @public
   */
  stepGroupId?: string | undefined;

  /**
   * The ID of the template.
   *
   * @public
   */
  templateId?: string | undefined;

  /**
   * The name of the step.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The description of the step.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The action type of the step. You must run and update the status of a manual step for the workflow to continue after the completion of the step.
   *
   * @public
   */
  stepActionType?: StepActionType | undefined;

  /**
   * The time at which the step was created.
   *
   * @public
   */
  creationTime?: string | undefined;

  /**
   * The previous step.
   *
   * @public
   */
  previous?: string[] | undefined;

  /**
   * The next step.
   *
   * @public
   */
  next?: string[] | undefined;

  /**
   * The outputs of the step.
   *
   * @public
   */
  outputs?: StepOutput[] | undefined;

  /**
   * The custom script to run tests on source or target environments.
   *
   * @public
   */
  stepAutomationConfiguration?: StepAutomationConfiguration | undefined;
}

/**
 * @public
 */
export interface ListTemplateStepsRequest {
  /**
   * The maximum number of results that can be returned.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The pagination token.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The ID of the template.
   *
   * @public
   */
  templateId: string | undefined;

  /**
   * The ID of the step group.
   *
   * @public
   */
  stepGroupId: string | undefined;
}

/**
 * The summary of the step.
 *
 * @public
 */
export interface TemplateStepSummary {
  /**
   * The ID of the step.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The ID of the step group.
   *
   * @public
   */
  stepGroupId?: string | undefined;

  /**
   * The ID of the template.
   *
   * @public
   */
  templateId?: string | undefined;

  /**
   * The name of the step.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The action type of the step. You must run and update the status of a manual step for the workflow to continue after the completion of the step.
   *
   * @public
   */
  stepActionType?: StepActionType | undefined;

  /**
   * The servers on which to run the script.
   *
   * @public
   */
  targetType?: TargetType | undefined;

  /**
   * The owner of the step.
   *
   * @public
   */
  owner?: Owner | undefined;

  /**
   * The previous step.
   *
   * @public
   */
  previous?: string[] | undefined;

  /**
   * The next step.
   *
   * @public
   */
  next?: string[] | undefined;
}

/**
 * @public
 */
export interface ListTemplateStepsResponse {
  /**
   * The pagination token.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The list of summaries of steps in a template.
   *
   * @public
   */
  templateStepSummaryList?: TemplateStepSummary[] | undefined;
}

/**
 * @public
 */
export interface GetTemplateStepGroupRequest {
  /**
   * The ID of the template.
   *
   * @public
   */
  templateId: string | undefined;

  /**
   * The ID of the step group.
   *
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface GetTemplateStepGroupResponse {
  /**
   * The ID of the template.
   *
   * @public
   */
  templateId?: string | undefined;

  /**
   * The ID of the step group.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The name of the step group.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The description of the step group.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The status of the step group.
   *
   * @public
   */
  status?: StepGroupStatus | undefined;

  /**
   * The time at which the step group was created.
   *
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * The time at which the step group was last modified.
   *
   * @public
   */
  lastModifiedTime?: Date | undefined;

  /**
   * List of AWS services utilized in a migration workflow.
   *
   * @public
   */
  tools?: Tool[] | undefined;

  /**
   * The previous step group.
   *
   * @public
   */
  previous?: string[] | undefined;

  /**
   * The next step group.
   *
   * @public
   */
  next?: string[] | undefined;
}

/**
 * @public
 */
export interface ListTemplateStepGroupsRequest {
  /**
   * The maximum number of results that can be returned.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The pagination token.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The ID of the template.
   *
   * @public
   */
  templateId: string | undefined;
}

/**
 * The summary of the step group in the template.
 *
 * @public
 */
export interface TemplateStepGroupSummary {
  /**
   * The ID of the step group.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The name of the step group.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The previous step group.
   *
   * @public
   */
  previous?: string[] | undefined;

  /**
   * The next step group.
   *
   * @public
   */
  next?: string[] | undefined;
}

/**
 * @public
 */
export interface ListTemplateStepGroupsResponse {
  /**
   * The pagination token.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The summary of the step group in the template.
   *
   * @public
   */
  templateStepGroupSummary: TemplateStepGroupSummary[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource from which you want to remove tags.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * One or more tag keys. Specify only the tag keys, not the tag values.
   *
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * A structure to hold multiple values of an output.
 *
 * @public
 */
export type WorkflowStepOutputUnion =
  | WorkflowStepOutputUnion.IntegerValueMember
  | WorkflowStepOutputUnion.ListOfStringValueMember
  | WorkflowStepOutputUnion.StringValueMember
  | WorkflowStepOutputUnion.$UnknownMember;

/**
 * @public
 */
export namespace WorkflowStepOutputUnion {
  /**
   * The integer value.
   *
   * @public
   */
  export interface IntegerValueMember {
    integerValue: number;
    stringValue?: never;
    listOfStringValue?: never;
    $unknown?: never;
  }

  /**
   * The string value.
   *
   * @public
   */
  export interface StringValueMember {
    integerValue?: never;
    stringValue: string;
    listOfStringValue?: never;
    $unknown?: never;
  }

  /**
   * The list of string value.
   *
   * @public
   */
  export interface ListOfStringValueMember {
    integerValue?: never;
    stringValue?: never;
    listOfStringValue: string[];
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    integerValue?: never;
    stringValue?: never;
    listOfStringValue?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    integerValue: (value: number) => T;
    stringValue: (value: string) => T;
    listOfStringValue: (value: string[]) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The output of a step.
 *
 * @public
 */
export interface WorkflowStepOutput {
  /**
   * The name of the step.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The data type of the output.
   *
   * @public
   */
  dataType?: DataType | undefined;

  /**
   * Determine if an output is required from a step.
   *
   * @public
   */
  required?: boolean | undefined;

  /**
   * The value of the output.
   *
   * @public
   */
  value?: WorkflowStepOutputUnion | undefined;
}

/**
 * The custom script to run tests on source or target environments.
 *
 * @public
 */
export interface WorkflowStepAutomationConfiguration {
  /**
   * The Amazon S3 bucket where the script is located.
   *
   * @public
   */
  scriptLocationS3Bucket?: string | undefined;

  /**
   * The Amazon S3 key for the script location.
   *
   * @public
   */
  scriptLocationS3Key?: PlatformScriptKey | undefined;

  /**
   * The command required to run the script.
   *
   * @public
   */
  command?: PlatformCommand | undefined;

  /**
   * The source or target environment.
   *
   * @public
   */
  runEnvironment?: RunEnvironment | undefined;

  /**
   * The servers on which to run the script.
   *
   * @public
   */
  targetType?: TargetType | undefined;
}

/**
 * @public
 */
export interface CreateWorkflowStepRequest {
  /**
   * The name of the step.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The ID of the step group.
   *
   * @public
   */
  stepGroupId: string | undefined;

  /**
   * The ID of the migration workflow.
   *
   * @public
   */
  workflowId: string | undefined;

  /**
   * The action type of the step. You must run and update the status of a manual step for the workflow to continue after the completion of the step.
   *
   * @public
   */
  stepActionType: StepActionType | undefined;

  /**
   * The description of the step.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The custom script to run tests on source or target environments.
   *
   * @public
   */
  workflowStepAutomationConfiguration?: WorkflowStepAutomationConfiguration | undefined;

  /**
   * The servers on which a step will be run.
   *
   * @public
   */
  stepTarget?: string[] | undefined;

  /**
   * The key value pairs added for the expected output.
   *
   * @public
   */
  outputs?: WorkflowStepOutput[] | undefined;

  /**
   * The previous step.
   *
   * @public
   */
  previous?: string[] | undefined;

  /**
   * The next step.
   *
   * @public
   */
  next?: string[] | undefined;
}

/**
 * @public
 */
export interface CreateWorkflowStepResponse {
  /**
   * The ID of the step.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The ID of the step group.
   *
   * @public
   */
  stepGroupId?: string | undefined;

  /**
   * The ID of the migration workflow.
   *
   * @public
   */
  workflowId?: string | undefined;

  /**
   * The name of the step.
   *
   * @public
   */
  name?: string | undefined;
}

/**
 * @public
 */
export interface DeleteWorkflowStepRequest {
  /**
   * The ID of the step you want to delete.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The ID of the step group that contains the step you want to delete.
   *
   * @public
   */
  stepGroupId: string | undefined;

  /**
   * The ID of the migration workflow.
   *
   * @public
   */
  workflowId: string | undefined;
}

/**
 * @public
 */
export interface DeleteWorkflowStepResponse {}

/**
 * @public
 */
export interface GetWorkflowStepRequest {
  /**
   * The ID of the migration workflow.
   *
   * @public
   */
  workflowId: string | undefined;

  /**
   * The ID of the step group.
   *
   * @public
   */
  stepGroupId: string | undefined;

  /**
   * The ID of the step.
   *
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface GetWorkflowStepResponse {
  /**
   * The name of the step.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The ID of the step group.
   *
   * @public
   */
  stepGroupId?: string | undefined;

  /**
   * The ID of the migration workflow.
   *
   * @public
   */
  workflowId?: string | undefined;

  /**
   * The ID of the step.
   *
   * @public
   */
  stepId?: string | undefined;

  /**
   * The description of the step.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The action type of the step. You must run and update the status of a manual step for the workflow to continue after the completion of the step.
   *
   * @public
   */
  stepActionType?: StepActionType | undefined;

  /**
   * The owner of the step.
   *
   * @public
   */
  owner?: Owner | undefined;

  /**
   * The custom script to run tests on source or target environments.
   *
   * @public
   */
  workflowStepAutomationConfiguration?: WorkflowStepAutomationConfiguration | undefined;

  /**
   * The servers on which a step will be run.
   *
   * @public
   */
  stepTarget?: string[] | undefined;

  /**
   * The outputs of the step.
   *
   * @public
   */
  outputs?: WorkflowStepOutput[] | undefined;

  /**
   * The previous step.
   *
   * @public
   */
  previous?: string[] | undefined;

  /**
   * The next step.
   *
   * @public
   */
  next?: string[] | undefined;

  /**
   * The status of the step.
   *
   * @public
   */
  status?: StepStatus | undefined;

  /**
   * The status message of the migration workflow.
   *
   * @public
   */
  statusMessage?: string | undefined;

  /**
   * The output location of the script.
   *
   * @public
   */
  scriptOutputLocation?: string | undefined;

  /**
   * The time at which the step was created.
   *
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * The time at which the workflow was last started.
   *
   * @public
   */
  lastStartTime?: Date | undefined;

  /**
   * The time at which the step ended.
   *
   * @public
   */
  endTime?: Date | undefined;

  /**
   * The number of servers that have been migrated.
   *
   * @public
   */
  noOfSrvCompleted?: number | undefined;

  /**
   * The number of servers that have failed to migrate.
   *
   * @public
   */
  noOfSrvFailed?: number | undefined;

  /**
   * The total number of servers that have been migrated.
   *
   * @public
   */
  totalNoOfSrv?: number | undefined;
}

/**
 * @public
 */
export interface ListWorkflowStepsRequest {
  /**
   * The pagination token.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results that can be returned.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The ID of the migration workflow.
   *
   * @public
   */
  workflowId: string | undefined;

  /**
   * The ID of the step group.
   *
   * @public
   */
  stepGroupId: string | undefined;
}

/**
 * The summary of the step in a migration workflow.
 *
 * @public
 */
export interface WorkflowStepSummary {
  /**
   * The ID of the step.
   *
   * @public
   */
  stepId?: string | undefined;

  /**
   * The name of the step.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The action type of the step. You must run and update the status of a manual step for the workflow to continue after the completion of the step.
   *
   * @public
   */
  stepActionType?: StepActionType | undefined;

  /**
   * The owner of the step.
   *
   * @public
   */
  owner?: Owner | undefined;

  /**
   * The previous step.
   *
   * @public
   */
  previous?: string[] | undefined;

  /**
   * The next step.
   *
   * @public
   */
  next?: string[] | undefined;

  /**
   * The status of the step.
   *
   * @public
   */
  status?: StepStatus | undefined;

  /**
   * The status message of the migration workflow.
   *
   * @public
   */
  statusMessage?: string | undefined;

  /**
   * The number of servers that have been migrated.
   *
   * @public
   */
  noOfSrvCompleted?: number | undefined;

  /**
   * The number of servers that have failed to migrate.
   *
   * @public
   */
  noOfSrvFailed?: number | undefined;

  /**
   * The total number of servers that have been migrated.
   *
   * @public
   */
  totalNoOfSrv?: number | undefined;

  /**
   * The description of the step.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The location of the script.
   *
   * @public
   */
  scriptLocation?: string | undefined;
}

/**
 * @public
 */
export interface ListWorkflowStepsResponse {
  /**
   * The pagination token.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The summary of steps in a migration workflow.
   *
   * @public
   */
  workflowStepsSummary: WorkflowStepSummary[] | undefined;
}

/**
 * @public
 */
export interface RetryWorkflowStepRequest {
  /**
   * The ID of the migration workflow.
   *
   * @public
   */
  workflowId: string | undefined;

  /**
   * The ID of the step group.
   *
   * @public
   */
  stepGroupId: string | undefined;

  /**
   * The ID of the step.
   *
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface RetryWorkflowStepResponse {
  /**
   * The ID of the step group.
   *
   * @public
   */
  stepGroupId?: string | undefined;

  /**
   * The ID of the migration workflow.
   *
   * @public
   */
  workflowId?: string | undefined;

  /**
   * The ID of the step.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The status of the step.
   *
   * @public
   */
  status?: StepStatus | undefined;
}

/**
 * @public
 */
export interface UpdateWorkflowStepRequest {
  /**
   * The ID of the step.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The ID of the step group.
   *
   * @public
   */
  stepGroupId: string | undefined;

  /**
   * The ID of the migration workflow.
   *
   * @public
   */
  workflowId: string | undefined;

  /**
   * The name of the step.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The description of the step.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The action type of the step. You must run and update the status of a manual step for the workflow to continue after the completion of the step.
   *
   * @public
   */
  stepActionType?: StepActionType | undefined;

  /**
   * The custom script to run tests on the source and target environments.
   *
   * @public
   */
  workflowStepAutomationConfiguration?: WorkflowStepAutomationConfiguration | undefined;

  /**
   * The servers on which a step will be run.
   *
   * @public
   */
  stepTarget?: string[] | undefined;

  /**
   * The outputs of a step.
   *
   * @public
   */
  outputs?: WorkflowStepOutput[] | undefined;

  /**
   * The previous step.
   *
   * @public
   */
  previous?: string[] | undefined;

  /**
   * The next step.
   *
   * @public
   */
  next?: string[] | undefined;

  /**
   * The status of the step.
   *
   * @public
   */
  status?: StepStatus | undefined;
}

/**
 * @public
 */
export interface UpdateWorkflowStepResponse {
  /**
   * The ID of the step.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The ID of the step group.
   *
   * @public
   */
  stepGroupId?: string | undefined;

  /**
   * The ID of the migration workflow.
   *
   * @public
   */
  workflowId?: string | undefined;

  /**
   * The name of the step.
   *
   * @public
   */
  name?: string | undefined;
}

/**
 * @public
 */
export interface CreateWorkflowStepGroupRequest {
  /**
   * The ID of the migration workflow that will contain the step group.
   *
   * @public
   */
  workflowId: string | undefined;

  /**
   * The name of the step group.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the step group.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The next step group.
   *
   * @public
   */
  next?: string[] | undefined;

  /**
   * The previous step group.
   *
   * @public
   */
  previous?: string[] | undefined;
}

/**
 * @public
 */
export interface CreateWorkflowStepGroupResponse {
  /**
   * The ID of the migration workflow that contains the step group.
   *
   * @public
   */
  workflowId?: string | undefined;

  /**
   * The name of the step group.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The ID of the step group.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The description of the step group.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * List of AWS services utilized in a migration workflow.
   *
   * @public
   */
  tools?: Tool[] | undefined;

  /**
   * The next step group.
   *
   * @public
   */
  next?: string[] | undefined;

  /**
   * The previous step group.
   *
   * @public
   */
  previous?: string[] | undefined;

  /**
   * The time at which the step group is created.
   *
   * @public
   */
  creationTime?: Date | undefined;
}

/**
 * @public
 */
export interface DeleteWorkflowStepGroupRequest {
  /**
   * The ID of the migration workflow.
   *
   * @public
   */
  workflowId: string | undefined;

  /**
   * The ID of the step group you want to delete.
   *
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface DeleteWorkflowStepGroupResponse {}

/**
 * @public
 */
export interface GetWorkflowStepGroupRequest {
  /**
   * The ID of the step group.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The ID of the migration workflow.
   *
   * @public
   */
  workflowId: string | undefined;
}

/**
 * @public
 */
export interface GetWorkflowStepGroupResponse {
  /**
   * The ID of the step group.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The ID of the migration workflow.
   *
   * @public
   */
  workflowId?: string | undefined;

  /**
   * The name of the step group.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The description of the step group.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The status of the step group.
   *
   * @public
   */
  status?: StepGroupStatus | undefined;

  /**
   * The owner of the step group.
   *
   * @public
   */
  owner?: Owner | undefined;

  /**
   * The time at which the step group was created.
   *
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * The time at which the step group was last modified.
   *
   * @public
   */
  lastModifiedTime?: Date | undefined;

  /**
   * The time at which the step group ended.
   *
   * @public
   */
  endTime?: Date | undefined;

  /**
   * List of AWS services utilized in a migration workflow.
   *
   * @public
   */
  tools?: Tool[] | undefined;

  /**
   * The previous step group.
   *
   * @public
   */
  previous?: string[] | undefined;

  /**
   * The next step group.
   *
   * @public
   */
  next?: string[] | undefined;
}

/**
 * @public
 */
export interface ListWorkflowStepGroupsRequest {
  /**
   * The pagination token.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results that can be returned.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The ID of the migration workflow.
   *
   * @public
   */
  workflowId: string | undefined;
}

/**
 * The summary of a step group in a workflow.
 *
 * @public
 */
export interface WorkflowStepGroupSummary {
  /**
   * The ID of the step group.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The name of the step group.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The owner of the step group.
   *
   * @public
   */
  owner?: Owner | undefined;

  /**
   * The status of the step group.
   *
   * @public
   */
  status?: StepGroupStatus | undefined;

  /**
   * The previous step group.
   *
   * @public
   */
  previous?: string[] | undefined;

  /**
   * The next step group.
   *
   * @public
   */
  next?: string[] | undefined;
}

/**
 * @public
 */
export interface ListWorkflowStepGroupsResponse {
  /**
   * The pagination token.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The summary of step groups in a migration workflow.
   *
   * @public
   */
  workflowStepGroupsSummary: WorkflowStepGroupSummary[] | undefined;
}

/**
 * @public
 */
export interface UpdateWorkflowStepGroupRequest {
  /**
   * The ID of the migration workflow.
   *
   * @public
   */
  workflowId: string | undefined;

  /**
   * The ID of the step group.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The name of the step group.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The description of the step group.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The next step group.
   *
   * @public
   */
  next?: string[] | undefined;

  /**
   * The previous step group.
   *
   * @public
   */
  previous?: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateWorkflowStepGroupResponse {
  /**
   * The ID of the migration workflow.
   *
   * @public
   */
  workflowId?: string | undefined;

  /**
   * The name of the step group.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The ID of the step group.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The description of the step group.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * List of AWS services utilized in a migration workflow.
   *
   * @public
   */
  tools?: Tool[] | undefined;

  /**
   * The next step group.
   *
   * @public
   */
  next?: string[] | undefined;

  /**
   * The previous step group.
   *
   * @public
   */
  previous?: string[] | undefined;

  /**
   * The time at which the step group was last modified.
   *
   * @public
   */
  lastModifiedTime?: Date | undefined;
}
