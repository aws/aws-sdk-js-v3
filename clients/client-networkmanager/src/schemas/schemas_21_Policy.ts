// smithy-typescript generated code
import { op, sim, struct } from "@smithy/core/schema";

import { _a, _GRP, _GRPR, _GRPRe, _h, _mT, _PD, _PRP, _PRPR, _PRPRu, _RA, _SJRPD, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var SynthesizedJsonResourcePolicyDocument = sim(n0, _SJRPD, 0, {
  [_mT]: _a,
});
export var GetResourcePolicyRequest = struct(n0, _GRPR, 0, [_RA], [[0, 1]]);
export var GetResourcePolicyResponse = struct(n0, _GRPRe, 0, [_PD], [[() => SynthesizedJsonResourcePolicyDocument, 0]]);
export var PutResourcePolicyRequest = struct(
  n0,
  _PRPR,
  0,
  [_PD, _RA],
  [
    [() => SynthesizedJsonResourcePolicyDocument, 0],
    [0, 1],
  ]
);
export var PutResourcePolicyResponse = struct(n0, _PRPRu, 0, [], []);
export var GetResourcePolicy = op(
  n0,
  _GRP,
  {
    [_h]: ["GET", "/resource-policy/{ResourceArn}", 200],
  },
  () => GetResourcePolicyRequest,
  () => GetResourcePolicyResponse
);
export var PutResourcePolicy = op(
  n0,
  _PRP,
  {
    [_h]: ["POST", "/resource-policy/{ResourceArn}", 200],
  },
  () => PutResourcePolicyRequest,
  () => PutResourcePolicyResponse
);
