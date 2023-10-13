// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";
import { DocumentType as __DocumentType } from "@smithy/types";

import { GameSparksServiceException as __BaseException } from "./GameSparksServiceException";

/**
 * @public
 * <p>You do not have sufficient access to perform this action.</p>
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  Message?: string;
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
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>The resource already exists, or another operation is in progress.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  Message?: string;
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
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>Details about a WebSocket connection.</p>
 */
export interface Connection {
  /**
   * @public
   * <p>The identifier used to indicate a specific WebSocket connection.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The date and time when the connection was created.</p>
   */
  Created?: Date;
}

/**
 * @public
 */
export interface CreateGameRequest {
  /**
   * @public
   * <p>The name of the game.</p>
   */
  GameName: string | undefined;

  /**
   * @public
   * <p>The description of the game.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>
   *       A client-defined token.
   *       With an active client token in the request, this action is idempotent.
   *       </p>
   */
  ClientToken?: string;

  /**
   * @public
   * <p>The list of tags to apply to the game.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 * @enum
 */
export const GameState = {
  ACTIVE: "ACTIVE",
  DELETING: "DELETING",
} as const;

/**
 * @public
 */
export type GameState = (typeof GameState)[keyof typeof GameState];

/**
 * @public
 * <p>Details about a game.</p>
 */
export interface GameDetails {
  /**
   * @public
   * <p>The name of the game.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of this game.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The description of the game.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The date when the game was created.</p>
   */
  Created?: Date;

  /**
   * @public
   * <p>The date when the game was last modified.</p>
   */
  LastUpdated?: Date;

  /**
   * @public
   * <p>The state of the game.</p>
   */
  State?: GameState;

  /**
   * @public
   * <p>Determines if the game can be deleted.</p>
   */
  EnableTerminationProtection?: boolean;

  /**
   * @public
   * <p>The tags associated with the game.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateGameResult {
  /**
   * @public
   * <p>Details about the game that was created.</p>
   */
  Game?: GameDetails;
}

/**
 * @public
 * <p>The service encountered an internal error.</p>
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  Message?: string;
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
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>The request would result in exceeding service quota.</p>
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  Message?: string;
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
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>The request throughput limit was exceeded.</p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  Message?: string;
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
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>One of the parameters in the request is invalid.</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  Message?: string;
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
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface CreateSnapshotRequest {
  /**
   * @public
   * <p>The name of the game.</p>
   */
  GameName: string | undefined;

  /**
   * @public
   * <p>The description of the snapshot.</p>
   */
  Description?: string;
}

/**
 * @public
 * <p>The configuration section.</p>
 */
export interface Section {
  /**
   * @public
   * <p>The name of the section.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The size, in bytes, of the section contents.</p>
   */
  Size?: number;

  /**
   * @public
   * <p>The content of a configuration section.</p>
   */
  Attributes?: __DocumentType;
}

/**
 * @public
 * <p>Properties that provide details of a snapshot.</p>
 */
export interface SnapshotDetails {
  /**
   * @public
   * <p>The identifier of the snapshot.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The description of the snapshot.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The sections in the snapshot.</p>
   */
  Sections?: Record<string, Section>;

  /**
   * @public
   * <p>The timestamp of when the snapshot was created.</p>
   */
  Created?: Date;

  /**
   * @public
   * <p>The timestamp of when the snapshot was last updated.</p>
   */
  LastUpdated?: Date;
}

/**
 * @public
 */
export interface CreateSnapshotResult {
  /**
   * @public
   * <p>Properties that provide details of the created snapshot.</p>
   */
  Snapshot?: SnapshotDetails;
}

/**
 * @public
 * <p>The resource specified in the request does not exist.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
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
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface CreateStageRequest {
  /**
   * @public
   * <p>The name of the game.</p>
   */
  GameName: string | undefined;

  /**
   * @public
   * <p>The name of the stage.</p>
   */
  StageName: string | undefined;

  /**
   * @public
   * <p>
   *       The Amazon Resource Name (ARN) of the role to run the game with.
   *       This role can be a game-defined role or the default role that GameSparks created.
   *       </p>
   */
  Role: string | undefined;

  /**
   * @public
   * <p>The description of the stage.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>
   *       A client-defined token.
   *       With an active client token in the request, this action is idempotent.
   *       </p>
   */
  ClientToken?: string;

  /**
   * @public
   * <p>The list of tags to apply to the stage.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 * @enum
 */
export const StageState = {
  ACTIVE: "ACTIVE",
  DELETING: "DELETING",
} as const;

/**
 * @public
 */
export type StageState = (typeof StageState)[keyof typeof StageState];

/**
 * @public
 * <p>Properties that provide details of a stage.</p>
 */
export interface StageDetails {
  /**
   * @public
   * <p>The name of the stage.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The game key associated with the stage.</p>
   *          <p>
   *       The game key is a unique identifier that the game client uses to connect to the GameSparks backend.
   *       </p>
   */
  GameKey?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the stage.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the role used to run the game runtimes deployed to the stage.</p>
   */
  Role?: string;

  /**
   * @public
   * <p>The description of the stage.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The timestamp of when the stage was created.</p>
   */
  Created?: Date;

  /**
   * @public
   * <p>The timestamp of when the stage was last updated.</p>
   */
  LastUpdated?: Date;

  /**
   * @public
   * <p>The state of the stage.</p>
   */
  State?: StageState;

  /**
   * @public
   * <p>The tags associated with the stage.</p>
   */
  Tags?: Record<string, string>;

  /**
   * @public
   * <p>The Amazon CloudWatch log group for game runtimes deployed to the stage.</p>
   */
  LogGroup?: string;
}

/**
 * @public
 */
export interface CreateStageResult {
  /**
   * @public
   * <p>Properties that describe the stage.</p>
   */
  Stage?: StageDetails;
}

/**
 * @public
 */
export interface DeleteGameRequest {
  /**
   * @public
   * <p>The name of the game to delete.</p>
   */
  GameName: string | undefined;
}

/**
 * @public
 */
export interface DeleteGameResult {}

/**
 * @public
 */
export interface DeleteStageRequest {
  /**
   * @public
   * <p>The name of the game.</p>
   */
  GameName: string | undefined;

  /**
   * @public
   * <p>The name of the stage to delete.</p>
   */
  StageName: string | undefined;
}

/**
 * @public
 */
export interface DeleteStageResult {}

/**
 * @public
 * @enum
 */
export const DeploymentAction = {
  DEPLOY: "DEPLOY",
  UNDEPLOY: "UNDEPLOY",
} as const;

/**
 * @public
 */
export type DeploymentAction = (typeof DeploymentAction)[keyof typeof DeploymentAction];

/**
 * @public
 * @enum
 */
export const ResultCode = {
  INVALID_ROLE_FAILURE: "INVALID_ROLE_FAILURE",
  SUCCESS: "SUCCESS",
  UNSPECIFIED_FAILURE: "UNSPECIFIED_FAILURE",
} as const;

/**
 * @public
 */
export type ResultCode = (typeof ResultCode)[keyof typeof ResultCode];

/**
 * @public
 * <p>The result of the deployment.</p>
 */
export interface DeploymentResult {
  /**
   * @public
   * <p>The type of deployment result.</p>
   */
  ResultCode?: ResultCode;

  /**
   * @public
   * <p>Details about the deployment result.</p>
   */
  Message?: string;
}

/**
 * @public
 * @enum
 */
export const DeploymentState = {
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  PENDING: "PENDING",
} as const;

/**
 * @public
 */
export type DeploymentState = (typeof DeploymentState)[keyof typeof DeploymentState];

/**
 * @public
 */
export interface DisconnectPlayerRequest {
  /**
   * @public
   * <p>The unique identifier representing a player.</p>
   */
  PlayerId: string | undefined;

  /**
   * @public
   * <p>The name of the game.</p>
   */
  GameName: string | undefined;

  /**
   * @public
   * <p>The name of the stage.</p>
   */
  StageName: string | undefined;
}

/**
 * @public
 */
export interface DisconnectPlayerResult {
  /**
   * @public
   * <p>The list of the connection ids that were disconnected.</p>
   */
  DisconnectSuccesses?: string[];

  /**
   * @public
   * <p>The list of the connection ids that could not be disconnected.</p>
   */
  DisconnectFailures?: string[];
}

/**
 * @public
 */
export interface ExportSnapshotRequest {
  /**
   * @public
   * <p>The name of the game.</p>
   */
  GameName: string | undefined;

  /**
   * @public
   * <p>The identifier of the snapshot to export.</p>
   */
  SnapshotId: string | undefined;
}

/**
 * @public
 */
export interface ExportSnapshotResult {
  /**
   * @public
   * <p>The presigned URL for the snapshot data.</p>
   *          <p>
   *       This URL will be available for 10 minutes, and can be used to download the snapshot content.
   *       If the URL expires, a new one can be requested using the same operation.
   *       </p>
   */
  S3Url?: string;
}

/**
 * @public
 * <p>Details about the extension.</p>
 */
export interface ExtensionDetails {
  /**
   * @public
   * <p>The namespace (qualifier) of the extension.</p>
   */
  Namespace?: string;

  /**
   * @public
   * <p>The name of the extension.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The description of the extension.</p>
   */
  Description?: string;
}

/**
 * @public
 * <p>Details about the extension version.</p>
 */
export interface ExtensionVersionDetails {
  /**
   * @public
   * <p>The namespace (qualifier) of the extension.</p>
   */
  Namespace?: string;

  /**
   * @public
   * <p>The name of the extension.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The model that defines the interface for this extension version.</p>
   */
  Schema?: string;

  /**
   * @public
   * <p>The version of the extension.</p>
   */
  Version?: string;
}

/**
 * @public
 * <p>Details about the game configuration.</p>
 *          <p>
 *       The game configuration is organized into named sections, where the schema of each section
 *       is defined by an extension. The schema for these sections can be retrieved using
 *       the <code>GetExtensionVersion</code> operation.
 *       </p>
 */
export interface GameConfigurationDetails {
  /**
   * @public
   * <p>Configuration data, organized by section name.</p>
   */
  Sections?: Record<string, Section>;

  /**
   * @public
   * <p>The date when the game was created.</p>
   */
  Created?: Date;

  /**
   * @public
   * <p>The date when the game was last modified.</p>
   */
  LastUpdated?: Date;
}

/**
 * @public
 */
export interface GetExtensionRequest {
  /**
   * @public
   * <p>The namespace (qualifier) of the extension.</p>
   */
  Namespace: string | undefined;

  /**
   * @public
   * <p>The name of the extension.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface GetExtensionResult {
  /**
   * @public
   * <p>Details about the extension.</p>
   */
  Extension?: ExtensionDetails;
}

/**
 * @public
 */
export interface GetExtensionVersionRequest {
  /**
   * @public
   * <p>The namespace (qualifier) of the extension.</p>
   */
  Namespace: string | undefined;

  /**
   * @public
   * <p>The name of the extension.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The version of the extension.</p>
   */
  ExtensionVersion: string | undefined;
}

/**
 * @public
 */
export interface GetExtensionVersionResult {
  /**
   * @public
   * <p>The version of the extension.</p>
   */
  ExtensionVersion?: ExtensionVersionDetails;
}

/**
 * @public
 */
export interface GetGameRequest {
  /**
   * @public
   * <p>The name of the game.</p>
   */
  GameName: string | undefined;
}

/**
 * @public
 */
export interface GetGameResult {
  /**
   * @public
   * <p>The details of the game.</p>
   */
  Game?: GameDetails;
}

/**
 * @public
 */
export interface GetGameConfigurationRequest {
  /**
   * @public
   * <p>The name of the game.</p>
   */
  GameName: string | undefined;

  /**
   * @public
   * <p>The list of sections to return.</p>
   */
  Sections?: string[];
}

/**
 * @public
 */
export interface GetGameConfigurationResult {
  /**
   * @public
   * <p>Details about the game configuration.</p>
   */
  GameConfiguration?: GameConfigurationDetails;
}

/**
 * @public
 */
export interface GetGeneratedCodeJobRequest {
  /**
   * @public
   * <p>The name of the game.</p>
   */
  GameName: string | undefined;

  /**
   * @public
   * <p>The identifier of the snapshot for the code generation job.</p>
   */
  SnapshotId: string | undefined;

  /**
   * @public
   * <p>The identifier of the code generation job.</p>
   */
  JobId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const GeneratedCodeJobState = {
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  PENDING: "PENDING",
} as const;

/**
 * @public
 */
export type GeneratedCodeJobState = (typeof GeneratedCodeJobState)[keyof typeof GeneratedCodeJobState];

/**
 * @public
 * <p>Details about a generated code job.</p>
 */
export interface GeneratedCodeJobDetails {
  /**
   * @public
   * <p>A presigned URL that can be used to download the generated code.</p>
   */
  S3Url?: string;

  /**
   * @public
   * <p>The status of the generated code job</p>
   */
  Status?: GeneratedCodeJobState;

  /**
   * @public
   * <p>The description of the generated code job.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The expiration date and time for the download URL.</p>
   *          <p>
   *       The download URL us guaranteed to be available until at least this time.
   *       </p>
   */
  ExpirationTime?: Date;

  /**
   * @public
   * <p>The identifier for the generated code job.</p>
   */
  GeneratedCodeJobId?: string;
}

/**
 * @public
 */
export interface GetGeneratedCodeJobResult {
  /**
   * @public
   * <p>Details about the generated code job.</p>
   */
  GeneratedCodeJob?: GeneratedCodeJobDetails;
}

/**
 * @public
 */
export interface GetPlayerConnectionStatusRequest {
  /**
   * @public
   * <p>The unique identifier representing a player.</p>
   */
  PlayerId: string | undefined;

  /**
   * @public
   * <p>The name of the game.</p>
   */
  GameName: string | undefined;

  /**
   * @public
   * <p>The name of the stage.</p>
   */
  StageName: string | undefined;
}

/**
 * @public
 */
export interface GetPlayerConnectionStatusResult {
  /**
   * @public
   * <p>The list of connection ids, one for each connection in use by the player.</p>
   */
  Connections?: Connection[];
}

/**
 * @public
 */
export interface GetSnapshotRequest {
  /**
   * @public
   * <p>The name of the game.</p>
   */
  GameName: string | undefined;

  /**
   * @public
   * <p>The identifier of the snapshot.</p>
   */
  SnapshotId: string | undefined;

  /**
   * @public
   * <p>The list of game configuration sections to be described.</p>
   */
  Sections?: string[];
}

/**
 * @public
 */
export interface GetSnapshotResult {
  /**
   * @public
   * <p>Properties that provide details of the snapshot.</p>
   */
  Snapshot?: SnapshotDetails;
}

/**
 * @public
 */
export interface GetStageRequest {
  /**
   * @public
   * <p>The name of the game.</p>
   */
  GameName: string | undefined;

  /**
   * @public
   * <p>The name of the stage.</p>
   */
  StageName: string | undefined;
}

/**
 * @public
 */
export interface GetStageResult {
  /**
   * @public
   * <p>Properties that provide details of the stage.</p>
   */
  Stage?: StageDetails;
}

/**
 * @public
 */
export interface GetStageDeploymentRequest {
  /**
   * @public
   * <p>The name of the game.</p>
   */
  GameName: string | undefined;

  /**
   * @public
   * <p>The name of the stage.</p>
   */
  StageName: string | undefined;

  /**
   * @public
   * <p>
   *       The identifier of the stage deployment.
   *       <code>StartStageDeployment</code> returns the identifier that you use here.
   *       </p>
   */
  DeploymentId?: string;
}

/**
 * @public
 * <p>Properties that provide details of a stage deployment.</p>
 */
export interface StageDeploymentDetails {
  /**
   * @public
   * <p>The identifier of the deployment.</p>
   */
  DeploymentId?: string;

  /**
   * @public
   * <p>The identifier of the snapshot associated with the stage deployment.</p>
   */
  SnapshotId?: string;

  /**
   * @public
   * <p>The type of action of the stage deployment.</p>
   */
  DeploymentAction?: DeploymentAction;

  /**
   * @public
   * <p>The state of the deployment.</p>
   */
  DeploymentState?: DeploymentState;

  /**
   * @public
   * <p>The timestamp of when the stage deployment was created.</p>
   */
  Created?: Date;

  /**
   * @public
   * <p>The timestamp of when the deployment was last updated.</p>
   */
  LastUpdated?: Date;

  /**
   * @public
   * <p>The result of the deployment.</p>
   */
  DeploymentResult?: DeploymentResult;
}

/**
 * @public
 */
export interface GetStageDeploymentResult {
  /**
   * @public
   * <p>Properties that provide details of the stage deployment.</p>
   */
  StageDeployment?: StageDeploymentDetails;
}

/**
 * @public
 * <p>The source used to import configuration sections.</p>
 */
export interface ImportGameConfigurationSource {
  /**
   * @public
   * <p>The JSON string containing the configuration sections.</p>
   */
  File: Uint8Array | undefined;
}

/**
 * @public
 */
export interface ImportGameConfigurationRequest {
  /**
   * @public
   * <p>The name of the game.</p>
   */
  GameName: string | undefined;

  /**
   * @public
   * <p>The source used to import configuration sections.</p>
   */
  ImportSource: ImportGameConfigurationSource | undefined;
}

/**
 * @public
 */
export interface ImportGameConfigurationResult {
  /**
   * @public
   * <p>Details about the game configuration.</p>
   */
  GameConfiguration?: GameConfigurationDetails;
}

/**
 * @public
 */
export interface ListExtensionsRequest {
  /**
   * @public
   * <p>The maximum number of results to return.</p>
   *          <p>
   *       Use this parameter with NextToken to get results as a set of sequential pages.
   *       </p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token that indicates the start of the next sequential page of results.</p>
   *          <p>
   *       Use the token that is returned with a previous call to this operation.
   *       To start at the beginning of the result set, do not specify a value.
   *       </p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListExtensionsResult {
  /**
   * @public
   * <p>The list of extensions.</p>
   */
  Extensions?: ExtensionDetails[];

  /**
   * @public
   * <p>The token that indicates the start of the next sequential page of results.</p>
   *          <p>
   *       Use this value when making the next call to this operation to continue where the last one finished.
   *       </p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListExtensionVersionsRequest {
  /**
   * @public
   * <p>The namespace (qualifier) of the extension.</p>
   */
  Namespace: string | undefined;

  /**
   * @public
   * <p>The name of the extension.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The token that indicates the start of the next sequential page of results.</p>
   *          <p>
   *       Use the token that is returned with a previous call to this operation.
   *       To start at the beginning of the result set, do not specify a value.
   *       </p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return.</p>
   *          <p>
   *       Use this parameter with NextToken to get results as a set of sequential pages.
   *       </p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListExtensionVersionsResult {
  /**
   * @public
   * <p>The list of extension versions.</p>
   */
  ExtensionVersions?: ExtensionVersionDetails[];

  /**
   * @public
   * <p>The token that indicates the start of the next sequential page of results.</p>
   *          <p>
   *       Use this value when making the next call to this operation to continue where the last one finished.
   *       </p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListGamesRequest {
  /**
   * @public
   * <p>The maximum number of results to return.</p>
   *          <p>
   *       Use this parameter with NextToken to get results as a set of sequential pages.
   *       </p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token that indicates the start of the next sequential page of results.</p>
   *          <p>
   *       Use the token that is returned with a previous call to this operation.
   *       To start at the beginning of the result set, do not specify a value.
   *       </p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>The summary of the properties of a game.</p>
 */
export interface GameSummary {
  /**
   * @public
   * <p>The name of the game.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The description of the game.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The state of the game.</p>
   */
  State?: GameState;

  /**
   * @public
   * <p>The tags associated with the game.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface ListGamesResult {
  /**
   * @public
   * <p>The list of games.</p>
   */
  Games?: GameSummary[];

  /**
   * @public
   * <p>The token that indicates the start of the next sequential page of results.</p>
   *          <p>
   *       Use this value when making the next call to this operation to continue where the last one finished.
   *       </p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListGeneratedCodeJobsRequest {
  /**
   * @public
   * <p>The name of the game.</p>
   */
  GameName: string | undefined;

  /**
   * @public
   * <p>The identifier of the snapshot.</p>
   */
  SnapshotId: string | undefined;

  /**
   * @public
   * <p>The maximum number of results to return.</p>
   *          <p>
   *       Use this parameter with NextToken to get results as a set of sequential pages.
   *       </p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token that indicates the start of the next sequential page of results.</p>
   *          <p>
   *       Use the token that is returned with a previous call to this operation.
   *       To start at the beginning of the result set, do not specify a value.
   *       </p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListGeneratedCodeJobsResult {
  /**
   * @public
   * <p>The list of generated code jobs.</p>
   */
  GeneratedCodeJobs?: GeneratedCodeJobDetails[];

  /**
   * @public
   * <p>The token that indicates the start of the next sequential page of results.</p>
   *          <p>
   *       Use this value when making the next call to this operation to continue where the last one finished.
   *       </p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListSnapshotsRequest {
  /**
   * @public
   * <p>The name of the game.</p>
   */
  GameName: string | undefined;

  /**
   * @public
   * <p>The maximum number of results to return.</p>
   *          <p>
   *       Use this parameter with NextToken to get results as a set of sequential pages.
   *       </p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token that indicates the start of the next sequential page of results.</p>
   *          <p>
   *       Use the token that is returned with a previous call to this operation.
   *       To start at the beginning of the result set, do not specify a value.
   *       </p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>The summary of the properties of a snapshot.</p>
 */
export interface SnapshotSummary {
  /**
   * @public
   * <p>The identifier of the snapshot.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The description of the snapshot.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The timestamp of when the snapshot was created.</p>
   */
  Created?: Date;

  /**
   * @public
   * <p>Then timestamp of when the snapshot was last updated.</p>
   */
  LastUpdated?: Date;
}

/**
 * @public
 */
export interface ListSnapshotsResult {
  /**
   * @public
   * <p>
   *       A list of snapshot summaries.
   *       You can use the returned snapshot IDs in the <code>UpdateSnapshot</code> and <code>GetSnapshot</code> operations.
   *       </p>
   */
  Snapshots?: SnapshotSummary[];

  /**
   * @public
   * <p>The token that indicates the start of the next sequential page of results.</p>
   *          <p>
   *       Use this value when making the next call to this operation to continue where the last one finished.
   *       </p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListStageDeploymentsRequest {
  /**
   * @public
   * <p>The name of the game.</p>
   */
  GameName: string | undefined;

  /**
   * @public
   * <p>The name of the stage.</p>
   */
  StageName: string | undefined;

  /**
   * @public
   * <p>The token that indicates the start of the next sequential page of results.</p>
   *          <p>
   *       Use the token that is returned with a previous call to this operation.
   *       To start at the beginning of the result set, do not specify a value.
   *       </p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return.</p>
   *          <p>
   *       Use this parameter with NextToken to get results as a set of sequential pages.
   *       </p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>The summary of the properties of a stage deployment.</p>
 */
export interface StageDeploymentSummary {
  /**
   * @public
   * <p>The identifier of the deployment.</p>
   */
  DeploymentId?: string;

  /**
   * @public
   * <p>The identifier of the snapshot associated with the stage deployment.</p>
   */
  SnapshotId?: string;

  /**
   * @public
   * <p>The type of action of the deployment.</p>
   */
  DeploymentAction?: DeploymentAction;

  /**
   * @public
   * <p>The state of the deployment.</p>
   */
  DeploymentState?: DeploymentState;

  /**
   * @public
   * <p>The timestamp of when the deployment was last updated.</p>
   */
  LastUpdated?: Date;

  /**
   * @public
   * <p>The result of the deployment.</p>
   */
  DeploymentResult?: DeploymentResult;
}

/**
 * @public
 */
export interface ListStageDeploymentsResult {
  /**
   * @public
   * <p>
   *       A list of stage deployment summaries.
   *       You can use the deployment IDs in the <code>UpdateStageDeployment</code> and <code>GetStageDeployment</code> actions.
   *       </p>
   */
  StageDeployments?: StageDeploymentSummary[];

  /**
   * @public
   * <p>The token that indicates the start of the next sequential page of results.</p>
   *          <p>
   *       Use this value when making the next call to this operation to continue where the last one finished.
   *       </p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListStagesRequest {
  /**
   * @public
   * <p>The name of the game.</p>
   */
  GameName: string | undefined;

  /**
   * @public
   * <p>The maximum number of results to return.</p>
   *          <p>
   *       Use this parameter with NextToken to get results as a set of sequential pages.
   *       </p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token that indicates the start of the next sequential page of results.</p>
   *          <p>
   *       Use the token that is returned with a previous call to this operation.
   *       To start at the beginning of the result set, do not specify a value.
   *       </p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>The summary of the properties of a stage.</p>
 */
export interface StageSummary {
  /**
   * @public
   * <p>The name of the stage.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The game key associated with the stage.</p>
   *          <p>
   *       The game key is a unique identifier that the game client uses to connect to the GameSparks backend.
   *       </p>
   */
  GameKey?: string;

  /**
   * @public
   * <p>The description of the stage.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The state of the stage.</p>
   */
  State?: StageState;

  /**
   * @public
   * <p>The tags associated with the stage.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface ListStagesResult {
  /**
   * @public
   * <p>
   *       A list of stage summaries.
   *       You can use the stage names in the <code>UpdateStage</code> and <code>GetStage</code> actions.
   *       </p>
   */
  Stages?: StageSummary[];

  /**
   * @public
   * <p>The token that indicates the start of the next sequential page of results.</p>
   *          <p>
   *       Use this value when making the next call to this operation to continue where the last one finished.
   *       </p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the GameSparks resource.</p>
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResult {
  /**
   * @public
   * <p>The tags associated with the resource.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 * <p>Properties that specify the code generator for a generated code job.</p>
 */
export interface Generator {
  /**
   * @public
   * <p>The platform that will be used to run the generated code.</p>
   */
  TargetPlatform?: string;

  /**
   * @public
   * <p>The programming language for the generated code.</p>
   *          <p>
   *       Not all languages are supported for each platform. For cases where multiple languages are supported,
   *       this parameter specifies the language to be used. If this value is omitted, the default language
   *       for the target platform will be used.
   *       </p>
   */
  Language?: string;

  /**
   * @public
   * <p>The target version of the GameSparks Game SDK.</p>
   */
  GameSdkVersion?: string;
}

/**
 * @public
 */
export interface StartGeneratedCodeJobRequest {
  /**
   * @public
   * <p>The name of the game.</p>
   */
  GameName: string | undefined;

  /**
   * @public
   * <p>The identifier of the snapshot for which to generate code.</p>
   */
  SnapshotId: string | undefined;

  /**
   * @public
   * <p>Properties of the generator to use for the job.</p>
   */
  Generator: Generator | undefined;
}

/**
 * @public
 */
export interface StartGeneratedCodeJobResult {
  /**
   * @public
   * <p>
   *       The identifier of the code generation job.
   *       You can use this identifier in the <code>GetGeneratedCodeJob</code> operation.
   *       </p>
   */
  GeneratedCodeJobId?: string;
}

/**
 * @public
 */
export interface StartStageDeploymentRequest {
  /**
   * @public
   * <p>The name of the game.</p>
   */
  GameName: string | undefined;

  /**
   * @public
   * <p>The name of the stage to deploy the snapshot onto.</p>
   */
  StageName: string | undefined;

  /**
   * @public
   * <p>The identifier of the snapshot to deploy.</p>
   */
  SnapshotId: string | undefined;

  /**
   * @public
   * <p>
   *       A client-defined token.
   *       With an active client token in the request, this action is idempotent.
   *       </p>
   */
  ClientToken?: string;
}

/**
 * @public
 */
export interface StartStageDeploymentResult {
  /**
   * @public
   * <p>Properties that describe the stage deployment.</p>
   */
  StageDeployment?: StageDeploymentDetails;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource to add the tags to.</p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p>The tags to add to the resource.</p>
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceResult {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource to remove the tags from.</p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p>The keys of the tags to remove.</p>
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResult {}

/**
 * @public
 */
export interface UpdateGameRequest {
  /**
   * @public
   * <p>The name of the game.</p>
   */
  GameName: string | undefined;

  /**
   * @public
   * <p>The description of the game.</p>
   */
  Description?: string;
}

/**
 * @public
 */
export interface UpdateGameResult {
  /**
   * @public
   * <p>The details of the game.</p>
   */
  Game?: GameDetails;
}

/**
 * @public
 * @enum
 */
export const Operation = {
  ADD: "ADD",
  REMOVE: "REMOVE",
  REPLACE: "REPLACE",
} as const;

/**
 * @public
 */
export type Operation = (typeof Operation)[keyof typeof Operation];

/**
 * @public
 * <p>A single modification to the configuration section.</p>
 */
export interface SectionModification {
  /**
   * @public
   * <p>The name of the section to be modified.</p>
   */
  Section: string | undefined;

  /**
   * @public
   * <p>The path within the section content to be modified.</p>
   */
  Path: string | undefined;

  /**
   * @public
   * <p>The operation to be performed on a configuration section.</p>
   *          <p>
   *       Content can be added, deleted, or replaced within a section.
   *       </p>
   */
  Operation: Operation | undefined;

  /**
   * @public
   * <p>For add and replace operations, this is the value that will be used.</p>
   *          <p>
   *       This field should be omitted for delete operations.
   *       </p>
   */
  Value?: __DocumentType;
}

/**
 * @public
 */
export interface UpdateGameConfigurationRequest {
  /**
   * @public
   * <p>The name of the game.</p>
   */
  GameName: string | undefined;

  /**
   * @public
   * <p>The list of modifications to make.</p>
   */
  Modifications: SectionModification[] | undefined;
}

/**
 * @public
 */
export interface UpdateGameConfigurationResult {
  /**
   * @public
   * <p>Details about the game configuration.</p>
   */
  GameConfiguration?: GameConfigurationDetails;
}

/**
 * @public
 */
export interface UpdateSnapshotRequest {
  /**
   * @public
   * <p>The name of the game.</p>
   */
  GameName: string | undefined;

  /**
   * @public
   * <p>The identifier of the snapshot.</p>
   */
  SnapshotId: string | undefined;

  /**
   * @public
   * <p>The description of the snapshot.</p>
   */
  Description?: string;
}

/**
 * @public
 */
export interface UpdateSnapshotResult {
  /**
   * @public
   * <p>Properties that provide details of the updated snapshot.</p>
   */
  Snapshot?: SnapshotDetails;
}

/**
 * @public
 */
export interface UpdateStageRequest {
  /**
   * @public
   * <p>The name of the game.</p>
   */
  GameName: string | undefined;

  /**
   * @public
   * <p>The name of the stage.</p>
   */
  StageName: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the role to use for the game snapshots deployed to this stage.</p>
   */
  Role?: string;

  /**
   * @public
   * <p>The description of the stage.</p>
   */
  Description?: string;
}

/**
 * @public
 */
export interface UpdateStageResult {
  /**
   * @public
   * <p>Properties that provide details of the updated stage.</p>
   */
  Stage?: StageDetails;
}
