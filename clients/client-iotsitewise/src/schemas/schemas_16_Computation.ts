// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ABVF,
  _aIs,
  _aM,
  _AMBVF,
  _aMI,
  _aMP,
  _AMPBV,
  _AMPBVF,
  _aP,
  _APBV,
  _APBVF,
  _as,
  _CMDBUS,
  _CMDBUSo,
  _cMI,
  _dBUS,
  _DBV,
  _DBVF,
  _dBVF,
  _end,
  _ht,
  _LCMDBU,
  _LCMDBUR,
  _LCMDBURi,
  _MDB,
  _mDB,
  _mR,
  _nT,
  _pI,
  _v,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AssetBindingValueFilter = struct(n0, _ABVF, 0, [_aIs], [0]);
export var AssetModelBindingValueFilter = struct(n0, _AMBVF, 0, [_aMI], [0]);
export var AssetModelPropertyBindingValue = struct(n0, _AMPBV, 0, [_aMI, _pI], [0, 0]);
export var AssetModelPropertyBindingValueFilter = struct(n0, _AMPBVF, 0, [_aMI, _pI], [0, 0]);
export var AssetPropertyBindingValue = struct(n0, _APBV, 0, [_aIs, _pI], [0, 0]);
export var AssetPropertyBindingValueFilter = struct(n0, _APBVF, 0, [_aIs, _pI], [0, 0]);
export var ComputationModelDataBindingUsageSummary = struct(
  n0,
  _CMDBUS,
  0,
  [_cMI, _mDB],
  [64 | 0, () => MatchedDataBinding]
);
export var DataBindingValue = struct(
  n0,
  _DBV,
  0,
  [_aMP, _aP],
  [() => AssetModelPropertyBindingValue, () => AssetPropertyBindingValue]
);
export var DataBindingValueFilter = struct(
  n0,
  _DBVF,
  0,
  [_as, _aM, _aP, _aMP],
  [
    () => AssetBindingValueFilter,
    () => AssetModelBindingValueFilter,
    () => AssetPropertyBindingValueFilter,
    () => AssetModelPropertyBindingValueFilter,
  ]
);
export var ListComputationModelDataBindingUsagesRequest = struct(
  n0,
  _LCMDBUR,
  0,
  [_dBVF, _nT, _mR],
  [() => DataBindingValueFilter, 0, 1]
);
export var ListComputationModelDataBindingUsagesResponse = struct(
  n0,
  _LCMDBURi,
  0,
  [_dBUS, _nT],
  [() => ComputationModelDataBindingUsageSummaries, 0]
);
export var MatchedDataBinding = struct(n0, _MDB, 0, [_v], [() => DataBindingValue]);
export var ComputationModelDataBindingUsageSummaries = list(
  n0,
  _CMDBUSo,
  0,
  () => ComputationModelDataBindingUsageSummary
);
export var ComputationModelIdList = 64 | 0;

export var ListComputationModelDataBindingUsages = op(
  n0,
  _LCMDBU,
  {
    [_ht]: ["POST", "/computation-models/data-binding-usages", 200],
    [_end]: ["api."],
  },
  () => ListComputationModelDataBindingUsagesRequest,
  () => ListComputationModelDataBindingUsagesResponse
);
