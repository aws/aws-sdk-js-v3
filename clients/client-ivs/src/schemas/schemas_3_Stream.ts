// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  ChannelNotBroadcasting as __ChannelNotBroadcasting,
  StreamUnavailable as __StreamUnavailable,
} from "../models/index";
import { _c, _cA, _CNB, _e, _eM, _hE, _ht, _se, _SSR, _SSRt, _SSto, _SU, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ChannelNotBroadcasting = error(
  n0,
  _CNB,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_eM],
  [0],

  __ChannelNotBroadcasting
);
export var StopStreamRequest = struct(n0, _SSR, 0, [_cA], [0]);
export var StopStreamResponse = struct(n0, _SSRt, 0, [], []);
export var StreamUnavailable = error(
  n0,
  _SU,
  {
    [_e]: _se,
    [_hE]: 503,
  },
  [_eM],
  [0],

  __StreamUnavailable
);
export var StopStream = op(
  n0,
  _SSto,
  {
    [_ht]: ["POST", "/StopStream", 200],
  },
  () => StopStreamRequest,
  () => StopStreamResponse
);
