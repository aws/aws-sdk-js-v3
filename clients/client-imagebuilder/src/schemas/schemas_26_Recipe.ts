// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _cR,
  _cRA,
  _GCRet,
  _GCRP,
  _GCRPR,
  _GCRPRe,
  _GCRR,
  _GCRRe,
  _hQ,
  _ht,
  _PCRP,
  _PCRPR,
  _PCRPRu,
  _po,
  _rI,
  n0,
} from "./schemas_0";
import { ContainerRecipe } from "./schemas_13_Recipe";

/* eslint no-var: 0 */

export var GetContainerRecipePolicyRequest = struct(
  n0,
  _GCRPR,
  0,
  [_cRA],
  [
    [
      0,
      {
        [_hQ]: _cRA,
      },
    ],
  ]
);
export var GetContainerRecipePolicyResponse = struct(n0, _GCRPRe, 0, [_rI, _po], [0, 0]);
export var GetContainerRecipeRequest = struct(
  n0,
  _GCRR,
  0,
  [_cRA],
  [
    [
      0,
      {
        [_hQ]: _cRA,
      },
    ],
  ]
);
export var GetContainerRecipeResponse = struct(n0, _GCRRe, 0, [_rI, _cR], [0, () => ContainerRecipe]);
export var PutContainerRecipePolicyRequest = struct(n0, _PCRPR, 0, [_cRA, _po], [0, 0]);
export var PutContainerRecipePolicyResponse = struct(n0, _PCRPRu, 0, [_rI, _cRA], [0, 0]);
export var GetContainerRecipe = op(
  n0,
  _GCRet,
  {
    [_ht]: ["GET", "/GetContainerRecipe", 200],
  },
  () => GetContainerRecipeRequest,
  () => GetContainerRecipeResponse
);
export var GetContainerRecipePolicy = op(
  n0,
  _GCRP,
  {
    [_ht]: ["GET", "/GetContainerRecipePolicy", 200],
  },
  () => GetContainerRecipePolicyRequest,
  () => GetContainerRecipePolicyResponse
);
export var PutContainerRecipePolicy = op(
  n0,
  _PCRP,
  {
    [_ht]: ["PUT", "/PutContainerRecipePolicy", 200],
  },
  () => PutContainerRecipePolicyRequest,
  () => PutContainerRecipePolicyResponse
);
