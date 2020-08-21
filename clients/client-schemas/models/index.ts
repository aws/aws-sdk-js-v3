import {
  SENSITIVE_STRING,
  LazyJsonString as __LazyJsonString,
  SmithyException as __SmithyException,
  isa as __isa,
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

export interface BadRequestException extends __SmithyException, $MetadataBearer {
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
    ...obj,
  });
  export const isa = (o: any): o is BadRequestException => __isa(o, "BadRequestException");
}

export enum CodeGenerationStatus {
  CREATE_COMPLETE = "CREATE_COMPLETE",
  CREATE_FAILED = "CREATE_FAILED",
  CREATE_IN_PROGRESS = "CREATE_IN_PROGRESS",
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
    ...obj,
  });
  export const isa = (o: any): o is ConflictException => __isa(o, "ConflictException");
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
    ...obj,
  });
  export const isa = (o: any): o is CreateDiscovererRequest => __isa(o, "CreateDiscovererRequest");
}

export interface CreateDiscovererResponse {
  __type?: "CreateDiscovererResponse";
  /**
   * <p>Tags associated with the resource.</p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>The ARN of the discoverer.</p>
   */
  DiscovererArn?: string;

  /**
   * <p>The ID of the discoverer.</p>
   */
  DiscovererId?: string;

  /**
   * <p>The description of the discoverer.</p>
   */
  Description?: string;

  /**
   * <p>The ARN of the event bus.</p>
   */
  SourceArn?: string;

  /**
   * <p>The state of the discoverer.</p>
   */
  State?: DiscovererState | string;
}

export namespace CreateDiscovererResponse {
  export const filterSensitiveLog = (obj: CreateDiscovererResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateDiscovererResponse => __isa(o, "CreateDiscovererResponse");
}

export interface CreateRegistryRequest {
  __type?: "CreateRegistryRequest";
  /**
   * <p>Tags to associate with the registry.</p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>A description of the registry to be created.</p>
   */
  Description?: string;

  /**
   * <p>The name of the registry.</p>
   */
  RegistryName: string | undefined;
}

export namespace CreateRegistryRequest {
  export const filterSensitiveLog = (obj: CreateRegistryRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateRegistryRequest => __isa(o, "CreateRegistryRequest");
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
   * <p>Tags associated with the registry.</p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>The name of the registry.</p>
   */
  RegistryName?: string;
}

export namespace CreateRegistryResponse {
  export const filterSensitiveLog = (obj: CreateRegistryResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateRegistryResponse => __isa(o, "CreateRegistryResponse");
}

export interface CreateSchemaRequest {
  __type?: "CreateSchemaRequest";
  /**
   * <p>The source of the schema definition.</p>
   */
  Content: string | undefined;

  /**
   * <p>The name of the schema.</p>
   */
  SchemaName: string | undefined;

  /**
   * <p>Tags associated with the schema.</p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>The type of schema.</p>
   */
  Type: Type | string | undefined;

  /**
   * <p>A description of the schema.</p>
   */
  Description?: string;

  /**
   * <p>The name of the registry.</p>
   */
  RegistryName: string | undefined;
}

export namespace CreateSchemaRequest {
  export const filterSensitiveLog = (obj: CreateSchemaRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateSchemaRequest => __isa(o, "CreateSchemaRequest");
}

export interface CreateSchemaResponse {
  __type?: "CreateSchemaResponse";
  /**
   * <p>The name of the schema.</p>
   */
  SchemaName?: string;

  /**
   * <p>The ARN of the schema.</p>
   */
  SchemaArn?: string;

  /**
   * <p>The date the schema version was created.</p>
   */
  VersionCreatedDate?: Date;

  /**
   * <p>The version number of the schema</p>
   */
  SchemaVersion?: string;

  /**
   * <p>The description of the schema.</p>
   */
  Description?: string;

  /**
   * <p>The date and time that schema was modified.</p>
   */
  LastModified?: Date;

  /**
   * <p>The type of the schema.</p>
   */
  Type?: string;

  /**
   * <p>Key-value pairs associated with a resource.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace CreateSchemaResponse {
  export const filterSensitiveLog = (obj: CreateSchemaResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateSchemaResponse => __isa(o, "CreateSchemaResponse");
}

export interface DeleteDiscovererRequest {
  __type?: "DeleteDiscovererRequest";
  /**
   * <p>The ID of the discoverer.</p>
   */
  DiscovererId: string | undefined;
}

export namespace DeleteDiscovererRequest {
  export const filterSensitiveLog = (obj: DeleteDiscovererRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteDiscovererRequest => __isa(o, "DeleteDiscovererRequest");
}

export interface DeleteRegistryRequest {
  __type?: "DeleteRegistryRequest";
  /**
   * <p>The name of the registry.</p>
   */
  RegistryName: string | undefined;
}

export namespace DeleteRegistryRequest {
  export const filterSensitiveLog = (obj: DeleteRegistryRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteRegistryRequest => __isa(o, "DeleteRegistryRequest");
}

export interface DeleteResourcePolicyRequest {
  __type?: "DeleteResourcePolicyRequest";
  /**
   * <p>The name of the registry.</p>
   */
  RegistryName?: string;
}

export namespace DeleteResourcePolicyRequest {
  export const filterSensitiveLog = (obj: DeleteResourcePolicyRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteResourcePolicyRequest => __isa(o, "DeleteResourcePolicyRequest");
}

export interface DeleteSchemaRequest {
  __type?: "DeleteSchemaRequest";
  /**
   * <p>The name of the registry.</p>
   */
  RegistryName: string | undefined;

  /**
   * <p>The name of the schema.</p>
   */
  SchemaName: string | undefined;
}

export namespace DeleteSchemaRequest {
  export const filterSensitiveLog = (obj: DeleteSchemaRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteSchemaRequest => __isa(o, "DeleteSchemaRequest");
}

export interface DeleteSchemaVersionRequest {
  __type?: "DeleteSchemaVersionRequest";
  /**
   * <p>The name of the schema.</p>
   */
  SchemaName: string | undefined;

  /**
   * <p>The name of the registry.</p>
   */
  RegistryName: string | undefined;

  /**
   * The version number of the schema
   */
  SchemaVersion: string | undefined;
}

export namespace DeleteSchemaVersionRequest {
  export const filterSensitiveLog = (obj: DeleteSchemaVersionRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteSchemaVersionRequest => __isa(o, "DeleteSchemaVersionRequest");
}

export interface DescribeCodeBindingRequest {
  __type?: "DescribeCodeBindingRequest";
  /**
   * <p>Specifying this limits the results to only this schema version.</p>
   */
  SchemaVersion?: string;

  /**
   * <p>The name of the registry.</p>
   */
  RegistryName: string | undefined;

  /**
   * <p>The language of the code binding.</p>
   */
  Language: string | undefined;

  /**
   * <p>The name of the schema.</p>
   */
  SchemaName: string | undefined;
}

export namespace DescribeCodeBindingRequest {
  export const filterSensitiveLog = (obj: DescribeCodeBindingRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeCodeBindingRequest => __isa(o, "DescribeCodeBindingRequest");
}

export interface DescribeCodeBindingResponse {
  __type?: "DescribeCodeBindingResponse";
  /**
   * <p>The version number of the schema.</p>
   */
  SchemaVersion?: string;

  /**
   * <p>The time and date that the code binding was created.</p>
   */
  CreationDate?: Date;

  /**
   * <p>The date and time that code bindings were modified.</p>
   */
  LastModified?: Date;

  /**
   * <p>The current status of code binding generation.</p>
   */
  Status?: CodeGenerationStatus | string;
}

export namespace DescribeCodeBindingResponse {
  export const filterSensitiveLog = (obj: DescribeCodeBindingResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeCodeBindingResponse => __isa(o, "DescribeCodeBindingResponse");
}

export interface DescribeDiscovererRequest {
  __type?: "DescribeDiscovererRequest";
  /**
   * <p>The ID of the discoverer.</p>
   */
  DiscovererId: string | undefined;
}

export namespace DescribeDiscovererRequest {
  export const filterSensitiveLog = (obj: DescribeDiscovererRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeDiscovererRequest => __isa(o, "DescribeDiscovererRequest");
}

export interface DescribeDiscovererResponse {
  __type?: "DescribeDiscovererResponse";
  /**
   * <p>The state of the discoverer.</p>
   */
  State?: DiscovererState | string;

  /**
   * <p>The description of the discoverer.</p>
   */
  Description?: string;

  /**
   * <p>The ARN of the discoverer.</p>
   */
  DiscovererArn?: string;

  /**
   * <p>Tags associated with the resource.</p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>The ID of the discoverer.</p>
   */
  DiscovererId?: string;

  /**
   * <p>The ARN of the event bus.</p>
   */
  SourceArn?: string;
}

export namespace DescribeDiscovererResponse {
  export const filterSensitiveLog = (obj: DescribeDiscovererResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeDiscovererResponse => __isa(o, "DescribeDiscovererResponse");
}

export interface DescribeRegistryRequest {
  __type?: "DescribeRegistryRequest";
  /**
   * <p>The name of the registry.</p>
   */
  RegistryName: string | undefined;
}

export namespace DescribeRegistryRequest {
  export const filterSensitiveLog = (obj: DescribeRegistryRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeRegistryRequest => __isa(o, "DescribeRegistryRequest");
}

export interface DescribeRegistryResponse {
  __type?: "DescribeRegistryResponse";
  /**
   * <p>Tags associated with the registry.</p>
   */
  Tags?: { [key: string]: string };

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
}

export namespace DescribeRegistryResponse {
  export const filterSensitiveLog = (obj: DescribeRegistryResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeRegistryResponse => __isa(o, "DescribeRegistryResponse");
}

export interface DescribeSchemaRequest {
  __type?: "DescribeSchemaRequest";
  /**
   * <p>Specifying this limits the results to only this schema version.</p>
   */
  SchemaVersion?: string;

  /**
   * <p>The name of the schema.</p>
   */
  SchemaName: string | undefined;

  /**
   * <p>The name of the registry.</p>
   */
  RegistryName: string | undefined;
}

export namespace DescribeSchemaRequest {
  export const filterSensitiveLog = (obj: DescribeSchemaRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeSchemaRequest => __isa(o, "DescribeSchemaRequest");
}

export interface DescribeSchemaResponse {
  __type?: "DescribeSchemaResponse";
  /**
   * <p>The version number of the schema</p>
   */
  SchemaVersion?: string;

  /**
   * <p>The type of the schema.</p>
   */
  Type?: string;

  /**
   * <p>Tags associated with the resource.</p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>The ARN of the schema.</p>
   */
  SchemaArn?: string;

  /**
   * <p>The name of the schema.</p>
   */
  SchemaName?: string;

  /**
   * <p>The date and time that schema was modified.</p>
   */
  LastModified?: Date;

  /**
   * <p>The description of the schema.</p>
   */
  Description?: string;

  /**
   * <p>The source of the schema definition.</p>
   */
  Content?: string;

  /**
   * <p>The date the schema version was created.</p>
   */
  VersionCreatedDate?: Date;
}

export namespace DescribeSchemaResponse {
  export const filterSensitiveLog = (obj: DescribeSchemaResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeSchemaResponse => __isa(o, "DescribeSchemaResponse");
}

export enum DiscovererState {
  STARTED = "STARTED",
  STOPPED = "STOPPED",
}

export interface DiscovererSummary {
  __type?: "DiscovererSummary";
  /**
   * <p>The state of the discoverer.</p>
   */
  State?: DiscovererState | string;

  /**
   * <p>The ARN of the event bus.</p>
   */
  SourceArn?: string;

  /**
   * <p>The ID of the discoverer.</p>
   */
  DiscovererId?: string;

  /**
   * <p>Tags associated with the resource.</p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>The ARN of the discoverer.</p>
   */
  DiscovererArn?: string;
}

export namespace DiscovererSummary {
  export const filterSensitiveLog = (obj: DiscovererSummary): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DiscovererSummary => __isa(o, "DiscovererSummary");
}

export interface ForbiddenException extends __SmithyException, $MetadataBearer {
  name: "ForbiddenException";
  $fault: "client";
  /**
   * <p>The message string of the error output.</p>
   */
  Message: string | undefined;

  /**
   * <p>The error code.</p>
   */
  Code: string | undefined;
}

export namespace ForbiddenException {
  export const filterSensitiveLog = (obj: ForbiddenException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ForbiddenException => __isa(o, "ForbiddenException");
}

export interface GetCodeBindingSourceRequest {
  __type?: "GetCodeBindingSourceRequest";
  /**
   * <p>The name of the registry.</p>
   */
  RegistryName: string | undefined;

  /**
   * <p>The language of the code binding.</p>
   */
  Language: string | undefined;

  /**
   * <p>The name of the schema.</p>
   */
  SchemaName: string | undefined;

  /**
   * <p>Specifying this limits the results to only this schema version.</p>
   */
  SchemaVersion?: string;
}

export namespace GetCodeBindingSourceRequest {
  export const filterSensitiveLog = (obj: GetCodeBindingSourceRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetCodeBindingSourceRequest => __isa(o, "GetCodeBindingSourceRequest");
}

export interface GetCodeBindingSourceResponse {
  __type?: "GetCodeBindingSourceResponse";
  Body?: Uint8Array;
}

export namespace GetCodeBindingSourceResponse {
  export const filterSensitiveLog = (obj: GetCodeBindingSourceResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetCodeBindingSourceResponse => __isa(o, "GetCodeBindingSourceResponse");
}

export interface GetDiscoveredSchemaRequest {
  __type?: "GetDiscoveredSchemaRequest";
  /**
   * <p>An array of strings where each string is a JSON event. These are the events that were used to generate the schema. The array includes a single type of event and has a maximum size of 10 events.</p>
   */
  Events: string[] | undefined;

  /**
   * <p>The type of event.</p>
   */
  Type: Type | string | undefined;
}

export namespace GetDiscoveredSchemaRequest {
  export const filterSensitiveLog = (obj: GetDiscoveredSchemaRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetDiscoveredSchemaRequest => __isa(o, "GetDiscoveredSchemaRequest");
}

export interface GetDiscoveredSchemaResponse {
  __type?: "GetDiscoveredSchemaResponse";
  /**
   * <p>The source of the schema definition.</p>
   */
  Content?: string;
}

export namespace GetDiscoveredSchemaResponse {
  export const filterSensitiveLog = (obj: GetDiscoveredSchemaResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetDiscoveredSchemaResponse => __isa(o, "GetDiscoveredSchemaResponse");
}

export interface GetResourcePolicyRequest {
  __type?: "GetResourcePolicyRequest";
  /**
   * <p>The name of the registry.</p>
   */
  RegistryName?: string;
}

export namespace GetResourcePolicyRequest {
  export const filterSensitiveLog = (obj: GetResourcePolicyRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetResourcePolicyRequest => __isa(o, "GetResourcePolicyRequest");
}

export interface GetResourcePolicyResponse {
  __type?: "GetResourcePolicyResponse";
  /**
   * <p>The revision ID.</p>
   */
  RevisionId?: string;

  /**
   * <p>The resource-based policy.</p>
   */
  Policy?: __LazyJsonString | string;
}

export namespace GetResourcePolicyResponse {
  export const filterSensitiveLog = (obj: GetResourcePolicyResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetResourcePolicyResponse => __isa(o, "GetResourcePolicyResponse");
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
    ...obj,
  });
  export const isa = (o: any): o is GoneException => __isa(o, "GoneException");
}

export interface InternalServerErrorException extends __SmithyException, $MetadataBearer {
  name: "InternalServerErrorException";
  $fault: "server";
  /**
   * <p>The message string of the error output.</p>
   */
  Message: string | undefined;

  /**
   * <p>The error code.</p>
   */
  Code: string | undefined;
}

export namespace InternalServerErrorException {
  export const filterSensitiveLog = (obj: InternalServerErrorException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InternalServerErrorException => __isa(o, "InternalServerErrorException");
}

export interface ListDiscoverersRequest {
  __type?: "ListDiscoverersRequest";
  Limit?: number;
  /**
   * <p>Specifying this limits the results to only those discoverer IDs that start with the specified prefix.</p>
   */
  DiscovererIdPrefix?: string;

  /**
   * <p>The token that specifies the next page of results to return. To request the first page, leave NextToken empty. The token will expire in 24 hours, and cannot be shared with other accounts.</p>
   */
  NextToken?: string;

  /**
   * <p>Specifying this limits the results to only those ARNs that start with the specified prefix.</p>
   */
  SourceArnPrefix?: string;
}

export namespace ListDiscoverersRequest {
  export const filterSensitiveLog = (obj: ListDiscoverersRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListDiscoverersRequest => __isa(o, "ListDiscoverersRequest");
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
    ...obj,
  });
  export const isa = (o: any): o is ListDiscoverersResponse => __isa(o, "ListDiscoverersResponse");
}

export interface ListRegistriesRequest {
  __type?: "ListRegistriesRequest";
  /**
   * <p>The token that specifies the next page of results to return. To request the first page, leave NextToken empty. The token will expire in 24 hours, and cannot be shared with other accounts.</p>
   */
  NextToken?: string;

  /**
   * <p>Specifying this limits the results to only those registry names that start with the specified prefix.</p>
   */
  RegistryNamePrefix?: string;

  Limit?: number;
  /**
   * <p>Can be set to Local or AWS to limit responses to your custom registries, or the ones provided by AWS.</p>
   */
  Scope?: string;
}

export namespace ListRegistriesRequest {
  export const filterSensitiveLog = (obj: ListRegistriesRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListRegistriesRequest => __isa(o, "ListRegistriesRequest");
}

export interface ListRegistriesResponse {
  __type?: "ListRegistriesResponse";
  /**
   * <p>An array of registry summaries.</p>
   */
  Registries?: RegistrySummary[];

  /**
   * <p>The token that specifies the next page of results to return. To request the first page, leave NextToken empty. The token will expire in 24 hours, and cannot be shared with other accounts.</p>
   */
  NextToken?: string;
}

export namespace ListRegistriesResponse {
  export const filterSensitiveLog = (obj: ListRegistriesResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListRegistriesResponse => __isa(o, "ListRegistriesResponse");
}

export interface ListSchemasRequest {
  __type?: "ListSchemasRequest";
  /**
   * <p>The token that specifies the next page of results to return. To request the first page, leave NextToken empty. The token will expire in 24 hours, and cannot be shared with other accounts.</p>
   */
  NextToken?: string;

  /**
   * <p>Specifying this limits the results to only those schema names that start with the specified prefix.</p>
   */
  SchemaNamePrefix?: string;

  /**
   * <p>The name of the registry.</p>
   */
  RegistryName: string | undefined;

  Limit?: number;
}

export namespace ListSchemasRequest {
  export const filterSensitiveLog = (obj: ListSchemasRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListSchemasRequest => __isa(o, "ListSchemasRequest");
}

export interface ListSchemasResponse {
  __type?: "ListSchemasResponse";
  /**
   * <p>An array of schema summaries.</p>
   */
  Schemas?: SchemaSummary[];

  /**
   * <p>The token that specifies the next page of results to return. To request the first page, leave NextToken empty. The token will expire in 24 hours, and cannot be shared with other accounts.</p>
   */
  NextToken?: string;
}

export namespace ListSchemasResponse {
  export const filterSensitiveLog = (obj: ListSchemasResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListSchemasResponse => __isa(o, "ListSchemasResponse");
}

export interface ListSchemaVersionsRequest {
  __type?: "ListSchemaVersionsRequest";
  /**
   * <p>The name of the registry.</p>
   */
  RegistryName: string | undefined;

  /**
   * <p>The name of the schema.</p>
   */
  SchemaName: string | undefined;

  /**
   * <p>The token that specifies the next page of results to return. To request the first page, leave NextToken empty. The token will expire in 24 hours, and cannot be shared with other accounts.</p>
   */
  NextToken?: string;

  Limit?: number;
}

export namespace ListSchemaVersionsRequest {
  export const filterSensitiveLog = (obj: ListSchemaVersionsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListSchemaVersionsRequest => __isa(o, "ListSchemaVersionsRequest");
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
    ...obj,
  });
  export const isa = (o: any): o is ListSchemaVersionsResponse => __isa(o, "ListSchemaVersionsResponse");
}

export interface ListTagsForResourceRequest {
  __type?: "ListTagsForResourceRequest";
  /**
   * <p>The ARN of the resource.</p>
   */
  ResourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListTagsForResourceRequest => __isa(o, "ListTagsForResourceRequest");
}

export interface ListTagsForResourceResponse {
  __type?: "ListTagsForResourceResponse";
  /**
   * <p>Key-value pairs associated with a resource.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace ListTagsForResourceResponse {
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListTagsForResourceResponse => __isa(o, "ListTagsForResourceResponse");
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
    ...obj,
  });
  export const isa = (o: any): o is NotFoundException => __isa(o, "NotFoundException");
}

export interface PreconditionFailedException extends __SmithyException, $MetadataBearer {
  name: "PreconditionFailedException";
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

export namespace PreconditionFailedException {
  export const filterSensitiveLog = (obj: PreconditionFailedException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PreconditionFailedException => __isa(o, "PreconditionFailedException");
}

export interface PutCodeBindingRequest {
  __type?: "PutCodeBindingRequest";
  /**
   * <p>Specifying this limits the results to only this schema version.</p>
   */
  SchemaVersion?: string;

  /**
   * <p>The name of the schema.</p>
   */
  SchemaName: string | undefined;

  /**
   * <p>The language of the code binding.</p>
   */
  Language: string | undefined;

  /**
   * <p>The name of the registry.</p>
   */
  RegistryName: string | undefined;
}

export namespace PutCodeBindingRequest {
  export const filterSensitiveLog = (obj: PutCodeBindingRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PutCodeBindingRequest => __isa(o, "PutCodeBindingRequest");
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
    ...obj,
  });
  export const isa = (o: any): o is PutCodeBindingResponse => __isa(o, "PutCodeBindingResponse");
}

/**
 * <p>The name of the policy.</p>
 */
export interface PutResourcePolicyRequest {
  __type?: "PutResourcePolicyRequest";
  /**
   * <p>The revision ID of the policy.</p>
   */
  RevisionId?: string;

  /**
   * <p>The resource-based policy.</p>
   */
  Policy: __LazyJsonString | string | undefined;

  /**
   * <p>The name of the registry.</p>
   */
  RegistryName?: string;
}

export namespace PutResourcePolicyRequest {
  export const filterSensitiveLog = (obj: PutResourcePolicyRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PutResourcePolicyRequest => __isa(o, "PutResourcePolicyRequest");
}

export interface PutResourcePolicyResponse {
  __type?: "PutResourcePolicyResponse";
  /**
   * <p>The revision ID of the policy.</p>
   */
  RevisionId?: string;

  /**
   * <p>The resource-based policy.</p>
   */
  Policy?: __LazyJsonString | string;
}

export namespace PutResourcePolicyResponse {
  export const filterSensitiveLog = (obj: PutResourcePolicyResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PutResourcePolicyResponse => __isa(o, "PutResourcePolicyResponse");
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
    ...obj,
  });
  export const isa = (o: any): o is RegistrySummary => __isa(o, "RegistrySummary");
}

/**
 * <p>A summary of schema details.</p>
 */
export interface SchemaSummary {
  __type?: "SchemaSummary";
  /**
   * <p>The name of the schema.</p>
   */
  SchemaName?: string;

  /**
   * <p>The ARN of the schema.</p>
   */
  SchemaArn?: string;

  /**
   * <p>The number of versions available for the schema.</p>
   */
  VersionCount?: number;

  /**
   * <p>The date and time that schema was modified.</p>
   */
  LastModified?: Date;

  /**
   * <p>Tags associated with the schema.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace SchemaSummary {
  export const filterSensitiveLog = (obj: SchemaSummary): any => ({
    ...obj,
  });
  export const isa = (o: any): o is SchemaSummary => __isa(o, "SchemaSummary");
}

export interface SchemaVersionSummary {
  __type?: "SchemaVersionSummary";
  /**
   * <p>The version number of the schema.</p>
   */
  SchemaVersion?: string;

  /**
   * <p>The name of the schema.</p>
   */
  SchemaName?: string;

  /**
   * <p>The ARN of the schema version.</p>
   */
  SchemaArn?: string;
}

export namespace SchemaVersionSummary {
  export const filterSensitiveLog = (obj: SchemaVersionSummary): any => ({
    ...obj,
  });
  export const isa = (o: any): o is SchemaVersionSummary => __isa(o, "SchemaVersionSummary");
}

export interface SearchSchemasRequest {
  __type?: "SearchSchemasRequest";
  /**
   * <p>Specifying this limits the results to only schemas that include the provided keywords.</p>
   */
  Keywords: string | undefined;

  /**
   * <p>The name of the registry.</p>
   */
  RegistryName: string | undefined;

  /**
   * <p>The token that specifies the next page of results to return. To request the first page, leave NextToken empty. The token will expire in 24 hours, and cannot be shared with other accounts.</p>
   */
  NextToken?: string;

  Limit?: number;
}

export namespace SearchSchemasRequest {
  export const filterSensitiveLog = (obj: SearchSchemasRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is SearchSchemasRequest => __isa(o, "SearchSchemasRequest");
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
    ...obj,
  });
  export const isa = (o: any): o is SearchSchemasResponse => __isa(o, "SearchSchemasResponse");
}

export interface SearchSchemaSummary {
  __type?: "SearchSchemaSummary";
  /**
   * <p>An array of schema version summaries.</p>
   */
  SchemaVersions?: SearchSchemaVersionSummary[];

  /**
   * <p>The name of the schema.</p>
   */
  SchemaName?: string;

  /**
   * <p>The ARN of the schema.</p>
   */
  SchemaArn?: string;

  /**
   * <p>The name of the registry.</p>
   */
  RegistryName?: string;
}

export namespace SearchSchemaSummary {
  export const filterSensitiveLog = (obj: SearchSchemaSummary): any => ({
    ...obj,
  });
  export const isa = (o: any): o is SearchSchemaSummary => __isa(o, "SearchSchemaSummary");
}

export interface SearchSchemaVersionSummary {
  __type?: "SearchSchemaVersionSummary";
  /**
   * <p>The version number of the schema</p>
   */
  SchemaVersion?: string;

  /**
   * <p>The date the schema version was created.</p>
   */
  CreatedDate?: Date;
}

export namespace SearchSchemaVersionSummary {
  export const filterSensitiveLog = (obj: SearchSchemaVersionSummary): any => ({
    ...obj,
  });
  export const isa = (o: any): o is SearchSchemaVersionSummary => __isa(o, "SearchSchemaVersionSummary");
}

export interface ServiceUnavailableException extends __SmithyException, $MetadataBearer {
  name: "ServiceUnavailableException";
  $fault: "server";
  /**
   * <p>The message string of the error output.</p>
   */
  Message: string | undefined;

  /**
   * <p>The error code.</p>
   */
  Code: string | undefined;
}

export namespace ServiceUnavailableException {
  export const filterSensitiveLog = (obj: ServiceUnavailableException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ServiceUnavailableException => __isa(o, "ServiceUnavailableException");
}

export interface StartDiscovererRequest {
  __type?: "StartDiscovererRequest";
  /**
   * <p>The ID of the discoverer.</p>
   */
  DiscovererId: string | undefined;
}

export namespace StartDiscovererRequest {
  export const filterSensitiveLog = (obj: StartDiscovererRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is StartDiscovererRequest => __isa(o, "StartDiscovererRequest");
}

export interface StartDiscovererResponse {
  __type?: "StartDiscovererResponse";
  /**
   * <p>The state of the discoverer.</p>
   */
  State?: DiscovererState | string;

  /**
   * <p>The ID of the discoverer.</p>
   */
  DiscovererId?: string;
}

export namespace StartDiscovererResponse {
  export const filterSensitiveLog = (obj: StartDiscovererResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is StartDiscovererResponse => __isa(o, "StartDiscovererResponse");
}

export interface StopDiscovererRequest {
  __type?: "StopDiscovererRequest";
  /**
   * <p>The ID of the discoverer.</p>
   */
  DiscovererId: string | undefined;
}

export namespace StopDiscovererRequest {
  export const filterSensitiveLog = (obj: StopDiscovererRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is StopDiscovererRequest => __isa(o, "StopDiscovererRequest");
}

export interface StopDiscovererResponse {
  __type?: "StopDiscovererResponse";
  /**
   * <p>The state of the discoverer.</p>
   */
  State?: DiscovererState | string;

  /**
   * <p>The ID of the discoverer.</p>
   */
  DiscovererId?: string;
}

export namespace StopDiscovererResponse {
  export const filterSensitiveLog = (obj: StopDiscovererResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is StopDiscovererResponse => __isa(o, "StopDiscovererResponse");
}

/**
 * <p></p>
 */
export interface TagResourceRequest {
  __type?: "TagResourceRequest";
  /**
   * <p>The ARN of the resource.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>Tags associated with the resource.</p>
   */
  Tags: { [key: string]: string } | undefined;
}

export namespace TagResourceRequest {
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is TagResourceRequest => __isa(o, "TagResourceRequest");
}

export interface TooManyRequestsException extends __SmithyException, $MetadataBearer {
  name: "TooManyRequestsException";
  $fault: "client";
  /**
   * <p>The message string of the error output.</p>
   */
  Message: string | undefined;

  /**
   * <p>The error code.</p>
   */
  Code: string | undefined;
}

export namespace TooManyRequestsException {
  export const filterSensitiveLog = (obj: TooManyRequestsException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is TooManyRequestsException => __isa(o, "TooManyRequestsException");
}

export enum Type {
  OpenApi3 = "OpenApi3",
}

export interface UnauthorizedException extends __SmithyException, $MetadataBearer {
  name: "UnauthorizedException";
  $fault: "client";
  /**
   * <p>The message string of the error output.</p>
   */
  Message: string | undefined;

  /**
   * <p>The error code.</p>
   */
  Code: string | undefined;
}

export namespace UnauthorizedException {
  export const filterSensitiveLog = (obj: UnauthorizedException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UnauthorizedException => __isa(o, "UnauthorizedException");
}

export interface UntagResourceRequest {
  __type?: "UntagResourceRequest";
  /**
   * <p>The ARN of the resource.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>Keys of key-value pairs.</p>
   */
  TagKeys: string[] | undefined;
}

export namespace UntagResourceRequest {
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UntagResourceRequest => __isa(o, "UntagResourceRequest");
}

export interface UpdateDiscovererRequest {
  __type?: "UpdateDiscovererRequest";
  /**
   * <p>The description of the discoverer to update.</p>
   */
  Description?: string;

  /**
   * <p>The ID of the discoverer.</p>
   */
  DiscovererId: string | undefined;
}

export namespace UpdateDiscovererRequest {
  export const filterSensitiveLog = (obj: UpdateDiscovererRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateDiscovererRequest => __isa(o, "UpdateDiscovererRequest");
}

export interface UpdateDiscovererResponse {
  __type?: "UpdateDiscovererResponse";
  /**
   * <p>Tags associated with the resource.</p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>The description of the discoverer.</p>
   */
  Description?: string;

  /**
   * <p>The ARN of the discoverer.</p>
   */
  DiscovererArn?: string;

  /**
   * <p>The state of the discoverer.</p>
   */
  State?: DiscovererState | string;

  /**
   * <p>The ARN of the event bus.</p>
   */
  SourceArn?: string;

  /**
   * <p>The ID of the discoverer.</p>
   */
  DiscovererId?: string;
}

export namespace UpdateDiscovererResponse {
  export const filterSensitiveLog = (obj: UpdateDiscovererResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateDiscovererResponse => __isa(o, "UpdateDiscovererResponse");
}

/**
 * <p>Updates the registry.</p>
 */
export interface UpdateRegistryRequest {
  __type?: "UpdateRegistryRequest";
  /**
   * <p>The name of the registry.</p>
   */
  RegistryName: string | undefined;

  /**
   * <p>The description of the registry to update.</p>
   */
  Description?: string;
}

export namespace UpdateRegistryRequest {
  export const filterSensitiveLog = (obj: UpdateRegistryRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateRegistryRequest => __isa(o, "UpdateRegistryRequest");
}

export interface UpdateRegistryResponse {
  __type?: "UpdateRegistryResponse";
  /**
   * <p>The name of the registry.</p>
   */
  RegistryName?: string;

  /**
   * <p>Tags associated with the registry.</p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>The description of the registry.</p>
   */
  Description?: string;

  /**
   * <p>The ARN of the registry.</p>
   */
  RegistryArn?: string;
}

export namespace UpdateRegistryResponse {
  export const filterSensitiveLog = (obj: UpdateRegistryResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateRegistryResponse => __isa(o, "UpdateRegistryResponse");
}

export interface UpdateSchemaRequest {
  __type?: "UpdateSchemaRequest";
  /**
   * <p>The source of the schema definition.</p>
   */
  Content?: string;

  /**
   * <p>The name of the registry.</p>
   */
  RegistryName: string | undefined;

  /**
   * <p>The name of the schema.</p>
   */
  SchemaName: string | undefined;

  /**
   * <p>The description of the schema.</p>
   */
  Description?: string;

  /**
   * <p>The schema type for the events schema.</p>
   */
  Type?: Type | string;

  /**
   * <p>The ID of the client token.</p>
   */
  ClientTokenId?: string;
}

export namespace UpdateSchemaRequest {
  export const filterSensitiveLog = (obj: UpdateSchemaRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateSchemaRequest => __isa(o, "UpdateSchemaRequest");
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
   * <p>The date the schema version was created.</p>
   */
  VersionCreatedDate?: Date;

  /**
   * <p>Key-value pairs associated with a resource.</p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>The type of the schema.</p>
   */
  Type?: string;
}

export namespace UpdateSchemaResponse {
  export const filterSensitiveLog = (obj: UpdateSchemaResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateSchemaResponse => __isa(o, "UpdateSchemaResponse");
}
