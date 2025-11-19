const _ADE = "AccessDeniedException";
const _APMA = "ApplyPendingMaintenanceAction";
const _APMAI = "ApplyPendingMaintenanceActionInput";
const _APMAO = "ApplyPendingMaintenanceActionOutput";
const _C = "Cluster";
const _CC = "CreateCluster";
const _CCI = "CreateClusterInput";
const _CCO = "CreateClusterOutput";
const _CCS = "CopyClusterSnapshot";
const _CCSI = "CopyClusterSnapshotInput";
const _CCSIr = "CreateClusterSnapshotInput";
const _CCSO = "CopyClusterSnapshotOutput";
const _CCSOr = "CreateClusterSnapshotOutput";
const _CCSr = "CreateClusterSnapshot";
const _CE = "ConflictException";
const _CIL = "ClusterInList";
const _CL = "ClusterList";
const _CS = "ClusterSnapshot";
const _CSIL = "ClusterSnapshotInList";
const _CSL = "ClusterSnapshotList";
const _DC = "DeleteCluster";
const _DCI = "DeleteClusterInput";
const _DCO = "DeleteClusterOutput";
const _DCS = "DeleteClusterSnapshot";
const _DCSI = "DeleteClusterSnapshotInput";
const _DCSO = "DeleteClusterSnapshotOutput";
const _GC = "GetCluster";
const _GCI = "GetClusterInput";
const _GCO = "GetClusterOutput";
const _GCS = "GetClusterSnapshot";
const _GCSI = "GetClusterSnapshotInput";
const _GCSO = "GetClusterSnapshotOutput";
const _GPMA = "GetPendingMaintenanceAction";
const _GPMAI = "GetPendingMaintenanceActionInput";
const _GPMAO = "GetPendingMaintenanceActionOutput";
const _ISE = "InternalServerException";
const _LC = "ListClusters";
const _LCI = "ListClustersInput";
const _LCO = "ListClustersOutput";
const _LCS = "ListClusterSnapshots";
const _LCSI = "ListClusterSnapshotsInput";
const _LCSO = "ListClusterSnapshotsOutput";
const _LPMA = "ListPendingMaintenanceActions";
const _LPMAI = "ListPendingMaintenanceActionsInput";
const _LPMAO = "ListPendingMaintenanceActionsOutput";
const _LTFR = "ListTagsForResource";
const _LTFRR = "ListTagsForResourceRequest";
const _LTFRRi = "ListTagsForResourceResponse";
const _P = "Password";
const _PMAD = "PendingMaintenanceActionDetails";
const _PMADL = "PendingMaintenanceActionDetailsList";
const _RA = "Retry-After";
const _RCFS = "RestoreClusterFromSnapshot";
const _RCFSI = "RestoreClusterFromSnapshotInput";
const _RCFSO = "RestoreClusterFromSnapshotOutput";
const _RNFE = "ResourceNotFoundException";
const _RPMA = "ResourcePendingMaintenanceAction";
const _RPMAL = "ResourcePendingMaintenanceActionList";
const _S = "Shard";
const _SC = "StartCluster";
const _SCI = "StartClusterInput";
const _SCIt = "StopClusterInput";
const _SCO = "StartClusterOutput";
const _SCOt = "StopClusterOutput";
const _SCt = "StopCluster";
const _SL = "ShardList";
const _SQEE = "ServiceQuotaExceededException";
const _TE = "ThrottlingException";
const _TR = "TagResource";
const _TRR = "TagResourceRequest";
const _TRRa = "TagResourceResponse";
const _UC = "UpdateCluster";
const _UCI = "UpdateClusterInput";
const _UCO = "UpdateClusterOutput";
const _UR = "UntagResource";
const _URR = "UntagResourceRequest";
const _URRn = "UntagResourceResponse";
const _VE = "ValidationException";
const _VEF = "ValidationExceptionField";
const _VEFL = "ValidationExceptionFieldList";
const _a = "action";
const _aA = "applyAction";
const _aAAD = "autoAppliedAfterDate";
const _aO = "applyOn";
const _aT = "authType";
const _aUN = "adminUserName";
const _aUP = "adminUserPassword";
const _bRP = "backupRetentionPeriod";
const _c = "client";
const _cA = "clusterArn";
const _cAD = "currentApplyDate";
const _cCT = "clusterCreationTime";
const _cE = "clusterEndpoint";
const _cN = "clusterName";
const _cT = "createTime";
const _cTl = "clientToken";
const _cTo = "copyTags";
const _cl = "cluster";
const _clu = "clusters";
const _d = "description";
const _e = "error";
const _fAD = "forcedApplyDate";
const _fL = "fieldList";
const _h = "http";
const _hE = "httpError";
const _hH = "httpHeader";
const _hQ = "httpQuery";
const _kKI = "kmsKeyId";
const _m = "message";
const _mR = "maxResults";
const _n = "name";
const _nT = "nextToken";
const _oIS = "optInStatus";
const _oIT = "optInType";
const _pBW = "preferredBackupWindow";
const _pMAD = "pendingMaintenanceActionDetails";
const _pMW = "preferredMaintenanceWindow";
const _r = "reason";
const _rA = "resourceArn";
const _rAS = "retryAfterSeconds";
const _rI = "resourceId";
const _rPMA = "resourcePendingMaintenanceAction";
const _rPMAe = "resourcePendingMaintenanceActions";
const _rT = "resourceType";
const _s = "status";
const _sA = "snapshotArn";
const _sC = "shardCapacity";
const _sCT = "snapshotCreationTime";
const _sCh = "shardCount";
const _sI = "subnetIds";
const _sIC = "shardInstanceCount";
const _sIh = "shardId";
const _sN = "snapshotName";
const _sT = "snapshotType";
const _se = "server";
const _sh = "shards";
const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.docdbelastic";
const _sn = "snapshot";
const _sna = "snapshots";
const _t = "tags";
const _tK = "tagKeys";
const _tSN = "targetSnapshotName";
const _vSGI = "vpcSecurityGroupIds";
const n0 = "com.amazonaws.docdbelastic";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import {
  StaticErrorSchema,
  StaticListSchema,
  StaticMapSchema,
  StaticOperationSchema,
  StaticSimpleSchema,
  StaticStructureSchema,
} from "@smithy/types";

import { DocDBElasticServiceException as __DocDBElasticServiceException } from "../models/DocDBElasticServiceException";
import {
  AccessDeniedException as __AccessDeniedException,
  ConflictException as __ConflictException,
  InternalServerException as __InternalServerException,
  ResourceNotFoundException as __ResourceNotFoundException,
  ServiceQuotaExceededException as __ServiceQuotaExceededException,
  ThrottlingException as __ThrottlingException,
  ValidationException as __ValidationException,
} from "../models/errors";

/* eslint no-var: 0 */

export var Password: StaticSimpleSchema = [0, n0, _P, 8, 0];
export var AccessDeniedException: StaticErrorSchema = [
  -3,
  n0,
  _ADE,
  {
    [_e]: _c,
    [_hE]: 403,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(AccessDeniedException, __AccessDeniedException);

export var ApplyPendingMaintenanceActionInput: StaticStructureSchema = [
  3,
  n0,
  _APMAI,
  0,
  [_rA, _aA, _oIT, _aO],
  [0, 0, 0, 0],
];
export var ApplyPendingMaintenanceActionOutput: StaticStructureSchema = [
  3,
  n0,
  _APMAO,
  0,
  [_rPMA],
  [() => ResourcePendingMaintenanceAction],
];
export var Cluster: StaticStructureSchema = [
  3,
  n0,
  _C,
  0,
  [_cN, _cA, _s, _cE, _cT, _aUN, _aT, _sC, _sCh, _vSGI, _sI, _pMW, _kKI, _sh, _bRP, _pBW, _sIC],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 64 | 0, 64 | 0, 0, 0, () => ShardList, 1, 0, 1],
];
export var ClusterInList: StaticStructureSchema = [3, n0, _CIL, 0, [_cN, _cA, _s], [0, 0, 0]];
export var ClusterSnapshot: StaticStructureSchema = [
  3,
  n0,
  _CS,
  0,
  [_sI, _sN, _sA, _sCT, _cA, _cCT, _s, _vSGI, _aUN, _kKI, _sT],
  [64 | 0, 0, 0, 0, 0, 0, 0, 64 | 0, 0, 0, 0],
];
export var ClusterSnapshotInList: StaticStructureSchema = [3, n0, _CSIL, 0, [_sN, _sA, _cA, _s, _sCT], [0, 0, 0, 0, 0]];
export var ConflictException: StaticErrorSchema = [
  -3,
  n0,
  _CE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_m, _rI, _rT],
  [0, 0, 0],
];
TypeRegistry.for(n0).registerError(ConflictException, __ConflictException);

export var CopyClusterSnapshotInput: StaticStructureSchema = [
  3,
  n0,
  _CCSI,
  0,
  [_sA, _tSN, _kKI, _cTo, _t],
  [[0, 1], 0, 0, 2, 128 | 0],
];
export var CopyClusterSnapshotOutput: StaticStructureSchema = [3, n0, _CCSO, 0, [_sn], [() => ClusterSnapshot]];
export var CreateClusterInput: StaticStructureSchema = [
  3,
  n0,
  _CCI,
  0,
  [_cN, _aT, _aUN, _aUP, _sC, _sCh, _vSGI, _sI, _kKI, _cTl, _pMW, _t, _bRP, _pBW, _sIC],
  [0, 0, 0, [() => Password, 0], 1, 1, 64 | 0, 64 | 0, 0, [0, 4], 0, 128 | 0, 1, 0, 1],
];
export var CreateClusterOutput: StaticStructureSchema = [3, n0, _CCO, 0, [_cl], [() => Cluster]];
export var CreateClusterSnapshotInput: StaticStructureSchema = [3, n0, _CCSIr, 0, [_cA, _sN, _t], [0, 0, 128 | 0]];
export var CreateClusterSnapshotOutput: StaticStructureSchema = [3, n0, _CCSOr, 0, [_sn], [() => ClusterSnapshot]];
export var DeleteClusterInput: StaticStructureSchema = [3, n0, _DCI, 0, [_cA], [[0, 1]]];
export var DeleteClusterOutput: StaticStructureSchema = [3, n0, _DCO, 0, [_cl], [() => Cluster]];
export var DeleteClusterSnapshotInput: StaticStructureSchema = [3, n0, _DCSI, 0, [_sA], [[0, 1]]];
export var DeleteClusterSnapshotOutput: StaticStructureSchema = [3, n0, _DCSO, 0, [_sn], [() => ClusterSnapshot]];
export var GetClusterInput: StaticStructureSchema = [3, n0, _GCI, 0, [_cA], [[0, 1]]];
export var GetClusterOutput: StaticStructureSchema = [3, n0, _GCO, 0, [_cl], [() => Cluster]];
export var GetClusterSnapshotInput: StaticStructureSchema = [3, n0, _GCSI, 0, [_sA], [[0, 1]]];
export var GetClusterSnapshotOutput: StaticStructureSchema = [3, n0, _GCSO, 0, [_sn], [() => ClusterSnapshot]];
export var GetPendingMaintenanceActionInput: StaticStructureSchema = [3, n0, _GPMAI, 0, [_rA], [[0, 1]]];
export var GetPendingMaintenanceActionOutput: StaticStructureSchema = [
  3,
  n0,
  _GPMAO,
  0,
  [_rPMA],
  [() => ResourcePendingMaintenanceAction],
];
export var InternalServerException: StaticErrorSchema = [
  -3,
  n0,
  _ISE,
  {
    [_e]: _se,
    [_hE]: 500,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(InternalServerException, __InternalServerException);

export var ListClustersInput: StaticStructureSchema = [
  3,
  n0,
  _LCI,
  0,
  [_nT, _mR],
  [
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
  ],
];
export var ListClusterSnapshotsInput: StaticStructureSchema = [
  3,
  n0,
  _LCSI,
  0,
  [_cA, _nT, _mR, _sT],
  [
    [
      0,
      {
        [_hQ]: _cA,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _sT,
      },
    ],
  ],
];
export var ListClusterSnapshotsOutput: StaticStructureSchema = [
  3,
  n0,
  _LCSO,
  0,
  [_sna, _nT],
  [() => ClusterSnapshotList, 0],
];
export var ListClustersOutput: StaticStructureSchema = [3, n0, _LCO, 0, [_clu, _nT], [() => ClusterList, 0]];
export var ListPendingMaintenanceActionsInput: StaticStructureSchema = [
  3,
  n0,
  _LPMAI,
  0,
  [_nT, _mR],
  [
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
  ],
];
export var ListPendingMaintenanceActionsOutput: StaticStructureSchema = [
  3,
  n0,
  _LPMAO,
  0,
  [_rPMAe, _nT],
  [() => ResourcePendingMaintenanceActionList, 0],
];
export var ListTagsForResourceRequest: StaticStructureSchema = [3, n0, _LTFRR, 0, [_rA], [[0, 1]]];
export var ListTagsForResourceResponse: StaticStructureSchema = [3, n0, _LTFRRi, 0, [_t], [128 | 0]];
export var PendingMaintenanceActionDetails: StaticStructureSchema = [
  3,
  n0,
  _PMAD,
  0,
  [_a, _aAAD, _fAD, _oIS, _cAD, _d],
  [0, 0, 0, 0, 0, 0],
];
export var ResourceNotFoundException: StaticErrorSchema = [
  -3,
  n0,
  _RNFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_m, _rI, _rT],
  [0, 0, 0],
];
TypeRegistry.for(n0).registerError(ResourceNotFoundException, __ResourceNotFoundException);

export var ResourcePendingMaintenanceAction: StaticStructureSchema = [
  3,
  n0,
  _RPMA,
  0,
  [_rA, _pMAD],
  [0, () => PendingMaintenanceActionDetailsList],
];
export var RestoreClusterFromSnapshotInput: StaticStructureSchema = [
  3,
  n0,
  _RCFSI,
  0,
  [_cN, _sA, _vSGI, _sI, _kKI, _t, _sC, _sIC],
  [0, [0, 1], 64 | 0, 64 | 0, 0, 128 | 0, 1, 1],
];
export var RestoreClusterFromSnapshotOutput: StaticStructureSchema = [3, n0, _RCFSO, 0, [_cl], [() => Cluster]];
export var ServiceQuotaExceededException: StaticErrorSchema = [
  -3,
  n0,
  _SQEE,
  {
    [_e]: _c,
    [_hE]: 402,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(ServiceQuotaExceededException, __ServiceQuotaExceededException);

export var Shard: StaticStructureSchema = [3, n0, _S, 0, [_sIh, _cT, _s], [0, 0, 0]];
export var StartClusterInput: StaticStructureSchema = [3, n0, _SCI, 0, [_cA], [[0, 1]]];
export var StartClusterOutput: StaticStructureSchema = [3, n0, _SCO, 0, [_cl], [() => Cluster]];
export var StopClusterInput: StaticStructureSchema = [3, n0, _SCIt, 0, [_cA], [[0, 1]]];
export var StopClusterOutput: StaticStructureSchema = [3, n0, _SCOt, 0, [_cl], [() => Cluster]];
export var TagResourceRequest: StaticStructureSchema = [3, n0, _TRR, 0, [_rA, _t], [[0, 1], 128 | 0]];
export var TagResourceResponse: StaticStructureSchema = [3, n0, _TRRa, 0, [], []];
export var ThrottlingException: StaticErrorSchema = [
  -3,
  n0,
  _TE,
  {
    [_e]: _c,
    [_hE]: 429,
  },
  [_m, _rAS],
  [
    0,
    [
      1,
      {
        [_hH]: _RA,
      },
    ],
  ],
];
TypeRegistry.for(n0).registerError(ThrottlingException, __ThrottlingException);

export var UntagResourceRequest: StaticStructureSchema = [
  3,
  n0,
  _URR,
  0,
  [_rA, _tK],
  [
    [0, 1],
    [
      64 | 0,
      {
        [_hQ]: _tK,
      },
    ],
  ],
];
export var UntagResourceResponse: StaticStructureSchema = [3, n0, _URRn, 0, [], []];
export var UpdateClusterInput: StaticStructureSchema = [
  3,
  n0,
  _UCI,
  0,
  [_cA, _aT, _sC, _sCh, _vSGI, _sI, _aUP, _cTl, _pMW, _bRP, _pBW, _sIC],
  [[0, 1], 0, 1, 1, 64 | 0, 64 | 0, [() => Password, 0], [0, 4], 0, 1, 0, 1],
];
export var UpdateClusterOutput: StaticStructureSchema = [3, n0, _UCO, 0, [_cl], [() => Cluster]];
export var ValidationException: StaticErrorSchema = [
  -3,
  n0,
  _VE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m, _r, _fL],
  [0, 0, () => ValidationExceptionFieldList],
];
TypeRegistry.for(n0).registerError(ValidationException, __ValidationException);

export var ValidationExceptionField: StaticStructureSchema = [3, n0, _VEF, 0, [_n, _m], [0, 0]];
export var DocDBElasticServiceException: StaticErrorSchema = [-3, _sm, "DocDBElasticServiceException", 0, [], []];
TypeRegistry.for(_sm).registerError(DocDBElasticServiceException, __DocDBElasticServiceException);

export var ClusterList: StaticListSchema = [1, n0, _CL, 0, () => ClusterInList];
export var ClusterSnapshotList: StaticListSchema = [1, n0, _CSL, 0, () => ClusterSnapshotInList];
export var PendingMaintenanceActionDetailsList: StaticListSchema = [
  1,
  n0,
  _PMADL,
  0,
  () => PendingMaintenanceActionDetails,
];
export var ResourcePendingMaintenanceActionList: StaticListSchema = [
  1,
  n0,
  _RPMAL,
  0,
  () => ResourcePendingMaintenanceAction,
];
export var ShardList: StaticListSchema = [1, n0, _SL, 0, () => Shard];
export var StringList = 64 | 0;

export var TagKeyList = 64 | 0;

export var ValidationExceptionFieldList: StaticListSchema = [1, n0, _VEFL, 0, () => ValidationExceptionField];
export var TagMap = 128 | 0;

export var ApplyPendingMaintenanceAction: StaticOperationSchema = [
  9,
  n0,
  _APMA,
  {
    [_h]: ["POST", "/pending-action", 200],
  },
  () => ApplyPendingMaintenanceActionInput,
  () => ApplyPendingMaintenanceActionOutput,
];
export var CopyClusterSnapshot: StaticOperationSchema = [
  9,
  n0,
  _CCS,
  {
    [_h]: ["POST", "/cluster-snapshot/{snapshotArn}/copy", 200],
  },
  () => CopyClusterSnapshotInput,
  () => CopyClusterSnapshotOutput,
];
export var CreateCluster: StaticOperationSchema = [
  9,
  n0,
  _CC,
  {
    [_h]: ["POST", "/cluster", 200],
  },
  () => CreateClusterInput,
  () => CreateClusterOutput,
];
export var CreateClusterSnapshot: StaticOperationSchema = [
  9,
  n0,
  _CCSr,
  {
    [_h]: ["POST", "/cluster-snapshot", 200],
  },
  () => CreateClusterSnapshotInput,
  () => CreateClusterSnapshotOutput,
];
export var DeleteCluster: StaticOperationSchema = [
  9,
  n0,
  _DC,
  {
    [_h]: ["DELETE", "/cluster/{clusterArn}", 200],
  },
  () => DeleteClusterInput,
  () => DeleteClusterOutput,
];
export var DeleteClusterSnapshot: StaticOperationSchema = [
  9,
  n0,
  _DCS,
  {
    [_h]: ["DELETE", "/cluster-snapshot/{snapshotArn}", 200],
  },
  () => DeleteClusterSnapshotInput,
  () => DeleteClusterSnapshotOutput,
];
export var GetCluster: StaticOperationSchema = [
  9,
  n0,
  _GC,
  {
    [_h]: ["GET", "/cluster/{clusterArn}", 200],
  },
  () => GetClusterInput,
  () => GetClusterOutput,
];
export var GetClusterSnapshot: StaticOperationSchema = [
  9,
  n0,
  _GCS,
  {
    [_h]: ["GET", "/cluster-snapshot/{snapshotArn}", 200],
  },
  () => GetClusterSnapshotInput,
  () => GetClusterSnapshotOutput,
];
export var GetPendingMaintenanceAction: StaticOperationSchema = [
  9,
  n0,
  _GPMA,
  {
    [_h]: ["GET", "/pending-action/{resourceArn}", 200],
  },
  () => GetPendingMaintenanceActionInput,
  () => GetPendingMaintenanceActionOutput,
];
export var ListClusters: StaticOperationSchema = [
  9,
  n0,
  _LC,
  {
    [_h]: ["GET", "/clusters", 200],
  },
  () => ListClustersInput,
  () => ListClustersOutput,
];
export var ListClusterSnapshots: StaticOperationSchema = [
  9,
  n0,
  _LCS,
  {
    [_h]: ["GET", "/cluster-snapshots", 200],
  },
  () => ListClusterSnapshotsInput,
  () => ListClusterSnapshotsOutput,
];
export var ListPendingMaintenanceActions: StaticOperationSchema = [
  9,
  n0,
  _LPMA,
  {
    [_h]: ["GET", "/pending-actions", 200],
  },
  () => ListPendingMaintenanceActionsInput,
  () => ListPendingMaintenanceActionsOutput,
];
export var ListTagsForResource: StaticOperationSchema = [
  9,
  n0,
  _LTFR,
  {
    [_h]: ["GET", "/tags/{resourceArn}", 200],
  },
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse,
];
export var RestoreClusterFromSnapshot: StaticOperationSchema = [
  9,
  n0,
  _RCFS,
  {
    [_h]: ["POST", "/cluster-snapshot/{snapshotArn}/restore", 200],
  },
  () => RestoreClusterFromSnapshotInput,
  () => RestoreClusterFromSnapshotOutput,
];
export var StartCluster: StaticOperationSchema = [
  9,
  n0,
  _SC,
  {
    [_h]: ["POST", "/cluster/{clusterArn}/start", 200],
  },
  () => StartClusterInput,
  () => StartClusterOutput,
];
export var StopCluster: StaticOperationSchema = [
  9,
  n0,
  _SCt,
  {
    [_h]: ["POST", "/cluster/{clusterArn}/stop", 200],
  },
  () => StopClusterInput,
  () => StopClusterOutput,
];
export var TagResource: StaticOperationSchema = [
  9,
  n0,
  _TR,
  {
    [_h]: ["POST", "/tags/{resourceArn}", 200],
  },
  () => TagResourceRequest,
  () => TagResourceResponse,
];
export var UntagResource: StaticOperationSchema = [
  9,
  n0,
  _UR,
  {
    [_h]: ["DELETE", "/tags/{resourceArn}", 200],
  },
  () => UntagResourceRequest,
  () => UntagResourceResponse,
];
export var UpdateCluster: StaticOperationSchema = [
  9,
  n0,
  _UC,
  {
    [_h]: ["PUT", "/cluster/{clusterArn}", 200],
  },
  () => UpdateClusterInput,
  () => UpdateClusterOutput,
];
