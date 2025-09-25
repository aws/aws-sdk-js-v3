// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _AAdd,
  _AAddi,
  _AARn,
  _aASd,
  _Ac,
  _ac,
  _ACL,
  _ACn,
  _AD,
  _ad,
  _ADd,
  _Add,
  _ADL,
  _aDS,
  _ADT,
  _aDT,
  _AET,
  _aIt,
  _AItt,
  _ALBL,
  _ALBT,
  _ALr,
  _APH,
  _APHL,
  _APHl,
  _APHn,
  _aPHS,
  _Ar,
  _ar,
  _aRc,
  _ARcl,
  _ARTR,
  _As,
  _aSd,
  _ASGR,
  _aSss,
  _AST,
  _aTtt,
  _ATtta,
  _AZ,
  _aZ,
  _AZI,
  _aZI,
  _aZIS,
  _AZIv,
  _aZS,
  _AZv,
  _C,
  _c,
  _CA,
  _cA,
  _CAo,
  _cAo,
  _CB,
  _cB,
  _CGI,
  _cGI,
  _CGu,
  _cGu,
  _Ci,
  _ci,
  _Cid,
  _CIo,
  _cIo,
  _CLBL,
  _cLBL,
  _CNA,
  _cNA,
  _CNAE,
  _CNAER,
  _CNAR,
  _CNAr,
  _CNARr,
  _Co,
  _co,
  _CRo,
  _cRo,
  _cS,
  _CT,
  _cT,
  _D,
  _d,
  _DA,
  _dAS,
  _dC,
  _DCe,
  _def,
  _Des,
  _Di,
  _di,
  _DNAe,
  _DNARe,
  _DNARes,
  _DNIAe,
  _DNIARes,
  _DNIAResc,
  _DPes,
  _DPLI,
  _dPLI,
  _DPR,
  _dPRS,
  _dPS,
  _DR,
  _dR,
  _dSe,
  _DV,
  _dV,
  _E,
  _e,
  _ECx,
  _eCx,
  _EL,
  _ELBL,
  _eLBL,
  _Ent,
  _EOIGI,
  _eOIGI,
  _eQN,
  _eSnt,
  _eSx,
  _Ex,
  _Exp,
  _Fi,
  _FIAi,
  _FIAil,
  _fIAS,
  _Fil,
  _FOA,
  _FOAi,
  _fOAS,
  _FPC,
  _fPCS,
  _Fr,
  _fr,
  _fSR,
  _FSRi,
  _fSRi,
  _FSRir,
  _GI,
  _gI,
  _I,
  _i,
  _IAL,
  _Ic,
  _ICB,
  _iCB,
  _IDs,
  _IG,
  _iG,
  _IHn,
  _iHn,
  _II,
  _iI,
  _In,
  _in,
  _IP,
  _iP,
  _IRT,
  _iRT,
  _it,
  _ITC,
  _iTC,
  _Key,
  _key,
  _LB,
  _lBA,
  _LBAo,
  _LBLP,
  _lBLP,
  _LBP,
  _lBP,
  _lBS,
  _LBT,
  _lBT,
  _LBTG,
  _lBTG,
  _LBTGo,
  _lBTGS,
  _LBTP,
  _lBTP,
  _LGI,
  _lGI,
  _mC,
  _MCi,
  _MR,
  _N,
  _n,
  _NA,
  _nA,
  _NAA,
  _NAAI,
  _nAAI,
  _NAAL,
  _NAE,
  _NAe,
  _NAEL,
  _NAI,
  _nAI,
  _NAIe,
  _NAISL,
  _NAL,
  _nAS,
  _NG,
  _nG,
  _NGI,
  _nGI,
  _NIA,
  _nIA,
  _NIAA,
  _nIAA,
  _NIAe,
  _NIAI,
  _nIAI,
  _NIAIe,
  _NIAIL,
  _NIAL,
  _nIASe,
  _NIe,
  _nIe,
  _NII,
  _nII,
  _NIPI,
  _nIPI,
  _NPF,
  _nPF,
  _NTe,
  _nTe,
  _O,
  _o,
  _OH,
  _oH,
  _OI,
  _oI,
  _PCat,
  _PCL,
  _PF,
  _pF,
  _PIL,
  _PL,
  _pL,
  _PLI,
  _pLI,
  _Po,
  _po,
  _Pr,
  _pr,
  _pri,
  _Prio,
  _PRL,
  _PRo,
  _pRo,
  _PRor,
  _Prot,
  _pRS,
  _pSro,
  _RA,
  _rA,
  _RGA,
  _rGA,
  _RGROP,
  _RGROPL,
  _rGROPS,
  _RGROPu,
  _RGT,
  _rGT,
  _RGTP,
  _RGTPL,
  _rGTPS,
  _RGTPu,
  _rIe,
  _RIes,
  _rN,
  _RNAE,
  _RNAER,
  _RNu,
  _RO,
  _ROL,
  _ROo,
  _rOo,
  _rOS,
  _ROu,
  _RPC,
  _rPCS,
  _RTe,
  _rTe,
  _RTo,
  _rTo,
  _RTR,
  _rTR,
  _SA,
  _sAS,
  _sASu,
  _SAu,
  _SD,
  _sD,
  _Set,
  _SG,
  _sG,
  _SGe,
  _SGI,
  _sGI,
  _sGR,
  _SGRe,
  _sGS,
  _SIu,
  _sIu,
  _SLtr,
  _SMt,
  _sMt,
  _SN,
  _sN,
  _sNe,
  _SNeq,
  _SNIA,
  _SNIAR,
  _SNIARt,
  _So,
  _SPo,
  _SPR,
  _sPRS,
  _sPS,
  _SRT,
  _sRT,
  _sSe,
  _sSo,
  _St,
  _st,
  _Sta,
  _sta,
  _Su,
  _su,
  _sV,
  _SVo,
  _T,
  _TG,
  _tG,
  _tGAr,
  _TGAra,
  _TGI,
  _tGI,
  _TGRT,
  _tGRT,
  _TGRTR,
  _tGRTR,
  _To,
  _to,
  _TS,
  _tS,
  _TSa,
  _Ty,
  _ty,
  _VC,
  _vC,
  _VE,
  _vE,
  _VES,
  _vES,
  _VG,
  _vG,
  _VI,
  _vI,
  _Vp,
  _vp,
  _VPC,
  _vPC,
  _VPCI,
  _vPCI,
  _WM,
  _wM,
  _xN,
  FilterList,
  n0,
  TagList,
  TagSpecificationList,
  Unit,
  ValueStringList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AdditionalDetail = struct(
  n0,
  _AD,
  0,
  [_ADT, _C, _VES, _RO, _RGTP, _RGROP, _SN, _LB],
  [
    [
      0,
      {
        [_eQN]: `AdditionalDetailType`,
        [_xN]: _aDT,
      },
    ],
    [
      () => AnalysisComponent,
      {
        [_eQN]: `Component`,
        [_xN]: _c,
      },
    ],
    [
      () => AnalysisComponent,
      {
        [_eQN]: `VpcEndpointService`,
        [_xN]: _vES,
      },
    ],
    [
      () => RuleOptionList,
      {
        [_eQN]: `RuleOptionSet`,
        [_xN]: _rOS,
      },
    ],
    [
      () => RuleGroupTypePairList,
      {
        [_eQN]: `RuleGroupTypePairSet`,
        [_xN]: _rGTPS,
      },
    ],
    [
      () => RuleGroupRuleOptionsPairList,
      {
        [_eQN]: `RuleGroupRuleOptionsPairSet`,
        [_xN]: _rGROPS,
      },
    ],
    [
      0,
      {
        [_eQN]: `ServiceName`,
        [_xN]: _sN,
      },
    ],
    [
      () => AnalysisComponentList,
      {
        [_eQN]: `LoadBalancerSet`,
        [_xN]: _lBS,
      },
    ],
  ]
);
export var AlternatePathHint = struct(
  n0,
  _APH,
  0,
  [_CIo, _CA],
  [
    [
      0,
      {
        [_eQN]: `ComponentId`,
        [_xN]: _cIo,
      },
    ],
    [
      0,
      {
        [_eQN]: `ComponentArn`,
        [_xN]: _cA,
      },
    ],
  ]
);
export var AnalysisAclRule = struct(
  n0,
  _AARn,
  0,
  [_Ci, _E, _PRo, _Pr, _RA, _RNu],
  [
    [
      0,
      {
        [_eQN]: `Cidr`,
        [_xN]: _ci,
      },
    ],
    [
      2,
      {
        [_eQN]: `Egress`,
        [_xN]: _e,
      },
    ],
    [
      () => PortRange,
      {
        [_eQN]: `PortRange`,
        [_xN]: _pRo,
      },
    ],
    [
      0,
      {
        [_eQN]: `Protocol`,
        [_xN]: _pr,
      },
    ],
    [
      0,
      {
        [_eQN]: `RuleAction`,
        [_xN]: _rA,
      },
    ],
    [
      1,
      {
        [_eQN]: `RuleNumber`,
        [_xN]: _rN,
      },
    ],
  ]
);
export var AnalysisComponent = struct(
  n0,
  _ACn,
  0,
  [_I, _Ar, _N],
  [
    [
      0,
      {
        [_eQN]: `Id`,
        [_xN]: _i,
      },
    ],
    [
      0,
      {
        [_eQN]: `Arn`,
        [_xN]: _ar,
      },
    ],
    [
      0,
      {
        [_eQN]: `Name`,
        [_xN]: _n,
      },
    ],
  ]
);
export var AnalysisLoadBalancerListener = struct(
  n0,
  _ALBL,
  0,
  [_LBP, _IP],
  [
    [
      1,
      {
        [_eQN]: `LoadBalancerPort`,
        [_xN]: _lBP,
      },
    ],
    [
      1,
      {
        [_eQN]: `InstancePort`,
        [_xN]: _iP,
      },
    ],
  ]
);
export var AnalysisLoadBalancerTarget = struct(
  n0,
  _ALBT,
  0,
  [_A, _AZ, _AZI, _In, _Po],
  [
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
        [_eQN]: `AvailabilityZone`,
        [_xN]: _aZ,
      },
    ],
    [
      0,
      {
        [_eQN]: `AvailabilityZoneId`,
        [_xN]: _aZI,
      },
    ],
    [
      () => AnalysisComponent,
      {
        [_eQN]: `Instance`,
        [_xN]: _in,
      },
    ],
    [
      1,
      {
        [_eQN]: `Port`,
        [_xN]: _po,
      },
    ],
  ]
);
export var AnalysisPacketHeader = struct(
  n0,
  _APHn,
  0,
  [_DA, _DPR, _Pr, _SA, _SPR],
  [
    [
      () => IpAddressList,
      {
        [_eQN]: `DestinationAddressSet`,
        [_xN]: _dAS,
      },
    ],
    [
      () => PortRangeList,
      {
        [_eQN]: `DestinationPortRangeSet`,
        [_xN]: _dPRS,
      },
    ],
    [
      0,
      {
        [_eQN]: `Protocol`,
        [_xN]: _pr,
      },
    ],
    [
      () => IpAddressList,
      {
        [_eQN]: `SourceAddressSet`,
        [_xN]: _sAS,
      },
    ],
    [
      () => PortRangeList,
      {
        [_eQN]: `SourcePortRangeSet`,
        [_xN]: _sPRS,
      },
    ],
  ]
);
export var AnalysisRouteTableRoute = struct(
  n0,
  _ARTR,
  0,
  [_DCe, _DPLI, _EOIGI, _GI, _II, _NGI, _NII, _O, _TGI, _VPCI, _St, _CGI, _CNA, _LGI],
  [
    [
      0,
      {
        [_eQN]: `DestinationCidr`,
        [_xN]: _dC,
      },
    ],
    [
      0,
      {
        [_eQN]: `DestinationPrefixListId`,
        [_xN]: _dPLI,
      },
    ],
    [
      0,
      {
        [_eQN]: `EgressOnlyInternetGatewayId`,
        [_xN]: _eOIGI,
      },
    ],
    [
      0,
      {
        [_eQN]: `GatewayId`,
        [_xN]: _gI,
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
      0,
      {
        [_eQN]: `NatGatewayId`,
        [_xN]: _nGI,
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
        [_eQN]: `Origin`,
        [_xN]: _o,
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
        [_eQN]: `VpcPeeringConnectionId`,
        [_xN]: _vPCI,
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
        [_eQN]: `CarrierGatewayId`,
        [_xN]: _cGI,
      },
    ],
    [
      0,
      {
        [_eQN]: `CoreNetworkArn`,
        [_xN]: _cNA,
      },
    ],
    [
      0,
      {
        [_eQN]: `LocalGatewayId`,
        [_xN]: _lGI,
      },
    ],
  ]
);
export var AnalysisSecurityGroupRule = struct(
  n0,
  _ASGR,
  0,
  [_Ci, _Di, _SGI, _PRo, _PLI, _Pr],
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
        [_eQN]: `Direction`,
        [_xN]: _di,
      },
    ],
    [
      0,
      {
        [_eQN]: `SecurityGroupId`,
        [_xN]: _sGI,
      },
    ],
    [
      () => PortRange,
      {
        [_eQN]: `PortRange`,
        [_xN]: _pRo,
      },
    ],
    [
      0,
      {
        [_eQN]: `PrefixListId`,
        [_xN]: _pLI,
      },
    ],
    [
      0,
      {
        [_eQN]: `Protocol`,
        [_xN]: _pr,
      },
    ],
  ]
);
export var CreateNetworkAclEntryRequest = struct(
  n0,
  _CNAER,
  0,
  [_DR, _NAI, _RNu, _Pr, _RA, _E, _CB, _ICB, _ITC, _PRo],
  [
    [
      2,
      {
        [_eQN]: `DryRun`,
        [_xN]: _dR,
      },
    ],
    [
      0,
      {
        [_eQN]: `NetworkAclId`,
        [_xN]: _nAI,
      },
    ],
    [
      1,
      {
        [_eQN]: `RuleNumber`,
        [_xN]: _rN,
      },
    ],
    [
      0,
      {
        [_eQN]: `Protocol`,
        [_xN]: _pr,
      },
    ],
    [
      0,
      {
        [_eQN]: `RuleAction`,
        [_xN]: _rA,
      },
    ],
    [
      2,
      {
        [_eQN]: `Egress`,
        [_xN]: _e,
      },
    ],
    [
      0,
      {
        [_eQN]: `CidrBlock`,
        [_xN]: _cB,
      },
    ],
    [
      0,
      {
        [_eQN]: `Ipv6CidrBlock`,
        [_xN]: _iCB,
      },
    ],
    [
      () => IcmpTypeCode,
      {
        [_xN]: _Ic,
      },
    ],
    [
      () => PortRange,
      {
        [_eQN]: `PortRange`,
        [_xN]: _pRo,
      },
    ],
  ]
);
export var CreateNetworkAclRequest = struct(
  n0,
  _CNAR,
  0,
  [_TS, _CT, _DR, _VI],
  [
    [
      () => TagSpecificationList,
      {
        [_xN]: _TSa,
      },
    ],
    [0, 4],
    [
      2,
      {
        [_eQN]: `DryRun`,
        [_xN]: _dR,
      },
    ],
    [
      0,
      {
        [_eQN]: `VpcId`,
        [_xN]: _vI,
      },
    ],
  ]
);
export var CreateNetworkAclResult = struct(
  n0,
  _CNARr,
  0,
  [_NA, _CT],
  [
    [
      () => NetworkAcl,
      {
        [_eQN]: `NetworkAcl`,
        [_xN]: _nA,
      },
    ],
    [
      0,
      {
        [_eQN]: `ClientToken`,
        [_xN]: _cT,
      },
    ],
  ]
);
export var DescribeNetworkAclsRequest = struct(
  n0,
  _DNARe,
  0,
  [_NTe, _MR, _DR, _NAIe, _Fi],
  [
    0,
    1,
    [
      2,
      {
        [_eQN]: `DryRun`,
        [_xN]: _dR,
      },
    ],
    [
      () => NetworkAclIdStringList,
      {
        [_xN]: _NAI,
      },
    ],
    [
      () => FilterList,
      {
        [_xN]: _Fil,
      },
    ],
  ]
);
export var DescribeNetworkAclsResult = struct(
  n0,
  _DNARes,
  0,
  [_NAe, _NTe],
  [
    [
      () => NetworkAclList,
      {
        [_eQN]: `NetworkAclSet`,
        [_xN]: _nAS,
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
export var DescribeNetworkInsightsAnalysesRequest = struct(
  n0,
  _DNIARes,
  0,
  [_NIAIe, _NIPI, _AST, _AET, _Fi, _MR, _DR, _NTe],
  [
    [
      () => NetworkInsightsAnalysisIdList,
      {
        [_xN]: _NIAI,
      },
    ],
    0,
    4,
    4,
    [
      () => FilterList,
      {
        [_xN]: _Fil,
      },
    ],
    1,
    2,
    0,
  ]
);
export var DescribeNetworkInsightsAnalysesResult = struct(
  n0,
  _DNIAResc,
  0,
  [_NIA, _NTe],
  [
    [
      () => NetworkInsightsAnalysisList,
      {
        [_eQN]: `NetworkInsightsAnalysisSet`,
        [_xN]: _nIASe,
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
export var Explanation = struct(
  n0,
  _Ex,
  0,
  [
    _Ac,
    _ARcl,
    _A,
    _Add,
    _ATtta,
    _AZv,
    _AZIv,
    _Cid,
    _C,
    _CGu,
    _D,
    _DV,
    _Di,
    _ECx,
    _IRT,
    _IG,
    _LBAo,
    _CLBL,
    _LBLP,
    _LBT,
    _LBTG,
    _LBTGo,
    _LBTP,
    _ELBL,
    _MCi,
    _NG,
    _NIe,
    _PF,
    _VPC,
    _Po,
    _PRor,
    _PL,
    _Prot,
    _RTR,
    _RTo,
    _SGe,
    _SGRe,
    _SG,
    _SVo,
    _St,
    _Su,
    _SRT,
    _Vp,
    _VE,
    _VC,
    _VG,
    _TG,
    _TGRT,
    _TGRTR,
    _TGAra,
    _CAo,
    _CRo,
    _FSRi,
    _FSRir,
  ],
  [
    [
      () => AnalysisComponent,
      {
        [_eQN]: `Acl`,
        [_xN]: _ac,
      },
    ],
    [
      () => AnalysisAclRule,
      {
        [_eQN]: `AclRule`,
        [_xN]: _aRc,
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
      () => IpAddressList,
      {
        [_eQN]: `AddressSet`,
        [_xN]: _aSd,
      },
    ],
    [
      () => AnalysisComponent,
      {
        [_eQN]: `AttachedTo`,
        [_xN]: _aTtt,
      },
    ],
    [
      () => ValueStringList,
      {
        [_eQN]: `AvailabilityZoneSet`,
        [_xN]: _aZS,
      },
    ],
    [
      () => ValueStringList,
      {
        [_eQN]: `AvailabilityZoneIdSet`,
        [_xN]: _aZIS,
      },
    ],
    [
      () => ValueStringList,
      {
        [_eQN]: `CidrSet`,
        [_xN]: _cS,
      },
    ],
    [
      () => AnalysisComponent,
      {
        [_eQN]: `Component`,
        [_xN]: _c,
      },
    ],
    [
      () => AnalysisComponent,
      {
        [_eQN]: `CustomerGateway`,
        [_xN]: _cGu,
      },
    ],
    [
      () => AnalysisComponent,
      {
        [_eQN]: `Destination`,
        [_xN]: _d,
      },
    ],
    [
      () => AnalysisComponent,
      {
        [_eQN]: `DestinationVpc`,
        [_xN]: _dV,
      },
    ],
    [
      0,
      {
        [_eQN]: `Direction`,
        [_xN]: _di,
      },
    ],
    [
      0,
      {
        [_eQN]: `ExplanationCode`,
        [_xN]: _eCx,
      },
    ],
    [
      () => AnalysisComponent,
      {
        [_eQN]: `IngressRouteTable`,
        [_xN]: _iRT,
      },
    ],
    [
      () => AnalysisComponent,
      {
        [_eQN]: `InternetGateway`,
        [_xN]: _iG,
      },
    ],
    [
      0,
      {
        [_eQN]: `LoadBalancerArn`,
        [_xN]: _lBA,
      },
    ],
    [
      () => AnalysisLoadBalancerListener,
      {
        [_eQN]: `ClassicLoadBalancerListener`,
        [_xN]: _cLBL,
      },
    ],
    [
      1,
      {
        [_eQN]: `LoadBalancerListenerPort`,
        [_xN]: _lBLP,
      },
    ],
    [
      () => AnalysisLoadBalancerTarget,
      {
        [_eQN]: `LoadBalancerTarget`,
        [_xN]: _lBT,
      },
    ],
    [
      () => AnalysisComponent,
      {
        [_eQN]: `LoadBalancerTargetGroup`,
        [_xN]: _lBTG,
      },
    ],
    [
      () => AnalysisComponentList,
      {
        [_eQN]: `LoadBalancerTargetGroupSet`,
        [_xN]: _lBTGS,
      },
    ],
    [
      1,
      {
        [_eQN]: `LoadBalancerTargetPort`,
        [_xN]: _lBTP,
      },
    ],
    [
      () => AnalysisComponent,
      {
        [_eQN]: `ElasticLoadBalancerListener`,
        [_xN]: _eLBL,
      },
    ],
    [
      0,
      {
        [_eQN]: `MissingComponent`,
        [_xN]: _mC,
      },
    ],
    [
      () => AnalysisComponent,
      {
        [_eQN]: `NatGateway`,
        [_xN]: _nG,
      },
    ],
    [
      () => AnalysisComponent,
      {
        [_eQN]: `NetworkInterface`,
        [_xN]: _nIe,
      },
    ],
    [
      0,
      {
        [_eQN]: `PacketField`,
        [_xN]: _pF,
      },
    ],
    [
      () => AnalysisComponent,
      {
        [_eQN]: `VpcPeeringConnection`,
        [_xN]: _vPC,
      },
    ],
    [
      1,
      {
        [_eQN]: `Port`,
        [_xN]: _po,
      },
    ],
    [
      () => PortRangeList,
      {
        [_eQN]: `PortRangeSet`,
        [_xN]: _pRS,
      },
    ],
    [
      () => AnalysisComponent,
      {
        [_eQN]: `PrefixList`,
        [_xN]: _pL,
      },
    ],
    [
      () => StringList,
      {
        [_eQN]: `ProtocolSet`,
        [_xN]: _pSro,
      },
    ],
    [
      () => AnalysisRouteTableRoute,
      {
        [_eQN]: `RouteTableRoute`,
        [_xN]: _rTR,
      },
    ],
    [
      () => AnalysisComponent,
      {
        [_eQN]: `RouteTable`,
        [_xN]: _rTo,
      },
    ],
    [
      () => AnalysisComponent,
      {
        [_eQN]: `SecurityGroup`,
        [_xN]: _sG,
      },
    ],
    [
      () => AnalysisSecurityGroupRule,
      {
        [_eQN]: `SecurityGroupRule`,
        [_xN]: _sGR,
      },
    ],
    [
      () => AnalysisComponentList,
      {
        [_eQN]: `SecurityGroupSet`,
        [_xN]: _sGS,
      },
    ],
    [
      () => AnalysisComponent,
      {
        [_eQN]: `SourceVpc`,
        [_xN]: _sV,
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
      () => AnalysisComponent,
      {
        [_eQN]: `Subnet`,
        [_xN]: _su,
      },
    ],
    [
      () => AnalysisComponent,
      {
        [_eQN]: `SubnetRouteTable`,
        [_xN]: _sRT,
      },
    ],
    [
      () => AnalysisComponent,
      {
        [_eQN]: `Vpc`,
        [_xN]: _vp,
      },
    ],
    [
      () => AnalysisComponent,
      {
        [_eQN]: `VpcEndpoint`,
        [_xN]: _vE,
      },
    ],
    [
      () => AnalysisComponent,
      {
        [_eQN]: `VpnConnection`,
        [_xN]: _vC,
      },
    ],
    [
      () => AnalysisComponent,
      {
        [_eQN]: `VpnGateway`,
        [_xN]: _vG,
      },
    ],
    [
      () => AnalysisComponent,
      {
        [_eQN]: `TransitGateway`,
        [_xN]: _tG,
      },
    ],
    [
      () => AnalysisComponent,
      {
        [_eQN]: `TransitGatewayRouteTable`,
        [_xN]: _tGRT,
      },
    ],
    [
      () => TransitGatewayRouteTableRoute,
      {
        [_eQN]: `TransitGatewayRouteTableRoute`,
        [_xN]: _tGRTR,
      },
    ],
    [
      () => AnalysisComponent,
      {
        [_eQN]: `TransitGatewayAttachment`,
        [_xN]: _tGAr,
      },
    ],
    [
      0,
      {
        [_eQN]: `ComponentAccount`,
        [_xN]: _cAo,
      },
    ],
    [
      0,
      {
        [_eQN]: `ComponentRegion`,
        [_xN]: _cRo,
      },
    ],
    [
      () => FirewallStatelessRule,
      {
        [_eQN]: `FirewallStatelessRule`,
        [_xN]: _fSR,
      },
    ],
    [
      () => FirewallStatefulRule,
      {
        [_eQN]: `FirewallStatefulRule`,
        [_xN]: _fSRi,
      },
    ],
  ]
);
export var FirewallStatefulRule = struct(
  n0,
  _FSRir,
  0,
  [_RGA, _So, _Des, _SPo, _DPes, _Pr, _RA, _Di],
  [
    [
      0,
      {
        [_eQN]: `RuleGroupArn`,
        [_xN]: _rGA,
      },
    ],
    [
      () => ValueStringList,
      {
        [_eQN]: `SourceSet`,
        [_xN]: _sSo,
      },
    ],
    [
      () => ValueStringList,
      {
        [_eQN]: `DestinationSet`,
        [_xN]: _dSe,
      },
    ],
    [
      () => PortRangeList,
      {
        [_eQN]: `SourcePortSet`,
        [_xN]: _sPS,
      },
    ],
    [
      () => PortRangeList,
      {
        [_eQN]: `DestinationPortSet`,
        [_xN]: _dPS,
      },
    ],
    [
      0,
      {
        [_eQN]: `Protocol`,
        [_xN]: _pr,
      },
    ],
    [
      0,
      {
        [_eQN]: `RuleAction`,
        [_xN]: _rA,
      },
    ],
    [
      0,
      {
        [_eQN]: `Direction`,
        [_xN]: _di,
      },
    ],
  ]
);
export var FirewallStatelessRule = struct(
  n0,
  _FSRi,
  0,
  [_RGA, _So, _Des, _SPo, _DPes, _Prot, _RA, _Prio],
  [
    [
      0,
      {
        [_eQN]: `RuleGroupArn`,
        [_xN]: _rGA,
      },
    ],
    [
      () => ValueStringList,
      {
        [_eQN]: `SourceSet`,
        [_xN]: _sSo,
      },
    ],
    [
      () => ValueStringList,
      {
        [_eQN]: `DestinationSet`,
        [_xN]: _dSe,
      },
    ],
    [
      () => PortRangeList,
      {
        [_eQN]: `SourcePortSet`,
        [_xN]: _sPS,
      },
    ],
    [
      () => PortRangeList,
      {
        [_eQN]: `DestinationPortSet`,
        [_xN]: _dPS,
      },
    ],
    [
      () => ProtocolIntList,
      {
        [_eQN]: `ProtocolSet`,
        [_xN]: _pSro,
      },
    ],
    [
      0,
      {
        [_eQN]: `RuleAction`,
        [_xN]: _rA,
      },
    ],
    [
      1,
      {
        [_eQN]: `Priority`,
        [_xN]: _pri,
      },
    ],
  ]
);
export var IcmpTypeCode = struct(
  n0,
  _ITC,
  0,
  [_Co, _Ty],
  [
    [
      1,
      {
        [_eQN]: `Code`,
        [_xN]: _co,
      },
    ],
    [
      1,
      {
        [_eQN]: `Type`,
        [_xN]: _ty,
      },
    ],
  ]
);
export var NetworkAcl = struct(
  n0,
  _NA,
  0,
  [_As, _Ent, _IDs, _NAI, _T, _VI, _OI],
  [
    [
      () => NetworkAclAssociationList,
      {
        [_eQN]: `AssociationSet`,
        [_xN]: _aSss,
      },
    ],
    [
      () => NetworkAclEntryList,
      {
        [_eQN]: `EntrySet`,
        [_xN]: _eSnt,
      },
    ],
    [
      2,
      {
        [_eQN]: `Default`,
        [_xN]: _def,
      },
    ],
    [
      0,
      {
        [_eQN]: `NetworkAclId`,
        [_xN]: _nAI,
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
        [_eQN]: `VpcId`,
        [_xN]: _vI,
      },
    ],
    [
      0,
      {
        [_eQN]: `OwnerId`,
        [_xN]: _oI,
      },
    ],
  ]
);
export var NetworkAclAssociation = struct(
  n0,
  _NAA,
  0,
  [_NAAI, _NAI, _SIu],
  [
    [
      0,
      {
        [_eQN]: `NetworkAclAssociationId`,
        [_xN]: _nAAI,
      },
    ],
    [
      0,
      {
        [_eQN]: `NetworkAclId`,
        [_xN]: _nAI,
      },
    ],
    [
      0,
      {
        [_eQN]: `SubnetId`,
        [_xN]: _sIu,
      },
    ],
  ]
);
export var NetworkAclEntry = struct(
  n0,
  _NAE,
  0,
  [_CB, _E, _ITC, _ICB, _PRo, _Pr, _RA, _RNu],
  [
    [
      0,
      {
        [_eQN]: `CidrBlock`,
        [_xN]: _cB,
      },
    ],
    [
      2,
      {
        [_eQN]: `Egress`,
        [_xN]: _e,
      },
    ],
    [
      () => IcmpTypeCode,
      {
        [_eQN]: `IcmpTypeCode`,
        [_xN]: _iTC,
      },
    ],
    [
      0,
      {
        [_eQN]: `Ipv6CidrBlock`,
        [_xN]: _iCB,
      },
    ],
    [
      () => PortRange,
      {
        [_eQN]: `PortRange`,
        [_xN]: _pRo,
      },
    ],
    [
      0,
      {
        [_eQN]: `Protocol`,
        [_xN]: _pr,
      },
    ],
    [
      0,
      {
        [_eQN]: `RuleAction`,
        [_xN]: _rA,
      },
    ],
    [
      1,
      {
        [_eQN]: `RuleNumber`,
        [_xN]: _rN,
      },
    ],
  ]
);
export var NetworkInsightsAnalysis = struct(
  n0,
  _NIAe,
  0,
  [_NIAI, _NIAA, _NIPI, _AAdd, _FIAi, _FOA, _SD, _Sta, _SMt, _WM, _NPF, _FPC, _RPC, _Exp, _APHl, _SAu, _T],
  [
    [
      0,
      {
        [_eQN]: `NetworkInsightsAnalysisId`,
        [_xN]: _nIAI,
      },
    ],
    [
      0,
      {
        [_eQN]: `NetworkInsightsAnalysisArn`,
        [_xN]: _nIAA,
      },
    ],
    [
      0,
      {
        [_eQN]: `NetworkInsightsPathId`,
        [_xN]: _nIPI,
      },
    ],
    [
      () => ValueStringList,
      {
        [_eQN]: `AdditionalAccountSet`,
        [_xN]: _aASd,
      },
    ],
    [
      () => ArnList,
      {
        [_eQN]: `FilterInArnSet`,
        [_xN]: _fIAS,
      },
    ],
    [
      () => ArnList,
      {
        [_eQN]: `FilterOutArnSet`,
        [_xN]: _fOAS,
      },
    ],
    [
      4,
      {
        [_eQN]: `StartDate`,
        [_xN]: _sD,
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
      0,
      {
        [_eQN]: `StatusMessage`,
        [_xN]: _sMt,
      },
    ],
    [
      0,
      {
        [_eQN]: `WarningMessage`,
        [_xN]: _wM,
      },
    ],
    [
      2,
      {
        [_eQN]: `NetworkPathFound`,
        [_xN]: _nPF,
      },
    ],
    [
      () => PathComponentList,
      {
        [_eQN]: `ForwardPathComponentSet`,
        [_xN]: _fPCS,
      },
    ],
    [
      () => PathComponentList,
      {
        [_eQN]: `ReturnPathComponentSet`,
        [_xN]: _rPCS,
      },
    ],
    [
      () => ExplanationList,
      {
        [_eQN]: `ExplanationSet`,
        [_xN]: _eSx,
      },
    ],
    [
      () => AlternatePathHintList,
      {
        [_eQN]: `AlternatePathHintSet`,
        [_xN]: _aPHS,
      },
    ],
    [
      () => ValueStringList,
      {
        [_eQN]: `SuggestedAccountSet`,
        [_xN]: _sASu,
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
export var PathComponent = struct(
  n0,
  _PCat,
  0,
  [
    _SNeq,
    _ARcl,
    _ATtta,
    _C,
    _DV,
    _OH,
    _IHn,
    _RTR,
    _SGRe,
    _SVo,
    _Su,
    _Vp,
    _ADd,
    _TG,
    _TGRTR,
    _Exp,
    _ELBL,
    _FSRi,
    _FSRir,
    _SN,
  ],
  [
    [
      1,
      {
        [_eQN]: `SequenceNumber`,
        [_xN]: _sNe,
      },
    ],
    [
      () => AnalysisAclRule,
      {
        [_eQN]: `AclRule`,
        [_xN]: _aRc,
      },
    ],
    [
      () => AnalysisComponent,
      {
        [_eQN]: `AttachedTo`,
        [_xN]: _aTtt,
      },
    ],
    [
      () => AnalysisComponent,
      {
        [_eQN]: `Component`,
        [_xN]: _c,
      },
    ],
    [
      () => AnalysisComponent,
      {
        [_eQN]: `DestinationVpc`,
        [_xN]: _dV,
      },
    ],
    [
      () => AnalysisPacketHeader,
      {
        [_eQN]: `OutboundHeader`,
        [_xN]: _oH,
      },
    ],
    [
      () => AnalysisPacketHeader,
      {
        [_eQN]: `InboundHeader`,
        [_xN]: _iHn,
      },
    ],
    [
      () => AnalysisRouteTableRoute,
      {
        [_eQN]: `RouteTableRoute`,
        [_xN]: _rTR,
      },
    ],
    [
      () => AnalysisSecurityGroupRule,
      {
        [_eQN]: `SecurityGroupRule`,
        [_xN]: _sGR,
      },
    ],
    [
      () => AnalysisComponent,
      {
        [_eQN]: `SourceVpc`,
        [_xN]: _sV,
      },
    ],
    [
      () => AnalysisComponent,
      {
        [_eQN]: `Subnet`,
        [_xN]: _su,
      },
    ],
    [
      () => AnalysisComponent,
      {
        [_eQN]: `Vpc`,
        [_xN]: _vp,
      },
    ],
    [
      () => AdditionalDetailList,
      {
        [_eQN]: `AdditionalDetailSet`,
        [_xN]: _aDS,
      },
    ],
    [
      () => AnalysisComponent,
      {
        [_eQN]: `TransitGateway`,
        [_xN]: _tG,
      },
    ],
    [
      () => TransitGatewayRouteTableRoute,
      {
        [_eQN]: `TransitGatewayRouteTableRoute`,
        [_xN]: _tGRTR,
      },
    ],
    [
      () => ExplanationList,
      {
        [_eQN]: `ExplanationSet`,
        [_xN]: _eSx,
      },
    ],
    [
      () => AnalysisComponent,
      {
        [_eQN]: `ElasticLoadBalancerListener`,
        [_xN]: _eLBL,
      },
    ],
    [
      () => FirewallStatelessRule,
      {
        [_eQN]: `FirewallStatelessRule`,
        [_xN]: _fSR,
      },
    ],
    [
      () => FirewallStatefulRule,
      {
        [_eQN]: `FirewallStatefulRule`,
        [_xN]: _fSRi,
      },
    ],
    [
      0,
      {
        [_eQN]: `ServiceName`,
        [_xN]: _sN,
      },
    ],
  ]
);
export var PortRange = struct(
  n0,
  _PRo,
  0,
  [_Fr, _To],
  [
    [
      1,
      {
        [_eQN]: `From`,
        [_xN]: _fr,
      },
    ],
    [
      1,
      {
        [_eQN]: `To`,
        [_xN]: _to,
      },
    ],
  ]
);
export var ReplaceNetworkAclEntryRequest = struct(
  n0,
  _RNAER,
  0,
  [_DR, _NAI, _RNu, _Pr, _RA, _E, _CB, _ICB, _ITC, _PRo],
  [
    [
      2,
      {
        [_eQN]: `DryRun`,
        [_xN]: _dR,
      },
    ],
    [
      0,
      {
        [_eQN]: `NetworkAclId`,
        [_xN]: _nAI,
      },
    ],
    [
      1,
      {
        [_eQN]: `RuleNumber`,
        [_xN]: _rN,
      },
    ],
    [
      0,
      {
        [_eQN]: `Protocol`,
        [_xN]: _pr,
      },
    ],
    [
      0,
      {
        [_eQN]: `RuleAction`,
        [_xN]: _rA,
      },
    ],
    [
      2,
      {
        [_eQN]: `Egress`,
        [_xN]: _e,
      },
    ],
    [
      0,
      {
        [_eQN]: `CidrBlock`,
        [_xN]: _cB,
      },
    ],
    [
      0,
      {
        [_eQN]: `Ipv6CidrBlock`,
        [_xN]: _iCB,
      },
    ],
    [
      () => IcmpTypeCode,
      {
        [_xN]: _Ic,
      },
    ],
    [
      () => PortRange,
      {
        [_eQN]: `PortRange`,
        [_xN]: _pRo,
      },
    ],
  ]
);
export var RuleGroupRuleOptionsPair = struct(
  n0,
  _RGROPu,
  0,
  [_RGA, _RO],
  [
    [
      0,
      {
        [_eQN]: `RuleGroupArn`,
        [_xN]: _rGA,
      },
    ],
    [
      () => RuleOptionList,
      {
        [_eQN]: `RuleOptionSet`,
        [_xN]: _rOS,
      },
    ],
  ]
);
export var RuleGroupTypePair = struct(
  n0,
  _RGTPu,
  0,
  [_RGA, _RGT],
  [
    [
      0,
      {
        [_eQN]: `RuleGroupArn`,
        [_xN]: _rGA,
      },
    ],
    [
      0,
      {
        [_eQN]: `RuleGroupType`,
        [_xN]: _rGT,
      },
    ],
  ]
);
export var RuleOption = struct(
  n0,
  _ROu,
  0,
  [_Key, _Set],
  [
    [
      0,
      {
        [_eQN]: `Keyword`,
        [_xN]: _key,
      },
    ],
    [
      () => StringList,
      {
        [_eQN]: `SettingSet`,
        [_xN]: _sSe,
      },
    ],
  ]
);
export var StartNetworkInsightsAnalysisRequest = struct(
  n0,
  _SNIAR,
  0,
  [_NIPI, _AAdd, _FIAi, _FOA, _DR, _TS, _CT],
  [
    0,
    [
      () => ValueStringList,
      {
        [_xN]: _AAddi,
      },
    ],
    [
      () => ArnList,
      {
        [_xN]: _FIAil,
      },
    ],
    [
      () => ArnList,
      {
        [_xN]: _FOAi,
      },
    ],
    2,
    [
      () => TagSpecificationList,
      {
        [_xN]: _TSa,
      },
    ],
    [0, 4],
  ]
);
export var StartNetworkInsightsAnalysisResult = struct(
  n0,
  _SNIARt,
  0,
  [_NIAe],
  [
    [
      () => NetworkInsightsAnalysis,
      {
        [_eQN]: `NetworkInsightsAnalysis`,
        [_xN]: _nIA,
      },
    ],
  ]
);
export var TransitGatewayRouteTableRoute = struct(
  n0,
  _TGRTR,
  0,
  [_DCe, _St, _ROo, _PLI, _AItt, _RIes, _RTe],
  [
    [
      0,
      {
        [_eQN]: `DestinationCidr`,
        [_xN]: _dC,
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
        [_eQN]: `RouteOrigin`,
        [_xN]: _rOo,
      },
    ],
    [
      0,
      {
        [_eQN]: `PrefixListId`,
        [_xN]: _pLI,
      },
    ],
    [
      0,
      {
        [_eQN]: `AttachmentId`,
        [_xN]: _aIt,
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
  ]
);
export var AdditionalDetailList = list(n0, _ADL, 0, [
  () => AdditionalDetail,
  {
    [_xN]: _it,
  },
]);
export var AlternatePathHintList = list(n0, _APHL, 0, [
  () => AlternatePathHint,
  {
    [_xN]: _it,
  },
]);
export var AnalysisComponentList = list(n0, _ACL, 0, [
  () => AnalysisComponent,
  {
    [_xN]: _it,
  },
]);
export var ArnList = list(n0, _ALr, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var ExplanationList = list(n0, _EL, 0, [
  () => Explanation,
  {
    [_xN]: _it,
  },
]);
export var IpAddressList = list(n0, _IAL, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var NetworkAclAssociationList = list(n0, _NAAL, 0, [
  () => NetworkAclAssociation,
  {
    [_xN]: _it,
  },
]);
export var NetworkAclEntryList = list(n0, _NAEL, 0, [
  () => NetworkAclEntry,
  {
    [_xN]: _it,
  },
]);
export var NetworkAclIdStringList = list(n0, _NAISL, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var NetworkAclList = list(n0, _NAL, 0, [
  () => NetworkAcl,
  {
    [_xN]: _it,
  },
]);
export var NetworkInsightsAnalysisIdList = list(n0, _NIAIL, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var NetworkInsightsAnalysisList = list(n0, _NIAL, 0, [
  () => NetworkInsightsAnalysis,
  {
    [_xN]: _it,
  },
]);
export var PathComponentList = list(n0, _PCL, 0, [
  () => PathComponent,
  {
    [_xN]: _it,
  },
]);
export var PortRangeList = list(n0, _PRL, 0, [
  () => PortRange,
  {
    [_xN]: _it,
  },
]);
export var ProtocolIntList = list(n0, _PIL, 0, [
  1,
  {
    [_xN]: _it,
  },
]);
export var RuleGroupRuleOptionsPairList = list(n0, _RGROPL, 0, [
  () => RuleGroupRuleOptionsPair,
  {
    [_xN]: _it,
  },
]);
export var RuleGroupTypePairList = list(n0, _RGTPL, 0, [
  () => RuleGroupTypePair,
  {
    [_xN]: _it,
  },
]);
export var RuleOptionList = list(n0, _ROL, 0, [
  () => RuleOption,
  {
    [_xN]: _it,
  },
]);
export var StringList = list(n0, _SLtr, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var CreateNetworkAcl = op(
  n0,
  _CNAr,
  0,
  () => CreateNetworkAclRequest,
  () => CreateNetworkAclResult
);
export var CreateNetworkAclEntry = op(
  n0,
  _CNAE,
  0,
  () => CreateNetworkAclEntryRequest,
  () => Unit
);
export var DescribeNetworkAcls = op(
  n0,
  _DNAe,
  0,
  () => DescribeNetworkAclsRequest,
  () => DescribeNetworkAclsResult
);
export var DescribeNetworkInsightsAnalyses = op(
  n0,
  _DNIAe,
  0,
  () => DescribeNetworkInsightsAnalysesRequest,
  () => DescribeNetworkInsightsAnalysesResult
);
export var ReplaceNetworkAclEntry = op(
  n0,
  _RNAE,
  0,
  () => ReplaceNetworkAclEntryRequest,
  () => Unit
);
export var StartNetworkInsightsAnalysis = op(
  n0,
  _SNIA,
  0,
  () => StartNetworkInsightsAnalysisRequest,
  () => StartNetworkInsightsAnalysisResult
);
