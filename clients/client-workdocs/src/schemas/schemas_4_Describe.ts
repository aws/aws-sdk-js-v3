// smithy-typescript generated code
import { op, sim, struct } from "@smithy/core/schema";

import {
  _A,
  _AT,
  _DG,
  _DGR,
  _DGRe,
  _G,
  _h,
  _hH,
  _hQ,
  _Li,
  _li,
  _m,
  _Ma,
  _OI,
  _oI,
  _SQ,
  _sQ,
  _SQT,
  AuthenticationHeaderType,
  n0,
} from "./schemas_0";
import { GroupMetadataList } from "./schemas_9_Describe";

/* eslint no-var: 0 */

export var SearchQueryType = sim(n0, _SQT, 0, 8);
export var DescribeGroupsRequest = struct(
  n0,
  _DGR,
  0,
  [_AT, _SQ, _OI, _Ma, _Li],
  [
    [
      () => AuthenticationHeaderType,
      {
        [_hH]: _A,
      },
    ],
    [
      () => SearchQueryType,
      {
        [_hQ]: _sQ,
      },
    ],
    [
      0,
      {
        [_hQ]: _oI,
      },
    ],
    [
      0,
      {
        [_hQ]: _m,
      },
    ],
    [
      1,
      {
        [_hQ]: _li,
      },
    ],
  ]
);
export var DescribeGroupsResponse = struct(n0, _DGRe, 0, [_G, _Ma], [() => GroupMetadataList, 0]);
export var DescribeGroups = op(
  n0,
  _DG,
  {
    [_h]: ["GET", "/api/v1/groups", 200],
  },
  () => DescribeGroupsRequest,
  () => DescribeGroupsResponse
);
