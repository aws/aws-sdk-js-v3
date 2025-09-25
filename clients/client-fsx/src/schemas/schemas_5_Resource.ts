// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  NotServiceResourceError as __NotServiceResourceError,
  ResourceDoesNotSupportTagging as __ResourceDoesNotSupportTagging,
  ResourceNotFound as __ResourceNotFound,
} from "../models/index";
import {
  _c,
  _e,
  _M,
  _NSRE,
  _RARN,
  _RDNST,
  _RNF,
  _Ta,
  _TK,
  _TR,
  _TRR,
  _TRRa,
  _UR,
  _URR,
  _URRn,
  n0,
  Tags,
} from "./schemas_0";

/* eslint no-var: 0 */

export var NotServiceResourceError = error(
  n0,
  _NSRE,
  {
    [_e]: _c,
  },
  [_RARN, _M],
  [0, 0],

  __NotServiceResourceError
);
export var ResourceDoesNotSupportTagging = error(
  n0,
  _RDNST,
  {
    [_e]: _c,
  },
  [_RARN, _M],
  [0, 0],

  __ResourceDoesNotSupportTagging
);
export var ResourceNotFound = error(
  n0,
  _RNF,
  {
    [_e]: _c,
  },
  [_RARN, _M],
  [0, 0],

  __ResourceNotFound
);
export var TagResourceRequest = struct(n0, _TRR, 0, [_RARN, _Ta], [0, () => Tags]);
export var TagResourceResponse = struct(n0, _TRRa, 0, [], []);
export var UntagResourceRequest = struct(n0, _URR, 0, [_RARN, _TK], [0, 64 | 0]);
export var UntagResourceResponse = struct(n0, _URRn, 0, [], []);
export var TagKeys = 64 | 0;

export var TagResource = op(
  n0,
  _TR,
  2,
  () => TagResourceRequest,
  () => TagResourceResponse
);
export var UntagResource = op(
  n0,
  _UR,
  2,
  () => UntagResourceRequest,
  () => UntagResourceResponse
);
