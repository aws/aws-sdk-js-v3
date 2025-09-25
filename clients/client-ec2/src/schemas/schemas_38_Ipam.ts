// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _Ci,
  _ci,
  _Co,
  _co,
  _DIPC,
  _DIPCR,
  _DIPCRe,
  _DR,
  _eQN,
  _FR,
  _fR,
  _iPC,
  _IPCFR,
  _IPCI,
  _iPCI,
  _IPCpa,
  _IPI,
  _Me,
  _me,
  _NL,
  _nL,
  _St,
  _st,
  _xN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeprovisionIpamPoolCidrRequest = struct(n0, _DIPCR, 0, [_DR, _IPI, _Ci], [2, 0, 0]);
export var DeprovisionIpamPoolCidrResult = struct(
  n0,
  _DIPCRe,
  0,
  [_IPCpa],
  [
    [
      () => IpamPoolCidr,
      {
        [_eQN]: `IpamPoolCidr`,
        [_xN]: _iPC,
      },
    ],
  ]
);
export var IpamPoolCidr = struct(
  n0,
  _IPCpa,
  0,
  [_Ci, _St, _FR, _IPCI, _NL],
  [
    [
      0,
      {
        [_eQN]: `Cidr`,
        [_xN]: _ci,
      },
    ],
    [
      0,
      {
        [_eQN]: `State`,
        [_xN]: _st,
      },
    ],
    [
      () => IpamPoolCidrFailureReason,
      {
        [_eQN]: `FailureReason`,
        [_xN]: _fR,
      },
    ],
    [
      0,
      {
        [_eQN]: `IpamPoolCidrId`,
        [_xN]: _iPCI,
      },
    ],
    [
      1,
      {
        [_eQN]: `NetmaskLength`,
        [_xN]: _nL,
      },
    ],
  ]
);
export var IpamPoolCidrFailureReason = struct(
  n0,
  _IPCFR,
  0,
  [_Co, _Me],
  [
    [
      0,
      {
        [_eQN]: `Code`,
        [_xN]: _co,
      },
    ],
    [
      0,
      {
        [_eQN]: `Message`,
        [_xN]: _me,
      },
    ],
  ]
);
export var DeprovisionIpamPoolCidr = op(
  n0,
  _DIPC,
  0,
  () => DeprovisionIpamPoolCidrRequest,
  () => DeprovisionIpamPoolCidrResult
);
