// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DCLV, _DCLVR, _DCLVRe, _DR, _dR, _eQN, _II, _iI, _R, _r, _VI, _vI, _xN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DetachClassicLinkVpcRequest = struct(
  n0,
  _DCLVR,
  0,
  [_DR, _II, _VI],
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
  ]
);
export var DetachClassicLinkVpcResult = struct(
  n0,
  _DCLVRe,
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
export var DetachClassicLinkVpc = op(
  n0,
  _DCLV,
  0,
  () => DetachClassicLinkVpcRequest,
  () => DetachClassicLinkVpcResult
);
