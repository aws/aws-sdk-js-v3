// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  InvalidARNFault as __InvalidARNFault,
  InvalidClusterStateFault as __InvalidClusterStateFault,
  TagNotFoundFault as __TagNotFoundFault,
  TagQuotaPerResourceExceeded as __TagQuotaPerResourceExceeded,
} from "../models/index";
import {
  _aQE,
  _c,
  _e,
  _hE,
  _IARNF,
  _ICSF,
  _K,
  _LT,
  _LTR,
  _LTRi,
  _m,
  _NTe,
  _RN,
  _T,
  _Ta,
  _TK,
  _TL,
  _TNFF,
  _TQPRE,
  _TR,
  _TRR,
  _TRRa,
  _UR,
  _URR,
  _URRn,
  _V,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var InvalidARNFault = error(
  n0,
  _IARNF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidARN`, 400],
  },
  [_m],
  [0],

  __InvalidARNFault
);
export var InvalidClusterStateFault = error(
  n0,
  _ICSF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidClusterState`, 400],
  },
  [_m],
  [0],

  __InvalidClusterStateFault
);
export var ListTagsRequest = struct(n0, _LTR, 0, [_RN, _NTe], [0, 0]);
export var ListTagsResponse = struct(n0, _LTRi, 0, [_T, _NTe], [() => TagList, 0]);
export var Tag = struct(n0, _Ta, 0, [_K, _V], [0, 0]);
export var TagNotFoundFault = error(
  n0,
  _TNFF,
  {
    [_e]: _c,
    [_hE]: 404,
    [_aQE]: [`TagNotFound`, 404],
  },
  [_m],
  [0],

  __TagNotFoundFault
);
export var TagQuotaPerResourceExceeded = error(
  n0,
  _TQPRE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`TagQuotaPerResourceExceeded`, 400],
  },
  [_m],
  [0],

  __TagQuotaPerResourceExceeded
);
export var TagResourceRequest = struct(n0, _TRR, 0, [_RN, _T], [0, () => TagList]);
export var TagResourceResponse = struct(n0, _TRRa, 0, [_T], [() => TagList]);
export var UntagResourceRequest = struct(n0, _URR, 0, [_RN, _TK], [0, 64 | 0]);
export var UntagResourceResponse = struct(n0, _URRn, 0, [_T], [() => TagList]);
export var KeyList = 64 | 0;

export var TagList = list(n0, _TL, 0, () => Tag);
export var ListTags = op(
  n0,
  _LT,
  0,
  () => ListTagsRequest,
  () => ListTagsResponse
);
export var TagResource = op(
  n0,
  _TR,
  0,
  () => TagResourceRequest,
  () => TagResourceResponse
);
export var UntagResource = op(
  n0,
  _UR,
  0,
  () => UntagResourceRequest,
  () => UntagResourceResponse
);
