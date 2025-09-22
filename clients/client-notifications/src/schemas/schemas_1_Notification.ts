// smithy-typescript generated code
import { list, map, op, struct } from "@smithy/core/schema";

import {
  _aA,
  _aB,
  _AK,
  _AKg,
  _AOU,
  _aOU,
  _AOUR,
  _AOURs,
  _aR,
  _AS,
  _aSD,
  _cD,
  _cou,
  _D,
  _Di,
  _di,
  _DOU,
  _DOUR,
  _DOURi,
  _dT,
  _eC,
  _h,
  _ht,
  _MC,
  _n,
  _nCA,
  _oUI,
  _pS,
  _SDO,
  _SDOu,
  _sVa,
  _tBL,
  _TP,
  _TPV,
  _ty,
  _u,
  _v,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AggregationKey = struct(n0, _AK, 0, [_n, _v], [0, 0]);
export var AggregationSummary = struct(
  n0,
  _AS,
  0,
  [_eC, _aB, _aA, _aR, _aOU, _aSD],
  [
    1,
    () => AggregationKeys,
    () => SummarizationDimensionOverview,
    () => SummarizationDimensionOverview,
    () => SummarizationDimensionOverview,
    () => SummarizationDimensionOverviews,
  ]
);
export var AssociateOrganizationalUnitRequest = struct(n0, _AOUR, 0, [_oUI, _nCA], [[0, 1], 0]);
export var AssociateOrganizationalUnitResponse = struct(n0, _AOURs, 0, [], []);
export var Dimension = struct(n0, _D, 0, [_n, _v], [0, 0]);
export var DisassociateOrganizationalUnitRequest = struct(n0, _DOUR, 0, [_oUI, _nCA], [[0, 1], 0]);
export var DisassociateOrganizationalUnitResponse = struct(n0, _DOURi, 0, [], []);
export var MessageComponents = struct(n0, _MC, 0, [_h, _pS, _cD, _di], [0, 0, 0, () => Dimensions]);
export var SummarizationDimensionOverview = struct(n0, _SDO, 0, [_n, _cou, _sVa], [0, 1, 64 | 0]);
export var TextPartValue = struct(n0, _TPV, 0, [_ty, _dT, _tBL, _u], [0, 0, 128 | 0, 0]);
export var AggregationKeys = list(n0, _AKg, 0, () => AggregationKey);
export var Dimensions = list(n0, _Di, 0, () => Dimension);
export var SampleAggregationDimensionValues = 64 | 0;

export var SummarizationDimensionOverviews = list(n0, _SDOu, 0, () => SummarizationDimensionOverview);
export var TextByLocale = 128 | 0;

export var TextParts = map(n0, _TP, 0, 0, () => TextPartValue);
export var AssociateOrganizationalUnit = op(
  n0,
  _AOU,
  {
    [_ht]: ["POST", "/organizational-units/associate/{organizationalUnitId}", 201],
  },
  () => AssociateOrganizationalUnitRequest,
  () => AssociateOrganizationalUnitResponse
);
export var DisassociateOrganizationalUnit = op(
  n0,
  _DOU,
  {
    [_ht]: ["POST", "/organizational-units/disassociate/{organizationalUnitId}", 200],
  },
  () => DisassociateOrganizationalUnitRequest,
  () => DisassociateOrganizationalUnitResponse
);
