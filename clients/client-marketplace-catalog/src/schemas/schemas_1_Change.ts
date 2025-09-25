// smithy-typescript generated code
import { list, map, op, struct } from "@smithy/core/schema";

import {
  _BDE,
  _BDED,
  _BDER,
  _BDERa,
  _C,
  _CSA,
  _CSI,
  _CSN,
  _CSSL,
  _CSSLI,
  _DD,
  _E,
  _EA,
  _EC,
  _ED,
  _EDn,
  _EI,
  _EIL,
  _EIn,
  _EM,
  _ER,
  _ERL,
  _ETn,
  _ETnt,
  _F,
  _FC,
  _FL,
  _h,
  _LCS,
  _LCSR,
  _LCSRi,
  _LMD,
  _MR,
  _N,
  _NT,
  _S,
  _SB,
  _SO,
  _So,
  _ST,
  _VL,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var BatchDescribeEntitiesRequest = struct(n0, _BDER, 0, [_ERL], [() => EntityRequestList]);
export var BatchDescribeEntitiesResponse = struct(n0, _BDERa, 0, [_ED, _E], [() => EntityDetails, () => Errors]);
export var BatchDescribeErrorDetail = struct(n0, _BDED, 0, [_EC, _EM], [0, 0]);
export var ChangeSetSummaryListItem = struct(
  n0,
  _CSSLI,
  0,
  [_CSI, _CSA, _CSN, _ST, _ETn, _S, _EIL, _FC],
  [0, 0, 0, 0, 0, 0, 64 | 0, 0]
);
export var EntityDetail = struct(n0, _EDn, 0, [_ETnt, _EA, _EIn, _LMD, _DD], [0, 0, 0, 0, 15]);
export var EntityRequest = struct(n0, _ER, 0, [_C, _EI], [0, 0]);
export var Filter = struct(n0, _F, 0, [_N, _VL], [0, 64 | 0]);
export var ListChangeSetsRequest = struct(
  n0,
  _LCSR,
  0,
  [_C, _FL, _So, _MR, _NT],
  [0, () => FilterList, () => Sort, 1, 0]
);
export var ListChangeSetsResponse = struct(n0, _LCSRi, 0, [_CSSL, _NT], [() => ChangeSetSummaryList, 0]);
export var Sort = struct(n0, _So, 0, [_SB, _SO], [0, 0]);
export var Unit = "unit" as const;

export var ChangeSetSummaryList = list(n0, _CSSL, 0, () => ChangeSetSummaryListItem);
export var EntityRequestList = list(n0, _ERL, 0, () => EntityRequest);
export var FilterList = list(n0, _FL, 0, () => Filter);
export var ResourceIdList = 64 | 0;

export var ValueList = 64 | 0;

export var EntityDetails = map(n0, _ED, 0, 0, () => EntityDetail);
export var Errors = map(n0, _E, 0, 0, () => BatchDescribeErrorDetail);
export var BatchDescribeEntities = op(
  n0,
  _BDE,
  {
    [_h]: ["POST", "/BatchDescribeEntities", 200],
  },
  () => BatchDescribeEntitiesRequest,
  () => BatchDescribeEntitiesResponse
);
export var ListChangeSets = op(
  n0,
  _LCS,
  {
    [_h]: ["POST", "/ListChangeSets", 200],
  },
  () => ListChangeSetsRequest,
  () => ListChangeSetsResponse
);
