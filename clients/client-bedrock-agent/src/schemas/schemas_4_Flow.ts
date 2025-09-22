// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _aIl,
  _ar,
  _cA,
  _cCo,
  _d,
  _DFA,
  _DFAR,
  _DFARe,
  _FACC,
  _FARC,
  _FARCLI,
  _FAS,
  _fAS,
  _FASl,
  _fI,
  _fIl,
  _fV,
  _GFA,
  _GFAR,
  _GFARe,
  _h,
  _hQ,
  _id,
  _LFA,
  _LFAR,
  _LFARi,
  _mCa,
  _mR,
  _n,
  _nT,
  _rC,
  _t,
  _uA,
  _UFA,
  _UFAR,
  _UFARp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteFlowAliasRequest = struct(
  n0,
  _DFAR,
  0,
  [_fI, _aIl],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteFlowAliasResponse = struct(n0, _DFARe, 0, [_fIl, _id], [0, 0]);
export var FlowAliasConcurrencyConfiguration = struct(n0, _FACC, 0, [_t, _mCa], [0, 1]);
export var FlowAliasRoutingConfigurationListItem = struct(n0, _FARCLI, 0, [_fV], [0]);
export var FlowAliasSummary = struct(
  n0,
  _FAS,
  0,
  [_n, _d, _rC, _cCo, _fIl, _id, _ar, _cA, _uA],
  [0, 0, () => FlowAliasRoutingConfiguration, () => FlowAliasConcurrencyConfiguration, 0, 0, 0, 5, 5]
);
export var GetFlowAliasRequest = struct(
  n0,
  _GFAR,
  0,
  [_fI, _aIl],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetFlowAliasResponse = struct(
  n0,
  _GFARe,
  0,
  [_n, _d, _rC, _cCo, _fIl, _id, _ar, _cA, _uA],
  [0, 0, () => FlowAliasRoutingConfiguration, () => FlowAliasConcurrencyConfiguration, 0, 0, 0, 5, 5]
);
export var ListFlowAliasesRequest = struct(
  n0,
  _LFAR,
  0,
  [_fI, _mR, _nT],
  [
    [0, 1],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
  ]
);
export var ListFlowAliasesResponse = struct(n0, _LFARi, 0, [_fAS, _nT], [() => FlowAliasSummaries, 0]);
export var UpdateFlowAliasRequest = struct(
  n0,
  _UFAR,
  0,
  [_n, _d, _rC, _cCo, _fI, _aIl],
  [0, 0, () => FlowAliasRoutingConfiguration, () => FlowAliasConcurrencyConfiguration, [0, 1], [0, 1]]
);
export var UpdateFlowAliasResponse = struct(
  n0,
  _UFARp,
  0,
  [_n, _d, _rC, _cCo, _fIl, _id, _ar, _cA, _uA],
  [0, 0, () => FlowAliasRoutingConfiguration, () => FlowAliasConcurrencyConfiguration, 0, 0, 0, 5, 5]
);
export var FlowAliasRoutingConfiguration = list(n0, _FARC, 0, () => FlowAliasRoutingConfigurationListItem);
export var FlowAliasSummaries = list(n0, _FASl, 0, () => FlowAliasSummary);
export var DeleteFlowAlias = op(
  n0,
  _DFA,
  {
    [_h]: ["DELETE", "/flows/{flowIdentifier}/aliases/{aliasIdentifier}", 200],
  },
  () => DeleteFlowAliasRequest,
  () => DeleteFlowAliasResponse
);
export var GetFlowAlias = op(
  n0,
  _GFA,
  {
    [_h]: ["GET", "/flows/{flowIdentifier}/aliases/{aliasIdentifier}", 200],
  },
  () => GetFlowAliasRequest,
  () => GetFlowAliasResponse
);
export var ListFlowAliases = op(
  n0,
  _LFA,
  {
    [_h]: ["GET", "/flows/{flowIdentifier}/aliases", 200],
  },
  () => ListFlowAliasesRequest,
  () => ListFlowAliasesResponse
);
export var UpdateFlowAlias = op(
  n0,
  _UFA,
  {
    [_h]: ["PUT", "/flows/{flowIdentifier}/aliases/{aliasIdentifier}", 200],
  },
  () => UpdateFlowAliasRequest,
  () => UpdateFlowAliasResponse
);
