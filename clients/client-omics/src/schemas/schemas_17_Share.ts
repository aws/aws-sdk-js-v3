// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _AS,
  _ASR,
  _ASRc,
  _CS,
  _CSR,
  _CSRr,
  _DS,
  _DSR,
  _DSRe,
  _end,
  _ht,
  _pSr,
  _rAes,
  _sI,
  _sN,
  _st,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AcceptShareRequest = struct(n0, _ASR, 0, [_sI], [[0, 1]]);
export var AcceptShareResponse = struct(n0, _ASRc, 0, [_st], [0]);
export var CreateShareRequest = struct(n0, _CSR, 0, [_rAes, _pSr, _sN], [0, 0, 0]);
export var CreateShareResponse = struct(n0, _CSRr, 0, [_sI, _st, _sN], [0, 0, 0]);
export var DeleteShareRequest = struct(n0, _DSR, 0, [_sI], [[0, 1]]);
export var DeleteShareResponse = struct(n0, _DSRe, 0, [_st], [0]);
export var AcceptShare = op(
  n0,
  _AS,
  {
    [_ht]: ["POST", "/share/{shareId}", 200],
    [_end]: ["analytics-"],
  },
  () => AcceptShareRequest,
  () => AcceptShareResponse
);
export var CreateShare = op(
  n0,
  _CS,
  {
    [_ht]: ["POST", "/share", 200],
    [_end]: ["analytics-"],
  },
  () => CreateShareRequest,
  () => CreateShareResponse
);
export var DeleteShare = op(
  n0,
  _DS,
  {
    [_ht]: ["DELETE", "/share/{shareId}", 200],
    [_end]: ["analytics-"],
  },
  () => DeleteShareRequest,
  () => DeleteShareResponse
);
