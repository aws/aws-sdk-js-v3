// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _Ar,
  _D,
  _DHK,
  _DHKe,
  _DHKes,
  _DHKR,
  _DHKRe,
  _DHKRes,
  _DI,
  _Fi,
  _HK,
  _HKB,
  _HKF,
  _HKI,
  _HKo,
  _IHK,
  _IHKR,
  _IHKRm,
  _LHK,
  _LHKi,
  _LHKis,
  _LHKR,
  _LHKRi,
  _MRa,
  _NT,
  _SI,
  _T,
  _Ty,
  _UHK,
  _UHKR,
  _UHKRp,
  n0,
  Tags,
  Unit,
} from "./schemas_0";
import { HostKey } from "./schemas_26_Server";

/* eslint no-var: 0 */

export var DeleteHostKeyRequest = struct(n0, _DHKR, 0, [_SI, _HKI], [0, 0]);
export var DescribedHostKey = struct(n0, _DHK, 0, [_Ar, _HKI, _HKF, _D, _Ty, _DI, _T], [0, 0, 0, 0, 0, 4, () => Tags]);
export var DescribeHostKeyRequest = struct(n0, _DHKRe, 0, [_SI, _HKI], [0, 0]);
export var DescribeHostKeyResponse = struct(n0, _DHKRes, 0, [_HK], [() => DescribedHostKey]);
export var ImportHostKeyRequest = struct(n0, _IHKR, 0, [_SI, _HKB, _D, _T], [0, [() => HostKey, 0], 0, () => Tags]);
export var ImportHostKeyResponse = struct(n0, _IHKRm, 0, [_SI, _HKI], [0, 0]);
export var ListedHostKey = struct(n0, _LHK, 0, [_Ar, _HKI, _Fi, _D, _Ty, _DI], [0, 0, 0, 0, 0, 4]);
export var ListHostKeysRequest = struct(n0, _LHKR, 0, [_MRa, _NT, _SI], [1, 0, 0]);
export var ListHostKeysResponse = struct(n0, _LHKRi, 0, [_NT, _SI, _HKo], [0, 0, () => ListedHostKeys]);
export var UpdateHostKeyRequest = struct(n0, _UHKR, 0, [_SI, _HKI, _D], [0, 0, 0]);
export var UpdateHostKeyResponse = struct(n0, _UHKRp, 0, [_SI, _HKI], [0, 0]);
export var ListedHostKeys = list(n0, _LHKi, 0, () => ListedHostKey);
export var DeleteHostKey = op(
  n0,
  _DHKe,
  0,
  () => DeleteHostKeyRequest,
  () => Unit
);
export var DescribeHostKey = op(
  n0,
  _DHKes,
  0,
  () => DescribeHostKeyRequest,
  () => DescribeHostKeyResponse
);
export var ImportHostKey = op(
  n0,
  _IHK,
  0,
  () => ImportHostKeyRequest,
  () => ImportHostKeyResponse
);
export var ListHostKeys = op(
  n0,
  _LHKis,
  0,
  () => ListHostKeysRequest,
  () => ListHostKeysResponse
);
export var UpdateHostKey = op(
  n0,
  _UHK,
  0,
  () => UpdateHostKeyRequest,
  () => UpdateHostKeyResponse
);
