// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  InvalidLoggingConfiguration as __InvalidLoggingConfiguration,
  InvalidTracingConfiguration as __InvalidTracingConfiguration,
  MissingRequiredParameter as __MissingRequiredParameter,
  ServiceQuotaExceededException as __ServiceQuotaExceededException,
  StateMachineAlreadyExists as __StateMachineAlreadyExists,
  StateMachineDeleting as __StateMachineDeleting,
  StateMachineLimitExceeded as __StateMachineLimitExceeded,
} from "../models/index";
import {
  _c,
  _cD,
  _CSM,
  _CSMI,
  _CSMO,
  _d,
  _de,
  _e,
  _eC,
  _hE,
  _ILC,
  _ITC,
  _lC,
  _m,
  _MRP,
  _n,
  _p,
  _PSMV,
  _PSMVI,
  _PSMVO,
  _rA,
  _rI,
  _sMA,
  _SMAE,
  _SMD,
  _SMLE,
  _sMVA,
  _SQEE,
  _ta,
  _tC,
  _ty,
  _uD,
  _USM,
  _USMI,
  _USMO,
  _vD,
  n0,
} from "./schemas_0";
import { Definition } from "./schemas_4_State";
import { VersionDescription } from "./schemas_5_StateMachine";
import { TagList } from "./schemas_8_Resource";
import { EncryptionConfiguration, LoggingConfiguration, TracingConfiguration } from "./schemas_12_StateMachine";

/* eslint no-var: 0 */

export var CreateStateMachineInput = struct(
  n0,
  _CSMI,
  0,
  [_n, _de, _rA, _ty, _lC, _ta, _tC, _p, _vD, _eC],
  [
    0,
    [() => Definition, 0],
    0,
    0,
    () => LoggingConfiguration,
    () => TagList,
    () => TracingConfiguration,
    2,
    [() => VersionDescription, 0],
    () => EncryptionConfiguration,
  ]
);
export var CreateStateMachineOutput = struct(n0, _CSMO, 0, [_sMA, _cD, _sMVA], [0, 4, 0]);
export var InvalidLoggingConfiguration = error(
  n0,
  _ILC,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __InvalidLoggingConfiguration
);
export var InvalidTracingConfiguration = error(
  n0,
  _ITC,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __InvalidTracingConfiguration
);
export var MissingRequiredParameter = error(
  n0,
  _MRP,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __MissingRequiredParameter
);
export var PublishStateMachineVersionInput = struct(
  n0,
  _PSMVI,
  0,
  [_sMA, _rI, _d],
  [0, 0, [() => VersionDescription, 0]]
);
export var PublishStateMachineVersionOutput = struct(n0, _PSMVO, 0, [_cD, _sMVA], [4, 0]);
export var ServiceQuotaExceededException = error(
  n0,
  _SQEE,
  {
    [_e]: _c,
    [_hE]: 402,
  },
  [_m],
  [0],

  __ServiceQuotaExceededException
);
export var StateMachineAlreadyExists = error(
  n0,
  _SMAE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __StateMachineAlreadyExists
);
export var StateMachineDeleting = error(
  n0,
  _SMD,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __StateMachineDeleting
);
export var StateMachineLimitExceeded = error(
  n0,
  _SMLE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __StateMachineLimitExceeded
);
export var UpdateStateMachineInput = struct(
  n0,
  _USMI,
  0,
  [_sMA, _de, _rA, _lC, _tC, _p, _vD, _eC],
  [
    0,
    [() => Definition, 0],
    0,
    () => LoggingConfiguration,
    () => TracingConfiguration,
    2,
    [() => VersionDescription, 0],
    () => EncryptionConfiguration,
  ]
);
export var UpdateStateMachineOutput = struct(n0, _USMO, 0, [_uD, _rI, _sMVA], [4, 0, 0]);
export var CreateStateMachine = op(
  n0,
  _CSM,
  2,
  () => CreateStateMachineInput,
  () => CreateStateMachineOutput
);
export var PublishStateMachineVersion = op(
  n0,
  _PSMV,
  2,
  () => PublishStateMachineVersionInput,
  () => PublishStateMachineVersionOutput
);
export var UpdateStateMachine = op(
  n0,
  _USM,
  2,
  () => UpdateStateMachineInput,
  () => UpdateStateMachineOutput
);
