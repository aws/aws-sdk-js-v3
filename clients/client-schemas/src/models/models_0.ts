// smithy-typescript generated code
import {
  ExceptionOptionType as __ExceptionOptionType,
  LazyJsonString as __LazyJsonString,
} from "@aws-sdk/smithy-client";

import { SchemasServiceException as __BaseException } from "./SchemasServiceException";

export enum DiscovererState {
  STARTED = "STARTED",
  STOPPED = "STOPPED",
}

export interface DiscovererSummary {
  /**
   * <p>The ARN of the discoverer.</p>
   */
  DiscovererArn?: string;

  /**
   * <p>The ID of the discoverer.</p>
   */
  DiscovererId?: string;

  /**
   * <p>The ARN of the event bus.</p>
   */
  SourceArn?: string;

  /**
   * <p>The state of the discoverer.</p>
   */
  State?: DiscovererState | string;

  /**
   * <p>The Status if the discoverer will discover schemas from events sent from another account.</p>
   */
  CrossAccount?: boolean;

  /**
   * <p>Tags associated with the resource.</p>
   */
  Tags?: Record<string, string>;
}

export interface RegistrySummary {
  /**
   * <p>The ARN of the registry.</p>
   */
  RegistryArn?: string;

  /**
   * <p>The name of the registry.</p>
   */
  RegistryName?: string;

  /**
   * <p>Tags associated with the registry.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * <p>A summary of schema details.</p>
 */
export interface SchemaSummary {
  /**
   * <p>The date and time that schema was modified.</p>
   */
  LastModified?: Date;

  /**
   * <p>The ARN of the schema.</p>
   */
  SchemaArn?: string;

  /**
   * <p>The name of the schema.</p>
   */
  SchemaName?: string;

  /**
   * <p>Tags associated with the schema.</p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>The number of versions available for the schema.</p>
   */
  VersionCount?: number;
}

export enum Type {
  JSONSchemaDraft4 = "JSONSchemaDraft4",
  OpenApi3 = "OpenApi3",
}

export interface SchemaVersionSummary {
  /**
   * <p>The ARN of the schema version.</p>
   */
  SchemaArn?: string;

  /**
   * <p>The name of the schema.</p>
   */
  SchemaName?: string;

  /**
   * <p>The version number of the schema.</p>
   */
  SchemaVersion?: string;

  /**
   * <p>The type of schema.</p>
   */
  Type?: Type | string;
}

export interface SearchSchemaVersionSummary {
  /**
   * <p>The date the schema version was created.</p>
   */
  CreatedDate?: Date;

  /**
   * <p>The version number of the schema</p>
   */
  SchemaVersion?: string;

  /**
   * <p>The type of schema.</p>
   */
  Type?: Type | string;
}

export interface SearchSchemaSummary {
  /**
   * <p>The name of the registry.</p>
   */
  RegistryName?: string;

  /**
   * <p>The ARN of the schema.</p>
   */
  SchemaArn?: string;

  /**
   * <p>The name of the schema.</p>
   */
  SchemaName?: string;

  /**
   * <p>An array of schema version summaries.</p>
   */
  SchemaVersions?: SearchSchemaVersionSummary[];
}

export class BadRequestException extends __BaseException {
  readonly name: "BadRequestException" = "BadRequestException";
  readonly $fault: "client" = "client";
  /**
   * <p>The error code.</p>
   */
  Code: string | undefined;

  /**
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

export enum CodeGenerationStatus {
  CREATE_COMPLETE = "CREATE_COMPLETE",
  CREATE_FAILED = "CREATE_FAILED",
  CREATE_IN_PROGRESS = "CREATE_IN_PROGRESS",
}

export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * <p>The error code.</p>
   */
  Code: string | undefined;

  /**
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

export interface CreateDiscovererRequest {
  /**
   * <p>A description for the discoverer.</p>
   */
  Description?: string;

  /**
   * <p>The ARN of the event bus.</p>
   */
  SourceArn: string | undefined;

  /**
   * <p>Support discovery of schemas in events sent to the bus from another account. (default: true).</p>
   */
  CrossAccount?: boolean;

  /**
   * <p>Tags associated with the resource.</p>
   */
  Tags?: Record<string, string>;
}

export interface CreateDiscovererResponse {
  /**
   * <p>The description of the discoverer.</p>
   */
  Description?: string;

  /**
   * <p>The ARN of the discoverer.</p>
   */
  DiscovererArn?: string;

  /**
   * <p>The ID of the discoverer.</p>
   */
  DiscovererId?: string;

  /**
   * <p>The ARN of the event bus.</p>
   */
  SourceArn?: string;

  /**
   * <p>The state of the discoverer.</p>
   */
  State?: DiscovererState | string;

  /**
   * <p>The Status if the discoverer will discover schemas from events sent from another account.</p>
   */
  CrossAccount?: boolean;

  /**
   * <p>Tags associated with the resource.</p>
   */
  Tags?: Record<string, string>;
}

export class ForbiddenException extends __BaseException {
  readonly name: "ForbiddenException" = "ForbiddenException";
  readonly $fault: "client" = "client";
  /**
   * <p>The error code.</p>
   */
  Code: string | undefined;

  /**
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

export class InternalServerErrorException extends __BaseException {
  readonly name: "InternalServerErrorException" = "InternalServerErrorException";
  readonly $fault: "server" = "server";
  /**
   * <p>The error code.</p>
   */
  Code: string | undefined;

  /**
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

export class ServiceUnavailableException extends __BaseException {
  readonly name: "ServiceUnavailableException" = "ServiceUnavailableException";
  readonly $fault: "server" = "server";
  /**
   * <p>The error code.</p>
   */
  Code: string | undefined;

  /**
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

export class UnauthorizedException extends __BaseException {
  readonly name: "UnauthorizedException" = "UnauthorizedException";
  readonly $fault: "client" = "client";
  /**
   * <p>The error code.</p>
   */
  Code: string | undefined;

  /**
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

export interface CreateRegistryRequest {
  /**
   * <p>A description of the registry to be created.</p>
   */
  Description?: string;

  /**
   * <p>The name of the registry.</p>
   */
  RegistryName: string | undefined;

  /**
   * <p>Tags to associate with the registry.</p>
   */
  Tags?: Record<string, string>;
}

export interface CreateRegistryResponse {
  /**
   * <p>The description of the registry.</p>
   */
  Description?: string;

  /**
   * <p>The ARN of the registry.</p>
   */
  RegistryArn?: string;

  /**
   * <p>The name of the registry.</p>
   */
  RegistryName?: string;

  /**
   * <p>Tags associated with the registry.</p>
   */
  Tags?: Record<string, string>;
}

export interface CreateSchemaRequest {
  /**
   * <p>The source of the schema definition.</p>
   */
  Content: string | undefined;

  /**
   * <p>A description of the schema.</p>
   */
  Description?: string;

  /**
   * <p>The name of the registry.</p>
   */
  RegistryName: string | undefined;

  /**
   * <p>The name of the schema.</p>
   */
  SchemaName: string | undefined;

  /**
   * <p>Tags associated with the schema.</p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>The type of schema.</p>
   */
  Type: Type | string | undefined;
}

export interface CreateSchemaResponse {
  /**
   * <p>The description of the schema.</p>
   */
  Description?: string;

  /**
   * <p>The date and time that schema was modified.</p>
   */
  LastModified?: Date;

  /**
   * <p>The ARN of the schema.</p>
   */
  SchemaArn?: string;

  /**
   * <p>The name of the schema.</p>
   */
  SchemaName?: string;

  /**
   * <p>The version number of the schema</p>
   */
  SchemaVersion?: string;

  /**
   * <p>Key-value pairs associated with a resource.</p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>The type of the schema.</p>
   */
  Type?: string;

  /**
   * <p>The date the schema version was created.</p>
   */
  VersionCreatedDate?: Date;
}

export interface DeleteDiscovererRequest {
  /**
   * <p>The ID of the discoverer.</p>
   */
  DiscovererId: string | undefined;
}

export class NotFoundException extends __BaseException {
  readonly name: "NotFoundException" = "NotFoundException";
  readonly $fault: "client" = "client";
  /**
   * <p>The error code.</p>
   */
  Code: string | undefined;

  /**
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

export interface DeleteRegistryRequest {
  /**
   * <p>The name of the registry.</p>
   */
  RegistryName: string | undefined;
}

export interface DeleteResourcePolicyRequest {
  /**
   * <p>The name of the registry.</p>
   */
  RegistryName?: string;
}

export interface DeleteSchemaRequest {
  /**
   * <p>The name of the registry.</p>
   */
  RegistryName: string | undefined;

  /**
   * <p>The name of the schema.</p>
   */
  SchemaName: string | undefined;
}

export interface DeleteSchemaVersionRequest {
  /**
   * <p>The name of the registry.</p>
   */
  RegistryName: string | undefined;

  /**
   * <p>The name of the schema.</p>
   */
  SchemaName: string | undefined;

  /**
   * The version number of the schema
   */
  SchemaVersion: string | undefined;
}

export interface DescribeCodeBindingRequest {
  /**
   * <p>The language of the code binding.</p>
   */
  Language: string | undefined;

  /**
   * <p>The name of the registry.</p>
   */
  RegistryName: string | undefined;

  /**
   * <p>The name of the schema.</p>
   */
  SchemaName: string | undefined;

  /**
   * <p>Specifying this limits the results to only this schema version.</p>
   */
  SchemaVersion?: string;
}

export interface DescribeCodeBindingResponse {
  /**
   * <p>The time and date that the code binding was created.</p>
   */
  CreationDate?: Date;

  /**
   * <p>The date and time that code bindings were modified.</p>
   */
  LastModified?: Date;

  /**
   * <p>The version number of the schema.</p>
   */
  SchemaVersion?: string;

  /**
   * <p>The current status of code binding generation.</p>
   */
  Status?: CodeGenerationStatus | string;
}

export class TooManyRequestsException extends __BaseException {
  readonly name: "TooManyRequestsException" = "TooManyRequestsException";
  readonly $fault: "client" = "client";
  /**
   * <p>The error code.</p>
   */
  Code: string | undefined;

  /**
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

export interface DescribeDiscovererRequest {
  /**
   * <p>The ID of the discoverer.</p>
   */
  DiscovererId: string | undefined;
}

export interface DescribeDiscovererResponse {
  /**
   * <p>The description of the discoverer.</p>
   */
  Description?: string;

  /**
   * <p>The ARN of the discoverer.</p>
   */
  DiscovererArn?: string;

  /**
   * <p>The ID of the discoverer.</p>
   */
  DiscovererId?: string;

  /**
   * <p>The ARN of the event bus.</p>
   */
  SourceArn?: string;

  /**
   * <p>The state of the discoverer.</p>
   */
  State?: DiscovererState | string;

  /**
   * <p>The Status if the discoverer will discover schemas from events sent from another account.</p>
   */
  CrossAccount?: boolean;

  /**
   * <p>Tags associated with the resource.</p>
   */
  Tags?: Record<string, string>;
}

export interface DescribeRegistryRequest {
  /**
   * <p>The name of the registry.</p>
   */
  RegistryName: string | undefined;
}

export interface DescribeRegistryResponse {
  /**
   * <p>The description of the registry.</p>
   */
  Description?: string;

  /**
   * <p>The ARN of the registry.</p>
   */
  RegistryArn?: string;

  /**
   * <p>The name of the registry.</p>
   */
  RegistryName?: string;

  /**
   * <p>Tags associated with the registry.</p>
   */
  Tags?: Record<string, string>;
}

export interface DescribeSchemaRequest {
  /**
   * <p>The name of the registry.</p>
   */
  RegistryName: string | undefined;

  /**
   * <p>The name of the schema.</p>
   */
  SchemaName: string | undefined;

  /**
   * <p>Specifying this limits the results to only this schema version.</p>
   */
  SchemaVersion?: string;
}

export interface DescribeSchemaResponse {
  /**
   * <p>The source of the schema definition.</p>
   */
  Content?: string;

  /**
   * <p>The description of the schema.</p>
   */
  Description?: string;

  /**
   * <p>The date and time that schema was modified.</p>
   */
  LastModified?: Date;

  /**
   * <p>The ARN of the schema.</p>
   */
  SchemaArn?: string;

  /**
   * <p>The name of the schema.</p>
   */
  SchemaName?: string;

  /**
   * <p>The version number of the schema</p>
   */
  SchemaVersion?: string;

  /**
   * <p>Tags associated with the resource.</p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>The type of the schema.</p>
   */
  Type?: string;

  /**
   * <p>The date the schema version was created.</p>
   */
  VersionCreatedDate?: Date;
}

export interface ExportSchemaRequest {
  /**
   * <p>The name of the registry.</p>
   */
  RegistryName: string | undefined;

  /**
   * <p>The name of the schema.</p>
   */
  SchemaName: string | undefined;

  /**
   * <p>Specifying this limits the results to only this schema version.</p>
   */
  SchemaVersion?: string;

  Type: string | undefined;
}

export interface ExportSchemaResponse {
  Content?: string;
  SchemaArn?: string;
  SchemaName?: string;
  SchemaVersion?: string;
  Type?: string;
}

export interface GetCodeBindingSourceRequest {
  /**
   * <p>The language of the code binding.</p>
   */
  Language: string | undefined;

  /**
   * <p>The name of the registry.</p>
   */
  RegistryName: string | undefined;

  /**
   * <p>The name of the schema.</p>
   */
  SchemaName: string | undefined;

  /**
   * <p>Specifying this limits the results to only this schema version.</p>
   */
  SchemaVersion?: string;
}

export interface GetCodeBindingSourceResponse {
  Body?: Uint8Array;
}

export interface GetDiscoveredSchemaRequest {
  /**
   * <p>An array of strings where each string is a JSON event. These are the events that were used to generate the schema. The array includes a single type of event and has a maximum size of 10 events.</p>
   */
  Events: string[] | undefined;

  /**
   * <p>The type of event.</p>
   */
  Type: Type | string | undefined;
}

export interface GetDiscoveredSchemaResponse {
  /**
   * <p>The source of the schema definition.</p>
   */
  Content?: string;
}

export interface GetResourcePolicyRequest {
  /**
   * <p>The name of the registry.</p>
   */
  RegistryName?: string;
}

export interface GetResourcePolicyResponse {
  /**
   * <p>The resource-based policy.</p>
   */
  Policy?: __LazyJsonString | string;

  /**
   * <p>The revision ID.</p>
   */
  RevisionId?: string;
}

export class GoneException extends __BaseException {
  readonly name: "GoneException" = "GoneException";
  readonly $fault: "client" = "client";
  /**
   * <p>The error code.</p>
   */
  Code: string | undefined;

  /**
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

export interface ListDiscoverersRequest {
  /**
   * <p>Specifying this limits the results to only those discoverer IDs that start with the specified prefix.</p>
   */
  DiscovererIdPrefix?: string;

  Limit?: number;
  /**
   * <p>The token that specifies the next page of results to return. To request the first page, leave NextToken empty. The token will expire in 24 hours, and cannot be shared with other accounts.</p>
   */
  NextToken?: string;

  /**
   * <p>Specifying this limits the results to only those ARNs that start with the specified prefix.</p>
   */
  SourceArnPrefix?: string;
}

export interface ListDiscoverersResponse {
  /**
   * <p>An array of DiscovererSummary information.</p>
   */
  Discoverers?: DiscovererSummary[];

  /**
   * <p>The token that specifies the next page of results to return. To request the first page, leave NextToken empty. The token will expire in 24 hours, and cannot be shared with other accounts.</p>
   */
  NextToken?: string;
}

export interface ListRegistriesRequest {
  Limit?: number;
  /**
   * <p>The token that specifies the next page of results to return. To request the first page, leave NextToken empty. The token will expire in 24 hours, and cannot be shared with other accounts.</p>
   */
  NextToken?: string;

  /**
   * <p>Specifying this limits the results to only those registry names that start with the specified prefix.</p>
   */
  RegistryNamePrefix?: string;

  /**
   * <p>Can be set to Local or AWS to limit responses to your custom registries, or the ones provided by AWS.</p>
   */
  Scope?: string;
}

export interface ListRegistriesResponse {
  /**
   * <p>The token that specifies the next page of results to return. To request the first page, leave NextToken empty. The token will expire in 24 hours, and cannot be shared with other accounts.</p>
   */
  NextToken?: string;

  /**
   * <p>An array of registry summaries.</p>
   */
  Registries?: RegistrySummary[];
}

export interface ListSchemasRequest {
  Limit?: number;
  /**
   * <p>The token that specifies the next page of results to return. To request the first page, leave NextToken empty. The token will expire in 24 hours, and cannot be shared with other accounts.</p>
   */
  NextToken?: string;

  /**
   * <p>The name of the registry.</p>
   */
  RegistryName: string | undefined;

  /**
   * <p>Specifying this limits the results to only those schema names that start with the specified prefix.</p>
   */
  SchemaNamePrefix?: string;
}

export interface ListSchemasResponse {
  /**
   * <p>The token that specifies the next page of results to return. To request the first page, leave NextToken empty. The token will expire in 24 hours, and cannot be shared with other accounts.</p>
   */
  NextToken?: string;

  /**
   * <p>An array of schema summaries.</p>
   */
  Schemas?: SchemaSummary[];
}

export interface ListSchemaVersionsRequest {
  Limit?: number;
  /**
   * <p>The token that specifies the next page of results to return. To request the first page, leave NextToken empty. The token will expire in 24 hours, and cannot be shared with other accounts.</p>
   */
  NextToken?: string;

  /**
   * <p>The name of the registry.</p>
   */
  RegistryName: string | undefined;

  /**
   * <p>The name of the schema.</p>
   */
  SchemaName: string | undefined;
}

export interface ListSchemaVersionsResponse {
  /**
   * <p>The token that specifies the next page of results to return. To request the first page, leave NextToken empty. The token will expire in 24 hours, and cannot be shared with other accounts.</p>
   */
  NextToken?: string;

  /**
   * <p>An array of schema version summaries.</p>
   */
  SchemaVersions?: SchemaVersionSummary[];
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The ARN of the resource.</p>
   */
  ResourceArn: string | undefined;
}

export interface ListTagsForResourceResponse {
  /**
   * <p>Key-value pairs associated with a resource.</p>
   */
  Tags?: Record<string, string>;
}

export class PreconditionFailedException extends __BaseException {
  readonly name: "PreconditionFailedException" = "PreconditionFailedException";
  readonly $fault: "client" = "client";
  /**
   * <p>The error code.</p>
   */
  Code: string | undefined;

  /**
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

export interface PutCodeBindingRequest {
  /**
   * <p>The language of the code binding.</p>
   */
  Language: string | undefined;

  /**
   * <p>The name of the registry.</p>
   */
  RegistryName: string | undefined;

  /**
   * <p>The name of the schema.</p>
   */
  SchemaName: string | undefined;

  /**
   * <p>Specifying this limits the results to only this schema version.</p>
   */
  SchemaVersion?: string;
}

export interface PutCodeBindingResponse {
  /**
   * <p>The time and date that the code binding was created.</p>
   */
  CreationDate?: Date;

  /**
   * <p>The date and time that code bindings were modified.</p>
   */
  LastModified?: Date;

  /**
   * <p>The version number of the schema.</p>
   */
  SchemaVersion?: string;

  /**
   * <p>The current status of code binding generation.</p>
   */
  Status?: CodeGenerationStatus | string;
}

/**
 * <p>The name of the policy.</p>
 */
export interface PutResourcePolicyRequest {
  /**
   * <p>The resource-based policy.</p>
   */
  Policy: __LazyJsonString | string | undefined;

  /**
   * <p>The name of the registry.</p>
   */
  RegistryName?: string;

  /**
   * <p>The revision ID of the policy.</p>
   */
  RevisionId?: string;
}

export interface PutResourcePolicyResponse {
  /**
   * <p>The resource-based policy.</p>
   */
  Policy?: __LazyJsonString | string;

  /**
   * <p>The revision ID of the policy.</p>
   */
  RevisionId?: string;
}

export interface SearchSchemasRequest {
  /**
   * <p>Specifying this limits the results to only schemas that include the provided keywords.</p>
   */
  Keywords: string | undefined;

  Limit?: number;
  /**
   * <p>The token that specifies the next page of results to return. To request the first page, leave NextToken empty. The token will expire in 24 hours, and cannot be shared with other accounts.</p>
   */
  NextToken?: string;

  /**
   * <p>The name of the registry.</p>
   */
  RegistryName: string | undefined;
}

export interface SearchSchemasResponse {
  /**
   * <p>The token that specifies the next page of results to return. To request the first page, leave NextToken empty. The token will expire in 24 hours, and cannot be shared with other accounts.</p>
   */
  NextToken?: string;

  /**
   * <p>An array of SearchSchemaSummary information.</p>
   */
  Schemas?: SearchSchemaSummary[];
}

export interface StartDiscovererRequest {
  /**
   * <p>The ID of the discoverer.</p>
   */
  DiscovererId: string | undefined;
}

export interface StartDiscovererResponse {
  /**
   * <p>The ID of the discoverer.</p>
   */
  DiscovererId?: string;

  /**
   * <p>The state of the discoverer.</p>
   */
  State?: DiscovererState | string;
}

export interface StopDiscovererRequest {
  /**
   * <p>The ID of the discoverer.</p>
   */
  DiscovererId: string | undefined;
}

export interface StopDiscovererResponse {
  /**
   * <p>The ID of the discoverer.</p>
   */
  DiscovererId?: string;

  /**
   * <p>The state of the discoverer.</p>
   */
  State?: DiscovererState | string;
}

/**
 * <p></p>
 */
export interface TagResourceRequest {
  /**
   * <p>The ARN of the resource.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>Tags associated with the resource.</p>
   */
  Tags: Record<string, string> | undefined;
}

export interface UntagResourceRequest {
  /**
   * <p>The ARN of the resource.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>Keys of key-value pairs.</p>
   */
  TagKeys: string[] | undefined;
}

export interface UpdateDiscovererRequest {
  /**
   * <p>The description of the discoverer to update.</p>
   */
  Description?: string;

  /**
   * <p>The ID of the discoverer.</p>
   */
  DiscovererId: string | undefined;

  /**
   * <p>Support discovery of schemas in events sent to the bus from another account. (default: true)</p>
   */
  CrossAccount?: boolean;
}

export interface UpdateDiscovererResponse {
  /**
   * <p>The description of the discoverer.</p>
   */
  Description?: string;

  /**
   * <p>The ARN of the discoverer.</p>
   */
  DiscovererArn?: string;

  /**
   * <p>The ID of the discoverer.</p>
   */
  DiscovererId?: string;

  /**
   * <p>The ARN of the event bus.</p>
   */
  SourceArn?: string;

  /**
   * <p>The state of the discoverer.</p>
   */
  State?: DiscovererState | string;

  /**
   * <p>The Status if the discoverer will discover schemas from events sent from another account.</p>
   */
  CrossAccount?: boolean;

  /**
   * <p>Tags associated with the resource.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * <p>Updates the registry.</p>
 */
export interface UpdateRegistryRequest {
  /**
   * <p>The description of the registry to update.</p>
   */
  Description?: string;

  /**
   * <p>The name of the registry.</p>
   */
  RegistryName: string | undefined;
}

export interface UpdateRegistryResponse {
  /**
   * <p>The description of the registry.</p>
   */
  Description?: string;

  /**
   * <p>The ARN of the registry.</p>
   */
  RegistryArn?: string;

  /**
   * <p>The name of the registry.</p>
   */
  RegistryName?: string;

  /**
   * <p>Tags associated with the registry.</p>
   */
  Tags?: Record<string, string>;
}

export interface UpdateSchemaRequest {
  /**
   * <p>The ID of the client token.</p>
   */
  ClientTokenId?: string;

  /**
   * <p>The source of the schema definition.</p>
   */
  Content?: string;

  /**
   * <p>The description of the schema.</p>
   */
  Description?: string;

  /**
   * <p>The name of the registry.</p>
   */
  RegistryName: string | undefined;

  /**
   * <p>The name of the schema.</p>
   */
  SchemaName: string | undefined;

  /**
   * <p>The schema type for the events schema.</p>
   */
  Type?: Type | string;
}

export interface UpdateSchemaResponse {
  /**
   * <p>The description of the schema.</p>
   */
  Description?: string;

  /**
   * <p>The date and time that schema was modified.</p>
   */
  LastModified?: Date;

  /**
   * <p>The ARN of the schema.</p>
   */
  SchemaArn?: string;

  /**
   * <p>The name of the schema.</p>
   */
  SchemaName?: string;

  /**
   * <p>The version number of the schema</p>
   */
  SchemaVersion?: string;

  /**
   * <p>Key-value pairs associated with a resource.</p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>The type of the schema.</p>
   */
  Type?: string;

  /**
   * <p>The date the schema version was created.</p>
   */
  VersionCreatedDate?: Date;
}

/**
 * @internal
 */
export const DiscovererSummaryFilterSensitiveLog = (obj: DiscovererSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RegistrySummaryFilterSensitiveLog = (obj: RegistrySummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SchemaSummaryFilterSensitiveLog = (obj: SchemaSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SchemaVersionSummaryFilterSensitiveLog = (obj: SchemaVersionSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SearchSchemaVersionSummaryFilterSensitiveLog = (obj: SearchSchemaVersionSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SearchSchemaSummaryFilterSensitiveLog = (obj: SearchSchemaSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateDiscovererRequestFilterSensitiveLog = (obj: CreateDiscovererRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateDiscovererResponseFilterSensitiveLog = (obj: CreateDiscovererResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateRegistryRequestFilterSensitiveLog = (obj: CreateRegistryRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateRegistryResponseFilterSensitiveLog = (obj: CreateRegistryResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateSchemaRequestFilterSensitiveLog = (obj: CreateSchemaRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateSchemaResponseFilterSensitiveLog = (obj: CreateSchemaResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteDiscovererRequestFilterSensitiveLog = (obj: DeleteDiscovererRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteRegistryRequestFilterSensitiveLog = (obj: DeleteRegistryRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteResourcePolicyRequestFilterSensitiveLog = (obj: DeleteResourcePolicyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteSchemaRequestFilterSensitiveLog = (obj: DeleteSchemaRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteSchemaVersionRequestFilterSensitiveLog = (obj: DeleteSchemaVersionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeCodeBindingRequestFilterSensitiveLog = (obj: DescribeCodeBindingRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeCodeBindingResponseFilterSensitiveLog = (obj: DescribeCodeBindingResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeDiscovererRequestFilterSensitiveLog = (obj: DescribeDiscovererRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeDiscovererResponseFilterSensitiveLog = (obj: DescribeDiscovererResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeRegistryRequestFilterSensitiveLog = (obj: DescribeRegistryRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeRegistryResponseFilterSensitiveLog = (obj: DescribeRegistryResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeSchemaRequestFilterSensitiveLog = (obj: DescribeSchemaRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeSchemaResponseFilterSensitiveLog = (obj: DescribeSchemaResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExportSchemaRequestFilterSensitiveLog = (obj: ExportSchemaRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExportSchemaResponseFilterSensitiveLog = (obj: ExportSchemaResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetCodeBindingSourceRequestFilterSensitiveLog = (obj: GetCodeBindingSourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetCodeBindingSourceResponseFilterSensitiveLog = (obj: GetCodeBindingSourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetDiscoveredSchemaRequestFilterSensitiveLog = (obj: GetDiscoveredSchemaRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetDiscoveredSchemaResponseFilterSensitiveLog = (obj: GetDiscoveredSchemaResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetResourcePolicyRequestFilterSensitiveLog = (obj: GetResourcePolicyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetResourcePolicyResponseFilterSensitiveLog = (obj: GetResourcePolicyResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDiscoverersRequestFilterSensitiveLog = (obj: ListDiscoverersRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDiscoverersResponseFilterSensitiveLog = (obj: ListDiscoverersResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListRegistriesRequestFilterSensitiveLog = (obj: ListRegistriesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListRegistriesResponseFilterSensitiveLog = (obj: ListRegistriesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListSchemasRequestFilterSensitiveLog = (obj: ListSchemasRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListSchemasResponseFilterSensitiveLog = (obj: ListSchemasResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListSchemaVersionsRequestFilterSensitiveLog = (obj: ListSchemaVersionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListSchemaVersionsResponseFilterSensitiveLog = (obj: ListSchemaVersionsResponse): any => ({
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
export const ListTagsForResourceResponseFilterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutCodeBindingRequestFilterSensitiveLog = (obj: PutCodeBindingRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutCodeBindingResponseFilterSensitiveLog = (obj: PutCodeBindingResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutResourcePolicyRequestFilterSensitiveLog = (obj: PutResourcePolicyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutResourcePolicyResponseFilterSensitiveLog = (obj: PutResourcePolicyResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SearchSchemasRequestFilterSensitiveLog = (obj: SearchSchemasRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SearchSchemasResponseFilterSensitiveLog = (obj: SearchSchemasResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartDiscovererRequestFilterSensitiveLog = (obj: StartDiscovererRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartDiscovererResponseFilterSensitiveLog = (obj: StartDiscovererResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopDiscovererRequestFilterSensitiveLog = (obj: StopDiscovererRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopDiscovererResponseFilterSensitiveLog = (obj: StopDiscovererResponse): any => ({
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
export const UntagResourceRequestFilterSensitiveLog = (obj: UntagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateDiscovererRequestFilterSensitiveLog = (obj: UpdateDiscovererRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateDiscovererResponseFilterSensitiveLog = (obj: UpdateDiscovererResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateRegistryRequestFilterSensitiveLog = (obj: UpdateRegistryRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateRegistryResponseFilterSensitiveLog = (obj: UpdateRegistryResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateSchemaRequestFilterSensitiveLog = (obj: UpdateSchemaRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateSchemaResponseFilterSensitiveLog = (obj: UpdateSchemaResponse): any => ({
  ...obj,
});
