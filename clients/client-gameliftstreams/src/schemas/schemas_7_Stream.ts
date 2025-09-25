// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { ConflictException as __ConflictException } from "../models/index";
import {
  _c,
  _CE,
  _CSSC,
  _CSSCI,
  _CSSCO,
  _CT,
  _DAe,
  _DAIe,
  _DSG,
  _DSGI,
  _e,
  _h,
  _hE,
  _I,
  _M,
  _SR,
  _SRi,
  _SSI,
  n0,
  Unit,
} from "./schemas_0";
import { SignalRequest, SignalResponse } from "./schemas_9_StreamSession";

/* eslint no-var: 0 */

export var ConflictException = error(
  n0,
  _CE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_M],
  [0],

  __ConflictException
);
export var CreateStreamSessionConnectionInput = struct(
  n0,
  _CSSCI,
  0,
  [_CT, _I, _SSI, _SR],
  [
    [0, 4],
    [0, 1],
    [0, 1],
    [() => SignalRequest, 0],
  ]
);
export var CreateStreamSessionConnectionOutput = struct(n0, _CSSCO, 0, [_SRi], [[() => SignalResponse, 0]]);
export var DeleteApplicationInput = struct(n0, _DAIe, 0, [_I], [[0, 1]]);
export var DeleteStreamGroupInput = struct(n0, _DSGI, 0, [_I], [[0, 1]]);
export var CreateStreamSessionConnection = op(
  n0,
  _CSSC,
  {
    [_h]: ["POST", "/streamgroups/{Identifier}/streamsessions/{StreamSessionIdentifier}/connections", 200],
  },
  () => CreateStreamSessionConnectionInput,
  () => CreateStreamSessionConnectionOutput
);
export var DeleteApplication = op(
  n0,
  _DAe,
  {
    [_h]: ["DELETE", "/applications/{Identifier}", 204],
  },
  () => DeleteApplicationInput,
  () => Unit
);
export var DeleteStreamGroup = op(
  n0,
  _DSG,
  {
    [_h]: ["DELETE", "/streamgroups/{Identifier}", 204],
  },
  () => DeleteStreamGroupInput,
  () => Unit
);
