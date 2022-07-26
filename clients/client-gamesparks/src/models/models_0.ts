// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";
import { DocumentType as __DocumentType } from "@aws-sdk/types";

import { GameSparksServiceException as __BaseException } from "./GameSparksServiceException";

/**
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
 * <p>Details about a WebSocket connection.</p>
 */
export interface Connection {
  /**
   * <p>The identifier used to indicate a specific WebSocket connection.</p>
   */
  Id?: string;

  /**
   * <p>The date and time when the connection was created.</p>
   */
  Created?: Date;
}

export interface CreateGameRequest {
  /**
   * <p>The name of the game.</p>
   */
  GameName: string | undefined;

  /**
   * <p>The description of the game.</p>
   */
  Description?: string;

  /**
   * <p>
   *       A client-defined token.
   *       With an active client token in the request, this action is idempotent.
   *       </p>
   */
  ClientToken?: string;

  /**
   * <p>The list of tags to apply to the game.</p>
   */
  Tags?: Record<string, string>;
}

export enum GameState {
  ACTIVE = "ACTIVE",
  DELETING = "DELETING",
}

/**
 * <p>Details about a game.</p>
 */
export interface GameDetails {
  /**
   * <p>The name of the game.</p>
   */
  Name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of this game.</p>
   */
  Arn?: string;

  /**
   * <p>The description of the game.</p>
   */
  Description?: string;

  /**
   * <p>The date when the game was created.</p>
   */
  Created?: Date;

  /**
   * <p>The date when the game was last modified.</p>
   */
  LastUpdated?: Date;

  /**
   * <p>The state of the game.</p>
   */
  State?: GameState | string;

  /**
   * <p>Determines if the game can be deleted.</p>
   */
  EnableTerminationProtection?: boolean;

  /**
   * <p>The tags associated with the game.</p>
   */
  Tags?: Record<string, string>;
}

export interface CreateGameResult {
  /**
   * <p>Details about the game that was created.</p>
   */
  Game?: GameDetails;
}

/**
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

export interface CreateSnapshotRequest {
  /**
   * <p>The name of the game.</p>
   */
  GameName: string | undefined;

  /**
   * <p>The description of the snapshot.</p>
   */
  Description?: string;
}

/**
 * <p>The configuration section.</p>
 */
export interface Section {
  /**
   * <p>The name of the section.</p>
   */
  Name?: string;

  /**
   * <p>The size, in bytes, of the section contents.</p>
   */
  Size?: number;

  /**
   * <p>The content of a configuration section.</p>
   */
  Attributes?: __DocumentType;
}

/**
 * <p>Properties that provide details of a snapshot.</p>
 */
export interface SnapshotDetails {
  /**
   * <p>The identifier of the snapshot.</p>
   */
  Id?: string;

  /**
   * <p>The description of the snapshot.</p>
   */
  Description?: string;

  /**
   * <p>The sections in the snapshot.</p>
   */
  Sections?: Record<string, Section>;

  /**
   * <p>The timestamp of when the snapshot was created.</p>
   */
  Created?: Date;

  /**
   * <p>The timestamp of when the snapshot was last updated.</p>
   */
  LastUpdated?: Date;
}

export interface CreateSnapshotResult {
  /**
   * <p>Properties that provide details of the created snapshot.</p>
   */
  Snapshot?: SnapshotDetails;
}

/**
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

export interface CreateStageRequest {
  /**
   * <p>The name of the game.</p>
   */
  GameName: string | undefined;

  /**
   * <p>The name of the stage.</p>
   */
  StageName: string | undefined;

  /**
   * <p>
   *       The Amazon Resource Name (ARN) of the role to run the game with.
   *       This role can be a game-defined role or the default role that GameSparks created.
   *       </p>
   */
  Role: string | undefined;

  /**
   * <p>The description of the stage.</p>
   */
  Description?: string;

  /**
   * <p>
   *       A client-defined token.
   *       With an active client token in the request, this action is idempotent.
   *       </p>
   */
  ClientToken?: string;

  /**
   * <p>The list of tags to apply to the stage.</p>
   */
  Tags?: Record<string, string>;
}

export enum StageState {
  ACTIVE = "ACTIVE",
  DELETING = "DELETING",
}

/**
 * <p>Properties that provide details of a stage.</p>
 */
export interface StageDetails {
  /**
   * <p>The name of the stage.</p>
   */
  Name?: string;

  /**
   * <p>The game key associated with the stage.</p>
   *          <p>
   *       The game key is a unique identifier that the game client uses to connect to the GameSparks backend.
   *       </p>
   */
  GameKey?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the stage.</p>
   */
  Arn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the role used to run the game runtimes deployed to the stage.</p>
   */
  Role?: string;

  /**
   * <p>The description of the stage.</p>
   */
  Description?: string;

  /**
   * <p>The timestamp of when the stage was created.</p>
   */
  Created?: Date;

  /**
   * <p>The timestamp of when the stage was last updated.</p>
   */
  LastUpdated?: Date;

  /**
   * <p>The state of the stage.</p>
   */
  State?: StageState | string;

  /**
   * <p>The tags associated with the stage.</p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>The Amazon CloudWatch log group for game runtimes deployed to the stage.</p>
   */
  LogGroup?: string;
}

export interface CreateStageResult {
  /**
   * <p>Properties that describe the stage.</p>
   */
  Stage?: StageDetails;
}

export interface DeleteGameRequest {
  /**
   * <p>The name of the game to delete.</p>
   */
  GameName: string | undefined;
}

export interface DeleteGameResult {}

export interface DeleteStageRequest {
  /**
   * <p>The name of the game.</p>
   */
  GameName: string | undefined;

  /**
   * <p>The name of the stage to delete.</p>
   */
  StageName: string | undefined;
}

export interface DeleteStageResult {}

export enum DeploymentAction {
  DEPLOY = "DEPLOY",
  UNDEPLOY = "UNDEPLOY",
}

export enum ResultCode {
  INVALID_ROLE_FAILURE = "INVALID_ROLE_FAILURE",
  SUCCESS = "SUCCESS",
  UNSPECIFIED_FAILURE = "UNSPECIFIED_FAILURE",
}

/**
 * <p>The result of the deployment.</p>
 */
export interface DeploymentResult {
  /**
   * <p>The type of deployment result.</p>
   */
  ResultCode?: ResultCode | string;

  /**
   * <p>Details about the deployment result.</p>
   */
  Message?: string;
}

export enum DeploymentState {
  COMPLETED = "COMPLETED",
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
  PENDING = "PENDING",
}

export interface DisconnectPlayerRequest {
  /**
   * <p>The unique identifier representing a player.</p>
   */
  PlayerId: string | undefined;

  /**
   * <p>The name of the game.</p>
   */
  GameName: string | undefined;

  /**
   * <p>The name of the stage.</p>
   */
  StageName: string | undefined;
}

export interface DisconnectPlayerResult {
  /**
   * <p>The list of the connection ids that were disconnected.</p>
   */
  DisconnectSuccesses?: string[];

  /**
   * <p>The list of the connection ids that could not be disconnected.</p>
   */
  DisconnectFailures?: string[];
}

export interface ExportSnapshotRequest {
  /**
   * <p>The name of the game.</p>
   */
  GameName: string | undefined;

  /**
   * <p>The identifier of the snapshot to export.</p>
   */
  SnapshotId: string | undefined;
}

export interface ExportSnapshotResult {
  /**
   * <p>The presigned URL for the snapshot data.</p>
   *          <p>
   *       This URL will be available for 10 minutes, and can be used to download the snapshot content.
   *       If the URL expires, a new one can be requested using the same operation.
   *       </p>
   */
  S3Url?: string;
}

/**
 * <p>Details about the extension.</p>
 */
export interface ExtensionDetails {
  /**
   * <p>The namespace (qualifier) of the extension.</p>
   */
  Namespace?: string;

  /**
   * <p>The name of the extension.</p>
   */
  Name?: string;

  /**
   * <p>The description of the extension.</p>
   */
  Description?: string;
}

/**
 * <p>Details about the extension version.</p>
 */
export interface ExtensionVersionDetails {
  /**
   * <p>The namespace (qualifier) of the extension.</p>
   */
  Namespace?: string;

  /**
   * <p>The name of the extension.</p>
   */
  Name?: string;

  /**
   * <p>The model that defines the interface for this extension version.</p>
   */
  Schema?: string;

  /**
   * <p>The version of the extension.</p>
   */
  Version?: string;
}

/**
 * <p>Details about the game configuration.</p>
 *          <p>
 *       The game configuration is organized into named sections, where the schema of each section
 *       is defined by an extension. The schema for these sections can be retrieved using
 *       the <code>GetExtensionVersion</code> operation.
 *       </p>
 */
export interface GameConfigurationDetails {
  /**
   * <p>Configuration data, organized by section name.</p>
   */
  Sections?: Record<string, Section>;

  /**
   * <p>The date when the game was created.</p>
   */
  Created?: Date;

  /**
   * <p>The date when the game was last modified.</p>
   */
  LastUpdated?: Date;
}

export interface GetExtensionRequest {
  /**
   * <p>The namespace (qualifier) of the extension.</p>
   */
  Namespace: string | undefined;

  /**
   * <p>The name of the extension.</p>
   */
  Name: string | undefined;
}

export interface GetExtensionResult {
  /**
   * <p>Details about the extension.</p>
   */
  Extension?: ExtensionDetails;
}

export interface GetExtensionVersionRequest {
  /**
   * <p>The namespace (qualifier) of the extension.</p>
   */
  Namespace: string | undefined;

  /**
   * <p>The name of the extension.</p>
   */
  Name: string | undefined;

  /**
   * <p>The version of the extension.</p>
   */
  ExtensionVersion: string | undefined;
}

export interface GetExtensionVersionResult {
  /**
   * <p>The version of the extension.</p>
   */
  ExtensionVersion?: ExtensionVersionDetails;
}

export interface GetGameRequest {
  /**
   * <p>The name of the game.</p>
   */
  GameName: string | undefined;
}

export interface GetGameResult {
  /**
   * <p>The details of the game.</p>
   */
  Game?: GameDetails;
}

export interface GetGameConfigurationRequest {
  /**
   * <p>The name of the game.</p>
   */
  GameName: string | undefined;

  /**
   * <p>The list of sections to return.</p>
   */
  Sections?: string[];
}

export interface GetGameConfigurationResult {
  /**
   * <p>Details about the game configuration.</p>
   */
  GameConfiguration?: GameConfigurationDetails;
}

export interface GetGeneratedCodeJobRequest {
  /**
   * <p>The name of the game.</p>
   */
  GameName: string | undefined;

  /**
   * <p>The identifier of the snapshot for the code generation job.</p>
   */
  SnapshotId: string | undefined;

  /**
   * <p>The identifier of the code generation job.</p>
   */
  JobId: string | undefined;
}

export enum GeneratedCodeJobState {
  COMPLETED = "COMPLETED",
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
  PENDING = "PENDING",
}

/**
 * <p>Details about a generated code job.</p>
 */
export interface GeneratedCodeJobDetails {
  /**
   * <p>A presigned URL that can be used to download the generated code.</p>
   */
  S3Url?: string;

  /**
   * <p>The status of the generated code job</p>
   */
  Status?: GeneratedCodeJobState | string;

  /**
   * <p>The description of the generated code job.</p>
   */
  Description?: string;

  /**
   * <p>The expiration date and time for the download URL.</p>
   *          <p>
   *       The download URL us guaranteed to be available until at least this time.
   *       </p>
   */
  ExpirationTime?: Date;

  /**
   * <p>The identifier for the generated code job.</p>
   */
  GeneratedCodeJobId?: string;
}

export interface GetGeneratedCodeJobResult {
  /**
   * <p>Details about the generated code job.</p>
   */
  GeneratedCodeJob?: GeneratedCodeJobDetails;
}

export interface GetPlayerConnectionStatusRequest {
  /**
   * <p>The unique identifier representing a player.</p>
   */
  PlayerId: string | undefined;

  /**
   * <p>The name of the game.</p>
   */
  GameName: string | undefined;

  /**
   * <p>The name of the stage.</p>
   */
  StageName: string | undefined;
}

export interface GetPlayerConnectionStatusResult {
  /**
   * <p>The list of connection ids, one for each connection in use by the player.</p>
   */
  Connections?: Connection[];
}

export interface GetSnapshotRequest {
  /**
   * <p>The name of the game.</p>
   */
  GameName: string | undefined;

  /**
   * <p>The identifier of the snapshot.</p>
   */
  SnapshotId: string | undefined;

  /**
   * <p>The list of game configuration sections to be described.</p>
   */
  Sections?: string[];
}

export interface GetSnapshotResult {
  /**
   * <p>Properties that provide details of the snapshot.</p>
   */
  Snapshot?: SnapshotDetails;
}

export interface GetStageRequest {
  /**
   * <p>The name of the game.</p>
   */
  GameName: string | undefined;

  /**
   * <p>The name of the stage.</p>
   */
  StageName: string | undefined;
}

export interface GetStageResult {
  /**
   * <p>Properties that provide details of the stage.</p>
   */
  Stage?: StageDetails;
}

export interface GetStageDeploymentRequest {
  /**
   * <p>The name of the game.</p>
   */
  GameName: string | undefined;

  /**
   * <p>The name of the stage.</p>
   */
  StageName: string | undefined;

  /**
   * <p>
   *       The identifier of the stage deployment.
   *       <code>StartStageDeployment</code> returns the identifier that you use here.
   *       </p>
   */
  DeploymentId?: string;
}

/**
 * <p>Properties that provide details of a stage deployment.</p>
 */
export interface StageDeploymentDetails {
  /**
   * <p>The identifier of the deployment.</p>
   */
  DeploymentId?: string;

  /**
   * <p>The identifier of the snapshot associated with the stage deployment.</p>
   */
  SnapshotId?: string;

  /**
   * <p>The type of action of the stage deployment.</p>
   */
  DeploymentAction?: DeploymentAction | string;

  /**
   * <p>The state of the deployment.</p>
   */
  DeploymentState?: DeploymentState | string;

  /**
   * <p>The timestamp of when the stage deployment was created.</p>
   */
  Created?: Date;

  /**
   * <p>The timestamp of when the deployment was last updated.</p>
   */
  LastUpdated?: Date;

  /**
   * <p>The result of the deployment.</p>
   */
  DeploymentResult?: DeploymentResult;
}

export interface GetStageDeploymentResult {
  /**
   * <p>Properties that provide details of the stage deployment.</p>
   */
  StageDeployment?: StageDeploymentDetails;
}

/**
 * <p>The source used to import configuration sections.</p>
 */
export interface ImportGameConfigurationSource {
  /**
   * <p>The JSON string containing the configuration sections.</p>
   */
  File: Uint8Array | undefined;
}

export interface ImportGameConfigurationRequest {
  /**
   * <p>The name of the game.</p>
   */
  GameName: string | undefined;

  /**
   * <p>The source used to import configuration sections.</p>
   */
  ImportSource: ImportGameConfigurationSource | undefined;
}

export interface ImportGameConfigurationResult {
  /**
   * <p>Details about the game configuration.</p>
   */
  GameConfiguration?: GameConfigurationDetails;
}

export interface ListExtensionsRequest {
  /**
   * <p>The maximum number of results to return.</p>
   *          <p>
   *       Use this parameter with NextToken to get results as a set of sequential pages.
   *       </p>
   */
  MaxResults?: number;

  /**
   * <p>The token that indicates the start of the next sequential page of results.</p>
   *          <p>
   *       Use the token that is returned with a previous call to this operation.
   *       To start at the beginning of the result set, do not specify a value.
   *       </p>
   */
  NextToken?: string;
}

export interface ListExtensionsResult {
  /**
   * <p>The list of extensions.</p>
   */
  Extensions?: ExtensionDetails[];

  /**
   * <p>The token that indicates the start of the next sequential page of results.</p>
   *          <p>
   *       Use this value when making the next call to this operation to continue where the last one finished.
   *       </p>
   */
  NextToken?: string;
}

export interface ListExtensionVersionsRequest {
  /**
   * <p>The namespace (qualifier) of the extension.</p>
   */
  Namespace: string | undefined;

  /**
   * <p>The name of the extension.</p>
   */
  Name: string | undefined;

  /**
   * <p>The token that indicates the start of the next sequential page of results.</p>
   *          <p>
   *       Use the token that is returned with a previous call to this operation.
   *       To start at the beginning of the result set, do not specify a value.
   *       </p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return.</p>
   *          <p>
   *       Use this parameter with NextToken to get results as a set of sequential pages.
   *       </p>
   */
  MaxResults?: number;
}

export interface ListExtensionVersionsResult {
  /**
   * <p>The list of extension versions.</p>
   */
  ExtensionVersions?: ExtensionVersionDetails[];

  /**
   * <p>The token that indicates the start of the next sequential page of results.</p>
   *          <p>
   *       Use this value when making the next call to this operation to continue where the last one finished.
   *       </p>
   */
  NextToken?: string;
}

export interface ListGamesRequest {
  /**
   * <p>The maximum number of results to return.</p>
   *          <p>
   *       Use this parameter with NextToken to get results as a set of sequential pages.
   *       </p>
   */
  MaxResults?: number;

  /**
   * <p>The token that indicates the start of the next sequential page of results.</p>
   *          <p>
   *       Use the token that is returned with a previous call to this operation.
   *       To start at the beginning of the result set, do not specify a value.
   *       </p>
   */
  NextToken?: string;
}

/**
 * <p>The summary of the properties of a game.</p>
 */
export interface GameSummary {
  /**
   * <p>The name of the game.</p>
   */
  Name?: string;

  /**
   * <p>The description of the game.</p>
   */
  Description?: string;

  /**
   * <p>The state of the game.</p>
   */
  State?: GameState | string;

  /**
   * <p>The tags associated with the game.</p>
   */
  Tags?: Record<string, string>;
}

export interface ListGamesResult {
  /**
   * <p>The list of games.</p>
   */
  Games?: GameSummary[];

  /**
   * <p>The token that indicates the start of the next sequential page of results.</p>
   *          <p>
   *       Use this value when making the next call to this operation to continue where the last one finished.
   *       </p>
   */
  NextToken?: string;
}

export interface ListGeneratedCodeJobsRequest {
  /**
   * <p>The name of the game.</p>
   */
  GameName: string | undefined;

  /**
   * <p>The identifier of the snapshot.</p>
   */
  SnapshotId: string | undefined;

  /**
   * <p>The maximum number of results to return.</p>
   *          <p>
   *       Use this parameter with NextToken to get results as a set of sequential pages.
   *       </p>
   */
  MaxResults?: number;

  /**
   * <p>The token that indicates the start of the next sequential page of results.</p>
   *          <p>
   *       Use the token that is returned with a previous call to this operation.
   *       To start at the beginning of the result set, do not specify a value.
   *       </p>
   */
  NextToken?: string;
}

export interface ListGeneratedCodeJobsResult {
  /**
   * <p>The list of generated code jobs.</p>
   */
  GeneratedCodeJobs?: GeneratedCodeJobDetails[];

  /**
   * <p>The token that indicates the start of the next sequential page of results.</p>
   *          <p>
   *       Use this value when making the next call to this operation to continue where the last one finished.
   *       </p>
   */
  NextToken?: string;
}

export interface ListSnapshotsRequest {
  /**
   * <p>The name of the game.</p>
   */
  GameName: string | undefined;

  /**
   * <p>The maximum number of results to return.</p>
   *          <p>
   *       Use this parameter with NextToken to get results as a set of sequential pages.
   *       </p>
   */
  MaxResults?: number;

  /**
   * <p>The token that indicates the start of the next sequential page of results.</p>
   *          <p>
   *       Use the token that is returned with a previous call to this operation.
   *       To start at the beginning of the result set, do not specify a value.
   *       </p>
   */
  NextToken?: string;
}

/**
 * <p>The summary of the properties of a snapshot.</p>
 */
export interface SnapshotSummary {
  /**
   * <p>The identifier of the snapshot.</p>
   */
  Id?: string;

  /**
   * <p>The description of the snapshot.</p>
   */
  Description?: string;

  /**
   * <p>The timestamp of when the snapshot was created.</p>
   */
  Created?: Date;

  /**
   * <p>Then timestamp of when the snapshot was last updated.</p>
   */
  LastUpdated?: Date;
}

export interface ListSnapshotsResult {
  /**
   * <p>
   *       A list of snapshot summaries.
   *       You can use the returned snapshot IDs in the <code>UpdateSnapshot</code> and <code>GetSnapshot</code> operations.
   *       </p>
   */
  Snapshots?: SnapshotSummary[];

  /**
   * <p>The token that indicates the start of the next sequential page of results.</p>
   *          <p>
   *       Use this value when making the next call to this operation to continue where the last one finished.
   *       </p>
   */
  NextToken?: string;
}

export interface ListStageDeploymentsRequest {
  /**
   * <p>The name of the game.</p>
   */
  GameName: string | undefined;

  /**
   * <p>The name of the stage.</p>
   */
  StageName: string | undefined;

  /**
   * <p>The token that indicates the start of the next sequential page of results.</p>
   *          <p>
   *       Use the token that is returned with a previous call to this operation.
   *       To start at the beginning of the result set, do not specify a value.
   *       </p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return.</p>
   *          <p>
   *       Use this parameter with NextToken to get results as a set of sequential pages.
   *       </p>
   */
  MaxResults?: number;
}

/**
 * <p>The summary of the properties of a stage deployment.</p>
 */
export interface StageDeploymentSummary {
  /**
   * <p>The identifier of the deployment.</p>
   */
  DeploymentId?: string;

  /**
   * <p>The identifier of the snapshot associated with the stage deployment.</p>
   */
  SnapshotId?: string;

  /**
   * <p>The type of action of the deployment.</p>
   */
  DeploymentAction?: DeploymentAction | string;

  /**
   * <p>The state of the deployment.</p>
   */
  DeploymentState?: DeploymentState | string;

  /**
   * <p>The timestamp of when the deployment was last updated.</p>
   */
  LastUpdated?: Date;

  /**
   * <p>The result of the deployment.</p>
   */
  DeploymentResult?: DeploymentResult;
}

export interface ListStageDeploymentsResult {
  /**
   * <p>
   *       A list of stage deployment summaries.
   *       You can use the deployment IDs in the <code>UpdateStageDeployment</code> and <code>GetStageDeployment</code> actions.
   *       </p>
   */
  StageDeployments?: StageDeploymentSummary[];

  /**
   * <p>The token that indicates the start of the next sequential page of results.</p>
   *          <p>
   *       Use this value when making the next call to this operation to continue where the last one finished.
   *       </p>
   */
  NextToken?: string;
}

export interface ListStagesRequest {
  /**
   * <p>The name of the game.</p>
   */
  GameName: string | undefined;

  /**
   * <p>The maximum number of results to return.</p>
   *          <p>
   *       Use this parameter with NextToken to get results as a set of sequential pages.
   *       </p>
   */
  MaxResults?: number;

  /**
   * <p>The token that indicates the start of the next sequential page of results.</p>
   *          <p>
   *       Use the token that is returned with a previous call to this operation.
   *       To start at the beginning of the result set, do not specify a value.
   *       </p>
   */
  NextToken?: string;
}

/**
 * <p>The summary of the properties of a stage.</p>
 */
export interface StageSummary {
  /**
   * <p>The name of the stage.</p>
   */
  Name?: string;

  /**
   * <p>The game key associated with the stage.</p>
   *          <p>
   *       The game key is a unique identifier that the game client uses to connect to the GameSparks backend.
   *       </p>
   */
  GameKey?: string;

  /**
   * <p>The description of the stage.</p>
   */
  Description?: string;

  /**
   * <p>The state of the stage.</p>
   */
  State?: StageState | string;

  /**
   * <p>The tags associated with the stage.</p>
   */
  Tags?: Record<string, string>;
}

export interface ListStagesResult {
  /**
   * <p>
   *       A list of stage summaries.
   *       You can use the stage names in the <code>UpdateStage</code> and <code>GetStage</code> actions.
   *       </p>
   */
  Stages?: StageSummary[];

  /**
   * <p>The token that indicates the start of the next sequential page of results.</p>
   *          <p>
   *       Use this value when making the next call to this operation to continue where the last one finished.
   *       </p>
   */
  NextToken?: string;
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the GameSparks resource.</p>
   */
  ResourceArn: string | undefined;
}

export interface ListTagsForResourceResult {
  /**
   * <p>The tags associated with the resource.</p>
   */
  tags?: Record<string, string>;
}

/**
 * <p>Properties that specify the code generator for a generated code job.</p>
 */
export interface Generator {
  /**
   * <p>The platform that will be used to run the generated code.</p>
   */
  TargetPlatform?: string;

  /**
   * <p>The programming language for the generated code.</p>
   *          <p>
   *       Not all languages are supported for each platform. For cases where multiple languages are supported,
   *       this parameter specifies the language to be used. If this value is omitted, the default language
   *       for the target platform will be used.
   *       </p>
   */
  Language?: string;

  /**
   * <p>The target version of the GameSparks Game SDK.</p>
   */
  GameSdkVersion?: string;
}

export interface StartGeneratedCodeJobRequest {
  /**
   * <p>The name of the game.</p>
   */
  GameName: string | undefined;

  /**
   * <p>The identifier of the snapshot for which to generate code.</p>
   */
  SnapshotId: string | undefined;

  /**
   * <p>Properties of the generator to use for the job.</p>
   */
  Generator: Generator | undefined;
}

export interface StartGeneratedCodeJobResult {
  /**
   * <p>
   *       The identifier of the code generation job.
   *       You can use this identifier in the <code>GetGeneratedCodeJob</code> operation.
   *       </p>
   */
  GeneratedCodeJobId?: string;
}

export interface StartStageDeploymentRequest {
  /**
   * <p>The name of the game.</p>
   */
  GameName: string | undefined;

  /**
   * <p>The name of the stage to deploy the snapshot onto.</p>
   */
  StageName: string | undefined;

  /**
   * <p>The identifier of the snapshot to deploy.</p>
   */
  SnapshotId: string | undefined;

  /**
   * <p>
   *       A client-defined token.
   *       With an active client token in the request, this action is idempotent.
   *       </p>
   */
  ClientToken?: string;
}

export interface StartStageDeploymentResult {
  /**
   * <p>Properties that describe the stage deployment.</p>
   */
  StageDeployment?: StageDeploymentDetails;
}

export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource to add the tags to.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The tags to add to the resource.</p>
   */
  tags: Record<string, string> | undefined;
}

export interface TagResourceResult {}

export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource to remove the tags from.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The keys of the tags to remove.</p>
   */
  tagKeys: string[] | undefined;
}

export interface UntagResourceResult {}

export interface UpdateGameRequest {
  /**
   * <p>The name of the game.</p>
   */
  GameName: string | undefined;

  /**
   * <p>The description of the game.</p>
   */
  Description?: string;
}

export interface UpdateGameResult {
  /**
   * <p>The details of the game.</p>
   */
  Game?: GameDetails;
}

export enum Operation {
  ADD = "ADD",
  REMOVE = "REMOVE",
  REPLACE = "REPLACE",
}

/**
 * <p>A single modification to the configuration section.</p>
 */
export interface SectionModification {
  /**
   * <p>The name of the section to be modified.</p>
   */
  Section: string | undefined;

  /**
   * <p>The path within the section content to be modified.</p>
   */
  Path: string | undefined;

  /**
   * <p>The operation to be performed on a configuration section.</p>
   *          <p>
   *       Content can be added, deleted, or replaced within a section.
   *       </p>
   */
  Operation: Operation | string | undefined;

  /**
   * <p>For add and replace operations, this is the value that will be used.</p>
   *          <p>
   *       This field should be omitted for delete operations.
   *       </p>
   */
  Value?: __DocumentType;
}

export interface UpdateGameConfigurationRequest {
  /**
   * <p>The name of the game.</p>
   */
  GameName: string | undefined;

  /**
   * <p>The list of modifications to make.</p>
   */
  Modifications: SectionModification[] | undefined;
}

export interface UpdateGameConfigurationResult {
  /**
   * <p>Details about the game configuration.</p>
   */
  GameConfiguration?: GameConfigurationDetails;
}

export interface UpdateSnapshotRequest {
  /**
   * <p>The name of the game.</p>
   */
  GameName: string | undefined;

  /**
   * <p>The identifier of the snapshot.</p>
   */
  SnapshotId: string | undefined;

  /**
   * <p>The description of the snapshot.</p>
   */
  Description?: string;
}

export interface UpdateSnapshotResult {
  /**
   * <p>Properties that provide details of the updated snapshot.</p>
   */
  Snapshot?: SnapshotDetails;
}

export interface UpdateStageRequest {
  /**
   * <p>The name of the game.</p>
   */
  GameName: string | undefined;

  /**
   * <p>The name of the stage.</p>
   */
  StageName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the role to use for the game snapshots deployed to this stage.</p>
   */
  Role?: string;

  /**
   * <p>The description of the stage.</p>
   */
  Description?: string;
}

export interface UpdateStageResult {
  /**
   * <p>Properties that provide details of the updated stage.</p>
   */
  Stage?: StageDetails;
}

/**
 * @internal
 */
export const ConnectionFilterSensitiveLog = (obj: Connection): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateGameRequestFilterSensitiveLog = (obj: CreateGameRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GameDetailsFilterSensitiveLog = (obj: GameDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateGameResultFilterSensitiveLog = (obj: CreateGameResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateSnapshotRequestFilterSensitiveLog = (obj: CreateSnapshotRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SectionFilterSensitiveLog = (obj: Section): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SnapshotDetailsFilterSensitiveLog = (obj: SnapshotDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateSnapshotResultFilterSensitiveLog = (obj: CreateSnapshotResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateStageRequestFilterSensitiveLog = (obj: CreateStageRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StageDetailsFilterSensitiveLog = (obj: StageDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateStageResultFilterSensitiveLog = (obj: CreateStageResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteGameRequestFilterSensitiveLog = (obj: DeleteGameRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteGameResultFilterSensitiveLog = (obj: DeleteGameResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteStageRequestFilterSensitiveLog = (obj: DeleteStageRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteStageResultFilterSensitiveLog = (obj: DeleteStageResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeploymentResultFilterSensitiveLog = (obj: DeploymentResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisconnectPlayerRequestFilterSensitiveLog = (obj: DisconnectPlayerRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisconnectPlayerResultFilterSensitiveLog = (obj: DisconnectPlayerResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExportSnapshotRequestFilterSensitiveLog = (obj: ExportSnapshotRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExportSnapshotResultFilterSensitiveLog = (obj: ExportSnapshotResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExtensionDetailsFilterSensitiveLog = (obj: ExtensionDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExtensionVersionDetailsFilterSensitiveLog = (obj: ExtensionVersionDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GameConfigurationDetailsFilterSensitiveLog = (obj: GameConfigurationDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetExtensionRequestFilterSensitiveLog = (obj: GetExtensionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetExtensionResultFilterSensitiveLog = (obj: GetExtensionResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetExtensionVersionRequestFilterSensitiveLog = (obj: GetExtensionVersionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetExtensionVersionResultFilterSensitiveLog = (obj: GetExtensionVersionResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetGameRequestFilterSensitiveLog = (obj: GetGameRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetGameResultFilterSensitiveLog = (obj: GetGameResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetGameConfigurationRequestFilterSensitiveLog = (obj: GetGameConfigurationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetGameConfigurationResultFilterSensitiveLog = (obj: GetGameConfigurationResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetGeneratedCodeJobRequestFilterSensitiveLog = (obj: GetGeneratedCodeJobRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GeneratedCodeJobDetailsFilterSensitiveLog = (obj: GeneratedCodeJobDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetGeneratedCodeJobResultFilterSensitiveLog = (obj: GetGeneratedCodeJobResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetPlayerConnectionStatusRequestFilterSensitiveLog = (obj: GetPlayerConnectionStatusRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetPlayerConnectionStatusResultFilterSensitiveLog = (obj: GetPlayerConnectionStatusResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetSnapshotRequestFilterSensitiveLog = (obj: GetSnapshotRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetSnapshotResultFilterSensitiveLog = (obj: GetSnapshotResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetStageRequestFilterSensitiveLog = (obj: GetStageRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetStageResultFilterSensitiveLog = (obj: GetStageResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetStageDeploymentRequestFilterSensitiveLog = (obj: GetStageDeploymentRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StageDeploymentDetailsFilterSensitiveLog = (obj: StageDeploymentDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetStageDeploymentResultFilterSensitiveLog = (obj: GetStageDeploymentResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ImportGameConfigurationSourceFilterSensitiveLog = (obj: ImportGameConfigurationSource): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ImportGameConfigurationRequestFilterSensitiveLog = (obj: ImportGameConfigurationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ImportGameConfigurationResultFilterSensitiveLog = (obj: ImportGameConfigurationResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListExtensionsRequestFilterSensitiveLog = (obj: ListExtensionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListExtensionsResultFilterSensitiveLog = (obj: ListExtensionsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListExtensionVersionsRequestFilterSensitiveLog = (obj: ListExtensionVersionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListExtensionVersionsResultFilterSensitiveLog = (obj: ListExtensionVersionsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListGamesRequestFilterSensitiveLog = (obj: ListGamesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GameSummaryFilterSensitiveLog = (obj: GameSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListGamesResultFilterSensitiveLog = (obj: ListGamesResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListGeneratedCodeJobsRequestFilterSensitiveLog = (obj: ListGeneratedCodeJobsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListGeneratedCodeJobsResultFilterSensitiveLog = (obj: ListGeneratedCodeJobsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListSnapshotsRequestFilterSensitiveLog = (obj: ListSnapshotsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SnapshotSummaryFilterSensitiveLog = (obj: SnapshotSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListSnapshotsResultFilterSensitiveLog = (obj: ListSnapshotsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListStageDeploymentsRequestFilterSensitiveLog = (obj: ListStageDeploymentsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StageDeploymentSummaryFilterSensitiveLog = (obj: StageDeploymentSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListStageDeploymentsResultFilterSensitiveLog = (obj: ListStageDeploymentsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListStagesRequestFilterSensitiveLog = (obj: ListStagesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StageSummaryFilterSensitiveLog = (obj: StageSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListStagesResultFilterSensitiveLog = (obj: ListStagesResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceRequestFilterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceResultFilterSensitiveLog = (obj: ListTagsForResourceResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GeneratorFilterSensitiveLog = (obj: Generator): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartGeneratedCodeJobRequestFilterSensitiveLog = (obj: StartGeneratedCodeJobRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartGeneratedCodeJobResultFilterSensitiveLog = (obj: StartGeneratedCodeJobResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartStageDeploymentRequestFilterSensitiveLog = (obj: StartStageDeploymentRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartStageDeploymentResultFilterSensitiveLog = (obj: StartStageDeploymentResult): any => ({
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
export const TagResourceResultFilterSensitiveLog = (obj: TagResourceResult): any => ({
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
export const UntagResourceResultFilterSensitiveLog = (obj: UntagResourceResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateGameRequestFilterSensitiveLog = (obj: UpdateGameRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateGameResultFilterSensitiveLog = (obj: UpdateGameResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SectionModificationFilterSensitiveLog = (obj: SectionModification): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateGameConfigurationRequestFilterSensitiveLog = (obj: UpdateGameConfigurationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateGameConfigurationResultFilterSensitiveLog = (obj: UpdateGameConfigurationResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateSnapshotRequestFilterSensitiveLog = (obj: UpdateSnapshotRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateSnapshotResultFilterSensitiveLog = (obj: UpdateSnapshotResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateStageRequestFilterSensitiveLog = (obj: UpdateStageRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateStageResultFilterSensitiveLog = (obj: UpdateStageResult): any => ({
  ...obj,
});
