// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  DocumentPermissionLimit as __DocumentPermissionLimit,
  InvalidPermissionType as __InvalidPermissionType,
} from "../models/index";
import {
  _AI,
  _AIL,
  _AITA,
  _AITR,
  _aQE,
  _c,
  _DPL,
  _e,
  _IPT,
  _M,
  _MDP,
  _MDPR,
  _MDPRo,
  _N,
  _PT,
  _SDV,
  _xN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DocumentPermissionLimit = error(
  n0,
  _DPL,
  {
    [_e]: _c,
    [_aQE]: [`DocumentPermissionLimit`, 400],
  },
  [_M],
  [0],

  __DocumentPermissionLimit
);
export var InvalidPermissionType = error(
  n0,
  _IPT,
  {
    [_e]: _c,
    [_aQE]: [`InvalidPermissionType`, 400],
  },
  [_M],
  [0],

  __InvalidPermissionType
);
export var ModifyDocumentPermissionRequest = struct(
  n0,
  _MDPR,
  0,
  [_N, _PT, _AITA, _AITR, _SDV],
  [0, 0, [() => AccountIdList, 0], [() => AccountIdList, 0], 0]
);
export var ModifyDocumentPermissionResponse = struct(n0, _MDPRo, 0, [], []);
export var AccountIdList = list(n0, _AIL, 0, [
  0,
  {
    [_xN]: _AI,
  },
]);
export var ModifyDocumentPermission = op(
  n0,
  _MDP,
  0,
  () => ModifyDocumentPermissionRequest,
  () => ModifyDocumentPermissionResponse
);
