// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { AppTestServiceException as __BaseException } from "./AppTestServiceException";

/**
 * <p>The account or role doesn't have the right permissions to make the request.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
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
 * <p>An unexpected error occurred during the processing of the request.</p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  $retryable = {};
  /**
   * <p>The number of seconds to retry the query.</p>
   * @public
   */
  retryAfterSeconds?: number | undefined;

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
    this.retryAfterSeconds = opts.retryAfterSeconds;
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
   * <p>The tags of the resource.</p>
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * <p>The specified resource was not found.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * <p>The resource ID of the resource not found.</p>
   * @public
   */
  resourceId?: string | undefined;

  /**
   * <p>The resource type of the resource not found.</p>
   * @public
   */
  resourceType?: string | undefined;

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
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
  }
}

/**
 * <p>The number of requests made exceeds the limit.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  $retryable = {
    throttling: true,
  };
  /**
   * <p>The service code of requests that exceed the limit.</p>
   * @public
   */
  serviceCode?: string | undefined;

  /**
   * <p>The quota code of requests that exceed the limit.</p>
   * @public
   */
  quotaCode?: string | undefined;

  /**
   * <p>The number of seconds to retry after for requests that exceed the limit.</p>
   * @public
   */
  retryAfterSeconds?: number | undefined;

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
    this.serviceCode = opts.serviceCode;
    this.quotaCode = opts.quotaCode;
    this.retryAfterSeconds = opts.retryAfterSeconds;
  }
}

/**
 * <p>Specifies a validation exception field.</p>
 * @public
 */
export interface ValidationExceptionField {
  /**
   * <p>The name of the validation exception field.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The message stating reason for why service validation failed.</p>
   * @public
   */
  message: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ValidationExceptionReason = {
  CANNOT_PARSE: "cannotParse",
  FIELD_VALIDATION_FAILED: "fieldValidationFailed",
  OTHER: "other",
  UNKNOWN_OPERATION: "unknownOperation",
} as const;

/**
 * @public
 */
export type ValidationExceptionReason = (typeof ValidationExceptionReason)[keyof typeof ValidationExceptionReason];

/**
 * <p>One or more parameter provided in the request is not valid.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * <p>The reason for the validation exception.</p>
   * @public
   */
  reason?: ValidationExceptionReason | undefined;

  /**
   * <p>The field list of the validation exception.</p>
   * @public
   */
  fieldList?: ValidationExceptionField[] | undefined;

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
    this.reason = opts.reason;
    this.fieldList = opts.fieldList;
  }
}

/**
 * <p>One or more quotas for AWS Application Testing exceeds the limit.</p>
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  /**
   * <p>The resource ID of AWS Application Testing that exceeded the limit.</p>
   * @public
   */
  resourceId?: string | undefined;

  /**
   * <p>The resource type of AWS Application Testing that exceeded the limit.</p>
   * @public
   */
  resourceType?: string | undefined;

  /**
   * <p>The service code of AWS Application Testing that exceeded the limit.</p>
   * @public
   */
  serviceCode?: string | undefined;

  /**
   * <p>The quote codes of AWS Application Testing that exceeded the limit.</p>
   * @public
   */
  quotaCode?: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceQuotaExceededException, __BaseException>) {
    super({
      name: "ServiceQuotaExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceQuotaExceededException.prototype);
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
    this.serviceCode = opts.serviceCode;
    this.quotaCode = opts.quotaCode;
  }
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the tag resource.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The tags of the resource.</p>
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * <p>The parameters provided in the request conflict with existing resources.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * <p>The resource ID of the conflicts with existing resources.</p>
   * @public
   */
  resourceId?: string | undefined;

  /**
   * <p>The resource type of the conflicts with existing resources.</p>
   * @public
   */
  resourceType?: string | undefined;

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
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
  }
}

/**
 * @public
 * @enum
 */
export const CaptureTool = {
  AWS_DMS: "AWS DMS",
  PRECISELY: "Precisely",
} as const;

/**
 * @public
 */
export type CaptureTool = (typeof CaptureTool)[keyof typeof CaptureTool];

/**
 * @public
 * @enum
 */
export const SourceDatabase = {
  Z_OS_DB2: "z/OS-DB2",
} as const;

/**
 * @public
 */
export type SourceDatabase = (typeof SourceDatabase)[keyof typeof SourceDatabase];

/**
 * <p>Specifies the source database metadata.</p>
 * @public
 */
export interface SourceDatabaseMetadata {
  /**
   * <p>The type of the source database metadata.</p>
   * @public
   */
  type: SourceDatabase | undefined;

  /**
   * <p>The capture tool of the source database metadata.</p>
   * @public
   */
  captureTool: CaptureTool | undefined;
}

/**
 * @public
 * @enum
 */
export const TargetDatabase = {
  POSTGRESQL: "PostgreSQL",
} as const;

/**
 * @public
 */
export type TargetDatabase = (typeof TargetDatabase)[keyof typeof TargetDatabase];

/**
 * <p>Specifies a target database metadata.</p>
 * @public
 */
export interface TargetDatabaseMetadata {
  /**
   * <p>The type of the target database metadata.</p>
   * @public
   */
  type: TargetDatabase | undefined;

  /**
   * <p>The capture tool of the target database metadata.</p>
   * @public
   */
  captureTool: CaptureTool | undefined;
}

/**
 * <p>Defines the Change Data Capture (CDC) of the database.</p>
 * @public
 */
export interface DatabaseCDC {
  /**
   * <p>The source metadata of the database CDC.</p>
   * @public
   */
  sourceMetadata: SourceDatabaseMetadata | undefined;

  /**
   * <p>The target metadata of the database CDC.</p>
   * @public
   */
  targetMetadata: TargetDatabaseMetadata | undefined;
}

/**
 * @public
 * @enum
 */
export const Format = {
  FIXED: "FIXED",
  LINE_SEQUENTIAL: "LINE_SEQUENTIAL",
  VARIABLE: "VARIABLE",
} as const;

/**
 * @public
 */
export type Format = (typeof Format)[keyof typeof Format];

/**
 * @public
 * @enum
 */
export const DataSetType = {
  PS: "PS",
} as const;

/**
 * @public
 */
export type DataSetType = (typeof DataSetType)[keyof typeof DataSetType];

/**
 * <p>Defines a data set.</p>
 * @public
 */
export interface DataSet {
  /**
   * <p>The type of the data set.</p>
   * @public
   */
  type: DataSetType | undefined;

  /**
   * <p>The name of the data set.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The CCSID of the data set.</p>
   * @public
   */
  ccsid: string | undefined;

  /**
   * <p>The format of the data set.</p>
   * @public
   */
  format: Format | undefined;

  /**
   * <p>The length of the data set.</p>
   * @public
   */
  length: number | undefined;
}

/**
 * <p>Specifies a file metadata.</p>
 * @public
 */
export type FileMetadata = FileMetadata.DataSetsMember | FileMetadata.DatabaseCDCMember | FileMetadata.$UnknownMember;

/**
 * @public
 */
export namespace FileMetadata {
  /**
   * <p>The data sets of the file metadata.</p>
   * @public
   */
  export interface DataSetsMember {
    dataSets: DataSet[];
    databaseCDC?: never;
    $unknown?: never;
  }

  /**
   * <p>The database CDC of the file metadata.</p>
   * @public
   */
  export interface DatabaseCDCMember {
    dataSets?: never;
    databaseCDC: DatabaseCDC;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    dataSets?: never;
    databaseCDC?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    dataSets: (value: DataSet[]) => T;
    databaseCDC: (value: DatabaseCDC) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: FileMetadata, visitor: Visitor<T>): T => {
    if (value.dataSets !== undefined) return visitor.dataSets(value.dataSets);
    if (value.databaseCDC !== undefined) return visitor.databaseCDC(value.databaseCDC);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Specifies the input file.</p>
 * @public
 */
export interface InputFile {
  /**
   * <p>The source location of the input file.</p>
   * @public
   */
  sourceLocation: string | undefined;

  /**
   * <p>The target location of the input file.</p>
   * @public
   */
  targetLocation: string | undefined;

  /**
   * <p>The file metadata of the input file.</p>
   * @public
   */
  fileMetadata: FileMetadata | undefined;
}

/**
 * <p>Specifies the input.</p>
 * @public
 */
export type Input = Input.FileMember | Input.$UnknownMember;

/**
 * @public
 */
export namespace Input {
  /**
   * <p>The file in the input.</p>
   * @public
   */
  export interface FileMember {
    file: InputFile;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    file?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    file: (value: InputFile) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: Input, visitor: Visitor<T>): T => {
    if (value.file !== undefined) return visitor.file(value.file);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Specifies an output file.</p>
 * @public
 */
export interface OutputFile {
  /**
   * <p>The file location of the output file.</p>
   * @public
   */
  fileLocation?: string | undefined;
}

/**
 * <p>Specifies an output.</p>
 * @public
 */
export type Output = Output.FileMember | Output.$UnknownMember;

/**
 * @public
 */
export namespace Output {
  /**
   * <p>The file of the output.</p>
   * @public
   */
  export interface FileMember {
    file: OutputFile;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    file?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    file: (value: OutputFile) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: Output, visitor: Visitor<T>): T => {
    if (value.file !== undefined) return visitor.file(value.file);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Compares the action.</p>
 * @public
 */
export interface CompareAction {
  /**
   * <p>The input of the compare action.</p>
   * @public
   */
  input: Input | undefined;

  /**
   * <p>The output of the compare action.</p>
   * @public
   */
  output?: Output | undefined;
}

/**
 * <p>Defines a batch.</p>
 * @public
 */
export interface Batch {
  /**
   * <p>The job name of the batch.</p>
   * @public
   */
  batchJobName: string | undefined;

  /**
   * <p>The batch job parameters of the batch.</p>
   * @public
   */
  batchJobParameters?: Record<string, string> | undefined;

  /**
   * <p>The export data set names of the batch.</p>
   * @public
   */
  exportDataSetNames?: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const ScriptType = {
  SELENIUM: "Selenium",
} as const;

/**
 * @public
 */
export type ScriptType = (typeof ScriptType)[keyof typeof ScriptType];

/**
 * <p>Specifies the script.</p>
 * @public
 */
export interface Script {
  /**
   * <p>The script location of the scripts.</p>
   * @public
   */
  scriptLocation: string | undefined;

  /**
   * <p>The type of the scripts.</p>
   * @public
   */
  type: ScriptType | undefined;
}

/**
 * <p>Specifies the TN3270 protocol.</p>
 * @public
 */
export interface TN3270 {
  /**
   * <p>The script of the TN3270 protocol.</p>
   * @public
   */
  script: Script | undefined;

  /**
   * <p>The data set names of the TN3270 protocol.</p>
   * @public
   */
  exportDataSetNames?: string[] | undefined;
}

/**
 * <p>Specifies the mainframe action type.</p>
 * @public
 */
export type MainframeActionType =
  | MainframeActionType.BatchMember
  | MainframeActionType.Tn3270Member
  | MainframeActionType.$UnknownMember;

/**
 * @public
 */
export namespace MainframeActionType {
  /**
   * <p>The batch of the mainframe action type.</p>
   * @public
   */
  export interface BatchMember {
    batch: Batch;
    tn3270?: never;
    $unknown?: never;
  }

  /**
   * <p>The tn3270 port of the mainframe action type.</p>
   * @public
   */
  export interface Tn3270Member {
    batch?: never;
    tn3270: TN3270;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    batch?: never;
    tn3270?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    batch: (value: Batch) => T;
    tn3270: (value: TN3270) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: MainframeActionType, visitor: Visitor<T>): T => {
    if (value.batch !== undefined) return visitor.batch(value.batch);
    if (value.tn3270 !== undefined) return visitor.tn3270(value.tn3270);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Specifies the mainframe action properties.</p>
 * @public
 */
export interface MainframeActionProperties {
  /**
   * <p>The DMS task ARN of the mainframe action properties.</p>
   * @public
   */
  dmsTaskArn?: string | undefined;
}

/**
 * <p>Specifies the mainframe action.</p>
 * @public
 */
export interface MainframeAction {
  /**
   * <p>The resource of the mainframe action.</p>
   * @public
   */
  resource: string | undefined;

  /**
   * <p>The action type of the mainframe action.</p>
   * @public
   */
  actionType: MainframeActionType | undefined;

  /**
   * <p>The properties of the mainframe action.</p>
   * @public
   */
  properties?: MainframeActionProperties | undefined;
}

/**
 * @public
 * @enum
 */
export const CloudFormationActionType = {
  CREATE: "Create",
  DELETE: "Delete",
} as const;

/**
 * @public
 */
export type CloudFormationActionType = (typeof CloudFormationActionType)[keyof typeof CloudFormationActionType];

/**
 * <p>Specifies the CloudFormation action.</p>
 * @public
 */
export interface CloudFormationAction {
  /**
   * <p>The resource of the CloudFormation action.</p>
   * @public
   */
  resource: string | undefined;

  /**
   * <p>The action type of the CloudFormation action.</p>
   * @public
   */
  actionType?: CloudFormationActionType | undefined;
}

/**
 * @public
 * @enum
 */
export const M2ManagedActionType = {
  CONFIGURE: "Configure",
  DECONFIGURE: "Deconfigure",
} as const;

/**
 * @public
 */
export type M2ManagedActionType = (typeof M2ManagedActionType)[keyof typeof M2ManagedActionType];

/**
 * <p>Specifies the AWS Mainframe Modernization managed action properties.</p>
 * @public
 */
export interface M2ManagedActionProperties {
  /**
   * <p>Force stops the AWS Mainframe Modernization managed action properties.</p>
   * @public
   */
  forceStop?: boolean | undefined;

  /**
   * <p>The import data set location of the AWS Mainframe Modernization managed action properties.</p>
   * @public
   */
  importDataSetLocation?: string | undefined;
}

/**
 * <p>Specifies the AWS Mainframe Modernization managed application action.</p>
 * @public
 */
export interface M2ManagedApplicationAction {
  /**
   * <p>The resource of the AWS Mainframe Modernization managed application action.</p>
   * @public
   */
  resource: string | undefined;

  /**
   * <p>The action type of the AWS Mainframe Modernization managed application action.</p>
   * @public
   */
  actionType: M2ManagedActionType | undefined;

  /**
   * <p>The properties of the AWS Mainframe Modernization managed application action.</p>
   * @public
   */
  properties?: M2ManagedActionProperties | undefined;
}

/**
 * @public
 * @enum
 */
export const M2NonManagedActionType = {
  CONFIGURE: "Configure",
  DECONFIGURE: "Deconfigure",
} as const;

/**
 * @public
 */
export type M2NonManagedActionType = (typeof M2NonManagedActionType)[keyof typeof M2NonManagedActionType];

/**
 * <p>Specifies the AWS Mainframe Modernization non-managed application action.</p>
 * @public
 */
export interface M2NonManagedApplicationAction {
  /**
   * <p>The resource of the AWS Mainframe Modernization non-managed application action.</p>
   * @public
   */
  resource: string | undefined;

  /**
   * <p>The action type of the AWS Mainframe Modernization non-managed application action.</p>
   * @public
   */
  actionType: M2NonManagedActionType | undefined;
}

/**
 * <p>Specifies a resource action.</p>
 * @public
 */
export type ResourceAction =
  | ResourceAction.CloudFormationActionMember
  | ResourceAction.M2ManagedApplicationActionMember
  | ResourceAction.M2NonManagedApplicationActionMember
  | ResourceAction.$UnknownMember;

/**
 * @public
 */
export namespace ResourceAction {
  /**
   * <p>The AWS Mainframe Modernization managed application action of the resource action.</p>
   * @public
   */
  export interface M2ManagedApplicationActionMember {
    m2ManagedApplicationAction: M2ManagedApplicationAction;
    m2NonManagedApplicationAction?: never;
    cloudFormationAction?: never;
    $unknown?: never;
  }

  /**
   * <p>The AWS Mainframe Modernization non-managed application action of the resource action.</p>
   * @public
   */
  export interface M2NonManagedApplicationActionMember {
    m2ManagedApplicationAction?: never;
    m2NonManagedApplicationAction: M2NonManagedApplicationAction;
    cloudFormationAction?: never;
    $unknown?: never;
  }

  /**
   * <p>The CloudFormation action of the resource action.</p>
   * @public
   */
  export interface CloudFormationActionMember {
    m2ManagedApplicationAction?: never;
    m2NonManagedApplicationAction?: never;
    cloudFormationAction: CloudFormationAction;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    m2ManagedApplicationAction?: never;
    m2NonManagedApplicationAction?: never;
    cloudFormationAction?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    m2ManagedApplicationAction: (value: M2ManagedApplicationAction) => T;
    m2NonManagedApplicationAction: (value: M2NonManagedApplicationAction) => T;
    cloudFormationAction: (value: CloudFormationAction) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ResourceAction, visitor: Visitor<T>): T => {
    if (value.m2ManagedApplicationAction !== undefined)
      return visitor.m2ManagedApplicationAction(value.m2ManagedApplicationAction);
    if (value.m2NonManagedApplicationAction !== undefined)
      return visitor.m2NonManagedApplicationAction(value.m2NonManagedApplicationAction);
    if (value.cloudFormationAction !== undefined) return visitor.cloudFormationAction(value.cloudFormationAction);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Specifies a step action.</p>
 * @public
 */
export type StepAction =
  | StepAction.CompareActionMember
  | StepAction.MainframeActionMember
  | StepAction.ResourceActionMember
  | StepAction.$UnknownMember;

/**
 * @public
 */
export namespace StepAction {
  /**
   * <p>The resource action of the step action.</p>
   * @public
   */
  export interface ResourceActionMember {
    resourceAction: ResourceAction;
    mainframeAction?: never;
    compareAction?: never;
    $unknown?: never;
  }

  /**
   * <p>The mainframe action of the step action.</p>
   * @public
   */
  export interface MainframeActionMember {
    resourceAction?: never;
    mainframeAction: MainframeAction;
    compareAction?: never;
    $unknown?: never;
  }

  /**
   * <p>The compare action of the step action.</p>
   * @public
   */
  export interface CompareActionMember {
    resourceAction?: never;
    mainframeAction?: never;
    compareAction: CompareAction;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    resourceAction?: never;
    mainframeAction?: never;
    compareAction?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    resourceAction: (value: ResourceAction) => T;
    mainframeAction: (value: MainframeAction) => T;
    compareAction: (value: CompareAction) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: StepAction, visitor: Visitor<T>): T => {
    if (value.resourceAction !== undefined) return visitor.resourceAction(value.resourceAction);
    if (value.mainframeAction !== undefined) return visitor.mainframeAction(value.mainframeAction);
    if (value.compareAction !== undefined) return visitor.compareAction(value.compareAction);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Defines a step.</p>
 * @public
 */
export interface Step {
  /**
   * <p>The name of the step.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the step.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The action of the step.</p>
   * @public
   */
  action: StepAction | undefined;
}

/**
 * @public
 */
export interface CreateTestCaseRequest {
  /**
   * <p>The name of the test case.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the test case.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The steps in the test case.</p>
   * @public
   */
  steps: Step[] | undefined;

  /**
   * <p>The client token of the test case.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The specified tags of the test case.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateTestCaseResponse {
  /**
   * <p>The test case ID of the test case.</p>
   * @public
   */
  testCaseId: string | undefined;

  /**
   * <p>The test case version of the test case.</p>
   * @public
   */
  testCaseVersion: number | undefined;
}

/**
 * @public
 */
export interface DeleteTestCaseRequest {
  /**
   * <p>The test case ID of the test case.</p>
   * @public
   */
  testCaseId: string | undefined;
}

/**
 * @public
 */
export interface DeleteTestCaseResponse {}

/**
 * @public
 */
export interface GetTestCaseRequest {
  /**
   * <p>The request test ID of the test case.</p>
   * @public
   */
  testCaseId: string | undefined;

  /**
   * <p>The test case version of the test case.</p>
   * @public
   */
  testCaseVersion?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const TestCaseLifecycle = {
  ACTIVE: "Active",
  DELETING: "Deleting",
} as const;

/**
 * @public
 */
export type TestCaseLifecycle = (typeof TestCaseLifecycle)[keyof typeof TestCaseLifecycle];

/**
 * <p>Specifies the latest version of a test case.</p>
 * @public
 */
export interface TestCaseLatestVersion {
  /**
   * <p>The version of the test case latest version.</p>
   * @public
   */
  version: number | undefined;

  /**
   * <p>The status of the test case latest version.</p>
   * @public
   */
  status: TestCaseLifecycle | undefined;

  /**
   * <p>The status reason of the test case latest version.</p>
   * @public
   */
  statusReason?: string | undefined;
}

/**
 * @public
 */
export interface GetTestCaseResponse {
  /**
   * <p>The response test ID of the test case.</p>
   * @public
   */
  testCaseId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the test case.</p>
   * @public
   */
  testCaseArn: string | undefined;

  /**
   * <p>The name of the test case.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the test case.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The latest version of the test case.</p>
   * @public
   */
  latestVersion: TestCaseLatestVersion | undefined;

  /**
   * <p>The case version of the test case.</p>
   * @public
   */
  testCaseVersion: number | undefined;

  /**
   * <p>The status of the test case.</p>
   * @public
   */
  status: TestCaseLifecycle | undefined;

  /**
   * <p>The status reason of the test case.</p>
   * @public
   */
  statusReason?: string | undefined;

  /**
   * <p>The creation time of the test case.</p>
   * @public
   */
  creationTime: Date | undefined;

  /**
   * <p>The last update time of the test case.</p>
   * @public
   */
  lastUpdateTime: Date | undefined;

  /**
   * <p>The steps of the test case.</p>
   * @public
   */
  steps: Step[] | undefined;

  /**
   * <p>The tags of the test case.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListTestCasesRequest {
  /**
   * <p>The IDs of the test cases.</p>
   * @public
   */
  testCaseIds?: string[] | undefined;

  /**
   * <p>The next token of the test cases.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum results of the test case.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Specifies a test case summary.</p>
 * @public
 */
export interface TestCaseSummary {
  /**
   * <p>The test case ID of the test case summary.</p>
   * @public
   */
  testCaseId: string | undefined;

  /**
   * <p>The test case Amazon Resource Name (ARN) of the test case summary.</p>
   * @public
   */
  testCaseArn: string | undefined;

  /**
   * <p>The name of the test case summary.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The status reason of the test case summary.</p>
   * @public
   */
  statusReason?: string | undefined;

  /**
   * <p>The latest version of the test case summary.</p>
   * @public
   */
  latestVersion: number | undefined;

  /**
   * <p>The status of the test case summary.</p>
   * @public
   */
  status: TestCaseLifecycle | undefined;

  /**
   * <p>The creation time of the test case summary.</p>
   * @public
   */
  creationTime: Date | undefined;

  /**
   * <p>The last update time of the test case summary.</p>
   * @public
   */
  lastUpdateTime: Date | undefined;
}

/**
 * @public
 */
export interface ListTestCasesResponse {
  /**
   * <p>The test cases in an application.</p>
   * @public
   */
  testCases: TestCaseSummary[] | undefined;

  /**
   * <p>The next token in test cases.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateTestCaseRequest {
  /**
   * <p>The test case ID of the test case.</p>
   * @public
   */
  testCaseId: string | undefined;

  /**
   * <p>The description of the test case.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The steps of the test case.</p>
   * @public
   */
  steps?: Step[] | undefined;
}

/**
 * @public
 */
export interface UpdateTestCaseResponse {
  /**
   * <p>The test case ID of the test case.</p>
   * @public
   */
  testCaseId: string | undefined;

  /**
   * <p>The test case version of the test case.</p>
   * @public
   */
  testCaseVersion: number | undefined;
}

/**
 * <p>Specifies the CloudFormation template and its parameters.</p>
 * @public
 */
export interface CloudFormation {
  /**
   * <p>The template location of the CloudFormation template.</p>
   * @public
   */
  templateLocation: string | undefined;

  /**
   * <p>The CloudFormation properties in the CloudFormation template.</p>
   * @public
   */
  parameters?: Record<string, string> | undefined;
}

/**
 * @public
 * @enum
 */
export const M2ManagedRuntime = {
  MICROFOCUS: "MicroFocus",
} as const;

/**
 * @public
 */
export type M2ManagedRuntime = (typeof M2ManagedRuntime)[keyof typeof M2ManagedRuntime];

/**
 * <p>Specifies the AWS Mainframe Modernization managed application.</p>
 * @public
 */
export interface M2ManagedApplication {
  /**
   * <p>The application ID of the AWS Mainframe Modernization managed application.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>The runtime of the AWS Mainframe Modernization managed application.</p>
   * @public
   */
  runtime: M2ManagedRuntime | undefined;

  /**
   * <p>The VPC endpoint service name of the AWS Mainframe Modernization managed application.</p>
   * @public
   */
  vpcEndpointServiceName?: string | undefined;

  /**
   * <p>The listener port of the AWS Mainframe Modernization managed application.</p>
   * @public
   */
  listenerPort?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const M2NonManagedRuntime = {
  BLUAGE: "BluAge",
} as const;

/**
 * @public
 */
export type M2NonManagedRuntime = (typeof M2NonManagedRuntime)[keyof typeof M2NonManagedRuntime];

/**
 * <p>Specifies the AWS Mainframe Modernization non-managed application.</p>
 * @public
 */
export interface M2NonManagedApplication {
  /**
   * <p>The VPC endpoint service name of the AWS Mainframe Modernization non-managed application.</p>
   * @public
   */
  vpcEndpointServiceName: string | undefined;

  /**
   * <p>The listener port of the AWS Mainframe Modernization non-managed application.</p>
   * @public
   */
  listenerPort: string | undefined;

  /**
   * <p>The runtime of the AWS Mainframe Modernization non-managed application.</p>
   * @public
   */
  runtime: M2NonManagedRuntime | undefined;

  /**
   * <p>The web application name of the AWS Mainframe Modernization non-managed application.</p>
   * @public
   */
  webAppName?: string | undefined;
}

/**
 * <p>Specifies the resource type.</p>
 * @public
 */
export type ResourceType =
  | ResourceType.CloudFormationMember
  | ResourceType.M2ManagedApplicationMember
  | ResourceType.M2NonManagedApplicationMember
  | ResourceType.$UnknownMember;

/**
 * @public
 */
export namespace ResourceType {
  /**
   * <p>The CloudFormation template of the resource type.</p>
   * @public
   */
  export interface CloudFormationMember {
    cloudFormation: CloudFormation;
    m2ManagedApplication?: never;
    m2NonManagedApplication?: never;
    $unknown?: never;
  }

  /**
   * <p>The AWS Mainframe Modernization managed application of the resource type.</p>
   * @public
   */
  export interface M2ManagedApplicationMember {
    cloudFormation?: never;
    m2ManagedApplication: M2ManagedApplication;
    m2NonManagedApplication?: never;
    $unknown?: never;
  }

  /**
   * <p>The AWS Mainframe Modernization non-managed application of the resource type.</p>
   * @public
   */
  export interface M2NonManagedApplicationMember {
    cloudFormation?: never;
    m2ManagedApplication?: never;
    m2NonManagedApplication: M2NonManagedApplication;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    cloudFormation?: never;
    m2ManagedApplication?: never;
    m2NonManagedApplication?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    cloudFormation: (value: CloudFormation) => T;
    m2ManagedApplication: (value: M2ManagedApplication) => T;
    m2NonManagedApplication: (value: M2NonManagedApplication) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ResourceType, visitor: Visitor<T>): T => {
    if (value.cloudFormation !== undefined) return visitor.cloudFormation(value.cloudFormation);
    if (value.m2ManagedApplication !== undefined) return visitor.m2ManagedApplication(value.m2ManagedApplication);
    if (value.m2NonManagedApplication !== undefined)
      return visitor.m2NonManagedApplication(value.m2NonManagedApplication);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Specifies a resource.</p>
 * @public
 */
export interface Resource {
  /**
   * <p>The name of the resource.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The type of the resource.</p>
   * @public
   */
  type: ResourceType | undefined;
}

/**
 * <p>Specifies the service settings.</p>
 * @public
 */
export interface ServiceSettings {
  /**
   * <p>The KMS key ID of the service settings.</p>
   * @public
   */
  kmsKeyId?: string | undefined;
}

/**
 * @public
 */
export interface CreateTestConfigurationRequest {
  /**
   * <p>The name of the test configuration.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the test configuration.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The defined resources of the test configuration.</p>
   * @public
   */
  resources: Resource[] | undefined;

  /**
   * <p>The properties of the test configuration.</p>
   * @public
   */
  properties?: Record<string, string> | undefined;

  /**
   * <p>The client token of the test configuration.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The tags of the test configuration.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The service settings of the test configuration.</p>
   * @public
   */
  serviceSettings?: ServiceSettings | undefined;
}

/**
 * @public
 */
export interface CreateTestConfigurationResponse {
  /**
   * <p>The test configuration ID.</p>
   * @public
   */
  testConfigurationId: string | undefined;

  /**
   * <p>The test configuration version.</p>
   * @public
   */
  testConfigurationVersion: number | undefined;
}

/**
 * @public
 */
export interface DeleteTestConfigurationRequest {
  /**
   * <p>The test ID of the test configuration.</p>
   * @public
   */
  testConfigurationId: string | undefined;
}

/**
 * @public
 */
export interface DeleteTestConfigurationResponse {}

/**
 * @public
 */
export interface GetTestConfigurationRequest {
  /**
   * <p>The request test configuration ID.</p>
   * @public
   */
  testConfigurationId: string | undefined;

  /**
   * <p>The test configuration version.</p>
   * @public
   */
  testConfigurationVersion?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const TestConfigurationLifecycle = {
  ACTIVE: "Active",
  DELETING: "Deleting",
} as const;

/**
 * @public
 */
export type TestConfigurationLifecycle = (typeof TestConfigurationLifecycle)[keyof typeof TestConfigurationLifecycle];

/**
 * <p>Specifies the latest version of the test configuration.</p>
 * @public
 */
export interface TestConfigurationLatestVersion {
  /**
   * <p>The version of the test configuration latest version.</p>
   * @public
   */
  version: number | undefined;

  /**
   * <p>The status of the test configuration latest version.</p>
   * @public
   */
  status: TestConfigurationLifecycle | undefined;

  /**
   * <p>The status reason of the test configuration latest version.</p>
   * @public
   */
  statusReason?: string | undefined;
}

/**
 * @public
 */
export interface GetTestConfigurationResponse {
  /**
   * <p>The response test configuration ID.</p>
   * @public
   */
  testConfigurationId: string | undefined;

  /**
   * <p>The test configuration name</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The test configuration Amazon Resource Name (ARN).</p>
   * @public
   */
  testConfigurationArn: string | undefined;

  /**
   * <p>The latest version of the test configuration.</p>
   * @public
   */
  latestVersion: TestConfigurationLatestVersion | undefined;

  /**
   * <p>The test configuration version.</p>
   * @public
   */
  testConfigurationVersion: number | undefined;

  /**
   * <p>The status of the test configuration.</p>
   * @public
   */
  status: TestConfigurationLifecycle | undefined;

  /**
   * <p>The status reason of the test configuration.</p>
   * @public
   */
  statusReason?: string | undefined;

  /**
   * <p>The creation time of the test configuration.</p>
   * @public
   */
  creationTime: Date | undefined;

  /**
   * <p>The last update time of the test configuration.</p>
   * @public
   */
  lastUpdateTime: Date | undefined;

  /**
   * <p>The description of the test configuration.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The resources of the test configuration.</p>
   * @public
   */
  resources: Resource[] | undefined;

  /**
   * <p>The properties of the test configuration.</p>
   * @public
   */
  properties: Record<string, string> | undefined;

  /**
   * <p>The tags of the test configuration.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The service settings of the test configuration.</p>
   * @public
   */
  serviceSettings?: ServiceSettings | undefined;
}

/**
 * @public
 */
export interface ListTestConfigurationsRequest {
  /**
   * <p>The configuration IDs of the test configurations.</p>
   * @public
   */
  testConfigurationIds?: string[] | undefined;

  /**
   * <p>The next token for the test configurations.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum results of the test configuration.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Specifies a test configuration summary.</p>
 * @public
 */
export interface TestConfigurationSummary {
  /**
   * <p>The test configuration ID of the test configuration summary.</p>
   * @public
   */
  testConfigurationId: string | undefined;

  /**
   * <p>The name of the test configuration summary.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The status reason of the test configuration summary.</p>
   * @public
   */
  statusReason?: string | undefined;

  /**
   * <p>The latest version of the test configuration summary.</p>
   * @public
   */
  latestVersion: number | undefined;

  /**
   * <p>The test configuration ARN of the test configuration summary.</p>
   * @public
   */
  testConfigurationArn: string | undefined;

  /**
   * <p>The status of the test configuration summary.</p>
   * @public
   */
  status: TestConfigurationLifecycle | undefined;

  /**
   * <p>The creation time of the test configuration summary.</p>
   * @public
   */
  creationTime: Date | undefined;

  /**
   * <p>The last update time of the test configuration summary.</p>
   * @public
   */
  lastUpdateTime: Date | undefined;
}

/**
 * @public
 */
export interface ListTestConfigurationsResponse {
  /**
   * <p>The test configurations.</p>
   * @public
   */
  testConfigurations: TestConfigurationSummary[] | undefined;

  /**
   * <p>The next token in the test configurations.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateTestConfigurationRequest {
  /**
   * <p>The test configuration ID of the test configuration.</p>
   * @public
   */
  testConfigurationId: string | undefined;

  /**
   * <p>The description of the test configuration.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The resources of the test configuration.</p>
   * @public
   */
  resources?: Resource[] | undefined;

  /**
   * <p>The properties of the test configuration.</p>
   * @public
   */
  properties?: Record<string, string> | undefined;

  /**
   * <p>The service settings of the test configuration.</p>
   * @public
   */
  serviceSettings?: ServiceSettings | undefined;
}

/**
 * @public
 */
export interface UpdateTestConfigurationResponse {
  /**
   * <p>The configuration ID of the test configuration.</p>
   * @public
   */
  testConfigurationId: string | undefined;

  /**
   * <p>The configuration version of the test configuration.</p>
   * @public
   */
  testConfigurationVersion: number | undefined;
}

/**
 * @public
 */
export interface DeleteTestRunRequest {
  /**
   * <p>The run ID of the test run.</p>
   * @public
   */
  testRunId: string | undefined;
}

/**
 * @public
 */
export interface DeleteTestRunResponse {}

/**
 * @public
 */
export interface GetTestRunStepRequest {
  /**
   * <p>The test run ID of the test run step.</p>
   * @public
   */
  testRunId: string | undefined;

  /**
   * <p>The step name of the test run step.</p>
   * @public
   */
  stepName: string | undefined;

  /**
   * <p>The test case ID of a test run step.</p>
   * @public
   */
  testCaseId?: string | undefined;

  /**
   * <p>The test suite ID of a test run step.</p>
   * @public
   */
  testSuiteId?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const StepRunStatus = {
  FAILED: "Failed",
  RUNNING: "Running",
  SUCCESS: "Success",
} as const;

/**
 * @public
 */
export type StepRunStatus = (typeof StepRunStatus)[keyof typeof StepRunStatus];

/**
 * <p>Compares the database Change Data Capture (CDC) step input.</p>
 * @public
 */
export interface CompareDatabaseCDCStepInput {
  /**
   * <p>The source location of the compare database CDC step input.</p>
   * @public
   */
  sourceLocation: string | undefined;

  /**
   * <p>The target location of the compare database CDC step input.</p>
   * @public
   */
  targetLocation: string | undefined;

  /**
   * <p>The output location of the compare database CDC step input.</p>
   * @public
   */
  outputLocation?: string | undefined;

  /**
   * <p>The source metadata of the compare database CDC step input.</p>
   * @public
   */
  sourceMetadata: SourceDatabaseMetadata | undefined;

  /**
   * <p>The target metadata location of the compare database CDC step input.</p>
   * @public
   */
  targetMetadata: TargetDatabaseMetadata | undefined;
}

/**
 * @public
 * @enum
 */
export const ComparisonStatusEnum = {
  DIFFERENT: "Different",
  EQUAL: "Equal",
  EQUIVALENT: "Equivalent",
} as const;

/**
 * @public
 */
export type ComparisonStatusEnum = (typeof ComparisonStatusEnum)[keyof typeof ComparisonStatusEnum];

/**
 * <p>Compares the database CDC step output.</p>
 * @public
 */
export interface CompareDatabaseCDCStepOutput {
  /**
   * <p>The comparison output of the compare database CDC step output.</p>
   * @public
   */
  comparisonOutputLocation: string | undefined;

  /**
   * <p>The comparison status of the compare database CDC step output.</p>
   * @public
   */
  comparisonStatus: ComparisonStatusEnum | undefined;
}

/**
 * <p>Compares the database CDC summary.</p>
 * @public
 */
export interface CompareDatabaseCDCSummary {
  /**
   * <p>The step input of the compare database CDC summary.</p>
   * @public
   */
  stepInput: CompareDatabaseCDCStepInput | undefined;

  /**
   * <p>The step output of the compare database CDC summary.</p>
   * @public
   */
  stepOutput?: CompareDatabaseCDCStepOutput | undefined;
}

/**
 * <p>Specifies the compare data sets step input.</p>
 * @public
 */
export interface CompareDataSetsStepInput {
  /**
   * <p>The source location of the compare data sets step input location.</p>
   * @public
   */
  sourceLocation: string | undefined;

  /**
   * <p>The target location of the compare data sets step input location.</p>
   * @public
   */
  targetLocation: string | undefined;

  /**
   * <p>The source data sets of the compare data sets step input location.</p>
   * @public
   */
  sourceDataSets: DataSet[] | undefined;

  /**
   * <p>The target data sets of the compare data sets step input location.</p>
   * @public
   */
  targetDataSets: DataSet[] | undefined;
}

/**
 * <p>Specifies the compare data sets step output.</p>
 * @public
 */
export interface CompareDataSetsStepOutput {
  /**
   * <p>The comparison output location of the compare data sets step output.</p>
   * @public
   */
  comparisonOutputLocation: string | undefined;

  /**
   * <p>The comparison status of the compare data sets step output.</p>
   * @public
   */
  comparisonStatus: ComparisonStatusEnum | undefined;
}

/**
 * <p>Compares data sets summary.</p>
 * @public
 */
export interface CompareDataSetsSummary {
  /**
   * <p>The step input of the compare data sets summary.</p>
   * @public
   */
  stepInput: CompareDataSetsStepInput | undefined;

  /**
   * <p>The step output of the compare data sets summary.</p>
   * @public
   */
  stepOutput?: CompareDataSetsStepOutput | undefined;
}

/**
 * <p>Compares the file type.</p>
 * @public
 */
export type CompareFileType =
  | CompareFileType.DatabaseCDCMember
  | CompareFileType.DatasetsMember
  | CompareFileType.$UnknownMember;

/**
 * @public
 */
export namespace CompareFileType {
  /**
   * <p>The data sets in the compare file type.</p>
   * @public
   */
  export interface DatasetsMember {
    datasets: CompareDataSetsSummary;
    databaseCDC?: never;
    $unknown?: never;
  }

  /**
   * <p>The database CDC of the compare file type.</p>
   * @public
   */
  export interface DatabaseCDCMember {
    datasets?: never;
    databaseCDC: CompareDatabaseCDCSummary;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    datasets?: never;
    databaseCDC?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    datasets: (value: CompareDataSetsSummary) => T;
    databaseCDC: (value: CompareDatabaseCDCSummary) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: CompareFileType, visitor: Visitor<T>): T => {
    if (value.datasets !== undefined) return visitor.datasets(value.datasets);
    if (value.databaseCDC !== undefined) return visitor.databaseCDC(value.databaseCDC);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Defines a file.</p>
 * @public
 */
export type File = File.FileTypeMember | File.$UnknownMember;

/**
 * @public
 */
export namespace File {
  /**
   * <p>The file type of the file.</p>
   * @public
   */
  export interface FileTypeMember {
    fileType: CompareFileType;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    fileType?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    fileType: (value: CompareFileType) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: File, visitor: Visitor<T>): T => {
    if (value.fileType !== undefined) return visitor.fileType(value.fileType);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Specifies the compare action summary.</p>
 * @public
 */
export interface CompareActionSummary {
  /**
   * <p>The type of the compare action summary.</p>
   * @public
   */
  type: File | undefined;
}

/**
 * <p>Specifies the AWS Mainframe Modernization managed application summary.</p>
 * @public
 */
export interface M2ManagedApplicationSummary {
  /**
   * <p>The application ID of the AWS Mainframe Modernization managed application summary.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>The runtime of the AWS Mainframe Modernization managed application summary.</p>
   * @public
   */
  runtime: M2ManagedRuntime | undefined;

  /**
   * <p>The listener port of the AWS Mainframe Modernization managed application summary.</p>
   * @public
   */
  listenerPort?: number | undefined;
}

/**
 * <p>Specifies the AWS Mainframe Modernization non-managed application summary.</p>
 * @public
 */
export interface M2NonManagedApplicationSummary {
  /**
   * <p>The VPC endpoint service name of the AWS Mainframe Modernization non-managed application summary.</p>
   * @public
   */
  vpcEndpointServiceName: string | undefined;

  /**
   * <p>The listener port of the AWS Mainframe Modernization non-managed application summary.</p>
   * @public
   */
  listenerPort: number | undefined;

  /**
   * <p>The runtime of the AWS Mainframe Modernization non-managed application summary.</p>
   * @public
   */
  runtime: M2NonManagedRuntime | undefined;

  /**
   * <p>The web application name of the AWS Mainframe Modernization non-managed application summary.</p>
   * @public
   */
  webAppName?: string | undefined;
}

/**
 * <p>Specifies the mainframe resource summary.</p>
 * @public
 */
export type MainframeResourceSummary =
  | MainframeResourceSummary.M2ManagedApplicationMember
  | MainframeResourceSummary.M2NonManagedApplicationMember
  | MainframeResourceSummary.$UnknownMember;

/**
 * @public
 */
export namespace MainframeResourceSummary {
  /**
   * <p>The AWS Mainframe Modernization managed application in the mainframe resource summary.</p>
   * @public
   */
  export interface M2ManagedApplicationMember {
    m2ManagedApplication: M2ManagedApplicationSummary;
    m2NonManagedApplication?: never;
    $unknown?: never;
  }

  /**
   * <p>The AWS Mainframe Modernization non-managed application in the mainframe resource summary.</p>
   * @public
   */
  export interface M2NonManagedApplicationMember {
    m2ManagedApplication?: never;
    m2NonManagedApplication: M2NonManagedApplicationSummary;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    m2ManagedApplication?: never;
    m2NonManagedApplication?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    m2ManagedApplication: (value: M2ManagedApplicationSummary) => T;
    m2NonManagedApplication: (value: M2NonManagedApplicationSummary) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: MainframeResourceSummary, visitor: Visitor<T>): T => {
    if (value.m2ManagedApplication !== undefined) return visitor.m2ManagedApplication(value.m2ManagedApplication);
    if (value.m2NonManagedApplication !== undefined)
      return visitor.m2NonManagedApplication(value.m2NonManagedApplication);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Defines a batch step input.</p>
 * @public
 */
export interface BatchStepInput {
  /**
   * <p>The resource of the batch step input.</p>
   * @public
   */
  resource: MainframeResourceSummary | undefined;

  /**
   * <p>The batch job name of the batch step input.</p>
   * @public
   */
  batchJobName: string | undefined;

  /**
   * <p>The batch job parameters of the batch step input.</p>
   * @public
   */
  batchJobParameters?: Record<string, string> | undefined;

  /**
   * <p>The export data set names of the batch step input.</p>
   * @public
   */
  exportDataSetNames?: string[] | undefined;

  /**
   * <p>The properties of the batch step input.</p>
   * @public
   */
  properties?: MainframeActionProperties | undefined;
}

/**
 * <p>Defines a batch step output.</p>
 * @public
 */
export interface BatchStepOutput {
  /**
   * <p>The data set export location of the batch step output.</p>
   * @public
   */
  dataSetExportLocation?: string | undefined;

  /**
   * <p>The Database Migration Service (DMS) output location of the batch step output.</p>
   * @public
   */
  dmsOutputLocation?: string | undefined;

  /**
   * <p>The data set details of the batch step output.</p>
   * @public
   */
  dataSetDetails?: DataSet[] | undefined;
}

/**
 * <p>Summarizes a batch job.</p>
 * @public
 */
export interface BatchSummary {
  /**
   * <p>The step input of the batch summary.</p>
   * @public
   */
  stepInput: BatchStepInput | undefined;

  /**
   * <p>The step output of the batch summary.</p>
   * @public
   */
  stepOutput?: BatchStepOutput | undefined;
}

/**
 * <p>Specifies the scripts summary.</p>
 * @public
 */
export interface ScriptSummary {
  /**
   * <p>The script location of the script summary.</p>
   * @public
   */
  scriptLocation: string | undefined;

  /**
   * <p>The type of the script summary.</p>
   * @public
   */
  type: ScriptType | undefined;
}

/**
 * <p>Specifies a TN3270 step input.</p>
 * @public
 */
export interface TN3270StepInput {
  /**
   * <p>The resource of the TN3270 step input.</p>
   * @public
   */
  resource: MainframeResourceSummary | undefined;

  /**
   * <p>The script of the TN3270 step input.</p>
   * @public
   */
  script: ScriptSummary | undefined;

  /**
   * <p>The export data set names of the TN3270 step input.</p>
   * @public
   */
  exportDataSetNames?: string[] | undefined;

  /**
   * <p>The properties of the TN3270 step input.</p>
   * @public
   */
  properties?: MainframeActionProperties | undefined;
}

/**
 * <p>Specifies a TN3270 step output.</p>
 * @public
 */
export interface TN3270StepOutput {
  /**
   * <p>The data set export location of the TN3270 step output.</p>
   * @public
   */
  dataSetExportLocation?: string | undefined;

  /**
   * <p>The output location of the TN3270 step output.</p>
   * @public
   */
  dmsOutputLocation?: string | undefined;

  /**
   * <p>The data set details of the TN3270 step output.</p>
   * @public
   */
  dataSetDetails?: DataSet[] | undefined;

  /**
   * <p>The script output location of the TN3270 step output.</p>
   * @public
   */
  scriptOutputLocation: string | undefined;
}

/**
 * <p>Specifies a TN3270 summary.</p>
 * @public
 */
export interface TN3270Summary {
  /**
   * <p>The step input of the TN3270 summary.</p>
   * @public
   */
  stepInput: TN3270StepInput | undefined;

  /**
   * <p>The step output of the TN3270 summary.</p>
   * @public
   */
  stepOutput?: TN3270StepOutput | undefined;
}

/**
 * <p>Specifies the mainframe action summary.</p>
 * @public
 */
export type MainframeActionSummary =
  | MainframeActionSummary.BatchMember
  | MainframeActionSummary.Tn3270Member
  | MainframeActionSummary.$UnknownMember;

/**
 * @public
 */
export namespace MainframeActionSummary {
  /**
   * <p>The batch of the mainframe action summary.</p>
   * @public
   */
  export interface BatchMember {
    batch: BatchSummary;
    tn3270?: never;
    $unknown?: never;
  }

  /**
   * <p>The tn3270 port of the mainframe action summary.</p>
   * @public
   */
  export interface Tn3270Member {
    batch?: never;
    tn3270: TN3270Summary;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    batch?: never;
    tn3270?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    batch: (value: BatchSummary) => T;
    tn3270: (value: TN3270Summary) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: MainframeActionSummary, visitor: Visitor<T>): T => {
    if (value.batch !== undefined) return visitor.batch(value.batch);
    if (value.tn3270 !== undefined) return visitor.tn3270(value.tn3270);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Creates the CloudFormation step input.</p>
 * @public
 */
export interface CreateCloudFormationStepInput {
  /**
   * <p>The template location of the CloudFormation step input.</p>
   * @public
   */
  templateLocation: string | undefined;

  /**
   * <p>The CloudFormation properties of the CloudFormation step input.</p>
   * @public
   */
  parameters?: Record<string, string> | undefined;
}

/**
 * <p>Creates a CloudFormation step output.</p>
 * @public
 */
export interface CreateCloudFormationStepOutput {
  /**
   * <p>The stack ID of the CloudFormation step output.</p>
   * @public
   */
  stackId: string | undefined;

  /**
   * <p>The exports of the CloudFormation step output.</p>
   * @public
   */
  exports?: Record<string, string> | undefined;
}

/**
 * <p>Creates a CloudFormation summary.</p>
 * @public
 */
export interface CreateCloudFormationSummary {
  /**
   * <p>The step input of the CloudFormation summary.</p>
   * @public
   */
  stepInput: CreateCloudFormationStepInput | undefined;

  /**
   * <p>The step output of the CloudFormation summary.</p>
   * @public
   */
  stepOutput?: CreateCloudFormationStepOutput | undefined;
}

/**
 * <p>Deletes the CloudFormation step input.</p>
 * @public
 */
export interface DeleteCloudFormationStepInput {
  /**
   * <p>The stack ID of the deleted CloudFormation step input.</p>
   * @public
   */
  stackId: string | undefined;
}

/**
 * <p>Deletes the CloudFormation summary step output.</p>
 * @public
 */
export interface DeleteCloudFormationStepOutput {}

/**
 * <p>Deletes the CloudFormation summary.</p>
 * @public
 */
export interface DeleteCloudFormationSummary {
  /**
   * <p>The step input of the deleted CloudFormation summary.</p>
   * @public
   */
  stepInput: DeleteCloudFormationStepInput | undefined;

  /**
   * <p>The step output of the deleted CloudFormation summary.</p>
   * @public
   */
  stepOutput?: DeleteCloudFormationStepOutput | undefined;
}

/**
 * <p>Specifies the CloudFormation step summary.</p>
 * @public
 */
export type CloudFormationStepSummary =
  | CloudFormationStepSummary.CreateCloudformationMember
  | CloudFormationStepSummary.DeleteCloudformationMember
  | CloudFormationStepSummary.$UnknownMember;

/**
 * @public
 */
export namespace CloudFormationStepSummary {
  /**
   * <p>Creates the CloudFormation summary of the step.</p>
   * @public
   */
  export interface CreateCloudformationMember {
    createCloudformation: CreateCloudFormationSummary;
    deleteCloudformation?: never;
    $unknown?: never;
  }

  /**
   * <p>Deletes the CloudFormation summary of the CloudFormation step summary.</p>
   * @public
   */
  export interface DeleteCloudformationMember {
    createCloudformation?: never;
    deleteCloudformation: DeleteCloudFormationSummary;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    createCloudformation?: never;
    deleteCloudformation?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    createCloudformation: (value: CreateCloudFormationSummary) => T;
    deleteCloudformation: (value: DeleteCloudFormationSummary) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: CloudFormationStepSummary, visitor: Visitor<T>): T => {
    if (value.createCloudformation !== undefined) return visitor.createCloudformation(value.createCloudformation);
    if (value.deleteCloudformation !== undefined) return visitor.deleteCloudformation(value.deleteCloudformation);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Specifies the AWS Mainframe Modernization managed application step input.</p>
 * @public
 */
export interface M2ManagedApplicationStepInput {
  /**
   * <p>The application ID of the AWS Mainframe Modernization managed application step input.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>The runtime of the AWS Mainframe Modernization managed application step input.</p>
   * @public
   */
  runtime: string | undefined;

  /**
   * <p>The VPC endpoint service name of the AWS Mainframe Modernization managed application step input.</p>
   * @public
   */
  vpcEndpointServiceName?: string | undefined;

  /**
   * <p>The listener port of the AWS Mainframe Modernization managed application step input.</p>
   * @public
   */
  listenerPort?: number | undefined;

  /**
   * <p>The action type of the AWS Mainframe Modernization managed application step input.</p>
   * @public
   */
  actionType: M2ManagedActionType | undefined;

  /**
   * <p>The properties of the AWS Mainframe Modernization managed application step input.</p>
   * @public
   */
  properties?: M2ManagedActionProperties | undefined;
}

/**
 * <p>Specifies the AWS Mainframe Modernization managed application step output.</p>
 * @public
 */
export interface M2ManagedApplicationStepOutput {
  /**
   * <p>The import data set summary of the AWS Mainframe Modernization managed application step output.</p>
   * @public
   */
  importDataSetSummary?: Record<string, string> | undefined;
}

/**
 * <p>Specifies the AWS Mainframe Modernization managed application step summary.</p>
 * @public
 */
export interface M2ManagedApplicationStepSummary {
  /**
   * <p>The step input of the AWS Mainframe Modernization managed application step summary.</p>
   * @public
   */
  stepInput: M2ManagedApplicationStepInput | undefined;

  /**
   * <p>The step output of the AWS Mainframe Modernization managed application step summary.</p>
   * @public
   */
  stepOutput?: M2ManagedApplicationStepOutput | undefined;
}

/**
 * <p>Specifies the AWS Mainframe Modernization non-managed application step input.</p>
 * @public
 */
export interface M2NonManagedApplicationStepInput {
  /**
   * <p>The VPC endpoint service name of the AWS Mainframe Modernization non-managed application step input.</p>
   * @public
   */
  vpcEndpointServiceName: string | undefined;

  /**
   * <p>The listener port of the AWS Mainframe Modernization non-managed application step input.</p>
   * @public
   */
  listenerPort: number | undefined;

  /**
   * <p>The runtime of the AWS Mainframe Modernization non-managed application step input.</p>
   * @public
   */
  runtime: M2NonManagedRuntime | undefined;

  /**
   * <p>The web app name of the AWS Mainframe Modernization non-managed application step input.</p>
   * @public
   */
  webAppName?: string | undefined;

  /**
   * <p>The action type of the AWS Mainframe Modernization non-managed application step input.</p>
   * @public
   */
  actionType: M2NonManagedActionType | undefined;
}

/**
 * <p>Specifies the AWS Mainframe Modernization non-managed application step output.</p>
 * @public
 */
export interface M2NonManagedApplicationStepOutput {}

/**
 * <p>Specifies the AWS Mainframe Modernization non-managed application step summary.</p>
 * @public
 */
export interface M2NonManagedApplicationStepSummary {
  /**
   * <p>The step input of the AWS Mainframe Modernization non-managed application step summary.</p>
   * @public
   */
  stepInput: M2NonManagedApplicationStepInput | undefined;

  /**
   * <p>The step output of the AWS Mainframe Modernization non-managed application step summary.</p>
   * @public
   */
  stepOutput?: M2NonManagedApplicationStepOutput | undefined;
}

/**
 * <p>Specifies the resource action summary.</p>
 * @public
 */
export type ResourceActionSummary =
  | ResourceActionSummary.CloudFormationMember
  | ResourceActionSummary.M2ManagedApplicationMember
  | ResourceActionSummary.M2NonManagedApplicationMember
  | ResourceActionSummary.$UnknownMember;

/**
 * @public
 */
export namespace ResourceActionSummary {
  /**
   * <p>The CloudFormation template of the resource action summary.</p>
   * @public
   */
  export interface CloudFormationMember {
    cloudFormation: CloudFormationStepSummary;
    m2ManagedApplication?: never;
    m2NonManagedApplication?: never;
    $unknown?: never;
  }

  /**
   * <p>The AWS Mainframe Modernization managed application of the resource action summary.</p>
   * @public
   */
  export interface M2ManagedApplicationMember {
    cloudFormation?: never;
    m2ManagedApplication: M2ManagedApplicationStepSummary;
    m2NonManagedApplication?: never;
    $unknown?: never;
  }

  /**
   * <p>The AWS Mainframe Modernization non-managed application of the resource action summary.</p>
   * @public
   */
  export interface M2NonManagedApplicationMember {
    cloudFormation?: never;
    m2ManagedApplication?: never;
    m2NonManagedApplication: M2NonManagedApplicationStepSummary;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    cloudFormation?: never;
    m2ManagedApplication?: never;
    m2NonManagedApplication?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    cloudFormation: (value: CloudFormationStepSummary) => T;
    m2ManagedApplication: (value: M2ManagedApplicationStepSummary) => T;
    m2NonManagedApplication: (value: M2NonManagedApplicationStepSummary) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ResourceActionSummary, visitor: Visitor<T>): T => {
    if (value.cloudFormation !== undefined) return visitor.cloudFormation(value.cloudFormation);
    if (value.m2ManagedApplication !== undefined) return visitor.m2ManagedApplication(value.m2ManagedApplication);
    if (value.m2NonManagedApplication !== undefined)
      return visitor.m2NonManagedApplication(value.m2NonManagedApplication);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Defines the step run summary.</p>
 * @public
 */
export type StepRunSummary =
  | StepRunSummary.CompareActionMember
  | StepRunSummary.MainframeActionMember
  | StepRunSummary.ResourceActionMember
  | StepRunSummary.$UnknownMember;

/**
 * @public
 */
export namespace StepRunSummary {
  /**
   * <p>The mainframe action of the step run summary.</p>
   * @public
   */
  export interface MainframeActionMember {
    mainframeAction: MainframeActionSummary;
    compareAction?: never;
    resourceAction?: never;
    $unknown?: never;
  }

  /**
   * <p>The compare action of the step run summary.</p>
   * @public
   */
  export interface CompareActionMember {
    mainframeAction?: never;
    compareAction: CompareActionSummary;
    resourceAction?: never;
    $unknown?: never;
  }

  /**
   * <p>The resource action of the step run summary.</p>
   * @public
   */
  export interface ResourceActionMember {
    mainframeAction?: never;
    compareAction?: never;
    resourceAction: ResourceActionSummary;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    mainframeAction?: never;
    compareAction?: never;
    resourceAction?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    mainframeAction: (value: MainframeActionSummary) => T;
    compareAction: (value: CompareActionSummary) => T;
    resourceAction: (value: ResourceActionSummary) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: StepRunSummary, visitor: Visitor<T>): T => {
    if (value.mainframeAction !== undefined) return visitor.mainframeAction(value.mainframeAction);
    if (value.compareAction !== undefined) return visitor.compareAction(value.compareAction);
    if (value.resourceAction !== undefined) return visitor.resourceAction(value.resourceAction);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface GetTestRunStepResponse {
  /**
   * <p>The step name of the test run step.</p>
   * @public
   */
  stepName: string | undefined;

  /**
   * <p>The test run ID of the test run step.</p>
   * @public
   */
  testRunId: string | undefined;

  /**
   * <p>The test case ID of the test run step.</p>
   * @public
   */
  testCaseId?: string | undefined;

  /**
   * <p>The test case version of the test run step.</p>
   * @public
   */
  testCaseVersion?: number | undefined;

  /**
   * <p>The test suite ID of the test run step.</p>
   * @public
   */
  testSuiteId?: string | undefined;

  /**
   * <p>The test suite version of the test run step.</p>
   * @public
   */
  testSuiteVersion?: number | undefined;

  /**
   * <p>The before steps of the test run step.</p>
   * @public
   */
  beforeStep?: boolean | undefined;

  /**
   * <p>The after steps of the test run step.</p>
   * @public
   */
  afterStep?: boolean | undefined;

  /**
   * <p>The status of the test run step.</p>
   * @public
   */
  status: StepRunStatus | undefined;

  /**
   * <p>The status reason of the test run step.</p>
   * @public
   */
  statusReason?: string | undefined;

  /**
   * <p>The run start time of the test run step.</p>
   * @public
   */
  runStartTime: Date | undefined;

  /**
   * <p>The run end time of the test run step.</p>
   * @public
   */
  runEndTime?: Date | undefined;

  /**
   * <p>The step run summary of the test run step.</p>
   * @public
   */
  stepRunSummary?: StepRunSummary | undefined;
}

/**
 * @public
 */
export interface ListTestRunsRequest {
  /**
   * <p>The test suite ID of the test runs.</p>
   * @public
   */
  testSuiteId?: string | undefined;

  /**
   * <p>The test run IDs of the test runs.</p>
   * @public
   */
  testRunIds?: string[] | undefined;

  /**
   * <p>The token from the previous request to retrieve the next page of test run results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of test runs to return in one page of results.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const TestRunStatus = {
  DELETING: "Deleting",
  FAILED: "Failed",
  RUNNING: "Running",
  SUCCESS: "Success",
} as const;

/**
 * @public
 */
export type TestRunStatus = (typeof TestRunStatus)[keyof typeof TestRunStatus];

/**
 * <p>Specifies a test run summary.</p>
 * @public
 */
export interface TestRunSummary {
  /**
   * <p>The test run ID of the test run summary.</p>
   * @public
   */
  testRunId: string | undefined;

  /**
   * <p>The test run ARN of the test run summary.</p>
   * @public
   */
  testRunArn: string | undefined;

  /**
   * <p>The test suite ID of the test run summary.</p>
   * @public
   */
  testSuiteId: string | undefined;

  /**
   * <p>The test suite version of the test run summary.</p>
   * @public
   */
  testSuiteVersion: number | undefined;

  /**
   * <p>The test configuration ID of the test run summary.</p>
   * @public
   */
  testConfigurationId?: string | undefined;

  /**
   * <p>The test configuration version of the test run summary.</p>
   * @public
   */
  testConfigurationVersion?: number | undefined;

  /**
   * <p>The status of the test run summary.</p>
   * @public
   */
  status: TestRunStatus | undefined;

  /**
   * <p>The status reason of the test run summary.</p>
   * @public
   */
  statusReason?: string | undefined;

  /**
   * <p>The run start time of the test run summary.</p>
   * @public
   */
  runStartTime: Date | undefined;

  /**
   * <p>The run end time of the test run summary.</p>
   * @public
   */
  runEndTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListTestRunsResponse {
  /**
   * <p>The test runs of the response query.</p>
   * @public
   */
  testRuns: TestRunSummary[] | undefined;

  /**
   * <p>The token from the previous request to retrieve the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTestRunStepsRequest {
  /**
   * <p>The test run ID of the test run steps.</p>
   * @public
   */
  testRunId: string | undefined;

  /**
   * <p>The test case ID of the test run steps.</p>
   * @public
   */
  testCaseId?: string | undefined;

  /**
   * <p>The test suite ID of the test run steps.</p>
   * @public
   */
  testSuiteId?: string | undefined;

  /**
   * <p>The token from a previous step to retrieve the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of test run steps to return in one page of results.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Specifies a test run step summary.</p>
 * @public
 */
export interface TestRunStepSummary {
  /**
   * <p>The step name of the test run step summary.</p>
   * @public
   */
  stepName: string | undefined;

  /**
   * <p>The test run ID of the test run step summary.</p>
   * @public
   */
  testRunId: string | undefined;

  /**
   * <p>The test case ID of the test run step summary.</p>
   * @public
   */
  testCaseId?: string | undefined;

  /**
   * <p>The test case version of the test run step summary.</p>
   * @public
   */
  testCaseVersion?: number | undefined;

  /**
   * <p>The test suite ID of the test run step summary.</p>
   * @public
   */
  testSuiteId?: string | undefined;

  /**
   * <p>The test suite version of the test run step summary.</p>
   * @public
   */
  testSuiteVersion?: number | undefined;

  /**
   * <p>The before step of the test run step summary.</p>
   * @public
   */
  beforeStep?: boolean | undefined;

  /**
   * <p>The after step of the test run step summary.</p>
   * @public
   */
  afterStep?: boolean | undefined;

  /**
   * <p>The status of the test run step summary.</p>
   * @public
   */
  status: StepRunStatus | undefined;

  /**
   * <p>The status reason of the test run step summary.</p>
   * @public
   */
  statusReason?: string | undefined;

  /**
   * <p>The run start time of the test run step summary.</p>
   * @public
   */
  runStartTime: Date | undefined;

  /**
   * <p>The run end time of the test run step summary.</p>
   * @public
   */
  runEndTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListTestRunStepsResponse {
  /**
   * <p>The test run steps of the response query.</p>
   * @public
   */
  testRunSteps: TestRunStepSummary[] | undefined;

  /**
   * <p>The token from a previous request to retrieve the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTestRunTestCasesRequest {
  /**
   * <p>The test run ID of the test cases.</p>
   * @public
   */
  testRunId: string | undefined;

  /**
   * <p>The token from a previous request to retrieve the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of test run test cases to return in one page of results.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const TestCaseRunStatus = {
  FAILED: "Failed",
  RUNNING: "Running",
  SUCCESS: "Success",
} as const;

/**
 * @public
 */
export type TestCaseRunStatus = (typeof TestCaseRunStatus)[keyof typeof TestCaseRunStatus];

/**
 * <p>Specifies the test case run summary.</p>
 * @public
 */
export interface TestCaseRunSummary {
  /**
   * <p>The test case id of the test case run summary.</p>
   * @public
   */
  testCaseId: string | undefined;

  /**
   * <p>The test case version of the test case run summary.</p>
   * @public
   */
  testCaseVersion: number | undefined;

  /**
   * <p>The test run id of the test case run summary.</p>
   * @public
   */
  testRunId: string | undefined;

  /**
   * <p>The status of the test case run summary.</p>
   * @public
   */
  status: TestCaseRunStatus | undefined;

  /**
   * <p>The status reason of the test case run summary.</p>
   * @public
   */
  statusReason?: string | undefined;

  /**
   * <p>The run start time of the test case run summary.</p>
   * @public
   */
  runStartTime: Date | undefined;

  /**
   * <p>The run end time of the test case run summary.</p>
   * @public
   */
  runEndTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListTestRunTestCasesResponse {
  /**
   * <p>The test run of the test cases.</p>
   * @public
   */
  testRunTestCases: TestCaseRunSummary[] | undefined;

  /**
   * <p>The token from a previous request to retrieve the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface StartTestRunRequest {
  /**
   * <p>The test suite ID of the test run.</p>
   * @public
   */
  testSuiteId: string | undefined;

  /**
   * <p>The configuration ID of the test run.</p>
   * @public
   */
  testConfigurationId?: string | undefined;

  /**
   * <p>The client token of the test run.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The tags of the test run.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface StartTestRunResponse {
  /**
   * <p>The test run ID of the test run.</p>
   * @public
   */
  testRunId: string | undefined;

  /**
   * <p>The test run status of the test run.</p>
   * @public
   */
  testRunStatus: TestRunStatus | undefined;
}

/**
 * <p>Specifies test cases.</p>
 * @public
 */
export type TestCases = TestCases.SequentialMember | TestCases.$UnknownMember;

/**
 * @public
 */
export namespace TestCases {
  /**
   * <p>The sequential of the test case.</p>
   * @public
   */
  export interface SequentialMember {
    sequential: string[];
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    sequential?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    sequential: (value: string[]) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: TestCases, visitor: Visitor<T>): T => {
    if (value.sequential !== undefined) return visitor.sequential(value.sequential);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface CreateTestSuiteRequest {
  /**
   * <p>The name of the test suite.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the test suite.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The before steps of the test suite.</p>
   * @public
   */
  beforeSteps?: Step[] | undefined;

  /**
   * <p>The after steps of the test suite.</p>
   * @public
   */
  afterSteps?: Step[] | undefined;

  /**
   * <p>The test cases in the test suite.</p>
   * @public
   */
  testCases: TestCases | undefined;

  /**
   * <p>The client token of the test suite.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The tags of the test suite.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateTestSuiteResponse {
  /**
   * <p>The suite ID of the test suite.</p>
   * @public
   */
  testSuiteId: string | undefined;

  /**
   * <p>The suite version of the test suite.</p>
   * @public
   */
  testSuiteVersion: number | undefined;
}

/**
 * @public
 */
export interface DeleteTestSuiteRequest {
  /**
   * <p>The test ID of the test suite.</p>
   * @public
   */
  testSuiteId: string | undefined;
}

/**
 * @public
 */
export interface DeleteTestSuiteResponse {}

/**
 * @public
 */
export interface GetTestSuiteRequest {
  /**
   * <p>The ID of the test suite.</p>
   * @public
   */
  testSuiteId: string | undefined;

  /**
   * <p>The version of the test suite.</p>
   * @public
   */
  testSuiteVersion?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const TestSuiteLifecycle = {
  ACTIVE: "Active",
  CREATING: "Creating",
  DELETING: "Deleting",
  FAILED: "Failed",
  UPDATING: "Updating",
} as const;

/**
 * @public
 */
export type TestSuiteLifecycle = (typeof TestSuiteLifecycle)[keyof typeof TestSuiteLifecycle];

/**
 * <p>Specifies the latest version of a test suite.</p>
 * @public
 */
export interface TestSuiteLatestVersion {
  /**
   * <p>The version of the test suite latest version.</p>
   * @public
   */
  version: number | undefined;

  /**
   * <p>The status of the test suite latest version.</p>
   * @public
   */
  status: TestSuiteLifecycle | undefined;

  /**
   * <p>The status reason of the test suite latest version.</p>
   * @public
   */
  statusReason?: string | undefined;
}

/**
 * @public
 */
export interface GetTestSuiteResponse {
  /**
   * <p>The response ID of the test suite.</p>
   * @public
   */
  testSuiteId: string | undefined;

  /**
   * <p>The name of the test suite.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The latest version of the test suite.</p>
   * @public
   */
  latestVersion: TestSuiteLatestVersion | undefined;

  /**
   * <p>The version of the test suite.</p>
   * @public
   */
  testSuiteVersion: number | undefined;

  /**
   * <p>The status of the test suite.</p>
   * @public
   */
  status?: TestSuiteLifecycle | undefined;

  /**
   * <p>The status reason of the test suite.</p>
   * @public
   */
  statusReason?: string | undefined;

  /**
   * <p>The test suite Amazon Resource Name (ARN).</p>
   * @public
   */
  testSuiteArn: string | undefined;

  /**
   * <p>The creation time of the test suite.</p>
   * @public
   */
  creationTime: Date | undefined;

  /**
   * <p>The last update time of the test suite.</p>
   * @public
   */
  lastUpdateTime: Date | undefined;

  /**
   * <p>The description of the test suite.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The before steps of the test suite.</p>
   * @public
   */
  beforeSteps: Step[] | undefined;

  /**
   * <p>The after steps of the test suite.  </p>
   * @public
   */
  afterSteps: Step[] | undefined;

  /**
   * <p>The test cases of the test suite.</p>
   * @public
   */
  testCases: TestCases | undefined;

  /**
   * <p>The tags of the test suite.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListTestSuitesRequest {
  /**
   * <p>The suite ID of the test suites.</p>
   * @public
   */
  testSuiteIds?: string[] | undefined;

  /**
   * <p>The token from a previous request to retrieve the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of test suites to return in one page of results.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Specifies the test suite summary.</p>
 * @public
 */
export interface TestSuiteSummary {
  /**
   * <p>The test suite ID of the test suite summary.</p>
   * @public
   */
  testSuiteId: string | undefined;

  /**
   * <p>The name of the test suite summary.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The status reason of the test suite summary.</p>
   * @public
   */
  statusReason?: string | undefined;

  /**
   * <p>The latest version of the test suite summary.</p>
   * @public
   */
  latestVersion: number | undefined;

  /**
   * <p>The test suite Amazon Resource Name (ARN) of the test suite summary.</p>
   * @public
   */
  testSuiteArn: string | undefined;

  /**
   * <p>The status of the test suite summary.</p>
   * @public
   */
  status: TestSuiteLifecycle | undefined;

  /**
   * <p>The creation time of the test suite summary.</p>
   * @public
   */
  creationTime: Date | undefined;

  /**
   * <p>The last update time of the test suite summary.</p>
   * @public
   */
  lastUpdateTime: Date | undefined;
}

/**
 * @public
 */
export interface ListTestSuitesResponse {
  /**
   * <p>The test suites returned with the response query.</p>
   * @public
   */
  testSuites: TestSuiteSummary[] | undefined;

  /**
   * <p>The token from a previous request to retrieve the next page of test suites results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateTestSuiteRequest {
  /**
   * <p>The test suite ID of the test suite.</p>
   * @public
   */
  testSuiteId: string | undefined;

  /**
   * <p>The description of the test suite.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The before steps for the test suite.</p>
   * @public
   */
  beforeSteps?: Step[] | undefined;

  /**
   * <p>The after steps of the test suite.</p>
   * @public
   */
  afterSteps?: Step[] | undefined;

  /**
   * <p>The test cases in the test suite.</p>
   * @public
   */
  testCases?: TestCases | undefined;
}

/**
 * @public
 */
export interface UpdateTestSuiteResponse {
  /**
   * <p>The test suite ID of the test suite.</p>
   * @public
   */
  testSuiteId: string | undefined;

  /**
   * <p>The test suite version of the test suite.</p>
   * @public
   */
  testSuiteVersion?: number | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The tag keys of the resource.</p>
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}
