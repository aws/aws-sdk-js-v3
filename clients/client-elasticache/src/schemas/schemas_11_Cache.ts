// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AMVU,
  _AREE,
  _ARN,
  _ATE,
  _ATLMD,
  _ATS,
  _CAZ,
  _CC,
  _CCa,
  _CCCT,
  _CCIa,
  _CCL,
  _CCM,
  _CCS,
  _CDLP,
  _CE,
  _CN,
  _CNa,
  _CNCT,
  _CNI,
  _CNIL,
  _CNITR,
  _CNITRa,
  _CNL,
  _CNS,
  _CNT,
  _COA,
  _CPG,
  _CPGN,
  _CPGS,
  _CSG,
  _CSGa,
  _CSGM,
  _CSGML,
  _CSGN,
  _CSGNa,
  _DCCe,
  _DCCMe,
  _E,
  _En,
  _EV,
  _ID,
  _LDC,
  _M,
  _MR,
  _NC,
  _NCN,
  _NT,
  _PAS,
  _PAZ,
  _PGS,
  _PMV,
  _PMW,
  _POA,
  _RGIe,
  _RGLDE,
  _SCc,
  _SCCNIRG,
  _SCNI,
  _SCNIh,
  _SG,
  _SGIe,
  _SGM,
  _SGML,
  _SIM,
  _SP,
  _SRL,
  _St,
  _SW,
  _TA,
  _TEE,
  _TEM,
  _TS,
  _xN,
  Endpoint,
  LogDeliveryConfigurationList,
  n0,
  PendingLogDeliveryConfigurationList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CacheCluster = struct(
  n0,
  _CC,
  0,
  [
    _CCIa,
    _CE,
    _CDLP,
    _CNT,
    _E,
    _EV,
    _CCS,
    _NCN,
    _PAZ,
    _POA,
    _CCCT,
    _PMW,
    _PMV,
    _NC,
    _CSGa,
    _CPG,
    _CSGNa,
    _CN,
    _AMVU,
    _SG,
    _RGIe,
    _SRL,
    _SW,
    _ATE,
    _ATLMD,
    _TEE,
    _AREE,
    _ARN,
    _RGLDE,
    _LDC,
    _NT,
    _ID,
    _TEM,
  ],
  [
    0,
    () => Endpoint,
    0,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    4,
    0,
    [() => PendingModifiedValues, 0],
    () => NotificationConfiguration,
    [() => CacheSecurityGroupMembershipList, 0],
    [() => CacheParameterGroupStatus, 0],
    0,
    [() => CacheNodeList, 0],
    2,
    () => SecurityGroupMembershipList,
    0,
    1,
    0,
    2,
    4,
    2,
    2,
    0,
    2,
    [() => LogDeliveryConfigurationList, 0],
    0,
    0,
    0,
  ]
);
export var CacheClusterMessage = struct(n0, _CCM, 0, [_M, _CCa], [0, [() => CacheClusterList, 0]]);
export var CacheNode = struct(
  n0,
  _CNa,
  0,
  [_CNI, _CNS, _CNCT, _En, _PGS, _SCNI, _CAZ, _COA],
  [0, 0, 4, () => Endpoint, 0, 0, 0, 0]
);
export var CacheParameterGroupStatus = struct(n0, _CPGS, 0, [_CPGN, _PAS, _CNITR], [0, 0, [() => CacheNodeIdsList, 0]]);
export var CacheSecurityGroupMembership = struct(n0, _CSGM, 0, [_CSGN, _St], [0, 0]);
export var DescribeCacheClustersMessage = struct(n0, _DCCMe, 0, [_CCIa, _MR, _M, _SCNIh, _SCCNIRG], [0, 1, 0, 2, 2]);
export var NotificationConfiguration = struct(n0, _NC, 0, [_TA, _TS], [0, 0]);
export var PendingModifiedValues = struct(
  n0,
  _PMV,
  0,
  [_NCN, _CNITRa, _EV, _CNT, _ATS, _LDC, _TEE, _TEM, _SCc],
  [1, [() => CacheNodeIdsList, 0], 0, 0, 0, () => PendingLogDeliveryConfigurationList, 2, 0, () => ScaleConfig]
);
export var ScaleConfig = struct(n0, _SCc, 0, [_SP, _SIM], [1, 1]);
export var SecurityGroupMembership = struct(n0, _SGM, 0, [_SGIe, _St], [0, 0]);
export var CacheClusterList = list(n0, _CCL, 0, [
  () => CacheCluster,
  {
    [_xN]: _CC,
  },
]);
export var CacheNodeIdsList = list(n0, _CNIL, 0, [
  0,
  {
    [_xN]: _CNI,
  },
]);
export var CacheNodeList = list(n0, _CNL, 0, [
  () => CacheNode,
  {
    [_xN]: _CNa,
  },
]);
export var CacheSecurityGroupMembershipList = list(n0, _CSGML, 0, [
  () => CacheSecurityGroupMembership,
  {
    [_xN]: _CSG,
  },
]);
export var SecurityGroupMembershipList = list(n0, _SGML, 0, () => SecurityGroupMembership);
export var DescribeCacheClusters = op(
  n0,
  _DCCe,
  0,
  () => DescribeCacheClustersMessage,
  () => CacheClusterMessage
);
