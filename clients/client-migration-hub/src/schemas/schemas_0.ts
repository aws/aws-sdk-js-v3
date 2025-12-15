const _ACA = "AssociateCreatedArtifact";
const _ACAR = "AssociateCreatedArtifactRequest";
const _ACARs = "AssociateCreatedArtifactResult";
const _ADE = "AccessDeniedException";
const _ADR = "AssociateDiscoveredResource";
const _ADRR = "AssociateDiscoveredResourceRequest";
const _ADRRs = "AssociateDiscoveredResourceResult";
const _AI = "ApplicationId";
const _AIp = "ApplicationIds";
const _AS = "ApplicationState";
const _ASL = "ApplicationStateList";
const _ASR = "AssociateSourceResource";
const _ASRR = "AssociateSourceResourceRequest";
const _ASRRs = "AssociateSourceResourceResult";
const _ASp = "ApplicationStatus";
const _CA = "CreatedArtifact";
const _CAL = "CreatedArtifactList";
const _CAN = "CreatedArtifactName";
const _CI = "ConfigurationId";
const _CPUS = "CreateProgressUpdateStream";
const _CPUSR = "CreateProgressUpdateStreamRequest";
const _CPUSRr = "CreateProgressUpdateStreamResult";
const _D = "Description";
const _DAS = "DescribeApplicationState";
const _DASR = "DescribeApplicationStateRequest";
const _DASRe = "DescribeApplicationStateResult";
const _DCA = "DisassociateCreatedArtifact";
const _DCAR = "DisassociateCreatedArtifactRequest";
const _DCARi = "DisassociateCreatedArtifactResult";
const _DDR = "DisassociateDiscoveredResource";
const _DDRR = "DisassociateDiscoveredResourceRequest";
const _DDRRi = "DisassociateDiscoveredResourceResult";
const _DMT = "DescribeMigrationTask";
const _DMTR = "DescribeMigrationTaskRequest";
const _DMTRe = "DescribeMigrationTaskResult";
const _DPUS = "DeleteProgressUpdateStream";
const _DPUSR = "DeleteProgressUpdateStreamRequest";
const _DPUSRe = "DeleteProgressUpdateStreamResult";
const _DR = "DryRun";
const _DRL = "DiscoveredResourceList";
const _DRO = "DryRunOperation";
const _DRi = "DiscoveredResource";
const _DSR = "DisassociateSourceResource";
const _DSRR = "DisassociateSourceResourceRequest";
const _DSRRi = "DisassociateSourceResourceResult";
const _HRNSE = "HomeRegionNotSetException";
const _IIE = "InvalidInputException";
const _IMT = "ImportMigrationTask";
const _IMTR = "ImportMigrationTaskRequest";
const _IMTRm = "ImportMigrationTaskResult";
const _ISE = "InternalServerError";
const _LAS = "ListApplicationStates";
const _LASR = "ListApplicationStatesRequest";
const _LASRi = "ListApplicationStatesResult";
const _LCA = "ListCreatedArtifacts";
const _LCAR = "ListCreatedArtifactsRequest";
const _LCARi = "ListCreatedArtifactsResult";
const _LDR = "ListDiscoveredResources";
const _LDRR = "ListDiscoveredResourcesRequest";
const _LDRRi = "ListDiscoveredResourcesResult";
const _LMT = "ListMigrationTasks";
const _LMTR = "ListMigrationTasksRequest";
const _LMTRi = "ListMigrationTasksResult";
const _LMTU = "ListMigrationTaskUpdates";
const _LMTUR = "ListMigrationTaskUpdatesRequest";
const _LMTURi = "ListMigrationTaskUpdatesResult";
const _LPUS = "ListProgressUpdateStreams";
const _LPUSR = "ListProgressUpdateStreamsRequest";
const _LPUSRi = "ListProgressUpdateStreamsResult";
const _LRAL = "LatestResourceAttributeList";
const _LSR = "ListSourceResources";
const _LSRR = "ListSourceResourcesRequest";
const _LSRRi = "ListSourceResourcesResult";
const _LUT = "LastUpdatedTime";
const _M = "Message";
const _MR = "MaxResults";
const _MT = "MigrationTask";
const _MTN = "MigrationTaskName";
const _MTS = "MigrationTaskSummary";
const _MTSL = "MigrationTaskSummaryList";
const _MTSi = "MigrationTaskState";
const _MTU = "MigrationTaskUpdate";
const _MTUL = "MigrationTaskUpdateList";
const _N = "Name";
const _NAS = "NotifyApplicationState";
const _NASR = "NotifyApplicationStateRequest";
const _NASRo = "NotifyApplicationStateResult";
const _NMTS = "NotifyMigrationTaskState";
const _NMTSR = "NotifyMigrationTaskStateRequest";
const _NMTSRo = "NotifyMigrationTaskStateResult";
const _NT = "NextToken";
const _NUS = "NextUpdateSeconds";
const _PEE = "PolicyErrorException";
const _PP = "ProgressPercent";
const _PRA = "PutResourceAttributes";
const _PRAR = "PutResourceAttributesRequest";
const _PRARu = "PutResourceAttributesResult";
const _PUS = "ProgressUpdateStream";
const _PUSN = "ProgressUpdateStreamName";
const _PUSS = "ProgressUpdateStreamSummary";
const _PUSSL = "ProgressUpdateStreamSummaryList";
const _RA = "ResourceAttribute";
const _RAL = "ResourceAttributeList";
const _RAS = "RetryAfterSeconds";
const _RA_ = "Retry-After";
const _RN = "ResourceName";
const _RNFE = "ResourceNotFoundException";
const _S = "Status";
const _SD = "StatusDetail";
const _SR = "SourceResource";
const _SRL = "SourceResourceList";
const _SRN = "SourceResourceName";
const _SUE = "ServiceUnavailableException";
const _T = "Task";
const _TE = "ThrottlingException";
const _Ty = "Type";
const _UDT = "UpdateDateTime";
const _UO = "UnauthorizedOperation";
const _UT = "UpdateType";
const _V = "Value";
const _c = "client";
const _e = "error";
const _hE = "httpError";
const _hH = "httpHeader";
const _s = "server";
const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.migrationhub";
const n0 = "com.amazonaws.migrationhub";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import type { StaticErrorSchema, StaticListSchema, StaticOperationSchema, StaticStructureSchema } from "@smithy/types";

import {
  AccessDeniedException,
  DryRunOperation,
  HomeRegionNotSetException,
  InternalServerError,
  InvalidInputException,
  PolicyErrorException,
  ResourceNotFoundException,
  ServiceUnavailableException,
  ThrottlingException,
  UnauthorizedOperation,
} from "../models/errors";
import { MigrationHubServiceException } from "../models/MigrationHubServiceException";

/* eslint no-var: 0 */
export var AccessDeniedException$: StaticErrorSchema = [-3, n0, _ADE, { [_e]: _c }, [_M], [0]];
TypeRegistry.for(n0).registerError(AccessDeniedException$, AccessDeniedException);
export var ApplicationState$: StaticStructureSchema = [3, n0, _AS, 0, [_AI, _ASp, _LUT], [0, 0, 4]];
export var AssociateCreatedArtifactRequest$: StaticStructureSchema = [
  3,
  n0,
  _ACAR,
  0,
  [_PUS, _MTN, _CA, _DR],
  [0, 0, () => CreatedArtifact$, 2],
];
export var AssociateCreatedArtifactResult$: StaticStructureSchema = [3, n0, _ACARs, 0, [], []];
export var AssociateDiscoveredResourceRequest$: StaticStructureSchema = [
  3,
  n0,
  _ADRR,
  0,
  [_PUS, _MTN, _DRi, _DR],
  [0, 0, () => DiscoveredResource$, 2],
];
export var AssociateDiscoveredResourceResult$: StaticStructureSchema = [3, n0, _ADRRs, 0, [], []];
export var AssociateSourceResourceRequest$: StaticStructureSchema = [
  3,
  n0,
  _ASRR,
  0,
  [_PUS, _MTN, _SR, _DR],
  [0, 0, () => SourceResource$, 2],
];
export var AssociateSourceResourceResult$: StaticStructureSchema = [3, n0, _ASRRs, 0, [], []];
export var CreatedArtifact$: StaticStructureSchema = [3, n0, _CA, 0, [_N, _D], [0, 0]];
export var CreateProgressUpdateStreamRequest$: StaticStructureSchema = [3, n0, _CPUSR, 0, [_PUSN, _DR], [0, 2]];
export var CreateProgressUpdateStreamResult$: StaticStructureSchema = [3, n0, _CPUSRr, 0, [], []];
export var DeleteProgressUpdateStreamRequest$: StaticStructureSchema = [3, n0, _DPUSR, 0, [_PUSN, _DR], [0, 2]];
export var DeleteProgressUpdateStreamResult$: StaticStructureSchema = [3, n0, _DPUSRe, 0, [], []];
export var DescribeApplicationStateRequest$: StaticStructureSchema = [3, n0, _DASR, 0, [_AI], [0]];
export var DescribeApplicationStateResult$: StaticStructureSchema = [3, n0, _DASRe, 0, [_ASp, _LUT], [0, 4]];
export var DescribeMigrationTaskRequest$: StaticStructureSchema = [3, n0, _DMTR, 0, [_PUS, _MTN], [0, 0]];
export var DescribeMigrationTaskResult$: StaticStructureSchema = [3, n0, _DMTRe, 0, [_MT], [() => MigrationTask$]];
export var DisassociateCreatedArtifactRequest$: StaticStructureSchema = [
  3,
  n0,
  _DCAR,
  0,
  [_PUS, _MTN, _CAN, _DR],
  [0, 0, 0, 2],
];
export var DisassociateCreatedArtifactResult$: StaticStructureSchema = [3, n0, _DCARi, 0, [], []];
export var DisassociateDiscoveredResourceRequest$: StaticStructureSchema = [
  3,
  n0,
  _DDRR,
  0,
  [_PUS, _MTN, _CI, _DR],
  [0, 0, 0, 2],
];
export var DisassociateDiscoveredResourceResult$: StaticStructureSchema = [3, n0, _DDRRi, 0, [], []];
export var DisassociateSourceResourceRequest$: StaticStructureSchema = [
  3,
  n0,
  _DSRR,
  0,
  [_PUS, _MTN, _SRN, _DR],
  [0, 0, 0, 2],
];
export var DisassociateSourceResourceResult$: StaticStructureSchema = [3, n0, _DSRRi, 0, [], []];
export var DiscoveredResource$: StaticStructureSchema = [3, n0, _DRi, 0, [_CI, _D], [0, 0]];
export var DryRunOperation$: StaticErrorSchema = [-3, n0, _DRO, { [_e]: _c }, [_M], [0]];
TypeRegistry.for(n0).registerError(DryRunOperation$, DryRunOperation);
export var HomeRegionNotSetException$: StaticErrorSchema = [-3, n0, _HRNSE, { [_e]: _c }, [_M], [0]];
TypeRegistry.for(n0).registerError(HomeRegionNotSetException$, HomeRegionNotSetException);
export var ImportMigrationTaskRequest$: StaticStructureSchema = [3, n0, _IMTR, 0, [_PUS, _MTN, _DR], [0, 0, 2]];
export var ImportMigrationTaskResult$: StaticStructureSchema = [3, n0, _IMTRm, 0, [], []];
export var InternalServerError$: StaticErrorSchema = [-3, n0, _ISE, { [_e]: _s }, [_M], [0]];
TypeRegistry.for(n0).registerError(InternalServerError$, InternalServerError);
export var InvalidInputException$: StaticErrorSchema = [-3, n0, _IIE, { [_e]: _c }, [_M], [0]];
TypeRegistry.for(n0).registerError(InvalidInputException$, InvalidInputException);
export var ListApplicationStatesRequest$: StaticStructureSchema = [3, n0, _LASR, 0, [_AIp, _NT, _MR], [64 | 0, 0, 1]];
export var ListApplicationStatesResult$: StaticStructureSchema = [
  3,
  n0,
  _LASRi,
  0,
  [_ASL, _NT],
  [() => ApplicationStateList, 0],
];
export var ListCreatedArtifactsRequest$: StaticStructureSchema = [
  3,
  n0,
  _LCAR,
  0,
  [_PUS, _MTN, _NT, _MR],
  [0, 0, 0, 1],
];
export var ListCreatedArtifactsResult$: StaticStructureSchema = [
  3,
  n0,
  _LCARi,
  0,
  [_NT, _CAL],
  [0, () => CreatedArtifactList],
];
export var ListDiscoveredResourcesRequest$: StaticStructureSchema = [
  3,
  n0,
  _LDRR,
  0,
  [_PUS, _MTN, _NT, _MR],
  [0, 0, 0, 1],
];
export var ListDiscoveredResourcesResult$: StaticStructureSchema = [
  3,
  n0,
  _LDRRi,
  0,
  [_NT, _DRL],
  [0, () => DiscoveredResourceList],
];
export var ListMigrationTasksRequest$: StaticStructureSchema = [3, n0, _LMTR, 0, [_NT, _MR, _RN], [0, 1, 0]];
export var ListMigrationTasksResult$: StaticStructureSchema = [
  3,
  n0,
  _LMTRi,
  0,
  [_NT, _MTSL],
  [0, () => MigrationTaskSummaryList],
];
export var ListMigrationTaskUpdatesRequest$: StaticStructureSchema = [
  3,
  n0,
  _LMTUR,
  0,
  [_PUS, _MTN, _NT, _MR],
  [0, 0, 0, 1],
];
export var ListMigrationTaskUpdatesResult$: StaticStructureSchema = [
  3,
  n0,
  _LMTURi,
  0,
  [_NT, _MTUL],
  [0, () => MigrationTaskUpdateList],
];
export var ListProgressUpdateStreamsRequest$: StaticStructureSchema = [3, n0, _LPUSR, 0, [_NT, _MR], [0, 1]];
export var ListProgressUpdateStreamsResult$: StaticStructureSchema = [
  3,
  n0,
  _LPUSRi,
  0,
  [_PUSSL, _NT],
  [() => ProgressUpdateStreamSummaryList, 0],
];
export var ListSourceResourcesRequest$: StaticStructureSchema = [3, n0, _LSRR, 0, [_PUS, _MTN, _NT, _MR], [0, 0, 0, 1]];
export var ListSourceResourcesResult$: StaticStructureSchema = [
  3,
  n0,
  _LSRRi,
  0,
  [_NT, _SRL],
  [0, () => SourceResourceList],
];
export var MigrationTask$: StaticStructureSchema = [
  3,
  n0,
  _MT,
  0,
  [_PUS, _MTN, _T, _UDT, _RAL],
  [0, 0, () => Task$, 4, () => LatestResourceAttributeList],
];
export var MigrationTaskSummary$: StaticStructureSchema = [
  3,
  n0,
  _MTS,
  0,
  [_PUS, _MTN, _S, _PP, _SD, _UDT],
  [0, 0, 0, 1, 0, 4],
];
export var MigrationTaskUpdate$: StaticStructureSchema = [3, n0, _MTU, 0, [_UDT, _UT, _MTSi], [4, 0, () => Task$]];
export var NotifyApplicationStateRequest$: StaticStructureSchema = [
  3,
  n0,
  _NASR,
  0,
  [_AI, _S, _UDT, _DR],
  [0, 0, 4, 2],
];
export var NotifyApplicationStateResult$: StaticStructureSchema = [3, n0, _NASRo, 0, [], []];
export var NotifyMigrationTaskStateRequest$: StaticStructureSchema = [
  3,
  n0,
  _NMTSR,
  0,
  [_PUS, _MTN, _T, _UDT, _NUS, _DR],
  [0, 0, () => Task$, 4, 1, 2],
];
export var NotifyMigrationTaskStateResult$: StaticStructureSchema = [3, n0, _NMTSRo, 0, [], []];
export var PolicyErrorException$: StaticErrorSchema = [-3, n0, _PEE, { [_e]: _c }, [_M], [0]];
TypeRegistry.for(n0).registerError(PolicyErrorException$, PolicyErrorException);
export var ProgressUpdateStreamSummary$: StaticStructureSchema = [3, n0, _PUSS, 0, [_PUSN], [0]];
export var PutResourceAttributesRequest$: StaticStructureSchema = [
  3,
  n0,
  _PRAR,
  0,
  [_PUS, _MTN, _RAL, _DR],
  [0, 0, () => ResourceAttributeList, 2],
];
export var PutResourceAttributesResult$: StaticStructureSchema = [3, n0, _PRARu, 0, [], []];
export var ResourceAttribute$: StaticStructureSchema = [3, n0, _RA, 0, [_Ty, _V], [0, 0]];
export var ResourceNotFoundException$: StaticErrorSchema = [-3, n0, _RNFE, { [_e]: _c }, [_M], [0]];
TypeRegistry.for(n0).registerError(ResourceNotFoundException$, ResourceNotFoundException);
export var ServiceUnavailableException$: StaticErrorSchema = [-3, n0, _SUE, { [_e]: _s }, [_M], [0]];
TypeRegistry.for(n0).registerError(ServiceUnavailableException$, ServiceUnavailableException);
export var SourceResource$: StaticStructureSchema = [3, n0, _SR, 0, [_N, _D, _SD], [0, 0, 0]];
export var Task$: StaticStructureSchema = [3, n0, _T, 0, [_S, _SD, _PP], [0, 0, 1]];
export var ThrottlingException$: StaticErrorSchema = [
  -3,
  n0,
  _TE,
  { [_e]: _c, [_hE]: 429 },
  [_M, _RAS],
  [0, [1, { [_hH]: _RA_ }]],
];
TypeRegistry.for(n0).registerError(ThrottlingException$, ThrottlingException);
export var UnauthorizedOperation$: StaticErrorSchema = [-3, n0, _UO, { [_e]: _c }, [_M], [0]];
TypeRegistry.for(n0).registerError(UnauthorizedOperation$, UnauthorizedOperation);
export var MigrationHubServiceException$: StaticErrorSchema = [-3, _sm, "MigrationHubServiceException", 0, [], []];
TypeRegistry.for(_sm).registerError(MigrationHubServiceException$, MigrationHubServiceException);
var ApplicationIds = 64 | 0;
var ApplicationStateList: StaticListSchema = [1, n0, _ASL, 0, () => ApplicationState$];
var CreatedArtifactList: StaticListSchema = [1, n0, _CAL, 0, () => CreatedArtifact$];
var DiscoveredResourceList: StaticListSchema = [1, n0, _DRL, 0, () => DiscoveredResource$];
var LatestResourceAttributeList: StaticListSchema = [1, n0, _LRAL, 0, () => ResourceAttribute$];
var MigrationTaskSummaryList: StaticListSchema = [1, n0, _MTSL, 0, () => MigrationTaskSummary$];
var MigrationTaskUpdateList: StaticListSchema = [1, n0, _MTUL, 0, () => MigrationTaskUpdate$];
var ProgressUpdateStreamSummaryList: StaticListSchema = [1, n0, _PUSSL, 0, () => ProgressUpdateStreamSummary$];
var ResourceAttributeList: StaticListSchema = [1, n0, _RAL, 0, () => ResourceAttribute$];
var SourceResourceList: StaticListSchema = [1, n0, _SRL, 0, () => SourceResource$];
export var AssociateCreatedArtifact$: StaticOperationSchema = [
  9,
  n0,
  _ACA,
  0,
  () => AssociateCreatedArtifactRequest$,
  () => AssociateCreatedArtifactResult$,
];
export var AssociateDiscoveredResource$: StaticOperationSchema = [
  9,
  n0,
  _ADR,
  0,
  () => AssociateDiscoveredResourceRequest$,
  () => AssociateDiscoveredResourceResult$,
];
export var AssociateSourceResource$: StaticOperationSchema = [
  9,
  n0,
  _ASR,
  0,
  () => AssociateSourceResourceRequest$,
  () => AssociateSourceResourceResult$,
];
export var CreateProgressUpdateStream$: StaticOperationSchema = [
  9,
  n0,
  _CPUS,
  0,
  () => CreateProgressUpdateStreamRequest$,
  () => CreateProgressUpdateStreamResult$,
];
export var DeleteProgressUpdateStream$: StaticOperationSchema = [
  9,
  n0,
  _DPUS,
  0,
  () => DeleteProgressUpdateStreamRequest$,
  () => DeleteProgressUpdateStreamResult$,
];
export var DescribeApplicationState$: StaticOperationSchema = [
  9,
  n0,
  _DAS,
  0,
  () => DescribeApplicationStateRequest$,
  () => DescribeApplicationStateResult$,
];
export var DescribeMigrationTask$: StaticOperationSchema = [
  9,
  n0,
  _DMT,
  0,
  () => DescribeMigrationTaskRequest$,
  () => DescribeMigrationTaskResult$,
];
export var DisassociateCreatedArtifact$: StaticOperationSchema = [
  9,
  n0,
  _DCA,
  0,
  () => DisassociateCreatedArtifactRequest$,
  () => DisassociateCreatedArtifactResult$,
];
export var DisassociateDiscoveredResource$: StaticOperationSchema = [
  9,
  n0,
  _DDR,
  0,
  () => DisassociateDiscoveredResourceRequest$,
  () => DisassociateDiscoveredResourceResult$,
];
export var DisassociateSourceResource$: StaticOperationSchema = [
  9,
  n0,
  _DSR,
  0,
  () => DisassociateSourceResourceRequest$,
  () => DisassociateSourceResourceResult$,
];
export var ImportMigrationTask$: StaticOperationSchema = [
  9,
  n0,
  _IMT,
  0,
  () => ImportMigrationTaskRequest$,
  () => ImportMigrationTaskResult$,
];
export var ListApplicationStates$: StaticOperationSchema = [
  9,
  n0,
  _LAS,
  0,
  () => ListApplicationStatesRequest$,
  () => ListApplicationStatesResult$,
];
export var ListCreatedArtifacts$: StaticOperationSchema = [
  9,
  n0,
  _LCA,
  0,
  () => ListCreatedArtifactsRequest$,
  () => ListCreatedArtifactsResult$,
];
export var ListDiscoveredResources$: StaticOperationSchema = [
  9,
  n0,
  _LDR,
  0,
  () => ListDiscoveredResourcesRequest$,
  () => ListDiscoveredResourcesResult$,
];
export var ListMigrationTasks$: StaticOperationSchema = [
  9,
  n0,
  _LMT,
  0,
  () => ListMigrationTasksRequest$,
  () => ListMigrationTasksResult$,
];
export var ListMigrationTaskUpdates$: StaticOperationSchema = [
  9,
  n0,
  _LMTU,
  0,
  () => ListMigrationTaskUpdatesRequest$,
  () => ListMigrationTaskUpdatesResult$,
];
export var ListProgressUpdateStreams$: StaticOperationSchema = [
  9,
  n0,
  _LPUS,
  0,
  () => ListProgressUpdateStreamsRequest$,
  () => ListProgressUpdateStreamsResult$,
];
export var ListSourceResources$: StaticOperationSchema = [
  9,
  n0,
  _LSR,
  0,
  () => ListSourceResourcesRequest$,
  () => ListSourceResourcesResult$,
];
export var NotifyApplicationState$: StaticOperationSchema = [
  9,
  n0,
  _NAS,
  0,
  () => NotifyApplicationStateRequest$,
  () => NotifyApplicationStateResult$,
];
export var NotifyMigrationTaskState$: StaticOperationSchema = [
  9,
  n0,
  _NMTS,
  0,
  () => NotifyMigrationTaskStateRequest$,
  () => NotifyMigrationTaskStateResult$,
];
export var PutResourceAttributes$: StaticOperationSchema = [
  9,
  n0,
  _PRA,
  0,
  () => PutResourceAttributesRequest$,
  () => PutResourceAttributesResult$,
];
