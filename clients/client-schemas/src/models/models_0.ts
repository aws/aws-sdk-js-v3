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
   * @public
   * <p>The ARN of the discoverer.</p>
   */
  DiscovererArn?: string;

  /**
   * @public
   * <p>The ID of the discoverer.</p>
   */
  DiscovererId?: string;

  /**
   * @public
   * <p>The ARN of the event bus.</p>
   */
  SourceArn?: string;

  /**
   * @public
   * <p>The state of the discoverer.</p>
   */
  State?: DiscovererState;

  /**
   * @public
   * <p>The Status if the discoverer will discover schemas from events sent from another account.</p>
   */
  CrossAccount?: boolean;

  /**
   * @public
   * <p>Tags associated with the resource.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface RegistrySummary {
  /**
   * @public
   * <p>The ARN of the registry.</p>
   */
  RegistryArn?: string;

  /**
   * @public
   * <p>The name of the registry.</p>
   */
  RegistryName?: string;

  /**
   * @public
   * <p>Tags associated with the registry.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 * <p>A summary of schema details.</p>
 */
export interface SchemaSummary {
  /**
   * @public
   * <p>The date and time that schema was modified.</p>
   */
  LastModified?: Date;

  /**
   * @public
   * <p>The ARN of the schema.</p>
   */
  SchemaArn?: string;

  /**
   * @public
   * <p>The name of the schema.</p>
   */
  SchemaName?: string;

  /**
   * @public
   * <p>Tags associated with the schema.</p>
   */
  Tags?: Record<string, string>;

  /**
   * @public
   * <p>The number of versions available for the schema.</p>
   */
  VersionCount?: number;
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
   * @public
   * <p>The ARN of the schema version.</p>
   */
  SchemaArn?: string;

  /**
   * @public
   * <p>The name of the schema.</p>
   */
  SchemaName?: string;

  /**
   * @public
   * <p>The version number of the schema.</p>
   */
  SchemaVersion?: string;

  /**
   * @public
   * <p>The type of schema.</p>
   */
  Type?: Type;
}

/**
 * @public
 */
export interface SearchSchemaVersionSummary {
  /**
   * @public
   * <p>The date the schema version was created.</p>
   */
  CreatedDate?: Date;

  /**
   * @public
   * <p>The version number of the schema</p>
   */
  SchemaVersion?: string;

  /**
   * @public
   * <p>The type of schema.</p>
   */
  Type?: Type;
}

/**
 * @public
 */
export interface SearchSchemaSummary {
  /**
   * @public
   * <p>The name of the registry.</p>
   */
  RegistryName?: string;

  /**
   * @public
   * <p>The ARN of the schema.</p>
   */
  SchemaArn?: string;

  /**
   * @public
   * <p>The name of the schema.</p>
   */
  SchemaName?: string;

  /**
   * @public
   * <p>An array of schema version summaries.</p>
   */
  SchemaVersions?: SearchSchemaVersionSummary[];
}

/**
 * @public
 */
export class BadRequestException extends __BaseException {
  readonly name: "BadRequestException" = "BadRequestException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The error code.</p>
   */
  Code: string | undefined;

  /**
   * @public
   * <p>The message string of the error output.</p>
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
   * @public
   * <p>The error code.</p>
   */
  Code: string | undefined;

  /**
   * @public
   * <p>The message string of the error output.</p>
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
   * @public
   * <p>A description for the discoverer.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The ARN of the event bus.</p>
   */
  SourceArn: string | undefined;

  /**
   * @public
   * <p>Support discovery of schemas in events sent to the bus from another account. (default: true).</p>
   */
  CrossAccount?: boolean;

  /**
   * @public
   * <p>Tags associated with the resource.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateDiscovererResponse {
  /**
   * @public
   * <p>The description of the discoverer.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The ARN of the discoverer.</p>
   */
  DiscovererArn?: string;

  /**
   * @public
   * <p>The ID of the discoverer.</p>
   */
  DiscovererId?: string;

  /**
   * @public
   * <p>The ARN of the event bus.</p>
   */
  SourceArn?: string;

  /**
   * @public
   * <p>The state of the discoverer.</p>
   */
  State?: DiscovererState;

  /**
   * @public
   * <p>The Status if the discoverer will discover schemas from events sent from another account.</p>
   */
  CrossAccount?: boolean;

  /**
   * @public
   * <p>Tags associated with the resource.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export class ForbiddenException extends __BaseException {
  readonly name: "ForbiddenException" = "ForbiddenException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The error code.</p>
   */
  Code: string | undefined;

  /**
   * @public
   * <p>The message string of the error output.</p>
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
   * @public
   * <p>The error code.</p>
   */
  Code: string | undefined;

  /**
   * @public
   * <p>The message string of the error output.</p>
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
   * @public
   * <p>The error code.</p>
   */
  Code: string | undefined;

  /**
   * @public
   * <p>The message string of the error output.</p>
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
   * @public
   * <p>The error code.</p>
   */
  Code: string | undefined;

  /**
   * @public
   * <p>The message string of the error output.</p>
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
   * @public
   * <p>A description of the registry to be created.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The name of the registry.</p>
   */
  RegistryName: string | undefined;

  /**
   * @public
   * <p>Tags to associate with the registry.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateRegistryResponse {
  /**
   * @public
   * <p>The description of the registry.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The ARN of the registry.</p>
   */
  RegistryArn?: string;

  /**
   * @public
   * <p>The name of the registry.</p>
   */
  RegistryName?: string;

  /**
   * @public
   * <p>Tags associated with the registry.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateSchemaRequest {
  /**
   * @public
   * <p>The source of the schema definition.</p>
   */
  Content: string | undefined;

  /**
   * @public
   * <p>A description of the schema.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The name of the registry.</p>
   */
  RegistryName: string | undefined;

  /**
   * @public
   * <p>The name of the schema.</p>
   */
  SchemaName: string | undefined;

  /**
   * @public
   * <p>Tags associated with the schema.</p>
   */
  Tags?: Record<string, string>;

  /**
   * @public
   * <p>The type of schema.</p>
   */
  Type: Type | undefined;
}

/**
 * @public
 */
export interface CreateSchemaResponse {
  /**
   * @public
   * <p>The description of the schema.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The date and time that schema was modified.</p>
   */
  LastModified?: Date;

  /**
   * @public
   * <p>The ARN of the schema.</p>
   */
  SchemaArn?: string;

  /**
   * @public
   * <p>The name of the schema.</p>
   */
  SchemaName?: string;

  /**
   * @public
   * <p>The version number of the schema</p>
   */
  SchemaVersion?: string;

  /**
   * @public
   * <p>Key-value pairs associated with a resource.</p>
   */
  Tags?: Record<string, string>;

  /**
   * @public
   * <p>The type of the schema.</p>
   */
  Type?: string;

  /**
   * @public
   * <p>The date the schema version was created.</p>
   */
  VersionCreatedDate?: Date;
}

/**
 * @public
 */
export interface DeleteDiscovererRequest {
  /**
   * @public
   * <p>The ID of the discoverer.</p>
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
   * @public
   * <p>The error code.</p>
   */
  Code: string | undefined;

  /**
   * @public
   * <p>The message string of the error output.</p>
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
   * @public
   * <p>The name of the registry.</p>
   */
  RegistryName: string | undefined;
}

/**
 * @public
 */
export interface DeleteResourcePolicyRequest {
  /**
   * @public
   * <p>The name of the registry.</p>
   */
  RegistryName?: string;
}

/**
 * @public
 */
export interface DeleteSchemaRequest {
  /**
   * @public
   * <p>The name of the registry.</p>
   */
  RegistryName: string | undefined;

  /**
   * @public
   * <p>The name of the schema.</p>
   */
  SchemaName: string | undefined;
}

/**
 * @public
 */
export interface DeleteSchemaVersionRequest {
  /**
   * @public
   * <p>The name of the registry.</p>
   */
  RegistryName: string | undefined;

  /**
   * @public
   * <p>The name of the schema.</p>
   */
  SchemaName: string | undefined;

  /**
   * @public
   * The version number of the schema
   */
  SchemaVersion: string | undefined;
}

/**
 * @public
 */
export interface DescribeCodeBindingRequest {
  /**
   * @public
   * <p>The language of the code binding.</p>
   */
  Language: string | undefined;

  /**
   * @public
   * <p>The name of the registry.</p>
   */
  RegistryName: string | undefined;

  /**
   * @public
   * <p>The name of the schema.</p>
   */
  SchemaName: string | undefined;

  /**
   * @public
   * <p>Specifying this limits the results to only this schema version.</p>
   */
  SchemaVersion?: string;
}

/**
 * @public
 */
export interface DescribeCodeBindingResponse {
  /**
   * @public
   * <p>The time and date that the code binding was created.</p>
   */
  CreationDate?: Date;

  /**
   * @public
   * <p>The date and time that code bindings were modified.</p>
   */
  LastModified?: Date;

  /**
   * @public
   * <p>The version number of the schema.</p>
   */
  SchemaVersion?: string;

  /**
   * @public
   * <p>The current status of code binding generation.</p>
   */
  Status?: CodeGenerationStatus;
}

/**
 * @public
 */
export class TooManyRequestsException extends __BaseException {
  readonly name: "TooManyRequestsException" = "TooManyRequestsException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The error code.</p>
   */
  Code: string | undefined;

  /**
   * @public
   * <p>The message string of the error output.</p>
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
   * @public
   * <p>The ID of the discoverer.</p>
   */
  DiscovererId: string | undefined;
}

/**
 * @public
 */
export interface DescribeDiscovererResponse {
  /**
   * @public
   * <p>The description of the discoverer.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The ARN of the discoverer.</p>
   */
  DiscovererArn?: string;

  /**
   * @public
   * <p>The ID of the discoverer.</p>
   */
  DiscovererId?: string;

  /**
   * @public
   * <p>The ARN of the event bus.</p>
   */
  SourceArn?: string;

  /**
   * @public
   * <p>The state of the discoverer.</p>
   */
  State?: DiscovererState;

  /**
   * @public
   * <p>The Status if the discoverer will discover schemas from events sent from another account.</p>
   */
  CrossAccount?: boolean;

  /**
   * @public
   * <p>Tags associated with the resource.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface DescribeRegistryRequest {
  /**
   * @public
   * <p>The name of the registry.</p>
   */
  RegistryName: string | undefined;
}

/**
 * @public
 */
export interface DescribeRegistryResponse {
  /**
   * @public
   * <p>The description of the registry.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The ARN of the registry.</p>
   */
  RegistryArn?: string;

  /**
   * @public
   * <p>The name of the registry.</p>
   */
  RegistryName?: string;

  /**
   * @public
   * <p>Tags associated with the registry.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface DescribeSchemaRequest {
  /**
   * @public
   * <p>The name of the registry.</p>
   */
  RegistryName: string | undefined;

  /**
   * @public
   * <p>The name of the schema.</p>
   */
  SchemaName: string | undefined;

  /**
   * @public
   * <p>Specifying this limits the results to only this schema version.</p>
   */
  SchemaVersion?: string;
}

/**
 * @public
 */
export interface DescribeSchemaResponse {
  /**
   * @public
   * <p>The source of the schema definition.</p>
   */
  Content?: string;

  /**
   * @public
   * <p>The description of the schema.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The date and time that schema was modified.</p>
   */
  LastModified?: Date;

  /**
   * @public
   * <p>The ARN of the schema.</p>
   */
  SchemaArn?: string;

  /**
   * @public
   * <p>The name of the schema.</p>
   */
  SchemaName?: string;

  /**
   * @public
   * <p>The version number of the schema</p>
   */
  SchemaVersion?: string;

  /**
   * @public
   * <p>Tags associated with the resource.</p>
   */
  Tags?: Record<string, string>;

  /**
   * @public
   * <p>The type of the schema.</p>
   */
  Type?: string;

  /**
   * @public
   * <p>The date the schema version was created.</p>
   */
  VersionCreatedDate?: Date;
}

/**
 * @public
 */
export interface ExportSchemaRequest {
  /**
   * @public
   * <p>The name of the registry.</p>
   */
  RegistryName: string | undefined;

  /**
   * @public
   * <p>The name of the schema.</p>
   */
  SchemaName: string | undefined;

  /**
   * @public
   * <p>Specifying this limits the results to only this schema version.</p>
   */
  SchemaVersion?: string;

  Type: string | undefined;
}

/**
 * @public
 */
export interface ExportSchemaResponse {
  Content?: string;
  SchemaArn?: string;
  SchemaName?: string;
  SchemaVersion?: string;
  Type?: string;
}

/**
 * @public
 */
export interface GetCodeBindingSourceRequest {
  /**
   * @public
   * <p>The language of the code binding.</p>
   */
  Language: string | undefined;

  /**
   * @public
   * <p>The name of the registry.</p>
   */
  RegistryName: string | undefined;

  /**
   * @public
   * <p>The name of the schema.</p>
   */
  SchemaName: string | undefined;

  /**
   * @public
   * <p>Specifying this limits the results to only this schema version.</p>
   */
  SchemaVersion?: string;
}

/**
 * @public
 */
export interface GetCodeBindingSourceResponse {
  Body?: Uint8Array;
}

/**
 * @public
 */
export interface GetDiscoveredSchemaRequest {
  /**
   * @public
   * <p>An array of strings where each string is a JSON event. These are the events that were used to generate the schema. The array includes a single type of event and has a maximum size of 10 events.</p>
   */
  Events: string[] | undefined;

  /**
   * @public
   * <p>The type of event.</p>
   */
  Type: Type | undefined;
}

/**
 * @public
 */
export interface GetDiscoveredSchemaResponse {
  /**
   * @public
   * <p>The source of the schema definition.</p>
   */
  Content?: string;
}

/**
 * @public
 */
export interface GetResourcePolicyRequest {
  /**
   * @public
   * <p>The name of the registry.</p>
   */
  RegistryName?: string;
}

/**
 * @public
 */
export interface GetResourcePolicyResponse {
  /**
   * @public
   * <p>The resource-based policy.</p>
   */
  Policy?: __LazyJsonString | string;

  /**
   * @public
   * <p>The revision ID.</p>
   */
  RevisionId?: string;
}

/**
 * @public
 */
export class GoneException extends __BaseException {
  readonly name: "GoneException" = "GoneException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The error code.</p>
   */
  Code: string | undefined;

  /**
   * @public
   * <p>The message string of the error output.</p>
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
   * @public
   * <p>Specifying this limits the results to only those discoverer IDs that start with the specified prefix.</p>
   */
  DiscovererIdPrefix?: string;

  Limit?: number;
  /**
   * @public
   * <p>The token that specifies the next page of results to return. To request the first page, leave NextToken empty. The token will expire in 24 hours, and cannot be shared with other accounts.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Specifying this limits the results to only those ARNs that start with the specified prefix.</p>
   */
  SourceArnPrefix?: string;
}

/**
 * @public
 */
export interface ListDiscoverersResponse {
  /**
   * @public
   * <p>An array of DiscovererSummary information.</p>
   */
  Discoverers?: DiscovererSummary[];

  /**
   * @public
   * <p>The token that specifies the next page of results to return. To request the first page, leave NextToken empty. The token will expire in 24 hours, and cannot be shared with other accounts.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListRegistriesRequest {
  Limit?: number;
  /**
   * @public
   * <p>The token that specifies the next page of results to return. To request the first page, leave NextToken empty. The token will expire in 24 hours, and cannot be shared with other accounts.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Specifying this limits the results to only those registry names that start with the specified prefix.</p>
   */
  RegistryNamePrefix?: string;

  /**
   * @public
   * <p>Can be set to Local or AWS to limit responses to your custom registries, or the ones provided by AWS.</p>
   */
  Scope?: string;
}

/**
 * @public
 */
export interface ListRegistriesResponse {
  /**
   * @public
   * <p>The token that specifies the next page of results to return. To request the first page, leave NextToken empty. The token will expire in 24 hours, and cannot be shared with other accounts.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>An array of registry summaries.</p>
   */
  Registries?: RegistrySummary[];
}

/**
 * @public
 */
export interface ListSchemasRequest {
  Limit?: number;
  /**
   * @public
   * <p>The token that specifies the next page of results to return. To request the first page, leave NextToken empty. The token will expire in 24 hours, and cannot be shared with other accounts.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The name of the registry.</p>
   */
  RegistryName: string | undefined;

  /**
   * @public
   * <p>Specifying this limits the results to only those schema names that start with the specified prefix.</p>
   */
  SchemaNamePrefix?: string;
}

/**
 * @public
 */
export interface ListSchemasResponse {
  /**
   * @public
   * <p>The token that specifies the next page of results to return. To request the first page, leave NextToken empty. The token will expire in 24 hours, and cannot be shared with other accounts.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>An array of schema summaries.</p>
   */
  Schemas?: SchemaSummary[];
}

/**
 * @public
 */
export interface ListSchemaVersionsRequest {
  Limit?: number;
  /**
   * @public
   * <p>The token that specifies the next page of results to return. To request the first page, leave NextToken empty. The token will expire in 24 hours, and cannot be shared with other accounts.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The name of the registry.</p>
   */
  RegistryName: string | undefined;

  /**
   * @public
   * <p>The name of the schema.</p>
   */
  SchemaName: string | undefined;
}

/**
 * @public
 */
export interface ListSchemaVersionsResponse {
  /**
   * @public
   * <p>The token that specifies the next page of results to return. To request the first page, leave NextToken empty. The token will expire in 24 hours, and cannot be shared with other accounts.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>An array of schema version summaries.</p>
   */
  SchemaVersions?: SchemaVersionSummary[];
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * @public
   * <p>The ARN of the resource.</p>
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * @public
   * <p>Key-value pairs associated with a resource.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export class PreconditionFailedException extends __BaseException {
  readonly name: "PreconditionFailedException" = "PreconditionFailedException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The error code.</p>
   */
  Code: string | undefined;

  /**
   * @public
   * <p>The message string of the error output.</p>
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
   * @public
   * <p>The language of the code binding.</p>
   */
  Language: string | undefined;

  /**
   * @public
   * <p>The name of the registry.</p>
   */
  RegistryName: string | undefined;

  /**
   * @public
   * <p>The name of the schema.</p>
   */
  SchemaName: string | undefined;

  /**
   * @public
   * <p>Specifying this limits the results to only this schema version.</p>
   */
  SchemaVersion?: string;
}

/**
 * @public
 */
export interface PutCodeBindingResponse {
  /**
   * @public
   * <p>The time and date that the code binding was created.</p>
   */
  CreationDate?: Date;

  /**
   * @public
   * <p>The date and time that code bindings were modified.</p>
   */
  LastModified?: Date;

  /**
   * @public
   * <p>The version number of the schema.</p>
   */
  SchemaVersion?: string;

  /**
   * @public
   * <p>The current status of code binding generation.</p>
   */
  Status?: CodeGenerationStatus;
}

/**
 * @public
 * <p>The name of the policy.</p>
 */
export interface PutResourcePolicyRequest {
  /**
   * @public
   * <p>The resource-based policy.</p>
   */
  Policy: __LazyJsonString | string | undefined;

  /**
   * @public
   * <p>The name of the registry.</p>
   */
  RegistryName?: string;

  /**
   * @public
   * <p>The revision ID of the policy.</p>
   */
  RevisionId?: string;
}

/**
 * @public
 */
export interface PutResourcePolicyResponse {
  /**
   * @public
   * <p>The resource-based policy.</p>
   */
  Policy?: __LazyJsonString | string;

  /**
   * @public
   * <p>The revision ID of the policy.</p>
   */
  RevisionId?: string;
}

/**
 * @public
 */
export interface SearchSchemasRequest {
  /**
   * @public
   * <p>Specifying this limits the results to only schemas that include the provided keywords.</p>
   */
  Keywords: string | undefined;

  Limit?: number;
  /**
   * @public
   * <p>The token that specifies the next page of results to return. To request the first page, leave NextToken empty. The token will expire in 24 hours, and cannot be shared with other accounts.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The name of the registry.</p>
   */
  RegistryName: string | undefined;
}

/**
 * @public
 */
export interface SearchSchemasResponse {
  /**
   * @public
   * <p>The token that specifies the next page of results to return. To request the first page, leave NextToken empty. The token will expire in 24 hours, and cannot be shared with other accounts.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>An array of SearchSchemaSummary information.</p>
   */
  Schemas?: SearchSchemaSummary[];
}

/**
 * @public
 */
export interface StartDiscovererRequest {
  /**
   * @public
   * <p>The ID of the discoverer.</p>
   */
  DiscovererId: string | undefined;
}

/**
 * @public
 */
export interface StartDiscovererResponse {
  /**
   * @public
   * <p>The ID of the discoverer.</p>
   */
  DiscovererId?: string;

  /**
   * @public
   * <p>The state of the discoverer.</p>
   */
  State?: DiscovererState;
}

/**
 * @public
 */
export interface StopDiscovererRequest {
  /**
   * @public
   * <p>The ID of the discoverer.</p>
   */
  DiscovererId: string | undefined;
}

/**
 * @public
 */
export interface StopDiscovererResponse {
  /**
   * @public
   * <p>The ID of the discoverer.</p>
   */
  DiscovererId?: string;

  /**
   * @public
   * <p>The state of the discoverer.</p>
   */
  State?: DiscovererState;
}

/**
 * @public
 * <p></p>
 */
export interface TagResourceRequest {
  /**
   * @public
   * <p>The ARN of the resource.</p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p>Tags associated with the resource.</p>
   */
  Tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * @public
   * <p>The ARN of the resource.</p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p>Keys of key-value pairs.</p>
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateDiscovererRequest {
  /**
   * @public
   * <p>The description of the discoverer to update.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The ID of the discoverer.</p>
   */
  DiscovererId: string | undefined;

  /**
   * @public
   * <p>Support discovery of schemas in events sent to the bus from another account. (default: true)</p>
   */
  CrossAccount?: boolean;
}

/**
 * @public
 */
export interface UpdateDiscovererResponse {
  /**
   * @public
   * <p>The description of the discoverer.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The ARN of the discoverer.</p>
   */
  DiscovererArn?: string;

  /**
   * @public
   * <p>The ID of the discoverer.</p>
   */
  DiscovererId?: string;

  /**
   * @public
   * <p>The ARN of the event bus.</p>
   */
  SourceArn?: string;

  /**
   * @public
   * <p>The state of the discoverer.</p>
   */
  State?: DiscovererState;

  /**
   * @public
   * <p>The Status if the discoverer will discover schemas from events sent from another account.</p>
   */
  CrossAccount?: boolean;

  /**
   * @public
   * <p>Tags associated with the resource.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 * <p>Updates the registry.</p>
 */
export interface UpdateRegistryRequest {
  /**
   * @public
   * <p>The description of the registry to update.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The name of the registry.</p>
   */
  RegistryName: string | undefined;
}

/**
 * @public
 */
export interface UpdateRegistryResponse {
  /**
   * @public
   * <p>The description of the registry.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The ARN of the registry.</p>
   */
  RegistryArn?: string;

  /**
   * @public
   * <p>The name of the registry.</p>
   */
  RegistryName?: string;

  /**
   * @public
   * <p>Tags associated with the registry.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface UpdateSchemaRequest {
  /**
   * @public
   * <p>The ID of the client token.</p>
   */
  ClientTokenId?: string;

  /**
   * @public
   * <p>The source of the schema definition.</p>
   */
  Content?: string;

  /**
   * @public
   * <p>The description of the schema.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The name of the registry.</p>
   */
  RegistryName: string | undefined;

  /**
   * @public
   * <p>The name of the schema.</p>
   */
  SchemaName: string | undefined;

  /**
   * @public
   * <p>The schema type for the events schema.</p>
   */
  Type?: Type;
}

/**
 * @public
 */
export interface UpdateSchemaResponse {
  /**
   * @public
   * <p>The description of the schema.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The date and time that schema was modified.</p>
   */
  LastModified?: Date;

  /**
   * @public
   * <p>The ARN of the schema.</p>
   */
  SchemaArn?: string;

  /**
   * @public
   * <p>The name of the schema.</p>
   */
  SchemaName?: string;

  /**
   * @public
   * <p>The version number of the schema</p>
   */
  SchemaVersion?: string;

  /**
   * @public
   * <p>Key-value pairs associated with a resource.</p>
   */
  Tags?: Record<string, string>;

  /**
   * @public
   * <p>The type of the schema.</p>
   */
  Type?: string;

  /**
   * @public
   * <p>The date the schema version was created.</p>
   */
  VersionCreatedDate?: Date;
}
