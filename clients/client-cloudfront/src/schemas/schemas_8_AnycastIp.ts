// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AI,
  _AIL,
  _AILC,
  _AILn,
  _AILS,
  _AILSn,
  _AIn,
  _Ar,
  _ET,
  _GAIL,
  _GAILR,
  _GAILRe,
  _h,
  _hH,
  _hP,
  _hQ,
  _I,
  _IC,
  _Id,
  _IT,
  _LAIL,
  _LAILR,
  _LAILRi,
  _LMT,
  _Ma,
  _MI,
  _N,
  _NM,
  _Q,
  _S,
  _xN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AnycastIpList = struct(
  n0,
  _AIL,
  0,
  [_Id, _N, _S, _Ar, _AI, _IC, _LMT],
  [0, 0, 0, 0, [() => AnycastIps, 0], 1, 4]
);
export var AnycastIpListCollection = struct(
  n0,
  _AILC,
  0,
  [_I, _Ma, _NM, _MI, _IT, _Q],
  [[() => AnycastIpListSummaries, 0], 0, 0, 1, 2, 1]
);
export var AnycastIpListSummary = struct(n0, _AILS, 0, [_Id, _N, _S, _Ar, _IC, _LMT], [0, 0, 0, 0, 1, 4]);
export var GetAnycastIpListRequest = struct(n0, _GAILR, 0, [_Id], [[0, 1]]);
export var GetAnycastIpListResult = struct(
  n0,
  _GAILRe,
  0,
  [_AIL, _ET],
  [
    [() => AnycastIpList, 16],
    [
      0,
      {
        [_hH]: _ET,
      },
    ],
  ]
);
export var ListAnycastIpListsRequest = struct(
  n0,
  _LAILR,
  0,
  [_Ma, _MI],
  [
    [
      0,
      {
        [_hQ]: _Ma,
      },
    ],
    [
      1,
      {
        [_hQ]: _MI,
      },
    ],
  ]
);
export var ListAnycastIpListsResult = struct(
  n0,
  _LAILRi,
  0,
  [_AILn],
  [
    [
      () => AnycastIpListCollection,
      {
        [_xN]: _AILC,
        [_hP]: 1,
      },
    ],
  ]
);
export var AnycastIpListSummaries = list(n0, _AILSn, 0, [
  () => AnycastIpListSummary,
  {
    [_xN]: _AILS,
  },
]);
export var AnycastIps = list(n0, _AI, 0, [
  0,
  {
    [_xN]: _AIn,
  },
]);
export var GetAnycastIpList = op(
  n0,
  _GAIL,
  {
    [_h]: ["GET", "/2020-05-31/anycast-ip-list/{Id}", 200],
  },
  () => GetAnycastIpListRequest,
  () => GetAnycastIpListResult
);
export var ListAnycastIpLists = op(
  n0,
  _LAIL,
  {
    [_h]: ["GET", "/2020-05-31/anycast-ip-list", 200],
  },
  () => ListAnycastIpListsRequest,
  () => ListAnycastIpListsResult
);
