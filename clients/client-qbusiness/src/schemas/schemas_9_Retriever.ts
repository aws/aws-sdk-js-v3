// smithy-typescript generated code
import { list, map, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _aIp,
  _aVB,
  _bDIS,
  _bL,
  _bO,
  _bT,
  _cA,
  _conf,
  _DABC,
  _DABCo,
  _DABOM,
  _dC,
  _dN,
  _DR,
  _DRR,
  _DRRe,
  _GR,
  _GRR,
  _GRRe,
  _hQ,
  _ht,
  _iI,
  _KIC,
  _kIC,
  _LR,
  _LRR,
  _LRRi,
  _mRa,
  _NABC,
  _nC,
  _NIC,
  _nIC,
  _nT,
  _R,
  _rA,
  _rAe,
  _RCet,
  _Re,
  _re,
  _rIe,
  _s,
  _SABC,
  _sCt,
  _SLABC,
  _sLC,
  _t,
  _uA,
  _URp,
  _URRp,
  _URRpd,
  _ve,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DateAttributeBoostingConfiguration = struct(n0, _DABC, 0, [_bL, _bDIS], [0, 1]);
export var DeleteRetrieverRequest = struct(
  n0,
  _DRR,
  0,
  [_aIp, _rIe],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteRetrieverResponse = struct(n0, _DRRe, 0, [], []);
export var GetRetrieverRequest = struct(
  n0,
  _GRR,
  0,
  [_aIp, _rIe],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetRetrieverResponse = struct(
  n0,
  _GRRe,
  0,
  [_aIp, _rIe, _rAe, _t, _s, _dN, _conf, _rA, _cA, _uA],
  [0, 0, 0, 0, 0, 0, () => RetrieverConfiguration, 0, 4, 4]
);
export var KendraIndexConfiguration = struct(n0, _KIC, 0, [_iI], [0]);
export var ListRetrieversRequest = struct(
  n0,
  _LRR,
  0,
  [_aIp, _nT, _mRa],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mRa,
      },
    ],
  ]
);
export var ListRetrieversResponse = struct(n0, _LRRi, 0, [_re, _nT], [() => Retrievers, 0]);
export var NativeIndexConfiguration = struct(
  n0,
  _NIC,
  0,
  [_iI, _ve, _bO],
  [0, 1, () => DocumentAttributeBoostingOverrideMap]
);
export var NumberAttributeBoostingConfiguration = struct(n0, _NABC, 0, [_bL, _bT], [0, 0]);
export var Retriever = struct(n0, _R, 0, [_aIp, _rIe, _t, _s, _dN], [0, 0, 0, 0, 0]);
export var StringAttributeBoostingConfiguration = struct(n0, _SABC, 0, [_bL, _aVB], [0, 128 | 0]);
export var StringListAttributeBoostingConfiguration = struct(n0, _SLABC, 0, [_bL], [0]);
export var UpdateRetrieverRequest = struct(
  n0,
  _URRp,
  0,
  [_aIp, _rIe, _conf, _dN, _rA],
  [[0, 1], [0, 1], () => RetrieverConfiguration, 0, 0]
);
export var UpdateRetrieverResponse = struct(n0, _URRpd, 0, [], []);
export var Retrievers = list(n0, _Re, 0, () => Retriever);
export var DocumentAttributeBoostingOverrideMap = map(n0, _DABOM, 0, 0, () => DocumentAttributeBoostingConfiguration);
export var StringAttributeValueBoosting = 128 | 0;

export var DocumentAttributeBoostingConfiguration = uni(
  n0,
  _DABCo,
  0,
  [_nC, _sCt, _dC, _sLC],
  [
    () => NumberAttributeBoostingConfiguration,
    () => StringAttributeBoostingConfiguration,
    () => DateAttributeBoostingConfiguration,
    () => StringListAttributeBoostingConfiguration,
  ]
);
export var RetrieverConfiguration = uni(
  n0,
  _RCet,
  0,
  [_nIC, _kIC],
  [() => NativeIndexConfiguration, () => KendraIndexConfiguration]
);
export var DeleteRetriever = op(
  n0,
  _DR,
  {
    [_ht]: ["DELETE", "/applications/{applicationId}/retrievers/{retrieverId}", 200],
  },
  () => DeleteRetrieverRequest,
  () => DeleteRetrieverResponse
);
export var GetRetriever = op(
  n0,
  _GR,
  {
    [_ht]: ["GET", "/applications/{applicationId}/retrievers/{retrieverId}", 200],
  },
  () => GetRetrieverRequest,
  () => GetRetrieverResponse
);
export var ListRetrievers = op(
  n0,
  _LR,
  {
    [_ht]: ["GET", "/applications/{applicationId}/retrievers", 200],
  },
  () => ListRetrieversRequest,
  () => ListRetrieversResponse
);
export var UpdateRetriever = op(
  n0,
  _URp,
  {
    [_ht]: ["PUT", "/applications/{applicationId}/retrievers/{retrieverId}", 200],
  },
  () => UpdateRetrieverRequest,
  () => UpdateRetrieverResponse
);
