// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DR, _dR, _DVCLi, _DVCLRi, _DVCLRis, _eQN, _R, _r, _VI, _vI, _xN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DisableVpcClassicLinkRequest = struct(
  n0,
  _DVCLRi,
  0,
  [_DR, _VI],
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
        [_eQN]: `VpcId`,
        [_xN]: _vI,
      },
    ],
  ]
);
export var DisableVpcClassicLinkResult = struct(
  n0,
  _DVCLRis,
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
export var DisableVpcClassicLink = op(
  n0,
  _DVCLi,
  0,
  () => DisableVpcClassicLinkRequest,
  () => DisableVpcClassicLinkResult
);
