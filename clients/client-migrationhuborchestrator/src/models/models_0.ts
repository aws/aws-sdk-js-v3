// smithy-typescript generated code
/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>The tags added to a resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * <p>A map of key value pairs that is generated when you create a migration workflow. The
 *             key value pairs will differ based on your selection of the template.</p>
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
   * <p>The value of the integer.</p>
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
   * <p>String value.</p>
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
   * <p>List of string values.</p>
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
   * <p>Map of string values.</p>
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
   * <p>The name of the migration workflow.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the migration workflow.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The ID of the template.</p>
   * @public
   */
  templateId: string | undefined;

  /**
   * <p>The configuration ID of the application configured in Application Discovery Service.</p>
   * @public
   */
  applicationConfigurationId?: string | undefined;

  /**
   * <p>The input parameters required to create a migration workflow.</p>
   * @public
   */
  inputParameters: Record<string, StepInput> | undefined;

  /**
   * <p>The servers on which a step will be run.</p>
   * @public
   */
  stepTargets?: string[] | undefined;

  /**
   * <p>The tags to add on a migration workflow.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 * @enum
 */
export const MigrationWorkflowStatusEnum = {
  COMPLETED: "COMPLETED",
  CREATING: "CREATING",
  CREATION_FAILED: "CREATION_FAILED",
  DELETED: "DELETED",
  DELETING: "DELETING",
  DELETION_FAILED: "DELETION_FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  NOT_STARTED: "NOT_STARTED",
  PAUSED: "PAUSED",
  PAUSING: "PAUSING",
  PAUSING_FAILED: "PAUSING_FAILED",
  STARTING: "STARTING",
  USER_ATTENTION_REQUIRED: "USER_ATTENTION_REQUIRED",
  WORKFLOW_FAILED: "WORKFLOW_FAILED",
} as const;

/**
 * @public
 */
export type MigrationWorkflowStatusEnum =
  (typeof MigrationWorkflowStatusEnum)[keyof typeof MigrationWorkflowStatusEnum];

/**
 * @public
 */
export interface CreateMigrationWorkflowResponse {
  /**
   * <p>The ID of the migration workflow.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the migration workflow.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The name of the migration workflow.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The description of the migration workflow.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The ID of the template.</p>
   * @public
   */
  templateId?: string | undefined;

  /**
   * <p>The configuration ID of the application configured in Application Discovery Service.</p>
   * @public
   */
  adsApplicationConfigurationId?: string | undefined;

  /**
   * <p>The inputs for creating a migration workflow.</p>
   * @public
   */
  workflowInputs?: Record<string, StepInput> | undefined;

  /**
   * <p>The servers on which a step will be run.</p>
   * @public
   */
  stepTargets?: string[] | undefined;

  /**
   * <p>The status of the migration workflow.</p>
   * @public
   */
  status?: MigrationWorkflowStatusEnum | undefined;

  /**
   * <p>The time at which the migration workflow was created.</p>
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * <p>The tags to add on a migration workflow.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface DeleteMigrationWorkflowRequest {
  /**
   * <p>The ID of the migration workflow you want to delete.</p>
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface DeleteMigrationWorkflowResponse {
  /**
   * <p>The ID of the migration workflow.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the migration workflow.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The status of the migration workflow.</p>
   * @public
   */
  status?: MigrationWorkflowStatusEnum | undefined;
}

/**
 * @public
 */
export interface GetMigrationWorkflowRequest {
  /**
   * <p>The ID of the migration workflow.</p>
   * @public
   */
  id: string | undefined;
}

/**
 * <p>List of AWS services utilized in a migration workflow.</p>
 * @public
 */
export interface Tool {
  /**
   * <p>The name of an AWS service. </p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The URL of an AWS service.</p>
   * @public
   */
  url?: string | undefined;
}

/**
 * @public
 */
export interface GetMigrationWorkflowResponse {
  /**
   * <p>The ID of the migration workflow.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the migration workflow.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The name of the migration workflow.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The description of the migration workflow.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The ID of the template.</p>
   * @public
   */
  templateId?: string | undefined;

  /**
   * <p>The configuration ID of the application configured in Application Discovery Service.</p>
   * @public
   */
  adsApplicationConfigurationId?: string | undefined;

  /**
   * <p>The name of the application configured in Application Discovery Service.</p>
   * @public
   */
  adsApplicationName?: string | undefined;

  /**
   * <p>The status of the migration workflow.</p>
   * @public
   */
  status?: MigrationWorkflowStatusEnum | undefined;

  /**
   * <p>The status message of the migration workflow.</p>
   * @public
   */
  statusMessage?: string | undefined;

  /**
   * <p>The time at which the migration workflow was created.</p>
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * <p>The time at which the migration workflow was last started.</p>
   * @public
   */
  lastStartTime?: Date | undefined;

  /**
   * <p>The time at which the migration workflow was last stopped.</p>
   * @public
   */
  lastStopTime?: Date | undefined;

  /**
   * <p>The time at which the migration workflow was last modified.</p>
   * @public
   */
  lastModifiedTime?: Date | undefined;

  /**
   * <p>The time at which the migration workflow ended.</p>
   * @public
   */
  endTime?: Date | undefined;

  /**
   * <p>List of AWS services utilized in a migration workflow.</p>
   * @public
   */
  tools?: Tool[] | undefined;

  /**
   * <p>The total number of steps in the migration workflow.</p>
   * @public
   */
  totalSteps?: number | undefined;

  /**
   * <p>Get a list of completed steps in the migration workflow.</p>
   * @public
   */
  completedSteps?: number | undefined;

  /**
   * <p>The inputs required for creating the migration workflow.</p>
   * @public
   */
  workflowInputs?: Record<string, StepInput> | undefined;

  /**
   * <p>The tags added to the migration workflow.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The Amazon S3 bucket where the migration logs are stored.</p>
   * @public
   */
  workflowBucket?: string | undefined;
}

/**
 * @public
 */
export interface ListMigrationWorkflowsRequest {
  /**
   * <p>The maximum number of results that can be returned.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The pagination token.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The ID of the template.</p>
   * @public
   */
  templateId?: string | undefined;

  /**
   * <p>The name of the application configured in Application Discovery Service.</p>
   * @public
   */
  adsApplicationConfigurationName?: string | undefined;

  /**
   * <p>The status of the migration workflow.</p>
   * @public
   */
  status?: MigrationWorkflowStatusEnum | undefined;

  /**
   * <p>The name of the migration workflow.</p>
   * @public
   */
  name?: string | undefined;
}

/**
 * <p>The summary of a migration workflow.</p>
 * @public
 */
export interface MigrationWorkflowSummary {
  /**
   * <p>The ID of the migration workflow.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The name of the migration workflow.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The ID of the template.</p>
   * @public
   */
  templateId?: string | undefined;

  /**
   * <p>The name of the application configured in Application Discovery Service.</p>
   * @public
   */
  adsApplicationConfigurationName?: string | undefined;

  /**
   * <p>The status of the migration workflow.</p>
   * @public
   */
  status?: MigrationWorkflowStatusEnum | undefined;

  /**
   * <p>The time at which the migration workflow was created.</p>
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * <p>The time at which the migration workflow ended.</p>
   * @public
   */
  endTime?: Date | undefined;

  /**
   * <p>The status message of the migration workflow.</p>
   * @public
   */
  statusMessage?: string | undefined;

  /**
   * <p>The steps completed in the migration workflow.</p>
   * @public
   */
  completedSteps?: number | undefined;

  /**
   * <p>All the steps in a migration workflow.</p>
   * @public
   */
  totalSteps?: number | undefined;
}

/**
 * @public
 */
export interface ListMigrationWorkflowsResponse {
  /**
   * <p>The pagination token.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The summary of the migration workflow.</p>
   * @public
   */
  migrationWorkflowSummary: MigrationWorkflowSummary[] | undefined;
}

/**
 * @public
 */
export interface StartMigrationWorkflowRequest {
  /**
   * <p>The ID of the migration workflow.</p>
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface StartMigrationWorkflowResponse {
  /**
   * <p>The ID of the migration workflow.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the migration workflow.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The status of the migration workflow.</p>
   * @public
   */
  status?: MigrationWorkflowStatusEnum | undefined;

  /**
   * <p>The status message of the migration workflow.</p>
   * @public
   */
  statusMessage?: string | undefined;

  /**
   * <p>The time at which the migration workflow was last started.</p>
   * @public
   */
  lastStartTime?: Date | undefined;
}

/**
 * @public
 */
export interface StopMigrationWorkflowRequest {
  /**
   * <p>The ID of the migration workflow.</p>
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface StopMigrationWorkflowResponse {
  /**
   * <p>The ID of the migration workflow.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the migration workflow.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The status of the migration workflow.</p>
   * @public
   */
  status?: MigrationWorkflowStatusEnum | undefined;

  /**
   * <p>The status message of the migration workflow.</p>
   * @public
   */
  statusMessage?: string | undefined;

  /**
   * <p>The time at which the migration workflow was stopped.</p>
   * @public
   */
  lastStopTime?: Date | undefined;
}

/**
 * @public
 */
export interface UpdateMigrationWorkflowRequest {
  /**
   * <p>The ID of the migration workflow.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The name of the migration workflow.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The description of the migration workflow.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The input parameters required to update a migration workflow.</p>
   * @public
   */
  inputParameters?: Record<string, StepInput> | undefined;

  /**
   * <p>The servers on which a step will be run.</p>
   * @public
   */
  stepTargets?: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateMigrationWorkflowResponse {
  /**
   * <p>The ID of the migration workflow.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the migration workflow.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The name of the migration workflow.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The description of the migration workflow.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The ID of the template.</p>
   * @public
   */
  templateId?: string | undefined;

  /**
   * <p>The ID of the application configured in Application Discovery Service.</p>
   * @public
   */
  adsApplicationConfigurationId?: string | undefined;

  /**
   * <p>The inputs required to update a migration workflow.</p>
   * @public
   */
  workflowInputs?: Record<string, StepInput> | undefined;

  /**
   * <p>The servers on which a step will be run.</p>
   * @public
   */
  stepTargets?: string[] | undefined;

  /**
   * <p>The status of the migration workflow.</p>
   * @public
   */
  status?: MigrationWorkflowStatusEnum | undefined;

  /**
   * <p>The time at which the migration workflow was created.</p>
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * <p>The time at which the migration workflow was last modified.</p>
   * @public
   */
  lastModifiedTime?: Date | undefined;

  /**
   * <p>The tags added to the migration workflow.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * <p>The migration workflow template used as the source for the new template.</p>
 * @public
 */
export type TemplateSource = TemplateSource.WorkflowIdMember | TemplateSource.$UnknownMember;

/**
 * @public
 */
export namespace TemplateSource {
  /**
   * <p>The ID of the workflow from the source migration workflow template.</p>
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
   * <p>The name of the migration workflow template.</p>
   * @public
   */
  templateName: string | undefined;

  /**
   * <p>A description of the migration workflow template.</p>
   * @public
   */
  templateDescription?: string | undefined;

  /**
   * <p>The source of the migration workflow template.</p>
   * @public
   */
  templateSource: TemplateSource | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. For more information, see <a href="https://smithy.io/2.0/spec/behavior-traits.html#idempotencytoken-trait">Idempotency</a> in the Smithy documentation.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The tags to add to the migration workflow template.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateTemplateResponse {
  /**
   * <p>The ID of the migration workflow template.</p>
   * @public
   */
  templateId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the migration workflow template. The format for an
   *             Migration Hub Orchestrator template ARN is
   *             <code>arn:aws:migrationhub-orchestrator:region:account:template/template-abcd1234</code>.
   *             For more information about ARNs, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference-arns.html">Amazon Resource Names (ARNs)</a>
   *             in the <i>AWS General Reference</i>.</p>
   * @public
   */
  templateArn?: string | undefined;

  /**
   * <p>The tags added to the migration workflow template.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface DeleteTemplateRequest {
  /**
   * <p>The ID of the request to delete a migration workflow template.</p>
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
   * <p>The ID of the template.</p>
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 * @enum
 */
export const DataType = {
  INTEGER: "INTEGER",
  STRING: "STRING",
  STRINGLIST: "STRINGLIST",
  STRINGMAP: "STRINGMAP",
} as const;

/**
 * @public
 */
export type DataType = (typeof DataType)[keyof typeof DataType];

/**
 * <p>The input parameters of a template.</p>
 * @public
 */
export interface TemplateInput {
  /**
   * <p>The name of the template.</p>
   * @public
   */
  inputName?: string | undefined;

  /**
   * <p>The data type of the template input.</p>
   * @public
   */
  dataType?: DataType | undefined;

  /**
   * <p>Determine if an input is required from the template.</p>
   * @public
   */
  required?: boolean | undefined;
}

/**
 * @public
 * @enum
 */
export const TemplateStatus = {
  CREATED: "CREATED",
  CREATING: "CREATING",
  CREATION_FAILED: "CREATION_FAILED",
  PENDING_CREATION: "PENDING_CREATION",
  READY: "READY",
} as const;

/**
 * @public
 */
export type TemplateStatus = (typeof TemplateStatus)[keyof typeof TemplateStatus];

/**
 * @public
 */
export interface GetMigrationWorkflowTemplateResponse {
  /**
   * <p>The ID of the template.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>&gt;The Amazon Resource Name (ARN) of the migration workflow template. The format for an
   *             Migration Hub Orchestrator template ARN is
   *             <code>arn:aws:migrationhub-orchestrator:region:account:template/template-abcd1234</code>.
   *             For more information about ARNs, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference-arns.html">Amazon Resource Names (ARNs)</a>
   *             in the <i>AWS General Reference</i>.</p>
   * @public
   */
  templateArn?: string | undefined;

  /**
   * <p>The name of the template.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The time at which the template was last created.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The inputs provided for the creation of the migration workflow.</p>
   * @public
   */
  inputs?: TemplateInput[] | undefined;

  /**
   * <p>List of AWS services utilized in a migration workflow.</p>
   * @public
   */
  tools?: Tool[] | undefined;

  /**
   * <p>The time at which the template was last created.</p>
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * <p>The owner of the migration workflow template.</p>
   * @public
   */
  owner?: string | undefined;

  /**
   * <p>The status of the template.</p>
   * @public
   */
  status?: TemplateStatus | undefined;

  /**
   * <p>The status message of retrieving migration workflow templates.</p>
   * @public
   */
  statusMessage?: string | undefined;

  /**
   * <p>The class of the migration workflow template. The available template classes
   *             are:</p>
   *          <ul>
   *             <li>
   *                <p>A2C</p>
   *             </li>
   *             <li>
   *                <p>MGN</p>
   *             </li>
   *             <li>
   *                <p>SAP_MULTI</p>
   *             </li>
   *             <li>
   *                <p>SQL_EC2</p>
   *             </li>
   *             <li>
   *                <p>SQL_RDS</p>
   *             </li>
   *             <li>
   *                <p>VMIE</p>
   *             </li>
   *          </ul>
   * @public
   */
  templateClass?: string | undefined;

  /**
   * <p>The tags added to the migration workflow template.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListMigrationWorkflowTemplatesRequest {
  /**
   * <p>The maximum number of results that can be returned.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The pagination token.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The name of the template.</p>
   * @public
   */
  name?: string | undefined;
}

/**
 * <p>The summary of the template.</p>
 * @public
 */
export interface TemplateSummary {
  /**
   * <p>The ID of the template.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The name of the template.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the template.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The description of the template.</p>
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface ListMigrationWorkflowTemplatesResponse {
  /**
   * <p>The pagination token.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The summary of the template.</p>
   * @public
   */
  templateSummary: TemplateSummary[] | undefined;
}

/**
 * @public
 */
export interface UpdateTemplateRequest {
  /**
   * <p>The ID of the request to update a migration workflow template.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The name of the migration workflow template to update.</p>
   * @public
   */
  templateName?: string | undefined;

  /**
   * <p>The description of the migration workflow template to update.</p>
   * @public
   */
  templateDescription?: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the
   *             idempotency of the request.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateTemplateResponse {
  /**
   * <p>The ID of the migration workflow template being updated.</p>
   * @public
   */
  templateId?: string | undefined;

  /**
   * <p>The ARN of the migration workflow template being updated. The format for an Migration Hub Orchestrator
   *             template ARN is
   *             <code>arn:aws:migrationhub-orchestrator:region:account:template/template-abcd1234</code>.
   *             For more information about ARNs, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference-arns.html">Amazon Resource Names (ARNs)</a>
   *             in the <i>AWS General Reference</i>.</p>
   * @public
   */
  templateArn?: string | undefined;

  /**
   * <p>The tags added to the migration workflow template.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListPluginsRequest {
  /**
   * <p>The maximum number of plugins that can be returned.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The pagination token.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const PluginHealth = {
  PLUGIN_HEALTHY: "HEALTHY",
  PLUGIN_UNHEALTHY: "UNHEALTHY",
} as const;

/**
 * @public
 */
export type PluginHealth = (typeof PluginHealth)[keyof typeof PluginHealth];

/**
 * <p>The summary of the Migration Hub Orchestrator plugin.</p>
 * @public
 */
export interface PluginSummary {
  /**
   * <p>The ID of the plugin.</p>
   * @public
   */
  pluginId?: string | undefined;

  /**
   * <p>The name of the host.</p>
   * @public
   */
  hostname?: string | undefined;

  /**
   * <p>The status of the plugin.</p>
   * @public
   */
  status?: PluginHealth | undefined;

  /**
   * <p>The IP address at which the plugin is located.</p>
   * @public
   */
  ipAddress?: string | undefined;

  /**
   * <p>The version of the plugin.</p>
   * @public
   */
  version?: string | undefined;

  /**
   * <p>The time at which the plugin was registered.</p>
   * @public
   */
  registeredTime?: string | undefined;
}

/**
 * @public
 */
export interface ListPluginsResponse {
  /**
   * <p>The pagination token.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Migration Hub Orchestrator plugins.</p>
   * @public
   */
  plugins?: PluginSummary[] | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource to which you want to add tags.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>A collection of labels, in the form of key:value pairs, that apply to this
   *             resource.</p>
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
   * <p>The ID of the step.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The ID of the template.</p>
   * @public
   */
  templateId: string | undefined;

  /**
   * <p>The ID of the step group.</p>
   * @public
   */
  stepGroupId: string | undefined;
}

/**
 * <p>The output of the step.</p>
 * @public
 */
export interface StepOutput {
  /**
   * <p>The name of the step.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The data type of the step output.</p>
   * @public
   */
  dataType?: DataType | undefined;

  /**
   * <p>Determine if an output is required from a step.</p>
   * @public
   */
  required?: boolean | undefined;
}

/**
 * @public
 * @enum
 */
export const StepActionType = {
  AUTOMATED: "AUTOMATED",
  MANUAL: "MANUAL",
} as const;

/**
 * @public
 */
export type StepActionType = (typeof StepActionType)[keyof typeof StepActionType];

/**
 * <p>Command to be run on a particular operating system.</p>
 * @public
 */
export interface PlatformCommand {
  /**
   * <p>Command for Linux.</p>
   * @public
   */
  linux?: string | undefined;

  /**
   * <p>Command for Windows.</p>
   * @public
   */
  windows?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const RunEnvironment = {
  AWS: "AWS",
  ONPREMISE: "ONPREMISE",
} as const;

/**
 * @public
 */
export type RunEnvironment = (typeof RunEnvironment)[keyof typeof RunEnvironment];

/**
 * <p>The script location for a particular operating system.</p>
 * @public
 */
export interface PlatformScriptKey {
  /**
   * <p>The script location for Linux.</p>
   * @public
   */
  linux?: string | undefined;

  /**
   * <p>The script location for Windows.</p>
   * @public
   */
  windows?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const TargetType = {
  ALL: "ALL",
  NONE: "NONE",
  SINGLE: "SINGLE",
} as const;

/**
 * @public
 */
export type TargetType = (typeof TargetType)[keyof typeof TargetType];

/**
 * <p>The custom script to run tests on source or target environments.</p>
 * @public
 */
export interface StepAutomationConfiguration {
  /**
   * <p>The Amazon S3 bucket where the script is located.</p>
   * @public
   */
  scriptLocationS3Bucket?: string | undefined;

  /**
   * <p>The Amazon S3 key for the script location.</p>
   * @public
   */
  scriptLocationS3Key?: PlatformScriptKey | undefined;

  /**
   * <p>The command to run the script.</p>
   * @public
   */
  command?: PlatformCommand | undefined;

  /**
   * <p>The source or target environment.</p>
   * @public
   */
  runEnvironment?: RunEnvironment | undefined;

  /**
   * <p>The servers on which to run the script.</p>
   * @public
   */
  targetType?: TargetType | undefined;
}

/**
 * @public
 */
export interface GetTemplateStepResponse {
  /**
   * <p>The ID of the step.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The ID of the step group.</p>
   * @public
   */
  stepGroupId?: string | undefined;

  /**
   * <p>The ID of the template.</p>
   * @public
   */
  templateId?: string | undefined;

  /**
   * <p>The name of the step.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The description of the step.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The action type of the step. You must run and update the status of a manual step for
   *             the workflow to continue after the completion of the step.</p>
   * @public
   */
  stepActionType?: StepActionType | undefined;

  /**
   * <p>The time at which the step was created.</p>
   * @public
   */
  creationTime?: string | undefined;

  /**
   * <p>The previous step.</p>
   * @public
   */
  previous?: string[] | undefined;

  /**
   * <p>The next step.</p>
   * @public
   */
  next?: string[] | undefined;

  /**
   * <p>The outputs of the step.</p>
   * @public
   */
  outputs?: StepOutput[] | undefined;

  /**
   * <p>The custom script to run tests on source or target environments.</p>
   * @public
   */
  stepAutomationConfiguration?: StepAutomationConfiguration | undefined;
}

/**
 * @public
 */
export interface ListTemplateStepsRequest {
  /**
   * <p>The maximum number of results that can be returned.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The pagination token.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The ID of the template.</p>
   * @public
   */
  templateId: string | undefined;

  /**
   * <p>The ID of the step group.</p>
   * @public
   */
  stepGroupId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const Owner = {
  AWSManaged: "AWS_MANAGED",
  CUSTOM: "CUSTOM",
} as const;

/**
 * @public
 */
export type Owner = (typeof Owner)[keyof typeof Owner];

/**
 * <p>The summary of the step.</p>
 * @public
 */
export interface TemplateStepSummary {
  /**
   * <p>The ID of the step.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The ID of the step group.</p>
   * @public
   */
  stepGroupId?: string | undefined;

  /**
   * <p>The ID of the template.</p>
   * @public
   */
  templateId?: string | undefined;

  /**
   * <p>The name of the step.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The action type of the step. You must run and update the status of a manual step for
   *             the workflow to continue after the completion of the step.</p>
   * @public
   */
  stepActionType?: StepActionType | undefined;

  /**
   * <p>The servers on which to run the script.</p>
   * @public
   */
  targetType?: TargetType | undefined;

  /**
   * <p>The owner of the step.</p>
   * @public
   */
  owner?: Owner | undefined;

  /**
   * <p>The previous step.</p>
   * @public
   */
  previous?: string[] | undefined;

  /**
   * <p>The next step.</p>
   * @public
   */
  next?: string[] | undefined;
}

/**
 * @public
 */
export interface ListTemplateStepsResponse {
  /**
   * <p>The pagination token.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The list of summaries of steps in a template.</p>
   * @public
   */
  templateStepSummaryList?: TemplateStepSummary[] | undefined;
}

/**
 * @public
 */
export interface GetTemplateStepGroupRequest {
  /**
   * <p>The ID of the template.</p>
   * @public
   */
  templateId: string | undefined;

  /**
   * <p>The ID of the step group.</p>
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 * @enum
 */
export const StepGroupStatus = {
  AWAITING_DEPENDENCIES: "AWAITING_DEPENDENCIES",
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  PAUSED: "PAUSED",
  PAUSING: "PAUSING",
  READY: "READY",
  USER_ATTENTION_REQUIRED: "USER_ATTENTION_REQUIRED",
} as const;

/**
 * @public
 */
export type StepGroupStatus = (typeof StepGroupStatus)[keyof typeof StepGroupStatus];

/**
 * @public
 */
export interface GetTemplateStepGroupResponse {
  /**
   * <p>The ID of the template.</p>
   * @public
   */
  templateId?: string | undefined;

  /**
   * <p>The ID of the step group.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The name of the step group.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The description of the step group.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The status of the step group.</p>
   * @public
   */
  status?: StepGroupStatus | undefined;

  /**
   * <p>The time at which the step group was created.</p>
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * <p>The time at which the step group was last modified.</p>
   * @public
   */
  lastModifiedTime?: Date | undefined;

  /**
   * <p>List of AWS services utilized in a migration workflow.</p>
   * @public
   */
  tools?: Tool[] | undefined;

  /**
   * <p>The previous step group.</p>
   * @public
   */
  previous?: string[] | undefined;

  /**
   * <p>The next step group.</p>
   * @public
   */
  next?: string[] | undefined;
}

/**
 * @public
 */
export interface ListTemplateStepGroupsRequest {
  /**
   * <p>The maximum number of results that can be returned.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The pagination token.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The ID of the template.</p>
   * @public
   */
  templateId: string | undefined;
}

/**
 * <p>The summary of the step group in the template.</p>
 * @public
 */
export interface TemplateStepGroupSummary {
  /**
   * <p>The ID of the step group.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The name of the step group.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The previous step group.</p>
   * @public
   */
  previous?: string[] | undefined;

  /**
   * <p>The next step group.</p>
   * @public
   */
  next?: string[] | undefined;
}

/**
 * @public
 */
export interface ListTemplateStepGroupsResponse {
  /**
   * <p>The pagination token.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The summary of the step group in the template.</p>
   * @public
   */
  templateStepGroupSummary: TemplateStepGroupSummary[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource from which you want to remove
   *             tags.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>One or more tag keys. Specify only the tag keys, not the tag values.</p>
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * <p>A structure to hold multiple values of an output.</p>
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
   * <p>The integer value. </p>
   * @public
   */
  export interface IntegerValueMember {
    integerValue: number;
    stringValue?: never;
    listOfStringValue?: never;
    $unknown?: never;
  }

  /**
   * <p>The string value.</p>
   * @public
   */
  export interface StringValueMember {
    integerValue?: never;
    stringValue: string;
    listOfStringValue?: never;
    $unknown?: never;
  }

  /**
   * <p>The list of string value.</p>
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
 * <p>The output of a step.</p>
 * @public
 */
export interface WorkflowStepOutput {
  /**
   * <p>The name of the step.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The data type of the output.</p>
   * @public
   */
  dataType?: DataType | undefined;

  /**
   * <p>Determine if an output is required from a step.</p>
   * @public
   */
  required?: boolean | undefined;

  /**
   * <p>The value of the output.</p>
   * @public
   */
  value?: WorkflowStepOutputUnion | undefined;
}

/**
 * <p>The custom script to run tests on source or target environments.</p>
 * @public
 */
export interface WorkflowStepAutomationConfiguration {
  /**
   * <p>The Amazon S3 bucket where the script is located.</p>
   * @public
   */
  scriptLocationS3Bucket?: string | undefined;

  /**
   * <p>The Amazon S3 key for the script location.</p>
   * @public
   */
  scriptLocationS3Key?: PlatformScriptKey | undefined;

  /**
   * <p>The command required to run the script.</p>
   * @public
   */
  command?: PlatformCommand | undefined;

  /**
   * <p>The source or target environment.</p>
   * @public
   */
  runEnvironment?: RunEnvironment | undefined;

  /**
   * <p>The servers on which to run the script.</p>
   * @public
   */
  targetType?: TargetType | undefined;
}

/**
 * @public
 */
export interface CreateWorkflowStepRequest {
  /**
   * <p>The name of the step.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The ID of the step group.</p>
   * @public
   */
  stepGroupId: string | undefined;

  /**
   * <p>The ID of the migration workflow.</p>
   * @public
   */
  workflowId: string | undefined;

  /**
   * <p>The action type of the step. You must run and update the status of a manual step for
   *             the workflow to continue after the completion of the step.</p>
   * @public
   */
  stepActionType: StepActionType | undefined;

  /**
   * <p>The description of the step.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The custom script to run tests on source or target environments.</p>
   * @public
   */
  workflowStepAutomationConfiguration?: WorkflowStepAutomationConfiguration | undefined;

  /**
   * <p>The servers on which a step will be run.</p>
   * @public
   */
  stepTarget?: string[] | undefined;

  /**
   * <p>The key value pairs added for the expected output.</p>
   * @public
   */
  outputs?: WorkflowStepOutput[] | undefined;

  /**
   * <p>The previous step.</p>
   * @public
   */
  previous?: string[] | undefined;

  /**
   * <p>The next step.</p>
   * @public
   */
  next?: string[] | undefined;
}

/**
 * @public
 */
export interface CreateWorkflowStepResponse {
  /**
   * <p>The ID of the step.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The ID of the step group.</p>
   * @public
   */
  stepGroupId?: string | undefined;

  /**
   * <p>The ID of the migration workflow.</p>
   * @public
   */
  workflowId?: string | undefined;

  /**
   * <p>The name of the step.</p>
   * @public
   */
  name?: string | undefined;
}

/**
 * @public
 */
export interface DeleteWorkflowStepRequest {
  /**
   * <p>The ID of the step you want to delete.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The ID of the step group that contains the step you want to delete.</p>
   * @public
   */
  stepGroupId: string | undefined;

  /**
   * <p>The ID of the migration workflow.</p>
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
   * <p>The ID of the migration workflow.</p>
   * @public
   */
  workflowId: string | undefined;

  /**
   * <p>The ID of the step group.</p>
   * @public
   */
  stepGroupId: string | undefined;

  /**
   * <p>The ID of the step.</p>
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 * @enum
 */
export const StepStatus = {
  AWAITING_DEPENDENCIES: "AWAITING_DEPENDENCIES",
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  PAUSED: "PAUSED",
  READY: "READY",
  SKIPPED: "SKIPPED",
  USER_ATTENTION_REQUIRED: "USER_ATTENTION_REQUIRED",
} as const;

/**
 * @public
 */
export type StepStatus = (typeof StepStatus)[keyof typeof StepStatus];

/**
 * @public
 */
export interface GetWorkflowStepResponse {
  /**
   * <p>The name of the step.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The ID of the step group.</p>
   * @public
   */
  stepGroupId?: string | undefined;

  /**
   * <p>The ID of the migration workflow.</p>
   * @public
   */
  workflowId?: string | undefined;

  /**
   * <p>The ID of the step.</p>
   * @public
   */
  stepId?: string | undefined;

  /**
   * <p>The description of the step.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The action type of the step. You must run and update the status of a manual step for
   *             the workflow to continue after the completion of the step.</p>
   * @public
   */
  stepActionType?: StepActionType | undefined;

  /**
   * <p>The owner of the step.</p>
   * @public
   */
  owner?: Owner | undefined;

  /**
   * <p>The custom script to run tests on source or target environments.</p>
   * @public
   */
  workflowStepAutomationConfiguration?: WorkflowStepAutomationConfiguration | undefined;

  /**
   * <p>The servers on which a step will be run.</p>
   * @public
   */
  stepTarget?: string[] | undefined;

  /**
   * <p>The outputs of the step.</p>
   * @public
   */
  outputs?: WorkflowStepOutput[] | undefined;

  /**
   * <p>The previous step.</p>
   * @public
   */
  previous?: string[] | undefined;

  /**
   * <p>The next step.</p>
   * @public
   */
  next?: string[] | undefined;

  /**
   * <p>The status of the step.</p>
   * @public
   */
  status?: StepStatus | undefined;

  /**
   * <p>The status message of the migration workflow.</p>
   * @public
   */
  statusMessage?: string | undefined;

  /**
   * <p>The output location of the script.</p>
   * @public
   */
  scriptOutputLocation?: string | undefined;

  /**
   * <p>The time at which the step was created.</p>
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * <p>The time at which the workflow was last started.</p>
   * @public
   */
  lastStartTime?: Date | undefined;

  /**
   * <p>The time at which the step ended.</p>
   * @public
   */
  endTime?: Date | undefined;

  /**
   * <p>The number of servers that have been migrated.</p>
   * @public
   */
  noOfSrvCompleted?: number | undefined;

  /**
   * <p>The number of servers that have failed to migrate.</p>
   * @public
   */
  noOfSrvFailed?: number | undefined;

  /**
   * <p>The total number of servers that have been migrated.</p>
   * @public
   */
  totalNoOfSrv?: number | undefined;
}

/**
 * @public
 */
export interface ListWorkflowStepsRequest {
  /**
   * <p>The pagination token.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results that can be returned.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The ID of the migration workflow.</p>
   * @public
   */
  workflowId: string | undefined;

  /**
   * <p>The ID of the step group.</p>
   * @public
   */
  stepGroupId: string | undefined;
}

/**
 * <p>The summary of the step in a migration workflow.</p>
 * @public
 */
export interface WorkflowStepSummary {
  /**
   * <p>The ID of the step.</p>
   * @public
   */
  stepId?: string | undefined;

  /**
   * <p>The name of the step.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The action type of the step. You must run and update the status of a manual step for
   *             the workflow to continue after the completion of the step.</p>
   * @public
   */
  stepActionType?: StepActionType | undefined;

  /**
   * <p>The owner of the step.</p>
   * @public
   */
  owner?: Owner | undefined;

  /**
   * <p>The previous step.</p>
   * @public
   */
  previous?: string[] | undefined;

  /**
   * <p>The next step.</p>
   * @public
   */
  next?: string[] | undefined;

  /**
   * <p>The status of the step.</p>
   * @public
   */
  status?: StepStatus | undefined;

  /**
   * <p>The status message of the migration workflow.</p>
   * @public
   */
  statusMessage?: string | undefined;

  /**
   * <p>The number of servers that have been migrated.</p>
   * @public
   */
  noOfSrvCompleted?: number | undefined;

  /**
   * <p>The number of servers that have failed to migrate.</p>
   * @public
   */
  noOfSrvFailed?: number | undefined;

  /**
   * <p>The total number of servers that have been migrated.</p>
   * @public
   */
  totalNoOfSrv?: number | undefined;

  /**
   * <p>The description of the step.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The location of the script.</p>
   * @public
   */
  scriptLocation?: string | undefined;
}

/**
 * @public
 */
export interface ListWorkflowStepsResponse {
  /**
   * <p>The pagination token.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The summary of steps in a migration workflow.</p>
   * @public
   */
  workflowStepsSummary: WorkflowStepSummary[] | undefined;
}

/**
 * @public
 */
export interface RetryWorkflowStepRequest {
  /**
   * <p>The ID of the migration workflow.</p>
   * @public
   */
  workflowId: string | undefined;

  /**
   * <p>The ID of the step group.</p>
   * @public
   */
  stepGroupId: string | undefined;

  /**
   * <p>The ID of the step.</p>
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface RetryWorkflowStepResponse {
  /**
   * <p>The ID of the step group.</p>
   * @public
   */
  stepGroupId?: string | undefined;

  /**
   * <p>The ID of the migration workflow.</p>
   * @public
   */
  workflowId?: string | undefined;

  /**
   * <p>The ID of the step.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The status of the step.</p>
   * @public
   */
  status?: StepStatus | undefined;
}

/**
 * @public
 */
export interface UpdateWorkflowStepRequest {
  /**
   * <p>The ID of the step.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The ID of the step group.</p>
   * @public
   */
  stepGroupId: string | undefined;

  /**
   * <p>The ID of the migration workflow.</p>
   * @public
   */
  workflowId: string | undefined;

  /**
   * <p>The name of the step.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The description of the step.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The action type of the step. You must run and update the status of a manual step for
   *             the workflow to continue after the completion of the step.</p>
   * @public
   */
  stepActionType?: StepActionType | undefined;

  /**
   * <p>The custom script to run tests on the source and target environments.</p>
   * @public
   */
  workflowStepAutomationConfiguration?: WorkflowStepAutomationConfiguration | undefined;

  /**
   * <p>The servers on which a step will be run.</p>
   * @public
   */
  stepTarget?: string[] | undefined;

  /**
   * <p>The outputs of a step.</p>
   * @public
   */
  outputs?: WorkflowStepOutput[] | undefined;

  /**
   * <p>The previous step.</p>
   * @public
   */
  previous?: string[] | undefined;

  /**
   * <p>The next step.</p>
   * @public
   */
  next?: string[] | undefined;

  /**
   * <p>The status of the step.</p>
   * @public
   */
  status?: StepStatus | undefined;
}

/**
 * @public
 */
export interface UpdateWorkflowStepResponse {
  /**
   * <p>The ID of the step.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The ID of the step group.</p>
   * @public
   */
  stepGroupId?: string | undefined;

  /**
   * <p>The ID of the migration workflow.</p>
   * @public
   */
  workflowId?: string | undefined;

  /**
   * <p>The name of the step.</p>
   * @public
   */
  name?: string | undefined;
}

/**
 * @public
 */
export interface CreateWorkflowStepGroupRequest {
  /**
   * <p>The ID of the migration workflow that will contain the step group.</p>
   * @public
   */
  workflowId: string | undefined;

  /**
   * <p>The name of the step group.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the step group.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The next step group.</p>
   * @public
   */
  next?: string[] | undefined;

  /**
   * <p>The previous step group.</p>
   * @public
   */
  previous?: string[] | undefined;
}

/**
 * @public
 */
export interface CreateWorkflowStepGroupResponse {
  /**
   * <p>The ID of the migration workflow that contains the step group.</p>
   * @public
   */
  workflowId?: string | undefined;

  /**
   * <p>The name of the step group.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The ID of the step group.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The description of the step group.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>List of AWS services utilized in a migration workflow.</p>
   * @public
   */
  tools?: Tool[] | undefined;

  /**
   * <p>The next step group.</p>
   * @public
   */
  next?: string[] | undefined;

  /**
   * <p>The previous step group.</p>
   * @public
   */
  previous?: string[] | undefined;

  /**
   * <p>The time at which the step group is created.</p>
   * @public
   */
  creationTime?: Date | undefined;
}

/**
 * @public
 */
export interface DeleteWorkflowStepGroupRequest {
  /**
   * <p>The ID of the migration workflow.</p>
   * @public
   */
  workflowId: string | undefined;

  /**
   * <p>The ID of the step group you want to delete.</p>
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
   * <p>The ID of the step group.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The ID of the migration workflow.</p>
   * @public
   */
  workflowId: string | undefined;
}

/**
 * @public
 */
export interface GetWorkflowStepGroupResponse {
  /**
   * <p>The ID of the step group.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The ID of the migration workflow.</p>
   * @public
   */
  workflowId?: string | undefined;

  /**
   * <p>The name of the step group.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The description of the step group.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The status of the step group.</p>
   * @public
   */
  status?: StepGroupStatus | undefined;

  /**
   * <p>The owner of the step group.</p>
   * @public
   */
  owner?: Owner | undefined;

  /**
   * <p>The time at which the step group was created.</p>
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * <p>The time at which the step group was last modified.</p>
   * @public
   */
  lastModifiedTime?: Date | undefined;

  /**
   * <p>The time at which the step group ended.</p>
   * @public
   */
  endTime?: Date | undefined;

  /**
   * <p>List of AWS services utilized in a migration workflow.</p>
   * @public
   */
  tools?: Tool[] | undefined;

  /**
   * <p>The previous step group.</p>
   * @public
   */
  previous?: string[] | undefined;

  /**
   * <p>The next step group.</p>
   * @public
   */
  next?: string[] | undefined;
}

/**
 * @public
 */
export interface ListWorkflowStepGroupsRequest {
  /**
   * <p>The pagination token.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results that can be returned.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The ID of the migration workflow.</p>
   * @public
   */
  workflowId: string | undefined;
}

/**
 * <p>The summary of a step group in a workflow.</p>
 * @public
 */
export interface WorkflowStepGroupSummary {
  /**
   * <p>The ID of the step group.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The name of the step group.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The owner of the step group.</p>
   * @public
   */
  owner?: Owner | undefined;

  /**
   * <p>The status of the step group.</p>
   * @public
   */
  status?: StepGroupStatus | undefined;

  /**
   * <p>The previous step group.</p>
   * @public
   */
  previous?: string[] | undefined;

  /**
   * <p>The next step group.</p>
   * @public
   */
  next?: string[] | undefined;
}

/**
 * @public
 */
export interface ListWorkflowStepGroupsResponse {
  /**
   * <p>The pagination token.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The summary of step groups in a migration workflow.</p>
   * @public
   */
  workflowStepGroupsSummary: WorkflowStepGroupSummary[] | undefined;
}

/**
 * @public
 */
export interface UpdateWorkflowStepGroupRequest {
  /**
   * <p>The ID of the migration workflow.</p>
   * @public
   */
  workflowId: string | undefined;

  /**
   * <p>The ID of the step group.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The name of the step group.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The description of the step group.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The next step group.</p>
   * @public
   */
  next?: string[] | undefined;

  /**
   * <p>The previous step group.</p>
   * @public
   */
  previous?: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateWorkflowStepGroupResponse {
  /**
   * <p>The ID of the migration workflow.</p>
   * @public
   */
  workflowId?: string | undefined;

  /**
   * <p>The name of the step group.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The ID of the step group.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The description of the step group.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>List of AWS services utilized in a migration workflow.</p>
   * @public
   */
  tools?: Tool[] | undefined;

  /**
   * <p>The next step group.</p>
   * @public
   */
  next?: string[] | undefined;

  /**
   * <p>The previous step group.</p>
   * @public
   */
  previous?: string[] | undefined;

  /**
   * <p>The time at which the step group was last modified.</p>
   * @public
   */
  lastModifiedTime?: Date | undefined;
}
