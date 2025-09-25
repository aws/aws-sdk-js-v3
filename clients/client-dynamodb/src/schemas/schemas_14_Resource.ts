// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { PolicyNotFoundException as __PolicyNotFoundException } from "../models/index";
import {
  _c,
  _CRSRA,
  _DRP,
  _DRPI,
  _DRPO,
  _e,
  _ERI,
  _GRP,
  _GRPI,
  _GRPO,
  _hH,
  _LTOR,
  _LTORI,
  _LTORO,
  _m,
  _NT,
  _PNFE,
  _Po,
  _PRP,
  _PRPI,
  _PRPO,
  _RA,
  _RIe,
  _Ta,
  _TK,
  _TRa,
  _TRI,
  _UR,
  _URI,
  _xacrsra,
  n0,
  Unit,
} from "./schemas_0";
import { TagList } from "./schemas_24_Resource";

/* eslint no-var: 0 */

export var DeleteResourcePolicyInput = struct(n0, _DRPI, 0, [_RA, _ERI], [0, 0]);
export var DeleteResourcePolicyOutput = struct(n0, _DRPO, 0, [_RIe], [0]);
export var GetResourcePolicyInput = struct(n0, _GRPI, 0, [_RA], [0]);
export var GetResourcePolicyOutput = struct(n0, _GRPO, 0, [_Po, _RIe], [0, 0]);
export var ListTagsOfResourceInput = struct(n0, _LTORI, 0, [_RA, _NT], [0, 0]);
export var ListTagsOfResourceOutput = struct(n0, _LTORO, 0, [_Ta, _NT], [() => TagList, 0]);
export var PolicyNotFoundException = error(
  n0,
  _PNFE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __PolicyNotFoundException
);
export var PutResourcePolicyInput = struct(
  n0,
  _PRPI,
  0,
  [_RA, _Po, _ERI, _CRSRA],
  [
    0,
    0,
    0,
    [
      2,
      {
        [_hH]: _xacrsra,
      },
    ],
  ]
);
export var PutResourcePolicyOutput = struct(n0, _PRPO, 0, [_RIe], [0]);
export var TagResourceInput = struct(n0, _TRI, 0, [_RA, _Ta], [0, () => TagList]);
export var UntagResourceInput = struct(n0, _URI, 0, [_RA, _TK], [0, 64 | 0]);
export var TagKeyList = 64 | 0;

export var DeleteResourcePolicy = op(
  n0,
  _DRP,
  0,
  () => DeleteResourcePolicyInput,
  () => DeleteResourcePolicyOutput
);
export var GetResourcePolicy = op(
  n0,
  _GRP,
  0,
  () => GetResourcePolicyInput,
  () => GetResourcePolicyOutput
);
export var ListTagsOfResource = op(
  n0,
  _LTOR,
  0,
  () => ListTagsOfResourceInput,
  () => ListTagsOfResourceOutput
);
export var PutResourcePolicy = op(
  n0,
  _PRP,
  0,
  () => PutResourcePolicyInput,
  () => PutResourcePolicyOutput
);
export var TagResource = op(
  n0,
  _TRa,
  0,
  () => TagResourceInput,
  () => Unit
);
export var UntagResource = op(
  n0,
  _UR,
  0,
  () => UntagResourceInput,
  () => Unit
);
