// smithy-typescript generated code
import { AutomaticJsonStringConversion as __AutomaticJsonStringConversion } from "@smithy/core/serde";

import type { CodeGenerationStatus, DiscovererState, Type } from "./enums";

/**
 * @public
 */
export interface DiscovererSummary {
  /**
   * The ARN of the discoverer.
   *
   * @public
   */
  DiscovererArn?: string | undefined;

  /**
   * The ID of the discoverer.
   *
   * @public
   */
  DiscovererId?: string | undefined;

  /**
   * The ARN of the event bus.
   *
   * @public
   */
  SourceArn?: string | undefined;

  /**
   * The state of the discoverer.
   *
   * @public
   */
  State?: DiscovererState | undefined;

  /**
   * The Status if the discoverer will discover schemas from events sent from another account.
   *
   * @public
   */
  CrossAccount?: boolean | undefined;

  /**
   * Tags associated with the resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface RegistrySummary {
  /**
   * The ARN of the registry.
   *
   * @public
   */
  RegistryArn?: string | undefined;

  /**
   * The name of the registry.
   *
   * @public
   */
  RegistryName?: string | undefined;

  /**
   * Tags associated with the registry.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * A summary of schema details.
 *
 * @public
 */
export interface SchemaSummary {
  /**
   * The date and time that schema was modified.
   *
   * @public
   */
  LastModified?: Date | undefined;

  /**
   * The ARN of the schema.
   *
   * @public
   */
  SchemaArn?: string | undefined;

  /**
   * The name of the schema.
   *
   * @public
   */
  SchemaName?: string | undefined;

  /**
   * Tags associated with the schema.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The number of versions available for the schema.
   *
   * @public
   */
  VersionCount?: number | undefined;
}

/**
 * @public
 */
export interface SchemaVersionSummary {
  /**
   * The ARN of the schema version.
   *
   * @public
   */
  SchemaArn?: string | undefined;

  /**
   * The name of the schema.
   *
   * @public
   */
  SchemaName?: string | undefined;

  /**
   * The version number of the schema.
   *
   * @public
   */
  SchemaVersion?: string | undefined;

  /**
   * The type of schema.
   *
   * @public
   */
  Type?: Type | undefined;
}

/**
 * @public
 */
export interface SearchSchemaVersionSummary {
  /**
   * The date the schema version was created.
   *
   * @public
   */
  CreatedDate?: Date | undefined;

  /**
   * The version number of the schema
   *
   * @public
   */
  SchemaVersion?: string | undefined;

  /**
   * The type of schema.
   *
   * @public
   */
  Type?: Type | undefined;
}

/**
 * @public
 */
export interface SearchSchemaSummary {
  /**
   * The name of the registry.
   *
   * @public
   */
  RegistryName?: string | undefined;

  /**
   * The ARN of the schema.
   *
   * @public
   */
  SchemaArn?: string | undefined;

  /**
   * The name of the schema.
   *
   * @public
   */
  SchemaName?: string | undefined;

  /**
   * An array of schema version summaries.
   *
   * @public
   */
  SchemaVersions?: SearchSchemaVersionSummary[] | undefined;
}

/**
 * @public
 */
export interface CreateDiscovererRequest {
  /**
   * A description for the discoverer.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The ARN of the event bus.
   *
   * @public
   */
  SourceArn: string | undefined;

  /**
   * Support discovery of schemas in events sent to the bus from another account. (default: true).
   *
   * @public
   */
  CrossAccount?: boolean | undefined;

  /**
   * Tags associated with the resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateDiscovererResponse {
  /**
   * The description of the discoverer.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The ARN of the discoverer.
   *
   * @public
   */
  DiscovererArn?: string | undefined;

  /**
   * The ID of the discoverer.
   *
   * @public
   */
  DiscovererId?: string | undefined;

  /**
   * The ARN of the event bus.
   *
   * @public
   */
  SourceArn?: string | undefined;

  /**
   * The state of the discoverer.
   *
   * @public
   */
  State?: DiscovererState | undefined;

  /**
   * The Status if the discoverer will discover schemas from events sent from another account.
   *
   * @public
   */
  CrossAccount?: boolean | undefined;

  /**
   * Tags associated with the resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateRegistryRequest {
  /**
   * A description of the registry to be created.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The name of the registry.
   *
   * @public
   */
  RegistryName: string | undefined;

  /**
   * Tags to associate with the registry.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateRegistryResponse {
  /**
   * The description of the registry.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The ARN of the registry.
   *
   * @public
   */
  RegistryArn?: string | undefined;

  /**
   * The name of the registry.
   *
   * @public
   */
  RegistryName?: string | undefined;

  /**
   * Tags associated with the registry.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateSchemaRequest {
  /**
   * The source of the schema definition.
   *
   * @public
   */
  Content: string | undefined;

  /**
   * A description of the schema.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The name of the registry.
   *
   * @public
   */
  RegistryName: string | undefined;

  /**
   * The name of the schema.
   *
   * @public
   */
  SchemaName: string | undefined;

  /**
   * Tags associated with the schema.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The type of schema.
   *
   * @public
   */
  Type: Type | undefined;
}

/**
 * @public
 */
export interface CreateSchemaResponse {
  /**
   * The description of the schema.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The date and time that schema was modified.
   *
   * @public
   */
  LastModified?: Date | undefined;

  /**
   * The ARN of the schema.
   *
   * @public
   */
  SchemaArn?: string | undefined;

  /**
   * The name of the schema.
   *
   * @public
   */
  SchemaName?: string | undefined;

  /**
   * The version number of the schema
   *
   * @public
   */
  SchemaVersion?: string | undefined;

  /**
   * Key-value pairs associated with a resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The type of the schema.
   *
   * @public
   */
  Type?: string | undefined;

  /**
   * The date the schema version was created.
   *
   * @public
   */
  VersionCreatedDate?: Date | undefined;
}

/**
 * @public
 */
export interface DeleteDiscovererRequest {
  /**
   * The ID of the discoverer.
   *
   * @public
   */
  DiscovererId: string | undefined;
}

/**
 * @public
 */
export interface DeleteRegistryRequest {
  /**
   * The name of the registry.
   *
   * @public
   */
  RegistryName: string | undefined;
}

/**
 * @public
 */
export interface DeleteResourcePolicyRequest {
  /**
   * The name of the registry.
   *
   * @public
   */
  RegistryName?: string | undefined;
}

/**
 * @public
 */
export interface DeleteSchemaRequest {
  /**
   * The name of the registry.
   *
   * @public
   */
  RegistryName: string | undefined;

  /**
   * The name of the schema.
   *
   * @public
   */
  SchemaName: string | undefined;
}

/**
 * @public
 */
export interface DeleteSchemaVersionRequest {
  /**
   * The name of the registry.
   *
   * @public
   */
  RegistryName: string | undefined;

  /**
   * The name of the schema.
   *
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
   * The language of the code binding.
   *
   * @public
   */
  Language: string | undefined;

  /**
   * The name of the registry.
   *
   * @public
   */
  RegistryName: string | undefined;

  /**
   * The name of the schema.
   *
   * @public
   */
  SchemaName: string | undefined;

  /**
   * Specifying this limits the results to only this schema version.
   *
   * @public
   */
  SchemaVersion?: string | undefined;
}

/**
 * @public
 */
export interface DescribeCodeBindingResponse {
  /**
   * The time and date that the code binding was created.
   *
   * @public
   */
  CreationDate?: Date | undefined;

  /**
   * The date and time that code bindings were modified.
   *
   * @public
   */
  LastModified?: Date | undefined;

  /**
   * The version number of the schema.
   *
   * @public
   */
  SchemaVersion?: string | undefined;

  /**
   * The current status of code binding generation.
   *
   * @public
   */
  Status?: CodeGenerationStatus | undefined;
}

/**
 * @public
 */
export interface DescribeDiscovererRequest {
  /**
   * The ID of the discoverer.
   *
   * @public
   */
  DiscovererId: string | undefined;
}

/**
 * @public
 */
export interface DescribeDiscovererResponse {
  /**
   * The description of the discoverer.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The ARN of the discoverer.
   *
   * @public
   */
  DiscovererArn?: string | undefined;

  /**
   * The ID of the discoverer.
   *
   * @public
   */
  DiscovererId?: string | undefined;

  /**
   * The ARN of the event bus.
   *
   * @public
   */
  SourceArn?: string | undefined;

  /**
   * The state of the discoverer.
   *
   * @public
   */
  State?: DiscovererState | undefined;

  /**
   * The Status if the discoverer will discover schemas from events sent from another account.
   *
   * @public
   */
  CrossAccount?: boolean | undefined;

  /**
   * Tags associated with the resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface DescribeRegistryRequest {
  /**
   * The name of the registry.
   *
   * @public
   */
  RegistryName: string | undefined;
}

/**
 * @public
 */
export interface DescribeRegistryResponse {
  /**
   * The description of the registry.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The ARN of the registry.
   *
   * @public
   */
  RegistryArn?: string | undefined;

  /**
   * The name of the registry.
   *
   * @public
   */
  RegistryName?: string | undefined;

  /**
   * Tags associated with the registry.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface DescribeSchemaRequest {
  /**
   * The name of the registry.
   *
   * @public
   */
  RegistryName: string | undefined;

  /**
   * The name of the schema.
   *
   * @public
   */
  SchemaName: string | undefined;

  /**
   * Specifying this limits the results to only this schema version.
   *
   * @public
   */
  SchemaVersion?: string | undefined;
}

/**
 * @public
 */
export interface DescribeSchemaResponse {
  /**
   * The source of the schema definition.
   *
   * @public
   */
  Content?: string | undefined;

  /**
   * The description of the schema.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The date and time that schema was modified.
   *
   * @public
   */
  LastModified?: Date | undefined;

  /**
   * The ARN of the schema.
   *
   * @public
   */
  SchemaArn?: string | undefined;

  /**
   * The name of the schema.
   *
   * @public
   */
  SchemaName?: string | undefined;

  /**
   * The version number of the schema
   *
   * @public
   */
  SchemaVersion?: string | undefined;

  /**
   * Tags associated with the resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The type of the schema.
   *
   * @public
   */
  Type?: string | undefined;

  /**
   * The date the schema version was created.
   *
   * @public
   */
  VersionCreatedDate?: Date | undefined;
}

/**
 * @public
 */
export interface ExportSchemaRequest {
  /**
   * The name of the registry.
   *
   * @public
   */
  RegistryName: string | undefined;

  /**
   * The name of the schema.
   *
   * @public
   */
  SchemaName: string | undefined;

  /**
   * Specifying this limits the results to only this schema version.
   *
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
   * The language of the code binding.
   *
   * @public
   */
  Language: string | undefined;

  /**
   * The name of the registry.
   *
   * @public
   */
  RegistryName: string | undefined;

  /**
   * The name of the schema.
   *
   * @public
   */
  SchemaName: string | undefined;

  /**
   * Specifying this limits the results to only this schema version.
   *
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
   * An array of strings where each string is a JSON event. These are the events that were used to generate the schema. The array includes a single type of event and has a maximum size of 10 events.
   *
   * @public
   */
  Events: string[] | undefined;

  /**
   * The type of event.
   *
   * @public
   */
  Type: Type | undefined;
}

/**
 * @public
 */
export interface GetDiscoveredSchemaResponse {
  /**
   * The source of the schema definition.
   *
   * @public
   */
  Content?: string | undefined;
}

/**
 * @public
 */
export interface GetResourcePolicyRequest {
  /**
   * The name of the registry.
   *
   * @public
   */
  RegistryName?: string | undefined;
}

/**
 * @public
 */
export interface GetResourcePolicyResponse {
  /**
   * The resource-based policy.
   *
   * @public
   */
  Policy?: __AutomaticJsonStringConversion | string | undefined;

  /**
   * The revision ID.
   *
   * @public
   */
  RevisionId?: string | undefined;
}

/**
 * @public
 */
export interface ListDiscoverersRequest {
  /**
   * Specifying this limits the results to only those discoverer IDs that start with the specified prefix.
   *
   * @public
   */
  DiscovererIdPrefix?: string | undefined;

  Limit?: number | undefined;
  /**
   * The token that specifies the next page of results to return. To request the first page, leave NextToken empty. The token will expire in 24 hours, and cannot be shared with other accounts.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Specifying this limits the results to only those ARNs that start with the specified prefix.
   *
   * @public
   */
  SourceArnPrefix?: string | undefined;
}

/**
 * @public
 */
export interface ListDiscoverersResponse {
  /**
   * An array of DiscovererSummary information.
   *
   * @public
   */
  Discoverers?: DiscovererSummary[] | undefined;

  /**
   * The token that specifies the next page of results to return. To request the first page, leave NextToken empty. The token will expire in 24 hours, and cannot be shared with other accounts.
   *
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
   * The token that specifies the next page of results to return. To request the first page, leave NextToken empty. The token will expire in 24 hours, and cannot be shared with other accounts.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Specifying this limits the results to only those registry names that start with the specified prefix.
   *
   * @public
   */
  RegistryNamePrefix?: string | undefined;

  /**
   * Can be set to Local or AWS to limit responses to your custom registries, or the ones provided by AWS.
   *
   * @public
   */
  Scope?: string | undefined;
}

/**
 * @public
 */
export interface ListRegistriesResponse {
  /**
   * The token that specifies the next page of results to return. To request the first page, leave NextToken empty. The token will expire in 24 hours, and cannot be shared with other accounts.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * An array of registry summaries.
   *
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
   * The token that specifies the next page of results to return. To request the first page, leave NextToken empty. The token will expire in 24 hours, and cannot be shared with other accounts.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The name of the registry.
   *
   * @public
   */
  RegistryName: string | undefined;

  /**
   * Specifying this limits the results to only those schema names that start with the specified prefix.
   *
   * @public
   */
  SchemaNamePrefix?: string | undefined;
}

/**
 * @public
 */
export interface ListSchemasResponse {
  /**
   * The token that specifies the next page of results to return. To request the first page, leave NextToken empty. The token will expire in 24 hours, and cannot be shared with other accounts.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * An array of schema summaries.
   *
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
   * The token that specifies the next page of results to return. To request the first page, leave NextToken empty. The token will expire in 24 hours, and cannot be shared with other accounts.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The name of the registry.
   *
   * @public
   */
  RegistryName: string | undefined;

  /**
   * The name of the schema.
   *
   * @public
   */
  SchemaName: string | undefined;
}

/**
 * @public
 */
export interface ListSchemaVersionsResponse {
  /**
   * The token that specifies the next page of results to return. To request the first page, leave NextToken empty. The token will expire in 24 hours, and cannot be shared with other accounts.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * An array of schema version summaries.
   *
   * @public
   */
  SchemaVersions?: SchemaVersionSummary[] | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The ARN of the resource.
   *
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * Key-value pairs associated with a resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface PutCodeBindingRequest {
  /**
   * The language of the code binding.
   *
   * @public
   */
  Language: string | undefined;

  /**
   * The name of the registry.
   *
   * @public
   */
  RegistryName: string | undefined;

  /**
   * The name of the schema.
   *
   * @public
   */
  SchemaName: string | undefined;

  /**
   * Specifying this limits the results to only this schema version.
   *
   * @public
   */
  SchemaVersion?: string | undefined;
}

/**
 * @public
 */
export interface PutCodeBindingResponse {
  /**
   * The time and date that the code binding was created.
   *
   * @public
   */
  CreationDate?: Date | undefined;

  /**
   * The date and time that code bindings were modified.
   *
   * @public
   */
  LastModified?: Date | undefined;

  /**
   * The version number of the schema.
   *
   * @public
   */
  SchemaVersion?: string | undefined;

  /**
   * The current status of code binding generation.
   *
   * @public
   */
  Status?: CodeGenerationStatus | undefined;
}

/**
 * The name of the policy.
 *
 * @public
 */
export interface PutResourcePolicyRequest {
  /**
   * The resource-based policy.
   *
   * @public
   */
  Policy: __AutomaticJsonStringConversion | string | undefined;

  /**
   * The name of the registry.
   *
   * @public
   */
  RegistryName?: string | undefined;

  /**
   * The revision ID of the policy.
   *
   * @public
   */
  RevisionId?: string | undefined;
}

/**
 * @public
 */
export interface PutResourcePolicyResponse {
  /**
   * The resource-based policy.
   *
   * @public
   */
  Policy?: __AutomaticJsonStringConversion | string | undefined;

  /**
   * The revision ID of the policy.
   *
   * @public
   */
  RevisionId?: string | undefined;
}

/**
 * @public
 */
export interface SearchSchemasRequest {
  /**
   * Specifying this limits the results to only schemas that include the provided keywords.
   *
   * @public
   */
  Keywords: string | undefined;

  Limit?: number | undefined;
  /**
   * The token that specifies the next page of results to return. To request the first page, leave NextToken empty. The token will expire in 24 hours, and cannot be shared with other accounts.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The name of the registry.
   *
   * @public
   */
  RegistryName: string | undefined;
}

/**
 * @public
 */
export interface SearchSchemasResponse {
  /**
   * The token that specifies the next page of results to return. To request the first page, leave NextToken empty. The token will expire in 24 hours, and cannot be shared with other accounts.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * An array of SearchSchemaSummary information.
   *
   * @public
   */
  Schemas?: SearchSchemaSummary[] | undefined;
}

/**
 * @public
 */
export interface StartDiscovererRequest {
  /**
   * The ID of the discoverer.
   *
   * @public
   */
  DiscovererId: string | undefined;
}

/**
 * @public
 */
export interface StartDiscovererResponse {
  /**
   * The ID of the discoverer.
   *
   * @public
   */
  DiscovererId?: string | undefined;

  /**
   * The state of the discoverer.
   *
   * @public
   */
  State?: DiscovererState | undefined;
}

/**
 * @public
 */
export interface StopDiscovererRequest {
  /**
   * The ID of the discoverer.
   *
   * @public
   */
  DiscovererId: string | undefined;
}

/**
 * @public
 */
export interface StopDiscovererResponse {
  /**
   * The ID of the discoverer.
   *
   * @public
   */
  DiscovererId?: string | undefined;

  /**
   * The state of the discoverer.
   *
   * @public
   */
  State?: DiscovererState | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The ARN of the resource.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * Tags associated with the resource.
   *
   * @public
   */
  Tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * The ARN of the resource.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * Keys of key-value pairs.
   *
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateDiscovererRequest {
  /**
   * The description of the discoverer to update.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The ID of the discoverer.
   *
   * @public
   */
  DiscovererId: string | undefined;

  /**
   * Support discovery of schemas in events sent to the bus from another account. (default: true)
   *
   * @public
   */
  CrossAccount?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateDiscovererResponse {
  /**
   * The description of the discoverer.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The ARN of the discoverer.
   *
   * @public
   */
  DiscovererArn?: string | undefined;

  /**
   * The ID of the discoverer.
   *
   * @public
   */
  DiscovererId?: string | undefined;

  /**
   * The ARN of the event bus.
   *
   * @public
   */
  SourceArn?: string | undefined;

  /**
   * The state of the discoverer.
   *
   * @public
   */
  State?: DiscovererState | undefined;

  /**
   * The Status if the discoverer will discover schemas from events sent from another account.
   *
   * @public
   */
  CrossAccount?: boolean | undefined;

  /**
   * Tags associated with the resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * Updates the registry.
 *
 * @public
 */
export interface UpdateRegistryRequest {
  /**
   * The description of the registry to update.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The name of the registry.
   *
   * @public
   */
  RegistryName: string | undefined;
}

/**
 * @public
 */
export interface UpdateRegistryResponse {
  /**
   * The description of the registry.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The ARN of the registry.
   *
   * @public
   */
  RegistryArn?: string | undefined;

  /**
   * The name of the registry.
   *
   * @public
   */
  RegistryName?: string | undefined;

  /**
   * Tags associated with the registry.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UpdateSchemaRequest {
  /**
   * The ID of the client token.
   *
   * @public
   */
  ClientTokenId?: string | undefined;

  /**
   * The source of the schema definition.
   *
   * @public
   */
  Content?: string | undefined;

  /**
   * The description of the schema.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The name of the registry.
   *
   * @public
   */
  RegistryName: string | undefined;

  /**
   * The name of the schema.
   *
   * @public
   */
  SchemaName: string | undefined;

  /**
   * The schema type for the events schema.
   *
   * @public
   */
  Type?: Type | undefined;
}

/**
 * @public
 */
export interface UpdateSchemaResponse {
  /**
   * The description of the schema.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The date and time that schema was modified.
   *
   * @public
   */
  LastModified?: Date | undefined;

  /**
   * The ARN of the schema.
   *
   * @public
   */
  SchemaArn?: string | undefined;

  /**
   * The name of the schema.
   *
   * @public
   */
  SchemaName?: string | undefined;

  /**
   * The version number of the schema
   *
   * @public
   */
  SchemaVersion?: string | undefined;

  /**
   * Key-value pairs associated with a resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The type of the schema.
   *
   * @public
   */
  Type?: string | undefined;

  /**
   * The date the schema version was created.
   *
   * @public
   */
  VersionCreatedDate?: Date | undefined;
}
