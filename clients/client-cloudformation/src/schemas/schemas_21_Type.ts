// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { TypeNotFoundException as __TypeNotFoundException } from "../models/index";
import {
  _A,
  _aQE,
  _AT,
  _ATI,
  _ATO,
  _AU,
  _c,
  _DTea,
  _DTer,
  _DTI,
  _DTIe,
  _DTO,
  _DTOe,
  _e,
  _ERA,
  _hE,
  _LC,
  _M,
  _MV,
  _PI,
  _PTA,
  _STDV,
  _STDVI,
  _STDVO,
  _T,
  _TN,
  _TNA,
  _TNFE,
  _VB,
  _VI,
  n0,
} from "./schemas_0";
import { LoggingConfig } from "./schemas_24_Type";

/* eslint no-var: 0 */

export var ActivateTypeInput = struct(
  n0,
  _ATI,
  0,
  [_T, _PTA, _PI, _TN, _TNA, _AU, _LC, _ERA, _VB, _MV],
  [0, 0, 0, 0, 0, 2, () => LoggingConfig, 0, 0, 1]
);
export var ActivateTypeOutput = struct(n0, _ATO, 0, [_A], [0]);
export var DeactivateTypeInput = struct(n0, _DTI, 0, [_TN, _T, _A], [0, 0, 0]);
export var DeactivateTypeOutput = struct(n0, _DTO, 0, [], []);
export var DeregisterTypeInput = struct(n0, _DTIe, 0, [_A, _T, _TN, _VI], [0, 0, 0, 0]);
export var DeregisterTypeOutput = struct(n0, _DTOe, 0, [], []);
export var SetTypeDefaultVersionInput = struct(n0, _STDVI, 0, [_A, _T, _TN, _VI], [0, 0, 0, 0]);
export var SetTypeDefaultVersionOutput = struct(n0, _STDVO, 0, [], []);
export var TypeNotFoundException = error(
  n0,
  _TNFE,
  {
    [_e]: _c,
    [_hE]: 404,
    [_aQE]: [`TypeNotFoundException`, 404],
  },
  [_M],
  [0],

  __TypeNotFoundException
);
export var ActivateType = op(
  n0,
  _AT,
  2,
  () => ActivateTypeInput,
  () => ActivateTypeOutput
);
export var DeactivateType = op(
  n0,
  _DTea,
  2,
  () => DeactivateTypeInput,
  () => DeactivateTypeOutput
);
export var DeregisterType = op(
  n0,
  _DTer,
  2,
  () => DeregisterTypeInput,
  () => DeregisterTypeOutput
);
export var SetTypeDefaultVersion = op(
  n0,
  _STDV,
  2,
  () => SetTypeDefaultVersionInput,
  () => SetTypeDefaultVersionOutput
);
