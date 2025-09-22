// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  InvalidIdFormat as __InvalidIdFormat,
  ReceiptHandleIsInvalid as __ReceiptHandleIsInvalid,
} from "../models/index";
import { _aQE, _c, _DM, _DMR, _e, _hE, _IIF, _m, _QU, _RH, _RHII, n0 } from "./schemas_0";
import { Unit } from "./schemas_2_Message";

/* eslint no-var: 0 */

export var DeleteMessageRequest = struct(n0, _DMR, 0, [_QU, _RH], [0, 0]);
export var InvalidIdFormat = error(
  n0,
  _IIF,
  {
    [_e]: _c,
  },
  [],
  [],

  __InvalidIdFormat
);
export var ReceiptHandleIsInvalid = error(
  n0,
  _RHII,
  {
    [_e]: _c,
    [_hE]: 404,
    [_aQE]: [`ReceiptHandleIsInvalid`, 404],
  },
  [_m],
  [0],

  __ReceiptHandleIsInvalid
);
export var DeleteMessage = op(
  n0,
  _DM,
  0,
  () => DeleteMessageRequest,
  () => Unit
);
