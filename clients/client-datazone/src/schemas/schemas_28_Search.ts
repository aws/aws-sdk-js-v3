// smithy-typescript generated code
import { list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _a,
  _an,
  _ATI,
  _aTI,
  _cA,
  _cB,
  _de,
  _dI,
  _dIo,
  _F,
  _FCi,
  _fi,
  _fil,
  _FL,
  _fO,
  _FTD,
  _fTIo,
  _ht,
  _im,
  _it,
  _LNTI,
  _lNTI,
  _ma,
  _mo,
  _mRa,
  _n,
  _nT,
  _oDI,
  _oPI,
  _oPIr,
  _or_,
  _ord,
  _r,
  _s,
  _sIe,
  _SII,
  _SIL,
  _so,
  _SS,
  _sS,
  _STe,
  _sTe,
  _STI,
  _STO,
  _STRI,
  _STRIe,
  _tMC,
  _uA,
  _uB,
  _v,
  Description,
  FormTypeName,
  n0,
} from "./schemas_0";
import { ImportList, Model } from "./schemas_25_Type";
import { FormsOutputMap } from "./schemas_37_Type";

/* eslint no-var: 0 */

export var AssetTypeItem = struct(
  n0,
  _ATI,
  0,
  [_dIo, _n, _r, _de, _fO, _oPI, _oDI, _oPIr, _cA, _cB, _uA, _uB],
  [0, 0, 0, [() => Description, 0], [() => FormsOutputMap, 0], 0, 0, 0, 4, 0, 4, 0]
);
export var Filter = struct(n0, _F, 0, [_a, _v], [0, 0]);
export var FormTypeData = struct(
  n0,
  _FTD,
  0,
  [_dIo, _n, _r, _mo, _s, _oPI, _oDI, _oPIr, _cA, _cB, _de, _im],
  [0, [() => FormTypeName, 0], 0, [() => Model, 0], 0, 0, 0, 0, 4, 0, [() => Description, 0], [() => ImportList, 0]]
);
export var LineageNodeTypeItem = struct(
  n0,
  _LNTI,
  0,
  [_dIo, _n, _de, _cA, _cB, _uA, _uB, _r, _fO],
  [0, 0, 0, 4, 0, 4, 0, 0, [() => FormsOutputMap, 0]]
);
export var SearchInItem = struct(n0, _SII, 0, [_a], [0]);
export var SearchSort = struct(n0, _SS, 0, [_a, _ord], [0, 0]);
export var SearchTypesInput = struct(
  n0,
  _STI,
  0,
  [_dI, _mRa, _nT, _sS, _sTe, _sIe, _fi, _so, _ma],
  [[0, 1], 1, 0, 0, 0, () => SearchInList, () => FilterClause, () => SearchSort, 2]
);
export var SearchTypesOutput = struct(n0, _STO, 0, [_it, _nT, _tMC], [[() => SearchTypesResultItems, 0], 0, 1]);
export var FilterList = list(n0, _FL, 0, () => FilterClause);
export var SearchInList = list(n0, _SIL, 0, () => SearchInItem);
export var SearchTypesResultItems = list(n0, _STRI, 0, [() => SearchTypesResultItem, 0]);
export var FilterClause = uni(n0, _FCi, 0, [_fil, _an, _or_], [() => Filter, () => FilterList, () => FilterList]);
export var SearchTypesResultItem = uni(
  n0,
  _STRIe,
  0,
  [_aTI, _fTIo, _lNTI],
  [
    [() => AssetTypeItem, 0],
    [() => FormTypeData, 0],
    [() => LineageNodeTypeItem, 0],
  ]
);
export var SearchTypes = op(
  n0,
  _STe,
  {
    [_ht]: ["POST", "/v2/domains/{domainIdentifier}/types-search", 200],
  },
  () => SearchTypesInput,
  () => SearchTypesOutput
);
