// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _ar,
  _cD,
  _des,
  _dPe,
  _LPS,
  _LPSI,
  _LPSO,
  _lUD,
  _mo,
  _mR,
  _nT,
  _pS,
  _PSD,
  _PSI,
  _pSI,
  _PSL,
  _UPS,
  _UPSI,
  _UPSO,
  _VS,
  _vS,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var PolicyStoreDescription = sim(n0, _PSD, 0, 8);
export var ListPolicyStoresInput = struct(n0, _LPSI, 0, [_nT, _mR], [0, 1]);
export var ListPolicyStoresOutput = struct(n0, _LPSO, 0, [_nT, _pS], [0, [() => PolicyStoreList, 0]]);
export var PolicyStoreItem = struct(
  n0,
  _PSI,
  0,
  [_pSI, _ar, _cD, _lUD, _des],
  [0, 0, 5, 5, [() => PolicyStoreDescription, 0]]
);
export var UpdatePolicyStoreInput = struct(
  n0,
  _UPSI,
  0,
  [_pSI, _vS, _dPe, _des],
  [0, () => ValidationSettings, 0, [() => PolicyStoreDescription, 0]]
);
export var UpdatePolicyStoreOutput = struct(n0, _UPSO, 0, [_pSI, _ar, _cD, _lUD], [0, 0, 5, 5]);
export var ValidationSettings = struct(n0, _VS, 0, [_mo], [0]);
export var PolicyStoreList = list(n0, _PSL, 0, [() => PolicyStoreItem, 0]);
export var ListPolicyStores = op(
  n0,
  _LPS,
  0,
  () => ListPolicyStoresInput,
  () => ListPolicyStoresOutput
);
export var UpdatePolicyStore = op(
  n0,
  _UPS,
  2,
  () => UpdatePolicyStoreInput,
  () => UpdatePolicyStoreOutput
);
