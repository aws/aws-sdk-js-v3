// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { TagException as __TagException } from "../models/index";
import { _aQE, _c, _e, _hE, _KI, _m, _Ta, _TE, _TK, _TKa, _TL, _TV, _UR, _URR, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var Tag = struct(n0, _Ta, 0, [_TK, _TV], [0, 0]);
export var TagException = error(
  n0,
  _TE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`TagException`, 400],
  },
  [_m],
  [0],

  __TagException
);
export var UntagResourceRequest = struct(n0, _URR, 0, [_KI, _TKa], [0, 64 | 0]);
export var TagKeyList = 64 | 0;

export var TagList = list(n0, _TL, 0, () => Tag);
export var UntagResource = op(
  n0,
  _UR,
  0,
  () => UntagResourceRequest,
  () => Unit
);
