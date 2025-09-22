// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  DefaultUserRequired as __DefaultUserRequired,
  DuplicateUserNameFault as __DuplicateUserNameFault,
} from "../models/index";
import {
  _ACL,
  _ACLL,
  _ACLN,
  _ACLPC,
  _ACLs,
  _aQE,
  _ARN,
  _C,
  _c,
  _DACL,
  _DACLe,
  _DACLR,
  _DACLRe,
  _DACLRes,
  _DACLResc,
  _DUNF,
  _DUR,
  _e,
  _hE,
  _m,
  _MEV,
  _MR,
  _N,
  _NTex,
  _PC,
  _S,
  _UACL,
  _UACLR,
  _UACLRp,
  _UN,
  _UNTA,
  _UNTR,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ACL = struct(
  n0,
  _ACL,
  0,
  [_N, _S, _UN, _MEV, _PC, _C, _ARN],
  [0, 0, 64 | 0, 0, () => ACLPendingChanges, 64 | 0, 0]
);
export var ACLPendingChanges = struct(n0, _ACLPC, 0, [_UNTR, _UNTA], [64 | 0, 64 | 0]);
export var DefaultUserRequired = error(
  n0,
  _DUR,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`DefaultUserRequired`, 400],
  },
  [_m],
  [0],

  __DefaultUserRequired
);
export var DeleteACLRequest = struct(n0, _DACLR, 0, [_ACLN], [0]);
export var DeleteACLResponse = struct(n0, _DACLRe, 0, [_ACL], [() => ACL]);
export var DescribeACLsRequest = struct(n0, _DACLRes, 0, [_ACLN, _MR, _NTex], [0, 1, 0]);
export var DescribeACLsResponse = struct(n0, _DACLResc, 0, [_ACLs, _NTex], [() => ACLList, 0]);
export var DuplicateUserNameFault = error(
  n0,
  _DUNF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`DuplicateUserName`, 400],
  },
  [_m],
  [0],

  __DuplicateUserNameFault
);
export var UpdateACLRequest = struct(n0, _UACLR, 0, [_ACLN, _UNTA, _UNTR], [0, 64 | 0, 64 | 0]);
export var UpdateACLResponse = struct(n0, _UACLRp, 0, [_ACL], [() => ACL]);
export var ACLClusterNameList = 64 | 0;

export var ACLList = list(n0, _ACLL, 0, () => ACL);
export var UserNameList = 64 | 0;

export var UserNameListInput = 64 | 0;

export var DeleteACL = op(
  n0,
  _DACL,
  0,
  () => DeleteACLRequest,
  () => DeleteACLResponse
);
export var DescribeACLs = op(
  n0,
  _DACLe,
  0,
  () => DescribeACLsRequest,
  () => DescribeACLsResponse
);
export var UpdateACL = op(
  n0,
  _UACL,
  0,
  () => UpdateACLRequest,
  () => UpdateACLResponse
);
