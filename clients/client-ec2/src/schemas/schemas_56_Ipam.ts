// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ACl,
  _ACll,
  _AIPC,
  _AIPCR,
  _AIPCRl,
  _Ci,
  _ci,
  _CT,
  _DC,
  _DCi,
  _De,
  _de,
  _DR,
  _eQN,
  _Fi,
  _Fil,
  _GIPA,
  _GIPAR,
  _GIPARe,
  _IPA,
  _iPA,
  _IPAAC,
  _IPADC,
  _IPAI,
  _iPAI,
  _IPAp,
  _IPAS,
  _iPAS,
  _IPI,
  _it,
  _MR,
  _NL,
  _NTe,
  _nTe,
  _PNC,
  _rIe,
  _RIes,
  _RIPA,
  _RIPAR,
  _RIPARe,
  _rO,
  _ROe,
  _RR,
  _rR,
  _RTe,
  _rTe,
  _Succ,
  _succ,
  _xN,
  FilterList,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AllocateIpamPoolCidrRequest = struct(
  n0,
  _AIPCR,
  0,
  [_DR, _IPI, _Ci, _NL, _CT, _De, _PNC, _ACl, _DC],
  [
    2,
    0,
    0,
    1,
    [0, 4],
    0,
    2,
    [
      () => IpamPoolAllocationAllowedCidrs,
      {
        [_xN]: _ACll,
      },
    ],
    [
      () => IpamPoolAllocationDisallowedCidrs,
      {
        [_xN]: _DCi,
      },
    ],
  ]
);
export var AllocateIpamPoolCidrResult = struct(
  n0,
  _AIPCRl,
  0,
  [_IPA],
  [
    [
      () => IpamPoolAllocation,
      {
        [_eQN]: `IpamPoolAllocation`,
        [_xN]: _iPA,
      },
    ],
  ]
);
export var GetIpamPoolAllocationsRequest = struct(
  n0,
  _GIPAR,
  0,
  [_DR, _IPI, _IPAI, _Fi, _MR, _NTe],
  [
    2,
    0,
    0,
    [
      () => FilterList,
      {
        [_xN]: _Fil,
      },
    ],
    1,
    0,
  ]
);
export var GetIpamPoolAllocationsResult = struct(
  n0,
  _GIPARe,
  0,
  [_IPAp, _NTe],
  [
    [
      () => IpamPoolAllocationSet,
      {
        [_eQN]: `IpamPoolAllocationSet`,
        [_xN]: _iPAS,
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
export var IpamPoolAllocation = struct(
  n0,
  _IPA,
  0,
  [_Ci, _IPAI, _De, _RIes, _RTe, _RR, _ROe],
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
        [_eQN]: `IpamPoolAllocationId`,
        [_xN]: _iPAI,
      },
    ],
    [
      0,
      {
        [_eQN]: `Description`,
        [_xN]: _de,
      },
    ],
    [
      0,
      {
        [_eQN]: `ResourceId`,
        [_xN]: _rIe,
      },
    ],
    [
      0,
      {
        [_eQN]: `ResourceType`,
        [_xN]: _rTe,
      },
    ],
    [
      0,
      {
        [_eQN]: `ResourceRegion`,
        [_xN]: _rR,
      },
    ],
    [
      0,
      {
        [_eQN]: `ResourceOwner`,
        [_xN]: _rO,
      },
    ],
  ]
);
export var ReleaseIpamPoolAllocationRequest = struct(n0, _RIPAR, 0, [_DR, _IPI, _Ci, _IPAI], [2, 0, 0, 0]);
export var ReleaseIpamPoolAllocationResult = struct(
  n0,
  _RIPARe,
  0,
  [_Succ],
  [
    [
      2,
      {
        [_eQN]: `Success`,
        [_xN]: _succ,
      },
    ],
  ]
);
export var IpamPoolAllocationAllowedCidrs = list(n0, _IPAAC, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var IpamPoolAllocationDisallowedCidrs = list(n0, _IPADC, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var IpamPoolAllocationSet = list(n0, _IPAS, 0, [
  () => IpamPoolAllocation,
  {
    [_xN]: _it,
  },
]);
export var AllocateIpamPoolCidr = op(
  n0,
  _AIPC,
  0,
  () => AllocateIpamPoolCidrRequest,
  () => AllocateIpamPoolCidrResult
);
export var GetIpamPoolAllocations = op(
  n0,
  _GIPA,
  0,
  () => GetIpamPoolAllocationsRequest,
  () => GetIpamPoolAllocationsResult
);
export var ReleaseIpamPoolAllocation = op(
  n0,
  _RIPA,
  0,
  () => ReleaseIpamPoolAllocationRequest,
  () => ReleaseIpamPoolAllocationResult
);
