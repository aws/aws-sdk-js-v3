// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { RegistryPolicyNotFoundException as __RegistryPolicyNotFoundException } from "../models/index";
import {
  _c,
  _DRP,
  _DRPR,
  _DRPRe,
  _e,
  _GRP,
  _GRPR,
  _GRPRe,
  _me,
  _PRP,
  _PRPR,
  _PRPRu,
  _pT,
  _rI,
  _RPNFE,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteRegistryPolicyRequest = struct(n0, _DRPR, 0, [], []);
export var DeleteRegistryPolicyResponse = struct(n0, _DRPRe, 0, [_rI, _pT], [0, 0]);
export var GetRegistryPolicyRequest = struct(n0, _GRPR, 0, [], []);
export var GetRegistryPolicyResponse = struct(n0, _GRPRe, 0, [_rI, _pT], [0, 0]);
export var PutRegistryPolicyRequest = struct(n0, _PRPR, 0, [_pT], [0]);
export var PutRegistryPolicyResponse = struct(n0, _PRPRu, 0, [_rI, _pT], [0, 0]);
export var RegistryPolicyNotFoundException = error(
  n0,
  _RPNFE,
  {
    [_e]: _c,
  },
  [_me],
  [0],

  __RegistryPolicyNotFoundException
);
export var DeleteRegistryPolicy = op(
  n0,
  _DRP,
  0,
  () => DeleteRegistryPolicyRequest,
  () => DeleteRegistryPolicyResponse
);
export var GetRegistryPolicy = op(
  n0,
  _GRP,
  0,
  () => GetRegistryPolicyRequest,
  () => GetRegistryPolicyResponse
);
export var PutRegistryPolicy = op(
  n0,
  _PRP,
  0,
  () => PutRegistryPolicyRequest,
  () => PutRegistryPolicyResponse
);
