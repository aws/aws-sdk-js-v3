import { LazyJsonString as __LazyJsonString, SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

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
   * <p>Tags associated with the resource.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace DiscovererSummary {
  export const filterSensitiveLog = (obj: DiscovererSummary): any => ({
    ...obj,
  });
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
  Tags?: { [key: string]: string };
}

export namespace RegistrySummary {
  export const filterSensitiveLog = (obj: RegistrySummary): any => ({
    ...obj,
  });
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
  Tags?: { [key: string]: string };

  /**
   * <p>The number of versions available for the schema.</p>
   */
  VersionCount?: number;
}

export namespace SchemaSummary {
  export const filterSensitiveLog = (obj: SchemaSummary): any => ({
    ...obj,
  });
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

export namespace SchemaVersionSummary {
  export const filterSensitiveLog = (obj: SchemaVersionSummary): any => ({
    ...obj,
  });
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

export namespace SearchSchemaVersionSummary {
  export const filterSensitiveLog = (obj: SearchSchemaVersionSummary): any => ({
    ...obj,
  });
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

export namespace SearchSchemaSummary {
  export const filterSensitiveLog = (obj: SearchSchemaSummary): any => ({
    ...obj,
  });
}

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
   * <p>Tags associated with the resource.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace CreateDiscovererRequest {
  export const filterSensitiveLog = (obj: CreateDiscovererRequest): any => ({
    ...obj,
  });
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
   * <p>Tags associated with the resource.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace CreateDiscovererResponse {
  export const filterSensitiveLog = (obj: CreateDiscovererResponse): any => ({
    ...obj,
  });
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
    ...obj,
  });
}

export interface InternalServerErrorException extends __SmithyException, $MetadataBearer {
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
  export const filterSensitiveLog = (obj: InternalServerErrorException): any => ({
    ...obj,
  });
}

export interface ServiceUnavailableException extends __SmithyException, $MetadataBearer {
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
  export const filterSensitiveLog = (obj: ServiceUnavailableException): any => ({
    ...obj,
  });
}

export interface UnauthorizedException extends __SmithyException, $MetadataBearer {
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
    ...obj,
  });
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
  Tags?: { [key: string]: string };
}

export namespace CreateRegistryRequest {
  export const filterSensitiveLog = (obj: CreateRegistryRequest): any => ({
    ...obj,
  });
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
  Tags?: { [key: string]: string };
}

export namespace CreateRegistryResponse {
  export const filterSensitiveLog = (obj: CreateRegistryResponse): any => ({
    ...obj,
  });
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
  Tags?: { [key: string]: string };

  /**
   * <p>The type of schema.</p>
   */
  Type: Type | string | undefined;
}

export namespace CreateSchemaRequest {
  export const filterSensitiveLog = (obj: CreateSchemaRequest): any => ({
    ...obj,
  });
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
    ...obj,
  });
}

export interface DeleteDiscovererRequest {
  /**
   * <p>The ID of the discoverer.</p>
   */
  DiscovererId: string | undefined;
}

export namespace DeleteDiscovererRequest {
  export const filterSensitiveLog = (obj: DeleteDiscovererRequest): any => ({
    ...obj,
  });
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
}

export interface DeleteRegistryRequest {
  /**
   * <p>The name of the registry.</p>
   */
  RegistryName: string | undefined;
}

export namespace DeleteRegistryRequest {
  export const filterSensitiveLog = (obj: DeleteRegistryRequest): any => ({
    ...obj,
  });
}

export interface DeleteResourcePolicyRequest {
  /**
   * <p>The name of the registry.</p>
   */
  RegistryName?: string;
}

export namespace DeleteResourcePolicyRequest {
  export const filterSensitiveLog = (obj: DeleteResourcePolicyRequest): any => ({
    ...obj,
  });
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

export namespace DeleteSchemaRequest {
  export const filterSensitiveLog = (obj: DeleteSchemaRequest): any => ({
    ...obj,
  });
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

export namespace DeleteSchemaVersionRequest {
  export const filterSensitiveLog = (obj: DeleteSchemaVersionRequest): any => ({
    ...obj,
  });
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

export namespace DescribeCodeBindingRequest {
  export const filterSensitiveLog = (obj: DescribeCodeBindingRequest): any => ({
    ...obj,
  });
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

export namespace DescribeCodeBindingResponse {
  export const filterSensitiveLog = (obj: DescribeCodeBindingResponse): any => ({
    ...obj,
  });
}

export interface TooManyRequestsException extends __SmithyException, $MetadataBearer {
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
    ...obj,
  });
}

export interface DescribeDiscovererRequest {
  /**
   * <p>The ID of the discoverer.</p>
   */
  DiscovererId: string | undefined;
}

export namespace DescribeDiscovererRequest {
  export const filterSensitiveLog = (obj: DescribeDiscovererRequest): any => ({
    ...obj,
  });
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
   * <p>Tags associated with the resource.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace DescribeDiscovererResponse {
  export const filterSensitiveLog = (obj: DescribeDiscovererResponse): any => ({
    ...obj,
  });
}

export interface DescribeRegistryRequest {
  /**
   * <p>The name of the registry.</p>
   */
  RegistryName: string | undefined;
}

export namespace DescribeRegistryRequest {
  export const filterSensitiveLog = (obj: DescribeRegistryRequest): any => ({
    ...obj,
  });
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
  Tags?: { [key: string]: string };
}

export namespace DescribeRegistryResponse {
  export const filterSensitiveLog = (obj: DescribeRegistryResponse): any => ({
    ...obj,
  });
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

export namespace DescribeSchemaRequest {
  export const filterSensitiveLog = (obj: DescribeSchemaRequest): any => ({
    ...obj,
  });
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
    ...obj,
  });
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

export namespace ExportSchemaRequest {
  export const filterSensitiveLog = (obj: ExportSchemaRequest): any => ({
    ...obj,
  });
}

export interface ExportSchemaResponse {
  Content?: string;
  SchemaArn?: string;
  SchemaName?: string;
  SchemaVersion?: string;
  Type?: string;
}

export namespace ExportSchemaResponse {
  export const filterSensitiveLog = (obj: ExportSchemaResponse): any => ({
    ...obj,
  });
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

export namespace GetCodeBindingSourceRequest {
  export const filterSensitiveLog = (obj: GetCodeBindingSourceRequest): any => ({
    ...obj,
  });
}

export interface GetCodeBindingSourceResponse {
  Body?: Uint8Array;
}

export namespace GetCodeBindingSourceResponse {
  export const filterSensitiveLog = (obj: GetCodeBindingSourceResponse): any => ({
    ...obj,
  });
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

export namespace GetDiscoveredSchemaRequest {
  export const filterSensitiveLog = (obj: GetDiscoveredSchemaRequest): any => ({
    ...obj,
  });
}

export interface GetDiscoveredSchemaResponse {
  /**
   * <p>The source of the schema definition.</p>
   */
  Content?: string;
}

export namespace GetDiscoveredSchemaResponse {
  export const filterSensitiveLog = (obj: GetDiscoveredSchemaResponse): any => ({
    ...obj,
  });
}

export interface GetResourcePolicyRequest {
  /**
   * <p>The name of the registry.</p>
   */
  RegistryName?: string;
}

export namespace GetResourcePolicyRequest {
  export const filterSensitiveLog = (obj: GetResourcePolicyRequest): any => ({
    ...obj,
  });
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

export namespace GetResourcePolicyResponse {
  export const filterSensitiveLog = (obj: GetResourcePolicyResponse): any => ({
    ...obj,
  });
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

export namespace ListDiscoverersRequest {
  export const filterSensitiveLog = (obj: ListDiscoverersRequest): any => ({
    ...obj,
  });
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

export namespace ListDiscoverersResponse {
  export const filterSensitiveLog = (obj: ListDiscoverersResponse): any => ({
    ...obj,
  });
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

export namespace ListRegistriesRequest {
  export const filterSensitiveLog = (obj: ListRegistriesRequest): any => ({
    ...obj,
  });
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

export namespace ListRegistriesResponse {
  export const filterSensitiveLog = (obj: ListRegistriesResponse): any => ({
    ...obj,
  });
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

export namespace ListSchemasRequest {
  export const filterSensitiveLog = (obj: ListSchemasRequest): any => ({
    ...obj,
  });
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

export namespace ListSchemasResponse {
  export const filterSensitiveLog = (obj: ListSchemasResponse): any => ({
    ...obj,
  });
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

export namespace ListSchemaVersionsRequest {
  export const filterSensitiveLog = (obj: ListSchemaVersionsRequest): any => ({
    ...obj,
  });
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

export namespace ListSchemaVersionsResponse {
  export const filterSensitiveLog = (obj: ListSchemaVersionsResponse): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The ARN of the resource.</p>
   */
  ResourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceResponse {
  /**
   * <p>Key-value pairs associated with a resource.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace ListTagsForResourceResponse {
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
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

export namespace PutCodeBindingRequest {
  export const filterSensitiveLog = (obj: PutCodeBindingRequest): any => ({
    ...obj,
  });
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

export namespace PutCodeBindingResponse {
  export const filterSensitiveLog = (obj: PutCodeBindingResponse): any => ({
    ...obj,
  });
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

export namespace PutResourcePolicyRequest {
  export const filterSensitiveLog = (obj: PutResourcePolicyRequest): any => ({
    ...obj,
  });
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

export namespace PutResourcePolicyResponse {
  export const filterSensitiveLog = (obj: PutResourcePolicyResponse): any => ({
    ...obj,
  });
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

export namespace SearchSchemasRequest {
  export const filterSensitiveLog = (obj: SearchSchemasRequest): any => ({
    ...obj,
  });
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

export namespace SearchSchemasResponse {
  export const filterSensitiveLog = (obj: SearchSchemasResponse): any => ({
    ...obj,
  });
}

export interface StartDiscovererRequest {
  /**
   * <p>The ID of the discoverer.</p>
   */
  DiscovererId: string | undefined;
}

export namespace StartDiscovererRequest {
  export const filterSensitiveLog = (obj: StartDiscovererRequest): any => ({
    ...obj,
  });
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

export namespace StartDiscovererResponse {
  export const filterSensitiveLog = (obj: StartDiscovererResponse): any => ({
    ...obj,
  });
}

export interface StopDiscovererRequest {
  /**
   * <p>The ID of the discoverer.</p>
   */
  DiscovererId: string | undefined;
}

export namespace StopDiscovererRequest {
  export const filterSensitiveLog = (obj: StopDiscovererRequest): any => ({
    ...obj,
  });
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

export namespace StopDiscovererResponse {
  export const filterSensitiveLog = (obj: StopDiscovererResponse): any => ({
    ...obj,
  });
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
  Tags: { [key: string]: string } | undefined;
}

export namespace TagResourceRequest {
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
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

export namespace UntagResourceRequest {
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
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
}

export namespace UpdateDiscovererRequest {
  export const filterSensitiveLog = (obj: UpdateDiscovererRequest): any => ({
    ...obj,
  });
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
   * <p>Tags associated with the resource.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace UpdateDiscovererResponse {
  export const filterSensitiveLog = (obj: UpdateDiscovererResponse): any => ({
    ...obj,
  });
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

export namespace UpdateRegistryRequest {
  export const filterSensitiveLog = (obj: UpdateRegistryRequest): any => ({
    ...obj,
  });
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
  Tags?: { [key: string]: string };
}

export namespace UpdateRegistryResponse {
  export const filterSensitiveLog = (obj: UpdateRegistryResponse): any => ({
    ...obj,
  });
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

export namespace UpdateSchemaRequest {
  export const filterSensitiveLog = (obj: UpdateSchemaRequest): any => ({
    ...obj,
  });
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
    ...obj,
  });
}
