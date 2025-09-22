// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { ContactNotFoundException as __ContactNotFoundException } from "../models/index";
import { _aQE, _c, _CI, _CNFE, _Cod, _DR, _e, _h, _hE, _II, _M, _SCRt, _SCRto, _SCtop, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ContactNotFoundException = error(
  n0,
  _CNFE,
  {
    [_e]: _c,
    [_hE]: 410,
    [_aQE]: [`ContactNotFoundException`, 410],
  },
  [_M],
  [0],

  __ContactNotFoundException
);
export var DisconnectReason = struct(n0, _DR, 0, [_Cod], [0]);
export var StopContactRequest = struct(n0, _SCRt, 0, [_CI, _II, _DR], [0, 0, () => DisconnectReason]);
export var StopContactResponse = struct(n0, _SCRto, 0, [], []);
export var StopContact = op(
  n0,
  _SCtop,
  {
    [_h]: ["POST", "/contact/stop", 200],
  },
  () => StopContactRequest,
  () => StopContactResponse
);
