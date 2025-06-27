// smithy-typescript generated code
import { loadRestJsonErrorCode, parseJsonBody as parseBody, parseJsonErrorBody as parseErrorBody } from "@aws-sdk/core";
import { requestBuilder as rb } from "@smithy/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  limitedParseFloat32 as __limitedParseFloat32,
  map,
  resolvedPath as __resolvedPath,
  strictParseLong as __strictParseLong,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";
import { v4 as generateIdempotencyToken } from "uuid";

import { ArchiveApplicationCommandInput, ArchiveApplicationCommandOutput } from "../commands/ArchiveApplicationCommand";
import { ArchiveWaveCommandInput, ArchiveWaveCommandOutput } from "../commands/ArchiveWaveCommand";
import {
  AssociateApplicationsCommandInput,
  AssociateApplicationsCommandOutput,
} from "../commands/AssociateApplicationsCommand";
import {
  AssociateSourceServersCommandInput,
  AssociateSourceServersCommandOutput,
} from "../commands/AssociateSourceServersCommand";
import {
  ChangeServerLifeCycleStateCommandInput,
  ChangeServerLifeCycleStateCommandOutput,
} from "../commands/ChangeServerLifeCycleStateCommand";
import { CreateApplicationCommandInput, CreateApplicationCommandOutput } from "../commands/CreateApplicationCommand";
import { CreateConnectorCommandInput, CreateConnectorCommandOutput } from "../commands/CreateConnectorCommand";
import {
  CreateLaunchConfigurationTemplateCommandInput,
  CreateLaunchConfigurationTemplateCommandOutput,
} from "../commands/CreateLaunchConfigurationTemplateCommand";
import {
  CreateReplicationConfigurationTemplateCommandInput,
  CreateReplicationConfigurationTemplateCommandOutput,
} from "../commands/CreateReplicationConfigurationTemplateCommand";
import { CreateWaveCommandInput, CreateWaveCommandOutput } from "../commands/CreateWaveCommand";
import { DeleteApplicationCommandInput, DeleteApplicationCommandOutput } from "../commands/DeleteApplicationCommand";
import { DeleteConnectorCommandInput, DeleteConnectorCommandOutput } from "../commands/DeleteConnectorCommand";
import { DeleteJobCommandInput, DeleteJobCommandOutput } from "../commands/DeleteJobCommand";
import {
  DeleteLaunchConfigurationTemplateCommandInput,
  DeleteLaunchConfigurationTemplateCommandOutput,
} from "../commands/DeleteLaunchConfigurationTemplateCommand";
import {
  DeleteReplicationConfigurationTemplateCommandInput,
  DeleteReplicationConfigurationTemplateCommandOutput,
} from "../commands/DeleteReplicationConfigurationTemplateCommand";
import { DeleteSourceServerCommandInput, DeleteSourceServerCommandOutput } from "../commands/DeleteSourceServerCommand";
import {
  DeleteVcenterClientCommandInput,
  DeleteVcenterClientCommandOutput,
} from "../commands/DeleteVcenterClientCommand";
import { DeleteWaveCommandInput, DeleteWaveCommandOutput } from "../commands/DeleteWaveCommand";
import {
  DescribeJobLogItemsCommandInput,
  DescribeJobLogItemsCommandOutput,
} from "../commands/DescribeJobLogItemsCommand";
import { DescribeJobsCommandInput, DescribeJobsCommandOutput } from "../commands/DescribeJobsCommand";
import {
  DescribeLaunchConfigurationTemplatesCommandInput,
  DescribeLaunchConfigurationTemplatesCommandOutput,
} from "../commands/DescribeLaunchConfigurationTemplatesCommand";
import {
  DescribeReplicationConfigurationTemplatesCommandInput,
  DescribeReplicationConfigurationTemplatesCommandOutput,
} from "../commands/DescribeReplicationConfigurationTemplatesCommand";
import {
  DescribeSourceServersCommandInput,
  DescribeSourceServersCommandOutput,
} from "../commands/DescribeSourceServersCommand";
import {
  DescribeVcenterClientsCommandInput,
  DescribeVcenterClientsCommandOutput,
} from "../commands/DescribeVcenterClientsCommand";
import {
  DisassociateApplicationsCommandInput,
  DisassociateApplicationsCommandOutput,
} from "../commands/DisassociateApplicationsCommand";
import {
  DisassociateSourceServersCommandInput,
  DisassociateSourceServersCommandOutput,
} from "../commands/DisassociateSourceServersCommand";
import {
  DisconnectFromServiceCommandInput,
  DisconnectFromServiceCommandOutput,
} from "../commands/DisconnectFromServiceCommand";
import { FinalizeCutoverCommandInput, FinalizeCutoverCommandOutput } from "../commands/FinalizeCutoverCommand";
import {
  GetLaunchConfigurationCommandInput,
  GetLaunchConfigurationCommandOutput,
} from "../commands/GetLaunchConfigurationCommand";
import {
  GetReplicationConfigurationCommandInput,
  GetReplicationConfigurationCommandOutput,
} from "../commands/GetReplicationConfigurationCommand";
import { InitializeServiceCommandInput, InitializeServiceCommandOutput } from "../commands/InitializeServiceCommand";
import { ListApplicationsCommandInput, ListApplicationsCommandOutput } from "../commands/ListApplicationsCommand";
import { ListConnectorsCommandInput, ListConnectorsCommandOutput } from "../commands/ListConnectorsCommand";
import { ListExportErrorsCommandInput, ListExportErrorsCommandOutput } from "../commands/ListExportErrorsCommand";
import { ListExportsCommandInput, ListExportsCommandOutput } from "../commands/ListExportsCommand";
import { ListImportErrorsCommandInput, ListImportErrorsCommandOutput } from "../commands/ListImportErrorsCommand";
import { ListImportsCommandInput, ListImportsCommandOutput } from "../commands/ListImportsCommand";
import {
  ListManagedAccountsCommandInput,
  ListManagedAccountsCommandOutput,
} from "../commands/ListManagedAccountsCommand";
import {
  ListSourceServerActionsCommandInput,
  ListSourceServerActionsCommandOutput,
} from "../commands/ListSourceServerActionsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  ListTemplateActionsCommandInput,
  ListTemplateActionsCommandOutput,
} from "../commands/ListTemplateActionsCommand";
import { ListWavesCommandInput, ListWavesCommandOutput } from "../commands/ListWavesCommand";
import { MarkAsArchivedCommandInput, MarkAsArchivedCommandOutput } from "../commands/MarkAsArchivedCommand";
import { PauseReplicationCommandInput, PauseReplicationCommandOutput } from "../commands/PauseReplicationCommand";
import {
  PutSourceServerActionCommandInput,
  PutSourceServerActionCommandOutput,
} from "../commands/PutSourceServerActionCommand";
import { PutTemplateActionCommandInput, PutTemplateActionCommandOutput } from "../commands/PutTemplateActionCommand";
import {
  RemoveSourceServerActionCommandInput,
  RemoveSourceServerActionCommandOutput,
} from "../commands/RemoveSourceServerActionCommand";
import {
  RemoveTemplateActionCommandInput,
  RemoveTemplateActionCommandOutput,
} from "../commands/RemoveTemplateActionCommand";
import { ResumeReplicationCommandInput, ResumeReplicationCommandOutput } from "../commands/ResumeReplicationCommand";
import {
  RetryDataReplicationCommandInput,
  RetryDataReplicationCommandOutput,
} from "../commands/RetryDataReplicationCommand";
import { StartCutoverCommandInput, StartCutoverCommandOutput } from "../commands/StartCutoverCommand";
import { StartExportCommandInput, StartExportCommandOutput } from "../commands/StartExportCommand";
import { StartImportCommandInput, StartImportCommandOutput } from "../commands/StartImportCommand";
import { StartReplicationCommandInput, StartReplicationCommandOutput } from "../commands/StartReplicationCommand";
import { StartTestCommandInput, StartTestCommandOutput } from "../commands/StartTestCommand";
import { StopReplicationCommandInput, StopReplicationCommandOutput } from "../commands/StopReplicationCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import {
  TerminateTargetInstancesCommandInput,
  TerminateTargetInstancesCommandOutput,
} from "../commands/TerminateTargetInstancesCommand";
import {
  UnarchiveApplicationCommandInput,
  UnarchiveApplicationCommandOutput,
} from "../commands/UnarchiveApplicationCommand";
import { UnarchiveWaveCommandInput, UnarchiveWaveCommandOutput } from "../commands/UnarchiveWaveCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateApplicationCommandInput, UpdateApplicationCommandOutput } from "../commands/UpdateApplicationCommand";
import { UpdateConnectorCommandInput, UpdateConnectorCommandOutput } from "../commands/UpdateConnectorCommand";
import {
  UpdateLaunchConfigurationCommandInput,
  UpdateLaunchConfigurationCommandOutput,
} from "../commands/UpdateLaunchConfigurationCommand";
import {
  UpdateLaunchConfigurationTemplateCommandInput,
  UpdateLaunchConfigurationTemplateCommandOutput,
} from "../commands/UpdateLaunchConfigurationTemplateCommand";
import {
  UpdateReplicationConfigurationCommandInput,
  UpdateReplicationConfigurationCommandOutput,
} from "../commands/UpdateReplicationConfigurationCommand";
import {
  UpdateReplicationConfigurationTemplateCommandInput,
  UpdateReplicationConfigurationTemplateCommandOutput,
} from "../commands/UpdateReplicationConfigurationTemplateCommand";
import { UpdateSourceServerCommandInput, UpdateSourceServerCommandOutput } from "../commands/UpdateSourceServerCommand";
import {
  UpdateSourceServerReplicationTypeCommandInput,
  UpdateSourceServerReplicationTypeCommandOutput,
} from "../commands/UpdateSourceServerReplicationTypeCommand";
import { UpdateWaveCommandInput, UpdateWaveCommandOutput } from "../commands/UpdateWaveCommand";
import { MgnServiceException as __BaseException } from "../models/MgnServiceException";
import {
  AccessDeniedException,
  ChangeServerLifeCycleStateSourceServerLifecycle,
  ConflictException,
  ConnectorSsmCommandConfig,
  DescribeJobsRequestFilters,
  DescribeSourceServersRequestFilters,
  ExportTask,
  ImportTask,
  InternalServerException,
  Job,
  LaunchTemplateDiskConf,
  Licensing,
  LifeCycleState,
  ListApplicationsRequestFilters,
  ListConnectorsRequestFilters,
  ListExportsRequestFilters,
  ListImportsRequestFilters,
  ListWavesRequestFilters,
  PostLaunchActions,
  ReplicationConfigurationReplicatedDisk,
  ReplicationType,
  ResourceNotFoundException,
  S3BucketSource,
  ServiceQuotaExceededException,
  SourceServerActionsRequestFilters,
  SourceServerConnectorAction,
  SsmDocument,
  SsmExternalParameter,
  SsmParameterStoreParameter,
  TemplateActionsRequestFilters,
  ThrottlingException,
  UninitializedAccountException,
  ValidationException,
} from "../models/models_0";

/**
 * serializeAws_restJson1ArchiveApplicationCommand
 */
export const se_ArchiveApplicationCommand = async (
  input: ArchiveApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/ArchiveApplication");
  let body: any;
  body = JSON.stringify(
    take(input, {
      accountID: [],
      applicationID: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ArchiveWaveCommand
 */
export const se_ArchiveWaveCommand = async (
  input: ArchiveWaveCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/ArchiveWave");
  let body: any;
  body = JSON.stringify(
    take(input, {
      accountID: [],
      waveID: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1AssociateApplicationsCommand
 */
export const se_AssociateApplicationsCommand = async (
  input: AssociateApplicationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/AssociateApplications");
  let body: any;
  body = JSON.stringify(
    take(input, {
      accountID: [],
      applicationIDs: (_) => _json(_),
      waveID: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1AssociateSourceServersCommand
 */
export const se_AssociateSourceServersCommand = async (
  input: AssociateSourceServersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/AssociateSourceServers");
  let body: any;
  body = JSON.stringify(
    take(input, {
      accountID: [],
      applicationID: [],
      sourceServerIDs: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ChangeServerLifeCycleStateCommand
 */
export const se_ChangeServerLifeCycleStateCommand = async (
  input: ChangeServerLifeCycleStateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/ChangeServerLifeCycleState");
  let body: any;
  body = JSON.stringify(
    take(input, {
      accountID: [],
      lifeCycle: (_) => _json(_),
      sourceServerID: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateApplicationCommand
 */
export const se_CreateApplicationCommand = async (
  input: CreateApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/CreateApplication");
  let body: any;
  body = JSON.stringify(
    take(input, {
      accountID: [],
      description: [],
      name: [],
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateConnectorCommand
 */
export const se_CreateConnectorCommand = async (
  input: CreateConnectorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/CreateConnector");
  let body: any;
  body = JSON.stringify(
    take(input, {
      name: [],
      ssmCommandConfig: (_) => _json(_),
      ssmInstanceID: [],
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateLaunchConfigurationTemplateCommand
 */
export const se_CreateLaunchConfigurationTemplateCommand = async (
  input: CreateLaunchConfigurationTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/CreateLaunchConfigurationTemplate");
  let body: any;
  body = JSON.stringify(
    take(input, {
      associatePublicIpAddress: [],
      bootMode: [],
      copyPrivateIp: [],
      copyTags: [],
      enableMapAutoTagging: [],
      largeVolumeConf: (_) => _json(_),
      launchDisposition: [],
      licensing: (_) => _json(_),
      mapAutoTaggingMpeID: [],
      postLaunchActions: (_) => _json(_),
      smallVolumeConf: (_) => _json(_),
      smallVolumeMaxSize: [],
      tags: (_) => _json(_),
      targetInstanceTypeRightSizingMethod: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateReplicationConfigurationTemplateCommand
 */
export const se_CreateReplicationConfigurationTemplateCommand = async (
  input: CreateReplicationConfigurationTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/CreateReplicationConfigurationTemplate");
  let body: any;
  body = JSON.stringify(
    take(input, {
      associateDefaultSecurityGroup: [],
      bandwidthThrottling: [],
      createPublicIP: [],
      dataPlaneRouting: [],
      defaultLargeStagingDiskType: [],
      ebsEncryption: [],
      ebsEncryptionKeyArn: [],
      replicationServerInstanceType: [],
      replicationServersSecurityGroupsIDs: (_) => _json(_),
      stagingAreaSubnetId: [],
      stagingAreaTags: (_) => _json(_),
      tags: (_) => _json(_),
      useDedicatedReplicationServer: [],
      useFipsEndpoint: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateWaveCommand
 */
export const se_CreateWaveCommand = async (
  input: CreateWaveCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/CreateWave");
  let body: any;
  body = JSON.stringify(
    take(input, {
      accountID: [],
      description: [],
      name: [],
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteApplicationCommand
 */
export const se_DeleteApplicationCommand = async (
  input: DeleteApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/DeleteApplication");
  let body: any;
  body = JSON.stringify(
    take(input, {
      accountID: [],
      applicationID: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteConnectorCommand
 */
export const se_DeleteConnectorCommand = async (
  input: DeleteConnectorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/DeleteConnector");
  let body: any;
  body = JSON.stringify(
    take(input, {
      connectorID: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteJobCommand
 */
export const se_DeleteJobCommand = async (
  input: DeleteJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/DeleteJob");
  let body: any;
  body = JSON.stringify(
    take(input, {
      accountID: [],
      jobID: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteLaunchConfigurationTemplateCommand
 */
export const se_DeleteLaunchConfigurationTemplateCommand = async (
  input: DeleteLaunchConfigurationTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/DeleteLaunchConfigurationTemplate");
  let body: any;
  body = JSON.stringify(
    take(input, {
      launchConfigurationTemplateID: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteReplicationConfigurationTemplateCommand
 */
export const se_DeleteReplicationConfigurationTemplateCommand = async (
  input: DeleteReplicationConfigurationTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/DeleteReplicationConfigurationTemplate");
  let body: any;
  body = JSON.stringify(
    take(input, {
      replicationConfigurationTemplateID: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteSourceServerCommand
 */
export const se_DeleteSourceServerCommand = async (
  input: DeleteSourceServerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/DeleteSourceServer");
  let body: any;
  body = JSON.stringify(
    take(input, {
      accountID: [],
      sourceServerID: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteVcenterClientCommand
 */
export const se_DeleteVcenterClientCommand = async (
  input: DeleteVcenterClientCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/DeleteVcenterClient");
  let body: any;
  body = JSON.stringify(
    take(input, {
      vcenterClientID: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteWaveCommand
 */
export const se_DeleteWaveCommand = async (
  input: DeleteWaveCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/DeleteWave");
  let body: any;
  body = JSON.stringify(
    take(input, {
      accountID: [],
      waveID: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeJobLogItemsCommand
 */
export const se_DescribeJobLogItemsCommand = async (
  input: DescribeJobLogItemsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/DescribeJobLogItems");
  let body: any;
  body = JSON.stringify(
    take(input, {
      accountID: [],
      jobID: [],
      maxResults: [],
      nextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeJobsCommand
 */
export const se_DescribeJobsCommand = async (
  input: DescribeJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/DescribeJobs");
  let body: any;
  body = JSON.stringify(
    take(input, {
      accountID: [],
      filters: (_) => _json(_),
      maxResults: [],
      nextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeLaunchConfigurationTemplatesCommand
 */
export const se_DescribeLaunchConfigurationTemplatesCommand = async (
  input: DescribeLaunchConfigurationTemplatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/DescribeLaunchConfigurationTemplates");
  let body: any;
  body = JSON.stringify(
    take(input, {
      launchConfigurationTemplateIDs: (_) => _json(_),
      maxResults: [],
      nextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeReplicationConfigurationTemplatesCommand
 */
export const se_DescribeReplicationConfigurationTemplatesCommand = async (
  input: DescribeReplicationConfigurationTemplatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/DescribeReplicationConfigurationTemplates");
  let body: any;
  body = JSON.stringify(
    take(input, {
      maxResults: [],
      nextToken: [],
      replicationConfigurationTemplateIDs: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeSourceServersCommand
 */
export const se_DescribeSourceServersCommand = async (
  input: DescribeSourceServersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/DescribeSourceServers");
  let body: any;
  body = JSON.stringify(
    take(input, {
      accountID: [],
      filters: (_) => _json(_),
      maxResults: [],
      nextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeVcenterClientsCommand
 */
export const se_DescribeVcenterClientsCommand = async (
  input: DescribeVcenterClientsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/DescribeVcenterClients");
  const query: any = map({
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DisassociateApplicationsCommand
 */
export const se_DisassociateApplicationsCommand = async (
  input: DisassociateApplicationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/DisassociateApplications");
  let body: any;
  body = JSON.stringify(
    take(input, {
      accountID: [],
      applicationIDs: (_) => _json(_),
      waveID: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DisassociateSourceServersCommand
 */
export const se_DisassociateSourceServersCommand = async (
  input: DisassociateSourceServersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/DisassociateSourceServers");
  let body: any;
  body = JSON.stringify(
    take(input, {
      accountID: [],
      applicationID: [],
      sourceServerIDs: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DisconnectFromServiceCommand
 */
export const se_DisconnectFromServiceCommand = async (
  input: DisconnectFromServiceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/DisconnectFromService");
  let body: any;
  body = JSON.stringify(
    take(input, {
      accountID: [],
      sourceServerID: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1FinalizeCutoverCommand
 */
export const se_FinalizeCutoverCommand = async (
  input: FinalizeCutoverCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/FinalizeCutover");
  let body: any;
  body = JSON.stringify(
    take(input, {
      accountID: [],
      sourceServerID: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetLaunchConfigurationCommand
 */
export const se_GetLaunchConfigurationCommand = async (
  input: GetLaunchConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/GetLaunchConfiguration");
  let body: any;
  body = JSON.stringify(
    take(input, {
      accountID: [],
      sourceServerID: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetReplicationConfigurationCommand
 */
export const se_GetReplicationConfigurationCommand = async (
  input: GetReplicationConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/GetReplicationConfiguration");
  let body: any;
  body = JSON.stringify(
    take(input, {
      accountID: [],
      sourceServerID: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1InitializeServiceCommand
 */
export const se_InitializeServiceCommand = async (
  input: InitializeServiceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/InitializeService");
  let body: any;
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListApplicationsCommand
 */
export const se_ListApplicationsCommand = async (
  input: ListApplicationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/ListApplications");
  let body: any;
  body = JSON.stringify(
    take(input, {
      accountID: [],
      filters: (_) => _json(_),
      maxResults: [],
      nextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListConnectorsCommand
 */
export const se_ListConnectorsCommand = async (
  input: ListConnectorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/ListConnectors");
  let body: any;
  body = JSON.stringify(
    take(input, {
      filters: (_) => _json(_),
      maxResults: [],
      nextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListExportErrorsCommand
 */
export const se_ListExportErrorsCommand = async (
  input: ListExportErrorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/ListExportErrors");
  let body: any;
  body = JSON.stringify(
    take(input, {
      exportID: [],
      maxResults: [],
      nextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListExportsCommand
 */
export const se_ListExportsCommand = async (
  input: ListExportsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/ListExports");
  let body: any;
  body = JSON.stringify(
    take(input, {
      filters: (_) => _json(_),
      maxResults: [],
      nextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListImportErrorsCommand
 */
export const se_ListImportErrorsCommand = async (
  input: ListImportErrorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/ListImportErrors");
  let body: any;
  body = JSON.stringify(
    take(input, {
      importID: [],
      maxResults: [],
      nextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListImportsCommand
 */
export const se_ListImportsCommand = async (
  input: ListImportsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/ListImports");
  let body: any;
  body = JSON.stringify(
    take(input, {
      filters: (_) => _json(_),
      maxResults: [],
      nextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListManagedAccountsCommand
 */
export const se_ListManagedAccountsCommand = async (
  input: ListManagedAccountsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/ListManagedAccounts");
  let body: any;
  body = JSON.stringify(
    take(input, {
      maxResults: [],
      nextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListSourceServerActionsCommand
 */
export const se_ListSourceServerActionsCommand = async (
  input: ListSourceServerActionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/ListSourceServerActions");
  let body: any;
  body = JSON.stringify(
    take(input, {
      accountID: [],
      filters: (_) => _json(_),
      maxResults: [],
      nextToken: [],
      sourceServerID: [],
    })
  );
  b.m("POST").h(headers).b(body);
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
  b.bp("/tags/{resourceArn}");
  b.p("resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListTemplateActionsCommand
 */
export const se_ListTemplateActionsCommand = async (
  input: ListTemplateActionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/ListTemplateActions");
  let body: any;
  body = JSON.stringify(
    take(input, {
      filters: (_) => _json(_),
      launchConfigurationTemplateID: [],
      maxResults: [],
      nextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListWavesCommand
 */
export const se_ListWavesCommand = async (
  input: ListWavesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/ListWaves");
  let body: any;
  body = JSON.stringify(
    take(input, {
      accountID: [],
      filters: (_) => _json(_),
      maxResults: [],
      nextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1MarkAsArchivedCommand
 */
export const se_MarkAsArchivedCommand = async (
  input: MarkAsArchivedCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/MarkAsArchived");
  let body: any;
  body = JSON.stringify(
    take(input, {
      accountID: [],
      sourceServerID: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PauseReplicationCommand
 */
export const se_PauseReplicationCommand = async (
  input: PauseReplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/PauseReplication");
  let body: any;
  body = JSON.stringify(
    take(input, {
      accountID: [],
      sourceServerID: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutSourceServerActionCommand
 */
export const se_PutSourceServerActionCommand = async (
  input: PutSourceServerActionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/PutSourceServerAction");
  let body: any;
  body = JSON.stringify(
    take(input, {
      accountID: [],
      actionID: [],
      actionName: [],
      active: [],
      category: [],
      description: [],
      documentIdentifier: [],
      documentVersion: [],
      externalParameters: (_) => _json(_),
      mustSucceedForCutover: [],
      order: [],
      parameters: (_) => _json(_),
      sourceServerID: [],
      timeoutSeconds: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutTemplateActionCommand
 */
export const se_PutTemplateActionCommand = async (
  input: PutTemplateActionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/PutTemplateAction");
  let body: any;
  body = JSON.stringify(
    take(input, {
      actionID: [],
      actionName: [],
      active: [],
      category: [],
      description: [],
      documentIdentifier: [],
      documentVersion: [],
      externalParameters: (_) => _json(_),
      launchConfigurationTemplateID: [],
      mustSucceedForCutover: [],
      operatingSystem: [],
      order: [],
      parameters: (_) => _json(_),
      timeoutSeconds: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1RemoveSourceServerActionCommand
 */
export const se_RemoveSourceServerActionCommand = async (
  input: RemoveSourceServerActionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/RemoveSourceServerAction");
  let body: any;
  body = JSON.stringify(
    take(input, {
      accountID: [],
      actionID: [],
      sourceServerID: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1RemoveTemplateActionCommand
 */
export const se_RemoveTemplateActionCommand = async (
  input: RemoveTemplateActionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/RemoveTemplateAction");
  let body: any;
  body = JSON.stringify(
    take(input, {
      actionID: [],
      launchConfigurationTemplateID: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ResumeReplicationCommand
 */
export const se_ResumeReplicationCommand = async (
  input: ResumeReplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/ResumeReplication");
  let body: any;
  body = JSON.stringify(
    take(input, {
      accountID: [],
      sourceServerID: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1RetryDataReplicationCommand
 */
export const se_RetryDataReplicationCommand = async (
  input: RetryDataReplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/RetryDataReplication");
  let body: any;
  body = JSON.stringify(
    take(input, {
      accountID: [],
      sourceServerID: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartCutoverCommand
 */
export const se_StartCutoverCommand = async (
  input: StartCutoverCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/StartCutover");
  let body: any;
  body = JSON.stringify(
    take(input, {
      accountID: [],
      sourceServerIDs: (_) => _json(_),
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartExportCommand
 */
export const se_StartExportCommand = async (
  input: StartExportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/StartExport");
  let body: any;
  body = JSON.stringify(
    take(input, {
      s3Bucket: [],
      s3BucketOwner: [],
      s3Key: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartImportCommand
 */
export const se_StartImportCommand = async (
  input: StartImportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/StartImport");
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      s3BucketSource: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartReplicationCommand
 */
export const se_StartReplicationCommand = async (
  input: StartReplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/StartReplication");
  let body: any;
  body = JSON.stringify(
    take(input, {
      accountID: [],
      sourceServerID: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartTestCommand
 */
export const se_StartTestCommand = async (
  input: StartTestCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/StartTest");
  let body: any;
  body = JSON.stringify(
    take(input, {
      accountID: [],
      sourceServerIDs: (_) => _json(_),
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StopReplicationCommand
 */
export const se_StopReplicationCommand = async (
  input: StopReplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/StopReplication");
  let body: any;
  body = JSON.stringify(
    take(input, {
      accountID: [],
      sourceServerID: [],
    })
  );
  b.m("POST").h(headers).b(body);
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
  b.bp("/tags/{resourceArn}");
  b.p("resourceArn", () => input.resourceArn!, "{resourceArn}", false);
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
 * serializeAws_restJson1TerminateTargetInstancesCommand
 */
export const se_TerminateTargetInstancesCommand = async (
  input: TerminateTargetInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/TerminateTargetInstances");
  let body: any;
  body = JSON.stringify(
    take(input, {
      accountID: [],
      sourceServerIDs: (_) => _json(_),
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UnarchiveApplicationCommand
 */
export const se_UnarchiveApplicationCommand = async (
  input: UnarchiveApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/UnarchiveApplication");
  let body: any;
  body = JSON.stringify(
    take(input, {
      accountID: [],
      applicationID: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UnarchiveWaveCommand
 */
export const se_UnarchiveWaveCommand = async (
  input: UnarchiveWaveCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/UnarchiveWave");
  let body: any;
  body = JSON.stringify(
    take(input, {
      accountID: [],
      waveID: [],
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
  b.bp("/tags/{resourceArn}");
  b.p("resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  const query: any = map({
    [_tK]: [__expectNonNull(input.tagKeys, `tagKeys`) != null, () => input[_tK]! || []],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateApplicationCommand
 */
export const se_UpdateApplicationCommand = async (
  input: UpdateApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/UpdateApplication");
  let body: any;
  body = JSON.stringify(
    take(input, {
      accountID: [],
      applicationID: [],
      description: [],
      name: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateConnectorCommand
 */
export const se_UpdateConnectorCommand = async (
  input: UpdateConnectorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/UpdateConnector");
  let body: any;
  body = JSON.stringify(
    take(input, {
      connectorID: [],
      name: [],
      ssmCommandConfig: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateLaunchConfigurationCommand
 */
export const se_UpdateLaunchConfigurationCommand = async (
  input: UpdateLaunchConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/UpdateLaunchConfiguration");
  let body: any;
  body = JSON.stringify(
    take(input, {
      accountID: [],
      bootMode: [],
      copyPrivateIp: [],
      copyTags: [],
      enableMapAutoTagging: [],
      launchDisposition: [],
      licensing: (_) => _json(_),
      mapAutoTaggingMpeID: [],
      name: [],
      postLaunchActions: (_) => _json(_),
      sourceServerID: [],
      targetInstanceTypeRightSizingMethod: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateLaunchConfigurationTemplateCommand
 */
export const se_UpdateLaunchConfigurationTemplateCommand = async (
  input: UpdateLaunchConfigurationTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/UpdateLaunchConfigurationTemplate");
  let body: any;
  body = JSON.stringify(
    take(input, {
      associatePublicIpAddress: [],
      bootMode: [],
      copyPrivateIp: [],
      copyTags: [],
      enableMapAutoTagging: [],
      largeVolumeConf: (_) => _json(_),
      launchConfigurationTemplateID: [],
      launchDisposition: [],
      licensing: (_) => _json(_),
      mapAutoTaggingMpeID: [],
      postLaunchActions: (_) => _json(_),
      smallVolumeConf: (_) => _json(_),
      smallVolumeMaxSize: [],
      targetInstanceTypeRightSizingMethod: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateReplicationConfigurationCommand
 */
export const se_UpdateReplicationConfigurationCommand = async (
  input: UpdateReplicationConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/UpdateReplicationConfiguration");
  let body: any;
  body = JSON.stringify(
    take(input, {
      accountID: [],
      associateDefaultSecurityGroup: [],
      bandwidthThrottling: [],
      createPublicIP: [],
      dataPlaneRouting: [],
      defaultLargeStagingDiskType: [],
      ebsEncryption: [],
      ebsEncryptionKeyArn: [],
      name: [],
      replicatedDisks: (_) => _json(_),
      replicationServerInstanceType: [],
      replicationServersSecurityGroupsIDs: (_) => _json(_),
      sourceServerID: [],
      stagingAreaSubnetId: [],
      stagingAreaTags: (_) => _json(_),
      useDedicatedReplicationServer: [],
      useFipsEndpoint: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateReplicationConfigurationTemplateCommand
 */
export const se_UpdateReplicationConfigurationTemplateCommand = async (
  input: UpdateReplicationConfigurationTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/UpdateReplicationConfigurationTemplate");
  let body: any;
  body = JSON.stringify(
    take(input, {
      arn: [],
      associateDefaultSecurityGroup: [],
      bandwidthThrottling: [],
      createPublicIP: [],
      dataPlaneRouting: [],
      defaultLargeStagingDiskType: [],
      ebsEncryption: [],
      ebsEncryptionKeyArn: [],
      replicationConfigurationTemplateID: [],
      replicationServerInstanceType: [],
      replicationServersSecurityGroupsIDs: (_) => _json(_),
      stagingAreaSubnetId: [],
      stagingAreaTags: (_) => _json(_),
      useDedicatedReplicationServer: [],
      useFipsEndpoint: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateSourceServerCommand
 */
export const se_UpdateSourceServerCommand = async (
  input: UpdateSourceServerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/UpdateSourceServer");
  let body: any;
  body = JSON.stringify(
    take(input, {
      accountID: [],
      connectorAction: (_) => _json(_),
      sourceServerID: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateSourceServerReplicationTypeCommand
 */
export const se_UpdateSourceServerReplicationTypeCommand = async (
  input: UpdateSourceServerReplicationTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/UpdateSourceServerReplicationType");
  let body: any;
  body = JSON.stringify(
    take(input, {
      accountID: [],
      replicationType: [],
      sourceServerID: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateWaveCommand
 */
export const se_UpdateWaveCommand = async (
  input: UpdateWaveCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/UpdateWave");
  let body: any;
  body = JSON.stringify(
    take(input, {
      accountID: [],
      description: [],
      name: [],
      waveID: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1ArchiveApplicationCommand
 */
export const de_ArchiveApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ArchiveApplicationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    applicationAggregatedStatus: _json,
    applicationID: __expectString,
    arn: __expectString,
    creationDateTime: __expectString,
    description: __expectString,
    isArchived: __expectBoolean,
    lastModifiedDateTime: __expectString,
    name: __expectString,
    tags: _json,
    waveID: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ArchiveWaveCommand
 */
export const de_ArchiveWaveCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ArchiveWaveCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    creationDateTime: __expectString,
    description: __expectString,
    isArchived: __expectBoolean,
    lastModifiedDateTime: __expectString,
    name: __expectString,
    tags: _json,
    waveAggregatedStatus: _json,
    waveID: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1AssociateApplicationsCommand
 */
export const de_AssociateApplicationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateApplicationsCommandOutput> => {
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
 * deserializeAws_restJson1AssociateSourceServersCommand
 */
export const de_AssociateSourceServersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateSourceServersCommandOutput> => {
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
 * deserializeAws_restJson1ChangeServerLifeCycleStateCommand
 */
export const de_ChangeServerLifeCycleStateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ChangeServerLifeCycleStateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    applicationID: __expectString,
    arn: __expectString,
    connectorAction: _json,
    dataReplicationInfo: _json,
    fqdnForActionFramework: __expectString,
    isArchived: __expectBoolean,
    launchedInstance: _json,
    lifeCycle: _json,
    replicationType: __expectString,
    sourceProperties: _json,
    sourceServerID: __expectString,
    tags: _json,
    userProvidedID: __expectString,
    vcenterClientID: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateApplicationCommand
 */
export const de_CreateApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApplicationCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    applicationAggregatedStatus: _json,
    applicationID: __expectString,
    arn: __expectString,
    creationDateTime: __expectString,
    description: __expectString,
    isArchived: __expectBoolean,
    lastModifiedDateTime: __expectString,
    name: __expectString,
    tags: _json,
    waveID: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateConnectorCommand
 */
export const de_CreateConnectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConnectorCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    connectorID: __expectString,
    name: __expectString,
    ssmCommandConfig: _json,
    ssmInstanceID: __expectString,
    tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateLaunchConfigurationTemplateCommand
 */
export const de_CreateLaunchConfigurationTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLaunchConfigurationTemplateCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    associatePublicIpAddress: __expectBoolean,
    bootMode: __expectString,
    copyPrivateIp: __expectBoolean,
    copyTags: __expectBoolean,
    ec2LaunchTemplateID: __expectString,
    enableMapAutoTagging: __expectBoolean,
    largeVolumeConf: _json,
    launchConfigurationTemplateID: __expectString,
    launchDisposition: __expectString,
    licensing: _json,
    mapAutoTaggingMpeID: __expectString,
    postLaunchActions: _json,
    smallVolumeConf: _json,
    smallVolumeMaxSize: __expectLong,
    tags: _json,
    targetInstanceTypeRightSizingMethod: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateReplicationConfigurationTemplateCommand
 */
export const de_CreateReplicationConfigurationTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateReplicationConfigurationTemplateCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    associateDefaultSecurityGroup: __expectBoolean,
    bandwidthThrottling: __expectLong,
    createPublicIP: __expectBoolean,
    dataPlaneRouting: __expectString,
    defaultLargeStagingDiskType: __expectString,
    ebsEncryption: __expectString,
    ebsEncryptionKeyArn: __expectString,
    replicationConfigurationTemplateID: __expectString,
    replicationServerInstanceType: __expectString,
    replicationServersSecurityGroupsIDs: _json,
    stagingAreaSubnetId: __expectString,
    stagingAreaTags: _json,
    tags: _json,
    useDedicatedReplicationServer: __expectBoolean,
    useFipsEndpoint: __expectBoolean,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateWaveCommand
 */
export const de_CreateWaveCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWaveCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    creationDateTime: __expectString,
    description: __expectString,
    isArchived: __expectBoolean,
    lastModifiedDateTime: __expectString,
    name: __expectString,
    tags: _json,
    waveAggregatedStatus: _json,
    waveID: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteApplicationCommand
 */
export const de_DeleteApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApplicationCommandOutput> => {
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
 * deserializeAws_restJson1DeleteConnectorCommand
 */
export const de_DeleteConnectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConnectorCommandOutput> => {
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
 * deserializeAws_restJson1DeleteJobCommand
 */
export const de_DeleteJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteJobCommandOutput> => {
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
 * deserializeAws_restJson1DeleteLaunchConfigurationTemplateCommand
 */
export const de_DeleteLaunchConfigurationTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLaunchConfigurationTemplateCommandOutput> => {
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
 * deserializeAws_restJson1DeleteReplicationConfigurationTemplateCommand
 */
export const de_DeleteReplicationConfigurationTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteReplicationConfigurationTemplateCommandOutput> => {
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
 * deserializeAws_restJson1DeleteSourceServerCommand
 */
export const de_DeleteSourceServerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSourceServerCommandOutput> => {
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
 * deserializeAws_restJson1DeleteVcenterClientCommand
 */
export const de_DeleteVcenterClientCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVcenterClientCommandOutput> => {
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
 * deserializeAws_restJson1DeleteWaveCommand
 */
export const de_DeleteWaveCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWaveCommandOutput> => {
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
 * deserializeAws_restJson1DescribeJobLogItemsCommand
 */
export const de_DescribeJobLogItemsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeJobLogItemsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    items: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeJobsCommand
 */
export const de_DescribeJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    items: (_) => de_JobsList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeLaunchConfigurationTemplatesCommand
 */
export const de_DescribeLaunchConfigurationTemplatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLaunchConfigurationTemplatesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    items: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeReplicationConfigurationTemplatesCommand
 */
export const de_DescribeReplicationConfigurationTemplatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReplicationConfigurationTemplatesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    items: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeSourceServersCommand
 */
export const de_DescribeSourceServersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSourceServersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    items: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeVcenterClientsCommand
 */
export const de_DescribeVcenterClientsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeVcenterClientsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    items: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DisassociateApplicationsCommand
 */
export const de_DisassociateApplicationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateApplicationsCommandOutput> => {
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
 * deserializeAws_restJson1DisassociateSourceServersCommand
 */
export const de_DisassociateSourceServersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateSourceServersCommandOutput> => {
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
 * deserializeAws_restJson1DisconnectFromServiceCommand
 */
export const de_DisconnectFromServiceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisconnectFromServiceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    applicationID: __expectString,
    arn: __expectString,
    connectorAction: _json,
    dataReplicationInfo: _json,
    fqdnForActionFramework: __expectString,
    isArchived: __expectBoolean,
    launchedInstance: _json,
    lifeCycle: _json,
    replicationType: __expectString,
    sourceProperties: _json,
    sourceServerID: __expectString,
    tags: _json,
    userProvidedID: __expectString,
    vcenterClientID: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1FinalizeCutoverCommand
 */
export const de_FinalizeCutoverCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<FinalizeCutoverCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    applicationID: __expectString,
    arn: __expectString,
    connectorAction: _json,
    dataReplicationInfo: _json,
    fqdnForActionFramework: __expectString,
    isArchived: __expectBoolean,
    launchedInstance: _json,
    lifeCycle: _json,
    replicationType: __expectString,
    sourceProperties: _json,
    sourceServerID: __expectString,
    tags: _json,
    userProvidedID: __expectString,
    vcenterClientID: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetLaunchConfigurationCommand
 */
export const de_GetLaunchConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLaunchConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    bootMode: __expectString,
    copyPrivateIp: __expectBoolean,
    copyTags: __expectBoolean,
    ec2LaunchTemplateID: __expectString,
    enableMapAutoTagging: __expectBoolean,
    launchDisposition: __expectString,
    licensing: _json,
    mapAutoTaggingMpeID: __expectString,
    name: __expectString,
    postLaunchActions: _json,
    sourceServerID: __expectString,
    targetInstanceTypeRightSizingMethod: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetReplicationConfigurationCommand
 */
export const de_GetReplicationConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetReplicationConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    associateDefaultSecurityGroup: __expectBoolean,
    bandwidthThrottling: __expectLong,
    createPublicIP: __expectBoolean,
    dataPlaneRouting: __expectString,
    defaultLargeStagingDiskType: __expectString,
    ebsEncryption: __expectString,
    ebsEncryptionKeyArn: __expectString,
    name: __expectString,
    replicatedDisks: _json,
    replicationServerInstanceType: __expectString,
    replicationServersSecurityGroupsIDs: _json,
    sourceServerID: __expectString,
    stagingAreaSubnetId: __expectString,
    stagingAreaTags: _json,
    useDedicatedReplicationServer: __expectBoolean,
    useFipsEndpoint: __expectBoolean,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1InitializeServiceCommand
 */
export const de_InitializeServiceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InitializeServiceCommandOutput> => {
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
 * deserializeAws_restJson1ListApplicationsCommand
 */
export const de_ListApplicationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApplicationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    items: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListConnectorsCommand
 */
export const de_ListConnectorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConnectorsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    items: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListExportErrorsCommand
 */
export const de_ListExportErrorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListExportErrorsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    items: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListExportsCommand
 */
export const de_ListExportsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListExportsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    items: (_) => de_ExportsList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListImportErrorsCommand
 */
export const de_ListImportErrorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListImportErrorsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    items: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListImportsCommand
 */
export const de_ListImportsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListImportsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    items: (_) => de_ImportList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListManagedAccountsCommand
 */
export const de_ListManagedAccountsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListManagedAccountsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    items: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListSourceServerActionsCommand
 */
export const de_ListSourceServerActionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSourceServerActionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    items: _json,
    nextToken: __expectString,
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
 * deserializeAws_restJson1ListTemplateActionsCommand
 */
export const de_ListTemplateActionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTemplateActionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    items: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListWavesCommand
 */
export const de_ListWavesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWavesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    items: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1MarkAsArchivedCommand
 */
export const de_MarkAsArchivedCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MarkAsArchivedCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    applicationID: __expectString,
    arn: __expectString,
    connectorAction: _json,
    dataReplicationInfo: _json,
    fqdnForActionFramework: __expectString,
    isArchived: __expectBoolean,
    launchedInstance: _json,
    lifeCycle: _json,
    replicationType: __expectString,
    sourceProperties: _json,
    sourceServerID: __expectString,
    tags: _json,
    userProvidedID: __expectString,
    vcenterClientID: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PauseReplicationCommand
 */
export const de_PauseReplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PauseReplicationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    applicationID: __expectString,
    arn: __expectString,
    connectorAction: _json,
    dataReplicationInfo: _json,
    fqdnForActionFramework: __expectString,
    isArchived: __expectBoolean,
    launchedInstance: _json,
    lifeCycle: _json,
    replicationType: __expectString,
    sourceProperties: _json,
    sourceServerID: __expectString,
    tags: _json,
    userProvidedID: __expectString,
    vcenterClientID: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PutSourceServerActionCommand
 */
export const de_PutSourceServerActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutSourceServerActionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    actionID: __expectString,
    actionName: __expectString,
    active: __expectBoolean,
    category: __expectString,
    description: __expectString,
    documentIdentifier: __expectString,
    documentVersion: __expectString,
    externalParameters: _json,
    mustSucceedForCutover: __expectBoolean,
    order: __expectInt32,
    parameters: _json,
    timeoutSeconds: __expectInt32,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PutTemplateActionCommand
 */
export const de_PutTemplateActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutTemplateActionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    actionID: __expectString,
    actionName: __expectString,
    active: __expectBoolean,
    category: __expectString,
    description: __expectString,
    documentIdentifier: __expectString,
    documentVersion: __expectString,
    externalParameters: _json,
    mustSucceedForCutover: __expectBoolean,
    operatingSystem: __expectString,
    order: __expectInt32,
    parameters: _json,
    timeoutSeconds: __expectInt32,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1RemoveSourceServerActionCommand
 */
export const de_RemoveSourceServerActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveSourceServerActionCommandOutput> => {
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
 * deserializeAws_restJson1RemoveTemplateActionCommand
 */
export const de_RemoveTemplateActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveTemplateActionCommandOutput> => {
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
 * deserializeAws_restJson1ResumeReplicationCommand
 */
export const de_ResumeReplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResumeReplicationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    applicationID: __expectString,
    arn: __expectString,
    connectorAction: _json,
    dataReplicationInfo: _json,
    fqdnForActionFramework: __expectString,
    isArchived: __expectBoolean,
    launchedInstance: _json,
    lifeCycle: _json,
    replicationType: __expectString,
    sourceProperties: _json,
    sourceServerID: __expectString,
    tags: _json,
    userProvidedID: __expectString,
    vcenterClientID: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1RetryDataReplicationCommand
 */
export const de_RetryDataReplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RetryDataReplicationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    applicationID: __expectString,
    arn: __expectString,
    connectorAction: _json,
    dataReplicationInfo: _json,
    fqdnForActionFramework: __expectString,
    isArchived: __expectBoolean,
    launchedInstance: _json,
    lifeCycle: _json,
    replicationType: __expectString,
    sourceProperties: _json,
    sourceServerID: __expectString,
    tags: _json,
    userProvidedID: __expectString,
    vcenterClientID: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StartCutoverCommand
 */
export const de_StartCutoverCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartCutoverCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    job: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StartExportCommand
 */
export const de_StartExportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartExportCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    exportTask: (_) => de_ExportTask(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StartImportCommand
 */
export const de_StartImportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartImportCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    importTask: (_) => de_ImportTask(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StartReplicationCommand
 */
export const de_StartReplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartReplicationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    applicationID: __expectString,
    arn: __expectString,
    connectorAction: _json,
    dataReplicationInfo: _json,
    fqdnForActionFramework: __expectString,
    isArchived: __expectBoolean,
    launchedInstance: _json,
    lifeCycle: _json,
    replicationType: __expectString,
    sourceProperties: _json,
    sourceServerID: __expectString,
    tags: _json,
    userProvidedID: __expectString,
    vcenterClientID: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StartTestCommand
 */
export const de_StartTestCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartTestCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    job: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StopReplicationCommand
 */
export const de_StopReplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopReplicationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    applicationID: __expectString,
    arn: __expectString,
    connectorAction: _json,
    dataReplicationInfo: _json,
    fqdnForActionFramework: __expectString,
    isArchived: __expectBoolean,
    launchedInstance: _json,
    lifeCycle: _json,
    replicationType: __expectString,
    sourceProperties: _json,
    sourceServerID: __expectString,
    tags: _json,
    userProvidedID: __expectString,
    vcenterClientID: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
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
 * deserializeAws_restJson1TerminateTargetInstancesCommand
 */
export const de_TerminateTargetInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TerminateTargetInstancesCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    job: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UnarchiveApplicationCommand
 */
export const de_UnarchiveApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UnarchiveApplicationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    applicationAggregatedStatus: _json,
    applicationID: __expectString,
    arn: __expectString,
    creationDateTime: __expectString,
    description: __expectString,
    isArchived: __expectBoolean,
    lastModifiedDateTime: __expectString,
    name: __expectString,
    tags: _json,
    waveID: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UnarchiveWaveCommand
 */
export const de_UnarchiveWaveCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UnarchiveWaveCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    creationDateTime: __expectString,
    description: __expectString,
    isArchived: __expectBoolean,
    lastModifiedDateTime: __expectString,
    name: __expectString,
    tags: _json,
    waveAggregatedStatus: _json,
    waveID: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
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
 * deserializeAws_restJson1UpdateApplicationCommand
 */
export const de_UpdateApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApplicationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    applicationAggregatedStatus: _json,
    applicationID: __expectString,
    arn: __expectString,
    creationDateTime: __expectString,
    description: __expectString,
    isArchived: __expectBoolean,
    lastModifiedDateTime: __expectString,
    name: __expectString,
    tags: _json,
    waveID: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateConnectorCommand
 */
export const de_UpdateConnectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConnectorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    connectorID: __expectString,
    name: __expectString,
    ssmCommandConfig: _json,
    ssmInstanceID: __expectString,
    tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateLaunchConfigurationCommand
 */
export const de_UpdateLaunchConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLaunchConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    bootMode: __expectString,
    copyPrivateIp: __expectBoolean,
    copyTags: __expectBoolean,
    ec2LaunchTemplateID: __expectString,
    enableMapAutoTagging: __expectBoolean,
    launchDisposition: __expectString,
    licensing: _json,
    mapAutoTaggingMpeID: __expectString,
    name: __expectString,
    postLaunchActions: _json,
    sourceServerID: __expectString,
    targetInstanceTypeRightSizingMethod: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateLaunchConfigurationTemplateCommand
 */
export const de_UpdateLaunchConfigurationTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLaunchConfigurationTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    associatePublicIpAddress: __expectBoolean,
    bootMode: __expectString,
    copyPrivateIp: __expectBoolean,
    copyTags: __expectBoolean,
    ec2LaunchTemplateID: __expectString,
    enableMapAutoTagging: __expectBoolean,
    largeVolumeConf: _json,
    launchConfigurationTemplateID: __expectString,
    launchDisposition: __expectString,
    licensing: _json,
    mapAutoTaggingMpeID: __expectString,
    postLaunchActions: _json,
    smallVolumeConf: _json,
    smallVolumeMaxSize: __expectLong,
    tags: _json,
    targetInstanceTypeRightSizingMethod: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateReplicationConfigurationCommand
 */
export const de_UpdateReplicationConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateReplicationConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    associateDefaultSecurityGroup: __expectBoolean,
    bandwidthThrottling: __expectLong,
    createPublicIP: __expectBoolean,
    dataPlaneRouting: __expectString,
    defaultLargeStagingDiskType: __expectString,
    ebsEncryption: __expectString,
    ebsEncryptionKeyArn: __expectString,
    name: __expectString,
    replicatedDisks: _json,
    replicationServerInstanceType: __expectString,
    replicationServersSecurityGroupsIDs: _json,
    sourceServerID: __expectString,
    stagingAreaSubnetId: __expectString,
    stagingAreaTags: _json,
    useDedicatedReplicationServer: __expectBoolean,
    useFipsEndpoint: __expectBoolean,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateReplicationConfigurationTemplateCommand
 */
export const de_UpdateReplicationConfigurationTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateReplicationConfigurationTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    associateDefaultSecurityGroup: __expectBoolean,
    bandwidthThrottling: __expectLong,
    createPublicIP: __expectBoolean,
    dataPlaneRouting: __expectString,
    defaultLargeStagingDiskType: __expectString,
    ebsEncryption: __expectString,
    ebsEncryptionKeyArn: __expectString,
    replicationConfigurationTemplateID: __expectString,
    replicationServerInstanceType: __expectString,
    replicationServersSecurityGroupsIDs: _json,
    stagingAreaSubnetId: __expectString,
    stagingAreaTags: _json,
    tags: _json,
    useDedicatedReplicationServer: __expectBoolean,
    useFipsEndpoint: __expectBoolean,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateSourceServerCommand
 */
export const de_UpdateSourceServerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSourceServerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    applicationID: __expectString,
    arn: __expectString,
    connectorAction: _json,
    dataReplicationInfo: _json,
    fqdnForActionFramework: __expectString,
    isArchived: __expectBoolean,
    launchedInstance: _json,
    lifeCycle: _json,
    replicationType: __expectString,
    sourceProperties: _json,
    sourceServerID: __expectString,
    tags: _json,
    userProvidedID: __expectString,
    vcenterClientID: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateSourceServerReplicationTypeCommand
 */
export const de_UpdateSourceServerReplicationTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSourceServerReplicationTypeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    applicationID: __expectString,
    arn: __expectString,
    connectorAction: _json,
    dataReplicationInfo: _json,
    fqdnForActionFramework: __expectString,
    isArchived: __expectBoolean,
    launchedInstance: _json,
    lifeCycle: _json,
    replicationType: __expectString,
    sourceProperties: _json,
    sourceServerID: __expectString,
    tags: _json,
    userProvidedID: __expectString,
    vcenterClientID: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateWaveCommand
 */
export const de_UpdateWaveCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateWaveCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    creationDateTime: __expectString,
    description: __expectString,
    isArchived: __expectBoolean,
    lastModifiedDateTime: __expectString,
    name: __expectString,
    tags: _json,
    waveAggregatedStatus: _json,
    waveID: __expectString,
  });
  Object.assign(contents, doc);
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
    case "ConflictException":
    case "com.amazonaws.mgn#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.mgn#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.mgn#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.mgn#UninitializedAccountException":
      throw await de_UninitializedAccountExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.mgn#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.mgn#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.mgn#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.mgn#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1AccessDeniedExceptionRes
 */
const de_AccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    code: __expectString,
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
    code: __expectString,
    errors: _json,
    message: __expectString,
    resourceId: __expectString,
    resourceType: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ConflictException({
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
  const contents: any = map({
    [_rAS]: [() => void 0 !== parsedOutput.headers[_ra], () => __strictParseLong(parsedOutput.headers[_ra])],
  });
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
    code: __expectString,
    message: __expectString,
    resourceId: __expectString,
    resourceType: __expectString,
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
    code: __expectString,
    message: __expectString,
    quotaCode: __expectString,
    quotaValue: __expectInt32,
    resourceId: __expectString,
    resourceType: __expectString,
    serviceCode: __expectString,
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
  const contents: any = map({
    [_rAS]: [, parsedOutput.headers[_ra]],
  });
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
    quotaCode: __expectString,
    serviceCode: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1UninitializedAccountExceptionRes
 */
const de_UninitializedAccountExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UninitializedAccountException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    code: __expectString,
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new UninitializedAccountException({
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
    code: __expectString,
    fieldList: _json,
    message: __expectString,
    reason: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// se_ActionIDs omitted.

// se_ApplicationIDs omitted.

// se_ApplicationIDsFilter omitted.

// se_AssociateSourceServersRequestSourceServerIDs omitted.

// se_ChangeServerLifeCycleStateSourceServerLifecycle omitted.

// se_ConnectorIDsFilter omitted.

// se_ConnectorSsmCommandConfig omitted.

// se_DescribeJobsRequestFilters omitted.

// se_DescribeJobsRequestFiltersJobIDs omitted.

// se_DescribeSourceServersRequestApplicationIDs omitted.

// se_DescribeSourceServersRequestFilters omitted.

// se_DescribeSourceServersRequestFiltersIDs omitted.

// se_DisassociateSourceServersRequestSourceServerIDs omitted.

// se_ImportIDsFilter omitted.

// se_LaunchConfigurationTemplateIDs omitted.

// se_LaunchTemplateDiskConf omitted.

// se_Licensing omitted.

// se_LifeCycleStates omitted.

// se_ListApplicationsRequestFilters omitted.

// se_ListConnectorsRequestFilters omitted.

// se_ListExportsRequestFilters omitted.

// se_ListExportsRequestFiltersExportIDs omitted.

// se_ListImportsRequestFilters omitted.

// se_ListWavesRequestFilters omitted.

// se_PostLaunchActions omitted.

// se_ReplicationConfigurationReplicatedDisk omitted.

// se_ReplicationConfigurationReplicatedDisks omitted.

// se_ReplicationConfigurationTemplateIDs omitted.

// se_ReplicationServersSecurityGroupsIDs omitted.

// se_ReplicationTypes omitted.

// se_S3BucketSource omitted.

// se_SourceServerActionsRequestFilters omitted.

// se_SourceServerConnectorAction omitted.

// se_SsmDocument omitted.

// se_SsmDocumentExternalParameters omitted.

// se_SsmDocumentParameters omitted.

// se_SsmDocuments omitted.

// se_SsmExternalParameter omitted.

// se_SsmParameterStoreParameter omitted.

// se_SsmParameterStoreParameters omitted.

// se_StartCutoverRequestSourceServerIDs omitted.

// se_StartTestRequestSourceServerIDs omitted.

// se_TagsMap omitted.

// se_TemplateActionsRequestFilters omitted.

// se_TerminateTargetInstancesRequestSourceServerIDs omitted.

// se_WaveIDsFilter omitted.

// de_Application omitted.

// de_ApplicationAggregatedStatus omitted.

// de_ApplicationsList omitted.

// de_ConflictExceptionErrors omitted.

// de_Connector omitted.

// de_ConnectorsList omitted.

// de_ConnectorSsmCommandConfig omitted.

// de_CPU omitted.

// de_Cpus omitted.

// de_DataReplicationError omitted.

// de_DataReplicationInfo omitted.

// de_DataReplicationInfoReplicatedDisk omitted.

// de_DataReplicationInfoReplicatedDisks omitted.

// de_DataReplicationInitiation omitted.

// de_DataReplicationInitiationStep omitted.

// de_DataReplicationInitiationSteps omitted.

// de_Disk omitted.

// de_Disks omitted.

// de_ErrorDetails omitted.

// de_ExportErrorData omitted.

// de_ExportErrors omitted.

/**
 * deserializeAws_restJson1ExportsList
 */
const de_ExportsList = (output: any, context: __SerdeContext): ExportTask[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ExportTask(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ExportTask
 */
const de_ExportTask = (output: any, context: __SerdeContext): ExportTask => {
  return take(output, {
    creationDateTime: __expectString,
    endDateTime: __expectString,
    exportID: __expectString,
    progressPercentage: __limitedParseFloat32,
    s3Bucket: __expectString,
    s3BucketOwner: __expectString,
    s3Key: __expectString,
    status: __expectString,
    summary: _json,
  }) as any;
};

// de_ExportTaskError omitted.

// de_ExportTaskSummary omitted.

// de_IdentificationHints omitted.

// de_ImportErrorData omitted.

// de_ImportErrors omitted.

/**
 * deserializeAws_restJson1ImportList
 */
const de_ImportList = (output: any, context: __SerdeContext): ImportTask[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ImportTask(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ImportTask
 */
const de_ImportTask = (output: any, context: __SerdeContext): ImportTask => {
  return take(output, {
    creationDateTime: __expectString,
    endDateTime: __expectString,
    importID: __expectString,
    progressPercentage: __limitedParseFloat32,
    s3BucketSource: _json,
    status: __expectString,
    summary: _json,
  }) as any;
};

// de_ImportTaskError omitted.

// de_ImportTaskSummary omitted.

// de_ImportTaskSummaryApplications omitted.

// de_ImportTaskSummaryServers omitted.

// de_ImportTaskSummaryWaves omitted.

// de_IPsList omitted.

// de_Job omitted.

// de_JobLog omitted.

// de_JobLogEventData omitted.

// de_JobLogs omitted.

// de_JobPostLaunchActionsLaunchStatus omitted.

/**
 * deserializeAws_restJson1JobsList
 */
const de_JobsList = (output: any, context: __SerdeContext): Job[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return _json(entry);
    });
  return retVal;
};

// de_LaunchConfigurationTemplate omitted.

// de_LaunchConfigurationTemplates omitted.

// de_LaunchedInstance omitted.

// de_LaunchTemplateDiskConf omitted.

// de_Licensing omitted.

// de_LifeCycle omitted.

// de_LifeCycleLastCutover omitted.

// de_LifeCycleLastCutoverFinalized omitted.

// de_LifeCycleLastCutoverInitiated omitted.

// de_LifeCycleLastCutoverReverted omitted.

// de_LifeCycleLastTest omitted.

// de_LifeCycleLastTestFinalized omitted.

// de_LifeCycleLastTestInitiated omitted.

// de_LifeCycleLastTestReverted omitted.

// de_ManagedAccount omitted.

// de_ManagedAccounts omitted.

// de_NetworkInterface omitted.

// de_NetworkInterfaces omitted.

// de_OS omitted.

// de_ParticipatingServer omitted.

// de_ParticipatingServers omitted.

// de_PostLaunchActions omitted.

// de_PostLaunchActionsLaunchStatusList omitted.

// de_PostLaunchActionsStatus omitted.

// de_ReplicationConfigurationReplicatedDisk omitted.

// de_ReplicationConfigurationReplicatedDisks omitted.

// de_ReplicationConfigurationTemplate omitted.

// de_ReplicationConfigurationTemplates omitted.

// de_ReplicationServersSecurityGroupsIDs omitted.

// de_S3BucketSource omitted.

// de_SourceProperties omitted.

// de_SourceServer omitted.

// de_SourceServerActionDocument omitted.

// de_SourceServerActionDocuments omitted.

// de_SourceServerConnectorAction omitted.

// de_SourceServersList omitted.

// de_SsmDocument omitted.

// de_SsmDocumentExternalParameters omitted.

// de_SsmDocumentParameters omitted.

// de_SsmDocuments omitted.

// de_SsmExternalParameter omitted.

// de_SsmParameterStoreParameter omitted.

// de_SsmParameterStoreParameters omitted.

// de_TagsMap omitted.

// de_TemplateActionDocument omitted.

// de_TemplateActionDocuments omitted.

// de_ValidationExceptionField omitted.

// de_ValidationExceptionFieldList omitted.

// de_VcenterClient omitted.

// de_VcenterClientList omitted.

// de_Wave omitted.

// de_WaveAggregatedStatus omitted.

// de_WavesList omitted.

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

const _mR = "maxResults";
const _nT = "nextToken";
const _rAS = "retryAfterSeconds";
const _ra = "retry-after";
const _tK = "tagKeys";
