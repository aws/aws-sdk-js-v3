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
import { ListFlowsCommandInput, ListFlowsCommandOutput } from "../commands/ListFlowsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { StartFlowCommandInput, StartFlowCommandOutput } from "../commands/StartFlowCommand";
import { StopFlowCommandInput, StopFlowCommandOutput } from "../commands/StopFlowCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  UpdateConnectorProfileCommandInput,
  UpdateConnectorProfileCommandOutput,
} from "../commands/UpdateConnectorProfileCommand";
import { UpdateFlowCommandInput, UpdateFlowCommandOutput } from "../commands/UpdateFlowCommand";
import {
  AggregationConfig,
  AmplitudeConnectorProfileCredentials,
  AmplitudeConnectorProfileProperties,
  AmplitudeMetadata,
  AmplitudeSourceProperties,
  BasicAuthCredentials,
  ConflictException,
  ConnectorAuthenticationException,
  ConnectorConfiguration,
  ConnectorEntity,
  ConnectorEntityField,
  ConnectorMetadata,
  ConnectorOAuthRequest,
  ConnectorOperator,
  ConnectorProfile,
  ConnectorProfileConfig,
  ConnectorProfileCredentials,
  ConnectorProfileProperties,
  ConnectorServerException,
  ConnectorType,
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
  LookoutMetricsDestinationProperties,
  MarketoConnectorProfileCredentials,
  MarketoConnectorProfileProperties,
  MarketoMetadata,
  MarketoSourceProperties,
  OAuthCredentials,
  OAuthProperties,
  Operator,
  OperatorPropertiesKeys,
  PrefixConfig,
  PrivateConnectionProvisioningState,
  RedshiftConnectorProfileCredentials,
  RedshiftConnectorProfileProperties,
  RedshiftDestinationProperties,
  RedshiftMetadata,
  ResourceNotFoundException,
  S3DestinationProperties,
  S3Metadata,
  S3OutputFormatConfig,
  S3SourceProperties,
  SAPODataConnectorProfileCredentials,
  SAPODataConnectorProfileProperties,
  SAPODataMetadata,
  SAPODataSourceProperties,
  SalesforceConnectorProfileCredentials,
  SalesforceConnectorProfileProperties,
  SalesforceDestinationProperties,
  SalesforceMetadata,
  SalesforceSourceProperties,
  ScheduleFrequencyType,
  ScheduledTriggerProperties,
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
  SupportedFieldTypeDetails,
  Task,
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
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
  SmithyException as __SmithyException,
} from "@aws-sdk/types";

export const serializeAws_restJson1CreateConnectorProfileCommand = async (
  input: CreateConnectorProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/create-connector-profile";
  let body: any;
  body = JSON.stringify({
    ...(input.connectionMode !== undefined &&
      input.connectionMode !== null && { connectionMode: input.connectionMode }),
    ...(input.connectorProfileConfig !== undefined &&
      input.connectorProfileConfig !== null && {
        connectorProfileConfig: serializeAws_restJson1ConnectorProfileConfig(input.connectorProfileConfig, context),
      }),
    ...(input.connectorProfileName !== undefined &&
      input.connectorProfileName !== null && { connectorProfileName: input.connectorProfileName }),
    ...(input.connectorType !== undefined && input.connectorType !== null && { connectorType: input.connectorType }),
    ...(input.kmsArn !== undefined && input.kmsArn !== null && { kmsArn: input.kmsArn }),
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/create-flow";
  let body: any;
  body = JSON.stringify({
    ...(input.description !== undefined && input.description !== null && { description: input.description }),
    ...(input.destinationFlowConfigList !== undefined &&
      input.destinationFlowConfigList !== null && {
        destinationFlowConfigList: serializeAws_restJson1DestinationFlowConfigList(
          input.destinationFlowConfigList,
          context
        ),
      }),
    ...(input.flowName !== undefined && input.flowName !== null && { flowName: input.flowName }),
    ...(input.kmsArn !== undefined && input.kmsArn !== null && { kmsArn: input.kmsArn }),
    ...(input.sourceFlowConfig !== undefined &&
      input.sourceFlowConfig !== null && {
        sourceFlowConfig: serializeAws_restJson1SourceFlowConfig(input.sourceFlowConfig, context),
      }),
    ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
    ...(input.tasks !== undefined &&
      input.tasks !== null && { tasks: serializeAws_restJson1Tasks(input.tasks, context) }),
    ...(input.triggerConfig !== undefined &&
      input.triggerConfig !== null && {
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
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/delete-connector-profile";
  let body: any;
  body = JSON.stringify({
    ...(input.connectorProfileName !== undefined &&
      input.connectorProfileName !== null && { connectorProfileName: input.connectorProfileName }),
    ...(input.forceDelete !== undefined && input.forceDelete !== null && { forceDelete: input.forceDelete }),
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/delete-flow";
  let body: any;
  body = JSON.stringify({
    ...(input.flowName !== undefined && input.flowName !== null && { flowName: input.flowName }),
    ...(input.forceDelete !== undefined && input.forceDelete !== null && { forceDelete: input.forceDelete }),
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
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/describe-connector-entity";
  let body: any;
  body = JSON.stringify({
    ...(input.connectorEntityName !== undefined &&
      input.connectorEntityName !== null && { connectorEntityName: input.connectorEntityName }),
    ...(input.connectorProfileName !== undefined &&
      input.connectorProfileName !== null && { connectorProfileName: input.connectorProfileName }),
    ...(input.connectorType !== undefined && input.connectorType !== null && { connectorType: input.connectorType }),
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
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/describe-connector-profiles";
  let body: any;
  body = JSON.stringify({
    ...(input.connectorProfileNames !== undefined &&
      input.connectorProfileNames !== null && {
        connectorProfileNames: serializeAws_restJson1ConnectorProfileNameList(input.connectorProfileNames, context),
      }),
    ...(input.connectorType !== undefined && input.connectorType !== null && { connectorType: input.connectorType }),
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/describe-connectors";
  let body: any;
  body = JSON.stringify({
    ...(input.connectorTypes !== undefined &&
      input.connectorTypes !== null && {
        connectorTypes: serializeAws_restJson1ConnectorTypeList(input.connectorTypes, context),
      }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/describe-flow";
  let body: any;
  body = JSON.stringify({
    ...(input.flowName !== undefined && input.flowName !== null && { flowName: input.flowName }),
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
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/describe-flow-execution-records";
  let body: any;
  body = JSON.stringify({
    ...(input.flowName !== undefined && input.flowName !== null && { flowName: input.flowName }),
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/list-connector-entities";
  let body: any;
  body = JSON.stringify({
    ...(input.connectorProfileName !== undefined &&
      input.connectorProfileName !== null && { connectorProfileName: input.connectorProfileName }),
    ...(input.connectorType !== undefined && input.connectorType !== null && { connectorType: input.connectorType }),
    ...(input.entitiesPath !== undefined && input.entitiesPath !== null && { entitiesPath: input.entitiesPath }),
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/list-flows";
  let body: any;
  body = JSON.stringify({
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
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
  if (input.resourceArn !== undefined) {
    const labelValue: string = input.resourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: resourceArn.");
    }
    resolvedPath = resolvedPath.replace("{resourceArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: resourceArn.");
  }
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

export const serializeAws_restJson1StartFlowCommand = async (
  input: StartFlowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/start-flow";
  let body: any;
  body = JSON.stringify({
    ...(input.flowName !== undefined && input.flowName !== null && { flowName: input.flowName }),
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/stop-flow";
  let body: any;
  body = JSON.stringify({
    ...(input.flowName !== undefined && input.flowName !== null && { flowName: input.flowName }),
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
  if (input.resourceArn !== undefined) {
    const labelValue: string = input.resourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: resourceArn.");
    }
    resolvedPath = resolvedPath.replace("{resourceArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: resourceArn.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
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
  if (input.resourceArn !== undefined) {
    const labelValue: string = input.resourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: resourceArn.");
    }
    resolvedPath = resolvedPath.replace("{resourceArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: resourceArn.");
  }
  const query: any = {
    ...(input.tagKeys !== undefined && { tagKeys: (input.tagKeys || []).map((_entry) => _entry as any) }),
  };
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
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/update-connector-profile";
  let body: any;
  body = JSON.stringify({
    ...(input.connectionMode !== undefined &&
      input.connectionMode !== null && { connectionMode: input.connectionMode }),
    ...(input.connectorProfileConfig !== undefined &&
      input.connectorProfileConfig !== null && {
        connectorProfileConfig: serializeAws_restJson1ConnectorProfileConfig(input.connectorProfileConfig, context),
      }),
    ...(input.connectorProfileName !== undefined &&
      input.connectorProfileName !== null && { connectorProfileName: input.connectorProfileName }),
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/update-flow";
  let body: any;
  body = JSON.stringify({
    ...(input.description !== undefined && input.description !== null && { description: input.description }),
    ...(input.destinationFlowConfigList !== undefined &&
      input.destinationFlowConfigList !== null && {
        destinationFlowConfigList: serializeAws_restJson1DestinationFlowConfigList(
          input.destinationFlowConfigList,
          context
        ),
      }),
    ...(input.flowName !== undefined && input.flowName !== null && { flowName: input.flowName }),
    ...(input.sourceFlowConfig !== undefined &&
      input.sourceFlowConfig !== null && {
        sourceFlowConfig: serializeAws_restJson1SourceFlowConfig(input.sourceFlowConfig, context),
      }),
    ...(input.tasks !== undefined &&
      input.tasks !== null && { tasks: serializeAws_restJson1Tasks(input.tasks, context) }),
    ...(input.triggerConfig !== undefined &&
      input.triggerConfig !== null && {
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
  const contents: CreateConnectorProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    connectorProfileArn: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.connectorProfileArn !== undefined && data.connectorProfileArn !== null) {
    contents.connectorProfileArn = __expectString(data.connectorProfileArn);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateConnectorProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConnectorProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.appflow#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConnectorAuthenticationException":
    case "com.amazonaws.appflow#ConnectorAuthenticationException":
      response = {
        ...(await deserializeAws_restJson1ConnectorAuthenticationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.appflow#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.appflow#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.appflow#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CreateFlowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFlowCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateFlowCommandError(output, context);
  }
  const contents: CreateFlowCommandOutput = {
    $metadata: deserializeMetadata(output),
    flowArn: undefined,
    flowStatus: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.flowArn !== undefined && data.flowArn !== null) {
    contents.flowArn = __expectString(data.flowArn);
  }
  if (data.flowStatus !== undefined && data.flowStatus !== null) {
    contents.flowStatus = __expectString(data.flowStatus);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateFlowCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFlowCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.appflow#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConnectorAuthenticationException":
    case "com.amazonaws.appflow#ConnectorAuthenticationException":
      response = {
        ...(await deserializeAws_restJson1ConnectorAuthenticationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConnectorServerException":
    case "com.amazonaws.appflow#ConnectorServerException":
      response = {
        ...(await deserializeAws_restJson1ConnectorServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.appflow#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.appflow#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.appflow#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.appflow#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteConnectorProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConnectorProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteConnectorProfileCommandError(output, context);
  }
  const contents: DeleteConnectorProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteConnectorProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConnectorProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.appflow#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.appflow#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.appflow#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteFlowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFlowCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteFlowCommandError(output, context);
  }
  const contents: DeleteFlowCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteFlowCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFlowCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.appflow#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.appflow#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.appflow#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DescribeConnectorEntityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConnectorEntityCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeConnectorEntityCommandError(output, context);
  }
  const contents: DescribeConnectorEntityCommandOutput = {
    $metadata: deserializeMetadata(output),
    connectorEntityFields: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.connectorEntityFields !== undefined && data.connectorEntityFields !== null) {
    contents.connectorEntityFields = deserializeAws_restJson1ConnectorEntityFieldList(
      data.connectorEntityFields,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeConnectorEntityCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConnectorEntityCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConnectorAuthenticationException":
    case "com.amazonaws.appflow#ConnectorAuthenticationException":
      response = {
        ...(await deserializeAws_restJson1ConnectorAuthenticationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConnectorServerException":
    case "com.amazonaws.appflow#ConnectorServerException":
      response = {
        ...(await deserializeAws_restJson1ConnectorServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.appflow#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.appflow#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.appflow#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DescribeConnectorProfilesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConnectorProfilesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeConnectorProfilesCommandError(output, context);
  }
  const contents: DescribeConnectorProfilesCommandOutput = {
    $metadata: deserializeMetadata(output),
    connectorProfileDetails: undefined,
    nextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.connectorProfileDetails !== undefined && data.connectorProfileDetails !== null) {
    contents.connectorProfileDetails = deserializeAws_restJson1ConnectorProfileDetailList(
      data.connectorProfileDetails,
      context
    );
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeConnectorProfilesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConnectorProfilesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.appflow#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.appflow#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DescribeConnectorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConnectorsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeConnectorsCommandError(output, context);
  }
  const contents: DescribeConnectorsCommandOutput = {
    $metadata: deserializeMetadata(output),
    connectorConfigurations: undefined,
    nextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.connectorConfigurations !== undefined && data.connectorConfigurations !== null) {
    contents.connectorConfigurations = deserializeAws_restJson1ConnectorConfigurationsMap(
      data.connectorConfigurations,
      context
    );
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeConnectorsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConnectorsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.appflow#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.appflow#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DescribeFlowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFlowCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeFlowCommandError(output, context);
  }
  const contents: DescribeFlowCommandOutput = {
    $metadata: deserializeMetadata(output),
    createdAt: undefined,
    createdBy: undefined,
    description: undefined,
    destinationFlowConfigList: undefined,
    flowArn: undefined,
    flowName: undefined,
    flowStatus: undefined,
    flowStatusMessage: undefined,
    kmsArn: undefined,
    lastRunExecutionDetails: undefined,
    lastUpdatedAt: undefined,
    lastUpdatedBy: undefined,
    sourceFlowConfig: undefined,
    tags: undefined,
    tasks: undefined,
    triggerConfig: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.createdAt !== undefined && data.createdAt !== null) {
    contents.createdAt = new Date(Math.round(data.createdAt * 1000));
  }
  if (data.createdBy !== undefined && data.createdBy !== null) {
    contents.createdBy = __expectString(data.createdBy);
  }
  if (data.description !== undefined && data.description !== null) {
    contents.description = __expectString(data.description);
  }
  if (data.destinationFlowConfigList !== undefined && data.destinationFlowConfigList !== null) {
    contents.destinationFlowConfigList = deserializeAws_restJson1DestinationFlowConfigList(
      data.destinationFlowConfigList,
      context
    );
  }
  if (data.flowArn !== undefined && data.flowArn !== null) {
    contents.flowArn = __expectString(data.flowArn);
  }
  if (data.flowName !== undefined && data.flowName !== null) {
    contents.flowName = __expectString(data.flowName);
  }
  if (data.flowStatus !== undefined && data.flowStatus !== null) {
    contents.flowStatus = __expectString(data.flowStatus);
  }
  if (data.flowStatusMessage !== undefined && data.flowStatusMessage !== null) {
    contents.flowStatusMessage = __expectString(data.flowStatusMessage);
  }
  if (data.kmsArn !== undefined && data.kmsArn !== null) {
    contents.kmsArn = __expectString(data.kmsArn);
  }
  if (data.lastRunExecutionDetails !== undefined && data.lastRunExecutionDetails !== null) {
    contents.lastRunExecutionDetails = deserializeAws_restJson1ExecutionDetails(data.lastRunExecutionDetails, context);
  }
  if (data.lastUpdatedAt !== undefined && data.lastUpdatedAt !== null) {
    contents.lastUpdatedAt = new Date(Math.round(data.lastUpdatedAt * 1000));
  }
  if (data.lastUpdatedBy !== undefined && data.lastUpdatedBy !== null) {
    contents.lastUpdatedBy = __expectString(data.lastUpdatedBy);
  }
  if (data.sourceFlowConfig !== undefined && data.sourceFlowConfig !== null) {
    contents.sourceFlowConfig = deserializeAws_restJson1SourceFlowConfig(data.sourceFlowConfig, context);
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  if (data.tasks !== undefined && data.tasks !== null) {
    contents.tasks = deserializeAws_restJson1Tasks(data.tasks, context);
  }
  if (data.triggerConfig !== undefined && data.triggerConfig !== null) {
    contents.triggerConfig = deserializeAws_restJson1TriggerConfig(data.triggerConfig, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeFlowCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFlowCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.appflow#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.appflow#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DescribeFlowExecutionRecordsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFlowExecutionRecordsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeFlowExecutionRecordsCommandError(output, context);
  }
  const contents: DescribeFlowExecutionRecordsCommandOutput = {
    $metadata: deserializeMetadata(output),
    flowExecutions: undefined,
    nextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.flowExecutions !== undefined && data.flowExecutions !== null) {
    contents.flowExecutions = deserializeAws_restJson1FlowExecutionList(data.flowExecutions, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeFlowExecutionRecordsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFlowExecutionRecordsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.appflow#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.appflow#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.appflow#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListConnectorEntitiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConnectorEntitiesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListConnectorEntitiesCommandError(output, context);
  }
  const contents: ListConnectorEntitiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    connectorEntityMap: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.connectorEntityMap !== undefined && data.connectorEntityMap !== null) {
    contents.connectorEntityMap = deserializeAws_restJson1ConnectorEntityMap(data.connectorEntityMap, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListConnectorEntitiesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConnectorEntitiesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConnectorAuthenticationException":
    case "com.amazonaws.appflow#ConnectorAuthenticationException":
      response = {
        ...(await deserializeAws_restJson1ConnectorAuthenticationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConnectorServerException":
    case "com.amazonaws.appflow#ConnectorServerException":
      response = {
        ...(await deserializeAws_restJson1ConnectorServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.appflow#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.appflow#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.appflow#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListFlowsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFlowsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListFlowsCommandError(output, context);
  }
  const contents: ListFlowsCommandOutput = {
    $metadata: deserializeMetadata(output),
    flows: undefined,
    nextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.flows !== undefined && data.flows !== null) {
    contents.flows = deserializeAws_restJson1FlowList(data.flows, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListFlowsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFlowsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.appflow#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.appflow#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListTagsForResourceCommandError(output, context);
  }
  const contents: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    tags: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.tags !== undefined && data.tags !== null) {
    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.appflow#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.appflow#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.appflow#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1StartFlowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartFlowCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartFlowCommandError(output, context);
  }
  const contents: StartFlowCommandOutput = {
    $metadata: deserializeMetadata(output),
    executionId: undefined,
    flowArn: undefined,
    flowStatus: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.executionId !== undefined && data.executionId !== null) {
    contents.executionId = __expectString(data.executionId);
  }
  if (data.flowArn !== undefined && data.flowArn !== null) {
    contents.flowArn = __expectString(data.flowArn);
  }
  if (data.flowStatus !== undefined && data.flowStatus !== null) {
    contents.flowStatus = __expectString(data.flowStatus);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1StartFlowCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartFlowCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.appflow#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.appflow#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.appflow#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.appflow#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1StopFlowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopFlowCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StopFlowCommandError(output, context);
  }
  const contents: StopFlowCommandOutput = {
    $metadata: deserializeMetadata(output),
    flowArn: undefined,
    flowStatus: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.flowArn !== undefined && data.flowArn !== null) {
    contents.flowArn = __expectString(data.flowArn);
  }
  if (data.flowStatus !== undefined && data.flowStatus !== null) {
    contents.flowStatus = __expectString(data.flowStatus);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1StopFlowCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopFlowCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.appflow#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.appflow#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.appflow#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedOperationException":
    case "com.amazonaws.appflow#UnsupportedOperationException":
      response = {
        ...(await deserializeAws_restJson1UnsupportedOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1TagResourceCommandError(output, context);
  }
  const contents: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.appflow#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.appflow#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.appflow#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UntagResourceCommandError(output, context);
  }
  const contents: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.appflow#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.appflow#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.appflow#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateConnectorProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConnectorProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateConnectorProfileCommandError(output, context);
  }
  const contents: UpdateConnectorProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    connectorProfileArn: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.connectorProfileArn !== undefined && data.connectorProfileArn !== null) {
    contents.connectorProfileArn = __expectString(data.connectorProfileArn);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateConnectorProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConnectorProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.appflow#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConnectorAuthenticationException":
    case "com.amazonaws.appflow#ConnectorAuthenticationException":
      response = {
        ...(await deserializeAws_restJson1ConnectorAuthenticationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.appflow#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.appflow#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.appflow#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateFlowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFlowCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateFlowCommandError(output, context);
  }
  const contents: UpdateFlowCommandOutput = {
    $metadata: deserializeMetadata(output),
    flowStatus: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.flowStatus !== undefined && data.flowStatus !== null) {
    contents.flowStatus = __expectString(data.flowStatus);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateFlowCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFlowCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.appflow#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConnectorAuthenticationException":
    case "com.amazonaws.appflow#ConnectorAuthenticationException":
      response = {
        ...(await deserializeAws_restJson1ConnectorAuthenticationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConnectorServerException":
    case "com.amazonaws.appflow#ConnectorServerException":
      response = {
        ...(await deserializeAws_restJson1ConnectorServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.appflow#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.appflow#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.appflow#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.appflow#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

const deserializeAws_restJson1ConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictException> => {
  const contents: ConflictException = {
    name: "ConflictException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1ConnectorAuthenticationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConnectorAuthenticationException> => {
  const contents: ConnectorAuthenticationException = {
    name: "ConnectorAuthenticationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1ConnectorServerExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConnectorServerException> => {
  const contents: ConnectorServerException = {
    name: "ConnectorServerException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1InternalServerExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const contents: InternalServerException = {
    name: "InternalServerException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: ResourceNotFoundException = {
    name: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1ServiceQuotaExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceQuotaExceededException> => {
  const contents: ServiceQuotaExceededException = {
    name: "ServiceQuotaExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1UnsupportedOperationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedOperationException> => {
  const contents: UnsupportedOperationException = {
    name: "UnsupportedOperationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1ValidationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ValidationException> => {
  const contents: ValidationException = {
    name: "ValidationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  return contents;
};

const serializeAws_restJson1AggregationConfig = (input: AggregationConfig, context: __SerdeContext): any => {
  return {
    ...(input.aggregationType !== undefined &&
      input.aggregationType !== null && { aggregationType: input.aggregationType }),
  };
};

const serializeAws_restJson1AmplitudeConnectorProfileCredentials = (
  input: AmplitudeConnectorProfileCredentials,
  context: __SerdeContext
): any => {
  return {
    ...(input.apiKey !== undefined && input.apiKey !== null && { apiKey: input.apiKey }),
    ...(input.secretKey !== undefined && input.secretKey !== null && { secretKey: input.secretKey }),
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
    ...(input.object !== undefined && input.object !== null && { object: input.object }),
  };
};

const serializeAws_restJson1BasicAuthCredentials = (input: BasicAuthCredentials, context: __SerdeContext): any => {
  return {
    ...(input.password !== undefined && input.password !== null && { password: input.password }),
    ...(input.username !== undefined && input.username !== null && { username: input.username }),
  };
};

const serializeAws_restJson1ConnectorOAuthRequest = (input: ConnectorOAuthRequest, context: __SerdeContext): any => {
  return {
    ...(input.authCode !== undefined && input.authCode !== null && { authCode: input.authCode }),
    ...(input.redirectUri !== undefined && input.redirectUri !== null && { redirectUri: input.redirectUri }),
  };
};

const serializeAws_restJson1ConnectorOperator = (input: ConnectorOperator, context: __SerdeContext): any => {
  return {
    ...(input.Amplitude !== undefined && input.Amplitude !== null && { Amplitude: input.Amplitude }),
    ...(input.Datadog !== undefined && input.Datadog !== null && { Datadog: input.Datadog }),
    ...(input.Dynatrace !== undefined && input.Dynatrace !== null && { Dynatrace: input.Dynatrace }),
    ...(input.GoogleAnalytics !== undefined &&
      input.GoogleAnalytics !== null && { GoogleAnalytics: input.GoogleAnalytics }),
    ...(input.InforNexus !== undefined && input.InforNexus !== null && { InforNexus: input.InforNexus }),
    ...(input.Marketo !== undefined && input.Marketo !== null && { Marketo: input.Marketo }),
    ...(input.S3 !== undefined && input.S3 !== null && { S3: input.S3 }),
    ...(input.SAPOData !== undefined && input.SAPOData !== null && { SAPOData: input.SAPOData }),
    ...(input.Salesforce !== undefined && input.Salesforce !== null && { Salesforce: input.Salesforce }),
    ...(input.ServiceNow !== undefined && input.ServiceNow !== null && { ServiceNow: input.ServiceNow }),
    ...(input.Singular !== undefined && input.Singular !== null && { Singular: input.Singular }),
    ...(input.Slack !== undefined && input.Slack !== null && { Slack: input.Slack }),
    ...(input.Trendmicro !== undefined && input.Trendmicro !== null && { Trendmicro: input.Trendmicro }),
    ...(input.Veeva !== undefined && input.Veeva !== null && { Veeva: input.Veeva }),
    ...(input.Zendesk !== undefined && input.Zendesk !== null && { Zendesk: input.Zendesk }),
  };
};

const serializeAws_restJson1ConnectorProfileConfig = (input: ConnectorProfileConfig, context: __SerdeContext): any => {
  return {
    ...(input.connectorProfileCredentials !== undefined &&
      input.connectorProfileCredentials !== null && {
        connectorProfileCredentials: serializeAws_restJson1ConnectorProfileCredentials(
          input.connectorProfileCredentials,
          context
        ),
      }),
    ...(input.connectorProfileProperties !== undefined &&
      input.connectorProfileProperties !== null && {
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
    ...(input.Amplitude !== undefined &&
      input.Amplitude !== null && {
        Amplitude: serializeAws_restJson1AmplitudeConnectorProfileCredentials(input.Amplitude, context),
      }),
    ...(input.Datadog !== undefined &&
      input.Datadog !== null && {
        Datadog: serializeAws_restJson1DatadogConnectorProfileCredentials(input.Datadog, context),
      }),
    ...(input.Dynatrace !== undefined &&
      input.Dynatrace !== null && {
        Dynatrace: serializeAws_restJson1DynatraceConnectorProfileCredentials(input.Dynatrace, context),
      }),
    ...(input.GoogleAnalytics !== undefined &&
      input.GoogleAnalytics !== null && {
        GoogleAnalytics: serializeAws_restJson1GoogleAnalyticsConnectorProfileCredentials(
          input.GoogleAnalytics,
          context
        ),
      }),
    ...(input.Honeycode !== undefined &&
      input.Honeycode !== null && {
        Honeycode: serializeAws_restJson1HoneycodeConnectorProfileCredentials(input.Honeycode, context),
      }),
    ...(input.InforNexus !== undefined &&
      input.InforNexus !== null && {
        InforNexus: serializeAws_restJson1InforNexusConnectorProfileCredentials(input.InforNexus, context),
      }),
    ...(input.Marketo !== undefined &&
      input.Marketo !== null && {
        Marketo: serializeAws_restJson1MarketoConnectorProfileCredentials(input.Marketo, context),
      }),
    ...(input.Redshift !== undefined &&
      input.Redshift !== null && {
        Redshift: serializeAws_restJson1RedshiftConnectorProfileCredentials(input.Redshift, context),
      }),
    ...(input.SAPOData !== undefined &&
      input.SAPOData !== null && {
        SAPOData: serializeAws_restJson1SAPODataConnectorProfileCredentials(input.SAPOData, context),
      }),
    ...(input.Salesforce !== undefined &&
      input.Salesforce !== null && {
        Salesforce: serializeAws_restJson1SalesforceConnectorProfileCredentials(input.Salesforce, context),
      }),
    ...(input.ServiceNow !== undefined &&
      input.ServiceNow !== null && {
        ServiceNow: serializeAws_restJson1ServiceNowConnectorProfileCredentials(input.ServiceNow, context),
      }),
    ...(input.Singular !== undefined &&
      input.Singular !== null && {
        Singular: serializeAws_restJson1SingularConnectorProfileCredentials(input.Singular, context),
      }),
    ...(input.Slack !== undefined &&
      input.Slack !== null && { Slack: serializeAws_restJson1SlackConnectorProfileCredentials(input.Slack, context) }),
    ...(input.Snowflake !== undefined &&
      input.Snowflake !== null && {
        Snowflake: serializeAws_restJson1SnowflakeConnectorProfileCredentials(input.Snowflake, context),
      }),
    ...(input.Trendmicro !== undefined &&
      input.Trendmicro !== null && {
        Trendmicro: serializeAws_restJson1TrendmicroConnectorProfileCredentials(input.Trendmicro, context),
      }),
    ...(input.Veeva !== undefined &&
      input.Veeva !== null && { Veeva: serializeAws_restJson1VeevaConnectorProfileCredentials(input.Veeva, context) }),
    ...(input.Zendesk !== undefined &&
      input.Zendesk !== null && {
        Zendesk: serializeAws_restJson1ZendeskConnectorProfileCredentials(input.Zendesk, context),
      }),
  };
};

const serializeAws_restJson1ConnectorProfileNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1ConnectorProfileProperties = (
  input: ConnectorProfileProperties,
  context: __SerdeContext
): any => {
  return {
    ...(input.Amplitude !== undefined &&
      input.Amplitude !== null && {
        Amplitude: serializeAws_restJson1AmplitudeConnectorProfileProperties(input.Amplitude, context),
      }),
    ...(input.Datadog !== undefined &&
      input.Datadog !== null && {
        Datadog: serializeAws_restJson1DatadogConnectorProfileProperties(input.Datadog, context),
      }),
    ...(input.Dynatrace !== undefined &&
      input.Dynatrace !== null && {
        Dynatrace: serializeAws_restJson1DynatraceConnectorProfileProperties(input.Dynatrace, context),
      }),
    ...(input.GoogleAnalytics !== undefined &&
      input.GoogleAnalytics !== null && {
        GoogleAnalytics: serializeAws_restJson1GoogleAnalyticsConnectorProfileProperties(
          input.GoogleAnalytics,
          context
        ),
      }),
    ...(input.Honeycode !== undefined &&
      input.Honeycode !== null && {
        Honeycode: serializeAws_restJson1HoneycodeConnectorProfileProperties(input.Honeycode, context),
      }),
    ...(input.InforNexus !== undefined &&
      input.InforNexus !== null && {
        InforNexus: serializeAws_restJson1InforNexusConnectorProfileProperties(input.InforNexus, context),
      }),
    ...(input.Marketo !== undefined &&
      input.Marketo !== null && {
        Marketo: serializeAws_restJson1MarketoConnectorProfileProperties(input.Marketo, context),
      }),
    ...(input.Redshift !== undefined &&
      input.Redshift !== null && {
        Redshift: serializeAws_restJson1RedshiftConnectorProfileProperties(input.Redshift, context),
      }),
    ...(input.SAPOData !== undefined &&
      input.SAPOData !== null && {
        SAPOData: serializeAws_restJson1SAPODataConnectorProfileProperties(input.SAPOData, context),
      }),
    ...(input.Salesforce !== undefined &&
      input.Salesforce !== null && {
        Salesforce: serializeAws_restJson1SalesforceConnectorProfileProperties(input.Salesforce, context),
      }),
    ...(input.ServiceNow !== undefined &&
      input.ServiceNow !== null && {
        ServiceNow: serializeAws_restJson1ServiceNowConnectorProfileProperties(input.ServiceNow, context),
      }),
    ...(input.Singular !== undefined &&
      input.Singular !== null && {
        Singular: serializeAws_restJson1SingularConnectorProfileProperties(input.Singular, context),
      }),
    ...(input.Slack !== undefined &&
      input.Slack !== null && { Slack: serializeAws_restJson1SlackConnectorProfileProperties(input.Slack, context) }),
    ...(input.Snowflake !== undefined &&
      input.Snowflake !== null && {
        Snowflake: serializeAws_restJson1SnowflakeConnectorProfileProperties(input.Snowflake, context),
      }),
    ...(input.Trendmicro !== undefined &&
      input.Trendmicro !== null && {
        Trendmicro: serializeAws_restJson1TrendmicroConnectorProfileProperties(input.Trendmicro, context),
      }),
    ...(input.Veeva !== undefined &&
      input.Veeva !== null && { Veeva: serializeAws_restJson1VeevaConnectorProfileProperties(input.Veeva, context) }),
    ...(input.Zendesk !== undefined &&
      input.Zendesk !== null && {
        Zendesk: serializeAws_restJson1ZendeskConnectorProfileProperties(input.Zendesk, context),
      }),
  };
};

const serializeAws_restJson1ConnectorTypeList = (input: (ConnectorType | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1CustomerProfilesDestinationProperties = (
  input: CustomerProfilesDestinationProperties,
  context: __SerdeContext
): any => {
  return {
    ...(input.domainName !== undefined && input.domainName !== null && { domainName: input.domainName }),
    ...(input.objectTypeName !== undefined &&
      input.objectTypeName !== null && { objectTypeName: input.objectTypeName }),
  };
};

const serializeAws_restJson1DatadogConnectorProfileCredentials = (
  input: DatadogConnectorProfileCredentials,
  context: __SerdeContext
): any => {
  return {
    ...(input.apiKey !== undefined && input.apiKey !== null && { apiKey: input.apiKey }),
    ...(input.applicationKey !== undefined &&
      input.applicationKey !== null && { applicationKey: input.applicationKey }),
  };
};

const serializeAws_restJson1DatadogConnectorProfileProperties = (
  input: DatadogConnectorProfileProperties,
  context: __SerdeContext
): any => {
  return {
    ...(input.instanceUrl !== undefined && input.instanceUrl !== null && { instanceUrl: input.instanceUrl }),
  };
};

const serializeAws_restJson1DatadogSourceProperties = (
  input: DatadogSourceProperties,
  context: __SerdeContext
): any => {
  return {
    ...(input.object !== undefined && input.object !== null && { object: input.object }),
  };
};

const serializeAws_restJson1DestinationConnectorProperties = (
  input: DestinationConnectorProperties,
  context: __SerdeContext
): any => {
  return {
    ...(input.CustomerProfiles !== undefined &&
      input.CustomerProfiles !== null && {
        CustomerProfiles: serializeAws_restJson1CustomerProfilesDestinationProperties(input.CustomerProfiles, context),
      }),
    ...(input.EventBridge !== undefined &&
      input.EventBridge !== null && {
        EventBridge: serializeAws_restJson1EventBridgeDestinationProperties(input.EventBridge, context),
      }),
    ...(input.Honeycode !== undefined &&
      input.Honeycode !== null && {
        Honeycode: serializeAws_restJson1HoneycodeDestinationProperties(input.Honeycode, context),
      }),
    ...(input.LookoutMetrics !== undefined &&
      input.LookoutMetrics !== null && {
        LookoutMetrics: serializeAws_restJson1LookoutMetricsDestinationProperties(input.LookoutMetrics, context),
      }),
    ...(input.Redshift !== undefined &&
      input.Redshift !== null && {
        Redshift: serializeAws_restJson1RedshiftDestinationProperties(input.Redshift, context),
      }),
    ...(input.S3 !== undefined &&
      input.S3 !== null && { S3: serializeAws_restJson1S3DestinationProperties(input.S3, context) }),
    ...(input.Salesforce !== undefined &&
      input.Salesforce !== null && {
        Salesforce: serializeAws_restJson1SalesforceDestinationProperties(input.Salesforce, context),
      }),
    ...(input.Snowflake !== undefined &&
      input.Snowflake !== null && {
        Snowflake: serializeAws_restJson1SnowflakeDestinationProperties(input.Snowflake, context),
      }),
    ...(input.Upsolver !== undefined &&
      input.Upsolver !== null && {
        Upsolver: serializeAws_restJson1UpsolverDestinationProperties(input.Upsolver, context),
      }),
    ...(input.Zendesk !== undefined &&
      input.Zendesk !== null && {
        Zendesk: serializeAws_restJson1ZendeskDestinationProperties(input.Zendesk, context),
      }),
  };
};

const serializeAws_restJson1DestinationFlowConfig = (input: DestinationFlowConfig, context: __SerdeContext): any => {
  return {
    ...(input.connectorProfileName !== undefined &&
      input.connectorProfileName !== null && { connectorProfileName: input.connectorProfileName }),
    ...(input.connectorType !== undefined && input.connectorType !== null && { connectorType: input.connectorType }),
    ...(input.destinationConnectorProperties !== undefined &&
      input.destinationConnectorProperties !== null && {
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
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1DestinationFlowConfig(entry, context);
    });
};

const serializeAws_restJson1DynatraceConnectorProfileCredentials = (
  input: DynatraceConnectorProfileCredentials,
  context: __SerdeContext
): any => {
  return {
    ...(input.apiToken !== undefined && input.apiToken !== null && { apiToken: input.apiToken }),
  };
};

const serializeAws_restJson1DynatraceConnectorProfileProperties = (
  input: DynatraceConnectorProfileProperties,
  context: __SerdeContext
): any => {
  return {
    ...(input.instanceUrl !== undefined && input.instanceUrl !== null && { instanceUrl: input.instanceUrl }),
  };
};

const serializeAws_restJson1DynatraceSourceProperties = (
  input: DynatraceSourceProperties,
  context: __SerdeContext
): any => {
  return {
    ...(input.object !== undefined && input.object !== null && { object: input.object }),
  };
};

const serializeAws_restJson1ErrorHandlingConfig = (input: ErrorHandlingConfig, context: __SerdeContext): any => {
  return {
    ...(input.bucketName !== undefined && input.bucketName !== null && { bucketName: input.bucketName }),
    ...(input.bucketPrefix !== undefined && input.bucketPrefix !== null && { bucketPrefix: input.bucketPrefix }),
    ...(input.failOnFirstDestinationError !== undefined &&
      input.failOnFirstDestinationError !== null && { failOnFirstDestinationError: input.failOnFirstDestinationError }),
  };
};

const serializeAws_restJson1EventBridgeDestinationProperties = (
  input: EventBridgeDestinationProperties,
  context: __SerdeContext
): any => {
  return {
    ...(input.errorHandlingConfig !== undefined &&
      input.errorHandlingConfig !== null && {
        errorHandlingConfig: serializeAws_restJson1ErrorHandlingConfig(input.errorHandlingConfig, context),
      }),
    ...(input.object !== undefined && input.object !== null && { object: input.object }),
  };
};

const serializeAws_restJson1GoogleAnalyticsConnectorProfileCredentials = (
  input: GoogleAnalyticsConnectorProfileCredentials,
  context: __SerdeContext
): any => {
  return {
    ...(input.accessToken !== undefined && input.accessToken !== null && { accessToken: input.accessToken }),
    ...(input.clientId !== undefined && input.clientId !== null && { clientId: input.clientId }),
    ...(input.clientSecret !== undefined && input.clientSecret !== null && { clientSecret: input.clientSecret }),
    ...(input.oAuthRequest !== undefined &&
      input.oAuthRequest !== null && {
        oAuthRequest: serializeAws_restJson1ConnectorOAuthRequest(input.oAuthRequest, context),
      }),
    ...(input.refreshToken !== undefined && input.refreshToken !== null && { refreshToken: input.refreshToken }),
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
    ...(input.object !== undefined && input.object !== null && { object: input.object }),
  };
};

const serializeAws_restJson1HoneycodeConnectorProfileCredentials = (
  input: HoneycodeConnectorProfileCredentials,
  context: __SerdeContext
): any => {
  return {
    ...(input.accessToken !== undefined && input.accessToken !== null && { accessToken: input.accessToken }),
    ...(input.oAuthRequest !== undefined &&
      input.oAuthRequest !== null && {
        oAuthRequest: serializeAws_restJson1ConnectorOAuthRequest(input.oAuthRequest, context),
      }),
    ...(input.refreshToken !== undefined && input.refreshToken !== null && { refreshToken: input.refreshToken }),
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
    ...(input.errorHandlingConfig !== undefined &&
      input.errorHandlingConfig !== null && {
        errorHandlingConfig: serializeAws_restJson1ErrorHandlingConfig(input.errorHandlingConfig, context),
      }),
    ...(input.object !== undefined && input.object !== null && { object: input.object }),
  };
};

const serializeAws_restJson1IdFieldNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1IncrementalPullConfig = (input: IncrementalPullConfig, context: __SerdeContext): any => {
  return {
    ...(input.datetimeTypeFieldName !== undefined &&
      input.datetimeTypeFieldName !== null && { datetimeTypeFieldName: input.datetimeTypeFieldName }),
  };
};

const serializeAws_restJson1InforNexusConnectorProfileCredentials = (
  input: InforNexusConnectorProfileCredentials,
  context: __SerdeContext
): any => {
  return {
    ...(input.accessKeyId !== undefined && input.accessKeyId !== null && { accessKeyId: input.accessKeyId }),
    ...(input.datakey !== undefined && input.datakey !== null && { datakey: input.datakey }),
    ...(input.secretAccessKey !== undefined &&
      input.secretAccessKey !== null && { secretAccessKey: input.secretAccessKey }),
    ...(input.userId !== undefined && input.userId !== null && { userId: input.userId }),
  };
};

const serializeAws_restJson1InforNexusConnectorProfileProperties = (
  input: InforNexusConnectorProfileProperties,
  context: __SerdeContext
): any => {
  return {
    ...(input.instanceUrl !== undefined && input.instanceUrl !== null && { instanceUrl: input.instanceUrl }),
  };
};

const serializeAws_restJson1InforNexusSourceProperties = (
  input: InforNexusSourceProperties,
  context: __SerdeContext
): any => {
  return {
    ...(input.object !== undefined && input.object !== null && { object: input.object }),
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
    ...(input.accessToken !== undefined && input.accessToken !== null && { accessToken: input.accessToken }),
    ...(input.clientId !== undefined && input.clientId !== null && { clientId: input.clientId }),
    ...(input.clientSecret !== undefined && input.clientSecret !== null && { clientSecret: input.clientSecret }),
    ...(input.oAuthRequest !== undefined &&
      input.oAuthRequest !== null && {
        oAuthRequest: serializeAws_restJson1ConnectorOAuthRequest(input.oAuthRequest, context),
      }),
  };
};

const serializeAws_restJson1MarketoConnectorProfileProperties = (
  input: MarketoConnectorProfileProperties,
  context: __SerdeContext
): any => {
  return {
    ...(input.instanceUrl !== undefined && input.instanceUrl !== null && { instanceUrl: input.instanceUrl }),
  };
};

const serializeAws_restJson1MarketoSourceProperties = (
  input: MarketoSourceProperties,
  context: __SerdeContext
): any => {
  return {
    ...(input.object !== undefined && input.object !== null && { object: input.object }),
  };
};

const serializeAws_restJson1OAuthCredentials = (input: OAuthCredentials, context: __SerdeContext): any => {
  return {
    ...(input.accessToken !== undefined && input.accessToken !== null && { accessToken: input.accessToken }),
    ...(input.clientId !== undefined && input.clientId !== null && { clientId: input.clientId }),
    ...(input.clientSecret !== undefined && input.clientSecret !== null && { clientSecret: input.clientSecret }),
    ...(input.oAuthRequest !== undefined &&
      input.oAuthRequest !== null && {
        oAuthRequest: serializeAws_restJson1ConnectorOAuthRequest(input.oAuthRequest, context),
      }),
    ...(input.refreshToken !== undefined && input.refreshToken !== null && { refreshToken: input.refreshToken }),
  };
};

const serializeAws_restJson1OAuthProperties = (input: OAuthProperties, context: __SerdeContext): any => {
  return {
    ...(input.authCodeUrl !== undefined && input.authCodeUrl !== null && { authCodeUrl: input.authCodeUrl }),
    ...(input.oAuthScopes !== undefined &&
      input.oAuthScopes !== null && { oAuthScopes: serializeAws_restJson1OAuthScopeList(input.oAuthScopes, context) }),
    ...(input.tokenUrl !== undefined && input.tokenUrl !== null && { tokenUrl: input.tokenUrl }),
  };
};

const serializeAws_restJson1OAuthScopeList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1PrefixConfig = (input: PrefixConfig, context: __SerdeContext): any => {
  return {
    ...(input.prefixFormat !== undefined && input.prefixFormat !== null && { prefixFormat: input.prefixFormat }),
    ...(input.prefixType !== undefined && input.prefixType !== null && { prefixType: input.prefixType }),
  };
};

const serializeAws_restJson1RedshiftConnectorProfileCredentials = (
  input: RedshiftConnectorProfileCredentials,
  context: __SerdeContext
): any => {
  return {
    ...(input.password !== undefined && input.password !== null && { password: input.password }),
    ...(input.username !== undefined && input.username !== null && { username: input.username }),
  };
};

const serializeAws_restJson1RedshiftConnectorProfileProperties = (
  input: RedshiftConnectorProfileProperties,
  context: __SerdeContext
): any => {
  return {
    ...(input.bucketName !== undefined && input.bucketName !== null && { bucketName: input.bucketName }),
    ...(input.bucketPrefix !== undefined && input.bucketPrefix !== null && { bucketPrefix: input.bucketPrefix }),
    ...(input.databaseUrl !== undefined && input.databaseUrl !== null && { databaseUrl: input.databaseUrl }),
    ...(input.roleArn !== undefined && input.roleArn !== null && { roleArn: input.roleArn }),
  };
};

const serializeAws_restJson1RedshiftDestinationProperties = (
  input: RedshiftDestinationProperties,
  context: __SerdeContext
): any => {
  return {
    ...(input.bucketPrefix !== undefined && input.bucketPrefix !== null && { bucketPrefix: input.bucketPrefix }),
    ...(input.errorHandlingConfig !== undefined &&
      input.errorHandlingConfig !== null && {
        errorHandlingConfig: serializeAws_restJson1ErrorHandlingConfig(input.errorHandlingConfig, context),
      }),
    ...(input.intermediateBucketName !== undefined &&
      input.intermediateBucketName !== null && { intermediateBucketName: input.intermediateBucketName }),
    ...(input.object !== undefined && input.object !== null && { object: input.object }),
  };
};

const serializeAws_restJson1S3DestinationProperties = (
  input: S3DestinationProperties,
  context: __SerdeContext
): any => {
  return {
    ...(input.bucketName !== undefined && input.bucketName !== null && { bucketName: input.bucketName }),
    ...(input.bucketPrefix !== undefined && input.bucketPrefix !== null && { bucketPrefix: input.bucketPrefix }),
    ...(input.s3OutputFormatConfig !== undefined &&
      input.s3OutputFormatConfig !== null && {
        s3OutputFormatConfig: serializeAws_restJson1S3OutputFormatConfig(input.s3OutputFormatConfig, context),
      }),
  };
};

const serializeAws_restJson1S3OutputFormatConfig = (input: S3OutputFormatConfig, context: __SerdeContext): any => {
  return {
    ...(input.aggregationConfig !== undefined &&
      input.aggregationConfig !== null && {
        aggregationConfig: serializeAws_restJson1AggregationConfig(input.aggregationConfig, context),
      }),
    ...(input.fileType !== undefined && input.fileType !== null && { fileType: input.fileType }),
    ...(input.prefixConfig !== undefined &&
      input.prefixConfig !== null && { prefixConfig: serializeAws_restJson1PrefixConfig(input.prefixConfig, context) }),
  };
};

const serializeAws_restJson1S3SourceProperties = (input: S3SourceProperties, context: __SerdeContext): any => {
  return {
    ...(input.bucketName !== undefined && input.bucketName !== null && { bucketName: input.bucketName }),
    ...(input.bucketPrefix !== undefined && input.bucketPrefix !== null && { bucketPrefix: input.bucketPrefix }),
  };
};

const serializeAws_restJson1SalesforceConnectorProfileCredentials = (
  input: SalesforceConnectorProfileCredentials,
  context: __SerdeContext
): any => {
  return {
    ...(input.accessToken !== undefined && input.accessToken !== null && { accessToken: input.accessToken }),
    ...(input.clientCredentialsArn !== undefined &&
      input.clientCredentialsArn !== null && { clientCredentialsArn: input.clientCredentialsArn }),
    ...(input.oAuthRequest !== undefined &&
      input.oAuthRequest !== null && {
        oAuthRequest: serializeAws_restJson1ConnectorOAuthRequest(input.oAuthRequest, context),
      }),
    ...(input.refreshToken !== undefined && input.refreshToken !== null && { refreshToken: input.refreshToken }),
  };
};

const serializeAws_restJson1SalesforceConnectorProfileProperties = (
  input: SalesforceConnectorProfileProperties,
  context: __SerdeContext
): any => {
  return {
    ...(input.instanceUrl !== undefined && input.instanceUrl !== null && { instanceUrl: input.instanceUrl }),
    ...(input.isSandboxEnvironment !== undefined &&
      input.isSandboxEnvironment !== null && { isSandboxEnvironment: input.isSandboxEnvironment }),
  };
};

const serializeAws_restJson1SalesforceDestinationProperties = (
  input: SalesforceDestinationProperties,
  context: __SerdeContext
): any => {
  return {
    ...(input.errorHandlingConfig !== undefined &&
      input.errorHandlingConfig !== null && {
        errorHandlingConfig: serializeAws_restJson1ErrorHandlingConfig(input.errorHandlingConfig, context),
      }),
    ...(input.idFieldNames !== undefined &&
      input.idFieldNames !== null && {
        idFieldNames: serializeAws_restJson1IdFieldNameList(input.idFieldNames, context),
      }),
    ...(input.object !== undefined && input.object !== null && { object: input.object }),
    ...(input.writeOperationType !== undefined &&
      input.writeOperationType !== null && { writeOperationType: input.writeOperationType }),
  };
};

const serializeAws_restJson1SalesforceSourceProperties = (
  input: SalesforceSourceProperties,
  context: __SerdeContext
): any => {
  return {
    ...(input.enableDynamicFieldUpdate !== undefined &&
      input.enableDynamicFieldUpdate !== null && { enableDynamicFieldUpdate: input.enableDynamicFieldUpdate }),
    ...(input.includeDeletedRecords !== undefined &&
      input.includeDeletedRecords !== null && { includeDeletedRecords: input.includeDeletedRecords }),
    ...(input.object !== undefined && input.object !== null && { object: input.object }),
  };
};

const serializeAws_restJson1SAPODataConnectorProfileCredentials = (
  input: SAPODataConnectorProfileCredentials,
  context: __SerdeContext
): any => {
  return {
    ...(input.basicAuthCredentials !== undefined &&
      input.basicAuthCredentials !== null && {
        basicAuthCredentials: serializeAws_restJson1BasicAuthCredentials(input.basicAuthCredentials, context),
      }),
    ...(input.oAuthCredentials !== undefined &&
      input.oAuthCredentials !== null && {
        oAuthCredentials: serializeAws_restJson1OAuthCredentials(input.oAuthCredentials, context),
      }),
  };
};

const serializeAws_restJson1SAPODataConnectorProfileProperties = (
  input: SAPODataConnectorProfileProperties,
  context: __SerdeContext
): any => {
  return {
    ...(input.applicationHostUrl !== undefined &&
      input.applicationHostUrl !== null && { applicationHostUrl: input.applicationHostUrl }),
    ...(input.applicationServicePath !== undefined &&
      input.applicationServicePath !== null && { applicationServicePath: input.applicationServicePath }),
    ...(input.clientNumber !== undefined && input.clientNumber !== null && { clientNumber: input.clientNumber }),
    ...(input.logonLanguage !== undefined && input.logonLanguage !== null && { logonLanguage: input.logonLanguage }),
    ...(input.oAuthProperties !== undefined &&
      input.oAuthProperties !== null && {
        oAuthProperties: serializeAws_restJson1OAuthProperties(input.oAuthProperties, context),
      }),
    ...(input.portNumber !== undefined && input.portNumber !== null && { portNumber: input.portNumber }),
    ...(input.privateLinkServiceName !== undefined &&
      input.privateLinkServiceName !== null && { privateLinkServiceName: input.privateLinkServiceName }),
  };
};

const serializeAws_restJson1SAPODataSourceProperties = (
  input: SAPODataSourceProperties,
  context: __SerdeContext
): any => {
  return {
    ...(input.objectPath !== undefined && input.objectPath !== null && { objectPath: input.objectPath }),
  };
};

const serializeAws_restJson1ScheduledTriggerProperties = (
  input: ScheduledTriggerProperties,
  context: __SerdeContext
): any => {
  return {
    ...(input.dataPullMode !== undefined && input.dataPullMode !== null && { dataPullMode: input.dataPullMode }),
    ...(input.firstExecutionFrom !== undefined &&
      input.firstExecutionFrom !== null && {
        firstExecutionFrom: Math.round(input.firstExecutionFrom.getTime() / 1000),
      }),
    ...(input.scheduleEndTime !== undefined &&
      input.scheduleEndTime !== null && { scheduleEndTime: Math.round(input.scheduleEndTime.getTime() / 1000) }),
    ...(input.scheduleExpression !== undefined &&
      input.scheduleExpression !== null && { scheduleExpression: input.scheduleExpression }),
    ...(input.scheduleOffset !== undefined &&
      input.scheduleOffset !== null && { scheduleOffset: input.scheduleOffset }),
    ...(input.scheduleStartTime !== undefined &&
      input.scheduleStartTime !== null && { scheduleStartTime: Math.round(input.scheduleStartTime.getTime() / 1000) }),
    ...(input.timezone !== undefined && input.timezone !== null && { timezone: input.timezone }),
  };
};

const serializeAws_restJson1ServiceNowConnectorProfileCredentials = (
  input: ServiceNowConnectorProfileCredentials,
  context: __SerdeContext
): any => {
  return {
    ...(input.password !== undefined && input.password !== null && { password: input.password }),
    ...(input.username !== undefined && input.username !== null && { username: input.username }),
  };
};

const serializeAws_restJson1ServiceNowConnectorProfileProperties = (
  input: ServiceNowConnectorProfileProperties,
  context: __SerdeContext
): any => {
  return {
    ...(input.instanceUrl !== undefined && input.instanceUrl !== null && { instanceUrl: input.instanceUrl }),
  };
};

const serializeAws_restJson1ServiceNowSourceProperties = (
  input: ServiceNowSourceProperties,
  context: __SerdeContext
): any => {
  return {
    ...(input.object !== undefined && input.object !== null && { object: input.object }),
  };
};

const serializeAws_restJson1SingularConnectorProfileCredentials = (
  input: SingularConnectorProfileCredentials,
  context: __SerdeContext
): any => {
  return {
    ...(input.apiKey !== undefined && input.apiKey !== null && { apiKey: input.apiKey }),
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
    ...(input.object !== undefined && input.object !== null && { object: input.object }),
  };
};

const serializeAws_restJson1SlackConnectorProfileCredentials = (
  input: SlackConnectorProfileCredentials,
  context: __SerdeContext
): any => {
  return {
    ...(input.accessToken !== undefined && input.accessToken !== null && { accessToken: input.accessToken }),
    ...(input.clientId !== undefined && input.clientId !== null && { clientId: input.clientId }),
    ...(input.clientSecret !== undefined && input.clientSecret !== null && { clientSecret: input.clientSecret }),
    ...(input.oAuthRequest !== undefined &&
      input.oAuthRequest !== null && {
        oAuthRequest: serializeAws_restJson1ConnectorOAuthRequest(input.oAuthRequest, context),
      }),
  };
};

const serializeAws_restJson1SlackConnectorProfileProperties = (
  input: SlackConnectorProfileProperties,
  context: __SerdeContext
): any => {
  return {
    ...(input.instanceUrl !== undefined && input.instanceUrl !== null && { instanceUrl: input.instanceUrl }),
  };
};

const serializeAws_restJson1SlackSourceProperties = (input: SlackSourceProperties, context: __SerdeContext): any => {
  return {
    ...(input.object !== undefined && input.object !== null && { object: input.object }),
  };
};

const serializeAws_restJson1SnowflakeConnectorProfileCredentials = (
  input: SnowflakeConnectorProfileCredentials,
  context: __SerdeContext
): any => {
  return {
    ...(input.password !== undefined && input.password !== null && { password: input.password }),
    ...(input.username !== undefined && input.username !== null && { username: input.username }),
  };
};

const serializeAws_restJson1SnowflakeConnectorProfileProperties = (
  input: SnowflakeConnectorProfileProperties,
  context: __SerdeContext
): any => {
  return {
    ...(input.accountName !== undefined && input.accountName !== null && { accountName: input.accountName }),
    ...(input.bucketName !== undefined && input.bucketName !== null && { bucketName: input.bucketName }),
    ...(input.bucketPrefix !== undefined && input.bucketPrefix !== null && { bucketPrefix: input.bucketPrefix }),
    ...(input.privateLinkServiceName !== undefined &&
      input.privateLinkServiceName !== null && { privateLinkServiceName: input.privateLinkServiceName }),
    ...(input.region !== undefined && input.region !== null && { region: input.region }),
    ...(input.stage !== undefined && input.stage !== null && { stage: input.stage }),
    ...(input.warehouse !== undefined && input.warehouse !== null && { warehouse: input.warehouse }),
  };
};

const serializeAws_restJson1SnowflakeDestinationProperties = (
  input: SnowflakeDestinationProperties,
  context: __SerdeContext
): any => {
  return {
    ...(input.bucketPrefix !== undefined && input.bucketPrefix !== null && { bucketPrefix: input.bucketPrefix }),
    ...(input.errorHandlingConfig !== undefined &&
      input.errorHandlingConfig !== null && {
        errorHandlingConfig: serializeAws_restJson1ErrorHandlingConfig(input.errorHandlingConfig, context),
      }),
    ...(input.intermediateBucketName !== undefined &&
      input.intermediateBucketName !== null && { intermediateBucketName: input.intermediateBucketName }),
    ...(input.object !== undefined && input.object !== null && { object: input.object }),
  };
};

const serializeAws_restJson1SourceConnectorProperties = (
  input: SourceConnectorProperties,
  context: __SerdeContext
): any => {
  return {
    ...(input.Amplitude !== undefined &&
      input.Amplitude !== null && {
        Amplitude: serializeAws_restJson1AmplitudeSourceProperties(input.Amplitude, context),
      }),
    ...(input.Datadog !== undefined &&
      input.Datadog !== null && { Datadog: serializeAws_restJson1DatadogSourceProperties(input.Datadog, context) }),
    ...(input.Dynatrace !== undefined &&
      input.Dynatrace !== null && {
        Dynatrace: serializeAws_restJson1DynatraceSourceProperties(input.Dynatrace, context),
      }),
    ...(input.GoogleAnalytics !== undefined &&
      input.GoogleAnalytics !== null && {
        GoogleAnalytics: serializeAws_restJson1GoogleAnalyticsSourceProperties(input.GoogleAnalytics, context),
      }),
    ...(input.InforNexus !== undefined &&
      input.InforNexus !== null && {
        InforNexus: serializeAws_restJson1InforNexusSourceProperties(input.InforNexus, context),
      }),
    ...(input.Marketo !== undefined &&
      input.Marketo !== null && { Marketo: serializeAws_restJson1MarketoSourceProperties(input.Marketo, context) }),
    ...(input.S3 !== undefined &&
      input.S3 !== null && { S3: serializeAws_restJson1S3SourceProperties(input.S3, context) }),
    ...(input.SAPOData !== undefined &&
      input.SAPOData !== null && { SAPOData: serializeAws_restJson1SAPODataSourceProperties(input.SAPOData, context) }),
    ...(input.Salesforce !== undefined &&
      input.Salesforce !== null && {
        Salesforce: serializeAws_restJson1SalesforceSourceProperties(input.Salesforce, context),
      }),
    ...(input.ServiceNow !== undefined &&
      input.ServiceNow !== null && {
        ServiceNow: serializeAws_restJson1ServiceNowSourceProperties(input.ServiceNow, context),
      }),
    ...(input.Singular !== undefined &&
      input.Singular !== null && { Singular: serializeAws_restJson1SingularSourceProperties(input.Singular, context) }),
    ...(input.Slack !== undefined &&
      input.Slack !== null && { Slack: serializeAws_restJson1SlackSourceProperties(input.Slack, context) }),
    ...(input.Trendmicro !== undefined &&
      input.Trendmicro !== null && {
        Trendmicro: serializeAws_restJson1TrendmicroSourceProperties(input.Trendmicro, context),
      }),
    ...(input.Veeva !== undefined &&
      input.Veeva !== null && { Veeva: serializeAws_restJson1VeevaSourceProperties(input.Veeva, context) }),
    ...(input.Zendesk !== undefined &&
      input.Zendesk !== null && { Zendesk: serializeAws_restJson1ZendeskSourceProperties(input.Zendesk, context) }),
  };
};

const serializeAws_restJson1SourceFields = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1SourceFlowConfig = (input: SourceFlowConfig, context: __SerdeContext): any => {
  return {
    ...(input.connectorProfileName !== undefined &&
      input.connectorProfileName !== null && { connectorProfileName: input.connectorProfileName }),
    ...(input.connectorType !== undefined && input.connectorType !== null && { connectorType: input.connectorType }),
    ...(input.incrementalPullConfig !== undefined &&
      input.incrementalPullConfig !== null && {
        incrementalPullConfig: serializeAws_restJson1IncrementalPullConfig(input.incrementalPullConfig, context),
      }),
    ...(input.sourceConnectorProperties !== undefined &&
      input.sourceConnectorProperties !== null && {
        sourceConnectorProperties: serializeAws_restJson1SourceConnectorProperties(
          input.sourceConnectorProperties,
          context
        ),
      }),
  };
};

const serializeAws_restJson1TagMap = (input: { [key: string]: string }, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: { [key: string]: any }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const serializeAws_restJson1Task = (input: Task, context: __SerdeContext): any => {
  return {
    ...(input.connectorOperator !== undefined &&
      input.connectorOperator !== null && {
        connectorOperator: serializeAws_restJson1ConnectorOperator(input.connectorOperator, context),
      }),
    ...(input.destinationField !== undefined &&
      input.destinationField !== null && { destinationField: input.destinationField }),
    ...(input.sourceFields !== undefined &&
      input.sourceFields !== null && { sourceFields: serializeAws_restJson1SourceFields(input.sourceFields, context) }),
    ...(input.taskProperties !== undefined &&
      input.taskProperties !== null && {
        taskProperties: serializeAws_restJson1TaskPropertiesMap(input.taskProperties, context),
      }),
    ...(input.taskType !== undefined && input.taskType !== null && { taskType: input.taskType }),
  };
};

const serializeAws_restJson1TaskPropertiesMap = (input: { [key: string]: string }, context: __SerdeContext): any => {
  return Object.entries(input).reduce(
    (acc: { [key: string]: any }, [key, value]: [OperatorPropertiesKeys | string, any]) => {
      if (value === null) {
        return acc;
      }
      return {
        ...acc,
        [key]: value,
      };
    },
    {}
  );
};

const serializeAws_restJson1Tasks = (input: Task[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1Task(entry, context);
    });
};

const serializeAws_restJson1TrendmicroConnectorProfileCredentials = (
  input: TrendmicroConnectorProfileCredentials,
  context: __SerdeContext
): any => {
  return {
    ...(input.apiSecretKey !== undefined && input.apiSecretKey !== null && { apiSecretKey: input.apiSecretKey }),
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
    ...(input.object !== undefined && input.object !== null && { object: input.object }),
  };
};

const serializeAws_restJson1TriggerConfig = (input: TriggerConfig, context: __SerdeContext): any => {
  return {
    ...(input.triggerProperties !== undefined &&
      input.triggerProperties !== null && {
        triggerProperties: serializeAws_restJson1TriggerProperties(input.triggerProperties, context),
      }),
    ...(input.triggerType !== undefined && input.triggerType !== null && { triggerType: input.triggerType }),
  };
};

const serializeAws_restJson1TriggerProperties = (input: TriggerProperties, context: __SerdeContext): any => {
  return {
    ...(input.Scheduled !== undefined &&
      input.Scheduled !== null && {
        Scheduled: serializeAws_restJson1ScheduledTriggerProperties(input.Scheduled, context),
      }),
  };
};

const serializeAws_restJson1UpsolverDestinationProperties = (
  input: UpsolverDestinationProperties,
  context: __SerdeContext
): any => {
  return {
    ...(input.bucketName !== undefined && input.bucketName !== null && { bucketName: input.bucketName }),
    ...(input.bucketPrefix !== undefined && input.bucketPrefix !== null && { bucketPrefix: input.bucketPrefix }),
    ...(input.s3OutputFormatConfig !== undefined &&
      input.s3OutputFormatConfig !== null && {
        s3OutputFormatConfig: serializeAws_restJson1UpsolverS3OutputFormatConfig(input.s3OutputFormatConfig, context),
      }),
  };
};

const serializeAws_restJson1UpsolverS3OutputFormatConfig = (
  input: UpsolverS3OutputFormatConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.aggregationConfig !== undefined &&
      input.aggregationConfig !== null && {
        aggregationConfig: serializeAws_restJson1AggregationConfig(input.aggregationConfig, context),
      }),
    ...(input.fileType !== undefined && input.fileType !== null && { fileType: input.fileType }),
    ...(input.prefixConfig !== undefined &&
      input.prefixConfig !== null && { prefixConfig: serializeAws_restJson1PrefixConfig(input.prefixConfig, context) }),
  };
};

const serializeAws_restJson1VeevaConnectorProfileCredentials = (
  input: VeevaConnectorProfileCredentials,
  context: __SerdeContext
): any => {
  return {
    ...(input.password !== undefined && input.password !== null && { password: input.password }),
    ...(input.username !== undefined && input.username !== null && { username: input.username }),
  };
};

const serializeAws_restJson1VeevaConnectorProfileProperties = (
  input: VeevaConnectorProfileProperties,
  context: __SerdeContext
): any => {
  return {
    ...(input.instanceUrl !== undefined && input.instanceUrl !== null && { instanceUrl: input.instanceUrl }),
  };
};

const serializeAws_restJson1VeevaSourceProperties = (input: VeevaSourceProperties, context: __SerdeContext): any => {
  return {
    ...(input.documentType !== undefined && input.documentType !== null && { documentType: input.documentType }),
    ...(input.includeAllVersions !== undefined &&
      input.includeAllVersions !== null && { includeAllVersions: input.includeAllVersions }),
    ...(input.includeRenditions !== undefined &&
      input.includeRenditions !== null && { includeRenditions: input.includeRenditions }),
    ...(input.includeSourceFiles !== undefined &&
      input.includeSourceFiles !== null && { includeSourceFiles: input.includeSourceFiles }),
    ...(input.object !== undefined && input.object !== null && { object: input.object }),
  };
};

const serializeAws_restJson1ZendeskConnectorProfileCredentials = (
  input: ZendeskConnectorProfileCredentials,
  context: __SerdeContext
): any => {
  return {
    ...(input.accessToken !== undefined && input.accessToken !== null && { accessToken: input.accessToken }),
    ...(input.clientId !== undefined && input.clientId !== null && { clientId: input.clientId }),
    ...(input.clientSecret !== undefined && input.clientSecret !== null && { clientSecret: input.clientSecret }),
    ...(input.oAuthRequest !== undefined &&
      input.oAuthRequest !== null && {
        oAuthRequest: serializeAws_restJson1ConnectorOAuthRequest(input.oAuthRequest, context),
      }),
  };
};

const serializeAws_restJson1ZendeskConnectorProfileProperties = (
  input: ZendeskConnectorProfileProperties,
  context: __SerdeContext
): any => {
  return {
    ...(input.instanceUrl !== undefined && input.instanceUrl !== null && { instanceUrl: input.instanceUrl }),
  };
};

const serializeAws_restJson1ZendeskDestinationProperties = (
  input: ZendeskDestinationProperties,
  context: __SerdeContext
): any => {
  return {
    ...(input.errorHandlingConfig !== undefined &&
      input.errorHandlingConfig !== null && {
        errorHandlingConfig: serializeAws_restJson1ErrorHandlingConfig(input.errorHandlingConfig, context),
      }),
    ...(input.idFieldNames !== undefined &&
      input.idFieldNames !== null && {
        idFieldNames: serializeAws_restJson1IdFieldNameList(input.idFieldNames, context),
      }),
    ...(input.object !== undefined && input.object !== null && { object: input.object }),
    ...(input.writeOperationType !== undefined &&
      input.writeOperationType !== null && { writeOperationType: input.writeOperationType }),
  };
};

const serializeAws_restJson1ZendeskSourceProperties = (
  input: ZendeskSourceProperties,
  context: __SerdeContext
): any => {
  return {
    ...(input.object !== undefined && input.object !== null && { object: input.object }),
  };
};

const deserializeAws_restJson1AggregationConfig = (output: any, context: __SerdeContext): AggregationConfig => {
  return {
    aggregationType: __expectString(output.aggregationType),
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

const deserializeAws_restJson1ConnectorConfiguration = (
  output: any,
  context: __SerdeContext
): ConnectorConfiguration => {
  return {
    canUseAsDestination: __expectBoolean(output.canUseAsDestination),
    canUseAsSource: __expectBoolean(output.canUseAsSource),
    connectorMetadata:
      output.connectorMetadata !== undefined && output.connectorMetadata !== null
        ? deserializeAws_restJson1ConnectorMetadata(output.connectorMetadata, context)
        : undefined,
    isPrivateLinkEnabled: __expectBoolean(output.isPrivateLinkEnabled),
    isPrivateLinkEndpointUrlRequired: __expectBoolean(output.isPrivateLinkEndpointUrlRequired),
    supportedDestinationConnectors:
      output.supportedDestinationConnectors !== undefined && output.supportedDestinationConnectors !== null
        ? deserializeAws_restJson1ConnectorTypeList(output.supportedDestinationConnectors, context)
        : undefined,
    supportedSchedulingFrequencies:
      output.supportedSchedulingFrequencies !== undefined && output.supportedSchedulingFrequencies !== null
        ? deserializeAws_restJson1SchedulingFrequencyTypeList(output.supportedSchedulingFrequencies, context)
        : undefined,
    supportedTriggerTypes:
      output.supportedTriggerTypes !== undefined && output.supportedTriggerTypes !== null
        ? deserializeAws_restJson1TriggerTypeList(output.supportedTriggerTypes, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ConnectorConfigurationsMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: ConnectorConfiguration } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: ConnectorConfiguration }, [key, value]: [ConnectorType | string, any]) => {
      if (value === null) {
        return acc;
      }
      return {
        ...acc,
        [key]: deserializeAws_restJson1ConnectorConfiguration(value, context),
      };
    },
    {}
  );
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
    description: __expectString(output.description),
    destinationProperties:
      output.destinationProperties !== undefined && output.destinationProperties !== null
        ? deserializeAws_restJson1DestinationFieldProperties(output.destinationProperties, context)
        : undefined,
    identifier: __expectString(output.identifier),
    label: __expectString(output.label),
    sourceProperties:
      output.sourceProperties !== undefined && output.sourceProperties !== null
        ? deserializeAws_restJson1SourceFieldProperties(output.sourceProperties, context)
        : undefined,
    supportedFieldTypeDetails:
      output.supportedFieldTypeDetails !== undefined && output.supportedFieldTypeDetails !== null
        ? deserializeAws_restJson1SupportedFieldTypeDetails(output.supportedFieldTypeDetails, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ConnectorEntityFieldList = (
  output: any,
  context: __SerdeContext
): ConnectorEntityField[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ConnectorEntityField(entry, context);
    });
};

const deserializeAws_restJson1ConnectorEntityList = (output: any, context: __SerdeContext): ConnectorEntity[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ConnectorEntity(entry, context);
    });
};

const deserializeAws_restJson1ConnectorEntityMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: ConnectorEntity[] } => {
  return Object.entries(output).reduce((acc: { [key: string]: ConnectorEntity[] }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: deserializeAws_restJson1ConnectorEntityList(value, context),
    };
  }, {});
};

const deserializeAws_restJson1ConnectorMetadata = (output: any, context: __SerdeContext): ConnectorMetadata => {
  return {
    Amplitude:
      output.Amplitude !== undefined && output.Amplitude !== null
        ? deserializeAws_restJson1AmplitudeMetadata(output.Amplitude, context)
        : undefined,
    CustomerProfiles:
      output.CustomerProfiles !== undefined && output.CustomerProfiles !== null
        ? deserializeAws_restJson1CustomerProfilesMetadata(output.CustomerProfiles, context)
        : undefined,
    Datadog:
      output.Datadog !== undefined && output.Datadog !== null
        ? deserializeAws_restJson1DatadogMetadata(output.Datadog, context)
        : undefined,
    Dynatrace:
      output.Dynatrace !== undefined && output.Dynatrace !== null
        ? deserializeAws_restJson1DynatraceMetadata(output.Dynatrace, context)
        : undefined,
    EventBridge:
      output.EventBridge !== undefined && output.EventBridge !== null
        ? deserializeAws_restJson1EventBridgeMetadata(output.EventBridge, context)
        : undefined,
    GoogleAnalytics:
      output.GoogleAnalytics !== undefined && output.GoogleAnalytics !== null
        ? deserializeAws_restJson1GoogleAnalyticsMetadata(output.GoogleAnalytics, context)
        : undefined,
    Honeycode:
      output.Honeycode !== undefined && output.Honeycode !== null
        ? deserializeAws_restJson1HoneycodeMetadata(output.Honeycode, context)
        : undefined,
    InforNexus:
      output.InforNexus !== undefined && output.InforNexus !== null
        ? deserializeAws_restJson1InforNexusMetadata(output.InforNexus, context)
        : undefined,
    Marketo:
      output.Marketo !== undefined && output.Marketo !== null
        ? deserializeAws_restJson1MarketoMetadata(output.Marketo, context)
        : undefined,
    Redshift:
      output.Redshift !== undefined && output.Redshift !== null
        ? deserializeAws_restJson1RedshiftMetadata(output.Redshift, context)
        : undefined,
    S3:
      output.S3 !== undefined && output.S3 !== null
        ? deserializeAws_restJson1S3Metadata(output.S3, context)
        : undefined,
    SAPOData:
      output.SAPOData !== undefined && output.SAPOData !== null
        ? deserializeAws_restJson1SAPODataMetadata(output.SAPOData, context)
        : undefined,
    Salesforce:
      output.Salesforce !== undefined && output.Salesforce !== null
        ? deserializeAws_restJson1SalesforceMetadata(output.Salesforce, context)
        : undefined,
    ServiceNow:
      output.ServiceNow !== undefined && output.ServiceNow !== null
        ? deserializeAws_restJson1ServiceNowMetadata(output.ServiceNow, context)
        : undefined,
    Singular:
      output.Singular !== undefined && output.Singular !== null
        ? deserializeAws_restJson1SingularMetadata(output.Singular, context)
        : undefined,
    Slack:
      output.Slack !== undefined && output.Slack !== null
        ? deserializeAws_restJson1SlackMetadata(output.Slack, context)
        : undefined,
    Snowflake:
      output.Snowflake !== undefined && output.Snowflake !== null
        ? deserializeAws_restJson1SnowflakeMetadata(output.Snowflake, context)
        : undefined,
    Trendmicro:
      output.Trendmicro !== undefined && output.Trendmicro !== null
        ? deserializeAws_restJson1TrendmicroMetadata(output.Trendmicro, context)
        : undefined,
    Upsolver:
      output.Upsolver !== undefined && output.Upsolver !== null
        ? deserializeAws_restJson1UpsolverMetadata(output.Upsolver, context)
        : undefined,
    Veeva:
      output.Veeva !== undefined && output.Veeva !== null
        ? deserializeAws_restJson1VeevaMetadata(output.Veeva, context)
        : undefined,
    Zendesk:
      output.Zendesk !== undefined && output.Zendesk !== null
        ? deserializeAws_restJson1ZendeskMetadata(output.Zendesk, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ConnectorOperator = (output: any, context: __SerdeContext): ConnectorOperator => {
  return {
    Amplitude: __expectString(output.Amplitude),
    Datadog: __expectString(output.Datadog),
    Dynatrace: __expectString(output.Dynatrace),
    GoogleAnalytics: __expectString(output.GoogleAnalytics),
    InforNexus: __expectString(output.InforNexus),
    Marketo: __expectString(output.Marketo),
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
    connectorProfileArn: __expectString(output.connectorProfileArn),
    connectorProfileName: __expectString(output.connectorProfileName),
    connectorProfileProperties:
      output.connectorProfileProperties !== undefined && output.connectorProfileProperties !== null
        ? deserializeAws_restJson1ConnectorProfileProperties(output.connectorProfileProperties, context)
        : undefined,
    connectorType: __expectString(output.connectorType),
    createdAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? new Date(Math.round(output.createdAt * 1000))
        : undefined,
    credentialsArn: __expectString(output.credentialsArn),
    lastUpdatedAt:
      output.lastUpdatedAt !== undefined && output.lastUpdatedAt !== null
        ? new Date(Math.round(output.lastUpdatedAt * 1000))
        : undefined,
    privateConnectionProvisioningState:
      output.privateConnectionProvisioningState !== undefined && output.privateConnectionProvisioningState !== null
        ? deserializeAws_restJson1PrivateConnectionProvisioningState(output.privateConnectionProvisioningState, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ConnectorProfileDetailList = (
  output: any,
  context: __SerdeContext
): ConnectorProfile[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ConnectorProfile(entry, context);
    });
};

const deserializeAws_restJson1ConnectorProfileProperties = (
  output: any,
  context: __SerdeContext
): ConnectorProfileProperties => {
  return {
    Amplitude:
      output.Amplitude !== undefined && output.Amplitude !== null
        ? deserializeAws_restJson1AmplitudeConnectorProfileProperties(output.Amplitude, context)
        : undefined,
    Datadog:
      output.Datadog !== undefined && output.Datadog !== null
        ? deserializeAws_restJson1DatadogConnectorProfileProperties(output.Datadog, context)
        : undefined,
    Dynatrace:
      output.Dynatrace !== undefined && output.Dynatrace !== null
        ? deserializeAws_restJson1DynatraceConnectorProfileProperties(output.Dynatrace, context)
        : undefined,
    GoogleAnalytics:
      output.GoogleAnalytics !== undefined && output.GoogleAnalytics !== null
        ? deserializeAws_restJson1GoogleAnalyticsConnectorProfileProperties(output.GoogleAnalytics, context)
        : undefined,
    Honeycode:
      output.Honeycode !== undefined && output.Honeycode !== null
        ? deserializeAws_restJson1HoneycodeConnectorProfileProperties(output.Honeycode, context)
        : undefined,
    InforNexus:
      output.InforNexus !== undefined && output.InforNexus !== null
        ? deserializeAws_restJson1InforNexusConnectorProfileProperties(output.InforNexus, context)
        : undefined,
    Marketo:
      output.Marketo !== undefined && output.Marketo !== null
        ? deserializeAws_restJson1MarketoConnectorProfileProperties(output.Marketo, context)
        : undefined,
    Redshift:
      output.Redshift !== undefined && output.Redshift !== null
        ? deserializeAws_restJson1RedshiftConnectorProfileProperties(output.Redshift, context)
        : undefined,
    SAPOData:
      output.SAPOData !== undefined && output.SAPOData !== null
        ? deserializeAws_restJson1SAPODataConnectorProfileProperties(output.SAPOData, context)
        : undefined,
    Salesforce:
      output.Salesforce !== undefined && output.Salesforce !== null
        ? deserializeAws_restJson1SalesforceConnectorProfileProperties(output.Salesforce, context)
        : undefined,
    ServiceNow:
      output.ServiceNow !== undefined && output.ServiceNow !== null
        ? deserializeAws_restJson1ServiceNowConnectorProfileProperties(output.ServiceNow, context)
        : undefined,
    Singular:
      output.Singular !== undefined && output.Singular !== null
        ? deserializeAws_restJson1SingularConnectorProfileProperties(output.Singular, context)
        : undefined,
    Slack:
      output.Slack !== undefined && output.Slack !== null
        ? deserializeAws_restJson1SlackConnectorProfileProperties(output.Slack, context)
        : undefined,
    Snowflake:
      output.Snowflake !== undefined && output.Snowflake !== null
        ? deserializeAws_restJson1SnowflakeConnectorProfileProperties(output.Snowflake, context)
        : undefined,
    Trendmicro:
      output.Trendmicro !== undefined && output.Trendmicro !== null
        ? deserializeAws_restJson1TrendmicroConnectorProfileProperties(output.Trendmicro, context)
        : undefined,
    Veeva:
      output.Veeva !== undefined && output.Veeva !== null
        ? deserializeAws_restJson1VeevaConnectorProfileProperties(output.Veeva, context)
        : undefined,
    Zendesk:
      output.Zendesk !== undefined && output.Zendesk !== null
        ? deserializeAws_restJson1ZendeskConnectorProfileProperties(output.Zendesk, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ConnectorTypeList = (
  output: any,
  context: __SerdeContext
): (ConnectorType | string)[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
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
    CustomerProfiles:
      output.CustomerProfiles !== undefined && output.CustomerProfiles !== null
        ? deserializeAws_restJson1CustomerProfilesDestinationProperties(output.CustomerProfiles, context)
        : undefined,
    EventBridge:
      output.EventBridge !== undefined && output.EventBridge !== null
        ? deserializeAws_restJson1EventBridgeDestinationProperties(output.EventBridge, context)
        : undefined,
    Honeycode:
      output.Honeycode !== undefined && output.Honeycode !== null
        ? deserializeAws_restJson1HoneycodeDestinationProperties(output.Honeycode, context)
        : undefined,
    LookoutMetrics:
      output.LookoutMetrics !== undefined && output.LookoutMetrics !== null
        ? deserializeAws_restJson1LookoutMetricsDestinationProperties(output.LookoutMetrics, context)
        : undefined,
    Redshift:
      output.Redshift !== undefined && output.Redshift !== null
        ? deserializeAws_restJson1RedshiftDestinationProperties(output.Redshift, context)
        : undefined,
    S3:
      output.S3 !== undefined && output.S3 !== null
        ? deserializeAws_restJson1S3DestinationProperties(output.S3, context)
        : undefined,
    Salesforce:
      output.Salesforce !== undefined && output.Salesforce !== null
        ? deserializeAws_restJson1SalesforceDestinationProperties(output.Salesforce, context)
        : undefined,
    Snowflake:
      output.Snowflake !== undefined && output.Snowflake !== null
        ? deserializeAws_restJson1SnowflakeDestinationProperties(output.Snowflake, context)
        : undefined,
    Upsolver:
      output.Upsolver !== undefined && output.Upsolver !== null
        ? deserializeAws_restJson1UpsolverDestinationProperties(output.Upsolver, context)
        : undefined,
    Zendesk:
      output.Zendesk !== undefined && output.Zendesk !== null
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
    isNullable: __expectBoolean(output.isNullable),
    isUpdatable: __expectBoolean(output.isUpdatable),
    isUpsertable: __expectBoolean(output.isUpsertable),
    supportedWriteOperations:
      output.supportedWriteOperations !== undefined && output.supportedWriteOperations !== null
        ? deserializeAws_restJson1SupportedWriteOperationList(output.supportedWriteOperations, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1DestinationFlowConfig = (output: any, context: __SerdeContext): DestinationFlowConfig => {
  return {
    connectorProfileName: __expectString(output.connectorProfileName),
    connectorType: __expectString(output.connectorType),
    destinationConnectorProperties:
      output.destinationConnectorProperties !== undefined && output.destinationConnectorProperties !== null
        ? deserializeAws_restJson1DestinationConnectorProperties(output.destinationConnectorProperties, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1DestinationFlowConfigList = (
  output: any,
  context: __SerdeContext
): DestinationFlowConfig[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DestinationFlowConfig(entry, context);
    });
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
      output.errorHandlingConfig !== undefined && output.errorHandlingConfig !== null
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
      output.mostRecentExecutionTime !== undefined && output.mostRecentExecutionTime !== null
        ? new Date(Math.round(output.mostRecentExecutionTime * 1000))
        : undefined,
  } as any;
};

const deserializeAws_restJson1ExecutionRecord = (output: any, context: __SerdeContext): ExecutionRecord => {
  return {
    dataPullEndTime:
      output.dataPullEndTime !== undefined && output.dataPullEndTime !== null
        ? new Date(Math.round(output.dataPullEndTime * 1000))
        : undefined,
    dataPullStartTime:
      output.dataPullStartTime !== undefined && output.dataPullStartTime !== null
        ? new Date(Math.round(output.dataPullStartTime * 1000))
        : undefined,
    executionId: __expectString(output.executionId),
    executionResult:
      output.executionResult !== undefined && output.executionResult !== null
        ? deserializeAws_restJson1ExecutionResult(output.executionResult, context)
        : undefined,
    executionStatus: __expectString(output.executionStatus),
    lastUpdatedAt:
      output.lastUpdatedAt !== undefined && output.lastUpdatedAt !== null
        ? new Date(Math.round(output.lastUpdatedAt * 1000))
        : undefined,
    startedAt:
      output.startedAt !== undefined && output.startedAt !== null
        ? new Date(Math.round(output.startedAt * 1000))
        : undefined,
  } as any;
};

const deserializeAws_restJson1ExecutionResult = (output: any, context: __SerdeContext): ExecutionResult => {
  return {
    bytesProcessed: __expectLong(output.bytesProcessed),
    bytesWritten: __expectLong(output.bytesWritten),
    errorInfo:
      output.errorInfo !== undefined && output.errorInfo !== null
        ? deserializeAws_restJson1ErrorInfo(output.errorInfo, context)
        : undefined,
    recordsProcessed: __expectLong(output.recordsProcessed),
  } as any;
};

const deserializeAws_restJson1FieldTypeDetails = (output: any, context: __SerdeContext): FieldTypeDetails => {
  return {
    fieldType: __expectString(output.fieldType),
    filterOperators:
      output.filterOperators !== undefined && output.filterOperators !== null
        ? deserializeAws_restJson1FilterOperatorList(output.filterOperators, context)
        : undefined,
    supportedValues:
      output.supportedValues !== undefined && output.supportedValues !== null
        ? deserializeAws_restJson1SupportedValueList(output.supportedValues, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1FilterOperatorList = (output: any, context: __SerdeContext): (Operator | string)[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restJson1FlowDefinition = (output: any, context: __SerdeContext): FlowDefinition => {
  return {
    createdAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? new Date(Math.round(output.createdAt * 1000))
        : undefined,
    createdBy: __expectString(output.createdBy),
    description: __expectString(output.description),
    destinationConnectorType: __expectString(output.destinationConnectorType),
    flowArn: __expectString(output.flowArn),
    flowName: __expectString(output.flowName),
    flowStatus: __expectString(output.flowStatus),
    lastRunExecutionDetails:
      output.lastRunExecutionDetails !== undefined && output.lastRunExecutionDetails !== null
        ? deserializeAws_restJson1ExecutionDetails(output.lastRunExecutionDetails, context)
        : undefined,
    lastUpdatedAt:
      output.lastUpdatedAt !== undefined && output.lastUpdatedAt !== null
        ? new Date(Math.round(output.lastUpdatedAt * 1000))
        : undefined,
    lastUpdatedBy: __expectString(output.lastUpdatedBy),
    sourceConnectorType: __expectString(output.sourceConnectorType),
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1TagMap(output.tags, context)
        : undefined,
    triggerType: __expectString(output.triggerType),
  } as any;
};

const deserializeAws_restJson1FlowExecutionList = (output: any, context: __SerdeContext): ExecutionRecord[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ExecutionRecord(entry, context);
    });
};

const deserializeAws_restJson1FlowList = (output: any, context: __SerdeContext): FlowDefinition[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1FlowDefinition(entry, context);
    });
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
      output.oAuthScopes !== undefined && output.oAuthScopes !== null
        ? deserializeAws_restJson1OAuthScopeList(output.oAuthScopes, context)
        : undefined,
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
      output.errorHandlingConfig !== undefined && output.errorHandlingConfig !== null
        ? deserializeAws_restJson1ErrorHandlingConfig(output.errorHandlingConfig, context)
        : undefined,
    object: __expectString(output.object),
  } as any;
};

const deserializeAws_restJson1HoneycodeMetadata = (output: any, context: __SerdeContext): HoneycodeMetadata => {
  return {
    oAuthScopes:
      output.oAuthScopes !== undefined && output.oAuthScopes !== null
        ? deserializeAws_restJson1OAuthScopeList(output.oAuthScopes, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1IdFieldNameList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
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

const deserializeAws_restJson1OAuthProperties = (output: any, context: __SerdeContext): OAuthProperties => {
  return {
    authCodeUrl: __expectString(output.authCodeUrl),
    oAuthScopes:
      output.oAuthScopes !== undefined && output.oAuthScopes !== null
        ? deserializeAws_restJson1OAuthScopeList(output.oAuthScopes, context)
        : undefined,
    tokenUrl: __expectString(output.tokenUrl),
  } as any;
};

const deserializeAws_restJson1OAuthScopeList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restJson1PrefixConfig = (output: any, context: __SerdeContext): PrefixConfig => {
  return {
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

const deserializeAws_restJson1RedshiftConnectorProfileProperties = (
  output: any,
  context: __SerdeContext
): RedshiftConnectorProfileProperties => {
  return {
    bucketName: __expectString(output.bucketName),
    bucketPrefix: __expectString(output.bucketPrefix),
    databaseUrl: __expectString(output.databaseUrl),
    roleArn: __expectString(output.roleArn),
  } as any;
};

const deserializeAws_restJson1RedshiftDestinationProperties = (
  output: any,
  context: __SerdeContext
): RedshiftDestinationProperties => {
  return {
    bucketPrefix: __expectString(output.bucketPrefix),
    errorHandlingConfig:
      output.errorHandlingConfig !== undefined && output.errorHandlingConfig !== null
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
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restJson1S3DestinationProperties = (
  output: any,
  context: __SerdeContext
): S3DestinationProperties => {
  return {
    bucketName: __expectString(output.bucketName),
    bucketPrefix: __expectString(output.bucketPrefix),
    s3OutputFormatConfig:
      output.s3OutputFormatConfig !== undefined && output.s3OutputFormatConfig !== null
        ? deserializeAws_restJson1S3OutputFormatConfig(output.s3OutputFormatConfig, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1S3Metadata = (output: any, context: __SerdeContext): S3Metadata => {
  return {} as any;
};

const deserializeAws_restJson1S3OutputFormatConfig = (output: any, context: __SerdeContext): S3OutputFormatConfig => {
  return {
    aggregationConfig:
      output.aggregationConfig !== undefined && output.aggregationConfig !== null
        ? deserializeAws_restJson1AggregationConfig(output.aggregationConfig, context)
        : undefined,
    fileType: __expectString(output.fileType),
    prefixConfig:
      output.prefixConfig !== undefined && output.prefixConfig !== null
        ? deserializeAws_restJson1PrefixConfig(output.prefixConfig, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1S3SourceProperties = (output: any, context: __SerdeContext): S3SourceProperties => {
  return {
    bucketName: __expectString(output.bucketName),
    bucketPrefix: __expectString(output.bucketPrefix),
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

const deserializeAws_restJson1SalesforceDestinationProperties = (
  output: any,
  context: __SerdeContext
): SalesforceDestinationProperties => {
  return {
    errorHandlingConfig:
      output.errorHandlingConfig !== undefined && output.errorHandlingConfig !== null
        ? deserializeAws_restJson1ErrorHandlingConfig(output.errorHandlingConfig, context)
        : undefined,
    idFieldNames:
      output.idFieldNames !== undefined && output.idFieldNames !== null
        ? deserializeAws_restJson1IdFieldNameList(output.idFieldNames, context)
        : undefined,
    object: __expectString(output.object),
    writeOperationType: __expectString(output.writeOperationType),
  } as any;
};

const deserializeAws_restJson1SalesforceMetadata = (output: any, context: __SerdeContext): SalesforceMetadata => {
  return {
    oAuthScopes:
      output.oAuthScopes !== undefined && output.oAuthScopes !== null
        ? deserializeAws_restJson1OAuthScopeList(output.oAuthScopes, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1SalesforceSourceProperties = (
  output: any,
  context: __SerdeContext
): SalesforceSourceProperties => {
  return {
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
      output.oAuthProperties !== undefined && output.oAuthProperties !== null
        ? deserializeAws_restJson1OAuthProperties(output.oAuthProperties, context)
        : undefined,
    portNumber: __expectInt32(output.portNumber),
    privateLinkServiceName: __expectString(output.privateLinkServiceName),
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
      output.firstExecutionFrom !== undefined && output.firstExecutionFrom !== null
        ? new Date(Math.round(output.firstExecutionFrom * 1000))
        : undefined,
    scheduleEndTime:
      output.scheduleEndTime !== undefined && output.scheduleEndTime !== null
        ? new Date(Math.round(output.scheduleEndTime * 1000))
        : undefined,
    scheduleExpression: __expectString(output.scheduleExpression),
    scheduleOffset: __expectLong(output.scheduleOffset),
    scheduleStartTime:
      output.scheduleStartTime !== undefined && output.scheduleStartTime !== null
        ? new Date(Math.round(output.scheduleStartTime * 1000))
        : undefined,
    timezone: __expectString(output.timezone),
  } as any;
};

const deserializeAws_restJson1SchedulingFrequencyTypeList = (
  output: any,
  context: __SerdeContext
): (ScheduleFrequencyType | string)[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
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
      output.oAuthScopes !== undefined && output.oAuthScopes !== null
        ? deserializeAws_restJson1OAuthScopeList(output.oAuthScopes, context)
        : undefined,
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
      output.errorHandlingConfig !== undefined && output.errorHandlingConfig !== null
        ? deserializeAws_restJson1ErrorHandlingConfig(output.errorHandlingConfig, context)
        : undefined,
    intermediateBucketName: __expectString(output.intermediateBucketName),
    object: __expectString(output.object),
  } as any;
};

const deserializeAws_restJson1SnowflakeMetadata = (output: any, context: __SerdeContext): SnowflakeMetadata => {
  return {
    supportedRegions:
      output.supportedRegions !== undefined && output.supportedRegions !== null
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
      output.Amplitude !== undefined && output.Amplitude !== null
        ? deserializeAws_restJson1AmplitudeSourceProperties(output.Amplitude, context)
        : undefined,
    Datadog:
      output.Datadog !== undefined && output.Datadog !== null
        ? deserializeAws_restJson1DatadogSourceProperties(output.Datadog, context)
        : undefined,
    Dynatrace:
      output.Dynatrace !== undefined && output.Dynatrace !== null
        ? deserializeAws_restJson1DynatraceSourceProperties(output.Dynatrace, context)
        : undefined,
    GoogleAnalytics:
      output.GoogleAnalytics !== undefined && output.GoogleAnalytics !== null
        ? deserializeAws_restJson1GoogleAnalyticsSourceProperties(output.GoogleAnalytics, context)
        : undefined,
    InforNexus:
      output.InforNexus !== undefined && output.InforNexus !== null
        ? deserializeAws_restJson1InforNexusSourceProperties(output.InforNexus, context)
        : undefined,
    Marketo:
      output.Marketo !== undefined && output.Marketo !== null
        ? deserializeAws_restJson1MarketoSourceProperties(output.Marketo, context)
        : undefined,
    S3:
      output.S3 !== undefined && output.S3 !== null
        ? deserializeAws_restJson1S3SourceProperties(output.S3, context)
        : undefined,
    SAPOData:
      output.SAPOData !== undefined && output.SAPOData !== null
        ? deserializeAws_restJson1SAPODataSourceProperties(output.SAPOData, context)
        : undefined,
    Salesforce:
      output.Salesforce !== undefined && output.Salesforce !== null
        ? deserializeAws_restJson1SalesforceSourceProperties(output.Salesforce, context)
        : undefined,
    ServiceNow:
      output.ServiceNow !== undefined && output.ServiceNow !== null
        ? deserializeAws_restJson1ServiceNowSourceProperties(output.ServiceNow, context)
        : undefined,
    Singular:
      output.Singular !== undefined && output.Singular !== null
        ? deserializeAws_restJson1SingularSourceProperties(output.Singular, context)
        : undefined,
    Slack:
      output.Slack !== undefined && output.Slack !== null
        ? deserializeAws_restJson1SlackSourceProperties(output.Slack, context)
        : undefined,
    Trendmicro:
      output.Trendmicro !== undefined && output.Trendmicro !== null
        ? deserializeAws_restJson1TrendmicroSourceProperties(output.Trendmicro, context)
        : undefined,
    Veeva:
      output.Veeva !== undefined && output.Veeva !== null
        ? deserializeAws_restJson1VeevaSourceProperties(output.Veeva, context)
        : undefined,
    Zendesk:
      output.Zendesk !== undefined && output.Zendesk !== null
        ? deserializeAws_restJson1ZendeskSourceProperties(output.Zendesk, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1SourceFieldProperties = (output: any, context: __SerdeContext): SourceFieldProperties => {
  return {
    isQueryable: __expectBoolean(output.isQueryable),
    isRetrievable: __expectBoolean(output.isRetrievable),
  } as any;
};

const deserializeAws_restJson1SourceFields = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restJson1SourceFlowConfig = (output: any, context: __SerdeContext): SourceFlowConfig => {
  return {
    connectorProfileName: __expectString(output.connectorProfileName),
    connectorType: __expectString(output.connectorType),
    incrementalPullConfig:
      output.incrementalPullConfig !== undefined && output.incrementalPullConfig !== null
        ? deserializeAws_restJson1IncrementalPullConfig(output.incrementalPullConfig, context)
        : undefined,
    sourceConnectorProperties:
      output.sourceConnectorProperties !== undefined && output.sourceConnectorProperties !== null
        ? deserializeAws_restJson1SourceConnectorProperties(output.sourceConnectorProperties, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1SupportedFieldTypeDetails = (
  output: any,
  context: __SerdeContext
): SupportedFieldTypeDetails => {
  return {
    v1:
      output.v1 !== undefined && output.v1 !== null
        ? deserializeAws_restJson1FieldTypeDetails(output.v1, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1SupportedValueList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restJson1SupportedWriteOperationList = (
  output: any,
  context: __SerdeContext
): (WriteOperationType | string)[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restJson1TagMap = (output: any, context: __SerdeContext): { [key: string]: string } => {
  return Object.entries(output).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: __expectString(value) as any,
    };
  }, {});
};

const deserializeAws_restJson1Task = (output: any, context: __SerdeContext): Task => {
  return {
    connectorOperator:
      output.connectorOperator !== undefined && output.connectorOperator !== null
        ? deserializeAws_restJson1ConnectorOperator(output.connectorOperator, context)
        : undefined,
    destinationField: __expectString(output.destinationField),
    sourceFields:
      output.sourceFields !== undefined && output.sourceFields !== null
        ? deserializeAws_restJson1SourceFields(output.sourceFields, context)
        : undefined,
    taskProperties:
      output.taskProperties !== undefined && output.taskProperties !== null
        ? deserializeAws_restJson1TaskPropertiesMap(output.taskProperties, context)
        : undefined,
    taskType: __expectString(output.taskType),
  } as any;
};

const deserializeAws_restJson1TaskPropertiesMap = (output: any, context: __SerdeContext): { [key: string]: string } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: string }, [key, value]: [OperatorPropertiesKeys | string, any]) => {
      if (value === null) {
        return acc;
      }
      return {
        ...acc,
        [key]: __expectString(value) as any,
      };
    },
    {}
  );
};

const deserializeAws_restJson1Tasks = (output: any, context: __SerdeContext): Task[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Task(entry, context);
    });
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
      output.triggerProperties !== undefined && output.triggerProperties !== null
        ? deserializeAws_restJson1TriggerProperties(output.triggerProperties, context)
        : undefined,
    triggerType: __expectString(output.triggerType),
  } as any;
};

const deserializeAws_restJson1TriggerProperties = (output: any, context: __SerdeContext): TriggerProperties => {
  return {
    Scheduled:
      output.Scheduled !== undefined && output.Scheduled !== null
        ? deserializeAws_restJson1ScheduledTriggerProperties(output.Scheduled, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1TriggerTypeList = (output: any, context: __SerdeContext): (TriggerType | string)[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restJson1UpsolverDestinationProperties = (
  output: any,
  context: __SerdeContext
): UpsolverDestinationProperties => {
  return {
    bucketName: __expectString(output.bucketName),
    bucketPrefix: __expectString(output.bucketPrefix),
    s3OutputFormatConfig:
      output.s3OutputFormatConfig !== undefined && output.s3OutputFormatConfig !== null
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
      output.aggregationConfig !== undefined && output.aggregationConfig !== null
        ? deserializeAws_restJson1AggregationConfig(output.aggregationConfig, context)
        : undefined,
    fileType: __expectString(output.fileType),
    prefixConfig:
      output.prefixConfig !== undefined && output.prefixConfig !== null
        ? deserializeAws_restJson1PrefixConfig(output.prefixConfig, context)
        : undefined,
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
      output.errorHandlingConfig !== undefined && output.errorHandlingConfig !== null
        ? deserializeAws_restJson1ErrorHandlingConfig(output.errorHandlingConfig, context)
        : undefined,
    idFieldNames:
      output.idFieldNames !== undefined && output.idFieldNames !== null
        ? deserializeAws_restJson1IdFieldNameList(output.idFieldNames, context)
        : undefined,
    object: __expectString(output.object),
    writeOperationType: __expectString(output.writeOperationType),
  } as any;
};

const deserializeAws_restJson1ZendeskMetadata = (output: any, context: __SerdeContext): ZendeskMetadata => {
  return {
    oAuthScopes:
      output.oAuthScopes !== undefined && output.oAuthScopes !== null
        ? deserializeAws_restJson1OAuthScopeList(output.oAuthScopes, context)
        : undefined,
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
  requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"],
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

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string): string => {
    let cleanValue = rawValue;
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

  return "";
};
