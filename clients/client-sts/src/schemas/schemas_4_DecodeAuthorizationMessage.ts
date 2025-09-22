// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { InvalidAuthorizationMessageException as __InvalidAuthorizationMessageException } from "../models/index";
import { _aQE, _c, _DAM, _DAMR, _DAMRe, _DM, _e, _EM, _hE, _IAME, _m, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DecodeAuthorizationMessageRequest = struct(n0, _DAMR, 0, [_EM], [0]);
export var DecodeAuthorizationMessageResponse = struct(n0, _DAMRe, 0, [_DM], [0]);
export var InvalidAuthorizationMessageException = error(
  n0,
  _IAME,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidAuthorizationMessageException`, 400],
  },
  [_m],
  [0],

  __InvalidAuthorizationMessageException
);
export var DecodeAuthorizationMessage = op(
  n0,
  _DAM,
  0,
  () => DecodeAuthorizationMessageRequest,
  () => DecodeAuthorizationMessageResponse
);
