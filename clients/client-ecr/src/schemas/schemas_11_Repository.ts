// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { RepositoryPolicyNotFoundException as __RepositoryPolicyNotFoundException } from "../models/index";
import {
  _c,
  _DRPe,
  _DRPRel,
  _DRPRele,
  _e,
  _fo,
  _GRPe,
  _GRPRet,
  _GRPRete,
  _me,
  _pT,
  _rI,
  _rN,
  _RPNFEe,
  _SRP,
  _SRPR,
  _SRPRe,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteRepositoryPolicyRequest = struct(n0, _DRPRel, 0, [_rI, _rN], [0, 0]);
export var DeleteRepositoryPolicyResponse = struct(n0, _DRPRele, 0, [_rI, _rN, _pT], [0, 0, 0]);
export var GetRepositoryPolicyRequest = struct(n0, _GRPRet, 0, [_rI, _rN], [0, 0]);
export var GetRepositoryPolicyResponse = struct(n0, _GRPRete, 0, [_rI, _rN, _pT], [0, 0, 0]);
export var RepositoryPolicyNotFoundException = error(
  n0,
  _RPNFEe,
  {
    [_e]: _c,
  },
  [_me],
  [0],

  __RepositoryPolicyNotFoundException
);
export var SetRepositoryPolicyRequest = struct(n0, _SRPR, 0, [_rI, _rN, _pT, _fo], [0, 0, 0, 2]);
export var SetRepositoryPolicyResponse = struct(n0, _SRPRe, 0, [_rI, _rN, _pT], [0, 0, 0]);
export var DeleteRepositoryPolicy = op(
  n0,
  _DRPe,
  0,
  () => DeleteRepositoryPolicyRequest,
  () => DeleteRepositoryPolicyResponse
);
export var GetRepositoryPolicy = op(
  n0,
  _GRPe,
  0,
  () => GetRepositoryPolicyRequest,
  () => GetRepositoryPolicyResponse
);
export var SetRepositoryPolicy = op(
  n0,
  _SRP,
  0,
  () => SetRepositoryPolicyRequest,
  () => SetRepositoryPolicyResponse
);
