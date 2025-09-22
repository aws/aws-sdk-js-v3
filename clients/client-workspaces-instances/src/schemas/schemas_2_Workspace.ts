// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _A,
  _ACIA,
  _Af,
  _APIA,
  _AR,
  _ASS,
  _AV,
  _AVR,
  _AVRs,
  _AZ,
  _BDM,
  _BDMl,
  _BDMR,
  _BW,
  _C,
  _CC,
  _CCp,
  _CO,
  _COR,
  _CRI,
  _CRP,
  _CRRGA,
  _CRS,
  _CRT,
  _CS,
  _CSR,
  _CT,
  _CTS,
  _CTSR,
  _CWI,
  _CWIR,
  _CWIRr,
  _D,
  _DAS,
  _De,
  _DI,
  _DM,
  _DN,
  _DVi,
  _DVRi,
  _DVRis,
  _DWI,
  _DWIR,
  _DWIRe,
  _E,
  _EBD,
  _EC,
  _ECEC,
  _ECEM,
  _ECET,
  _ECIE,
  _ECIEn,
  _ECMI,
  _EM,
  _En,
  _Ena,
  _EO,
  _EOn,
  _EOR,
  _EPI,
  _ERNDAAAAR,
  _ERNDAR,
  _ESE,
  _ESS,
  _ESSR,
  _ESUE,
  _ESUS,
  _ESUSR,
  _G,
  _GI,
  _GN,
  _GWI,
  _GWIR,
  _GWIRe,
  _HE,
  _HI,
  _HO,
  _HOR,
  _HPI,
  _HPRHL,
  _HRGA,
  _HT,
  _HTo,
  _I,
  _IA,
  _IAC,
  _IAp,
  _IApv,
  _II,
  _IIA,
  _IIB,
  _IIm,
  _IIP,
  _IIPS,
  _IMO,
  _IMOR,
  _IMORn,
  _IMORns,
  _IMT,
  _INIS,
  _INPOR,
  _IP,
  _IPC,
  _IPCp,
  _IPI,
  _IPp,
  _IPpv,
  _IPpvr,
  _IPSR,
  _IPSRp,
  _IT,
  _ITn,
  _KI,
  _KKI,
  _KN,
  _LCA,
  _LCR,
  _LS,
  _LTFR,
  _LTFRR,
  _LTFRRi,
  _LWI,
  _LWIR,
  _LWIRi,
  _MI,
  _MIR,
  _MO,
  _Mo,
  _MOe,
  _MP,
  _MR,
  _MT,
  _N,
  _NCI,
  _ND,
  _NI,
  _NII,
  _NPO,
  _NT,
  _P,
  _PDNO,
  _PDNOR,
  _PI,
  _PIA,
  _PIAr,
  _PIAS,
  _PN,
  _Pr,
  _PS,
  _PSr,
  _RIa,
  _RIME,
  _SG,
  _SGI,
  _SIT,
  _SIu,
  _SMO,
  _SO,
  _SPIAC,
  _T,
  _Ta,
  _Te,
  _TET,
  _TK,
  _TPC,
  _TR,
  _TRR,
  _TRRa,
  _TS,
  _UD,
  _UR,
  _URR,
  _URRn,
  _UST,
  _UT,
  _VI,
  _VN,
  _VS,
  _VT,
  _VUU,
  _WI,
  _WIE,
  _WIEo,
  _WII,
  _WIo,
  n0,
} from "./schemas_0";
import { NextToken } from "./schemas_1_List";
import { ClientToken, KmsKeyId, TagSpecifications } from "./schemas_3_Volume";
import { TagList } from "./schemas_5_Resource";

/* eslint no-var: 0 */

export var Ipv4Address = sim(n0, _IA, 0, 8);
export var Ipv6Address = sim(n0, _IAp, 0, 8);
export var UserData = sim(n0, _UD, 0, 8);
export var AssociateVolumeRequest = struct(n0, _AVR, 0, [_WII, _VI, _D], [0, 0, 0]);
export var AssociateVolumeResponse = struct(n0, _AVRs, 0, [], []);
export var BlockDeviceMappingRequest = struct(n0, _BDMR, 0, [_DN, _E, _ND, _VN], [0, [() => EbsBlockDevice, 0], 0, 0]);
export var CapacityReservationSpecification = struct(n0, _CRS, 0, [_CRP, _CRT], [0, () => CapacityReservationTarget]);
export var CapacityReservationTarget = struct(n0, _CRT, 0, [_CRI, _CRRGA], [0, 0]);
export var ConnectionTrackingSpecificationRequest = struct(n0, _CTSR, 0, [_TET, _UST, _UT], [1, 1, 1]);
export var CpuOptionsRequest = struct(n0, _COR, 0, [_ASS, _CC, _TPC], [0, 1, 1]);
export var CreateWorkspaceInstanceRequest = struct(
  n0,
  _CWIR,
  0,
  [_CT, _Ta, _MI],
  [[() => ClientToken, 4], () => TagList, [() => ManagedInstanceRequest, 0]]
);
export var CreateWorkspaceInstanceResponse = struct(n0, _CWIRr, 0, [_WII], [0]);
export var CreditSpecificationRequest = struct(n0, _CSR, 0, [_CCp], [0]);
export var DeleteWorkspaceInstanceRequest = struct(n0, _DWIR, 0, [_WII], [0]);
export var DeleteWorkspaceInstanceResponse = struct(n0, _DWIRe, 0, [], []);
export var DisassociateVolumeRequest = struct(n0, _DVRi, 0, [_WII, _VI, _D, _DM], [0, 0, 0, 0]);
export var DisassociateVolumeResponse = struct(n0, _DVRis, 0, [], []);
export var EbsBlockDevice = struct(n0, _EBD, 0, [_VT, _En, _KKI, _I, _T, _VS], [0, 2, [() => KmsKeyId, 0], 1, 1, 1]);
export var EC2InstanceError = struct(n0, _ECIE, 0, [_ECEC, _ECET, _ECEM], [0, 0, 0]);
export var EC2ManagedInstance = struct(n0, _ECMI, 0, [_II], [0]);
export var EnaSrdSpecificationRequest = struct(n0, _ESSR, 0, [_ESE, _ESUS], [2, () => EnaSrdUdpSpecificationRequest]);
export var EnaSrdUdpSpecificationRequest = struct(n0, _ESUSR, 0, [_ESUE], [2]);
export var EnclaveOptionsRequest = struct(n0, _EOR, 0, [_Ena], [2]);
export var GetWorkspaceInstanceRequest = struct(n0, _GWIR, 0, [_WII], [0]);
export var GetWorkspaceInstanceResponse = struct(
  n0,
  _GWIRe,
  0,
  [_WIE, _ECIEn, _PS, _WII, _ECMI],
  [() => WorkspaceInstanceErrors, () => EC2InstanceErrors, 0, 0, () => EC2ManagedInstance]
);
export var HibernationOptionsRequest = struct(n0, _HOR, 0, [_C], [2]);
export var IamInstanceProfileSpecification = struct(n0, _IIPS, 0, [_A, _N], [0, 0]);
export var InstanceIpv6Address = struct(n0, _IIA, 0, [_IAp, _IPI], [[() => Ipv6Address, 0], 2]);
export var InstanceMaintenanceOptionsRequest = struct(n0, _IMOR, 0, [_AR], [0]);
export var InstanceMarketOptionsRequest = struct(n0, _IMORn, 0, [_MT, _SO], [0, () => SpotMarketOptions]);
export var InstanceMetadataOptionsRequest = struct(n0, _IMORns, 0, [_HE, _HPI, _HPRHL, _HT, _IMT], [0, 0, 1, 0, 0]);
export var InstanceNetworkInterfaceSpecification = struct(
  n0,
  _INIS,
  0,
  [
    _ACIA,
    _APIA,
    _CTS,
    _De,
    _DI,
    _ESS,
    _IT,
    _IP,
    _IPC,
    _IAC,
    _IApv,
    _IPp,
    _IPCp,
    _NCI,
    _NII,
    _PI,
    _PIA,
    _PIAr,
    _SPIAC,
    _G,
    _SIu,
  ],
  [
    2,
    2,
    () => ConnectionTrackingSpecificationRequest,
    0,
    1,
    () => EnaSrdSpecificationRequest,
    0,
    () => Ipv4Prefixes,
    1,
    1,
    [() => Ipv6Addresses, 0],
    () => Ipv6Prefixes,
    1,
    1,
    0,
    2,
    [() => Ipv4Address, 0],
    [() => PrivateIpAddresses, 0],
    1,
    64 | 0,
    0,
  ]
);
export var InstanceNetworkPerformanceOptionsRequest = struct(n0, _INPOR, 0, [_BW], [0]);
export var Ipv4PrefixSpecificationRequest = struct(n0, _IPSR, 0, [_IPpv], [0]);
export var Ipv6PrefixSpecificationRequest = struct(n0, _IPSRp, 0, [_IPpvr], [0]);
export var LicenseConfigurationRequest = struct(n0, _LCR, 0, [_LCA], [0]);
export var ListTagsForResourceRequest = struct(n0, _LTFRR, 0, [_WII], [0]);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_Ta], [() => TagList]);
export var ListWorkspaceInstancesRequest = struct(n0, _LWIR, 0, [_PSr, _MR, _NT], [64 | 0, 1, [() => NextToken, 0]]);
export var ListWorkspaceInstancesResponse = struct(
  n0,
  _LWIRi,
  0,
  [_WI, _NT],
  [() => WorkspaceInstances, [() => NextToken, 0]]
);
export var ManagedInstanceRequest = struct(
  n0,
  _MIR,
  0,
  [
    _BDM,
    _CRS,
    _CO,
    _CS,
    _DAS,
    _EO,
    _EPI,
    _EOn,
    _HO,
    _IIP,
    _IIm,
    _IMO,
    _ITn,
    _IApv,
    _IAC,
    _KI,
    _KN,
    _LS,
    _MO,
    _MOe,
    _Mo,
    _NI,
    _NPO,
    _P,
    _PDNO,
    _PIA,
    _RIa,
    _SGI,
    _SG,
    _SIu,
    _TS,
    _UD,
  ],
  [
    [() => BlockDeviceMappings, 0],
    () => CapacityReservationSpecification,
    () => CpuOptionsRequest,
    () => CreditSpecificationRequest,
    2,
    2,
    2,
    () => EnclaveOptionsRequest,
    () => HibernationOptionsRequest,
    () => IamInstanceProfileSpecification,
    0,
    () => InstanceMarketOptionsRequest,
    0,
    [() => Ipv6Addresses, 0],
    1,
    0,
    0,
    () => LicenseSpecifications,
    () => InstanceMaintenanceOptionsRequest,
    () => InstanceMetadataOptionsRequest,
    () => RunInstancesMonitoringEnabled,
    [() => NetworkInterfaces, 0],
    () => InstanceNetworkPerformanceOptionsRequest,
    () => Placement,
    () => PrivateDnsNameOptionsRequest,
    [() => Ipv4Address, 0],
    0,
    64 | 0,
    64 | 0,
    0,
    () => TagSpecifications,
    [() => UserData, 0],
  ]
);
export var Placement = struct(n0, _P, 0, [_Af, _AZ, _GI, _GN, _HI, _HRGA, _PN, _Te], [0, 0, 0, 0, 0, 0, 1, 0]);
export var PrivateDnsNameOptionsRequest = struct(n0, _PDNOR, 0, [_HTo, _ERNDAR, _ERNDAAAAR], [0, 2, 2]);
export var PrivateIpAddressSpecification = struct(n0, _PIAS, 0, [_Pr, _PIA], [2, [() => Ipv4Address, 0]]);
export var RunInstancesMonitoringEnabled = struct(n0, _RIME, 0, [_Ena], [2]);
export var SpotMarketOptions = struct(n0, _SMO, 0, [_BDMl, _IIB, _MP, _SIT, _VUU], [1, 0, 0, 0, 4]);
export var TagResourceRequest = struct(n0, _TRR, 0, [_WII, _Ta], [0, () => TagList]);
export var TagResourceResponse = struct(n0, _TRRa, 0, [], []);
export var UntagResourceRequest = struct(n0, _URR, 0, [_WII, _TK], [0, 64 | 0]);
export var UntagResourceResponse = struct(n0, _URRn, 0, [], []);
export var WorkspaceInstance = struct(n0, _WIo, 0, [_PS, _WII, _ECMI], [0, 0, () => EC2ManagedInstance]);
export var WorkspaceInstanceError = struct(n0, _WIEo, 0, [_EC, _EM], [0, 0]);
export var BlockDeviceMappings = list(n0, _BDM, 0, [() => BlockDeviceMappingRequest, 0]);
export var EC2InstanceErrors = list(n0, _ECIEn, 0, () => EC2InstanceError);
export var Ipv4Prefixes = list(n0, _IP, 0, () => Ipv4PrefixSpecificationRequest);
export var Ipv6Addresses = list(n0, _IApv, 0, [() => InstanceIpv6Address, 0]);
export var Ipv6Prefixes = list(n0, _IPp, 0, () => Ipv6PrefixSpecificationRequest);
export var LicenseSpecifications = list(n0, _LS, 0, () => LicenseConfigurationRequest);
export var NetworkInterfaces = list(n0, _NI, 0, [() => InstanceNetworkInterfaceSpecification, 0]);
export var PrivateIpAddresses = list(n0, _PIAr, 0, [() => PrivateIpAddressSpecification, 0]);
export var ProvisionStates = 64 | 0;

export var SecurityGroupIds = 64 | 0;

export var SecurityGroupNames = 64 | 0;

export var TagKeyList = 64 | 0;

export var WorkspaceInstanceErrors = list(n0, _WIE, 0, () => WorkspaceInstanceError);
export var WorkspaceInstances = list(n0, _WI, 0, () => WorkspaceInstance);
export var AssociateVolume = op(
  n0,
  _AV,
  0,
  () => AssociateVolumeRequest,
  () => AssociateVolumeResponse
);
export var CreateWorkspaceInstance = op(
  n0,
  _CWI,
  2,
  () => CreateWorkspaceInstanceRequest,
  () => CreateWorkspaceInstanceResponse
);
export var DeleteWorkspaceInstance = op(
  n0,
  _DWI,
  0,
  () => DeleteWorkspaceInstanceRequest,
  () => DeleteWorkspaceInstanceResponse
);
export var DisassociateVolume = op(
  n0,
  _DVi,
  0,
  () => DisassociateVolumeRequest,
  () => DisassociateVolumeResponse
);
export var GetWorkspaceInstance = op(
  n0,
  _GWI,
  0,
  () => GetWorkspaceInstanceRequest,
  () => GetWorkspaceInstanceResponse
);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  0,
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse
);
export var ListWorkspaceInstances = op(
  n0,
  _LWI,
  0,
  () => ListWorkspaceInstancesRequest,
  () => ListWorkspaceInstancesResponse
);
export var TagResource = op(
  n0,
  _TR,
  0,
  () => TagResourceRequest,
  () => TagResourceResponse
);
export var UntagResource = op(
  n0,
  _UR,
  0,
  () => UntagResourceRequest,
  () => UntagResourceResponse
);
