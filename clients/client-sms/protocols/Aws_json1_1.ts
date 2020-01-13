import {
  CreateAppCommandInput,
  CreateAppCommandOutput
} from "../commands/CreateAppCommand";
import {
  CreateReplicationJobCommandInput,
  CreateReplicationJobCommandOutput
} from "../commands/CreateReplicationJobCommand";
import {
  DeleteAppCommandInput,
  DeleteAppCommandOutput
} from "../commands/DeleteAppCommand";
import {
  DeleteAppLaunchConfigurationCommandInput,
  DeleteAppLaunchConfigurationCommandOutput
} from "../commands/DeleteAppLaunchConfigurationCommand";
import {
  DeleteAppReplicationConfigurationCommandInput,
  DeleteAppReplicationConfigurationCommandOutput
} from "../commands/DeleteAppReplicationConfigurationCommand";
import {
  DeleteReplicationJobCommandInput,
  DeleteReplicationJobCommandOutput
} from "../commands/DeleteReplicationJobCommand";
import {
  DeleteServerCatalogCommandInput,
  DeleteServerCatalogCommandOutput
} from "../commands/DeleteServerCatalogCommand";
import {
  DisassociateConnectorCommandInput,
  DisassociateConnectorCommandOutput
} from "../commands/DisassociateConnectorCommand";
import {
  GenerateChangeSetCommandInput,
  GenerateChangeSetCommandOutput
} from "../commands/GenerateChangeSetCommand";
import {
  GenerateTemplateCommandInput,
  GenerateTemplateCommandOutput
} from "../commands/GenerateTemplateCommand";
import {
  GetAppCommandInput,
  GetAppCommandOutput
} from "../commands/GetAppCommand";
import {
  GetAppLaunchConfigurationCommandInput,
  GetAppLaunchConfigurationCommandOutput
} from "../commands/GetAppLaunchConfigurationCommand";
import {
  GetAppReplicationConfigurationCommandInput,
  GetAppReplicationConfigurationCommandOutput
} from "../commands/GetAppReplicationConfigurationCommand";
import {
  GetConnectorsCommandInput,
  GetConnectorsCommandOutput
} from "../commands/GetConnectorsCommand";
import {
  GetReplicationJobsCommandInput,
  GetReplicationJobsCommandOutput
} from "../commands/GetReplicationJobsCommand";
import {
  GetReplicationRunsCommandInput,
  GetReplicationRunsCommandOutput
} from "../commands/GetReplicationRunsCommand";
import {
  GetServersCommandInput,
  GetServersCommandOutput
} from "../commands/GetServersCommand";
import {
  ImportServerCatalogCommandInput,
  ImportServerCatalogCommandOutput
} from "../commands/ImportServerCatalogCommand";
import {
  LaunchAppCommandInput,
  LaunchAppCommandOutput
} from "../commands/LaunchAppCommand";
import {
  ListAppsCommandInput,
  ListAppsCommandOutput
} from "../commands/ListAppsCommand";
import {
  PutAppLaunchConfigurationCommandInput,
  PutAppLaunchConfigurationCommandOutput
} from "../commands/PutAppLaunchConfigurationCommand";
import {
  PutAppReplicationConfigurationCommandInput,
  PutAppReplicationConfigurationCommandOutput
} from "../commands/PutAppReplicationConfigurationCommand";
import {
  StartAppReplicationCommandInput,
  StartAppReplicationCommandOutput
} from "../commands/StartAppReplicationCommand";
import {
  StartOnDemandReplicationRunCommandInput,
  StartOnDemandReplicationRunCommandOutput
} from "../commands/StartOnDemandReplicationRunCommand";
import {
  StopAppReplicationCommandInput,
  StopAppReplicationCommandOutput
} from "../commands/StopAppReplicationCommand";
import {
  TerminateAppCommandInput,
  TerminateAppCommandOutput
} from "../commands/TerminateAppCommand";
import {
  UpdateAppCommandInput,
  UpdateAppCommandOutput
} from "../commands/UpdateAppCommand";
import {
  UpdateReplicationJobCommandInput,
  UpdateReplicationJobCommandOutput
} from "../commands/UpdateReplicationJobCommand";
import {
  AppSummary,
  Connector,
  ConnectorCapability,
  CreateAppRequest,
  CreateAppResponse,
  CreateReplicationJobRequest,
  CreateReplicationJobResponse,
  DeleteAppLaunchConfigurationRequest,
  DeleteAppLaunchConfigurationResponse,
  DeleteAppReplicationConfigurationRequest,
  DeleteAppReplicationConfigurationResponse,
  DeleteAppRequest,
  DeleteAppResponse,
  DeleteReplicationJobRequest,
  DeleteReplicationJobResponse,
  DeleteServerCatalogRequest,
  DeleteServerCatalogResponse,
  DisassociateConnectorRequest,
  DisassociateConnectorResponse,
  GenerateChangeSetRequest,
  GenerateChangeSetResponse,
  GenerateTemplateRequest,
  GenerateTemplateResponse,
  GetAppLaunchConfigurationRequest,
  GetAppLaunchConfigurationResponse,
  GetAppReplicationConfigurationRequest,
  GetAppReplicationConfigurationResponse,
  GetAppRequest,
  GetAppResponse,
  GetConnectorsRequest,
  GetConnectorsResponse,
  GetReplicationJobsRequest,
  GetReplicationJobsResponse,
  GetReplicationRunsRequest,
  GetReplicationRunsResponse,
  GetServersRequest,
  GetServersResponse,
  ImportServerCatalogRequest,
  ImportServerCatalogResponse,
  InternalError,
  InvalidParameterException,
  LaunchAppRequest,
  LaunchAppResponse,
  LaunchDetails,
  ListAppsRequest,
  ListAppsResponse,
  MissingRequiredParameterException,
  NoConnectorsAvailableException,
  OperationNotPermittedException,
  PutAppLaunchConfigurationRequest,
  PutAppLaunchConfigurationResponse,
  PutAppReplicationConfigurationRequest,
  PutAppReplicationConfigurationResponse,
  ReplicationJob,
  ReplicationJobAlreadyExistsException,
  ReplicationJobNotFoundException,
  ReplicationRun,
  ReplicationRunLimitExceededException,
  ReplicationRunStageDetails,
  S3Location,
  Server,
  ServerCannotBeReplicatedException,
  ServerGroup,
  ServerGroupLaunchConfiguration,
  ServerGroupReplicationConfiguration,
  ServerLaunchConfiguration,
  ServerReplicationConfiguration,
  ServerReplicationParameters,
  StartAppReplicationRequest,
  StartAppReplicationResponse,
  StartOnDemandReplicationRunRequest,
  StartOnDemandReplicationRunResponse,
  StopAppReplicationRequest,
  StopAppReplicationResponse,
  Tag,
  TemporarilyUnavailableException,
  TerminateAppRequest,
  TerminateAppResponse,
  UnauthorizedOperationException,
  UpdateAppRequest,
  UpdateAppResponse,
  UpdateReplicationJobRequest,
  UpdateReplicationJobResponse,
  UserData,
  VmServer,
  VmServerAddress
} from "../models/index";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export async function serializeAws_json1_1CreateAppCommand(
  input: CreateAppCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSServerMigrationService_V2016_10_24.CreateApp";
  let body: any = {};
  const wrappedBody: any = {
    CreateAppRequest: serializeAws_json1_1CreateAppRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/CreateApp",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1CreateReplicationJobCommand(
  input: CreateReplicationJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AWSServerMigrationService_V2016_10_24.CreateReplicationJob";
  let body: any = {};
  const wrappedBody: any = {
    CreateReplicationJobRequest: serializeAws_json1_1CreateReplicationJobRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/CreateReplicationJob",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DeleteAppCommand(
  input: DeleteAppCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSServerMigrationService_V2016_10_24.DeleteApp";
  let body: any = {};
  const wrappedBody: any = {
    DeleteAppRequest: serializeAws_json1_1DeleteAppRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DeleteApp",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DeleteAppLaunchConfigurationCommand(
  input: DeleteAppLaunchConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AWSServerMigrationService_V2016_10_24.DeleteAppLaunchConfiguration";
  let body: any = {};
  const wrappedBody: any = {
    DeleteAppLaunchConfigurationRequest: serializeAws_json1_1DeleteAppLaunchConfigurationRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DeleteAppLaunchConfiguration",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DeleteAppReplicationConfigurationCommand(
  input: DeleteAppReplicationConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AWSServerMigrationService_V2016_10_24.DeleteAppReplicationConfiguration";
  let body: any = {};
  const wrappedBody: any = {
    DeleteAppReplicationConfigurationRequest: serializeAws_json1_1DeleteAppReplicationConfigurationRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DeleteAppReplicationConfiguration",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DeleteReplicationJobCommand(
  input: DeleteReplicationJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AWSServerMigrationService_V2016_10_24.DeleteReplicationJob";
  let body: any = {};
  const wrappedBody: any = {
    DeleteReplicationJobRequest: serializeAws_json1_1DeleteReplicationJobRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DeleteReplicationJob",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DeleteServerCatalogCommand(
  input: DeleteServerCatalogCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AWSServerMigrationService_V2016_10_24.DeleteServerCatalog";
  let body: any = {};
  const wrappedBody: any = {
    DeleteServerCatalogRequest: serializeAws_json1_1DeleteServerCatalogRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DeleteServerCatalog",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DisassociateConnectorCommand(
  input: DisassociateConnectorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AWSServerMigrationService_V2016_10_24.DisassociateConnector";
  let body: any = {};
  const wrappedBody: any = {
    DisassociateConnectorRequest: serializeAws_json1_1DisassociateConnectorRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DisassociateConnector",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1GenerateChangeSetCommand(
  input: GenerateChangeSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AWSServerMigrationService_V2016_10_24.GenerateChangeSet";
  let body: any = {};
  const wrappedBody: any = {
    GenerateChangeSetRequest: serializeAws_json1_1GenerateChangeSetRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GenerateChangeSet",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1GenerateTemplateCommand(
  input: GenerateTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AWSServerMigrationService_V2016_10_24.GenerateTemplate";
  let body: any = {};
  const wrappedBody: any = {
    GenerateTemplateRequest: serializeAws_json1_1GenerateTemplateRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GenerateTemplate",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1GetAppCommand(
  input: GetAppCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSServerMigrationService_V2016_10_24.GetApp";
  let body: any = {};
  const wrappedBody: any = {
    GetAppRequest: serializeAws_json1_1GetAppRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GetApp",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1GetAppLaunchConfigurationCommand(
  input: GetAppLaunchConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AWSServerMigrationService_V2016_10_24.GetAppLaunchConfiguration";
  let body: any = {};
  const wrappedBody: any = {
    GetAppLaunchConfigurationRequest: serializeAws_json1_1GetAppLaunchConfigurationRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GetAppLaunchConfiguration",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1GetAppReplicationConfigurationCommand(
  input: GetAppReplicationConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AWSServerMigrationService_V2016_10_24.GetAppReplicationConfiguration";
  let body: any = {};
  const wrappedBody: any = {
    GetAppReplicationConfigurationRequest: serializeAws_json1_1GetAppReplicationConfigurationRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GetAppReplicationConfiguration",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1GetConnectorsCommand(
  input: GetConnectorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AWSServerMigrationService_V2016_10_24.GetConnectors";
  let body: any = {};
  const wrappedBody: any = {
    GetConnectorsRequest: serializeAws_json1_1GetConnectorsRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GetConnectors",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1GetReplicationJobsCommand(
  input: GetReplicationJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AWSServerMigrationService_V2016_10_24.GetReplicationJobs";
  let body: any = {};
  const wrappedBody: any = {
    GetReplicationJobsRequest: serializeAws_json1_1GetReplicationJobsRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GetReplicationJobs",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1GetReplicationRunsCommand(
  input: GetReplicationRunsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AWSServerMigrationService_V2016_10_24.GetReplicationRuns";
  let body: any = {};
  const wrappedBody: any = {
    GetReplicationRunsRequest: serializeAws_json1_1GetReplicationRunsRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GetReplicationRuns",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1GetServersCommand(
  input: GetServersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSServerMigrationService_V2016_10_24.GetServers";
  let body: any = {};
  const wrappedBody: any = {
    GetServersRequest: serializeAws_json1_1GetServersRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GetServers",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1ImportServerCatalogCommand(
  input: ImportServerCatalogCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AWSServerMigrationService_V2016_10_24.ImportServerCatalog";
  let body: any = {};
  const wrappedBody: any = {
    ImportServerCatalogRequest: serializeAws_json1_1ImportServerCatalogRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ImportServerCatalog",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1LaunchAppCommand(
  input: LaunchAppCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSServerMigrationService_V2016_10_24.LaunchApp";
  let body: any = {};
  const wrappedBody: any = {
    LaunchAppRequest: serializeAws_json1_1LaunchAppRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/LaunchApp",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1ListAppsCommand(
  input: ListAppsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSServerMigrationService_V2016_10_24.ListApps";
  let body: any = {};
  const wrappedBody: any = {
    ListAppsRequest: serializeAws_json1_1ListAppsRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ListApps",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1PutAppLaunchConfigurationCommand(
  input: PutAppLaunchConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AWSServerMigrationService_V2016_10_24.PutAppLaunchConfiguration";
  let body: any = {};
  const wrappedBody: any = {
    PutAppLaunchConfigurationRequest: serializeAws_json1_1PutAppLaunchConfigurationRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/PutAppLaunchConfiguration",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1PutAppReplicationConfigurationCommand(
  input: PutAppReplicationConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AWSServerMigrationService_V2016_10_24.PutAppReplicationConfiguration";
  let body: any = {};
  const wrappedBody: any = {
    PutAppReplicationConfigurationRequest: serializeAws_json1_1PutAppReplicationConfigurationRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/PutAppReplicationConfiguration",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1StartAppReplicationCommand(
  input: StartAppReplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AWSServerMigrationService_V2016_10_24.StartAppReplication";
  let body: any = {};
  const wrappedBody: any = {
    StartAppReplicationRequest: serializeAws_json1_1StartAppReplicationRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/StartAppReplication",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1StartOnDemandReplicationRunCommand(
  input: StartOnDemandReplicationRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AWSServerMigrationService_V2016_10_24.StartOnDemandReplicationRun";
  let body: any = {};
  const wrappedBody: any = {
    StartOnDemandReplicationRunRequest: serializeAws_json1_1StartOnDemandReplicationRunRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/StartOnDemandReplicationRun",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1StopAppReplicationCommand(
  input: StopAppReplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AWSServerMigrationService_V2016_10_24.StopAppReplication";
  let body: any = {};
  const wrappedBody: any = {
    StopAppReplicationRequest: serializeAws_json1_1StopAppReplicationRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/StopAppReplication",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1TerminateAppCommand(
  input: TerminateAppCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AWSServerMigrationService_V2016_10_24.TerminateApp";
  let body: any = {};
  const wrappedBody: any = {
    TerminateAppRequest: serializeAws_json1_1TerminateAppRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/TerminateApp",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1UpdateAppCommand(
  input: UpdateAppCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSServerMigrationService_V2016_10_24.UpdateApp";
  let body: any = {};
  const wrappedBody: any = {
    UpdateAppRequest: serializeAws_json1_1UpdateAppRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/UpdateApp",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1UpdateReplicationJobCommand(
  input: UpdateReplicationJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AWSServerMigrationService_V2016_10_24.UpdateReplicationJob";
  let body: any = {};
  const wrappedBody: any = {
    UpdateReplicationJobRequest: serializeAws_json1_1UpdateReplicationJobRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/UpdateReplicationJob",
    headers: headers,
    body: body
  });
}

export async function deserializeAws_json1_1CreateAppCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAppCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateAppCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateAppResponse(data, context);
  const response: CreateAppCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateAppResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreateAppCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAppCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalError":
    case "com.amazonaws.servermigration.V2016_10_24#InternalError":
      response = await deserializeAws_json1_1InternalErrorResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.servermigration.V2016_10_24#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "MissingRequiredParameterException":
    case "com.amazonaws.servermigration.V2016_10_24#MissingRequiredParameterException":
      response = await deserializeAws_json1_1MissingRequiredParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.servermigration.V2016_10_24#OperationNotPermittedException":
      response = await deserializeAws_json1_1OperationNotPermittedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthorizedOperationException":
    case "com.amazonaws.servermigration.V2016_10_24#UnauthorizedOperationException":
      response = await deserializeAws_json1_1UnauthorizedOperationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.servermigration.V2016_10_24#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1CreateReplicationJobCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateReplicationJobCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateReplicationJobCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateReplicationJobResponse(data, context);
  const response: CreateReplicationJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateReplicationJobResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreateReplicationJobCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateReplicationJobCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalError":
    case "com.amazonaws.servermigration.V2016_10_24#InternalError":
      response = await deserializeAws_json1_1InternalErrorResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.servermigration.V2016_10_24#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "MissingRequiredParameterException":
    case "com.amazonaws.servermigration.V2016_10_24#MissingRequiredParameterException":
      response = await deserializeAws_json1_1MissingRequiredParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NoConnectorsAvailableException":
    case "com.amazonaws.servermigration.V2016_10_24#NoConnectorsAvailableException":
      response = await deserializeAws_json1_1NoConnectorsAvailableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.servermigration.V2016_10_24#OperationNotPermittedException":
      response = await deserializeAws_json1_1OperationNotPermittedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ReplicationJobAlreadyExistsException":
    case "com.amazonaws.servermigration.V2016_10_24#ReplicationJobAlreadyExistsException":
      response = await deserializeAws_json1_1ReplicationJobAlreadyExistsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServerCannotBeReplicatedException":
    case "com.amazonaws.servermigration.V2016_10_24#ServerCannotBeReplicatedException":
      response = await deserializeAws_json1_1ServerCannotBeReplicatedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TemporarilyUnavailableException":
    case "com.amazonaws.servermigration.V2016_10_24#TemporarilyUnavailableException":
      response = await deserializeAws_json1_1TemporarilyUnavailableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthorizedOperationException":
    case "com.amazonaws.servermigration.V2016_10_24#UnauthorizedOperationException":
      response = await deserializeAws_json1_1UnauthorizedOperationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.servermigration.V2016_10_24#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DeleteAppCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAppCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteAppCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteAppResponse(data, context);
  const response: DeleteAppCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteAppResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteAppCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAppCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalError":
    case "com.amazonaws.servermigration.V2016_10_24#InternalError":
      response = await deserializeAws_json1_1InternalErrorResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.servermigration.V2016_10_24#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "MissingRequiredParameterException":
    case "com.amazonaws.servermigration.V2016_10_24#MissingRequiredParameterException":
      response = await deserializeAws_json1_1MissingRequiredParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.servermigration.V2016_10_24#OperationNotPermittedException":
      response = await deserializeAws_json1_1OperationNotPermittedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthorizedOperationException":
    case "com.amazonaws.servermigration.V2016_10_24#UnauthorizedOperationException":
      response = await deserializeAws_json1_1UnauthorizedOperationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.servermigration.V2016_10_24#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DeleteAppLaunchConfigurationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAppLaunchConfigurationCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteAppLaunchConfigurationCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteAppLaunchConfigurationResponse(
    data,
    context
  );
  const response: DeleteAppLaunchConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteAppLaunchConfigurationResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteAppLaunchConfigurationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAppLaunchConfigurationCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalError":
    case "com.amazonaws.servermigration.V2016_10_24#InternalError":
      response = await deserializeAws_json1_1InternalErrorResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.servermigration.V2016_10_24#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "MissingRequiredParameterException":
    case "com.amazonaws.servermigration.V2016_10_24#MissingRequiredParameterException":
      response = await deserializeAws_json1_1MissingRequiredParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.servermigration.V2016_10_24#OperationNotPermittedException":
      response = await deserializeAws_json1_1OperationNotPermittedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthorizedOperationException":
    case "com.amazonaws.servermigration.V2016_10_24#UnauthorizedOperationException":
      response = await deserializeAws_json1_1UnauthorizedOperationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.servermigration.V2016_10_24#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DeleteAppReplicationConfigurationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAppReplicationConfigurationCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteAppReplicationConfigurationCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteAppReplicationConfigurationResponse(
    data,
    context
  );
  const response: DeleteAppReplicationConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteAppReplicationConfigurationResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteAppReplicationConfigurationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAppReplicationConfigurationCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalError":
    case "com.amazonaws.servermigration.V2016_10_24#InternalError":
      response = await deserializeAws_json1_1InternalErrorResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.servermigration.V2016_10_24#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "MissingRequiredParameterException":
    case "com.amazonaws.servermigration.V2016_10_24#MissingRequiredParameterException":
      response = await deserializeAws_json1_1MissingRequiredParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.servermigration.V2016_10_24#OperationNotPermittedException":
      response = await deserializeAws_json1_1OperationNotPermittedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthorizedOperationException":
    case "com.amazonaws.servermigration.V2016_10_24#UnauthorizedOperationException":
      response = await deserializeAws_json1_1UnauthorizedOperationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.servermigration.V2016_10_24#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DeleteReplicationJobCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteReplicationJobCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteReplicationJobCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteReplicationJobResponse(data, context);
  const response: DeleteReplicationJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteReplicationJobResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteReplicationJobCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteReplicationJobCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.servermigration.V2016_10_24#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "MissingRequiredParameterException":
    case "com.amazonaws.servermigration.V2016_10_24#MissingRequiredParameterException":
      response = await deserializeAws_json1_1MissingRequiredParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.servermigration.V2016_10_24#OperationNotPermittedException":
      response = await deserializeAws_json1_1OperationNotPermittedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ReplicationJobNotFoundException":
    case "com.amazonaws.servermigration.V2016_10_24#ReplicationJobNotFoundException":
      response = await deserializeAws_json1_1ReplicationJobNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthorizedOperationException":
    case "com.amazonaws.servermigration.V2016_10_24#UnauthorizedOperationException":
      response = await deserializeAws_json1_1UnauthorizedOperationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.servermigration.V2016_10_24#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DeleteServerCatalogCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteServerCatalogCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteServerCatalogCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteServerCatalogResponse(data, context);
  const response: DeleteServerCatalogCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteServerCatalogResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteServerCatalogCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteServerCatalogCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.servermigration.V2016_10_24#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "MissingRequiredParameterException":
    case "com.amazonaws.servermigration.V2016_10_24#MissingRequiredParameterException":
      response = await deserializeAws_json1_1MissingRequiredParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.servermigration.V2016_10_24#OperationNotPermittedException":
      response = await deserializeAws_json1_1OperationNotPermittedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthorizedOperationException":
    case "com.amazonaws.servermigration.V2016_10_24#UnauthorizedOperationException":
      response = await deserializeAws_json1_1UnauthorizedOperationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.servermigration.V2016_10_24#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DisassociateConnectorCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateConnectorCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DisassociateConnectorCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DisassociateConnectorResponse(data, context);
  const response: DisassociateConnectorCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DisassociateConnectorResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DisassociateConnectorCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateConnectorCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.servermigration.V2016_10_24#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "MissingRequiredParameterException":
    case "com.amazonaws.servermigration.V2016_10_24#MissingRequiredParameterException":
      response = await deserializeAws_json1_1MissingRequiredParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.servermigration.V2016_10_24#OperationNotPermittedException":
      response = await deserializeAws_json1_1OperationNotPermittedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthorizedOperationException":
    case "com.amazonaws.servermigration.V2016_10_24#UnauthorizedOperationException":
      response = await deserializeAws_json1_1UnauthorizedOperationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.servermigration.V2016_10_24#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1GenerateChangeSetCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GenerateChangeSetCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GenerateChangeSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GenerateChangeSetResponse(data, context);
  const response: GenerateChangeSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GenerateChangeSetResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GenerateChangeSetCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GenerateChangeSetCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalError":
    case "com.amazonaws.servermigration.V2016_10_24#InternalError":
      response = await deserializeAws_json1_1InternalErrorResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.servermigration.V2016_10_24#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "MissingRequiredParameterException":
    case "com.amazonaws.servermigration.V2016_10_24#MissingRequiredParameterException":
      response = await deserializeAws_json1_1MissingRequiredParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.servermigration.V2016_10_24#OperationNotPermittedException":
      response = await deserializeAws_json1_1OperationNotPermittedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthorizedOperationException":
    case "com.amazonaws.servermigration.V2016_10_24#UnauthorizedOperationException":
      response = await deserializeAws_json1_1UnauthorizedOperationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.servermigration.V2016_10_24#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1GenerateTemplateCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GenerateTemplateCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GenerateTemplateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GenerateTemplateResponse(data, context);
  const response: GenerateTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GenerateTemplateResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GenerateTemplateCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GenerateTemplateCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalError":
    case "com.amazonaws.servermigration.V2016_10_24#InternalError":
      response = await deserializeAws_json1_1InternalErrorResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.servermigration.V2016_10_24#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "MissingRequiredParameterException":
    case "com.amazonaws.servermigration.V2016_10_24#MissingRequiredParameterException":
      response = await deserializeAws_json1_1MissingRequiredParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.servermigration.V2016_10_24#OperationNotPermittedException":
      response = await deserializeAws_json1_1OperationNotPermittedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthorizedOperationException":
    case "com.amazonaws.servermigration.V2016_10_24#UnauthorizedOperationException":
      response = await deserializeAws_json1_1UnauthorizedOperationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.servermigration.V2016_10_24#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1GetAppCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAppCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetAppCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetAppResponse(data, context);
  const response: GetAppCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetAppResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetAppCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAppCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalError":
    case "com.amazonaws.servermigration.V2016_10_24#InternalError":
      response = await deserializeAws_json1_1InternalErrorResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.servermigration.V2016_10_24#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "MissingRequiredParameterException":
    case "com.amazonaws.servermigration.V2016_10_24#MissingRequiredParameterException":
      response = await deserializeAws_json1_1MissingRequiredParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.servermigration.V2016_10_24#OperationNotPermittedException":
      response = await deserializeAws_json1_1OperationNotPermittedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthorizedOperationException":
    case "com.amazonaws.servermigration.V2016_10_24#UnauthorizedOperationException":
      response = await deserializeAws_json1_1UnauthorizedOperationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.servermigration.V2016_10_24#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1GetAppLaunchConfigurationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAppLaunchConfigurationCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetAppLaunchConfigurationCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetAppLaunchConfigurationResponse(
    data,
    context
  );
  const response: GetAppLaunchConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetAppLaunchConfigurationResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetAppLaunchConfigurationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAppLaunchConfigurationCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalError":
    case "com.amazonaws.servermigration.V2016_10_24#InternalError":
      response = await deserializeAws_json1_1InternalErrorResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.servermigration.V2016_10_24#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "MissingRequiredParameterException":
    case "com.amazonaws.servermigration.V2016_10_24#MissingRequiredParameterException":
      response = await deserializeAws_json1_1MissingRequiredParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.servermigration.V2016_10_24#OperationNotPermittedException":
      response = await deserializeAws_json1_1OperationNotPermittedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthorizedOperationException":
    case "com.amazonaws.servermigration.V2016_10_24#UnauthorizedOperationException":
      response = await deserializeAws_json1_1UnauthorizedOperationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.servermigration.V2016_10_24#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1GetAppReplicationConfigurationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAppReplicationConfigurationCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetAppReplicationConfigurationCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetAppReplicationConfigurationResponse(
    data,
    context
  );
  const response: GetAppReplicationConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetAppReplicationConfigurationResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetAppReplicationConfigurationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAppReplicationConfigurationCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalError":
    case "com.amazonaws.servermigration.V2016_10_24#InternalError":
      response = await deserializeAws_json1_1InternalErrorResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.servermigration.V2016_10_24#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "MissingRequiredParameterException":
    case "com.amazonaws.servermigration.V2016_10_24#MissingRequiredParameterException":
      response = await deserializeAws_json1_1MissingRequiredParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.servermigration.V2016_10_24#OperationNotPermittedException":
      response = await deserializeAws_json1_1OperationNotPermittedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthorizedOperationException":
    case "com.amazonaws.servermigration.V2016_10_24#UnauthorizedOperationException":
      response = await deserializeAws_json1_1UnauthorizedOperationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.servermigration.V2016_10_24#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1GetConnectorsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConnectorsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetConnectorsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetConnectorsResponse(data, context);
  const response: GetConnectorsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetConnectorsResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetConnectorsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConnectorsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "UnauthorizedOperationException":
    case "com.amazonaws.servermigration.V2016_10_24#UnauthorizedOperationException":
      response = await deserializeAws_json1_1UnauthorizedOperationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.servermigration.V2016_10_24#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1GetReplicationJobsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetReplicationJobsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetReplicationJobsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetReplicationJobsResponse(data, context);
  const response: GetReplicationJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetReplicationJobsResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetReplicationJobsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetReplicationJobsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.servermigration.V2016_10_24#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "MissingRequiredParameterException":
    case "com.amazonaws.servermigration.V2016_10_24#MissingRequiredParameterException":
      response = await deserializeAws_json1_1MissingRequiredParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthorizedOperationException":
    case "com.amazonaws.servermigration.V2016_10_24#UnauthorizedOperationException":
      response = await deserializeAws_json1_1UnauthorizedOperationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.servermigration.V2016_10_24#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1GetReplicationRunsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetReplicationRunsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetReplicationRunsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetReplicationRunsResponse(data, context);
  const response: GetReplicationRunsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetReplicationRunsResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetReplicationRunsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetReplicationRunsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.servermigration.V2016_10_24#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "MissingRequiredParameterException":
    case "com.amazonaws.servermigration.V2016_10_24#MissingRequiredParameterException":
      response = await deserializeAws_json1_1MissingRequiredParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthorizedOperationException":
    case "com.amazonaws.servermigration.V2016_10_24#UnauthorizedOperationException":
      response = await deserializeAws_json1_1UnauthorizedOperationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.servermigration.V2016_10_24#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1GetServersCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetServersCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetServersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetServersResponse(data, context);
  const response: GetServersCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetServersResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetServersCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetServersCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "UnauthorizedOperationException":
    case "com.amazonaws.servermigration.V2016_10_24#UnauthorizedOperationException":
      response = await deserializeAws_json1_1UnauthorizedOperationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.servermigration.V2016_10_24#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1ImportServerCatalogCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportServerCatalogCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ImportServerCatalogCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ImportServerCatalogResponse(data, context);
  const response: ImportServerCatalogCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ImportServerCatalogResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ImportServerCatalogCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportServerCatalogCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.servermigration.V2016_10_24#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "MissingRequiredParameterException":
    case "com.amazonaws.servermigration.V2016_10_24#MissingRequiredParameterException":
      response = await deserializeAws_json1_1MissingRequiredParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NoConnectorsAvailableException":
    case "com.amazonaws.servermigration.V2016_10_24#NoConnectorsAvailableException":
      response = await deserializeAws_json1_1NoConnectorsAvailableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.servermigration.V2016_10_24#OperationNotPermittedException":
      response = await deserializeAws_json1_1OperationNotPermittedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthorizedOperationException":
    case "com.amazonaws.servermigration.V2016_10_24#UnauthorizedOperationException":
      response = await deserializeAws_json1_1UnauthorizedOperationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.servermigration.V2016_10_24#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1LaunchAppCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<LaunchAppCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1LaunchAppCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1LaunchAppResponse(data, context);
  const response: LaunchAppCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "LaunchAppResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1LaunchAppCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<LaunchAppCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalError":
    case "com.amazonaws.servermigration.V2016_10_24#InternalError":
      response = await deserializeAws_json1_1InternalErrorResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.servermigration.V2016_10_24#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "MissingRequiredParameterException":
    case "com.amazonaws.servermigration.V2016_10_24#MissingRequiredParameterException":
      response = await deserializeAws_json1_1MissingRequiredParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.servermigration.V2016_10_24#OperationNotPermittedException":
      response = await deserializeAws_json1_1OperationNotPermittedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthorizedOperationException":
    case "com.amazonaws.servermigration.V2016_10_24#UnauthorizedOperationException":
      response = await deserializeAws_json1_1UnauthorizedOperationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.servermigration.V2016_10_24#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1ListAppsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAppsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListAppsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListAppsResponse(data, context);
  const response: ListAppsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListAppsResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListAppsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAppsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalError":
    case "com.amazonaws.servermigration.V2016_10_24#InternalError":
      response = await deserializeAws_json1_1InternalErrorResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.servermigration.V2016_10_24#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "MissingRequiredParameterException":
    case "com.amazonaws.servermigration.V2016_10_24#MissingRequiredParameterException":
      response = await deserializeAws_json1_1MissingRequiredParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.servermigration.V2016_10_24#OperationNotPermittedException":
      response = await deserializeAws_json1_1OperationNotPermittedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthorizedOperationException":
    case "com.amazonaws.servermigration.V2016_10_24#UnauthorizedOperationException":
      response = await deserializeAws_json1_1UnauthorizedOperationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.servermigration.V2016_10_24#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1PutAppLaunchConfigurationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAppLaunchConfigurationCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1PutAppLaunchConfigurationCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutAppLaunchConfigurationResponse(
    data,
    context
  );
  const response: PutAppLaunchConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PutAppLaunchConfigurationResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1PutAppLaunchConfigurationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAppLaunchConfigurationCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalError":
    case "com.amazonaws.servermigration.V2016_10_24#InternalError":
      response = await deserializeAws_json1_1InternalErrorResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.servermigration.V2016_10_24#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "MissingRequiredParameterException":
    case "com.amazonaws.servermigration.V2016_10_24#MissingRequiredParameterException":
      response = await deserializeAws_json1_1MissingRequiredParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.servermigration.V2016_10_24#OperationNotPermittedException":
      response = await deserializeAws_json1_1OperationNotPermittedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthorizedOperationException":
    case "com.amazonaws.servermigration.V2016_10_24#UnauthorizedOperationException":
      response = await deserializeAws_json1_1UnauthorizedOperationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.servermigration.V2016_10_24#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1PutAppReplicationConfigurationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAppReplicationConfigurationCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1PutAppReplicationConfigurationCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutAppReplicationConfigurationResponse(
    data,
    context
  );
  const response: PutAppReplicationConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PutAppReplicationConfigurationResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1PutAppReplicationConfigurationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAppReplicationConfigurationCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalError":
    case "com.amazonaws.servermigration.V2016_10_24#InternalError":
      response = await deserializeAws_json1_1InternalErrorResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.servermigration.V2016_10_24#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "MissingRequiredParameterException":
    case "com.amazonaws.servermigration.V2016_10_24#MissingRequiredParameterException":
      response = await deserializeAws_json1_1MissingRequiredParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.servermigration.V2016_10_24#OperationNotPermittedException":
      response = await deserializeAws_json1_1OperationNotPermittedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthorizedOperationException":
    case "com.amazonaws.servermigration.V2016_10_24#UnauthorizedOperationException":
      response = await deserializeAws_json1_1UnauthorizedOperationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.servermigration.V2016_10_24#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1StartAppReplicationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartAppReplicationCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1StartAppReplicationCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartAppReplicationResponse(data, context);
  const response: StartAppReplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StartAppReplicationResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1StartAppReplicationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartAppReplicationCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalError":
    case "com.amazonaws.servermigration.V2016_10_24#InternalError":
      response = await deserializeAws_json1_1InternalErrorResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.servermigration.V2016_10_24#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "MissingRequiredParameterException":
    case "com.amazonaws.servermigration.V2016_10_24#MissingRequiredParameterException":
      response = await deserializeAws_json1_1MissingRequiredParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.servermigration.V2016_10_24#OperationNotPermittedException":
      response = await deserializeAws_json1_1OperationNotPermittedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthorizedOperationException":
    case "com.amazonaws.servermigration.V2016_10_24#UnauthorizedOperationException":
      response = await deserializeAws_json1_1UnauthorizedOperationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.servermigration.V2016_10_24#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1StartOnDemandReplicationRunCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartOnDemandReplicationRunCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1StartOnDemandReplicationRunCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartOnDemandReplicationRunResponse(
    data,
    context
  );
  const response: StartOnDemandReplicationRunCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StartOnDemandReplicationRunResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1StartOnDemandReplicationRunCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartOnDemandReplicationRunCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.servermigration.V2016_10_24#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "MissingRequiredParameterException":
    case "com.amazonaws.servermigration.V2016_10_24#MissingRequiredParameterException":
      response = await deserializeAws_json1_1MissingRequiredParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.servermigration.V2016_10_24#OperationNotPermittedException":
      response = await deserializeAws_json1_1OperationNotPermittedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ReplicationRunLimitExceededException":
    case "com.amazonaws.servermigration.V2016_10_24#ReplicationRunLimitExceededException":
      response = await deserializeAws_json1_1ReplicationRunLimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthorizedOperationException":
    case "com.amazonaws.servermigration.V2016_10_24#UnauthorizedOperationException":
      response = await deserializeAws_json1_1UnauthorizedOperationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.servermigration.V2016_10_24#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1StopAppReplicationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopAppReplicationCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1StopAppReplicationCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StopAppReplicationResponse(data, context);
  const response: StopAppReplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StopAppReplicationResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1StopAppReplicationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopAppReplicationCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalError":
    case "com.amazonaws.servermigration.V2016_10_24#InternalError":
      response = await deserializeAws_json1_1InternalErrorResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.servermigration.V2016_10_24#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "MissingRequiredParameterException":
    case "com.amazonaws.servermigration.V2016_10_24#MissingRequiredParameterException":
      response = await deserializeAws_json1_1MissingRequiredParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.servermigration.V2016_10_24#OperationNotPermittedException":
      response = await deserializeAws_json1_1OperationNotPermittedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthorizedOperationException":
    case "com.amazonaws.servermigration.V2016_10_24#UnauthorizedOperationException":
      response = await deserializeAws_json1_1UnauthorizedOperationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.servermigration.V2016_10_24#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1TerminateAppCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TerminateAppCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1TerminateAppCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1TerminateAppResponse(data, context);
  const response: TerminateAppCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "TerminateAppResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1TerminateAppCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TerminateAppCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalError":
    case "com.amazonaws.servermigration.V2016_10_24#InternalError":
      response = await deserializeAws_json1_1InternalErrorResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.servermigration.V2016_10_24#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "MissingRequiredParameterException":
    case "com.amazonaws.servermigration.V2016_10_24#MissingRequiredParameterException":
      response = await deserializeAws_json1_1MissingRequiredParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.servermigration.V2016_10_24#OperationNotPermittedException":
      response = await deserializeAws_json1_1OperationNotPermittedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthorizedOperationException":
    case "com.amazonaws.servermigration.V2016_10_24#UnauthorizedOperationException":
      response = await deserializeAws_json1_1UnauthorizedOperationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.servermigration.V2016_10_24#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1UpdateAppCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAppCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateAppCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateAppResponse(data, context);
  const response: UpdateAppCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateAppResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1UpdateAppCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAppCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalError":
    case "com.amazonaws.servermigration.V2016_10_24#InternalError":
      response = await deserializeAws_json1_1InternalErrorResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.servermigration.V2016_10_24#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "MissingRequiredParameterException":
    case "com.amazonaws.servermigration.V2016_10_24#MissingRequiredParameterException":
      response = await deserializeAws_json1_1MissingRequiredParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.servermigration.V2016_10_24#OperationNotPermittedException":
      response = await deserializeAws_json1_1OperationNotPermittedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthorizedOperationException":
    case "com.amazonaws.servermigration.V2016_10_24#UnauthorizedOperationException":
      response = await deserializeAws_json1_1UnauthorizedOperationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.servermigration.V2016_10_24#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1UpdateReplicationJobCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateReplicationJobCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateReplicationJobCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateReplicationJobResponse(data, context);
  const response: UpdateReplicationJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateReplicationJobResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1UpdateReplicationJobCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateReplicationJobCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalError":
    case "com.amazonaws.servermigration.V2016_10_24#InternalError":
      response = await deserializeAws_json1_1InternalErrorResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.servermigration.V2016_10_24#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "MissingRequiredParameterException":
    case "com.amazonaws.servermigration.V2016_10_24#MissingRequiredParameterException":
      response = await deserializeAws_json1_1MissingRequiredParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.servermigration.V2016_10_24#OperationNotPermittedException":
      response = await deserializeAws_json1_1OperationNotPermittedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ReplicationJobNotFoundException":
    case "com.amazonaws.servermigration.V2016_10_24#ReplicationJobNotFoundException":
      response = await deserializeAws_json1_1ReplicationJobNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServerCannotBeReplicatedException":
    case "com.amazonaws.servermigration.V2016_10_24#ServerCannotBeReplicatedException":
      response = await deserializeAws_json1_1ServerCannotBeReplicatedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TemporarilyUnavailableException":
    case "com.amazonaws.servermigration.V2016_10_24#TemporarilyUnavailableException":
      response = await deserializeAws_json1_1TemporarilyUnavailableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthorizedOperationException":
    case "com.amazonaws.servermigration.V2016_10_24#UnauthorizedOperationException":
      response = await deserializeAws_json1_1UnauthorizedOperationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.servermigration.V2016_10_24#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

const deserializeAws_json1_1InternalErrorResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalError> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InternalError(body, context);
  const contents: InternalError = {
    name: "InternalError",
    __type: "InternalError",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidParameterExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidParameterException(
    body,
    context
  );
  const contents: InvalidParameterException = {
    name: "InvalidParameterException",
    __type: "InvalidParameterException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1MissingRequiredParameterExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MissingRequiredParameterException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1MissingRequiredParameterException(
    body,
    context
  );
  const contents: MissingRequiredParameterException = {
    name: "MissingRequiredParameterException",
    __type: "MissingRequiredParameterException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1NoConnectorsAvailableExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoConnectorsAvailableException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1NoConnectorsAvailableException(
    body,
    context
  );
  const contents: NoConnectorsAvailableException = {
    name: "NoConnectorsAvailableException",
    __type: "NoConnectorsAvailableException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1OperationNotPermittedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OperationNotPermittedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1OperationNotPermittedException(
    body,
    context
  );
  const contents: OperationNotPermittedException = {
    name: "OperationNotPermittedException",
    __type: "OperationNotPermittedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ReplicationJobAlreadyExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ReplicationJobAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ReplicationJobAlreadyExistsException(
    body,
    context
  );
  const contents: ReplicationJobAlreadyExistsException = {
    name: "ReplicationJobAlreadyExistsException",
    __type: "ReplicationJobAlreadyExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ReplicationJobNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ReplicationJobNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ReplicationJobNotFoundException(
    body,
    context
  );
  const contents: ReplicationJobNotFoundException = {
    name: "ReplicationJobNotFoundException",
    __type: "ReplicationJobNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ReplicationRunLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ReplicationRunLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ReplicationRunLimitExceededException(
    body,
    context
  );
  const contents: ReplicationRunLimitExceededException = {
    name: "ReplicationRunLimitExceededException",
    __type: "ReplicationRunLimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ServerCannotBeReplicatedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServerCannotBeReplicatedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ServerCannotBeReplicatedException(
    body,
    context
  );
  const contents: ServerCannotBeReplicatedException = {
    name: "ServerCannotBeReplicatedException",
    __type: "ServerCannotBeReplicatedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1TemporarilyUnavailableExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TemporarilyUnavailableException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TemporarilyUnavailableException(
    body,
    context
  );
  const contents: TemporarilyUnavailableException = {
    name: "TemporarilyUnavailableException",
    __type: "TemporarilyUnavailableException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1UnauthorizedOperationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnauthorizedOperationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1UnauthorizedOperationException(
    body,
    context
  );
  const contents: UnauthorizedOperationException = {
    name: "UnauthorizedOperationException",
    __type: "UnauthorizedOperationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const serializeAws_json1_1AppIds = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_json1_1CreateAppRequest = (
  input: CreateAppRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.clientToken !== undefined) {
    bodyParams["clientToken"] = input.clientToken;
  }
  if (input.description !== undefined) {
    bodyParams["description"] = input.description;
  }
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  if (input.roleName !== undefined) {
    bodyParams["roleName"] = input.roleName;
  }
  if (input.serverGroups !== undefined) {
    bodyParams["serverGroups"] = serializeAws_json1_1ServerGroups(
      input.serverGroups,
      context
    );
  }
  if (input.tags !== undefined) {
    bodyParams["tags"] = serializeAws_json1_1Tags(input.tags, context);
  }
  return bodyParams;
};

const serializeAws_json1_1CreateReplicationJobRequest = (
  input: CreateReplicationJobRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.description !== undefined) {
    bodyParams["description"] = input.description;
  }
  if (input.encrypted !== undefined) {
    bodyParams["encrypted"] = input.encrypted;
  }
  if (input.frequency !== undefined) {
    bodyParams["frequency"] = input.frequency;
  }
  if (input.kmsKeyId !== undefined) {
    bodyParams["kmsKeyId"] = input.kmsKeyId;
  }
  if (input.licenseType !== undefined) {
    bodyParams["licenseType"] = input.licenseType;
  }
  if (input.numberOfRecentAmisToKeep !== undefined) {
    bodyParams["numberOfRecentAmisToKeep"] = input.numberOfRecentAmisToKeep;
  }
  if (input.roleName !== undefined) {
    bodyParams["roleName"] = input.roleName;
  }
  if (input.runOnce !== undefined) {
    bodyParams["runOnce"] = input.runOnce;
  }
  if (input.seedReplicationTime !== undefined) {
    bodyParams["seedReplicationTime"] = Math.round(
      input.seedReplicationTime.getTime() / 1000
    );
  }
  if (input.serverId !== undefined) {
    bodyParams["serverId"] = input.serverId;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteAppLaunchConfigurationRequest = (
  input: DeleteAppLaunchConfigurationRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.appId !== undefined) {
    bodyParams["appId"] = input.appId;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteAppReplicationConfigurationRequest = (
  input: DeleteAppReplicationConfigurationRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.appId !== undefined) {
    bodyParams["appId"] = input.appId;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteAppRequest = (
  input: DeleteAppRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.appId !== undefined) {
    bodyParams["appId"] = input.appId;
  }
  if (input.forceStopAppReplication !== undefined) {
    bodyParams["forceStopAppReplication"] = input.forceStopAppReplication;
  }
  if (input.forceTerminateApp !== undefined) {
    bodyParams["forceTerminateApp"] = input.forceTerminateApp;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteReplicationJobRequest = (
  input: DeleteReplicationJobRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.replicationJobId !== undefined) {
    bodyParams["replicationJobId"] = input.replicationJobId;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteServerCatalogRequest = (
  input: DeleteServerCatalogRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  return bodyParams;
};

const serializeAws_json1_1DisassociateConnectorRequest = (
  input: DisassociateConnectorRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.connectorId !== undefined) {
    bodyParams["connectorId"] = input.connectorId;
  }
  return bodyParams;
};

const serializeAws_json1_1GenerateChangeSetRequest = (
  input: GenerateChangeSetRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.appId !== undefined) {
    bodyParams["appId"] = input.appId;
  }
  if (input.changesetFormat !== undefined) {
    bodyParams["changesetFormat"] = input.changesetFormat;
  }
  return bodyParams;
};

const serializeAws_json1_1GenerateTemplateRequest = (
  input: GenerateTemplateRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.appId !== undefined) {
    bodyParams["appId"] = input.appId;
  }
  if (input.templateFormat !== undefined) {
    bodyParams["templateFormat"] = input.templateFormat;
  }
  return bodyParams;
};

const serializeAws_json1_1GetAppLaunchConfigurationRequest = (
  input: GetAppLaunchConfigurationRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.appId !== undefined) {
    bodyParams["appId"] = input.appId;
  }
  return bodyParams;
};

const serializeAws_json1_1GetAppReplicationConfigurationRequest = (
  input: GetAppReplicationConfigurationRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.appId !== undefined) {
    bodyParams["appId"] = input.appId;
  }
  return bodyParams;
};

const serializeAws_json1_1GetAppRequest = (
  input: GetAppRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.appId !== undefined) {
    bodyParams["appId"] = input.appId;
  }
  return bodyParams;
};

const serializeAws_json1_1GetConnectorsRequest = (
  input: GetConnectorsRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.maxResults !== undefined) {
    bodyParams["maxResults"] = input.maxResults;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1GetReplicationJobsRequest = (
  input: GetReplicationJobsRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.maxResults !== undefined) {
    bodyParams["maxResults"] = input.maxResults;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  if (input.replicationJobId !== undefined) {
    bodyParams["replicationJobId"] = input.replicationJobId;
  }
  return bodyParams;
};

const serializeAws_json1_1GetReplicationRunsRequest = (
  input: GetReplicationRunsRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.maxResults !== undefined) {
    bodyParams["maxResults"] = input.maxResults;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  if (input.replicationJobId !== undefined) {
    bodyParams["replicationJobId"] = input.replicationJobId;
  }
  return bodyParams;
};

const serializeAws_json1_1GetServersRequest = (
  input: GetServersRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.maxResults !== undefined) {
    bodyParams["maxResults"] = input.maxResults;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  if (input.vmServerAddressList !== undefined) {
    bodyParams["vmServerAddressList"] = serializeAws_json1_1VmServerAddressList(
      input.vmServerAddressList,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1ImportServerCatalogRequest = (
  input: ImportServerCatalogRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  return bodyParams;
};

const serializeAws_json1_1LaunchAppRequest = (
  input: LaunchAppRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.appId !== undefined) {
    bodyParams["appId"] = input.appId;
  }
  return bodyParams;
};

const serializeAws_json1_1ListAppsRequest = (
  input: ListAppsRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.appIds !== undefined) {
    bodyParams["appIds"] = serializeAws_json1_1AppIds(input.appIds, context);
  }
  if (input.maxResults !== undefined) {
    bodyParams["maxResults"] = input.maxResults;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1PutAppLaunchConfigurationRequest = (
  input: PutAppLaunchConfigurationRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.appId !== undefined) {
    bodyParams["appId"] = input.appId;
  }
  if (input.roleName !== undefined) {
    bodyParams["roleName"] = input.roleName;
  }
  if (input.serverGroupLaunchConfigurations !== undefined) {
    bodyParams[
      "serverGroupLaunchConfigurations"
    ] = serializeAws_json1_1ServerGroupLaunchConfigurations(
      input.serverGroupLaunchConfigurations,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1PutAppReplicationConfigurationRequest = (
  input: PutAppReplicationConfigurationRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.appId !== undefined) {
    bodyParams["appId"] = input.appId;
  }
  if (input.serverGroupReplicationConfigurations !== undefined) {
    bodyParams[
      "serverGroupReplicationConfigurations"
    ] = serializeAws_json1_1ServerGroupReplicationConfigurations(
      input.serverGroupReplicationConfigurations,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1S3Location = (
  input: S3Location,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.bucket !== undefined) {
    bodyParams["bucket"] = input.bucket;
  }
  if (input.key !== undefined) {
    bodyParams["key"] = input.key;
  }
  return bodyParams;
};

const serializeAws_json1_1Server = (
  input: Server,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.replicationJobId !== undefined) {
    bodyParams["replicationJobId"] = input.replicationJobId;
  }
  if (input.replicationJobTerminated !== undefined) {
    bodyParams["replicationJobTerminated"] = input.replicationJobTerminated;
  }
  if (input.serverId !== undefined) {
    bodyParams["serverId"] = input.serverId;
  }
  if (input.serverType !== undefined) {
    bodyParams["serverType"] = input.serverType;
  }
  if (input.vmServer !== undefined) {
    bodyParams["vmServer"] = serializeAws_json1_1VmServer(
      input.vmServer,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1ServerGroup = (
  input: ServerGroup,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  if (input.serverGroupId !== undefined) {
    bodyParams["serverGroupId"] = input.serverGroupId;
  }
  if (input.serverList !== undefined) {
    bodyParams["serverList"] = serializeAws_json1_1ServerList(
      input.serverList,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1ServerGroupLaunchConfiguration = (
  input: ServerGroupLaunchConfiguration,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.launchOrder !== undefined) {
    bodyParams["launchOrder"] = input.launchOrder;
  }
  if (input.serverGroupId !== undefined) {
    bodyParams["serverGroupId"] = input.serverGroupId;
  }
  if (input.serverLaunchConfigurations !== undefined) {
    bodyParams[
      "serverLaunchConfigurations"
    ] = serializeAws_json1_1ServerLaunchConfigurations(
      input.serverLaunchConfigurations,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1ServerGroupLaunchConfigurations = (
  input: Array<ServerGroupLaunchConfiguration>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_json1_1ServerGroupLaunchConfiguration(entry, context)
  );
};

const serializeAws_json1_1ServerGroupReplicationConfiguration = (
  input: ServerGroupReplicationConfiguration,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.serverGroupId !== undefined) {
    bodyParams["serverGroupId"] = input.serverGroupId;
  }
  if (input.serverReplicationConfigurations !== undefined) {
    bodyParams[
      "serverReplicationConfigurations"
    ] = serializeAws_json1_1ServerReplicationConfigurations(
      input.serverReplicationConfigurations,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1ServerGroupReplicationConfigurations = (
  input: Array<ServerGroupReplicationConfiguration>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_json1_1ServerGroupReplicationConfiguration(entry, context)
  );
};

const serializeAws_json1_1ServerGroups = (
  input: Array<ServerGroup>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_json1_1ServerGroup(entry, context)
  );
};

const serializeAws_json1_1ServerLaunchConfiguration = (
  input: ServerLaunchConfiguration,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.associatePublicIpAddress !== undefined) {
    bodyParams["associatePublicIpAddress"] = input.associatePublicIpAddress;
  }
  if (input.ec2KeyName !== undefined) {
    bodyParams["ec2KeyName"] = input.ec2KeyName;
  }
  if (input.instanceType !== undefined) {
    bodyParams["instanceType"] = input.instanceType;
  }
  if (input.logicalId !== undefined) {
    bodyParams["logicalId"] = input.logicalId;
  }
  if (input.securityGroup !== undefined) {
    bodyParams["securityGroup"] = input.securityGroup;
  }
  if (input.server !== undefined) {
    bodyParams["server"] = serializeAws_json1_1Server(input.server, context);
  }
  if (input.subnet !== undefined) {
    bodyParams["subnet"] = input.subnet;
  }
  if (input.userData !== undefined) {
    bodyParams["userData"] = serializeAws_json1_1UserData(
      input.userData,
      context
    );
  }
  if (input.vpc !== undefined) {
    bodyParams["vpc"] = input.vpc;
  }
  return bodyParams;
};

const serializeAws_json1_1ServerLaunchConfigurations = (
  input: Array<ServerLaunchConfiguration>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_json1_1ServerLaunchConfiguration(entry, context)
  );
};

const serializeAws_json1_1ServerList = (
  input: Array<Server>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => serializeAws_json1_1Server(entry, context));
};

const serializeAws_json1_1ServerReplicationConfiguration = (
  input: ServerReplicationConfiguration,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.server !== undefined) {
    bodyParams["server"] = serializeAws_json1_1Server(input.server, context);
  }
  if (input.serverReplicationParameters !== undefined) {
    bodyParams[
      "serverReplicationParameters"
    ] = serializeAws_json1_1ServerReplicationParameters(
      input.serverReplicationParameters,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1ServerReplicationConfigurations = (
  input: Array<ServerReplicationConfiguration>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_json1_1ServerReplicationConfiguration(entry, context)
  );
};

const serializeAws_json1_1ServerReplicationParameters = (
  input: ServerReplicationParameters,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.encrypted !== undefined) {
    bodyParams["encrypted"] = input.encrypted;
  }
  if (input.frequency !== undefined) {
    bodyParams["frequency"] = input.frequency;
  }
  if (input.kmsKeyId !== undefined) {
    bodyParams["kmsKeyId"] = input.kmsKeyId;
  }
  if (input.licenseType !== undefined) {
    bodyParams["licenseType"] = input.licenseType;
  }
  if (input.numberOfRecentAmisToKeep !== undefined) {
    bodyParams["numberOfRecentAmisToKeep"] = input.numberOfRecentAmisToKeep;
  }
  if (input.runOnce !== undefined) {
    bodyParams["runOnce"] = input.runOnce;
  }
  if (input.seedTime !== undefined) {
    bodyParams["seedTime"] = Math.round(input.seedTime.getTime() / 1000);
  }
  return bodyParams;
};

const serializeAws_json1_1StartAppReplicationRequest = (
  input: StartAppReplicationRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.appId !== undefined) {
    bodyParams["appId"] = input.appId;
  }
  return bodyParams;
};

const serializeAws_json1_1StartOnDemandReplicationRunRequest = (
  input: StartOnDemandReplicationRunRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.description !== undefined) {
    bodyParams["description"] = input.description;
  }
  if (input.replicationJobId !== undefined) {
    bodyParams["replicationJobId"] = input.replicationJobId;
  }
  return bodyParams;
};

const serializeAws_json1_1StopAppReplicationRequest = (
  input: StopAppReplicationRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.appId !== undefined) {
    bodyParams["appId"] = input.appId;
  }
  return bodyParams;
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  let bodyParams: any = {};
  if (input.key !== undefined) {
    bodyParams["key"] = input.key;
  }
  if (input.value !== undefined) {
    bodyParams["value"] = input.value;
  }
  return bodyParams;
};

const serializeAws_json1_1Tags = (
  input: Array<Tag>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => serializeAws_json1_1Tag(entry, context));
};

const serializeAws_json1_1TerminateAppRequest = (
  input: TerminateAppRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.appId !== undefined) {
    bodyParams["appId"] = input.appId;
  }
  return bodyParams;
};

const serializeAws_json1_1UpdateAppRequest = (
  input: UpdateAppRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.appId !== undefined) {
    bodyParams["appId"] = input.appId;
  }
  if (input.description !== undefined) {
    bodyParams["description"] = input.description;
  }
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  if (input.roleName !== undefined) {
    bodyParams["roleName"] = input.roleName;
  }
  if (input.serverGroups !== undefined) {
    bodyParams["serverGroups"] = serializeAws_json1_1ServerGroups(
      input.serverGroups,
      context
    );
  }
  if (input.tags !== undefined) {
    bodyParams["tags"] = serializeAws_json1_1Tags(input.tags, context);
  }
  return bodyParams;
};

const serializeAws_json1_1UpdateReplicationJobRequest = (
  input: UpdateReplicationJobRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.description !== undefined) {
    bodyParams["description"] = input.description;
  }
  if (input.encrypted !== undefined) {
    bodyParams["encrypted"] = input.encrypted;
  }
  if (input.frequency !== undefined) {
    bodyParams["frequency"] = input.frequency;
  }
  if (input.kmsKeyId !== undefined) {
    bodyParams["kmsKeyId"] = input.kmsKeyId;
  }
  if (input.licenseType !== undefined) {
    bodyParams["licenseType"] = input.licenseType;
  }
  if (input.nextReplicationRunStartTime !== undefined) {
    bodyParams["nextReplicationRunStartTime"] = Math.round(
      input.nextReplicationRunStartTime.getTime() / 1000
    );
  }
  if (input.numberOfRecentAmisToKeep !== undefined) {
    bodyParams["numberOfRecentAmisToKeep"] = input.numberOfRecentAmisToKeep;
  }
  if (input.replicationJobId !== undefined) {
    bodyParams["replicationJobId"] = input.replicationJobId;
  }
  if (input.roleName !== undefined) {
    bodyParams["roleName"] = input.roleName;
  }
  return bodyParams;
};

const serializeAws_json1_1UserData = (
  input: UserData,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.s3Location !== undefined) {
    bodyParams["s3Location"] = serializeAws_json1_1S3Location(
      input.s3Location,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1VmServer = (
  input: VmServer,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.vmManagerName !== undefined) {
    bodyParams["vmManagerName"] = input.vmManagerName;
  }
  if (input.vmManagerType !== undefined) {
    bodyParams["vmManagerType"] = input.vmManagerType;
  }
  if (input.vmName !== undefined) {
    bodyParams["vmName"] = input.vmName;
  }
  if (input.vmPath !== undefined) {
    bodyParams["vmPath"] = input.vmPath;
  }
  if (input.vmServerAddress !== undefined) {
    bodyParams["vmServerAddress"] = serializeAws_json1_1VmServerAddress(
      input.vmServerAddress,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1VmServerAddress = (
  input: VmServerAddress,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.vmId !== undefined) {
    bodyParams["vmId"] = input.vmId;
  }
  if (input.vmManagerId !== undefined) {
    bodyParams["vmManagerId"] = input.vmManagerId;
  }
  return bodyParams;
};

const serializeAws_json1_1VmServerAddressList = (
  input: Array<VmServerAddress>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_json1_1VmServerAddress(entry, context)
  );
};

const deserializeAws_json1_1AppSummary = (
  output: any,
  context: __SerdeContext
): AppSummary => {
  let contents: any = {
    __type: "AppSummary",
    appId: undefined,
    creationTime: undefined,
    description: undefined,
    lastModified: undefined,
    latestReplicationTime: undefined,
    launchDetails: undefined,
    launchStatus: undefined,
    launchStatusMessage: undefined,
    name: undefined,
    replicationStatus: undefined,
    replicationStatusMessage: undefined,
    roleName: undefined,
    status: undefined,
    statusMessage: undefined,
    totalServerGroups: undefined,
    totalServers: undefined
  };
  if (output.appId !== undefined) {
    contents.appId = output.appId;
  }
  if (output.creationTime !== undefined) {
    contents.creationTime = new Date(
      output.creationTime % 1 != 0
        ? Math.round(output.creationTime * 1000)
        : output.creationTime
    );
  }
  if (output.description !== undefined) {
    contents.description = output.description;
  }
  if (output.lastModified !== undefined) {
    contents.lastModified = new Date(
      output.lastModified % 1 != 0
        ? Math.round(output.lastModified * 1000)
        : output.lastModified
    );
  }
  if (output.latestReplicationTime !== undefined) {
    contents.latestReplicationTime = new Date(
      output.latestReplicationTime % 1 != 0
        ? Math.round(output.latestReplicationTime * 1000)
        : output.latestReplicationTime
    );
  }
  if (output.launchDetails !== undefined) {
    contents.launchDetails = deserializeAws_json1_1LaunchDetails(
      output.launchDetails,
      context
    );
  }
  if (output.launchStatus !== undefined) {
    contents.launchStatus = output.launchStatus;
  }
  if (output.launchStatusMessage !== undefined) {
    contents.launchStatusMessage = output.launchStatusMessage;
  }
  if (output.name !== undefined) {
    contents.name = output.name;
  }
  if (output.replicationStatus !== undefined) {
    contents.replicationStatus = output.replicationStatus;
  }
  if (output.replicationStatusMessage !== undefined) {
    contents.replicationStatusMessage = output.replicationStatusMessage;
  }
  if (output.roleName !== undefined) {
    contents.roleName = output.roleName;
  }
  if (output.status !== undefined) {
    contents.status = output.status;
  }
  if (output.statusMessage !== undefined) {
    contents.statusMessage = output.statusMessage;
  }
  if (output.totalServerGroups !== undefined) {
    contents.totalServerGroups = output.totalServerGroups;
  }
  if (output.totalServers !== undefined) {
    contents.totalServers = output.totalServers;
  }
  return contents;
};

const deserializeAws_json1_1Apps = (
  output: any,
  context: __SerdeContext
): Array<AppSummary> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1AppSummary(entry, context)
  );
};

const deserializeAws_json1_1Connector = (
  output: any,
  context: __SerdeContext
): Connector => {
  let contents: any = {
    __type: "Connector",
    associatedOn: undefined,
    capabilityList: undefined,
    connectorId: undefined,
    ipAddress: undefined,
    macAddress: undefined,
    status: undefined,
    version: undefined,
    vmManagerId: undefined,
    vmManagerName: undefined,
    vmManagerType: undefined
  };
  if (output.associatedOn !== undefined) {
    contents.associatedOn = new Date(
      output.associatedOn % 1 != 0
        ? Math.round(output.associatedOn * 1000)
        : output.associatedOn
    );
  }
  if (output.capabilityList !== undefined) {
    contents.capabilityList = deserializeAws_json1_1ConnectorCapabilityList(
      output.capabilityList,
      context
    );
  }
  if (output.connectorId !== undefined) {
    contents.connectorId = output.connectorId;
  }
  if (output.ipAddress !== undefined) {
    contents.ipAddress = output.ipAddress;
  }
  if (output.macAddress !== undefined) {
    contents.macAddress = output.macAddress;
  }
  if (output.status !== undefined) {
    contents.status = output.status;
  }
  if (output.version !== undefined) {
    contents.version = output.version;
  }
  if (output.vmManagerId !== undefined) {
    contents.vmManagerId = output.vmManagerId;
  }
  if (output.vmManagerName !== undefined) {
    contents.vmManagerName = output.vmManagerName;
  }
  if (output.vmManagerType !== undefined) {
    contents.vmManagerType = output.vmManagerType;
  }
  return contents;
};

const deserializeAws_json1_1ConnectorCapabilityList = (
  output: any,
  context: __SerdeContext
): Array<ConnectorCapability | string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1ConnectorList = (
  output: any,
  context: __SerdeContext
): Array<Connector> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Connector(entry, context)
  );
};

const deserializeAws_json1_1CreateAppResponse = (
  output: any,
  context: __SerdeContext
): CreateAppResponse => {
  let contents: any = {
    __type: "CreateAppResponse",
    appSummary: undefined,
    serverGroups: undefined,
    tags: undefined
  };
  if (output.appSummary !== undefined) {
    contents.appSummary = deserializeAws_json1_1AppSummary(
      output.appSummary,
      context
    );
  }
  if (output.serverGroups !== undefined) {
    contents.serverGroups = deserializeAws_json1_1ServerGroups(
      output.serverGroups,
      context
    );
  }
  if (output.tags !== undefined) {
    contents.tags = deserializeAws_json1_1Tags(output.tags, context);
  }
  return contents;
};

const deserializeAws_json1_1CreateReplicationJobResponse = (
  output: any,
  context: __SerdeContext
): CreateReplicationJobResponse => {
  let contents: any = {
    __type: "CreateReplicationJobResponse",
    replicationJobId: undefined
  };
  if (output.replicationJobId !== undefined) {
    contents.replicationJobId = output.replicationJobId;
  }
  return contents;
};

const deserializeAws_json1_1DeleteAppLaunchConfigurationResponse = (
  output: any,
  context: __SerdeContext
): DeleteAppLaunchConfigurationResponse => {
  let contents: any = {
    __type: "DeleteAppLaunchConfigurationResponse"
  };
  return contents;
};

const deserializeAws_json1_1DeleteAppReplicationConfigurationResponse = (
  output: any,
  context: __SerdeContext
): DeleteAppReplicationConfigurationResponse => {
  let contents: any = {
    __type: "DeleteAppReplicationConfigurationResponse"
  };
  return contents;
};

const deserializeAws_json1_1DeleteAppResponse = (
  output: any,
  context: __SerdeContext
): DeleteAppResponse => {
  let contents: any = {
    __type: "DeleteAppResponse"
  };
  return contents;
};

const deserializeAws_json1_1DeleteReplicationJobResponse = (
  output: any,
  context: __SerdeContext
): DeleteReplicationJobResponse => {
  let contents: any = {
    __type: "DeleteReplicationJobResponse"
  };
  return contents;
};

const deserializeAws_json1_1DeleteServerCatalogResponse = (
  output: any,
  context: __SerdeContext
): DeleteServerCatalogResponse => {
  let contents: any = {
    __type: "DeleteServerCatalogResponse"
  };
  return contents;
};

const deserializeAws_json1_1DisassociateConnectorResponse = (
  output: any,
  context: __SerdeContext
): DisassociateConnectorResponse => {
  let contents: any = {
    __type: "DisassociateConnectorResponse"
  };
  return contents;
};

const deserializeAws_json1_1GenerateChangeSetResponse = (
  output: any,
  context: __SerdeContext
): GenerateChangeSetResponse => {
  let contents: any = {
    __type: "GenerateChangeSetResponse",
    s3Location: undefined
  };
  if (output.s3Location !== undefined) {
    contents.s3Location = deserializeAws_json1_1S3Location(
      output.s3Location,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1GenerateTemplateResponse = (
  output: any,
  context: __SerdeContext
): GenerateTemplateResponse => {
  let contents: any = {
    __type: "GenerateTemplateResponse",
    s3Location: undefined
  };
  if (output.s3Location !== undefined) {
    contents.s3Location = deserializeAws_json1_1S3Location(
      output.s3Location,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1GetAppLaunchConfigurationResponse = (
  output: any,
  context: __SerdeContext
): GetAppLaunchConfigurationResponse => {
  let contents: any = {
    __type: "GetAppLaunchConfigurationResponse",
    appId: undefined,
    roleName: undefined,
    serverGroupLaunchConfigurations: undefined
  };
  if (output.appId !== undefined) {
    contents.appId = output.appId;
  }
  if (output.roleName !== undefined) {
    contents.roleName = output.roleName;
  }
  if (output.serverGroupLaunchConfigurations !== undefined) {
    contents.serverGroupLaunchConfigurations = deserializeAws_json1_1ServerGroupLaunchConfigurations(
      output.serverGroupLaunchConfigurations,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1GetAppReplicationConfigurationResponse = (
  output: any,
  context: __SerdeContext
): GetAppReplicationConfigurationResponse => {
  let contents: any = {
    __type: "GetAppReplicationConfigurationResponse",
    serverGroupReplicationConfigurations: undefined
  };
  if (output.serverGroupReplicationConfigurations !== undefined) {
    contents.serverGroupReplicationConfigurations = deserializeAws_json1_1ServerGroupReplicationConfigurations(
      output.serverGroupReplicationConfigurations,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1GetAppResponse = (
  output: any,
  context: __SerdeContext
): GetAppResponse => {
  let contents: any = {
    __type: "GetAppResponse",
    appSummary: undefined,
    serverGroups: undefined,
    tags: undefined
  };
  if (output.appSummary !== undefined) {
    contents.appSummary = deserializeAws_json1_1AppSummary(
      output.appSummary,
      context
    );
  }
  if (output.serverGroups !== undefined) {
    contents.serverGroups = deserializeAws_json1_1ServerGroups(
      output.serverGroups,
      context
    );
  }
  if (output.tags !== undefined) {
    contents.tags = deserializeAws_json1_1Tags(output.tags, context);
  }
  return contents;
};

const deserializeAws_json1_1GetConnectorsResponse = (
  output: any,
  context: __SerdeContext
): GetConnectorsResponse => {
  let contents: any = {
    __type: "GetConnectorsResponse",
    connectorList: undefined,
    nextToken: undefined
  };
  if (output.connectorList !== undefined) {
    contents.connectorList = deserializeAws_json1_1ConnectorList(
      output.connectorList,
      context
    );
  }
  if (output.nextToken !== undefined) {
    contents.nextToken = output.nextToken;
  }
  return contents;
};

const deserializeAws_json1_1GetReplicationJobsResponse = (
  output: any,
  context: __SerdeContext
): GetReplicationJobsResponse => {
  let contents: any = {
    __type: "GetReplicationJobsResponse",
    nextToken: undefined,
    replicationJobList: undefined
  };
  if (output.nextToken !== undefined) {
    contents.nextToken = output.nextToken;
  }
  if (output.replicationJobList !== undefined) {
    contents.replicationJobList = deserializeAws_json1_1ReplicationJobList(
      output.replicationJobList,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1GetReplicationRunsResponse = (
  output: any,
  context: __SerdeContext
): GetReplicationRunsResponse => {
  let contents: any = {
    __type: "GetReplicationRunsResponse",
    nextToken: undefined,
    replicationJob: undefined,
    replicationRunList: undefined
  };
  if (output.nextToken !== undefined) {
    contents.nextToken = output.nextToken;
  }
  if (output.replicationJob !== undefined) {
    contents.replicationJob = deserializeAws_json1_1ReplicationJob(
      output.replicationJob,
      context
    );
  }
  if (output.replicationRunList !== undefined) {
    contents.replicationRunList = deserializeAws_json1_1ReplicationRunList(
      output.replicationRunList,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1GetServersResponse = (
  output: any,
  context: __SerdeContext
): GetServersResponse => {
  let contents: any = {
    __type: "GetServersResponse",
    lastModifiedOn: undefined,
    nextToken: undefined,
    serverCatalogStatus: undefined,
    serverList: undefined
  };
  if (output.lastModifiedOn !== undefined) {
    contents.lastModifiedOn = new Date(
      output.lastModifiedOn % 1 != 0
        ? Math.round(output.lastModifiedOn * 1000)
        : output.lastModifiedOn
    );
  }
  if (output.nextToken !== undefined) {
    contents.nextToken = output.nextToken;
  }
  if (output.serverCatalogStatus !== undefined) {
    contents.serverCatalogStatus = output.serverCatalogStatus;
  }
  if (output.serverList !== undefined) {
    contents.serverList = deserializeAws_json1_1ServerList(
      output.serverList,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ImportServerCatalogResponse = (
  output: any,
  context: __SerdeContext
): ImportServerCatalogResponse => {
  let contents: any = {
    __type: "ImportServerCatalogResponse"
  };
  return contents;
};

const deserializeAws_json1_1InternalError = (
  output: any,
  context: __SerdeContext
): InternalError => {
  let contents: any = {
    __type: "InternalError",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidParameterException = (
  output: any,
  context: __SerdeContext
): InvalidParameterException => {
  let contents: any = {
    __type: "InvalidParameterException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1LaunchAppResponse = (
  output: any,
  context: __SerdeContext
): LaunchAppResponse => {
  let contents: any = {
    __type: "LaunchAppResponse"
  };
  return contents;
};

const deserializeAws_json1_1LaunchDetails = (
  output: any,
  context: __SerdeContext
): LaunchDetails => {
  let contents: any = {
    __type: "LaunchDetails",
    latestLaunchTime: undefined,
    stackId: undefined,
    stackName: undefined
  };
  if (output.latestLaunchTime !== undefined) {
    contents.latestLaunchTime = new Date(
      output.latestLaunchTime % 1 != 0
        ? Math.round(output.latestLaunchTime * 1000)
        : output.latestLaunchTime
    );
  }
  if (output.stackId !== undefined) {
    contents.stackId = output.stackId;
  }
  if (output.stackName !== undefined) {
    contents.stackName = output.stackName;
  }
  return contents;
};

const deserializeAws_json1_1ListAppsResponse = (
  output: any,
  context: __SerdeContext
): ListAppsResponse => {
  let contents: any = {
    __type: "ListAppsResponse",
    apps: undefined,
    nextToken: undefined
  };
  if (output.apps !== undefined) {
    contents.apps = deserializeAws_json1_1Apps(output.apps, context);
  }
  if (output.nextToken !== undefined) {
    contents.nextToken = output.nextToken;
  }
  return contents;
};

const deserializeAws_json1_1MissingRequiredParameterException = (
  output: any,
  context: __SerdeContext
): MissingRequiredParameterException => {
  let contents: any = {
    __type: "MissingRequiredParameterException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1NoConnectorsAvailableException = (
  output: any,
  context: __SerdeContext
): NoConnectorsAvailableException => {
  let contents: any = {
    __type: "NoConnectorsAvailableException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1OperationNotPermittedException = (
  output: any,
  context: __SerdeContext
): OperationNotPermittedException => {
  let contents: any = {
    __type: "OperationNotPermittedException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1PutAppLaunchConfigurationResponse = (
  output: any,
  context: __SerdeContext
): PutAppLaunchConfigurationResponse => {
  let contents: any = {
    __type: "PutAppLaunchConfigurationResponse"
  };
  return contents;
};

const deserializeAws_json1_1PutAppReplicationConfigurationResponse = (
  output: any,
  context: __SerdeContext
): PutAppReplicationConfigurationResponse => {
  let contents: any = {
    __type: "PutAppReplicationConfigurationResponse"
  };
  return contents;
};

const deserializeAws_json1_1ReplicationJob = (
  output: any,
  context: __SerdeContext
): ReplicationJob => {
  let contents: any = {
    __type: "ReplicationJob",
    description: undefined,
    encrypted: undefined,
    frequency: undefined,
    kmsKeyId: undefined,
    latestAmiId: undefined,
    licenseType: undefined,
    nextReplicationRunStartTime: undefined,
    numberOfRecentAmisToKeep: undefined,
    replicationJobId: undefined,
    replicationRunList: undefined,
    roleName: undefined,
    runOnce: undefined,
    seedReplicationTime: undefined,
    serverId: undefined,
    serverType: undefined,
    state: undefined,
    statusMessage: undefined,
    vmServer: undefined
  };
  if (output.description !== undefined) {
    contents.description = output.description;
  }
  if (output.encrypted !== undefined) {
    contents.encrypted = output.encrypted;
  }
  if (output.frequency !== undefined) {
    contents.frequency = output.frequency;
  }
  if (output.kmsKeyId !== undefined) {
    contents.kmsKeyId = output.kmsKeyId;
  }
  if (output.latestAmiId !== undefined) {
    contents.latestAmiId = output.latestAmiId;
  }
  if (output.licenseType !== undefined) {
    contents.licenseType = output.licenseType;
  }
  if (output.nextReplicationRunStartTime !== undefined) {
    contents.nextReplicationRunStartTime = new Date(
      output.nextReplicationRunStartTime % 1 != 0
        ? Math.round(output.nextReplicationRunStartTime * 1000)
        : output.nextReplicationRunStartTime
    );
  }
  if (output.numberOfRecentAmisToKeep !== undefined) {
    contents.numberOfRecentAmisToKeep = output.numberOfRecentAmisToKeep;
  }
  if (output.replicationJobId !== undefined) {
    contents.replicationJobId = output.replicationJobId;
  }
  if (output.replicationRunList !== undefined) {
    contents.replicationRunList = deserializeAws_json1_1ReplicationRunList(
      output.replicationRunList,
      context
    );
  }
  if (output.roleName !== undefined) {
    contents.roleName = output.roleName;
  }
  if (output.runOnce !== undefined) {
    contents.runOnce = output.runOnce;
  }
  if (output.seedReplicationTime !== undefined) {
    contents.seedReplicationTime = new Date(
      output.seedReplicationTime % 1 != 0
        ? Math.round(output.seedReplicationTime * 1000)
        : output.seedReplicationTime
    );
  }
  if (output.serverId !== undefined) {
    contents.serverId = output.serverId;
  }
  if (output.serverType !== undefined) {
    contents.serverType = output.serverType;
  }
  if (output.state !== undefined) {
    contents.state = output.state;
  }
  if (output.statusMessage !== undefined) {
    contents.statusMessage = output.statusMessage;
  }
  if (output.vmServer !== undefined) {
    contents.vmServer = deserializeAws_json1_1VmServer(
      output.vmServer,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ReplicationJobAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): ReplicationJobAlreadyExistsException => {
  let contents: any = {
    __type: "ReplicationJobAlreadyExistsException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1ReplicationJobList = (
  output: any,
  context: __SerdeContext
): Array<ReplicationJob> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ReplicationJob(entry, context)
  );
};

const deserializeAws_json1_1ReplicationJobNotFoundException = (
  output: any,
  context: __SerdeContext
): ReplicationJobNotFoundException => {
  let contents: any = {
    __type: "ReplicationJobNotFoundException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1ReplicationRun = (
  output: any,
  context: __SerdeContext
): ReplicationRun => {
  let contents: any = {
    __type: "ReplicationRun",
    amiId: undefined,
    completedTime: undefined,
    description: undefined,
    encrypted: undefined,
    kmsKeyId: undefined,
    replicationRunId: undefined,
    scheduledStartTime: undefined,
    stageDetails: undefined,
    state: undefined,
    statusMessage: undefined,
    type: undefined
  };
  if (output.amiId !== undefined) {
    contents.amiId = output.amiId;
  }
  if (output.completedTime !== undefined) {
    contents.completedTime = new Date(
      output.completedTime % 1 != 0
        ? Math.round(output.completedTime * 1000)
        : output.completedTime
    );
  }
  if (output.description !== undefined) {
    contents.description = output.description;
  }
  if (output.encrypted !== undefined) {
    contents.encrypted = output.encrypted;
  }
  if (output.kmsKeyId !== undefined) {
    contents.kmsKeyId = output.kmsKeyId;
  }
  if (output.replicationRunId !== undefined) {
    contents.replicationRunId = output.replicationRunId;
  }
  if (output.scheduledStartTime !== undefined) {
    contents.scheduledStartTime = new Date(
      output.scheduledStartTime % 1 != 0
        ? Math.round(output.scheduledStartTime * 1000)
        : output.scheduledStartTime
    );
  }
  if (output.stageDetails !== undefined) {
    contents.stageDetails = deserializeAws_json1_1ReplicationRunStageDetails(
      output.stageDetails,
      context
    );
  }
  if (output.state !== undefined) {
    contents.state = output.state;
  }
  if (output.statusMessage !== undefined) {
    contents.statusMessage = output.statusMessage;
  }
  if (output.type !== undefined) {
    contents.type = output.type;
  }
  return contents;
};

const deserializeAws_json1_1ReplicationRunLimitExceededException = (
  output: any,
  context: __SerdeContext
): ReplicationRunLimitExceededException => {
  let contents: any = {
    __type: "ReplicationRunLimitExceededException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1ReplicationRunList = (
  output: any,
  context: __SerdeContext
): Array<ReplicationRun> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ReplicationRun(entry, context)
  );
};

const deserializeAws_json1_1ReplicationRunStageDetails = (
  output: any,
  context: __SerdeContext
): ReplicationRunStageDetails => {
  let contents: any = {
    __type: "ReplicationRunStageDetails",
    stage: undefined,
    stageProgress: undefined
  };
  if (output.stage !== undefined) {
    contents.stage = output.stage;
  }
  if (output.stageProgress !== undefined) {
    contents.stageProgress = output.stageProgress;
  }
  return contents;
};

const deserializeAws_json1_1S3Location = (
  output: any,
  context: __SerdeContext
): S3Location => {
  let contents: any = {
    __type: "S3Location",
    bucket: undefined,
    key: undefined
  };
  if (output.bucket !== undefined) {
    contents.bucket = output.bucket;
  }
  if (output.key !== undefined) {
    contents.key = output.key;
  }
  return contents;
};

const deserializeAws_json1_1Server = (
  output: any,
  context: __SerdeContext
): Server => {
  let contents: any = {
    __type: "Server",
    replicationJobId: undefined,
    replicationJobTerminated: undefined,
    serverId: undefined,
    serverType: undefined,
    vmServer: undefined
  };
  if (output.replicationJobId !== undefined) {
    contents.replicationJobId = output.replicationJobId;
  }
  if (output.replicationJobTerminated !== undefined) {
    contents.replicationJobTerminated = output.replicationJobTerminated;
  }
  if (output.serverId !== undefined) {
    contents.serverId = output.serverId;
  }
  if (output.serverType !== undefined) {
    contents.serverType = output.serverType;
  }
  if (output.vmServer !== undefined) {
    contents.vmServer = deserializeAws_json1_1VmServer(
      output.vmServer,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ServerCannotBeReplicatedException = (
  output: any,
  context: __SerdeContext
): ServerCannotBeReplicatedException => {
  let contents: any = {
    __type: "ServerCannotBeReplicatedException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1ServerGroup = (
  output: any,
  context: __SerdeContext
): ServerGroup => {
  let contents: any = {
    __type: "ServerGroup",
    name: undefined,
    serverGroupId: undefined,
    serverList: undefined
  };
  if (output.name !== undefined) {
    contents.name = output.name;
  }
  if (output.serverGroupId !== undefined) {
    contents.serverGroupId = output.serverGroupId;
  }
  if (output.serverList !== undefined) {
    contents.serverList = deserializeAws_json1_1ServerList(
      output.serverList,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ServerGroupLaunchConfiguration = (
  output: any,
  context: __SerdeContext
): ServerGroupLaunchConfiguration => {
  let contents: any = {
    __type: "ServerGroupLaunchConfiguration",
    launchOrder: undefined,
    serverGroupId: undefined,
    serverLaunchConfigurations: undefined
  };
  if (output.launchOrder !== undefined) {
    contents.launchOrder = output.launchOrder;
  }
  if (output.serverGroupId !== undefined) {
    contents.serverGroupId = output.serverGroupId;
  }
  if (output.serverLaunchConfigurations !== undefined) {
    contents.serverLaunchConfigurations = deserializeAws_json1_1ServerLaunchConfigurations(
      output.serverLaunchConfigurations,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ServerGroupLaunchConfigurations = (
  output: any,
  context: __SerdeContext
): Array<ServerGroupLaunchConfiguration> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ServerGroupLaunchConfiguration(entry, context)
  );
};

const deserializeAws_json1_1ServerGroupReplicationConfiguration = (
  output: any,
  context: __SerdeContext
): ServerGroupReplicationConfiguration => {
  let contents: any = {
    __type: "ServerGroupReplicationConfiguration",
    serverGroupId: undefined,
    serverReplicationConfigurations: undefined
  };
  if (output.serverGroupId !== undefined) {
    contents.serverGroupId = output.serverGroupId;
  }
  if (output.serverReplicationConfigurations !== undefined) {
    contents.serverReplicationConfigurations = deserializeAws_json1_1ServerReplicationConfigurations(
      output.serverReplicationConfigurations,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ServerGroupReplicationConfigurations = (
  output: any,
  context: __SerdeContext
): Array<ServerGroupReplicationConfiguration> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ServerGroupReplicationConfiguration(entry, context)
  );
};

const deserializeAws_json1_1ServerGroups = (
  output: any,
  context: __SerdeContext
): Array<ServerGroup> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ServerGroup(entry, context)
  );
};

const deserializeAws_json1_1ServerLaunchConfiguration = (
  output: any,
  context: __SerdeContext
): ServerLaunchConfiguration => {
  let contents: any = {
    __type: "ServerLaunchConfiguration",
    associatePublicIpAddress: undefined,
    ec2KeyName: undefined,
    instanceType: undefined,
    logicalId: undefined,
    securityGroup: undefined,
    server: undefined,
    subnet: undefined,
    userData: undefined,
    vpc: undefined
  };
  if (output.associatePublicIpAddress !== undefined) {
    contents.associatePublicIpAddress = output.associatePublicIpAddress;
  }
  if (output.ec2KeyName !== undefined) {
    contents.ec2KeyName = output.ec2KeyName;
  }
  if (output.instanceType !== undefined) {
    contents.instanceType = output.instanceType;
  }
  if (output.logicalId !== undefined) {
    contents.logicalId = output.logicalId;
  }
  if (output.securityGroup !== undefined) {
    contents.securityGroup = output.securityGroup;
  }
  if (output.server !== undefined) {
    contents.server = deserializeAws_json1_1Server(output.server, context);
  }
  if (output.subnet !== undefined) {
    contents.subnet = output.subnet;
  }
  if (output.userData !== undefined) {
    contents.userData = deserializeAws_json1_1UserData(
      output.userData,
      context
    );
  }
  if (output.vpc !== undefined) {
    contents.vpc = output.vpc;
  }
  return contents;
};

const deserializeAws_json1_1ServerLaunchConfigurations = (
  output: any,
  context: __SerdeContext
): Array<ServerLaunchConfiguration> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ServerLaunchConfiguration(entry, context)
  );
};

const deserializeAws_json1_1ServerList = (
  output: any,
  context: __SerdeContext
): Array<Server> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Server(entry, context)
  );
};

const deserializeAws_json1_1ServerReplicationConfiguration = (
  output: any,
  context: __SerdeContext
): ServerReplicationConfiguration => {
  let contents: any = {
    __type: "ServerReplicationConfiguration",
    server: undefined,
    serverReplicationParameters: undefined
  };
  if (output.server !== undefined) {
    contents.server = deserializeAws_json1_1Server(output.server, context);
  }
  if (output.serverReplicationParameters !== undefined) {
    contents.serverReplicationParameters = deserializeAws_json1_1ServerReplicationParameters(
      output.serverReplicationParameters,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ServerReplicationConfigurations = (
  output: any,
  context: __SerdeContext
): Array<ServerReplicationConfiguration> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ServerReplicationConfiguration(entry, context)
  );
};

const deserializeAws_json1_1ServerReplicationParameters = (
  output: any,
  context: __SerdeContext
): ServerReplicationParameters => {
  let contents: any = {
    __type: "ServerReplicationParameters",
    encrypted: undefined,
    frequency: undefined,
    kmsKeyId: undefined,
    licenseType: undefined,
    numberOfRecentAmisToKeep: undefined,
    runOnce: undefined,
    seedTime: undefined
  };
  if (output.encrypted !== undefined) {
    contents.encrypted = output.encrypted;
  }
  if (output.frequency !== undefined) {
    contents.frequency = output.frequency;
  }
  if (output.kmsKeyId !== undefined) {
    contents.kmsKeyId = output.kmsKeyId;
  }
  if (output.licenseType !== undefined) {
    contents.licenseType = output.licenseType;
  }
  if (output.numberOfRecentAmisToKeep !== undefined) {
    contents.numberOfRecentAmisToKeep = output.numberOfRecentAmisToKeep;
  }
  if (output.runOnce !== undefined) {
    contents.runOnce = output.runOnce;
  }
  if (output.seedTime !== undefined) {
    contents.seedTime = new Date(
      output.seedTime % 1 != 0
        ? Math.round(output.seedTime * 1000)
        : output.seedTime
    );
  }
  return contents;
};

const deserializeAws_json1_1StartAppReplicationResponse = (
  output: any,
  context: __SerdeContext
): StartAppReplicationResponse => {
  let contents: any = {
    __type: "StartAppReplicationResponse"
  };
  return contents;
};

const deserializeAws_json1_1StartOnDemandReplicationRunResponse = (
  output: any,
  context: __SerdeContext
): StartOnDemandReplicationRunResponse => {
  let contents: any = {
    __type: "StartOnDemandReplicationRunResponse",
    replicationRunId: undefined
  };
  if (output.replicationRunId !== undefined) {
    contents.replicationRunId = output.replicationRunId;
  }
  return contents;
};

const deserializeAws_json1_1StopAppReplicationResponse = (
  output: any,
  context: __SerdeContext
): StopAppReplicationResponse => {
  let contents: any = {
    __type: "StopAppReplicationResponse"
  };
  return contents;
};

const deserializeAws_json1_1Tag = (
  output: any,
  context: __SerdeContext
): Tag => {
  let contents: any = {
    __type: "Tag",
    key: undefined,
    value: undefined
  };
  if (output.key !== undefined) {
    contents.key = output.key;
  }
  if (output.value !== undefined) {
    contents.value = output.value;
  }
  return contents;
};

const deserializeAws_json1_1Tags = (
  output: any,
  context: __SerdeContext
): Array<Tag> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Tag(entry, context)
  );
};

const deserializeAws_json1_1TemporarilyUnavailableException = (
  output: any,
  context: __SerdeContext
): TemporarilyUnavailableException => {
  let contents: any = {
    __type: "TemporarilyUnavailableException"
  };
  return contents;
};

const deserializeAws_json1_1TerminateAppResponse = (
  output: any,
  context: __SerdeContext
): TerminateAppResponse => {
  let contents: any = {
    __type: "TerminateAppResponse"
  };
  return contents;
};

const deserializeAws_json1_1UnauthorizedOperationException = (
  output: any,
  context: __SerdeContext
): UnauthorizedOperationException => {
  let contents: any = {
    __type: "UnauthorizedOperationException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1UpdateAppResponse = (
  output: any,
  context: __SerdeContext
): UpdateAppResponse => {
  let contents: any = {
    __type: "UpdateAppResponse",
    appSummary: undefined,
    serverGroups: undefined,
    tags: undefined
  };
  if (output.appSummary !== undefined) {
    contents.appSummary = deserializeAws_json1_1AppSummary(
      output.appSummary,
      context
    );
  }
  if (output.serverGroups !== undefined) {
    contents.serverGroups = deserializeAws_json1_1ServerGroups(
      output.serverGroups,
      context
    );
  }
  if (output.tags !== undefined) {
    contents.tags = deserializeAws_json1_1Tags(output.tags, context);
  }
  return contents;
};

const deserializeAws_json1_1UpdateReplicationJobResponse = (
  output: any,
  context: __SerdeContext
): UpdateReplicationJobResponse => {
  let contents: any = {
    __type: "UpdateReplicationJobResponse"
  };
  return contents;
};

const deserializeAws_json1_1UserData = (
  output: any,
  context: __SerdeContext
): UserData => {
  let contents: any = {
    __type: "UserData",
    s3Location: undefined
  };
  if (output.s3Location !== undefined) {
    contents.s3Location = deserializeAws_json1_1S3Location(
      output.s3Location,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1VmServer = (
  output: any,
  context: __SerdeContext
): VmServer => {
  let contents: any = {
    __type: "VmServer",
    vmManagerName: undefined,
    vmManagerType: undefined,
    vmName: undefined,
    vmPath: undefined,
    vmServerAddress: undefined
  };
  if (output.vmManagerName !== undefined) {
    contents.vmManagerName = output.vmManagerName;
  }
  if (output.vmManagerType !== undefined) {
    contents.vmManagerType = output.vmManagerType;
  }
  if (output.vmName !== undefined) {
    contents.vmName = output.vmName;
  }
  if (output.vmPath !== undefined) {
    contents.vmPath = output.vmPath;
  }
  if (output.vmServerAddress !== undefined) {
    contents.vmServerAddress = deserializeAws_json1_1VmServerAddress(
      output.vmServerAddress,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1VmServerAddress = (
  output: any,
  context: __SerdeContext
): VmServerAddress => {
  let contents: any = {
    __type: "VmServerAddress",
    vmId: undefined,
    vmManagerId: undefined
  };
  if (output.vmId !== undefined) {
    contents.vmId = output.vmId;
  }
  if (output.vmManagerId !== undefined) {
    contents.vmManagerId = output.vmManagerId;
  }
  return contents;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (
  streamBody: any,
  context: __SerdeContext
): Promise<Uint8Array> => {
  return context.streamCollector(streamBody) || new Uint8Array();
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (
  streamBody: any,
  context: __SerdeContext
): Promise<string> => {
  return collectBody(streamBody, context).then(body =>
    context.utf8Encoder(body)
  );
};

const parseBody = (streamBody: any, context: __SerdeContext): any => {
  return collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
};
