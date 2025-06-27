// smithy-typescript generated code
import { loadRestJsonErrorCode, parseJsonBody as parseBody, parseJsonErrorBody as parseErrorBody } from "@aws-sdk/core";
import { requestBuilder as rb } from "@smithy/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  isSerializableHeaderValue,
  map,
  resolvedPath as __resolvedPath,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import {
  AssociateRoleToGroupCommandInput,
  AssociateRoleToGroupCommandOutput,
} from "../commands/AssociateRoleToGroupCommand";
import {
  AssociateServiceRoleToAccountCommandInput,
  AssociateServiceRoleToAccountCommandOutput,
} from "../commands/AssociateServiceRoleToAccountCommand";
import {
  CreateConnectorDefinitionCommandInput,
  CreateConnectorDefinitionCommandOutput,
} from "../commands/CreateConnectorDefinitionCommand";
import {
  CreateConnectorDefinitionVersionCommandInput,
  CreateConnectorDefinitionVersionCommandOutput,
} from "../commands/CreateConnectorDefinitionVersionCommand";
import {
  CreateCoreDefinitionCommandInput,
  CreateCoreDefinitionCommandOutput,
} from "../commands/CreateCoreDefinitionCommand";
import {
  CreateCoreDefinitionVersionCommandInput,
  CreateCoreDefinitionVersionCommandOutput,
} from "../commands/CreateCoreDefinitionVersionCommand";
import { CreateDeploymentCommandInput, CreateDeploymentCommandOutput } from "../commands/CreateDeploymentCommand";
import {
  CreateDeviceDefinitionCommandInput,
  CreateDeviceDefinitionCommandOutput,
} from "../commands/CreateDeviceDefinitionCommand";
import {
  CreateDeviceDefinitionVersionCommandInput,
  CreateDeviceDefinitionVersionCommandOutput,
} from "../commands/CreateDeviceDefinitionVersionCommand";
import {
  CreateFunctionDefinitionCommandInput,
  CreateFunctionDefinitionCommandOutput,
} from "../commands/CreateFunctionDefinitionCommand";
import {
  CreateFunctionDefinitionVersionCommandInput,
  CreateFunctionDefinitionVersionCommandOutput,
} from "../commands/CreateFunctionDefinitionVersionCommand";
import {
  CreateGroupCertificateAuthorityCommandInput,
  CreateGroupCertificateAuthorityCommandOutput,
} from "../commands/CreateGroupCertificateAuthorityCommand";
import { CreateGroupCommandInput, CreateGroupCommandOutput } from "../commands/CreateGroupCommand";
import { CreateGroupVersionCommandInput, CreateGroupVersionCommandOutput } from "../commands/CreateGroupVersionCommand";
import {
  CreateLoggerDefinitionCommandInput,
  CreateLoggerDefinitionCommandOutput,
} from "../commands/CreateLoggerDefinitionCommand";
import {
  CreateLoggerDefinitionVersionCommandInput,
  CreateLoggerDefinitionVersionCommandOutput,
} from "../commands/CreateLoggerDefinitionVersionCommand";
import {
  CreateResourceDefinitionCommandInput,
  CreateResourceDefinitionCommandOutput,
} from "../commands/CreateResourceDefinitionCommand";
import {
  CreateResourceDefinitionVersionCommandInput,
  CreateResourceDefinitionVersionCommandOutput,
} from "../commands/CreateResourceDefinitionVersionCommand";
import {
  CreateSoftwareUpdateJobCommandInput,
  CreateSoftwareUpdateJobCommandOutput,
} from "../commands/CreateSoftwareUpdateJobCommand";
import {
  CreateSubscriptionDefinitionCommandInput,
  CreateSubscriptionDefinitionCommandOutput,
} from "../commands/CreateSubscriptionDefinitionCommand";
import {
  CreateSubscriptionDefinitionVersionCommandInput,
  CreateSubscriptionDefinitionVersionCommandOutput,
} from "../commands/CreateSubscriptionDefinitionVersionCommand";
import {
  DeleteConnectorDefinitionCommandInput,
  DeleteConnectorDefinitionCommandOutput,
} from "../commands/DeleteConnectorDefinitionCommand";
import {
  DeleteCoreDefinitionCommandInput,
  DeleteCoreDefinitionCommandOutput,
} from "../commands/DeleteCoreDefinitionCommand";
import {
  DeleteDeviceDefinitionCommandInput,
  DeleteDeviceDefinitionCommandOutput,
} from "../commands/DeleteDeviceDefinitionCommand";
import {
  DeleteFunctionDefinitionCommandInput,
  DeleteFunctionDefinitionCommandOutput,
} from "../commands/DeleteFunctionDefinitionCommand";
import { DeleteGroupCommandInput, DeleteGroupCommandOutput } from "../commands/DeleteGroupCommand";
import {
  DeleteLoggerDefinitionCommandInput,
  DeleteLoggerDefinitionCommandOutput,
} from "../commands/DeleteLoggerDefinitionCommand";
import {
  DeleteResourceDefinitionCommandInput,
  DeleteResourceDefinitionCommandOutput,
} from "../commands/DeleteResourceDefinitionCommand";
import {
  DeleteSubscriptionDefinitionCommandInput,
  DeleteSubscriptionDefinitionCommandOutput,
} from "../commands/DeleteSubscriptionDefinitionCommand";
import {
  DisassociateRoleFromGroupCommandInput,
  DisassociateRoleFromGroupCommandOutput,
} from "../commands/DisassociateRoleFromGroupCommand";
import {
  DisassociateServiceRoleFromAccountCommandInput,
  DisassociateServiceRoleFromAccountCommandOutput,
} from "../commands/DisassociateServiceRoleFromAccountCommand";
import { GetAssociatedRoleCommandInput, GetAssociatedRoleCommandOutput } from "../commands/GetAssociatedRoleCommand";
import {
  GetBulkDeploymentStatusCommandInput,
  GetBulkDeploymentStatusCommandOutput,
} from "../commands/GetBulkDeploymentStatusCommand";
import {
  GetConnectivityInfoCommandInput,
  GetConnectivityInfoCommandOutput,
} from "../commands/GetConnectivityInfoCommand";
import {
  GetConnectorDefinitionCommandInput,
  GetConnectorDefinitionCommandOutput,
} from "../commands/GetConnectorDefinitionCommand";
import {
  GetConnectorDefinitionVersionCommandInput,
  GetConnectorDefinitionVersionCommandOutput,
} from "../commands/GetConnectorDefinitionVersionCommand";
import { GetCoreDefinitionCommandInput, GetCoreDefinitionCommandOutput } from "../commands/GetCoreDefinitionCommand";
import {
  GetCoreDefinitionVersionCommandInput,
  GetCoreDefinitionVersionCommandOutput,
} from "../commands/GetCoreDefinitionVersionCommand";
import {
  GetDeploymentStatusCommandInput,
  GetDeploymentStatusCommandOutput,
} from "../commands/GetDeploymentStatusCommand";
import {
  GetDeviceDefinitionCommandInput,
  GetDeviceDefinitionCommandOutput,
} from "../commands/GetDeviceDefinitionCommand";
import {
  GetDeviceDefinitionVersionCommandInput,
  GetDeviceDefinitionVersionCommandOutput,
} from "../commands/GetDeviceDefinitionVersionCommand";
import {
  GetFunctionDefinitionCommandInput,
  GetFunctionDefinitionCommandOutput,
} from "../commands/GetFunctionDefinitionCommand";
import {
  GetFunctionDefinitionVersionCommandInput,
  GetFunctionDefinitionVersionCommandOutput,
} from "../commands/GetFunctionDefinitionVersionCommand";
import {
  GetGroupCertificateAuthorityCommandInput,
  GetGroupCertificateAuthorityCommandOutput,
} from "../commands/GetGroupCertificateAuthorityCommand";
import {
  GetGroupCertificateConfigurationCommandInput,
  GetGroupCertificateConfigurationCommandOutput,
} from "../commands/GetGroupCertificateConfigurationCommand";
import { GetGroupCommandInput, GetGroupCommandOutput } from "../commands/GetGroupCommand";
import { GetGroupVersionCommandInput, GetGroupVersionCommandOutput } from "../commands/GetGroupVersionCommand";
import {
  GetLoggerDefinitionCommandInput,
  GetLoggerDefinitionCommandOutput,
} from "../commands/GetLoggerDefinitionCommand";
import {
  GetLoggerDefinitionVersionCommandInput,
  GetLoggerDefinitionVersionCommandOutput,
} from "../commands/GetLoggerDefinitionVersionCommand";
import {
  GetResourceDefinitionCommandInput,
  GetResourceDefinitionCommandOutput,
} from "../commands/GetResourceDefinitionCommand";
import {
  GetResourceDefinitionVersionCommandInput,
  GetResourceDefinitionVersionCommandOutput,
} from "../commands/GetResourceDefinitionVersionCommand";
import {
  GetServiceRoleForAccountCommandInput,
  GetServiceRoleForAccountCommandOutput,
} from "../commands/GetServiceRoleForAccountCommand";
import {
  GetSubscriptionDefinitionCommandInput,
  GetSubscriptionDefinitionCommandOutput,
} from "../commands/GetSubscriptionDefinitionCommand";
import {
  GetSubscriptionDefinitionVersionCommandInput,
  GetSubscriptionDefinitionVersionCommandOutput,
} from "../commands/GetSubscriptionDefinitionVersionCommand";
import {
  GetThingRuntimeConfigurationCommandInput,
  GetThingRuntimeConfigurationCommandOutput,
} from "../commands/GetThingRuntimeConfigurationCommand";
import {
  ListBulkDeploymentDetailedReportsCommandInput,
  ListBulkDeploymentDetailedReportsCommandOutput,
} from "../commands/ListBulkDeploymentDetailedReportsCommand";
import {
  ListBulkDeploymentsCommandInput,
  ListBulkDeploymentsCommandOutput,
} from "../commands/ListBulkDeploymentsCommand";
import {
  ListConnectorDefinitionsCommandInput,
  ListConnectorDefinitionsCommandOutput,
} from "../commands/ListConnectorDefinitionsCommand";
import {
  ListConnectorDefinitionVersionsCommandInput,
  ListConnectorDefinitionVersionsCommandOutput,
} from "../commands/ListConnectorDefinitionVersionsCommand";
import {
  ListCoreDefinitionsCommandInput,
  ListCoreDefinitionsCommandOutput,
} from "../commands/ListCoreDefinitionsCommand";
import {
  ListCoreDefinitionVersionsCommandInput,
  ListCoreDefinitionVersionsCommandOutput,
} from "../commands/ListCoreDefinitionVersionsCommand";
import { ListDeploymentsCommandInput, ListDeploymentsCommandOutput } from "../commands/ListDeploymentsCommand";
import {
  ListDeviceDefinitionsCommandInput,
  ListDeviceDefinitionsCommandOutput,
} from "../commands/ListDeviceDefinitionsCommand";
import {
  ListDeviceDefinitionVersionsCommandInput,
  ListDeviceDefinitionVersionsCommandOutput,
} from "../commands/ListDeviceDefinitionVersionsCommand";
import {
  ListFunctionDefinitionsCommandInput,
  ListFunctionDefinitionsCommandOutput,
} from "../commands/ListFunctionDefinitionsCommand";
import {
  ListFunctionDefinitionVersionsCommandInput,
  ListFunctionDefinitionVersionsCommandOutput,
} from "../commands/ListFunctionDefinitionVersionsCommand";
import {
  ListGroupCertificateAuthoritiesCommandInput,
  ListGroupCertificateAuthoritiesCommandOutput,
} from "../commands/ListGroupCertificateAuthoritiesCommand";
import { ListGroupsCommandInput, ListGroupsCommandOutput } from "../commands/ListGroupsCommand";
import { ListGroupVersionsCommandInput, ListGroupVersionsCommandOutput } from "../commands/ListGroupVersionsCommand";
import {
  ListLoggerDefinitionsCommandInput,
  ListLoggerDefinitionsCommandOutput,
} from "../commands/ListLoggerDefinitionsCommand";
import {
  ListLoggerDefinitionVersionsCommandInput,
  ListLoggerDefinitionVersionsCommandOutput,
} from "../commands/ListLoggerDefinitionVersionsCommand";
import {
  ListResourceDefinitionsCommandInput,
  ListResourceDefinitionsCommandOutput,
} from "../commands/ListResourceDefinitionsCommand";
import {
  ListResourceDefinitionVersionsCommandInput,
  ListResourceDefinitionVersionsCommandOutput,
} from "../commands/ListResourceDefinitionVersionsCommand";
import {
  ListSubscriptionDefinitionsCommandInput,
  ListSubscriptionDefinitionsCommandOutput,
} from "../commands/ListSubscriptionDefinitionsCommand";
import {
  ListSubscriptionDefinitionVersionsCommandInput,
  ListSubscriptionDefinitionVersionsCommandOutput,
} from "../commands/ListSubscriptionDefinitionVersionsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { ResetDeploymentsCommandInput, ResetDeploymentsCommandOutput } from "../commands/ResetDeploymentsCommand";
import {
  StartBulkDeploymentCommandInput,
  StartBulkDeploymentCommandOutput,
} from "../commands/StartBulkDeploymentCommand";
import { StopBulkDeploymentCommandInput, StopBulkDeploymentCommandOutput } from "../commands/StopBulkDeploymentCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  UpdateConnectivityInfoCommandInput,
  UpdateConnectivityInfoCommandOutput,
} from "../commands/UpdateConnectivityInfoCommand";
import {
  UpdateConnectorDefinitionCommandInput,
  UpdateConnectorDefinitionCommandOutput,
} from "../commands/UpdateConnectorDefinitionCommand";
import {
  UpdateCoreDefinitionCommandInput,
  UpdateCoreDefinitionCommandOutput,
} from "../commands/UpdateCoreDefinitionCommand";
import {
  UpdateDeviceDefinitionCommandInput,
  UpdateDeviceDefinitionCommandOutput,
} from "../commands/UpdateDeviceDefinitionCommand";
import {
  UpdateFunctionDefinitionCommandInput,
  UpdateFunctionDefinitionCommandOutput,
} from "../commands/UpdateFunctionDefinitionCommand";
import {
  UpdateGroupCertificateConfigurationCommandInput,
  UpdateGroupCertificateConfigurationCommandOutput,
} from "../commands/UpdateGroupCertificateConfigurationCommand";
import { UpdateGroupCommandInput, UpdateGroupCommandOutput } from "../commands/UpdateGroupCommand";
import {
  UpdateLoggerDefinitionCommandInput,
  UpdateLoggerDefinitionCommandOutput,
} from "../commands/UpdateLoggerDefinitionCommand";
import {
  UpdateResourceDefinitionCommandInput,
  UpdateResourceDefinitionCommandOutput,
} from "../commands/UpdateResourceDefinitionCommand";
import {
  UpdateSubscriptionDefinitionCommandInput,
  UpdateSubscriptionDefinitionCommandOutput,
} from "../commands/UpdateSubscriptionDefinitionCommand";
import {
  UpdateThingRuntimeConfigurationCommandInput,
  UpdateThingRuntimeConfigurationCommandOutput,
} from "../commands/UpdateThingRuntimeConfigurationCommand";
import { GreengrassServiceException as __BaseException } from "../models/GreengrassServiceException";
import {
  BadRequestException,
  ConnectivityInfo,
  Connector,
  ConnectorDefinitionVersion,
  Core,
  CoreDefinitionVersion,
  DefinitionInformation,
  Device,
  DeviceDefinitionVersion,
  Function,
  FunctionConfiguration,
  FunctionConfigurationEnvironment,
  FunctionDefaultConfig,
  FunctionDefaultExecutionConfig,
  FunctionDefinitionVersion,
  FunctionExecutionConfig,
  FunctionRunAsConfig,
  GroupOwnerSetting,
  GroupVersion,
  InternalServerErrorException,
  LocalDeviceResourceData,
  LocalVolumeResourceData,
  Logger,
  LoggerDefinitionVersion,
  Resource,
  ResourceAccessPolicy,
  ResourceDataContainer,
  ResourceDefinitionVersion,
  ResourceDownloadOwnerSetting,
  S3MachineLearningModelResourceData,
  SageMakerMachineLearningModelResourceData,
  SecretsManagerSecretResourceData,
  Subscription,
  SubscriptionDefinitionVersion,
  TelemetryConfigurationUpdate,
} from "../models/models_0";

/**
 * serializeAws_restJson1AssociateRoleToGroupCommand
 */
export const se_AssociateRoleToGroupCommand = async (
  input: AssociateRoleToGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/greengrass/groups/{GroupId}/role");
  b.p("GroupId", () => input.GroupId!, "{GroupId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      RoleArn: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1AssociateServiceRoleToAccountCommand
 */
export const se_AssociateServiceRoleToAccountCommand = async (
  input: AssociateServiceRoleToAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/greengrass/servicerole");
  let body: any;
  body = JSON.stringify(
    take(input, {
      RoleArn: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateConnectorDefinitionCommand
 */
export const se_CreateConnectorDefinitionCommand = async (
  input: CreateConnectorDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_xact]: input[_ACT]!,
  });
  b.bp("/greengrass/definition/connectors");
  let body: any;
  body = JSON.stringify(
    take(input, {
      InitialVersion: (_) => _json(_),
      Name: [],
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateConnectorDefinitionVersionCommand
 */
export const se_CreateConnectorDefinitionVersionCommand = async (
  input: CreateConnectorDefinitionVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_xact]: input[_ACT]!,
  });
  b.bp("/greengrass/definition/connectors/{ConnectorDefinitionId}/versions");
  b.p("ConnectorDefinitionId", () => input.ConnectorDefinitionId!, "{ConnectorDefinitionId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Connectors: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateCoreDefinitionCommand
 */
export const se_CreateCoreDefinitionCommand = async (
  input: CreateCoreDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_xact]: input[_ACT]!,
  });
  b.bp("/greengrass/definition/cores");
  let body: any;
  body = JSON.stringify(
    take(input, {
      InitialVersion: (_) => _json(_),
      Name: [],
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateCoreDefinitionVersionCommand
 */
export const se_CreateCoreDefinitionVersionCommand = async (
  input: CreateCoreDefinitionVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_xact]: input[_ACT]!,
  });
  b.bp("/greengrass/definition/cores/{CoreDefinitionId}/versions");
  b.p("CoreDefinitionId", () => input.CoreDefinitionId!, "{CoreDefinitionId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Cores: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateDeploymentCommand
 */
export const se_CreateDeploymentCommand = async (
  input: CreateDeploymentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_xact]: input[_ACT]!,
  });
  b.bp("/greengrass/groups/{GroupId}/deployments");
  b.p("GroupId", () => input.GroupId!, "{GroupId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      DeploymentId: [],
      DeploymentType: [],
      GroupVersionId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateDeviceDefinitionCommand
 */
export const se_CreateDeviceDefinitionCommand = async (
  input: CreateDeviceDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_xact]: input[_ACT]!,
  });
  b.bp("/greengrass/definition/devices");
  let body: any;
  body = JSON.stringify(
    take(input, {
      InitialVersion: (_) => _json(_),
      Name: [],
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateDeviceDefinitionVersionCommand
 */
export const se_CreateDeviceDefinitionVersionCommand = async (
  input: CreateDeviceDefinitionVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_xact]: input[_ACT]!,
  });
  b.bp("/greengrass/definition/devices/{DeviceDefinitionId}/versions");
  b.p("DeviceDefinitionId", () => input.DeviceDefinitionId!, "{DeviceDefinitionId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Devices: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateFunctionDefinitionCommand
 */
export const se_CreateFunctionDefinitionCommand = async (
  input: CreateFunctionDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_xact]: input[_ACT]!,
  });
  b.bp("/greengrass/definition/functions");
  let body: any;
  body = JSON.stringify(
    take(input, {
      InitialVersion: (_) => _json(_),
      Name: [],
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateFunctionDefinitionVersionCommand
 */
export const se_CreateFunctionDefinitionVersionCommand = async (
  input: CreateFunctionDefinitionVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_xact]: input[_ACT]!,
  });
  b.bp("/greengrass/definition/functions/{FunctionDefinitionId}/versions");
  b.p("FunctionDefinitionId", () => input.FunctionDefinitionId!, "{FunctionDefinitionId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      DefaultConfig: (_) => _json(_),
      Functions: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateGroupCommand
 */
export const se_CreateGroupCommand = async (
  input: CreateGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_xact]: input[_ACT]!,
  });
  b.bp("/greengrass/groups");
  let body: any;
  body = JSON.stringify(
    take(input, {
      InitialVersion: (_) => _json(_),
      Name: [],
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateGroupCertificateAuthorityCommand
 */
export const se_CreateGroupCertificateAuthorityCommand = async (
  input: CreateGroupCertificateAuthorityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xact]: input[_ACT]!,
  });
  b.bp("/greengrass/groups/{GroupId}/certificateauthorities");
  b.p("GroupId", () => input.GroupId!, "{GroupId}", false);
  let body: any;
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateGroupVersionCommand
 */
export const se_CreateGroupVersionCommand = async (
  input: CreateGroupVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_xact]: input[_ACT]!,
  });
  b.bp("/greengrass/groups/{GroupId}/versions");
  b.p("GroupId", () => input.GroupId!, "{GroupId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      ConnectorDefinitionVersionArn: [],
      CoreDefinitionVersionArn: [],
      DeviceDefinitionVersionArn: [],
      FunctionDefinitionVersionArn: [],
      LoggerDefinitionVersionArn: [],
      ResourceDefinitionVersionArn: [],
      SubscriptionDefinitionVersionArn: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateLoggerDefinitionCommand
 */
export const se_CreateLoggerDefinitionCommand = async (
  input: CreateLoggerDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_xact]: input[_ACT]!,
  });
  b.bp("/greengrass/definition/loggers");
  let body: any;
  body = JSON.stringify(
    take(input, {
      InitialVersion: (_) => _json(_),
      Name: [],
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateLoggerDefinitionVersionCommand
 */
export const se_CreateLoggerDefinitionVersionCommand = async (
  input: CreateLoggerDefinitionVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_xact]: input[_ACT]!,
  });
  b.bp("/greengrass/definition/loggers/{LoggerDefinitionId}/versions");
  b.p("LoggerDefinitionId", () => input.LoggerDefinitionId!, "{LoggerDefinitionId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Loggers: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateResourceDefinitionCommand
 */
export const se_CreateResourceDefinitionCommand = async (
  input: CreateResourceDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_xact]: input[_ACT]!,
  });
  b.bp("/greengrass/definition/resources");
  let body: any;
  body = JSON.stringify(
    take(input, {
      InitialVersion: (_) => _json(_),
      Name: [],
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateResourceDefinitionVersionCommand
 */
export const se_CreateResourceDefinitionVersionCommand = async (
  input: CreateResourceDefinitionVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_xact]: input[_ACT]!,
  });
  b.bp("/greengrass/definition/resources/{ResourceDefinitionId}/versions");
  b.p("ResourceDefinitionId", () => input.ResourceDefinitionId!, "{ResourceDefinitionId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Resources: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateSoftwareUpdateJobCommand
 */
export const se_CreateSoftwareUpdateJobCommand = async (
  input: CreateSoftwareUpdateJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_xact]: input[_ACT]!,
  });
  b.bp("/greengrass/updates");
  let body: any;
  body = JSON.stringify(
    take(input, {
      S3UrlSignerRole: [],
      SoftwareToUpdate: [],
      UpdateAgentLogLevel: [],
      UpdateTargets: (_) => _json(_),
      UpdateTargetsArchitecture: [],
      UpdateTargetsOperatingSystem: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateSubscriptionDefinitionCommand
 */
export const se_CreateSubscriptionDefinitionCommand = async (
  input: CreateSubscriptionDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_xact]: input[_ACT]!,
  });
  b.bp("/greengrass/definition/subscriptions");
  let body: any;
  body = JSON.stringify(
    take(input, {
      InitialVersion: (_) => _json(_),
      Name: [],
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateSubscriptionDefinitionVersionCommand
 */
export const se_CreateSubscriptionDefinitionVersionCommand = async (
  input: CreateSubscriptionDefinitionVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_xact]: input[_ACT]!,
  });
  b.bp("/greengrass/definition/subscriptions/{SubscriptionDefinitionId}/versions");
  b.p("SubscriptionDefinitionId", () => input.SubscriptionDefinitionId!, "{SubscriptionDefinitionId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Subscriptions: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteConnectorDefinitionCommand
 */
export const se_DeleteConnectorDefinitionCommand = async (
  input: DeleteConnectorDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/greengrass/definition/connectors/{ConnectorDefinitionId}");
  b.p("ConnectorDefinitionId", () => input.ConnectorDefinitionId!, "{ConnectorDefinitionId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteCoreDefinitionCommand
 */
export const se_DeleteCoreDefinitionCommand = async (
  input: DeleteCoreDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/greengrass/definition/cores/{CoreDefinitionId}");
  b.p("CoreDefinitionId", () => input.CoreDefinitionId!, "{CoreDefinitionId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteDeviceDefinitionCommand
 */
export const se_DeleteDeviceDefinitionCommand = async (
  input: DeleteDeviceDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/greengrass/definition/devices/{DeviceDefinitionId}");
  b.p("DeviceDefinitionId", () => input.DeviceDefinitionId!, "{DeviceDefinitionId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteFunctionDefinitionCommand
 */
export const se_DeleteFunctionDefinitionCommand = async (
  input: DeleteFunctionDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/greengrass/definition/functions/{FunctionDefinitionId}");
  b.p("FunctionDefinitionId", () => input.FunctionDefinitionId!, "{FunctionDefinitionId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteGroupCommand
 */
export const se_DeleteGroupCommand = async (
  input: DeleteGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/greengrass/groups/{GroupId}");
  b.p("GroupId", () => input.GroupId!, "{GroupId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteLoggerDefinitionCommand
 */
export const se_DeleteLoggerDefinitionCommand = async (
  input: DeleteLoggerDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/greengrass/definition/loggers/{LoggerDefinitionId}");
  b.p("LoggerDefinitionId", () => input.LoggerDefinitionId!, "{LoggerDefinitionId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteResourceDefinitionCommand
 */
export const se_DeleteResourceDefinitionCommand = async (
  input: DeleteResourceDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/greengrass/definition/resources/{ResourceDefinitionId}");
  b.p("ResourceDefinitionId", () => input.ResourceDefinitionId!, "{ResourceDefinitionId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteSubscriptionDefinitionCommand
 */
export const se_DeleteSubscriptionDefinitionCommand = async (
  input: DeleteSubscriptionDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/greengrass/definition/subscriptions/{SubscriptionDefinitionId}");
  b.p("SubscriptionDefinitionId", () => input.SubscriptionDefinitionId!, "{SubscriptionDefinitionId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DisassociateRoleFromGroupCommand
 */
export const se_DisassociateRoleFromGroupCommand = async (
  input: DisassociateRoleFromGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/greengrass/groups/{GroupId}/role");
  b.p("GroupId", () => input.GroupId!, "{GroupId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DisassociateServiceRoleFromAccountCommand
 */
export const se_DisassociateServiceRoleFromAccountCommand = async (
  input: DisassociateServiceRoleFromAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/greengrass/servicerole");
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetAssociatedRoleCommand
 */
export const se_GetAssociatedRoleCommand = async (
  input: GetAssociatedRoleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/greengrass/groups/{GroupId}/role");
  b.p("GroupId", () => input.GroupId!, "{GroupId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetBulkDeploymentStatusCommand
 */
export const se_GetBulkDeploymentStatusCommand = async (
  input: GetBulkDeploymentStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/greengrass/bulk/deployments/{BulkDeploymentId}/status");
  b.p("BulkDeploymentId", () => input.BulkDeploymentId!, "{BulkDeploymentId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetConnectivityInfoCommand
 */
export const se_GetConnectivityInfoCommand = async (
  input: GetConnectivityInfoCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/greengrass/things/{ThingName}/connectivityInfo");
  b.p("ThingName", () => input.ThingName!, "{ThingName}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetConnectorDefinitionCommand
 */
export const se_GetConnectorDefinitionCommand = async (
  input: GetConnectorDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/greengrass/definition/connectors/{ConnectorDefinitionId}");
  b.p("ConnectorDefinitionId", () => input.ConnectorDefinitionId!, "{ConnectorDefinitionId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetConnectorDefinitionVersionCommand
 */
export const se_GetConnectorDefinitionVersionCommand = async (
  input: GetConnectorDefinitionVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/greengrass/definition/connectors/{ConnectorDefinitionId}/versions/{ConnectorDefinitionVersionId}");
  b.p("ConnectorDefinitionId", () => input.ConnectorDefinitionId!, "{ConnectorDefinitionId}", false);
  b.p(
    "ConnectorDefinitionVersionId",
    () => input.ConnectorDefinitionVersionId!,
    "{ConnectorDefinitionVersionId}",
    false
  );
  const query: any = map({
    [_NT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetCoreDefinitionCommand
 */
export const se_GetCoreDefinitionCommand = async (
  input: GetCoreDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/greengrass/definition/cores/{CoreDefinitionId}");
  b.p("CoreDefinitionId", () => input.CoreDefinitionId!, "{CoreDefinitionId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetCoreDefinitionVersionCommand
 */
export const se_GetCoreDefinitionVersionCommand = async (
  input: GetCoreDefinitionVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/greengrass/definition/cores/{CoreDefinitionId}/versions/{CoreDefinitionVersionId}");
  b.p("CoreDefinitionId", () => input.CoreDefinitionId!, "{CoreDefinitionId}", false);
  b.p("CoreDefinitionVersionId", () => input.CoreDefinitionVersionId!, "{CoreDefinitionVersionId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetDeploymentStatusCommand
 */
export const se_GetDeploymentStatusCommand = async (
  input: GetDeploymentStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/greengrass/groups/{GroupId}/deployments/{DeploymentId}/status");
  b.p("DeploymentId", () => input.DeploymentId!, "{DeploymentId}", false);
  b.p("GroupId", () => input.GroupId!, "{GroupId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetDeviceDefinitionCommand
 */
export const se_GetDeviceDefinitionCommand = async (
  input: GetDeviceDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/greengrass/definition/devices/{DeviceDefinitionId}");
  b.p("DeviceDefinitionId", () => input.DeviceDefinitionId!, "{DeviceDefinitionId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetDeviceDefinitionVersionCommand
 */
export const se_GetDeviceDefinitionVersionCommand = async (
  input: GetDeviceDefinitionVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/greengrass/definition/devices/{DeviceDefinitionId}/versions/{DeviceDefinitionVersionId}");
  b.p("DeviceDefinitionId", () => input.DeviceDefinitionId!, "{DeviceDefinitionId}", false);
  b.p("DeviceDefinitionVersionId", () => input.DeviceDefinitionVersionId!, "{DeviceDefinitionVersionId}", false);
  const query: any = map({
    [_NT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetFunctionDefinitionCommand
 */
export const se_GetFunctionDefinitionCommand = async (
  input: GetFunctionDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/greengrass/definition/functions/{FunctionDefinitionId}");
  b.p("FunctionDefinitionId", () => input.FunctionDefinitionId!, "{FunctionDefinitionId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetFunctionDefinitionVersionCommand
 */
export const se_GetFunctionDefinitionVersionCommand = async (
  input: GetFunctionDefinitionVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/greengrass/definition/functions/{FunctionDefinitionId}/versions/{FunctionDefinitionVersionId}");
  b.p("FunctionDefinitionId", () => input.FunctionDefinitionId!, "{FunctionDefinitionId}", false);
  b.p("FunctionDefinitionVersionId", () => input.FunctionDefinitionVersionId!, "{FunctionDefinitionVersionId}", false);
  const query: any = map({
    [_NT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetGroupCommand
 */
export const se_GetGroupCommand = async (
  input: GetGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/greengrass/groups/{GroupId}");
  b.p("GroupId", () => input.GroupId!, "{GroupId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetGroupCertificateAuthorityCommand
 */
export const se_GetGroupCertificateAuthorityCommand = async (
  input: GetGroupCertificateAuthorityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/greengrass/groups/{GroupId}/certificateauthorities/{CertificateAuthorityId}");
  b.p("CertificateAuthorityId", () => input.CertificateAuthorityId!, "{CertificateAuthorityId}", false);
  b.p("GroupId", () => input.GroupId!, "{GroupId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetGroupCertificateConfigurationCommand
 */
export const se_GetGroupCertificateConfigurationCommand = async (
  input: GetGroupCertificateConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/greengrass/groups/{GroupId}/certificateauthorities/configuration/expiry");
  b.p("GroupId", () => input.GroupId!, "{GroupId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetGroupVersionCommand
 */
export const se_GetGroupVersionCommand = async (
  input: GetGroupVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/greengrass/groups/{GroupId}/versions/{GroupVersionId}");
  b.p("GroupId", () => input.GroupId!, "{GroupId}", false);
  b.p("GroupVersionId", () => input.GroupVersionId!, "{GroupVersionId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetLoggerDefinitionCommand
 */
export const se_GetLoggerDefinitionCommand = async (
  input: GetLoggerDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/greengrass/definition/loggers/{LoggerDefinitionId}");
  b.p("LoggerDefinitionId", () => input.LoggerDefinitionId!, "{LoggerDefinitionId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetLoggerDefinitionVersionCommand
 */
export const se_GetLoggerDefinitionVersionCommand = async (
  input: GetLoggerDefinitionVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/greengrass/definition/loggers/{LoggerDefinitionId}/versions/{LoggerDefinitionVersionId}");
  b.p("LoggerDefinitionId", () => input.LoggerDefinitionId!, "{LoggerDefinitionId}", false);
  b.p("LoggerDefinitionVersionId", () => input.LoggerDefinitionVersionId!, "{LoggerDefinitionVersionId}", false);
  const query: any = map({
    [_NT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetResourceDefinitionCommand
 */
export const se_GetResourceDefinitionCommand = async (
  input: GetResourceDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/greengrass/definition/resources/{ResourceDefinitionId}");
  b.p("ResourceDefinitionId", () => input.ResourceDefinitionId!, "{ResourceDefinitionId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetResourceDefinitionVersionCommand
 */
export const se_GetResourceDefinitionVersionCommand = async (
  input: GetResourceDefinitionVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/greengrass/definition/resources/{ResourceDefinitionId}/versions/{ResourceDefinitionVersionId}");
  b.p("ResourceDefinitionId", () => input.ResourceDefinitionId!, "{ResourceDefinitionId}", false);
  b.p("ResourceDefinitionVersionId", () => input.ResourceDefinitionVersionId!, "{ResourceDefinitionVersionId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetServiceRoleForAccountCommand
 */
export const se_GetServiceRoleForAccountCommand = async (
  input: GetServiceRoleForAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/greengrass/servicerole");
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetSubscriptionDefinitionCommand
 */
export const se_GetSubscriptionDefinitionCommand = async (
  input: GetSubscriptionDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/greengrass/definition/subscriptions/{SubscriptionDefinitionId}");
  b.p("SubscriptionDefinitionId", () => input.SubscriptionDefinitionId!, "{SubscriptionDefinitionId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetSubscriptionDefinitionVersionCommand
 */
export const se_GetSubscriptionDefinitionVersionCommand = async (
  input: GetSubscriptionDefinitionVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/greengrass/definition/subscriptions/{SubscriptionDefinitionId}/versions/{SubscriptionDefinitionVersionId}");
  b.p("SubscriptionDefinitionId", () => input.SubscriptionDefinitionId!, "{SubscriptionDefinitionId}", false);
  b.p(
    "SubscriptionDefinitionVersionId",
    () => input.SubscriptionDefinitionVersionId!,
    "{SubscriptionDefinitionVersionId}",
    false
  );
  const query: any = map({
    [_NT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetThingRuntimeConfigurationCommand
 */
export const se_GetThingRuntimeConfigurationCommand = async (
  input: GetThingRuntimeConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/greengrass/things/{ThingName}/runtimeconfig");
  b.p("ThingName", () => input.ThingName!, "{ThingName}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListBulkDeploymentDetailedReportsCommand
 */
export const se_ListBulkDeploymentDetailedReportsCommand = async (
  input: ListBulkDeploymentDetailedReportsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/greengrass/bulk/deployments/{BulkDeploymentId}/detailed-reports");
  b.p("BulkDeploymentId", () => input.BulkDeploymentId!, "{BulkDeploymentId}", false);
  const query: any = map({
    [_MR]: [, input[_MR]!],
    [_NT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListBulkDeploymentsCommand
 */
export const se_ListBulkDeploymentsCommand = async (
  input: ListBulkDeploymentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/greengrass/bulk/deployments");
  const query: any = map({
    [_MR]: [, input[_MR]!],
    [_NT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListConnectorDefinitionsCommand
 */
export const se_ListConnectorDefinitionsCommand = async (
  input: ListConnectorDefinitionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/greengrass/definition/connectors");
  const query: any = map({
    [_MR]: [, input[_MR]!],
    [_NT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListConnectorDefinitionVersionsCommand
 */
export const se_ListConnectorDefinitionVersionsCommand = async (
  input: ListConnectorDefinitionVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/greengrass/definition/connectors/{ConnectorDefinitionId}/versions");
  b.p("ConnectorDefinitionId", () => input.ConnectorDefinitionId!, "{ConnectorDefinitionId}", false);
  const query: any = map({
    [_MR]: [, input[_MR]!],
    [_NT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListCoreDefinitionsCommand
 */
export const se_ListCoreDefinitionsCommand = async (
  input: ListCoreDefinitionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/greengrass/definition/cores");
  const query: any = map({
    [_MR]: [, input[_MR]!],
    [_NT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListCoreDefinitionVersionsCommand
 */
export const se_ListCoreDefinitionVersionsCommand = async (
  input: ListCoreDefinitionVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/greengrass/definition/cores/{CoreDefinitionId}/versions");
  b.p("CoreDefinitionId", () => input.CoreDefinitionId!, "{CoreDefinitionId}", false);
  const query: any = map({
    [_MR]: [, input[_MR]!],
    [_NT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListDeploymentsCommand
 */
export const se_ListDeploymentsCommand = async (
  input: ListDeploymentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/greengrass/groups/{GroupId}/deployments");
  b.p("GroupId", () => input.GroupId!, "{GroupId}", false);
  const query: any = map({
    [_MR]: [, input[_MR]!],
    [_NT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListDeviceDefinitionsCommand
 */
export const se_ListDeviceDefinitionsCommand = async (
  input: ListDeviceDefinitionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/greengrass/definition/devices");
  const query: any = map({
    [_MR]: [, input[_MR]!],
    [_NT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListDeviceDefinitionVersionsCommand
 */
export const se_ListDeviceDefinitionVersionsCommand = async (
  input: ListDeviceDefinitionVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/greengrass/definition/devices/{DeviceDefinitionId}/versions");
  b.p("DeviceDefinitionId", () => input.DeviceDefinitionId!, "{DeviceDefinitionId}", false);
  const query: any = map({
    [_MR]: [, input[_MR]!],
    [_NT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListFunctionDefinitionsCommand
 */
export const se_ListFunctionDefinitionsCommand = async (
  input: ListFunctionDefinitionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/greengrass/definition/functions");
  const query: any = map({
    [_MR]: [, input[_MR]!],
    [_NT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListFunctionDefinitionVersionsCommand
 */
export const se_ListFunctionDefinitionVersionsCommand = async (
  input: ListFunctionDefinitionVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/greengrass/definition/functions/{FunctionDefinitionId}/versions");
  b.p("FunctionDefinitionId", () => input.FunctionDefinitionId!, "{FunctionDefinitionId}", false);
  const query: any = map({
    [_MR]: [, input[_MR]!],
    [_NT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListGroupCertificateAuthoritiesCommand
 */
export const se_ListGroupCertificateAuthoritiesCommand = async (
  input: ListGroupCertificateAuthoritiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/greengrass/groups/{GroupId}/certificateauthorities");
  b.p("GroupId", () => input.GroupId!, "{GroupId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListGroupsCommand
 */
export const se_ListGroupsCommand = async (
  input: ListGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/greengrass/groups");
  const query: any = map({
    [_MR]: [, input[_MR]!],
    [_NT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListGroupVersionsCommand
 */
export const se_ListGroupVersionsCommand = async (
  input: ListGroupVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/greengrass/groups/{GroupId}/versions");
  b.p("GroupId", () => input.GroupId!, "{GroupId}", false);
  const query: any = map({
    [_MR]: [, input[_MR]!],
    [_NT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListLoggerDefinitionsCommand
 */
export const se_ListLoggerDefinitionsCommand = async (
  input: ListLoggerDefinitionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/greengrass/definition/loggers");
  const query: any = map({
    [_MR]: [, input[_MR]!],
    [_NT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListLoggerDefinitionVersionsCommand
 */
export const se_ListLoggerDefinitionVersionsCommand = async (
  input: ListLoggerDefinitionVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/greengrass/definition/loggers/{LoggerDefinitionId}/versions");
  b.p("LoggerDefinitionId", () => input.LoggerDefinitionId!, "{LoggerDefinitionId}", false);
  const query: any = map({
    [_MR]: [, input[_MR]!],
    [_NT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListResourceDefinitionsCommand
 */
export const se_ListResourceDefinitionsCommand = async (
  input: ListResourceDefinitionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/greengrass/definition/resources");
  const query: any = map({
    [_MR]: [, input[_MR]!],
    [_NT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListResourceDefinitionVersionsCommand
 */
export const se_ListResourceDefinitionVersionsCommand = async (
  input: ListResourceDefinitionVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/greengrass/definition/resources/{ResourceDefinitionId}/versions");
  b.p("ResourceDefinitionId", () => input.ResourceDefinitionId!, "{ResourceDefinitionId}", false);
  const query: any = map({
    [_MR]: [, input[_MR]!],
    [_NT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListSubscriptionDefinitionsCommand
 */
export const se_ListSubscriptionDefinitionsCommand = async (
  input: ListSubscriptionDefinitionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/greengrass/definition/subscriptions");
  const query: any = map({
    [_MR]: [, input[_MR]!],
    [_NT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListSubscriptionDefinitionVersionsCommand
 */
export const se_ListSubscriptionDefinitionVersionsCommand = async (
  input: ListSubscriptionDefinitionVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/greengrass/definition/subscriptions/{SubscriptionDefinitionId}/versions");
  b.p("SubscriptionDefinitionId", () => input.SubscriptionDefinitionId!, "{SubscriptionDefinitionId}", false);
  const query: any = map({
    [_MR]: [, input[_MR]!],
    [_NT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/tags/{ResourceArn}");
  b.p("ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ResetDeploymentsCommand
 */
export const se_ResetDeploymentsCommand = async (
  input: ResetDeploymentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_xact]: input[_ACT]!,
  });
  b.bp("/greengrass/groups/{GroupId}/deployments/$reset");
  b.p("GroupId", () => input.GroupId!, "{GroupId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Force: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartBulkDeploymentCommand
 */
export const se_StartBulkDeploymentCommand = async (
  input: StartBulkDeploymentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_xact]: input[_ACT]!,
  });
  b.bp("/greengrass/bulk/deployments");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ExecutionRoleArn: [],
      InputFileUri: [],
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StopBulkDeploymentCommand
 */
export const se_StopBulkDeploymentCommand = async (
  input: StopBulkDeploymentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/greengrass/bulk/deployments/{BulkDeploymentId}/$stop");
  b.p("BulkDeploymentId", () => input.BulkDeploymentId!, "{BulkDeploymentId}", false);
  let body: any;
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/tags/{ResourceArn}");
  b.p("ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/tags/{ResourceArn}");
  b.p("ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
  const query: any = map({
    [_tK]: [__expectNonNull(input.TagKeys, `TagKeys`) != null, () => input[_TK]! || []],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateConnectivityInfoCommand
 */
export const se_UpdateConnectivityInfoCommand = async (
  input: UpdateConnectivityInfoCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/greengrass/things/{ThingName}/connectivityInfo");
  b.p("ThingName", () => input.ThingName!, "{ThingName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      ConnectivityInfo: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateConnectorDefinitionCommand
 */
export const se_UpdateConnectorDefinitionCommand = async (
  input: UpdateConnectorDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/greengrass/definition/connectors/{ConnectorDefinitionId}");
  b.p("ConnectorDefinitionId", () => input.ConnectorDefinitionId!, "{ConnectorDefinitionId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Name: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateCoreDefinitionCommand
 */
export const se_UpdateCoreDefinitionCommand = async (
  input: UpdateCoreDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/greengrass/definition/cores/{CoreDefinitionId}");
  b.p("CoreDefinitionId", () => input.CoreDefinitionId!, "{CoreDefinitionId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Name: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateDeviceDefinitionCommand
 */
export const se_UpdateDeviceDefinitionCommand = async (
  input: UpdateDeviceDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/greengrass/definition/devices/{DeviceDefinitionId}");
  b.p("DeviceDefinitionId", () => input.DeviceDefinitionId!, "{DeviceDefinitionId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Name: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateFunctionDefinitionCommand
 */
export const se_UpdateFunctionDefinitionCommand = async (
  input: UpdateFunctionDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/greengrass/definition/functions/{FunctionDefinitionId}");
  b.p("FunctionDefinitionId", () => input.FunctionDefinitionId!, "{FunctionDefinitionId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Name: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateGroupCommand
 */
export const se_UpdateGroupCommand = async (
  input: UpdateGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/greengrass/groups/{GroupId}");
  b.p("GroupId", () => input.GroupId!, "{GroupId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Name: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateGroupCertificateConfigurationCommand
 */
export const se_UpdateGroupCertificateConfigurationCommand = async (
  input: UpdateGroupCertificateConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/greengrass/groups/{GroupId}/certificateauthorities/configuration/expiry");
  b.p("GroupId", () => input.GroupId!, "{GroupId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      CertificateExpiryInMilliseconds: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateLoggerDefinitionCommand
 */
export const se_UpdateLoggerDefinitionCommand = async (
  input: UpdateLoggerDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/greengrass/definition/loggers/{LoggerDefinitionId}");
  b.p("LoggerDefinitionId", () => input.LoggerDefinitionId!, "{LoggerDefinitionId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Name: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateResourceDefinitionCommand
 */
export const se_UpdateResourceDefinitionCommand = async (
  input: UpdateResourceDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/greengrass/definition/resources/{ResourceDefinitionId}");
  b.p("ResourceDefinitionId", () => input.ResourceDefinitionId!, "{ResourceDefinitionId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Name: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateSubscriptionDefinitionCommand
 */
export const se_UpdateSubscriptionDefinitionCommand = async (
  input: UpdateSubscriptionDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/greengrass/definition/subscriptions/{SubscriptionDefinitionId}");
  b.p("SubscriptionDefinitionId", () => input.SubscriptionDefinitionId!, "{SubscriptionDefinitionId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Name: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateThingRuntimeConfigurationCommand
 */
export const se_UpdateThingRuntimeConfigurationCommand = async (
  input: UpdateThingRuntimeConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/greengrass/things/{ThingName}/runtimeconfig");
  b.p("ThingName", () => input.ThingName!, "{ThingName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      TelemetryConfiguration: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1AssociateRoleToGroupCommand
 */
export const de_AssociateRoleToGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateRoleToGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AssociatedAt: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1AssociateServiceRoleToAccountCommand
 */
export const de_AssociateServiceRoleToAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateServiceRoleToAccountCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AssociatedAt: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateConnectorDefinitionCommand
 */
export const de_CreateConnectorDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConnectorDefinitionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    CreationTimestamp: __expectString,
    Id: __expectString,
    LastUpdatedTimestamp: __expectString,
    LatestVersion: __expectString,
    LatestVersionArn: __expectString,
    Name: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateConnectorDefinitionVersionCommand
 */
export const de_CreateConnectorDefinitionVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConnectorDefinitionVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    CreationTimestamp: __expectString,
    Id: __expectString,
    Version: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateCoreDefinitionCommand
 */
export const de_CreateCoreDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCoreDefinitionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    CreationTimestamp: __expectString,
    Id: __expectString,
    LastUpdatedTimestamp: __expectString,
    LatestVersion: __expectString,
    LatestVersionArn: __expectString,
    Name: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateCoreDefinitionVersionCommand
 */
export const de_CreateCoreDefinitionVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCoreDefinitionVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    CreationTimestamp: __expectString,
    Id: __expectString,
    Version: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateDeploymentCommand
 */
export const de_CreateDeploymentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDeploymentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DeploymentArn: __expectString,
    DeploymentId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateDeviceDefinitionCommand
 */
export const de_CreateDeviceDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDeviceDefinitionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    CreationTimestamp: __expectString,
    Id: __expectString,
    LastUpdatedTimestamp: __expectString,
    LatestVersion: __expectString,
    LatestVersionArn: __expectString,
    Name: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateDeviceDefinitionVersionCommand
 */
export const de_CreateDeviceDefinitionVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDeviceDefinitionVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    CreationTimestamp: __expectString,
    Id: __expectString,
    Version: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateFunctionDefinitionCommand
 */
export const de_CreateFunctionDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFunctionDefinitionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    CreationTimestamp: __expectString,
    Id: __expectString,
    LastUpdatedTimestamp: __expectString,
    LatestVersion: __expectString,
    LatestVersionArn: __expectString,
    Name: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateFunctionDefinitionVersionCommand
 */
export const de_CreateFunctionDefinitionVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFunctionDefinitionVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    CreationTimestamp: __expectString,
    Id: __expectString,
    Version: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateGroupCommand
 */
export const de_CreateGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    CreationTimestamp: __expectString,
    Id: __expectString,
    LastUpdatedTimestamp: __expectString,
    LatestVersion: __expectString,
    LatestVersionArn: __expectString,
    Name: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateGroupCertificateAuthorityCommand
 */
export const de_CreateGroupCertificateAuthorityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGroupCertificateAuthorityCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    GroupCertificateAuthorityArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateGroupVersionCommand
 */
export const de_CreateGroupVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGroupVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    CreationTimestamp: __expectString,
    Id: __expectString,
    Version: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateLoggerDefinitionCommand
 */
export const de_CreateLoggerDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLoggerDefinitionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    CreationTimestamp: __expectString,
    Id: __expectString,
    LastUpdatedTimestamp: __expectString,
    LatestVersion: __expectString,
    LatestVersionArn: __expectString,
    Name: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateLoggerDefinitionVersionCommand
 */
export const de_CreateLoggerDefinitionVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLoggerDefinitionVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    CreationTimestamp: __expectString,
    Id: __expectString,
    Version: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateResourceDefinitionCommand
 */
export const de_CreateResourceDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateResourceDefinitionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    CreationTimestamp: __expectString,
    Id: __expectString,
    LastUpdatedTimestamp: __expectString,
    LatestVersion: __expectString,
    LatestVersionArn: __expectString,
    Name: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateResourceDefinitionVersionCommand
 */
export const de_CreateResourceDefinitionVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateResourceDefinitionVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    CreationTimestamp: __expectString,
    Id: __expectString,
    Version: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateSoftwareUpdateJobCommand
 */
export const de_CreateSoftwareUpdateJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSoftwareUpdateJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    IotJobArn: __expectString,
    IotJobId: __expectString,
    PlatformSoftwareVersion: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateSubscriptionDefinitionCommand
 */
export const de_CreateSubscriptionDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSubscriptionDefinitionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    CreationTimestamp: __expectString,
    Id: __expectString,
    LastUpdatedTimestamp: __expectString,
    LatestVersion: __expectString,
    LatestVersionArn: __expectString,
    Name: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateSubscriptionDefinitionVersionCommand
 */
export const de_CreateSubscriptionDefinitionVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSubscriptionDefinitionVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    CreationTimestamp: __expectString,
    Id: __expectString,
    Version: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteConnectorDefinitionCommand
 */
export const de_DeleteConnectorDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConnectorDefinitionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteCoreDefinitionCommand
 */
export const de_DeleteCoreDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCoreDefinitionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteDeviceDefinitionCommand
 */
export const de_DeleteDeviceDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDeviceDefinitionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteFunctionDefinitionCommand
 */
export const de_DeleteFunctionDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFunctionDefinitionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteGroupCommand
 */
export const de_DeleteGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteLoggerDefinitionCommand
 */
export const de_DeleteLoggerDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLoggerDefinitionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteResourceDefinitionCommand
 */
export const de_DeleteResourceDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResourceDefinitionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteSubscriptionDefinitionCommand
 */
export const de_DeleteSubscriptionDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSubscriptionDefinitionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DisassociateRoleFromGroupCommand
 */
export const de_DisassociateRoleFromGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateRoleFromGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DisassociatedAt: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DisassociateServiceRoleFromAccountCommand
 */
export const de_DisassociateServiceRoleFromAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateServiceRoleFromAccountCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DisassociatedAt: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetAssociatedRoleCommand
 */
export const de_GetAssociatedRoleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAssociatedRoleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AssociatedAt: __expectString,
    RoleArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetBulkDeploymentStatusCommand
 */
export const de_GetBulkDeploymentStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBulkDeploymentStatusCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    BulkDeploymentMetrics: _json,
    BulkDeploymentStatus: __expectString,
    CreatedAt: __expectString,
    ErrorDetails: _json,
    ErrorMessage: __expectString,
    tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetConnectivityInfoCommand
 */
export const de_GetConnectivityInfoCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConnectivityInfoCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ConnectivityInfo: _json,
    Message: [, __expectString, `message`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetConnectorDefinitionCommand
 */
export const de_GetConnectorDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConnectorDefinitionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    CreationTimestamp: __expectString,
    Id: __expectString,
    LastUpdatedTimestamp: __expectString,
    LatestVersion: __expectString,
    LatestVersionArn: __expectString,
    Name: __expectString,
    tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetConnectorDefinitionVersionCommand
 */
export const de_GetConnectorDefinitionVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConnectorDefinitionVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    CreationTimestamp: __expectString,
    Definition: _json,
    Id: __expectString,
    NextToken: __expectString,
    Version: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetCoreDefinitionCommand
 */
export const de_GetCoreDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCoreDefinitionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    CreationTimestamp: __expectString,
    Id: __expectString,
    LastUpdatedTimestamp: __expectString,
    LatestVersion: __expectString,
    LatestVersionArn: __expectString,
    Name: __expectString,
    tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetCoreDefinitionVersionCommand
 */
export const de_GetCoreDefinitionVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCoreDefinitionVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    CreationTimestamp: __expectString,
    Definition: _json,
    Id: __expectString,
    NextToken: __expectString,
    Version: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetDeploymentStatusCommand
 */
export const de_GetDeploymentStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeploymentStatusCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DeploymentStatus: __expectString,
    DeploymentType: __expectString,
    ErrorDetails: _json,
    ErrorMessage: __expectString,
    UpdatedAt: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetDeviceDefinitionCommand
 */
export const de_GetDeviceDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeviceDefinitionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    CreationTimestamp: __expectString,
    Id: __expectString,
    LastUpdatedTimestamp: __expectString,
    LatestVersion: __expectString,
    LatestVersionArn: __expectString,
    Name: __expectString,
    tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetDeviceDefinitionVersionCommand
 */
export const de_GetDeviceDefinitionVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeviceDefinitionVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    CreationTimestamp: __expectString,
    Definition: _json,
    Id: __expectString,
    NextToken: __expectString,
    Version: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetFunctionDefinitionCommand
 */
export const de_GetFunctionDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFunctionDefinitionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    CreationTimestamp: __expectString,
    Id: __expectString,
    LastUpdatedTimestamp: __expectString,
    LatestVersion: __expectString,
    LatestVersionArn: __expectString,
    Name: __expectString,
    tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetFunctionDefinitionVersionCommand
 */
export const de_GetFunctionDefinitionVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFunctionDefinitionVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    CreationTimestamp: __expectString,
    Definition: _json,
    Id: __expectString,
    NextToken: __expectString,
    Version: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetGroupCommand
 */
export const de_GetGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    CreationTimestamp: __expectString,
    Id: __expectString,
    LastUpdatedTimestamp: __expectString,
    LatestVersion: __expectString,
    LatestVersionArn: __expectString,
    Name: __expectString,
    tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetGroupCertificateAuthorityCommand
 */
export const de_GetGroupCertificateAuthorityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGroupCertificateAuthorityCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    GroupCertificateAuthorityArn: __expectString,
    GroupCertificateAuthorityId: __expectString,
    PemEncodedCertificate: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetGroupCertificateConfigurationCommand
 */
export const de_GetGroupCertificateConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGroupCertificateConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CertificateAuthorityExpiryInMilliseconds: __expectString,
    CertificateExpiryInMilliseconds: __expectString,
    GroupId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetGroupVersionCommand
 */
export const de_GetGroupVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGroupVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    CreationTimestamp: __expectString,
    Definition: _json,
    Id: __expectString,
    Version: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetLoggerDefinitionCommand
 */
export const de_GetLoggerDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLoggerDefinitionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    CreationTimestamp: __expectString,
    Id: __expectString,
    LastUpdatedTimestamp: __expectString,
    LatestVersion: __expectString,
    LatestVersionArn: __expectString,
    Name: __expectString,
    tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetLoggerDefinitionVersionCommand
 */
export const de_GetLoggerDefinitionVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLoggerDefinitionVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    CreationTimestamp: __expectString,
    Definition: _json,
    Id: __expectString,
    Version: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetResourceDefinitionCommand
 */
export const de_GetResourceDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourceDefinitionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    CreationTimestamp: __expectString,
    Id: __expectString,
    LastUpdatedTimestamp: __expectString,
    LatestVersion: __expectString,
    LatestVersionArn: __expectString,
    Name: __expectString,
    tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetResourceDefinitionVersionCommand
 */
export const de_GetResourceDefinitionVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourceDefinitionVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    CreationTimestamp: __expectString,
    Definition: _json,
    Id: __expectString,
    Version: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetServiceRoleForAccountCommand
 */
export const de_GetServiceRoleForAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetServiceRoleForAccountCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AssociatedAt: __expectString,
    RoleArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetSubscriptionDefinitionCommand
 */
export const de_GetSubscriptionDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSubscriptionDefinitionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    CreationTimestamp: __expectString,
    Id: __expectString,
    LastUpdatedTimestamp: __expectString,
    LatestVersion: __expectString,
    LatestVersionArn: __expectString,
    Name: __expectString,
    tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetSubscriptionDefinitionVersionCommand
 */
export const de_GetSubscriptionDefinitionVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSubscriptionDefinitionVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    CreationTimestamp: __expectString,
    Definition: _json,
    Id: __expectString,
    NextToken: __expectString,
    Version: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetThingRuntimeConfigurationCommand
 */
export const de_GetThingRuntimeConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetThingRuntimeConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    RuntimeConfiguration: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListBulkDeploymentDetailedReportsCommand
 */
export const de_ListBulkDeploymentDetailedReportsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBulkDeploymentDetailedReportsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Deployments: _json,
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListBulkDeploymentsCommand
 */
export const de_ListBulkDeploymentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBulkDeploymentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    BulkDeployments: _json,
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListConnectorDefinitionsCommand
 */
export const de_ListConnectorDefinitionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConnectorDefinitionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Definitions: (_) => de___listOfDefinitionInformation(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListConnectorDefinitionVersionsCommand
 */
export const de_ListConnectorDefinitionVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConnectorDefinitionVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    Versions: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListCoreDefinitionsCommand
 */
export const de_ListCoreDefinitionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCoreDefinitionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Definitions: (_) => de___listOfDefinitionInformation(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListCoreDefinitionVersionsCommand
 */
export const de_ListCoreDefinitionVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCoreDefinitionVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    Versions: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListDeploymentsCommand
 */
export const de_ListDeploymentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDeploymentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Deployments: _json,
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListDeviceDefinitionsCommand
 */
export const de_ListDeviceDefinitionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDeviceDefinitionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Definitions: (_) => de___listOfDefinitionInformation(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListDeviceDefinitionVersionsCommand
 */
export const de_ListDeviceDefinitionVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDeviceDefinitionVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    Versions: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListFunctionDefinitionsCommand
 */
export const de_ListFunctionDefinitionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFunctionDefinitionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Definitions: (_) => de___listOfDefinitionInformation(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListFunctionDefinitionVersionsCommand
 */
export const de_ListFunctionDefinitionVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFunctionDefinitionVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    Versions: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListGroupCertificateAuthoritiesCommand
 */
export const de_ListGroupCertificateAuthoritiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGroupCertificateAuthoritiesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    GroupCertificateAuthorities: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListGroupsCommand
 */
export const de_ListGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGroupsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Groups: _json,
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListGroupVersionsCommand
 */
export const de_ListGroupVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGroupVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    Versions: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListLoggerDefinitionsCommand
 */
export const de_ListLoggerDefinitionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLoggerDefinitionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Definitions: (_) => de___listOfDefinitionInformation(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListLoggerDefinitionVersionsCommand
 */
export const de_ListLoggerDefinitionVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLoggerDefinitionVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    Versions: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListResourceDefinitionsCommand
 */
export const de_ListResourceDefinitionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourceDefinitionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Definitions: (_) => de___listOfDefinitionInformation(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListResourceDefinitionVersionsCommand
 */
export const de_ListResourceDefinitionVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourceDefinitionVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    Versions: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListSubscriptionDefinitionsCommand
 */
export const de_ListSubscriptionDefinitionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSubscriptionDefinitionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Definitions: (_) => de___listOfDefinitionInformation(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListSubscriptionDefinitionVersionsCommand
 */
export const de_ListSubscriptionDefinitionVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSubscriptionDefinitionVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    Versions: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1ResetDeploymentsCommand
 */
export const de_ResetDeploymentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResetDeploymentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DeploymentArn: __expectString,
    DeploymentId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StartBulkDeploymentCommand
 */
export const de_StartBulkDeploymentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartBulkDeploymentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    BulkDeploymentArn: __expectString,
    BulkDeploymentId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StopBulkDeploymentCommand
 */
export const de_StopBulkDeploymentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopBulkDeploymentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateConnectivityInfoCommand
 */
export const de_UpdateConnectivityInfoCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConnectivityInfoCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Message: [, __expectString, `message`],
    Version: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateConnectorDefinitionCommand
 */
export const de_UpdateConnectorDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConnectorDefinitionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateCoreDefinitionCommand
 */
export const de_UpdateCoreDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCoreDefinitionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateDeviceDefinitionCommand
 */
export const de_UpdateDeviceDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDeviceDefinitionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateFunctionDefinitionCommand
 */
export const de_UpdateFunctionDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFunctionDefinitionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateGroupCommand
 */
export const de_UpdateGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateGroupCertificateConfigurationCommand
 */
export const de_UpdateGroupCertificateConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGroupCertificateConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CertificateAuthorityExpiryInMilliseconds: __expectString,
    CertificateExpiryInMilliseconds: __expectString,
    GroupId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateLoggerDefinitionCommand
 */
export const de_UpdateLoggerDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLoggerDefinitionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateResourceDefinitionCommand
 */
export const de_UpdateResourceDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateResourceDefinitionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateSubscriptionDefinitionCommand
 */
export const de_UpdateSubscriptionDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSubscriptionDefinitionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateThingRuntimeConfigurationCommand
 */
export const de_UpdateThingRuntimeConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateThingRuntimeConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserialize_Aws_restJson1CommandError
 */
const de_CommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<never> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.greengrass#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.greengrass#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      }) as never;
  }
};

const throwDefaultError = withBaseException(__BaseException);
/**
 * deserializeAws_restJson1BadRequestExceptionRes
 */
const de_BadRequestExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<BadRequestException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    ErrorDetails: _json,
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new BadRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InternalServerErrorExceptionRes
 */
const de_InternalServerErrorExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerErrorException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    ErrorDetails: _json,
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InternalServerErrorException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// se___listOf__string omitted.

// se___listOfConnectivityInfo omitted.

// se___listOfConnector omitted.

// se___listOfCore omitted.

// se___listOfDevice omitted.

// se___listOfFunction omitted.

// se___listOfLogger omitted.

// se___listOfResource omitted.

// se___listOfResourceAccessPolicy omitted.

// se___listOfSubscription omitted.

// se___mapOf__string omitted.

// se_ConnectivityInfo omitted.

// se_Connector omitted.

// se_ConnectorDefinitionVersion omitted.

// se_Core omitted.

// se_CoreDefinitionVersion omitted.

// se_Device omitted.

// se_DeviceDefinitionVersion omitted.

// se_Function omitted.

// se_FunctionConfiguration omitted.

// se_FunctionConfigurationEnvironment omitted.

// se_FunctionDefaultConfig omitted.

// se_FunctionDefaultExecutionConfig omitted.

// se_FunctionDefinitionVersion omitted.

// se_FunctionExecutionConfig omitted.

// se_FunctionRunAsConfig omitted.

// se_GroupOwnerSetting omitted.

// se_GroupVersion omitted.

// se_LocalDeviceResourceData omitted.

// se_LocalVolumeResourceData omitted.

// se_Logger omitted.

// se_LoggerDefinitionVersion omitted.

// se_Resource omitted.

// se_ResourceAccessPolicy omitted.

// se_ResourceDataContainer omitted.

// se_ResourceDefinitionVersion omitted.

// se_ResourceDownloadOwnerSetting omitted.

// se_S3MachineLearningModelResourceData omitted.

// se_SageMakerMachineLearningModelResourceData omitted.

// se_SecretsManagerSecretResourceData omitted.

// se_Subscription omitted.

// se_SubscriptionDefinitionVersion omitted.

// se_Tags omitted.

// se_TelemetryConfigurationUpdate omitted.

// se_UpdateTargets omitted.

// de___listOf__string omitted.

// de___listOfConnectivityInfo omitted.

// de___listOfConnector omitted.

// de___listOfCore omitted.

/**
 * deserializeAws_restJson1__listOfDefinitionInformation
 */
const de___listOfDefinitionInformation = (output: any, context: __SerdeContext): DefinitionInformation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DefinitionInformation(entry, context);
    });
  return retVal;
};

// de___listOfDevice omitted.

// de___listOfFunction omitted.

// de___listOfGroupCertificateAuthorityProperties omitted.

// de___listOfGroupInformation omitted.

// de___listOfLogger omitted.

// de___listOfResource omitted.

// de___listOfResourceAccessPolicy omitted.

// de___listOfSubscription omitted.

// de___listOfVersionInformation omitted.

// de___mapOf__string omitted.

// de_BulkDeployment omitted.

// de_BulkDeploymentMetrics omitted.

// de_BulkDeploymentResult omitted.

// de_BulkDeploymentResults omitted.

// de_BulkDeployments omitted.

// de_ConnectivityInfo omitted.

// de_Connector omitted.

// de_ConnectorDefinitionVersion omitted.

// de_Core omitted.

// de_CoreDefinitionVersion omitted.

/**
 * deserializeAws_restJson1DefinitionInformation
 */
const de_DefinitionInformation = (output: any, context: __SerdeContext): DefinitionInformation => {
  return take(output, {
    Arn: __expectString,
    CreationTimestamp: __expectString,
    Id: __expectString,
    LastUpdatedTimestamp: __expectString,
    LatestVersion: __expectString,
    LatestVersionArn: __expectString,
    Name: __expectString,
    Tags: [, _json, `tags`],
  }) as any;
};

// de_Deployment omitted.

// de_Deployments omitted.

// de_Device omitted.

// de_DeviceDefinitionVersion omitted.

// de_ErrorDetail omitted.

// de_ErrorDetails omitted.

// de_Function omitted.

// de_FunctionConfiguration omitted.

// de_FunctionConfigurationEnvironment omitted.

// de_FunctionDefaultConfig omitted.

// de_FunctionDefaultExecutionConfig omitted.

// de_FunctionDefinitionVersion omitted.

// de_FunctionExecutionConfig omitted.

// de_FunctionRunAsConfig omitted.

// de_GroupCertificateAuthorityProperties omitted.

// de_GroupInformation omitted.

// de_GroupOwnerSetting omitted.

// de_GroupVersion omitted.

// de_LocalDeviceResourceData omitted.

// de_LocalVolumeResourceData omitted.

// de_Logger omitted.

// de_LoggerDefinitionVersion omitted.

// de_Resource omitted.

// de_ResourceAccessPolicy omitted.

// de_ResourceDataContainer omitted.

// de_ResourceDefinitionVersion omitted.

// de_ResourceDownloadOwnerSetting omitted.

// de_RuntimeConfiguration omitted.

// de_S3MachineLearningModelResourceData omitted.

// de_SageMakerMachineLearningModelResourceData omitted.

// de_SecretsManagerSecretResourceData omitted.

// de_Subscription omitted.

// de_SubscriptionDefinitionVersion omitted.

// de_Tags omitted.

// de_TelemetryConfiguration omitted.

// de_VersionInformation omitted.

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

const _ACT = "AmznClientToken";
const _MR = "MaxResults";
const _NT = "NextToken";
const _TK = "TagKeys";
const _tK = "tagKeys";
const _xact = "x-amzn-client-token";
