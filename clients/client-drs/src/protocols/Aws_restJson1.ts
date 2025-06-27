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
  map,
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
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

import {
  AssociateSourceNetworkStackCommandInput,
  AssociateSourceNetworkStackCommandOutput,
} from "../commands/AssociateSourceNetworkStackCommand";
import {
  CreateExtendedSourceServerCommandInput,
  CreateExtendedSourceServerCommandOutput,
} from "../commands/CreateExtendedSourceServerCommand";
import {
  CreateLaunchConfigurationTemplateCommandInput,
  CreateLaunchConfigurationTemplateCommandOutput,
} from "../commands/CreateLaunchConfigurationTemplateCommand";
import {
  CreateReplicationConfigurationTemplateCommandInput,
  CreateReplicationConfigurationTemplateCommandOutput,
} from "../commands/CreateReplicationConfigurationTemplateCommand";
import {
  CreateSourceNetworkCommandInput,
  CreateSourceNetworkCommandOutput,
} from "../commands/CreateSourceNetworkCommand";
import { DeleteJobCommandInput, DeleteJobCommandOutput } from "../commands/DeleteJobCommand";
import { DeleteLaunchActionCommandInput, DeleteLaunchActionCommandOutput } from "../commands/DeleteLaunchActionCommand";
import {
  DeleteLaunchConfigurationTemplateCommandInput,
  DeleteLaunchConfigurationTemplateCommandOutput,
} from "../commands/DeleteLaunchConfigurationTemplateCommand";
import {
  DeleteRecoveryInstanceCommandInput,
  DeleteRecoveryInstanceCommandOutput,
} from "../commands/DeleteRecoveryInstanceCommand";
import {
  DeleteReplicationConfigurationTemplateCommandInput,
  DeleteReplicationConfigurationTemplateCommandOutput,
} from "../commands/DeleteReplicationConfigurationTemplateCommand";
import {
  DeleteSourceNetworkCommandInput,
  DeleteSourceNetworkCommandOutput,
} from "../commands/DeleteSourceNetworkCommand";
import { DeleteSourceServerCommandInput, DeleteSourceServerCommandOutput } from "../commands/DeleteSourceServerCommand";
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
  DescribeRecoveryInstancesCommandInput,
  DescribeRecoveryInstancesCommandOutput,
} from "../commands/DescribeRecoveryInstancesCommand";
import {
  DescribeRecoverySnapshotsCommandInput,
  DescribeRecoverySnapshotsCommandOutput,
} from "../commands/DescribeRecoverySnapshotsCommand";
import {
  DescribeReplicationConfigurationTemplatesCommandInput,
  DescribeReplicationConfigurationTemplatesCommandOutput,
} from "../commands/DescribeReplicationConfigurationTemplatesCommand";
import {
  DescribeSourceNetworksCommandInput,
  DescribeSourceNetworksCommandOutput,
} from "../commands/DescribeSourceNetworksCommand";
import {
  DescribeSourceServersCommandInput,
  DescribeSourceServersCommandOutput,
} from "../commands/DescribeSourceServersCommand";
import {
  DisconnectRecoveryInstanceCommandInput,
  DisconnectRecoveryInstanceCommandOutput,
} from "../commands/DisconnectRecoveryInstanceCommand";
import {
  DisconnectSourceServerCommandInput,
  DisconnectSourceServerCommandOutput,
} from "../commands/DisconnectSourceServerCommand";
import {
  ExportSourceNetworkCfnTemplateCommandInput,
  ExportSourceNetworkCfnTemplateCommandOutput,
} from "../commands/ExportSourceNetworkCfnTemplateCommand";
import {
  GetFailbackReplicationConfigurationCommandInput,
  GetFailbackReplicationConfigurationCommandOutput,
} from "../commands/GetFailbackReplicationConfigurationCommand";
import {
  GetLaunchConfigurationCommandInput,
  GetLaunchConfigurationCommandOutput,
} from "../commands/GetLaunchConfigurationCommand";
import {
  GetReplicationConfigurationCommandInput,
  GetReplicationConfigurationCommandOutput,
} from "../commands/GetReplicationConfigurationCommand";
import { InitializeServiceCommandInput, InitializeServiceCommandOutput } from "../commands/InitializeServiceCommand";
import {
  ListExtensibleSourceServersCommandInput,
  ListExtensibleSourceServersCommandOutput,
} from "../commands/ListExtensibleSourceServersCommand";
import { ListLaunchActionsCommandInput, ListLaunchActionsCommandOutput } from "../commands/ListLaunchActionsCommand";
import {
  ListStagingAccountsCommandInput,
  ListStagingAccountsCommandOutput,
} from "../commands/ListStagingAccountsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { PutLaunchActionCommandInput, PutLaunchActionCommandOutput } from "../commands/PutLaunchActionCommand";
import {
  RetryDataReplicationCommandInput,
  RetryDataReplicationCommandOutput,
} from "../commands/RetryDataReplicationCommand";
import { ReverseReplicationCommandInput, ReverseReplicationCommandOutput } from "../commands/ReverseReplicationCommand";
import {
  StartFailbackLaunchCommandInput,
  StartFailbackLaunchCommandOutput,
} from "../commands/StartFailbackLaunchCommand";
import { StartRecoveryCommandInput, StartRecoveryCommandOutput } from "../commands/StartRecoveryCommand";
import { StartReplicationCommandInput, StartReplicationCommandOutput } from "../commands/StartReplicationCommand";
import {
  StartSourceNetworkRecoveryCommandInput,
  StartSourceNetworkRecoveryCommandOutput,
} from "../commands/StartSourceNetworkRecoveryCommand";
import {
  StartSourceNetworkReplicationCommandInput,
  StartSourceNetworkReplicationCommandOutput,
} from "../commands/StartSourceNetworkReplicationCommand";
import { StopFailbackCommandInput, StopFailbackCommandOutput } from "../commands/StopFailbackCommand";
import { StopReplicationCommandInput, StopReplicationCommandOutput } from "../commands/StopReplicationCommand";
import {
  StopSourceNetworkReplicationCommandInput,
  StopSourceNetworkReplicationCommandOutput,
} from "../commands/StopSourceNetworkReplicationCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import {
  TerminateRecoveryInstancesCommandInput,
  TerminateRecoveryInstancesCommandOutput,
} from "../commands/TerminateRecoveryInstancesCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  UpdateFailbackReplicationConfigurationCommandInput,
  UpdateFailbackReplicationConfigurationCommandOutput,
} from "../commands/UpdateFailbackReplicationConfigurationCommand";
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
import { DrsServiceException as __BaseException } from "../models/DrsServiceException";
import {
  AccessDeniedException,
  ConflictException,
  DescribeJobsRequestFilters,
  DescribeRecoveryInstancesRequestFilters,
  DescribeRecoverySnapshotsRequestFilters,
  DescribeSourceNetworksRequestFilters,
  DescribeSourceServersRequestFilters,
  InternalServerException,
  LaunchActionParameter,
  LaunchActionsRequestFilters,
  LaunchIntoInstanceProperties,
  Licensing,
  PITPolicyRule,
  RecoveryLifeCycle,
  ReplicationConfigurationReplicatedDisk,
  ResourceNotFoundException,
  ServiceQuotaExceededException,
  SourceNetwork,
  StartRecoveryRequestSourceServer,
  StartSourceNetworkRecoveryRequestNetworkEntry,
  ThrottlingException,
  UninitializedAccountException,
  ValidationException,
} from "../models/models_0";

/**
 * serializeAws_restJson1AssociateSourceNetworkStackCommand
 */
export const se_AssociateSourceNetworkStackCommand = async (
  input: AssociateSourceNetworkStackCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/AssociateSourceNetworkStack");
  let body: any;
  body = JSON.stringify(
    take(input, {
      cfnStackName: [],
      sourceNetworkID: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateExtendedSourceServerCommand
 */
export const se_CreateExtendedSourceServerCommand = async (
  input: CreateExtendedSourceServerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/CreateExtendedSourceServer");
  let body: any;
  body = JSON.stringify(
    take(input, {
      sourceServerArn: [],
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
      copyPrivateIp: [],
      copyTags: [],
      exportBucketArn: [],
      launchDisposition: [],
      launchIntoSourceInstance: [],
      licensing: (_) => _json(_),
      postLaunchEnabled: [],
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
      autoReplicateNewDisks: [],
      bandwidthThrottling: [],
      createPublicIP: [],
      dataPlaneRouting: [],
      defaultLargeStagingDiskType: [],
      ebsEncryption: [],
      ebsEncryptionKeyArn: [],
      pitPolicy: (_) => _json(_),
      replicationServerInstanceType: [],
      replicationServersSecurityGroupsIDs: (_) => _json(_),
      stagingAreaSubnetId: [],
      stagingAreaTags: (_) => _json(_),
      tags: (_) => _json(_),
      useDedicatedReplicationServer: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateSourceNetworkCommand
 */
export const se_CreateSourceNetworkCommand = async (
  input: CreateSourceNetworkCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/CreateSourceNetwork");
  let body: any;
  body = JSON.stringify(
    take(input, {
      originAccountID: [],
      originRegion: [],
      tags: (_) => _json(_),
      vpcID: [],
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
      jobID: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteLaunchActionCommand
 */
export const se_DeleteLaunchActionCommand = async (
  input: DeleteLaunchActionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/DeleteLaunchAction");
  let body: any;
  body = JSON.stringify(
    take(input, {
      actionId: [],
      resourceId: [],
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
 * serializeAws_restJson1DeleteRecoveryInstanceCommand
 */
export const se_DeleteRecoveryInstanceCommand = async (
  input: DeleteRecoveryInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/DeleteRecoveryInstance");
  let body: any;
  body = JSON.stringify(
    take(input, {
      recoveryInstanceID: [],
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
 * serializeAws_restJson1DeleteSourceNetworkCommand
 */
export const se_DeleteSourceNetworkCommand = async (
  input: DeleteSourceNetworkCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/DeleteSourceNetwork");
  let body: any;
  body = JSON.stringify(
    take(input, {
      sourceNetworkID: [],
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
      sourceServerID: [],
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
 * serializeAws_restJson1DescribeRecoveryInstancesCommand
 */
export const se_DescribeRecoveryInstancesCommand = async (
  input: DescribeRecoveryInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/DescribeRecoveryInstances");
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
 * serializeAws_restJson1DescribeRecoverySnapshotsCommand
 */
export const se_DescribeRecoverySnapshotsCommand = async (
  input: DescribeRecoverySnapshotsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/DescribeRecoverySnapshots");
  let body: any;
  body = JSON.stringify(
    take(input, {
      filters: (_) => _json(_),
      maxResults: [],
      nextToken: [],
      order: [],
      sourceServerID: [],
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
 * serializeAws_restJson1DescribeSourceNetworksCommand
 */
export const se_DescribeSourceNetworksCommand = async (
  input: DescribeSourceNetworksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/DescribeSourceNetworks");
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
      filters: (_) => _json(_),
      maxResults: [],
      nextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DisconnectRecoveryInstanceCommand
 */
export const se_DisconnectRecoveryInstanceCommand = async (
  input: DisconnectRecoveryInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/DisconnectRecoveryInstance");
  let body: any;
  body = JSON.stringify(
    take(input, {
      recoveryInstanceID: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DisconnectSourceServerCommand
 */
export const se_DisconnectSourceServerCommand = async (
  input: DisconnectSourceServerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/DisconnectSourceServer");
  let body: any;
  body = JSON.stringify(
    take(input, {
      sourceServerID: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ExportSourceNetworkCfnTemplateCommand
 */
export const se_ExportSourceNetworkCfnTemplateCommand = async (
  input: ExportSourceNetworkCfnTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/ExportSourceNetworkCfnTemplate");
  let body: any;
  body = JSON.stringify(
    take(input, {
      sourceNetworkID: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetFailbackReplicationConfigurationCommand
 */
export const se_GetFailbackReplicationConfigurationCommand = async (
  input: GetFailbackReplicationConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/GetFailbackReplicationConfiguration");
  let body: any;
  body = JSON.stringify(
    take(input, {
      recoveryInstanceID: [],
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
 * serializeAws_restJson1ListExtensibleSourceServersCommand
 */
export const se_ListExtensibleSourceServersCommand = async (
  input: ListExtensibleSourceServersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/ListExtensibleSourceServers");
  let body: any;
  body = JSON.stringify(
    take(input, {
      maxResults: [],
      nextToken: [],
      stagingAccountID: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListLaunchActionsCommand
 */
export const se_ListLaunchActionsCommand = async (
  input: ListLaunchActionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/ListLaunchActions");
  let body: any;
  body = JSON.stringify(
    take(input, {
      filters: (_) => _json(_),
      maxResults: [],
      nextToken: [],
      resourceId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListStagingAccountsCommand
 */
export const se_ListStagingAccountsCommand = async (
  input: ListStagingAccountsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/ListStagingAccounts");
  const query: any = map({
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
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
  b.bp("/tags/{resourceArn}");
  b.p("resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutLaunchActionCommand
 */
export const se_PutLaunchActionCommand = async (
  input: PutLaunchActionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/PutLaunchAction");
  let body: any;
  body = JSON.stringify(
    take(input, {
      actionCode: [],
      actionId: [],
      actionVersion: [],
      active: [],
      category: [],
      description: [],
      name: [],
      optional: [],
      order: [],
      parameters: (_) => _json(_),
      resourceId: [],
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
      sourceServerID: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ReverseReplicationCommand
 */
export const se_ReverseReplicationCommand = async (
  input: ReverseReplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/ReverseReplication");
  let body: any;
  body = JSON.stringify(
    take(input, {
      recoveryInstanceID: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartFailbackLaunchCommand
 */
export const se_StartFailbackLaunchCommand = async (
  input: StartFailbackLaunchCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/StartFailbackLaunch");
  let body: any;
  body = JSON.stringify(
    take(input, {
      recoveryInstanceIDs: (_) => _json(_),
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartRecoveryCommand
 */
export const se_StartRecoveryCommand = async (
  input: StartRecoveryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/StartRecovery");
  let body: any;
  body = JSON.stringify(
    take(input, {
      isDrill: [],
      sourceServers: (_) => _json(_),
      tags: (_) => _json(_),
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
      sourceServerID: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartSourceNetworkRecoveryCommand
 */
export const se_StartSourceNetworkRecoveryCommand = async (
  input: StartSourceNetworkRecoveryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/StartSourceNetworkRecovery");
  let body: any;
  body = JSON.stringify(
    take(input, {
      deployAsNew: [],
      sourceNetworks: (_) => _json(_),
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartSourceNetworkReplicationCommand
 */
export const se_StartSourceNetworkReplicationCommand = async (
  input: StartSourceNetworkReplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/StartSourceNetworkReplication");
  let body: any;
  body = JSON.stringify(
    take(input, {
      sourceNetworkID: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StopFailbackCommand
 */
export const se_StopFailbackCommand = async (
  input: StopFailbackCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/StopFailback");
  let body: any;
  body = JSON.stringify(
    take(input, {
      recoveryInstanceID: [],
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
      sourceServerID: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StopSourceNetworkReplicationCommand
 */
export const se_StopSourceNetworkReplicationCommand = async (
  input: StopSourceNetworkReplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/StopSourceNetworkReplication");
  let body: any;
  body = JSON.stringify(
    take(input, {
      sourceNetworkID: [],
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
 * serializeAws_restJson1TerminateRecoveryInstancesCommand
 */
export const se_TerminateRecoveryInstancesCommand = async (
  input: TerminateRecoveryInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/TerminateRecoveryInstances");
  let body: any;
  body = JSON.stringify(
    take(input, {
      recoveryInstanceIDs: (_) => _json(_),
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
 * serializeAws_restJson1UpdateFailbackReplicationConfigurationCommand
 */
export const se_UpdateFailbackReplicationConfigurationCommand = async (
  input: UpdateFailbackReplicationConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/UpdateFailbackReplicationConfiguration");
  let body: any;
  body = JSON.stringify(
    take(input, {
      bandwidthThrottling: [],
      name: [],
      recoveryInstanceID: [],
      usePrivateIP: [],
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
      copyPrivateIp: [],
      copyTags: [],
      launchDisposition: [],
      launchIntoInstanceProperties: (_) => _json(_),
      licensing: (_) => _json(_),
      name: [],
      postLaunchEnabled: [],
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
      copyPrivateIp: [],
      copyTags: [],
      exportBucketArn: [],
      launchConfigurationTemplateID: [],
      launchDisposition: [],
      launchIntoSourceInstance: [],
      licensing: (_) => _json(_),
      postLaunchEnabled: [],
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
      associateDefaultSecurityGroup: [],
      autoReplicateNewDisks: [],
      bandwidthThrottling: [],
      createPublicIP: [],
      dataPlaneRouting: [],
      defaultLargeStagingDiskType: [],
      ebsEncryption: [],
      ebsEncryptionKeyArn: [],
      name: [],
      pitPolicy: (_) => _json(_),
      replicatedDisks: (_) => _json(_),
      replicationServerInstanceType: [],
      replicationServersSecurityGroupsIDs: (_) => _json(_),
      sourceServerID: [],
      stagingAreaSubnetId: [],
      stagingAreaTags: (_) => _json(_),
      useDedicatedReplicationServer: [],
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
      autoReplicateNewDisks: [],
      bandwidthThrottling: [],
      createPublicIP: [],
      dataPlaneRouting: [],
      defaultLargeStagingDiskType: [],
      ebsEncryption: [],
      ebsEncryptionKeyArn: [],
      pitPolicy: (_) => _json(_),
      replicationConfigurationTemplateID: [],
      replicationServerInstanceType: [],
      replicationServersSecurityGroupsIDs: (_) => _json(_),
      stagingAreaSubnetId: [],
      stagingAreaTags: (_) => _json(_),
      useDedicatedReplicationServer: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1AssociateSourceNetworkStackCommand
 */
export const de_AssociateSourceNetworkStackCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateSourceNetworkStackCommandOutput> => {
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
 * deserializeAws_restJson1CreateExtendedSourceServerCommand
 */
export const de_CreateExtendedSourceServerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateExtendedSourceServerCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    sourceServer: _json,
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
    launchConfigurationTemplate: _json,
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
    autoReplicateNewDisks: __expectBoolean,
    bandwidthThrottling: __expectLong,
    createPublicIP: __expectBoolean,
    dataPlaneRouting: __expectString,
    defaultLargeStagingDiskType: __expectString,
    ebsEncryption: __expectString,
    ebsEncryptionKeyArn: __expectString,
    pitPolicy: _json,
    replicationConfigurationTemplateID: __expectString,
    replicationServerInstanceType: __expectString,
    replicationServersSecurityGroupsIDs: _json,
    stagingAreaSubnetId: __expectString,
    stagingAreaTags: _json,
    tags: _json,
    useDedicatedReplicationServer: __expectBoolean,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateSourceNetworkCommand
 */
export const de_CreateSourceNetworkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSourceNetworkCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    sourceNetworkID: __expectString,
  });
  Object.assign(contents, doc);
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
 * deserializeAws_restJson1DeleteLaunchActionCommand
 */
export const de_DeleteLaunchActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLaunchActionCommandOutput> => {
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
 * deserializeAws_restJson1DeleteRecoveryInstanceCommand
 */
export const de_DeleteRecoveryInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRecoveryInstanceCommandOutput> => {
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
 * deserializeAws_restJson1DeleteSourceNetworkCommand
 */
export const de_DeleteSourceNetworkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSourceNetworkCommandOutput> => {
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
    items: _json,
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
 * deserializeAws_restJson1DescribeRecoveryInstancesCommand
 */
export const de_DescribeRecoveryInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRecoveryInstancesCommandOutput> => {
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
 * deserializeAws_restJson1DescribeRecoverySnapshotsCommand
 */
export const de_DescribeRecoverySnapshotsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRecoverySnapshotsCommandOutput> => {
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
 * deserializeAws_restJson1DescribeSourceNetworksCommand
 */
export const de_DescribeSourceNetworksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSourceNetworksCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    items: (_) => de_SourceNetworksList(_, context),
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
 * deserializeAws_restJson1DisconnectRecoveryInstanceCommand
 */
export const de_DisconnectRecoveryInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisconnectRecoveryInstanceCommandOutput> => {
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
 * deserializeAws_restJson1DisconnectSourceServerCommand
 */
export const de_DisconnectSourceServerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisconnectSourceServerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    agentVersion: __expectString,
    arn: __expectString,
    dataReplicationInfo: _json,
    lastLaunchResult: __expectString,
    lifeCycle: _json,
    recoveryInstanceId: __expectString,
    replicationDirection: __expectString,
    reversedDirectionSourceServerArn: __expectString,
    sourceCloudProperties: _json,
    sourceNetworkID: __expectString,
    sourceProperties: _json,
    sourceServerID: __expectString,
    stagingArea: _json,
    tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ExportSourceNetworkCfnTemplateCommand
 */
export const de_ExportSourceNetworkCfnTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExportSourceNetworkCfnTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    s3DestinationUrl: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetFailbackReplicationConfigurationCommand
 */
export const de_GetFailbackReplicationConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFailbackReplicationConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    bandwidthThrottling: __expectLong,
    name: __expectString,
    recoveryInstanceID: __expectString,
    usePrivateIP: __expectBoolean,
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
    copyPrivateIp: __expectBoolean,
    copyTags: __expectBoolean,
    ec2LaunchTemplateID: __expectString,
    launchDisposition: __expectString,
    launchIntoInstanceProperties: _json,
    licensing: _json,
    name: __expectString,
    postLaunchEnabled: __expectBoolean,
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
    autoReplicateNewDisks: __expectBoolean,
    bandwidthThrottling: __expectLong,
    createPublicIP: __expectBoolean,
    dataPlaneRouting: __expectString,
    defaultLargeStagingDiskType: __expectString,
    ebsEncryption: __expectString,
    ebsEncryptionKeyArn: __expectString,
    name: __expectString,
    pitPolicy: _json,
    replicatedDisks: _json,
    replicationServerInstanceType: __expectString,
    replicationServersSecurityGroupsIDs: _json,
    sourceServerID: __expectString,
    stagingAreaSubnetId: __expectString,
    stagingAreaTags: _json,
    useDedicatedReplicationServer: __expectBoolean,
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
 * deserializeAws_restJson1ListExtensibleSourceServersCommand
 */
export const de_ListExtensibleSourceServersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListExtensibleSourceServersCommandOutput> => {
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
 * deserializeAws_restJson1ListLaunchActionsCommand
 */
export const de_ListLaunchActionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLaunchActionsCommandOutput> => {
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
 * deserializeAws_restJson1ListStagingAccountsCommand
 */
export const de_ListStagingAccountsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStagingAccountsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    accounts: _json,
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
 * deserializeAws_restJson1PutLaunchActionCommand
 */
export const de_PutLaunchActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutLaunchActionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    actionCode: __expectString,
    actionId: __expectString,
    actionVersion: __expectString,
    active: __expectBoolean,
    category: __expectString,
    description: __expectString,
    name: __expectString,
    optional: __expectBoolean,
    order: __expectInt32,
    parameters: _json,
    resourceId: __expectString,
    type: __expectString,
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
    agentVersion: __expectString,
    arn: __expectString,
    dataReplicationInfo: _json,
    lastLaunchResult: __expectString,
    lifeCycle: _json,
    recoveryInstanceId: __expectString,
    replicationDirection: __expectString,
    reversedDirectionSourceServerArn: __expectString,
    sourceCloudProperties: _json,
    sourceNetworkID: __expectString,
    sourceProperties: _json,
    sourceServerID: __expectString,
    stagingArea: _json,
    tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ReverseReplicationCommand
 */
export const de_ReverseReplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ReverseReplicationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    reversedDirectionSourceServerArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StartFailbackLaunchCommand
 */
export const de_StartFailbackLaunchCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartFailbackLaunchCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
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
 * deserializeAws_restJson1StartRecoveryCommand
 */
export const de_StartRecoveryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartRecoveryCommandOutput> => {
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
    sourceServer: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StartSourceNetworkRecoveryCommand
 */
export const de_StartSourceNetworkRecoveryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartSourceNetworkRecoveryCommandOutput> => {
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
 * deserializeAws_restJson1StartSourceNetworkReplicationCommand
 */
export const de_StartSourceNetworkReplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartSourceNetworkReplicationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    sourceNetwork: (_) => de_SourceNetwork(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StopFailbackCommand
 */
export const de_StopFailbackCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopFailbackCommandOutput> => {
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
    sourceServer: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StopSourceNetworkReplicationCommand
 */
export const de_StopSourceNetworkReplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopSourceNetworkReplicationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    sourceNetwork: (_) => de_SourceNetwork(_, context),
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
 * deserializeAws_restJson1TerminateRecoveryInstancesCommand
 */
export const de_TerminateRecoveryInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TerminateRecoveryInstancesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
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
 * deserializeAws_restJson1UpdateFailbackReplicationConfigurationCommand
 */
export const de_UpdateFailbackReplicationConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFailbackReplicationConfigurationCommandOutput> => {
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
    copyPrivateIp: __expectBoolean,
    copyTags: __expectBoolean,
    ec2LaunchTemplateID: __expectString,
    launchDisposition: __expectString,
    launchIntoInstanceProperties: _json,
    licensing: _json,
    name: __expectString,
    postLaunchEnabled: __expectBoolean,
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
    launchConfigurationTemplate: _json,
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
    autoReplicateNewDisks: __expectBoolean,
    bandwidthThrottling: __expectLong,
    createPublicIP: __expectBoolean,
    dataPlaneRouting: __expectString,
    defaultLargeStagingDiskType: __expectString,
    ebsEncryption: __expectString,
    ebsEncryptionKeyArn: __expectString,
    name: __expectString,
    pitPolicy: _json,
    replicatedDisks: _json,
    replicationServerInstanceType: __expectString,
    replicationServersSecurityGroupsIDs: _json,
    sourceServerID: __expectString,
    stagingAreaSubnetId: __expectString,
    stagingAreaTags: _json,
    useDedicatedReplicationServer: __expectBoolean,
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
    autoReplicateNewDisks: __expectBoolean,
    bandwidthThrottling: __expectLong,
    createPublicIP: __expectBoolean,
    dataPlaneRouting: __expectString,
    defaultLargeStagingDiskType: __expectString,
    ebsEncryption: __expectString,
    ebsEncryptionKeyArn: __expectString,
    pitPolicy: _json,
    replicationConfigurationTemplateID: __expectString,
    replicationServerInstanceType: __expectString,
    replicationServersSecurityGroupsIDs: _json,
    stagingAreaSubnetId: __expectString,
    stagingAreaTags: _json,
    tags: _json,
    useDedicatedReplicationServer: __expectBoolean,
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
    case "com.amazonaws.drs#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.drs#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.drs#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.drs#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.drs#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.drs#UninitializedAccountException":
      throw await de_UninitializedAccountExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.drs#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.drs#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
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

// se_AccountIDs omitted.

// se_DescribeJobsRequestFilters omitted.

// se_DescribeJobsRequestFiltersJobIDs omitted.

// se_DescribeRecoveryInstancesRequestFilters omitted.

// se_DescribeRecoverySnapshotsRequestFilters omitted.

// se_DescribeSourceNetworksRequestFilters omitted.

// se_DescribeSourceNetworksRequestFiltersIDs omitted.

// se_DescribeSourceServersRequestFilters omitted.

// se_DescribeSourceServersRequestFiltersIDs omitted.

// se_LaunchActionIds omitted.

// se_LaunchActionParameter omitted.

// se_LaunchActionParameters omitted.

// se_LaunchActionsRequestFilters omitted.

// se_LaunchConfigurationTemplateIDs omitted.

// se_LaunchIntoInstanceProperties omitted.

// se_Licensing omitted.

// se_PITPolicy omitted.

// se_PITPolicyRule omitted.

// se_RecoveryInstanceIDs omitted.

// se_RecoveryInstancesForTerminationRequest omitted.

// se_ReplicationConfigurationReplicatedDisk omitted.

// se_ReplicationConfigurationReplicatedDisks omitted.

// se_ReplicationConfigurationTemplateIDs omitted.

// se_ReplicationServersSecurityGroupsIDs omitted.

// se_SourceServerIDs omitted.

// se_StartFailbackRequestRecoveryInstanceIDs omitted.

// se_StartRecoveryRequestSourceServer omitted.

// se_StartRecoveryRequestSourceServers omitted.

// se_StartSourceNetworkRecoveryRequestNetworkEntries omitted.

// se_StartSourceNetworkRecoveryRequestNetworkEntry omitted.

// se_TagsMap omitted.

// de_Account omitted.

// de_Accounts omitted.

// de_ConversionMap omitted.

// de_ConversionProperties omitted.

// de_CPU omitted.

// de_Cpus omitted.

// de_DataReplicationError omitted.

// de_DataReplicationInfo omitted.

// de_DataReplicationInfoReplicatedDisk omitted.

// de_DataReplicationInfoReplicatedDisks omitted.

// de_DataReplicationInitiation omitted.

// de_DataReplicationInitiationStep omitted.

// de_DataReplicationInitiationSteps omitted.

// de_DescribeRecoveryInstancesItems omitted.

// de_Disk omitted.

// de_Disks omitted.

// de_EbsSnapshotsList omitted.

// de_EventResourceData omitted.

// de_IdentificationHints omitted.

// de_IPsList omitted.

// de_Job omitted.

// de_JobLog omitted.

// de_JobLogEventData omitted.

// de_JobLogs omitted.

// de_JobsList omitted.

// de_LaunchAction omitted.

// de_LaunchActionParameter omitted.

// de_LaunchActionParameters omitted.

// de_LaunchActionRun omitted.

// de_LaunchActionRuns omitted.

// de_LaunchActions omitted.

// de_LaunchActionsStatus omitted.

// de_LaunchConfigurationTemplate omitted.

// de_LaunchConfigurationTemplates omitted.

// de_LaunchIntoInstanceProperties omitted.

// de_Licensing omitted.

// de_LifeCycle omitted.

// de_LifeCycleLastLaunch omitted.

// de_LifeCycleLastLaunchInitiated omitted.

// de_NetworkInterface omitted.

// de_NetworkInterfaces omitted.

// de_OS omitted.

// de_ParticipatingResource omitted.

// de_ParticipatingResourceID omitted.

// de_ParticipatingResources omitted.

// de_ParticipatingServer omitted.

// de_ParticipatingServers omitted.

// de_PITPolicy omitted.

// de_PITPolicyRule omitted.

// de_ProductCode omitted.

// de_ProductCodes omitted.

// de_RecoveryInstance omitted.

// de_RecoveryInstanceDataReplicationError omitted.

// de_RecoveryInstanceDataReplicationInfo omitted.

// de_RecoveryInstanceDataReplicationInfoReplicatedDisk omitted.

// de_RecoveryInstanceDataReplicationInfoReplicatedDisks omitted.

// de_RecoveryInstanceDataReplicationInitiation omitted.

// de_RecoveryInstanceDataReplicationInitiationStep omitted.

// de_RecoveryInstanceDataReplicationInitiationSteps omitted.

// de_RecoveryInstanceDisk omitted.

// de_RecoveryInstanceDisks omitted.

// de_RecoveryInstanceFailback omitted.

// de_RecoveryInstanceProperties omitted.

/**
 * deserializeAws_restJson1RecoveryLifeCycle
 */
const de_RecoveryLifeCycle = (output: any, context: __SerdeContext): RecoveryLifeCycle => {
  return take(output, {
    apiCallDateTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    jobID: __expectString,
    lastRecoveryResult: __expectString,
  }) as any;
};

// de_RecoverySnapshot omitted.

// de_RecoverySnapshotsList omitted.

// de_ReplicationConfigurationReplicatedDisk omitted.

// de_ReplicationConfigurationReplicatedDisks omitted.

// de_ReplicationConfigurationTemplate omitted.

// de_ReplicationConfigurationTemplates omitted.

// de_ReplicationServersSecurityGroupsIDs omitted.

// de_SourceCloudProperties omitted.

/**
 * deserializeAws_restJson1SourceNetwork
 */
const de_SourceNetwork = (output: any, context: __SerdeContext): SourceNetwork => {
  return take(output, {
    arn: __expectString,
    cfnStackName: __expectString,
    lastRecovery: (_: any) => de_RecoveryLifeCycle(_, context),
    launchedVpcID: __expectString,
    replicationStatus: __expectString,
    replicationStatusDetails: __expectString,
    sourceAccountID: __expectString,
    sourceNetworkID: __expectString,
    sourceRegion: __expectString,
    sourceVpcID: __expectString,
    tags: _json,
  }) as any;
};

// de_SourceNetworkData omitted.

/**
 * deserializeAws_restJson1SourceNetworksList
 */
const de_SourceNetworksList = (output: any, context: __SerdeContext): SourceNetwork[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SourceNetwork(entry, context);
    });
  return retVal;
};

// de_SourceProperties omitted.

// de_SourceServer omitted.

// de_SourceServersList omitted.

// de_StagingArea omitted.

// de_StagingSourceServer omitted.

// de_StagingSourceServersList omitted.

// de_TagsMap omitted.

// de_ValidationExceptionField omitted.

// de_ValidationExceptionFieldList omitted.

// de_VolumeToConversionMap omitted.

// de_VolumeToProductCodes omitted.

// de_VolumeToSizeMap omitted.

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
