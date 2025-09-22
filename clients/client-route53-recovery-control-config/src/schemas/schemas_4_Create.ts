// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _C,
  _CC,
  _CCR,
  _CCRr,
  _CN,
  _CT,
  _h,
  _LTFR,
  _LTFRR,
  _LTFRRi,
  _NT,
  _RA,
  _T,
  _TR,
  _TRR,
  _TRRa,
  n0,
} from "./schemas_0";
import { Cluster } from "./schemas_1_Cluster";

/* eslint no-var: 0 */

export var CreateClusterRequest = struct(n0, _CCR, 0, [_CT, _CN, _T, _NT], [[0, 4], 0, 128 | 0, 0]);
export var CreateClusterResponse = struct(n0, _CCRr, 0, [_C], [() => Cluster]);
export var ListTagsForResourceRequest = struct(n0, _LTFRR, 0, [_RA], [[0, 1]]);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_T], [128 | 0]);
export var TagResourceRequest = struct(n0, _TRR, 0, [_RA, _T], [[0, 1], 128 | 0]);
export var TagResourceResponse = struct(n0, _TRRa, 0, [], []);
export var __mapOf__stringMin0Max256PatternS = 128 | 0;

export var CreateCluster = op(
  n0,
  _CC,
  {
    [_h]: ["POST", "/cluster", 200],
  },
  () => CreateClusterRequest,
  () => CreateClusterResponse
);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  {
    [_h]: ["GET", "/tags/{ResourceArn}", 200],
  },
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse
);
export var TagResource = op(
  n0,
  _TR,
  {
    [_h]: ["POST", "/tags/{ResourceArn}", 200],
  },
  () => TagResourceRequest,
  () => TagResourceResponse
);
