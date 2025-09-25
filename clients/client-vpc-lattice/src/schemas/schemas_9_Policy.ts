// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _cA,
  _DAP,
  _DAPR,
  _DAPRe,
  _GAP,
  _GAPR,
  _GAPRe,
  _h,
  _lUA,
  _PAP,
  _PAPR,
  _PAPRu,
  _pol,
  _rIe,
  _sta,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteAuthPolicyRequest = struct(n0, _DAPR, 0, [_rIe], [[0, 1]]);
export var DeleteAuthPolicyResponse = struct(n0, _DAPRe, 0, [], []);
export var GetAuthPolicyRequest = struct(n0, _GAPR, 0, [_rIe], [[0, 1]]);
export var GetAuthPolicyResponse = struct(n0, _GAPRe, 0, [_pol, _sta, _cA, _lUA], [0, 0, 5, 5]);
export var PutAuthPolicyRequest = struct(n0, _PAPR, 0, [_rIe, _pol], [[0, 1], 0]);
export var PutAuthPolicyResponse = struct(n0, _PAPRu, 0, [_pol, _sta], [0, 0]);
export var DeleteAuthPolicy = op(
  n0,
  _DAP,
  {
    [_h]: ["DELETE", "/authpolicy/{resourceIdentifier}", 204],
  },
  () => DeleteAuthPolicyRequest,
  () => DeleteAuthPolicyResponse
);
export var GetAuthPolicy = op(
  n0,
  _GAP,
  {
    [_h]: ["GET", "/authpolicy/{resourceIdentifier}", 200],
  },
  () => GetAuthPolicyRequest,
  () => GetAuthPolicyResponse
);
export var PutAuthPolicy = op(
  n0,
  _PAP,
  {
    [_h]: ["PUT", "/authpolicy/{resourceIdentifier}", 200],
  },
  () => PutAuthPolicyRequest,
  () => PutAuthPolicyResponse
);
