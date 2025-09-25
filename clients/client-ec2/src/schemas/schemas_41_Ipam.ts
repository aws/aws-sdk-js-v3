// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AART,
  _AARTd,
  _ADNL,
  _aDNL,
  _AF,
  _aF,
  _AIu,
  _aIu,
  _AMNL,
  _aMNL,
  _AMNLl,
  _aMNLl,
  _ART,
  _ARTl,
  _aRTS,
  _ASw,
  _aSw,
  _Ca,
  _CADNL,
  _CIP,
  _CIPR,
  _CIPRr,
  _CIS,
  _CISR,
  _CISRr,
  _CT,
  _De,
  _de,
  _DIP,
  _DIPR,
  _DIPRe,
  _DISe,
  _DISR,
  _DISRe,
  _DR,
  _eQN,
  _IApa,
  _iApa,
  _IDs,
  _iDs,
  _IIp,
  _iPAp,
  _IPApa,
  _IPI,
  _iPIp,
  _IPpa,
  _iPpa,
  _IPSR,
  _IPSRR,
  _IRp,
  _iRp,
  _ISA,
  _iSA,
  _ISI,
  _iSIp,
  _ISp,
  _iSp,
  _iST,
  _ISTp,
  _it,
  _Lo,
  _loc,
  _MIPo,
  _MIPRod,
  _MIPRodi,
  _MIS,
  _MISR,
  _MISRo,
  _OI,
  _oI,
  _PAu,
  _pAu,
  _PCo,
  _pCo,
  _PDoo,
  _pDoo,
  _PIS,
  _pIS,
  _RART,
  _RARTe,
  _rIe,
  _RIes,
  _RIRTL,
  _rO,
  _ROe,
  _RR,
  _rR,
  _RTe,
  _rTe,
  _SIPI,
  _sIPI,
  _SMta,
  _sMta,
  _sRo,
  _SRou,
  _St,
  _st,
  _T,
  _TS,
  _tS,
  _TSa,
  _xN,
  n0,
  TagList,
  TagSpecificationList,
} from "./schemas_0";
import { IpamResourceTagList, RequestIpamResourceTag } from "./schemas_114_Ipam";

/* eslint no-var: 0 */

export var CreateIpamPoolRequest = struct(
  n0,
  _CIPR,
  0,
  [_DR, _ISI, _Lo, _SIPI, _De, _AF, _AIu, _PAu, _AMNL, _AMNLl, _ADNL, _ART, _TS, _CT, _ASw, _PIS, _SRou],
  [
    2,
    0,
    0,
    0,
    0,
    0,
    2,
    2,
    1,
    1,
    1,
    [
      () => RequestIpamResourceTagList,
      {
        [_xN]: _ARTl,
      },
    ],
    [
      () => TagSpecificationList,
      {
        [_xN]: _TSa,
      },
    ],
    [0, 4],
    0,
    0,
    () => IpamPoolSourceResourceRequest,
  ]
);
export var CreateIpamPoolResult = struct(
  n0,
  _CIPRr,
  0,
  [_IPpa],
  [
    [
      () => IpamPool,
      {
        [_eQN]: `IpamPool`,
        [_xN]: _iPpa,
      },
    ],
  ]
);
export var CreateIpamScopeRequest = struct(
  n0,
  _CISR,
  0,
  [_DR, _IIp, _De, _TS, _CT],
  [
    2,
    0,
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
export var CreateIpamScopeResult = struct(
  n0,
  _CISRr,
  0,
  [_ISp],
  [
    [
      () => IpamScope,
      {
        [_eQN]: `IpamScope`,
        [_xN]: _iSp,
      },
    ],
  ]
);
export var DeleteIpamPoolRequest = struct(n0, _DIPR, 0, [_DR, _IPI, _Ca], [2, 0, 2]);
export var DeleteIpamPoolResult = struct(
  n0,
  _DIPRe,
  0,
  [_IPpa],
  [
    [
      () => IpamPool,
      {
        [_eQN]: `IpamPool`,
        [_xN]: _iPpa,
      },
    ],
  ]
);
export var DeleteIpamScopeRequest = struct(n0, _DISR, 0, [_DR, _ISI], [2, 0]);
export var DeleteIpamScopeResult = struct(
  n0,
  _DISRe,
  0,
  [_ISp],
  [
    [
      () => IpamScope,
      {
        [_eQN]: `IpamScope`,
        [_xN]: _iSp,
      },
    ],
  ]
);
export var IpamPool = struct(
  n0,
  _IPpa,
  0,
  [
    _OI,
    _IPI,
    _SIPI,
    _IPApa,
    _ISA,
    _ISTp,
    _IApa,
    _IRp,
    _Lo,
    _PDoo,
    _St,
    _SMta,
    _De,
    _AIu,
    _PAu,
    _AF,
    _AMNL,
    _AMNLl,
    _ADNL,
    _ART,
    _T,
    _ASw,
    _PIS,
    _SRou,
  ],
  [
    [
      0,
      {
        [_eQN]: `OwnerId`,
        [_xN]: _oI,
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
        [_eQN]: `SourceIpamPoolId`,
        [_xN]: _sIPI,
      },
    ],
    [
      0,
      {
        [_eQN]: `IpamPoolArn`,
        [_xN]: _iPAp,
      },
    ],
    [
      0,
      {
        [_eQN]: `IpamScopeArn`,
        [_xN]: _iSA,
      },
    ],
    [
      0,
      {
        [_eQN]: `IpamScopeType`,
        [_xN]: _iST,
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
        [_eQN]: `Locale`,
        [_xN]: _loc,
      },
    ],
    [
      1,
      {
        [_eQN]: `PoolDepth`,
        [_xN]: _pDoo,
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
      0,
      {
        [_eQN]: `StateMessage`,
        [_xN]: _sMta,
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
      2,
      {
        [_eQN]: `AutoImport`,
        [_xN]: _aIu,
      },
    ],
    [
      2,
      {
        [_eQN]: `PubliclyAdvertisable`,
        [_xN]: _pAu,
      },
    ],
    [
      0,
      {
        [_eQN]: `AddressFamily`,
        [_xN]: _aF,
      },
    ],
    [
      1,
      {
        [_eQN]: `AllocationMinNetmaskLength`,
        [_xN]: _aMNL,
      },
    ],
    [
      1,
      {
        [_eQN]: `AllocationMaxNetmaskLength`,
        [_xN]: _aMNLl,
      },
    ],
    [
      1,
      {
        [_eQN]: `AllocationDefaultNetmaskLength`,
        [_xN]: _aDNL,
      },
    ],
    [
      () => IpamResourceTagList,
      {
        [_eQN]: `AllocationResourceTagSet`,
        [_xN]: _aRTS,
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
        [_eQN]: `AwsService`,
        [_xN]: _aSw,
      },
    ],
    [
      0,
      {
        [_eQN]: `PublicIpSource`,
        [_xN]: _pIS,
      },
    ],
    [
      () => IpamPoolSourceResource,
      {
        [_eQN]: `SourceResource`,
        [_xN]: _sRo,
      },
    ],
  ]
);
export var IpamPoolSourceResource = struct(
  n0,
  _IPSR,
  0,
  [_RIes, _RTe, _RR, _ROe],
  [
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
export var IpamPoolSourceResourceRequest = struct(n0, _IPSRR, 0, [_RIes, _RTe, _RR, _ROe], [0, 0, 0, 0]);
export var IpamScope = struct(
  n0,
  _ISp,
  0,
  [_OI, _ISI, _ISA, _IApa, _IRp, _ISTp, _IDs, _De, _PCo, _St, _T],
  [
    [
      0,
      {
        [_eQN]: `OwnerId`,
        [_xN]: _oI,
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
        [_eQN]: `IpamScopeArn`,
        [_xN]: _iSA,
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
        [_eQN]: `IpamScopeType`,
        [_xN]: _iST,
      },
    ],
    [
      2,
      {
        [_eQN]: `IsDefault`,
        [_xN]: _iDs,
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
      1,
      {
        [_eQN]: `PoolCount`,
        [_xN]: _pCo,
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
      () => TagList,
      {
        [_eQN]: `TagSet`,
        [_xN]: _tS,
      },
    ],
  ]
);
export var ModifyIpamPoolRequest = struct(
  n0,
  _MIPRod,
  0,
  [_DR, _IPI, _De, _AIu, _AMNL, _AMNLl, _ADNL, _CADNL, _AART, _RART],
  [
    2,
    0,
    0,
    2,
    1,
    1,
    1,
    2,
    [
      () => RequestIpamResourceTagList,
      {
        [_xN]: _AARTd,
      },
    ],
    [
      () => RequestIpamResourceTagList,
      {
        [_xN]: _RARTe,
      },
    ],
  ]
);
export var ModifyIpamPoolResult = struct(
  n0,
  _MIPRodi,
  0,
  [_IPpa],
  [
    [
      () => IpamPool,
      {
        [_eQN]: `IpamPool`,
        [_xN]: _iPpa,
      },
    ],
  ]
);
export var ModifyIpamScopeRequest = struct(n0, _MISR, 0, [_DR, _ISI, _De], [2, 0, 0]);
export var ModifyIpamScopeResult = struct(
  n0,
  _MISRo,
  0,
  [_ISp],
  [
    [
      () => IpamScope,
      {
        [_eQN]: `IpamScope`,
        [_xN]: _iSp,
      },
    ],
  ]
);
export var RequestIpamResourceTagList = list(n0, _RIRTL, 0, [
  () => RequestIpamResourceTag,
  {
    [_xN]: _it,
  },
]);
export var CreateIpamPool = op(
  n0,
  _CIP,
  0,
  () => CreateIpamPoolRequest,
  () => CreateIpamPoolResult
);
export var CreateIpamScope = op(
  n0,
  _CIS,
  0,
  () => CreateIpamScopeRequest,
  () => CreateIpamScopeResult
);
export var DeleteIpamPool = op(
  n0,
  _DIP,
  0,
  () => DeleteIpamPoolRequest,
  () => DeleteIpamPoolResult
);
export var DeleteIpamScope = op(
  n0,
  _DISe,
  0,
  () => DeleteIpamScopeRequest,
  () => DeleteIpamScopeResult
);
export var ModifyIpamPool = op(
  n0,
  _MIPo,
  0,
  () => ModifyIpamPoolRequest,
  () => ModifyIpamPoolResult
);
export var ModifyIpamScope = op(
  n0,
  _MIS,
  0,
  () => ModifyIpamScopeRequest,
  () => ModifyIpamScopeResult
);
