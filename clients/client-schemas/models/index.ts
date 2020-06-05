import {
  SENSITIVE_STRING,
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
  export const filterSensitiveLog = (obj: BadRequestException): any => ({
    ...obj
  });
  export const isa = (o: any): o is BadRequestException =>
    __isa(o, "BadRequestException");
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
  export const filterSensitiveLog = (obj: ConflictException): any => ({
    ...obj
  });
  export const isa = (o: any): o is ConflictException =>
    __isa(o, "ConflictException");
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
  export const filterSensitiveLog = (obj: CreateDiscovererRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateDiscovererRequest =>
    __isa(o, "CreateDiscovererRequest");
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
  export const filterSensitiveLog = (obj: CreateDiscovererResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateDiscovererResponse =>
    __isa(o, "CreateDiscovererResponse");
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
  export const filterSensitiveLog = (obj: CreateRegistryRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateRegistryRequest =>
    __isa(o, "CreateRegistryRequest");
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
  export const filterSensitiveLog = (obj: CreateRegistryResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateRegistryResponse =>
    __isa(o, "CreateRegistryResponse");
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
  export const filterSensitiveLog = (obj: CreateSchemaRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateSchemaRequest =>
    __isa(o, "CreateSchemaRequest");
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
  export const filterSensitiveLog = (obj: CreateSchemaResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateSchemaResponse =>
    __isa(o, "CreateSchemaResponse");
}

export interface DeleteDiscovererRequest {
  __type?: "DeleteDiscovererRequest";
  DiscovererId: string | undefined;
}

export namespace DeleteDiscovererRequest {
  export const filterSensitiveLog = (obj: DeleteDiscovererRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteDiscovererRequest =>
    __isa(o, "DeleteDiscovererRequest");
}

export interface DeleteRegistryRequest {
  __type?: "DeleteRegistryRequest";
  RegistryName: string | undefined;
}

export namespace DeleteRegistryRequest {
  export const filterSensitiveLog = (obj: DeleteRegistryRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteRegistryRequest =>
    __isa(o, "DeleteRegistryRequest");
}

export interface DeleteSchemaRequest {
  __type?: "DeleteSchemaRequest";
  RegistryName: string | undefined;
  SchemaName: string | undefined;
}

export namespace DeleteSchemaRequest {
  export const filterSensitiveLog = (obj: DeleteSchemaRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteSchemaRequest =>
    __isa(o, "DeleteSchemaRequest");
}

export interface DeleteSchemaVersionRequest {
  __type?: "DeleteSchemaVersionRequest";
  RegistryName: string | undefined;
  SchemaName: string | undefined;
  SchemaVersion: string | undefined;
}

export namespace DeleteSchemaVersionRequest {
  export const filterSensitiveLog = (obj: DeleteSchemaVersionRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteSchemaVersionRequest =>
    __isa(o, "DeleteSchemaVersionRequest");
}

export interface DescribeCodeBindingRequest {
  __type?: "DescribeCodeBindingRequest";
  Language: string | undefined;
  RegistryName: string | undefined;
  SchemaName: string | undefined;
  SchemaVersion?: string;
}

export namespace DescribeCodeBindingRequest {
  export const filterSensitiveLog = (obj: DescribeCodeBindingRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeCodeBindingRequest =>
    __isa(o, "DescribeCodeBindingRequest");
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
  export const filterSensitiveLog = (
    obj: DescribeCodeBindingResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeCodeBindingResponse =>
    __isa(o, "DescribeCodeBindingResponse");
}

export interface DescribeDiscovererRequest {
  __type?: "DescribeDiscovererRequest";
  DiscovererId: string | undefined;
}

export namespace DescribeDiscovererRequest {
  export const filterSensitiveLog = (obj: DescribeDiscovererRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeDiscovererRequest =>
    __isa(o, "DescribeDiscovererRequest");
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
  export const filterSensitiveLog = (obj: DescribeDiscovererResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeDiscovererResponse =>
    __isa(o, "DescribeDiscovererResponse");
}

export interface DescribeRegistryRequest {
  __type?: "DescribeRegistryRequest";
  RegistryName: string | undefined;
}

export namespace DescribeRegistryRequest {
  export const filterSensitiveLog = (obj: DescribeRegistryRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeRegistryRequest =>
    __isa(o, "DescribeRegistryRequest");
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
  export const filterSensitiveLog = (obj: DescribeRegistryResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeRegistryResponse =>
    __isa(o, "DescribeRegistryResponse");
}

export interface DescribeSchemaRequest {
  __type?: "DescribeSchemaRequest";
  RegistryName: string | undefined;
  SchemaName: string | undefined;
  SchemaVersion?: string;
}

export namespace DescribeSchemaRequest {
  export const filterSensitiveLog = (obj: DescribeSchemaRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeSchemaRequest =>
    __isa(o, "DescribeSchemaRequest");
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
  export const filterSensitiveLog = (obj: DescribeSchemaResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeSchemaResponse =>
    __isa(o, "DescribeSchemaResponse");
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
  export const filterSensitiveLog = (obj: DiscovererSummary): any => ({
    ...obj
  });
  export const isa = (o: any): o is DiscovererSummary =>
    __isa(o, "DiscovererSummary");
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
  export const filterSensitiveLog = (obj: ForbiddenException): any => ({
    ...obj
  });
  export const isa = (o: any): o is ForbiddenException =>
    __isa(o, "ForbiddenException");
}

export interface GetCodeBindingSourceRequest {
  __type?: "GetCodeBindingSourceRequest";
  Language: string | undefined;
  RegistryName: string | undefined;
  SchemaName: string | undefined;
  SchemaVersion?: string;
}

export namespace GetCodeBindingSourceRequest {
  export const filterSensitiveLog = (
    obj: GetCodeBindingSourceRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetCodeBindingSourceRequest =>
    __isa(o, "GetCodeBindingSourceRequest");
}

export interface GetCodeBindingSourceResponse {
  __type?: "GetCodeBindingSourceResponse";
  Body?: Uint8Array;
}

export namespace GetCodeBindingSourceResponse {
  export const filterSensitiveLog = (
    obj: GetCodeBindingSourceResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetCodeBindingSourceResponse =>
    __isa(o, "GetCodeBindingSourceResponse");
}

export interface GetDiscoveredSchemaRequest {
  __type?: "GetDiscoveredSchemaRequest";
  /**
   * <p>An array of strings that</p>
   */
  Events: string[] | undefined;

  /**
   * <p>The type of event.</p>
   */
  Type: Type | string | undefined;
}

export namespace GetDiscoveredSchemaRequest {
  export const filterSensitiveLog = (obj: GetDiscoveredSchemaRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetDiscoveredSchemaRequest =>
    __isa(o, "GetDiscoveredSchemaRequest");
}

export interface GetDiscoveredSchemaResponse {
  __type?: "GetDiscoveredSchemaResponse";
  Content?: string;
}

export namespace GetDiscoveredSchemaResponse {
  export const filterSensitiveLog = (
    obj: GetDiscoveredSchemaResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetDiscoveredSchemaResponse =>
    __isa(o, "GetDiscoveredSchemaResponse");
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
  export const filterSensitiveLog = (obj: GoneException): any => ({
    ...obj
  });
  export const isa = (o: any): o is GoneException => __isa(o, "GoneException");
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
  export const filterSensitiveLog = (
    obj: InternalServerErrorException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InternalServerErrorException =>
    __isa(o, "InternalServerErrorException");
}

export interface ListDiscoverersRequest {
  __type?: "ListDiscoverersRequest";
  DiscovererIdPrefix?: string;
  Limit?: number;
  NextToken?: string;
  SourceArnPrefix?: string;
}

export namespace ListDiscoverersRequest {
  export const filterSensitiveLog = (obj: ListDiscoverersRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListDiscoverersRequest =>
    __isa(o, "ListDiscoverersRequest");
}

export interface ListDiscoverersResponse {
  __type?: "ListDiscoverersResponse";
  /**
   * <p>An array of DiscovererSummary information.</p>
   */
  Discoverers?: DiscovererSummary[];

  /**
   * <p>The token that specifies the next page of results to return. To request the first page, leave NextToken empty. The token will expire in 24 hours, and cannot be shared with other accounts.</p>
   */
  NextToken?: string;
}

export namespace ListDiscoverersResponse {
  export const filterSensitiveLog = (obj: ListDiscoverersResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListDiscoverersResponse =>
    __isa(o, "ListDiscoverersResponse");
}

export interface ListRegistriesRequest {
  __type?: "ListRegistriesRequest";
  Limit?: number;
  NextToken?: string;
  RegistryNamePrefix?: string;
  Scope?: string;
}

export namespace ListRegistriesRequest {
  export const filterSensitiveLog = (obj: ListRegistriesRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListRegistriesRequest =>
    __isa(o, "ListRegistriesRequest");
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
  Registries?: RegistrySummary[];
}

export namespace ListRegistriesResponse {
  export const filterSensitiveLog = (obj: ListRegistriesResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListRegistriesResponse =>
    __isa(o, "ListRegistriesResponse");
}

export interface ListSchemasRequest {
  __type?: "ListSchemasRequest";
  Limit?: number;
  NextToken?: string;
  RegistryName: string | undefined;
  SchemaNamePrefix?: string;
}

export namespace ListSchemasRequest {
  export const filterSensitiveLog = (obj: ListSchemasRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListSchemasRequest =>
    __isa(o, "ListSchemasRequest");
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
  Schemas?: SchemaSummary[];
}

export namespace ListSchemasResponse {
  export const filterSensitiveLog = (obj: ListSchemasResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListSchemasResponse =>
    __isa(o, "ListSchemasResponse");
}

export interface ListSchemaVersionsRequest {
  __type?: "ListSchemaVersionsRequest";
  Limit?: number;
  NextToken?: string;
  RegistryName: string | undefined;
  SchemaName: string | undefined;
}

export namespace ListSchemaVersionsRequest {
  export const filterSensitiveLog = (obj: ListSchemaVersionsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListSchemaVersionsRequest =>
    __isa(o, "ListSchemaVersionsRequest");
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
  SchemaVersions?: SchemaVersionSummary[];
}

export namespace ListSchemaVersionsResponse {
  export const filterSensitiveLog = (obj: ListSchemaVersionsResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListSchemaVersionsResponse =>
    __isa(o, "ListSchemaVersionsResponse");
}

export interface ListTagsForResourceRequest {
  __type?: "ListTagsForResourceRequest";
  ResourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListTagsForResourceRequest =>
    __isa(o, "ListTagsForResourceRequest");
}

export interface ListTagsForResourceResponse {
  __type?: "ListTagsForResourceResponse";
  /**
   * <p>Key-value pairs associated with a resource.</p>
   */
  Tags: { [key: string]: string } | undefined;
}

export namespace ListTagsForResourceResponse {
  export const filterSensitiveLog = (
    obj: ListTagsForResourceResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListTagsForResourceResponse =>
    __isa(o, "ListTagsForResourceResponse");
}

export interface LockServiceLinkedRoleRequest {
  __type?: "LockServiceLinkedRoleRequest";
  RoleArn: string | undefined;
  Timeout: number | undefined;
}

export namespace LockServiceLinkedRoleRequest {
  export const filterSensitiveLog = (
    obj: LockServiceLinkedRoleRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is LockServiceLinkedRoleRequest =>
    __isa(o, "LockServiceLinkedRoleRequest");
}

export interface LockServiceLinkedRoleResponse {
  __type?: "LockServiceLinkedRoleResponse";
  CanBeDeleted?: boolean;
  ReasonOfFailure?: string;
  RelatedResources?: DiscovererSummary[];
}

export namespace LockServiceLinkedRoleResponse {
  export const filterSensitiveLog = (
    obj: LockServiceLinkedRoleResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is LockServiceLinkedRoleResponse =>
    __isa(o, "LockServiceLinkedRoleResponse");
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
  export const filterSensitiveLog = (obj: NotFoundException): any => ({
    ...obj
  });
  export const isa = (o: any): o is NotFoundException =>
    __isa(o, "NotFoundException");
}

export interface PutCodeBindingRequest {
  __type?: "PutCodeBindingRequest";
  Language: string | undefined;
  RegistryName: string | undefined;
  SchemaName: string | undefined;
  SchemaVersion?: string;
}

export namespace PutCodeBindingRequest {
  export const filterSensitiveLog = (obj: PutCodeBindingRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is PutCodeBindingRequest =>
    __isa(o, "PutCodeBindingRequest");
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
  export const filterSensitiveLog = (obj: PutCodeBindingResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is PutCodeBindingResponse =>
    __isa(o, "PutCodeBindingResponse");
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
  export const filterSensitiveLog = (obj: RegistrySummary): any => ({
    ...obj
  });
  export const isa = (o: any): o is RegistrySummary =>
    __isa(o, "RegistrySummary");
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
  export const filterSensitiveLog = (obj: SchemaSummary): any => ({
    ...obj
  });
  export const isa = (o: any): o is SchemaSummary => __isa(o, "SchemaSummary");
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
  export const filterSensitiveLog = (obj: SchemaVersionSummary): any => ({
    ...obj
  });
  export const isa = (o: any): o is SchemaVersionSummary =>
    __isa(o, "SchemaVersionSummary");
}

export interface SearchSchemasRequest {
  __type?: "SearchSchemasRequest";
  Keywords: string | undefined;
  Limit?: number;
  NextToken?: string;
  RegistryName: string | undefined;
}

export namespace SearchSchemasRequest {
  export const filterSensitiveLog = (obj: SearchSchemasRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is SearchSchemasRequest =>
    __isa(o, "SearchSchemasRequest");
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
  Schemas?: SearchSchemaSummary[];
}

export namespace SearchSchemasResponse {
  export const filterSensitiveLog = (obj: SearchSchemasResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is SearchSchemasResponse =>
    __isa(o, "SearchSchemasResponse");
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
  SchemaVersions?: SearchSchemaVersionSummary[];
}

export namespace SearchSchemaSummary {
  export const filterSensitiveLog = (obj: SearchSchemaSummary): any => ({
    ...obj
  });
  export const isa = (o: any): o is SearchSchemaSummary =>
    __isa(o, "SearchSchemaSummary");
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
  export const filterSensitiveLog = (obj: SearchSchemaVersionSummary): any => ({
    ...obj
  });
  export const isa = (o: any): o is SearchSchemaVersionSummary =>
    __isa(o, "SearchSchemaVersionSummary");
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
  export const filterSensitiveLog = (
    obj: ServiceUnavailableException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ServiceUnavailableException =>
    __isa(o, "ServiceUnavailableException");
}

export interface StartDiscovererRequest {
  __type?: "StartDiscovererRequest";
  DiscovererId: string | undefined;
}

export namespace StartDiscovererRequest {
  export const filterSensitiveLog = (obj: StartDiscovererRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is StartDiscovererRequest =>
    __isa(o, "StartDiscovererRequest");
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
  export const filterSensitiveLog = (obj: StartDiscovererResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is StartDiscovererResponse =>
    __isa(o, "StartDiscovererResponse");
}

export interface StopDiscovererRequest {
  __type?: "StopDiscovererRequest";
  DiscovererId: string | undefined;
}

export namespace StopDiscovererRequest {
  export const filterSensitiveLog = (obj: StopDiscovererRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is StopDiscovererRequest =>
    __isa(o, "StopDiscovererRequest");
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
  export const filterSensitiveLog = (obj: StopDiscovererResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is StopDiscovererResponse =>
    __isa(o, "StopDiscovererResponse");
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
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is TagResourceRequest =>
    __isa(o, "TagResourceRequest");
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
  export const filterSensitiveLog = (obj: TooManyRequestsException): any => ({
    ...obj
  });
  export const isa = (o: any): o is TooManyRequestsException =>
    __isa(o, "TooManyRequestsException");
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
  export const filterSensitiveLog = (obj: UnauthorizedException): any => ({
    ...obj
  });
  export const isa = (o: any): o is UnauthorizedException =>
    __isa(o, "UnauthorizedException");
}

export interface UnlockServiceLinkedRoleRequest {
  __type?: "UnlockServiceLinkedRoleRequest";
  RoleArn: string | undefined;
}

export namespace UnlockServiceLinkedRoleRequest {
  export const filterSensitiveLog = (
    obj: UnlockServiceLinkedRoleRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UnlockServiceLinkedRoleRequest =>
    __isa(o, "UnlockServiceLinkedRoleRequest");
}

export interface UnlockServiceLinkedRoleResponse {
  __type?: "UnlockServiceLinkedRoleResponse";
}

export namespace UnlockServiceLinkedRoleResponse {
  export const filterSensitiveLog = (
    obj: UnlockServiceLinkedRoleResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UnlockServiceLinkedRoleResponse =>
    __isa(o, "UnlockServiceLinkedRoleResponse");
}

export interface UntagResourceRequest {
  __type?: "UntagResourceRequest";
  ResourceArn: string | undefined;
  TagKeys: string[] | undefined;
}

export namespace UntagResourceRequest {
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is UntagResourceRequest =>
    __isa(o, "UntagResourceRequest");
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
  export const filterSensitiveLog = (obj: UpdateDiscovererRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateDiscovererRequest =>
    __isa(o, "UpdateDiscovererRequest");
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
  export const filterSensitiveLog = (obj: UpdateDiscovererResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateDiscovererResponse =>
    __isa(o, "UpdateDiscovererResponse");
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
  export const filterSensitiveLog = (obj: UpdateRegistryRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateRegistryRequest =>
    __isa(o, "UpdateRegistryRequest");
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
  export const filterSensitiveLog = (obj: UpdateRegistryResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateRegistryResponse =>
    __isa(o, "UpdateRegistryResponse");
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
  export const filterSensitiveLog = (obj: UpdateSchemaRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateSchemaRequest =>
    __isa(o, "UpdateSchemaRequest");
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
  export const filterSensitiveLog = (obj: UpdateSchemaResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateSchemaResponse =>
    __isa(o, "UpdateSchemaResponse");
}
