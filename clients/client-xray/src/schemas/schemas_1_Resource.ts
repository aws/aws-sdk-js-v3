// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  InvalidPolicyRevisionIdException as __InvalidPolicyRevisionIdException,
  LockoutPreventionException as __LockoutPreventionException,
  MalformedPolicyDocumentException as __MalformedPolicyDocumentException,
  PolicyCountLimitExceededException as __PolicyCountLimitExceededException,
  PolicySizeLimitExceededException as __PolicySizeLimitExceededException,
} from "../models/index";
import {
  _BPLC,
  _c,
  _DRP,
  _DRPR,
  _DRPRe,
  _e,
  _h,
  _hE,
  _IPRIE,
  _LPE,
  _LRP,
  _LRPR,
  _LRPRi,
  _LUTa,
  _M,
  _MPDE,
  _NT,
  _PCLEE,
  _PD,
  _PN,
  _PRI,
  _PRP,
  _PRPR,
  _PRPRu,
  _PSLEE,
  _RP,
  _RPe,
  _RPL,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteResourcePolicyRequest = struct(n0, _DRPR, 0, [_PN, _PRI], [0, 0]);
export var DeleteResourcePolicyResult = struct(n0, _DRPRe, 0, [], []);
export var InvalidPolicyRevisionIdException = error(
  n0,
  _IPRIE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __InvalidPolicyRevisionIdException
);
export var ListResourcePoliciesRequest = struct(n0, _LRPR, 0, [_NT], [0]);
export var ListResourcePoliciesResult = struct(n0, _LRPRi, 0, [_RP, _NT], [() => ResourcePolicyList, 0]);
export var LockoutPreventionException = error(
  n0,
  _LPE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __LockoutPreventionException
);
export var MalformedPolicyDocumentException = error(
  n0,
  _MPDE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __MalformedPolicyDocumentException
);
export var PolicyCountLimitExceededException = error(
  n0,
  _PCLEE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __PolicyCountLimitExceededException
);
export var PolicySizeLimitExceededException = error(
  n0,
  _PSLEE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __PolicySizeLimitExceededException
);
export var PutResourcePolicyRequest = struct(n0, _PRPR, 0, [_PN, _PD, _PRI, _BPLC], [0, 0, 0, 2]);
export var PutResourcePolicyResult = struct(n0, _PRPRu, 0, [_RPe], [() => ResourcePolicy]);
export var ResourcePolicy = struct(n0, _RPe, 0, [_PN, _PD, _PRI, _LUTa], [0, 0, 0, 4]);
export var ResourcePolicyList = list(n0, _RPL, 0, () => ResourcePolicy);
export var DeleteResourcePolicy = op(
  n0,
  _DRP,
  {
    [_h]: ["POST", "/DeleteResourcePolicy", 200],
  },
  () => DeleteResourcePolicyRequest,
  () => DeleteResourcePolicyResult
);
export var ListResourcePolicies = op(
  n0,
  _LRP,
  {
    [_h]: ["POST", "/ListResourcePolicies", 200],
  },
  () => ListResourcePoliciesRequest,
  () => ListResourcePoliciesResult
);
export var PutResourcePolicy = op(
  n0,
  _PRP,
  {
    [_h]: ["POST", "/PutResourcePolicy", 200],
  },
  () => PutResourcePolicyRequest,
  () => PutResourcePolicyResult
);
