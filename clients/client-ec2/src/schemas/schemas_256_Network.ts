// smithy-typescript generated code
import { list, struct } from "@smithy/core/schema";

import { _eQN, _IPLpv, _iPpv, _IPpvre, _IPS, _it, _xN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var Ipv4PrefixSpecification = struct(
  n0,
  _IPS,
  0,
  [_IPpvre],
  [
    [
      0,
      {
        [_eQN]: `Ipv4Prefix`,
        [_xN]: _iPpv,
      },
    ],
  ]
);
export var Ipv4PrefixesList = list(n0, _IPLpv, 0, [
  () => Ipv4PrefixSpecification,
  {
    [_xN]: _it,
  },
]);
