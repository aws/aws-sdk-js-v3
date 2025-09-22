// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _cA,
  _GCP,
  _GCPR,
  _GCPRe,
  _GIPe,
  _GIPRet,
  _GIPRetm,
  _GIRP,
  _GIRPR,
  _GIRPRe,
  _hQ,
  _ht,
  _iA,
  _iRA,
  _PCP,
  _PCPR,
  _PCPRu,
  _PIP,
  _PIPR,
  _PIPRu,
  _PIRP,
  _PIRPR,
  _PIRPRu,
  _po,
  _rI,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetComponentPolicyRequest = struct(
  n0,
  _GCPR,
  0,
  [_cA],
  [
    [
      0,
      {
        [_hQ]: _cA,
      },
    ],
  ]
);
export var GetComponentPolicyResponse = struct(n0, _GCPRe, 0, [_rI, _po], [0, 0]);
export var GetImagePolicyRequest = struct(
  n0,
  _GIPRet,
  0,
  [_iA],
  [
    [
      0,
      {
        [_hQ]: _iA,
      },
    ],
  ]
);
export var GetImagePolicyResponse = struct(n0, _GIPRetm, 0, [_rI, _po], [0, 0]);
export var GetImageRecipePolicyRequest = struct(
  n0,
  _GIRPR,
  0,
  [_iRA],
  [
    [
      0,
      {
        [_hQ]: _iRA,
      },
    ],
  ]
);
export var GetImageRecipePolicyResponse = struct(n0, _GIRPRe, 0, [_rI, _po], [0, 0]);
export var PutComponentPolicyRequest = struct(n0, _PCPR, 0, [_cA, _po], [0, 0]);
export var PutComponentPolicyResponse = struct(n0, _PCPRu, 0, [_rI, _cA], [0, 0]);
export var PutImagePolicyRequest = struct(n0, _PIPR, 0, [_iA, _po], [0, 0]);
export var PutImagePolicyResponse = struct(n0, _PIPRu, 0, [_rI, _iA], [0, 0]);
export var PutImageRecipePolicyRequest = struct(n0, _PIRPR, 0, [_iRA, _po], [0, 0]);
export var PutImageRecipePolicyResponse = struct(n0, _PIRPRu, 0, [_rI, _iRA], [0, 0]);
export var GetComponentPolicy = op(
  n0,
  _GCP,
  {
    [_ht]: ["GET", "/GetComponentPolicy", 200],
  },
  () => GetComponentPolicyRequest,
  () => GetComponentPolicyResponse
);
export var GetImagePolicy = op(
  n0,
  _GIPe,
  {
    [_ht]: ["GET", "/GetImagePolicy", 200],
  },
  () => GetImagePolicyRequest,
  () => GetImagePolicyResponse
);
export var GetImageRecipePolicy = op(
  n0,
  _GIRP,
  {
    [_ht]: ["GET", "/GetImageRecipePolicy", 200],
  },
  () => GetImageRecipePolicyRequest,
  () => GetImageRecipePolicyResponse
);
export var PutComponentPolicy = op(
  n0,
  _PCP,
  {
    [_ht]: ["PUT", "/PutComponentPolicy", 200],
  },
  () => PutComponentPolicyRequest,
  () => PutComponentPolicyResponse
);
export var PutImagePolicy = op(
  n0,
  _PIP,
  {
    [_ht]: ["PUT", "/PutImagePolicy", 200],
  },
  () => PutImagePolicyRequest,
  () => PutImagePolicyResponse
);
export var PutImageRecipePolicy = op(
  n0,
  _PIRP,
  {
    [_ht]: ["PUT", "/PutImageRecipePolicy", 200],
  },
  () => PutImageRecipePolicyRequest,
  () => PutImageRecipePolicyResponse
);
