// smithy-typescript generated code
import { list, struct } from "@smithy/core/schema";

import {
  _eQN,
  _ESE,
  _ESSR,
  _ESUE,
  _ESUS,
  _ESUSR,
  _IPLpvr,
  _IPLpvref,
  _IPpv,
  _IPpvre,
  _IPSRp,
  _IPSRpvr,
  _it,
  _PIAr,
  _pIAr,
  _PIAS,
  _PIASL,
  _Prim,
  _prim,
  _xN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var EnaSrdSpecificationRequest = struct(n0, _ESSR, 0, [_ESE, _ESUS], [2, () => EnaSrdUdpSpecificationRequest]);
export var EnaSrdUdpSpecificationRequest = struct(n0, _ESUSR, 0, [_ESUE], [2]);
export var Ipv4PrefixSpecificationRequest = struct(n0, _IPSRp, 0, [_IPpvre], [0]);
export var Ipv6PrefixSpecificationRequest = struct(n0, _IPSRpvr, 0, [_IPpv], [0]);
export var PrivateIpAddressSpecification = struct(
  n0,
  _PIAS,
  0,
  [_Prim, _PIAr],
  [
    [
      2,
      {
        [_eQN]: `Primary`,
        [_xN]: _prim,
      },
    ],
    [
      0,
      {
        [_eQN]: `PrivateIpAddress`,
        [_xN]: _pIAr,
      },
    ],
  ]
);
export var Ipv4PrefixList = list(n0, _IPLpvr, 0, [
  () => Ipv4PrefixSpecificationRequest,
  {
    [_xN]: _it,
  },
]);
export var Ipv6PrefixList = list(n0, _IPLpvref, 0, [
  () => Ipv6PrefixSpecificationRequest,
  {
    [_xN]: _it,
  },
]);
export var PrivateIpAddressSpecificationList = list(n0, _PIASL, 0, [
  () => PrivateIpAddressSpecification,
  {
    [_xN]: _it,
  },
]);
