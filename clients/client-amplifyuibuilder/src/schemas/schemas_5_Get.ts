// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { ResourceNotFoundException as __ResourceNotFoundException } from "../models/index";
import {
  _aI,
  _cli,
  _DC,
  _DCR,
  _DF,
  _DFR,
  _DT,
  _DTR,
  _eN,
  _er,
  _h,
  _hE,
  _hQ,
  _i,
  _LTFR,
  _LTFRR,
  _LTFRRi,
  _me,
  _rA,
  _RNFE,
  _tag,
  _tK,
  _TR,
  _TRR,
  _TRRa,
  _UR,
  _URR,
  _URRn,
  n0,
} from "./schemas_0";
import { Unit } from "./schemas_1_Form";

/* eslint no-var: 0 */

export var DeleteComponentRequest = struct(
  n0,
  _DCR,
  0,
  [_aI, _eN, _i],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var DeleteFormRequest = struct(
  n0,
  _DFR,
  0,
  [_aI, _eN, _i],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var DeleteThemeRequest = struct(
  n0,
  _DTR,
  0,
  [_aI, _eN, _i],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var ListTagsForResourceRequest = struct(n0, _LTFRR, 0, [_rA], [[0, 1]]);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_tag], [128 | 0]);
export var ResourceNotFoundException = error(
  n0,
  _RNFE,
  {
    [_er]: _cli,
    [_hE]: 404,
  },
  [_me],
  [0],

  __ResourceNotFoundException
);
export var TagResourceRequest = struct(n0, _TRR, 0, [_rA, _tag], [[0, 1], 128 | 0]);
export var TagResourceResponse = struct(n0, _TRRa, 0, [], []);
export var UntagResourceRequest = struct(
  n0,
  _URR,
  0,
  [_rA, _tK],
  [
    [0, 1],
    [
      64 | 0,
      {
        [_hQ]: _tK,
      },
    ],
  ]
);
export var UntagResourceResponse = struct(n0, _URRn, 0, [], []);
export var TagKeyList = 64 | 0;

export var DeleteComponent = op(
  n0,
  _DC,
  {
    [_h]: ["DELETE", "/app/{appId}/environment/{environmentName}/components/{id}", 200],
  },
  () => DeleteComponentRequest,
  () => Unit
);
export var DeleteForm = op(
  n0,
  _DF,
  {
    [_h]: ["DELETE", "/app/{appId}/environment/{environmentName}/forms/{id}", 200],
  },
  () => DeleteFormRequest,
  () => Unit
);
export var DeleteTheme = op(
  n0,
  _DT,
  {
    [_h]: ["DELETE", "/app/{appId}/environment/{environmentName}/themes/{id}", 200],
  },
  () => DeleteThemeRequest,
  () => Unit
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
