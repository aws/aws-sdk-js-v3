// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { OutputVariablesSizeExceededException as __OutputVariablesSizeExceededException } from "../models/index";
import {
  _aN,
  _AR,
  _aRc,
  _cI,
  _cl,
  _CR,
  _cR,
  _cr,
  _cRT,
  _cT,
  _cTo,
  _e,
  _EDx,
  _eDx,
  _eEI,
  _jI,
  _m,
  _na,
  _nR,
  _oV,
  _OVSEE,
  _PAR,
  _PARI,
  _PARO,
  _pC,
  _pEI,
  _PJSR,
  _PJSRI,
  _pN,
  _PTPJSR,
  _PTPJSRI,
  _PV,
  _PVL,
  _rCI,
  _rev,
  _rI,
  _rS,
  _rTe,
  _rVe,
  _sN,
  _SPE,
  _SPEI,
  _SPEO,
  _sR,
  _SRO,
  _SROL,
  _su,
  _va,
  _var,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ActionRevision = struct(n0, _AR, 0, [_rI, _rCI, _cr], [0, 0, 4]);
export var CurrentRevision = struct(n0, _CR, 0, [_rev, _cI, _cr, _rS], [0, 0, 4, 0]);
export var ExecutionDetails = struct(n0, _EDx, 0, [_su, _eEI, _pC], [0, 0, 1]);
export var OutputVariablesSizeExceededException = error(
  n0,
  _OVSEE,
  {
    [_e]: _cl,
  },
  [_m],
  [0],

  __OutputVariablesSizeExceededException
);
export var PipelineVariable = struct(n0, _PV, 0, [_na, _va], [0, 0]);
export var PutActionRevisionInput = struct(n0, _PARI, 0, [_pN, _sN, _aN, _aRc], [0, 0, 0, () => ActionRevision]);
export var PutActionRevisionOutput = struct(n0, _PARO, 0, [_nR, _pEI], [2, 0]);
export var PutJobSuccessResultInput = struct(
  n0,
  _PJSRI,
  0,
  [_jI, _cR, _cTo, _eDx, _oV],
  [0, () => CurrentRevision, 0, () => ExecutionDetails, 128 | 0]
);
export var PutThirdPartyJobSuccessResultInput = struct(
  n0,
  _PTPJSRI,
  0,
  [_jI, _cT, _cR, _cTo, _eDx],
  [0, 0, () => CurrentRevision, 0, () => ExecutionDetails]
);
export var SourceRevisionOverride = struct(n0, _SRO, 0, [_aN, _rTe, _rVe], [0, 0, 0]);
export var StartPipelineExecutionInput = struct(
  n0,
  _SPEI,
  0,
  [_na, _var, _cRT, _sR],
  [0, () => PipelineVariableList, [0, 4], () => SourceRevisionOverrideList]
);
export var StartPipelineExecutionOutput = struct(n0, _SPEO, 0, [_pEI], [0]);
export var PipelineVariableList = list(n0, _PVL, 0, () => PipelineVariable);
export var SourceRevisionOverrideList = list(n0, _SROL, 0, () => SourceRevisionOverride);
export var PutActionRevision = op(
  n0,
  _PAR,
  0,
  () => PutActionRevisionInput,
  () => PutActionRevisionOutput
);
export var PutJobSuccessResult = op(
  n0,
  _PJSR,
  0,
  () => PutJobSuccessResultInput,
  () => Unit
);
export var PutThirdPartyJobSuccessResult = op(
  n0,
  _PTPJSR,
  0,
  () => PutThirdPartyJobSuccessResultInput,
  () => Unit
);
export var StartPipelineExecution = op(
  n0,
  _SPE,
  0,
  () => StartPipelineExecutionInput,
  () => StartPipelineExecutionOutput
);
