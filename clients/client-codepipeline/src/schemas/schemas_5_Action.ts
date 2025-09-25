// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ADL,
  _ADr,
  _ADrt,
  _AE,
  _aEI,
  _aN,
  _aR,
  _ARL,
  _ARr,
  _AS,
  _aSc,
  _ASL,
  _aSRA,
  _bECS,
  _bu,
  _c,
  _CE,
  _cod,
  _cR,
  _cr,
  _CS,
  _cS,
  _CSL,
  _d,
  _dR,
  _ED,
  _eD,
  _eEI,
  _eES,
  _eEU,
  _eMx,
  _en,
  _eR,
  _ET,
  _eTx,
  _eU,
  _eUT,
  _eUTx,
  _f,
  _GPE,
  _GPEI,
  _GPEO,
  _GPS,
  _GPSI,
  _GPSO,
  _i,
  _iA,
  _iAD,
  _id,
  _iE,
  _iEn,
  _iTS,
  _k,
  _lCA,
  _lCB,
  _lE,
  _lIPE,
  _LIPEF,
  _LPE,
  _LPEI,
  _LPEO,
  _LRE,
  _LREI,
  _LREO,
  _LRT,
  _lRT,
  _LRTI,
  _LRTO,
  _lSARN,
  _lSC,
  _lUB,
  _lUT,
  _m,
  _mC,
  _mCa,
  _mR,
  _mSRA,
  _na,
  _nT,
  _o,
  _oFCS,
  _oSCS,
  _pC,
  _PE,
  _pE,
  _PEF,
  _pEI,
  _PES,
  _pES,
  _PESL,
  _pN,
  _PRM,
  _pV,
  _q,
  _r,
  _rA,
  _rC,
  _rCI,
  _rCIe,
  _RCP,
  _rCP,
  _RCPL,
  _RE,
  _re,
  _rea,
  _RED,
  _rED,
  _REDL,
  _REF,
  _REI,
  _rEI,
  _REO,
  _RER,
  _rF,
  _rI,
  _rM,
  _rN,
  _rOF,
  _RPV,
  _RPVL,
  _RR,
  _RS,
  _rS,
  _RSL,
  _RSM,
  _rSM,
  _rSu,
  _RT,
  _rT,
  _rTI,
  _RTL,
  _rTPEI,
  _RTS,
  _rU,
  _rUT,
  _rV,
  _s,
  _SCE,
  _SCS,
  _SE,
  _se,
  _SEL,
  _SET,
  _set,
  _sIS,
  _SISF,
  _SL,
  _sl,
  _sN,
  _SR,
  _sR,
  _SRL,
  _SS,
  _sS,
  _SSL,
  _sSt,
  _sT,
  _sTR,
  _sTt,
  _su,
  _t,
  _tD,
  _to,
  _tPCU,
  _tri,
  _TS,
  _tTri,
  _uB,
  _up,
  _var,
  n0,
} from "./schemas_0";
import { ActionRevision } from "./schemas_10_Job";
import { RuleTypeId } from "./schemas_24_List";

/* eslint no-var: 0 */

export var ActionExecution = struct(
  n0,
  _AE,
  0,
  [_aEI, _s, _su, _lSC, _to, _lUB, _eEI, _eEU, _pC, _eD, _lSARN],
  [0, 0, 0, 4, 0, 0, 0, 0, 1, () => ErrorDetails, 0]
);
export var ActionState = struct(
  n0,
  _AS,
  0,
  [_aN, _cR, _lE, _eU, _rU],
  [0, () => ActionRevision, () => ActionExecution, 0, 0]
);
export var ArtifactDetail = struct(n0, _ADr, 0, [_na, _sl], [0, () => S3Location]);
export var ArtifactDetails = struct(n0, _ADrt, 0, [_mC, _mCa], [1, 1]);
export var ArtifactRevision = struct(n0, _ARr, 0, [_na, _rI, _rCIe, _rS, _cr, _rU], [0, 0, 0, 0, 4, 0]);
export var ConditionExecution = struct(n0, _CE, 0, [_s, _su, _lSC], [0, 0, 4]);
export var ConditionState = struct(n0, _CS, 0, [_lE, _rSu], [() => ConditionExecution, () => RuleStateList]);
export var ErrorDetails = struct(n0, _ED, 0, [_cod, _m], [0, 0]);
export var ExecutionTrigger = struct(n0, _ET, 0, [_tTri, _tD], [0, 0]);
export var GetPipelineExecutionInput = struct(n0, _GPEI, 0, [_pN, _pEI], [0, 0]);
export var GetPipelineExecutionOutput = struct(n0, _GPEO, 0, [_pE], [() => PipelineExecution]);
export var GetPipelineStateInput = struct(n0, _GPSI, 0, [_na], [0]);
export var GetPipelineStateOutput = struct(n0, _GPSO, 0, [_pN, _pV, _sS, _cr, _up], [0, 1, () => StageStateList, 4, 4]);
export var LatestInPipelineExecutionFilter = struct(n0, _LIPEF, 0, [_pEI, _sTR], [0, 0]);
export var ListPipelineExecutionsInput = struct(
  n0,
  _LPEI,
  0,
  [_pN, _mR, _f, _nT],
  [0, 1, () => PipelineExecutionFilter, 0]
);
export var ListPipelineExecutionsOutput = struct(n0, _LPEO, 0, [_pES, _nT], [() => PipelineExecutionSummaryList, 0]);
export var ListRuleExecutionsInput = struct(n0, _LREI, 0, [_pN, _f, _mR, _nT], [0, () => RuleExecutionFilter, 1, 0]);
export var ListRuleExecutionsOutput = struct(n0, _LREO, 0, [_rED, _nT], [() => RuleExecutionDetailList, 0]);
export var ListRuleTypesInput = struct(n0, _LRTI, 0, [_rOF, _rF], [0, 0]);
export var ListRuleTypesOutput = struct(n0, _LRTO, 0, [_rT], [() => RuleTypeList]);
export var PipelineExecution = struct(
  n0,
  _PE,
  0,
  [_pN, _pV, _pEI, _s, _sSt, _aR, _var, _tri, _eMx, _eTx, _rM],
  [
    0,
    1,
    0,
    0,
    0,
    () => ArtifactRevisionList,
    () => ResolvedPipelineVariableList,
    () => ExecutionTrigger,
    0,
    0,
    () => PipelineRollbackMetadata,
  ]
);
export var PipelineExecutionFilter = struct(n0, _PEF, 0, [_sIS], [() => SucceededInStageFilter]);
export var PipelineExecutionSummary = struct(
  n0,
  _PES,
  0,
  [_pEI, _s, _sSt, _sT, _lUT, _sR, _tri, _sTt, _eMx, _eTx, _rM],
  [
    0,
    0,
    0,
    4,
    4,
    () => SourceRevisionList,
    () => ExecutionTrigger,
    () => StopExecutionTrigger,
    0,
    0,
    () => PipelineRollbackMetadata,
  ]
);
export var PipelineRollbackMetadata = struct(n0, _PRM, 0, [_rTPEI], [0]);
export var ResolvedPipelineVariable = struct(n0, _RPV, 0, [_na, _rV], [0, 0]);
export var RetryStageMetadata = struct(n0, _RSM, 0, [_aSRA, _mSRA, _lRT], [1, 1, 0]);
export var RuleConfigurationProperty = struct(n0, _RCP, 0, [_na, _r, _k, _se, _q, _d, _t], [0, 2, 2, 2, 2, 0, 0]);
export var RuleExecution = struct(
  n0,
  _RE,
  0,
  [_rEI, _s, _su, _lSC, _to, _lUB, _eEI, _eEU, _eD],
  [0, 0, 0, 4, 0, 0, 0, 0, () => ErrorDetails]
);
export var RuleExecutionDetail = struct(
  n0,
  _RED,
  0,
  [_pEI, _rEI, _pV, _sN, _rN, _sT, _lUT, _uB, _s, _i, _o],
  [0, 0, 1, 0, 0, 4, 4, 0, 0, () => RuleExecutionInput, () => RuleExecutionOutput]
);
export var RuleExecutionFilter = struct(n0, _REF, 0, [_pEI, _lIPE], [0, () => LatestInPipelineExecutionFilter]);
export var RuleExecutionInput = struct(
  n0,
  _REI,
  0,
  [_rTI, _c, _rC, _rA, _re, _iA],
  [() => RuleTypeId, 128 | 0, 128 | 0, 0, 0, () => ArtifactDetailList]
);
export var RuleExecutionOutput = struct(n0, _REO, 0, [_eR], [() => RuleExecutionResult]);
export var RuleExecutionResult = struct(n0, _RER, 0, [_eEI, _eES, _eEU, _eD], [0, 0, 0, () => ErrorDetails]);
export var RuleRevision = struct(n0, _RR, 0, [_rI, _rCI, _cr], [0, 0, 4]);
export var RuleState = struct(
  n0,
  _RS,
  0,
  [_rN, _cR, _lE, _eU, _rU],
  [0, () => RuleRevision, () => RuleExecution, 0, 0]
);
export var RuleType = struct(
  n0,
  _RT,
  0,
  [_id, _set, _rCP, _iAD],
  [() => RuleTypeId, () => RuleTypeSettings, () => RuleConfigurationPropertyList, () => ArtifactDetails]
);
export var RuleTypeSettings = struct(n0, _RTS, 0, [_tPCU, _eUT, _eUTx, _rUT], [0, 0, 0, 0]);
export var S3Location = struct(n0, _SL, 0, [_bu, _k], [0, 0]);
export var SourceRevision = struct(n0, _SR, 0, [_aN, _rI, _rS, _rU], [0, 0, 0, 0]);
export var StageConditionsExecution = struct(n0, _SCE, 0, [_s, _su], [0, 0]);
export var StageConditionState = struct(
  n0,
  _SCS,
  0,
  [_lE, _cS],
  [() => StageConditionsExecution, () => ConditionStateList]
);
export var StageExecution = struct(n0, _SE, 0, [_pEI, _s, _t], [0, 0, 0]);
export var StageState = struct(
  n0,
  _SS,
  0,
  [_sN, _iE, _iEn, _iTS, _aSc, _lE, _bECS, _oSCS, _oFCS, _rSM],
  [
    0,
    () => StageExecution,
    () => StageExecutionList,
    () => TransitionState,
    () => ActionStateList,
    () => StageExecution,
    () => StageConditionState,
    () => StageConditionState,
    () => StageConditionState,
    () => RetryStageMetadata,
  ]
);
export var StopExecutionTrigger = struct(n0, _SET, 0, [_rea], [0]);
export var SucceededInStageFilter = struct(n0, _SISF, 0, [_sN], [0]);
export var TransitionState = struct(n0, _TS, 0, [_en, _lCB, _lCA, _dR], [2, 0, 4, 0]);
export var ActionStateList = list(n0, _ASL, 0, () => ActionState);
export var ArtifactDetailList = list(n0, _ADL, 0, () => ArtifactDetail);
export var ArtifactRevisionList = list(n0, _ARL, 0, () => ArtifactRevision);
export var ConditionStateList = list(n0, _CSL, 0, () => ConditionState);
export var PipelineExecutionSummaryList = list(n0, _PESL, 0, () => PipelineExecutionSummary);
export var ResolvedPipelineVariableList = list(n0, _RPVL, 0, () => ResolvedPipelineVariable);
export var RuleConfigurationPropertyList = list(n0, _RCPL, 0, () => RuleConfigurationProperty);
export var RuleExecutionDetailList = list(n0, _REDL, 0, () => RuleExecutionDetail);
export var RuleStateList = list(n0, _RSL, 0, () => RuleState);
export var RuleTypeList = list(n0, _RTL, 0, () => RuleType);
export var SourceRevisionList = list(n0, _SRL, 0, () => SourceRevision);
export var StageExecutionList = list(n0, _SEL, 0, () => StageExecution);
export var StageStateList = list(n0, _SSL, 0, () => StageState);
export var ResolvedRuleConfigurationMap = 128 | 0;

export var GetPipelineExecution = op(
  n0,
  _GPE,
  0,
  () => GetPipelineExecutionInput,
  () => GetPipelineExecutionOutput
);
export var GetPipelineState = op(
  n0,
  _GPS,
  0,
  () => GetPipelineStateInput,
  () => GetPipelineStateOutput
);
export var ListPipelineExecutions = op(
  n0,
  _LPE,
  0,
  () => ListPipelineExecutionsInput,
  () => ListPipelineExecutionsOutput
);
export var ListRuleExecutions = op(
  n0,
  _LRE,
  0,
  () => ListRuleExecutionsInput,
  () => ListRuleExecutionsOutput
);
export var ListRuleTypes = op(
  n0,
  _LRT,
  0,
  () => ListRuleTypesInput,
  () => ListRuleTypesOutput
);
