// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { LimitExceededException as __LimitExceededException } from "../models/index";
import { _c, _e, _hE, _LEE, _M, _RAe, _T, _TRa, _TRI, _TRO, n0 } from "./schemas_0";
import { TagList } from "./schemas_6_Create";

/* eslint no-var: 0 */

export var LimitExceededException = error(
  n0,
  _LEE,
  {
    [_e]: _c,
    [_hE]: 429,
  },
  [_M],
  [0],

  __LimitExceededException
);
export var TagResourceInput = struct(n0, _TRI, 0, [_RAe, _T], [0, () => TagList]);
export var TagResourceOutput = struct(n0, _TRO, 0, [], []);
export var TagResource = op(
  n0,
  _TRa,
  0,
  () => TagResourceInput,
  () => TagResourceOutput
);
