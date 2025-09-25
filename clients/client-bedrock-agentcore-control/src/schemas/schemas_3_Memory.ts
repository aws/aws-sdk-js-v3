// smithy-typescript generated code
import { list, op, sim, struct, struct as uni } from "@smithy/core/schema";

import {
  _a,
  _aMS,
  _aTP,
  _cA,
  _CCC,
  _cCC,
  _CCCI,
  _CCI,
  _CCo,
  _CEC,
  _cEC,
  _CECI,
  _CM,
  _CMI,
  _CMO,
  _cMS,
  _CMSI,
  _co,
  _con,
  _cTl,
  _d,
  _dMS,
  _DMSI,
  _DMSL,
  _EC,
  _eED,
  _eKA,
  _ex,
  _fR,
  _GM,
  _GMI,
  _GMO,
  _h,
  _i,
  _LM,
  _LMI,
  _LMO,
  _LWI,
  _LWIR,
  _LWIRi,
  _M,
  _MCC,
  _me,
  _MEC,
  _mem,
  _mERA,
  _mI,
  _mIo,
  _MMS,
  _mMS,
  _MMSI,
  _MMSL,
  _mR,
  _MS,
  _mS,
  _MSC,
  _MSe,
  _MSI,
  _mSI,
  _MSIL,
  _MSL,
  _MSLe,
  _n,
  _na,
  _nT,
  _P,
  _s,
  _SCO,
  _sCO,
  _SCOu,
  _sCOu,
  _SCt,
  _SEO,
  _sEO,
  _sI,
  _sMS,
  _SMSI,
  _SMSIu,
  _sMSu,
  _sO,
  _SOCCI,
  _SOCCIu,
  _SOCI,
  _SOCIu,
  _SOECI,
  _sOu,
  _st,
  _ty,
  _uA,
  _UM,
  _UMI,
  _UMO,
  _UPCO,
  _uPCO,
  _UPEO,
  _uPEO,
  _uPMS,
  _UPMSI,
  _uPO,
  _UPOCCI,
  _UPOCI,
  _UPOECI,
  _wI,
  _wIA,
  _WIL,
  _WIT,
  Description,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var Prompt = sim(n0, _P, 0, 8);
export var CreateMemoryInput = struct(
  n0,
  _CMI,
  0,
  [_cTl, _n, _d, _eKA, _mERA, _eED, _mS],
  [[0, 4], 0, [() => Description, 0], 0, 0, 1, [() => MemoryStrategyInputList, 0]]
);
export var CreateMemoryOutput = struct(n0, _CMO, 0, [_me], [[() => Memory, 0]]);
export var CustomMemoryStrategyInput = struct(
  n0,
  _CMSI,
  0,
  [_n, _d, _na, _co],
  [0, [() => Description, 0], 64 | 0, [() => CustomConfigurationInput, 0]]
);
export var DeleteMemoryStrategyInput = struct(n0, _DMSI, 0, [_mSI], [0]);
export var GetMemoryInput = struct(n0, _GMI, 0, [_mI], [[0, 1]]);
export var GetMemoryOutput = struct(n0, _GMO, 0, [_me], [[() => Memory, 0]]);
export var ListMemoriesInput = struct(n0, _LMI, 0, [_mR, _nT], [1, 0]);
export var ListMemoriesOutput = struct(n0, _LMO, 0, [_mem, _nT], [() => MemorySummaryList, 0]);
export var ListWorkloadIdentitiesRequest = struct(n0, _LWIR, 0, [_nT, _mR], [0, 1]);
export var ListWorkloadIdentitiesResponse = struct(n0, _LWIRi, 0, [_wI, _nT], [() => WorkloadIdentityList, 0]);
export var Memory = struct(
  n0,
  _M,
  0,
  [_a, _i, _n, _d, _eKA, _mERA, _eED, _s, _fR, _cA, _uA, _st],
  [0, 0, 0, [() => Description, 0], 0, 0, 1, 0, 0, 4, 4, [() => MemoryStrategyList, 0]]
);
export var MemoryStrategy = struct(
  n0,
  _MS,
  0,
  [_sI, _n, _d, _co, _ty, _na, _cA, _uA, _s],
  [0, 0, [() => Description, 0], [() => StrategyConfiguration, 0], 0, 64 | 0, 4, 4, 0]
);
export var MemorySummary = struct(n0, _MSe, 0, [_a, _i, _s, _cA, _uA], [0, 0, 0, 4, 4]);
export var ModifyMemoryStrategies = struct(
  n0,
  _MMS,
  0,
  [_aMS, _mMS, _dMS],
  [[() => MemoryStrategyInputList, 0], [() => ModifyMemoryStrategiesList, 0], () => DeleteMemoryStrategiesList]
);
export var ModifyMemoryStrategyInput = struct(
  n0,
  _MMSI,
  0,
  [_mSI, _d, _na, _co],
  [0, [() => Description, 0], 64 | 0, [() => ModifyStrategyConfiguration, 0]]
);
export var ModifyStrategyConfiguration = struct(
  n0,
  _MSC,
  0,
  [_ex, _con],
  [
    [() => ModifyExtractionConfiguration, 0],
    [() => ModifyConsolidationConfiguration, 0],
  ]
);
export var SemanticConsolidationOverride = struct(n0, _SCO, 0, [_aTP, _mIo], [[() => Prompt, 0], 0]);
export var SemanticExtractionOverride = struct(n0, _SEO, 0, [_aTP, _mIo], [[() => Prompt, 0], 0]);
export var SemanticMemoryStrategyInput = struct(n0, _SMSI, 0, [_n, _d, _na], [0, [() => Description, 0], 64 | 0]);
export var SemanticOverrideConfigurationInput = struct(
  n0,
  _SOCI,
  0,
  [_ex, _con],
  [
    [() => SemanticOverrideExtractionConfigurationInput, 0],
    [() => SemanticOverrideConsolidationConfigurationInput, 0],
  ]
);
export var SemanticOverrideConsolidationConfigurationInput = struct(
  n0,
  _SOCCI,
  0,
  [_aTP, _mIo],
  [[() => Prompt, 0], 0]
);
export var SemanticOverrideExtractionConfigurationInput = struct(n0, _SOECI, 0, [_aTP, _mIo], [[() => Prompt, 0], 0]);
export var StrategyConfiguration = struct(
  n0,
  _SCt,
  0,
  [_ty, _ex, _con],
  [0, [() => ExtractionConfiguration, 0], [() => ConsolidationConfiguration, 0]]
);
export var SummaryConsolidationOverride = struct(n0, _SCOu, 0, [_aTP, _mIo], [[() => Prompt, 0], 0]);
export var SummaryMemoryStrategyInput = struct(n0, _SMSIu, 0, [_n, _d, _na], [0, [() => Description, 0], 64 | 0]);
export var SummaryOverrideConfigurationInput = struct(
  n0,
  _SOCIu,
  0,
  [_con],
  [[() => SummaryOverrideConsolidationConfigurationInput, 0]]
);
export var SummaryOverrideConsolidationConfigurationInput = struct(
  n0,
  _SOCCIu,
  0,
  [_aTP, _mIo],
  [[() => Prompt, 0], 0]
);
export var UpdateMemoryInput = struct(
  n0,
  _UMI,
  0,
  [_cTl, _mI, _d, _eED, _mERA, _mS],
  [[0, 4], [0, 1], [() => Description, 0], 1, 0, [() => ModifyMemoryStrategies, 0]]
);
export var UpdateMemoryOutput = struct(n0, _UMO, 0, [_me], [[() => Memory, 0]]);
export var UserPreferenceConsolidationOverride = struct(n0, _UPCO, 0, [_aTP, _mIo], [[() => Prompt, 0], 0]);
export var UserPreferenceExtractionOverride = struct(n0, _UPEO, 0, [_aTP, _mIo], [[() => Prompt, 0], 0]);
export var UserPreferenceMemoryStrategyInput = struct(
  n0,
  _UPMSI,
  0,
  [_n, _d, _na],
  [0, [() => Description, 0], 64 | 0]
);
export var UserPreferenceOverrideConfigurationInput = struct(
  n0,
  _UPOCI,
  0,
  [_ex, _con],
  [
    [() => UserPreferenceOverrideExtractionConfigurationInput, 0],
    [() => UserPreferenceOverrideConsolidationConfigurationInput, 0],
  ]
);
export var UserPreferenceOverrideConsolidationConfigurationInput = struct(
  n0,
  _UPOCCI,
  0,
  [_aTP, _mIo],
  [[() => Prompt, 0], 0]
);
export var UserPreferenceOverrideExtractionConfigurationInput = struct(
  n0,
  _UPOECI,
  0,
  [_aTP, _mIo],
  [[() => Prompt, 0], 0]
);
export var WorkloadIdentityType = struct(n0, _WIT, 0, [_n, _wIA], [0, 0]);
export var DeleteMemoryStrategiesList = list(n0, _DMSL, 0, () => DeleteMemoryStrategyInput);
export var MemoryStrategyInputList = list(n0, _MSIL, 0, [() => MemoryStrategyInput, 0]);
export var MemoryStrategyList = list(n0, _MSL, 0, [() => MemoryStrategy, 0]);
export var MemorySummaryList = list(n0, _MSLe, 0, () => MemorySummary);
export var ModifyMemoryStrategiesList = list(n0, _MMSL, 0, [() => ModifyMemoryStrategyInput, 0]);
export var NamespacesList = 64 | 0;

export var WorkloadIdentityList = list(n0, _WIL, 0, () => WorkloadIdentityType);
export var ConsolidationConfiguration = uni(n0, _CCo, 0, [_cCC], [[() => CustomConsolidationConfiguration, 0]]);
export var CustomConfigurationInput = uni(
  n0,
  _CCI,
  0,
  [_sO, _sOu, _uPO],
  [
    [() => SemanticOverrideConfigurationInput, 0],
    [() => SummaryOverrideConfigurationInput, 0],
    [() => UserPreferenceOverrideConfigurationInput, 0],
  ]
);
export var CustomConsolidationConfiguration = uni(
  n0,
  _CCC,
  0,
  [_sCO, _sCOu, _uPCO],
  [
    [() => SemanticConsolidationOverride, 0],
    [() => SummaryConsolidationOverride, 0],
    [() => UserPreferenceConsolidationOverride, 0],
  ]
);
export var CustomConsolidationConfigurationInput = uni(
  n0,
  _CCCI,
  0,
  [_sCO, _sCOu, _uPCO],
  [
    [() => SemanticOverrideConsolidationConfigurationInput, 0],
    [() => SummaryOverrideConsolidationConfigurationInput, 0],
    [() => UserPreferenceOverrideConsolidationConfigurationInput, 0],
  ]
);
export var CustomExtractionConfiguration = uni(
  n0,
  _CEC,
  0,
  [_sEO, _uPEO],
  [
    [() => SemanticExtractionOverride, 0],
    [() => UserPreferenceExtractionOverride, 0],
  ]
);
export var CustomExtractionConfigurationInput = uni(
  n0,
  _CECI,
  0,
  [_sEO, _uPEO],
  [
    [() => SemanticOverrideExtractionConfigurationInput, 0],
    [() => UserPreferenceOverrideExtractionConfigurationInput, 0],
  ]
);
export var ExtractionConfiguration = uni(n0, _EC, 0, [_cEC], [[() => CustomExtractionConfiguration, 0]]);
export var MemoryStrategyInput = uni(
  n0,
  _MSI,
  0,
  [_sMS, _sMSu, _uPMS, _cMS],
  [
    [() => SemanticMemoryStrategyInput, 0],
    [() => SummaryMemoryStrategyInput, 0],
    [() => UserPreferenceMemoryStrategyInput, 0],
    [() => CustomMemoryStrategyInput, 0],
  ]
);
export var ModifyConsolidationConfiguration = uni(
  n0,
  _MCC,
  0,
  [_cCC],
  [[() => CustomConsolidationConfigurationInput, 0]]
);
export var ModifyExtractionConfiguration = uni(n0, _MEC, 0, [_cEC], [[() => CustomExtractionConfigurationInput, 0]]);
export var CreateMemory = op(
  n0,
  _CM,
  {
    [_h]: ["POST", "/memories/create", 200],
  },
  () => CreateMemoryInput,
  () => CreateMemoryOutput
);
export var GetMemory = op(
  n0,
  _GM,
  {
    [_h]: ["GET", "/memories/{memoryId}/details", 200],
  },
  () => GetMemoryInput,
  () => GetMemoryOutput
);
export var ListMemories = op(
  n0,
  _LM,
  {
    [_h]: ["POST", "/memories/", 200],
  },
  () => ListMemoriesInput,
  () => ListMemoriesOutput
);
export var ListWorkloadIdentities = op(
  n0,
  _LWI,
  {
    [_h]: ["POST", "/identities/ListWorkloadIdentities", 200],
  },
  () => ListWorkloadIdentitiesRequest,
  () => ListWorkloadIdentitiesResponse
);
export var UpdateMemory = op(
  n0,
  _UM,
  {
    [_h]: ["PUT", "/memories/{memoryId}/update", 200],
  },
  () => UpdateMemoryInput,
  () => UpdateMemoryOutput
);
