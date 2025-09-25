// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ACLV,
  _ACLVR,
  _ACLVRt,
  _DR,
  _dR,
  _eQN,
  _G,
  _gIr,
  _GISL,
  _II,
  _iI,
  _R,
  _r,
  _SGI,
  _VI,
  _vI,
  _xN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AttachClassicLinkVpcRequest = struct(
  n0,
  _ACLVR,
  0,
  [_DR, _II, _VI, _G],
  [
    [
      2,
      {
        [_eQN]: `DryRun`,
        [_xN]: _dR,
      },
    ],
    [
      0,
      {
        [_eQN]: `InstanceId`,
        [_xN]: _iI,
      },
    ],
    [
      0,
      {
        [_eQN]: `VpcId`,
        [_xN]: _vI,
      },
    ],
    [
      () => GroupIdStringList,
      {
        [_xN]: _SGI,
      },
    ],
  ]
);
export var AttachClassicLinkVpcResult = struct(
  n0,
  _ACLVRt,
  0,
  [_R],
  [
    [
      2,
      {
        [_eQN]: `Return`,
        [_xN]: _r,
      },
    ],
  ]
);
export var GroupIdStringList = list(n0, _GISL, 0, [
  0,
  {
    [_xN]: _gIr,
  },
]);
export var AttachClassicLinkVpc = op(
  n0,
  _ACLV,
  0,
  () => AttachClassicLinkVpcRequest,
  () => AttachClassicLinkVpcResult
);
