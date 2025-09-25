// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _eQN, _EVCLDS, _EVCLDSR, _EVCLDSRn, _R, _r, _VI, _xN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var EnableVpcClassicLinkDnsSupportRequest = struct(
  n0,
  _EVCLDSR,
  0,
  [_VI],
  [
    [
      0,
      {
        [_xN]: _VI,
      },
    ],
  ]
);
export var EnableVpcClassicLinkDnsSupportResult = struct(
  n0,
  _EVCLDSRn,
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
export var EnableVpcClassicLinkDnsSupport = op(
  n0,
  _EVCLDS,
  0,
  () => EnableVpcClassicLinkDnsSupportRequest,
  () => EnableVpcClassicLinkDnsSupportResult
);
