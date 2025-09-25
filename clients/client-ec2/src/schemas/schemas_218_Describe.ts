// smithy-typescript generated code
import { list, struct } from "@smithy/core/schema";

import { _eQN, _IApv, _iApv, _IIA, _IIAL, _iPI, _IPIs, _it, _xN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var InstanceIpv6Address = struct(
  n0,
  _IIA,
  0,
  [_IApv, _IPIs],
  [
    [
      0,
      {
        [_eQN]: `Ipv6Address`,
        [_xN]: _iApv,
      },
    ],
    [
      2,
      {
        [_eQN]: `IsPrimaryIpv6`,
        [_xN]: _iPI,
      },
    ],
  ]
);
export var InstanceIpv6AddressList = list(n0, _IIAL, 0, [
  () => InstanceIpv6Address,
  {
    [_xN]: _it,
  },
]);
