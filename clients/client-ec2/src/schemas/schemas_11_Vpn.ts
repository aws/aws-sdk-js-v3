// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _at,
  _AVG,
  _AVGR,
  _AVGRt,
  _CGIu,
  _cGIu,
  _DR,
  _dR,
  _DVG,
  _DVGet,
  _DVGR,
  _DVGRet,
  _DVRP,
  _DVRPR,
  _eQN,
  _EVRP,
  _EVRPR,
  _GI,
  _GVTRS,
  _GVTRSR,
  _GVTRSRe,
  _LMA,
  _lMA,
  _MAAA,
  _mAAA,
  _mD,
  _MDa,
  _PM,
  _pM,
  _RTI,
  _TGI,
  _tGI,
  _VA,
  _VCI,
  _vCI,
  _VGI,
  _vGI,
  _VI,
  _VTOIA,
  _vTOIA,
  _xN,
  n0,
  Unit,
} from "./schemas_0";
import { VpcAttachment } from "./schemas_301_Vpn";

/* eslint no-var: 0 */

export var AttachVpnGatewayRequest = struct(
  n0,
  _AVGR,
  0,
  [_VI, _VGI, _DR],
  [
    0,
    0,
    [
      2,
      {
        [_eQN]: `DryRun`,
        [_xN]: _dR,
      },
    ],
  ]
);
export var AttachVpnGatewayResult = struct(
  n0,
  _AVGRt,
  0,
  [_VA],
  [
    [
      () => VpcAttachment,
      {
        [_eQN]: `Attachment`,
        [_xN]: _at,
      },
    ],
  ]
);
export var DeleteVpnGatewayRequest = struct(
  n0,
  _DVGR,
  0,
  [_VGI, _DR],
  [
    0,
    [
      2,
      {
        [_eQN]: `DryRun`,
        [_xN]: _dR,
      },
    ],
  ]
);
export var DetachVpnGatewayRequest = struct(
  n0,
  _DVGRet,
  0,
  [_VI, _VGI, _DR],
  [
    0,
    0,
    [
      2,
      {
        [_eQN]: `DryRun`,
        [_xN]: _dR,
      },
    ],
  ]
);
export var DisableVgwRoutePropagationRequest = struct(n0, _DVRPR, 0, [_GI, _RTI, _DR], [0, 0, 2]);
export var EnableVgwRoutePropagationRequest = struct(n0, _EVRPR, 0, [_GI, _RTI, _DR], [0, 0, 2]);
export var GetVpnTunnelReplacementStatusRequest = struct(n0, _GVTRSR, 0, [_VCI, _VTOIA, _DR], [0, 0, 2]);
export var GetVpnTunnelReplacementStatusResult = struct(
  n0,
  _GVTRSRe,
  0,
  [_VCI, _TGI, _CGIu, _VGI, _VTOIA, _MDa],
  [
    [
      0,
      {
        [_eQN]: `VpnConnectionId`,
        [_xN]: _vCI,
      },
    ],
    [
      0,
      {
        [_eQN]: `TransitGatewayId`,
        [_xN]: _tGI,
      },
    ],
    [
      0,
      {
        [_eQN]: `CustomerGatewayId`,
        [_xN]: _cGIu,
      },
    ],
    [
      0,
      {
        [_eQN]: `VpnGatewayId`,
        [_xN]: _vGI,
      },
    ],
    [
      0,
      {
        [_eQN]: `VpnTunnelOutsideIpAddress`,
        [_xN]: _vTOIA,
      },
    ],
    [
      () => MaintenanceDetails,
      {
        [_eQN]: `MaintenanceDetails`,
        [_xN]: _mD,
      },
    ],
  ]
);
export var MaintenanceDetails = struct(
  n0,
  _MDa,
  0,
  [_PM, _MAAA, _LMA],
  [
    [
      0,
      {
        [_eQN]: `PendingMaintenance`,
        [_xN]: _pM,
      },
    ],
    [
      4,
      {
        [_eQN]: `MaintenanceAutoAppliedAfter`,
        [_xN]: _mAAA,
      },
    ],
    [
      4,
      {
        [_eQN]: `LastMaintenanceApplied`,
        [_xN]: _lMA,
      },
    ],
  ]
);
export var AttachVpnGateway = op(
  n0,
  _AVG,
  0,
  () => AttachVpnGatewayRequest,
  () => AttachVpnGatewayResult
);
export var DeleteVpnGateway = op(
  n0,
  _DVG,
  0,
  () => DeleteVpnGatewayRequest,
  () => Unit
);
export var DetachVpnGateway = op(
  n0,
  _DVGet,
  0,
  () => DetachVpnGatewayRequest,
  () => Unit
);
export var DisableVgwRoutePropagation = op(
  n0,
  _DVRP,
  0,
  () => DisableVgwRoutePropagationRequest,
  () => Unit
);
export var EnableVgwRoutePropagation = op(
  n0,
  _EVRP,
  0,
  () => EnableVgwRoutePropagationRequest,
  () => Unit
);
export var GetVpnTunnelReplacementStatus = op(
  n0,
  _GVTRS,
  0,
  () => GetVpnTunnelReplacementStatusRequest,
  () => GetVpnTunnelReplacementStatusResult
);
