// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _d, _dN, _GS, _GSR, _GSRe, _ht, _it, _LS, _LSR, _LSRi, _n, _nT, _rNe, _SSp, _SSpa, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetSpaceRequest = struct(n0, _GSR, 0, [_n], [[0, 1]]);
export var GetSpaceResponse = struct(n0, _GSRe, 0, [_n, _rNe, _dN, _d], [0, 0, 0, 0]);
export var ListSpacesRequest = struct(n0, _LSR, 0, [_nT], [0]);
export var ListSpacesResponse = struct(n0, _LSRi, 0, [_nT, _it], [0, () => SpaceSummaries]);
export var SpaceSummary = struct(n0, _SSp, 0, [_n, _rNe, _dN, _d], [0, 0, 0, 0]);
export var SpaceSummaries = list(n0, _SSpa, 0, () => SpaceSummary);
export var GetSpace = op(
  n0,
  _GS,
  {
    [_ht]: ["GET", "/v1/spaces/{name}", 200],
  },
  () => GetSpaceRequest,
  () => GetSpaceResponse
);
export var ListSpaces = op(
  n0,
  _LS,
  {
    [_ht]: ["POST", "/v1/spaces", 200],
  },
  () => ListSpacesRequest,
  () => ListSpacesResponse
);
