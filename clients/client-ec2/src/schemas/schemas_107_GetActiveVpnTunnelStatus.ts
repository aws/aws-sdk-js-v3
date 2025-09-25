// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _AVTS,
  _aVTS,
  _DR,
  _eQN,
  _GAVTS,
  _GAVTSR,
  _GAVTSRe,
  _IV,
  _iV,
  _PDHG,
  _pDHG,
  _PDHGh,
  _pDHGh,
  _PEA,
  _pEA,
  _PEAh,
  _pEAh,
  _PIA,
  _pIA,
  _PIAh,
  _pIAh,
  _PS,
  _pS,
  _PSR,
  _pSR,
  _VCI,
  _VTOIA,
  _xN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ActiveVpnTunnelStatus = struct(
  n0,
  _AVTS,
  0,
  [_PEA, _PEAh, _PIA, _PIAh, _PDHG, _PDHGh, _IV, _PS, _PSR],
  [
    [
      0,
      {
        [_eQN]: `Phase1EncryptionAlgorithm`,
        [_xN]: _pEA,
      },
    ],
    [
      0,
      {
        [_eQN]: `Phase2EncryptionAlgorithm`,
        [_xN]: _pEAh,
      },
    ],
    [
      0,
      {
        [_eQN]: `Phase1IntegrityAlgorithm`,
        [_xN]: _pIA,
      },
    ],
    [
      0,
      {
        [_eQN]: `Phase2IntegrityAlgorithm`,
        [_xN]: _pIAh,
      },
    ],
    [
      1,
      {
        [_eQN]: `Phase1DHGroup`,
        [_xN]: _pDHG,
      },
    ],
    [
      1,
      {
        [_eQN]: `Phase2DHGroup`,
        [_xN]: _pDHGh,
      },
    ],
    [
      0,
      {
        [_eQN]: `IkeVersion`,
        [_xN]: _iV,
      },
    ],
    [
      0,
      {
        [_eQN]: `ProvisioningStatus`,
        [_xN]: _pS,
      },
    ],
    [
      0,
      {
        [_eQN]: `ProvisioningStatusReason`,
        [_xN]: _pSR,
      },
    ],
  ]
);
export var GetActiveVpnTunnelStatusRequest = struct(n0, _GAVTSR, 0, [_VCI, _VTOIA, _DR], [0, 0, 2]);
export var GetActiveVpnTunnelStatusResult = struct(
  n0,
  _GAVTSRe,
  0,
  [_AVTS],
  [
    [
      () => ActiveVpnTunnelStatus,
      {
        [_eQN]: `ActiveVpnTunnelStatus`,
        [_xN]: _aVTS,
      },
    ],
  ]
);
export var GetActiveVpnTunnelStatus = op(
  n0,
  _GAVTS,
  0,
  () => GetActiveVpnTunnelStatusRequest,
  () => GetActiveVpnTunnelStatusResult
);
