// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _A,
  _AA,
  _AS,
  _CA,
  _D,
  _DGA,
  _DSI,
  _EA,
  _GDS,
  _GRDG,
  _GRDGR,
  _GRDGRe,
  _h,
  _I,
  _N,
  _RP,
  _SP,
  _UA,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetReceivedDataGrantRequest = struct(n0, _GRDGR, 0, [_DGA], [[0, 1]]);
export var GetReceivedDataGrantResponse = struct(
  n0,
  _GRDGRe,
  0,
  [_N, _SP, _RP, _D, _AS, _AA, _EA, _GDS, _DSI, _I, _A, _CA, _UA],
  [0, 0, 0, 0, 0, 5, 5, 0, 0, 0, 0, 5, 5]
);
export var GetReceivedDataGrant = op(
  n0,
  _GRDG,
  {
    [_h]: ["GET", "/v1/received-data-grants/{DataGrantArn}", 200],
  },
  () => GetReceivedDataGrantRequest,
  () => GetReceivedDataGrantResponse
);
