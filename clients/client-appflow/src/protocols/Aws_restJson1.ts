// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
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
  map,
  parseEpochTimestamp as __parseEpochTimestamp,
  resolvedPath as __resolvedPath,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";
import { v4 as generateIdempotencyToken } from "uuid";

import {
  CancelFlowExecutionsCommandInput,
  CancelFlowExecutionsCommandOutput,
} from "../commands/CancelFlowExecutionsCommand";
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
import {
  ResetConnectorMetadataCacheCommandInput,
  ResetConnectorMetadataCacheCommandOutput,
} from "../commands/ResetConnectorMetadataCacheCommand";
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
  AmplitudeSourceProperties,
  ApiKeyCredentials,
  BasicAuthCredentials,
  ConflictException,
  ConnectorAuthenticationException,
  ConnectorConfiguration,
  ConnectorDetail,
  ConnectorEntityField,
  ConnectorOAuthRequest,
  ConnectorOperator,
  ConnectorProfile,
  ConnectorProfileConfig,
  ConnectorProfileCredentials,
  ConnectorProfileProperties,
  ConnectorProvisioningConfig,
  ConnectorServerException,
  ConnectorType,
  CustomAuthCredentials,
  CustomConnectorDestinationProperties,
  CustomConnectorProfileCredentials,
  CustomConnectorProfileProperties,
  CustomConnectorSourceProperties,
  CustomerProfilesDestinationProperties,
  DatadogConnectorProfileCredentials,
  DatadogConnectorProfileProperties,
  DatadogSourceProperties,
  DataTransferApi,
  DestinationConnectorProperties,
  DestinationFlowConfig,
  DynatraceConnectorProfileCredentials,
  DynatraceConnectorProfileProperties,
  DynatraceSourceProperties,
  ErrorHandlingConfig,
  EventBridgeDestinationProperties,
  ExecutionDetails,
  ExecutionRecord,
  FieldTypeDetails,
  FlowDefinition,
  GlueDataCatalogConfig,
  GoogleAnalyticsConnectorProfileCredentials,
  GoogleAnalyticsConnectorProfileProperties,
  GoogleAnalyticsSourceProperties,
  HoneycodeConnectorProfileCredentials,
  HoneycodeConnectorProfileProperties,
  HoneycodeDestinationProperties,
  IncrementalPullConfig,
  InforNexusConnectorProfileCredentials,
  InforNexusConnectorProfileProperties,
  InforNexusSourceProperties,
  InternalServerException,
  LambdaConnectorProvisioningConfig,
  LookoutMetricsDestinationProperties,
  MarketoConnectorProfileCredentials,
  MarketoConnectorProfileProperties,
  MarketoDestinationProperties,
  MarketoSourceProperties,
  MetadataCatalogConfig,
  OAuth2Credentials,
  OAuth2Properties,
  OAuthCredentials,
  OAuthProperties,
  OperatorPropertiesKeys,
  PardotConnectorProfileCredentials,
  PardotConnectorProfileProperties,
  PardotSourceProperties,
  PathPrefix,
  PrefixConfig,
  Range,
  RedshiftConnectorProfileCredentials,
  RedshiftConnectorProfileProperties,
  RedshiftDestinationProperties,
  ResourceNotFoundException,
  S3DestinationProperties,
  S3InputFormatConfig,
  S3OutputFormatConfig,
  S3SourceProperties,
  SalesforceConnectorProfileCredentials,
  SalesforceConnectorProfileProperties,
  SalesforceDestinationProperties,
  SalesforceSourceProperties,
  SAPODataConnectorProfileCredentials,
  SAPODataConnectorProfileProperties,
  SAPODataDestinationProperties,
  SAPODataPaginationConfig,
  SAPODataParallelismConfig,
  SAPODataSourceProperties,
  ScheduledTriggerProperties,
  ServiceNowConnectorProfileCredentials,
  ServiceNowConnectorProfileProperties,
  ServiceNowSourceProperties,
  ServiceQuotaExceededException,
  SingularConnectorProfileCredentials,
  SingularConnectorProfileProperties,
  SingularSourceProperties,
  SlackConnectorProfileCredentials,
  SlackConnectorProfileProperties,
  SlackSourceProperties,
  SnowflakeConnectorProfileCredentials,
  SnowflakeConnectorProfileProperties,
  SnowflakeDestinationProperties,
  SourceConnectorProperties,
  SourceFlowConfig,
  SuccessResponseHandlingConfig,
  SupportedFieldTypeDetails,
  Task,
  ThrottlingException,
  TrendmicroConnectorProfileCredentials,
  TrendmicroConnectorProfileProperties,
  TrendmicroSourceProperties,
  TriggerConfig,
  TriggerProperties,
  UnsupportedOperationException,
  UpsolverDestinationProperties,
  UpsolverS3OutputFormatConfig,
  ValidationException,
  VeevaConnectorProfileCredentials,
  VeevaConnectorProfileProperties,
  VeevaSourceProperties,
  ZendeskConnectorProfileCredentials,
  ZendeskConnectorProfileProperties,
  ZendeskDestinationProperties,
  ZendeskSourceProperties,
} from "../models/models_0";

/**
 * serializeAws_restJson1CancelFlowExecutionsCommand
 */
export const se_CancelFlowExecutionsCommand = async (
  input: CancelFlowExecutionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/cancel-flow-executions";
  let body: any;
  body = JSON.stringify(
    take(input, {
      executionIds: (_) => _json(_),
      flowName: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      connectionMode: [],
      connectorLabel: [],
      connectorProfileConfig: (_) => _json(_),
      connectorProfileName: [],
      connectorType: [],
      kmsArn: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      description: [],
      destinationFlowConfigList: (_) => _json(_),
      flowName: [],
      kmsArn: [],
      metadataCatalogConfig: (_) => _json(_),
      sourceFlowConfig: (_) => _json(_),
      tags: (_) => _json(_),
      tasks: (_) => _json(_),
      triggerConfig: (_) => se_TriggerConfig(_, context),
    })
  );
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
  body = JSON.stringify(
    take(input, {
      connectorProfileName: [],
      forceDelete: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      flowName: [],
      forceDelete: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      connectorLabel: [],
      connectorType: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      apiVersion: [],
      connectorEntityName: [],
      connectorProfileName: [],
      connectorType: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      connectorLabel: [],
      connectorProfileNames: (_) => _json(_),
      connectorType: [],
      maxResults: [],
      nextToken: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      connectorTypes: (_) => _json(_),
      maxResults: [],
      nextToken: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      flowName: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      flowName: [],
      maxResults: [],
      nextToken: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      apiVersion: [],
      connectorProfileName: [],
      connectorType: [],
      entitiesPath: [],
      maxResults: [],
      nextToken: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      maxResults: [],
      nextToken: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      maxResults: [],
      nextToken: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      connectorLabel: [],
      connectorProvisioningConfig: (_) => _json(_),
      connectorProvisioningType: [],
      description: [],
    })
  );
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
 * serializeAws_restJson1ResetConnectorMetadataCacheCommand
 */
export const se_ResetConnectorMetadataCacheCommand = async (
  input: ResetConnectorMetadataCacheCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/reset-connector-metadata-cache";
  let body: any;
  body = JSON.stringify(
    take(input, {
      apiVersion: [],
      connectorEntityName: [],
      connectorProfileName: [],
      connectorType: [],
      entitiesPath: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      flowName: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      flowName: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      tags: (_) => _json(_),
    })
  );
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
  body = JSON.stringify(
    take(input, {
      connectorLabel: [],
      forceDelete: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      connectionMode: [],
      connectorProfileConfig: (_) => _json(_),
      connectorProfileName: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      connectorLabel: [],
      connectorProvisioningConfig: (_) => _json(_),
      description: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      description: [],
      destinationFlowConfigList: (_) => _json(_),
      flowName: [],
      metadataCatalogConfig: (_) => _json(_),
      sourceFlowConfig: (_) => _json(_),
      tasks: (_) => _json(_),
      triggerConfig: (_) => se_TriggerConfig(_, context),
    })
  );
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
 * deserializeAws_restJson1CancelFlowExecutionsCommand
 */
export const de_CancelFlowExecutionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelFlowExecutionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CancelFlowExecutionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    invalidExecutions: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CancelFlowExecutionsCommandError
 */
const de_CancelFlowExecutionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelFlowExecutionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.appflow#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appflow#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appflow#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.appflow#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.appflow#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
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
  const doc = take(data, {
    connectorProfileArn: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    flowArn: __expectString,
    flowStatus: __expectString,
  });
  Object.assign(contents, doc);
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
    case "ValidationException":
    case "com.amazonaws.appflow#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    connectorConfiguration: (_) => de_ConnectorConfiguration(_, context),
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    connectorEntityFields: (_) => de_ConnectorEntityFieldList(_, context),
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    connectorProfileDetails: (_) => de_ConnectorProfileDetailList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    connectorConfigurations: (_) => de_ConnectorConfigurationsMap(_, context),
    connectors: (_) => de_ConnectorList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    createdAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    createdBy: __expectString,
    description: __expectString,
    destinationFlowConfigList: _json,
    flowArn: __expectString,
    flowName: __expectString,
    flowStatus: __expectString,
    flowStatusMessage: __expectString,
    kmsArn: __expectString,
    lastRunExecutionDetails: (_) => de_ExecutionDetails(_, context),
    lastRunMetadataCatalogDetails: _json,
    lastUpdatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    lastUpdatedBy: __expectString,
    metadataCatalogConfig: _json,
    schemaVersion: __expectLong,
    sourceFlowConfig: _json,
    tags: _json,
    tasks: _json,
    triggerConfig: (_) => de_TriggerConfig(_, context),
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    flowExecutions: (_) => de_FlowExecutionList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    connectorEntityMap: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    connectors: (_) => de_ConnectorList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    flows: (_) => de_FlowList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    tags: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    connectorArn: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ResetConnectorMetadataCacheCommand
 */
export const de_ResetConnectorMetadataCacheCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResetConnectorMetadataCacheCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ResetConnectorMetadataCacheCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1ResetConnectorMetadataCacheCommandError
 */
const de_ResetConnectorMetadataCacheCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResetConnectorMetadataCacheCommandOutput> => {
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
    case "ValidationException":
    case "com.amazonaws.appflow#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    executionId: __expectString,
    flowArn: __expectString,
    flowStatus: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    flowArn: __expectString,
    flowStatus: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    connectorProfileArn: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    connectorArn: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    flowStatus: __expectString,
  });
  Object.assign(contents, doc);
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
    case "ValidationException":
    case "com.amazonaws.appflow#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

const throwDefaultError = withBaseException(__BaseException);
/**
 * deserializeAws_restJson1AccessDeniedExceptionRes
 */
const de_AccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// se_AggregationConfig omitted.

// se_AmplitudeConnectorProfileCredentials omitted.

// se_AmplitudeConnectorProfileProperties omitted.

// se_AmplitudeSourceProperties omitted.

// se_ApiKeyCredentials omitted.

// se_BasicAuthCredentials omitted.

// se_ConnectorOAuthRequest omitted.

// se_ConnectorOperator omitted.

// se_ConnectorProfileConfig omitted.

// se_ConnectorProfileCredentials omitted.

// se_ConnectorProfileNameList omitted.

// se_ConnectorProfileProperties omitted.

// se_ConnectorProvisioningConfig omitted.

// se_ConnectorTypeList omitted.

// se_CredentialsMap omitted.

// se_CustomAuthCredentials omitted.

// se_CustomConnectorDestinationProperties omitted.

// se_CustomConnectorProfileCredentials omitted.

// se_CustomConnectorProfileProperties omitted.

// se_CustomConnectorSourceProperties omitted.

// se_CustomerProfilesDestinationProperties omitted.

// se_CustomProperties omitted.

// se_DatadogConnectorProfileCredentials omitted.

// se_DatadogConnectorProfileProperties omitted.

// se_DatadogSourceProperties omitted.

// se_DataTransferApi omitted.

// se_DestinationConnectorProperties omitted.

// se_DestinationFlowConfig omitted.

// se_DestinationFlowConfigList omitted.

// se_DynatraceConnectorProfileCredentials omitted.

// se_DynatraceConnectorProfileProperties omitted.

// se_DynatraceSourceProperties omitted.

// se_ErrorHandlingConfig omitted.

// se_EventBridgeDestinationProperties omitted.

// se_ExecutionIds omitted.

// se_GlueDataCatalogConfig omitted.

// se_GoogleAnalyticsConnectorProfileCredentials omitted.

// se_GoogleAnalyticsConnectorProfileProperties omitted.

// se_GoogleAnalyticsSourceProperties omitted.

// se_HoneycodeConnectorProfileCredentials omitted.

// se_HoneycodeConnectorProfileProperties omitted.

// se_HoneycodeDestinationProperties omitted.

// se_IdFieldNameList omitted.

// se_IncrementalPullConfig omitted.

// se_InforNexusConnectorProfileCredentials omitted.

// se_InforNexusConnectorProfileProperties omitted.

// se_InforNexusSourceProperties omitted.

// se_LambdaConnectorProvisioningConfig omitted.

// se_LookoutMetricsDestinationProperties omitted.

// se_MarketoConnectorProfileCredentials omitted.

// se_MarketoConnectorProfileProperties omitted.

// se_MarketoDestinationProperties omitted.

// se_MarketoSourceProperties omitted.

// se_MetadataCatalogConfig omitted.

// se_OAuth2Credentials omitted.

// se_OAuth2Properties omitted.

// se_OAuthCredentials omitted.

// se_OAuthProperties omitted.

// se_OAuthScopeList omitted.

// se_PardotConnectorProfileCredentials omitted.

// se_PardotConnectorProfileProperties omitted.

// se_PardotSourceProperties omitted.

// se_PathPrefixHierarchy omitted.

// se_PrefixConfig omitted.

// se_ProfilePropertiesMap omitted.

// se_RedshiftConnectorProfileCredentials omitted.

// se_RedshiftConnectorProfileProperties omitted.

// se_RedshiftDestinationProperties omitted.

// se_S3DestinationProperties omitted.

// se_S3InputFormatConfig omitted.

// se_S3OutputFormatConfig omitted.

// se_S3SourceProperties omitted.

// se_SalesforceConnectorProfileCredentials omitted.

// se_SalesforceConnectorProfileProperties omitted.

// se_SalesforceDestinationProperties omitted.

// se_SalesforceSourceProperties omitted.

// se_SAPODataConnectorProfileCredentials omitted.

// se_SAPODataConnectorProfileProperties omitted.

// se_SAPODataDestinationProperties omitted.

// se_SAPODataPaginationConfig omitted.

// se_SAPODataParallelismConfig omitted.

// se_SAPODataSourceProperties omitted.

/**
 * serializeAws_restJson1ScheduledTriggerProperties
 */
const se_ScheduledTriggerProperties = (input: ScheduledTriggerProperties, context: __SerdeContext): any => {
  return take(input, {
    dataPullMode: [],
    firstExecutionFrom: (_) => Math.round(_.getTime() / 1000),
    flowErrorDeactivationThreshold: [],
    scheduleEndTime: (_) => Math.round(_.getTime() / 1000),
    scheduleExpression: [],
    scheduleOffset: [],
    scheduleStartTime: (_) => Math.round(_.getTime() / 1000),
    timezone: [],
  });
};

// se_ServiceNowConnectorProfileCredentials omitted.

// se_ServiceNowConnectorProfileProperties omitted.

// se_ServiceNowSourceProperties omitted.

// se_SingularConnectorProfileCredentials omitted.

// se_SingularConnectorProfileProperties omitted.

// se_SingularSourceProperties omitted.

// se_SlackConnectorProfileCredentials omitted.

// se_SlackConnectorProfileProperties omitted.

// se_SlackSourceProperties omitted.

// se_SnowflakeConnectorProfileCredentials omitted.

// se_SnowflakeConnectorProfileProperties omitted.

// se_SnowflakeDestinationProperties omitted.

// se_SourceConnectorProperties omitted.

// se_SourceFields omitted.

// se_SourceFlowConfig omitted.

// se_SuccessResponseHandlingConfig omitted.

// se_TagMap omitted.

// se_Task omitted.

// se_TaskPropertiesMap omitted.

// se_Tasks omitted.

// se_TokenUrlCustomProperties omitted.

// se_TrendmicroConnectorProfileCredentials omitted.

// se_TrendmicroConnectorProfileProperties omitted.

// se_TrendmicroSourceProperties omitted.

/**
 * serializeAws_restJson1TriggerConfig
 */
const se_TriggerConfig = (input: TriggerConfig, context: __SerdeContext): any => {
  return take(input, {
    triggerProperties: (_) => se_TriggerProperties(_, context),
    triggerType: [],
  });
};

/**
 * serializeAws_restJson1TriggerProperties
 */
const se_TriggerProperties = (input: TriggerProperties, context: __SerdeContext): any => {
  return take(input, {
    Scheduled: (_) => se_ScheduledTriggerProperties(_, context),
  });
};

// se_UpsolverDestinationProperties omitted.

// se_UpsolverS3OutputFormatConfig omitted.

// se_VeevaConnectorProfileCredentials omitted.

// se_VeevaConnectorProfileProperties omitted.

// se_VeevaSourceProperties omitted.

// se_ZendeskConnectorProfileCredentials omitted.

// se_ZendeskConnectorProfileProperties omitted.

// se_ZendeskDestinationProperties omitted.

// se_ZendeskSourceProperties omitted.

// de_AggregationConfig omitted.

// de_AmplitudeConnectorProfileProperties omitted.

// de_AmplitudeMetadata omitted.

// de_AmplitudeSourceProperties omitted.

// de_AuthCodeUrlList omitted.

// de_AuthenticationConfig omitted.

// de_AuthParameter omitted.

// de_AuthParameterList omitted.

/**
 * deserializeAws_restJson1ConnectorConfiguration
 */
const de_ConnectorConfiguration = (output: any, context: __SerdeContext): ConnectorConfiguration => {
  return take(output, {
    authenticationConfig: _json,
    canUseAsDestination: __expectBoolean,
    canUseAsSource: __expectBoolean,
    connectorArn: __expectString,
    connectorDescription: __expectString,
    connectorLabel: __expectString,
    connectorMetadata: _json,
    connectorModes: _json,
    connectorName: __expectString,
    connectorOwner: __expectString,
    connectorProvisioningConfig: _json,
    connectorProvisioningType: __expectString,
    connectorRuntimeSettings: _json,
    connectorType: __expectString,
    connectorVersion: __expectString,
    isPrivateLinkEnabled: __expectBoolean,
    isPrivateLinkEndpointUrlRequired: __expectBoolean,
    logoURL: __expectString,
    registeredAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    registeredBy: __expectString,
    supportedApiVersions: _json,
    supportedDataTransferApis: _json,
    supportedDataTransferTypes: _json,
    supportedDestinationConnectors: _json,
    supportedOperators: _json,
    supportedSchedulingFrequencies: _json,
    supportedTriggerTypes: _json,
    supportedWriteOperations: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1ConnectorConfigurationsMap
 */
const de_ConnectorConfigurationsMap = (
  output: any,
  context: __SerdeContext
): Record<ConnectorType, ConnectorConfiguration> => {
  return Object.entries(output).reduce(
    (acc: Record<ConnectorType, ConnectorConfiguration>, [key, value]: [string, any]) => {
      if (value === null) {
        return acc;
      }
      acc[key as ConnectorType] = de_ConnectorConfiguration(value, context);
      return acc;
    },
    {} as Record<ConnectorType, ConnectorConfiguration>
  );
};

/**
 * deserializeAws_restJson1ConnectorDetail
 */
const de_ConnectorDetail = (output: any, context: __SerdeContext): ConnectorDetail => {
  return take(output, {
    applicationType: __expectString,
    connectorDescription: __expectString,
    connectorLabel: __expectString,
    connectorModes: _json,
    connectorName: __expectString,
    connectorOwner: __expectString,
    connectorProvisioningType: __expectString,
    connectorType: __expectString,
    connectorVersion: __expectString,
    registeredAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    registeredBy: __expectString,
    supportedDataTransferTypes: _json,
  }) as any;
};

// de_ConnectorEntity omitted.

/**
 * deserializeAws_restJson1ConnectorEntityField
 */
const de_ConnectorEntityField = (output: any, context: __SerdeContext): ConnectorEntityField => {
  return take(output, {
    customProperties: _json,
    defaultValue: __expectString,
    description: __expectString,
    destinationProperties: _json,
    identifier: __expectString,
    isDeprecated: __expectBoolean,
    isPrimaryKey: __expectBoolean,
    label: __expectString,
    parentIdentifier: __expectString,
    sourceProperties: _json,
    supportedFieldTypeDetails: (_: any) => de_SupportedFieldTypeDetails(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1ConnectorEntityFieldList
 */
const de_ConnectorEntityFieldList = (output: any, context: __SerdeContext): ConnectorEntityField[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ConnectorEntityField(entry, context);
    });
  return retVal;
};

// de_ConnectorEntityList omitted.

// de_ConnectorEntityMap omitted.

/**
 * deserializeAws_restJson1ConnectorList
 */
const de_ConnectorList = (output: any, context: __SerdeContext): ConnectorDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ConnectorDetail(entry, context);
    });
  return retVal;
};

// de_ConnectorMetadata omitted.

// de_ConnectorModeList omitted.

// de_ConnectorOperator omitted.

/**
 * deserializeAws_restJson1ConnectorProfile
 */
const de_ConnectorProfile = (output: any, context: __SerdeContext): ConnectorProfile => {
  return take(output, {
    connectionMode: __expectString,
    connectorLabel: __expectString,
    connectorProfileArn: __expectString,
    connectorProfileName: __expectString,
    connectorProfileProperties: _json,
    connectorType: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    credentialsArn: __expectString,
    lastUpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    privateConnectionProvisioningState: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1ConnectorProfileDetailList
 */
const de_ConnectorProfileDetailList = (output: any, context: __SerdeContext): ConnectorProfile[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ConnectorProfile(entry, context);
    });
  return retVal;
};

// de_ConnectorProfileProperties omitted.

// de_ConnectorProvisioningConfig omitted.

// de_ConnectorRuntimeSetting omitted.

// de_ConnectorRuntimeSettingList omitted.

// de_ConnectorSuppliedValueList omitted.

// de_ConnectorSuppliedValueOptionList omitted.

// de_ConnectorTypeList omitted.

// de_CustomAuthConfig omitted.

// de_CustomAuthConfigList omitted.

// de_CustomConnectorDestinationProperties omitted.

// de_CustomConnectorProfileProperties omitted.

// de_CustomConnectorSourceProperties omitted.

// de_CustomerProfilesDestinationProperties omitted.

// de_CustomerProfilesMetadata omitted.

// de_CustomProperties omitted.

// de_DatadogConnectorProfileProperties omitted.

// de_DatadogMetadata omitted.

// de_DatadogSourceProperties omitted.

// de_DataTransferApi omitted.

// de_DestinationConnectorProperties omitted.

// de_DestinationFieldProperties omitted.

// de_DestinationFlowConfig omitted.

// de_DestinationFlowConfigList omitted.

// de_DynatraceConnectorProfileProperties omitted.

// de_DynatraceMetadata omitted.

// de_DynatraceSourceProperties omitted.

// de_ErrorHandlingConfig omitted.

// de_ErrorInfo omitted.

// de_EventBridgeDestinationProperties omitted.

// de_EventBridgeMetadata omitted.

/**
 * deserializeAws_restJson1ExecutionDetails
 */
const de_ExecutionDetails = (output: any, context: __SerdeContext): ExecutionDetails => {
  return take(output, {
    mostRecentExecutionMessage: __expectString,
    mostRecentExecutionStatus: __expectString,
    mostRecentExecutionTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_ExecutionIds omitted.

/**
 * deserializeAws_restJson1ExecutionRecord
 */
const de_ExecutionRecord = (output: any, context: __SerdeContext): ExecutionRecord => {
  return take(output, {
    dataPullEndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    dataPullStartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    executionId: __expectString,
    executionResult: _json,
    executionStatus: __expectString,
    lastUpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    metadataCatalogDetails: _json,
    startedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_ExecutionResult omitted.

/**
 * deserializeAws_restJson1FieldTypeDetails
 */
const de_FieldTypeDetails = (output: any, context: __SerdeContext): FieldTypeDetails => {
  return take(output, {
    fieldLengthRange: (_: any) => de_Range(_, context),
    fieldType: __expectString,
    fieldValueRange: (_: any) => de_Range(_, context),
    filterOperators: _json,
    supportedDateFormat: __expectString,
    supportedValues: _json,
    valueRegexPattern: __expectString,
  }) as any;
};

// de_FilterOperatorList omitted.

/**
 * deserializeAws_restJson1FlowDefinition
 */
const de_FlowDefinition = (output: any, context: __SerdeContext): FlowDefinition => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    createdBy: __expectString,
    description: __expectString,
    destinationConnectorLabel: __expectString,
    destinationConnectorType: __expectString,
    flowArn: __expectString,
    flowName: __expectString,
    flowStatus: __expectString,
    lastRunExecutionDetails: (_: any) => de_ExecutionDetails(_, context),
    lastUpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    lastUpdatedBy: __expectString,
    sourceConnectorLabel: __expectString,
    sourceConnectorType: __expectString,
    tags: _json,
    triggerType: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1FlowExecutionList
 */
const de_FlowExecutionList = (output: any, context: __SerdeContext): ExecutionRecord[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
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
      return de_FlowDefinition(entry, context);
    });
  return retVal;
};

// de_GlueDataCatalogConfig omitted.

// de_GoogleAnalyticsConnectorProfileProperties omitted.

// de_GoogleAnalyticsMetadata omitted.

// de_GoogleAnalyticsSourceProperties omitted.

// de_HoneycodeConnectorProfileProperties omitted.

// de_HoneycodeDestinationProperties omitted.

// de_HoneycodeMetadata omitted.

// de_IdFieldNameList omitted.

// de_IncrementalPullConfig omitted.

// de_InforNexusConnectorProfileProperties omitted.

// de_InforNexusMetadata omitted.

// de_InforNexusSourceProperties omitted.

// de_LambdaConnectorProvisioningConfig omitted.

// de_LookoutMetricsDestinationProperties omitted.

// de_MarketoConnectorProfileProperties omitted.

// de_MarketoDestinationProperties omitted.

// de_MarketoMetadata omitted.

// de_MarketoSourceProperties omitted.

// de_MetadataCatalogConfig omitted.

// de_MetadataCatalogDetail omitted.

// de_MetadataCatalogDetails omitted.

// de_OAuth2CustomParameter omitted.

// de_OAuth2CustomPropertiesList omitted.

// de_OAuth2Defaults omitted.

// de_OAuth2GrantTypeSupportedList omitted.

// de_OAuth2Properties omitted.

// de_OAuthProperties omitted.

// de_OAuthScopeList omitted.

// de_PardotConnectorProfileProperties omitted.

// de_PardotMetadata omitted.

// de_PardotSourceProperties omitted.

// de_PathPrefixHierarchy omitted.

// de_PrefixConfig omitted.

// de_PrivateConnectionProvisioningState omitted.

// de_ProfilePropertiesMap omitted.

/**
 * deserializeAws_restJson1Range
 */
const de_Range = (output: any, context: __SerdeContext): Range => {
  return take(output, {
    maximum: __limitedParseDouble,
    minimum: __limitedParseDouble,
  }) as any;
};

// de_RedshiftConnectorProfileProperties omitted.

// de_RedshiftDestinationProperties omitted.

// de_RedshiftMetadata omitted.

// de_RegionList omitted.

// de_RegistrationOutput omitted.

// de_S3DestinationProperties omitted.

// de_S3InputFormatConfig omitted.

// de_S3Metadata omitted.

// de_S3OutputFormatConfig omitted.

// de_S3SourceProperties omitted.

// de_SalesforceConnectorProfileProperties omitted.

// de_SalesforceDataTransferApiList omitted.

// de_SalesforceDestinationProperties omitted.

// de_SalesforceMetadata omitted.

// de_SalesforceSourceProperties omitted.

// de_SAPODataConnectorProfileProperties omitted.

// de_SAPODataDestinationProperties omitted.

// de_SAPODataMetadata omitted.

// de_SAPODataPaginationConfig omitted.

// de_SAPODataParallelismConfig omitted.

// de_SAPODataSourceProperties omitted.

/**
 * deserializeAws_restJson1ScheduledTriggerProperties
 */
const de_ScheduledTriggerProperties = (output: any, context: __SerdeContext): ScheduledTriggerProperties => {
  return take(output, {
    dataPullMode: __expectString,
    firstExecutionFrom: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    flowErrorDeactivationThreshold: __expectInt32,
    scheduleEndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    scheduleExpression: __expectString,
    scheduleOffset: __expectLong,
    scheduleStartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    timezone: __expectString,
  }) as any;
};

// de_SchedulingFrequencyTypeList omitted.

// de_ServiceNowConnectorProfileProperties omitted.

// de_ServiceNowMetadata omitted.

// de_ServiceNowSourceProperties omitted.

// de_SingularConnectorProfileProperties omitted.

// de_SingularMetadata omitted.

// de_SingularSourceProperties omitted.

// de_SlackConnectorProfileProperties omitted.

// de_SlackMetadata omitted.

// de_SlackSourceProperties omitted.

// de_SnowflakeConnectorProfileProperties omitted.

// de_SnowflakeDestinationProperties omitted.

// de_SnowflakeMetadata omitted.

// de_SourceConnectorProperties omitted.

// de_SourceFieldProperties omitted.

// de_SourceFields omitted.

// de_SourceFlowConfig omitted.

// de_SuccessResponseHandlingConfig omitted.

// de_SupportedApiVersionList omitted.

// de_SupportedDataTransferApis omitted.

// de_SupportedDataTransferTypeList omitted.

/**
 * deserializeAws_restJson1SupportedFieldTypeDetails
 */
const de_SupportedFieldTypeDetails = (output: any, context: __SerdeContext): SupportedFieldTypeDetails => {
  return take(output, {
    v1: (_: any) => de_FieldTypeDetails(_, context),
  }) as any;
};

// de_SupportedOperatorList omitted.

// de_SupportedValueList omitted.

// de_SupportedWriteOperationList omitted.

// de_TagMap omitted.

// de_Task omitted.

// de_TaskPropertiesMap omitted.

// de_Tasks omitted.

// de_TokenUrlCustomProperties omitted.

// de_TokenUrlList omitted.

// de_TrendmicroConnectorProfileProperties omitted.

// de_TrendmicroMetadata omitted.

// de_TrendmicroSourceProperties omitted.

/**
 * deserializeAws_restJson1TriggerConfig
 */
const de_TriggerConfig = (output: any, context: __SerdeContext): TriggerConfig => {
  return take(output, {
    triggerProperties: (_: any) => de_TriggerProperties(_, context),
    triggerType: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1TriggerProperties
 */
const de_TriggerProperties = (output: any, context: __SerdeContext): TriggerProperties => {
  return take(output, {
    Scheduled: (_: any) => de_ScheduledTriggerProperties(_, context),
  }) as any;
};

// de_TriggerTypeList omitted.

// de_UpsolverDestinationProperties omitted.

// de_UpsolverMetadata omitted.

// de_UpsolverS3OutputFormatConfig omitted.

// de_VeevaConnectorProfileProperties omitted.

// de_VeevaMetadata omitted.

// de_VeevaSourceProperties omitted.

// de_ZendeskConnectorProfileProperties omitted.

// de_ZendeskDestinationProperties omitted.

// de_ZendeskMetadata omitted.

// de_ZendeskSourceProperties omitted.

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

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
