// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _AAId,
  _aAId,
  _ad,
  _aIc,
  _AIcc,
  _AOI,
  _aOI,
  _ARd,
  _aRd,
  _ASs,
  _aSs,
  _aTd,
  _ATdd,
  _AZI,
  _aZI,
  _Co,
  _co,
  _DIERVTe,
  _DIERVTRes,
  _DIERVTResc,
  _DIescr,
  _DIPe,
  _DIPRes,
  _DIPResc,
  _DIRDA,
  _DIRDAR,
  _DIRDARe,
  _DIRDe,
  _DIRDRes,
  _DIRDResc,
  _DIRescrib,
  _DIRescribe,
  _DISesc,
  _DISRescr,
  _DISRescri,
  _DR,
  _DRi,
  _dRi,
  _eQN,
  _ETi,
  _eTSi,
  _Fi,
  _Fil,
  _FR,
  _fR,
  _GIDA,
  _GIDAR,
  _GIDARe,
  _GIDPA,
  _GIDPAR,
  _GIDPARe,
  _GIDRC,
  _GIDRCR,
  _GIDRCRe,
  _GIPC,
  _GIPCR,
  _GIPCRe,
  _GIr,
  _gIr,
  _GIRC,
  _GIRCR,
  _GIRCRe,
  _GN,
  _gN,
  _IDA,
  _IDAp,
  _IDAS,
  _iDAS,
  _IDFR,
  _IDPA,
  _IDPAp,
  _IDPAS,
  _iDPAS,
  _IDRC,
  _IDRCp,
  _IDRCS,
  _iDRCS,
  _IERVTI,
  _IERVTIp,
  _IERVTp,
  _IERVTS,
  _iERVTS,
  _II,
  _iI,
  _IIp,
  _IIpa,
  _Ipa,
  _IPASG,
  _IPASGL,
  _IPAT,
  _IPATL,
  _IPATp,
  _IPCpam,
  _IPCS,
  _iPCS,
  _IPI,
  _IPIp,
  _IPpam,
  _iPS,
  _IPSpa,
  _IRC,
  _IRCS,
  _iRCS,
  _IRDAI,
  _IRDAIp,
  _IRDAp,
  _IRDAS,
  _iRDAS,
  _IRDI,
  _iRDI,
  _IRDIp,
  _IRDp,
  _IRDS,
  _iRDS,
  _ISI,
  _ISIp,
  _ISpa,
  _iSpa,
  _ISpam,
  _ISpo,
  _iSpo,
  _ISSp,
  _iSSp,
  _it,
  _iU,
  _IUp,
  _K,
  _k,
  _LADT,
  _lADT,
  _LSDT,
  _lSDT,
  _Me,
  _me,
  _MR,
  _NBG,
  _nBG,
  _NIASet,
  _nIASet,
  _NID,
  _nID,
  _NII,
  _nII,
  _NTe,
  _nTe,
  _OST,
  _oST,
  _OUI,
  _oUI,
  _PIPI,
  _pIPI,
  _RCe,
  _rCe,
  _rIe,
  _RIes,
  _ROe,
  _ROI,
  _rOI,
  _RR,
  _rR,
  _RTe,
  _rTe,
  _RTeso,
  _RTesou,
  _rTSes,
  _Se,
  _se,
  _SG,
  _sGS,
  _SIu,
  _sIu,
  _sRe,
  _SRer,
  _sTa,
  _STam,
  _T,
  _tag,
  _V,
  _v,
  _VI,
  _vI,
  _xN,
  FilterList,
  n0,
  ValueStringList,
} from "./schemas_0";
import { IpamPoolCidr } from "./schemas_38_Ipam";
import { IpamPool, IpamScope } from "./schemas_41_Ipam";
import { IpamResourceCidr, IpamResourceTagList, RequestIpamResourceTag } from "./schemas_114_Ipam";
import { IpamExternalResourceVerificationToken } from "./schemas_128_Ipam";
import { IpamResourceDiscoveryAssociation } from "./schemas_151_Ipam";
import { Ipam, IpamResourceDiscovery } from "./schemas_171_Ipam";

/* eslint no-var: 0 */

export var DescribeIpamExternalResourceVerificationTokensRequest = struct(
  n0,
  _DIERVTRes,
  0,
  [_DR, _Fi, _NTe, _MR, _IERVTIp],
  [
    2,
    [
      () => FilterList,
      {
        [_xN]: _Fil,
      },
    ],
    0,
    1,
    [
      () => ValueStringList,
      {
        [_xN]: _IERVTI,
      },
    ],
  ]
);
export var DescribeIpamExternalResourceVerificationTokensResult = struct(
  n0,
  _DIERVTResc,
  0,
  [_NTe, _IERVTp],
  [
    [
      0,
      {
        [_eQN]: `NextToken`,
        [_xN]: _nTe,
      },
    ],
    [
      () => IpamExternalResourceVerificationTokenSet,
      {
        [_eQN]: `IpamExternalResourceVerificationTokenSet`,
        [_xN]: _iERVTS,
      },
    ],
  ]
);
export var DescribeIpamPoolsRequest = struct(
  n0,
  _DIPRes,
  0,
  [_DR, _Fi, _MR, _NTe, _IPIp],
  [
    2,
    [
      () => FilterList,
      {
        [_xN]: _Fil,
      },
    ],
    1,
    0,
    [
      () => ValueStringList,
      {
        [_xN]: _IPI,
      },
    ],
  ]
);
export var DescribeIpamPoolsResult = struct(
  n0,
  _DIPResc,
  0,
  [_NTe, _IPpam],
  [
    [
      0,
      {
        [_eQN]: `NextToken`,
        [_xN]: _nTe,
      },
    ],
    [
      () => IpamPoolSet,
      {
        [_eQN]: `IpamPoolSet`,
        [_xN]: _iPS,
      },
    ],
  ]
);
export var DescribeIpamResourceDiscoveriesRequest = struct(
  n0,
  _DIRDRes,
  0,
  [_DR, _IRDIp, _NTe, _MR, _Fi],
  [
    2,
    [
      () => ValueStringList,
      {
        [_xN]: _IRDI,
      },
    ],
    0,
    1,
    [
      () => FilterList,
      {
        [_xN]: _Fil,
      },
    ],
  ]
);
export var DescribeIpamResourceDiscoveriesResult = struct(
  n0,
  _DIRDResc,
  0,
  [_IRDp, _NTe],
  [
    [
      () => IpamResourceDiscoverySet,
      {
        [_eQN]: `IpamResourceDiscoverySet`,
        [_xN]: _iRDS,
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
export var DescribeIpamResourceDiscoveryAssociationsRequest = struct(
  n0,
  _DIRDAR,
  0,
  [_DR, _IRDAI, _NTe, _MR, _Fi],
  [
    2,
    [
      () => ValueStringList,
      {
        [_xN]: _IRDAIp,
      },
    ],
    0,
    1,
    [
      () => FilterList,
      {
        [_xN]: _Fil,
      },
    ],
  ]
);
export var DescribeIpamResourceDiscoveryAssociationsResult = struct(
  n0,
  _DIRDARe,
  0,
  [_IRDAp, _NTe],
  [
    [
      () => IpamResourceDiscoveryAssociationSet,
      {
        [_eQN]: `IpamResourceDiscoveryAssociationSet`,
        [_xN]: _iRDAS,
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
export var DescribeIpamScopesRequest = struct(
  n0,
  _DISRescr,
  0,
  [_DR, _Fi, _MR, _NTe, _ISIp],
  [
    2,
    [
      () => FilterList,
      {
        [_xN]: _Fil,
      },
    ],
    1,
    0,
    [
      () => ValueStringList,
      {
        [_xN]: _ISI,
      },
    ],
  ]
);
export var DescribeIpamScopesResult = struct(
  n0,
  _DISRescri,
  0,
  [_NTe, _ISpa],
  [
    [
      0,
      {
        [_eQN]: `NextToken`,
        [_xN]: _nTe,
      },
    ],
    [
      () => IpamScopeSet,
      {
        [_eQN]: `IpamScopeSet`,
        [_xN]: _iSSp,
      },
    ],
  ]
);
export var DescribeIpamsRequest = struct(
  n0,
  _DIRescrib,
  0,
  [_DR, _Fi, _MR, _NTe, _IIpa],
  [
    2,
    [
      () => FilterList,
      {
        [_xN]: _Fil,
      },
    ],
    1,
    0,
    [
      () => ValueStringList,
      {
        [_xN]: _IIp,
      },
    ],
  ]
);
export var DescribeIpamsResult = struct(
  n0,
  _DIRescribe,
  0,
  [_NTe, _Ipa],
  [
    [
      0,
      {
        [_eQN]: `NextToken`,
        [_xN]: _nTe,
      },
    ],
    [
      () => IpamSet,
      {
        [_eQN]: `IpamSet`,
        [_xN]: _iSpa,
      },
    ],
  ]
);
export var GetIpamDiscoveredAccountsRequest = struct(
  n0,
  _GIDAR,
  0,
  [_DR, _IRDI, _DRi, _Fi, _NTe, _MR],
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
    0,
    1,
  ]
);
export var GetIpamDiscoveredAccountsResult = struct(
  n0,
  _GIDARe,
  0,
  [_IDA, _NTe],
  [
    [
      () => IpamDiscoveredAccountSet,
      {
        [_eQN]: `IpamDiscoveredAccountSet`,
        [_xN]: _iDAS,
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
export var GetIpamDiscoveredPublicAddressesRequest = struct(
  n0,
  _GIDPAR,
  0,
  [_DR, _IRDI, _ARd, _Fi, _NTe, _MR],
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
    0,
    1,
  ]
);
export var GetIpamDiscoveredPublicAddressesResult = struct(
  n0,
  _GIDPARe,
  0,
  [_IDPA, _OST, _NTe],
  [
    [
      () => IpamDiscoveredPublicAddressSet,
      {
        [_eQN]: `IpamDiscoveredPublicAddressSet`,
        [_xN]: _iDPAS,
      },
    ],
    [
      4,
      {
        [_eQN]: `OldestSampleTime`,
        [_xN]: _oST,
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
export var GetIpamDiscoveredResourceCidrsRequest = struct(
  n0,
  _GIDRCR,
  0,
  [_DR, _IRDI, _RR, _Fi, _NTe, _MR],
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
    0,
    1,
  ]
);
export var GetIpamDiscoveredResourceCidrsResult = struct(
  n0,
  _GIDRCRe,
  0,
  [_IDRC, _NTe],
  [
    [
      () => IpamDiscoveredResourceCidrSet,
      {
        [_eQN]: `IpamDiscoveredResourceCidrSet`,
        [_xN]: _iDRCS,
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
export var GetIpamPoolCidrsRequest = struct(
  n0,
  _GIPCR,
  0,
  [_DR, _IPI, _Fi, _MR, _NTe],
  [
    2,
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
export var GetIpamPoolCidrsResult = struct(
  n0,
  _GIPCRe,
  0,
  [_IPCpam, _NTe],
  [
    [
      () => IpamPoolCidrSet,
      {
        [_eQN]: `IpamPoolCidrSet`,
        [_xN]: _iPCS,
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
export var GetIpamResourceCidrsRequest = struct(
  n0,
  _GIRCR,
  0,
  [_DR, _Fi, _MR, _NTe, _ISI, _IPI, _RIes, _RTe, _RTeso, _ROe],
  [
    2,
    [
      () => FilterList,
      {
        [_xN]: _Fil,
      },
    ],
    1,
    0,
    0,
    0,
    0,
    0,
    () => RequestIpamResourceTag,
    0,
  ]
);
export var GetIpamResourceCidrsResult = struct(
  n0,
  _GIRCRe,
  0,
  [_NTe, _IRC],
  [
    [
      0,
      {
        [_eQN]: `NextToken`,
        [_xN]: _nTe,
      },
    ],
    [
      () => IpamResourceCidrSet,
      {
        [_eQN]: `IpamResourceCidrSet`,
        [_xN]: _iRCS,
      },
    ],
  ]
);
export var IpamDiscoveredAccount = struct(
  n0,
  _IDAp,
  0,
  [_AIcc, _DRi, _FR, _LADT, _LSDT, _OUI],
  [
    [
      0,
      {
        [_eQN]: `AccountId`,
        [_xN]: _aIc,
      },
    ],
    [
      0,
      {
        [_eQN]: `DiscoveryRegion`,
        [_xN]: _dRi,
      },
    ],
    [
      () => IpamDiscoveryFailureReason,
      {
        [_eQN]: `FailureReason`,
        [_xN]: _fR,
      },
    ],
    [
      4,
      {
        [_eQN]: `LastAttemptedDiscoveryTime`,
        [_xN]: _lADT,
      },
    ],
    [
      4,
      {
        [_eQN]: `LastSuccessfulDiscoveryTime`,
        [_xN]: _lSDT,
      },
    ],
    [
      0,
      {
        [_eQN]: `OrganizationalUnitId`,
        [_xN]: _oUI,
      },
    ],
  ]
);
export var IpamDiscoveredPublicAddress = struct(
  n0,
  _IDPAp,
  0,
  [_IRDI, _ARd, _A, _AOI, _AAId, _ASs, _ATdd, _Se, _SRer, _VI, _SIu, _PIPI, _NII, _NID, _II, _T, _NBG, _SG, _STam],
  [
    [
      0,
      {
        [_eQN]: `IpamResourceDiscoveryId`,
        [_xN]: _iRDI,
      },
    ],
    [
      0,
      {
        [_eQN]: `AddressRegion`,
        [_xN]: _aRd,
      },
    ],
    [
      0,
      {
        [_eQN]: `Address`,
        [_xN]: _ad,
      },
    ],
    [
      0,
      {
        [_eQN]: `AddressOwnerId`,
        [_xN]: _aOI,
      },
    ],
    [
      0,
      {
        [_eQN]: `AddressAllocationId`,
        [_xN]: _aAId,
      },
    ],
    [
      0,
      {
        [_eQN]: `AssociationStatus`,
        [_xN]: _aSs,
      },
    ],
    [
      0,
      {
        [_eQN]: `AddressType`,
        [_xN]: _aTd,
      },
    ],
    [
      0,
      {
        [_eQN]: `Service`,
        [_xN]: _se,
      },
    ],
    [
      0,
      {
        [_eQN]: `ServiceResource`,
        [_xN]: _sRe,
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
        [_eQN]: `SubnetId`,
        [_xN]: _sIu,
      },
    ],
    [
      0,
      {
        [_eQN]: `PublicIpv4PoolId`,
        [_xN]: _pIPI,
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
      0,
      {
        [_eQN]: `NetworkInterfaceDescription`,
        [_xN]: _nID,
      },
    ],
    [
      0,
      {
        [_eQN]: `InstanceId`,
        [_xN]: _iI,
      },
    ],
    [
      () => IpamPublicAddressTags,
      {
        [_eQN]: `Tags`,
        [_xN]: _tag,
      },
    ],
    [
      0,
      {
        [_eQN]: `NetworkBorderGroup`,
        [_xN]: _nBG,
      },
    ],
    [
      () => IpamPublicAddressSecurityGroupList,
      {
        [_eQN]: `SecurityGroupSet`,
        [_xN]: _sGS,
      },
    ],
    [
      4,
      {
        [_eQN]: `SampleTime`,
        [_xN]: _sTa,
      },
    ],
  ]
);
export var IpamDiscoveredResourceCidr = struct(
  n0,
  _IDRCp,
  0,
  [_IRDI, _RR, _RIes, _ROI, _RCe, _ISpo, _RTe, _RTesou, _IUp, _VI, _SIu, _NIASet, _STam, _AZI],
  [
    [
      0,
      {
        [_eQN]: `IpamResourceDiscoveryId`,
        [_xN]: _iRDI,
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
        [_eQN]: `ResourceId`,
        [_xN]: _rIe,
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
        [_eQN]: `ResourceCidr`,
        [_xN]: _rCe,
      },
    ],
    [
      0,
      {
        [_eQN]: `IpSource`,
        [_xN]: _iSpo,
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
        [_eQN]: `VpcId`,
        [_xN]: _vI,
      },
    ],
    [
      0,
      {
        [_eQN]: `SubnetId`,
        [_xN]: _sIu,
      },
    ],
    [
      0,
      {
        [_eQN]: `NetworkInterfaceAttachmentStatus`,
        [_xN]: _nIASet,
      },
    ],
    [
      4,
      {
        [_eQN]: `SampleTime`,
        [_xN]: _sTa,
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
export var IpamDiscoveryFailureReason = struct(
  n0,
  _IDFR,
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
export var IpamPublicAddressSecurityGroup = struct(
  n0,
  _IPASG,
  0,
  [_GN, _GIr],
  [
    [
      0,
      {
        [_eQN]: `GroupName`,
        [_xN]: _gN,
      },
    ],
    [
      0,
      {
        [_eQN]: `GroupId`,
        [_xN]: _gIr,
      },
    ],
  ]
);
export var IpamPublicAddressTag = struct(
  n0,
  _IPAT,
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
export var IpamPublicAddressTags = struct(
  n0,
  _IPATp,
  0,
  [_ETi],
  [
    [
      () => IpamPublicAddressTagList,
      {
        [_eQN]: `EipTagSet`,
        [_xN]: _eTSi,
      },
    ],
  ]
);
export var IpamDiscoveredAccountSet = list(n0, _IDAS, 0, [
  () => IpamDiscoveredAccount,
  {
    [_xN]: _it,
  },
]);
export var IpamDiscoveredPublicAddressSet = list(n0, _IDPAS, 0, [
  () => IpamDiscoveredPublicAddress,
  {
    [_xN]: _it,
  },
]);
export var IpamDiscoveredResourceCidrSet = list(n0, _IDRCS, 0, [
  () => IpamDiscoveredResourceCidr,
  {
    [_xN]: _it,
  },
]);
export var IpamExternalResourceVerificationTokenSet = list(n0, _IERVTS, 0, [
  () => IpamExternalResourceVerificationToken,
  {
    [_xN]: _it,
  },
]);
export var IpamPoolCidrSet = list(n0, _IPCS, 0, [
  () => IpamPoolCidr,
  {
    [_xN]: _it,
  },
]);
export var IpamPoolSet = list(n0, _IPSpa, 0, [
  () => IpamPool,
  {
    [_xN]: _it,
  },
]);
export var IpamPublicAddressSecurityGroupList = list(n0, _IPASGL, 0, [
  () => IpamPublicAddressSecurityGroup,
  {
    [_xN]: _it,
  },
]);
export var IpamPublicAddressTagList = list(n0, _IPATL, 0, [
  () => IpamPublicAddressTag,
  {
    [_xN]: _it,
  },
]);
export var IpamResourceCidrSet = list(n0, _IRCS, 0, [
  () => IpamResourceCidr,
  {
    [_xN]: _it,
  },
]);
export var IpamResourceDiscoveryAssociationSet = list(n0, _IRDAS, 0, [
  () => IpamResourceDiscoveryAssociation,
  {
    [_xN]: _it,
  },
]);
export var IpamResourceDiscoverySet = list(n0, _IRDS, 0, [
  () => IpamResourceDiscovery,
  {
    [_xN]: _it,
  },
]);
export var IpamScopeSet = list(n0, _ISSp, 0, [
  () => IpamScope,
  {
    [_xN]: _it,
  },
]);
export var IpamSet = list(n0, _ISpam, 0, [
  () => Ipam,
  {
    [_xN]: _it,
  },
]);
export var DescribeIpamExternalResourceVerificationTokens = op(
  n0,
  _DIERVTe,
  0,
  () => DescribeIpamExternalResourceVerificationTokensRequest,
  () => DescribeIpamExternalResourceVerificationTokensResult
);
export var DescribeIpamPools = op(
  n0,
  _DIPe,
  0,
  () => DescribeIpamPoolsRequest,
  () => DescribeIpamPoolsResult
);
export var DescribeIpamResourceDiscoveries = op(
  n0,
  _DIRDe,
  0,
  () => DescribeIpamResourceDiscoveriesRequest,
  () => DescribeIpamResourceDiscoveriesResult
);
export var DescribeIpamResourceDiscoveryAssociations = op(
  n0,
  _DIRDA,
  0,
  () => DescribeIpamResourceDiscoveryAssociationsRequest,
  () => DescribeIpamResourceDiscoveryAssociationsResult
);
export var DescribeIpams = op(
  n0,
  _DIescr,
  0,
  () => DescribeIpamsRequest,
  () => DescribeIpamsResult
);
export var DescribeIpamScopes = op(
  n0,
  _DISesc,
  0,
  () => DescribeIpamScopesRequest,
  () => DescribeIpamScopesResult
);
export var GetIpamDiscoveredAccounts = op(
  n0,
  _GIDA,
  0,
  () => GetIpamDiscoveredAccountsRequest,
  () => GetIpamDiscoveredAccountsResult
);
export var GetIpamDiscoveredPublicAddresses = op(
  n0,
  _GIDPA,
  0,
  () => GetIpamDiscoveredPublicAddressesRequest,
  () => GetIpamDiscoveredPublicAddressesResult
);
export var GetIpamDiscoveredResourceCidrs = op(
  n0,
  _GIDRC,
  0,
  () => GetIpamDiscoveredResourceCidrsRequest,
  () => GetIpamDiscoveredResourceCidrsResult
);
export var GetIpamPoolCidrs = op(
  n0,
  _GIPC,
  0,
  () => GetIpamPoolCidrsRequest,
  () => GetIpamPoolCidrsResult
);
export var GetIpamResourceCidrs = op(
  n0,
  _GIRC,
  0,
  () => GetIpamResourceCidrsRequest,
  () => GetIpamResourceCidrsResult
);
