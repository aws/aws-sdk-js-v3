// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  limitedParseDouble as __limitedParseDouble,
  map as __map,
  parseEpochTimestamp as __parseEpochTimestamp,
  resolvedPath as __resolvedPath,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  CreateConnectorProfileCommandInput,
  CreateConnectorProfileCommandOutput,
} from "../commands/CreateConnectorProfileCommand";
import { CreateFlowCommandInput, CreateFlowCommandOutput } from "../commands/CreateFlowCommand";
import {
  DeleteConnectorProfileCommandInput,
  DeleteConnectorProfileCommandOutput,
} from "../commands/DeleteConnectorProfileCommand";
import { DeleteFlowCommandInput, DeleteFlowCommandOutput } from "../commands/DeleteFlowCommand";
import { DescribeConnectorCommandInput, DescribeConnectorCommandOutput } from "../commands/DescribeConnectorCommand";
import {
  DescribeConnectorEntityCommandInput,
  DescribeConnectorEntityCommandOutput,
} from "../commands/DescribeConnectorEntityCommand";
import {
  DescribeConnectorProfilesCommandInput,
  DescribeConnectorProfilesCommandOutput,
} from "../commands/DescribeConnectorProfilesCommand";
import { DescribeConnectorsCommandInput, DescribeConnectorsCommandOutput } from "../commands/DescribeConnectorsCommand";
import { DescribeFlowCommandInput, DescribeFlowCommandOutput } from "../commands/DescribeFlowCommand";
import {
  DescribeFlowExecutionRecordsCommandInput,
  DescribeFlowExecutionRecordsCommandOutput,
} from "../commands/DescribeFlowExecutionRecordsCommand";
import {
  ListConnectorEntitiesCommandInput,
  ListConnectorEntitiesCommandOutput,
} from "../commands/ListConnectorEntitiesCommand";
import { ListConnectorsCommandInput, ListConnectorsCommandOutput } from "../commands/ListConnectorsCommand";
import { ListFlowsCommandInput, ListFlowsCommandOutput } from "../commands/ListFlowsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { RegisterConnectorCommandInput, RegisterConnectorCommandOutput } from "../commands/RegisterConnectorCommand";
import { StartFlowCommandInput, StartFlowCommandOutput } from "../commands/StartFlowCommand";
import { StopFlowCommandInput, StopFlowCommandOutput } from "../commands/StopFlowCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import {
  UnregisterConnectorCommandInput,
  UnregisterConnectorCommandOutput,
} from "../commands/UnregisterConnectorCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  UpdateConnectorProfileCommandInput,
  UpdateConnectorProfileCommandOutput,
} from "../commands/UpdateConnectorProfileCommand";
import {
  UpdateConnectorRegistrationCommandInput,
  UpdateConnectorRegistrationCommandOutput,
} from "../commands/UpdateConnectorRegistrationCommand";
import { UpdateFlowCommandInput, UpdateFlowCommandOutput } from "../commands/UpdateFlowCommand";
import { AppflowServiceException as __BaseException } from "../models/AppflowServiceException";
import {
  AccessDeniedException,
  AggregationConfig,
  AmplitudeConnectorProfileCredentials,
  AmplitudeConnectorProfileProperties,
  AmplitudeMetadata,
  AmplitudeSourceProperties,
  ApiKeyCredentials,
  AuthenticationConfig,
  AuthParameter,
  BasicAuthCredentials,
  ConflictException,
  ConnectorAuthenticationException,
  ConnectorConfiguration,
  ConnectorDetail,
  ConnectorEntity,
  ConnectorEntityField,
  ConnectorMetadata,
  ConnectorOAuthRequest,
  ConnectorOperator,
  ConnectorProfile,
  ConnectorProfileConfig,
  ConnectorProfileCredentials,
  ConnectorProfileProperties,
  ConnectorProvisioningConfig,
  ConnectorRuntimeSetting,
  ConnectorServerException,
  ConnectorType,
  CustomAuthConfig,
  CustomAuthCredentials,
  CustomConnectorDestinationProperties,
  CustomConnectorProfileCredentials,
  CustomConnectorProfileProperties,
  CustomConnectorSourceProperties,
  CustomerProfilesDestinationProperties,
  CustomerProfilesMetadata,
  DatadogConnectorProfileCredentials,
  DatadogConnectorProfileProperties,
  DatadogMetadata,
  DatadogSourceProperties,
  DestinationConnectorProperties,
  DestinationFieldProperties,
  DestinationFlowConfig,
  DynatraceConnectorProfileCredentials,
  DynatraceConnectorProfileProperties,
  DynatraceMetadata,
  DynatraceSourceProperties,
  ErrorHandlingConfig,
  ErrorInfo,
  EventBridgeDestinationProperties,
  EventBridgeMetadata,
  ExecutionDetails,
  ExecutionRecord,
  ExecutionResult,
  FieldTypeDetails,
  FlowDefinition,
  GlueDataCatalogConfig,
  GoogleAnalyticsConnectorProfileCredentials,
  GoogleAnalyticsConnectorProfileProperties,
  GoogleAnalyticsMetadata,
  GoogleAnalyticsSourceProperties,
  HoneycodeConnectorProfileCredentials,
  HoneycodeConnectorProfileProperties,
  HoneycodeDestinationProperties,
  HoneycodeMetadata,
  IncrementalPullConfig,
  InforNexusConnectorProfileCredentials,
  InforNexusConnectorProfileProperties,
  InforNexusMetadata,
  InforNexusSourceProperties,
  InternalServerException,
  LambdaConnectorProvisioningConfig,
  LookoutMetricsDestinationProperties,
  MarketoConnectorProfileCredentials,
  MarketoConnectorProfileProperties,
  MarketoDestinationProperties,
  MarketoMetadata,
  MarketoSourceProperties,
  MetadataCatalogConfig,
  MetadataCatalogDetail,
  OAuth2Credentials,
  OAuth2CustomParameter,
  OAuth2Defaults,
  OAuth2GrantType,
  OAuth2Properties,
  OAuthCredentials,
  OAuthProperties,
  Operator,
  OperatorPropertiesKeys,
  Operators,
  PardotConnectorProfileCredentials,
  PardotConnectorProfileProperties,
  PardotMetadata,
  PardotSourceProperties,
  PathPrefix,
  PrefixConfig,
  PrivateConnectionProvisioningState,
  Range,
  RedshiftConnectorProfileCredentials,
  RedshiftConnectorProfileProperties,
  RedshiftDestinationProperties,
  RedshiftMetadata,
  RegistrationOutput,
  ResourceNotFoundException,
  S3DestinationProperties,
  S3InputFormatConfig,
  S3Metadata,
  S3OutputFormatConfig,
  S3SourceProperties,
  SalesforceConnectorProfileCredentials,
  SalesforceConnectorProfileProperties,
  SalesforceDataTransferApi,
  SalesforceDestinationProperties,
  SalesforceMetadata,
  SalesforceSourceProperties,
  SAPODataConnectorProfileCredentials,
  SAPODataConnectorProfileProperties,
  SAPODataDestinationProperties,
  SAPODataMetadata,
  SAPODataSourceProperties,
  ScheduledTriggerProperties,
  ScheduleFrequencyType,
  ServiceNowConnectorProfileCredentials,
  ServiceNowConnectorProfileProperties,
  ServiceNowMetadata,
  ServiceNowSourceProperties,
  ServiceQuotaExceededException,
  SingularConnectorProfileCredentials,
  SingularConnectorProfileProperties,
  SingularMetadata,
  SingularSourceProperties,
  SlackConnectorProfileCredentials,
  SlackConnectorProfileProperties,
  SlackMetadata,
  SlackSourceProperties,
  SnowflakeConnectorProfileCredentials,
  SnowflakeConnectorProfileProperties,
  SnowflakeDestinationProperties,
  SnowflakeMetadata,
  SourceConnectorProperties,
  SourceFieldProperties,
  SourceFlowConfig,
  SuccessResponseHandlingConfig,
  SupportedFieldTypeDetails,
  Task,
  ThrottlingException,
  TrendmicroConnectorProfileCredentials,
  TrendmicroConnectorProfileProperties,
  TrendmicroMetadata,
  TrendmicroSourceProperties,
  TriggerConfig,
  TriggerProperties,
  TriggerType,
  UnsupportedOperationException,
  UpsolverDestinationProperties,
  UpsolverMetadata,
  UpsolverS3OutputFormatConfig,
  ValidationException,
  VeevaConnectorProfileCredentials,
  VeevaConnectorProfileProperties,
  VeevaMetadata,
  VeevaSourceProperties,
  WriteOperationType,
  ZendeskConnectorProfileCredentials,
  ZendeskConnectorProfileProperties,
  ZendeskDestinationProperties,
  ZendeskMetadata,
  ZendeskSourceProperties,
} from "../models/models_0";

/**
 * serializeAws_restJson1CreateConnectorProfileCommand
 */
export const se_CreateConnectorProfileCommand = async (
  input: CreateConnectorProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/create-connector-profile";
  let body: any;
  body = JSON.stringify({
    ...(input.connectionMode != null && { connectionMode: input.connectionMode }),
    ...(input.connectorLabel != null && { connectorLabel: input.connectorLabel }),
    ...(input.connectorProfileConfig != null && {
      connectorProfileConfig: se_ConnectorProfileConfig(input.connectorProfileConfig, context),
    }),
    ...(input.connectorProfileName != null && { connectorProfileName: input.connectorProfileName }),
    ...(input.connectorType != null && { connectorType: input.connectorType }),
    ...(input.kmsArn != null && { kmsArn: input.kmsArn }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CreateFlowCommand
 */
export const se_CreateFlowCommand = async (
  input: CreateFlowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/create-flow";
  let body: any;
  body = JSON.stringify({
    ...(input.description != null && { description: input.description }),
    ...(input.destinationFlowConfigList != null && {
      destinationFlowConfigList: se_DestinationFlowConfigList(input.destinationFlowConfigList, context),
    }),
    ...(input.flowName != null && { flowName: input.flowName }),
    ...(input.kmsArn != null && { kmsArn: input.kmsArn }),
    ...(input.metadataCatalogConfig != null && {
      metadataCatalogConfig: se_MetadataCatalogConfig(input.metadataCatalogConfig, context),
    }),
    ...(input.sourceFlowConfig != null && { sourceFlowConfig: se_SourceFlowConfig(input.sourceFlowConfig, context) }),
    ...(input.tags != null && { tags: se_TagMap(input.tags, context) }),
    ...(input.tasks != null && { tasks: se_Tasks(input.tasks, context) }),
    ...(input.triggerConfig != null && { triggerConfig: se_TriggerConfig(input.triggerConfig, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteConnectorProfileCommand
 */
export const se_DeleteConnectorProfileCommand = async (
  input: DeleteConnectorProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/delete-connector-profile";
  let body: any;
  body = JSON.stringify({
    ...(input.connectorProfileName != null && { connectorProfileName: input.connectorProfileName }),
    ...(input.forceDelete != null && { forceDelete: input.forceDelete }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteFlowCommand
 */
export const se_DeleteFlowCommand = async (
  input: DeleteFlowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/delete-flow";
  let body: any;
  body = JSON.stringify({
    ...(input.flowName != null && { flowName: input.flowName }),
    ...(input.forceDelete != null && { forceDelete: input.forceDelete }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DescribeConnectorCommand
 */
export const se_DescribeConnectorCommand = async (
  input: DescribeConnectorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/describe-connector";
  let body: any;
  body = JSON.stringify({
    ...(input.connectorLabel != null && { connectorLabel: input.connectorLabel }),
    ...(input.connectorType != null && { connectorType: input.connectorType }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DescribeConnectorEntityCommand
 */
export const se_DescribeConnectorEntityCommand = async (
  input: DescribeConnectorEntityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/describe-connector-entity";
  let body: any;
  body = JSON.stringify({
    ...(input.apiVersion != null && { apiVersion: input.apiVersion }),
    ...(input.connectorEntityName != null && { connectorEntityName: input.connectorEntityName }),
    ...(input.connectorProfileName != null && { connectorProfileName: input.connectorProfileName }),
    ...(input.connectorType != null && { connectorType: input.connectorType }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DescribeConnectorProfilesCommand
 */
export const se_DescribeConnectorProfilesCommand = async (
  input: DescribeConnectorProfilesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/describe-connector-profiles";
  let body: any;
  body = JSON.stringify({
    ...(input.connectorLabel != null && { connectorLabel: input.connectorLabel }),
    ...(input.connectorProfileNames != null && {
      connectorProfileNames: se_ConnectorProfileNameList(input.connectorProfileNames, context),
    }),
    ...(input.connectorType != null && { connectorType: input.connectorType }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DescribeConnectorsCommand
 */
export const se_DescribeConnectorsCommand = async (
  input: DescribeConnectorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/describe-connectors";
  let body: any;
  body = JSON.stringify({
    ...(input.connectorTypes != null && { connectorTypes: se_ConnectorTypeList(input.connectorTypes, context) }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DescribeFlowCommand
 */
export const se_DescribeFlowCommand = async (
  input: DescribeFlowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/describe-flow";
  let body: any;
  body = JSON.stringify({
    ...(input.flowName != null && { flowName: input.flowName }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DescribeFlowExecutionRecordsCommand
 */
export const se_DescribeFlowExecutionRecordsCommand = async (
  input: DescribeFlowExecutionRecordsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/describe-flow-execution-records";
  let body: any;
  body = JSON.stringify({
    ...(input.flowName != null && { flowName: input.flowName }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1ListConnectorEntitiesCommand
 */
export const se_ListConnectorEntitiesCommand = async (
  input: ListConnectorEntitiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/list-connector-entities";
  let body: any;
  body = JSON.stringify({
    ...(input.apiVersion != null && { apiVersion: input.apiVersion }),
    ...(input.connectorProfileName != null && { connectorProfileName: input.connectorProfileName }),
    ...(input.connectorType != null && { connectorType: input.connectorType }),
    ...(input.entitiesPath != null && { entitiesPath: input.entitiesPath }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1ListConnectorsCommand
 */
export const se_ListConnectorsCommand = async (
  input: ListConnectorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/list-connectors";
  let body: any;
  body = JSON.stringify({
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1ListFlowsCommand
 */
export const se_ListFlowsCommand = async (
  input: ListFlowsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/list-flows";
  let body: any;
  body = JSON.stringify({
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{resourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1RegisterConnectorCommand
 */
export const se_RegisterConnectorCommand = async (
  input: RegisterConnectorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/register-connector";
  let body: any;
  body = JSON.stringify({
    ...(input.connectorLabel != null && { connectorLabel: input.connectorLabel }),
    ...(input.connectorProvisioningConfig != null && {
      connectorProvisioningConfig: se_ConnectorProvisioningConfig(input.connectorProvisioningConfig, context),
    }),
    ...(input.connectorProvisioningType != null && { connectorProvisioningType: input.connectorProvisioningType }),
    ...(input.description != null && { description: input.description }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1StartFlowCommand
 */
export const se_StartFlowCommand = async (
  input: StartFlowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/start-flow";
  let body: any;
  body = JSON.stringify({
    ...(input.flowName != null && { flowName: input.flowName }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1StopFlowCommand
 */
export const se_StopFlowCommand = async (
  input: StopFlowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/stop-flow";
  let body: any;
  body = JSON.stringify({
    ...(input.flowName != null && { flowName: input.flowName }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{resourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.tags != null && { tags: se_TagMap(input.tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UnregisterConnectorCommand
 */
export const se_UnregisterConnectorCommand = async (
  input: UnregisterConnectorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/unregister-connector";
  let body: any;
  body = JSON.stringify({
    ...(input.connectorLabel != null && { connectorLabel: input.connectorLabel }),
    ...(input.forceDelete != null && { forceDelete: input.forceDelete }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{resourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  const query: any = map({
    tagKeys: [
      __expectNonNull(input.tagKeys, `tagKeys`) != null,
      () => (input.tagKeys! || []).map((_entry) => _entry as any),
    ],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateConnectorProfileCommand
 */
export const se_UpdateConnectorProfileCommand = async (
  input: UpdateConnectorProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/update-connector-profile";
  let body: any;
  body = JSON.stringify({
    ...(input.connectionMode != null && { connectionMode: input.connectionMode }),
    ...(input.connectorProfileConfig != null && {
      connectorProfileConfig: se_ConnectorProfileConfig(input.connectorProfileConfig, context),
    }),
    ...(input.connectorProfileName != null && { connectorProfileName: input.connectorProfileName }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateConnectorRegistrationCommand
 */
export const se_UpdateConnectorRegistrationCommand = async (
  input: UpdateConnectorRegistrationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/update-connector-registration";
  let body: any;
  body = JSON.stringify({
    ...(input.connectorLabel != null && { connectorLabel: input.connectorLabel }),
    ...(input.connectorProvisioningConfig != null && {
      connectorProvisioningConfig: se_ConnectorProvisioningConfig(input.connectorProvisioningConfig, context),
    }),
    ...(input.description != null && { description: input.description }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateFlowCommand
 */
export const se_UpdateFlowCommand = async (
  input: UpdateFlowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/update-flow";
  let body: any;
  body = JSON.stringify({
    ...(input.description != null && { description: input.description }),
    ...(input.destinationFlowConfigList != null && {
      destinationFlowConfigList: se_DestinationFlowConfigList(input.destinationFlowConfigList, context),
    }),
    ...(input.flowName != null && { flowName: input.flowName }),
    ...(input.metadataCatalogConfig != null && {
      metadataCatalogConfig: se_MetadataCatalogConfig(input.metadataCatalogConfig, context),
    }),
    ...(input.sourceFlowConfig != null && { sourceFlowConfig: se_SourceFlowConfig(input.sourceFlowConfig, context) }),
    ...(input.tasks != null && { tasks: se_Tasks(input.tasks, context) }),
    ...(input.triggerConfig != null && { triggerConfig: se_TriggerConfig(input.triggerConfig, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * deserializeAws_restJson1CreateConnectorProfileCommand
 */
export const de_CreateConnectorProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConnectorProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateConnectorProfileCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.connectorProfileArn != null) {
    contents.connectorProfileArn = __expectString(data.connectorProfileArn);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateConnectorProfileCommandError
 */
const de_CreateConnectorProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConnectorProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.appflow#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ConnectorAuthenticationException":
    case "com.amazonaws.appflow#ConnectorAuthenticationException":
      throw await de_ConnectorAuthenticationExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appflow#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.appflow#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.appflow#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreateFlowCommand
 */
export const de_CreateFlowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFlowCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateFlowCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.flowArn != null) {
    contents.flowArn = __expectString(data.flowArn);
  }
  if (data.flowStatus != null) {
    contents.flowStatus = __expectString(data.flowStatus);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateFlowCommandError
 */
const de_CreateFlowCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFlowCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.appflow#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ConnectorAuthenticationException":
    case "com.amazonaws.appflow#ConnectorAuthenticationException":
      throw await de_ConnectorAuthenticationExceptionRes(parsedOutput, context);
    case "ConnectorServerException":
    case "com.amazonaws.appflow#ConnectorServerException":
      throw await de_ConnectorServerExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appflow#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appflow#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.appflow#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.appflow#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteConnectorProfileCommand
 */
export const de_DeleteConnectorProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConnectorProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteConnectorProfileCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteConnectorProfileCommandError
 */
const de_DeleteConnectorProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConnectorProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.appflow#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appflow#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appflow#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteFlowCommand
 */
export const de_DeleteFlowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFlowCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteFlowCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteFlowCommandError
 */
const de_DeleteFlowCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFlowCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.appflow#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appflow#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appflow#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DescribeConnectorCommand
 */
export const de_DescribeConnectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConnectorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeConnectorCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.connectorConfiguration != null) {
    contents.connectorConfiguration = de_ConnectorConfiguration(data.connectorConfiguration, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeConnectorCommandError
 */
const de_DescribeConnectorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConnectorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.appflow#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appflow#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.appflow#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DescribeConnectorEntityCommand
 */
export const de_DescribeConnectorEntityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConnectorEntityCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeConnectorEntityCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.connectorEntityFields != null) {
    contents.connectorEntityFields = de_ConnectorEntityFieldList(data.connectorEntityFields, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeConnectorEntityCommandError
 */
const de_DescribeConnectorEntityCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConnectorEntityCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConnectorAuthenticationException":
    case "com.amazonaws.appflow#ConnectorAuthenticationException":
      throw await de_ConnectorAuthenticationExceptionRes(parsedOutput, context);
    case "ConnectorServerException":
    case "com.amazonaws.appflow#ConnectorServerException":
      throw await de_ConnectorServerExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appflow#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appflow#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.appflow#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DescribeConnectorProfilesCommand
 */
export const de_DescribeConnectorProfilesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConnectorProfilesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeConnectorProfilesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.connectorProfileDetails != null) {
    contents.connectorProfileDetails = de_ConnectorProfileDetailList(data.connectorProfileDetails, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeConnectorProfilesCommandError
 */
const de_DescribeConnectorProfilesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConnectorProfilesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.appflow#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.appflow#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DescribeConnectorsCommand
 */
export const de_DescribeConnectorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConnectorsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeConnectorsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.connectorConfigurations != null) {
    contents.connectorConfigurations = de_ConnectorConfigurationsMap(data.connectorConfigurations, context);
  }
  if (data.connectors != null) {
    contents.connectors = de_ConnectorList(data.connectors, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeConnectorsCommandError
 */
const de_DescribeConnectorsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConnectorsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.appflow#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.appflow#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DescribeFlowCommand
 */
export const de_DescribeFlowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFlowCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeFlowCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.createdAt != null) {
    contents.createdAt = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.createdAt)));
  }
  if (data.createdBy != null) {
    contents.createdBy = __expectString(data.createdBy);
  }
  if (data.description != null) {
    contents.description = __expectString(data.description);
  }
  if (data.destinationFlowConfigList != null) {
    contents.destinationFlowConfigList = de_DestinationFlowConfigList(data.destinationFlowConfigList, context);
  }
  if (data.flowArn != null) {
    contents.flowArn = __expectString(data.flowArn);
  }
  if (data.flowName != null) {
    contents.flowName = __expectString(data.flowName);
  }
  if (data.flowStatus != null) {
    contents.flowStatus = __expectString(data.flowStatus);
  }
  if (data.flowStatusMessage != null) {
    contents.flowStatusMessage = __expectString(data.flowStatusMessage);
  }
  if (data.kmsArn != null) {
    contents.kmsArn = __expectString(data.kmsArn);
  }
  if (data.lastRunExecutionDetails != null) {
    contents.lastRunExecutionDetails = de_ExecutionDetails(data.lastRunExecutionDetails, context);
  }
  if (data.lastRunMetadataCatalogDetails != null) {
    contents.lastRunMetadataCatalogDetails = de_MetadataCatalogDetails(data.lastRunMetadataCatalogDetails, context);
  }
  if (data.lastUpdatedAt != null) {
    contents.lastUpdatedAt = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.lastUpdatedAt)));
  }
  if (data.lastUpdatedBy != null) {
    contents.lastUpdatedBy = __expectString(data.lastUpdatedBy);
  }
  if (data.metadataCatalogConfig != null) {
    contents.metadataCatalogConfig = de_MetadataCatalogConfig(data.metadataCatalogConfig, context);
  }
  if (data.schemaVersion != null) {
    contents.schemaVersion = __expectLong(data.schemaVersion);
  }
  if (data.sourceFlowConfig != null) {
    contents.sourceFlowConfig = de_SourceFlowConfig(data.sourceFlowConfig, context);
  }
  if (data.tags != null) {
    contents.tags = de_TagMap(data.tags, context);
  }
  if (data.tasks != null) {
    contents.tasks = de_Tasks(data.tasks, context);
  }
  if (data.triggerConfig != null) {
    contents.triggerConfig = de_TriggerConfig(data.triggerConfig, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeFlowCommandError
 */
const de_DescribeFlowCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFlowCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.appflow#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appflow#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DescribeFlowExecutionRecordsCommand
 */
export const de_DescribeFlowExecutionRecordsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFlowExecutionRecordsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeFlowExecutionRecordsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.flowExecutions != null) {
    contents.flowExecutions = de_FlowExecutionList(data.flowExecutions, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeFlowExecutionRecordsCommandError
 */
const de_DescribeFlowExecutionRecordsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFlowExecutionRecordsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.appflow#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appflow#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.appflow#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListConnectorEntitiesCommand
 */
export const de_ListConnectorEntitiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConnectorEntitiesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListConnectorEntitiesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.connectorEntityMap != null) {
    contents.connectorEntityMap = de_ConnectorEntityMap(data.connectorEntityMap, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListConnectorEntitiesCommandError
 */
const de_ListConnectorEntitiesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConnectorEntitiesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConnectorAuthenticationException":
    case "com.amazonaws.appflow#ConnectorAuthenticationException":
      throw await de_ConnectorAuthenticationExceptionRes(parsedOutput, context);
    case "ConnectorServerException":
    case "com.amazonaws.appflow#ConnectorServerException":
      throw await de_ConnectorServerExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appflow#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appflow#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.appflow#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListConnectorsCommand
 */
export const de_ListConnectorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConnectorsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListConnectorsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.connectors != null) {
    contents.connectors = de_ConnectorList(data.connectors, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListConnectorsCommandError
 */
const de_ListConnectorsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConnectorsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.appflow#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.appflow#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListFlowsCommand
 */
export const de_ListFlowsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFlowsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListFlowsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.flows != null) {
    contents.flows = de_FlowList(data.flows, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListFlowsCommandError
 */
const de_ListFlowsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFlowsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.appflow#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.appflow#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListTagsForResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.tags != null) {
    contents.tags = de_TagMap(data.tags, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListTagsForResourceCommandError
 */
const de_ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.appflow#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appflow#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.appflow#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1RegisterConnectorCommand
 */
export const de_RegisterConnectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterConnectorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_RegisterConnectorCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.connectorArn != null) {
    contents.connectorArn = __expectString(data.connectorArn);
  }
  return contents;
};

/**
 * deserializeAws_restJson1RegisterConnectorCommandError
 */
const de_RegisterConnectorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterConnectorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.appflow#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.appflow#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ConnectorAuthenticationException":
    case "com.amazonaws.appflow#ConnectorAuthenticationException":
      throw await de_ConnectorAuthenticationExceptionRes(parsedOutput, context);
    case "ConnectorServerException":
    case "com.amazonaws.appflow#ConnectorServerException":
      throw await de_ConnectorServerExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appflow#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appflow#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.appflow#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.appflow#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.appflow#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1StartFlowCommand
 */
export const de_StartFlowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartFlowCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_StartFlowCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.executionId != null) {
    contents.executionId = __expectString(data.executionId);
  }
  if (data.flowArn != null) {
    contents.flowArn = __expectString(data.flowArn);
  }
  if (data.flowStatus != null) {
    contents.flowStatus = __expectString(data.flowStatus);
  }
  return contents;
};

/**
 * deserializeAws_restJson1StartFlowCommandError
 */
const de_StartFlowCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartFlowCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.appflow#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appflow#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appflow#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.appflow#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1StopFlowCommand
 */
export const de_StopFlowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopFlowCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_StopFlowCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.flowArn != null) {
    contents.flowArn = __expectString(data.flowArn);
  }
  if (data.flowStatus != null) {
    contents.flowStatus = __expectString(data.flowStatus);
  }
  return contents;
};

/**
 * deserializeAws_restJson1StopFlowCommandError
 */
const de_StopFlowCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopFlowCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.appflow#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appflow#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appflow#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.appflow#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_TagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1TagResourceCommandError
 */
const de_TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.appflow#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appflow#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.appflow#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UnregisterConnectorCommand
 */
export const de_UnregisterConnectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UnregisterConnectorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UnregisterConnectorCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UnregisterConnectorCommandError
 */
const de_UnregisterConnectorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UnregisterConnectorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.appflow#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appflow#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appflow#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UntagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UntagResourceCommandError
 */
const de_UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.appflow#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appflow#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.appflow#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateConnectorProfileCommand
 */
export const de_UpdateConnectorProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConnectorProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateConnectorProfileCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.connectorProfileArn != null) {
    contents.connectorProfileArn = __expectString(data.connectorProfileArn);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateConnectorProfileCommandError
 */
const de_UpdateConnectorProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConnectorProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.appflow#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ConnectorAuthenticationException":
    case "com.amazonaws.appflow#ConnectorAuthenticationException":
      throw await de_ConnectorAuthenticationExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appflow#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appflow#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.appflow#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateConnectorRegistrationCommand
 */
export const de_UpdateConnectorRegistrationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConnectorRegistrationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateConnectorRegistrationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.connectorArn != null) {
    contents.connectorArn = __expectString(data.connectorArn);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateConnectorRegistrationCommandError
 */
const de_UpdateConnectorRegistrationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConnectorRegistrationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.appflow#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.appflow#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ConnectorAuthenticationException":
    case "com.amazonaws.appflow#ConnectorAuthenticationException":
      throw await de_ConnectorAuthenticationExceptionRes(parsedOutput, context);
    case "ConnectorServerException":
    case "com.amazonaws.appflow#ConnectorServerException":
      throw await de_ConnectorServerExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appflow#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appflow#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.appflow#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.appflow#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.appflow#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateFlowCommand
 */
export const de_UpdateFlowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFlowCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateFlowCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.flowStatus != null) {
    contents.flowStatus = __expectString(data.flowStatus);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateFlowCommandError
 */
const de_UpdateFlowCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFlowCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.appflow#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ConnectorAuthenticationException":
    case "com.amazonaws.appflow#ConnectorAuthenticationException":
      throw await de_ConnectorAuthenticationExceptionRes(parsedOutput, context);
    case "ConnectorServerException":
    case "com.amazonaws.appflow#ConnectorServerException":
      throw await de_ConnectorServerExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appflow#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appflow#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.appflow#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.appflow#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

const map = __map;
/**
 * deserializeAws_restJson1AccessDeniedExceptionRes
 */
const de_AccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ConflictExceptionRes
 */
const de_ConflictExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ConflictException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ConnectorAuthenticationExceptionRes
 */
const de_ConnectorAuthenticationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConnectorAuthenticationException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ConnectorAuthenticationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ConnectorServerExceptionRes
 */
const de_ConnectorServerExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConnectorServerException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ConnectorServerException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InternalServerExceptionRes
 */
const de_InternalServerExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new InternalServerException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ResourceNotFoundExceptionRes
 */
const de_ResourceNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ServiceQuotaExceededExceptionRes
 */
const de_ServiceQuotaExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceQuotaExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ServiceQuotaExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ThrottlingExceptionRes
 */
const de_ThrottlingExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ThrottlingException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1UnsupportedOperationExceptionRes
 */
const de_UnsupportedOperationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedOperationException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new UnsupportedOperationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ValidationExceptionRes
 */
const de_ValidationExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ValidationException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * serializeAws_restJson1AggregationConfig
 */
const se_AggregationConfig = (input: AggregationConfig, context: __SerdeContext): any => {
  return {
    ...(input.aggregationType != null && { aggregationType: input.aggregationType }),
    ...(input.targetFileSize != null && { targetFileSize: input.targetFileSize }),
  };
};

/**
 * serializeAws_restJson1AmplitudeConnectorProfileCredentials
 */
const se_AmplitudeConnectorProfileCredentials = (
  input: AmplitudeConnectorProfileCredentials,
  context: __SerdeContext
): any => {
  return {
    ...(input.apiKey != null && { apiKey: input.apiKey }),
    ...(input.secretKey != null && { secretKey: input.secretKey }),
  };
};

/**
 * serializeAws_restJson1AmplitudeConnectorProfileProperties
 */
const se_AmplitudeConnectorProfileProperties = (
  input: AmplitudeConnectorProfileProperties,
  context: __SerdeContext
): any => {
  return {};
};

/**
 * serializeAws_restJson1AmplitudeSourceProperties
 */
const se_AmplitudeSourceProperties = (input: AmplitudeSourceProperties, context: __SerdeContext): any => {
  return {
    ...(input.object != null && { object: input.object }),
  };
};

/**
 * serializeAws_restJson1ApiKeyCredentials
 */
const se_ApiKeyCredentials = (input: ApiKeyCredentials, context: __SerdeContext): any => {
  return {
    ...(input.apiKey != null && { apiKey: input.apiKey }),
    ...(input.apiSecretKey != null && { apiSecretKey: input.apiSecretKey }),
  };
};

/**
 * serializeAws_restJson1BasicAuthCredentials
 */
const se_BasicAuthCredentials = (input: BasicAuthCredentials, context: __SerdeContext): any => {
  return {
    ...(input.password != null && { password: input.password }),
    ...(input.username != null && { username: input.username }),
  };
};

/**
 * serializeAws_restJson1ConnectorOAuthRequest
 */
const se_ConnectorOAuthRequest = (input: ConnectorOAuthRequest, context: __SerdeContext): any => {
  return {
    ...(input.authCode != null && { authCode: input.authCode }),
    ...(input.redirectUri != null && { redirectUri: input.redirectUri }),
  };
};

/**
 * serializeAws_restJson1ConnectorOperator
 */
const se_ConnectorOperator = (input: ConnectorOperator, context: __SerdeContext): any => {
  return {
    ...(input.Amplitude != null && { Amplitude: input.Amplitude }),
    ...(input.CustomConnector != null && { CustomConnector: input.CustomConnector }),
    ...(input.Datadog != null && { Datadog: input.Datadog }),
    ...(input.Dynatrace != null && { Dynatrace: input.Dynatrace }),
    ...(input.GoogleAnalytics != null && { GoogleAnalytics: input.GoogleAnalytics }),
    ...(input.InforNexus != null && { InforNexus: input.InforNexus }),
    ...(input.Marketo != null && { Marketo: input.Marketo }),
    ...(input.Pardot != null && { Pardot: input.Pardot }),
    ...(input.S3 != null && { S3: input.S3 }),
    ...(input.SAPOData != null && { SAPOData: input.SAPOData }),
    ...(input.Salesforce != null && { Salesforce: input.Salesforce }),
    ...(input.ServiceNow != null && { ServiceNow: input.ServiceNow }),
    ...(input.Singular != null && { Singular: input.Singular }),
    ...(input.Slack != null && { Slack: input.Slack }),
    ...(input.Trendmicro != null && { Trendmicro: input.Trendmicro }),
    ...(input.Veeva != null && { Veeva: input.Veeva }),
    ...(input.Zendesk != null && { Zendesk: input.Zendesk }),
  };
};

/**
 * serializeAws_restJson1ConnectorProfileConfig
 */
const se_ConnectorProfileConfig = (input: ConnectorProfileConfig, context: __SerdeContext): any => {
  return {
    ...(input.connectorProfileCredentials != null && {
      connectorProfileCredentials: se_ConnectorProfileCredentials(input.connectorProfileCredentials, context),
    }),
    ...(input.connectorProfileProperties != null && {
      connectorProfileProperties: se_ConnectorProfileProperties(input.connectorProfileProperties, context),
    }),
  };
};

/**
 * serializeAws_restJson1ConnectorProfileCredentials
 */
const se_ConnectorProfileCredentials = (input: ConnectorProfileCredentials, context: __SerdeContext): any => {
  return {
    ...(input.Amplitude != null && { Amplitude: se_AmplitudeConnectorProfileCredentials(input.Amplitude, context) }),
    ...(input.CustomConnector != null && {
      CustomConnector: se_CustomConnectorProfileCredentials(input.CustomConnector, context),
    }),
    ...(input.Datadog != null && { Datadog: se_DatadogConnectorProfileCredentials(input.Datadog, context) }),
    ...(input.Dynatrace != null && { Dynatrace: se_DynatraceConnectorProfileCredentials(input.Dynatrace, context) }),
    ...(input.GoogleAnalytics != null && {
      GoogleAnalytics: se_GoogleAnalyticsConnectorProfileCredentials(input.GoogleAnalytics, context),
    }),
    ...(input.Honeycode != null && { Honeycode: se_HoneycodeConnectorProfileCredentials(input.Honeycode, context) }),
    ...(input.InforNexus != null && {
      InforNexus: se_InforNexusConnectorProfileCredentials(input.InforNexus, context),
    }),
    ...(input.Marketo != null && { Marketo: se_MarketoConnectorProfileCredentials(input.Marketo, context) }),
    ...(input.Pardot != null && { Pardot: se_PardotConnectorProfileCredentials(input.Pardot, context) }),
    ...(input.Redshift != null && { Redshift: se_RedshiftConnectorProfileCredentials(input.Redshift, context) }),
    ...(input.SAPOData != null && { SAPOData: se_SAPODataConnectorProfileCredentials(input.SAPOData, context) }),
    ...(input.Salesforce != null && {
      Salesforce: se_SalesforceConnectorProfileCredentials(input.Salesforce, context),
    }),
    ...(input.ServiceNow != null && {
      ServiceNow: se_ServiceNowConnectorProfileCredentials(input.ServiceNow, context),
    }),
    ...(input.Singular != null && { Singular: se_SingularConnectorProfileCredentials(input.Singular, context) }),
    ...(input.Slack != null && { Slack: se_SlackConnectorProfileCredentials(input.Slack, context) }),
    ...(input.Snowflake != null && { Snowflake: se_SnowflakeConnectorProfileCredentials(input.Snowflake, context) }),
    ...(input.Trendmicro != null && {
      Trendmicro: se_TrendmicroConnectorProfileCredentials(input.Trendmicro, context),
    }),
    ...(input.Veeva != null && { Veeva: se_VeevaConnectorProfileCredentials(input.Veeva, context) }),
    ...(input.Zendesk != null && { Zendesk: se_ZendeskConnectorProfileCredentials(input.Zendesk, context) }),
  };
};

/**
 * serializeAws_restJson1ConnectorProfileNameList
 */
const se_ConnectorProfileNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1ConnectorProfileProperties
 */
const se_ConnectorProfileProperties = (input: ConnectorProfileProperties, context: __SerdeContext): any => {
  return {
    ...(input.Amplitude != null && { Amplitude: se_AmplitudeConnectorProfileProperties(input.Amplitude, context) }),
    ...(input.CustomConnector != null && {
      CustomConnector: se_CustomConnectorProfileProperties(input.CustomConnector, context),
    }),
    ...(input.Datadog != null && { Datadog: se_DatadogConnectorProfileProperties(input.Datadog, context) }),
    ...(input.Dynatrace != null && { Dynatrace: se_DynatraceConnectorProfileProperties(input.Dynatrace, context) }),
    ...(input.GoogleAnalytics != null && {
      GoogleAnalytics: se_GoogleAnalyticsConnectorProfileProperties(input.GoogleAnalytics, context),
    }),
    ...(input.Honeycode != null && { Honeycode: se_HoneycodeConnectorProfileProperties(input.Honeycode, context) }),
    ...(input.InforNexus != null && { InforNexus: se_InforNexusConnectorProfileProperties(input.InforNexus, context) }),
    ...(input.Marketo != null && { Marketo: se_MarketoConnectorProfileProperties(input.Marketo, context) }),
    ...(input.Pardot != null && { Pardot: se_PardotConnectorProfileProperties(input.Pardot, context) }),
    ...(input.Redshift != null && { Redshift: se_RedshiftConnectorProfileProperties(input.Redshift, context) }),
    ...(input.SAPOData != null && { SAPOData: se_SAPODataConnectorProfileProperties(input.SAPOData, context) }),
    ...(input.Salesforce != null && { Salesforce: se_SalesforceConnectorProfileProperties(input.Salesforce, context) }),
    ...(input.ServiceNow != null && { ServiceNow: se_ServiceNowConnectorProfileProperties(input.ServiceNow, context) }),
    ...(input.Singular != null && { Singular: se_SingularConnectorProfileProperties(input.Singular, context) }),
    ...(input.Slack != null && { Slack: se_SlackConnectorProfileProperties(input.Slack, context) }),
    ...(input.Snowflake != null && { Snowflake: se_SnowflakeConnectorProfileProperties(input.Snowflake, context) }),
    ...(input.Trendmicro != null && { Trendmicro: se_TrendmicroConnectorProfileProperties(input.Trendmicro, context) }),
    ...(input.Veeva != null && { Veeva: se_VeevaConnectorProfileProperties(input.Veeva, context) }),
    ...(input.Zendesk != null && { Zendesk: se_ZendeskConnectorProfileProperties(input.Zendesk, context) }),
  };
};

/**
 * serializeAws_restJson1ConnectorProvisioningConfig
 */
const se_ConnectorProvisioningConfig = (input: ConnectorProvisioningConfig, context: __SerdeContext): any => {
  return {
    ...(input.lambda != null && { lambda: se_LambdaConnectorProvisioningConfig(input.lambda, context) }),
  };
};

/**
 * serializeAws_restJson1ConnectorTypeList
 */
const se_ConnectorTypeList = (input: (ConnectorType | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1CredentialsMap
 */
const se_CredentialsMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1CustomAuthCredentials
 */
const se_CustomAuthCredentials = (input: CustomAuthCredentials, context: __SerdeContext): any => {
  return {
    ...(input.credentialsMap != null && { credentialsMap: se_CredentialsMap(input.credentialsMap, context) }),
    ...(input.customAuthenticationType != null && { customAuthenticationType: input.customAuthenticationType }),
  };
};

/**
 * serializeAws_restJson1CustomConnectorDestinationProperties
 */
const se_CustomConnectorDestinationProperties = (
  input: CustomConnectorDestinationProperties,
  context: __SerdeContext
): any => {
  return {
    ...(input.customProperties != null && { customProperties: se_CustomProperties(input.customProperties, context) }),
    ...(input.entityName != null && { entityName: input.entityName }),
    ...(input.errorHandlingConfig != null && {
      errorHandlingConfig: se_ErrorHandlingConfig(input.errorHandlingConfig, context),
    }),
    ...(input.idFieldNames != null && { idFieldNames: se_IdFieldNameList(input.idFieldNames, context) }),
    ...(input.writeOperationType != null && { writeOperationType: input.writeOperationType }),
  };
};

/**
 * serializeAws_restJson1CustomConnectorProfileCredentials
 */
const se_CustomConnectorProfileCredentials = (
  input: CustomConnectorProfileCredentials,
  context: __SerdeContext
): any => {
  return {
    ...(input.apiKey != null && { apiKey: se_ApiKeyCredentials(input.apiKey, context) }),
    ...(input.authenticationType != null && { authenticationType: input.authenticationType }),
    ...(input.basic != null && { basic: se_BasicAuthCredentials(input.basic, context) }),
    ...(input.custom != null && { custom: se_CustomAuthCredentials(input.custom, context) }),
    ...(input.oauth2 != null && { oauth2: se_OAuth2Credentials(input.oauth2, context) }),
  };
};

/**
 * serializeAws_restJson1CustomConnectorProfileProperties
 */
const se_CustomConnectorProfileProperties = (input: CustomConnectorProfileProperties, context: __SerdeContext): any => {
  return {
    ...(input.oAuth2Properties != null && { oAuth2Properties: se_OAuth2Properties(input.oAuth2Properties, context) }),
    ...(input.profileProperties != null && {
      profileProperties: se_ProfilePropertiesMap(input.profileProperties, context),
    }),
  };
};

/**
 * serializeAws_restJson1CustomConnectorSourceProperties
 */
const se_CustomConnectorSourceProperties = (input: CustomConnectorSourceProperties, context: __SerdeContext): any => {
  return {
    ...(input.customProperties != null && { customProperties: se_CustomProperties(input.customProperties, context) }),
    ...(input.entityName != null && { entityName: input.entityName }),
  };
};

/**
 * serializeAws_restJson1CustomerProfilesDestinationProperties
 */
const se_CustomerProfilesDestinationProperties = (
  input: CustomerProfilesDestinationProperties,
  context: __SerdeContext
): any => {
  return {
    ...(input.domainName != null && { domainName: input.domainName }),
    ...(input.objectTypeName != null && { objectTypeName: input.objectTypeName }),
  };
};

/**
 * serializeAws_restJson1CustomProperties
 */
const se_CustomProperties = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1DatadogConnectorProfileCredentials
 */
const se_DatadogConnectorProfileCredentials = (
  input: DatadogConnectorProfileCredentials,
  context: __SerdeContext
): any => {
  return {
    ...(input.apiKey != null && { apiKey: input.apiKey }),
    ...(input.applicationKey != null && { applicationKey: input.applicationKey }),
  };
};

/**
 * serializeAws_restJson1DatadogConnectorProfileProperties
 */
const se_DatadogConnectorProfileProperties = (
  input: DatadogConnectorProfileProperties,
  context: __SerdeContext
): any => {
  return {
    ...(input.instanceUrl != null && { instanceUrl: input.instanceUrl }),
  };
};

/**
 * serializeAws_restJson1DatadogSourceProperties
 */
const se_DatadogSourceProperties = (input: DatadogSourceProperties, context: __SerdeContext): any => {
  return {
    ...(input.object != null && { object: input.object }),
  };
};

/**
 * serializeAws_restJson1DestinationConnectorProperties
 */
const se_DestinationConnectorProperties = (input: DestinationConnectorProperties, context: __SerdeContext): any => {
  return {
    ...(input.CustomConnector != null && {
      CustomConnector: se_CustomConnectorDestinationProperties(input.CustomConnector, context),
    }),
    ...(input.CustomerProfiles != null && {
      CustomerProfiles: se_CustomerProfilesDestinationProperties(input.CustomerProfiles, context),
    }),
    ...(input.EventBridge != null && { EventBridge: se_EventBridgeDestinationProperties(input.EventBridge, context) }),
    ...(input.Honeycode != null && { Honeycode: se_HoneycodeDestinationProperties(input.Honeycode, context) }),
    ...(input.LookoutMetrics != null && {
      LookoutMetrics: se_LookoutMetricsDestinationProperties(input.LookoutMetrics, context),
    }),
    ...(input.Marketo != null && { Marketo: se_MarketoDestinationProperties(input.Marketo, context) }),
    ...(input.Redshift != null && { Redshift: se_RedshiftDestinationProperties(input.Redshift, context) }),
    ...(input.S3 != null && { S3: se_S3DestinationProperties(input.S3, context) }),
    ...(input.SAPOData != null && { SAPOData: se_SAPODataDestinationProperties(input.SAPOData, context) }),
    ...(input.Salesforce != null && { Salesforce: se_SalesforceDestinationProperties(input.Salesforce, context) }),
    ...(input.Snowflake != null && { Snowflake: se_SnowflakeDestinationProperties(input.Snowflake, context) }),
    ...(input.Upsolver != null && { Upsolver: se_UpsolverDestinationProperties(input.Upsolver, context) }),
    ...(input.Zendesk != null && { Zendesk: se_ZendeskDestinationProperties(input.Zendesk, context) }),
  };
};

/**
 * serializeAws_restJson1DestinationFlowConfig
 */
const se_DestinationFlowConfig = (input: DestinationFlowConfig, context: __SerdeContext): any => {
  return {
    ...(input.apiVersion != null && { apiVersion: input.apiVersion }),
    ...(input.connectorProfileName != null && { connectorProfileName: input.connectorProfileName }),
    ...(input.connectorType != null && { connectorType: input.connectorType }),
    ...(input.destinationConnectorProperties != null && {
      destinationConnectorProperties: se_DestinationConnectorProperties(input.destinationConnectorProperties, context),
    }),
  };
};

/**
 * serializeAws_restJson1DestinationFlowConfigList
 */
const se_DestinationFlowConfigList = (input: DestinationFlowConfig[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_DestinationFlowConfig(entry, context);
    });
};

/**
 * serializeAws_restJson1DynatraceConnectorProfileCredentials
 */
const se_DynatraceConnectorProfileCredentials = (
  input: DynatraceConnectorProfileCredentials,
  context: __SerdeContext
): any => {
  return {
    ...(input.apiToken != null && { apiToken: input.apiToken }),
  };
};

/**
 * serializeAws_restJson1DynatraceConnectorProfileProperties
 */
const se_DynatraceConnectorProfileProperties = (
  input: DynatraceConnectorProfileProperties,
  context: __SerdeContext
): any => {
  return {
    ...(input.instanceUrl != null && { instanceUrl: input.instanceUrl }),
  };
};

/**
 * serializeAws_restJson1DynatraceSourceProperties
 */
const se_DynatraceSourceProperties = (input: DynatraceSourceProperties, context: __SerdeContext): any => {
  return {
    ...(input.object != null && { object: input.object }),
  };
};

/**
 * serializeAws_restJson1ErrorHandlingConfig
 */
const se_ErrorHandlingConfig = (input: ErrorHandlingConfig, context: __SerdeContext): any => {
  return {
    ...(input.bucketName != null && { bucketName: input.bucketName }),
    ...(input.bucketPrefix != null && { bucketPrefix: input.bucketPrefix }),
    ...(input.failOnFirstDestinationError != null && {
      failOnFirstDestinationError: input.failOnFirstDestinationError,
    }),
  };
};

/**
 * serializeAws_restJson1EventBridgeDestinationProperties
 */
const se_EventBridgeDestinationProperties = (input: EventBridgeDestinationProperties, context: __SerdeContext): any => {
  return {
    ...(input.errorHandlingConfig != null && {
      errorHandlingConfig: se_ErrorHandlingConfig(input.errorHandlingConfig, context),
    }),
    ...(input.object != null && { object: input.object }),
  };
};

/**
 * serializeAws_restJson1GlueDataCatalogConfig
 */
const se_GlueDataCatalogConfig = (input: GlueDataCatalogConfig, context: __SerdeContext): any => {
  return {
    ...(input.databaseName != null && { databaseName: input.databaseName }),
    ...(input.roleArn != null && { roleArn: input.roleArn }),
    ...(input.tablePrefix != null && { tablePrefix: input.tablePrefix }),
  };
};

/**
 * serializeAws_restJson1GoogleAnalyticsConnectorProfileCredentials
 */
const se_GoogleAnalyticsConnectorProfileCredentials = (
  input: GoogleAnalyticsConnectorProfileCredentials,
  context: __SerdeContext
): any => {
  return {
    ...(input.accessToken != null && { accessToken: input.accessToken }),
    ...(input.clientId != null && { clientId: input.clientId }),
    ...(input.clientSecret != null && { clientSecret: input.clientSecret }),
    ...(input.oAuthRequest != null && { oAuthRequest: se_ConnectorOAuthRequest(input.oAuthRequest, context) }),
    ...(input.refreshToken != null && { refreshToken: input.refreshToken }),
  };
};

/**
 * serializeAws_restJson1GoogleAnalyticsConnectorProfileProperties
 */
const se_GoogleAnalyticsConnectorProfileProperties = (
  input: GoogleAnalyticsConnectorProfileProperties,
  context: __SerdeContext
): any => {
  return {};
};

/**
 * serializeAws_restJson1GoogleAnalyticsSourceProperties
 */
const se_GoogleAnalyticsSourceProperties = (input: GoogleAnalyticsSourceProperties, context: __SerdeContext): any => {
  return {
    ...(input.object != null && { object: input.object }),
  };
};

/**
 * serializeAws_restJson1HoneycodeConnectorProfileCredentials
 */
const se_HoneycodeConnectorProfileCredentials = (
  input: HoneycodeConnectorProfileCredentials,
  context: __SerdeContext
): any => {
  return {
    ...(input.accessToken != null && { accessToken: input.accessToken }),
    ...(input.oAuthRequest != null && { oAuthRequest: se_ConnectorOAuthRequest(input.oAuthRequest, context) }),
    ...(input.refreshToken != null && { refreshToken: input.refreshToken }),
  };
};

/**
 * serializeAws_restJson1HoneycodeConnectorProfileProperties
 */
const se_HoneycodeConnectorProfileProperties = (
  input: HoneycodeConnectorProfileProperties,
  context: __SerdeContext
): any => {
  return {};
};

/**
 * serializeAws_restJson1HoneycodeDestinationProperties
 */
const se_HoneycodeDestinationProperties = (input: HoneycodeDestinationProperties, context: __SerdeContext): any => {
  return {
    ...(input.errorHandlingConfig != null && {
      errorHandlingConfig: se_ErrorHandlingConfig(input.errorHandlingConfig, context),
    }),
    ...(input.object != null && { object: input.object }),
  };
};

/**
 * serializeAws_restJson1IdFieldNameList
 */
const se_IdFieldNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1IncrementalPullConfig
 */
const se_IncrementalPullConfig = (input: IncrementalPullConfig, context: __SerdeContext): any => {
  return {
    ...(input.datetimeTypeFieldName != null && { datetimeTypeFieldName: input.datetimeTypeFieldName }),
  };
};

/**
 * serializeAws_restJson1InforNexusConnectorProfileCredentials
 */
const se_InforNexusConnectorProfileCredentials = (
  input: InforNexusConnectorProfileCredentials,
  context: __SerdeContext
): any => {
  return {
    ...(input.accessKeyId != null && { accessKeyId: input.accessKeyId }),
    ...(input.datakey != null && { datakey: input.datakey }),
    ...(input.secretAccessKey != null && { secretAccessKey: input.secretAccessKey }),
    ...(input.userId != null && { userId: input.userId }),
  };
};

/**
 * serializeAws_restJson1InforNexusConnectorProfileProperties
 */
const se_InforNexusConnectorProfileProperties = (
  input: InforNexusConnectorProfileProperties,
  context: __SerdeContext
): any => {
  return {
    ...(input.instanceUrl != null && { instanceUrl: input.instanceUrl }),
  };
};

/**
 * serializeAws_restJson1InforNexusSourceProperties
 */
const se_InforNexusSourceProperties = (input: InforNexusSourceProperties, context: __SerdeContext): any => {
  return {
    ...(input.object != null && { object: input.object }),
  };
};

/**
 * serializeAws_restJson1LambdaConnectorProvisioningConfig
 */
const se_LambdaConnectorProvisioningConfig = (
  input: LambdaConnectorProvisioningConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.lambdaArn != null && { lambdaArn: input.lambdaArn }),
  };
};

/**
 * serializeAws_restJson1LookoutMetricsDestinationProperties
 */
const se_LookoutMetricsDestinationProperties = (
  input: LookoutMetricsDestinationProperties,
  context: __SerdeContext
): any => {
  return {};
};

/**
 * serializeAws_restJson1MarketoConnectorProfileCredentials
 */
const se_MarketoConnectorProfileCredentials = (
  input: MarketoConnectorProfileCredentials,
  context: __SerdeContext
): any => {
  return {
    ...(input.accessToken != null && { accessToken: input.accessToken }),
    ...(input.clientId != null && { clientId: input.clientId }),
    ...(input.clientSecret != null && { clientSecret: input.clientSecret }),
    ...(input.oAuthRequest != null && { oAuthRequest: se_ConnectorOAuthRequest(input.oAuthRequest, context) }),
  };
};

/**
 * serializeAws_restJson1MarketoConnectorProfileProperties
 */
const se_MarketoConnectorProfileProperties = (
  input: MarketoConnectorProfileProperties,
  context: __SerdeContext
): any => {
  return {
    ...(input.instanceUrl != null && { instanceUrl: input.instanceUrl }),
  };
};

/**
 * serializeAws_restJson1MarketoDestinationProperties
 */
const se_MarketoDestinationProperties = (input: MarketoDestinationProperties, context: __SerdeContext): any => {
  return {
    ...(input.errorHandlingConfig != null && {
      errorHandlingConfig: se_ErrorHandlingConfig(input.errorHandlingConfig, context),
    }),
    ...(input.object != null && { object: input.object }),
  };
};

/**
 * serializeAws_restJson1MarketoSourceProperties
 */
const se_MarketoSourceProperties = (input: MarketoSourceProperties, context: __SerdeContext): any => {
  return {
    ...(input.object != null && { object: input.object }),
  };
};

/**
 * serializeAws_restJson1MetadataCatalogConfig
 */
const se_MetadataCatalogConfig = (input: MetadataCatalogConfig, context: __SerdeContext): any => {
  return {
    ...(input.glueDataCatalog != null && { glueDataCatalog: se_GlueDataCatalogConfig(input.glueDataCatalog, context) }),
  };
};

/**
 * serializeAws_restJson1OAuth2Credentials
 */
const se_OAuth2Credentials = (input: OAuth2Credentials, context: __SerdeContext): any => {
  return {
    ...(input.accessToken != null && { accessToken: input.accessToken }),
    ...(input.clientId != null && { clientId: input.clientId }),
    ...(input.clientSecret != null && { clientSecret: input.clientSecret }),
    ...(input.oAuthRequest != null && { oAuthRequest: se_ConnectorOAuthRequest(input.oAuthRequest, context) }),
    ...(input.refreshToken != null && { refreshToken: input.refreshToken }),
  };
};

/**
 * serializeAws_restJson1OAuth2Properties
 */
const se_OAuth2Properties = (input: OAuth2Properties, context: __SerdeContext): any => {
  return {
    ...(input.oAuth2GrantType != null && { oAuth2GrantType: input.oAuth2GrantType }),
    ...(input.tokenUrl != null && { tokenUrl: input.tokenUrl }),
    ...(input.tokenUrlCustomProperties != null && {
      tokenUrlCustomProperties: se_TokenUrlCustomProperties(input.tokenUrlCustomProperties, context),
    }),
  };
};

/**
 * serializeAws_restJson1OAuthCredentials
 */
const se_OAuthCredentials = (input: OAuthCredentials, context: __SerdeContext): any => {
  return {
    ...(input.accessToken != null && { accessToken: input.accessToken }),
    ...(input.clientId != null && { clientId: input.clientId }),
    ...(input.clientSecret != null && { clientSecret: input.clientSecret }),
    ...(input.oAuthRequest != null && { oAuthRequest: se_ConnectorOAuthRequest(input.oAuthRequest, context) }),
    ...(input.refreshToken != null && { refreshToken: input.refreshToken }),
  };
};

/**
 * serializeAws_restJson1OAuthProperties
 */
const se_OAuthProperties = (input: OAuthProperties, context: __SerdeContext): any => {
  return {
    ...(input.authCodeUrl != null && { authCodeUrl: input.authCodeUrl }),
    ...(input.oAuthScopes != null && { oAuthScopes: se_OAuthScopeList(input.oAuthScopes, context) }),
    ...(input.tokenUrl != null && { tokenUrl: input.tokenUrl }),
  };
};

/**
 * serializeAws_restJson1OAuthScopeList
 */
const se_OAuthScopeList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1PardotConnectorProfileCredentials
 */
const se_PardotConnectorProfileCredentials = (
  input: PardotConnectorProfileCredentials,
  context: __SerdeContext
): any => {
  return {
    ...(input.accessToken != null && { accessToken: input.accessToken }),
    ...(input.clientCredentialsArn != null && { clientCredentialsArn: input.clientCredentialsArn }),
    ...(input.oAuthRequest != null && { oAuthRequest: se_ConnectorOAuthRequest(input.oAuthRequest, context) }),
    ...(input.refreshToken != null && { refreshToken: input.refreshToken }),
  };
};

/**
 * serializeAws_restJson1PardotConnectorProfileProperties
 */
const se_PardotConnectorProfileProperties = (input: PardotConnectorProfileProperties, context: __SerdeContext): any => {
  return {
    ...(input.businessUnitId != null && { businessUnitId: input.businessUnitId }),
    ...(input.instanceUrl != null && { instanceUrl: input.instanceUrl }),
    ...(input.isSandboxEnvironment != null && { isSandboxEnvironment: input.isSandboxEnvironment }),
  };
};

/**
 * serializeAws_restJson1PardotSourceProperties
 */
const se_PardotSourceProperties = (input: PardotSourceProperties, context: __SerdeContext): any => {
  return {
    ...(input.object != null && { object: input.object }),
  };
};

/**
 * serializeAws_restJson1PathPrefixHierarchy
 */
const se_PathPrefixHierarchy = (input: (PathPrefix | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1PrefixConfig
 */
const se_PrefixConfig = (input: PrefixConfig, context: __SerdeContext): any => {
  return {
    ...(input.pathPrefixHierarchy != null && {
      pathPrefixHierarchy: se_PathPrefixHierarchy(input.pathPrefixHierarchy, context),
    }),
    ...(input.prefixFormat != null && { prefixFormat: input.prefixFormat }),
    ...(input.prefixType != null && { prefixType: input.prefixType }),
  };
};

/**
 * serializeAws_restJson1ProfilePropertiesMap
 */
const se_ProfilePropertiesMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1RedshiftConnectorProfileCredentials
 */
const se_RedshiftConnectorProfileCredentials = (
  input: RedshiftConnectorProfileCredentials,
  context: __SerdeContext
): any => {
  return {
    ...(input.password != null && { password: input.password }),
    ...(input.username != null && { username: input.username }),
  };
};

/**
 * serializeAws_restJson1RedshiftConnectorProfileProperties
 */
const se_RedshiftConnectorProfileProperties = (
  input: RedshiftConnectorProfileProperties,
  context: __SerdeContext
): any => {
  return {
    ...(input.bucketName != null && { bucketName: input.bucketName }),
    ...(input.bucketPrefix != null && { bucketPrefix: input.bucketPrefix }),
    ...(input.clusterIdentifier != null && { clusterIdentifier: input.clusterIdentifier }),
    ...(input.dataApiRoleArn != null && { dataApiRoleArn: input.dataApiRoleArn }),
    ...(input.databaseName != null && { databaseName: input.databaseName }),
    ...(input.databaseUrl != null && { databaseUrl: input.databaseUrl }),
    ...(input.isRedshiftServerless != null && { isRedshiftServerless: input.isRedshiftServerless }),
    ...(input.roleArn != null && { roleArn: input.roleArn }),
    ...(input.workgroupName != null && { workgroupName: input.workgroupName }),
  };
};

/**
 * serializeAws_restJson1RedshiftDestinationProperties
 */
const se_RedshiftDestinationProperties = (input: RedshiftDestinationProperties, context: __SerdeContext): any => {
  return {
    ...(input.bucketPrefix != null && { bucketPrefix: input.bucketPrefix }),
    ...(input.errorHandlingConfig != null && {
      errorHandlingConfig: se_ErrorHandlingConfig(input.errorHandlingConfig, context),
    }),
    ...(input.intermediateBucketName != null && { intermediateBucketName: input.intermediateBucketName }),
    ...(input.object != null && { object: input.object }),
  };
};

/**
 * serializeAws_restJson1S3DestinationProperties
 */
const se_S3DestinationProperties = (input: S3DestinationProperties, context: __SerdeContext): any => {
  return {
    ...(input.bucketName != null && { bucketName: input.bucketName }),
    ...(input.bucketPrefix != null && { bucketPrefix: input.bucketPrefix }),
    ...(input.s3OutputFormatConfig != null && {
      s3OutputFormatConfig: se_S3OutputFormatConfig(input.s3OutputFormatConfig, context),
    }),
  };
};

/**
 * serializeAws_restJson1S3InputFormatConfig
 */
const se_S3InputFormatConfig = (input: S3InputFormatConfig, context: __SerdeContext): any => {
  return {
    ...(input.s3InputFileType != null && { s3InputFileType: input.s3InputFileType }),
  };
};

/**
 * serializeAws_restJson1S3OutputFormatConfig
 */
const se_S3OutputFormatConfig = (input: S3OutputFormatConfig, context: __SerdeContext): any => {
  return {
    ...(input.aggregationConfig != null && {
      aggregationConfig: se_AggregationConfig(input.aggregationConfig, context),
    }),
    ...(input.fileType != null && { fileType: input.fileType }),
    ...(input.prefixConfig != null && { prefixConfig: se_PrefixConfig(input.prefixConfig, context) }),
    ...(input.preserveSourceDataTyping != null && { preserveSourceDataTyping: input.preserveSourceDataTyping }),
  };
};

/**
 * serializeAws_restJson1S3SourceProperties
 */
const se_S3SourceProperties = (input: S3SourceProperties, context: __SerdeContext): any => {
  return {
    ...(input.bucketName != null && { bucketName: input.bucketName }),
    ...(input.bucketPrefix != null && { bucketPrefix: input.bucketPrefix }),
    ...(input.s3InputFormatConfig != null && {
      s3InputFormatConfig: se_S3InputFormatConfig(input.s3InputFormatConfig, context),
    }),
  };
};

/**
 * serializeAws_restJson1SalesforceConnectorProfileCredentials
 */
const se_SalesforceConnectorProfileCredentials = (
  input: SalesforceConnectorProfileCredentials,
  context: __SerdeContext
): any => {
  return {
    ...(input.accessToken != null && { accessToken: input.accessToken }),
    ...(input.clientCredentialsArn != null && { clientCredentialsArn: input.clientCredentialsArn }),
    ...(input.oAuthRequest != null && { oAuthRequest: se_ConnectorOAuthRequest(input.oAuthRequest, context) }),
    ...(input.refreshToken != null && { refreshToken: input.refreshToken }),
  };
};

/**
 * serializeAws_restJson1SalesforceConnectorProfileProperties
 */
const se_SalesforceConnectorProfileProperties = (
  input: SalesforceConnectorProfileProperties,
  context: __SerdeContext
): any => {
  return {
    ...(input.instanceUrl != null && { instanceUrl: input.instanceUrl }),
    ...(input.isSandboxEnvironment != null && { isSandboxEnvironment: input.isSandboxEnvironment }),
    ...(input.usePrivateLinkForMetadataAndAuthorization != null && {
      usePrivateLinkForMetadataAndAuthorization: input.usePrivateLinkForMetadataAndAuthorization,
    }),
  };
};

/**
 * serializeAws_restJson1SalesforceDestinationProperties
 */
const se_SalesforceDestinationProperties = (input: SalesforceDestinationProperties, context: __SerdeContext): any => {
  return {
    ...(input.dataTransferApi != null && { dataTransferApi: input.dataTransferApi }),
    ...(input.errorHandlingConfig != null && {
      errorHandlingConfig: se_ErrorHandlingConfig(input.errorHandlingConfig, context),
    }),
    ...(input.idFieldNames != null && { idFieldNames: se_IdFieldNameList(input.idFieldNames, context) }),
    ...(input.object != null && { object: input.object }),
    ...(input.writeOperationType != null && { writeOperationType: input.writeOperationType }),
  };
};

/**
 * serializeAws_restJson1SalesforceSourceProperties
 */
const se_SalesforceSourceProperties = (input: SalesforceSourceProperties, context: __SerdeContext): any => {
  return {
    ...(input.dataTransferApi != null && { dataTransferApi: input.dataTransferApi }),
    ...(input.enableDynamicFieldUpdate != null && { enableDynamicFieldUpdate: input.enableDynamicFieldUpdate }),
    ...(input.includeDeletedRecords != null && { includeDeletedRecords: input.includeDeletedRecords }),
    ...(input.object != null && { object: input.object }),
  };
};

/**
 * serializeAws_restJson1SAPODataConnectorProfileCredentials
 */
const se_SAPODataConnectorProfileCredentials = (
  input: SAPODataConnectorProfileCredentials,
  context: __SerdeContext
): any => {
  return {
    ...(input.basicAuthCredentials != null && {
      basicAuthCredentials: se_BasicAuthCredentials(input.basicAuthCredentials, context),
    }),
    ...(input.oAuthCredentials != null && { oAuthCredentials: se_OAuthCredentials(input.oAuthCredentials, context) }),
  };
};

/**
 * serializeAws_restJson1SAPODataConnectorProfileProperties
 */
const se_SAPODataConnectorProfileProperties = (
  input: SAPODataConnectorProfileProperties,
  context: __SerdeContext
): any => {
  return {
    ...(input.applicationHostUrl != null && { applicationHostUrl: input.applicationHostUrl }),
    ...(input.applicationServicePath != null && { applicationServicePath: input.applicationServicePath }),
    ...(input.clientNumber != null && { clientNumber: input.clientNumber }),
    ...(input.logonLanguage != null && { logonLanguage: input.logonLanguage }),
    ...(input.oAuthProperties != null && { oAuthProperties: se_OAuthProperties(input.oAuthProperties, context) }),
    ...(input.portNumber != null && { portNumber: input.portNumber }),
    ...(input.privateLinkServiceName != null && { privateLinkServiceName: input.privateLinkServiceName }),
  };
};

/**
 * serializeAws_restJson1SAPODataDestinationProperties
 */
const se_SAPODataDestinationProperties = (input: SAPODataDestinationProperties, context: __SerdeContext): any => {
  return {
    ...(input.errorHandlingConfig != null && {
      errorHandlingConfig: se_ErrorHandlingConfig(input.errorHandlingConfig, context),
    }),
    ...(input.idFieldNames != null && { idFieldNames: se_IdFieldNameList(input.idFieldNames, context) }),
    ...(input.objectPath != null && { objectPath: input.objectPath }),
    ...(input.successResponseHandlingConfig != null && {
      successResponseHandlingConfig: se_SuccessResponseHandlingConfig(input.successResponseHandlingConfig, context),
    }),
    ...(input.writeOperationType != null && { writeOperationType: input.writeOperationType }),
  };
};

/**
 * serializeAws_restJson1SAPODataSourceProperties
 */
const se_SAPODataSourceProperties = (input: SAPODataSourceProperties, context: __SerdeContext): any => {
  return {
    ...(input.objectPath != null && { objectPath: input.objectPath }),
  };
};

/**
 * serializeAws_restJson1ScheduledTriggerProperties
 */
const se_ScheduledTriggerProperties = (input: ScheduledTriggerProperties, context: __SerdeContext): any => {
  return {
    ...(input.dataPullMode != null && { dataPullMode: input.dataPullMode }),
    ...(input.firstExecutionFrom != null && {
      firstExecutionFrom: Math.round(input.firstExecutionFrom.getTime() / 1000),
    }),
    ...(input.flowErrorDeactivationThreshold != null && {
      flowErrorDeactivationThreshold: input.flowErrorDeactivationThreshold,
    }),
    ...(input.scheduleEndTime != null && { scheduleEndTime: Math.round(input.scheduleEndTime.getTime() / 1000) }),
    ...(input.scheduleExpression != null && { scheduleExpression: input.scheduleExpression }),
    ...(input.scheduleOffset != null && { scheduleOffset: input.scheduleOffset }),
    ...(input.scheduleStartTime != null && { scheduleStartTime: Math.round(input.scheduleStartTime.getTime() / 1000) }),
    ...(input.timezone != null && { timezone: input.timezone }),
  };
};

/**
 * serializeAws_restJson1ServiceNowConnectorProfileCredentials
 */
const se_ServiceNowConnectorProfileCredentials = (
  input: ServiceNowConnectorProfileCredentials,
  context: __SerdeContext
): any => {
  return {
    ...(input.password != null && { password: input.password }),
    ...(input.username != null && { username: input.username }),
  };
};

/**
 * serializeAws_restJson1ServiceNowConnectorProfileProperties
 */
const se_ServiceNowConnectorProfileProperties = (
  input: ServiceNowConnectorProfileProperties,
  context: __SerdeContext
): any => {
  return {
    ...(input.instanceUrl != null && { instanceUrl: input.instanceUrl }),
  };
};

/**
 * serializeAws_restJson1ServiceNowSourceProperties
 */
const se_ServiceNowSourceProperties = (input: ServiceNowSourceProperties, context: __SerdeContext): any => {
  return {
    ...(input.object != null && { object: input.object }),
  };
};

/**
 * serializeAws_restJson1SingularConnectorProfileCredentials
 */
const se_SingularConnectorProfileCredentials = (
  input: SingularConnectorProfileCredentials,
  context: __SerdeContext
): any => {
  return {
    ...(input.apiKey != null && { apiKey: input.apiKey }),
  };
};

/**
 * serializeAws_restJson1SingularConnectorProfileProperties
 */
const se_SingularConnectorProfileProperties = (
  input: SingularConnectorProfileProperties,
  context: __SerdeContext
): any => {
  return {};
};

/**
 * serializeAws_restJson1SingularSourceProperties
 */
const se_SingularSourceProperties = (input: SingularSourceProperties, context: __SerdeContext): any => {
  return {
    ...(input.object != null && { object: input.object }),
  };
};

/**
 * serializeAws_restJson1SlackConnectorProfileCredentials
 */
const se_SlackConnectorProfileCredentials = (input: SlackConnectorProfileCredentials, context: __SerdeContext): any => {
  return {
    ...(input.accessToken != null && { accessToken: input.accessToken }),
    ...(input.clientId != null && { clientId: input.clientId }),
    ...(input.clientSecret != null && { clientSecret: input.clientSecret }),
    ...(input.oAuthRequest != null && { oAuthRequest: se_ConnectorOAuthRequest(input.oAuthRequest, context) }),
  };
};

/**
 * serializeAws_restJson1SlackConnectorProfileProperties
 */
const se_SlackConnectorProfileProperties = (input: SlackConnectorProfileProperties, context: __SerdeContext): any => {
  return {
    ...(input.instanceUrl != null && { instanceUrl: input.instanceUrl }),
  };
};

/**
 * serializeAws_restJson1SlackSourceProperties
 */
const se_SlackSourceProperties = (input: SlackSourceProperties, context: __SerdeContext): any => {
  return {
    ...(input.object != null && { object: input.object }),
  };
};

/**
 * serializeAws_restJson1SnowflakeConnectorProfileCredentials
 */
const se_SnowflakeConnectorProfileCredentials = (
  input: SnowflakeConnectorProfileCredentials,
  context: __SerdeContext
): any => {
  return {
    ...(input.password != null && { password: input.password }),
    ...(input.username != null && { username: input.username }),
  };
};

/**
 * serializeAws_restJson1SnowflakeConnectorProfileProperties
 */
const se_SnowflakeConnectorProfileProperties = (
  input: SnowflakeConnectorProfileProperties,
  context: __SerdeContext
): any => {
  return {
    ...(input.accountName != null && { accountName: input.accountName }),
    ...(input.bucketName != null && { bucketName: input.bucketName }),
    ...(input.bucketPrefix != null && { bucketPrefix: input.bucketPrefix }),
    ...(input.privateLinkServiceName != null && { privateLinkServiceName: input.privateLinkServiceName }),
    ...(input.region != null && { region: input.region }),
    ...(input.stage != null && { stage: input.stage }),
    ...(input.warehouse != null && { warehouse: input.warehouse }),
  };
};

/**
 * serializeAws_restJson1SnowflakeDestinationProperties
 */
const se_SnowflakeDestinationProperties = (input: SnowflakeDestinationProperties, context: __SerdeContext): any => {
  return {
    ...(input.bucketPrefix != null && { bucketPrefix: input.bucketPrefix }),
    ...(input.errorHandlingConfig != null && {
      errorHandlingConfig: se_ErrorHandlingConfig(input.errorHandlingConfig, context),
    }),
    ...(input.intermediateBucketName != null && { intermediateBucketName: input.intermediateBucketName }),
    ...(input.object != null && { object: input.object }),
  };
};

/**
 * serializeAws_restJson1SourceConnectorProperties
 */
const se_SourceConnectorProperties = (input: SourceConnectorProperties, context: __SerdeContext): any => {
  return {
    ...(input.Amplitude != null && { Amplitude: se_AmplitudeSourceProperties(input.Amplitude, context) }),
    ...(input.CustomConnector != null && {
      CustomConnector: se_CustomConnectorSourceProperties(input.CustomConnector, context),
    }),
    ...(input.Datadog != null && { Datadog: se_DatadogSourceProperties(input.Datadog, context) }),
    ...(input.Dynatrace != null && { Dynatrace: se_DynatraceSourceProperties(input.Dynatrace, context) }),
    ...(input.GoogleAnalytics != null && {
      GoogleAnalytics: se_GoogleAnalyticsSourceProperties(input.GoogleAnalytics, context),
    }),
    ...(input.InforNexus != null && { InforNexus: se_InforNexusSourceProperties(input.InforNexus, context) }),
    ...(input.Marketo != null && { Marketo: se_MarketoSourceProperties(input.Marketo, context) }),
    ...(input.Pardot != null && { Pardot: se_PardotSourceProperties(input.Pardot, context) }),
    ...(input.S3 != null && { S3: se_S3SourceProperties(input.S3, context) }),
    ...(input.SAPOData != null && { SAPOData: se_SAPODataSourceProperties(input.SAPOData, context) }),
    ...(input.Salesforce != null && { Salesforce: se_SalesforceSourceProperties(input.Salesforce, context) }),
    ...(input.ServiceNow != null && { ServiceNow: se_ServiceNowSourceProperties(input.ServiceNow, context) }),
    ...(input.Singular != null && { Singular: se_SingularSourceProperties(input.Singular, context) }),
    ...(input.Slack != null && { Slack: se_SlackSourceProperties(input.Slack, context) }),
    ...(input.Trendmicro != null && { Trendmicro: se_TrendmicroSourceProperties(input.Trendmicro, context) }),
    ...(input.Veeva != null && { Veeva: se_VeevaSourceProperties(input.Veeva, context) }),
    ...(input.Zendesk != null && { Zendesk: se_ZendeskSourceProperties(input.Zendesk, context) }),
  };
};

/**
 * serializeAws_restJson1SourceFields
 */
const se_SourceFields = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1SourceFlowConfig
 */
const se_SourceFlowConfig = (input: SourceFlowConfig, context: __SerdeContext): any => {
  return {
    ...(input.apiVersion != null && { apiVersion: input.apiVersion }),
    ...(input.connectorProfileName != null && { connectorProfileName: input.connectorProfileName }),
    ...(input.connectorType != null && { connectorType: input.connectorType }),
    ...(input.incrementalPullConfig != null && {
      incrementalPullConfig: se_IncrementalPullConfig(input.incrementalPullConfig, context),
    }),
    ...(input.sourceConnectorProperties != null && {
      sourceConnectorProperties: se_SourceConnectorProperties(input.sourceConnectorProperties, context),
    }),
  };
};

/**
 * serializeAws_restJson1SuccessResponseHandlingConfig
 */
const se_SuccessResponseHandlingConfig = (input: SuccessResponseHandlingConfig, context: __SerdeContext): any => {
  return {
    ...(input.bucketName != null && { bucketName: input.bucketName }),
    ...(input.bucketPrefix != null && { bucketPrefix: input.bucketPrefix }),
  };
};

/**
 * serializeAws_restJson1TagMap
 */
const se_TagMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1Task
 */
const se_Task = (input: Task, context: __SerdeContext): any => {
  return {
    ...(input.connectorOperator != null && {
      connectorOperator: se_ConnectorOperator(input.connectorOperator, context),
    }),
    ...(input.destinationField != null && { destinationField: input.destinationField }),
    ...(input.sourceFields != null && { sourceFields: se_SourceFields(input.sourceFields, context) }),
    ...(input.taskProperties != null && { taskProperties: se_TaskPropertiesMap(input.taskProperties, context) }),
    ...(input.taskType != null && { taskType: input.taskType }),
  };
};

/**
 * serializeAws_restJson1TaskPropertiesMap
 */
const se_TaskPropertiesMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce(
    (acc: Record<string, any>, [key, value]: [OperatorPropertiesKeys | string, any]) => {
      if (value === null) {
        return acc;
      }
      acc[key] = value;
      return acc;
    },
    {}
  );
};

/**
 * serializeAws_restJson1Tasks
 */
const se_Tasks = (input: Task[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Task(entry, context);
    });
};

/**
 * serializeAws_restJson1TokenUrlCustomProperties
 */
const se_TokenUrlCustomProperties = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1TrendmicroConnectorProfileCredentials
 */
const se_TrendmicroConnectorProfileCredentials = (
  input: TrendmicroConnectorProfileCredentials,
  context: __SerdeContext
): any => {
  return {
    ...(input.apiSecretKey != null && { apiSecretKey: input.apiSecretKey }),
  };
};

/**
 * serializeAws_restJson1TrendmicroConnectorProfileProperties
 */
const se_TrendmicroConnectorProfileProperties = (
  input: TrendmicroConnectorProfileProperties,
  context: __SerdeContext
): any => {
  return {};
};

/**
 * serializeAws_restJson1TrendmicroSourceProperties
 */
const se_TrendmicroSourceProperties = (input: TrendmicroSourceProperties, context: __SerdeContext): any => {
  return {
    ...(input.object != null && { object: input.object }),
  };
};

/**
 * serializeAws_restJson1TriggerConfig
 */
const se_TriggerConfig = (input: TriggerConfig, context: __SerdeContext): any => {
  return {
    ...(input.triggerProperties != null && {
      triggerProperties: se_TriggerProperties(input.triggerProperties, context),
    }),
    ...(input.triggerType != null && { triggerType: input.triggerType }),
  };
};

/**
 * serializeAws_restJson1TriggerProperties
 */
const se_TriggerProperties = (input: TriggerProperties, context: __SerdeContext): any => {
  return {
    ...(input.Scheduled != null && { Scheduled: se_ScheduledTriggerProperties(input.Scheduled, context) }),
  };
};

/**
 * serializeAws_restJson1UpsolverDestinationProperties
 */
const se_UpsolverDestinationProperties = (input: UpsolverDestinationProperties, context: __SerdeContext): any => {
  return {
    ...(input.bucketName != null && { bucketName: input.bucketName }),
    ...(input.bucketPrefix != null && { bucketPrefix: input.bucketPrefix }),
    ...(input.s3OutputFormatConfig != null && {
      s3OutputFormatConfig: se_UpsolverS3OutputFormatConfig(input.s3OutputFormatConfig, context),
    }),
  };
};

/**
 * serializeAws_restJson1UpsolverS3OutputFormatConfig
 */
const se_UpsolverS3OutputFormatConfig = (input: UpsolverS3OutputFormatConfig, context: __SerdeContext): any => {
  return {
    ...(input.aggregationConfig != null && {
      aggregationConfig: se_AggregationConfig(input.aggregationConfig, context),
    }),
    ...(input.fileType != null && { fileType: input.fileType }),
    ...(input.prefixConfig != null && { prefixConfig: se_PrefixConfig(input.prefixConfig, context) }),
  };
};

/**
 * serializeAws_restJson1VeevaConnectorProfileCredentials
 */
const se_VeevaConnectorProfileCredentials = (input: VeevaConnectorProfileCredentials, context: __SerdeContext): any => {
  return {
    ...(input.password != null && { password: input.password }),
    ...(input.username != null && { username: input.username }),
  };
};

/**
 * serializeAws_restJson1VeevaConnectorProfileProperties
 */
const se_VeevaConnectorProfileProperties = (input: VeevaConnectorProfileProperties, context: __SerdeContext): any => {
  return {
    ...(input.instanceUrl != null && { instanceUrl: input.instanceUrl }),
  };
};

/**
 * serializeAws_restJson1VeevaSourceProperties
 */
const se_VeevaSourceProperties = (input: VeevaSourceProperties, context: __SerdeContext): any => {
  return {
    ...(input.documentType != null && { documentType: input.documentType }),
    ...(input.includeAllVersions != null && { includeAllVersions: input.includeAllVersions }),
    ...(input.includeRenditions != null && { includeRenditions: input.includeRenditions }),
    ...(input.includeSourceFiles != null && { includeSourceFiles: input.includeSourceFiles }),
    ...(input.object != null && { object: input.object }),
  };
};

/**
 * serializeAws_restJson1ZendeskConnectorProfileCredentials
 */
const se_ZendeskConnectorProfileCredentials = (
  input: ZendeskConnectorProfileCredentials,
  context: __SerdeContext
): any => {
  return {
    ...(input.accessToken != null && { accessToken: input.accessToken }),
    ...(input.clientId != null && { clientId: input.clientId }),
    ...(input.clientSecret != null && { clientSecret: input.clientSecret }),
    ...(input.oAuthRequest != null && { oAuthRequest: se_ConnectorOAuthRequest(input.oAuthRequest, context) }),
  };
};

/**
 * serializeAws_restJson1ZendeskConnectorProfileProperties
 */
const se_ZendeskConnectorProfileProperties = (
  input: ZendeskConnectorProfileProperties,
  context: __SerdeContext
): any => {
  return {
    ...(input.instanceUrl != null && { instanceUrl: input.instanceUrl }),
  };
};

/**
 * serializeAws_restJson1ZendeskDestinationProperties
 */
const se_ZendeskDestinationProperties = (input: ZendeskDestinationProperties, context: __SerdeContext): any => {
  return {
    ...(input.errorHandlingConfig != null && {
      errorHandlingConfig: se_ErrorHandlingConfig(input.errorHandlingConfig, context),
    }),
    ...(input.idFieldNames != null && { idFieldNames: se_IdFieldNameList(input.idFieldNames, context) }),
    ...(input.object != null && { object: input.object }),
    ...(input.writeOperationType != null && { writeOperationType: input.writeOperationType }),
  };
};

/**
 * serializeAws_restJson1ZendeskSourceProperties
 */
const se_ZendeskSourceProperties = (input: ZendeskSourceProperties, context: __SerdeContext): any => {
  return {
    ...(input.object != null && { object: input.object }),
  };
};

/**
 * deserializeAws_restJson1AggregationConfig
 */
const de_AggregationConfig = (output: any, context: __SerdeContext): AggregationConfig => {
  return {
    aggregationType: __expectString(output.aggregationType),
    targetFileSize: __expectLong(output.targetFileSize),
  } as any;
};

/**
 * deserializeAws_restJson1AmplitudeConnectorProfileProperties
 */
const de_AmplitudeConnectorProfileProperties = (
  output: any,
  context: __SerdeContext
): AmplitudeConnectorProfileProperties => {
  return {} as any;
};

/**
 * deserializeAws_restJson1AmplitudeMetadata
 */
const de_AmplitudeMetadata = (output: any, context: __SerdeContext): AmplitudeMetadata => {
  return {} as any;
};

/**
 * deserializeAws_restJson1AmplitudeSourceProperties
 */
const de_AmplitudeSourceProperties = (output: any, context: __SerdeContext): AmplitudeSourceProperties => {
  return {
    object: __expectString(output.object),
  } as any;
};

/**
 * deserializeAws_restJson1AuthCodeUrlList
 */
const de_AuthCodeUrlList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AuthenticationConfig
 */
const de_AuthenticationConfig = (output: any, context: __SerdeContext): AuthenticationConfig => {
  return {
    customAuthConfigs:
      output.customAuthConfigs != null ? de_CustomAuthConfigList(output.customAuthConfigs, context) : undefined,
    isApiKeyAuthSupported: __expectBoolean(output.isApiKeyAuthSupported),
    isBasicAuthSupported: __expectBoolean(output.isBasicAuthSupported),
    isCustomAuthSupported: __expectBoolean(output.isCustomAuthSupported),
    isOAuth2Supported: __expectBoolean(output.isOAuth2Supported),
    oAuth2Defaults: output.oAuth2Defaults != null ? de_OAuth2Defaults(output.oAuth2Defaults, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1AuthParameter
 */
const de_AuthParameter = (output: any, context: __SerdeContext): AuthParameter => {
  return {
    connectorSuppliedValues:
      output.connectorSuppliedValues != null
        ? de_ConnectorSuppliedValueList(output.connectorSuppliedValues, context)
        : undefined,
    description: __expectString(output.description),
    isRequired: __expectBoolean(output.isRequired),
    isSensitiveField: __expectBoolean(output.isSensitiveField),
    key: __expectString(output.key),
    label: __expectString(output.label),
  } as any;
};

/**
 * deserializeAws_restJson1AuthParameterList
 */
const de_AuthParameterList = (output: any, context: __SerdeContext): AuthParameter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AuthParameter(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ConnectorConfiguration
 */
const de_ConnectorConfiguration = (output: any, context: __SerdeContext): ConnectorConfiguration => {
  return {
    authenticationConfig:
      output.authenticationConfig != null ? de_AuthenticationConfig(output.authenticationConfig, context) : undefined,
    canUseAsDestination: __expectBoolean(output.canUseAsDestination),
    canUseAsSource: __expectBoolean(output.canUseAsSource),
    connectorArn: __expectString(output.connectorArn),
    connectorDescription: __expectString(output.connectorDescription),
    connectorLabel: __expectString(output.connectorLabel),
    connectorMetadata:
      output.connectorMetadata != null ? de_ConnectorMetadata(output.connectorMetadata, context) : undefined,
    connectorModes: output.connectorModes != null ? de_ConnectorModeList(output.connectorModes, context) : undefined,
    connectorName: __expectString(output.connectorName),
    connectorOwner: __expectString(output.connectorOwner),
    connectorProvisioningConfig:
      output.connectorProvisioningConfig != null
        ? de_ConnectorProvisioningConfig(output.connectorProvisioningConfig, context)
        : undefined,
    connectorProvisioningType: __expectString(output.connectorProvisioningType),
    connectorRuntimeSettings:
      output.connectorRuntimeSettings != null
        ? de_ConnectorRuntimeSettingList(output.connectorRuntimeSettings, context)
        : undefined,
    connectorType: __expectString(output.connectorType),
    connectorVersion: __expectString(output.connectorVersion),
    isPrivateLinkEnabled: __expectBoolean(output.isPrivateLinkEnabled),
    isPrivateLinkEndpointUrlRequired: __expectBoolean(output.isPrivateLinkEndpointUrlRequired),
    logoURL: __expectString(output.logoURL),
    registeredAt:
      output.registeredAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.registeredAt)))
        : undefined,
    registeredBy: __expectString(output.registeredBy),
    supportedApiVersions:
      output.supportedApiVersions != null
        ? de_SupportedApiVersionList(output.supportedApiVersions, context)
        : undefined,
    supportedDestinationConnectors:
      output.supportedDestinationConnectors != null
        ? de_ConnectorTypeList(output.supportedDestinationConnectors, context)
        : undefined,
    supportedOperators:
      output.supportedOperators != null ? de_SupportedOperatorList(output.supportedOperators, context) : undefined,
    supportedSchedulingFrequencies:
      output.supportedSchedulingFrequencies != null
        ? de_SchedulingFrequencyTypeList(output.supportedSchedulingFrequencies, context)
        : undefined,
    supportedTriggerTypes:
      output.supportedTriggerTypes != null ? de_TriggerTypeList(output.supportedTriggerTypes, context) : undefined,
    supportedWriteOperations:
      output.supportedWriteOperations != null
        ? de_SupportedWriteOperationList(output.supportedWriteOperations, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ConnectorConfigurationsMap
 */
const de_ConnectorConfigurationsMap = (
  output: any,
  context: __SerdeContext
): Record<string, ConnectorConfiguration> => {
  return Object.entries(output).reduce(
    (acc: Record<string, ConnectorConfiguration>, [key, value]: [ConnectorType | string, any]) => {
      if (value === null) {
        return acc;
      }
      acc[key] = de_ConnectorConfiguration(value, context);
      return acc;
    },
    {}
  );
};

/**
 * deserializeAws_restJson1ConnectorDetail
 */
const de_ConnectorDetail = (output: any, context: __SerdeContext): ConnectorDetail => {
  return {
    applicationType: __expectString(output.applicationType),
    connectorDescription: __expectString(output.connectorDescription),
    connectorLabel: __expectString(output.connectorLabel),
    connectorModes: output.connectorModes != null ? de_ConnectorModeList(output.connectorModes, context) : undefined,
    connectorName: __expectString(output.connectorName),
    connectorOwner: __expectString(output.connectorOwner),
    connectorProvisioningType: __expectString(output.connectorProvisioningType),
    connectorType: __expectString(output.connectorType),
    connectorVersion: __expectString(output.connectorVersion),
    registeredAt:
      output.registeredAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.registeredAt)))
        : undefined,
    registeredBy: __expectString(output.registeredBy),
  } as any;
};

/**
 * deserializeAws_restJson1ConnectorEntity
 */
const de_ConnectorEntity = (output: any, context: __SerdeContext): ConnectorEntity => {
  return {
    hasNestedEntities: __expectBoolean(output.hasNestedEntities),
    label: __expectString(output.label),
    name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_restJson1ConnectorEntityField
 */
const de_ConnectorEntityField = (output: any, context: __SerdeContext): ConnectorEntityField => {
  return {
    customProperties:
      output.customProperties != null ? de_CustomProperties(output.customProperties, context) : undefined,
    defaultValue: __expectString(output.defaultValue),
    description: __expectString(output.description),
    destinationProperties:
      output.destinationProperties != null
        ? de_DestinationFieldProperties(output.destinationProperties, context)
        : undefined,
    identifier: __expectString(output.identifier),
    isDeprecated: __expectBoolean(output.isDeprecated),
    isPrimaryKey: __expectBoolean(output.isPrimaryKey),
    label: __expectString(output.label),
    parentIdentifier: __expectString(output.parentIdentifier),
    sourceProperties:
      output.sourceProperties != null ? de_SourceFieldProperties(output.sourceProperties, context) : undefined,
    supportedFieldTypeDetails:
      output.supportedFieldTypeDetails != null
        ? de_SupportedFieldTypeDetails(output.supportedFieldTypeDetails, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ConnectorEntityFieldList
 */
const de_ConnectorEntityFieldList = (output: any, context: __SerdeContext): ConnectorEntityField[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ConnectorEntityField(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ConnectorEntityList
 */
const de_ConnectorEntityList = (output: any, context: __SerdeContext): ConnectorEntity[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ConnectorEntity(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ConnectorEntityMap
 */
const de_ConnectorEntityMap = (output: any, context: __SerdeContext): Record<string, ConnectorEntity[]> => {
  return Object.entries(output).reduce((acc: Record<string, ConnectorEntity[]>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_ConnectorEntityList(value, context);
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1ConnectorList
 */
const de_ConnectorList = (output: any, context: __SerdeContext): ConnectorDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ConnectorDetail(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ConnectorMetadata
 */
const de_ConnectorMetadata = (output: any, context: __SerdeContext): ConnectorMetadata => {
  return {
    Amplitude: output.Amplitude != null ? de_AmplitudeMetadata(output.Amplitude, context) : undefined,
    CustomerProfiles:
      output.CustomerProfiles != null ? de_CustomerProfilesMetadata(output.CustomerProfiles, context) : undefined,
    Datadog: output.Datadog != null ? de_DatadogMetadata(output.Datadog, context) : undefined,
    Dynatrace: output.Dynatrace != null ? de_DynatraceMetadata(output.Dynatrace, context) : undefined,
    EventBridge: output.EventBridge != null ? de_EventBridgeMetadata(output.EventBridge, context) : undefined,
    GoogleAnalytics:
      output.GoogleAnalytics != null ? de_GoogleAnalyticsMetadata(output.GoogleAnalytics, context) : undefined,
    Honeycode: output.Honeycode != null ? de_HoneycodeMetadata(output.Honeycode, context) : undefined,
    InforNexus: output.InforNexus != null ? de_InforNexusMetadata(output.InforNexus, context) : undefined,
    Marketo: output.Marketo != null ? de_MarketoMetadata(output.Marketo, context) : undefined,
    Pardot: output.Pardot != null ? de_PardotMetadata(output.Pardot, context) : undefined,
    Redshift: output.Redshift != null ? de_RedshiftMetadata(output.Redshift, context) : undefined,
    S3: output.S3 != null ? de_S3Metadata(output.S3, context) : undefined,
    SAPOData: output.SAPOData != null ? de_SAPODataMetadata(output.SAPOData, context) : undefined,
    Salesforce: output.Salesforce != null ? de_SalesforceMetadata(output.Salesforce, context) : undefined,
    ServiceNow: output.ServiceNow != null ? de_ServiceNowMetadata(output.ServiceNow, context) : undefined,
    Singular: output.Singular != null ? de_SingularMetadata(output.Singular, context) : undefined,
    Slack: output.Slack != null ? de_SlackMetadata(output.Slack, context) : undefined,
    Snowflake: output.Snowflake != null ? de_SnowflakeMetadata(output.Snowflake, context) : undefined,
    Trendmicro: output.Trendmicro != null ? de_TrendmicroMetadata(output.Trendmicro, context) : undefined,
    Upsolver: output.Upsolver != null ? de_UpsolverMetadata(output.Upsolver, context) : undefined,
    Veeva: output.Veeva != null ? de_VeevaMetadata(output.Veeva, context) : undefined,
    Zendesk: output.Zendesk != null ? de_ZendeskMetadata(output.Zendesk, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ConnectorModeList
 */
const de_ConnectorModeList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ConnectorOperator
 */
const de_ConnectorOperator = (output: any, context: __SerdeContext): ConnectorOperator => {
  return {
    Amplitude: __expectString(output.Amplitude),
    CustomConnector: __expectString(output.CustomConnector),
    Datadog: __expectString(output.Datadog),
    Dynatrace: __expectString(output.Dynatrace),
    GoogleAnalytics: __expectString(output.GoogleAnalytics),
    InforNexus: __expectString(output.InforNexus),
    Marketo: __expectString(output.Marketo),
    Pardot: __expectString(output.Pardot),
    S3: __expectString(output.S3),
    SAPOData: __expectString(output.SAPOData),
    Salesforce: __expectString(output.Salesforce),
    ServiceNow: __expectString(output.ServiceNow),
    Singular: __expectString(output.Singular),
    Slack: __expectString(output.Slack),
    Trendmicro: __expectString(output.Trendmicro),
    Veeva: __expectString(output.Veeva),
    Zendesk: __expectString(output.Zendesk),
  } as any;
};

/**
 * deserializeAws_restJson1ConnectorProfile
 */
const de_ConnectorProfile = (output: any, context: __SerdeContext): ConnectorProfile => {
  return {
    connectionMode: __expectString(output.connectionMode),
    connectorLabel: __expectString(output.connectorLabel),
    connectorProfileArn: __expectString(output.connectorProfileArn),
    connectorProfileName: __expectString(output.connectorProfileName),
    connectorProfileProperties:
      output.connectorProfileProperties != null
        ? de_ConnectorProfileProperties(output.connectorProfileProperties, context)
        : undefined,
    connectorType: __expectString(output.connectorType),
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    credentialsArn: __expectString(output.credentialsArn),
    lastUpdatedAt:
      output.lastUpdatedAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdatedAt)))
        : undefined,
    privateConnectionProvisioningState:
      output.privateConnectionProvisioningState != null
        ? de_PrivateConnectionProvisioningState(output.privateConnectionProvisioningState, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ConnectorProfileDetailList
 */
const de_ConnectorProfileDetailList = (output: any, context: __SerdeContext): ConnectorProfile[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ConnectorProfile(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ConnectorProfileProperties
 */
const de_ConnectorProfileProperties = (output: any, context: __SerdeContext): ConnectorProfileProperties => {
  return {
    Amplitude: output.Amplitude != null ? de_AmplitudeConnectorProfileProperties(output.Amplitude, context) : undefined,
    CustomConnector:
      output.CustomConnector != null ? de_CustomConnectorProfileProperties(output.CustomConnector, context) : undefined,
    Datadog: output.Datadog != null ? de_DatadogConnectorProfileProperties(output.Datadog, context) : undefined,
    Dynatrace: output.Dynatrace != null ? de_DynatraceConnectorProfileProperties(output.Dynatrace, context) : undefined,
    GoogleAnalytics:
      output.GoogleAnalytics != null
        ? de_GoogleAnalyticsConnectorProfileProperties(output.GoogleAnalytics, context)
        : undefined,
    Honeycode: output.Honeycode != null ? de_HoneycodeConnectorProfileProperties(output.Honeycode, context) : undefined,
    InforNexus:
      output.InforNexus != null ? de_InforNexusConnectorProfileProperties(output.InforNexus, context) : undefined,
    Marketo: output.Marketo != null ? de_MarketoConnectorProfileProperties(output.Marketo, context) : undefined,
    Pardot: output.Pardot != null ? de_PardotConnectorProfileProperties(output.Pardot, context) : undefined,
    Redshift: output.Redshift != null ? de_RedshiftConnectorProfileProperties(output.Redshift, context) : undefined,
    SAPOData: output.SAPOData != null ? de_SAPODataConnectorProfileProperties(output.SAPOData, context) : undefined,
    Salesforce:
      output.Salesforce != null ? de_SalesforceConnectorProfileProperties(output.Salesforce, context) : undefined,
    ServiceNow:
      output.ServiceNow != null ? de_ServiceNowConnectorProfileProperties(output.ServiceNow, context) : undefined,
    Singular: output.Singular != null ? de_SingularConnectorProfileProperties(output.Singular, context) : undefined,
    Slack: output.Slack != null ? de_SlackConnectorProfileProperties(output.Slack, context) : undefined,
    Snowflake: output.Snowflake != null ? de_SnowflakeConnectorProfileProperties(output.Snowflake, context) : undefined,
    Trendmicro:
      output.Trendmicro != null ? de_TrendmicroConnectorProfileProperties(output.Trendmicro, context) : undefined,
    Veeva: output.Veeva != null ? de_VeevaConnectorProfileProperties(output.Veeva, context) : undefined,
    Zendesk: output.Zendesk != null ? de_ZendeskConnectorProfileProperties(output.Zendesk, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ConnectorProvisioningConfig
 */
const de_ConnectorProvisioningConfig = (output: any, context: __SerdeContext): ConnectorProvisioningConfig => {
  return {
    lambda: output.lambda != null ? de_LambdaConnectorProvisioningConfig(output.lambda, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ConnectorRuntimeSetting
 */
const de_ConnectorRuntimeSetting = (output: any, context: __SerdeContext): ConnectorRuntimeSetting => {
  return {
    connectorSuppliedValueOptions:
      output.connectorSuppliedValueOptions != null
        ? de_ConnectorSuppliedValueOptionList(output.connectorSuppliedValueOptions, context)
        : undefined,
    dataType: __expectString(output.dataType),
    description: __expectString(output.description),
    isRequired: __expectBoolean(output.isRequired),
    key: __expectString(output.key),
    label: __expectString(output.label),
    scope: __expectString(output.scope),
  } as any;
};

/**
 * deserializeAws_restJson1ConnectorRuntimeSettingList
 */
const de_ConnectorRuntimeSettingList = (output: any, context: __SerdeContext): ConnectorRuntimeSetting[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ConnectorRuntimeSetting(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ConnectorSuppliedValueList
 */
const de_ConnectorSuppliedValueList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ConnectorSuppliedValueOptionList
 */
const de_ConnectorSuppliedValueOptionList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ConnectorTypeList
 */
const de_ConnectorTypeList = (output: any, context: __SerdeContext): (ConnectorType | string)[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1CustomAuthConfig
 */
const de_CustomAuthConfig = (output: any, context: __SerdeContext): CustomAuthConfig => {
  return {
    authParameters: output.authParameters != null ? de_AuthParameterList(output.authParameters, context) : undefined,
    customAuthenticationType: __expectString(output.customAuthenticationType),
  } as any;
};

/**
 * deserializeAws_restJson1CustomAuthConfigList
 */
const de_CustomAuthConfigList = (output: any, context: __SerdeContext): CustomAuthConfig[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_CustomAuthConfig(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1CustomConnectorDestinationProperties
 */
const de_CustomConnectorDestinationProperties = (
  output: any,
  context: __SerdeContext
): CustomConnectorDestinationProperties => {
  return {
    customProperties:
      output.customProperties != null ? de_CustomProperties(output.customProperties, context) : undefined,
    entityName: __expectString(output.entityName),
    errorHandlingConfig:
      output.errorHandlingConfig != null ? de_ErrorHandlingConfig(output.errorHandlingConfig, context) : undefined,
    idFieldNames: output.idFieldNames != null ? de_IdFieldNameList(output.idFieldNames, context) : undefined,
    writeOperationType: __expectString(output.writeOperationType),
  } as any;
};

/**
 * deserializeAws_restJson1CustomConnectorProfileProperties
 */
const de_CustomConnectorProfileProperties = (
  output: any,
  context: __SerdeContext
): CustomConnectorProfileProperties => {
  return {
    oAuth2Properties:
      output.oAuth2Properties != null ? de_OAuth2Properties(output.oAuth2Properties, context) : undefined,
    profileProperties:
      output.profileProperties != null ? de_ProfilePropertiesMap(output.profileProperties, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1CustomConnectorSourceProperties
 */
const de_CustomConnectorSourceProperties = (output: any, context: __SerdeContext): CustomConnectorSourceProperties => {
  return {
    customProperties:
      output.customProperties != null ? de_CustomProperties(output.customProperties, context) : undefined,
    entityName: __expectString(output.entityName),
  } as any;
};

/**
 * deserializeAws_restJson1CustomerProfilesDestinationProperties
 */
const de_CustomerProfilesDestinationProperties = (
  output: any,
  context: __SerdeContext
): CustomerProfilesDestinationProperties => {
  return {
    domainName: __expectString(output.domainName),
    objectTypeName: __expectString(output.objectTypeName),
  } as any;
};

/**
 * deserializeAws_restJson1CustomerProfilesMetadata
 */
const de_CustomerProfilesMetadata = (output: any, context: __SerdeContext): CustomerProfilesMetadata => {
  return {} as any;
};

/**
 * deserializeAws_restJson1CustomProperties
 */
const de_CustomProperties = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1DatadogConnectorProfileProperties
 */
const de_DatadogConnectorProfileProperties = (
  output: any,
  context: __SerdeContext
): DatadogConnectorProfileProperties => {
  return {
    instanceUrl: __expectString(output.instanceUrl),
  } as any;
};

/**
 * deserializeAws_restJson1DatadogMetadata
 */
const de_DatadogMetadata = (output: any, context: __SerdeContext): DatadogMetadata => {
  return {} as any;
};

/**
 * deserializeAws_restJson1DatadogSourceProperties
 */
const de_DatadogSourceProperties = (output: any, context: __SerdeContext): DatadogSourceProperties => {
  return {
    object: __expectString(output.object),
  } as any;
};

/**
 * deserializeAws_restJson1DestinationConnectorProperties
 */
const de_DestinationConnectorProperties = (output: any, context: __SerdeContext): DestinationConnectorProperties => {
  return {
    CustomConnector:
      output.CustomConnector != null
        ? de_CustomConnectorDestinationProperties(output.CustomConnector, context)
        : undefined,
    CustomerProfiles:
      output.CustomerProfiles != null
        ? de_CustomerProfilesDestinationProperties(output.CustomerProfiles, context)
        : undefined,
    EventBridge:
      output.EventBridge != null ? de_EventBridgeDestinationProperties(output.EventBridge, context) : undefined,
    Honeycode: output.Honeycode != null ? de_HoneycodeDestinationProperties(output.Honeycode, context) : undefined,
    LookoutMetrics:
      output.LookoutMetrics != null
        ? de_LookoutMetricsDestinationProperties(output.LookoutMetrics, context)
        : undefined,
    Marketo: output.Marketo != null ? de_MarketoDestinationProperties(output.Marketo, context) : undefined,
    Redshift: output.Redshift != null ? de_RedshiftDestinationProperties(output.Redshift, context) : undefined,
    S3: output.S3 != null ? de_S3DestinationProperties(output.S3, context) : undefined,
    SAPOData: output.SAPOData != null ? de_SAPODataDestinationProperties(output.SAPOData, context) : undefined,
    Salesforce: output.Salesforce != null ? de_SalesforceDestinationProperties(output.Salesforce, context) : undefined,
    Snowflake: output.Snowflake != null ? de_SnowflakeDestinationProperties(output.Snowflake, context) : undefined,
    Upsolver: output.Upsolver != null ? de_UpsolverDestinationProperties(output.Upsolver, context) : undefined,
    Zendesk: output.Zendesk != null ? de_ZendeskDestinationProperties(output.Zendesk, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1DestinationFieldProperties
 */
const de_DestinationFieldProperties = (output: any, context: __SerdeContext): DestinationFieldProperties => {
  return {
    isCreatable: __expectBoolean(output.isCreatable),
    isDefaultedOnCreate: __expectBoolean(output.isDefaultedOnCreate),
    isNullable: __expectBoolean(output.isNullable),
    isUpdatable: __expectBoolean(output.isUpdatable),
    isUpsertable: __expectBoolean(output.isUpsertable),
    supportedWriteOperations:
      output.supportedWriteOperations != null
        ? de_SupportedWriteOperationList(output.supportedWriteOperations, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1DestinationFlowConfig
 */
const de_DestinationFlowConfig = (output: any, context: __SerdeContext): DestinationFlowConfig => {
  return {
    apiVersion: __expectString(output.apiVersion),
    connectorProfileName: __expectString(output.connectorProfileName),
    connectorType: __expectString(output.connectorType),
    destinationConnectorProperties:
      output.destinationConnectorProperties != null
        ? de_DestinationConnectorProperties(output.destinationConnectorProperties, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1DestinationFlowConfigList
 */
const de_DestinationFlowConfigList = (output: any, context: __SerdeContext): DestinationFlowConfig[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DestinationFlowConfig(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DynatraceConnectorProfileProperties
 */
const de_DynatraceConnectorProfileProperties = (
  output: any,
  context: __SerdeContext
): DynatraceConnectorProfileProperties => {
  return {
    instanceUrl: __expectString(output.instanceUrl),
  } as any;
};

/**
 * deserializeAws_restJson1DynatraceMetadata
 */
const de_DynatraceMetadata = (output: any, context: __SerdeContext): DynatraceMetadata => {
  return {} as any;
};

/**
 * deserializeAws_restJson1DynatraceSourceProperties
 */
const de_DynatraceSourceProperties = (output: any, context: __SerdeContext): DynatraceSourceProperties => {
  return {
    object: __expectString(output.object),
  } as any;
};

/**
 * deserializeAws_restJson1ErrorHandlingConfig
 */
const de_ErrorHandlingConfig = (output: any, context: __SerdeContext): ErrorHandlingConfig => {
  return {
    bucketName: __expectString(output.bucketName),
    bucketPrefix: __expectString(output.bucketPrefix),
    failOnFirstDestinationError: __expectBoolean(output.failOnFirstDestinationError),
  } as any;
};

/**
 * deserializeAws_restJson1ErrorInfo
 */
const de_ErrorInfo = (output: any, context: __SerdeContext): ErrorInfo => {
  return {
    executionMessage: __expectString(output.executionMessage),
    putFailuresCount: __expectLong(output.putFailuresCount),
  } as any;
};

/**
 * deserializeAws_restJson1EventBridgeDestinationProperties
 */
const de_EventBridgeDestinationProperties = (
  output: any,
  context: __SerdeContext
): EventBridgeDestinationProperties => {
  return {
    errorHandlingConfig:
      output.errorHandlingConfig != null ? de_ErrorHandlingConfig(output.errorHandlingConfig, context) : undefined,
    object: __expectString(output.object),
  } as any;
};

/**
 * deserializeAws_restJson1EventBridgeMetadata
 */
const de_EventBridgeMetadata = (output: any, context: __SerdeContext): EventBridgeMetadata => {
  return {} as any;
};

/**
 * deserializeAws_restJson1ExecutionDetails
 */
const de_ExecutionDetails = (output: any, context: __SerdeContext): ExecutionDetails => {
  return {
    mostRecentExecutionMessage: __expectString(output.mostRecentExecutionMessage),
    mostRecentExecutionStatus: __expectString(output.mostRecentExecutionStatus),
    mostRecentExecutionTime:
      output.mostRecentExecutionTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.mostRecentExecutionTime)))
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ExecutionRecord
 */
const de_ExecutionRecord = (output: any, context: __SerdeContext): ExecutionRecord => {
  return {
    dataPullEndTime:
      output.dataPullEndTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.dataPullEndTime)))
        : undefined,
    dataPullStartTime:
      output.dataPullStartTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.dataPullStartTime)))
        : undefined,
    executionId: __expectString(output.executionId),
    executionResult: output.executionResult != null ? de_ExecutionResult(output.executionResult, context) : undefined,
    executionStatus: __expectString(output.executionStatus),
    lastUpdatedAt:
      output.lastUpdatedAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdatedAt)))
        : undefined,
    metadataCatalogDetails:
      output.metadataCatalogDetails != null
        ? de_MetadataCatalogDetails(output.metadataCatalogDetails, context)
        : undefined,
    startedAt:
      output.startedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.startedAt))) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ExecutionResult
 */
const de_ExecutionResult = (output: any, context: __SerdeContext): ExecutionResult => {
  return {
    bytesProcessed: __expectLong(output.bytesProcessed),
    bytesWritten: __expectLong(output.bytesWritten),
    errorInfo: output.errorInfo != null ? de_ErrorInfo(output.errorInfo, context) : undefined,
    recordsProcessed: __expectLong(output.recordsProcessed),
  } as any;
};

/**
 * deserializeAws_restJson1FieldTypeDetails
 */
const de_FieldTypeDetails = (output: any, context: __SerdeContext): FieldTypeDetails => {
  return {
    fieldLengthRange: output.fieldLengthRange != null ? de_Range(output.fieldLengthRange, context) : undefined,
    fieldType: __expectString(output.fieldType),
    fieldValueRange: output.fieldValueRange != null ? de_Range(output.fieldValueRange, context) : undefined,
    filterOperators:
      output.filterOperators != null ? de_FilterOperatorList(output.filterOperators, context) : undefined,
    supportedDateFormat: __expectString(output.supportedDateFormat),
    supportedValues:
      output.supportedValues != null ? de_SupportedValueList(output.supportedValues, context) : undefined,
    valueRegexPattern: __expectString(output.valueRegexPattern),
  } as any;
};

/**
 * deserializeAws_restJson1FilterOperatorList
 */
const de_FilterOperatorList = (output: any, context: __SerdeContext): (Operator | string)[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1FlowDefinition
 */
const de_FlowDefinition = (output: any, context: __SerdeContext): FlowDefinition => {
  return {
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    createdBy: __expectString(output.createdBy),
    description: __expectString(output.description),
    destinationConnectorLabel: __expectString(output.destinationConnectorLabel),
    destinationConnectorType: __expectString(output.destinationConnectorType),
    flowArn: __expectString(output.flowArn),
    flowName: __expectString(output.flowName),
    flowStatus: __expectString(output.flowStatus),
    lastRunExecutionDetails:
      output.lastRunExecutionDetails != null ? de_ExecutionDetails(output.lastRunExecutionDetails, context) : undefined,
    lastUpdatedAt:
      output.lastUpdatedAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdatedAt)))
        : undefined,
    lastUpdatedBy: __expectString(output.lastUpdatedBy),
    sourceConnectorLabel: __expectString(output.sourceConnectorLabel),
    sourceConnectorType: __expectString(output.sourceConnectorType),
    tags: output.tags != null ? de_TagMap(output.tags, context) : undefined,
    triggerType: __expectString(output.triggerType),
  } as any;
};

/**
 * deserializeAws_restJson1FlowExecutionList
 */
const de_FlowExecutionList = (output: any, context: __SerdeContext): ExecutionRecord[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ExecutionRecord(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1FlowList
 */
const de_FlowList = (output: any, context: __SerdeContext): FlowDefinition[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_FlowDefinition(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1GlueDataCatalogConfig
 */
const de_GlueDataCatalogConfig = (output: any, context: __SerdeContext): GlueDataCatalogConfig => {
  return {
    databaseName: __expectString(output.databaseName),
    roleArn: __expectString(output.roleArn),
    tablePrefix: __expectString(output.tablePrefix),
  } as any;
};

/**
 * deserializeAws_restJson1GoogleAnalyticsConnectorProfileProperties
 */
const de_GoogleAnalyticsConnectorProfileProperties = (
  output: any,
  context: __SerdeContext
): GoogleAnalyticsConnectorProfileProperties => {
  return {} as any;
};

/**
 * deserializeAws_restJson1GoogleAnalyticsMetadata
 */
const de_GoogleAnalyticsMetadata = (output: any, context: __SerdeContext): GoogleAnalyticsMetadata => {
  return {
    oAuthScopes: output.oAuthScopes != null ? de_OAuthScopeList(output.oAuthScopes, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1GoogleAnalyticsSourceProperties
 */
const de_GoogleAnalyticsSourceProperties = (output: any, context: __SerdeContext): GoogleAnalyticsSourceProperties => {
  return {
    object: __expectString(output.object),
  } as any;
};

/**
 * deserializeAws_restJson1HoneycodeConnectorProfileProperties
 */
const de_HoneycodeConnectorProfileProperties = (
  output: any,
  context: __SerdeContext
): HoneycodeConnectorProfileProperties => {
  return {} as any;
};

/**
 * deserializeAws_restJson1HoneycodeDestinationProperties
 */
const de_HoneycodeDestinationProperties = (output: any, context: __SerdeContext): HoneycodeDestinationProperties => {
  return {
    errorHandlingConfig:
      output.errorHandlingConfig != null ? de_ErrorHandlingConfig(output.errorHandlingConfig, context) : undefined,
    object: __expectString(output.object),
  } as any;
};

/**
 * deserializeAws_restJson1HoneycodeMetadata
 */
const de_HoneycodeMetadata = (output: any, context: __SerdeContext): HoneycodeMetadata => {
  return {
    oAuthScopes: output.oAuthScopes != null ? de_OAuthScopeList(output.oAuthScopes, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1IdFieldNameList
 */
const de_IdFieldNameList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1IncrementalPullConfig
 */
const de_IncrementalPullConfig = (output: any, context: __SerdeContext): IncrementalPullConfig => {
  return {
    datetimeTypeFieldName: __expectString(output.datetimeTypeFieldName),
  } as any;
};

/**
 * deserializeAws_restJson1InforNexusConnectorProfileProperties
 */
const de_InforNexusConnectorProfileProperties = (
  output: any,
  context: __SerdeContext
): InforNexusConnectorProfileProperties => {
  return {
    instanceUrl: __expectString(output.instanceUrl),
  } as any;
};

/**
 * deserializeAws_restJson1InforNexusMetadata
 */
const de_InforNexusMetadata = (output: any, context: __SerdeContext): InforNexusMetadata => {
  return {} as any;
};

/**
 * deserializeAws_restJson1InforNexusSourceProperties
 */
const de_InforNexusSourceProperties = (output: any, context: __SerdeContext): InforNexusSourceProperties => {
  return {
    object: __expectString(output.object),
  } as any;
};

/**
 * deserializeAws_restJson1LambdaConnectorProvisioningConfig
 */
const de_LambdaConnectorProvisioningConfig = (
  output: any,
  context: __SerdeContext
): LambdaConnectorProvisioningConfig => {
  return {
    lambdaArn: __expectString(output.lambdaArn),
  } as any;
};

/**
 * deserializeAws_restJson1LookoutMetricsDestinationProperties
 */
const de_LookoutMetricsDestinationProperties = (
  output: any,
  context: __SerdeContext
): LookoutMetricsDestinationProperties => {
  return {} as any;
};

/**
 * deserializeAws_restJson1MarketoConnectorProfileProperties
 */
const de_MarketoConnectorProfileProperties = (
  output: any,
  context: __SerdeContext
): MarketoConnectorProfileProperties => {
  return {
    instanceUrl: __expectString(output.instanceUrl),
  } as any;
};

/**
 * deserializeAws_restJson1MarketoDestinationProperties
 */
const de_MarketoDestinationProperties = (output: any, context: __SerdeContext): MarketoDestinationProperties => {
  return {
    errorHandlingConfig:
      output.errorHandlingConfig != null ? de_ErrorHandlingConfig(output.errorHandlingConfig, context) : undefined,
    object: __expectString(output.object),
  } as any;
};

/**
 * deserializeAws_restJson1MarketoMetadata
 */
const de_MarketoMetadata = (output: any, context: __SerdeContext): MarketoMetadata => {
  return {} as any;
};

/**
 * deserializeAws_restJson1MarketoSourceProperties
 */
const de_MarketoSourceProperties = (output: any, context: __SerdeContext): MarketoSourceProperties => {
  return {
    object: __expectString(output.object),
  } as any;
};

/**
 * deserializeAws_restJson1MetadataCatalogConfig
 */
const de_MetadataCatalogConfig = (output: any, context: __SerdeContext): MetadataCatalogConfig => {
  return {
    glueDataCatalog:
      output.glueDataCatalog != null ? de_GlueDataCatalogConfig(output.glueDataCatalog, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1MetadataCatalogDetail
 */
const de_MetadataCatalogDetail = (output: any, context: __SerdeContext): MetadataCatalogDetail => {
  return {
    catalogType: __expectString(output.catalogType),
    partitionRegistrationOutput:
      output.partitionRegistrationOutput != null
        ? de_RegistrationOutput(output.partitionRegistrationOutput, context)
        : undefined,
    tableName: __expectString(output.tableName),
    tableRegistrationOutput:
      output.tableRegistrationOutput != null
        ? de_RegistrationOutput(output.tableRegistrationOutput, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1MetadataCatalogDetails
 */
const de_MetadataCatalogDetails = (output: any, context: __SerdeContext): MetadataCatalogDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_MetadataCatalogDetail(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1OAuth2CustomParameter
 */
const de_OAuth2CustomParameter = (output: any, context: __SerdeContext): OAuth2CustomParameter => {
  return {
    connectorSuppliedValues:
      output.connectorSuppliedValues != null
        ? de_ConnectorSuppliedValueList(output.connectorSuppliedValues, context)
        : undefined,
    description: __expectString(output.description),
    isRequired: __expectBoolean(output.isRequired),
    isSensitiveField: __expectBoolean(output.isSensitiveField),
    key: __expectString(output.key),
    label: __expectString(output.label),
    type: __expectString(output.type),
  } as any;
};

/**
 * deserializeAws_restJson1OAuth2CustomPropertiesList
 */
const de_OAuth2CustomPropertiesList = (output: any, context: __SerdeContext): OAuth2CustomParameter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_OAuth2CustomParameter(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1OAuth2Defaults
 */
const de_OAuth2Defaults = (output: any, context: __SerdeContext): OAuth2Defaults => {
  return {
    authCodeUrls: output.authCodeUrls != null ? de_AuthCodeUrlList(output.authCodeUrls, context) : undefined,
    oauth2CustomProperties:
      output.oauth2CustomProperties != null
        ? de_OAuth2CustomPropertiesList(output.oauth2CustomProperties, context)
        : undefined,
    oauth2GrantTypesSupported:
      output.oauth2GrantTypesSupported != null
        ? de_OAuth2GrantTypeSupportedList(output.oauth2GrantTypesSupported, context)
        : undefined,
    oauthScopes: output.oauthScopes != null ? de_OAuthScopeList(output.oauthScopes, context) : undefined,
    tokenUrls: output.tokenUrls != null ? de_TokenUrlList(output.tokenUrls, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1OAuth2GrantTypeSupportedList
 */
const de_OAuth2GrantTypeSupportedList = (output: any, context: __SerdeContext): (OAuth2GrantType | string)[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1OAuth2Properties
 */
const de_OAuth2Properties = (output: any, context: __SerdeContext): OAuth2Properties => {
  return {
    oAuth2GrantType: __expectString(output.oAuth2GrantType),
    tokenUrl: __expectString(output.tokenUrl),
    tokenUrlCustomProperties:
      output.tokenUrlCustomProperties != null
        ? de_TokenUrlCustomProperties(output.tokenUrlCustomProperties, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1OAuthProperties
 */
const de_OAuthProperties = (output: any, context: __SerdeContext): OAuthProperties => {
  return {
    authCodeUrl: __expectString(output.authCodeUrl),
    oAuthScopes: output.oAuthScopes != null ? de_OAuthScopeList(output.oAuthScopes, context) : undefined,
    tokenUrl: __expectString(output.tokenUrl),
  } as any;
};

/**
 * deserializeAws_restJson1OAuthScopeList
 */
const de_OAuthScopeList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1PardotConnectorProfileProperties
 */
const de_PardotConnectorProfileProperties = (
  output: any,
  context: __SerdeContext
): PardotConnectorProfileProperties => {
  return {
    businessUnitId: __expectString(output.businessUnitId),
    instanceUrl: __expectString(output.instanceUrl),
    isSandboxEnvironment: __expectBoolean(output.isSandboxEnvironment),
  } as any;
};

/**
 * deserializeAws_restJson1PardotMetadata
 */
const de_PardotMetadata = (output: any, context: __SerdeContext): PardotMetadata => {
  return {} as any;
};

/**
 * deserializeAws_restJson1PardotSourceProperties
 */
const de_PardotSourceProperties = (output: any, context: __SerdeContext): PardotSourceProperties => {
  return {
    object: __expectString(output.object),
  } as any;
};

/**
 * deserializeAws_restJson1PathPrefixHierarchy
 */
const de_PathPrefixHierarchy = (output: any, context: __SerdeContext): (PathPrefix | string)[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1PrefixConfig
 */
const de_PrefixConfig = (output: any, context: __SerdeContext): PrefixConfig => {
  return {
    pathPrefixHierarchy:
      output.pathPrefixHierarchy != null ? de_PathPrefixHierarchy(output.pathPrefixHierarchy, context) : undefined,
    prefixFormat: __expectString(output.prefixFormat),
    prefixType: __expectString(output.prefixType),
  } as any;
};

/**
 * deserializeAws_restJson1PrivateConnectionProvisioningState
 */
const de_PrivateConnectionProvisioningState = (
  output: any,
  context: __SerdeContext
): PrivateConnectionProvisioningState => {
  return {
    failureCause: __expectString(output.failureCause),
    failureMessage: __expectString(output.failureMessage),
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_restJson1ProfilePropertiesMap
 */
const de_ProfilePropertiesMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1Range
 */
const de_Range = (output: any, context: __SerdeContext): Range => {
  return {
    maximum: __limitedParseDouble(output.maximum),
    minimum: __limitedParseDouble(output.minimum),
  } as any;
};

/**
 * deserializeAws_restJson1RedshiftConnectorProfileProperties
 */
const de_RedshiftConnectorProfileProperties = (
  output: any,
  context: __SerdeContext
): RedshiftConnectorProfileProperties => {
  return {
    bucketName: __expectString(output.bucketName),
    bucketPrefix: __expectString(output.bucketPrefix),
    clusterIdentifier: __expectString(output.clusterIdentifier),
    dataApiRoleArn: __expectString(output.dataApiRoleArn),
    databaseName: __expectString(output.databaseName),
    databaseUrl: __expectString(output.databaseUrl),
    isRedshiftServerless: __expectBoolean(output.isRedshiftServerless),
    roleArn: __expectString(output.roleArn),
    workgroupName: __expectString(output.workgroupName),
  } as any;
};

/**
 * deserializeAws_restJson1RedshiftDestinationProperties
 */
const de_RedshiftDestinationProperties = (output: any, context: __SerdeContext): RedshiftDestinationProperties => {
  return {
    bucketPrefix: __expectString(output.bucketPrefix),
    errorHandlingConfig:
      output.errorHandlingConfig != null ? de_ErrorHandlingConfig(output.errorHandlingConfig, context) : undefined,
    intermediateBucketName: __expectString(output.intermediateBucketName),
    object: __expectString(output.object),
  } as any;
};

/**
 * deserializeAws_restJson1RedshiftMetadata
 */
const de_RedshiftMetadata = (output: any, context: __SerdeContext): RedshiftMetadata => {
  return {} as any;
};

/**
 * deserializeAws_restJson1RegionList
 */
const de_RegionList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1RegistrationOutput
 */
const de_RegistrationOutput = (output: any, context: __SerdeContext): RegistrationOutput => {
  return {
    message: __expectString(output.message),
    result: __expectString(output.result),
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_restJson1S3DestinationProperties
 */
const de_S3DestinationProperties = (output: any, context: __SerdeContext): S3DestinationProperties => {
  return {
    bucketName: __expectString(output.bucketName),
    bucketPrefix: __expectString(output.bucketPrefix),
    s3OutputFormatConfig:
      output.s3OutputFormatConfig != null ? de_S3OutputFormatConfig(output.s3OutputFormatConfig, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1S3InputFormatConfig
 */
const de_S3InputFormatConfig = (output: any, context: __SerdeContext): S3InputFormatConfig => {
  return {
    s3InputFileType: __expectString(output.s3InputFileType),
  } as any;
};

/**
 * deserializeAws_restJson1S3Metadata
 */
const de_S3Metadata = (output: any, context: __SerdeContext): S3Metadata => {
  return {} as any;
};

/**
 * deserializeAws_restJson1S3OutputFormatConfig
 */
const de_S3OutputFormatConfig = (output: any, context: __SerdeContext): S3OutputFormatConfig => {
  return {
    aggregationConfig:
      output.aggregationConfig != null ? de_AggregationConfig(output.aggregationConfig, context) : undefined,
    fileType: __expectString(output.fileType),
    prefixConfig: output.prefixConfig != null ? de_PrefixConfig(output.prefixConfig, context) : undefined,
    preserveSourceDataTyping: __expectBoolean(output.preserveSourceDataTyping),
  } as any;
};

/**
 * deserializeAws_restJson1S3SourceProperties
 */
const de_S3SourceProperties = (output: any, context: __SerdeContext): S3SourceProperties => {
  return {
    bucketName: __expectString(output.bucketName),
    bucketPrefix: __expectString(output.bucketPrefix),
    s3InputFormatConfig:
      output.s3InputFormatConfig != null ? de_S3InputFormatConfig(output.s3InputFormatConfig, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1SalesforceConnectorProfileProperties
 */
const de_SalesforceConnectorProfileProperties = (
  output: any,
  context: __SerdeContext
): SalesforceConnectorProfileProperties => {
  return {
    instanceUrl: __expectString(output.instanceUrl),
    isSandboxEnvironment: __expectBoolean(output.isSandboxEnvironment),
    usePrivateLinkForMetadataAndAuthorization: __expectBoolean(output.usePrivateLinkForMetadataAndAuthorization),
  } as any;
};

/**
 * deserializeAws_restJson1SalesforceDataTransferApiList
 */
const de_SalesforceDataTransferApiList = (
  output: any,
  context: __SerdeContext
): (SalesforceDataTransferApi | string)[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SalesforceDestinationProperties
 */
const de_SalesforceDestinationProperties = (output: any, context: __SerdeContext): SalesforceDestinationProperties => {
  return {
    dataTransferApi: __expectString(output.dataTransferApi),
    errorHandlingConfig:
      output.errorHandlingConfig != null ? de_ErrorHandlingConfig(output.errorHandlingConfig, context) : undefined,
    idFieldNames: output.idFieldNames != null ? de_IdFieldNameList(output.idFieldNames, context) : undefined,
    object: __expectString(output.object),
    writeOperationType: __expectString(output.writeOperationType),
  } as any;
};

/**
 * deserializeAws_restJson1SalesforceMetadata
 */
const de_SalesforceMetadata = (output: any, context: __SerdeContext): SalesforceMetadata => {
  return {
    dataTransferApis:
      output.dataTransferApis != null ? de_SalesforceDataTransferApiList(output.dataTransferApis, context) : undefined,
    oAuthScopes: output.oAuthScopes != null ? de_OAuthScopeList(output.oAuthScopes, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1SalesforceSourceProperties
 */
const de_SalesforceSourceProperties = (output: any, context: __SerdeContext): SalesforceSourceProperties => {
  return {
    dataTransferApi: __expectString(output.dataTransferApi),
    enableDynamicFieldUpdate: __expectBoolean(output.enableDynamicFieldUpdate),
    includeDeletedRecords: __expectBoolean(output.includeDeletedRecords),
    object: __expectString(output.object),
  } as any;
};

/**
 * deserializeAws_restJson1SAPODataConnectorProfileProperties
 */
const de_SAPODataConnectorProfileProperties = (
  output: any,
  context: __SerdeContext
): SAPODataConnectorProfileProperties => {
  return {
    applicationHostUrl: __expectString(output.applicationHostUrl),
    applicationServicePath: __expectString(output.applicationServicePath),
    clientNumber: __expectString(output.clientNumber),
    logonLanguage: __expectString(output.logonLanguage),
    oAuthProperties: output.oAuthProperties != null ? de_OAuthProperties(output.oAuthProperties, context) : undefined,
    portNumber: __expectInt32(output.portNumber),
    privateLinkServiceName: __expectString(output.privateLinkServiceName),
  } as any;
};

/**
 * deserializeAws_restJson1SAPODataDestinationProperties
 */
const de_SAPODataDestinationProperties = (output: any, context: __SerdeContext): SAPODataDestinationProperties => {
  return {
    errorHandlingConfig:
      output.errorHandlingConfig != null ? de_ErrorHandlingConfig(output.errorHandlingConfig, context) : undefined,
    idFieldNames: output.idFieldNames != null ? de_IdFieldNameList(output.idFieldNames, context) : undefined,
    objectPath: __expectString(output.objectPath),
    successResponseHandlingConfig:
      output.successResponseHandlingConfig != null
        ? de_SuccessResponseHandlingConfig(output.successResponseHandlingConfig, context)
        : undefined,
    writeOperationType: __expectString(output.writeOperationType),
  } as any;
};

/**
 * deserializeAws_restJson1SAPODataMetadata
 */
const de_SAPODataMetadata = (output: any, context: __SerdeContext): SAPODataMetadata => {
  return {} as any;
};

/**
 * deserializeAws_restJson1SAPODataSourceProperties
 */
const de_SAPODataSourceProperties = (output: any, context: __SerdeContext): SAPODataSourceProperties => {
  return {
    objectPath: __expectString(output.objectPath),
  } as any;
};

/**
 * deserializeAws_restJson1ScheduledTriggerProperties
 */
const de_ScheduledTriggerProperties = (output: any, context: __SerdeContext): ScheduledTriggerProperties => {
  return {
    dataPullMode: __expectString(output.dataPullMode),
    firstExecutionFrom:
      output.firstExecutionFrom != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.firstExecutionFrom)))
        : undefined,
    flowErrorDeactivationThreshold: __expectInt32(output.flowErrorDeactivationThreshold),
    scheduleEndTime:
      output.scheduleEndTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.scheduleEndTime)))
        : undefined,
    scheduleExpression: __expectString(output.scheduleExpression),
    scheduleOffset: __expectLong(output.scheduleOffset),
    scheduleStartTime:
      output.scheduleStartTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.scheduleStartTime)))
        : undefined,
    timezone: __expectString(output.timezone),
  } as any;
};

/**
 * deserializeAws_restJson1SchedulingFrequencyTypeList
 */
const de_SchedulingFrequencyTypeList = (output: any, context: __SerdeContext): (ScheduleFrequencyType | string)[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ServiceNowConnectorProfileProperties
 */
const de_ServiceNowConnectorProfileProperties = (
  output: any,
  context: __SerdeContext
): ServiceNowConnectorProfileProperties => {
  return {
    instanceUrl: __expectString(output.instanceUrl),
  } as any;
};

/**
 * deserializeAws_restJson1ServiceNowMetadata
 */
const de_ServiceNowMetadata = (output: any, context: __SerdeContext): ServiceNowMetadata => {
  return {} as any;
};

/**
 * deserializeAws_restJson1ServiceNowSourceProperties
 */
const de_ServiceNowSourceProperties = (output: any, context: __SerdeContext): ServiceNowSourceProperties => {
  return {
    object: __expectString(output.object),
  } as any;
};

/**
 * deserializeAws_restJson1SingularConnectorProfileProperties
 */
const de_SingularConnectorProfileProperties = (
  output: any,
  context: __SerdeContext
): SingularConnectorProfileProperties => {
  return {} as any;
};

/**
 * deserializeAws_restJson1SingularMetadata
 */
const de_SingularMetadata = (output: any, context: __SerdeContext): SingularMetadata => {
  return {} as any;
};

/**
 * deserializeAws_restJson1SingularSourceProperties
 */
const de_SingularSourceProperties = (output: any, context: __SerdeContext): SingularSourceProperties => {
  return {
    object: __expectString(output.object),
  } as any;
};

/**
 * deserializeAws_restJson1SlackConnectorProfileProperties
 */
const de_SlackConnectorProfileProperties = (output: any, context: __SerdeContext): SlackConnectorProfileProperties => {
  return {
    instanceUrl: __expectString(output.instanceUrl),
  } as any;
};

/**
 * deserializeAws_restJson1SlackMetadata
 */
const de_SlackMetadata = (output: any, context: __SerdeContext): SlackMetadata => {
  return {
    oAuthScopes: output.oAuthScopes != null ? de_OAuthScopeList(output.oAuthScopes, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1SlackSourceProperties
 */
const de_SlackSourceProperties = (output: any, context: __SerdeContext): SlackSourceProperties => {
  return {
    object: __expectString(output.object),
  } as any;
};

/**
 * deserializeAws_restJson1SnowflakeConnectorProfileProperties
 */
const de_SnowflakeConnectorProfileProperties = (
  output: any,
  context: __SerdeContext
): SnowflakeConnectorProfileProperties => {
  return {
    accountName: __expectString(output.accountName),
    bucketName: __expectString(output.bucketName),
    bucketPrefix: __expectString(output.bucketPrefix),
    privateLinkServiceName: __expectString(output.privateLinkServiceName),
    region: __expectString(output.region),
    stage: __expectString(output.stage),
    warehouse: __expectString(output.warehouse),
  } as any;
};

/**
 * deserializeAws_restJson1SnowflakeDestinationProperties
 */
const de_SnowflakeDestinationProperties = (output: any, context: __SerdeContext): SnowflakeDestinationProperties => {
  return {
    bucketPrefix: __expectString(output.bucketPrefix),
    errorHandlingConfig:
      output.errorHandlingConfig != null ? de_ErrorHandlingConfig(output.errorHandlingConfig, context) : undefined,
    intermediateBucketName: __expectString(output.intermediateBucketName),
    object: __expectString(output.object),
  } as any;
};

/**
 * deserializeAws_restJson1SnowflakeMetadata
 */
const de_SnowflakeMetadata = (output: any, context: __SerdeContext): SnowflakeMetadata => {
  return {
    supportedRegions: output.supportedRegions != null ? de_RegionList(output.supportedRegions, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1SourceConnectorProperties
 */
const de_SourceConnectorProperties = (output: any, context: __SerdeContext): SourceConnectorProperties => {
  return {
    Amplitude: output.Amplitude != null ? de_AmplitudeSourceProperties(output.Amplitude, context) : undefined,
    CustomConnector:
      output.CustomConnector != null ? de_CustomConnectorSourceProperties(output.CustomConnector, context) : undefined,
    Datadog: output.Datadog != null ? de_DatadogSourceProperties(output.Datadog, context) : undefined,
    Dynatrace: output.Dynatrace != null ? de_DynatraceSourceProperties(output.Dynatrace, context) : undefined,
    GoogleAnalytics:
      output.GoogleAnalytics != null ? de_GoogleAnalyticsSourceProperties(output.GoogleAnalytics, context) : undefined,
    InforNexus: output.InforNexus != null ? de_InforNexusSourceProperties(output.InforNexus, context) : undefined,
    Marketo: output.Marketo != null ? de_MarketoSourceProperties(output.Marketo, context) : undefined,
    Pardot: output.Pardot != null ? de_PardotSourceProperties(output.Pardot, context) : undefined,
    S3: output.S3 != null ? de_S3SourceProperties(output.S3, context) : undefined,
    SAPOData: output.SAPOData != null ? de_SAPODataSourceProperties(output.SAPOData, context) : undefined,
    Salesforce: output.Salesforce != null ? de_SalesforceSourceProperties(output.Salesforce, context) : undefined,
    ServiceNow: output.ServiceNow != null ? de_ServiceNowSourceProperties(output.ServiceNow, context) : undefined,
    Singular: output.Singular != null ? de_SingularSourceProperties(output.Singular, context) : undefined,
    Slack: output.Slack != null ? de_SlackSourceProperties(output.Slack, context) : undefined,
    Trendmicro: output.Trendmicro != null ? de_TrendmicroSourceProperties(output.Trendmicro, context) : undefined,
    Veeva: output.Veeva != null ? de_VeevaSourceProperties(output.Veeva, context) : undefined,
    Zendesk: output.Zendesk != null ? de_ZendeskSourceProperties(output.Zendesk, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1SourceFieldProperties
 */
const de_SourceFieldProperties = (output: any, context: __SerdeContext): SourceFieldProperties => {
  return {
    isQueryable: __expectBoolean(output.isQueryable),
    isRetrievable: __expectBoolean(output.isRetrievable),
    isTimestampFieldForIncrementalQueries: __expectBoolean(output.isTimestampFieldForIncrementalQueries),
  } as any;
};

/**
 * deserializeAws_restJson1SourceFields
 */
const de_SourceFields = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SourceFlowConfig
 */
const de_SourceFlowConfig = (output: any, context: __SerdeContext): SourceFlowConfig => {
  return {
    apiVersion: __expectString(output.apiVersion),
    connectorProfileName: __expectString(output.connectorProfileName),
    connectorType: __expectString(output.connectorType),
    incrementalPullConfig:
      output.incrementalPullConfig != null
        ? de_IncrementalPullConfig(output.incrementalPullConfig, context)
        : undefined,
    sourceConnectorProperties:
      output.sourceConnectorProperties != null
        ? de_SourceConnectorProperties(output.sourceConnectorProperties, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1SuccessResponseHandlingConfig
 */
const de_SuccessResponseHandlingConfig = (output: any, context: __SerdeContext): SuccessResponseHandlingConfig => {
  return {
    bucketName: __expectString(output.bucketName),
    bucketPrefix: __expectString(output.bucketPrefix),
  } as any;
};

/**
 * deserializeAws_restJson1SupportedApiVersionList
 */
const de_SupportedApiVersionList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SupportedFieldTypeDetails
 */
const de_SupportedFieldTypeDetails = (output: any, context: __SerdeContext): SupportedFieldTypeDetails => {
  return {
    v1: output.v1 != null ? de_FieldTypeDetails(output.v1, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1SupportedOperatorList
 */
const de_SupportedOperatorList = (output: any, context: __SerdeContext): (Operators | string)[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SupportedValueList
 */
const de_SupportedValueList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SupportedWriteOperationList
 */
const de_SupportedWriteOperationList = (output: any, context: __SerdeContext): (WriteOperationType | string)[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1TagMap
 */
const de_TagMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1Task
 */
const de_Task = (output: any, context: __SerdeContext): Task => {
  return {
    connectorOperator:
      output.connectorOperator != null ? de_ConnectorOperator(output.connectorOperator, context) : undefined,
    destinationField: __expectString(output.destinationField),
    sourceFields: output.sourceFields != null ? de_SourceFields(output.sourceFields, context) : undefined,
    taskProperties: output.taskProperties != null ? de_TaskPropertiesMap(output.taskProperties, context) : undefined,
    taskType: __expectString(output.taskType),
  } as any;
};

/**
 * deserializeAws_restJson1TaskPropertiesMap
 */
const de_TaskPropertiesMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce(
    (acc: Record<string, string>, [key, value]: [OperatorPropertiesKeys | string, any]) => {
      if (value === null) {
        return acc;
      }
      acc[key] = __expectString(value) as any;
      return acc;
    },
    {}
  );
};

/**
 * deserializeAws_restJson1Tasks
 */
const de_Tasks = (output: any, context: __SerdeContext): Task[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Task(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1TokenUrlCustomProperties
 */
const de_TokenUrlCustomProperties = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1TokenUrlList
 */
const de_TokenUrlList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1TrendmicroConnectorProfileProperties
 */
const de_TrendmicroConnectorProfileProperties = (
  output: any,
  context: __SerdeContext
): TrendmicroConnectorProfileProperties => {
  return {} as any;
};

/**
 * deserializeAws_restJson1TrendmicroMetadata
 */
const de_TrendmicroMetadata = (output: any, context: __SerdeContext): TrendmicroMetadata => {
  return {} as any;
};

/**
 * deserializeAws_restJson1TrendmicroSourceProperties
 */
const de_TrendmicroSourceProperties = (output: any, context: __SerdeContext): TrendmicroSourceProperties => {
  return {
    object: __expectString(output.object),
  } as any;
};

/**
 * deserializeAws_restJson1TriggerConfig
 */
const de_TriggerConfig = (output: any, context: __SerdeContext): TriggerConfig => {
  return {
    triggerProperties:
      output.triggerProperties != null ? de_TriggerProperties(output.triggerProperties, context) : undefined,
    triggerType: __expectString(output.triggerType),
  } as any;
};

/**
 * deserializeAws_restJson1TriggerProperties
 */
const de_TriggerProperties = (output: any, context: __SerdeContext): TriggerProperties => {
  return {
    Scheduled: output.Scheduled != null ? de_ScheduledTriggerProperties(output.Scheduled, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1TriggerTypeList
 */
const de_TriggerTypeList = (output: any, context: __SerdeContext): (TriggerType | string)[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1UpsolverDestinationProperties
 */
const de_UpsolverDestinationProperties = (output: any, context: __SerdeContext): UpsolverDestinationProperties => {
  return {
    bucketName: __expectString(output.bucketName),
    bucketPrefix: __expectString(output.bucketPrefix),
    s3OutputFormatConfig:
      output.s3OutputFormatConfig != null
        ? de_UpsolverS3OutputFormatConfig(output.s3OutputFormatConfig, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1UpsolverMetadata
 */
const de_UpsolverMetadata = (output: any, context: __SerdeContext): UpsolverMetadata => {
  return {} as any;
};

/**
 * deserializeAws_restJson1UpsolverS3OutputFormatConfig
 */
const de_UpsolverS3OutputFormatConfig = (output: any, context: __SerdeContext): UpsolverS3OutputFormatConfig => {
  return {
    aggregationConfig:
      output.aggregationConfig != null ? de_AggregationConfig(output.aggregationConfig, context) : undefined,
    fileType: __expectString(output.fileType),
    prefixConfig: output.prefixConfig != null ? de_PrefixConfig(output.prefixConfig, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1VeevaConnectorProfileProperties
 */
const de_VeevaConnectorProfileProperties = (output: any, context: __SerdeContext): VeevaConnectorProfileProperties => {
  return {
    instanceUrl: __expectString(output.instanceUrl),
  } as any;
};

/**
 * deserializeAws_restJson1VeevaMetadata
 */
const de_VeevaMetadata = (output: any, context: __SerdeContext): VeevaMetadata => {
  return {} as any;
};

/**
 * deserializeAws_restJson1VeevaSourceProperties
 */
const de_VeevaSourceProperties = (output: any, context: __SerdeContext): VeevaSourceProperties => {
  return {
    documentType: __expectString(output.documentType),
    includeAllVersions: __expectBoolean(output.includeAllVersions),
    includeRenditions: __expectBoolean(output.includeRenditions),
    includeSourceFiles: __expectBoolean(output.includeSourceFiles),
    object: __expectString(output.object),
  } as any;
};

/**
 * deserializeAws_restJson1ZendeskConnectorProfileProperties
 */
const de_ZendeskConnectorProfileProperties = (
  output: any,
  context: __SerdeContext
): ZendeskConnectorProfileProperties => {
  return {
    instanceUrl: __expectString(output.instanceUrl),
  } as any;
};

/**
 * deserializeAws_restJson1ZendeskDestinationProperties
 */
const de_ZendeskDestinationProperties = (output: any, context: __SerdeContext): ZendeskDestinationProperties => {
  return {
    errorHandlingConfig:
      output.errorHandlingConfig != null ? de_ErrorHandlingConfig(output.errorHandlingConfig, context) : undefined,
    idFieldNames: output.idFieldNames != null ? de_IdFieldNameList(output.idFieldNames, context) : undefined,
    object: __expectString(output.object),
    writeOperationType: __expectString(output.writeOperationType),
  } as any;
};

/**
 * deserializeAws_restJson1ZendeskMetadata
 */
const de_ZendeskMetadata = (output: any, context: __SerdeContext): ZendeskMetadata => {
  return {
    oAuthScopes: output.oAuthScopes != null ? de_OAuthScopeList(output.oAuthScopes, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ZendeskSourceProperties
 */
const de_ZendeskSourceProperties = (output: any, context: __SerdeContext): ZendeskSourceProperties => {
  return {
    object: __expectString(output.object),
  } as any;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (streamBody: any = new Uint8Array(), context: __SerdeContext): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

const isSerializableHeaderValue = (value: any): boolean =>
  value !== undefined &&
  value !== null &&
  value !== "" &&
  (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
  (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });

const parseErrorBody = async (errorBody: any, context: __SerdeContext) => {
  const value = await parseBody(errorBody, context);
  value.message = value.message ?? value.Message;
  return value;
};

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string | undefined => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string | number): string => {
    let cleanValue = rawValue;
    if (typeof cleanValue === "number") {
      cleanValue = cleanValue.toString();
    }
    if (cleanValue.indexOf(",") >= 0) {
      cleanValue = cleanValue.split(",")[0];
    }
    if (cleanValue.indexOf(":") >= 0) {
      cleanValue = cleanValue.split(":")[0];
    }
    if (cleanValue.indexOf("#") >= 0) {
      cleanValue = cleanValue.split("#")[1];
    }
    return cleanValue;
  };

  const headerKey = findKey(output.headers, "x-amzn-errortype");
  if (headerKey !== undefined) {
    return sanitizeErrorCode(output.headers[headerKey]);
  }

  if (data.code !== undefined) {
    return sanitizeErrorCode(data.code);
  }

  if (data["__type"] !== undefined) {
    return sanitizeErrorCode(data["__type"]);
  }
};
