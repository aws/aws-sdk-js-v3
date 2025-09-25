// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AZI,
  _aZI,
  _CISI,
  _CSo,
  _cSo,
  _DISI,
  _DR,
  _eQN,
  _IIp,
  _iIp,
  _IPI,
  _iPIp,
  _iRC,
  _IRCp,
  _IRTL,
  _IRTp,
  _ISI,
  _iSIp,
  _it,
  _iU,
  _IUp,
  _K,
  _k,
  _MIRC,
  _MIRCR,
  _MIRCRo,
  _Moni,
  _MS,
  _mSa,
  _OSv,
  _oSv,
  _RCe,
  _rCe,
  _rIe,
  _RIes,
  _RIRT,
  _RNes,
  _rNes,
  _ROI,
  _rOI,
  _RR,
  _rR,
  _RTe,
  _rTe,
  _RTesou,
  _rTSes,
  _V,
  _v,
  _VI,
  _vI,
  _xN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var IpamResourceCidr = struct(
  n0,
  _IRCp,
  0,
  [_IIp, _ISI, _IPI, _RR, _ROI, _RIes, _RNes, _RCe, _RTe, _RTesou, _IUp, _CSo, _MS, _OSv, _VI, _AZI],
  [
    [
      0,
      {
        [_eQN]: `IpamId`,
        [_xN]: _iIp,
      },
    ],
    [
      0,
      {
        [_eQN]: `IpamScopeId`,
        [_xN]: _iSIp,
      },
    ],
    [
      0,
      {
        [_eQN]: `IpamPoolId`,
        [_xN]: _iPIp,
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
        [_eQN]: `ResourceOwnerId`,
        [_xN]: _rOI,
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
        [_eQN]: `ResourceName`,
        [_xN]: _rNes,
      },
    ],
    [
      0,
      {
        [_eQN]: `ResourceCidr`,
        [_xN]: _rCe,
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
      () => IpamResourceTagList,
      {
        [_eQN]: `ResourceTagSet`,
        [_xN]: _rTSes,
      },
    ],
    [
      1,
      {
        [_eQN]: `IpUsage`,
        [_xN]: _iU,
      },
    ],
    [
      0,
      {
        [_eQN]: `ComplianceStatus`,
        [_xN]: _cSo,
      },
    ],
    [
      0,
      {
        [_eQN]: `ManagementState`,
        [_xN]: _mSa,
      },
    ],
    [
      0,
      {
        [_eQN]: `OverlapStatus`,
        [_xN]: _oSv,
      },
    ],
    [
      0,
      {
        [_eQN]: `VpcId`,
        [_xN]: _vI,
      },
    ],
    [
      0,
      {
        [_eQN]: `AvailabilityZoneId`,
        [_xN]: _aZI,
      },
    ],
  ]
);
export var IpamResourceTag = struct(
  n0,
  _IRTp,
  0,
  [_K, _V],
  [
    [
      0,
      {
        [_eQN]: `Key`,
        [_xN]: _k,
      },
    ],
    [
      0,
      {
        [_eQN]: `Value`,
        [_xN]: _v,
      },
    ],
  ]
);
export var ModifyIpamResourceCidrRequest = struct(
  n0,
  _MIRCR,
  0,
  [_DR, _RIes, _RCe, _RR, _CISI, _DISI, _Moni],
  [2, 0, 0, 0, 0, 0, 2]
);
export var ModifyIpamResourceCidrResult = struct(
  n0,
  _MIRCRo,
  0,
  [_IRCp],
  [
    [
      () => IpamResourceCidr,
      {
        [_eQN]: `IpamResourceCidr`,
        [_xN]: _iRC,
      },
    ],
  ]
);
export var RequestIpamResourceTag = struct(n0, _RIRT, 0, [_K, _V], [0, 0]);
export var IpamResourceTagList = list(n0, _IRTL, 0, [
  () => IpamResourceTag,
  {
    [_xN]: _it,
  },
]);
export var ModifyIpamResourceCidr = op(
  n0,
  _MIRC,
  0,
  () => ModifyIpamResourceCidrRequest,
  () => ModifyIpamResourceCidrResult
);
