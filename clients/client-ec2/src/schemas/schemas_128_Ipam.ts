// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _CAC,
  _Ci,
  _CIERVT,
  _CIERVTR,
  _CIERVTRr,
  _CT,
  _DIERVT,
  _DIERVTR,
  _DIERVTRe,
  _DR,
  _eQN,
  _IApa,
  _iApa,
  _ICAC,
  _IERVT,
  _iERVT,
  _IERVTA,
  _iERVTA,
  _IERVTI,
  _iERVTI,
  _IIp,
  _iIp,
  _iPC,
  _IPCpa,
  _IPI,
  _IRp,
  _iRp,
  _Me,
  _NAo,
  _nAo,
  _NL,
  _PIPC,
  _PIPCR,
  _PIPCRr,
  _Si,
  _St,
  _st,
  _Sta,
  _sta,
  _T,
  _TN,
  _tN,
  _TS,
  _tS,
  _TSa,
  _tV,
  _TVo,
  _VMe,
  _xN,
  n0,
  TagList,
  TagSpecificationList,
} from "./schemas_0";
import { IpamPoolCidr } from "./schemas_38_Ipam";

/* eslint no-var: 0 */

export var CreateIpamExternalResourceVerificationTokenRequest = struct(
  n0,
  _CIERVTR,
  0,
  [_DR, _IIp, _TS, _CT],
  [
    2,
    0,
    [
      () => TagSpecificationList,
      {
        [_xN]: _TSa,
      },
    ],
    [0, 4],
  ]
);
export var CreateIpamExternalResourceVerificationTokenResult = struct(
  n0,
  _CIERVTRr,
  0,
  [_IERVT],
  [
    [
      () => IpamExternalResourceVerificationToken,
      {
        [_eQN]: `IpamExternalResourceVerificationToken`,
        [_xN]: _iERVT,
      },
    ],
  ]
);
export var DeleteIpamExternalResourceVerificationTokenRequest = struct(n0, _DIERVTR, 0, [_DR, _IERVTI], [2, 0]);
export var DeleteIpamExternalResourceVerificationTokenResult = struct(
  n0,
  _DIERVTRe,
  0,
  [_IERVT],
  [
    [
      () => IpamExternalResourceVerificationToken,
      {
        [_eQN]: `IpamExternalResourceVerificationToken`,
        [_xN]: _iERVT,
      },
    ],
  ]
);
export var IpamCidrAuthorizationContext = struct(n0, _ICAC, 0, [_Me, _Si], [0, 0]);
export var IpamExternalResourceVerificationToken = struct(
  n0,
  _IERVT,
  0,
  [_IERVTI, _IERVTA, _IIp, _IApa, _IRp, _TVo, _TN, _NAo, _Sta, _T, _St],
  [
    [
      0,
      {
        [_eQN]: `IpamExternalResourceVerificationTokenId`,
        [_xN]: _iERVTI,
      },
    ],
    [
      0,
      {
        [_eQN]: `IpamExternalResourceVerificationTokenArn`,
        [_xN]: _iERVTA,
      },
    ],
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
        [_eQN]: `IpamArn`,
        [_xN]: _iApa,
      },
    ],
    [
      0,
      {
        [_eQN]: `IpamRegion`,
        [_xN]: _iRp,
      },
    ],
    [
      0,
      {
        [_eQN]: `TokenValue`,
        [_xN]: _tV,
      },
    ],
    [
      0,
      {
        [_eQN]: `TokenName`,
        [_xN]: _tN,
      },
    ],
    [
      4,
      {
        [_eQN]: `NotAfter`,
        [_xN]: _nAo,
      },
    ],
    [
      0,
      {
        [_eQN]: `Status`,
        [_xN]: _sta,
      },
    ],
    [
      () => TagList,
      {
        [_eQN]: `TagSet`,
        [_xN]: _tS,
      },
    ],
    [
      0,
      {
        [_eQN]: `State`,
        [_xN]: _st,
      },
    ],
  ]
);
export var ProvisionIpamPoolCidrRequest = struct(
  n0,
  _PIPCR,
  0,
  [_DR, _IPI, _Ci, _CAC, _NL, _CT, _VMe, _IERVTI],
  [2, 0, 0, () => IpamCidrAuthorizationContext, 1, [0, 4], 0, 0]
);
export var ProvisionIpamPoolCidrResult = struct(
  n0,
  _PIPCRr,
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
export var CreateIpamExternalResourceVerificationToken = op(
  n0,
  _CIERVT,
  0,
  () => CreateIpamExternalResourceVerificationTokenRequest,
  () => CreateIpamExternalResourceVerificationTokenResult
);
export var DeleteIpamExternalResourceVerificationToken = op(
  n0,
  _DIERVT,
  0,
  () => DeleteIpamExternalResourceVerificationTokenRequest,
  () => DeleteIpamExternalResourceVerificationTokenResult
);
export var ProvisionIpamPoolCidr = op(
  n0,
  _PIPC,
  0,
  () => ProvisionIpamPoolCidrRequest,
  () => ProvisionIpamPoolCidrResult
);
