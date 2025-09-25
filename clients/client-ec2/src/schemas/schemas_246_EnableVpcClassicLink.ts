// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DR, _dR, _eQN, _EVCL, _EVCLR, _EVCLRn, _R, _r, _VI, _vI, _xN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var EnableVpcClassicLinkRequest = struct(
  n0,
  _EVCLR,
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
export var EnableVpcClassicLinkResult = struct(
  n0,
  _EVCLRn,
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
export var EnableVpcClassicLink = op(
  n0,
  _EVCL,
  0,
  () => EnableVpcClassicLinkRequest,
  () => EnableVpcClassicLinkResult
);
