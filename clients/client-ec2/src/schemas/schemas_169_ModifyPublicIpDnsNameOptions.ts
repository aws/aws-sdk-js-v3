// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DR, _eQN, _HTo, _MPIDNO, _MPIDNOR, _MPIDNORo, _NII, _Suc, _suc, _xN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ModifyPublicIpDnsNameOptionsRequest = struct(n0, _MPIDNOR, 0, [_NII, _HTo, _DR], [0, 0, 2]);
export var ModifyPublicIpDnsNameOptionsResult = struct(
  n0,
  _MPIDNORo,
  0,
  [_Suc],
  [
    [
      2,
      {
        [_eQN]: `Successful`,
        [_xN]: _suc,
      },
    ],
  ]
);
export var ModifyPublicIpDnsNameOptions = op(
  n0,
  _MPIDNO,
  0,
  () => ModifyPublicIpDnsNameOptionsRequest,
  () => ModifyPublicIpDnsNameOptionsResult
);
