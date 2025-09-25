// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { BadRequestException as __BadRequestException } from "../models/index";
import { _aQE, _BRE, _c, _DA, _DAR, _DARe, _e, _hE, _M, _RGN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var BadRequestException = error(
  n0,
  _BRE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`BadRequestException`, 400],
  },
  [_M],
  [0],

  __BadRequestException
);
export var DeleteApplicationRequest = struct(n0, _DAR, 0, [_RGN], [0]);
export var DeleteApplicationResponse = struct(n0, _DARe, 0, [], []);
export var DeleteApplication = op(
  n0,
  _DA,
  0,
  () => DeleteApplicationRequest,
  () => DeleteApplicationResponse
);
