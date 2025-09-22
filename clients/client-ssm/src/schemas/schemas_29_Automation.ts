// smithy-typescript generated code
import { error, list, map, op, struct } from "@smithy/core/schema";

import {
  AutomationStepNotFoundException as __AutomationStepNotFoundException,
  InvalidAutomationSignalException as __InvalidAutomationSignalException,
} from "../models/index";
import {
  _Ac,
  _AEI,
  _APM,
  _aQE,
  _ASNFE,
  _c,
  _DASE,
  _DASER,
  _DASERe,
  _De,
  _e,
  _EET,
  _EST,
  _FD,
  _Fi,
  _FM,
  _FS,
  _FT,
  _IASE,
  _ICs,
  _IE,
  _Inpu,
  _It,
  _IV,
  _K,
  _M,
  _MA,
  _MR,
  _NS,
  _NT,
  _OFn,
  _OP,
  _Ou,
  _Pay,
  _PSD,
  _RCe,
  _Res,
  _RO,
  _SAS,
  _SASR,
  _SASRe,
  _SEF,
  _SEFL,
  _SEI,
  _SEL,
  _SEt,
  _SEte,
  _SNt,
  _SSt,
  _STi,
  _TA,
  _Ta,
  _TLar,
  _TS,
  _Va,
  _VNS,
  AlarmStateInformationList,
  n0,
  Targets,
} from "./schemas_0";
import { TargetLocation } from "./schemas_34_Association";

/* eslint no-var: 0 */

export var AutomationStepNotFoundException = error(
  n0,
  _ASNFE,
  {
    [_e]: _c,
    [_aQE]: [`AutomationStepNotFoundException`, 404],
  },
  [_M],
  [0],

  __AutomationStepNotFoundException
);
export var DescribeAutomationStepExecutionsRequest = struct(
  n0,
  _DASER,
  0,
  [_AEI, _Fi, _NT, _MR, _RO],
  [0, () => StepExecutionFilterList, 0, 1, 2]
);
export var DescribeAutomationStepExecutionsResult = struct(n0, _DASERe, 0, [_SEt, _NT], [() => StepExecutionList, 0]);
export var FailureDetails = struct(n0, _FD, 0, [_FS, _FT, _De], [0, 0, map(n0, _APM, 0, 0, 64 | 0)]);
export var InvalidAutomationSignalException = error(
  n0,
  _IASE,
  {
    [_e]: _c,
    [_aQE]: [`InvalidAutomationSignalException`, 400],
  },
  [_M],
  [0],

  __InvalidAutomationSignalException
);
export var ParentStepDetails = struct(n0, _PSD, 0, [_SEI, _SNt, _Ac, _It, _IV], [0, 0, 0, 1, 0]);
export var SendAutomationSignalRequest = struct(n0, _SASR, 0, [_AEI, _STi, _Pay], [0, 0, map(n0, _APM, 0, 0, 64 | 0)]);
export var SendAutomationSignalResult = struct(n0, _SASRe, 0, [], []);
export var StepExecution = struct(
  n0,
  _SEte,
  0,
  [
    _SNt,
    _Ac,
    _TS,
    _OFn,
    _MA,
    _EST,
    _EET,
    _SSt,
    _RCe,
    _Inpu,
    _Ou,
    _Res,
    _FM,
    _FD,
    _SEI,
    _OP,
    _IE,
    _NS,
    _ICs,
    _VNS,
    _Ta,
    _TLar,
    _TA,
    _PSD,
  ],
  [
    0,
    0,
    1,
    0,
    1,
    4,
    4,
    0,
    0,
    128 | 0,
    map(n0, _APM, 0, 0, 64 | 0),
    0,
    0,
    () => FailureDetails,
    0,
    map(n0, _APM, 0, 0, 64 | 0),
    2,
    0,
    2,
    64 | 0,
    () => Targets,
    () => TargetLocation,
    () => AlarmStateInformationList,
    () => ParentStepDetails,
  ]
);
export var StepExecutionFilter = struct(n0, _SEF, 0, [_K, _Va], [0, 64 | 0]);
export var AutomationParameterValueList = 64 | 0;

export var StepExecutionFilterList = list(n0, _SEFL, 0, () => StepExecutionFilter);
export var StepExecutionFilterValueList = 64 | 0;

export var StepExecutionList = list(n0, _SEL, 0, () => StepExecution);
export var ValidNextStepList = 64 | 0;

export var AutomationParameterMap = map(n0, _APM, 0, 0, 64 | 0);
export var NormalStringMap = 128 | 0;

export var DescribeAutomationStepExecutions = op(
  n0,
  _DASE,
  0,
  () => DescribeAutomationStepExecutionsRequest,
  () => DescribeAutomationStepExecutionsResult
);
export var SendAutomationSignal = op(
  n0,
  _SAS,
  0,
  () => SendAutomationSignalRequest,
  () => SendAutomationSignalResult
);
