// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _a,
  _AIA,
  _AIUA,
  _AIUI,
  _CAI,
  _CAIR,
  _CAIRr,
  _CAIU,
  _CAIUR,
  _CAIURr,
  _CRT,
  _ES,
  _h,
  _hQ,
  _K,
  _LTFR,
  _LTFRR,
  _LTFRRi,
  _M,
  _N,
  _RARN,
  _Ta,
  _Tag,
  _TK,
  _TKa,
  _TKL,
  _TL,
  _TR,
  _TRR,
  _TV,
  _UI,
  _UR,
  _URR,
  _V,
  n0,
  Unit,
} from "./schemas_0";
import { ExpirationSettings } from "./schemas_8_App";
import { NonEmptyResourceName } from "./schemas_9_App";
import { UserName } from "./schemas_11_App";
import { Metadata } from "./schemas_13_App";

/* eslint no-var: 0 */

export var TagKey = sim(n0, _TK, 0, 8);
export var TagValue = sim(n0, _TV, 0, 8);
export var UserId = sim(n0, _UI, 0, 8);
export var CreateAppInstanceRequest = struct(
  n0,
  _CAIR,
  0,
  [_N, _M, _CRT, _Ta],
  [
    [() => NonEmptyResourceName, 0],
    [() => Metadata, 0],
    [0, 4],
    [() => TagList, 0],
  ]
);
export var CreateAppInstanceResponse = struct(n0, _CAIRr, 0, [_AIA], [0]);
export var CreateAppInstanceUserRequest = struct(
  n0,
  _CAIUR,
  0,
  [_AIA, _AIUI, _N, _M, _CRT, _Ta, _ES],
  [0, [() => UserId, 0], [() => UserName, 0], [() => Metadata, 0], [0, 4], [() => TagList, 0], () => ExpirationSettings]
);
export var CreateAppInstanceUserResponse = struct(n0, _CAIURr, 0, [_AIUA], [0]);
export var ListTagsForResourceRequest = struct(
  n0,
  _LTFRR,
  0,
  [_RARN],
  [
    [
      0,
      {
        [_hQ]: _a,
      },
    ],
  ]
);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_Ta], [[() => TagList, 0]]);
export var Tag = struct(
  n0,
  _Tag,
  0,
  [_K, _V],
  [
    [() => TagKey, 0],
    [() => TagValue, 0],
  ]
);
export var TagResourceRequest = struct(n0, _TRR, 0, [_RARN, _Ta], [0, [() => TagList, 0]]);
export var UntagResourceRequest = struct(n0, _URR, 0, [_RARN, _TKa], [0, [() => TagKeyList, 0]]);
export var TagKeyList = list(n0, _TKL, 0, [() => TagKey, 0]);
export var TagList = list(n0, _TL, 0, [() => Tag, 0]);
export var CreateAppInstance = op(
  n0,
  _CAI,
  {
    [_h]: ["POST", "/app-instances", 201],
  },
  () => CreateAppInstanceRequest,
  () => CreateAppInstanceResponse
);
export var CreateAppInstanceUser = op(
  n0,
  _CAIU,
  {
    [_h]: ["POST", "/app-instance-users", 201],
  },
  () => CreateAppInstanceUserRequest,
  () => CreateAppInstanceUserResponse
);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  {
    [_h]: ["GET", "/tags", 200],
  },
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse
);
export var TagResource = op(
  n0,
  _TR,
  {
    [_h]: ["POST", "/tags?operation=tag-resource", 204],
  },
  () => TagResourceRequest,
  () => Unit
);
export var UntagResource = op(
  n0,
  _UR,
  {
    [_h]: ["POST", "/tags?operation=untag-resource", 204],
  },
  () => UntagResourceRequest,
  () => Unit
);
