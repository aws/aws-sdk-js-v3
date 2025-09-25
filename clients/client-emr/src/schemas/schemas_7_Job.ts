// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AJFS,
  _AJFSI,
  _AJFSO,
  _AOF,
  _Ar,
  _ASR,
  _AV,
  _AZ,
  _AZv,
  _BA,
  _BAC,
  _BAD,
  _BADL,
  _BP,
  _CAI,
  _CAr,
  _CB,
  _CDT,
  _DJF,
  _DJFI,
  _DJFO,
  _EDT,
  _EKN,
  _ERA,
  _ESD,
  _ESI,
  _HJS,
  _HJSC,
  _HV,
  _IC,
  _IG,
  _IGD,
  _IGDL,
  _IGIn,
  _Ins,
  _IR,
  _IRC,
  _IRCn,
  _ITn,
  _J,
  _JF,
  _JFD,
  _JFDL,
  _JFESD,
  _JFI,
  _JFID,
  _JFIo,
  _JFR,
  _JFS,
  _K,
  _KJFAWNS,
  _KV,
  _KVL,
  _LEKKI,
  _LSCR,
  _LU,
  _Ma,
  _MC,
  _MII,
  _MIT,
  _MPDN,
  _N,
  _NIH,
  _P,
  _Pa,
  _Pl,
  _PTl,
  _RDT,
  _S,
  _SBA,
  _SBAC,
  _SCLt,
  _SCt,
  _SD,
  _SDB,
  _SDL,
  _SDT,
  _SESD,
  _SI,
  _SIT,
  _SKJFAWNS,
  _SKJFAWNSI,
  _SPu,
  _SR,
  _Sta,
  _STP,
  _STPI,
  _SUNR,
  _SUNRI,
  _SVTAU,
  _SVTAUI,
  _TJF,
  _TJFI,
  _TP,
  _UNR,
  _Va,
  _VTAU,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AddJobFlowStepsInput = struct(n0, _AJFSI, 0, [_JFI, _S, _ERA], [0, () => StepConfigList, 0]);
export var AddJobFlowStepsOutput = struct(n0, _AJFSO, 0, [_SI], [64 | 0]);
export var BootstrapActionConfig = struct(n0, _BAC, 0, [_N, _SBA], [0, () => ScriptBootstrapActionConfig]);
export var BootstrapActionDetail = struct(n0, _BAD, 0, [_BAC], [() => BootstrapActionConfig]);
export var DescribeJobFlowsInput = struct(n0, _DJFI, 0, [_CAr, _CB, _JFIo, _JFS], [4, 4, 64 | 0, 64 | 0]);
export var DescribeJobFlowsOutput = struct(n0, _DJFO, 0, [_JF], [() => JobFlowDetailList]);
export var HadoopJarStepConfig = struct(n0, _HJSC, 0, [_P, _J, _MC, _Ar], [() => KeyValueList, 0, 0, 64 | 0]);
export var InstanceGroupDetail = struct(
  n0,
  _IGD,
  0,
  [_IGIn, _N, _Ma, _IR, _BP, _ITn, _IRC, _IRCn, _Sta, _LSCR, _CDT, _SDT, _RDT, _EDT, _CAI],
  [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 4, 4, 4, 4, 0]
);
export var JobFlowDetail = struct(
  n0,
  _JFD,
  0,
  [_JFI, _N, _LU, _LEKKI, _AV, _ESD, _Ins, _S, _BA, _SPu, _VTAU, _JFR, _SR, _ASR, _SDB],
  [
    0,
    0,
    0,
    0,
    0,
    () => JobFlowExecutionStatusDetail,
    () => JobFlowInstancesDetail,
    () => StepDetailList,
    () => BootstrapActionDetailList,
    64 | 0,
    2,
    0,
    0,
    0,
    0,
  ]
);
export var JobFlowExecutionStatusDetail = struct(
  n0,
  _JFESD,
  0,
  [_Sta, _CDT, _SDT, _RDT, _EDT, _LSCR],
  [0, 4, 4, 4, 4, 0]
);
export var JobFlowInstancesDetail = struct(
  n0,
  _JFID,
  0,
  [_MIT, _MPDN, _MII, _SIT, _IC, _IG, _NIH, _EKN, _ESI, _Pl, _KJFAWNS, _TP, _UNR, _HV],
  [0, 0, 0, 0, 1, () => InstanceGroupDetailList, 1, 0, 0, () => PlacementType, 2, 2, 2, 0]
);
export var KeyValue = struct(n0, _KV, 0, [_K, _Va], [0, 0]);
export var PlacementType = struct(n0, _PTl, 0, [_AZ, _AZv], [0, 64 | 0]);
export var ScriptBootstrapActionConfig = struct(n0, _SBAC, 0, [_Pa, _Ar], [0, 64 | 0]);
export var SetKeepJobFlowAliveWhenNoStepsInput = struct(n0, _SKJFAWNSI, 0, [_JFIo, _KJFAWNS], [64 | 0, 2]);
export var SetTerminationProtectionInput = struct(n0, _STPI, 0, [_JFIo, _TP], [64 | 0, 2]);
export var SetUnhealthyNodeReplacementInput = struct(n0, _SUNRI, 0, [_JFIo, _UNR], [64 | 0, 2]);
export var SetVisibleToAllUsersInput = struct(n0, _SVTAUI, 0, [_JFIo, _VTAU], [64 | 0, 2]);
export var StepConfig = struct(n0, _SCt, 0, [_N, _AOF, _HJS], [0, 0, () => HadoopJarStepConfig]);
export var StepDetail = struct(n0, _SD, 0, [_SCt, _ESD], [() => StepConfig, () => StepExecutionStatusDetail]);
export var StepExecutionStatusDetail = struct(n0, _SESD, 0, [_Sta, _CDT, _SDT, _EDT, _LSCR], [0, 4, 4, 4, 0]);
export var TerminateJobFlowsInput = struct(n0, _TJFI, 0, [_JFIo], [64 | 0]);
export var BootstrapActionDetailList = list(n0, _BADL, 0, () => BootstrapActionDetail);
export var InstanceGroupDetailList = list(n0, _IGDL, 0, () => InstanceGroupDetail);
export var JobFlowDetailList = list(n0, _JFDL, 0, () => JobFlowDetail);
export var JobFlowExecutionStateList = 64 | 0;

export var KeyValueList = list(n0, _KVL, 0, () => KeyValue);
export var StepConfigList = list(n0, _SCLt, 0, () => StepConfig);
export var StepDetailList = list(n0, _SDL, 0, () => StepDetail);
export var SupportedProductsList = 64 | 0;

export var XmlStringList = 64 | 0;

export var AddJobFlowSteps = op(
  n0,
  _AJFS,
  0,
  () => AddJobFlowStepsInput,
  () => AddJobFlowStepsOutput
);
export var DescribeJobFlows = op(
  n0,
  _DJF,
  0,
  () => DescribeJobFlowsInput,
  () => DescribeJobFlowsOutput
);
export var SetKeepJobFlowAliveWhenNoSteps = op(
  n0,
  _SKJFAWNS,
  0,
  () => SetKeepJobFlowAliveWhenNoStepsInput,
  () => Unit
);
export var SetTerminationProtection = op(
  n0,
  _STP,
  0,
  () => SetTerminationProtectionInput,
  () => Unit
);
export var SetUnhealthyNodeReplacement = op(
  n0,
  _SUNR,
  0,
  () => SetUnhealthyNodeReplacementInput,
  () => Unit
);
export var SetVisibleToAllUsers = op(
  n0,
  _SVTAU,
  0,
  () => SetVisibleToAllUsersInput,
  () => Unit
);
export var TerminateJobFlows = op(
  n0,
  _TJF,
  0,
  () => TerminateJobFlowsInput,
  () => Unit
);
