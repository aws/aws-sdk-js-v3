export const _ADE = "AccessDeniedException";
export const _CC = "CreateCluster";
export const _CCI = "CreateClusterInput";
export const _CCO = "CreateClusterOutput";
export const _CE = "ConflictException";
export const _CL = "ClusterList";
export const _CS = "ClusterSummary";
export const _DC = "DeleteCluster";
export const _DCI = "DeleteClusterInput";
export const _DCO = "DeleteClusterOutput";
export const _ED = "EncryptionDetails";
export const _GC = "GetCluster";
export const _GCI = "GetClusterInput";
export const _GCO = "GetClusterOutput";
export const _GVESN = "GetVpcEndpointServiceName";
export const _GVESNI = "GetVpcEndpointServiceNameInput";
export const _GVESNO = "GetVpcEndpointServiceNameOutput";
export const _ISE = "InternalServerException";
export const _LC = "ListClusters";
export const _LCI = "ListClustersInput";
export const _LCO = "ListClustersOutput";
export const _LTFR = "ListTagsForResource";
export const _LTFRI = "ListTagsForResourceInput";
export const _LTFRO = "ListTagsForResourceOutput";
export const _MRP = "MultiRegionProperties";
export const _RA = "Retry-After";
export const _RNFE = "ResourceNotFoundException";
export const _SQEE = "ServiceQuotaExceededException";
export const _TE = "ThrottlingException";
export const _TR = "TagResource";
export const _TRI = "TagResourceInput";
export const _UC = "UpdateCluster";
export const _UCI = "UpdateClusterInput";
export const _UCO = "UpdateClusterOutput";
export const _UR = "UntagResource";
export const _URI = "UntagResourceInput";
export const _VE = "ValidationException";
export const _VEF = "ValidationExceptionField";
export const _VEFL = "ValidationExceptionFieldList";
export const _a = "arn";
export const _c = "client";
export const _cT = "clientToken";
export const _cTr = "creationTime";
export const _cl = "clusters";
export const _ct = "client-token";
export const _dPE = "deletionProtectionEnabled";
export const _e = "error";
export const _eD = "encryptionDetails";
export const _eS = "encryptionStatus";
export const _eT = "encryptionType";
export const _fL = "fieldList";
export const _h = "http";
export const _hE = "httpError";
export const _hH = "httpHeader";
export const _hQ = "httpQuery";
export const _i = "identifier";
export const _iT = "idempotencyToken";
export const _kEK = "kmsEncryptionKey";
export const _kKA = "kmsKeyArn";
export const _m = "message";
export const _mR = "maxResults";
export const _mRP = "multiRegionProperties";
export const _mr = "max-results";
export const _n = "name";
export const _nT = "nextToken";
export const _nt = "next-token";
export const _qC = "quotaCode";
export const _r = "reason";
export const _rA = "resourceArn";
export const _rAS = "retryAfterSeconds";
export const _rI = "resourceId";
export const _rT = "resourceType";
export const _s = "status";
export const _sC = "serviceCode";
export const _sN = "serviceName";
export const _se = "server";
export const _t = "tags";
export const _tK = "tagKeys";
export const _wR = "witnessRegion";
export const n0 = "com.amazonaws.dsql";

// smithy-typescript generated code
import { error } from "@smithy/core/schema";

import { DSQLServiceException as __DSQLServiceException } from "../models/DSQLServiceException";

/* eslint no-var: 0 */

export var DSQLServiceException = error(
  "smithy.ts.sdk.synthetic.com.amazonaws.dsql",
  "DSQLServiceException",
  0,
  [],
  [],
  __DSQLServiceException
);
