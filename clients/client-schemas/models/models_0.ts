import { LazyJsonString as __LazyJsonString } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer, SmithyException as __SmithyException } from "@aws-sdk/types";

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
  Tags?: { [key: string]: string };
}

export namespace DiscovererSummary {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
   * <p>Support discovery of schemas in events sent to the bus from another account. (default: true).</p>
   */
  CrossAccount?: boolean;

  /**
   * <p>Tags associated with the resource.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace CreateDiscovererRequest {
  /**
   * @internal
   */
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
   * <p>The Status if the discoverer will discover schemas from events sent from another account.</p>
   */
  CrossAccount?: boolean;

  /**
   * <p>Tags associated with the resource.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace CreateDiscovererResponse {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
   * <p>The Status if the discoverer will discover schemas from events sent from another account.</p>
   */
  CrossAccount?: boolean;

  /**
   * <p>Tags associated with the resource.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace DescribeDiscovererResponse {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetCodeBindingSourceRequest): any => ({
    ...obj,
  });
}

export interface GetCodeBindingSourceResponse {
  Body?: Uint8Array;
}

export namespace GetCodeBindingSourceResponse {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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

  /**
   * <p>Support discovery of schemas in events sent to the bus from another account. (default: true)</p>
   */
  CrossAccount?: boolean;
}

export namespace UpdateDiscovererRequest {
  /**
   * @internal
   */
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
   * <p>The Status if the discoverer will discover schemas from events sent from another account.</p>
   */
  CrossAccount?: boolean;

  /**
   * <p>Tags associated with the resource.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace UpdateDiscovererResponse {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateSchemaResponse): any => ({
    ...obj,
  });
}
