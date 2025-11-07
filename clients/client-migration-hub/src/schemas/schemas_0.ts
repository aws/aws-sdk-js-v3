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
export const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.migrationhub";
export const n0 = "com.amazonaws.migrationhub";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import { StaticErrorSchema, StaticListSchema, StaticOperationSchema, StaticStructureSchema } from "@smithy/types";

import {
  AccessDeniedException as __AccessDeniedException,
  DryRunOperation as __DryRunOperation,
  HomeRegionNotSetException as __HomeRegionNotSetException,
  InternalServerError as __InternalServerError,
  InvalidInputException as __InvalidInputException,
  PolicyErrorException as __PolicyErrorException,
  ResourceNotFoundException as __ResourceNotFoundException,
  ServiceUnavailableException as __ServiceUnavailableException,
  ThrottlingException as __ThrottlingException,
  UnauthorizedOperation as __UnauthorizedOperation,
} from "../models/index";
import { MigrationHubServiceException as __MigrationHubServiceException } from "../models/MigrationHubServiceException";

/* eslint no-var: 0 */

export var AccessDeniedException: StaticErrorSchema = [
  -3,
  n0,
  _ADE,
  {
    [_e]: _c,
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(AccessDeniedException, __AccessDeniedException);

export var ApplicationState: StaticStructureSchema = [3, n0, _AS, 0, [_AI, _ASp, _LUT], [0, 0, 4]];
export var AssociateCreatedArtifactRequest: StaticStructureSchema = [
  3,
  n0,
  _ACAR,
  0,
  [_PUS, _MTN, _CA, _DR],
  [0, 0, () => CreatedArtifact, 2],
];
export var AssociateCreatedArtifactResult: StaticStructureSchema = [3, n0, _ACARs, 0, [], []];
export var AssociateDiscoveredResourceRequest: StaticStructureSchema = [
  3,
  n0,
  _ADRR,
  0,
  [_PUS, _MTN, _DRi, _DR],
  [0, 0, () => DiscoveredResource, 2],
];
export var AssociateDiscoveredResourceResult: StaticStructureSchema = [3, n0, _ADRRs, 0, [], []];
export var AssociateSourceResourceRequest: StaticStructureSchema = [
  3,
  n0,
  _ASRR,
  0,
  [_PUS, _MTN, _SR, _DR],
  [0, 0, () => SourceResource, 2],
];
export var AssociateSourceResourceResult: StaticStructureSchema = [3, n0, _ASRRs, 0, [], []];
export var CreatedArtifact: StaticStructureSchema = [3, n0, _CA, 0, [_N, _D], [0, 0]];
export var CreateProgressUpdateStreamRequest: StaticStructureSchema = [3, n0, _CPUSR, 0, [_PUSN, _DR], [0, 2]];
export var CreateProgressUpdateStreamResult: StaticStructureSchema = [3, n0, _CPUSRr, 0, [], []];
export var DeleteProgressUpdateStreamRequest: StaticStructureSchema = [3, n0, _DPUSR, 0, [_PUSN, _DR], [0, 2]];
export var DeleteProgressUpdateStreamResult: StaticStructureSchema = [3, n0, _DPUSRe, 0, [], []];
export var DescribeApplicationStateRequest: StaticStructureSchema = [3, n0, _DASR, 0, [_AI], [0]];
export var DescribeApplicationStateResult: StaticStructureSchema = [3, n0, _DASRe, 0, [_ASp, _LUT], [0, 4]];
export var DescribeMigrationTaskRequest: StaticStructureSchema = [3, n0, _DMTR, 0, [_PUS, _MTN], [0, 0]];
export var DescribeMigrationTaskResult: StaticStructureSchema = [3, n0, _DMTRe, 0, [_MT], [() => MigrationTask]];
export var DisassociateCreatedArtifactRequest: StaticStructureSchema = [
  3,
  n0,
  _DCAR,
  0,
  [_PUS, _MTN, _CAN, _DR],
  [0, 0, 0, 2],
];
export var DisassociateCreatedArtifactResult: StaticStructureSchema = [3, n0, _DCARi, 0, [], []];
export var DisassociateDiscoveredResourceRequest: StaticStructureSchema = [
  3,
  n0,
  _DDRR,
  0,
  [_PUS, _MTN, _CI, _DR],
  [0, 0, 0, 2],
];
export var DisassociateDiscoveredResourceResult: StaticStructureSchema = [3, n0, _DDRRi, 0, [], []];
export var DisassociateSourceResourceRequest: StaticStructureSchema = [
  3,
  n0,
  _DSRR,
  0,
  [_PUS, _MTN, _SRN, _DR],
  [0, 0, 0, 2],
];
export var DisassociateSourceResourceResult: StaticStructureSchema = [3, n0, _DSRRi, 0, [], []];
export var DiscoveredResource: StaticStructureSchema = [3, n0, _DRi, 0, [_CI, _D], [0, 0]];
export var DryRunOperation: StaticErrorSchema = [
  -3,
  n0,
  _DRO,
  {
    [_e]: _c,
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(DryRunOperation, __DryRunOperation);

export var HomeRegionNotSetException: StaticErrorSchema = [
  -3,
  n0,
  _HRNSE,
  {
    [_e]: _c,
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(HomeRegionNotSetException, __HomeRegionNotSetException);

export var ImportMigrationTaskRequest: StaticStructureSchema = [3, n0, _IMTR, 0, [_PUS, _MTN, _DR], [0, 0, 2]];
export var ImportMigrationTaskResult: StaticStructureSchema = [3, n0, _IMTRm, 0, [], []];
export var InternalServerError: StaticErrorSchema = [
  -3,
  n0,
  _ISE,
  {
    [_e]: _s,
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(InternalServerError, __InternalServerError);

export var InvalidInputException: StaticErrorSchema = [
  -3,
  n0,
  _IIE,
  {
    [_e]: _c,
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(InvalidInputException, __InvalidInputException);

export var ListApplicationStatesRequest: StaticStructureSchema = [3, n0, _LASR, 0, [_AIp, _NT, _MR], [64 | 0, 0, 1]];
export var ListApplicationStatesResult: StaticStructureSchema = [
  3,
  n0,
  _LASRi,
  0,
  [_ASL, _NT],
  [() => ApplicationStateList, 0],
];
export var ListCreatedArtifactsRequest: StaticStructureSchema = [3, n0, _LCAR, 0, [_PUS, _MTN, _NT, _MR], [0, 0, 0, 1]];
export var ListCreatedArtifactsResult: StaticStructureSchema = [
  3,
  n0,
  _LCARi,
  0,
  [_NT, _CAL],
  [0, () => CreatedArtifactList],
];
export var ListDiscoveredResourcesRequest: StaticStructureSchema = [
  3,
  n0,
  _LDRR,
  0,
  [_PUS, _MTN, _NT, _MR],
  [0, 0, 0, 1],
];
export var ListDiscoveredResourcesResult: StaticStructureSchema = [
  3,
  n0,
  _LDRRi,
  0,
  [_NT, _DRL],
  [0, () => DiscoveredResourceList],
];
export var ListMigrationTasksRequest: StaticStructureSchema = [3, n0, _LMTR, 0, [_NT, _MR, _RN], [0, 1, 0]];
export var ListMigrationTasksResult: StaticStructureSchema = [
  3,
  n0,
  _LMTRi,
  0,
  [_NT, _MTSL],
  [0, () => MigrationTaskSummaryList],
];
export var ListMigrationTaskUpdatesRequest: StaticStructureSchema = [
  3,
  n0,
  _LMTUR,
  0,
  [_PUS, _MTN, _NT, _MR],
  [0, 0, 0, 1],
];
export var ListMigrationTaskUpdatesResult: StaticStructureSchema = [
  3,
  n0,
  _LMTURi,
  0,
  [_NT, _MTUL],
  [0, () => MigrationTaskUpdateList],
];
export var ListProgressUpdateStreamsRequest: StaticStructureSchema = [3, n0, _LPUSR, 0, [_NT, _MR], [0, 1]];
export var ListProgressUpdateStreamsResult: StaticStructureSchema = [
  3,
  n0,
  _LPUSRi,
  0,
  [_PUSSL, _NT],
  [() => ProgressUpdateStreamSummaryList, 0],
];
export var ListSourceResourcesRequest: StaticStructureSchema = [3, n0, _LSRR, 0, [_PUS, _MTN, _NT, _MR], [0, 0, 0, 1]];
export var ListSourceResourcesResult: StaticStructureSchema = [
  3,
  n0,
  _LSRRi,
  0,
  [_NT, _SRL],
  [0, () => SourceResourceList],
];
export var MigrationTask: StaticStructureSchema = [
  3,
  n0,
  _MT,
  0,
  [_PUS, _MTN, _T, _UDT, _RAL],
  [0, 0, () => Task, 4, () => LatestResourceAttributeList],
];
export var MigrationTaskSummary: StaticStructureSchema = [
  3,
  n0,
  _MTS,
  0,
  [_PUS, _MTN, _S, _PP, _SD, _UDT],
  [0, 0, 0, 1, 0, 4],
];
export var MigrationTaskUpdate: StaticStructureSchema = [3, n0, _MTU, 0, [_UDT, _UT, _MTSi], [4, 0, () => Task]];
export var NotifyApplicationStateRequest: StaticStructureSchema = [3, n0, _NASR, 0, [_AI, _S, _UDT, _DR], [0, 0, 4, 2]];
export var NotifyApplicationStateResult: StaticStructureSchema = [3, n0, _NASRo, 0, [], []];
export var NotifyMigrationTaskStateRequest: StaticStructureSchema = [
  3,
  n0,
  _NMTSR,
  0,
  [_PUS, _MTN, _T, _UDT, _NUS, _DR],
  [0, 0, () => Task, 4, 1, 2],
];
export var NotifyMigrationTaskStateResult: StaticStructureSchema = [3, n0, _NMTSRo, 0, [], []];
export var PolicyErrorException: StaticErrorSchema = [
  -3,
  n0,
  _PEE,
  {
    [_e]: _c,
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(PolicyErrorException, __PolicyErrorException);

export var ProgressUpdateStreamSummary: StaticStructureSchema = [3, n0, _PUSS, 0, [_PUSN], [0]];
export var PutResourceAttributesRequest: StaticStructureSchema = [
  3,
  n0,
  _PRAR,
  0,
  [_PUS, _MTN, _RAL, _DR],
  [0, 0, () => ResourceAttributeList, 2],
];
export var PutResourceAttributesResult: StaticStructureSchema = [3, n0, _PRARu, 0, [], []];
export var ResourceAttribute: StaticStructureSchema = [3, n0, _RA, 0, [_Ty, _V], [0, 0]];
export var ResourceNotFoundException: StaticErrorSchema = [
  -3,
  n0,
  _RNFE,
  {
    [_e]: _c,
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(ResourceNotFoundException, __ResourceNotFoundException);

export var ServiceUnavailableException: StaticErrorSchema = [
  -3,
  n0,
  _SUE,
  {
    [_e]: _s,
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(ServiceUnavailableException, __ServiceUnavailableException);

export var SourceResource: StaticStructureSchema = [3, n0, _SR, 0, [_N, _D, _SD], [0, 0, 0]];
export var Task: StaticStructureSchema = [3, n0, _T, 0, [_S, _SD, _PP], [0, 0, 1]];
export var ThrottlingException: StaticErrorSchema = [
  -3,
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
];
TypeRegistry.for(n0).registerError(ThrottlingException, __ThrottlingException);

export var UnauthorizedOperation: StaticErrorSchema = [
  -3,
  n0,
  _UO,
  {
    [_e]: _c,
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(UnauthorizedOperation, __UnauthorizedOperation);

export var __Unit = "unit" as const;

export var MigrationHubServiceException: StaticErrorSchema = [-3, _sm, "MigrationHubServiceException", 0, [], []];
TypeRegistry.for(_sm).registerError(MigrationHubServiceException, __MigrationHubServiceException);

export var ApplicationIds = 64 | 0;

export var ApplicationStateList: StaticListSchema = [1, n0, _ASL, 0, () => ApplicationState];
export var CreatedArtifactList: StaticListSchema = [1, n0, _CAL, 0, () => CreatedArtifact];
export var DiscoveredResourceList: StaticListSchema = [1, n0, _DRL, 0, () => DiscoveredResource];
export var LatestResourceAttributeList: StaticListSchema = [1, n0, _LRAL, 0, () => ResourceAttribute];
export var MigrationTaskSummaryList: StaticListSchema = [1, n0, _MTSL, 0, () => MigrationTaskSummary];
export var MigrationTaskUpdateList: StaticListSchema = [1, n0, _MTUL, 0, () => MigrationTaskUpdate];
export var ProgressUpdateStreamSummaryList: StaticListSchema = [1, n0, _PUSSL, 0, () => ProgressUpdateStreamSummary];
export var ResourceAttributeList: StaticListSchema = [1, n0, _RAL, 0, () => ResourceAttribute];
export var SourceResourceList: StaticListSchema = [1, n0, _SRL, 0, () => SourceResource];
export var AssociateCreatedArtifact: StaticOperationSchema = [
  9,
  n0,
  _ACA,
  0,
  () => AssociateCreatedArtifactRequest,
  () => AssociateCreatedArtifactResult,
];
export var AssociateDiscoveredResource: StaticOperationSchema = [
  9,
  n0,
  _ADR,
  0,
  () => AssociateDiscoveredResourceRequest,
  () => AssociateDiscoveredResourceResult,
];
export var AssociateSourceResource: StaticOperationSchema = [
  9,
  n0,
  _ASR,
  0,
  () => AssociateSourceResourceRequest,
  () => AssociateSourceResourceResult,
];
export var CreateProgressUpdateStream: StaticOperationSchema = [
  9,
  n0,
  _CPUS,
  0,
  () => CreateProgressUpdateStreamRequest,
  () => CreateProgressUpdateStreamResult,
];
export var DeleteProgressUpdateStream: StaticOperationSchema = [
  9,
  n0,
  _DPUS,
  0,
  () => DeleteProgressUpdateStreamRequest,
  () => DeleteProgressUpdateStreamResult,
];
export var DescribeApplicationState: StaticOperationSchema = [
  9,
  n0,
  _DAS,
  0,
  () => DescribeApplicationStateRequest,
  () => DescribeApplicationStateResult,
];
export var DescribeMigrationTask: StaticOperationSchema = [
  9,
  n0,
  _DMT,
  0,
  () => DescribeMigrationTaskRequest,
  () => DescribeMigrationTaskResult,
];
export var DisassociateCreatedArtifact: StaticOperationSchema = [
  9,
  n0,
  _DCA,
  0,
  () => DisassociateCreatedArtifactRequest,
  () => DisassociateCreatedArtifactResult,
];
export var DisassociateDiscoveredResource: StaticOperationSchema = [
  9,
  n0,
  _DDR,
  0,
  () => DisassociateDiscoveredResourceRequest,
  () => DisassociateDiscoveredResourceResult,
];
export var DisassociateSourceResource: StaticOperationSchema = [
  9,
  n0,
  _DSR,
  0,
  () => DisassociateSourceResourceRequest,
  () => DisassociateSourceResourceResult,
];
export var ImportMigrationTask: StaticOperationSchema = [
  9,
  n0,
  _IMT,
  0,
  () => ImportMigrationTaskRequest,
  () => ImportMigrationTaskResult,
];
export var ListApplicationStates: StaticOperationSchema = [
  9,
  n0,
  _LAS,
  0,
  () => ListApplicationStatesRequest,
  () => ListApplicationStatesResult,
];
export var ListCreatedArtifacts: StaticOperationSchema = [
  9,
  n0,
  _LCA,
  0,
  () => ListCreatedArtifactsRequest,
  () => ListCreatedArtifactsResult,
];
export var ListDiscoveredResources: StaticOperationSchema = [
  9,
  n0,
  _LDR,
  0,
  () => ListDiscoveredResourcesRequest,
  () => ListDiscoveredResourcesResult,
];
export var ListMigrationTasks: StaticOperationSchema = [
  9,
  n0,
  _LMT,
  0,
  () => ListMigrationTasksRequest,
  () => ListMigrationTasksResult,
];
export var ListMigrationTaskUpdates: StaticOperationSchema = [
  9,
  n0,
  _LMTU,
  0,
  () => ListMigrationTaskUpdatesRequest,
  () => ListMigrationTaskUpdatesResult,
];
export var ListProgressUpdateStreams: StaticOperationSchema = [
  9,
  n0,
  _LPUS,
  0,
  () => ListProgressUpdateStreamsRequest,
  () => ListProgressUpdateStreamsResult,
];
export var ListSourceResources: StaticOperationSchema = [
  9,
  n0,
  _LSR,
  0,
  () => ListSourceResourcesRequest,
  () => ListSourceResourcesResult,
];
export var NotifyApplicationState: StaticOperationSchema = [
  9,
  n0,
  _NAS,
  0,
  () => NotifyApplicationStateRequest,
  () => NotifyApplicationStateResult,
];
export var NotifyMigrationTaskState: StaticOperationSchema = [
  9,
  n0,
  _NMTS,
  0,
  () => NotifyMigrationTaskStateRequest,
  () => NotifyMigrationTaskStateResult,
];
export var PutResourceAttributes: StaticOperationSchema = [
  9,
  n0,
  _PRA,
  0,
  () => PutResourceAttributesRequest,
  () => PutResourceAttributesResult,
];
