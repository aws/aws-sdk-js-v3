// smithy-typescript generated code
import { error, list, map, op, struct } from "@smithy/core/schema";

import {
  DeploymentAlreadyCompletedException as __DeploymentAlreadyCompletedException,
  DeploymentDoesNotExistException as __DeploymentDoesNotExistException,
  DeploymentIsNotInReadyStateException as __DeploymentIsNotInReadyStateException,
  DeploymentNotStartedException as __DeploymentNotStartedException,
  DeploymentTargetDoesNotExistException as __DeploymentTargetDoesNotExistException,
  DeploymentTargetIdRequiredException as __DeploymentTargetIdRequiredException,
  DeploymentTargetListSizeExceededException as __DeploymentTargetListSizeExceededException,
  InstanceDoesNotExistException as __InstanceDoesNotExistException,
  InstanceIdRequiredException as __InstanceIdRequiredException,
  InvalidDeploymentInstanceTypeException as __InvalidDeploymentInstanceTypeException,
  InvalidDeploymentTargetIdException as __InvalidDeploymentTargetIdException,
  InvalidDeploymentWaitTypeException as __InvalidDeploymentWaitTypeException,
  InvalidInstanceStatusException as __InvalidInstanceStatusException,
  InvalidInstanceTypeException as __InvalidInstanceTypeException,
  InvalidLifecycleEventHookExecutionIdException as __InvalidLifecycleEventHookExecutionIdException,
  InvalidLifecycleEventHookExecutionStatusException as __InvalidLifecycleEventHookExecutionStatusException,
  InvalidTargetFilterNameException as __InvalidTargetFilterNameException,
  LifecycleEventAlreadyCompletedException as __LifecycleEventAlreadyCompletedException,
  UnsupportedActionForDeploymentTypeException as __UnsupportedActionForDeploymentTypeException,
} from "../models/index";
import {
  _aRE,
  _BGDIa,
  _BGDII,
  _BGDIO,
  _BGDT,
  _BGDTI,
  _BGDTO,
  _c,
  _CD,
  _CDI,
  _CFT,
  _cFT,
  _cV,
  _D,
  _DACE,
  _dC,
  _DDNEE,
  _dI,
  _di,
  _dIepl,
  _DINIRSE,
  _DNSE,
  _DT,
  _dT,
  _DTDNEE,
  _dTep,
  _DTIRE,
  _DTL,
  _DTLSEE,
  _dTT,
  _dWT,
  _eC,
  _ECST,
  _ECSTS,
  _ECSTSL,
  _eM,
  _er,
  _eT,
  _eTn,
  _fA,
  _fN,
  _GD,
  _GDI,
  _GDIe,
  _GDII,
  _GDIO,
  _GDO,
  _GDT,
  _GDTI,
  _GDTO,
  _i,
  _IDITE,
  _IDNEE,
  _IDTIE,
  _IDWTE,
  _iI,
  _iIns,
  _IIRE,
  _IISE,
  _IITE,
  _iL,
  _ILEHEIE,
  _ILEHESE,
  _iLn,
  _IS,
  _iS,
  _iSF,
  _ISL,
  _iSn,
  _IT,
  _iT,
  _iTF,
  _ITFNE,
  _iTn,
  _LDII,
  _LDIis,
  _LDIO,
  _LDT,
  _LDTI,
  _LDTO,
  _LE,
  _lE,
  _LEACE,
  _lEHEI,
  _LEL,
  _lEN,
  _LFI,
  _lFI,
  _LT,
  _lT,
  _lTo,
  _lUA,
  _m,
  _nT,
  _pC,
  _PLEHES,
  _PLEHESI,
  _PLEHESO,
  _rC,
  _rT,
  _SD,
  _SDI,
  _SDO,
  _sM,
  _sN,
  _sT,
  _st,
  _SWTFIT,
  _SWTFITI,
  _tA,
  _TF,
  _tF,
  _tG,
  _tI,
  _tIa,
  _tSI,
  _tSL,
  _tV,
  _tVW,
  _tW,
  _UAFDTE,
  n0,
  Unit,
} from "./schemas_0";
import { DeploymentInfo } from "./schemas_1_Deployment";
import { TargetGroupInfo } from "./schemas_14_Deployment";

/* eslint no-var: 0 */

export var BatchGetDeploymentInstancesInput = struct(n0, _BGDII, 0, [_dI, _iI], [0, 64 | 0]);
export var BatchGetDeploymentInstancesOutput = struct(n0, _BGDIO, 0, [_iS, _eM], [() => InstanceSummaryList, 0]);
export var BatchGetDeploymentTargetsInput = struct(n0, _BGDTI, 0, [_dI, _tI], [0, 64 | 0]);
export var BatchGetDeploymentTargetsOutput = struct(n0, _BGDTO, 0, [_dT], [() => DeploymentTargetList]);
export var CloudFormationTarget = struct(
  n0,
  _CFT,
  0,
  [_dI, _tIa, _lUA, _lE, _st, _rT, _tVW],
  [0, 0, 4, () => LifecycleEventList, 0, 0, 1]
);
export var ContinueDeploymentInput = struct(n0, _CDI, 0, [_dI, _dWT], [0, 0]);
export var DeploymentAlreadyCompletedException = error(
  n0,
  _DACE,
  {
    [_er]: _c,
  },
  [_m],
  [0],

  __DeploymentAlreadyCompletedException
);
export var DeploymentDoesNotExistException = error(
  n0,
  _DDNEE,
  {
    [_er]: _c,
  },
  [_m],
  [0],

  __DeploymentDoesNotExistException
);
export var DeploymentIsNotInReadyStateException = error(
  n0,
  _DINIRSE,
  {
    [_er]: _c,
  },
  [_m],
  [0],

  __DeploymentIsNotInReadyStateException
);
export var DeploymentNotStartedException = error(
  n0,
  _DNSE,
  {
    [_er]: _c,
  },
  [_m],
  [0],

  __DeploymentNotStartedException
);
export var DeploymentTarget = struct(
  n0,
  _DT,
  0,
  [_dTT, _iT, _lT, _eT, _cFT],
  [0, () => InstanceTarget, () => LambdaTarget, () => ECSTarget, () => CloudFormationTarget]
);
export var DeploymentTargetDoesNotExistException = error(
  n0,
  _DTDNEE,
  {
    [_er]: _c,
  },
  [_m],
  [0],

  __DeploymentTargetDoesNotExistException
);
export var DeploymentTargetIdRequiredException = error(
  n0,
  _DTIRE,
  {
    [_er]: _c,
  },
  [_m],
  [0],

  __DeploymentTargetIdRequiredException
);
export var DeploymentTargetListSizeExceededException = error(
  n0,
  _DTLSEE,
  {
    [_er]: _c,
  },
  [_m],
  [0],

  __DeploymentTargetListSizeExceededException
);
export var Diagnostics = struct(n0, _D, 0, [_eC, _sN, _m, _lTo], [0, 0, 0, 0]);
export var ECSTarget = struct(
  n0,
  _ECST,
  0,
  [_dI, _tIa, _tA, _lUA, _lE, _st, _tSI],
  [0, 0, 0, 4, () => LifecycleEventList, 0, () => ECSTaskSetList]
);
export var ECSTaskSet = struct(
  n0,
  _ECSTS,
  0,
  [_i, _dC, _pC, _rC, _st, _tW, _tG, _tSL],
  [0, 1, 1, 1, 0, 1, () => TargetGroupInfo, 0]
);
export var GetDeploymentInput = struct(n0, _GDI, 0, [_dI], [0]);
export var GetDeploymentInstanceInput = struct(n0, _GDII, 0, [_dI, _iIns], [0, 0]);
export var GetDeploymentInstanceOutput = struct(n0, _GDIO, 0, [_iSn], [() => InstanceSummary]);
export var GetDeploymentOutput = struct(n0, _GDO, 0, [_dIepl], [() => DeploymentInfo]);
export var GetDeploymentTargetInput = struct(n0, _GDTI, 0, [_dI, _tIa], [0, 0]);
export var GetDeploymentTargetOutput = struct(n0, _GDTO, 0, [_dTep], [() => DeploymentTarget]);
export var InstanceDoesNotExistException = error(
  n0,
  _IDNEE,
  {
    [_er]: _c,
  },
  [_m],
  [0],

  __InstanceDoesNotExistException
);
export var InstanceIdRequiredException = error(
  n0,
  _IIRE,
  {
    [_er]: _c,
  },
  [_m],
  [0],

  __InstanceIdRequiredException
);
export var InstanceSummary = struct(
  n0,
  _IS,
  0,
  [_dI, _iIns, _st, _lUA, _lE, _iTn],
  [0, 0, 0, 4, () => LifecycleEventList, 0]
);
export var InstanceTarget = struct(
  n0,
  _IT,
  0,
  [_dI, _tIa, _tA, _st, _lUA, _lE, _iL],
  [0, 0, 0, 0, 4, () => LifecycleEventList, 0]
);
export var InvalidDeploymentInstanceTypeException = error(
  n0,
  _IDITE,
  {
    [_er]: _c,
  },
  [_m],
  [0],

  __InvalidDeploymentInstanceTypeException
);
export var InvalidDeploymentTargetIdException = error(
  n0,
  _IDTIE,
  {
    [_er]: _c,
  },
  [_m],
  [0],

  __InvalidDeploymentTargetIdException
);
export var InvalidDeploymentWaitTypeException = error(
  n0,
  _IDWTE,
  {
    [_er]: _c,
  },
  [_m],
  [0],

  __InvalidDeploymentWaitTypeException
);
export var InvalidInstanceStatusException = error(
  n0,
  _IISE,
  {
    [_er]: _c,
  },
  [_m],
  [0],

  __InvalidInstanceStatusException
);
export var InvalidInstanceTypeException = error(
  n0,
  _IITE,
  {
    [_er]: _c,
  },
  [_m],
  [0],

  __InvalidInstanceTypeException
);
export var InvalidLifecycleEventHookExecutionIdException = error(
  n0,
  _ILEHEIE,
  {
    [_er]: _c,
  },
  [_m],
  [0],

  __InvalidLifecycleEventHookExecutionIdException
);
export var InvalidLifecycleEventHookExecutionStatusException = error(
  n0,
  _ILEHESE,
  {
    [_er]: _c,
  },
  [_m],
  [0],

  __InvalidLifecycleEventHookExecutionStatusException
);
export var InvalidTargetFilterNameException = error(
  n0,
  _ITFNE,
  {
    [_er]: _c,
  },
  [_m],
  [0],

  __InvalidTargetFilterNameException
);
export var LambdaFunctionInfo = struct(n0, _LFI, 0, [_fN, _fA, _cV, _tV, _tVW], [0, 0, 0, 0, 1]);
export var LambdaTarget = struct(
  n0,
  _LT,
  0,
  [_dI, _tIa, _tA, _st, _lUA, _lE, _lFI],
  [0, 0, 0, 0, 4, () => LifecycleEventList, () => LambdaFunctionInfo]
);
export var LifecycleEvent = struct(n0, _LE, 0, [_lEN, _di, _sT, _eTn, _st], [0, () => Diagnostics, 4, 4, 0]);
export var LifecycleEventAlreadyCompletedException = error(
  n0,
  _LEACE,
  {
    [_er]: _c,
  },
  [_m],
  [0],

  __LifecycleEventAlreadyCompletedException
);
export var ListDeploymentInstancesInput = struct(n0, _LDII, 0, [_dI, _nT, _iSF, _iTF], [0, 0, 64 | 0, 64 | 0]);
export var ListDeploymentInstancesOutput = struct(n0, _LDIO, 0, [_iLn, _nT], [64 | 0, 0]);
export var ListDeploymentTargetsInput = struct(n0, _LDTI, 0, [_dI, _nT, _tF], [0, 0, map(n0, _TF, 0, 0, 64 | 0)]);
export var ListDeploymentTargetsOutput = struct(n0, _LDTO, 0, [_tI, _nT], [64 | 0, 0]);
export var PutLifecycleEventHookExecutionStatusInput = struct(n0, _PLEHESI, 0, [_dI, _lEHEI, _st], [0, 0, 0]);
export var PutLifecycleEventHookExecutionStatusOutput = struct(n0, _PLEHESO, 0, [_lEHEI], [0]);
export var SkipWaitTimeForInstanceTerminationInput = struct(n0, _SWTFITI, 0, [_dI], [0]);
export var StopDeploymentInput = struct(n0, _SDI, 0, [_dI, _aRE], [0, 2]);
export var StopDeploymentOutput = struct(n0, _SDO, 0, [_st, _sM], [0, 0]);
export var UnsupportedActionForDeploymentTypeException = error(
  n0,
  _UAFDTE,
  {
    [_er]: _c,
  },
  [_m],
  [0],

  __UnsupportedActionForDeploymentTypeException
);
export var DeploymentTargetList = list(n0, _DTL, 0, () => DeploymentTarget);
export var ECSTaskSetList = list(n0, _ECSTSL, 0, () => ECSTaskSet);
export var FilterValueList = 64 | 0;

export var InstancesList = 64 | 0;

export var InstanceStatusList = 64 | 0;

export var InstanceSummaryList = list(n0, _ISL, 0, () => InstanceSummary);
export var InstanceTypeList = 64 | 0;

export var LifecycleEventList = list(n0, _LEL, 0, () => LifecycleEvent);
export var TargetIdList = 64 | 0;

export var TargetFilters = map(n0, _TF, 0, 0, 64 | 0);
export var BatchGetDeploymentInstances = op(
  n0,
  _BGDIa,
  0,
  () => BatchGetDeploymentInstancesInput,
  () => BatchGetDeploymentInstancesOutput
);
export var BatchGetDeploymentTargets = op(
  n0,
  _BGDT,
  0,
  () => BatchGetDeploymentTargetsInput,
  () => BatchGetDeploymentTargetsOutput
);
export var ContinueDeployment = op(
  n0,
  _CD,
  0,
  () => ContinueDeploymentInput,
  () => Unit
);
export var GetDeployment = op(
  n0,
  _GD,
  0,
  () => GetDeploymentInput,
  () => GetDeploymentOutput
);
export var GetDeploymentInstance = op(
  n0,
  _GDIe,
  0,
  () => GetDeploymentInstanceInput,
  () => GetDeploymentInstanceOutput
);
export var GetDeploymentTarget = op(
  n0,
  _GDT,
  0,
  () => GetDeploymentTargetInput,
  () => GetDeploymentTargetOutput
);
export var ListDeploymentInstances = op(
  n0,
  _LDIis,
  0,
  () => ListDeploymentInstancesInput,
  () => ListDeploymentInstancesOutput
);
export var ListDeploymentTargets = op(
  n0,
  _LDT,
  0,
  () => ListDeploymentTargetsInput,
  () => ListDeploymentTargetsOutput
);
export var PutLifecycleEventHookExecutionStatus = op(
  n0,
  _PLEHES,
  0,
  () => PutLifecycleEventHookExecutionStatusInput,
  () => PutLifecycleEventHookExecutionStatusOutput
);
export var SkipWaitTimeForInstanceTermination = op(
  n0,
  _SWTFIT,
  0,
  () => SkipWaitTimeForInstanceTerminationInput,
  () => Unit
);
export var StopDeployment = op(
  n0,
  _SD,
  0,
  () => StopDeploymentInput,
  () => StopDeploymentOutput
);
