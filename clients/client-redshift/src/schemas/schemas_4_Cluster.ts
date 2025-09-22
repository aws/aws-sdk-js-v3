// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  ClusterAlreadyExistsFault as __ClusterAlreadyExistsFault,
  ClusterQuotaExceededFault as __ClusterQuotaExceededFault,
  ClusterSubnetGroupAlreadyExistsFault as __ClusterSubnetGroupAlreadyExistsFault,
  ClusterSubnetGroupQuotaExceededFault as __ClusterSubnetGroupQuotaExceededFault,
  ClusterSubnetQuotaExceededFault as __ClusterSubnetQuotaExceededFault,
  CopyToRegionDisabledFault as __CopyToRegionDisabledFault,
  DependentServiceRequestThrottlingFault as __DependentServiceRequestThrottlingFault,
  IncompatibleOrderableOptions as __IncompatibleOrderableOptions,
  InvalidElasticIpFault as __InvalidElasticIpFault,
  InvalidSubnet as __InvalidSubnet,
  InvalidVPCNetworkStateFault as __InvalidVPCNetworkStateFault,
  Ipv6CidrBlockNotFoundFault as __Ipv6CidrBlockNotFoundFault,
  SnapshotCopyAlreadyEnabledFault as __SnapshotCopyAlreadyEnabledFault,
  SnapshotCopyGrantAlreadyExistsFault as __SnapshotCopyGrantAlreadyExistsFault,
  SnapshotCopyGrantQuotaExceededFault as __SnapshotCopyGrantQuotaExceededFault,
  SubnetAlreadyInUse as __SubnetAlreadyInUse,
  TableLimitExceededFault as __TableLimitExceededFault,
  UnknownSnapshotCopyRegionFault as __UnknownSnapshotCopyRegionFault,
} from "../models/index";
import {
  _ACS,
  _AId,
  _aQE,
  _ASRP,
  _AVU,
  _AZ,
  _AZR,
  _C,
  _c,
  _CAEF,
  _CCM,
  _CCR,
  _CCr,
  _CCSGMr,
  _CCSGr,
  _CCSGRr,
  _CIl,
  _CPGN,
  _CQEF,
  _CSCG,
  _CSCGM,
  _CSCGR,
  _CSGAEFl,
  _CSGl,
  _CSGlu,
  _CSGN,
  _CSGNL,
  _CSGNl,
  _CSGQEFl,
  _CSQEFl,
  _CT,
  _CTRDF,
  _CV,
  _D,
  _DBN,
  _DIRA,
  _DR,
  _DSRTF,
  _e,
  _EI,
  _Enc,
  _ESC,
  _ESCM,
  _ESCR,
  _EVR,
  _HCCI,
  _HCI,
  _hE,
  _IAT,
  _ICBNFF,
  _IEIF,
  _IOO,
  _IR,
  _IS,
  _IVPCNSF,
  _KKI,
  _LSD,
  _m,
  _MAZ,
  _MC,
  _MCM,
  _MCR,
  _MCSG,
  _MCSGM,
  _MCSGR,
  _MMP,
  _MPSKKI,
  _MSRP,
  _MTN,
  _MU,
  _MUP,
  _NCI,
  _NON,
  _NT,
  _PA,
  _PMW,
  _Po,
  _REK,
  _REKM,
  _REKR,
  _RIAA,
  _RP,
  _SAIU,
  _SCAEF,
  _SCG,
  _SCGAEF,
  _SCGN,
  _SCGQEF,
  _SILu,
  _SIu,
  _SIubn,
  _SSI,
  _T,
  _TLEF,
  _USCRF,
  _VSGI,
  _xN,
  Cluster,
  n0,
  SensitiveString,
  TagList,
} from "./schemas_0";
import { ClusterSubnetGroup } from "./schemas_39_Describe";
import { IamRoleArnList } from "./schemas_49_Cluster";
import { SnapshotCopyGrant } from "./schemas_62_Snapshot";
import { VpcSecurityGroupIdList } from "./schemas_71_Cluster";

/* eslint no-var: 0 */

export var ClusterAlreadyExistsFault = error(
  n0,
  _CAEF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`ClusterAlreadyExists`, 400],
  },
  [_m],
  [0],

  __ClusterAlreadyExistsFault
);
export var ClusterQuotaExceededFault = error(
  n0,
  _CQEF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`ClusterQuotaExceeded`, 400],
  },
  [_m],
  [0],

  __ClusterQuotaExceededFault
);
export var ClusterSubnetGroupAlreadyExistsFault = error(
  n0,
  _CSGAEFl,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`ClusterSubnetGroupAlreadyExists`, 400],
  },
  [_m],
  [0],

  __ClusterSubnetGroupAlreadyExistsFault
);
export var ClusterSubnetGroupQuotaExceededFault = error(
  n0,
  _CSGQEFl,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`ClusterSubnetGroupQuotaExceeded`, 400],
  },
  [_m],
  [0],

  __ClusterSubnetGroupQuotaExceededFault
);
export var ClusterSubnetQuotaExceededFault = error(
  n0,
  _CSQEFl,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`ClusterSubnetQuotaExceededFault`, 400],
  },
  [_m],
  [0],

  __ClusterSubnetQuotaExceededFault
);
export var CopyToRegionDisabledFault = error(
  n0,
  _CTRDF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`CopyToRegionDisabledFault`, 400],
  },
  [_m],
  [0],

  __CopyToRegionDisabledFault
);
export var CreateClusterMessage = struct(
  n0,
  _CCM,
  0,
  [
    _DBN,
    _CIl,
    _CT,
    _NT,
    _MU,
    _MUP,
    _CSGl,
    _VSGI,
    _CSGNl,
    _AZ,
    _PMW,
    _CPGN,
    _ASRP,
    _MSRP,
    _Po,
    _CV,
    _AVU,
    _NON,
    _PA,
    _Enc,
    _HCCI,
    _HCI,
    _EI,
    _T,
    _KKI,
    _EVR,
    _AId,
    _IR,
    _MTN,
    _SSI,
    _AZR,
    _ACS,
    _DIRA,
    _LSD,
    _MMP,
    _MPSKKI,
    _IAT,
    _MAZ,
    _RIAA,
  ],
  [
    0,
    0,
    0,
    0,
    0,
    [() => SensitiveString, 0],
    [() => ClusterSecurityGroupNameList, 0],
    [() => VpcSecurityGroupIdList, 0],
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    0,
    2,
    1,
    2,
    2,
    0,
    0,
    0,
    [() => TagList, 0],
    0,
    2,
    0,
    [() => IamRoleArnList, 0],
    0,
    0,
    2,
    0,
    0,
    0,
    2,
    0,
    0,
    2,
    0,
  ]
);
export var CreateClusterResult = struct(n0, _CCR, 0, [_C], [[() => Cluster, 0]]);
export var CreateClusterSubnetGroupMessage = struct(
  n0,
  _CCSGMr,
  0,
  [_CSGNl, _D, _SIu, _T],
  [0, 0, [() => SubnetIdentifierList, 0], [() => TagList, 0]]
);
export var CreateClusterSubnetGroupResult = struct(n0, _CCSGRr, 0, [_CSGlu], [[() => ClusterSubnetGroup, 0]]);
export var CreateSnapshotCopyGrantMessage = struct(n0, _CSCGM, 0, [_SCGN, _KKI, _T], [0, 0, [() => TagList, 0]]);
export var CreateSnapshotCopyGrantResult = struct(n0, _CSCGR, 0, [_SCG], [[() => SnapshotCopyGrant, 0]]);
export var DependentServiceRequestThrottlingFault = error(
  n0,
  _DSRTF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`DependentServiceRequestThrottlingFault`, 400],
  },
  [_m],
  [0],

  __DependentServiceRequestThrottlingFault
);
export var EnableSnapshotCopyMessage = struct(n0, _ESCM, 0, [_CIl, _DR, _RP, _SCGN, _MSRP], [0, 0, 1, 0, 1]);
export var EnableSnapshotCopyResult = struct(n0, _ESCR, 0, [_C], [[() => Cluster, 0]]);
export var IncompatibleOrderableOptions = error(
  n0,
  _IOO,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`IncompatibleOrderableOptions`, 400],
  },
  [_m],
  [0],

  __IncompatibleOrderableOptions
);
export var InvalidElasticIpFault = error(
  n0,
  _IEIF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidElasticIpFault`, 400],
  },
  [_m],
  [0],

  __InvalidElasticIpFault
);
export var InvalidSubnet = error(
  n0,
  _IS,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidSubnet`, 400],
  },
  [_m],
  [0],

  __InvalidSubnet
);
export var InvalidVPCNetworkStateFault = error(
  n0,
  _IVPCNSF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidVPCNetworkStateFault`, 400],
  },
  [_m],
  [0],

  __InvalidVPCNetworkStateFault
);
export var Ipv6CidrBlockNotFoundFault = error(
  n0,
  _ICBNFF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`Ipv6CidrBlockNotFoundFault`, 400],
  },
  [_m],
  [0],

  __Ipv6CidrBlockNotFoundFault
);
export var ModifyClusterMessage = struct(
  n0,
  _MCM,
  0,
  [
    _CIl,
    _CT,
    _NT,
    _NON,
    _CSGl,
    _VSGI,
    _MUP,
    _CPGN,
    _ASRP,
    _MSRP,
    _PMW,
    _CV,
    _AVU,
    _HCCI,
    _HCI,
    _NCI,
    _PA,
    _EI,
    _EVR,
    _MTN,
    _Enc,
    _KKI,
    _AZR,
    _AZ,
    _Po,
    _MMP,
    _MPSKKI,
    _IAT,
    _MAZ,
  ],
  [
    0,
    0,
    0,
    1,
    [() => ClusterSecurityGroupNameList, 0],
    [() => VpcSecurityGroupIdList, 0],
    [() => SensitiveString, 0],
    0,
    1,
    1,
    0,
    0,
    2,
    0,
    0,
    0,
    2,
    0,
    2,
    0,
    2,
    0,
    2,
    0,
    1,
    2,
    0,
    0,
    2,
  ]
);
export var ModifyClusterResult = struct(n0, _MCR, 0, [_C], [[() => Cluster, 0]]);
export var ModifyClusterSubnetGroupMessage = struct(
  n0,
  _MCSGM,
  0,
  [_CSGNl, _D, _SIu],
  [0, 0, [() => SubnetIdentifierList, 0]]
);
export var ModifyClusterSubnetGroupResult = struct(n0, _MCSGR, 0, [_CSGlu], [[() => ClusterSubnetGroup, 0]]);
export var RotateEncryptionKeyMessage = struct(n0, _REKM, 0, [_CIl], [0]);
export var RotateEncryptionKeyResult = struct(n0, _REKR, 0, [_C], [[() => Cluster, 0]]);
export var SnapshotCopyAlreadyEnabledFault = error(
  n0,
  _SCAEF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`SnapshotCopyAlreadyEnabledFault`, 400],
  },
  [_m],
  [0],

  __SnapshotCopyAlreadyEnabledFault
);
export var SnapshotCopyGrantAlreadyExistsFault = error(
  n0,
  _SCGAEF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`SnapshotCopyGrantAlreadyExistsFault`, 400],
  },
  [_m],
  [0],

  __SnapshotCopyGrantAlreadyExistsFault
);
export var SnapshotCopyGrantQuotaExceededFault = error(
  n0,
  _SCGQEF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`SnapshotCopyGrantQuotaExceededFault`, 400],
  },
  [_m],
  [0],

  __SnapshotCopyGrantQuotaExceededFault
);
export var SubnetAlreadyInUse = error(
  n0,
  _SAIU,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`SubnetAlreadyInUse`, 400],
  },
  [_m],
  [0],

  __SubnetAlreadyInUse
);
export var TableLimitExceededFault = error(
  n0,
  _TLEF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`TableLimitExceeded`, 400],
  },
  [_m],
  [0],

  __TableLimitExceededFault
);
export var UnknownSnapshotCopyRegionFault = error(
  n0,
  _USCRF,
  {
    [_e]: _c,
    [_hE]: 404,
    [_aQE]: [`UnknownSnapshotCopyRegionFault`, 404],
  },
  [_m],
  [0],

  __UnknownSnapshotCopyRegionFault
);
export var ClusterSecurityGroupNameList = list(n0, _CSGNL, 0, [
  0,
  {
    [_xN]: _CSGN,
  },
]);
export var SubnetIdentifierList = list(n0, _SILu, 0, [
  0,
  {
    [_xN]: _SIubn,
  },
]);
export var CreateCluster = op(
  n0,
  _CCr,
  0,
  () => CreateClusterMessage,
  () => CreateClusterResult
);
export var CreateClusterSubnetGroup = op(
  n0,
  _CCSGr,
  0,
  () => CreateClusterSubnetGroupMessage,
  () => CreateClusterSubnetGroupResult
);
export var CreateSnapshotCopyGrant = op(
  n0,
  _CSCG,
  0,
  () => CreateSnapshotCopyGrantMessage,
  () => CreateSnapshotCopyGrantResult
);
export var EnableSnapshotCopy = op(
  n0,
  _ESC,
  0,
  () => EnableSnapshotCopyMessage,
  () => EnableSnapshotCopyResult
);
export var ModifyCluster = op(
  n0,
  _MC,
  0,
  () => ModifyClusterMessage,
  () => ModifyClusterResult
);
export var ModifyClusterSubnetGroup = op(
  n0,
  _MCSG,
  0,
  () => ModifyClusterSubnetGroupMessage,
  () => ModifyClusterSubnetGroupResult
);
export var RotateEncryptionKey = op(
  n0,
  _REK,
  0,
  () => RotateEncryptionKeyMessage,
  () => RotateEncryptionKeyResult
);
