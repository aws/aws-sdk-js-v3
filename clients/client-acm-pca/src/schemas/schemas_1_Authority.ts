// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  InvalidTagException as __InvalidTagException,
  TooManyTagsException as __TooManyTagsException,
} from "../models/index";
import {
  _c,
  _CAA,
  _e,
  _ITE,
  _K,
  _LT,
  _LTR,
  _LTRi,
  _m,
  _MR,
  _NT,
  _Ta,
  _Tag,
  _TCA,
  _TCAR,
  _TL,
  _TMTE,
  _UCA,
  _UCAR,
  _V,
  n0,
} from "./schemas_0";
import { Unit } from "./schemas_2_Certificate";

/* eslint no-var: 0 */

export var InvalidTagException = error(
  n0,
  _ITE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __InvalidTagException
);
export var ListTagsRequest = struct(n0, _LTR, 0, [_MR, _NT, _CAA], [1, 0, 0]);
export var ListTagsResponse = struct(n0, _LTRi, 0, [_NT, _Ta], [0, () => TagList]);
export var Tag = struct(n0, _Tag, 0, [_K, _V], [0, 0]);
export var TagCertificateAuthorityRequest = struct(n0, _TCAR, 0, [_CAA, _Ta], [0, () => TagList]);
export var TooManyTagsException = error(
  n0,
  _TMTE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __TooManyTagsException
);
export var UntagCertificateAuthorityRequest = struct(n0, _UCAR, 0, [_CAA, _Ta], [0, () => TagList]);
export var TagList = list(n0, _TL, 0, () => Tag);
export var ListTags = op(
  n0,
  _LT,
  0,
  () => ListTagsRequest,
  () => ListTagsResponse
);
export var TagCertificateAuthority = op(
  n0,
  _TCA,
  0,
  () => TagCertificateAuthorityRequest,
  () => Unit
);
export var UntagCertificateAuthority = op(
  n0,
  _UCA,
  0,
  () => UntagCertificateAuthorityRequest,
  () => Unit
);
