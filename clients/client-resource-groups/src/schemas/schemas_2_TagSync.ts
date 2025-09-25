// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { UnauthorizedException as __UnauthorizedException } from "../models/index";
import {
  _c,
  _CTST,
  _CTSTI,
  _e,
  _EC,
  _h,
  _hE,
  _M,
  _QEL,
  _QEu,
  _RA,
  _RIe,
  _RIL,
  _RT,
  _TA,
  _UE,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CancelTagSyncTaskInput = struct(n0, _CTSTI, 0, [_TA], [0]);
export var QueryError = struct(n0, _QEu, 0, [_EC, _M], [0, 0]);
export var ResourceIdentifier = struct(n0, _RIe, 0, [_RA, _RT], [0, 0]);
export var UnauthorizedException = error(
  n0,
  _UE,
  {
    [_e]: _c,
    [_hE]: 401,
  },
  [_M],
  [0],

  __UnauthorizedException
);
export var QueryErrorList = list(n0, _QEL, 0, () => QueryError);
export var ResourceIdentifierList = list(n0, _RIL, 0, () => ResourceIdentifier);
export var CancelTagSyncTask = op(
  n0,
  _CTST,
  {
    [_h]: ["POST", "/cancel-tag-sync-task", 200],
  },
  () => CancelTagSyncTaskInput,
  () => Unit
);
