export const _ACA = "AssociateCreatedArtifact";
export const _ACAR = "AssociateCreatedArtifactRequest";
export const _ACARs = "AssociateCreatedArtifactResult";
export const _ADE = "AccessDeniedException";
export const _ADR = "AssociateDiscoveredResource";
export const _ADRR = "AssociateDiscoveredResourceRequest";
export const _ADRRs = "AssociateDiscoveredResourceResult";
export const _AI = "ApplicationId";
export const _AIp = "ApplicationIds";
export const _AS = "ApplicationState";
export const _ASL = "ApplicationStateList";
export const _ASR = "AssociateSourceResource";
export const _ASRR = "AssociateSourceResourceRequest";
export const _ASRRs = "AssociateSourceResourceResult";
export const _ASp = "ApplicationStatus";
export const _CA = "CreatedArtifact";
export const _CAL = "CreatedArtifactList";
export const _CAN = "CreatedArtifactName";
export const _CI = "ConfigurationId";
export const _CPUS = "CreateProgressUpdateStream";
export const _CPUSR = "CreateProgressUpdateStreamRequest";
export const _CPUSRr = "CreateProgressUpdateStreamResult";
export const _D = "Description";
export const _DAS = "DescribeApplicationState";
export const _DASR = "DescribeApplicationStateRequest";
export const _DASRe = "DescribeApplicationStateResult";
export const _DCA = "DisassociateCreatedArtifact";
export const _DCAR = "DisassociateCreatedArtifactRequest";
export const _DCARi = "DisassociateCreatedArtifactResult";
export const _DDR = "DisassociateDiscoveredResource";
export const _DDRR = "DisassociateDiscoveredResourceRequest";
export const _DDRRi = "DisassociateDiscoveredResourceResult";
export const _DMT = "DescribeMigrationTask";
export const _DMTR = "DescribeMigrationTaskRequest";
export const _DMTRe = "DescribeMigrationTaskResult";
export const _DPUS = "DeleteProgressUpdateStream";
export const _DPUSR = "DeleteProgressUpdateStreamRequest";
export const _DPUSRe = "DeleteProgressUpdateStreamResult";
export const _DR = "DryRun";
export const _DRL = "DiscoveredResourceList";
export const _DRO = "DryRunOperation";
export const _DRi = "DiscoveredResource";
export const _DSR = "DisassociateSourceResource";
export const _DSRR = "DisassociateSourceResourceRequest";
export const _DSRRi = "DisassociateSourceResourceResult";
export const _HRNSE = "HomeRegionNotSetException";
export const _IIE = "InvalidInputException";
export const _IMT = "ImportMigrationTask";
export const _IMTR = "ImportMigrationTaskRequest";
export const _IMTRm = "ImportMigrationTaskResult";
export const _ISE = "InternalServerError";
export const _LAS = "ListApplicationStates";
export const _LASR = "ListApplicationStatesRequest";
export const _LASRi = "ListApplicationStatesResult";
export const _LCA = "ListCreatedArtifacts";
export const _LCAR = "ListCreatedArtifactsRequest";
export const _LCARi = "ListCreatedArtifactsResult";
export const _LDR = "ListDiscoveredResources";
export const _LDRR = "ListDiscoveredResourcesRequest";
export const _LDRRi = "ListDiscoveredResourcesResult";
export const _LMT = "ListMigrationTasks";
export const _LMTR = "ListMigrationTasksRequest";
export const _LMTRi = "ListMigrationTasksResult";
export const _LMTU = "ListMigrationTaskUpdates";
export const _LMTUR = "ListMigrationTaskUpdatesRequest";
export const _LMTURi = "ListMigrationTaskUpdatesResult";
export const _LPUS = "ListProgressUpdateStreams";
export const _LPUSR = "ListProgressUpdateStreamsRequest";
export const _LPUSRi = "ListProgressUpdateStreamsResult";
export const _LRAL = "LatestResourceAttributeList";
export const _LSR = "ListSourceResources";
export const _LSRR = "ListSourceResourcesRequest";
export const _LSRRi = "ListSourceResourcesResult";
export const _LUT = "LastUpdatedTime";
export const _M = "Message";
export const _MR = "MaxResults";
export const _MT = "MigrationTask";
export const _MTN = "MigrationTaskName";
export const _MTS = "MigrationTaskSummary";
export const _MTSL = "MigrationTaskSummaryList";
export const _MTSi = "MigrationTaskState";
export const _MTU = "MigrationTaskUpdate";
export const _MTUL = "MigrationTaskUpdateList";
export const _N = "Name";
export const _NAS = "NotifyApplicationState";
export const _NASR = "NotifyApplicationStateRequest";
export const _NASRo = "NotifyApplicationStateResult";
export const _NMTS = "NotifyMigrationTaskState";
export const _NMTSR = "NotifyMigrationTaskStateRequest";
export const _NMTSRo = "NotifyMigrationTaskStateResult";
export const _NT = "NextToken";
export const _NUS = "NextUpdateSeconds";
export const _PEE = "PolicyErrorException";
export const _PP = "ProgressPercent";
export const _PRA = "PutResourceAttributes";
export const _PRAR = "PutResourceAttributesRequest";
export const _PRARu = "PutResourceAttributesResult";
export const _PUS = "ProgressUpdateStream";
export const _PUSN = "ProgressUpdateStreamName";
export const _PUSS = "ProgressUpdateStreamSummary";
export const _PUSSL = "ProgressUpdateStreamSummaryList";
export const _RA = "ResourceAttribute";
export const _RAL = "ResourceAttributeList";
export const _RAS = "RetryAfterSeconds";
export const _RA_ = "Retry-After";
export const _RN = "ResourceName";
export const _RNFE = "ResourceNotFoundException";
export const _S = "Status";
export const _SD = "StatusDetail";
export const _SR = "SourceResource";
export const _SRL = "SourceResourceList";
export const _SRN = "SourceResourceName";
export const _SUE = "ServiceUnavailableException";
export const _T = "Task";
export const _TE = "ThrottlingException";
export const _Ty = "Type";
export const _UDT = "UpdateDateTime";
export const _UO = "UnauthorizedOperation";
export const _UT = "UpdateType";
export const _V = "Value";
export const _c = "client";
export const _e = "error";
export const _hE = "httpError";
export const _hH = "httpHeader";
export const _s = "server";
export const n0 = "com.amazonaws.migrationhub";

// smithy-typescript generated code
import { error } from "@smithy/core/schema";

import {
  AccessDeniedException as __AccessDeniedException,
  HomeRegionNotSetException as __HomeRegionNotSetException,
  InternalServerError as __InternalServerError,
  InvalidInputException as __InvalidInputException,
  ResourceNotFoundException as __ResourceNotFoundException,
  ServiceUnavailableException as __ServiceUnavailableException,
  ThrottlingException as __ThrottlingException,
} from "../models/index";
import { MigrationHubServiceException as __MigrationHubServiceException } from "../models/MigrationHubServiceException";

/* eslint no-var: 0 */

export var AccessDeniedException = error(
  n0,
  _ADE,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __AccessDeniedException
);
export var HomeRegionNotSetException = error(
  n0,
  _HRNSE,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __HomeRegionNotSetException
);
export var InternalServerError = error(
  n0,
  _ISE,
  {
    [_e]: _s,
  },
  [_M],
  [0],

  __InternalServerError
);
export var InvalidInputException = error(
  n0,
  _IIE,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __InvalidInputException
);
export var ResourceNotFoundException = error(
  n0,
  _RNFE,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __ResourceNotFoundException
);
export var ServiceUnavailableException = error(
  n0,
  _SUE,
  {
    [_e]: _s,
  },
  [_M],
  [0],

  __ServiceUnavailableException
);
export var ThrottlingException = error(
  n0,
  _TE,
  {
    [_e]: _c,
    [_hE]: 429,
  },
  [_M, _RAS],
  [
    0,
    [
      1,
      {
        [_hH]: _RA_,
      },
    ],
  ],

  __ThrottlingException
);
export var MigrationHubServiceException = error(
  "smithy.ts.sdk.synthetic.com.amazonaws.migrationhub",
  "MigrationHubServiceException",
  0,
  [],
  [],
  __MigrationHubServiceException
);
