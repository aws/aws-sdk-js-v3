// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  AuthorizationAlreadyExistsFault as __AuthorizationAlreadyExistsFault,
  AuthorizationNotFoundFault as __AuthorizationNotFoundFault,
  CacheClusterAlreadyExistsFault as __CacheClusterAlreadyExistsFault,
  CacheSecurityGroupNotFoundFault as __CacheSecurityGroupNotFoundFault,
  InvalidARNFault as __InvalidARNFault,
  InvalidCacheSecurityGroupStateFault as __InvalidCacheSecurityGroupStateFault,
  NodeQuotaForClusterExceededFault as __NodeQuotaForClusterExceededFault,
  ReplicationGroupAlreadyExistsFault as __ReplicationGroupAlreadyExistsFault,
  TagNotFoundFault as __TagNotFoundFault,
} from "../models/index";
import {
  _AAEF,
  _ACSGI,
  _ACSGIM,
  _ACSGIR,
  _AFE,
  _AI,
  _AMVU,
  _ANFF,
  _aQE,
  _AREE,
  _AT,
  _ATTR,
  _ATTRM,
  _ATUS,
  _AZM,
  _c,
  _CC,
  _CCAEF,
  _CCC,
  _CCCM,
  _CCCR,
  _CCIa,
  _CM,
  _CNITRa,
  _CNT,
  _CPGN,
  _CRG,
  _CRGM,
  _CRGR,
  _CSG,
  _CSGa,
  _CSGMa,
  _CSGN,
  _CSGNa,
  _CSGNac,
  _CSGNFF,
  _CSGNL,
  _DCSG,
  _DCSGes,
  _DCSGM,
  _DCSGMes,
  _DD,
  _DTE,
  _DTe,
  _E,
  _e,
  _ECSGN,
  _ECSGOI,
  _Ena,
  _EV,
  _GRGI,
  _hE,
  _IARNF,
  _ICSGSF,
  _ID,
  _KKI,
  _LDC,
  _LDCR,
  _LDCRL,
  _LF,
  _LT,
  _LTFR,
  _LTFRM,
  _M,
  _m,
  _MAZE,
  _MCC,
  _MCCM,
  _MCCR,
  _MR,
  _MRG,
  _MRGM,
  _MRGR,
  _NAZ,
  _NCC,
  _NCN,
  _NGC,
  _NGCL,
  _NGI,
  _NNG,
  _NQFCEF,
  _NT,
  _NTA,
  _NTS,
  _OM,
  _PAZ,
  _PAZr,
  _PCCAZ,
  _PCI,
  _PMW,
  _Po,
  _POA,
  _POAr,
  _RCSGI,
  _RCSGIM,
  _RCSGIR,
  _RG,
  _RGAEF,
  _RGD,
  _RGIe,
  _RN,
  _RPNG,
  _RTFR,
  _RTFRM,
  _RUG,
  _SA,
  _SCc,
  _SCI,
  _SCSN,
  _SGI,
  _SN,
  _SRL,
  _SW,
  _T,
  _TEE,
  _TEM,
  _TK,
  _TL,
  _TLM,
  _TNFF,
  _UGI,
  _UGITA,
  _UGITR,
  _xN,
  DestinationDetails,
  n0,
  TagList,
  Unit,
} from "./schemas_0";
import { ReplicationGroup } from "./schemas_2_Replication";
import { CacheCluster, CacheNodeIdsList, ScaleConfig } from "./schemas_11_Cache";
import { SecurityGroupIdsList, SnapshotArnsList } from "./schemas_12_Cache";
import { CacheSecurityGroup } from "./schemas_14_Security";
import { AvailabilityZonesList, NodeGroupConfiguration } from "./schemas_17_Snapshot";
import { PreferredAvailabilityZoneList, PreferredOutpostArnList } from "./schemas_22_Replica";

/* eslint no-var: 0 */

export var AddTagsToResourceMessage = struct(n0, _ATTRM, 0, [_RN, _T], [0, [() => TagList, 0]]);
export var AuthorizationAlreadyExistsFault = error(
  n0,
  _AAEF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`AuthorizationAlreadyExists`, 400],
  },
  [_m],
  [0],

  __AuthorizationAlreadyExistsFault
);
export var AuthorizationNotFoundFault = error(
  n0,
  _ANFF,
  {
    [_e]: _c,
    [_hE]: 404,
    [_aQE]: [`AuthorizationNotFound`, 404],
  },
  [_m],
  [0],

  __AuthorizationNotFoundFault
);
export var AuthorizeCacheSecurityGroupIngressMessage = struct(n0, _ACSGIM, 0, [_CSGN, _ECSGN, _ECSGOI], [0, 0, 0]);
export var AuthorizeCacheSecurityGroupIngressResult = struct(n0, _ACSGIR, 0, [_CSG], [[() => CacheSecurityGroup, 0]]);
export var CacheClusterAlreadyExistsFault = error(
  n0,
  _CCAEF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`CacheClusterAlreadyExists`, 400],
  },
  [_m],
  [0],

  __CacheClusterAlreadyExistsFault
);
export var CacheSecurityGroupMessage = struct(n0, _CSGMa, 0, [_M, _CSGa], [0, [() => CacheSecurityGroups, 0]]);
export var CacheSecurityGroupNotFoundFault = error(
  n0,
  _CSGNFF,
  {
    [_e]: _c,
    [_hE]: 404,
    [_aQE]: [`CacheSecurityGroupNotFound`, 404],
  },
  [_m],
  [0],

  __CacheSecurityGroupNotFoundFault
);
export var CreateCacheClusterMessage = struct(
  n0,
  _CCCM,
  0,
  [
    _CCIa,
    _RGIe,
    _AZM,
    _PAZ,
    _PAZr,
    _NCN,
    _CNT,
    _E,
    _EV,
    _CPGN,
    _CSGNa,
    _CSGNac,
    _SGI,
    _T,
    _SA,
    _SN,
    _PMW,
    _Po,
    _NTA,
    _AMVU,
    _SRL,
    _SW,
    _AT,
    _OM,
    _POA,
    _POAr,
    _LDC,
    _TEE,
    _NT,
    _ID,
  ],
  [
    0,
    0,
    0,
    0,
    [() => PreferredAvailabilityZoneList, 0],
    1,
    0,
    0,
    0,
    0,
    0,
    [() => CacheSecurityGroupNameList, 0],
    [() => SecurityGroupIdsList, 0],
    [() => TagList, 0],
    [() => SnapshotArnsList, 0],
    0,
    0,
    1,
    0,
    2,
    1,
    0,
    0,
    0,
    0,
    [() => PreferredOutpostArnList, 0],
    [() => LogDeliveryConfigurationRequestList, 0],
    2,
    0,
    0,
  ]
);
export var CreateCacheClusterResult = struct(n0, _CCCR, 0, [_CC], [[() => CacheCluster, 0]]);
export var CreateReplicationGroupMessage = struct(
  n0,
  _CRGM,
  0,
  [
    _RGIe,
    _RGD,
    _GRGI,
    _PCI,
    _AFE,
    _MAZE,
    _NCC,
    _PCCAZ,
    _NNG,
    _RPNG,
    _NGC,
    _CNT,
    _E,
    _EV,
    _CPGN,
    _CSGNa,
    _CSGNac,
    _SGI,
    _T,
    _SA,
    _SN,
    _PMW,
    _Po,
    _NTA,
    _AMVU,
    _SRL,
    _SW,
    _AT,
    _TEE,
    _AREE,
    _KKI,
    _UGI,
    _LDC,
    _DTE,
    _NT,
    _ID,
    _TEM,
    _CM,
    _SCSN,
  ],
  [
    0,
    0,
    0,
    0,
    2,
    2,
    1,
    [() => AvailabilityZonesList, 0],
    1,
    1,
    [() => NodeGroupConfigurationList, 0],
    0,
    0,
    0,
    0,
    0,
    [() => CacheSecurityGroupNameList, 0],
    [() => SecurityGroupIdsList, 0],
    [() => TagList, 0],
    [() => SnapshotArnsList, 0],
    0,
    0,
    1,
    0,
    2,
    1,
    0,
    0,
    2,
    2,
    0,
    64 | 0,
    [() => LogDeliveryConfigurationRequestList, 0],
    2,
    0,
    0,
    0,
    0,
    0,
  ]
);
export var CreateReplicationGroupResult = struct(n0, _CRGR, 0, [_RG], [[() => ReplicationGroup, 0]]);
export var DeleteCacheSecurityGroupMessage = struct(n0, _DCSGM, 0, [_CSGN], [0]);
export var DescribeCacheSecurityGroupsMessage = struct(n0, _DCSGMes, 0, [_CSGN, _MR, _M], [0, 1, 0]);
export var InvalidARNFault = error(
  n0,
  _IARNF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidARN`, 400],
  },
  [_m],
  [0],

  __InvalidARNFault
);
export var InvalidCacheSecurityGroupStateFault = error(
  n0,
  _ICSGSF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidCacheSecurityGroupState`, 400],
  },
  [_m],
  [0],

  __InvalidCacheSecurityGroupStateFault
);
export var ListTagsForResourceMessage = struct(n0, _LTFRM, 0, [_RN], [0]);
export var LogDeliveryConfigurationRequest = struct(
  n0,
  _LDCR,
  0,
  [_LT, _DTe, _DD, _LF, _Ena],
  [0, 0, () => DestinationDetails, 0, 2]
);
export var ModifyCacheClusterMessage = struct(
  n0,
  _MCCM,
  0,
  [
    _CCIa,
    _NCN,
    _CNITRa,
    _AZM,
    _NAZ,
    _CSGNac,
    _SGI,
    _PMW,
    _NTA,
    _CPGN,
    _NTS,
    _AI,
    _E,
    _EV,
    _AMVU,
    _SRL,
    _SW,
    _CNT,
    _AT,
    _ATUS,
    _LDC,
    _ID,
    _SCc,
  ],
  [
    0,
    1,
    [() => CacheNodeIdsList, 0],
    0,
    [() => PreferredAvailabilityZoneList, 0],
    [() => CacheSecurityGroupNameList, 0],
    [() => SecurityGroupIdsList, 0],
    0,
    0,
    0,
    0,
    2,
    0,
    0,
    2,
    1,
    0,
    0,
    0,
    0,
    [() => LogDeliveryConfigurationRequestList, 0],
    0,
    () => ScaleConfig,
  ]
);
export var ModifyCacheClusterResult = struct(n0, _MCCR, 0, [_CC], [[() => CacheCluster, 0]]);
export var ModifyReplicationGroupMessage = struct(
  n0,
  _MRGM,
  0,
  [
    _RGIe,
    _RGD,
    _PCI,
    _SCI,
    _AFE,
    _MAZE,
    _NGI,
    _CSGNac,
    _SGI,
    _PMW,
    _NTA,
    _CPGN,
    _NTS,
    _AI,
    _E,
    _EV,
    _AMVU,
    _SRL,
    _SW,
    _CNT,
    _AT,
    _ATUS,
    _UGITA,
    _UGITR,
    _RUG,
    _LDC,
    _ID,
    _TEE,
    _TEM,
    _CM,
  ],
  [
    0,
    0,
    0,
    0,
    2,
    2,
    0,
    [() => CacheSecurityGroupNameList, 0],
    [() => SecurityGroupIdsList, 0],
    0,
    0,
    0,
    0,
    2,
    0,
    0,
    2,
    1,
    0,
    0,
    0,
    0,
    64 | 0,
    64 | 0,
    2,
    [() => LogDeliveryConfigurationRequestList, 0],
    0,
    2,
    0,
    0,
  ]
);
export var ModifyReplicationGroupResult = struct(n0, _MRGR, 0, [_RG], [[() => ReplicationGroup, 0]]);
export var NodeQuotaForClusterExceededFault = error(
  n0,
  _NQFCEF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`NodeQuotaForClusterExceeded`, 400],
  },
  [_m],
  [0],

  __NodeQuotaForClusterExceededFault
);
export var RemoveTagsFromResourceMessage = struct(n0, _RTFRM, 0, [_RN, _TK], [0, 64 | 0]);
export var ReplicationGroupAlreadyExistsFault = error(
  n0,
  _RGAEF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`ReplicationGroupAlreadyExists`, 400],
  },
  [_m],
  [0],

  __ReplicationGroupAlreadyExistsFault
);
export var RevokeCacheSecurityGroupIngressMessage = struct(n0, _RCSGIM, 0, [_CSGN, _ECSGN, _ECSGOI], [0, 0, 0]);
export var RevokeCacheSecurityGroupIngressResult = struct(n0, _RCSGIR, 0, [_CSG], [[() => CacheSecurityGroup, 0]]);
export var TagListMessage = struct(n0, _TLM, 0, [_TL], [[() => TagList, 0]]);
export var TagNotFoundFault = error(
  n0,
  _TNFF,
  {
    [_e]: _c,
    [_hE]: 404,
    [_aQE]: [`TagNotFound`, 404],
  },
  [_m],
  [0],

  __TagNotFoundFault
);
export var CacheSecurityGroupNameList = list(n0, _CSGNL, 0, [
  0,
  {
    [_xN]: _CSGN,
  },
]);
export var CacheSecurityGroups = list(n0, _CSGa, 0, [
  () => CacheSecurityGroup,
  {
    [_xN]: _CSG,
  },
]);
export var KeyList = 64 | 0;

export var LogDeliveryConfigurationRequestList = list(n0, _LDCRL, 0, [
  () => LogDeliveryConfigurationRequest,
  {
    [_xN]: _LDCR,
  },
]);
export var NodeGroupConfigurationList = list(n0, _NGCL, 0, [
  () => NodeGroupConfiguration,
  {
    [_xN]: _NGC,
  },
]);
export var UserGroupIdListInput = 64 | 0;

export var AddTagsToResource = op(
  n0,
  _ATTR,
  0,
  () => AddTagsToResourceMessage,
  () => TagListMessage
);
export var AuthorizeCacheSecurityGroupIngress = op(
  n0,
  _ACSGI,
  0,
  () => AuthorizeCacheSecurityGroupIngressMessage,
  () => AuthorizeCacheSecurityGroupIngressResult
);
export var CreateCacheCluster = op(
  n0,
  _CCC,
  0,
  () => CreateCacheClusterMessage,
  () => CreateCacheClusterResult
);
export var CreateReplicationGroup = op(
  n0,
  _CRG,
  0,
  () => CreateReplicationGroupMessage,
  () => CreateReplicationGroupResult
);
export var DeleteCacheSecurityGroup = op(
  n0,
  _DCSG,
  0,
  () => DeleteCacheSecurityGroupMessage,
  () => Unit
);
export var DescribeCacheSecurityGroups = op(
  n0,
  _DCSGes,
  0,
  () => DescribeCacheSecurityGroupsMessage,
  () => CacheSecurityGroupMessage
);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  0,
  () => ListTagsForResourceMessage,
  () => TagListMessage
);
export var ModifyCacheCluster = op(
  n0,
  _MCC,
  0,
  () => ModifyCacheClusterMessage,
  () => ModifyCacheClusterResult
);
export var ModifyReplicationGroup = op(
  n0,
  _MRG,
  0,
  () => ModifyReplicationGroupMessage,
  () => ModifyReplicationGroupResult
);
export var RemoveTagsFromResource = op(
  n0,
  _RTFR,
  0,
  () => RemoveTagsFromResourceMessage,
  () => TagListMessage
);
export var RevokeCacheSecurityGroupIngress = op(
  n0,
  _RCSGI,
  0,
  () => RevokeCacheSecurityGroupIngressMessage,
  () => RevokeCacheSecurityGroupIngressResult
);
