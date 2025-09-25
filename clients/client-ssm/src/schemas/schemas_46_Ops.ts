// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AETc,
  _AST,
  _Ca,
  _CBr,
  _CT,
  _D,
  _DOIe,
  _DOIRes,
  _DOIResc,
  _GOI,
  _GOIR,
  _GOIRe,
  _K,
  _LMB,
  _LMT,
  _MR,
  _No,
  _NT,
  _OD,
  _OIA,
  _OIF,
  _OIFp,
  _OII,
  _OIp,
  _OIS,
  _OISp,
  _OIT,
  _Ope,
  _PET,
  _Pr,
  _PST,
  _ROI,
  _Se,
  _Sou,
  _St,
  _Ti,
  _Va,
  _Ve,
  n0,
} from "./schemas_0";
import { OpsItemNotifications, OpsItemOperationalData, RelatedOpsItems } from "./schemas_47_Ops";

/* eslint no-var: 0 */

export var DescribeOpsItemsRequest = struct(n0, _DOIRes, 0, [_OIF, _MR, _NT], [() => OpsItemFilters, 1, 0]);
export var DescribeOpsItemsResponse = struct(n0, _DOIResc, 0, [_NT, _OIS], [0, () => OpsItemSummaries]);
export var GetOpsItemRequest = struct(n0, _GOIR, 0, [_OII, _OIA], [0, 0]);
export var GetOpsItemResponse = struct(n0, _GOIRe, 0, [_OIp], [() => OpsItem]);
export var OpsItem = struct(
  n0,
  _OIp,
  0,
  [
    _CBr,
    _OIT,
    _CT,
    _D,
    _LMB,
    _LMT,
    _No,
    _Pr,
    _ROI,
    _St,
    _OII,
    _Ve,
    _Ti,
    _Sou,
    _OD,
    _Ca,
    _Se,
    _AST,
    _AETc,
    _PST,
    _PET,
    _OIA,
  ],
  [
    0,
    0,
    4,
    0,
    0,
    4,
    () => OpsItemNotifications,
    1,
    () => RelatedOpsItems,
    0,
    0,
    0,
    0,
    0,
    () => OpsItemOperationalData,
    0,
    0,
    4,
    4,
    4,
    4,
    0,
  ]
);
export var OpsItemFilter = struct(n0, _OIFp, 0, [_K, _Va, _Ope], [0, 64 | 0, 0]);
export var OpsItemSummary = struct(
  n0,
  _OISp,
  0,
  [_CBr, _CT, _LMB, _LMT, _Pr, _Sou, _St, _OII, _Ti, _OD, _Ca, _Se, _OIT, _AST, _AETc, _PST, _PET],
  [0, 4, 0, 4, 1, 0, 0, 0, 0, () => OpsItemOperationalData, 0, 0, 0, 4, 4, 4, 4]
);
export var OpsItemFilters = list(n0, _OIF, 0, () => OpsItemFilter);
export var OpsItemFilterValues = 64 | 0;

export var OpsItemSummaries = list(n0, _OIS, 0, () => OpsItemSummary);
export var DescribeOpsItems = op(
  n0,
  _DOIe,
  0,
  () => DescribeOpsItemsRequest,
  () => DescribeOpsItemsResponse
);
export var GetOpsItem = op(
  n0,
  _GOI,
  0,
  () => GetOpsItemRequest,
  () => GetOpsItemResponse
);
