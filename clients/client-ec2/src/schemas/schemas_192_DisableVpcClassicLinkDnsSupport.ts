// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DVCLDSi, _DVCLDSRi, _DVCLDSRis, _eQN, _R, _r, _VI, _xN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DisableVpcClassicLinkDnsSupportRequest = struct(
  n0,
  _DVCLDSRi,
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
export var DisableVpcClassicLinkDnsSupportResult = struct(
  n0,
  _DVCLDSRis,
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
export var DisableVpcClassicLinkDnsSupport = op(
  n0,
  _DVCLDSi,
  0,
  () => DisableVpcClassicLinkDnsSupportRequest,
  () => DisableVpcClassicLinkDnsSupportResult
);
