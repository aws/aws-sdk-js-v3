// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { InvalidResourceTypeException as __InvalidResourceTypeException } from "../models/index";
import {
  _aQE,
  _c,
  _e,
  _GRP,
  _GRPR,
  _GRPRe,
  _h,
  _hE,
  _IRTE,
  _it,
  _LR,
  _LRR,
  _LRRi,
  _m,
  _mR,
  _nT,
  _PL,
  _po,
  _pr,
  _rA,
  _RAL,
  _res,
  _rO,
  _rRS,
  _rSAes,
  _rT,
  _xN,
  n0,
} from "./schemas_0";
import { ResourceShareArnList } from "./schemas_6_Resource";
import { ResourceList } from "./schemas_7_List";

/* eslint no-var: 0 */

export var GetResourcePoliciesRequest = struct(
  n0,
  _GRPR,
  0,
  [_rA, _pr, _nT, _mR],
  [[() => ResourceArnList, 0], 0, 0, 1]
);
export var GetResourcePoliciesResponse = struct(n0, _GRPRe, 0, [_po, _nT], [[() => PolicyList, 0], 0]);
export var InvalidResourceTypeException = error(
  n0,
  _IRTE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidResourceType.Unknown`, 400],
  },
  [_m],
  [0],

  __InvalidResourceTypeException
);
export var ListResourcesRequest = struct(
  n0,
  _LRR,
  0,
  [_rO, _pr, _rT, _rA, _rSAes, _nT, _mR, _rRS],
  [0, 0, 0, [() => ResourceArnList, 0], [() => ResourceShareArnList, 0], 0, 1, 0]
);
export var ListResourcesResponse = struct(n0, _LRRi, 0, [_res, _nT], [[() => ResourceList, 0], 0]);
export var PolicyList = list(n0, _PL, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var ResourceArnList = list(n0, _RAL, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var GetResourcePolicies = op(
  n0,
  _GRP,
  {
    [_h]: ["POST", "/getresourcepolicies", 200],
  },
  () => GetResourcePoliciesRequest,
  () => GetResourcePoliciesResponse
);
export var ListResources = op(
  n0,
  _LR,
  {
    [_h]: ["POST", "/listresources", 200],
  },
  () => ListResourcesRequest,
  () => ListResourcesResponse
);
