// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AM,
  _AOF,
  _Ar,
  _BA,
  _CA,
  _CAr,
  _CB,
  _CDT,
  _CI,
  _CLo,
  _Clus,
  _Co,
  _Com,
  _Confi,
  _CSL,
  _CSl,
  _CSlu,
  _CTr,
  _De,
  _Dev,
  _EDT,
  _EEI,
  _EI,
  _EII,
  _ET,
  _EV,
  _EVb,
  _EVL,
  _F,
  _I,
  _IFI,
  _IFT,
  _IGIn,
  _IGTns,
  _II,
  _IL,
  _IN,
  _In,
  _Ins,
  _IS,
  _ISCR,
  _ISn,
  _ITd,
  _ITn,
  _ITns,
  _LBA,
  _LBAI,
  _LBAO,
  _LC,
  _LCI,
  _LCO,
  _LI,
  _LII,
  _LIO,
  _LNE,
  _LNEI,
  _LNEO,
  _LSC,
  _LSCI,
  _LSCO,
  _LSI,
  _LSi,
  _LSIi,
  _LSis,
  _LSO,
  _LSOi,
  _LSSM,
  _LSSMI,
  _LSSMO,
  _M,
  _Ma,
  _Mar,
  _N,
  _NEI,
  _NEN,
  _NEo,
  _NES,
  _NESL,
  _NIH,
  _NSL,
  _OA,
  _PDN,
  _PDNr,
  _PIA,
  _PIAr,
  _RDT,
  _S,
  _SCe,
  _SCLe,
  _SCR,
  _SCS,
  _SI,
  _SItu,
  _SMe,
  _SMS,
  _SMSL,
  _SP,
  _SPA,
  _SSL,
  _SSLt,
  _SSt,
  _SStep,
  _SStu,
  _ST,
  _St,
  _Sta,
  _Stud,
  _Ti,
  _To,
  _Ur,
  _VI,
  _VIo,
  n0,
} from "./schemas_0";
import { HadoopStepConfig, StepStatus } from "./schemas_4_List";
import { ClusterStatus } from "./schemas_23_Describe";
import { NotebookS3LocationForOutput } from "./schemas_33_Notebook";

/* eslint no-var: 0 */

export var ClusterSummary = struct(n0, _CSl, 0, [_I, _N, _St, _NIH, _CA, _OA], [0, 0, () => ClusterStatus, 1, 0, 0]);
export var Command = struct(n0, _Com, 0, [_N, _SP, _Ar], [0, 0, 64 | 0]);
export var EbsVolume = struct(n0, _EV, 0, [_Dev, _VIo], [0, 0]);
export var Instance = struct(
  n0,
  _In,
  0,
  [_I, _EII, _PDN, _PIA, _PDNr, _PIAr, _St, _IGIn, _IFI, _Ma, _ITn, _EVb],
  [0, 0, 0, 0, 0, 0, () => InstanceStatus, 0, 0, 0, 0, () => EbsVolumeList]
);
export var InstanceStateChangeReason = struct(n0, _ISCR, 0, [_Co, _M], [0, 0]);
export var InstanceStatus = struct(
  n0,
  _IS,
  0,
  [_Sta, _SCR, _Ti],
  [0, () => InstanceStateChangeReason, () => InstanceTimeline]
);
export var InstanceTimeline = struct(n0, _ITns, 0, [_CDT, _RDT, _EDT], [4, 4, 4]);
export var ListBootstrapActionsInput = struct(n0, _LBAI, 0, [_CI, _Mar], [0, 0]);
export var ListBootstrapActionsOutput = struct(n0, _LBAO, 0, [_BA, _Mar], [() => CommandList, 0]);
export var ListClustersInput = struct(n0, _LCI, 0, [_CAr, _CB, _CSlu, _Mar], [4, 4, 64 | 0, 0]);
export var ListClustersOutput = struct(n0, _LCO, 0, [_Clus, _Mar], [() => ClusterSummaryList, 0]);
export var ListInstancesInput = struct(
  n0,
  _LII,
  0,
  [_CI, _IGIn, _IGTns, _IFI, _IFT, _ISn, _Mar],
  [0, 0, 64 | 0, 0, 0, 64 | 0, 0]
);
export var ListInstancesOutput = struct(n0, _LIO, 0, [_Ins, _Mar], [() => InstanceList, 0]);
export var ListNotebookExecutionsInput = struct(n0, _LNEI, 0, [_EI, _St, _F, _To, _Mar, _EEI], [0, 0, 4, 4, 0, 0]);
export var ListNotebookExecutionsOutput = struct(n0, _LNEO, 0, [_NEo, _Mar], [() => NotebookExecutionSummaryList, 0]);
export var ListSecurityConfigurationsInput = struct(n0, _LSCI, 0, [_Mar], [0]);
export var ListSecurityConfigurationsOutput = struct(n0, _LSCO, 0, [_SCe, _Mar], [() => SecurityConfigurationList, 0]);
export var ListStepsInput = struct(n0, _LSI, 0, [_CI, _SSt, _SI, _Mar], [0, 64 | 0, 64 | 0, 0]);
export var ListStepsOutput = struct(n0, _LSO, 0, [_S, _Mar], [() => StepSummaryList, 0]);
export var ListStudioSessionMappingsInput = struct(n0, _LSSMI, 0, [_SItu, _ITd, _Mar], [0, 0, 0]);
export var ListStudioSessionMappingsOutput = struct(n0, _LSSMO, 0, [_SMe, _Mar], [() => SessionMappingSummaryList, 0]);
export var ListStudiosInput = struct(n0, _LSIi, 0, [_Mar], [0]);
export var ListStudiosOutput = struct(n0, _LSOi, 0, [_Stud, _Mar], [() => StudioSummaryList, 0]);
export var NotebookExecutionSummary = struct(
  n0,
  _NES,
  0,
  [_NEI, _EI, _NEN, _St, _ST, _ET, _NSL, _EEI],
  [0, 0, 0, 0, 4, 4, () => NotebookS3LocationForOutput, 0]
);
export var SecurityConfigurationSummary = struct(n0, _SCS, 0, [_N, _CDT], [0, 4]);
export var SessionMappingSummary = struct(n0, _SMS, 0, [_SItu, _II, _IN, _ITd, _SPA, _CTr], [0, 0, 0, 0, 0, 4]);
export var StepSummary = struct(
  n0,
  _SStep,
  0,
  [_I, _N, _Confi, _AOF, _St],
  [0, 0, () => HadoopStepConfig, 0, () => StepStatus]
);
export var StudioSummary = struct(n0, _SStu, 0, [_SItu, _N, _VI, _De, _Ur, _AM, _CTr], [0, 0, 0, 0, 0, 0, 4]);
export var ClusterStateList = 64 | 0;

export var ClusterSummaryList = list(n0, _CSL, 0, () => ClusterSummary);
export var CommandList = list(n0, _CLo, 0, () => Command);
export var EbsVolumeList = list(n0, _EVL, 0, () => EbsVolume);
export var InstanceGroupTypeList = 64 | 0;

export var InstanceList = list(n0, _IL, 0, () => Instance);
export var InstanceStateList = 64 | 0;

export var NotebookExecutionSummaryList = list(n0, _NESL, 0, () => NotebookExecutionSummary);
export var SecurityConfigurationList = list(n0, _SCLe, 0, () => SecurityConfigurationSummary);
export var SessionMappingSummaryList = list(n0, _SMSL, 0, () => SessionMappingSummary);
export var StepStateList = 64 | 0;

export var StepSummaryList = list(n0, _SSL, 0, () => StepSummary);
export var StudioSummaryList = list(n0, _SSLt, 0, () => StudioSummary);
export var ListBootstrapActions = op(
  n0,
  _LBA,
  0,
  () => ListBootstrapActionsInput,
  () => ListBootstrapActionsOutput
);
export var ListClusters = op(
  n0,
  _LC,
  0,
  () => ListClustersInput,
  () => ListClustersOutput
);
export var ListInstances = op(
  n0,
  _LI,
  0,
  () => ListInstancesInput,
  () => ListInstancesOutput
);
export var ListNotebookExecutions = op(
  n0,
  _LNE,
  0,
  () => ListNotebookExecutionsInput,
  () => ListNotebookExecutionsOutput
);
export var ListSecurityConfigurations = op(
  n0,
  _LSC,
  0,
  () => ListSecurityConfigurationsInput,
  () => ListSecurityConfigurationsOutput
);
export var ListSteps = op(
  n0,
  _LSi,
  0,
  () => ListStepsInput,
  () => ListStepsOutput
);
export var ListStudios = op(
  n0,
  _LSis,
  0,
  () => ListStudiosInput,
  () => ListStudiosOutput
);
export var ListStudioSessionMappings = op(
  n0,
  _LSSM,
  0,
  () => ListStudioSessionMappingsInput,
  () => ListStudioSessionMappingsOutput
);
