// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { GlueEncryptionException as __GlueEncryptionException } from "../models/index";
import {
  _c,
  _CI,
  _CLFT,
  _CLFTL,
  _e,
  _GEE,
  _GRLFT,
  _GRLFTR,
  _GRLFTRe,
  _h,
  _LFT,
  _LFTL,
  _LFTOC,
  _LFTOD,
  _LFTOT,
  _LFTP,
  _M,
  _N,
  _R,
  _SALFT,
  _TK,
  _TV,
  n0,
} from "./schemas_0";
import { Resource } from "./schemas_14_Permissions";

/* eslint no-var: 0 */

export var ColumnLFTag = struct(n0, _CLFT, 0, [_N, _LFT], [0, () => LFTagsList]);
export var GetResourceLFTagsRequest = struct(n0, _GRLFTR, 0, [_CI, _R, _SALFT], [0, () => Resource, 2]);
export var GetResourceLFTagsResponse = struct(
  n0,
  _GRLFTRe,
  0,
  [_LFTOD, _LFTOT, _LFTOC],
  [() => LFTagsList, () => LFTagsList, () => ColumnLFTagsList]
);
export var GlueEncryptionException = error(
  n0,
  _GEE,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __GlueEncryptionException
);
export var LFTagPair = struct(n0, _LFTP, 0, [_CI, _TK, _TV], [0, 0, 64 | 0]);
export var ColumnLFTagsList = list(n0, _CLFTL, 0, () => ColumnLFTag);
export var LFTagsList = list(n0, _LFTL, 0, () => LFTagPair);
export var GetResourceLFTags = op(
  n0,
  _GRLFT,
  {
    [_h]: ["POST", "/GetResourceLFTags", 200],
  },
  () => GetResourceLFTagsRequest,
  () => GetResourceLFTagsResponse
);
