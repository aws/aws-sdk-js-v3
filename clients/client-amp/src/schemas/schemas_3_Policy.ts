// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _cT, _DRPe, _DRPRe, _DRPRes, _h, _pD, _PRP, _PRPR, _PRPRu, _pS, _rIe, _wI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeResourcePolicyRequest = struct(n0, _DRPRe, 0, [_wI], [[0, 1]]);
export var DescribeResourcePolicyResponse = struct(n0, _DRPRes, 0, [_pD, _pS, _rIe], [0, 0, 0]);
export var PutResourcePolicyRequest = struct(n0, _PRPR, 0, [_wI, _pD, _cT, _rIe], [[0, 1], 0, [0, 4], 0]);
export var PutResourcePolicyResponse = struct(n0, _PRPRu, 0, [_pS, _rIe], [0, 0]);
export var DescribeResourcePolicy = op(
  n0,
  _DRPe,
  {
    [_h]: ["GET", "/workspaces/{workspaceId}/policy", 200],
  },
  () => DescribeResourcePolicyRequest,
  () => DescribeResourcePolicyResponse
);
export var PutResourcePolicy = op(
  n0,
  _PRP,
  {
    [_h]: ["PUT", "/workspaces/{workspaceId}/policy", 202],
  },
  () => PutResourcePolicyRequest,
  () => PutResourcePolicyResponse
);
