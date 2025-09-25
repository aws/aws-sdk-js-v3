// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _ar,
  _cA,
  _cCo,
  _CFA,
  _CFAR,
  _CFARr,
  _cT,
  _d,
  _fI,
  _fIl,
  _h,
  _hQ,
  _id,
  _LTFR,
  _LTFRR,
  _LTFRRi,
  _n,
  _rAe,
  _rC,
  _ta,
  _tKa,
  _TR,
  _TRR,
  _TRRa,
  _uA,
  _UR,
  _URR,
  _URRn,
  n0,
} from "./schemas_0";
import { FlowAliasConcurrencyConfiguration, FlowAliasRoutingConfiguration } from "./schemas_4_Flow";

/* eslint no-var: 0 */

export var CreateFlowAliasRequest = struct(
  n0,
  _CFAR,
  0,
  [_n, _d, _rC, _cCo, _fI, _cT, _ta],
  [0, 0, () => FlowAliasRoutingConfiguration, () => FlowAliasConcurrencyConfiguration, [0, 1], [0, 4], 128 | 0]
);
export var CreateFlowAliasResponse = struct(
  n0,
  _CFARr,
  0,
  [_n, _d, _rC, _cCo, _fIl, _id, _ar, _cA, _uA],
  [0, 0, () => FlowAliasRoutingConfiguration, () => FlowAliasConcurrencyConfiguration, 0, 0, 0, 5, 5]
);
export var ListTagsForResourceRequest = struct(n0, _LTFRR, 0, [_rAe], [[0, 1]]);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_ta], [128 | 0]);
export var TagResourceRequest = struct(n0, _TRR, 0, [_rAe, _ta], [[0, 1], 128 | 0]);
export var TagResourceResponse = struct(n0, _TRRa, 0, [], []);
export var UntagResourceRequest = struct(
  n0,
  _URR,
  0,
  [_rAe, _tKa],
  [
    [0, 1],
    [
      64 | 0,
      {
        [_hQ]: _tKa,
      },
    ],
  ]
);
export var UntagResourceResponse = struct(n0, _URRn, 0, [], []);
export var TagKeyList = 64 | 0;

export var TagsMap = 128 | 0;

export var CreateFlowAlias = op(
  n0,
  _CFA,
  {
    [_h]: ["POST", "/flows/{flowIdentifier}/aliases", 201],
  },
  () => CreateFlowAliasRequest,
  () => CreateFlowAliasResponse
);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  {
    [_h]: ["GET", "/tags/{resourceArn}", 200],
  },
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse
);
export var TagResource = op(
  n0,
  _TR,
  {
    [_h]: ["POST", "/tags/{resourceArn}", 200],
  },
  () => TagResourceRequest,
  () => TagResourceResponse
);
export var UntagResource = op(
  n0,
  _UR,
  {
    [_h]: ["DELETE", "/tags/{resourceArn}", 200],
  },
  () => UntagResourceRequest,
  () => UntagResourceResponse
);
