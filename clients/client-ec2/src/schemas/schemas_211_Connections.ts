// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CET,
  _cET,
  _CETo,
  _cETo,
  _CIA,
  _cIA,
  _CIl,
  _cIl,
  _CIon,
  _cIon,
  _CN,
  _cN,
  _Co,
  _co,
  _con,
  _Conn,
  _CSonn,
  _cSonn,
  _CSur,
  _cSur,
  _CVC,
  _CVCS,
  _CVCSl,
  _CVEI,
  _cVEI,
  _DCVC,
  _DCVCR,
  _DCVCRe,
  _DR,
  _EB,
  _eB,
  _EP,
  _eP,
  _eQN,
  _Fi,
  _Fil,
  _IB,
  _iB,
  _IPng,
  _iPng,
  _it,
  _Me,
  _me,
  _MR,
  _NTe,
  _nTe,
  _PCS,
  _pCSS,
  _PSre,
  _pSre,
  _Sta,
  _sta,
  _TCSe,
  _TCSS,
  _TCVC,
  _TCVCR,
  _TCVCRe,
  _Ti,
  _ti,
  _Us,
  _us,
  _xN,
  FilterList,
  n0,
  ValueStringList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ClientVpnConnection = struct(
  n0,
  _CVC,
  0,
  [_CVEI, _Ti, _CIon, _Us, _CET, _IB, _EB, _IPng, _EP, _CIl, _CIA, _CN, _Sta, _CETo, _PCS],
  [
    [
      0,
      {
        [_eQN]: `ClientVpnEndpointId`,
        [_xN]: _cVEI,
      },
    ],
    [
      0,
      {
        [_eQN]: `Timestamp`,
        [_xN]: _ti,
      },
    ],
    [
      0,
      {
        [_eQN]: `ConnectionId`,
        [_xN]: _cIon,
      },
    ],
    [
      0,
      {
        [_eQN]: `Username`,
        [_xN]: _us,
      },
    ],
    [
      0,
      {
        [_eQN]: `ConnectionEstablishedTime`,
        [_xN]: _cET,
      },
    ],
    [
      0,
      {
        [_eQN]: `IngressBytes`,
        [_xN]: _iB,
      },
    ],
    [
      0,
      {
        [_eQN]: `EgressBytes`,
        [_xN]: _eB,
      },
    ],
    [
      0,
      {
        [_eQN]: `IngressPackets`,
        [_xN]: _iPng,
      },
    ],
    [
      0,
      {
        [_eQN]: `EgressPackets`,
        [_xN]: _eP,
      },
    ],
    [
      0,
      {
        [_eQN]: `ClientIp`,
        [_xN]: _cIl,
      },
    ],
    [
      0,
      {
        [_eQN]: `ClientIpv6Address`,
        [_xN]: _cIA,
      },
    ],
    [
      0,
      {
        [_eQN]: `CommonName`,
        [_xN]: _cN,
      },
    ],
    [
      () => ClientVpnConnectionStatus,
      {
        [_eQN]: `Status`,
        [_xN]: _sta,
      },
    ],
    [
      0,
      {
        [_eQN]: `ConnectionEndTime`,
        [_xN]: _cETo,
      },
    ],
    [
      () => ValueStringList,
      {
        [_eQN]: `PostureComplianceStatusSet`,
        [_xN]: _pCSS,
      },
    ],
  ]
);
export var ClientVpnConnectionStatus = struct(
  n0,
  _CVCS,
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
export var DescribeClientVpnConnectionsRequest = struct(
  n0,
  _DCVCR,
  0,
  [_CVEI, _Fi, _NTe, _MR, _DR],
  [
    0,
    [
      () => FilterList,
      {
        [_xN]: _Fil,
      },
    ],
    0,
    1,
    2,
  ]
);
export var DescribeClientVpnConnectionsResult = struct(
  n0,
  _DCVCRe,
  0,
  [_Conn, _NTe],
  [
    [
      () => ClientVpnConnectionSet,
      {
        [_eQN]: `Connections`,
        [_xN]: _con,
      },
    ],
    [
      0,
      {
        [_eQN]: `NextToken`,
        [_xN]: _nTe,
      },
    ],
  ]
);
export var TerminateClientVpnConnectionsRequest = struct(n0, _TCVCR, 0, [_CVEI, _CIon, _Us, _DR], [0, 0, 0, 2]);
export var TerminateClientVpnConnectionsResult = struct(
  n0,
  _TCVCRe,
  0,
  [_CVEI, _Us, _CSonn],
  [
    [
      0,
      {
        [_eQN]: `ClientVpnEndpointId`,
        [_xN]: _cVEI,
      },
    ],
    [
      0,
      {
        [_eQN]: `Username`,
        [_xN]: _us,
      },
    ],
    [
      () => TerminateConnectionStatusSet,
      {
        [_eQN]: `ConnectionStatuses`,
        [_xN]: _cSonn,
      },
    ],
  ]
);
export var TerminateConnectionStatus = struct(
  n0,
  _TCSe,
  0,
  [_CIon, _PSre, _CSur],
  [
    [
      0,
      {
        [_eQN]: `ConnectionId`,
        [_xN]: _cIon,
      },
    ],
    [
      () => ClientVpnConnectionStatus,
      {
        [_eQN]: `PreviousStatus`,
        [_xN]: _pSre,
      },
    ],
    [
      () => ClientVpnConnectionStatus,
      {
        [_eQN]: `CurrentStatus`,
        [_xN]: _cSur,
      },
    ],
  ]
);
export var ClientVpnConnectionSet = list(n0, _CVCSl, 0, [
  () => ClientVpnConnection,
  {
    [_xN]: _it,
  },
]);
export var TerminateConnectionStatusSet = list(n0, _TCSS, 0, [
  () => TerminateConnectionStatus,
  {
    [_xN]: _it,
  },
]);
export var DescribeClientVpnConnections = op(
  n0,
  _DCVC,
  0,
  () => DescribeClientVpnConnectionsRequest,
  () => DescribeClientVpnConnectionsResult
);
export var TerminateClientVpnConnections = op(
  n0,
  _TCVC,
  0,
  () => TerminateClientVpnConnectionsRequest,
  () => TerminateClientVpnConnectionsResult
);
