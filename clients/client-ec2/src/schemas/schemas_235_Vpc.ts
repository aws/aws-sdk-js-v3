// smithy-typescript generated code
import { struct } from "@smithy/core/schema";

import { _DE, _DNn, _dNn, _eQN, _HZI, _hZI, _xN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DnsEntry = struct(
  n0,
  _DE,
  0,
  [_DNn, _HZI],
  [
    [
      0,
      {
        [_eQN]: `DnsName`,
        [_xN]: _dNn,
      },
    ],
    [
      0,
      {
        [_eQN]: `HostedZoneId`,
        [_xN]: _hZI,
      },
    ],
  ]
);
