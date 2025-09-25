// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AGIA,
  _AGII,
  _AI,
  _CA,
  _CAGI,
  _CAGIR,
  _CAGIRr,
  _CSLG,
  _CSLGR,
  _h,
  _hCR,
  _hH,
  _hL,
  _ICA,
  _ICAA,
  _ICIA,
  _K,
  _LTFR,
  _LTFRR,
  _LTFRRi,
  _RAe,
  _SLG,
  _T,
  _Tag,
  _TL,
  _TRa,
  _TRR,
  _TRRa,
  _V,
  _xaai,
  _xN,
  n0,
  Unit,
} from "./schemas_0";
import { StorageLensGroup } from "./schemas_28_Storage";

/* eslint no-var: 0 */

export var CreateAccessGrantsInstanceRequest = struct(
  n0,
  _CAGIR,
  0,
  [_AI, _ICA, _T],
  [
    [
      0,
      {
        [_hL]: 1,
        [_hH]: _xaai,
      },
    ],
    0,
    [() => TagList, 0],
  ]
);
export var CreateAccessGrantsInstanceResult = struct(
  n0,
  _CAGIRr,
  0,
  [_CA, _AGII, _AGIA, _ICA, _ICIA, _ICAA],
  [4, 0, 0, 0, 0, 0]
);
export var CreateStorageLensGroupRequest = struct(
  n0,
  _CSLGR,
  0,
  [_AI, _SLG, _T],
  [
    [
      0,
      {
        [_hL]: 1,
        [_hH]: _xaai,
      },
    ],
    [() => StorageLensGroup, 0],
    [() => TagList, 0],
  ]
);
export var ListTagsForResourceRequest = struct(
  n0,
  _LTFRR,
  0,
  [_AI, _RAe],
  [
    [
      0,
      {
        [_hL]: 1,
        [_hH]: _xaai,
      },
    ],
    [0, 1],
  ]
);
export var ListTagsForResourceResult = struct(n0, _LTFRRi, 0, [_T], [[() => TagList, 0]]);
export var Tag = struct(n0, _Tag, 0, [_K, _V], [0, 0]);
export var TagResourceRequest = struct(
  n0,
  _TRR,
  0,
  [_AI, _RAe, _T],
  [
    [
      0,
      {
        [_hL]: 1,
        [_hH]: _xaai,
      },
    ],
    [0, 1],
    [() => TagList, 0],
  ]
);
export var TagResourceResult = struct(n0, _TRRa, 0, [], []);
export var TagList = list(n0, _TL, 0, [
  () => Tag,
  {
    [_xN]: _Tag,
  },
]);
export var CreateAccessGrantsInstance = op(
  n0,
  _CAGI,
  {
    [_h]: ["POST", "/v20180820/accessgrantsinstance", 200],
    [_hCR]: 1,
  },
  () => CreateAccessGrantsInstanceRequest,
  () => CreateAccessGrantsInstanceResult
);
export var CreateStorageLensGroup = op(
  n0,
  _CSLG,
  {
    [_h]: ["POST", "/v20180820/storagelensgroup", 204],
  },
  () => CreateStorageLensGroupRequest,
  () => Unit
);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  {
    [_h]: ["GET", "/v20180820/tags/{ResourceArn+}", 200],
  },
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResult
);
export var TagResource = op(
  n0,
  _TRa,
  {
    [_h]: ["POST", "/v20180820/tags/{ResourceArn+}", 204],
  },
  () => TagResourceRequest,
  () => TagResourceResult
);
