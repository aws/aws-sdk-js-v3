// smithy-typescript generated code
import { error, list, map, op, struct, struct as uni } from "@smithy/core/schema";

import {
  AutomationDefinitionNotApprovedException as __AutomationDefinitionNotApprovedException,
  AutomationDefinitionNotFoundException as __AutomationDefinitionNotFoundException,
  AutomationDefinitionVersionNotFoundException as __AutomationDefinitionVersionNotFoundException,
  AutomationExecutionLimitExceededException as __AutomationExecutionLimitExceededException,
  InvalidAutomationExecutionParametersException as __InvalidAutomationExecutionParametersException,
  InvalidTarget as __InvalidTarget,
} from "../models/index";
import {
  _AA,
  _AC,
  _ADNAE,
  _ADNFE,
  _ADVNFE,
  _AEFLu,
  _AEFu,
  _AEI,
  _AEIu,
  _AELEE,
  _AEM,
  _AEML,
  _AES,
  _AEu,
  _AIss,
  _APM,
  _aQE,
  _ASu,
  _ATu,
  _Aut,
  _c,
  _CA,
  _CDh,
  _CRN,
  _CSa,
  _CSN,
  _CTl,
  _DAEes,
  _DAERes,
  _DAEResc,
  _DN,
  _DV,
  _e,
  _EB,
  _EET,
  _EIx,
  _EPI,
  _EST,
  _Fi,
  _FM,
  _FSa,
  _GAE,
  _GAER,
  _GAERe,
  _IAEPE,
  _ITnv,
  _K,
  _LF,
  _M,
  _MC,
  _ME,
  _Mo,
  _MR,
  _NT,
  _OII,
  _Ou,
  _P,
  _PAEI,
  _PC,
  _PVar,
  _R,
  _RTe,
  _Ru,
  _SAE,
  _SAER,
  _SAERt,
  _SCRE,
  _SCRER,
  _SCRERt,
  _SEP,
  _SEPR,
  _SEPRt,
  _SET,
  _SEt,
  _SETc,
  _SSu,
  _ST,
  _T,
  _TA,
  _Ta,
  _Tar,
  _TL,
  _TLURL,
  _TM,
  _TMa,
  _TOS,
  _TPN,
  _Tr,
  _TSo,
  _Va,
  _Var,
  AlarmConfiguration,
  AlarmStateInformationList,
  n0,
  TagList,
  Targets,
} from "./schemas_0";
import { StepExecutionList } from "./schemas_29_Automation";
import { TargetLocation } from "./schemas_34_Association";

/* eslint no-var: 0 */

export var AutomationDefinitionNotApprovedException = error(
  n0,
  _ADNAE,
  {
    [_e]: _c,
    [_aQE]: [`AutomationDefinitionNotApproved`, 400],
  },
  [_M],
  [0],

  __AutomationDefinitionNotApprovedException
);
export var AutomationDefinitionNotFoundException = error(
  n0,
  _ADNFE,
  {
    [_e]: _c,
    [_aQE]: [`AutomationDefinitionNotFound`, 404],
  },
  [_M],
  [0],

  __AutomationDefinitionNotFoundException
);
export var AutomationDefinitionVersionNotFoundException = error(
  n0,
  _ADVNFE,
  {
    [_e]: _c,
    [_aQE]: [`AutomationDefinitionVersionNotFound`, 404],
  },
  [_M],
  [0],

  __AutomationDefinitionVersionNotFoundException
);
export var AutomationExecution = struct(
  n0,
  _AEu,
  0,
  [
    _AEI,
    _DN,
    _DV,
    _EST,
    _EET,
    _AES,
    _SEt,
    _SET,
    _P,
    _Ou,
    _FM,
    _Mo,
    _PAEI,
    _EB,
    _CSN,
    _CA,
    _TPN,
    _Ta,
    _TM,
    _RTe,
    _MC,
    _ME,
    _Tar,
    _TL,
    _PC,
    _AC,
    _TA,
    _TLURL,
    _ASu,
    _ST,
    _R,
    _OII,
    _AIss,
    _CRN,
    _Var,
  ],
  [
    0,
    0,
    0,
    4,
    4,
    0,
    () => StepExecutionList,
    2,
    map(n0, _APM, 0, 0, 64 | 0),
    map(n0, _APM, 0, 0, 64 | 0),
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    () => Targets,
    list(n0, _TM, 0, map(n0, _TMa, 0, 0, 64 | 0)),
    () => ResolvedTargets,
    0,
    0,
    0,
    () => TargetLocations,
    () => ProgressCounters,
    () => AlarmConfiguration,
    () => AlarmStateInformationList,
    0,
    0,
    4,
    () => Runbooks,
    0,
    0,
    0,
    map(n0, _APM, 0, 0, 64 | 0),
  ]
);
export var AutomationExecutionFilter = struct(n0, _AEFu, 0, [_K, _Va], [0, 64 | 0]);
export var AutomationExecutionInputs = struct(
  n0,
  _AEIu,
  0,
  [_P, _TPN, _Ta, _TM, _TL, _TLURL],
  [
    map(n0, _APM, 0, 0, 64 | 0),
    0,
    () => Targets,
    list(n0, _TM, 0, map(n0, _TMa, 0, 0, 64 | 0)),
    () => TargetLocations,
    0,
  ]
);
export var AutomationExecutionLimitExceededException = error(
  n0,
  _AELEE,
  {
    [_e]: _c,
    [_aQE]: [`AutomationExecutionLimitExceeded`, 429],
  },
  [_M],
  [0],

  __AutomationExecutionLimitExceededException
);
export var AutomationExecutionMetadata = struct(
  n0,
  _AEM,
  0,
  [
    _AEI,
    _DN,
    _DV,
    _AES,
    _EST,
    _EET,
    _EB,
    _LF,
    _Ou,
    _Mo,
    _PAEI,
    _CSN,
    _CA,
    _FM,
    _TPN,
    _Ta,
    _TM,
    _RTe,
    _MC,
    _ME,
    _Tar,
    _ATu,
    _AC,
    _TA,
    _TLURL,
    _ASu,
    _ST,
    _R,
    _OII,
    _AIss,
    _CRN,
  ],
  [
    0,
    0,
    0,
    0,
    4,
    4,
    0,
    0,
    map(n0, _APM, 0, 0, 64 | 0),
    0,
    0,
    0,
    0,
    0,
    0,
    () => Targets,
    list(n0, _TM, 0, map(n0, _TMa, 0, 0, 64 | 0)),
    () => ResolvedTargets,
    0,
    0,
    0,
    0,
    () => AlarmConfiguration,
    () => AlarmStateInformationList,
    0,
    0,
    4,
    () => Runbooks,
    0,
    0,
    0,
  ]
);
export var DescribeAutomationExecutionsRequest = struct(
  n0,
  _DAERes,
  0,
  [_Fi, _MR, _NT],
  [() => AutomationExecutionFilterList, 1, 0]
);
export var DescribeAutomationExecutionsResult = struct(
  n0,
  _DAEResc,
  0,
  [_AEML, _NT],
  [() => AutomationExecutionMetadataList, 0]
);
export var GetAutomationExecutionRequest = struct(n0, _GAER, 0, [_AEI], [0]);
export var GetAutomationExecutionResult = struct(n0, _GAERe, 0, [_AEu], [() => AutomationExecution]);
export var InvalidAutomationExecutionParametersException = error(
  n0,
  _IAEPE,
  {
    [_e]: _c,
    [_aQE]: [`InvalidAutomationExecutionParameters`, 400],
  },
  [_M],
  [0],

  __InvalidAutomationExecutionParametersException
);
export var InvalidTarget = error(
  n0,
  _ITnv,
  {
    [_e]: _c,
    [_aQE]: [`InvalidTarget`, 400],
  },
  [_M],
  [0],

  __InvalidTarget
);
export var ProgressCounters = struct(n0, _PC, 0, [_TSo, _SSu, _FSa, _CSa, _TOS], [1, 1, 1, 1, 1]);
export var ResolvedTargets = struct(n0, _RTe, 0, [_PVar, _Tr], [64 | 0, 2]);
export var Runbook = struct(
  n0,
  _Ru,
  0,
  [_DN, _DV, _P, _TPN, _Ta, _TM, _MC, _ME, _TL],
  [
    0,
    0,
    map(n0, _APM, 0, 0, 64 | 0),
    0,
    () => Targets,
    list(n0, _TM, 0, map(n0, _TMa, 0, 0, 64 | 0)),
    0,
    0,
    () => TargetLocations,
  ]
);
export var StartAutomationExecutionRequest = struct(
  n0,
  _SAER,
  0,
  [_DN, _DV, _P, _CTl, _Mo, _TPN, _Ta, _TM, _MC, _ME, _TL, _T, _AC, _TLURL],
  [
    0,
    0,
    map(n0, _APM, 0, 0, 64 | 0),
    0,
    0,
    0,
    () => Targets,
    list(n0, _TM, 0, map(n0, _TMa, 0, 0, 64 | 0)),
    0,
    0,
    () => TargetLocations,
    () => TagList,
    () => AlarmConfiguration,
    0,
  ]
);
export var StartAutomationExecutionResult = struct(n0, _SAERt, 0, [_AEI], [0]);
export var StartChangeRequestExecutionRequest = struct(
  n0,
  _SCRER,
  0,
  [_ST, _DN, _DV, _P, _CRN, _CTl, _AA, _R, _T, _SETc, _CDh],
  [4, 0, 0, map(n0, _APM, 0, 0, 64 | 0), 0, 0, 2, () => Runbooks, () => TagList, 4, 0]
);
export var StartChangeRequestExecutionResult = struct(n0, _SCRERt, 0, [_AEI], [0]);
export var StartExecutionPreviewRequest = struct(n0, _SEPR, 0, [_DN, _DV, _EIx], [0, 0, () => ExecutionInputs]);
export var StartExecutionPreviewResponse = struct(n0, _SEPRt, 0, [_EPI], [0]);
export var AutomationExecutionFilterList = list(n0, _AEFLu, 0, () => AutomationExecutionFilter);
export var AutomationExecutionFilterValueList = 64 | 0;

export var AutomationExecutionMetadataList = list(n0, _AEML, 0, () => AutomationExecutionMetadata);
export var Runbooks = list(n0, _R, 0, () => Runbook);
export var TargetLocations = list(n0, _TL, 0, () => TargetLocation);
export var TargetParameterList = 64 | 0;

export var ExecutionInputs = uni(n0, _EIx, 0, [_Aut], [() => AutomationExecutionInputs]);
export var DescribeAutomationExecutions = op(
  n0,
  _DAEes,
  0,
  () => DescribeAutomationExecutionsRequest,
  () => DescribeAutomationExecutionsResult
);
export var GetAutomationExecution = op(
  n0,
  _GAE,
  0,
  () => GetAutomationExecutionRequest,
  () => GetAutomationExecutionResult
);
export var StartAutomationExecution = op(
  n0,
  _SAE,
  0,
  () => StartAutomationExecutionRequest,
  () => StartAutomationExecutionResult
);
export var StartChangeRequestExecution = op(
  n0,
  _SCRE,
  0,
  () => StartChangeRequestExecutionRequest,
  () => StartChangeRequestExecutionResult
);
export var StartExecutionPreview = op(
  n0,
  _SEP,
  0,
  () => StartExecutionPreviewRequest,
  () => StartExecutionPreviewResponse
);
