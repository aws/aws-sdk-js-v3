// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _Arc,
  _EOA,
  _EOBD,
  _ESO,
  _IBO,
  _IFIn,
  _LSIT,
  _LSITI,
  _LSITO,
  _Mar,
  _MGB,
  _NOD,
  _RL,
  _SGB,
  _SITL,
  _SITu,
  _SITup,
  _Ty,
  _VCPU,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ListSupportedInstanceTypesInput = struct(n0, _LSITI, 0, [_RL, _Mar], [0, 0]);
export var ListSupportedInstanceTypesOutput = struct(
  n0,
  _LSITO,
  0,
  [_SITu, _Mar],
  [() => SupportedInstanceTypesList, 0]
);
export var SupportedInstanceType = struct(
  n0,
  _SITup,
  0,
  [_Ty, _MGB, _SGB, _VCPU, _IBO, _IFIn, _EOA, _EOBD, _NOD, _ESO, _Arc],
  [0, 1, 1, 1, 2, 0, 2, 2, 1, 2, 0]
);
export var SupportedInstanceTypesList = list(n0, _SITL, 0, () => SupportedInstanceType);
export var ListSupportedInstanceTypes = op(
  n0,
  _LSIT,
  0,
  () => ListSupportedInstanceTypesInput,
  () => ListSupportedInstanceTypesOutput
);
