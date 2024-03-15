// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { MigrationHubOrchestratorServiceException as __BaseException } from "./MigrationHubOrchestratorServiceException";

/**
 * <p>You do not have sufficient access to perform this action.</p>
 * @public
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
  tags?: Record<string, string>;
}

/**
 * <p>The resource is not available.</p>
 * @public
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
 * @public
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
  description?: string;

  /**
   * <p>The ID of the template.</p>
   * @public
   */
  templateId: string | undefined;

  /**
   * <p>The configuration ID of the application configured in Application Discovery Service.</p>
   * @public
   */
  applicationConfigurationId?: string;

  /**
   * <p>The input parameters required to create a migration workflow.</p>
   * @public
   */
  inputParameters: Record<string, StepInput> | undefined;

  /**
   * <p>The servers on which a step will be run.</p>
   * @public
   */
  stepTargets?: string[];

  /**
   * <p>The tags to add on a migration workflow.</p>
   * @public
   */
  tags?: Record<string, string>;
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
  id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the migration workflow.</p>
   * @public
   */
  arn?: string;

  /**
   * <p>The name of the migration workflow.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The description of the migration workflow.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The ID of the template.</p>
   * @public
   */
  templateId?: string;

  /**
   * <p>The configuration ID of the application configured in Application Discovery Service.</p>
   * @public
   */
  adsApplicationConfigurationId?: string;

  /**
   * <p>The inputs for creating a migration workflow.</p>
   * @public
   */
  workflowInputs?: Record<string, StepInput>;

  /**
   * <p>The servers on which a step will be run.</p>
   * @public
   */
  stepTargets?: string[];

  /**
   * <p>The status of the migration workflow.</p>
   * @public
   */
  status?: MigrationWorkflowStatusEnum;

  /**
   * <p>The time at which the migration workflow was created.</p>
   * @public
   */
  creationTime?: Date;

  /**
   * <p>The tags to add on a migration workflow.</p>
   * @public
   */
  tags?: Record<string, string>;
}

/**
 * <p>An internal error has occurred.</p>
 * @public
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
 * @public
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
  id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the migration workflow.</p>
   * @public
   */
  arn?: string;

  /**
   * <p>The status of the migration workflow.</p>
   * @public
   */
  status?: MigrationWorkflowStatusEnum;
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
  name?: string;

  /**
   * <p>The URL of an AWS service.</p>
   * @public
   */
  url?: string;
}

/**
 * @public
 */
export interface GetMigrationWorkflowResponse {
  /**
   * <p>The ID of the migration workflow.</p>
   * @public
   */
  id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the migration workflow.</p>
   * @public
   */
  arn?: string;

  /**
   * <p>The name of the migration workflow.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The description of the migration workflow.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The ID of the template.</p>
   * @public
   */
  templateId?: string;

  /**
   * <p>The configuration ID of the application configured in Application Discovery Service.</p>
   * @public
   */
  adsApplicationConfigurationId?: string;

  /**
   * <p>The name of the application configured in Application Discovery Service.</p>
   * @public
   */
  adsApplicationName?: string;

  /**
   * <p>The status of the migration workflow.</p>
   * @public
   */
  status?: MigrationWorkflowStatusEnum;

  /**
   * <p>The status message of the migration workflow.</p>
   * @public
   */
  statusMessage?: string;

  /**
   * <p>The time at which the migration workflow was created.</p>
   * @public
   */
  creationTime?: Date;

  /**
   * <p>The time at which the migration workflow was last started.</p>
   * @public
   */
  lastStartTime?: Date;

  /**
   * <p>The time at which the migration workflow was last stopped.</p>
   * @public
   */
  lastStopTime?: Date;

  /**
   * <p>The time at which the migration workflow was last modified.</p>
   * @public
   */
  lastModifiedTime?: Date;

  /**
   * <p>The time at which the migration workflow ended.</p>
   * @public
   */
  endTime?: Date;

  /**
   * <p>List of AWS services utilized in a migration workflow.</p>
   * @public
   */
  tools?: Tool[];

  /**
   * <p>The total number of steps in the migration workflow.</p>
   * @public
   */
  totalSteps?: number;

  /**
   * <p>Get a list of completed steps in the migration workflow.</p>
   * @public
   */
  completedSteps?: number;

  /**
   * <p>The inputs required for creating the migration workflow.</p>
   * @public
   */
  workflowInputs?: Record<string, StepInput>;

  /**
   * <p>The tags added to the migration workflow.</p>
   * @public
   */
  tags?: Record<string, string>;

  /**
   * <p>The Amazon S3 bucket where the migration logs are stored.</p>
   * @public
   */
  workflowBucket?: string;
}

/**
 * @public
 */
export interface ListMigrationWorkflowsRequest {
  /**
   * <p>The maximum number of results that can be returned.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>The pagination token.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>The ID of the template.</p>
   * @public
   */
  templateId?: string;

  /**
   * <p>The name of the application configured in Application Discovery Service.</p>
   * @public
   */
  adsApplicationConfigurationName?: string;

  /**
   * <p>The status of the migration workflow.</p>
   * @public
   */
  status?: MigrationWorkflowStatusEnum;

  /**
   * <p>The name of the migration workflow.</p>
   * @public
   */
  name?: string;
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
  id?: string;

  /**
   * <p>The name of the migration workflow.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The ID of the template.</p>
   * @public
   */
  templateId?: string;

  /**
   * <p>The name of the application configured in Application Discovery Service.</p>
   * @public
   */
  adsApplicationConfigurationName?: string;

  /**
   * <p>The status of the migration workflow.</p>
   * @public
   */
  status?: MigrationWorkflowStatusEnum;

  /**
   * <p>The time at which the migration workflow was created.</p>
   * @public
   */
  creationTime?: Date;

  /**
   * <p>The time at which the migration workflow ended.</p>
   * @public
   */
  endTime?: Date;

  /**
   * <p>The status message of the migration workflow.</p>
   * @public
   */
  statusMessage?: string;

  /**
   * <p>The steps completed in the migration workflow.</p>
   * @public
   */
  completedSteps?: number;

  /**
   * <p>All the steps in a migration workflow.</p>
   * @public
   */
  totalSteps?: number;
}

/**
 * @public
 */
export interface ListMigrationWorkflowsResponse {
  /**
   * <p>The pagination token.</p>
   * @public
   */
  nextToken?: string;

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
  id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the migration workflow.</p>
   * @public
   */
  arn?: string;

  /**
   * <p>The status of the migration workflow.</p>
   * @public
   */
  status?: MigrationWorkflowStatusEnum;

  /**
   * <p>The status message of the migration workflow.</p>
   * @public
   */
  statusMessage?: string;

  /**
   * <p>The time at which the migration workflow was last started.</p>
   * @public
   */
  lastStartTime?: Date;
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
  id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the migration workflow.</p>
   * @public
   */
  arn?: string;

  /**
   * <p>The status of the migration workflow.</p>
   * @public
   */
  status?: MigrationWorkflowStatusEnum;

  /**
   * <p>The status message of the migration workflow.</p>
   * @public
   */
  statusMessage?: string;

  /**
   * <p>The time at which the migration workflow was stopped.</p>
   * @public
   */
  lastStopTime?: Date;
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
  name?: string;

  /**
   * <p>The description of the migration workflow.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The input parameters required to update a migration workflow.</p>
   * @public
   */
  inputParameters?: Record<string, StepInput>;

  /**
   * <p>The servers on which a step will be run.</p>
   * @public
   */
  stepTargets?: string[];
}

/**
 * @public
 */
export interface UpdateMigrationWorkflowResponse {
  /**
   * <p>The ID of the migration workflow.</p>
   * @public
   */
  id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the migration workflow.</p>
   * @public
   */
  arn?: string;

  /**
   * <p>The name of the migration workflow.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The description of the migration workflow.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The ID of the template.</p>
   * @public
   */
  templateId?: string;

  /**
   * <p>The ID of the application configured in Application Discovery Service.</p>
   * @public
   */
  adsApplicationConfigurationId?: string;

  /**
   * <p>The inputs required to update a migration workflow.</p>
   * @public
   */
  workflowInputs?: Record<string, StepInput>;

  /**
   * <p>The servers on which a step will be run.</p>
   * @public
   */
  stepTargets?: string[];

  /**
   * <p>The status of the migration workflow.</p>
   * @public
   */
  status?: MigrationWorkflowStatusEnum;

  /**
   * <p>The time at which the migration workflow was created.</p>
   * @public
   */
  creationTime?: Date;

  /**
   * <p>The time at which the migration workflow was last modified.</p>
   * @public
   */
  lastModifiedTime?: Date;

  /**
   * <p>The tags added to the migration workflow.</p>
   * @public
   */
  tags?: Record<string, string>;
}

/**
 * <p>This exception is thrown when an attempt to update or delete
 *             a resource would cause an inconsistent state.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  $retryable = {};
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictException.prototype);
  }
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

  export interface Visitor<T> {
    workflowId: (value: string) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: TemplateSource, visitor: Visitor<T>): T => {
    if (value.workflowId !== undefined) return visitor.workflowId(value.workflowId);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
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
  templateDescription?: string;

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
  clientToken?: string;

  /**
   * <p>The tags to add to the migration workflow template.</p>
   * @public
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateTemplateResponse {
  /**
   * <p>The ID of the migration workflow template.</p>
   * @public
   */
  templateId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the migration workflow template. The format for an
   *             Migration Hub Orchestrator template ARN is
   *             <code>arn:aws:migrationhub-orchestrator:region:account:template/template-abcd1234</code>.
   *             For more information about ARNs, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference-arns.html">Amazon Resource Names (ARNs)</a>
   *             in the <i>AWS General Reference</i>.</p>
   * @public
   */
  templateArn?: string;

  /**
   * <p>The tags added to the migration workflow template.</p>
   * @public
   */
  tags?: Record<string, string>;
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
  inputName?: string;

  /**
   * <p>The data type of the template input.</p>
   * @public
   */
  dataType?: DataType;

  /**
   * <p>Determine if an input is required from the template.</p>
   * @public
   */
  required?: boolean;
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
  id?: string;

  /**
   * <p>&gt;The Amazon Resource Name (ARN) of the migration workflow template. The format for an
   *             Migration Hub Orchestrator template ARN is
   *             <code>arn:aws:migrationhub-orchestrator:region:account:template/template-abcd1234</code>.
   *             For more information about ARNs, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference-arns.html">Amazon Resource Names (ARNs)</a>
   *             in the <i>AWS General Reference</i>.</p>
   * @public
   */
  templateArn?: string;

  /**
   * <p>The name of the template.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The time at which the template was last created.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The inputs provided for the creation of the migration workflow.</p>
   * @public
   */
  inputs?: TemplateInput[];

  /**
   * <p>List of AWS services utilized in a migration workflow.</p>
   * @public
   */
  tools?: Tool[];

  /**
   * <p>The time at which the template was last created.</p>
   * @public
   */
  creationTime?: Date;

  /**
   * <p>The owner of the migration workflow template.</p>
   * @public
   */
  owner?: string;

  /**
   * <p>The status of the template.</p>
   * @public
   */
  status?: TemplateStatus;

  /**
   * <p>The status message of retrieving migration workflow templates.</p>
   * @public
   */
  statusMessage?: string;

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
  templateClass?: string;

  /**
   * <p>The tags added to the migration workflow template.</p>
   * @public
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface ListMigrationWorkflowTemplatesRequest {
  /**
   * <p>The maximum number of results that can be returned.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>The pagination token.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>The name of the template.</p>
   * @public
   */
  name?: string;
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
  id?: string;

  /**
   * <p>The name of the template.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the template.</p>
   * @public
   */
  arn?: string;

  /**
   * <p>The description of the template.</p>
   * @public
   */
  description?: string;
}

/**
 * @public
 */
export interface ListMigrationWorkflowTemplatesResponse {
  /**
   * <p>The pagination token.</p>
   * @public
   */
  nextToken?: string;

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
  templateName?: string;

  /**
   * <p>The description of the migration workflow template to update.</p>
   * @public
   */
  templateDescription?: string;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the
   *             idempotency of the request.</p>
   * @public
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface UpdateTemplateResponse {
  /**
   * <p>The ID of the migration workflow template being updated.</p>
   * @public
   */
  templateId?: string;

  /**
   * <p>The ARN of the migration workflow template being updated. The format for an Migration Hub Orchestrator
   *             template ARN is
   *             <code>arn:aws:migrationhub-orchestrator:region:account:template/template-abcd1234</code>.
   *             For more information about ARNs, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference-arns.html">Amazon Resource Names (ARNs)</a>
   *             in the <i>AWS General Reference</i>.</p>
   * @public
   */
  templateArn?: string;

  /**
   * <p>The tags added to the migration workflow template.</p>
   * @public
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface ListPluginsRequest {
  /**
   * <p>The maximum number of plugins that can be returned.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>The pagination token.</p>
   * @public
   */
  nextToken?: string;
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
  pluginId?: string;

  /**
   * <p>The name of the host.</p>
   * @public
   */
  hostname?: string;

  /**
   * <p>The status of the plugin.</p>
   * @public
   */
  status?: PluginHealth;

  /**
   * <p>The IP address at which the plugin is located.</p>
   * @public
   */
  ipAddress?: string;

  /**
   * <p>The version of the plugin.</p>
   * @public
   */
  version?: string;

  /**
   * <p>The time at which the plugin was registered.</p>
   * @public
   */
  registeredTime?: string;
}

/**
 * @public
 */
export interface ListPluginsResponse {
  /**
   * <p>The pagination token.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>Migration Hub Orchestrator plugins.</p>
   * @public
   */
  plugins?: PluginSummary[];
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
  name?: string;

  /**
   * <p>The data type of the step output.</p>
   * @public
   */
  dataType?: DataType;

  /**
   * <p>Determine if an output is required from a step.</p>
   * @public
   */
  required?: boolean;
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
  linux?: string;

  /**
   * <p>Command for Windows.</p>
   * @public
   */
  windows?: string;
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
  linux?: string;

  /**
   * <p>The script location for Windows.</p>
   * @public
   */
  windows?: string;
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
  scriptLocationS3Bucket?: string;

  /**
   * <p>The Amazon S3 key for the script location.</p>
   * @public
   */
  scriptLocationS3Key?: PlatformScriptKey;

  /**
   * <p>The command to run the script.</p>
   * @public
   */
  command?: PlatformCommand;

  /**
   * <p>The source or target environment.</p>
   * @public
   */
  runEnvironment?: RunEnvironment;

  /**
   * <p>The servers on which to run the script.</p>
   * @public
   */
  targetType?: TargetType;
}

/**
 * @public
 */
export interface GetTemplateStepResponse {
  /**
   * <p>The ID of the step.</p>
   * @public
   */
  id?: string;

  /**
   * <p>The ID of the step group.</p>
   * @public
   */
  stepGroupId?: string;

  /**
   * <p>The ID of the template.</p>
   * @public
   */
  templateId?: string;

  /**
   * <p>The name of the step.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The description of the step.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The action type of the step. You must run and update the status of a manual step for
   *             the workflow to continue after the completion of the step.</p>
   * @public
   */
  stepActionType?: StepActionType;

  /**
   * <p>The time at which the step was created.</p>
   * @public
   */
  creationTime?: string;

  /**
   * <p>The previous step.</p>
   * @public
   */
  previous?: string[];

  /**
   * <p>The next step.</p>
   * @public
   */
  next?: string[];

  /**
   * <p>The outputs of the step.</p>
   * @public
   */
  outputs?: StepOutput[];

  /**
   * <p>The custom script to run tests on source or target environments.</p>
   * @public
   */
  stepAutomationConfiguration?: StepAutomationConfiguration;
}

/**
 * @public
 */
export interface ListTemplateStepsRequest {
  /**
   * <p>The maximum number of results that can be returned.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>The pagination token.</p>
   * @public
   */
  nextToken?: string;

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
  id?: string;

  /**
   * <p>The ID of the step group.</p>
   * @public
   */
  stepGroupId?: string;

  /**
   * <p>The ID of the template.</p>
   * @public
   */
  templateId?: string;

  /**
   * <p>The name of the step.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The action type of the step. You must run and update the status of a manual step for
   *             the workflow to continue after the completion of the step.</p>
   * @public
   */
  stepActionType?: StepActionType;

  /**
   * <p>The servers on which to run the script.</p>
   * @public
   */
  targetType?: TargetType;

  /**
   * <p>The owner of the step.</p>
   * @public
   */
  owner?: Owner;

  /**
   * <p>The previous step.</p>
   * @public
   */
  previous?: string[];

  /**
   * <p>The next step.</p>
   * @public
   */
  next?: string[];
}

/**
 * @public
 */
export interface ListTemplateStepsResponse {
  /**
   * <p>The pagination token.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>The list of summaries of steps in a template.</p>
   * @public
   */
  templateStepSummaryList?: TemplateStepSummary[];
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
  templateId?: string;

  /**
   * <p>The ID of the step group.</p>
   * @public
   */
  id?: string;

  /**
   * <p>The name of the step group.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The description of the step group.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The status of the step group.</p>
   * @public
   */
  status?: StepGroupStatus;

  /**
   * <p>The time at which the step group was created.</p>
   * @public
   */
  creationTime?: Date;

  /**
   * <p>The time at which the step group was last modified.</p>
   * @public
   */
  lastModifiedTime?: Date;

  /**
   * <p>List of AWS services utilized in a migration workflow.</p>
   * @public
   */
  tools?: Tool[];

  /**
   * <p>The previous step group.</p>
   * @public
   */
  previous?: string[];

  /**
   * <p>The next step group.</p>
   * @public
   */
  next?: string[];
}

/**
 * @public
 */
export interface ListTemplateStepGroupsRequest {
  /**
   * <p>The maximum number of results that can be returned.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>The pagination token.</p>
   * @public
   */
  nextToken?: string;

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
  id?: string;

  /**
   * <p>The name of the step group.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The previous step group.</p>
   * @public
   */
  previous?: string[];

  /**
   * <p>The next step group.</p>
   * @public
   */
  next?: string[];
}

/**
 * @public
 */
export interface ListTemplateStepGroupsResponse {
  /**
   * <p>The pagination token.</p>
   * @public
   */
  nextToken?: string;

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
 * @public
 */
export interface WorkflowStepOutput {
  /**
   * <p>The name of the step.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The data type of the output.</p>
   * @public
   */
  dataType?: DataType;

  /**
   * <p>Determine if an output is required from a step.</p>
   * @public
   */
  required?: boolean;

  /**
   * <p>The value of the output.</p>
   * @public
   */
  value?: WorkflowStepOutputUnion;
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
  scriptLocationS3Bucket?: string;

  /**
   * <p>The Amazon S3 key for the script location.</p>
   * @public
   */
  scriptLocationS3Key?: PlatformScriptKey;

  /**
   * <p>The command required to run the script.</p>
   * @public
   */
  command?: PlatformCommand;

  /**
   * <p>The source or target environment.</p>
   * @public
   */
  runEnvironment?: RunEnvironment;

  /**
   * <p>The servers on which to run the script.</p>
   * @public
   */
  targetType?: TargetType;
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
  description?: string;

  /**
   * <p>The custom script to run tests on source or target environments.</p>
   * @public
   */
  workflowStepAutomationConfiguration?: WorkflowStepAutomationConfiguration;

  /**
   * <p>The servers on which a step will be run.</p>
   * @public
   */
  stepTarget?: string[];

  /**
   * <p>The key value pairs added for the expected output.</p>
   * @public
   */
  outputs?: WorkflowStepOutput[];

  /**
   * <p>The previous step.</p>
   * @public
   */
  previous?: string[];

  /**
   * <p>The next step.</p>
   * @public
   */
  next?: string[];
}

/**
 * @public
 */
export interface CreateWorkflowStepResponse {
  /**
   * <p>The ID of the step.</p>
   * @public
   */
  id?: string;

  /**
   * <p>The ID of the step group.</p>
   * @public
   */
  stepGroupId?: string;

  /**
   * <p>The ID of the migration workflow.</p>
   * @public
   */
  workflowId?: string;

  /**
   * <p>The name of the step.</p>
   * @public
   */
  name?: string;
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
  name?: string;

  /**
   * <p>The ID of the step group.</p>
   * @public
   */
  stepGroupId?: string;

  /**
   * <p>The ID of the migration workflow.</p>
   * @public
   */
  workflowId?: string;

  /**
   * <p>The ID of the step.</p>
   * @public
   */
  stepId?: string;

  /**
   * <p>The description of the step.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The action type of the step. You must run and update the status of a manual step for
   *             the workflow to continue after the completion of the step.</p>
   * @public
   */
  stepActionType?: StepActionType;

  /**
   * <p>The owner of the step.</p>
   * @public
   */
  owner?: Owner;

  /**
   * <p>The custom script to run tests on source or target environments.</p>
   * @public
   */
  workflowStepAutomationConfiguration?: WorkflowStepAutomationConfiguration;

  /**
   * <p>The servers on which a step will be run.</p>
   * @public
   */
  stepTarget?: string[];

  /**
   * <p>The outputs of the step.</p>
   * @public
   */
  outputs?: WorkflowStepOutput[];

  /**
   * <p>The previous step.</p>
   * @public
   */
  previous?: string[];

  /**
   * <p>The next step.</p>
   * @public
   */
  next?: string[];

  /**
   * <p>The status of the step.</p>
   * @public
   */
  status?: StepStatus;

  /**
   * <p>The status message of the migration workflow.</p>
   * @public
   */
  statusMessage?: string;

  /**
   * <p>The output location of the script.</p>
   * @public
   */
  scriptOutputLocation?: string;

  /**
   * <p>The time at which the step was created.</p>
   * @public
   */
  creationTime?: Date;

  /**
   * <p>The time at which the workflow was last started.</p>
   * @public
   */
  lastStartTime?: Date;

  /**
   * <p>The time at which the step ended.</p>
   * @public
   */
  endTime?: Date;

  /**
   * <p>The number of servers that have been migrated.</p>
   * @public
   */
  noOfSrvCompleted?: number;

  /**
   * <p>The number of servers that have failed to migrate.</p>
   * @public
   */
  noOfSrvFailed?: number;

  /**
   * <p>The total number of servers that have been migrated.</p>
   * @public
   */
  totalNoOfSrv?: number;
}

/**
 * @public
 */
export interface ListWorkflowStepsRequest {
  /**
   * <p>The pagination token.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results that can be returned.</p>
   * @public
   */
  maxResults?: number;

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
  stepId?: string;

  /**
   * <p>The name of the step.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The action type of the step. You must run and update the status of a manual step for
   *             the workflow to continue after the completion of the step.</p>
   * @public
   */
  stepActionType?: StepActionType;

  /**
   * <p>The owner of the step.</p>
   * @public
   */
  owner?: Owner;

  /**
   * <p>The previous step.</p>
   * @public
   */
  previous?: string[];

  /**
   * <p>The next step.</p>
   * @public
   */
  next?: string[];

  /**
   * <p>The status of the step.</p>
   * @public
   */
  status?: StepStatus;

  /**
   * <p>The status message of the migration workflow.</p>
   * @public
   */
  statusMessage?: string;

  /**
   * <p>The number of servers that have been migrated.</p>
   * @public
   */
  noOfSrvCompleted?: number;

  /**
   * <p>The number of servers that have failed to migrate.</p>
   * @public
   */
  noOfSrvFailed?: number;

  /**
   * <p>The total number of servers that have been migrated.</p>
   * @public
   */
  totalNoOfSrv?: number;

  /**
   * <p>The description of the step.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The location of the script.</p>
   * @public
   */
  scriptLocation?: string;
}

/**
 * @public
 */
export interface ListWorkflowStepsResponse {
  /**
   * <p>The pagination token.</p>
   * @public
   */
  nextToken?: string;

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
  stepGroupId?: string;

  /**
   * <p>The ID of the migration workflow.</p>
   * @public
   */
  workflowId?: string;

  /**
   * <p>The ID of the step.</p>
   * @public
   */
  id?: string;

  /**
   * <p>The status of the step.</p>
   * @public
   */
  status?: StepStatus;
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
  name?: string;

  /**
   * <p>The description of the step.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The action type of the step. You must run and update the status of a manual step for
   *             the workflow to continue after the completion of the step.</p>
   * @public
   */
  stepActionType?: StepActionType;

  /**
   * <p>The custom script to run tests on the source and target environments.</p>
   * @public
   */
  workflowStepAutomationConfiguration?: WorkflowStepAutomationConfiguration;

  /**
   * <p>The servers on which a step will be run.</p>
   * @public
   */
  stepTarget?: string[];

  /**
   * <p>The outputs of a step.</p>
   * @public
   */
  outputs?: WorkflowStepOutput[];

  /**
   * <p>The previous step.</p>
   * @public
   */
  previous?: string[];

  /**
   * <p>The next step.</p>
   * @public
   */
  next?: string[];

  /**
   * <p>The status of the step.</p>
   * @public
   */
  status?: StepStatus;
}

/**
 * @public
 */
export interface UpdateWorkflowStepResponse {
  /**
   * <p>The ID of the step.</p>
   * @public
   */
  id?: string;

  /**
   * <p>The ID of the step group.</p>
   * @public
   */
  stepGroupId?: string;

  /**
   * <p>The ID of the migration workflow.</p>
   * @public
   */
  workflowId?: string;

  /**
   * <p>The name of the step.</p>
   * @public
   */
  name?: string;
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
  description?: string;

  /**
   * <p>The next step group.</p>
   * @public
   */
  next?: string[];

  /**
   * <p>The previous step group.</p>
   * @public
   */
  previous?: string[];
}

/**
 * @public
 */
export interface CreateWorkflowStepGroupResponse {
  /**
   * <p>The ID of the migration workflow that contains the step group.</p>
   * @public
   */
  workflowId?: string;

  /**
   * <p>The name of the step group.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The ID of the step group.</p>
   * @public
   */
  id?: string;

  /**
   * <p>The description of the step group.</p>
   * @public
   */
  description?: string;

  /**
   * <p>List of AWS services utilized in a migration workflow.</p>
   * @public
   */
  tools?: Tool[];

  /**
   * <p>The next step group.</p>
   * @public
   */
  next?: string[];

  /**
   * <p>The previous step group.</p>
   * @public
   */
  previous?: string[];

  /**
   * <p>The time at which the step group is created.</p>
   * @public
   */
  creationTime?: Date;
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
  id?: string;

  /**
   * <p>The ID of the migration workflow.</p>
   * @public
   */
  workflowId?: string;

  /**
   * <p>The name of the step group.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The description of the step group.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The status of the step group.</p>
   * @public
   */
  status?: StepGroupStatus;

  /**
   * <p>The owner of the step group.</p>
   * @public
   */
  owner?: Owner;

  /**
   * <p>The time at which the step group was created.</p>
   * @public
   */
  creationTime?: Date;

  /**
   * <p>The time at which the step group was last modified.</p>
   * @public
   */
  lastModifiedTime?: Date;

  /**
   * <p>The time at which the step group ended.</p>
   * @public
   */
  endTime?: Date;

  /**
   * <p>List of AWS services utilized in a migration workflow.</p>
   * @public
   */
  tools?: Tool[];

  /**
   * <p>The previous step group.</p>
   * @public
   */
  previous?: string[];

  /**
   * <p>The next step group.</p>
   * @public
   */
  next?: string[];
}

/**
 * @public
 */
export interface ListWorkflowStepGroupsRequest {
  /**
   * <p>The pagination token.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results that can be returned.</p>
   * @public
   */
  maxResults?: number;

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
  id?: string;

  /**
   * <p>The name of the step group.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The owner of the step group.</p>
   * @public
   */
  owner?: Owner;

  /**
   * <p>The status of the step group.</p>
   * @public
   */
  status?: StepGroupStatus;

  /**
   * <p>The previous step group.</p>
   * @public
   */
  previous?: string[];

  /**
   * <p>The next step group.</p>
   * @public
   */
  next?: string[];
}

/**
 * @public
 */
export interface ListWorkflowStepGroupsResponse {
  /**
   * <p>The pagination token.</p>
   * @public
   */
  nextToken?: string;

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
  name?: string;

  /**
   * <p>The description of the step group.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The next step group.</p>
   * @public
   */
  next?: string[];

  /**
   * <p>The previous step group.</p>
   * @public
   */
  previous?: string[];
}

/**
 * @public
 */
export interface UpdateWorkflowStepGroupResponse {
  /**
   * <p>The ID of the migration workflow.</p>
   * @public
   */
  workflowId?: string;

  /**
   * <p>The name of the step group.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The ID of the step group.</p>
   * @public
   */
  id?: string;

  /**
   * <p>The description of the step group.</p>
   * @public
   */
  description?: string;

  /**
   * <p>List of AWS services utilized in a migration workflow.</p>
   * @public
   */
  tools?: Tool[];

  /**
   * <p>The next step group.</p>
   * @public
   */
  next?: string[];

  /**
   * <p>The previous step group.</p>
   * @public
   */
  previous?: string[];

  /**
   * <p>The time at which the step group was last modified.</p>
   * @public
   */
  lastModifiedTime?: Date;
}

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
export const GetMigrationWorkflowResponseFilterSensitiveLog = (obj: GetMigrationWorkflowResponse): any => ({
  ...obj,
  ...(obj.workflowInputs && { workflowInputs: SENSITIVE_STRING }),
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
