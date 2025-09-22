export const _ADE = "AccessDeniedException";
export const _APMA = "ApplyPendingMaintenanceAction";
export const _APMAI = "ApplyPendingMaintenanceActionInput";
export const _APMAO = "ApplyPendingMaintenanceActionOutput";
export const _C = "Cluster";
export const _CC = "CreateCluster";
export const _CCI = "CreateClusterInput";
export const _CCO = "CreateClusterOutput";
export const _CCS = "CopyClusterSnapshot";
export const _CCSI = "CopyClusterSnapshotInput";
export const _CCSIr = "CreateClusterSnapshotInput";
export const _CCSO = "CopyClusterSnapshotOutput";
export const _CCSOr = "CreateClusterSnapshotOutput";
export const _CCSr = "CreateClusterSnapshot";
export const _CE = "ConflictException";
export const _CIL = "ClusterInList";
export const _CL = "ClusterList";
export const _CS = "ClusterSnapshot";
export const _CSIL = "ClusterSnapshotInList";
export const _CSL = "ClusterSnapshotList";
export const _DC = "DeleteCluster";
export const _DCI = "DeleteClusterInput";
export const _DCO = "DeleteClusterOutput";
export const _DCS = "DeleteClusterSnapshot";
export const _DCSI = "DeleteClusterSnapshotInput";
export const _DCSO = "DeleteClusterSnapshotOutput";
export const _GC = "GetCluster";
export const _GCI = "GetClusterInput";
export const _GCO = "GetClusterOutput";
export const _GCS = "GetClusterSnapshot";
export const _GCSI = "GetClusterSnapshotInput";
export const _GCSO = "GetClusterSnapshotOutput";
export const _GPMA = "GetPendingMaintenanceAction";
export const _GPMAI = "GetPendingMaintenanceActionInput";
export const _GPMAO = "GetPendingMaintenanceActionOutput";
export const _ISE = "InternalServerException";
export const _LC = "ListClusters";
export const _LCI = "ListClustersInput";
export const _LCO = "ListClustersOutput";
export const _LCS = "ListClusterSnapshots";
export const _LCSI = "ListClusterSnapshotsInput";
export const _LCSO = "ListClusterSnapshotsOutput";
export const _LPMA = "ListPendingMaintenanceActions";
export const _LPMAI = "ListPendingMaintenanceActionsInput";
export const _LPMAO = "ListPendingMaintenanceActionsOutput";
export const _LTFR = "ListTagsForResource";
export const _LTFRR = "ListTagsForResourceRequest";
export const _LTFRRi = "ListTagsForResourceResponse";
export const _P = "Password";
export const _PMAD = "PendingMaintenanceActionDetails";
export const _PMADL = "PendingMaintenanceActionDetailsList";
export const _RA = "Retry-After";
export const _RCFS = "RestoreClusterFromSnapshot";
export const _RCFSI = "RestoreClusterFromSnapshotInput";
export const _RCFSO = "RestoreClusterFromSnapshotOutput";
export const _RNFE = "ResourceNotFoundException";
export const _RPMA = "ResourcePendingMaintenanceAction";
export const _RPMAL = "ResourcePendingMaintenanceActionList";
export const _S = "Shard";
export const _SC = "StartCluster";
export const _SCI = "StartClusterInput";
export const _SCIt = "StopClusterInput";
export const _SCO = "StartClusterOutput";
export const _SCOt = "StopClusterOutput";
export const _SCt = "StopCluster";
export const _SL = "ShardList";
export const _SQEE = "ServiceQuotaExceededException";
export const _TE = "ThrottlingException";
export const _TR = "TagResource";
export const _TRR = "TagResourceRequest";
export const _TRRa = "TagResourceResponse";
export const _UC = "UpdateCluster";
export const _UCI = "UpdateClusterInput";
export const _UCO = "UpdateClusterOutput";
export const _UR = "UntagResource";
export const _URR = "UntagResourceRequest";
export const _URRn = "UntagResourceResponse";
export const _VE = "ValidationException";
export const _VEF = "ValidationExceptionField";
export const _VEFL = "ValidationExceptionFieldList";
export const _a = "action";
export const _aA = "applyAction";
export const _aAAD = "autoAppliedAfterDate";
export const _aO = "applyOn";
export const _aT = "authType";
export const _aUN = "adminUserName";
export const _aUP = "adminUserPassword";
export const _bRP = "backupRetentionPeriod";
export const _c = "client";
export const _cA = "clusterArn";
export const _cAD = "currentApplyDate";
export const _cCT = "clusterCreationTime";
export const _cE = "clusterEndpoint";
export const _cN = "clusterName";
export const _cT = "createTime";
export const _cTl = "clientToken";
export const _cTo = "copyTags";
export const _cl = "cluster";
export const _clu = "clusters";
export const _d = "description";
export const _e = "error";
export const _fAD = "forcedApplyDate";
export const _fL = "fieldList";
export const _h = "http";
export const _hE = "httpError";
export const _hH = "httpHeader";
export const _hQ = "httpQuery";
export const _kKI = "kmsKeyId";
export const _m = "message";
export const _mR = "maxResults";
export const _n = "name";
export const _nT = "nextToken";
export const _oIS = "optInStatus";
export const _oIT = "optInType";
export const _pBW = "preferredBackupWindow";
export const _pMAD = "pendingMaintenanceActionDetails";
export const _pMW = "preferredMaintenanceWindow";
export const _r = "reason";
export const _rA = "resourceArn";
export const _rAS = "retryAfterSeconds";
export const _rI = "resourceId";
export const _rPMA = "resourcePendingMaintenanceAction";
export const _rPMAe = "resourcePendingMaintenanceActions";
export const _rT = "resourceType";
export const _s = "status";
export const _sA = "snapshotArn";
export const _sC = "shardCapacity";
export const _sCT = "snapshotCreationTime";
export const _sCh = "shardCount";
export const _sI = "subnetIds";
export const _sIC = "shardInstanceCount";
export const _sIh = "shardId";
export const _sN = "snapshotName";
export const _sT = "snapshotType";
export const _se = "server";
export const _sh = "shards";
export const _sn = "snapshot";
export const _sna = "snapshots";
export const _t = "tags";
export const _tK = "tagKeys";
export const _tSN = "targetSnapshotName";
export const _vSGI = "vpcSecurityGroupIds";
export const n0 = "com.amazonaws.docdbelastic";

// smithy-typescript generated code
import { error, list, struct } from "@smithy/core/schema";

import { DocDBElasticServiceException as __DocDBElasticServiceException } from "../models/DocDBElasticServiceException";
import {
  AccessDeniedException as __AccessDeniedException,
  InternalServerException as __InternalServerException,
  ResourceNotFoundException as __ResourceNotFoundException,
  ThrottlingException as __ThrottlingException,
  ValidationException as __ValidationException,
} from "../models/index";

/* eslint no-var: 0 */

export var AccessDeniedException = error(
  n0,
  _ADE,
  {
    [_e]: _c,
    [_hE]: 403,
  },
  [_m],
  [0],

  __AccessDeniedException
);
export var InternalServerException = error(
  n0,
  _ISE,
  {
    [_e]: _se,
    [_hE]: 500,
  },
  [_m],
  [0],

  __InternalServerException
);
export var ResourceNotFoundException = error(
  n0,
  _RNFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_m, _rI, _rT],
  [0, 0, 0],

  __ResourceNotFoundException
);
export var ThrottlingException = error(
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

  __ThrottlingException
);
export var ValidationException = error(
  n0,
  _VE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m, _r, _fL],
  [0, 0, () => ValidationExceptionFieldList],

  __ValidationException
);
export var ValidationExceptionField = struct(n0, _VEF, 0, [_n, _m], [0, 0]);
export var DocDBElasticServiceException = error(
  "smithy.ts.sdk.synthetic.com.amazonaws.docdbelastic",
  "DocDBElasticServiceException",
  0,
  [],
  [],
  __DocDBElasticServiceException
);
export var ValidationExceptionFieldList = list(n0, _VEFL, 0, () => ValidationExceptionField);
