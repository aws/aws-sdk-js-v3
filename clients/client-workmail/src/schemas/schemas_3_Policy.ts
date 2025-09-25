// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _Ac, _D, _DRP, _DRPR, _DRPRe, _FC, _FCo, _GDRP, _GDRPR, _GDRPRe, _I, _N, _OI, _Pe, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteRetentionPolicyRequest = struct(n0, _DRPR, 0, [_OI, _I], [0, 0]);
export var DeleteRetentionPolicyResponse = struct(n0, _DRPRe, 0, [], []);
export var FolderConfiguration = struct(n0, _FC, 0, [_N, _Ac, _Pe], [0, 0, 1]);
export var GetDefaultRetentionPolicyRequest = struct(n0, _GDRPR, 0, [_OI], [0]);
export var GetDefaultRetentionPolicyResponse = struct(
  n0,
  _GDRPRe,
  0,
  [_I, _N, _D, _FCo],
  [0, 0, 0, () => FolderConfigurations]
);
export var FolderConfigurations = list(n0, _FCo, 0, () => FolderConfiguration);
export var DeleteRetentionPolicy = op(
  n0,
  _DRP,
  2,
  () => DeleteRetentionPolicyRequest,
  () => DeleteRetentionPolicyResponse
);
export var GetDefaultRetentionPolicy = op(
  n0,
  _GDRP,
  2,
  () => GetDefaultRetentionPolicyRequest,
  () => GetDefaultRetentionPolicyResponse
);
