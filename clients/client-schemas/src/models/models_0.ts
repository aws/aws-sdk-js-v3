// smithy-typescript generated code
import {
  ExceptionOptionType as __ExceptionOptionType,
  LazyJsonString as __LazyJsonString,
} from "@smithy/smithy-client";

import { SchemasServiceException as __BaseException } from "./SchemasServiceException";

/**
 * @public
 * @enum
 */
export const DiscovererState = {
  STARTED: "STARTED",
  STOPPED: "STOPPED",
} as const;

/**
 * @public
 */
export type DiscovererState = (typeof DiscovererState)[keyof typeof DiscovererState];

/**
 * @public
 */
export interface DiscovererSummary {
  /**
   * <p>The ARN of the discoverer.</p>
   * @public
   */
  DiscovererArn?: string | undefined;

  /**
   * <p>The ID of the discoverer.</p>
   * @public
   */
  DiscovererId?: string | undefined;

  /**
   * <p>The ARN of the event bus.</p>
   * @public
   */
  SourceArn?: string | undefined;

  /**
   * <p>The state of the discoverer.</p>
   * @public
   */
  State?: DiscovererState | undefined;

  /**
   * <p>The Status if the discoverer will discover schemas from events sent from another account.</p>
   * @public
   */
  CrossAccount?: boolean | undefined;

  /**
   * <p>Tags associated with the resource.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface RegistrySummary {
  /**
   * <p>The ARN of the registry.</p>
   * @public
   */
  RegistryArn?: string | undefined;

  /**
   * <p>The name of the registry.</p>
   * @public
   */
  RegistryName?: string | undefined;

  /**
   * <p>Tags associated with the registry.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * <p>A summary of schema details.</p>
 * @public
 */
export interface SchemaSummary {
  /**
   * <p>The date and time that schema was modified.</p>
   * @public
   */
  LastModified?: Date | undefined;

  /**
   * <p>The ARN of the schema.</p>
   * @public
   */
  SchemaArn?: string | undefined;

  /**
   * <p>The name of the schema.</p>
   * @public
   */
  SchemaName?: string | undefined;

  /**
   * <p>Tags associated with the schema.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>The number of versions available for the schema.</p>
   * @public
   */
  VersionCount?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const Type = {
  JSONSchemaDraft4: "JSONSchemaDraft4",
  OpenApi3: "OpenApi3",
} as const;

/**
 * @public
 */
export type Type = (typeof Type)[keyof typeof Type];

/**
 * @public
 */
export interface SchemaVersionSummary {
  /**
   * <p>The ARN of the schema version.</p>
   * @public
   */
  SchemaArn?: string | undefined;

  /**
   * <p>The name of the schema.</p>
   * @public
   */
  SchemaName?: string | undefined;

  /**
   * <p>The version number of the schema.</p>
   * @public
   */
  SchemaVersion?: string | undefined;

  /**
   * <p>The type of schema.</p>
   * @public
   */
  Type?: Type | undefined;
}

/**
 * @public
 */
export interface SearchSchemaVersionSummary {
  /**
   * <p>The date the schema version was created.</p>
   * @public
   */
  CreatedDate?: Date | undefined;

  /**
   * <p>The version number of the schema</p>
   * @public
   */
  SchemaVersion?: string | undefined;

  /**
   * <p>The type of schema.</p>
   * @public
   */
  Type?: Type | undefined;
}

/**
 * @public
 */
export interface SearchSchemaSummary {
  /**
   * <p>The name of the registry.</p>
   * @public
   */
  RegistryName?: string | undefined;

  /**
   * <p>The ARN of the schema.</p>
   * @public
   */
  SchemaArn?: string | undefined;

  /**
   * <p>The name of the schema.</p>
   * @public
   */
  SchemaName?: string | undefined;

  /**
   * <p>An array of schema version summaries.</p>
   * @public
   */
  SchemaVersions?: SearchSchemaVersionSummary[] | undefined;
}

/**
 * @public
 */
export class BadRequestException extends __BaseException {
  readonly name: "BadRequestException" = "BadRequestException";
  readonly $fault: "client" = "client";
  /**
   * <p>The error code.</p>
   * @public
   */
  Code: string | undefined;

  /**
   * <p>The message string of the error output.</p>
   * @public
   */
  Message: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BadRequestException, __BaseException>) {
    super({
      name: "BadRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BadRequestException.prototype);
    this.Code = opts.Code;
    this.Message = opts.Message;
  }
}

/**
 * @public
 * @enum
 */
export const CodeGenerationStatus = {
  CREATE_COMPLETE: "CREATE_COMPLETE",
  CREATE_FAILED: "CREATE_FAILED",
  CREATE_IN_PROGRESS: "CREATE_IN_PROGRESS",
} as const;

/**
 * @public
 */
export type CodeGenerationStatus = (typeof CodeGenerationStatus)[keyof typeof CodeGenerationStatus];

/**
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * <p>The error code.</p>
   * @public
   */
  Code: string | undefined;

  /**
   * <p>The message string of the error output.</p>
   * @public
   */
  Message: string | undefined;
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
    this.Code = opts.Code;
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface CreateDiscovererRequest {
  /**
   * <p>A description for the discoverer.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The ARN of the event bus.</p>
   * @public
   */
  SourceArn: string | undefined;

  /**
   * <p>Support discovery of schemas in events sent to the bus from another account. (default: true).</p>
   * @public
   */
  CrossAccount?: boolean | undefined;

  /**
   * <p>Tags associated with the resource.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateDiscovererResponse {
  /**
   * <p>The description of the discoverer.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The ARN of the discoverer.</p>
   * @public
   */
  DiscovererArn?: string | undefined;

  /**
   * <p>The ID of the discoverer.</p>
   * @public
   */
  DiscovererId?: string | undefined;

  /**
   * <p>The ARN of the event bus.</p>
   * @public
   */
  SourceArn?: string | undefined;

  /**
   * <p>The state of the discoverer.</p>
   * @public
   */
  State?: DiscovererState | undefined;

  /**
   * <p>The Status if the discoverer will discover schemas from events sent from another account.</p>
   * @public
   */
  CrossAccount?: boolean | undefined;

  /**
   * <p>Tags associated with the resource.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export class ForbiddenException extends __BaseException {
  readonly name: "ForbiddenException" = "ForbiddenException";
  readonly $fault: "client" = "client";
  /**
   * <p>The error code.</p>
   * @public
   */
  Code: string | undefined;

  /**
   * <p>The message string of the error output.</p>
   * @public
   */
  Message: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ForbiddenException, __BaseException>) {
    super({
      name: "ForbiddenException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ForbiddenException.prototype);
    this.Code = opts.Code;
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export class InternalServerErrorException extends __BaseException {
  readonly name: "InternalServerErrorException" = "InternalServerErrorException";
  readonly $fault: "server" = "server";
  /**
   * <p>The error code.</p>
   * @public
   */
  Code: string | undefined;

  /**
   * <p>The message string of the error output.</p>
   * @public
   */
  Message: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerErrorException, __BaseException>) {
    super({
      name: "InternalServerErrorException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerErrorException.prototype);
    this.Code = opts.Code;
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export class ServiceUnavailableException extends __BaseException {
  readonly name: "ServiceUnavailableException" = "ServiceUnavailableException";
  readonly $fault: "server" = "server";
  /**
   * <p>The error code.</p>
   * @public
   */
  Code: string | undefined;

  /**
   * <p>The message string of the error output.</p>
   * @public
   */
  Message: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceUnavailableException, __BaseException>) {
    super({
      name: "ServiceUnavailableException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceUnavailableException.prototype);
    this.Code = opts.Code;
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export class UnauthorizedException extends __BaseException {
  readonly name: "UnauthorizedException" = "UnauthorizedException";
  readonly $fault: "client" = "client";
  /**
   * <p>The error code.</p>
   * @public
   */
  Code: string | undefined;

  /**
   * <p>The message string of the error output.</p>
   * @public
   */
  Message: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnauthorizedException, __BaseException>) {
    super({
      name: "UnauthorizedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnauthorizedException.prototype);
    this.Code = opts.Code;
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface CreateRegistryRequest {
  /**
   * <p>A description of the registry to be created.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The name of the registry.</p>
   * @public
   */
  RegistryName: string | undefined;

  /**
   * <p>Tags to associate with the registry.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateRegistryResponse {
  /**
   * <p>The description of the registry.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The ARN of the registry.</p>
   * @public
   */
  RegistryArn?: string | undefined;

  /**
   * <p>The name of the registry.</p>
   * @public
   */
  RegistryName?: string | undefined;

  /**
   * <p>Tags associated with the registry.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateSchemaRequest {
  /**
   * <p>The source of the schema definition.</p>
   * @public
   */
  Content: string | undefined;

  /**
   * <p>A description of the schema.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The name of the registry.</p>
   * @public
   */
  RegistryName: string | undefined;

  /**
   * <p>The name of the schema.</p>
   * @public
   */
  SchemaName: string | undefined;

  /**
   * <p>Tags associated with the schema.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>The type of schema.</p>
   * @public
   */
  Type: Type | undefined;
}

/**
 * @public
 */
export interface CreateSchemaResponse {
  /**
   * <p>The description of the schema.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The date and time that schema was modified.</p>
   * @public
   */
  LastModified?: Date | undefined;

  /**
   * <p>The ARN of the schema.</p>
   * @public
   */
  SchemaArn?: string | undefined;

  /**
   * <p>The name of the schema.</p>
   * @public
   */
  SchemaName?: string | undefined;

  /**
   * <p>The version number of the schema</p>
   * @public
   */
  SchemaVersion?: string | undefined;

  /**
   * <p>Key-value pairs associated with a resource.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>The type of the schema.</p>
   * @public
   */
  Type?: string | undefined;

  /**
   * <p>The date the schema version was created.</p>
   * @public
   */
  VersionCreatedDate?: Date | undefined;
}

/**
 * @public
 */
export interface DeleteDiscovererRequest {
  /**
   * <p>The ID of the discoverer.</p>
   * @public
   */
  DiscovererId: string | undefined;
}

/**
 * @public
 */
export class NotFoundException extends __BaseException {
  readonly name: "NotFoundException" = "NotFoundException";
  readonly $fault: "client" = "client";
  /**
   * <p>The error code.</p>
   * @public
   */
  Code: string | undefined;

  /**
   * <p>The message string of the error output.</p>
   * @public
   */
  Message: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NotFoundException, __BaseException>) {
    super({
      name: "NotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NotFoundException.prototype);
    this.Code = opts.Code;
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface DeleteRegistryRequest {
  /**
   * <p>The name of the registry.</p>
   * @public
   */
  RegistryName: string | undefined;
}

/**
 * @public
 */
export interface DeleteResourcePolicyRequest {
  /**
   * <p>The name of the registry.</p>
   * @public
   */
  RegistryName?: string | undefined;
}

/**
 * @public
 */
export interface DeleteSchemaRequest {
  /**
   * <p>The name of the registry.</p>
   * @public
   */
  RegistryName: string | undefined;

  /**
   * <p>The name of the schema.</p>
   * @public
   */
  SchemaName: string | undefined;
}

/**
 * @public
 */
export interface DeleteSchemaVersionRequest {
  /**
   * <p>The name of the registry.</p>
   * @public
   */
  RegistryName: string | undefined;

  /**
   * <p>The name of the schema.</p>
   * @public
   */
  SchemaName: string | undefined;

  /**
   * The version number of the schema
   * @public
   */
  SchemaVersion: string | undefined;
}

/**
 * @public
 */
export interface DescribeCodeBindingRequest {
  /**
   * <p>The language of the code binding.</p>
   * @public
   */
  Language: string | undefined;

  /**
   * <p>The name of the registry.</p>
   * @public
   */
  RegistryName: string | undefined;

  /**
   * <p>The name of the schema.</p>
   * @public
   */
  SchemaName: string | undefined;

  /**
   * <p>Specifying this limits the results to only this schema version.</p>
   * @public
   */
  SchemaVersion?: string | undefined;
}

/**
 * @public
 */
export interface DescribeCodeBindingResponse {
  /**
   * <p>The time and date that the code binding was created.</p>
   * @public
   */
  CreationDate?: Date | undefined;

  /**
   * <p>The date and time that code bindings were modified.</p>
   * @public
   */
  LastModified?: Date | undefined;

  /**
   * <p>The version number of the schema.</p>
   * @public
   */
  SchemaVersion?: string | undefined;

  /**
   * <p>The current status of code binding generation.</p>
   * @public
   */
  Status?: CodeGenerationStatus | undefined;
}

/**
 * @public
 */
export class TooManyRequestsException extends __BaseException {
  readonly name: "TooManyRequestsException" = "TooManyRequestsException";
  readonly $fault: "client" = "client";
  /**
   * <p>The error code.</p>
   * @public
   */
  Code: string | undefined;

  /**
   * <p>The message string of the error output.</p>
   * @public
   */
  Message: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyRequestsException, __BaseException>) {
    super({
      name: "TooManyRequestsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyRequestsException.prototype);
    this.Code = opts.Code;
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface DescribeDiscovererRequest {
  /**
   * <p>The ID of the discoverer.</p>
   * @public
   */
  DiscovererId: string | undefined;
}

/**
 * @public
 */
export interface DescribeDiscovererResponse {
  /**
   * <p>The description of the discoverer.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The ARN of the discoverer.</p>
   * @public
   */
  DiscovererArn?: string | undefined;

  /**
   * <p>The ID of the discoverer.</p>
   * @public
   */
  DiscovererId?: string | undefined;

  /**
   * <p>The ARN of the event bus.</p>
   * @public
   */
  SourceArn?: string | undefined;

  /**
   * <p>The state of the discoverer.</p>
   * @public
   */
  State?: DiscovererState | undefined;

  /**
   * <p>The Status if the discoverer will discover schemas from events sent from another account.</p>
   * @public
   */
  CrossAccount?: boolean | undefined;

  /**
   * <p>Tags associated with the resource.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface DescribeRegistryRequest {
  /**
   * <p>The name of the registry.</p>
   * @public
   */
  RegistryName: string | undefined;
}

/**
 * @public
 */
export interface DescribeRegistryResponse {
  /**
   * <p>The description of the registry.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The ARN of the registry.</p>
   * @public
   */
  RegistryArn?: string | undefined;

  /**
   * <p>The name of the registry.</p>
   * @public
   */
  RegistryName?: string | undefined;

  /**
   * <p>Tags associated with the registry.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface DescribeSchemaRequest {
  /**
   * <p>The name of the registry.</p>
   * @public
   */
  RegistryName: string | undefined;

  /**
   * <p>The name of the schema.</p>
   * @public
   */
  SchemaName: string | undefined;

  /**
   * <p>Specifying this limits the results to only this schema version.</p>
   * @public
   */
  SchemaVersion?: string | undefined;
}

/**
 * @public
 */
export interface DescribeSchemaResponse {
  /**
   * <p>The source of the schema definition.</p>
   * @public
   */
  Content?: string | undefined;

  /**
   * <p>The description of the schema.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The date and time that schema was modified.</p>
   * @public
   */
  LastModified?: Date | undefined;

  /**
   * <p>The ARN of the schema.</p>
   * @public
   */
  SchemaArn?: string | undefined;

  /**
   * <p>The name of the schema.</p>
   * @public
   */
  SchemaName?: string | undefined;

  /**
   * <p>The version number of the schema</p>
   * @public
   */
  SchemaVersion?: string | undefined;

  /**
   * <p>Tags associated with the resource.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>The type of the schema.</p>
   * @public
   */
  Type?: string | undefined;

  /**
   * <p>The date the schema version was created.</p>
   * @public
   */
  VersionCreatedDate?: Date | undefined;
}

/**
 * @public
 */
export interface ExportSchemaRequest {
  /**
   * <p>The name of the registry.</p>
   * @public
   */
  RegistryName: string | undefined;

  /**
   * <p>The name of the schema.</p>
   * @public
   */
  SchemaName: string | undefined;

  /**
   * <p>Specifying this limits the results to only this schema version.</p>
   * @public
   */
  SchemaVersion?: string | undefined;

  Type: string | undefined;
}

/**
 * @public
 */
export interface ExportSchemaResponse {
  Content?: string | undefined;
  SchemaArn?: string | undefined;
  SchemaName?: string | undefined;
  SchemaVersion?: string | undefined;
  Type?: string | undefined;
}

/**
 * @public
 */
export interface GetCodeBindingSourceRequest {
  /**
   * <p>The language of the code binding.</p>
   * @public
   */
  Language: string | undefined;

  /**
   * <p>The name of the registry.</p>
   * @public
   */
  RegistryName: string | undefined;

  /**
   * <p>The name of the schema.</p>
   * @public
   */
  SchemaName: string | undefined;

  /**
   * <p>Specifying this limits the results to only this schema version.</p>
   * @public
   */
  SchemaVersion?: string | undefined;
}

/**
 * @public
 */
export interface GetCodeBindingSourceResponse {
  Body?: Uint8Array | undefined;
}

/**
 * @public
 */
export interface GetDiscoveredSchemaRequest {
  /**
   * <p>An array of strings where each string is a JSON event. These are the events that were used to generate the schema. The array includes a single type of event and has a maximum size of 10 events.</p>
   * @public
   */
  Events: string[] | undefined;

  /**
   * <p>The type of event.</p>
   * @public
   */
  Type: Type | undefined;
}

/**
 * @public
 */
export interface GetDiscoveredSchemaResponse {
  /**
   * <p>The source of the schema definition.</p>
   * @public
   */
  Content?: string | undefined;
}

/**
 * @public
 */
export interface GetResourcePolicyRequest {
  /**
   * <p>The name of the registry.</p>
   * @public
   */
  RegistryName?: string | undefined;
}

/**
 * @public
 */
export interface GetResourcePolicyResponse {
  /**
   * <p>The resource-based policy.</p>
   * @public
   */
  Policy?: __LazyJsonString | string | undefined;

  /**
   * <p>The revision ID.</p>
   * @public
   */
  RevisionId?: string | undefined;
}

/**
 * @public
 */
export class GoneException extends __BaseException {
  readonly name: "GoneException" = "GoneException";
  readonly $fault: "client" = "client";
  /**
   * <p>The error code.</p>
   * @public
   */
  Code: string | undefined;

  /**
   * <p>The message string of the error output.</p>
   * @public
   */
  Message: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<GoneException, __BaseException>) {
    super({
      name: "GoneException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, GoneException.prototype);
    this.Code = opts.Code;
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface ListDiscoverersRequest {
  /**
   * <p>Specifying this limits the results to only those discoverer IDs that start with the specified prefix.</p>
   * @public
   */
  DiscovererIdPrefix?: string | undefined;

  Limit?: number | undefined;
  /**
   * <p>The token that specifies the next page of results to return. To request the first page, leave NextToken empty. The token will expire in 24 hours, and cannot be shared with other accounts.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Specifying this limits the results to only those ARNs that start with the specified prefix.</p>
   * @public
   */
  SourceArnPrefix?: string | undefined;
}

/**
 * @public
 */
export interface ListDiscoverersResponse {
  /**
   * <p>An array of DiscovererSummary information.</p>
   * @public
   */
  Discoverers?: DiscovererSummary[] | undefined;

  /**
   * <p>The token that specifies the next page of results to return. To request the first page, leave NextToken empty. The token will expire in 24 hours, and cannot be shared with other accounts.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRegistriesRequest {
  Limit?: number | undefined;
  /**
   * <p>The token that specifies the next page of results to return. To request the first page, leave NextToken empty. The token will expire in 24 hours, and cannot be shared with other accounts.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Specifying this limits the results to only those registry names that start with the specified prefix.</p>
   * @public
   */
  RegistryNamePrefix?: string | undefined;

  /**
   * <p>Can be set to Local or AWS to limit responses to your custom registries, or the ones provided by AWS.</p>
   * @public
   */
  Scope?: string | undefined;
}

/**
 * @public
 */
export interface ListRegistriesResponse {
  /**
   * <p>The token that specifies the next page of results to return. To request the first page, leave NextToken empty. The token will expire in 24 hours, and cannot be shared with other accounts.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>An array of registry summaries.</p>
   * @public
   */
  Registries?: RegistrySummary[] | undefined;
}

/**
 * @public
 */
export interface ListSchemasRequest {
  Limit?: number | undefined;
  /**
   * <p>The token that specifies the next page of results to return. To request the first page, leave NextToken empty. The token will expire in 24 hours, and cannot be shared with other accounts.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The name of the registry.</p>
   * @public
   */
  RegistryName: string | undefined;

  /**
   * <p>Specifying this limits the results to only those schema names that start with the specified prefix.</p>
   * @public
   */
  SchemaNamePrefix?: string | undefined;
}

/**
 * @public
 */
export interface ListSchemasResponse {
  /**
   * <p>The token that specifies the next page of results to return. To request the first page, leave NextToken empty. The token will expire in 24 hours, and cannot be shared with other accounts.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>An array of schema summaries.</p>
   * @public
   */
  Schemas?: SchemaSummary[] | undefined;
}

/**
 * @public
 */
export interface ListSchemaVersionsRequest {
  Limit?: number | undefined;
  /**
   * <p>The token that specifies the next page of results to return. To request the first page, leave NextToken empty. The token will expire in 24 hours, and cannot be shared with other accounts.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The name of the registry.</p>
   * @public
   */
  RegistryName: string | undefined;

  /**
   * <p>The name of the schema.</p>
   * @public
   */
  SchemaName: string | undefined;
}

/**
 * @public
 */
export interface ListSchemaVersionsResponse {
  /**
   * <p>The token that specifies the next page of results to return. To request the first page, leave NextToken empty. The token will expire in 24 hours, and cannot be shared with other accounts.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>An array of schema version summaries.</p>
   * @public
   */
  SchemaVersions?: SchemaVersionSummary[] | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The ARN of the resource.</p>
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>Key-value pairs associated with a resource.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export class PreconditionFailedException extends __BaseException {
  readonly name: "PreconditionFailedException" = "PreconditionFailedException";
  readonly $fault: "client" = "client";
  /**
   * <p>The error code.</p>
   * @public
   */
  Code: string | undefined;

  /**
   * <p>The message string of the error output.</p>
   * @public
   */
  Message: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PreconditionFailedException, __BaseException>) {
    super({
      name: "PreconditionFailedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PreconditionFailedException.prototype);
    this.Code = opts.Code;
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface PutCodeBindingRequest {
  /**
   * <p>The language of the code binding.</p>
   * @public
   */
  Language: string | undefined;

  /**
   * <p>The name of the registry.</p>
   * @public
   */
  RegistryName: string | undefined;

  /**
   * <p>The name of the schema.</p>
   * @public
   */
  SchemaName: string | undefined;

  /**
   * <p>Specifying this limits the results to only this schema version.</p>
   * @public
   */
  SchemaVersion?: string | undefined;
}

/**
 * @public
 */
export interface PutCodeBindingResponse {
  /**
   * <p>The time and date that the code binding was created.</p>
   * @public
   */
  CreationDate?: Date | undefined;

  /**
   * <p>The date and time that code bindings were modified.</p>
   * @public
   */
  LastModified?: Date | undefined;

  /**
   * <p>The version number of the schema.</p>
   * @public
   */
  SchemaVersion?: string | undefined;

  /**
   * <p>The current status of code binding generation.</p>
   * @public
   */
  Status?: CodeGenerationStatus | undefined;
}

/**
 * <p>The name of the policy.</p>
 * @public
 */
export interface PutResourcePolicyRequest {
  /**
   * <p>The resource-based policy.</p>
   * @public
   */
  Policy: __LazyJsonString | string | undefined;

  /**
   * <p>The name of the registry.</p>
   * @public
   */
  RegistryName?: string | undefined;

  /**
   * <p>The revision ID of the policy.</p>
   * @public
   */
  RevisionId?: string | undefined;
}

/**
 * @public
 */
export interface PutResourcePolicyResponse {
  /**
   * <p>The resource-based policy.</p>
   * @public
   */
  Policy?: __LazyJsonString | string | undefined;

  /**
   * <p>The revision ID of the policy.</p>
   * @public
   */
  RevisionId?: string | undefined;
}

/**
 * @public
 */
export interface SearchSchemasRequest {
  /**
   * <p>Specifying this limits the results to only schemas that include the provided keywords.</p>
   * @public
   */
  Keywords: string | undefined;

  Limit?: number | undefined;
  /**
   * <p>The token that specifies the next page of results to return. To request the first page, leave NextToken empty. The token will expire in 24 hours, and cannot be shared with other accounts.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The name of the registry.</p>
   * @public
   */
  RegistryName: string | undefined;
}

/**
 * @public
 */
export interface SearchSchemasResponse {
  /**
   * <p>The token that specifies the next page of results to return. To request the first page, leave NextToken empty. The token will expire in 24 hours, and cannot be shared with other accounts.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>An array of SearchSchemaSummary information.</p>
   * @public
   */
  Schemas?: SearchSchemaSummary[] | undefined;
}

/**
 * @public
 */
export interface StartDiscovererRequest {
  /**
   * <p>The ID of the discoverer.</p>
   * @public
   */
  DiscovererId: string | undefined;
}

/**
 * @public
 */
export interface StartDiscovererResponse {
  /**
   * <p>The ID of the discoverer.</p>
   * @public
   */
  DiscovererId?: string | undefined;

  /**
   * <p>The state of the discoverer.</p>
   * @public
   */
  State?: DiscovererState | undefined;
}

/**
 * @public
 */
export interface StopDiscovererRequest {
  /**
   * <p>The ID of the discoverer.</p>
   * @public
   */
  DiscovererId: string | undefined;
}

/**
 * @public
 */
export interface StopDiscovererResponse {
  /**
   * <p>The ID of the discoverer.</p>
   * @public
   */
  DiscovererId?: string | undefined;

  /**
   * <p>The state of the discoverer.</p>
   * @public
   */
  State?: DiscovererState | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The ARN of the resource.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>Tags associated with the resource.</p>
   * @public
   */
  Tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>The ARN of the resource.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>Keys of key-value pairs.</p>
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateDiscovererRequest {
  /**
   * <p>The description of the discoverer to update.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The ID of the discoverer.</p>
   * @public
   */
  DiscovererId: string | undefined;

  /**
   * <p>Support discovery of schemas in events sent to the bus from another account. (default: true)</p>
   * @public
   */
  CrossAccount?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateDiscovererResponse {
  /**
   * <p>The description of the discoverer.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The ARN of the discoverer.</p>
   * @public
   */
  DiscovererArn?: string | undefined;

  /**
   * <p>The ID of the discoverer.</p>
   * @public
   */
  DiscovererId?: string | undefined;

  /**
   * <p>The ARN of the event bus.</p>
   * @public
   */
  SourceArn?: string | undefined;

  /**
   * <p>The state of the discoverer.</p>
   * @public
   */
  State?: DiscovererState | undefined;

  /**
   * <p>The Status if the discoverer will discover schemas from events sent from another account.</p>
   * @public
   */
  CrossAccount?: boolean | undefined;

  /**
   * <p>Tags associated with the resource.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * <p>Updates the registry.</p>
 * @public
 */
export interface UpdateRegistryRequest {
  /**
   * <p>The description of the registry to update.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The name of the registry.</p>
   * @public
   */
  RegistryName: string | undefined;
}

/**
 * @public
 */
export interface UpdateRegistryResponse {
  /**
   * <p>The description of the registry.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The ARN of the registry.</p>
   * @public
   */
  RegistryArn?: string | undefined;

  /**
   * <p>The name of the registry.</p>
   * @public
   */
  RegistryName?: string | undefined;

  /**
   * <p>Tags associated with the registry.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UpdateSchemaRequest {
  /**
   * <p>The ID of the client token.</p>
   * @public
   */
  ClientTokenId?: string | undefined;

  /**
   * <p>The source of the schema definition.</p>
   * @public
   */
  Content?: string | undefined;

  /**
   * <p>The description of the schema.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The name of the registry.</p>
   * @public
   */
  RegistryName: string | undefined;

  /**
   * <p>The name of the schema.</p>
   * @public
   */
  SchemaName: string | undefined;

  /**
   * <p>The schema type for the events schema.</p>
   * @public
   */
  Type?: Type | undefined;
}

/**
 * @public
 */
export interface UpdateSchemaResponse {
  /**
   * <p>The description of the schema.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The date and time that schema was modified.</p>
   * @public
   */
  LastModified?: Date | undefined;

  /**
   * <p>The ARN of the schema.</p>
   * @public
   */
  SchemaArn?: string | undefined;

  /**
   * <p>The name of the schema.</p>
   * @public
   */
  SchemaName?: string | undefined;

  /**
   * <p>The version number of the schema</p>
   * @public
   */
  SchemaVersion?: string | undefined;

  /**
   * <p>Key-value pairs associated with a resource.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>The type of the schema.</p>
   * @public
   */
  Type?: string | undefined;

  /**
   * <p>The date the schema version was created.</p>
   * @public
   */
  VersionCreatedDate?: Date | undefined;
}
