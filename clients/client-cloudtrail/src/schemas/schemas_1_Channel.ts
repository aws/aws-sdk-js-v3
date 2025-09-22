// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  ChannelARNInvalidException as __ChannelARNInvalidException,
  ChannelNotFoundException as __ChannelNotFoundException,
} from "../models/index";
import { _aQE, _C, _c, _CARNIE, _CNFE, _DC, _DCR, _DCRe, _e, _hE, _M, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ChannelARNInvalidException = error(
  n0,
  _CARNIE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`ChannelARNInvalid`, 400],
  },
  [_M],
  [0],

  __ChannelARNInvalidException
);
export var ChannelNotFoundException = error(
  n0,
  _CNFE,
  {
    [_e]: _c,
    [_hE]: 404,
    [_aQE]: [`ChannelNotFound`, 404],
  },
  [_M],
  [0],

  __ChannelNotFoundException
);
export var DeleteChannelRequest = struct(n0, _DCR, 0, [_C], [0]);
export var DeleteChannelResponse = struct(n0, _DCRe, 0, [], []);
export var DeleteChannel = op(
  n0,
  _DC,
  0,
  () => DeleteChannelRequest,
  () => DeleteChannelResponse
);
