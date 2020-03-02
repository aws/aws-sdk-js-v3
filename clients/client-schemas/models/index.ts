import {
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

export interface BadRequestException
  extends __SmithyException,
    $MetadataBearer {
  name: "BadRequestException";
  $fault: "client";
  /**
   * <p>The error code.</p>
   */
  Code: string | undefined;

  /**
   * <p>The message string of the error output.</p>
   */
  Message: string | undefined;
}

export namespace BadRequestException {
  export function isa(o: any): o is BadRequestException {
    return __isa(o, "BadRequestException");
  }
}

export enum CodeGenerationStatus {
  CREATE_COMPLETE = "CREATE_COMPLETE",
  CREATE_FAILED = "CREATE_FAILED",
  CREATE_IN_PROGRESS = "CREATE_IN_PROGRESS"
}

export interface ConflictException extends __SmithyException, $MetadataBearer {
  name: "ConflictException";
  $fault: "client";
  /**
   * <p>The error code.</p>
   */
  Code: string | undefined;

  /**
   * <p>The message string of the error output.</p>
   */
  Message: string | undefined;
}

export namespace ConflictException {
  export function isa(o: any): o is ConflictException {
    return __isa(o, "ConflictException");
  }
}

export interface CreateDiscovererRequest {
  __type?: "CreateDiscovererRequest";
  /**
   * <p>A description for the discoverer.</p>
   */
  Description?: string;

  /**
   * <p>The ARN of the event bus.</p>
   */
  SourceArn: string | undefined;

  /**
   * <p>Tags associated with the resource.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace CreateDiscovererRequest {
  export function isa(o: any): o is CreateDiscovererRequest {
    return __isa(o, "CreateDiscovererRequest");
  }
}

export interface CreateDiscovererResponse {
  __type?: "CreateDiscovererResponse";
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
   * <p>Tags associated with the resource.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace CreateDiscovererResponse {
  export function isa(o: any): o is CreateDiscovererResponse {
    return __isa(o, "CreateDiscovererResponse");
  }
}

export interface CreateRegistryRequest {
  __type?: "CreateRegistryRequest";
  /**
   * <p>A description of the registry to be created.</p>
   */
  Description?: string;

  RegistryName: string | undefined;
  /**
   * <p>Tags to associate with the registry.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace CreateRegistryRequest {
  export function isa(o: any): o is CreateRegistryRequest {
    return __isa(o, "CreateRegistryRequest");
  }
}

export interface CreateRegistryResponse {
  __type?: "CreateRegistryResponse";
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
  Tags?: { [key: string]: string };
}

export namespace CreateRegistryResponse {
  export function isa(o: any): o is CreateRegistryResponse {
    return __isa(o, "CreateRegistryResponse");
  }
}

export interface CreateSchemaRequest {
  __type?: "CreateSchemaRequest";
  Content: string | undefined;
  /**
   * <p>A description of the schema.</p>
   */
  Description?: string;

  RegistryName: string | undefined;
  SchemaName: string | undefined;
  /**
   * <p>Tags associated with the schema.</p>
   */
  Tags?: { [key: string]: string };

  Type: Type | string | undefined;
}

export namespace CreateSchemaRequest {
  export function isa(o: any): o is CreateSchemaRequest {
    return __isa(o, "CreateSchemaRequest");
  }
}

export interface CreateSchemaResponse {
  __type?: "CreateSchemaResponse";
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
  Tags?: { [key: string]: string };

  /**
   * <p>The type of the schema.</p>
   */
  Type?: string;

  /**
   * <p>The date the schema version was created.</p>
   */
  VersionCreatedDate?: Date;
}

export namespace CreateSchemaResponse {
  export function isa(o: any): o is CreateSchemaResponse {
    return __isa(o, "CreateSchemaResponse");
  }
}

export interface DeleteDiscovererRequest {
  __type?: "DeleteDiscovererRequest";
  DiscovererId: string | undefined;
}

export namespace DeleteDiscovererRequest {
  export function isa(o: any): o is DeleteDiscovererRequest {
    return __isa(o, "DeleteDiscovererRequest");
  }
}

export interface DeleteRegistryRequest {
  __type?: "DeleteRegistryRequest";
  RegistryName: string | undefined;
}

export namespace DeleteRegistryRequest {
  export function isa(o: any): o is DeleteRegistryRequest {
    return __isa(o, "DeleteRegistryRequest");
  }
}

export interface DeleteSchemaRequest {
  __type?: "DeleteSchemaRequest";
  RegistryName: string | undefined;
  SchemaName: string | undefined;
}

export namespace DeleteSchemaRequest {
  export function isa(o: any): o is DeleteSchemaRequest {
    return __isa(o, "DeleteSchemaRequest");
  }
}

export interface DeleteSchemaVersionRequest {
  __type?: "DeleteSchemaVersionRequest";
  RegistryName: string | undefined;
  SchemaName: string | undefined;
  SchemaVersion: string | undefined;
}

export namespace DeleteSchemaVersionRequest {
  export function isa(o: any): o is DeleteSchemaVersionRequest {
    return __isa(o, "DeleteSchemaVersionRequest");
  }
}

export interface DescribeCodeBindingRequest {
  __type?: "DescribeCodeBindingRequest";
  Language: string | undefined;
  RegistryName: string | undefined;
  SchemaName: string | undefined;
  SchemaVersion?: string;
}

export namespace DescribeCodeBindingRequest {
  export function isa(o: any): o is DescribeCodeBindingRequest {
    return __isa(o, "DescribeCodeBindingRequest");
  }
}

export interface DescribeCodeBindingResponse {
  __type?: "DescribeCodeBindingResponse";
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

export namespace DescribeCodeBindingResponse {
  export function isa(o: any): o is DescribeCodeBindingResponse {
    return __isa(o, "DescribeCodeBindingResponse");
  }
}

export interface DescribeDiscovererRequest {
  __type?: "DescribeDiscovererRequest";
  DiscovererId: string | undefined;
}

export namespace DescribeDiscovererRequest {
  export function isa(o: any): o is DescribeDiscovererRequest {
    return __isa(o, "DescribeDiscovererRequest");
  }
}

export interface DescribeDiscovererResponse {
  __type?: "DescribeDiscovererResponse";
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
   * <p>Tags associated with the resource.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace DescribeDiscovererResponse {
  export function isa(o: any): o is DescribeDiscovererResponse {
    return __isa(o, "DescribeDiscovererResponse");
  }
}

export interface DescribeRegistryRequest {
  __type?: "DescribeRegistryRequest";
  RegistryName: string | undefined;
}

export namespace DescribeRegistryRequest {
  export function isa(o: any): o is DescribeRegistryRequest {
    return __isa(o, "DescribeRegistryRequest");
  }
}

export interface DescribeRegistryResponse {
  __type?: "DescribeRegistryResponse";
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
  Tags?: { [key: string]: string };
}

export namespace DescribeRegistryResponse {
  export function isa(o: any): o is DescribeRegistryResponse {
    return __isa(o, "DescribeRegistryResponse");
  }
}

export interface DescribeSchemaRequest {
  __type?: "DescribeSchemaRequest";
  RegistryName: string | undefined;
  SchemaName: string | undefined;
  SchemaVersion?: string;
}

export namespace DescribeSchemaRequest {
  export function isa(o: any): o is DescribeSchemaRequest {
    return __isa(o, "DescribeSchemaRequest");
  }
}

export interface DescribeSchemaResponse {
  __type?: "DescribeSchemaResponse";
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
  Tags?: { [key: string]: string };

  /**
   * <p>The type of the schema.</p>
   */
  Type?: string;

  /**
   * <p>The date the schema version was created.</p>
   */
  VersionCreatedDate?: Date;
}

export namespace DescribeSchemaResponse {
  export function isa(o: any): o is DescribeSchemaResponse {
    return __isa(o, "DescribeSchemaResponse");
  }
}

export enum DiscovererState {
  STARTED = "STARTED",
  STOPPED = "STOPPED"
}

export interface DiscovererSummary {
  __type?: "DiscovererSummary";
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

  State?: DiscovererState | string;
  /**
   * <p>Tags associated with the resource.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace DiscovererSummary {
  export function isa(o: any): o is DiscovererSummary {
    return __isa(o, "DiscovererSummary");
  }
}

export interface ForbiddenException extends __SmithyException, $MetadataBearer {
  name: "ForbiddenException";
  $fault: "client";
  /**
   * <p>The error code.</p>
   */
  Code: string | undefined;

  /**
   * <p>The message string of the error output.</p>
   */
  Message: string | undefined;
}

export namespace ForbiddenException {
  export function isa(o: any): o is ForbiddenException {
    return __isa(o, "ForbiddenException");
  }
}

export interface GetCodeBindingSourceRequest {
  __type?: "GetCodeBindingSourceRequest";
  Language: string | undefined;
  RegistryName: string | undefined;
  SchemaName: string | undefined;
  SchemaVersion?: string;
}

export namespace GetCodeBindingSourceRequest {
  export function isa(o: any): o is GetCodeBindingSourceRequest {
    return __isa(o, "GetCodeBindingSourceRequest");
  }
}

export interface GetCodeBindingSourceResponse {
  __type?: "GetCodeBindingSourceResponse";
  Body?: Uint8Array;
}

export namespace GetCodeBindingSourceResponse {
  export function isa(o: any): o is GetCodeBindingSourceResponse {
    return __isa(o, "GetCodeBindingSourceResponse");
  }
}

export interface GetDiscoveredSchemaRequest {
  __type?: "GetDiscoveredSchemaRequest";
  /**
   * <p>An array of strings that</p>
   */
  Events: Array<string> | undefined;

  /**
   * <p>The type of event.</p>
   */
  Type: Type | string | undefined;
}

export namespace GetDiscoveredSchemaRequest {
  export function isa(o: any): o is GetDiscoveredSchemaRequest {
    return __isa(o, "GetDiscoveredSchemaRequest");
  }
}

export interface GetDiscoveredSchemaResponse {
  __type?: "GetDiscoveredSchemaResponse";
  Content?: string;
}

export namespace GetDiscoveredSchemaResponse {
  export function isa(o: any): o is GetDiscoveredSchemaResponse {
    return __isa(o, "GetDiscoveredSchemaResponse");
  }
}

export interface GoneException extends __SmithyException, $MetadataBearer {
  name: "GoneException";
  $fault: "client";
  /**
   * <p>The error code.</p>
   */
  Code: string | undefined;

  /**
   * <p>The message string of the error output.</p>
   */
  Message: string | undefined;
}

export namespace GoneException {
  export function isa(o: any): o is GoneException {
    return __isa(o, "GoneException");
  }
}

export interface InternalServerErrorException
  extends __SmithyException,
    $MetadataBearer {
  name: "InternalServerErrorException";
  $fault: "server";
  /**
   * <p>The error code.</p>
   */
  Code: string | undefined;

  /**
   * <p>The message string of the error output.</p>
   */
  Message: string | undefined;
}

export namespace InternalServerErrorException {
  export function isa(o: any): o is InternalServerErrorException {
    return __isa(o, "InternalServerErrorException");
  }
}

export interface ListDiscoverersRequest {
  __type?: "ListDiscoverersRequest";
  DiscovererIdPrefix?: string;
  Limit?: number;
  NextToken?: string;
  SourceArnPrefix?: string;
}

export namespace ListDiscoverersRequest {
  export function isa(o: any): o is ListDiscoverersRequest {
    return __isa(o, "ListDiscoverersRequest");
  }
}

export interface ListDiscoverersResponse {
  __type?: "ListDiscoverersResponse";
  /**
   * <p>An array of DiscovererSummary information.</p>
   */
  Discoverers?: Array<DiscovererSummary>;

  /**
   * <p>The token that specifies the next page of results to return. To request the first page, leave NextToken empty. The token will expire in 24 hours, and cannot be shared with other accounts.</p>
   */
  NextToken?: string;
}

export namespace ListDiscoverersResponse {
  export function isa(o: any): o is ListDiscoverersResponse {
    return __isa(o, "ListDiscoverersResponse");
  }
}

export interface ListRegistriesRequest {
  __type?: "ListRegistriesRequest";
  Limit?: number;
  NextToken?: string;
  RegistryNamePrefix?: string;
  Scope?: string;
}

export namespace ListRegistriesRequest {
  export function isa(o: any): o is ListRegistriesRequest {
    return __isa(o, "ListRegistriesRequest");
  }
}

export interface ListRegistriesResponse {
  __type?: "ListRegistriesResponse";
  /**
   * <p>The token that specifies the next page of results to return. To request the first page, leave NextToken empty. The token will expire in 24 hours, and cannot be shared with other accounts.</p>
   */
  NextToken?: string;

  /**
   * <p>An array of registry summaries.</p>
   */
  Registries?: Array<RegistrySummary>;
}

export namespace ListRegistriesResponse {
  export function isa(o: any): o is ListRegistriesResponse {
    return __isa(o, "ListRegistriesResponse");
  }
}

export interface ListSchemaVersionsRequest {
  __type?: "ListSchemaVersionsRequest";
  Limit?: number;
  NextToken?: string;
  RegistryName: string | undefined;
  SchemaName: string | undefined;
}

export namespace ListSchemaVersionsRequest {
  export function isa(o: any): o is ListSchemaVersionsRequest {
    return __isa(o, "ListSchemaVersionsRequest");
  }
}

export interface ListSchemaVersionsResponse {
  __type?: "ListSchemaVersionsResponse";
  /**
   * <p>The token that specifies the next page of results to return. To request the first page, leave NextToken empty. The token will expire in 24 hours, and cannot be shared with other accounts.</p>
   */
  NextToken?: string;

  /**
   * <p>An array of schema version summaries.</p>
   */
  SchemaVersions?: Array<SchemaVersionSummary>;
}

export namespace ListSchemaVersionsResponse {
  export function isa(o: any): o is ListSchemaVersionsResponse {
    return __isa(o, "ListSchemaVersionsResponse");
  }
}

export interface ListSchemasRequest {
  __type?: "ListSchemasRequest";
  Limit?: number;
  NextToken?: string;
  RegistryName: string | undefined;
  SchemaNamePrefix?: string;
}

export namespace ListSchemasRequest {
  export function isa(o: any): o is ListSchemasRequest {
    return __isa(o, "ListSchemasRequest");
  }
}

export interface ListSchemasResponse {
  __type?: "ListSchemasResponse";
  /**
   * <p>The token that specifies the next page of results to return. To request the first page, leave NextToken empty. The token will expire in 24 hours, and cannot be shared with other accounts.</p>
   */
  NextToken?: string;

  /**
   * <p>An array of schema summaries.</p>
   */
  Schemas?: Array<SchemaSummary>;
}

export namespace ListSchemasResponse {
  export function isa(o: any): o is ListSchemasResponse {
    return __isa(o, "ListSchemasResponse");
  }
}

export interface ListTagsForResourceRequest {
  __type?: "ListTagsForResourceRequest";
  ResourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  export function isa(o: any): o is ListTagsForResourceRequest {
    return __isa(o, "ListTagsForResourceRequest");
  }
}

export interface ListTagsForResourceResponse {
  __type?: "ListTagsForResourceResponse";
  /**
   * <p>Key-value pairs associated with a resource.</p>
   */
  Tags: { [key: string]: string } | undefined;
}

export namespace ListTagsForResourceResponse {
  export function isa(o: any): o is ListTagsForResourceResponse {
    return __isa(o, "ListTagsForResourceResponse");
  }
}

export interface LockServiceLinkedRoleRequest {
  __type?: "LockServiceLinkedRoleRequest";
  RoleArn: string | undefined;
  Timeout: number | undefined;
}

export namespace LockServiceLinkedRoleRequest {
  export function isa(o: any): o is LockServiceLinkedRoleRequest {
    return __isa(o, "LockServiceLinkedRoleRequest");
  }
}

export interface LockServiceLinkedRoleResponse {
  __type?: "LockServiceLinkedRoleResponse";
  CanBeDeleted?: boolean;
  ReasonOfFailure?: string;
  RelatedResources?: Array<DiscovererSummary>;
}

export namespace LockServiceLinkedRoleResponse {
  export function isa(o: any): o is LockServiceLinkedRoleResponse {
    return __isa(o, "LockServiceLinkedRoleResponse");
  }
}

export interface NotFoundException extends __SmithyException, $MetadataBearer {
  name: "NotFoundException";
  $fault: "client";
  /**
   * <p>The error code.</p>
   */
  Code: string | undefined;

  /**
   * <p>The message string of the error output.</p>
   */
  Message: string | undefined;
}

export namespace NotFoundException {
  export function isa(o: any): o is NotFoundException {
    return __isa(o, "NotFoundException");
  }
}

export interface PutCodeBindingRequest {
  __type?: "PutCodeBindingRequest";
  Language: string | undefined;
  RegistryName: string | undefined;
  SchemaName: string | undefined;
  SchemaVersion?: string;
}

export namespace PutCodeBindingRequest {
  export function isa(o: any): o is PutCodeBindingRequest {
    return __isa(o, "PutCodeBindingRequest");
  }
}

export interface PutCodeBindingResponse {
  __type?: "PutCodeBindingResponse";
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

export namespace PutCodeBindingResponse {
  export function isa(o: any): o is PutCodeBindingResponse {
    return __isa(o, "PutCodeBindingResponse");
  }
}

export interface RegistrySummary {
  __type?: "RegistrySummary";
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
  Tags?: { [key: string]: string };
}

export namespace RegistrySummary {
  export function isa(o: any): o is RegistrySummary {
    return __isa(o, "RegistrySummary");
  }
}

/**
 * <p>A summary of schema details.</p>
 */
export interface SchemaSummary {
  __type?: "SchemaSummary";
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
  Tags?: { [key: string]: string };

  /**
   * <p>The number of versions available for the schema.</p>
   */
  VersionCount?: number;
}

export namespace SchemaSummary {
  export function isa(o: any): o is SchemaSummary {
    return __isa(o, "SchemaSummary");
  }
}

export interface SchemaVersionSummary {
  __type?: "SchemaVersionSummary";
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
}

export namespace SchemaVersionSummary {
  export function isa(o: any): o is SchemaVersionSummary {
    return __isa(o, "SchemaVersionSummary");
  }
}

export interface SearchSchemaSummary {
  __type?: "SearchSchemaSummary";
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
  SchemaVersions?: Array<SearchSchemaVersionSummary>;
}

export namespace SearchSchemaSummary {
  export function isa(o: any): o is SearchSchemaSummary {
    return __isa(o, "SearchSchemaSummary");
  }
}

export interface SearchSchemaVersionSummary {
  __type?: "SearchSchemaVersionSummary";
  CreatedDate?: Date;
  /**
   * <p>The version number of the schema</p>
   */
  SchemaVersion?: string;
}

export namespace SearchSchemaVersionSummary {
  export function isa(o: any): o is SearchSchemaVersionSummary {
    return __isa(o, "SearchSchemaVersionSummary");
  }
}

export interface SearchSchemasRequest {
  __type?: "SearchSchemasRequest";
  Keywords: string | undefined;
  Limit?: number;
  NextToken?: string;
  RegistryName: string | undefined;
}

export namespace SearchSchemasRequest {
  export function isa(o: any): o is SearchSchemasRequest {
    return __isa(o, "SearchSchemasRequest");
  }
}

export interface SearchSchemasResponse {
  __type?: "SearchSchemasResponse";
  /**
   * <p>The token that specifies the next page of results to return. To request the first page, leave NextToken empty. The token will expire in 24 hours, and cannot be shared with other accounts.</p>
   */
  NextToken?: string;

  /**
   * <p>An array of SearchSchemaSummary information.</p>
   */
  Schemas?: Array<SearchSchemaSummary>;
}

export namespace SearchSchemasResponse {
  export function isa(o: any): o is SearchSchemasResponse {
    return __isa(o, "SearchSchemasResponse");
  }
}

export interface ServiceUnavailableException
  extends __SmithyException,
    $MetadataBearer {
  name: "ServiceUnavailableException";
  $fault: "server";
  /**
   * <p>The error code.</p>
   */
  Code: string | undefined;

  /**
   * <p>The message string of the error output.</p>
   */
  Message: string | undefined;
}

export namespace ServiceUnavailableException {
  export function isa(o: any): o is ServiceUnavailableException {
    return __isa(o, "ServiceUnavailableException");
  }
}

export interface StartDiscovererRequest {
  __type?: "StartDiscovererRequest";
  DiscovererId: string | undefined;
}

export namespace StartDiscovererRequest {
  export function isa(o: any): o is StartDiscovererRequest {
    return __isa(o, "StartDiscovererRequest");
  }
}

export interface StartDiscovererResponse {
  __type?: "StartDiscovererResponse";
  /**
   * <p>The ID of the discoverer.</p>
   */
  DiscovererId?: string;

  /**
   * <p>The state of the discoverer.</p>
   */
  State?: DiscovererState | string;
}

export namespace StartDiscovererResponse {
  export function isa(o: any): o is StartDiscovererResponse {
    return __isa(o, "StartDiscovererResponse");
  }
}

export interface StopDiscovererRequest {
  __type?: "StopDiscovererRequest";
  DiscovererId: string | undefined;
}

export namespace StopDiscovererRequest {
  export function isa(o: any): o is StopDiscovererRequest {
    return __isa(o, "StopDiscovererRequest");
  }
}

export interface StopDiscovererResponse {
  __type?: "StopDiscovererResponse";
  /**
   * <p>The ID of the discoverer.</p>
   */
  DiscovererId?: string;

  /**
   * <p>The state of the discoverer.</p>
   */
  State?: DiscovererState | string;
}

export namespace StopDiscovererResponse {
  export function isa(o: any): o is StopDiscovererResponse {
    return __isa(o, "StopDiscovererResponse");
  }
}

export interface TagResourceRequest {
  __type?: "TagResourceRequest";
  ResourceArn: string | undefined;
  /**
   * <p>Key-value pairs associated with a resource.</p>
   */
  Tags: { [key: string]: string } | undefined;
}

export namespace TagResourceRequest {
  export function isa(o: any): o is TagResourceRequest {
    return __isa(o, "TagResourceRequest");
  }
}

export interface TooManyRequestsException
  extends __SmithyException,
    $MetadataBearer {
  name: "TooManyRequestsException";
  $fault: "client";
  /**
   * <p>The error code.</p>
   */
  Code: string | undefined;

  /**
   * <p>The message string of the error output.</p>
   */
  Message: string | undefined;
}

export namespace TooManyRequestsException {
  export function isa(o: any): o is TooManyRequestsException {
    return __isa(o, "TooManyRequestsException");
  }
}

export enum Type {
  OpenApi3 = "OpenApi3"
}

export interface UnauthorizedException
  extends __SmithyException,
    $MetadataBearer {
  name: "UnauthorizedException";
  $fault: "client";
  /**
   * <p>The error code.</p>
   */
  Code: string | undefined;

  /**
   * <p>The message string of the error output.</p>
   */
  Message: string | undefined;
}

export namespace UnauthorizedException {
  export function isa(o: any): o is UnauthorizedException {
    return __isa(o, "UnauthorizedException");
  }
}

export interface UnlockServiceLinkedRoleRequest {
  __type?: "UnlockServiceLinkedRoleRequest";
  RoleArn: string | undefined;
}

export namespace UnlockServiceLinkedRoleRequest {
  export function isa(o: any): o is UnlockServiceLinkedRoleRequest {
    return __isa(o, "UnlockServiceLinkedRoleRequest");
  }
}

export interface UnlockServiceLinkedRoleResponse {
  __type?: "UnlockServiceLinkedRoleResponse";
}

export namespace UnlockServiceLinkedRoleResponse {
  export function isa(o: any): o is UnlockServiceLinkedRoleResponse {
    return __isa(o, "UnlockServiceLinkedRoleResponse");
  }
}

export interface UntagResourceRequest {
  __type?: "UntagResourceRequest";
  ResourceArn: string | undefined;
  TagKeys: Array<string> | undefined;
}

export namespace UntagResourceRequest {
  export function isa(o: any): o is UntagResourceRequest {
    return __isa(o, "UntagResourceRequest");
  }
}

export interface UpdateDiscovererRequest {
  __type?: "UpdateDiscovererRequest";
  /**
   * <p>The description of the discoverer to update.</p>
   */
  Description?: string;

  DiscovererId: string | undefined;
}

export namespace UpdateDiscovererRequest {
  export function isa(o: any): o is UpdateDiscovererRequest {
    return __isa(o, "UpdateDiscovererRequest");
  }
}

export interface UpdateDiscovererResponse {
  __type?: "UpdateDiscovererResponse";
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
   * <p>Tags associated with the resource.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace UpdateDiscovererResponse {
  export function isa(o: any): o is UpdateDiscovererResponse {
    return __isa(o, "UpdateDiscovererResponse");
  }
}

export interface UpdateRegistryRequest {
  __type?: "UpdateRegistryRequest";
  /**
   * <p>The description of the registry to update.</p>
   */
  Description?: string;

  RegistryName: string | undefined;
}

export namespace UpdateRegistryRequest {
  export function isa(o: any): o is UpdateRegistryRequest {
    return __isa(o, "UpdateRegistryRequest");
  }
}

export interface UpdateRegistryResponse {
  __type?: "UpdateRegistryResponse";
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
  Tags?: { [key: string]: string };
}

export namespace UpdateRegistryResponse {
  export function isa(o: any): o is UpdateRegistryResponse {
    return __isa(o, "UpdateRegistryResponse");
  }
}

export interface UpdateSchemaRequest {
  __type?: "UpdateSchemaRequest";
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

  RegistryName: string | undefined;
  SchemaName: string | undefined;
  /**
   * <p>The schema type for the events schema.</p>
   */
  Type?: Type | string;
}

export namespace UpdateSchemaRequest {
  export function isa(o: any): o is UpdateSchemaRequest {
    return __isa(o, "UpdateSchemaRequest");
  }
}

export interface UpdateSchemaResponse {
  __type?: "UpdateSchemaResponse";
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
  Tags?: { [key: string]: string };

  /**
   * <p>The type of the schema.</p>
   */
  Type?: string;

  /**
   * <p>The date the schema version was created.</p>
   */
  VersionCreatedDate?: Date;
}

export namespace UpdateSchemaResponse {
  export function isa(o: any): o is UpdateSchemaResponse {
    return __isa(o, "UpdateSchemaResponse");
  }
}
