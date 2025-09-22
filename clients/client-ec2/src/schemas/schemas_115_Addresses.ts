// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AIA,
  _aIA,
  _AIAR,
  _AIARs,
  _AIAs,
  _AIP,
  _AIPs,
  _aIPS,
  _aIPSs,
  _APIA,
  _APIAL,
  _APIAR,
  _APIARs,
  _APIAs,
  _aPIAS,
  _APIAssi,
  _AR,
  _aR,
  _eQN,
  _IA,
  _iA,
  _IAC,
  _iAC,
  _IALp,
  _IPC,
  _IPCp,
  _IPLpr,
  _IPp,
  _IPpv,
  _IPpvr,
  _IPpvre,
  _it,
  _NII,
  _nII,
  _PIAr,
  _pIAr,
  _PIAri,
  _PIASLr,
  _SPIAC,
  _sPIAC,
  _UIA,
  _uIA,
  _UIAn,
  _UIAR,
  _UIARn,
  _UIPn,
  _uIPSn,
  _UPIA,
  _UPIAR,
  _xN,
  n0,
  Unit,
} from "./schemas_0";
import { Ipv4PrefixesList } from "./schemas_256_Network";

/* eslint no-var: 0 */

export var AssignedPrivateIpAddress = struct(
  n0,
  _APIA,
  0,
  [_PIAr],
  [
    [
      0,
      {
        [_eQN]: `PrivateIpAddress`,
        [_xN]: _pIAr,
      },
    ],
  ]
);
export var AssignIpv6AddressesRequest = struct(
  n0,
  _AIAR,
  0,
  [_IPC, _IPp, _NII, _IA, _IAC],
  [
    1,
    [
      () => IpPrefixList,
      {
        [_xN]: _IPpv,
      },
    ],
    [
      0,
      {
        [_eQN]: `NetworkInterfaceId`,
        [_xN]: _nII,
      },
    ],
    [
      () => Ipv6AddressList,
      {
        [_eQN]: `Ipv6Addresses`,
        [_xN]: _iA,
      },
    ],
    [
      1,
      {
        [_eQN]: `Ipv6AddressCount`,
        [_xN]: _iAC,
      },
    ],
  ]
);
export var AssignIpv6AddressesResult = struct(
  n0,
  _AIARs,
  0,
  [_AIA, _AIP, _NII],
  [
    [
      () => Ipv6AddressList,
      {
        [_eQN]: `AssignedIpv6Addresses`,
        [_xN]: _aIA,
      },
    ],
    [
      () => IpPrefixList,
      {
        [_eQN]: `AssignedIpv6PrefixSet`,
        [_xN]: _aIPS,
      },
    ],
    [
      0,
      {
        [_eQN]: `NetworkInterfaceId`,
        [_xN]: _nII,
      },
    ],
  ]
);
export var AssignPrivateIpAddressesRequest = struct(
  n0,
  _APIAR,
  0,
  [_IPpvr, _IPCp, _NII, _PIAri, _SPIAC, _AR],
  [
    [
      () => IpPrefixList,
      {
        [_xN]: _IPpvre,
      },
    ],
    1,
    [
      0,
      {
        [_eQN]: `NetworkInterfaceId`,
        [_xN]: _nII,
      },
    ],
    [
      () => PrivateIpAddressStringList,
      {
        [_eQN]: `PrivateIpAddress`,
        [_xN]: _pIAr,
      },
    ],
    [
      1,
      {
        [_eQN]: `SecondaryPrivateIpAddressCount`,
        [_xN]: _sPIAC,
      },
    ],
    [
      2,
      {
        [_eQN]: `AllowReassignment`,
        [_xN]: _aR,
      },
    ],
  ]
);
export var AssignPrivateIpAddressesResult = struct(
  n0,
  _APIARs,
  0,
  [_NII, _APIAs, _AIPs],
  [
    [
      0,
      {
        [_eQN]: `NetworkInterfaceId`,
        [_xN]: _nII,
      },
    ],
    [
      () => AssignedPrivateIpAddressList,
      {
        [_eQN]: `AssignedPrivateIpAddressesSet`,
        [_xN]: _aPIAS,
      },
    ],
    [
      () => Ipv4PrefixesList,
      {
        [_eQN]: `AssignedIpv4PrefixSet`,
        [_xN]: _aIPSs,
      },
    ],
  ]
);
export var UnassignIpv6AddressesRequest = struct(
  n0,
  _UIAR,
  0,
  [_IPp, _NII, _IA],
  [
    [
      () => IpPrefixList,
      {
        [_xN]: _IPpv,
      },
    ],
    [
      0,
      {
        [_eQN]: `NetworkInterfaceId`,
        [_xN]: _nII,
      },
    ],
    [
      () => Ipv6AddressList,
      {
        [_eQN]: `Ipv6Addresses`,
        [_xN]: _iA,
      },
    ],
  ]
);
export var UnassignIpv6AddressesResult = struct(
  n0,
  _UIARn,
  0,
  [_NII, _UIA, _UIPn],
  [
    [
      0,
      {
        [_eQN]: `NetworkInterfaceId`,
        [_xN]: _nII,
      },
    ],
    [
      () => Ipv6AddressList,
      {
        [_eQN]: `UnassignedIpv6Addresses`,
        [_xN]: _uIA,
      },
    ],
    [
      () => IpPrefixList,
      {
        [_eQN]: `UnassignedIpv6PrefixSet`,
        [_xN]: _uIPSn,
      },
    ],
  ]
);
export var UnassignPrivateIpAddressesRequest = struct(
  n0,
  _UPIAR,
  0,
  [_IPpvr, _NII, _PIAri],
  [
    [
      () => IpPrefixList,
      {
        [_xN]: _IPpvre,
      },
    ],
    [
      0,
      {
        [_eQN]: `NetworkInterfaceId`,
        [_xN]: _nII,
      },
    ],
    [
      () => PrivateIpAddressStringList,
      {
        [_eQN]: `PrivateIpAddress`,
        [_xN]: _pIAr,
      },
    ],
  ]
);
export var AssignedPrivateIpAddressList = list(n0, _APIAL, 0, [
  () => AssignedPrivateIpAddress,
  {
    [_xN]: _it,
  },
]);
export var IpPrefixList = list(n0, _IPLpr, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var Ipv6AddressList = list(n0, _IALp, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var PrivateIpAddressStringList = list(n0, _PIASLr, 0, [
  0,
  {
    [_xN]: _PIAr,
  },
]);
export var AssignIpv6Addresses = op(
  n0,
  _AIAs,
  0,
  () => AssignIpv6AddressesRequest,
  () => AssignIpv6AddressesResult
);
export var AssignPrivateIpAddresses = op(
  n0,
  _APIAssi,
  0,
  () => AssignPrivateIpAddressesRequest,
  () => AssignPrivateIpAddressesResult
);
export var UnassignIpv6Addresses = op(
  n0,
  _UIAn,
  0,
  () => UnassignIpv6AddressesRequest,
  () => UnassignIpv6AddressesResult
);
export var UnassignPrivateIpAddresses = op(
  n0,
  _UPIA,
  0,
  () => UnassignPrivateIpAddressesRequest,
  () => Unit
);
