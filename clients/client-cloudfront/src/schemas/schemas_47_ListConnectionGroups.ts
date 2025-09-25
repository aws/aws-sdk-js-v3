// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AF,
  _AILI,
  _Ar,
  _CGAF,
  _CGo,
  _CGS,
  _CGSL,
  _CTr,
  _E,
  _ET,
  _h,
  _ID,
  _Id,
  _LCG,
  _LCGR,
  _LCGRi,
  _LMT,
  _Ma,
  _MI,
  _N,
  _NM,
  _RE,
  _S,
  _xN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ConnectionGroupAssociationFilter = struct(n0, _CGAF, 0, [_AILI], [0]);
export var ConnectionGroupSummary = struct(
  n0,
  _CGS,
  0,
  [_Id, _N, _Ar, _RE, _CTr, _LMT, _ET, _AILI, _E, _S, _ID],
  [0, 0, 0, 0, 4, 4, 0, 0, 2, 0, 2]
);
export var ListConnectionGroupsRequest = struct(
  n0,
  _LCGR,
  0,
  [_AF, _Ma, _MI],
  [() => ConnectionGroupAssociationFilter, 0, 1]
);
export var ListConnectionGroupsResult = struct(n0, _LCGRi, 0, [_NM, _CGo], [0, [() => ConnectionGroupSummaryList, 0]]);
export var ConnectionGroupSummaryList = list(n0, _CGSL, 0, [
  () => ConnectionGroupSummary,
  {
    [_xN]: _CGS,
  },
]);
export var ListConnectionGroups = op(
  n0,
  _LCG,
  {
    [_h]: ["POST", "/2020-05-31/connection-groups", 200],
  },
  () => ListConnectionGroupsRequest,
  () => ListConnectionGroupsResult
);
