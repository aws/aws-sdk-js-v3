// smithy-typescript generated code
import { list, struct } from "@smithy/core/schema";

import { _AI, _AIS, _eQN, _IH, _iH, _II, _iI, _IT, _iT, _it, _SIRI, _sIRI, _xN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ActiveInstance = struct(
  n0,
  _AI,
  0,
  [_II, _IT, _SIRI, _IH],
  [
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
        [_eQN]: `InstanceType`,
        [_xN]: _iT,
      },
    ],
    [
      0,
      {
        [_eQN]: `SpotInstanceRequestId`,
        [_xN]: _sIRI,
      },
    ],
    [
      0,
      {
        [_eQN]: `InstanceHealth`,
        [_xN]: _iH,
      },
    ],
  ]
);
export var ActiveInstanceSet = list(n0, _AIS, 0, [
  () => ActiveInstance,
  {
    [_xN]: _it,
  },
]);
