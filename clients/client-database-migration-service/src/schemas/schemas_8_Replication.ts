// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  InsufficientResourceCapacityFault as __InsufficientResourceCapacityFault,
  StorageQuotaExceededFault as __StorageQuotaExceededFault,
  SubnetAlreadyInUse as __SubnetAlreadyInUse,
  UpgradeDependencyFailureFault as __UpgradeDependencyFailureFault,
} from "../models/index";
import {
  _AI,
  _AMVU,
  _AMVUl,
  _AS,
  _AZ,
  _c,
  _CRIM,
  _CRIR,
  _CRIr,
  _CRSG,
  _CRSGM,
  _CRSGR,
  _DNS,
  _DRI,
  _DRIe,
  _DRIM,
  _DRIMe,
  _DRIR,
  _DRIRe,
  _DRSGe,
  _DRSGMe,
  _DRSGRe,
  _e,
  _EV,
  _F,
  _FF,
  _FPF,
  _FU,
  _ICT,
  _IRCF,
  _KAS,
  _KCSI,
  _KCSIA,
  _KFC,
  _KKI,
  _m,
  _Ma,
  _MAZ,
  _MR,
  _MRI,
  _MRIM,
  _MRIR,
  _MRSG,
  _MRSGM,
  _MRSGR,
  _N,
  _NT,
  _PA,
  _PMV,
  _PMW,
  _RI,
  _RIA,
  _RIC,
  _RIe,
  _RIep,
  _RII,
  _RIIA,
  _RIL,
  _RIPIA,
  _RIPIAe,
  _RIPIAep,
  _RIPIAepl,
  _RIS,
  _RPMV,
  _RRI,
  _RRIM,
  _RRIR,
  _RSG,
  _RSGD,
  _RSGe,
  _RSGIe,
  _S,
  _SAIU,
  _SAZ,
  _SAZu,
  _SGS,
  _SILu,
  _SIu,
  _SIub,
  _SLu,
  _SNT,
  _SQEF,
  _SSub,
  _Su,
  _Sub,
  _T,
  _UDFF,
  _VI,
  _VSG,
  _VSGI,
  _VSGIL,
  _VSGIp,
  _VSGM,
  _VSGML,
  _xN,
  FilterList,
  n0,
  TagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AvailabilityZone = struct(n0, _AZ, 0, [_N], [0]);
export var CreateReplicationInstanceMessage = struct(
  n0,
  _CRIM,
  0,
  [_RII, _AS, _RIC, _VSGI, _AZ, _RSGIe, _PMW, _MAZ, _EV, _AMVU, _T, _KKI, _PA, _DNS, _RI, _NT, _KAS],
  [
    0,
    1,
    0,
    [() => VpcSecurityGroupIdList, 0],
    0,
    0,
    0,
    2,
    0,
    2,
    [() => TagList, 0],
    0,
    2,
    0,
    0,
    0,
    () => KerberosAuthenticationSettings,
  ]
);
export var CreateReplicationInstanceResponse = struct(n0, _CRIR, 0, [_RIe], [[() => ReplicationInstance, 0]]);
export var CreateReplicationSubnetGroupMessage = struct(
  n0,
  _CRSGM,
  0,
  [_RSGIe, _RSGD, _SIu, _T],
  [0, 0, [() => SubnetIdentifierList, 0], [() => TagList, 0]]
);
export var CreateReplicationSubnetGroupResponse = struct(n0, _CRSGR, 0, [_RSG], [[() => ReplicationSubnetGroup, 0]]);
export var DeleteReplicationInstanceMessage = struct(n0, _DRIM, 0, [_RIA], [0]);
export var DeleteReplicationInstanceResponse = struct(n0, _DRIR, 0, [_RIe], [[() => ReplicationInstance, 0]]);
export var DescribeReplicationInstancesMessage = struct(n0, _DRIMe, 0, [_F, _MR, _Ma], [[() => FilterList, 0], 1, 0]);
export var DescribeReplicationInstancesResponse = struct(
  n0,
  _DRIRe,
  0,
  [_Ma, _RIep],
  [0, [() => ReplicationInstanceList, 0]]
);
export var DescribeReplicationSubnetGroupsMessage = struct(
  n0,
  _DRSGMe,
  0,
  [_F, _MR, _Ma],
  [[() => FilterList, 0], 1, 0]
);
export var DescribeReplicationSubnetGroupsResponse = struct(
  n0,
  _DRSGRe,
  0,
  [_Ma, _RSGe],
  [0, [() => ReplicationSubnetGroups, 0]]
);
export var InsufficientResourceCapacityFault = error(
  n0,
  _IRCF,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __InsufficientResourceCapacityFault
);
export var KerberosAuthenticationSettings = struct(n0, _KAS, 0, [_KCSI, _KCSIA, _KFC], [0, 0, 0]);
export var ModifyReplicationInstanceMessage = struct(
  n0,
  _MRIM,
  0,
  [_RIA, _AS, _AI, _RIC, _VSGI, _PMW, _MAZ, _EV, _AMVUl, _AMVU, _RII, _NT, _KAS],
  [0, 1, 2, 0, [() => VpcSecurityGroupIdList, 0], 0, 2, 0, 2, 2, 0, 0, () => KerberosAuthenticationSettings]
);
export var ModifyReplicationInstanceResponse = struct(n0, _MRIR, 0, [_RIe], [[() => ReplicationInstance, 0]]);
export var ModifyReplicationSubnetGroupMessage = struct(
  n0,
  _MRSGM,
  0,
  [_RSGIe, _RSGD, _SIu],
  [0, 0, [() => SubnetIdentifierList, 0]]
);
export var ModifyReplicationSubnetGroupResponse = struct(n0, _MRSGR, 0, [_RSG], [[() => ReplicationSubnetGroup, 0]]);
export var RebootReplicationInstanceMessage = struct(n0, _RRIM, 0, [_RIA, _FF, _FPF], [0, 2, 2]);
export var RebootReplicationInstanceResponse = struct(n0, _RRIR, 0, [_RIe], [[() => ReplicationInstance, 0]]);
export var ReplicationInstance = struct(
  n0,
  _RIe,
  0,
  [
    _RII,
    _RIC,
    _RIS,
    _AS,
    _ICT,
    _VSG,
    _AZ,
    _RSG,
    _PMW,
    _PMV,
    _MAZ,
    _EV,
    _AMVU,
    _KKI,
    _RIA,
    _RIPIA,
    _RIPIAe,
    _RIPIAep,
    _RIPIAepl,
    _RIIA,
    _PA,
    _SAZ,
    _FU,
    _DNS,
    _NT,
    _KAS,
  ],
  [
    0,
    0,
    0,
    1,
    4,
    [() => VpcSecurityGroupMembershipList, 0],
    0,
    [() => ReplicationSubnetGroup, 0],
    0,
    () => ReplicationPendingModifiedValues,
    2,
    0,
    2,
    0,
    0,
    0,
    0,
    64 | 0,
    64 | 0,
    64 | 0,
    2,
    0,
    4,
    0,
    0,
    () => KerberosAuthenticationSettings,
  ]
);
export var ReplicationPendingModifiedValues = struct(n0, _RPMV, 0, [_RIC, _AS, _MAZ, _EV, _NT], [0, 1, 2, 0, 0]);
export var ReplicationSubnetGroup = struct(
  n0,
  _RSG,
  0,
  [_RSGIe, _RSGD, _VI, _SGS, _Su, _SNT],
  [0, 0, 0, 0, [() => SubnetList, 0], 64 | 0]
);
export var StorageQuotaExceededFault = error(
  n0,
  _SQEF,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __StorageQuotaExceededFault
);
export var Subnet = struct(n0, _Sub, 0, [_SIub, _SAZu, _SSub], [0, () => AvailabilityZone, 0]);
export var SubnetAlreadyInUse = error(
  n0,
  _SAIU,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __SubnetAlreadyInUse
);
export var UpgradeDependencyFailureFault = error(
  n0,
  _UDFF,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __UpgradeDependencyFailureFault
);
export var VpcSecurityGroupMembership = struct(n0, _VSGM, 0, [_VSGIp, _S], [0, 0]);
export var ReplicationInstanceIpv6AddressList = 64 | 0;

export var ReplicationInstanceList = list(n0, _RIL, 0, [
  () => ReplicationInstance,
  {
    [_xN]: _RIe,
  },
]);
export var ReplicationInstancePrivateIpAddressList = 64 | 0;

export var ReplicationInstancePublicIpAddressList = 64 | 0;

export var ReplicationSubnetGroups = list(n0, _RSGe, 0, [
  () => ReplicationSubnetGroup,
  {
    [_xN]: _RSG,
  },
]);
export var SubnetIdentifierList = list(n0, _SILu, 0, [
  0,
  {
    [_xN]: _SIub,
  },
]);
export var SubnetList = list(n0, _SLu, 0, [
  () => Subnet,
  {
    [_xN]: _Sub,
  },
]);
export var VpcSecurityGroupIdList = list(n0, _VSGIL, 0, [
  0,
  {
    [_xN]: _VSGIp,
  },
]);
export var VpcSecurityGroupMembershipList = list(n0, _VSGML, 0, [
  () => VpcSecurityGroupMembership,
  {
    [_xN]: _VSGM,
  },
]);
export var CreateReplicationInstance = op(
  n0,
  _CRIr,
  0,
  () => CreateReplicationInstanceMessage,
  () => CreateReplicationInstanceResponse
);
export var CreateReplicationSubnetGroup = op(
  n0,
  _CRSG,
  0,
  () => CreateReplicationSubnetGroupMessage,
  () => CreateReplicationSubnetGroupResponse
);
export var DeleteReplicationInstance = op(
  n0,
  _DRI,
  0,
  () => DeleteReplicationInstanceMessage,
  () => DeleteReplicationInstanceResponse
);
export var DescribeReplicationInstances = op(
  n0,
  _DRIe,
  0,
  () => DescribeReplicationInstancesMessage,
  () => DescribeReplicationInstancesResponse
);
export var DescribeReplicationSubnetGroups = op(
  n0,
  _DRSGe,
  0,
  () => DescribeReplicationSubnetGroupsMessage,
  () => DescribeReplicationSubnetGroupsResponse
);
export var ModifyReplicationInstance = op(
  n0,
  _MRI,
  0,
  () => ModifyReplicationInstanceMessage,
  () => ModifyReplicationInstanceResponse
);
export var ModifyReplicationSubnetGroup = op(
  n0,
  _MRSG,
  0,
  () => ModifyReplicationSubnetGroupMessage,
  () => ModifyReplicationSubnetGroupResponse
);
export var RebootReplicationInstance = op(
  n0,
  _RRI,
  0,
  () => RebootReplicationInstanceMessage,
  () => RebootReplicationInstanceResponse
);
