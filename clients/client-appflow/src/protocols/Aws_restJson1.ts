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

export const serializeAws_restJson1CreateConnectorProfileCommand = async (
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
      connectorProfileConfig: serializeAws_restJson1ConnectorProfileConfig(input.connectorProfileConfig, context),
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

export const serializeAws_restJson1CreateFlowCommand = async (
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
      destinationFlowConfigList: serializeAws_restJson1DestinationFlowConfigList(
        input.destinationFlowConfigList,
        context
      ),
    }),
    ...(input.flowName != null && { flowName: input.flowName }),
    ...(input.kmsArn != null && { kmsArn: input.kmsArn }),
    ...(input.metadataCatalogConfig != null && {
      metadataCatalogConfig: serializeAws_restJson1MetadataCatalogConfig(input.metadataCatalogConfig, context),
    }),
    ...(input.sourceFlowConfig != null && {
      sourceFlowConfig: serializeAws_restJson1SourceFlowConfig(input.sourceFlowConfig, context),
    }),
    ...(input.tags != null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
    ...(input.tasks != null && { tasks: serializeAws_restJson1Tasks(input.tasks, context) }),
    ...(input.triggerConfig != null && {
      triggerConfig: serializeAws_restJson1TriggerConfig(input.triggerConfig, context),
    }),
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

export const serializeAws_restJson1DeleteConnectorProfileCommand = async (
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

export const serializeAws_restJson1DeleteFlowCommand = async (
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

export const serializeAws_restJson1DescribeConnectorCommand = async (
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

export const serializeAws_restJson1DescribeConnectorEntityCommand = async (
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

export const serializeAws_restJson1DescribeConnectorProfilesCommand = async (
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
      connectorProfileNames: serializeAws_restJson1ConnectorProfileNameList(input.connectorProfileNames, context),
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

export const serializeAws_restJson1DescribeConnectorsCommand = async (
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
    ...(input.connectorTypes != null && {
      connectorTypes: serializeAws_restJson1ConnectorTypeList(input.connectorTypes, context),
    }),
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

export const serializeAws_restJson1DescribeFlowCommand = async (
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

export const serializeAws_restJson1DescribeFlowExecutionRecordsCommand = async (
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

export const serializeAws_restJson1ListConnectorEntitiesCommand = async (
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

export const serializeAws_restJson1ListConnectorsCommand = async (
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

export const serializeAws_restJson1ListFlowsCommand = async (
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

export const serializeAws_restJson1ListTagsForResourceCommand = async (
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

export const serializeAws_restJson1RegisterConnectorCommand = async (
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
      connectorProvisioningConfig: serializeAws_restJson1ConnectorProvisioningConfig(
        input.connectorProvisioningConfig,
        context
      ),
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

export const serializeAws_restJson1StartFlowCommand = async (
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

export const serializeAws_restJson1StopFlowCommand = async (
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

export const serializeAws_restJson1TagResourceCommand = async (
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
    ...(input.tags != null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
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

export const serializeAws_restJson1UnregisterConnectorCommand = async (
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

export const serializeAws_restJson1UntagResourceCommand = async (
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

export const serializeAws_restJson1UpdateConnectorProfileCommand = async (
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
      connectorProfileConfig: serializeAws_restJson1ConnectorProfileConfig(input.connectorProfileConfig, context),
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

export const serializeAws_restJson1UpdateConnectorRegistrationCommand = async (
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
      connectorProvisioningConfig: serializeAws_restJson1ConnectorProvisioningConfig(
        input.connectorProvisioningConfig,
        context
      ),
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

export const serializeAws_restJson1UpdateFlowCommand = async (
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
      destinationFlowConfigList: serializeAws_restJson1DestinationFlowConfigList(
        input.destinationFlowConfigList,
        context
      ),
    }),
    ...(input.flowName != null && { flowName: input.flowName }),
    ...(input.metadataCatalogConfig != null && {
      metadataCatalogConfig: serializeAws_restJson1MetadataCatalogConfig(input.metadataCatalogConfig, context),
    }),
    ...(input.sourceFlowConfig != null && {
      sourceFlowConfig: serializeAws_restJson1SourceFlowConfig(input.sourceFlowConfig, context),
    }),
    ...(input.tasks != null && { tasks: serializeAws_restJson1Tasks(input.tasks, context) }),
    ...(input.triggerConfig != null && {
      triggerConfig: serializeAws_restJson1TriggerConfig(input.triggerConfig, context),
    }),
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

export const deserializeAws_restJson1CreateConnectorProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConnectorProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateConnectorProfileCommandError(output, context);
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

const deserializeAws_restJson1CreateConnectorProfileCommandError = async (
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
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ConnectorAuthenticationException":
    case "com.amazonaws.appflow#ConnectorAuthenticationException":
      throw await deserializeAws_restJson1ConnectorAuthenticationExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appflow#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.appflow#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.appflow#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateFlowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFlowCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateFlowCommandError(output, context);
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

const deserializeAws_restJson1CreateFlowCommandError = async (
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
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ConnectorAuthenticationException":
    case "com.amazonaws.appflow#ConnectorAuthenticationException":
      throw await deserializeAws_restJson1ConnectorAuthenticationExceptionResponse(parsedOutput, context);
    case "ConnectorServerException":
    case "com.amazonaws.appflow#ConnectorServerException":
      throw await deserializeAws_restJson1ConnectorServerExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appflow#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appflow#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.appflow#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.appflow#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteConnectorProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConnectorProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteConnectorProfileCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteConnectorProfileCommandError = async (
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
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appflow#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appflow#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteFlowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFlowCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteFlowCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteFlowCommandError = async (
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
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appflow#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appflow#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DescribeConnectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConnectorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeConnectorCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.connectorConfiguration != null) {
    contents.connectorConfiguration = deserializeAws_restJson1ConnectorConfiguration(
      data.connectorConfiguration,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1DescribeConnectorCommandError = async (
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
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appflow#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.appflow#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DescribeConnectorEntityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConnectorEntityCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeConnectorEntityCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.connectorEntityFields != null) {
    contents.connectorEntityFields = deserializeAws_restJson1ConnectorEntityFieldList(
      data.connectorEntityFields,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1DescribeConnectorEntityCommandError = async (
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
      throw await deserializeAws_restJson1ConnectorAuthenticationExceptionResponse(parsedOutput, context);
    case "ConnectorServerException":
    case "com.amazonaws.appflow#ConnectorServerException":
      throw await deserializeAws_restJson1ConnectorServerExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appflow#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appflow#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.appflow#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DescribeConnectorProfilesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConnectorProfilesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeConnectorProfilesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.connectorProfileDetails != null) {
    contents.connectorProfileDetails = deserializeAws_restJson1ConnectorProfileDetailList(
      data.connectorProfileDetails,
      context
    );
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1DescribeConnectorProfilesCommandError = async (
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
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.appflow#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DescribeConnectorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConnectorsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeConnectorsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.connectorConfigurations != null) {
    contents.connectorConfigurations = deserializeAws_restJson1ConnectorConfigurationsMap(
      data.connectorConfigurations,
      context
    );
  }
  if (data.connectors != null) {
    contents.connectors = deserializeAws_restJson1ConnectorList(data.connectors, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1DescribeConnectorsCommandError = async (
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
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.appflow#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DescribeFlowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFlowCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeFlowCommandError(output, context);
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
    contents.destinationFlowConfigList = deserializeAws_restJson1DestinationFlowConfigList(
      data.destinationFlowConfigList,
      context
    );
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
    contents.lastRunExecutionDetails = deserializeAws_restJson1ExecutionDetails(data.lastRunExecutionDetails, context);
  }
  if (data.lastRunMetadataCatalogDetails != null) {
    contents.lastRunMetadataCatalogDetails = deserializeAws_restJson1MetadataCatalogDetails(
      data.lastRunMetadataCatalogDetails,
      context
    );
  }
  if (data.lastUpdatedAt != null) {
    contents.lastUpdatedAt = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.lastUpdatedAt)));
  }
  if (data.lastUpdatedBy != null) {
    contents.lastUpdatedBy = __expectString(data.lastUpdatedBy);
  }
  if (data.metadataCatalogConfig != null) {
    contents.metadataCatalogConfig = deserializeAws_restJson1MetadataCatalogConfig(data.metadataCatalogConfig, context);
  }
  if (data.schemaVersion != null) {
    contents.schemaVersion = __expectLong(data.schemaVersion);
  }
  if (data.sourceFlowConfig != null) {
    contents.sourceFlowConfig = deserializeAws_restJson1SourceFlowConfig(data.sourceFlowConfig, context);
  }
  if (data.tags != null) {
    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  if (data.tasks != null) {
    contents.tasks = deserializeAws_restJson1Tasks(data.tasks, context);
  }
  if (data.triggerConfig != null) {
    contents.triggerConfig = deserializeAws_restJson1TriggerConfig(data.triggerConfig, context);
  }
  return contents;
};

const deserializeAws_restJson1DescribeFlowCommandError = async (
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
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appflow#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DescribeFlowExecutionRecordsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFlowExecutionRecordsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeFlowExecutionRecordsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.flowExecutions != null) {
    contents.flowExecutions = deserializeAws_restJson1FlowExecutionList(data.flowExecutions, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1DescribeFlowExecutionRecordsCommandError = async (
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
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appflow#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.appflow#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListConnectorEntitiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConnectorEntitiesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListConnectorEntitiesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.connectorEntityMap != null) {
    contents.connectorEntityMap = deserializeAws_restJson1ConnectorEntityMap(data.connectorEntityMap, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListConnectorEntitiesCommandError = async (
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
      throw await deserializeAws_restJson1ConnectorAuthenticationExceptionResponse(parsedOutput, context);
    case "ConnectorServerException":
    case "com.amazonaws.appflow#ConnectorServerException":
      throw await deserializeAws_restJson1ConnectorServerExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appflow#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appflow#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.appflow#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListConnectorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConnectorsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListConnectorsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.connectors != null) {
    contents.connectors = deserializeAws_restJson1ConnectorList(data.connectors, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListConnectorsCommandError = async (
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
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.appflow#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListFlowsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFlowsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListFlowsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.flows != null) {
    contents.flows = deserializeAws_restJson1FlowList(data.flows, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListFlowsCommandError = async (
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
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.appflow#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListTagsForResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.tags != null) {
    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  return contents;
};

const deserializeAws_restJson1ListTagsForResourceCommandError = async (
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
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appflow#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.appflow#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1RegisterConnectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterConnectorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1RegisterConnectorCommandError(output, context);
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

const deserializeAws_restJson1RegisterConnectorCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.appflow#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ConnectorAuthenticationException":
    case "com.amazonaws.appflow#ConnectorAuthenticationException":
      throw await deserializeAws_restJson1ConnectorAuthenticationExceptionResponse(parsedOutput, context);
    case "ConnectorServerException":
    case "com.amazonaws.appflow#ConnectorServerException":
      throw await deserializeAws_restJson1ConnectorServerExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appflow#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appflow#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.appflow#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.appflow#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.appflow#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1StartFlowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartFlowCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartFlowCommandError(output, context);
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

const deserializeAws_restJson1StartFlowCommandError = async (
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
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appflow#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appflow#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.appflow#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1StopFlowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopFlowCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StopFlowCommandError(output, context);
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

const deserializeAws_restJson1StopFlowCommandError = async (
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
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appflow#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appflow#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.appflow#UnsupportedOperationException":
      throw await deserializeAws_restJson1UnsupportedOperationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1TagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1TagResourceCommandError = async (
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
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appflow#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.appflow#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UnregisterConnectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UnregisterConnectorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UnregisterConnectorCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UnregisterConnectorCommandError = async (
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
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appflow#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appflow#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UntagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UntagResourceCommandError = async (
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
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appflow#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.appflow#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateConnectorProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConnectorProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateConnectorProfileCommandError(output, context);
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

const deserializeAws_restJson1UpdateConnectorProfileCommandError = async (
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
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ConnectorAuthenticationException":
    case "com.amazonaws.appflow#ConnectorAuthenticationException":
      throw await deserializeAws_restJson1ConnectorAuthenticationExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appflow#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appflow#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.appflow#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateConnectorRegistrationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConnectorRegistrationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateConnectorRegistrationCommandError(output, context);
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

const deserializeAws_restJson1UpdateConnectorRegistrationCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.appflow#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ConnectorAuthenticationException":
    case "com.amazonaws.appflow#ConnectorAuthenticationException":
      throw await deserializeAws_restJson1ConnectorAuthenticationExceptionResponse(parsedOutput, context);
    case "ConnectorServerException":
    case "com.amazonaws.appflow#ConnectorServerException":
      throw await deserializeAws_restJson1ConnectorServerExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appflow#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appflow#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.appflow#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.appflow#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.appflow#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateFlowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFlowCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateFlowCommandError(output, context);
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

const deserializeAws_restJson1UpdateFlowCommandError = async (
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
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ConnectorAuthenticationException":
    case "com.amazonaws.appflow#ConnectorAuthenticationException":
      throw await deserializeAws_restJson1ConnectorAuthenticationExceptionResponse(parsedOutput, context);
    case "ConnectorServerException":
    case "com.amazonaws.appflow#ConnectorServerException":
      throw await deserializeAws_restJson1ConnectorServerExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appflow#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appflow#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.appflow#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.appflow#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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
const deserializeAws_restJson1AccessDeniedExceptionResponse = async (
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

const deserializeAws_restJson1ConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictException> => {
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

const deserializeAws_restJson1ConnectorAuthenticationExceptionResponse = async (
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

const deserializeAws_restJson1ConnectorServerExceptionResponse = async (
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

const deserializeAws_restJson1InternalServerExceptionResponse = async (
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

const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (
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

const deserializeAws_restJson1ServiceQuotaExceededExceptionResponse = async (
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

const deserializeAws_restJson1ThrottlingExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
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

const deserializeAws_restJson1UnsupportedOperationExceptionResponse = async (
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

const deserializeAws_restJson1ValidationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ValidationException> => {
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

const serializeAws_restJson1AggregationConfig = (input: AggregationConfig, context: __SerdeContext): any => {
  return {
    ...(input.aggregationType != null && { aggregationType: input.aggregationType }),
    ...(input.targetFileSize != null && { targetFileSize: input.targetFileSize }),
  };
};

const serializeAws_restJson1AmplitudeConnectorProfileCredentials = (
  input: AmplitudeConnectorProfileCredentials,
  context: __SerdeContext
): any => {
  return {
    ...(input.apiKey != null && { apiKey: input.apiKey }),
    ...(input.secretKey != null && { secretKey: input.secretKey }),
  };
};

const serializeAws_restJson1AmplitudeConnectorProfileProperties = (
  input: AmplitudeConnectorProfileProperties,
  context: __SerdeContext
): any => {
  return {};
};

const serializeAws_restJson1AmplitudeSourceProperties = (
  input: AmplitudeSourceProperties,
  context: __SerdeContext
): any => {
  return {
    ...(input.object != null && { object: input.object }),
  };
};

const serializeAws_restJson1ApiKeyCredentials = (input: ApiKeyCredentials, context: __SerdeContext): any => {
  return {
    ...(input.apiKey != null && { apiKey: input.apiKey }),
    ...(input.apiSecretKey != null && { apiSecretKey: input.apiSecretKey }),
  };
};

const serializeAws_restJson1BasicAuthCredentials = (input: BasicAuthCredentials, context: __SerdeContext): any => {
  return {
    ...(input.password != null && { password: input.password }),
    ...(input.username != null && { username: input.username }),
  };
};

const serializeAws_restJson1ConnectorOAuthRequest = (input: ConnectorOAuthRequest, context: __SerdeContext): any => {
  return {
    ...(input.authCode != null && { authCode: input.authCode }),
    ...(input.redirectUri != null && { redirectUri: input.redirectUri }),
  };
};

const serializeAws_restJson1ConnectorOperator = (input: ConnectorOperator, context: __SerdeContext): any => {
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

const serializeAws_restJson1ConnectorProfileConfig = (input: ConnectorProfileConfig, context: __SerdeContext): any => {
  return {
    ...(input.connectorProfileCredentials != null && {
      connectorProfileCredentials: serializeAws_restJson1ConnectorProfileCredentials(
        input.connectorProfileCredentials,
        context
      ),
    }),
    ...(input.connectorProfileProperties != null && {
      connectorProfileProperties: serializeAws_restJson1ConnectorProfileProperties(
        input.connectorProfileProperties,
        context
      ),
    }),
  };
};

const serializeAws_restJson1ConnectorProfileCredentials = (
  input: ConnectorProfileCredentials,
  context: __SerdeContext
): any => {
  return {
    ...(input.Amplitude != null && {
      Amplitude: serializeAws_restJson1AmplitudeConnectorProfileCredentials(input.Amplitude, context),
    }),
    ...(input.CustomConnector != null && {
      CustomConnector: serializeAws_restJson1CustomConnectorProfileCredentials(input.CustomConnector, context),
    }),
    ...(input.Datadog != null && {
      Datadog: serializeAws_restJson1DatadogConnectorProfileCredentials(input.Datadog, context),
    }),
    ...(input.Dynatrace != null && {
      Dynatrace: serializeAws_restJson1DynatraceConnectorProfileCredentials(input.Dynatrace, context),
    }),
    ...(input.GoogleAnalytics != null && {
      GoogleAnalytics: serializeAws_restJson1GoogleAnalyticsConnectorProfileCredentials(input.GoogleAnalytics, context),
    }),
    ...(input.Honeycode != null && {
      Honeycode: serializeAws_restJson1HoneycodeConnectorProfileCredentials(input.Honeycode, context),
    }),
    ...(input.InforNexus != null && {
      InforNexus: serializeAws_restJson1InforNexusConnectorProfileCredentials(input.InforNexus, context),
    }),
    ...(input.Marketo != null && {
      Marketo: serializeAws_restJson1MarketoConnectorProfileCredentials(input.Marketo, context),
    }),
    ...(input.Pardot != null && {
      Pardot: serializeAws_restJson1PardotConnectorProfileCredentials(input.Pardot, context),
    }),
    ...(input.Redshift != null && {
      Redshift: serializeAws_restJson1RedshiftConnectorProfileCredentials(input.Redshift, context),
    }),
    ...(input.SAPOData != null && {
      SAPOData: serializeAws_restJson1SAPODataConnectorProfileCredentials(input.SAPOData, context),
    }),
    ...(input.Salesforce != null && {
      Salesforce: serializeAws_restJson1SalesforceConnectorProfileCredentials(input.Salesforce, context),
    }),
    ...(input.ServiceNow != null && {
      ServiceNow: serializeAws_restJson1ServiceNowConnectorProfileCredentials(input.ServiceNow, context),
    }),
    ...(input.Singular != null && {
      Singular: serializeAws_restJson1SingularConnectorProfileCredentials(input.Singular, context),
    }),
    ...(input.Slack != null && { Slack: serializeAws_restJson1SlackConnectorProfileCredentials(input.Slack, context) }),
    ...(input.Snowflake != null && {
      Snowflake: serializeAws_restJson1SnowflakeConnectorProfileCredentials(input.Snowflake, context),
    }),
    ...(input.Trendmicro != null && {
      Trendmicro: serializeAws_restJson1TrendmicroConnectorProfileCredentials(input.Trendmicro, context),
    }),
    ...(input.Veeva != null && { Veeva: serializeAws_restJson1VeevaConnectorProfileCredentials(input.Veeva, context) }),
    ...(input.Zendesk != null && {
      Zendesk: serializeAws_restJson1ZendeskConnectorProfileCredentials(input.Zendesk, context),
    }),
  };
};

const serializeAws_restJson1ConnectorProfileNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1ConnectorProfileProperties = (
  input: ConnectorProfileProperties,
  context: __SerdeContext
): any => {
  return {
    ...(input.Amplitude != null && {
      Amplitude: serializeAws_restJson1AmplitudeConnectorProfileProperties(input.Amplitude, context),
    }),
    ...(input.CustomConnector != null && {
      CustomConnector: serializeAws_restJson1CustomConnectorProfileProperties(input.CustomConnector, context),
    }),
    ...(input.Datadog != null && {
      Datadog: serializeAws_restJson1DatadogConnectorProfileProperties(input.Datadog, context),
    }),
    ...(input.Dynatrace != null && {
      Dynatrace: serializeAws_restJson1DynatraceConnectorProfileProperties(input.Dynatrace, context),
    }),
    ...(input.GoogleAnalytics != null && {
      GoogleAnalytics: serializeAws_restJson1GoogleAnalyticsConnectorProfileProperties(input.GoogleAnalytics, context),
    }),
    ...(input.Honeycode != null && {
      Honeycode: serializeAws_restJson1HoneycodeConnectorProfileProperties(input.Honeycode, context),
    }),
    ...(input.InforNexus != null && {
      InforNexus: serializeAws_restJson1InforNexusConnectorProfileProperties(input.InforNexus, context),
    }),
    ...(input.Marketo != null && {
      Marketo: serializeAws_restJson1MarketoConnectorProfileProperties(input.Marketo, context),
    }),
    ...(input.Pardot != null && {
      Pardot: serializeAws_restJson1PardotConnectorProfileProperties(input.Pardot, context),
    }),
    ...(input.Redshift != null && {
      Redshift: serializeAws_restJson1RedshiftConnectorProfileProperties(input.Redshift, context),
    }),
    ...(input.SAPOData != null && {
      SAPOData: serializeAws_restJson1SAPODataConnectorProfileProperties(input.SAPOData, context),
    }),
    ...(input.Salesforce != null && {
      Salesforce: serializeAws_restJson1SalesforceConnectorProfileProperties(input.Salesforce, context),
    }),
    ...(input.ServiceNow != null && {
      ServiceNow: serializeAws_restJson1ServiceNowConnectorProfileProperties(input.ServiceNow, context),
    }),
    ...(input.Singular != null && {
      Singular: serializeAws_restJson1SingularConnectorProfileProperties(input.Singular, context),
    }),
    ...(input.Slack != null && { Slack: serializeAws_restJson1SlackConnectorProfileProperties(input.Slack, context) }),
    ...(input.Snowflake != null && {
      Snowflake: serializeAws_restJson1SnowflakeConnectorProfileProperties(input.Snowflake, context),
    }),
    ...(input.Trendmicro != null && {
      Trendmicro: serializeAws_restJson1TrendmicroConnectorProfileProperties(input.Trendmicro, context),
    }),
    ...(input.Veeva != null && { Veeva: serializeAws_restJson1VeevaConnectorProfileProperties(input.Veeva, context) }),
    ...(input.Zendesk != null && {
      Zendesk: serializeAws_restJson1ZendeskConnectorProfileProperties(input.Zendesk, context),
    }),
  };
};

const serializeAws_restJson1ConnectorProvisioningConfig = (
  input: ConnectorProvisioningConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.lambda != null && {
      lambda: serializeAws_restJson1LambdaConnectorProvisioningConfig(input.lambda, context),
    }),
  };
};

const serializeAws_restJson1ConnectorTypeList = (input: (ConnectorType | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1CredentialsMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_restJson1CustomAuthCredentials = (input: CustomAuthCredentials, context: __SerdeContext): any => {
  return {
    ...(input.credentialsMap != null && {
      credentialsMap: serializeAws_restJson1CredentialsMap(input.credentialsMap, context),
    }),
    ...(input.customAuthenticationType != null && { customAuthenticationType: input.customAuthenticationType }),
  };
};

const serializeAws_restJson1CustomConnectorDestinationProperties = (
  input: CustomConnectorDestinationProperties,
  context: __SerdeContext
): any => {
  return {
    ...(input.customProperties != null && {
      customProperties: serializeAws_restJson1CustomProperties(input.customProperties, context),
    }),
    ...(input.entityName != null && { entityName: input.entityName }),
    ...(input.errorHandlingConfig != null && {
      errorHandlingConfig: serializeAws_restJson1ErrorHandlingConfig(input.errorHandlingConfig, context),
    }),
    ...(input.idFieldNames != null && {
      idFieldNames: serializeAws_restJson1IdFieldNameList(input.idFieldNames, context),
    }),
    ...(input.writeOperationType != null && { writeOperationType: input.writeOperationType }),
  };
};

const serializeAws_restJson1CustomConnectorProfileCredentials = (
  input: CustomConnectorProfileCredentials,
  context: __SerdeContext
): any => {
  return {
    ...(input.apiKey != null && { apiKey: serializeAws_restJson1ApiKeyCredentials(input.apiKey, context) }),
    ...(input.authenticationType != null && { authenticationType: input.authenticationType }),
    ...(input.basic != null && { basic: serializeAws_restJson1BasicAuthCredentials(input.basic, context) }),
    ...(input.custom != null && { custom: serializeAws_restJson1CustomAuthCredentials(input.custom, context) }),
    ...(input.oauth2 != null && { oauth2: serializeAws_restJson1OAuth2Credentials(input.oauth2, context) }),
  };
};

const serializeAws_restJson1CustomConnectorProfileProperties = (
  input: CustomConnectorProfileProperties,
  context: __SerdeContext
): any => {
  return {
    ...(input.oAuth2Properties != null && {
      oAuth2Properties: serializeAws_restJson1OAuth2Properties(input.oAuth2Properties, context),
    }),
    ...(input.profileProperties != null && {
      profileProperties: serializeAws_restJson1ProfilePropertiesMap(input.profileProperties, context),
    }),
  };
};

const serializeAws_restJson1CustomConnectorSourceProperties = (
  input: CustomConnectorSourceProperties,
  context: __SerdeContext
): any => {
  return {
    ...(input.customProperties != null && {
      customProperties: serializeAws_restJson1CustomProperties(input.customProperties, context),
    }),
    ...(input.entityName != null && { entityName: input.entityName }),
  };
};

const serializeAws_restJson1CustomerProfilesDestinationProperties = (
  input: CustomerProfilesDestinationProperties,
  context: __SerdeContext
): any => {
  return {
    ...(input.domainName != null && { domainName: input.domainName }),
    ...(input.objectTypeName != null && { objectTypeName: input.objectTypeName }),
  };
};

const serializeAws_restJson1CustomProperties = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_restJson1DatadogConnectorProfileCredentials = (
  input: DatadogConnectorProfileCredentials,
  context: __SerdeContext
): any => {
  return {
    ...(input.apiKey != null && { apiKey: input.apiKey }),
    ...(input.applicationKey != null && { applicationKey: input.applicationKey }),
  };
};

const serializeAws_restJson1DatadogConnectorProfileProperties = (
  input: DatadogConnectorProfileProperties,
  context: __SerdeContext
): any => {
  return {
    ...(input.instanceUrl != null && { instanceUrl: input.instanceUrl }),
  };
};

const serializeAws_restJson1DatadogSourceProperties = (
  input: DatadogSourceProperties,
  context: __SerdeContext
): any => {
  return {
    ...(input.object != null && { object: input.object }),
  };
};

const serializeAws_restJson1DestinationConnectorProperties = (
  input: DestinationConnectorProperties,
  context: __SerdeContext
): any => {
  return {
    ...(input.CustomConnector != null && {
      CustomConnector: serializeAws_restJson1CustomConnectorDestinationProperties(input.CustomConnector, context),
    }),
    ...(input.CustomerProfiles != null && {
      CustomerProfiles: serializeAws_restJson1CustomerProfilesDestinationProperties(input.CustomerProfiles, context),
    }),
    ...(input.EventBridge != null && {
      EventBridge: serializeAws_restJson1EventBridgeDestinationProperties(input.EventBridge, context),
    }),
    ...(input.Honeycode != null && {
      Honeycode: serializeAws_restJson1HoneycodeDestinationProperties(input.Honeycode, context),
    }),
    ...(input.LookoutMetrics != null && {
      LookoutMetrics: serializeAws_restJson1LookoutMetricsDestinationProperties(input.LookoutMetrics, context),
    }),
    ...(input.Marketo != null && {
      Marketo: serializeAws_restJson1MarketoDestinationProperties(input.Marketo, context),
    }),
    ...(input.Redshift != null && {
      Redshift: serializeAws_restJson1RedshiftDestinationProperties(input.Redshift, context),
    }),
    ...(input.S3 != null && { S3: serializeAws_restJson1S3DestinationProperties(input.S3, context) }),
    ...(input.SAPOData != null && {
      SAPOData: serializeAws_restJson1SAPODataDestinationProperties(input.SAPOData, context),
    }),
    ...(input.Salesforce != null && {
      Salesforce: serializeAws_restJson1SalesforceDestinationProperties(input.Salesforce, context),
    }),
    ...(input.Snowflake != null && {
      Snowflake: serializeAws_restJson1SnowflakeDestinationProperties(input.Snowflake, context),
    }),
    ...(input.Upsolver != null && {
      Upsolver: serializeAws_restJson1UpsolverDestinationProperties(input.Upsolver, context),
    }),
    ...(input.Zendesk != null && {
      Zendesk: serializeAws_restJson1ZendeskDestinationProperties(input.Zendesk, context),
    }),
  };
};

const serializeAws_restJson1DestinationFlowConfig = (input: DestinationFlowConfig, context: __SerdeContext): any => {
  return {
    ...(input.apiVersion != null && { apiVersion: input.apiVersion }),
    ...(input.connectorProfileName != null && { connectorProfileName: input.connectorProfileName }),
    ...(input.connectorType != null && { connectorType: input.connectorType }),
    ...(input.destinationConnectorProperties != null && {
      destinationConnectorProperties: serializeAws_restJson1DestinationConnectorProperties(
        input.destinationConnectorProperties,
        context
      ),
    }),
  };
};

const serializeAws_restJson1DestinationFlowConfigList = (
  input: DestinationFlowConfig[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1DestinationFlowConfig(entry, context);
    });
};

const serializeAws_restJson1DynatraceConnectorProfileCredentials = (
  input: DynatraceConnectorProfileCredentials,
  context: __SerdeContext
): any => {
  return {
    ...(input.apiToken != null && { apiToken: input.apiToken }),
  };
};

const serializeAws_restJson1DynatraceConnectorProfileProperties = (
  input: DynatraceConnectorProfileProperties,
  context: __SerdeContext
): any => {
  return {
    ...(input.instanceUrl != null && { instanceUrl: input.instanceUrl }),
  };
};

const serializeAws_restJson1DynatraceSourceProperties = (
  input: DynatraceSourceProperties,
  context: __SerdeContext
): any => {
  return {
    ...(input.object != null && { object: input.object }),
  };
};

const serializeAws_restJson1ErrorHandlingConfig = (input: ErrorHandlingConfig, context: __SerdeContext): any => {
  return {
    ...(input.bucketName != null && { bucketName: input.bucketName }),
    ...(input.bucketPrefix != null && { bucketPrefix: input.bucketPrefix }),
    ...(input.failOnFirstDestinationError != null && {
      failOnFirstDestinationError: input.failOnFirstDestinationError,
    }),
  };
};

const serializeAws_restJson1EventBridgeDestinationProperties = (
  input: EventBridgeDestinationProperties,
  context: __SerdeContext
): any => {
  return {
    ...(input.errorHandlingConfig != null && {
      errorHandlingConfig: serializeAws_restJson1ErrorHandlingConfig(input.errorHandlingConfig, context),
    }),
    ...(input.object != null && { object: input.object }),
  };
};

const serializeAws_restJson1GlueDataCatalogConfig = (input: GlueDataCatalogConfig, context: __SerdeContext): any => {
  return {
    ...(input.databaseName != null && { databaseName: input.databaseName }),
    ...(input.roleArn != null && { roleArn: input.roleArn }),
    ...(input.tablePrefix != null && { tablePrefix: input.tablePrefix }),
  };
};

const serializeAws_restJson1GoogleAnalyticsConnectorProfileCredentials = (
  input: GoogleAnalyticsConnectorProfileCredentials,
  context: __SerdeContext
): any => {
  return {
    ...(input.accessToken != null && { accessToken: input.accessToken }),
    ...(input.clientId != null && { clientId: input.clientId }),
    ...(input.clientSecret != null && { clientSecret: input.clientSecret }),
    ...(input.oAuthRequest != null && {
      oAuthRequest: serializeAws_restJson1ConnectorOAuthRequest(input.oAuthRequest, context),
    }),
    ...(input.refreshToken != null && { refreshToken: input.refreshToken }),
  };
};

const serializeAws_restJson1GoogleAnalyticsConnectorProfileProperties = (
  input: GoogleAnalyticsConnectorProfileProperties,
  context: __SerdeContext
): any => {
  return {};
};

const serializeAws_restJson1GoogleAnalyticsSourceProperties = (
  input: GoogleAnalyticsSourceProperties,
  context: __SerdeContext
): any => {
  return {
    ...(input.object != null && { object: input.object }),
  };
};

const serializeAws_restJson1HoneycodeConnectorProfileCredentials = (
  input: HoneycodeConnectorProfileCredentials,
  context: __SerdeContext
): any => {
  return {
    ...(input.accessToken != null && { accessToken: input.accessToken }),
    ...(input.oAuthRequest != null && {
      oAuthRequest: serializeAws_restJson1ConnectorOAuthRequest(input.oAuthRequest, context),
    }),
    ...(input.refreshToken != null && { refreshToken: input.refreshToken }),
  };
};

const serializeAws_restJson1HoneycodeConnectorProfileProperties = (
  input: HoneycodeConnectorProfileProperties,
  context: __SerdeContext
): any => {
  return {};
};

const serializeAws_restJson1HoneycodeDestinationProperties = (
  input: HoneycodeDestinationProperties,
  context: __SerdeContext
): any => {
  return {
    ...(input.errorHandlingConfig != null && {
      errorHandlingConfig: serializeAws_restJson1ErrorHandlingConfig(input.errorHandlingConfig, context),
    }),
    ...(input.object != null && { object: input.object }),
  };
};

const serializeAws_restJson1IdFieldNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1IncrementalPullConfig = (input: IncrementalPullConfig, context: __SerdeContext): any => {
  return {
    ...(input.datetimeTypeFieldName != null && { datetimeTypeFieldName: input.datetimeTypeFieldName }),
  };
};

const serializeAws_restJson1InforNexusConnectorProfileCredentials = (
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

const serializeAws_restJson1InforNexusConnectorProfileProperties = (
  input: InforNexusConnectorProfileProperties,
  context: __SerdeContext
): any => {
  return {
    ...(input.instanceUrl != null && { instanceUrl: input.instanceUrl }),
  };
};

const serializeAws_restJson1InforNexusSourceProperties = (
  input: InforNexusSourceProperties,
  context: __SerdeContext
): any => {
  return {
    ...(input.object != null && { object: input.object }),
  };
};

const serializeAws_restJson1LambdaConnectorProvisioningConfig = (
  input: LambdaConnectorProvisioningConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.lambdaArn != null && { lambdaArn: input.lambdaArn }),
  };
};

const serializeAws_restJson1LookoutMetricsDestinationProperties = (
  input: LookoutMetricsDestinationProperties,
  context: __SerdeContext
): any => {
  return {};
};

const serializeAws_restJson1MarketoConnectorProfileCredentials = (
  input: MarketoConnectorProfileCredentials,
  context: __SerdeContext
): any => {
  return {
    ...(input.accessToken != null && { accessToken: input.accessToken }),
    ...(input.clientId != null && { clientId: input.clientId }),
    ...(input.clientSecret != null && { clientSecret: input.clientSecret }),
    ...(input.oAuthRequest != null && {
      oAuthRequest: serializeAws_restJson1ConnectorOAuthRequest(input.oAuthRequest, context),
    }),
  };
};

const serializeAws_restJson1MarketoConnectorProfileProperties = (
  input: MarketoConnectorProfileProperties,
  context: __SerdeContext
): any => {
  return {
    ...(input.instanceUrl != null && { instanceUrl: input.instanceUrl }),
  };
};

const serializeAws_restJson1MarketoDestinationProperties = (
  input: MarketoDestinationProperties,
  context: __SerdeContext
): any => {
  return {
    ...(input.errorHandlingConfig != null && {
      errorHandlingConfig: serializeAws_restJson1ErrorHandlingConfig(input.errorHandlingConfig, context),
    }),
    ...(input.object != null && { object: input.object }),
  };
};

const serializeAws_restJson1MarketoSourceProperties = (
  input: MarketoSourceProperties,
  context: __SerdeContext
): any => {
  return {
    ...(input.object != null && { object: input.object }),
  };
};

const serializeAws_restJson1MetadataCatalogConfig = (input: MetadataCatalogConfig, context: __SerdeContext): any => {
  return {
    ...(input.glueDataCatalog != null && {
      glueDataCatalog: serializeAws_restJson1GlueDataCatalogConfig(input.glueDataCatalog, context),
    }),
  };
};

const serializeAws_restJson1OAuth2Credentials = (input: OAuth2Credentials, context: __SerdeContext): any => {
  return {
    ...(input.accessToken != null && { accessToken: input.accessToken }),
    ...(input.clientId != null && { clientId: input.clientId }),
    ...(input.clientSecret != null && { clientSecret: input.clientSecret }),
    ...(input.oAuthRequest != null && {
      oAuthRequest: serializeAws_restJson1ConnectorOAuthRequest(input.oAuthRequest, context),
    }),
    ...(input.refreshToken != null && { refreshToken: input.refreshToken }),
  };
};

const serializeAws_restJson1OAuth2Properties = (input: OAuth2Properties, context: __SerdeContext): any => {
  return {
    ...(input.oAuth2GrantType != null && { oAuth2GrantType: input.oAuth2GrantType }),
    ...(input.tokenUrl != null && { tokenUrl: input.tokenUrl }),
    ...(input.tokenUrlCustomProperties != null && {
      tokenUrlCustomProperties: serializeAws_restJson1TokenUrlCustomProperties(input.tokenUrlCustomProperties, context),
    }),
  };
};

const serializeAws_restJson1OAuthCredentials = (input: OAuthCredentials, context: __SerdeContext): any => {
  return {
    ...(input.accessToken != null && { accessToken: input.accessToken }),
    ...(input.clientId != null && { clientId: input.clientId }),
    ...(input.clientSecret != null && { clientSecret: input.clientSecret }),
    ...(input.oAuthRequest != null && {
      oAuthRequest: serializeAws_restJson1ConnectorOAuthRequest(input.oAuthRequest, context),
    }),
    ...(input.refreshToken != null && { refreshToken: input.refreshToken }),
  };
};

const serializeAws_restJson1OAuthProperties = (input: OAuthProperties, context: __SerdeContext): any => {
  return {
    ...(input.authCodeUrl != null && { authCodeUrl: input.authCodeUrl }),
    ...(input.oAuthScopes != null && { oAuthScopes: serializeAws_restJson1OAuthScopeList(input.oAuthScopes, context) }),
    ...(input.tokenUrl != null && { tokenUrl: input.tokenUrl }),
  };
};

const serializeAws_restJson1OAuthScopeList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1PardotConnectorProfileCredentials = (
  input: PardotConnectorProfileCredentials,
  context: __SerdeContext
): any => {
  return {
    ...(input.accessToken != null && { accessToken: input.accessToken }),
    ...(input.clientCredentialsArn != null && { clientCredentialsArn: input.clientCredentialsArn }),
    ...(input.oAuthRequest != null && {
      oAuthRequest: serializeAws_restJson1ConnectorOAuthRequest(input.oAuthRequest, context),
    }),
    ...(input.refreshToken != null && { refreshToken: input.refreshToken }),
  };
};

const serializeAws_restJson1PardotConnectorProfileProperties = (
  input: PardotConnectorProfileProperties,
  context: __SerdeContext
): any => {
  return {
    ...(input.businessUnitId != null && { businessUnitId: input.businessUnitId }),
    ...(input.instanceUrl != null && { instanceUrl: input.instanceUrl }),
    ...(input.isSandboxEnvironment != null && { isSandboxEnvironment: input.isSandboxEnvironment }),
  };
};

const serializeAws_restJson1PardotSourceProperties = (input: PardotSourceProperties, context: __SerdeContext): any => {
  return {
    ...(input.object != null && { object: input.object }),
  };
};

const serializeAws_restJson1PathPrefixHierarchy = (input: (PathPrefix | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1PrefixConfig = (input: PrefixConfig, context: __SerdeContext): any => {
  return {
    ...(input.pathPrefixHierarchy != null && {
      pathPrefixHierarchy: serializeAws_restJson1PathPrefixHierarchy(input.pathPrefixHierarchy, context),
    }),
    ...(input.prefixFormat != null && { prefixFormat: input.prefixFormat }),
    ...(input.prefixType != null && { prefixType: input.prefixType }),
  };
};

const serializeAws_restJson1ProfilePropertiesMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_restJson1RedshiftConnectorProfileCredentials = (
  input: RedshiftConnectorProfileCredentials,
  context: __SerdeContext
): any => {
  return {
    ...(input.password != null && { password: input.password }),
    ...(input.username != null && { username: input.username }),
  };
};

const serializeAws_restJson1RedshiftConnectorProfileProperties = (
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

const serializeAws_restJson1RedshiftDestinationProperties = (
  input: RedshiftDestinationProperties,
  context: __SerdeContext
): any => {
  return {
    ...(input.bucketPrefix != null && { bucketPrefix: input.bucketPrefix }),
    ...(input.errorHandlingConfig != null && {
      errorHandlingConfig: serializeAws_restJson1ErrorHandlingConfig(input.errorHandlingConfig, context),
    }),
    ...(input.intermediateBucketName != null && { intermediateBucketName: input.intermediateBucketName }),
    ...(input.object != null && { object: input.object }),
  };
};

const serializeAws_restJson1S3DestinationProperties = (
  input: S3DestinationProperties,
  context: __SerdeContext
): any => {
  return {
    ...(input.bucketName != null && { bucketName: input.bucketName }),
    ...(input.bucketPrefix != null && { bucketPrefix: input.bucketPrefix }),
    ...(input.s3OutputFormatConfig != null && {
      s3OutputFormatConfig: serializeAws_restJson1S3OutputFormatConfig(input.s3OutputFormatConfig, context),
    }),
  };
};

const serializeAws_restJson1S3InputFormatConfig = (input: S3InputFormatConfig, context: __SerdeContext): any => {
  return {
    ...(input.s3InputFileType != null && { s3InputFileType: input.s3InputFileType }),
  };
};

const serializeAws_restJson1S3OutputFormatConfig = (input: S3OutputFormatConfig, context: __SerdeContext): any => {
  return {
    ...(input.aggregationConfig != null && {
      aggregationConfig: serializeAws_restJson1AggregationConfig(input.aggregationConfig, context),
    }),
    ...(input.fileType != null && { fileType: input.fileType }),
    ...(input.prefixConfig != null && {
      prefixConfig: serializeAws_restJson1PrefixConfig(input.prefixConfig, context),
    }),
    ...(input.preserveSourceDataTyping != null && { preserveSourceDataTyping: input.preserveSourceDataTyping }),
  };
};

const serializeAws_restJson1S3SourceProperties = (input: S3SourceProperties, context: __SerdeContext): any => {
  return {
    ...(input.bucketName != null && { bucketName: input.bucketName }),
    ...(input.bucketPrefix != null && { bucketPrefix: input.bucketPrefix }),
    ...(input.s3InputFormatConfig != null && {
      s3InputFormatConfig: serializeAws_restJson1S3InputFormatConfig(input.s3InputFormatConfig, context),
    }),
  };
};

const serializeAws_restJson1SalesforceConnectorProfileCredentials = (
  input: SalesforceConnectorProfileCredentials,
  context: __SerdeContext
): any => {
  return {
    ...(input.accessToken != null && { accessToken: input.accessToken }),
    ...(input.clientCredentialsArn != null && { clientCredentialsArn: input.clientCredentialsArn }),
    ...(input.oAuthRequest != null && {
      oAuthRequest: serializeAws_restJson1ConnectorOAuthRequest(input.oAuthRequest, context),
    }),
    ...(input.refreshToken != null && { refreshToken: input.refreshToken }),
  };
};

const serializeAws_restJson1SalesforceConnectorProfileProperties = (
  input: SalesforceConnectorProfileProperties,
  context: __SerdeContext
): any => {
  return {
    ...(input.instanceUrl != null && { instanceUrl: input.instanceUrl }),
    ...(input.isSandboxEnvironment != null && { isSandboxEnvironment: input.isSandboxEnvironment }),
  };
};

const serializeAws_restJson1SalesforceDestinationProperties = (
  input: SalesforceDestinationProperties,
  context: __SerdeContext
): any => {
  return {
    ...(input.dataTransferApi != null && { dataTransferApi: input.dataTransferApi }),
    ...(input.errorHandlingConfig != null && {
      errorHandlingConfig: serializeAws_restJson1ErrorHandlingConfig(input.errorHandlingConfig, context),
    }),
    ...(input.idFieldNames != null && {
      idFieldNames: serializeAws_restJson1IdFieldNameList(input.idFieldNames, context),
    }),
    ...(input.object != null && { object: input.object }),
    ...(input.writeOperationType != null && { writeOperationType: input.writeOperationType }),
  };
};

const serializeAws_restJson1SalesforceSourceProperties = (
  input: SalesforceSourceProperties,
  context: __SerdeContext
): any => {
  return {
    ...(input.dataTransferApi != null && { dataTransferApi: input.dataTransferApi }),
    ...(input.enableDynamicFieldUpdate != null && { enableDynamicFieldUpdate: input.enableDynamicFieldUpdate }),
    ...(input.includeDeletedRecords != null && { includeDeletedRecords: input.includeDeletedRecords }),
    ...(input.object != null && { object: input.object }),
  };
};

const serializeAws_restJson1SAPODataConnectorProfileCredentials = (
  input: SAPODataConnectorProfileCredentials,
  context: __SerdeContext
): any => {
  return {
    ...(input.basicAuthCredentials != null && {
      basicAuthCredentials: serializeAws_restJson1BasicAuthCredentials(input.basicAuthCredentials, context),
    }),
    ...(input.oAuthCredentials != null && {
      oAuthCredentials: serializeAws_restJson1OAuthCredentials(input.oAuthCredentials, context),
    }),
  };
};

const serializeAws_restJson1SAPODataConnectorProfileProperties = (
  input: SAPODataConnectorProfileProperties,
  context: __SerdeContext
): any => {
  return {
    ...(input.applicationHostUrl != null && { applicationHostUrl: input.applicationHostUrl }),
    ...(input.applicationServicePath != null && { applicationServicePath: input.applicationServicePath }),
    ...(input.clientNumber != null && { clientNumber: input.clientNumber }),
    ...(input.logonLanguage != null && { logonLanguage: input.logonLanguage }),
    ...(input.oAuthProperties != null && {
      oAuthProperties: serializeAws_restJson1OAuthProperties(input.oAuthProperties, context),
    }),
    ...(input.portNumber != null && { portNumber: input.portNumber }),
    ...(input.privateLinkServiceName != null && { privateLinkServiceName: input.privateLinkServiceName }),
  };
};

const serializeAws_restJson1SAPODataDestinationProperties = (
  input: SAPODataDestinationProperties,
  context: __SerdeContext
): any => {
  return {
    ...(input.errorHandlingConfig != null && {
      errorHandlingConfig: serializeAws_restJson1ErrorHandlingConfig(input.errorHandlingConfig, context),
    }),
    ...(input.idFieldNames != null && {
      idFieldNames: serializeAws_restJson1IdFieldNameList(input.idFieldNames, context),
    }),
    ...(input.objectPath != null && { objectPath: input.objectPath }),
    ...(input.successResponseHandlingConfig != null && {
      successResponseHandlingConfig: serializeAws_restJson1SuccessResponseHandlingConfig(
        input.successResponseHandlingConfig,
        context
      ),
    }),
    ...(input.writeOperationType != null && { writeOperationType: input.writeOperationType }),
  };
};

const serializeAws_restJson1SAPODataSourceProperties = (
  input: SAPODataSourceProperties,
  context: __SerdeContext
): any => {
  return {
    ...(input.objectPath != null && { objectPath: input.objectPath }),
  };
};

const serializeAws_restJson1ScheduledTriggerProperties = (
  input: ScheduledTriggerProperties,
  context: __SerdeContext
): any => {
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

const serializeAws_restJson1ServiceNowConnectorProfileCredentials = (
  input: ServiceNowConnectorProfileCredentials,
  context: __SerdeContext
): any => {
  return {
    ...(input.password != null && { password: input.password }),
    ...(input.username != null && { username: input.username }),
  };
};

const serializeAws_restJson1ServiceNowConnectorProfileProperties = (
  input: ServiceNowConnectorProfileProperties,
  context: __SerdeContext
): any => {
  return {
    ...(input.instanceUrl != null && { instanceUrl: input.instanceUrl }),
  };
};

const serializeAws_restJson1ServiceNowSourceProperties = (
  input: ServiceNowSourceProperties,
  context: __SerdeContext
): any => {
  return {
    ...(input.object != null && { object: input.object }),
  };
};

const serializeAws_restJson1SingularConnectorProfileCredentials = (
  input: SingularConnectorProfileCredentials,
  context: __SerdeContext
): any => {
  return {
    ...(input.apiKey != null && { apiKey: input.apiKey }),
  };
};

const serializeAws_restJson1SingularConnectorProfileProperties = (
  input: SingularConnectorProfileProperties,
  context: __SerdeContext
): any => {
  return {};
};

const serializeAws_restJson1SingularSourceProperties = (
  input: SingularSourceProperties,
  context: __SerdeContext
): any => {
  return {
    ...(input.object != null && { object: input.object }),
  };
};

const serializeAws_restJson1SlackConnectorProfileCredentials = (
  input: SlackConnectorProfileCredentials,
  context: __SerdeContext
): any => {
  return {
    ...(input.accessToken != null && { accessToken: input.accessToken }),
    ...(input.clientId != null && { clientId: input.clientId }),
    ...(input.clientSecret != null && { clientSecret: input.clientSecret }),
    ...(input.oAuthRequest != null && {
      oAuthRequest: serializeAws_restJson1ConnectorOAuthRequest(input.oAuthRequest, context),
    }),
  };
};

const serializeAws_restJson1SlackConnectorProfileProperties = (
  input: SlackConnectorProfileProperties,
  context: __SerdeContext
): any => {
  return {
    ...(input.instanceUrl != null && { instanceUrl: input.instanceUrl }),
  };
};

const serializeAws_restJson1SlackSourceProperties = (input: SlackSourceProperties, context: __SerdeContext): any => {
  return {
    ...(input.object != null && { object: input.object }),
  };
};

const serializeAws_restJson1SnowflakeConnectorProfileCredentials = (
  input: SnowflakeConnectorProfileCredentials,
  context: __SerdeContext
): any => {
  return {
    ...(input.password != null && { password: input.password }),
    ...(input.username != null && { username: input.username }),
  };
};

const serializeAws_restJson1SnowflakeConnectorProfileProperties = (
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

const serializeAws_restJson1SnowflakeDestinationProperties = (
  input: SnowflakeDestinationProperties,
  context: __SerdeContext
): any => {
  return {
    ...(input.bucketPrefix != null && { bucketPrefix: input.bucketPrefix }),
    ...(input.errorHandlingConfig != null && {
      errorHandlingConfig: serializeAws_restJson1ErrorHandlingConfig(input.errorHandlingConfig, context),
    }),
    ...(input.intermediateBucketName != null && { intermediateBucketName: input.intermediateBucketName }),
    ...(input.object != null && { object: input.object }),
  };
};

const serializeAws_restJson1SourceConnectorProperties = (
  input: SourceConnectorProperties,
  context: __SerdeContext
): any => {
  return {
    ...(input.Amplitude != null && {
      Amplitude: serializeAws_restJson1AmplitudeSourceProperties(input.Amplitude, context),
    }),
    ...(input.CustomConnector != null && {
      CustomConnector: serializeAws_restJson1CustomConnectorSourceProperties(input.CustomConnector, context),
    }),
    ...(input.Datadog != null && { Datadog: serializeAws_restJson1DatadogSourceProperties(input.Datadog, context) }),
    ...(input.Dynatrace != null && {
      Dynatrace: serializeAws_restJson1DynatraceSourceProperties(input.Dynatrace, context),
    }),
    ...(input.GoogleAnalytics != null && {
      GoogleAnalytics: serializeAws_restJson1GoogleAnalyticsSourceProperties(input.GoogleAnalytics, context),
    }),
    ...(input.InforNexus != null && {
      InforNexus: serializeAws_restJson1InforNexusSourceProperties(input.InforNexus, context),
    }),
    ...(input.Marketo != null && { Marketo: serializeAws_restJson1MarketoSourceProperties(input.Marketo, context) }),
    ...(input.Pardot != null && { Pardot: serializeAws_restJson1PardotSourceProperties(input.Pardot, context) }),
    ...(input.S3 != null && { S3: serializeAws_restJson1S3SourceProperties(input.S3, context) }),
    ...(input.SAPOData != null && {
      SAPOData: serializeAws_restJson1SAPODataSourceProperties(input.SAPOData, context),
    }),
    ...(input.Salesforce != null && {
      Salesforce: serializeAws_restJson1SalesforceSourceProperties(input.Salesforce, context),
    }),
    ...(input.ServiceNow != null && {
      ServiceNow: serializeAws_restJson1ServiceNowSourceProperties(input.ServiceNow, context),
    }),
    ...(input.Singular != null && {
      Singular: serializeAws_restJson1SingularSourceProperties(input.Singular, context),
    }),
    ...(input.Slack != null && { Slack: serializeAws_restJson1SlackSourceProperties(input.Slack, context) }),
    ...(input.Trendmicro != null && {
      Trendmicro: serializeAws_restJson1TrendmicroSourceProperties(input.Trendmicro, context),
    }),
    ...(input.Veeva != null && { Veeva: serializeAws_restJson1VeevaSourceProperties(input.Veeva, context) }),
    ...(input.Zendesk != null && { Zendesk: serializeAws_restJson1ZendeskSourceProperties(input.Zendesk, context) }),
  };
};

const serializeAws_restJson1SourceFields = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1SourceFlowConfig = (input: SourceFlowConfig, context: __SerdeContext): any => {
  return {
    ...(input.apiVersion != null && { apiVersion: input.apiVersion }),
    ...(input.connectorProfileName != null && { connectorProfileName: input.connectorProfileName }),
    ...(input.connectorType != null && { connectorType: input.connectorType }),
    ...(input.incrementalPullConfig != null && {
      incrementalPullConfig: serializeAws_restJson1IncrementalPullConfig(input.incrementalPullConfig, context),
    }),
    ...(input.sourceConnectorProperties != null && {
      sourceConnectorProperties: serializeAws_restJson1SourceConnectorProperties(
        input.sourceConnectorProperties,
        context
      ),
    }),
  };
};

const serializeAws_restJson1SuccessResponseHandlingConfig = (
  input: SuccessResponseHandlingConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.bucketName != null && { bucketName: input.bucketName }),
    ...(input.bucketPrefix != null && { bucketPrefix: input.bucketPrefix }),
  };
};

const serializeAws_restJson1TagMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_restJson1Task = (input: Task, context: __SerdeContext): any => {
  return {
    ...(input.connectorOperator != null && {
      connectorOperator: serializeAws_restJson1ConnectorOperator(input.connectorOperator, context),
    }),
    ...(input.destinationField != null && { destinationField: input.destinationField }),
    ...(input.sourceFields != null && {
      sourceFields: serializeAws_restJson1SourceFields(input.sourceFields, context),
    }),
    ...(input.taskProperties != null && {
      taskProperties: serializeAws_restJson1TaskPropertiesMap(input.taskProperties, context),
    }),
    ...(input.taskType != null && { taskType: input.taskType }),
  };
};

const serializeAws_restJson1TaskPropertiesMap = (input: Record<string, string>, context: __SerdeContext): any => {
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

const serializeAws_restJson1Tasks = (input: Task[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1Task(entry, context);
    });
};

const serializeAws_restJson1TokenUrlCustomProperties = (
  input: Record<string, string>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_restJson1TrendmicroConnectorProfileCredentials = (
  input: TrendmicroConnectorProfileCredentials,
  context: __SerdeContext
): any => {
  return {
    ...(input.apiSecretKey != null && { apiSecretKey: input.apiSecretKey }),
  };
};

const serializeAws_restJson1TrendmicroConnectorProfileProperties = (
  input: TrendmicroConnectorProfileProperties,
  context: __SerdeContext
): any => {
  return {};
};

const serializeAws_restJson1TrendmicroSourceProperties = (
  input: TrendmicroSourceProperties,
  context: __SerdeContext
): any => {
  return {
    ...(input.object != null && { object: input.object }),
  };
};

const serializeAws_restJson1TriggerConfig = (input: TriggerConfig, context: __SerdeContext): any => {
  return {
    ...(input.triggerProperties != null && {
      triggerProperties: serializeAws_restJson1TriggerProperties(input.triggerProperties, context),
    }),
    ...(input.triggerType != null && { triggerType: input.triggerType }),
  };
};

const serializeAws_restJson1TriggerProperties = (input: TriggerProperties, context: __SerdeContext): any => {
  return {
    ...(input.Scheduled != null && {
      Scheduled: serializeAws_restJson1ScheduledTriggerProperties(input.Scheduled, context),
    }),
  };
};

const serializeAws_restJson1UpsolverDestinationProperties = (
  input: UpsolverDestinationProperties,
  context: __SerdeContext
): any => {
  return {
    ...(input.bucketName != null && { bucketName: input.bucketName }),
    ...(input.bucketPrefix != null && { bucketPrefix: input.bucketPrefix }),
    ...(input.s3OutputFormatConfig != null && {
      s3OutputFormatConfig: serializeAws_restJson1UpsolverS3OutputFormatConfig(input.s3OutputFormatConfig, context),
    }),
  };
};

const serializeAws_restJson1UpsolverS3OutputFormatConfig = (
  input: UpsolverS3OutputFormatConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.aggregationConfig != null && {
      aggregationConfig: serializeAws_restJson1AggregationConfig(input.aggregationConfig, context),
    }),
    ...(input.fileType != null && { fileType: input.fileType }),
    ...(input.prefixConfig != null && {
      prefixConfig: serializeAws_restJson1PrefixConfig(input.prefixConfig, context),
    }),
  };
};

const serializeAws_restJson1VeevaConnectorProfileCredentials = (
  input: VeevaConnectorProfileCredentials,
  context: __SerdeContext
): any => {
  return {
    ...(input.password != null && { password: input.password }),
    ...(input.username != null && { username: input.username }),
  };
};

const serializeAws_restJson1VeevaConnectorProfileProperties = (
  input: VeevaConnectorProfileProperties,
  context: __SerdeContext
): any => {
  return {
    ...(input.instanceUrl != null && { instanceUrl: input.instanceUrl }),
  };
};

const serializeAws_restJson1VeevaSourceProperties = (input: VeevaSourceProperties, context: __SerdeContext): any => {
  return {
    ...(input.documentType != null && { documentType: input.documentType }),
    ...(input.includeAllVersions != null && { includeAllVersions: input.includeAllVersions }),
    ...(input.includeRenditions != null && { includeRenditions: input.includeRenditions }),
    ...(input.includeSourceFiles != null && { includeSourceFiles: input.includeSourceFiles }),
    ...(input.object != null && { object: input.object }),
  };
};

const serializeAws_restJson1ZendeskConnectorProfileCredentials = (
  input: ZendeskConnectorProfileCredentials,
  context: __SerdeContext
): any => {
  return {
    ...(input.accessToken != null && { accessToken: input.accessToken }),
    ...(input.clientId != null && { clientId: input.clientId }),
    ...(input.clientSecret != null && { clientSecret: input.clientSecret }),
    ...(input.oAuthRequest != null && {
      oAuthRequest: serializeAws_restJson1ConnectorOAuthRequest(input.oAuthRequest, context),
    }),
  };
};

const serializeAws_restJson1ZendeskConnectorProfileProperties = (
  input: ZendeskConnectorProfileProperties,
  context: __SerdeContext
): any => {
  return {
    ...(input.instanceUrl != null && { instanceUrl: input.instanceUrl }),
  };
};

const serializeAws_restJson1ZendeskDestinationProperties = (
  input: ZendeskDestinationProperties,
  context: __SerdeContext
): any => {
  return {
    ...(input.errorHandlingConfig != null && {
      errorHandlingConfig: serializeAws_restJson1ErrorHandlingConfig(input.errorHandlingConfig, context),
    }),
    ...(input.idFieldNames != null && {
      idFieldNames: serializeAws_restJson1IdFieldNameList(input.idFieldNames, context),
    }),
    ...(input.object != null && { object: input.object }),
    ...(input.writeOperationType != null && { writeOperationType: input.writeOperationType }),
  };
};

const serializeAws_restJson1ZendeskSourceProperties = (
  input: ZendeskSourceProperties,
  context: __SerdeContext
): any => {
  return {
    ...(input.object != null && { object: input.object }),
  };
};

const deserializeAws_restJson1AggregationConfig = (output: any, context: __SerdeContext): AggregationConfig => {
  return {
    aggregationType: __expectString(output.aggregationType),
    targetFileSize: __expectLong(output.targetFileSize),
  } as any;
};

const deserializeAws_restJson1AmplitudeConnectorProfileProperties = (
  output: any,
  context: __SerdeContext
): AmplitudeConnectorProfileProperties => {
  return {} as any;
};

const deserializeAws_restJson1AmplitudeMetadata = (output: any, context: __SerdeContext): AmplitudeMetadata => {
  return {} as any;
};

const deserializeAws_restJson1AmplitudeSourceProperties = (
  output: any,
  context: __SerdeContext
): AmplitudeSourceProperties => {
  return {
    object: __expectString(output.object),
  } as any;
};

const deserializeAws_restJson1AuthCodeUrlList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1AuthenticationConfig = (output: any, context: __SerdeContext): AuthenticationConfig => {
  return {
    customAuthConfigs:
      output.customAuthConfigs != null
        ? deserializeAws_restJson1CustomAuthConfigList(output.customAuthConfigs, context)
        : undefined,
    isApiKeyAuthSupported: __expectBoolean(output.isApiKeyAuthSupported),
    isBasicAuthSupported: __expectBoolean(output.isBasicAuthSupported),
    isCustomAuthSupported: __expectBoolean(output.isCustomAuthSupported),
    isOAuth2Supported: __expectBoolean(output.isOAuth2Supported),
    oAuth2Defaults:
      output.oAuth2Defaults != null
        ? deserializeAws_restJson1OAuth2Defaults(output.oAuth2Defaults, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AuthParameter = (output: any, context: __SerdeContext): AuthParameter => {
  return {
    connectorSuppliedValues:
      output.connectorSuppliedValues != null
        ? deserializeAws_restJson1ConnectorSuppliedValueList(output.connectorSuppliedValues, context)
        : undefined,
    description: __expectString(output.description),
    isRequired: __expectBoolean(output.isRequired),
    isSensitiveField: __expectBoolean(output.isSensitiveField),
    key: __expectString(output.key),
    label: __expectString(output.label),
  } as any;
};

const deserializeAws_restJson1AuthParameterList = (output: any, context: __SerdeContext): AuthParameter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AuthParameter(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ConnectorConfiguration = (
  output: any,
  context: __SerdeContext
): ConnectorConfiguration => {
  return {
    authenticationConfig:
      output.authenticationConfig != null
        ? deserializeAws_restJson1AuthenticationConfig(output.authenticationConfig, context)
        : undefined,
    canUseAsDestination: __expectBoolean(output.canUseAsDestination),
    canUseAsSource: __expectBoolean(output.canUseAsSource),
    connectorArn: __expectString(output.connectorArn),
    connectorDescription: __expectString(output.connectorDescription),
    connectorLabel: __expectString(output.connectorLabel),
    connectorMetadata:
      output.connectorMetadata != null
        ? deserializeAws_restJson1ConnectorMetadata(output.connectorMetadata, context)
        : undefined,
    connectorModes:
      output.connectorModes != null
        ? deserializeAws_restJson1ConnectorModeList(output.connectorModes, context)
        : undefined,
    connectorName: __expectString(output.connectorName),
    connectorOwner: __expectString(output.connectorOwner),
    connectorProvisioningConfig:
      output.connectorProvisioningConfig != null
        ? deserializeAws_restJson1ConnectorProvisioningConfig(output.connectorProvisioningConfig, context)
        : undefined,
    connectorProvisioningType: __expectString(output.connectorProvisioningType),
    connectorRuntimeSettings:
      output.connectorRuntimeSettings != null
        ? deserializeAws_restJson1ConnectorRuntimeSettingList(output.connectorRuntimeSettings, context)
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
        ? deserializeAws_restJson1SupportedApiVersionList(output.supportedApiVersions, context)
        : undefined,
    supportedDestinationConnectors:
      output.supportedDestinationConnectors != null
        ? deserializeAws_restJson1ConnectorTypeList(output.supportedDestinationConnectors, context)
        : undefined,
    supportedOperators:
      output.supportedOperators != null
        ? deserializeAws_restJson1SupportedOperatorList(output.supportedOperators, context)
        : undefined,
    supportedSchedulingFrequencies:
      output.supportedSchedulingFrequencies != null
        ? deserializeAws_restJson1SchedulingFrequencyTypeList(output.supportedSchedulingFrequencies, context)
        : undefined,
    supportedTriggerTypes:
      output.supportedTriggerTypes != null
        ? deserializeAws_restJson1TriggerTypeList(output.supportedTriggerTypes, context)
        : undefined,
    supportedWriteOperations:
      output.supportedWriteOperations != null
        ? deserializeAws_restJson1SupportedWriteOperationList(output.supportedWriteOperations, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ConnectorConfigurationsMap = (
  output: any,
  context: __SerdeContext
): Record<string, ConnectorConfiguration> => {
  return Object.entries(output).reduce(
    (acc: Record<string, ConnectorConfiguration>, [key, value]: [ConnectorType | string, any]) => {
      if (value === null) {
        return acc;
      }
      acc[key] = deserializeAws_restJson1ConnectorConfiguration(value, context);
      return acc;
    },
    {}
  );
};

const deserializeAws_restJson1ConnectorDetail = (output: any, context: __SerdeContext): ConnectorDetail => {
  return {
    applicationType: __expectString(output.applicationType),
    connectorDescription: __expectString(output.connectorDescription),
    connectorLabel: __expectString(output.connectorLabel),
    connectorModes:
      output.connectorModes != null
        ? deserializeAws_restJson1ConnectorModeList(output.connectorModes, context)
        : undefined,
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

const deserializeAws_restJson1ConnectorEntity = (output: any, context: __SerdeContext): ConnectorEntity => {
  return {
    hasNestedEntities: __expectBoolean(output.hasNestedEntities),
    label: __expectString(output.label),
    name: __expectString(output.name),
  } as any;
};

const deserializeAws_restJson1ConnectorEntityField = (output: any, context: __SerdeContext): ConnectorEntityField => {
  return {
    customProperties:
      output.customProperties != null
        ? deserializeAws_restJson1CustomProperties(output.customProperties, context)
        : undefined,
    defaultValue: __expectString(output.defaultValue),
    description: __expectString(output.description),
    destinationProperties:
      output.destinationProperties != null
        ? deserializeAws_restJson1DestinationFieldProperties(output.destinationProperties, context)
        : undefined,
    identifier: __expectString(output.identifier),
    isDeprecated: __expectBoolean(output.isDeprecated),
    isPrimaryKey: __expectBoolean(output.isPrimaryKey),
    label: __expectString(output.label),
    parentIdentifier: __expectString(output.parentIdentifier),
    sourceProperties:
      output.sourceProperties != null
        ? deserializeAws_restJson1SourceFieldProperties(output.sourceProperties, context)
        : undefined,
    supportedFieldTypeDetails:
      output.supportedFieldTypeDetails != null
        ? deserializeAws_restJson1SupportedFieldTypeDetails(output.supportedFieldTypeDetails, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ConnectorEntityFieldList = (
  output: any,
  context: __SerdeContext
): ConnectorEntityField[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ConnectorEntityField(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ConnectorEntityList = (output: any, context: __SerdeContext): ConnectorEntity[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ConnectorEntity(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ConnectorEntityMap = (
  output: any,
  context: __SerdeContext
): Record<string, ConnectorEntity[]> => {
  return Object.entries(output).reduce((acc: Record<string, ConnectorEntity[]>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = deserializeAws_restJson1ConnectorEntityList(value, context);
    return acc;
  }, {});
};

const deserializeAws_restJson1ConnectorList = (output: any, context: __SerdeContext): ConnectorDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ConnectorDetail(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ConnectorMetadata = (output: any, context: __SerdeContext): ConnectorMetadata => {
  return {
    Amplitude:
      output.Amplitude != null ? deserializeAws_restJson1AmplitudeMetadata(output.Amplitude, context) : undefined,
    CustomerProfiles:
      output.CustomerProfiles != null
        ? deserializeAws_restJson1CustomerProfilesMetadata(output.CustomerProfiles, context)
        : undefined,
    Datadog: output.Datadog != null ? deserializeAws_restJson1DatadogMetadata(output.Datadog, context) : undefined,
    Dynatrace:
      output.Dynatrace != null ? deserializeAws_restJson1DynatraceMetadata(output.Dynatrace, context) : undefined,
    EventBridge:
      output.EventBridge != null ? deserializeAws_restJson1EventBridgeMetadata(output.EventBridge, context) : undefined,
    GoogleAnalytics:
      output.GoogleAnalytics != null
        ? deserializeAws_restJson1GoogleAnalyticsMetadata(output.GoogleAnalytics, context)
        : undefined,
    Honeycode:
      output.Honeycode != null ? deserializeAws_restJson1HoneycodeMetadata(output.Honeycode, context) : undefined,
    InforNexus:
      output.InforNexus != null ? deserializeAws_restJson1InforNexusMetadata(output.InforNexus, context) : undefined,
    Marketo: output.Marketo != null ? deserializeAws_restJson1MarketoMetadata(output.Marketo, context) : undefined,
    Pardot: output.Pardot != null ? deserializeAws_restJson1PardotMetadata(output.Pardot, context) : undefined,
    Redshift: output.Redshift != null ? deserializeAws_restJson1RedshiftMetadata(output.Redshift, context) : undefined,
    S3: output.S3 != null ? deserializeAws_restJson1S3Metadata(output.S3, context) : undefined,
    SAPOData: output.SAPOData != null ? deserializeAws_restJson1SAPODataMetadata(output.SAPOData, context) : undefined,
    Salesforce:
      output.Salesforce != null ? deserializeAws_restJson1SalesforceMetadata(output.Salesforce, context) : undefined,
    ServiceNow:
      output.ServiceNow != null ? deserializeAws_restJson1ServiceNowMetadata(output.ServiceNow, context) : undefined,
    Singular: output.Singular != null ? deserializeAws_restJson1SingularMetadata(output.Singular, context) : undefined,
    Slack: output.Slack != null ? deserializeAws_restJson1SlackMetadata(output.Slack, context) : undefined,
    Snowflake:
      output.Snowflake != null ? deserializeAws_restJson1SnowflakeMetadata(output.Snowflake, context) : undefined,
    Trendmicro:
      output.Trendmicro != null ? deserializeAws_restJson1TrendmicroMetadata(output.Trendmicro, context) : undefined,
    Upsolver: output.Upsolver != null ? deserializeAws_restJson1UpsolverMetadata(output.Upsolver, context) : undefined,
    Veeva: output.Veeva != null ? deserializeAws_restJson1VeevaMetadata(output.Veeva, context) : undefined,
    Zendesk: output.Zendesk != null ? deserializeAws_restJson1ZendeskMetadata(output.Zendesk, context) : undefined,
  } as any;
};

const deserializeAws_restJson1ConnectorModeList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1ConnectorOperator = (output: any, context: __SerdeContext): ConnectorOperator => {
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

const deserializeAws_restJson1ConnectorProfile = (output: any, context: __SerdeContext): ConnectorProfile => {
  return {
    connectionMode: __expectString(output.connectionMode),
    connectorLabel: __expectString(output.connectorLabel),
    connectorProfileArn: __expectString(output.connectorProfileArn),
    connectorProfileName: __expectString(output.connectorProfileName),
    connectorProfileProperties:
      output.connectorProfileProperties != null
        ? deserializeAws_restJson1ConnectorProfileProperties(output.connectorProfileProperties, context)
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
        ? deserializeAws_restJson1PrivateConnectionProvisioningState(output.privateConnectionProvisioningState, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ConnectorProfileDetailList = (
  output: any,
  context: __SerdeContext
): ConnectorProfile[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ConnectorProfile(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ConnectorProfileProperties = (
  output: any,
  context: __SerdeContext
): ConnectorProfileProperties => {
  return {
    Amplitude:
      output.Amplitude != null
        ? deserializeAws_restJson1AmplitudeConnectorProfileProperties(output.Amplitude, context)
        : undefined,
    CustomConnector:
      output.CustomConnector != null
        ? deserializeAws_restJson1CustomConnectorProfileProperties(output.CustomConnector, context)
        : undefined,
    Datadog:
      output.Datadog != null
        ? deserializeAws_restJson1DatadogConnectorProfileProperties(output.Datadog, context)
        : undefined,
    Dynatrace:
      output.Dynatrace != null
        ? deserializeAws_restJson1DynatraceConnectorProfileProperties(output.Dynatrace, context)
        : undefined,
    GoogleAnalytics:
      output.GoogleAnalytics != null
        ? deserializeAws_restJson1GoogleAnalyticsConnectorProfileProperties(output.GoogleAnalytics, context)
        : undefined,
    Honeycode:
      output.Honeycode != null
        ? deserializeAws_restJson1HoneycodeConnectorProfileProperties(output.Honeycode, context)
        : undefined,
    InforNexus:
      output.InforNexus != null
        ? deserializeAws_restJson1InforNexusConnectorProfileProperties(output.InforNexus, context)
        : undefined,
    Marketo:
      output.Marketo != null
        ? deserializeAws_restJson1MarketoConnectorProfileProperties(output.Marketo, context)
        : undefined,
    Pardot:
      output.Pardot != null
        ? deserializeAws_restJson1PardotConnectorProfileProperties(output.Pardot, context)
        : undefined,
    Redshift:
      output.Redshift != null
        ? deserializeAws_restJson1RedshiftConnectorProfileProperties(output.Redshift, context)
        : undefined,
    SAPOData:
      output.SAPOData != null
        ? deserializeAws_restJson1SAPODataConnectorProfileProperties(output.SAPOData, context)
        : undefined,
    Salesforce:
      output.Salesforce != null
        ? deserializeAws_restJson1SalesforceConnectorProfileProperties(output.Salesforce, context)
        : undefined,
    ServiceNow:
      output.ServiceNow != null
        ? deserializeAws_restJson1ServiceNowConnectorProfileProperties(output.ServiceNow, context)
        : undefined,
    Singular:
      output.Singular != null
        ? deserializeAws_restJson1SingularConnectorProfileProperties(output.Singular, context)
        : undefined,
    Slack:
      output.Slack != null ? deserializeAws_restJson1SlackConnectorProfileProperties(output.Slack, context) : undefined,
    Snowflake:
      output.Snowflake != null
        ? deserializeAws_restJson1SnowflakeConnectorProfileProperties(output.Snowflake, context)
        : undefined,
    Trendmicro:
      output.Trendmicro != null
        ? deserializeAws_restJson1TrendmicroConnectorProfileProperties(output.Trendmicro, context)
        : undefined,
    Veeva:
      output.Veeva != null ? deserializeAws_restJson1VeevaConnectorProfileProperties(output.Veeva, context) : undefined,
    Zendesk:
      output.Zendesk != null
        ? deserializeAws_restJson1ZendeskConnectorProfileProperties(output.Zendesk, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ConnectorProvisioningConfig = (
  output: any,
  context: __SerdeContext
): ConnectorProvisioningConfig => {
  return {
    lambda:
      output.lambda != null
        ? deserializeAws_restJson1LambdaConnectorProvisioningConfig(output.lambda, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ConnectorRuntimeSetting = (
  output: any,
  context: __SerdeContext
): ConnectorRuntimeSetting => {
  return {
    connectorSuppliedValueOptions:
      output.connectorSuppliedValueOptions != null
        ? deserializeAws_restJson1ConnectorSuppliedValueOptionList(output.connectorSuppliedValueOptions, context)
        : undefined,
    dataType: __expectString(output.dataType),
    description: __expectString(output.description),
    isRequired: __expectBoolean(output.isRequired),
    key: __expectString(output.key),
    label: __expectString(output.label),
    scope: __expectString(output.scope),
  } as any;
};

const deserializeAws_restJson1ConnectorRuntimeSettingList = (
  output: any,
  context: __SerdeContext
): ConnectorRuntimeSetting[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ConnectorRuntimeSetting(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ConnectorSuppliedValueList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1ConnectorSuppliedValueOptionList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1ConnectorTypeList = (
  output: any,
  context: __SerdeContext
): (ConnectorType | string)[] => {
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

const deserializeAws_restJson1CustomAuthConfig = (output: any, context: __SerdeContext): CustomAuthConfig => {
  return {
    authParameters:
      output.authParameters != null
        ? deserializeAws_restJson1AuthParameterList(output.authParameters, context)
        : undefined,
    customAuthenticationType: __expectString(output.customAuthenticationType),
  } as any;
};

const deserializeAws_restJson1CustomAuthConfigList = (output: any, context: __SerdeContext): CustomAuthConfig[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1CustomAuthConfig(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1CustomConnectorDestinationProperties = (
  output: any,
  context: __SerdeContext
): CustomConnectorDestinationProperties => {
  return {
    customProperties:
      output.customProperties != null
        ? deserializeAws_restJson1CustomProperties(output.customProperties, context)
        : undefined,
    entityName: __expectString(output.entityName),
    errorHandlingConfig:
      output.errorHandlingConfig != null
        ? deserializeAws_restJson1ErrorHandlingConfig(output.errorHandlingConfig, context)
        : undefined,
    idFieldNames:
      output.idFieldNames != null ? deserializeAws_restJson1IdFieldNameList(output.idFieldNames, context) : undefined,
    writeOperationType: __expectString(output.writeOperationType),
  } as any;
};

const deserializeAws_restJson1CustomConnectorProfileProperties = (
  output: any,
  context: __SerdeContext
): CustomConnectorProfileProperties => {
  return {
    oAuth2Properties:
      output.oAuth2Properties != null
        ? deserializeAws_restJson1OAuth2Properties(output.oAuth2Properties, context)
        : undefined,
    profileProperties:
      output.profileProperties != null
        ? deserializeAws_restJson1ProfilePropertiesMap(output.profileProperties, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1CustomConnectorSourceProperties = (
  output: any,
  context: __SerdeContext
): CustomConnectorSourceProperties => {
  return {
    customProperties:
      output.customProperties != null
        ? deserializeAws_restJson1CustomProperties(output.customProperties, context)
        : undefined,
    entityName: __expectString(output.entityName),
  } as any;
};

const deserializeAws_restJson1CustomerProfilesDestinationProperties = (
  output: any,
  context: __SerdeContext
): CustomerProfilesDestinationProperties => {
  return {
    domainName: __expectString(output.domainName),
    objectTypeName: __expectString(output.objectTypeName),
  } as any;
};

const deserializeAws_restJson1CustomerProfilesMetadata = (
  output: any,
  context: __SerdeContext
): CustomerProfilesMetadata => {
  return {} as any;
};

const deserializeAws_restJson1CustomProperties = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1DatadogConnectorProfileProperties = (
  output: any,
  context: __SerdeContext
): DatadogConnectorProfileProperties => {
  return {
    instanceUrl: __expectString(output.instanceUrl),
  } as any;
};

const deserializeAws_restJson1DatadogMetadata = (output: any, context: __SerdeContext): DatadogMetadata => {
  return {} as any;
};

const deserializeAws_restJson1DatadogSourceProperties = (
  output: any,
  context: __SerdeContext
): DatadogSourceProperties => {
  return {
    object: __expectString(output.object),
  } as any;
};

const deserializeAws_restJson1DestinationConnectorProperties = (
  output: any,
  context: __SerdeContext
): DestinationConnectorProperties => {
  return {
    CustomConnector:
      output.CustomConnector != null
        ? deserializeAws_restJson1CustomConnectorDestinationProperties(output.CustomConnector, context)
        : undefined,
    CustomerProfiles:
      output.CustomerProfiles != null
        ? deserializeAws_restJson1CustomerProfilesDestinationProperties(output.CustomerProfiles, context)
        : undefined,
    EventBridge:
      output.EventBridge != null
        ? deserializeAws_restJson1EventBridgeDestinationProperties(output.EventBridge, context)
        : undefined,
    Honeycode:
      output.Honeycode != null
        ? deserializeAws_restJson1HoneycodeDestinationProperties(output.Honeycode, context)
        : undefined,
    LookoutMetrics:
      output.LookoutMetrics != null
        ? deserializeAws_restJson1LookoutMetricsDestinationProperties(output.LookoutMetrics, context)
        : undefined,
    Marketo:
      output.Marketo != null
        ? deserializeAws_restJson1MarketoDestinationProperties(output.Marketo, context)
        : undefined,
    Redshift:
      output.Redshift != null
        ? deserializeAws_restJson1RedshiftDestinationProperties(output.Redshift, context)
        : undefined,
    S3: output.S3 != null ? deserializeAws_restJson1S3DestinationProperties(output.S3, context) : undefined,
    SAPOData:
      output.SAPOData != null
        ? deserializeAws_restJson1SAPODataDestinationProperties(output.SAPOData, context)
        : undefined,
    Salesforce:
      output.Salesforce != null
        ? deserializeAws_restJson1SalesforceDestinationProperties(output.Salesforce, context)
        : undefined,
    Snowflake:
      output.Snowflake != null
        ? deserializeAws_restJson1SnowflakeDestinationProperties(output.Snowflake, context)
        : undefined,
    Upsolver:
      output.Upsolver != null
        ? deserializeAws_restJson1UpsolverDestinationProperties(output.Upsolver, context)
        : undefined,
    Zendesk:
      output.Zendesk != null
        ? deserializeAws_restJson1ZendeskDestinationProperties(output.Zendesk, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1DestinationFieldProperties = (
  output: any,
  context: __SerdeContext
): DestinationFieldProperties => {
  return {
    isCreatable: __expectBoolean(output.isCreatable),
    isDefaultedOnCreate: __expectBoolean(output.isDefaultedOnCreate),
    isNullable: __expectBoolean(output.isNullable),
    isUpdatable: __expectBoolean(output.isUpdatable),
    isUpsertable: __expectBoolean(output.isUpsertable),
    supportedWriteOperations:
      output.supportedWriteOperations != null
        ? deserializeAws_restJson1SupportedWriteOperationList(output.supportedWriteOperations, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1DestinationFlowConfig = (output: any, context: __SerdeContext): DestinationFlowConfig => {
  return {
    apiVersion: __expectString(output.apiVersion),
    connectorProfileName: __expectString(output.connectorProfileName),
    connectorType: __expectString(output.connectorType),
    destinationConnectorProperties:
      output.destinationConnectorProperties != null
        ? deserializeAws_restJson1DestinationConnectorProperties(output.destinationConnectorProperties, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1DestinationFlowConfigList = (
  output: any,
  context: __SerdeContext
): DestinationFlowConfig[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DestinationFlowConfig(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1DynatraceConnectorProfileProperties = (
  output: any,
  context: __SerdeContext
): DynatraceConnectorProfileProperties => {
  return {
    instanceUrl: __expectString(output.instanceUrl),
  } as any;
};

const deserializeAws_restJson1DynatraceMetadata = (output: any, context: __SerdeContext): DynatraceMetadata => {
  return {} as any;
};

const deserializeAws_restJson1DynatraceSourceProperties = (
  output: any,
  context: __SerdeContext
): DynatraceSourceProperties => {
  return {
    object: __expectString(output.object),
  } as any;
};

const deserializeAws_restJson1ErrorHandlingConfig = (output: any, context: __SerdeContext): ErrorHandlingConfig => {
  return {
    bucketName: __expectString(output.bucketName),
    bucketPrefix: __expectString(output.bucketPrefix),
    failOnFirstDestinationError: __expectBoolean(output.failOnFirstDestinationError),
  } as any;
};

const deserializeAws_restJson1ErrorInfo = (output: any, context: __SerdeContext): ErrorInfo => {
  return {
    executionMessage: __expectString(output.executionMessage),
    putFailuresCount: __expectLong(output.putFailuresCount),
  } as any;
};

const deserializeAws_restJson1EventBridgeDestinationProperties = (
  output: any,
  context: __SerdeContext
): EventBridgeDestinationProperties => {
  return {
    errorHandlingConfig:
      output.errorHandlingConfig != null
        ? deserializeAws_restJson1ErrorHandlingConfig(output.errorHandlingConfig, context)
        : undefined,
    object: __expectString(output.object),
  } as any;
};

const deserializeAws_restJson1EventBridgeMetadata = (output: any, context: __SerdeContext): EventBridgeMetadata => {
  return {} as any;
};

const deserializeAws_restJson1ExecutionDetails = (output: any, context: __SerdeContext): ExecutionDetails => {
  return {
    mostRecentExecutionMessage: __expectString(output.mostRecentExecutionMessage),
    mostRecentExecutionStatus: __expectString(output.mostRecentExecutionStatus),
    mostRecentExecutionTime:
      output.mostRecentExecutionTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.mostRecentExecutionTime)))
        : undefined,
  } as any;
};

const deserializeAws_restJson1ExecutionRecord = (output: any, context: __SerdeContext): ExecutionRecord => {
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
    executionResult:
      output.executionResult != null
        ? deserializeAws_restJson1ExecutionResult(output.executionResult, context)
        : undefined,
    executionStatus: __expectString(output.executionStatus),
    lastUpdatedAt:
      output.lastUpdatedAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdatedAt)))
        : undefined,
    metadataCatalogDetails:
      output.metadataCatalogDetails != null
        ? deserializeAws_restJson1MetadataCatalogDetails(output.metadataCatalogDetails, context)
        : undefined,
    startedAt:
      output.startedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.startedAt))) : undefined,
  } as any;
};

const deserializeAws_restJson1ExecutionResult = (output: any, context: __SerdeContext): ExecutionResult => {
  return {
    bytesProcessed: __expectLong(output.bytesProcessed),
    bytesWritten: __expectLong(output.bytesWritten),
    errorInfo: output.errorInfo != null ? deserializeAws_restJson1ErrorInfo(output.errorInfo, context) : undefined,
    recordsProcessed: __expectLong(output.recordsProcessed),
  } as any;
};

const deserializeAws_restJson1FieldTypeDetails = (output: any, context: __SerdeContext): FieldTypeDetails => {
  return {
    fieldLengthRange:
      output.fieldLengthRange != null ? deserializeAws_restJson1Range(output.fieldLengthRange, context) : undefined,
    fieldType: __expectString(output.fieldType),
    fieldValueRange:
      output.fieldValueRange != null ? deserializeAws_restJson1Range(output.fieldValueRange, context) : undefined,
    filterOperators:
      output.filterOperators != null
        ? deserializeAws_restJson1FilterOperatorList(output.filterOperators, context)
        : undefined,
    supportedDateFormat: __expectString(output.supportedDateFormat),
    supportedValues:
      output.supportedValues != null
        ? deserializeAws_restJson1SupportedValueList(output.supportedValues, context)
        : undefined,
    valueRegexPattern: __expectString(output.valueRegexPattern),
  } as any;
};

const deserializeAws_restJson1FilterOperatorList = (output: any, context: __SerdeContext): (Operator | string)[] => {
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

const deserializeAws_restJson1FlowDefinition = (output: any, context: __SerdeContext): FlowDefinition => {
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
      output.lastRunExecutionDetails != null
        ? deserializeAws_restJson1ExecutionDetails(output.lastRunExecutionDetails, context)
        : undefined,
    lastUpdatedAt:
      output.lastUpdatedAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdatedAt)))
        : undefined,
    lastUpdatedBy: __expectString(output.lastUpdatedBy),
    sourceConnectorLabel: __expectString(output.sourceConnectorLabel),
    sourceConnectorType: __expectString(output.sourceConnectorType),
    tags: output.tags != null ? deserializeAws_restJson1TagMap(output.tags, context) : undefined,
    triggerType: __expectString(output.triggerType),
  } as any;
};

const deserializeAws_restJson1FlowExecutionList = (output: any, context: __SerdeContext): ExecutionRecord[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ExecutionRecord(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1FlowList = (output: any, context: __SerdeContext): FlowDefinition[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1FlowDefinition(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1GlueDataCatalogConfig = (output: any, context: __SerdeContext): GlueDataCatalogConfig => {
  return {
    databaseName: __expectString(output.databaseName),
    roleArn: __expectString(output.roleArn),
    tablePrefix: __expectString(output.tablePrefix),
  } as any;
};

const deserializeAws_restJson1GoogleAnalyticsConnectorProfileProperties = (
  output: any,
  context: __SerdeContext
): GoogleAnalyticsConnectorProfileProperties => {
  return {} as any;
};

const deserializeAws_restJson1GoogleAnalyticsMetadata = (
  output: any,
  context: __SerdeContext
): GoogleAnalyticsMetadata => {
  return {
    oAuthScopes:
      output.oAuthScopes != null ? deserializeAws_restJson1OAuthScopeList(output.oAuthScopes, context) : undefined,
  } as any;
};

const deserializeAws_restJson1GoogleAnalyticsSourceProperties = (
  output: any,
  context: __SerdeContext
): GoogleAnalyticsSourceProperties => {
  return {
    object: __expectString(output.object),
  } as any;
};

const deserializeAws_restJson1HoneycodeConnectorProfileProperties = (
  output: any,
  context: __SerdeContext
): HoneycodeConnectorProfileProperties => {
  return {} as any;
};

const deserializeAws_restJson1HoneycodeDestinationProperties = (
  output: any,
  context: __SerdeContext
): HoneycodeDestinationProperties => {
  return {
    errorHandlingConfig:
      output.errorHandlingConfig != null
        ? deserializeAws_restJson1ErrorHandlingConfig(output.errorHandlingConfig, context)
        : undefined,
    object: __expectString(output.object),
  } as any;
};

const deserializeAws_restJson1HoneycodeMetadata = (output: any, context: __SerdeContext): HoneycodeMetadata => {
  return {
    oAuthScopes:
      output.oAuthScopes != null ? deserializeAws_restJson1OAuthScopeList(output.oAuthScopes, context) : undefined,
  } as any;
};

const deserializeAws_restJson1IdFieldNameList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1IncrementalPullConfig = (output: any, context: __SerdeContext): IncrementalPullConfig => {
  return {
    datetimeTypeFieldName: __expectString(output.datetimeTypeFieldName),
  } as any;
};

const deserializeAws_restJson1InforNexusConnectorProfileProperties = (
  output: any,
  context: __SerdeContext
): InforNexusConnectorProfileProperties => {
  return {
    instanceUrl: __expectString(output.instanceUrl),
  } as any;
};

const deserializeAws_restJson1InforNexusMetadata = (output: any, context: __SerdeContext): InforNexusMetadata => {
  return {} as any;
};

const deserializeAws_restJson1InforNexusSourceProperties = (
  output: any,
  context: __SerdeContext
): InforNexusSourceProperties => {
  return {
    object: __expectString(output.object),
  } as any;
};

const deserializeAws_restJson1LambdaConnectorProvisioningConfig = (
  output: any,
  context: __SerdeContext
): LambdaConnectorProvisioningConfig => {
  return {
    lambdaArn: __expectString(output.lambdaArn),
  } as any;
};

const deserializeAws_restJson1LookoutMetricsDestinationProperties = (
  output: any,
  context: __SerdeContext
): LookoutMetricsDestinationProperties => {
  return {} as any;
};

const deserializeAws_restJson1MarketoConnectorProfileProperties = (
  output: any,
  context: __SerdeContext
): MarketoConnectorProfileProperties => {
  return {
    instanceUrl: __expectString(output.instanceUrl),
  } as any;
};

const deserializeAws_restJson1MarketoDestinationProperties = (
  output: any,
  context: __SerdeContext
): MarketoDestinationProperties => {
  return {
    errorHandlingConfig:
      output.errorHandlingConfig != null
        ? deserializeAws_restJson1ErrorHandlingConfig(output.errorHandlingConfig, context)
        : undefined,
    object: __expectString(output.object),
  } as any;
};

const deserializeAws_restJson1MarketoMetadata = (output: any, context: __SerdeContext): MarketoMetadata => {
  return {} as any;
};

const deserializeAws_restJson1MarketoSourceProperties = (
  output: any,
  context: __SerdeContext
): MarketoSourceProperties => {
  return {
    object: __expectString(output.object),
  } as any;
};

const deserializeAws_restJson1MetadataCatalogConfig = (output: any, context: __SerdeContext): MetadataCatalogConfig => {
  return {
    glueDataCatalog:
      output.glueDataCatalog != null
        ? deserializeAws_restJson1GlueDataCatalogConfig(output.glueDataCatalog, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1MetadataCatalogDetail = (output: any, context: __SerdeContext): MetadataCatalogDetail => {
  return {
    catalogType: __expectString(output.catalogType),
    partitionRegistrationOutput:
      output.partitionRegistrationOutput != null
        ? deserializeAws_restJson1RegistrationOutput(output.partitionRegistrationOutput, context)
        : undefined,
    tableName: __expectString(output.tableName),
    tableRegistrationOutput:
      output.tableRegistrationOutput != null
        ? deserializeAws_restJson1RegistrationOutput(output.tableRegistrationOutput, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1MetadataCatalogDetails = (
  output: any,
  context: __SerdeContext
): MetadataCatalogDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1MetadataCatalogDetail(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1OAuth2CustomParameter = (output: any, context: __SerdeContext): OAuth2CustomParameter => {
  return {
    connectorSuppliedValues:
      output.connectorSuppliedValues != null
        ? deserializeAws_restJson1ConnectorSuppliedValueList(output.connectorSuppliedValues, context)
        : undefined,
    description: __expectString(output.description),
    isRequired: __expectBoolean(output.isRequired),
    isSensitiveField: __expectBoolean(output.isSensitiveField),
    key: __expectString(output.key),
    label: __expectString(output.label),
    type: __expectString(output.type),
  } as any;
};

const deserializeAws_restJson1OAuth2CustomPropertiesList = (
  output: any,
  context: __SerdeContext
): OAuth2CustomParameter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1OAuth2CustomParameter(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1OAuth2Defaults = (output: any, context: __SerdeContext): OAuth2Defaults => {
  return {
    authCodeUrls:
      output.authCodeUrls != null ? deserializeAws_restJson1AuthCodeUrlList(output.authCodeUrls, context) : undefined,
    oauth2CustomProperties:
      output.oauth2CustomProperties != null
        ? deserializeAws_restJson1OAuth2CustomPropertiesList(output.oauth2CustomProperties, context)
        : undefined,
    oauth2GrantTypesSupported:
      output.oauth2GrantTypesSupported != null
        ? deserializeAws_restJson1OAuth2GrantTypeSupportedList(output.oauth2GrantTypesSupported, context)
        : undefined,
    oauthScopes:
      output.oauthScopes != null ? deserializeAws_restJson1OAuthScopeList(output.oauthScopes, context) : undefined,
    tokenUrls: output.tokenUrls != null ? deserializeAws_restJson1TokenUrlList(output.tokenUrls, context) : undefined,
  } as any;
};

const deserializeAws_restJson1OAuth2GrantTypeSupportedList = (
  output: any,
  context: __SerdeContext
): (OAuth2GrantType | string)[] => {
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

const deserializeAws_restJson1OAuth2Properties = (output: any, context: __SerdeContext): OAuth2Properties => {
  return {
    oAuth2GrantType: __expectString(output.oAuth2GrantType),
    tokenUrl: __expectString(output.tokenUrl),
    tokenUrlCustomProperties:
      output.tokenUrlCustomProperties != null
        ? deserializeAws_restJson1TokenUrlCustomProperties(output.tokenUrlCustomProperties, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1OAuthProperties = (output: any, context: __SerdeContext): OAuthProperties => {
  return {
    authCodeUrl: __expectString(output.authCodeUrl),
    oAuthScopes:
      output.oAuthScopes != null ? deserializeAws_restJson1OAuthScopeList(output.oAuthScopes, context) : undefined,
    tokenUrl: __expectString(output.tokenUrl),
  } as any;
};

const deserializeAws_restJson1OAuthScopeList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1PardotConnectorProfileProperties = (
  output: any,
  context: __SerdeContext
): PardotConnectorProfileProperties => {
  return {
    businessUnitId: __expectString(output.businessUnitId),
    instanceUrl: __expectString(output.instanceUrl),
    isSandboxEnvironment: __expectBoolean(output.isSandboxEnvironment),
  } as any;
};

const deserializeAws_restJson1PardotMetadata = (output: any, context: __SerdeContext): PardotMetadata => {
  return {} as any;
};

const deserializeAws_restJson1PardotSourceProperties = (
  output: any,
  context: __SerdeContext
): PardotSourceProperties => {
  return {
    object: __expectString(output.object),
  } as any;
};

const deserializeAws_restJson1PathPrefixHierarchy = (output: any, context: __SerdeContext): (PathPrefix | string)[] => {
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

const deserializeAws_restJson1PrefixConfig = (output: any, context: __SerdeContext): PrefixConfig => {
  return {
    pathPrefixHierarchy:
      output.pathPrefixHierarchy != null
        ? deserializeAws_restJson1PathPrefixHierarchy(output.pathPrefixHierarchy, context)
        : undefined,
    prefixFormat: __expectString(output.prefixFormat),
    prefixType: __expectString(output.prefixType),
  } as any;
};

const deserializeAws_restJson1PrivateConnectionProvisioningState = (
  output: any,
  context: __SerdeContext
): PrivateConnectionProvisioningState => {
  return {
    failureCause: __expectString(output.failureCause),
    failureMessage: __expectString(output.failureMessage),
    status: __expectString(output.status),
  } as any;
};

const deserializeAws_restJson1ProfilePropertiesMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1Range = (output: any, context: __SerdeContext): Range => {
  return {
    maximum: __limitedParseDouble(output.maximum),
    minimum: __limitedParseDouble(output.minimum),
  } as any;
};

const deserializeAws_restJson1RedshiftConnectorProfileProperties = (
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

const deserializeAws_restJson1RedshiftDestinationProperties = (
  output: any,
  context: __SerdeContext
): RedshiftDestinationProperties => {
  return {
    bucketPrefix: __expectString(output.bucketPrefix),
    errorHandlingConfig:
      output.errorHandlingConfig != null
        ? deserializeAws_restJson1ErrorHandlingConfig(output.errorHandlingConfig, context)
        : undefined,
    intermediateBucketName: __expectString(output.intermediateBucketName),
    object: __expectString(output.object),
  } as any;
};

const deserializeAws_restJson1RedshiftMetadata = (output: any, context: __SerdeContext): RedshiftMetadata => {
  return {} as any;
};

const deserializeAws_restJson1RegionList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1RegistrationOutput = (output: any, context: __SerdeContext): RegistrationOutput => {
  return {
    message: __expectString(output.message),
    result: __expectString(output.result),
    status: __expectString(output.status),
  } as any;
};

const deserializeAws_restJson1S3DestinationProperties = (
  output: any,
  context: __SerdeContext
): S3DestinationProperties => {
  return {
    bucketName: __expectString(output.bucketName),
    bucketPrefix: __expectString(output.bucketPrefix),
    s3OutputFormatConfig:
      output.s3OutputFormatConfig != null
        ? deserializeAws_restJson1S3OutputFormatConfig(output.s3OutputFormatConfig, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1S3InputFormatConfig = (output: any, context: __SerdeContext): S3InputFormatConfig => {
  return {
    s3InputFileType: __expectString(output.s3InputFileType),
  } as any;
};

const deserializeAws_restJson1S3Metadata = (output: any, context: __SerdeContext): S3Metadata => {
  return {} as any;
};

const deserializeAws_restJson1S3OutputFormatConfig = (output: any, context: __SerdeContext): S3OutputFormatConfig => {
  return {
    aggregationConfig:
      output.aggregationConfig != null
        ? deserializeAws_restJson1AggregationConfig(output.aggregationConfig, context)
        : undefined,
    fileType: __expectString(output.fileType),
    prefixConfig:
      output.prefixConfig != null ? deserializeAws_restJson1PrefixConfig(output.prefixConfig, context) : undefined,
    preserveSourceDataTyping: __expectBoolean(output.preserveSourceDataTyping),
  } as any;
};

const deserializeAws_restJson1S3SourceProperties = (output: any, context: __SerdeContext): S3SourceProperties => {
  return {
    bucketName: __expectString(output.bucketName),
    bucketPrefix: __expectString(output.bucketPrefix),
    s3InputFormatConfig:
      output.s3InputFormatConfig != null
        ? deserializeAws_restJson1S3InputFormatConfig(output.s3InputFormatConfig, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1SalesforceConnectorProfileProperties = (
  output: any,
  context: __SerdeContext
): SalesforceConnectorProfileProperties => {
  return {
    instanceUrl: __expectString(output.instanceUrl),
    isSandboxEnvironment: __expectBoolean(output.isSandboxEnvironment),
  } as any;
};

const deserializeAws_restJson1SalesforceDataTransferApiList = (
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

const deserializeAws_restJson1SalesforceDestinationProperties = (
  output: any,
  context: __SerdeContext
): SalesforceDestinationProperties => {
  return {
    dataTransferApi: __expectString(output.dataTransferApi),
    errorHandlingConfig:
      output.errorHandlingConfig != null
        ? deserializeAws_restJson1ErrorHandlingConfig(output.errorHandlingConfig, context)
        : undefined,
    idFieldNames:
      output.idFieldNames != null ? deserializeAws_restJson1IdFieldNameList(output.idFieldNames, context) : undefined,
    object: __expectString(output.object),
    writeOperationType: __expectString(output.writeOperationType),
  } as any;
};

const deserializeAws_restJson1SalesforceMetadata = (output: any, context: __SerdeContext): SalesforceMetadata => {
  return {
    dataTransferApis:
      output.dataTransferApis != null
        ? deserializeAws_restJson1SalesforceDataTransferApiList(output.dataTransferApis, context)
        : undefined,
    oAuthScopes:
      output.oAuthScopes != null ? deserializeAws_restJson1OAuthScopeList(output.oAuthScopes, context) : undefined,
  } as any;
};

const deserializeAws_restJson1SalesforceSourceProperties = (
  output: any,
  context: __SerdeContext
): SalesforceSourceProperties => {
  return {
    dataTransferApi: __expectString(output.dataTransferApi),
    enableDynamicFieldUpdate: __expectBoolean(output.enableDynamicFieldUpdate),
    includeDeletedRecords: __expectBoolean(output.includeDeletedRecords),
    object: __expectString(output.object),
  } as any;
};

const deserializeAws_restJson1SAPODataConnectorProfileProperties = (
  output: any,
  context: __SerdeContext
): SAPODataConnectorProfileProperties => {
  return {
    applicationHostUrl: __expectString(output.applicationHostUrl),
    applicationServicePath: __expectString(output.applicationServicePath),
    clientNumber: __expectString(output.clientNumber),
    logonLanguage: __expectString(output.logonLanguage),
    oAuthProperties:
      output.oAuthProperties != null
        ? deserializeAws_restJson1OAuthProperties(output.oAuthProperties, context)
        : undefined,
    portNumber: __expectInt32(output.portNumber),
    privateLinkServiceName: __expectString(output.privateLinkServiceName),
  } as any;
};

const deserializeAws_restJson1SAPODataDestinationProperties = (
  output: any,
  context: __SerdeContext
): SAPODataDestinationProperties => {
  return {
    errorHandlingConfig:
      output.errorHandlingConfig != null
        ? deserializeAws_restJson1ErrorHandlingConfig(output.errorHandlingConfig, context)
        : undefined,
    idFieldNames:
      output.idFieldNames != null ? deserializeAws_restJson1IdFieldNameList(output.idFieldNames, context) : undefined,
    objectPath: __expectString(output.objectPath),
    successResponseHandlingConfig:
      output.successResponseHandlingConfig != null
        ? deserializeAws_restJson1SuccessResponseHandlingConfig(output.successResponseHandlingConfig, context)
        : undefined,
    writeOperationType: __expectString(output.writeOperationType),
  } as any;
};

const deserializeAws_restJson1SAPODataMetadata = (output: any, context: __SerdeContext): SAPODataMetadata => {
  return {} as any;
};

const deserializeAws_restJson1SAPODataSourceProperties = (
  output: any,
  context: __SerdeContext
): SAPODataSourceProperties => {
  return {
    objectPath: __expectString(output.objectPath),
  } as any;
};

const deserializeAws_restJson1ScheduledTriggerProperties = (
  output: any,
  context: __SerdeContext
): ScheduledTriggerProperties => {
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

const deserializeAws_restJson1SchedulingFrequencyTypeList = (
  output: any,
  context: __SerdeContext
): (ScheduleFrequencyType | string)[] => {
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

const deserializeAws_restJson1ServiceNowConnectorProfileProperties = (
  output: any,
  context: __SerdeContext
): ServiceNowConnectorProfileProperties => {
  return {
    instanceUrl: __expectString(output.instanceUrl),
  } as any;
};

const deserializeAws_restJson1ServiceNowMetadata = (output: any, context: __SerdeContext): ServiceNowMetadata => {
  return {} as any;
};

const deserializeAws_restJson1ServiceNowSourceProperties = (
  output: any,
  context: __SerdeContext
): ServiceNowSourceProperties => {
  return {
    object: __expectString(output.object),
  } as any;
};

const deserializeAws_restJson1SingularConnectorProfileProperties = (
  output: any,
  context: __SerdeContext
): SingularConnectorProfileProperties => {
  return {} as any;
};

const deserializeAws_restJson1SingularMetadata = (output: any, context: __SerdeContext): SingularMetadata => {
  return {} as any;
};

const deserializeAws_restJson1SingularSourceProperties = (
  output: any,
  context: __SerdeContext
): SingularSourceProperties => {
  return {
    object: __expectString(output.object),
  } as any;
};

const deserializeAws_restJson1SlackConnectorProfileProperties = (
  output: any,
  context: __SerdeContext
): SlackConnectorProfileProperties => {
  return {
    instanceUrl: __expectString(output.instanceUrl),
  } as any;
};

const deserializeAws_restJson1SlackMetadata = (output: any, context: __SerdeContext): SlackMetadata => {
  return {
    oAuthScopes:
      output.oAuthScopes != null ? deserializeAws_restJson1OAuthScopeList(output.oAuthScopes, context) : undefined,
  } as any;
};

const deserializeAws_restJson1SlackSourceProperties = (output: any, context: __SerdeContext): SlackSourceProperties => {
  return {
    object: __expectString(output.object),
  } as any;
};

const deserializeAws_restJson1SnowflakeConnectorProfileProperties = (
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

const deserializeAws_restJson1SnowflakeDestinationProperties = (
  output: any,
  context: __SerdeContext
): SnowflakeDestinationProperties => {
  return {
    bucketPrefix: __expectString(output.bucketPrefix),
    errorHandlingConfig:
      output.errorHandlingConfig != null
        ? deserializeAws_restJson1ErrorHandlingConfig(output.errorHandlingConfig, context)
        : undefined,
    intermediateBucketName: __expectString(output.intermediateBucketName),
    object: __expectString(output.object),
  } as any;
};

const deserializeAws_restJson1SnowflakeMetadata = (output: any, context: __SerdeContext): SnowflakeMetadata => {
  return {
    supportedRegions:
      output.supportedRegions != null
        ? deserializeAws_restJson1RegionList(output.supportedRegions, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1SourceConnectorProperties = (
  output: any,
  context: __SerdeContext
): SourceConnectorProperties => {
  return {
    Amplitude:
      output.Amplitude != null
        ? deserializeAws_restJson1AmplitudeSourceProperties(output.Amplitude, context)
        : undefined,
    CustomConnector:
      output.CustomConnector != null
        ? deserializeAws_restJson1CustomConnectorSourceProperties(output.CustomConnector, context)
        : undefined,
    Datadog:
      output.Datadog != null ? deserializeAws_restJson1DatadogSourceProperties(output.Datadog, context) : undefined,
    Dynatrace:
      output.Dynatrace != null
        ? deserializeAws_restJson1DynatraceSourceProperties(output.Dynatrace, context)
        : undefined,
    GoogleAnalytics:
      output.GoogleAnalytics != null
        ? deserializeAws_restJson1GoogleAnalyticsSourceProperties(output.GoogleAnalytics, context)
        : undefined,
    InforNexus:
      output.InforNexus != null
        ? deserializeAws_restJson1InforNexusSourceProperties(output.InforNexus, context)
        : undefined,
    Marketo:
      output.Marketo != null ? deserializeAws_restJson1MarketoSourceProperties(output.Marketo, context) : undefined,
    Pardot: output.Pardot != null ? deserializeAws_restJson1PardotSourceProperties(output.Pardot, context) : undefined,
    S3: output.S3 != null ? deserializeAws_restJson1S3SourceProperties(output.S3, context) : undefined,
    SAPOData:
      output.SAPOData != null ? deserializeAws_restJson1SAPODataSourceProperties(output.SAPOData, context) : undefined,
    Salesforce:
      output.Salesforce != null
        ? deserializeAws_restJson1SalesforceSourceProperties(output.Salesforce, context)
        : undefined,
    ServiceNow:
      output.ServiceNow != null
        ? deserializeAws_restJson1ServiceNowSourceProperties(output.ServiceNow, context)
        : undefined,
    Singular:
      output.Singular != null ? deserializeAws_restJson1SingularSourceProperties(output.Singular, context) : undefined,
    Slack: output.Slack != null ? deserializeAws_restJson1SlackSourceProperties(output.Slack, context) : undefined,
    Trendmicro:
      output.Trendmicro != null
        ? deserializeAws_restJson1TrendmicroSourceProperties(output.Trendmicro, context)
        : undefined,
    Veeva: output.Veeva != null ? deserializeAws_restJson1VeevaSourceProperties(output.Veeva, context) : undefined,
    Zendesk:
      output.Zendesk != null ? deserializeAws_restJson1ZendeskSourceProperties(output.Zendesk, context) : undefined,
  } as any;
};

const deserializeAws_restJson1SourceFieldProperties = (output: any, context: __SerdeContext): SourceFieldProperties => {
  return {
    isQueryable: __expectBoolean(output.isQueryable),
    isRetrievable: __expectBoolean(output.isRetrievable),
    isTimestampFieldForIncrementalQueries: __expectBoolean(output.isTimestampFieldForIncrementalQueries),
  } as any;
};

const deserializeAws_restJson1SourceFields = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1SourceFlowConfig = (output: any, context: __SerdeContext): SourceFlowConfig => {
  return {
    apiVersion: __expectString(output.apiVersion),
    connectorProfileName: __expectString(output.connectorProfileName),
    connectorType: __expectString(output.connectorType),
    incrementalPullConfig:
      output.incrementalPullConfig != null
        ? deserializeAws_restJson1IncrementalPullConfig(output.incrementalPullConfig, context)
        : undefined,
    sourceConnectorProperties:
      output.sourceConnectorProperties != null
        ? deserializeAws_restJson1SourceConnectorProperties(output.sourceConnectorProperties, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1SuccessResponseHandlingConfig = (
  output: any,
  context: __SerdeContext
): SuccessResponseHandlingConfig => {
  return {
    bucketName: __expectString(output.bucketName),
    bucketPrefix: __expectString(output.bucketPrefix),
  } as any;
};

const deserializeAws_restJson1SupportedApiVersionList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1SupportedFieldTypeDetails = (
  output: any,
  context: __SerdeContext
): SupportedFieldTypeDetails => {
  return {
    v1: output.v1 != null ? deserializeAws_restJson1FieldTypeDetails(output.v1, context) : undefined,
  } as any;
};

const deserializeAws_restJson1SupportedOperatorList = (
  output: any,
  context: __SerdeContext
): (Operators | string)[] => {
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

const deserializeAws_restJson1SupportedValueList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1SupportedWriteOperationList = (
  output: any,
  context: __SerdeContext
): (WriteOperationType | string)[] => {
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

const deserializeAws_restJson1TagMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1Task = (output: any, context: __SerdeContext): Task => {
  return {
    connectorOperator:
      output.connectorOperator != null
        ? deserializeAws_restJson1ConnectorOperator(output.connectorOperator, context)
        : undefined,
    destinationField: __expectString(output.destinationField),
    sourceFields:
      output.sourceFields != null ? deserializeAws_restJson1SourceFields(output.sourceFields, context) : undefined,
    taskProperties:
      output.taskProperties != null
        ? deserializeAws_restJson1TaskPropertiesMap(output.taskProperties, context)
        : undefined,
    taskType: __expectString(output.taskType),
  } as any;
};

const deserializeAws_restJson1TaskPropertiesMap = (output: any, context: __SerdeContext): Record<string, string> => {
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

const deserializeAws_restJson1Tasks = (output: any, context: __SerdeContext): Task[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Task(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1TokenUrlCustomProperties = (
  output: any,
  context: __SerdeContext
): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1TokenUrlList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1TrendmicroConnectorProfileProperties = (
  output: any,
  context: __SerdeContext
): TrendmicroConnectorProfileProperties => {
  return {} as any;
};

const deserializeAws_restJson1TrendmicroMetadata = (output: any, context: __SerdeContext): TrendmicroMetadata => {
  return {} as any;
};

const deserializeAws_restJson1TrendmicroSourceProperties = (
  output: any,
  context: __SerdeContext
): TrendmicroSourceProperties => {
  return {
    object: __expectString(output.object),
  } as any;
};

const deserializeAws_restJson1TriggerConfig = (output: any, context: __SerdeContext): TriggerConfig => {
  return {
    triggerProperties:
      output.triggerProperties != null
        ? deserializeAws_restJson1TriggerProperties(output.triggerProperties, context)
        : undefined,
    triggerType: __expectString(output.triggerType),
  } as any;
};

const deserializeAws_restJson1TriggerProperties = (output: any, context: __SerdeContext): TriggerProperties => {
  return {
    Scheduled:
      output.Scheduled != null
        ? deserializeAws_restJson1ScheduledTriggerProperties(output.Scheduled, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1TriggerTypeList = (output: any, context: __SerdeContext): (TriggerType | string)[] => {
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

const deserializeAws_restJson1UpsolverDestinationProperties = (
  output: any,
  context: __SerdeContext
): UpsolverDestinationProperties => {
  return {
    bucketName: __expectString(output.bucketName),
    bucketPrefix: __expectString(output.bucketPrefix),
    s3OutputFormatConfig:
      output.s3OutputFormatConfig != null
        ? deserializeAws_restJson1UpsolverS3OutputFormatConfig(output.s3OutputFormatConfig, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1UpsolverMetadata = (output: any, context: __SerdeContext): UpsolverMetadata => {
  return {} as any;
};

const deserializeAws_restJson1UpsolverS3OutputFormatConfig = (
  output: any,
  context: __SerdeContext
): UpsolverS3OutputFormatConfig => {
  return {
    aggregationConfig:
      output.aggregationConfig != null
        ? deserializeAws_restJson1AggregationConfig(output.aggregationConfig, context)
        : undefined,
    fileType: __expectString(output.fileType),
    prefixConfig:
      output.prefixConfig != null ? deserializeAws_restJson1PrefixConfig(output.prefixConfig, context) : undefined,
  } as any;
};

const deserializeAws_restJson1VeevaConnectorProfileProperties = (
  output: any,
  context: __SerdeContext
): VeevaConnectorProfileProperties => {
  return {
    instanceUrl: __expectString(output.instanceUrl),
  } as any;
};

const deserializeAws_restJson1VeevaMetadata = (output: any, context: __SerdeContext): VeevaMetadata => {
  return {} as any;
};

const deserializeAws_restJson1VeevaSourceProperties = (output: any, context: __SerdeContext): VeevaSourceProperties => {
  return {
    documentType: __expectString(output.documentType),
    includeAllVersions: __expectBoolean(output.includeAllVersions),
    includeRenditions: __expectBoolean(output.includeRenditions),
    includeSourceFiles: __expectBoolean(output.includeSourceFiles),
    object: __expectString(output.object),
  } as any;
};

const deserializeAws_restJson1ZendeskConnectorProfileProperties = (
  output: any,
  context: __SerdeContext
): ZendeskConnectorProfileProperties => {
  return {
    instanceUrl: __expectString(output.instanceUrl),
  } as any;
};

const deserializeAws_restJson1ZendeskDestinationProperties = (
  output: any,
  context: __SerdeContext
): ZendeskDestinationProperties => {
  return {
    errorHandlingConfig:
      output.errorHandlingConfig != null
        ? deserializeAws_restJson1ErrorHandlingConfig(output.errorHandlingConfig, context)
        : undefined,
    idFieldNames:
      output.idFieldNames != null ? deserializeAws_restJson1IdFieldNameList(output.idFieldNames, context) : undefined,
    object: __expectString(output.object),
    writeOperationType: __expectString(output.writeOperationType),
  } as any;
};

const deserializeAws_restJson1ZendeskMetadata = (output: any, context: __SerdeContext): ZendeskMetadata => {
  return {
    oAuthScopes:
      output.oAuthScopes != null ? deserializeAws_restJson1OAuthScopeList(output.oAuthScopes, context) : undefined,
  } as any;
};

const deserializeAws_restJson1ZendeskSourceProperties = (
  output: any,
  context: __SerdeContext
): ZendeskSourceProperties => {
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
