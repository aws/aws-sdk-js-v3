// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { InvalidDocumentOperation as __InvalidDocumentOperation } from "../models/index";
import {
  _AI,
  _AIcc,
  _aQE,
  _ASI,
  _ASIL,
  _c,
  _DDP,
  _DDPR,
  _DDPRe,
  _e,
  _IDO,
  _M,
  _MR,
  _N,
  _NT,
  _PT,
  _SDV,
  _xN,
  n0,
} from "./schemas_0";
import { AccountIdList } from "./schemas_60_Permission";

/* eslint no-var: 0 */

export var AccountSharingInfo = struct(n0, _ASI, 0, [_AI, _SDV], [0, 0]);
export var DescribeDocumentPermissionRequest = struct(n0, _DDPR, 0, [_N, _PT, _MR, _NT], [0, 0, 1, 0]);
export var DescribeDocumentPermissionResponse = struct(
  n0,
  _DDPRe,
  0,
  [_AIcc, _ASIL, _NT],
  [[() => AccountIdList, 0], [() => AccountSharingInfoList, 0], 0]
);
export var InvalidDocumentOperation = error(
  n0,
  _IDO,
  {
    [_e]: _c,
    [_aQE]: [`InvalidDocumentOperation`, 403],
  },
  [_M],
  [0],

  __InvalidDocumentOperation
);
export var AccountSharingInfoList = list(n0, _ASIL, 0, [
  () => AccountSharingInfo,
  {
    [_xN]: _ASI,
  },
]);
export var DescribeDocumentPermission = op(
  n0,
  _DDP,
  0,
  () => DescribeDocumentPermissionRequest,
  () => DescribeDocumentPermissionResponse
);
