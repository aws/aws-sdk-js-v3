// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ABHP,
  _aBHP,
  _ACIA,
  _AESS,
  _AESUS,
  _aI,
  _AIl,
  _AIs,
  _aIs,
  _aIt,
  _AItt,
  _aPIA,
  _APIAss,
  _Ar,
  _ar,
  _aRs,
  _ARss,
  _ASc,
  _aSc,
  _ASL,
  _ASl,
  _aSl,
  _Ass,
  _ass,
  _ASss,
  _aSSs,
  _At,
  _at,
  _aTdd,
  _ATddr,
  _Att,
  _aTt,
  _att,
  _ATtt,
  _AZ,
  _aZ,
  _AZG,
  _aZG,
  _bDM,
  _BDMl,
  _bDMl,
  _BDMlo,
  _CI,
  _cI,
  _CLB,
  _cLB,
  _CLBC,
  _cLBC,
  _CLBl,
  _CLI,
  _CLIL,
  _CNIR,
  _CNIr,
  _CNIRr,
  _Co,
  _co,
  _COI,
  _cOI,
  _Con,
  _cont,
  _cRa,
  _CRapa,
  _CT,
  _cT,
  _CTC,
  _cTC,
  _CTr,
  _cTr,
  _CTS,
  _DAIT,
  _dAIT,
  _DASi,
  _dASi,
  _DAT,
  _dAT,
  _DCLI,
  _DCLIR,
  _DCLIRe,
  _De,
  _de,
  _DHT,
  _dHT,
  _DI,
  _dI,
  _DIAe,
  _DIARe,
  _DN,
  _dN,
  _DNIAes,
  _DNIARescr,
  _DNIARescri,
  _DNIe,
  _DNIRe,
  _DNIRes,
  _DOT,
  _dOT,
  _DR,
  _dR,
  _DSFR,
  _DSFRR,
  _DSFRRe,
  _DSIRes,
  _DSIRR,
  _DSIRRe,
  _Eb,
  _eb,
  _ECTP,
  _eCTP,
  _EIBD,
  _En,
  _en,
  _EO,
  _eO,
  _EOn,
  _eOn,
  _EPI,
  _EQC,
  _eQC,
  _eQN,
  _ESE,
  _eSE,
  _ESna,
  _eSna,
  _ESS,
  _eSS,
  _ESUE,
  _eSUE,
  _ESUS,
  _eSUS,
  _f,
  _Fa,
  _fa,
  _fC,
  _FCu,
  _Fi,
  _Fil,
  _G,
  _GIL,
  _GIr,
  _gIr,
  _GIrou,
  _GN,
  _gN,
  _gS,
  _IA,
  _iA,
  _IAC,
  _iAC,
  _IAns,
  _IApv,
  _iApv,
  _iASp,
  _IBDM,
  _IBDML,
  _IC,
  _iC,
  _IFR,
  _iFR,
  _II,
  _iI,
  _IIB,
  _iIB,
  _IIm,
  _iIma,
  _IIn,
  _IIP,
  _iIP,
  _IISB,
  _iISB,
  _IN,
  _iN,
  _INIS,
  _INISL,
  _Ins,
  _IOI,
  _IOIn,
  _iOIn,
  _iOIp,
  _IPC,
  _IPCp,
  _iPI,
  _IPIs,
  _IPLpvre,
  _IPp,
  _IPpv,
  _IPpvr,
  _iPpvr,
  _IPpvre,
  _IPSp,
  _iPSpv,
  _iPSpvr,
  _IPTUC,
  _iPTUC,
  _iR,
  _IRn,
  _iSn,
  _IT,
  _iT,
  _it,
  _ITn,
  _iTnt,
  _ke,
  _KI,
  _kI,
  _KN,
  _kN,
  _LAZ,
  _lAZ,
  _LAZI,
  _lAZI,
  _LBC,
  _lBC,
  _lG,
  _LGa,
  _LSa,
  _lSa,
  _LSau,
  _lSau,
  _LSLa,
  _LTC,
  _lTC,
  _MAa,
  _mAa,
  _Me,
  _me,
  _mo,
  _Mon,
  _MR,
  _mR,
  _N,
  _n,
  _NCI,
  _nCI,
  _NIAet,
  _NIAetw,
  _NIe,
  _nIe,
  _NIet,
  _NII,
  _nII,
  _NIIA,
  _NIIAL,
  _NIIe,
  _NIIL,
  _NIL,
  _NIPIA,
  _NIPIAL,
  _nIS,
  _NTe,
  _nTe,
  _OA,
  _oA,
  _ODAS,
  _oDAS,
  _ODFC,
  _oDFC,
  _ODMTP,
  _oDMTP,
  _ODTC,
  _oDTC,
  _OI,
  _oI,
  _Op,
  _ope,
  _pC,
  _PCro,
  _PDN,
  _pDNr,
  _pDNu,
  _PDNub,
  _PDr,
  _pDr,
  _PDSDN,
  _pDSDN,
  _PI,
  _pI,
  _PIAr,
  _pIAr,
  _PIAri,
  _pIAri,
  _pIAS,
  _PIDN,
  _pIDN,
  _PIDNO,
  _pIDNO,
  _PIDNu,
  _pIDNu,
  _PIr,
  _Pla,
  _pla,
  _Prim,
  _prim,
  _ra,
  _RDN,
  _rDN,
  _RIa,
  _rIa,
  _RIeq,
  _rIeq,
  _RIME,
  _RMeq,
  _rMeq,
  _RSe,
  _rSep,
  _RSF,
  _RSFR,
  _RSFRe,
  _RSIeq,
  _RSIR,
  _RSIRe,
  _RSLS,
  _RSLSSGIL,
  _RSLSSGL,
  _RTe,
  _rTe,
  _RUI,
  _rUI,
  _SCRp,
  _SDC,
  _sDC,
  _SFLS,
  _SFM,
  _SFRC,
  _sFRC,
  _SFRCD,
  _SFRCp,
  _SFRCS,
  _sFRCS,
  _SFRI,
  _sFRI,
  _SFRIp,
  _SFRS,
  _sFRSp,
  _SFTS,
  _SFTSL,
  _SG,
  _SGe,
  _SGI,
  _SGIe,
  _SIR,
  _SIRI,
  _sIRI,
  _SIRIp,
  _SIRL,
  _SIRp,
  _sIRS,
  _SISp,
  _SIu,
  _sIu,
  _SMS,
  _sMS,
  _SMTP,
  _sMTP,
  _SNS,
  _sNSr,
  _SPIAC,
  _sPIAC,
  _SPp,
  _sPp,
  _SPpo,
  _St,
  _st,
  _Sta,
  _sta,
  _T,
  _t,
  _ta,
  _tCa,
  _TCar,
  _TCUT,
  _tCUT,
  _tD,
  _TDe,
  _Te,
  _TET,
  _tET,
  _TGa,
  _tGa,
  _TGar,
  _TGCa,
  _tGCa,
  _TIWE,
  _tIWE,
  _TS,
  _tS,
  _TSa,
  _TSag,
  _tSS,
  _Ty,
  _ty,
  _UDs,
  _uDs,
  _UST,
  _uST,
  _UT,
  _uT,
  _UTd,
  _uTd,
  _VF,
  _vF,
  _VI,
  _vI,
  _VIo,
  _vIo,
  _VOI,
  _vOI,
  _VU,
  _vU,
  _wC,
  _WCe,
  _xN,
  FilterList,
  n0,
  OperatorResponse,
  TagList,
  TagSpecificationList,
} from "./schemas_0";
import { SpotInstanceRequestIdList } from "./schemas_42_Instance";
import {
  EnaSrdSpecificationRequest,
  Ipv4PrefixList,
  Ipv6PrefixList,
  PrivateIpAddressSpecificationList,
} from "./schemas_94_Spot";
import { AttributeValue } from "./schemas_102_Attribute";
import { InstanceRequirements, LaunchTemplateConfigList } from "./schemas_119_Fleet";
import { ProductCodeList } from "./schemas_120_Describe";
import { BlockDeviceMappingList } from "./schemas_147_Describe";
import { SpotInstanceStateFault } from "./schemas_163_Spot";
import { IamInstanceProfileSpecification } from "./schemas_177_Instance";
import { SpotFleetRequestIdList } from "./schemas_200_Fleet";
import { ConnectionTrackingSpecificationRequest, SecurityGroupIdStringList } from "./schemas_217_Spot";
import { InstanceIpv6AddressList } from "./schemas_218_Describe";
import { Ipv4PrefixesList } from "./schemas_256_Network";
import { AttributeBooleanValue } from "./schemas_261_Attribute";
import { SensitiveUserData } from "./schemas_268_Spot";
import { OperatorRequest } from "./schemas_273_Create";
import { InstanceIdStringList } from "./schemas_330_Instances";

/* eslint no-var: 0 */

export var AttachmentEnaSrdSpecification = struct(
  n0,
  _AESS,
  0,
  [_ESE, _ESUS],
  [
    [
      2,
      {
        [_eQN]: `EnaSrdEnabled`,
        [_xN]: _eSE,
      },
    ],
    [
      () => AttachmentEnaSrdUdpSpecification,
      {
        [_eQN]: `EnaSrdUdpSpecification`,
        [_xN]: _eSUS,
      },
    ],
  ]
);
export var AttachmentEnaSrdUdpSpecification = struct(
  n0,
  _AESUS,
  0,
  [_ESUE],
  [
    [
      2,
      {
        [_eQN]: `EnaSrdUdpEnabled`,
        [_xN]: _eSUE,
      },
    ],
  ]
);
export var ClassicLinkInstance = struct(
  n0,
  _CLI,
  0,
  [_G, _II, _T, _VI],
  [
    [
      () => GroupIdentifierList,
      {
        [_eQN]: `GroupSet`,
        [_xN]: _gS,
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
  ]
);
export var ClassicLoadBalancer = struct(
  n0,
  _CLB,
  0,
  [_N],
  [
    [
      0,
      {
        [_eQN]: `Name`,
        [_xN]: _n,
      },
    ],
  ]
);
export var ClassicLoadBalancersConfig = struct(
  n0,
  _CLBC,
  0,
  [_CLBl],
  [
    [
      () => ClassicLoadBalancers,
      {
        [_eQN]: `ClassicLoadBalancers`,
        [_xN]: _cLB,
      },
    ],
  ]
);
export var ConnectionTrackingConfiguration = struct(
  n0,
  _CTC,
  0,
  [_TET, _UST, _UTd],
  [
    [
      1,
      {
        [_eQN]: `TcpEstablishedTimeout`,
        [_xN]: _tET,
      },
    ],
    [
      1,
      {
        [_eQN]: `UdpStreamTimeout`,
        [_xN]: _uST,
      },
    ],
    [
      1,
      {
        [_eQN]: `UdpTimeout`,
        [_xN]: _uTd,
      },
    ],
  ]
);
export var CreateNetworkInterfaceRequest = struct(
  n0,
  _CNIR,
  0,
  [_IPpvr, _IPCp, _IPp, _IPC, _ITn, _TS, _CT, _EPI, _CTS, _Op, _SIu, _De, _PIAr, _G, _PIAri, _SPIAC, _IA, _IAC, _DR],
  [
    [
      () => Ipv4PrefixList,
      {
        [_xN]: _IPpvre,
      },
    ],
    1,
    [
      () => Ipv6PrefixList,
      {
        [_xN]: _IPpv,
      },
    ],
    1,
    0,
    [
      () => TagSpecificationList,
      {
        [_xN]: _TSa,
      },
    ],
    [0, 4],
    2,
    () => ConnectionTrackingSpecificationRequest,
    () => OperatorRequest,
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
        [_eQN]: `Description`,
        [_xN]: _de,
      },
    ],
    [
      0,
      {
        [_eQN]: `PrivateIpAddress`,
        [_xN]: _pIAr,
      },
    ],
    [
      () => SecurityGroupIdStringList,
      {
        [_xN]: _SGI,
      },
    ],
    [
      () => PrivateIpAddressSpecificationList,
      {
        [_eQN]: `PrivateIpAddresses`,
        [_xN]: _pIAri,
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
      () => InstanceIpv6AddressList,
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
    [
      2,
      {
        [_eQN]: `DryRun`,
        [_xN]: _dR,
      },
    ],
  ]
);
export var CreateNetworkInterfaceResult = struct(
  n0,
  _CNIRr,
  0,
  [_NIe, _CT],
  [
    [
      () => NetworkInterface,
      {
        [_eQN]: `NetworkInterface`,
        [_xN]: _nIe,
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
export var DescribeClassicLinkInstancesRequest = struct(
  n0,
  _DCLIR,
  0,
  [_DR, _IIn, _Fi, _NTe, _MR],
  [
    [
      2,
      {
        [_eQN]: `DryRun`,
        [_xN]: _dR,
      },
    ],
    [
      () => InstanceIdStringList,
      {
        [_xN]: _II,
      },
    ],
    [
      () => FilterList,
      {
        [_xN]: _Fil,
      },
    ],
    [
      0,
      {
        [_eQN]: `NextToken`,
        [_xN]: _nTe,
      },
    ],
    [
      1,
      {
        [_eQN]: `MaxResults`,
        [_xN]: _mR,
      },
    ],
  ]
);
export var DescribeClassicLinkInstancesResult = struct(
  n0,
  _DCLIRe,
  0,
  [_Ins, _NTe],
  [
    [
      () => ClassicLinkInstanceList,
      {
        [_eQN]: `InstancesSet`,
        [_xN]: _iSn,
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
export var DescribeInstanceAttributeRequest = struct(
  n0,
  _DIARe,
  0,
  [_DR, _II, _At],
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
        [_eQN]: `InstanceId`,
        [_xN]: _iI,
      },
    ],
    [
      0,
      {
        [_eQN]: `Attribute`,
        [_xN]: _att,
      },
    ],
  ]
);
export var DescribeNetworkInterfaceAttributeRequest = struct(
  n0,
  _DNIARescr,
  0,
  [_DR, _NII, _At],
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
        [_eQN]: `NetworkInterfaceId`,
        [_xN]: _nII,
      },
    ],
    [
      0,
      {
        [_eQN]: `Attribute`,
        [_xN]: _att,
      },
    ],
  ]
);
export var DescribeNetworkInterfaceAttributeResult = struct(
  n0,
  _DNIARescri,
  0,
  [_Att, _De, _G, _NII, _SDC, _APIAss],
  [
    [
      () => NetworkInterfaceAttachment,
      {
        [_eQN]: `Attachment`,
        [_xN]: _at,
      },
    ],
    [
      () => AttributeValue,
      {
        [_eQN]: `Description`,
        [_xN]: _de,
      },
    ],
    [
      () => GroupIdentifierList,
      {
        [_eQN]: `GroupSet`,
        [_xN]: _gS,
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
      () => AttributeBooleanValue,
      {
        [_eQN]: `SourceDestCheck`,
        [_xN]: _sDC,
      },
    ],
    [
      2,
      {
        [_eQN]: `AssociatePublicIpAddress`,
        [_xN]: _aPIA,
      },
    ],
  ]
);
export var DescribeNetworkInterfacesRequest = struct(
  n0,
  _DNIRe,
  0,
  [_NTe, _MR, _DR, _NIIe, _Fi],
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
      () => NetworkInterfaceIdList,
      {
        [_xN]: _NII,
      },
    ],
    [
      () => FilterList,
      {
        [_eQN]: `Filter`,
        [_xN]: _f,
      },
    ],
  ]
);
export var DescribeNetworkInterfacesResult = struct(
  n0,
  _DNIRes,
  0,
  [_NIet, _NTe],
  [
    [
      () => NetworkInterfaceList,
      {
        [_eQN]: `NetworkInterfaceSet`,
        [_xN]: _nIS,
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
export var DescribeSpotFleetRequestsRequest = struct(
  n0,
  _DSFRR,
  0,
  [_DR, _SFRIp, _NTe, _MR],
  [
    [
      2,
      {
        [_eQN]: `DryRun`,
        [_xN]: _dR,
      },
    ],
    [
      () => SpotFleetRequestIdList,
      {
        [_eQN]: `SpotFleetRequestId`,
        [_xN]: _sFRI,
      },
    ],
    [
      0,
      {
        [_eQN]: `NextToken`,
        [_xN]: _nTe,
      },
    ],
    [
      1,
      {
        [_eQN]: `MaxResults`,
        [_xN]: _mR,
      },
    ],
  ]
);
export var DescribeSpotFleetRequestsResponse = struct(
  n0,
  _DSFRRe,
  0,
  [_NTe, _SFRC],
  [
    [
      0,
      {
        [_eQN]: `NextToken`,
        [_xN]: _nTe,
      },
    ],
    [
      () => SpotFleetRequestConfigSet,
      {
        [_eQN]: `SpotFleetRequestConfigSet`,
        [_xN]: _sFRCS,
      },
    ],
  ]
);
export var DescribeSpotInstanceRequestsRequest = struct(
  n0,
  _DSIRR,
  0,
  [_NTe, _MR, _DR, _SIRIp, _Fi],
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
      () => SpotInstanceRequestIdList,
      {
        [_xN]: _SIRI,
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
export var DescribeSpotInstanceRequestsResult = struct(
  n0,
  _DSIRRe,
  0,
  [_SIR, _NTe],
  [
    [
      () => SpotInstanceRequestList,
      {
        [_eQN]: `SpotInstanceRequestSet`,
        [_xN]: _sIRS,
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
export var EbsInstanceBlockDevice = struct(
  n0,
  _EIBD,
  0,
  [_ATtt, _DOT, _Sta, _VIo, _ARss, _VOI, _Op],
  [
    [
      4,
      {
        [_eQN]: `AttachTime`,
        [_xN]: _aTt,
      },
    ],
    [
      2,
      {
        [_eQN]: `DeleteOnTermination`,
        [_xN]: _dOT,
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
        [_eQN]: `VolumeId`,
        [_xN]: _vIo,
      },
    ],
    [
      0,
      {
        [_eQN]: `AssociatedResource`,
        [_xN]: _aRs,
      },
    ],
    [
      0,
      {
        [_eQN]: `VolumeOwnerId`,
        [_xN]: _vOI,
      },
    ],
    [
      () => OperatorResponse,
      {
        [_eQN]: `Operator`,
        [_xN]: _ope,
      },
    ],
  ]
);
export var EnclaveOptions = struct(
  n0,
  _EOn,
  0,
  [_En],
  [
    [
      2,
      {
        [_eQN]: `Enabled`,
        [_xN]: _en,
      },
    ],
  ]
);
export var GroupIdentifier = struct(
  n0,
  _GIrou,
  0,
  [_GIr, _GN],
  [
    [
      0,
      {
        [_eQN]: `GroupId`,
        [_xN]: _gIr,
      },
    ],
    [
      0,
      {
        [_eQN]: `GroupName`,
        [_xN]: _gN,
      },
    ],
  ]
);
export var InstanceAttribute = struct(
  n0,
  _IAns,
  0,
  [_BDMl, _DAT, _ESna, _EOn, _EO, _II, _IISB, _IT, _KI, _PCro, _RIa, _RDN, _SDC, _SNS, _UDs, _DASi, _G],
  [
    [
      () => InstanceBlockDeviceMappingList,
      {
        [_eQN]: `BlockDeviceMapping`,
        [_xN]: _bDM,
      },
    ],
    [
      () => AttributeBooleanValue,
      {
        [_eQN]: `DisableApiTermination`,
        [_xN]: _dAT,
      },
    ],
    [
      () => AttributeBooleanValue,
      {
        [_eQN]: `EnaSupport`,
        [_xN]: _eSna,
      },
    ],
    [
      () => EnclaveOptions,
      {
        [_eQN]: `EnclaveOptions`,
        [_xN]: _eOn,
      },
    ],
    [
      () => AttributeBooleanValue,
      {
        [_eQN]: `EbsOptimized`,
        [_xN]: _eO,
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
      () => AttributeValue,
      {
        [_eQN]: `InstanceInitiatedShutdownBehavior`,
        [_xN]: _iISB,
      },
    ],
    [
      () => AttributeValue,
      {
        [_eQN]: `InstanceType`,
        [_xN]: _iT,
      },
    ],
    [
      () => AttributeValue,
      {
        [_eQN]: `Kernel`,
        [_xN]: _ke,
      },
    ],
    [
      () => ProductCodeList,
      {
        [_eQN]: `ProductCodes`,
        [_xN]: _pC,
      },
    ],
    [
      () => AttributeValue,
      {
        [_eQN]: `Ramdisk`,
        [_xN]: _ra,
      },
    ],
    [
      () => AttributeValue,
      {
        [_eQN]: `RootDeviceName`,
        [_xN]: _rDN,
      },
    ],
    [
      () => AttributeBooleanValue,
      {
        [_eQN]: `SourceDestCheck`,
        [_xN]: _sDC,
      },
    ],
    [
      () => AttributeValue,
      {
        [_eQN]: `SriovNetSupport`,
        [_xN]: _sNSr,
      },
    ],
    [
      () => AttributeValue,
      {
        [_eQN]: `UserData`,
        [_xN]: _uDs,
      },
    ],
    [
      () => AttributeBooleanValue,
      {
        [_eQN]: `DisableApiStop`,
        [_xN]: _dASi,
      },
    ],
    [
      () => GroupIdentifierList,
      {
        [_eQN]: `GroupSet`,
        [_xN]: _gS,
      },
    ],
  ]
);
export var InstanceBlockDeviceMapping = struct(
  n0,
  _IBDM,
  0,
  [_DN, _Eb],
  [
    [
      0,
      {
        [_eQN]: `DeviceName`,
        [_xN]: _dN,
      },
    ],
    [
      () => EbsInstanceBlockDevice,
      {
        [_eQN]: `Ebs`,
        [_xN]: _eb,
      },
    ],
  ]
);
export var InstanceNetworkInterfaceSpecification = struct(
  n0,
  _INIS,
  0,
  [
    _APIAss,
    _DOT,
    _De,
    _DI,
    _G,
    _IAC,
    _IA,
    _NII,
    _PIAr,
    _PIAri,
    _SPIAC,
    _SIu,
    _ACIA,
    _ITn,
    _NCI,
    _IPpvr,
    _IPCp,
    _IPp,
    _IPC,
    _PIr,
    _ESS,
    _CTS,
    _EQC,
  ],
  [
    [
      2,
      {
        [_eQN]: `AssociatePublicIpAddress`,
        [_xN]: _aPIA,
      },
    ],
    [
      2,
      {
        [_eQN]: `DeleteOnTermination`,
        [_xN]: _dOT,
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
        [_eQN]: `DeviceIndex`,
        [_xN]: _dI,
      },
    ],
    [
      () => SecurityGroupIdStringList,
      {
        [_xN]: _SGI,
      },
    ],
    [
      1,
      {
        [_eQN]: `Ipv6AddressCount`,
        [_xN]: _iAC,
      },
    ],
    [
      () => InstanceIpv6AddressList,
      {
        [_eQN]: `Ipv6Addresses`,
        [_xN]: _iASp,
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
        [_eQN]: `PrivateIpAddress`,
        [_xN]: _pIAr,
      },
    ],
    [
      () => PrivateIpAddressSpecificationList,
      {
        [_eQN]: `PrivateIpAddresses`,
        [_xN]: _pIAS,
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
      0,
      {
        [_eQN]: `SubnetId`,
        [_xN]: _sIu,
      },
    ],
    2,
    0,
    1,
    [
      () => Ipv4PrefixList,
      {
        [_xN]: _IPpvre,
      },
    ],
    1,
    [
      () => Ipv6PrefixList,
      {
        [_xN]: _IPpv,
      },
    ],
    1,
    2,
    () => EnaSrdSpecificationRequest,
    () => ConnectionTrackingSpecificationRequest,
    1,
  ]
);
export var Ipv6PrefixSpecification = struct(
  n0,
  _IPSp,
  0,
  [_IPpv],
  [
    [
      0,
      {
        [_eQN]: `Ipv6Prefix`,
        [_xN]: _iPpvr,
      },
    ],
  ]
);
export var LaunchSpecification = struct(
  n0,
  _LSa,
  0,
  [_UDs, _ATddr, _BDMl, _EO, _IIP, _IIm, _IT, _KI, _KN, _NIet, _Pla, _RIa, _SIu, _SG, _Mon],
  [
    [
      () => SensitiveUserData,
      {
        [_eQN]: `UserData`,
        [_xN]: _uDs,
      },
    ],
    [
      0,
      {
        [_eQN]: `AddressingType`,
        [_xN]: _aTdd,
      },
    ],
    [
      () => BlockDeviceMappingList,
      {
        [_eQN]: `BlockDeviceMapping`,
        [_xN]: _bDM,
      },
    ],
    [
      2,
      {
        [_eQN]: `EbsOptimized`,
        [_xN]: _eO,
      },
    ],
    [
      () => IamInstanceProfileSpecification,
      {
        [_eQN]: `IamInstanceProfile`,
        [_xN]: _iIP,
      },
    ],
    [
      0,
      {
        [_eQN]: `ImageId`,
        [_xN]: _iIma,
      },
    ],
    [
      0,
      {
        [_eQN]: `InstanceType`,
        [_xN]: _iT,
      },
    ],
    [
      0,
      {
        [_eQN]: `KernelId`,
        [_xN]: _kI,
      },
    ],
    [
      0,
      {
        [_eQN]: `KeyName`,
        [_xN]: _kN,
      },
    ],
    [
      () => InstanceNetworkInterfaceSpecificationList,
      {
        [_eQN]: `NetworkInterfaceSet`,
        [_xN]: _nIS,
      },
    ],
    [
      () => SpotPlacement,
      {
        [_eQN]: `Placement`,
        [_xN]: _pla,
      },
    ],
    [
      0,
      {
        [_eQN]: `RamdiskId`,
        [_xN]: _rIa,
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
      () => GroupIdentifierList,
      {
        [_eQN]: `GroupSet`,
        [_xN]: _gS,
      },
    ],
    [
      () => RunInstancesMonitoringEnabled,
      {
        [_eQN]: `Monitoring`,
        [_xN]: _mo,
      },
    ],
  ]
);
export var LoadBalancersConfig = struct(
  n0,
  _LBC,
  0,
  [_CLBC, _TGCa],
  [
    [
      () => ClassicLoadBalancersConfig,
      {
        [_eQN]: `ClassicLoadBalancersConfig`,
        [_xN]: _cLBC,
      },
    ],
    [
      () => TargetGroupsConfig,
      {
        [_eQN]: `TargetGroupsConfig`,
        [_xN]: _tGCa,
      },
    ],
  ]
);
export var NetworkInterface = struct(
  n0,
  _NIe,
  0,
  [
    _Ass,
    _Att,
    _AZ,
    _CTC,
    _De,
    _G,
    _ITn,
    _IA,
    _MAa,
    _NII,
    _OA,
    _OI,
    _PDN,
    _PDNub,
    _PIDNO,
    _PIAr,
    _PIAri,
    _IPpvr,
    _IPp,
    _RIeq,
    _RMeq,
    _SDC,
    _Sta,
    _SIu,
    _TSag,
    _VI,
    _DAIT,
    _IN,
    _IApv,
    _Op,
    _ASss,
  ],
  [
    [
      () => NetworkInterfaceAssociation,
      {
        [_eQN]: `Association`,
        [_xN]: _ass,
      },
    ],
    [
      () => NetworkInterfaceAttachment,
      {
        [_eQN]: `Attachment`,
        [_xN]: _at,
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
      () => ConnectionTrackingConfiguration,
      {
        [_eQN]: `ConnectionTrackingConfiguration`,
        [_xN]: _cTC,
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
      () => GroupIdentifierList,
      {
        [_eQN]: `GroupSet`,
        [_xN]: _gS,
      },
    ],
    [
      0,
      {
        [_eQN]: `InterfaceType`,
        [_xN]: _iTnt,
      },
    ],
    [
      () => NetworkInterfaceIpv6AddressesList,
      {
        [_eQN]: `Ipv6AddressesSet`,
        [_xN]: _iASp,
      },
    ],
    [
      0,
      {
        [_eQN]: `MacAddress`,
        [_xN]: _mAa,
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
        [_eQN]: `OutpostArn`,
        [_xN]: _oA,
      },
    ],
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
        [_eQN]: `PrivateDnsName`,
        [_xN]: _pDNr,
      },
    ],
    [
      0,
      {
        [_eQN]: `PublicDnsName`,
        [_xN]: _pDNu,
      },
    ],
    [
      () => PublicIpDnsNameOptions,
      {
        [_eQN]: `PublicIpDnsNameOptions`,
        [_xN]: _pIDNO,
      },
    ],
    [
      0,
      {
        [_eQN]: `PrivateIpAddress`,
        [_xN]: _pIAr,
      },
    ],
    [
      () => NetworkInterfacePrivateIpAddressList,
      {
        [_eQN]: `PrivateIpAddressesSet`,
        [_xN]: _pIAS,
      },
    ],
    [
      () => Ipv4PrefixesList,
      {
        [_eQN]: `Ipv4PrefixSet`,
        [_xN]: _iPSpv,
      },
    ],
    [
      () => Ipv6PrefixesList,
      {
        [_eQN]: `Ipv6PrefixSet`,
        [_xN]: _iPSpvr,
      },
    ],
    [
      0,
      {
        [_eQN]: `RequesterId`,
        [_xN]: _rIeq,
      },
    ],
    [
      2,
      {
        [_eQN]: `RequesterManaged`,
        [_xN]: _rMeq,
      },
    ],
    [
      2,
      {
        [_eQN]: `SourceDestCheck`,
        [_xN]: _sDC,
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
        [_eQN]: `SubnetId`,
        [_xN]: _sIu,
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
      2,
      {
        [_eQN]: `DenyAllIgwTraffic`,
        [_xN]: _dAIT,
      },
    ],
    [
      2,
      {
        [_eQN]: `Ipv6Native`,
        [_xN]: _iN,
      },
    ],
    [
      0,
      {
        [_eQN]: `Ipv6Address`,
        [_xN]: _iApv,
      },
    ],
    [
      () => OperatorResponse,
      {
        [_eQN]: `Operator`,
        [_xN]: _ope,
      },
    ],
    [
      () => AssociatedSubnetList,
      {
        [_eQN]: `AssociatedSubnetSet`,
        [_xN]: _aSSs,
      },
    ],
  ]
);
export var NetworkInterfaceAssociation = struct(
  n0,
  _NIAet,
  0,
  [_AIl, _AIs, _IOI, _PDNub, _PI, _COI, _CI],
  [
    [
      0,
      {
        [_eQN]: `AllocationId`,
        [_xN]: _aI,
      },
    ],
    [
      0,
      {
        [_eQN]: `AssociationId`,
        [_xN]: _aIs,
      },
    ],
    [
      0,
      {
        [_eQN]: `IpOwnerId`,
        [_xN]: _iOIp,
      },
    ],
    [
      0,
      {
        [_eQN]: `PublicDnsName`,
        [_xN]: _pDNu,
      },
    ],
    [
      0,
      {
        [_eQN]: `PublicIp`,
        [_xN]: _pI,
      },
    ],
    [
      0,
      {
        [_eQN]: `CustomerOwnedIp`,
        [_xN]: _cOI,
      },
    ],
    [
      0,
      {
        [_eQN]: `CarrierIp`,
        [_xN]: _cI,
      },
    ],
  ]
);
export var NetworkInterfaceAttachment = struct(
  n0,
  _NIAetw,
  0,
  [_ATtt, _AItt, _DOT, _DI, _NCI, _II, _IOIn, _Sta, _ESS, _EQC],
  [
    [
      4,
      {
        [_eQN]: `AttachTime`,
        [_xN]: _aTt,
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
      2,
      {
        [_eQN]: `DeleteOnTermination`,
        [_xN]: _dOT,
      },
    ],
    [
      1,
      {
        [_eQN]: `DeviceIndex`,
        [_xN]: _dI,
      },
    ],
    [
      1,
      {
        [_eQN]: `NetworkCardIndex`,
        [_xN]: _nCI,
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
        [_eQN]: `InstanceOwnerId`,
        [_xN]: _iOIn,
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
      () => AttachmentEnaSrdSpecification,
      {
        [_eQN]: `EnaSrdSpecification`,
        [_xN]: _eSS,
      },
    ],
    [
      1,
      {
        [_eQN]: `EnaQueueCount`,
        [_xN]: _eQC,
      },
    ],
  ]
);
export var NetworkInterfaceIpv6Address = struct(
  n0,
  _NIIA,
  0,
  [_IApv, _PIDN, _IPIs],
  [
    [
      0,
      {
        [_eQN]: `Ipv6Address`,
        [_xN]: _iApv,
      },
    ],
    [
      0,
      {
        [_eQN]: `PublicIpv6DnsName`,
        [_xN]: _pIDN,
      },
    ],
    [
      2,
      {
        [_eQN]: `IsPrimaryIpv6`,
        [_xN]: _iPI,
      },
    ],
  ]
);
export var NetworkInterfacePrivateIpAddress = struct(
  n0,
  _NIPIA,
  0,
  [_Ass, _Prim, _PDN, _PIAr],
  [
    [
      () => NetworkInterfaceAssociation,
      {
        [_eQN]: `Association`,
        [_xN]: _ass,
      },
    ],
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
        [_eQN]: `PrivateDnsName`,
        [_xN]: _pDNr,
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
export var PublicIpDnsNameOptions = struct(
  n0,
  _PIDNO,
  0,
  [_DHT, _PIDNu, _PIDN, _PDSDN],
  [
    [
      0,
      {
        [_eQN]: `DnsHostnameType`,
        [_xN]: _dHT,
      },
    ],
    [
      0,
      {
        [_eQN]: `PublicIpv4DnsName`,
        [_xN]: _pIDNu,
      },
    ],
    [
      0,
      {
        [_eQN]: `PublicIpv6DnsName`,
        [_xN]: _pIDN,
      },
    ],
    [
      0,
      {
        [_eQN]: `PublicDualStackDnsName`,
        [_xN]: _pDSDN,
      },
    ],
  ]
);
export var RequestSpotFleetRequest = struct(
  n0,
  _RSFR,
  0,
  [_DR, _SFRCp],
  [
    [
      2,
      {
        [_eQN]: `DryRun`,
        [_xN]: _dR,
      },
    ],
    [
      () => SpotFleetRequestConfigData,
      {
        [_eQN]: `SpotFleetRequestConfig`,
        [_xN]: _sFRC,
      },
    ],
  ]
);
export var RequestSpotFleetResponse = struct(
  n0,
  _RSFRe,
  0,
  [_SFRI],
  [
    [
      0,
      {
        [_eQN]: `SpotFleetRequestId`,
        [_xN]: _sFRI,
      },
    ],
  ]
);
export var RequestSpotInstancesRequest = struct(
  n0,
  _RSIR,
  0,
  [_LSa, _TS, _IIB, _DR, _SPp, _CT, _IC, _Ty, _VF, _VU, _LGa, _AZG, _BDMlo],
  [
    [() => RequestSpotLaunchSpecification, 0],
    [
      () => TagSpecificationList,
      {
        [_xN]: _TSa,
      },
    ],
    0,
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
        [_eQN]: `SpotPrice`,
        [_xN]: _sPp,
      },
    ],
    [
      0,
      {
        [_eQN]: `ClientToken`,
        [_xN]: _cT,
      },
    ],
    [
      1,
      {
        [_eQN]: `InstanceCount`,
        [_xN]: _iC,
      },
    ],
    [
      0,
      {
        [_eQN]: `Type`,
        [_xN]: _ty,
      },
    ],
    [
      4,
      {
        [_eQN]: `ValidFrom`,
        [_xN]: _vF,
      },
    ],
    [
      4,
      {
        [_eQN]: `ValidUntil`,
        [_xN]: _vU,
      },
    ],
    [
      0,
      {
        [_eQN]: `LaunchGroup`,
        [_xN]: _lG,
      },
    ],
    [
      0,
      {
        [_eQN]: `AvailabilityZoneGroup`,
        [_xN]: _aZG,
      },
    ],
    [
      1,
      {
        [_eQN]: `BlockDurationMinutes`,
        [_xN]: _bDMl,
      },
    ],
  ]
);
export var RequestSpotInstancesResult = struct(
  n0,
  _RSIRe,
  0,
  [_SIR],
  [
    [
      () => SpotInstanceRequestList,
      {
        [_eQN]: `SpotInstanceRequestSet`,
        [_xN]: _sIRS,
      },
    ],
  ]
);
export var RequestSpotLaunchSpecification = struct(
  n0,
  _RSLS,
  0,
  [_SGIe, _SG, _ATddr, _BDMl, _EO, _IIP, _IIm, _IT, _KI, _KN, _Mon, _NIet, _Pla, _RIa, _SIu, _UDs],
  [
    [
      () => RequestSpotLaunchSpecificationSecurityGroupIdList,
      {
        [_xN]: _SGI,
      },
    ],
    [
      () => RequestSpotLaunchSpecificationSecurityGroupList,
      {
        [_xN]: _SGe,
      },
    ],
    [
      0,
      {
        [_eQN]: `AddressingType`,
        [_xN]: _aTdd,
      },
    ],
    [
      () => BlockDeviceMappingList,
      {
        [_eQN]: `BlockDeviceMapping`,
        [_xN]: _bDM,
      },
    ],
    [
      2,
      {
        [_eQN]: `EbsOptimized`,
        [_xN]: _eO,
      },
    ],
    [
      () => IamInstanceProfileSpecification,
      {
        [_eQN]: `IamInstanceProfile`,
        [_xN]: _iIP,
      },
    ],
    [
      0,
      {
        [_eQN]: `ImageId`,
        [_xN]: _iIma,
      },
    ],
    [
      0,
      {
        [_eQN]: `InstanceType`,
        [_xN]: _iT,
      },
    ],
    [
      0,
      {
        [_eQN]: `KernelId`,
        [_xN]: _kI,
      },
    ],
    [
      0,
      {
        [_eQN]: `KeyName`,
        [_xN]: _kN,
      },
    ],
    [
      () => RunInstancesMonitoringEnabled,
      {
        [_eQN]: `Monitoring`,
        [_xN]: _mo,
      },
    ],
    [
      () => InstanceNetworkInterfaceSpecificationList,
      {
        [_xN]: _NIe,
      },
    ],
    [
      () => SpotPlacement,
      {
        [_eQN]: `Placement`,
        [_xN]: _pla,
      },
    ],
    [
      0,
      {
        [_eQN]: `RamdiskId`,
        [_xN]: _rIa,
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
      () => SensitiveUserData,
      {
        [_eQN]: `UserData`,
        [_xN]: _uDs,
      },
    ],
  ]
);
export var RunInstancesMonitoringEnabled = struct(
  n0,
  _RIME,
  0,
  [_En],
  [
    [
      2,
      {
        [_eQN]: `Enabled`,
        [_xN]: _en,
      },
    ],
  ]
);
export var SpotCapacityRebalance = struct(
  n0,
  _SCRp,
  0,
  [_RSe, _TDe],
  [
    [
      0,
      {
        [_eQN]: `ReplacementStrategy`,
        [_xN]: _rSep,
      },
    ],
    [
      1,
      {
        [_eQN]: `TerminationDelay`,
        [_xN]: _tD,
      },
    ],
  ]
);
export var SpotFleetLaunchSpecification = struct(
  n0,
  _SFLS,
  0,
  [_ATddr, _BDMl, _EO, _IIP, _IIm, _IT, _KI, _KN, _Mon, _NIet, _Pla, _RIa, _SPp, _SIu, _UDs, _WCe, _TS, _IRn, _SG],
  [
    [
      0,
      {
        [_eQN]: `AddressingType`,
        [_xN]: _aTdd,
      },
    ],
    [
      () => BlockDeviceMappingList,
      {
        [_eQN]: `BlockDeviceMapping`,
        [_xN]: _bDM,
      },
    ],
    [
      2,
      {
        [_eQN]: `EbsOptimized`,
        [_xN]: _eO,
      },
    ],
    [
      () => IamInstanceProfileSpecification,
      {
        [_eQN]: `IamInstanceProfile`,
        [_xN]: _iIP,
      },
    ],
    [
      0,
      {
        [_eQN]: `ImageId`,
        [_xN]: _iIma,
      },
    ],
    [
      0,
      {
        [_eQN]: `InstanceType`,
        [_xN]: _iT,
      },
    ],
    [
      0,
      {
        [_eQN]: `KernelId`,
        [_xN]: _kI,
      },
    ],
    [
      0,
      {
        [_eQN]: `KeyName`,
        [_xN]: _kN,
      },
    ],
    [
      () => SpotFleetMonitoring,
      {
        [_eQN]: `Monitoring`,
        [_xN]: _mo,
      },
    ],
    [
      () => InstanceNetworkInterfaceSpecificationList,
      {
        [_eQN]: `NetworkInterfaceSet`,
        [_xN]: _nIS,
      },
    ],
    [
      () => SpotPlacement,
      {
        [_eQN]: `Placement`,
        [_xN]: _pla,
      },
    ],
    [
      0,
      {
        [_eQN]: `RamdiskId`,
        [_xN]: _rIa,
      },
    ],
    [
      0,
      {
        [_eQN]: `SpotPrice`,
        [_xN]: _sPp,
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
      () => SensitiveUserData,
      {
        [_eQN]: `UserData`,
        [_xN]: _uDs,
      },
    ],
    [
      1,
      {
        [_eQN]: `WeightedCapacity`,
        [_xN]: _wC,
      },
    ],
    [
      () => SpotFleetTagSpecificationList,
      {
        [_eQN]: `TagSpecificationSet`,
        [_xN]: _tSS,
      },
    ],
    [
      () => InstanceRequirements,
      {
        [_eQN]: `InstanceRequirements`,
        [_xN]: _iR,
      },
    ],
    [
      () => GroupIdentifierList,
      {
        [_eQN]: `GroupSet`,
        [_xN]: _gS,
      },
    ],
  ]
);
export var SpotFleetMonitoring = struct(
  n0,
  _SFM,
  0,
  [_En],
  [
    [
      2,
      {
        [_eQN]: `Enabled`,
        [_xN]: _en,
      },
    ],
  ]
);
export var SpotFleetRequestConfig = struct(
  n0,
  _SFRCp,
  0,
  [_ASc, _CTr, _SFRCp, _SFRI, _SFRS, _T],
  [
    [
      0,
      {
        [_eQN]: `ActivityStatus`,
        [_xN]: _aSc,
      },
    ],
    [
      4,
      {
        [_eQN]: `CreateTime`,
        [_xN]: _cTr,
      },
    ],
    [
      () => SpotFleetRequestConfigData,
      {
        [_eQN]: `SpotFleetRequestConfig`,
        [_xN]: _sFRC,
      },
    ],
    [
      0,
      {
        [_eQN]: `SpotFleetRequestId`,
        [_xN]: _sFRI,
      },
    ],
    [
      0,
      {
        [_eQN]: `SpotFleetRequestState`,
        [_xN]: _sFRSp,
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
export var SpotFleetRequestConfigData = struct(
  n0,
  _SFRCD,
  0,
  [
    _ASl,
    _ODAS,
    _SMS,
    _CT,
    _ECTP,
    _FCu,
    _ODFC,
    _IFR,
    _LSau,
    _LTC,
    _SPp,
    _TCar,
    _ODTC,
    _ODMTP,
    _SMTP,
    _TIWE,
    _Ty,
    _VF,
    _VU,
    _RUI,
    _IIB,
    _LBC,
    _IPTUC,
    _Con,
    _TCUT,
    _TS,
  ],
  [
    [
      0,
      {
        [_eQN]: `AllocationStrategy`,
        [_xN]: _aSl,
      },
    ],
    [
      0,
      {
        [_eQN]: `OnDemandAllocationStrategy`,
        [_xN]: _oDAS,
      },
    ],
    [
      () => SpotMaintenanceStrategies,
      {
        [_eQN]: `SpotMaintenanceStrategies`,
        [_xN]: _sMS,
      },
    ],
    [
      0,
      {
        [_eQN]: `ClientToken`,
        [_xN]: _cT,
      },
    ],
    [
      0,
      {
        [_eQN]: `ExcessCapacityTerminationPolicy`,
        [_xN]: _eCTP,
      },
    ],
    [
      1,
      {
        [_eQN]: `FulfilledCapacity`,
        [_xN]: _fC,
      },
    ],
    [
      1,
      {
        [_eQN]: `OnDemandFulfilledCapacity`,
        [_xN]: _oDFC,
      },
    ],
    [
      0,
      {
        [_eQN]: `IamFleetRole`,
        [_xN]: _iFR,
      },
    ],
    [
      () => LaunchSpecsList,
      {
        [_eQN]: `LaunchSpecifications`,
        [_xN]: _lSau,
      },
    ],
    [
      () => LaunchTemplateConfigList,
      {
        [_eQN]: `LaunchTemplateConfigs`,
        [_xN]: _lTC,
      },
    ],
    [
      0,
      {
        [_eQN]: `SpotPrice`,
        [_xN]: _sPp,
      },
    ],
    [
      1,
      {
        [_eQN]: `TargetCapacity`,
        [_xN]: _tCa,
      },
    ],
    [
      1,
      {
        [_eQN]: `OnDemandTargetCapacity`,
        [_xN]: _oDTC,
      },
    ],
    [
      0,
      {
        [_eQN]: `OnDemandMaxTotalPrice`,
        [_xN]: _oDMTP,
      },
    ],
    [
      0,
      {
        [_eQN]: `SpotMaxTotalPrice`,
        [_xN]: _sMTP,
      },
    ],
    [
      2,
      {
        [_eQN]: `TerminateInstancesWithExpiration`,
        [_xN]: _tIWE,
      },
    ],
    [
      0,
      {
        [_eQN]: `Type`,
        [_xN]: _ty,
      },
    ],
    [
      4,
      {
        [_eQN]: `ValidFrom`,
        [_xN]: _vF,
      },
    ],
    [
      4,
      {
        [_eQN]: `ValidUntil`,
        [_xN]: _vU,
      },
    ],
    [
      2,
      {
        [_eQN]: `ReplaceUnhealthyInstances`,
        [_xN]: _rUI,
      },
    ],
    [
      0,
      {
        [_eQN]: `InstanceInterruptionBehavior`,
        [_xN]: _iIB,
      },
    ],
    [
      () => LoadBalancersConfig,
      {
        [_eQN]: `LoadBalancersConfig`,
        [_xN]: _lBC,
      },
    ],
    [
      1,
      {
        [_eQN]: `InstancePoolsToUseCount`,
        [_xN]: _iPTUC,
      },
    ],
    [
      0,
      {
        [_eQN]: `Context`,
        [_xN]: _cont,
      },
    ],
    [
      0,
      {
        [_eQN]: `TargetCapacityUnitType`,
        [_xN]: _tCUT,
      },
    ],
    [
      () => TagSpecificationList,
      {
        [_xN]: _TSa,
      },
    ],
  ]
);
export var SpotFleetTagSpecification = struct(
  n0,
  _SFTS,
  0,
  [_RTe, _T],
  [
    [
      0,
      {
        [_eQN]: `ResourceType`,
        [_xN]: _rTe,
      },
    ],
    [
      () => TagList,
      {
        [_eQN]: `Tag`,
        [_xN]: _ta,
      },
    ],
  ]
);
export var SpotInstanceRequest = struct(
  n0,
  _SIRp,
  0,
  [_ABHP, _AZG, _BDMlo, _CTr, _Fa, _II, _LGa, _LSa, _LAZ, _LAZI, _PDr, _SIRI, _SPp, _St, _Sta, _T, _Ty, _VF, _VU, _IIB],
  [
    [
      0,
      {
        [_eQN]: `ActualBlockHourlyPrice`,
        [_xN]: _aBHP,
      },
    ],
    [
      0,
      {
        [_eQN]: `AvailabilityZoneGroup`,
        [_xN]: _aZG,
      },
    ],
    [
      1,
      {
        [_eQN]: `BlockDurationMinutes`,
        [_xN]: _bDMl,
      },
    ],
    [
      4,
      {
        [_eQN]: `CreateTime`,
        [_xN]: _cTr,
      },
    ],
    [
      () => SpotInstanceStateFault,
      {
        [_eQN]: `Fault`,
        [_xN]: _fa,
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
        [_eQN]: `LaunchGroup`,
        [_xN]: _lG,
      },
    ],
    [
      () => LaunchSpecification,
      {
        [_eQN]: `LaunchSpecification`,
        [_xN]: _lSa,
      },
    ],
    [
      0,
      {
        [_eQN]: `LaunchedAvailabilityZone`,
        [_xN]: _lAZ,
      },
    ],
    [
      0,
      {
        [_eQN]: `LaunchedAvailabilityZoneId`,
        [_xN]: _lAZI,
      },
    ],
    [
      0,
      {
        [_eQN]: `ProductDescription`,
        [_xN]: _pDr,
      },
    ],
    [
      0,
      {
        [_eQN]: `SpotInstanceRequestId`,
        [_xN]: _sIRI,
      },
    ],
    [
      0,
      {
        [_eQN]: `SpotPrice`,
        [_xN]: _sPp,
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
      () => SpotInstanceStatus,
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
        [_eQN]: `Type`,
        [_xN]: _ty,
      },
    ],
    [
      4,
      {
        [_eQN]: `ValidFrom`,
        [_xN]: _vF,
      },
    ],
    [
      4,
      {
        [_eQN]: `ValidUntil`,
        [_xN]: _vU,
      },
    ],
    [
      0,
      {
        [_eQN]: `InstanceInterruptionBehavior`,
        [_xN]: _iIB,
      },
    ],
  ]
);
export var SpotInstanceStatus = struct(
  n0,
  _SISp,
  0,
  [_Co, _Me, _UT],
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
    [
      4,
      {
        [_eQN]: `UpdateTime`,
        [_xN]: _uT,
      },
    ],
  ]
);
export var SpotMaintenanceStrategies = struct(
  n0,
  _SMS,
  0,
  [_CRapa],
  [
    [
      () => SpotCapacityRebalance,
      {
        [_eQN]: `CapacityRebalance`,
        [_xN]: _cRa,
      },
    ],
  ]
);
export var SpotPlacement = struct(
  n0,
  _SPpo,
  0,
  [_AZ, _GN, _Te],
  [
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
        [_eQN]: `GroupName`,
        [_xN]: _gN,
      },
    ],
    [
      0,
      {
        [_eQN]: `Tenancy`,
        [_xN]: _t,
      },
    ],
  ]
);
export var TargetGroup = struct(
  n0,
  _TGa,
  0,
  [_Ar],
  [
    [
      0,
      {
        [_eQN]: `Arn`,
        [_xN]: _ar,
      },
    ],
  ]
);
export var TargetGroupsConfig = struct(
  n0,
  _TGCa,
  0,
  [_TGar],
  [
    [
      () => TargetGroups,
      {
        [_eQN]: `TargetGroups`,
        [_xN]: _tGa,
      },
    ],
  ]
);
export var AssociatedSubnetList = list(n0, _ASL, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var ClassicLinkInstanceList = list(n0, _CLIL, 0, [
  () => ClassicLinkInstance,
  {
    [_xN]: _it,
  },
]);
export var ClassicLoadBalancers = list(n0, _CLBl, 0, [
  () => ClassicLoadBalancer,
  {
    [_xN]: _it,
  },
]);
export var GroupIdentifierList = list(n0, _GIL, 0, [
  () => GroupIdentifier,
  {
    [_xN]: _it,
  },
]);
export var InstanceBlockDeviceMappingList = list(n0, _IBDML, 0, [
  () => InstanceBlockDeviceMapping,
  {
    [_xN]: _it,
  },
]);
export var InstanceNetworkInterfaceSpecificationList = list(n0, _INISL, 0, [
  () => InstanceNetworkInterfaceSpecification,
  {
    [_xN]: _it,
  },
]);
export var Ipv6PrefixesList = list(n0, _IPLpvre, 0, [
  () => Ipv6PrefixSpecification,
  {
    [_xN]: _it,
  },
]);
export var LaunchSpecsList = list(n0, _LSLa, 0, [
  () => SpotFleetLaunchSpecification,
  {
    [_xN]: _it,
  },
]);
export var NetworkInterfaceIdList = list(n0, _NIIL, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var NetworkInterfaceIpv6AddressesList = list(n0, _NIIAL, 0, [
  () => NetworkInterfaceIpv6Address,
  {
    [_xN]: _it,
  },
]);
export var NetworkInterfaceList = list(n0, _NIL, 0, [
  () => NetworkInterface,
  {
    [_xN]: _it,
  },
]);
export var NetworkInterfacePrivateIpAddressList = list(n0, _NIPIAL, 0, [
  () => NetworkInterfacePrivateIpAddress,
  {
    [_xN]: _it,
  },
]);
export var RequestSpotLaunchSpecificationSecurityGroupIdList = list(n0, _RSLSSGIL, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var RequestSpotLaunchSpecificationSecurityGroupList = list(n0, _RSLSSGL, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var SpotFleetRequestConfigSet = list(n0, _SFRCS, 0, [
  () => SpotFleetRequestConfig,
  {
    [_xN]: _it,
  },
]);
export var SpotFleetTagSpecificationList = list(n0, _SFTSL, 0, [
  () => SpotFleetTagSpecification,
  {
    [_xN]: _it,
  },
]);
export var SpotInstanceRequestList = list(n0, _SIRL, 0, [
  () => SpotInstanceRequest,
  {
    [_xN]: _it,
  },
]);
export var TargetGroups = list(n0, _TGar, 0, [
  () => TargetGroup,
  {
    [_xN]: _it,
  },
]);
export var CreateNetworkInterface = op(
  n0,
  _CNIr,
  0,
  () => CreateNetworkInterfaceRequest,
  () => CreateNetworkInterfaceResult
);
export var DescribeClassicLinkInstances = op(
  n0,
  _DCLI,
  0,
  () => DescribeClassicLinkInstancesRequest,
  () => DescribeClassicLinkInstancesResult
);
export var DescribeInstanceAttribute = op(
  n0,
  _DIAe,
  0,
  () => DescribeInstanceAttributeRequest,
  () => InstanceAttribute
);
export var DescribeNetworkInterfaceAttribute = op(
  n0,
  _DNIAes,
  0,
  () => DescribeNetworkInterfaceAttributeRequest,
  () => DescribeNetworkInterfaceAttributeResult
);
export var DescribeNetworkInterfaces = op(
  n0,
  _DNIe,
  0,
  () => DescribeNetworkInterfacesRequest,
  () => DescribeNetworkInterfacesResult
);
export var DescribeSpotFleetRequests = op(
  n0,
  _DSFR,
  0,
  () => DescribeSpotFleetRequestsRequest,
  () => DescribeSpotFleetRequestsResponse
);
export var DescribeSpotInstanceRequests = op(
  n0,
  _DSIRes,
  0,
  () => DescribeSpotInstanceRequestsRequest,
  () => DescribeSpotInstanceRequestsResult
);
export var RequestSpotFleet = op(
  n0,
  _RSF,
  0,
  () => RequestSpotFleetRequest,
  () => RequestSpotFleetResponse
);
export var RequestSpotInstances = op(
  n0,
  _RSIeq,
  0,
  () => RequestSpotInstancesRequest,
  () => RequestSpotInstancesResult
);
