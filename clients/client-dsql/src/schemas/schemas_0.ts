const _ADE = "AccessDeniedException";
const _CC = "CreateCluster";
const _CCI = "CreateClusterInput";
const _CCO = "CreateClusterOutput";
const _CE = "ConflictException";
const _CL = "ClusterList";
const _CS = "ClusterSummary";
const _CSI = "CreateStreamInput";
const _CSO = "CreateStreamOutput";
const _CSr = "CreateStream";
const _DC = "DeleteCluster";
const _DCI = "DeleteClusterInput";
const _DCO = "DeleteClusterOutput";
const _DCP = "DeleteClusterPolicy";
const _DCPI = "DeleteClusterPolicyInput";
const _DCPO = "DeleteClusterPolicyOutput";
const _DS = "DeleteStream";
const _DSI = "DeleteStreamInput";
const _DSO = "DeleteStreamOutput";
const _ED = "EncryptionDetails";
const _GC = "GetCluster";
const _GCI = "GetClusterInput";
const _GCO = "GetClusterOutput";
const _GCP = "GetClusterPolicy";
const _GCPI = "GetClusterPolicyInput";
const _GCPO = "GetClusterPolicyOutput";
const _GS = "GetStream";
const _GSI = "GetStreamInput";
const _GSO = "GetStreamOutput";
const _GVESN = "GetVpcEndpointServiceName";
const _GVESNI = "GetVpcEndpointServiceNameInput";
const _GVESNO = "GetVpcEndpointServiceNameOutput";
const _ISE = "InternalServerException";
const _KTD = "KinesisTargetDefinition";
const _LC = "ListClusters";
const _LCI = "ListClustersInput";
const _LCO = "ListClustersOutput";
const _LS = "ListStreams";
const _LSI = "ListStreamsInput";
const _LSO = "ListStreamsOutput";
const _LTFR = "ListTagsForResource";
const _LTFRI = "ListTagsForResourceInput";
const _LTFRO = "ListTagsForResourceOutput";
const _MRP = "MultiRegionProperties";
const _PCP = "PutClusterPolicy";
const _PCPI = "PutClusterPolicyInput";
const _PCPO = "PutClusterPolicyOutput";
const _RA = "Retry-After";
const _RNFE = "ResourceNotFoundException";
const _SL = "StreamList";
const _SQEE = "ServiceQuotaExceededException";
const _SR = "StatusReason";
const _SS = "StreamSummary";
const _TD = "TargetDefinition";
const _TE = "ThrottlingException";
const _TR = "TagResource";
const _TRI = "TagResourceInput";
const _UC = "UpdateCluster";
const _UCI = "UpdateClusterInput";
const _UCO = "UpdateClusterOutput";
const _UR = "UntagResource";
const _URI = "UntagResourceInput";
const _VE = "ValidationException";
const _VEF = "ValidationExceptionField";
const _VEFL = "ValidationExceptionFieldList";
const _a = "arn";
const _bPLSC = "bypassPolicyLockoutSafetyCheck";
const _c = "client";
const _cI = "clusterIdentifier";
const _cT = "clientToken";
const _cTr = "creationTime";
const _cVE = "clusterVpcEndpoint";
const _cl = "clusters";
const _ct = "client-token";
const _dPE = "deletionProtectionEnabled";
const _e = "error";
const _eD = "encryptionDetails";
const _ePV = "expectedPolicyVersion";
const _eS = "encryptionStatus";
const _eT = "encryptionType";
const _en = "endpoint";
const _epv = "expected-policy-version";
const _f = "format";
const _fL = "fieldList";
const _h = "http";
const _hE = "httpError";
const _hH = "httpHeader";
const _hQ = "httpQuery";
const _i = "identifier";
const _iT = "idempotencyToken";
const _k = "kinesis";
const _kEK = "kmsEncryptionKey";
const _kKA = "kmsKeyArn";
const _m = "message";
const _mR = "maxResults";
const _mRP = "multiRegionProperties";
const _mr = "max-results";
const _n = "name";
const _nT = "nextToken";
const _nt = "next-token";
const _o = "ordering";
const _p = "policy";
const _pV = "policyVersion";
const _qC = "quotaCode";
const _r = "reason";
const _rA = "roleArn";
const _rAS = "retryAfterSeconds";
const _rAe = "resourceArn";
const _rI = "resourceId";
const _rT = "resourceType";
const _s = "smithy.ts.sdk.synthetic.com.amazonaws.dsql";
const _sA = "streamArn";
const _sC = "serviceCode";
const _sI = "streamIdentifier";
const _sN = "serviceName";
const _sR = "statusReason";
const _se = "server";
const _st = "status";
const _str = "streams";
const _t = "tags";
const _tD = "targetDefinition";
const _tK = "tagKeys";
const _uA = "updatedAt";
const _wR = "witnessRegion";
const n0 = "com.amazonaws.dsql";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import type {
  StaticErrorSchema,
  StaticListSchema,
  StaticMapSchema,
  StaticOperationSchema,
  StaticStructureSchema,
  StaticUnionSchema,
} from "@smithy/types";

import { DSQLServiceException } from "../models/DSQLServiceException";
import {
  AccessDeniedException,
  ConflictException,
  InternalServerException,
  ResourceNotFoundException,
  ServiceQuotaExceededException,
  ThrottlingException,
  ValidationException,
} from "../models/errors";

/* eslint no-var: 0 */
const _s_registry = TypeRegistry.for(_s);
export var DSQLServiceException$: StaticErrorSchema = [-3, _s, "DSQLServiceException", 0, [], []];
_s_registry.registerError(DSQLServiceException$, DSQLServiceException);
const n0_registry = TypeRegistry.for(n0);
export var AccessDeniedException$: StaticErrorSchema = [-3, n0, _ADE,
  { [_e]: _c, [_hE]: 403 },
  [_m],
  [0], 1
];
n0_registry.registerError(AccessDeniedException$, AccessDeniedException);
export var ConflictException$: StaticErrorSchema = [-3, n0, _CE,
  { [_e]: _c, [_hE]: 409 },
  [_m, _rI, _rT],
  [0, 0, 0], 1
];
n0_registry.registerError(ConflictException$, ConflictException);
export var InternalServerException$: StaticErrorSchema = [-3, n0, _ISE,
  { [_e]: _se, [_hE]: 500 },
  [_m, _rAS],
  [0, [1, { [_hH]: _RA }]], 1
];
n0_registry.registerError(InternalServerException$, InternalServerException);
export var ResourceNotFoundException$: StaticErrorSchema = [-3, n0, _RNFE,
  { [_e]: _c, [_hE]: 404 },
  [_m, _rI, _rT],
  [0, 0, 0], 3
];
n0_registry.registerError(ResourceNotFoundException$, ResourceNotFoundException);
export var ServiceQuotaExceededException$: StaticErrorSchema = [-3, n0, _SQEE,
  { [_e]: _c, [_hE]: 402 },
  [_m, _rI, _rT, _sC, _qC],
  [0, 0, 0, 0, 0], 5
];
n0_registry.registerError(ServiceQuotaExceededException$, ServiceQuotaExceededException);
export var ThrottlingException$: StaticErrorSchema = [-3, n0, _TE,
  { [_e]: _c, [_hE]: 429 },
  [_m, _sC, _qC, _rAS],
  [0, 0, 0, [1, { [_hH]: _RA }]], 1
];
n0_registry.registerError(ThrottlingException$, ThrottlingException);
export var ValidationException$: StaticErrorSchema = [-3, n0, _VE,
  { [_e]: _c, [_hE]: 400 },
  [_m, _r, _fL],
  [0, 0, () => ValidationExceptionFieldList], 2
];
n0_registry.registerError(ValidationException$, ValidationException);
/**
 * TypeRegistry instances containing modeled errors.
 * @internal
 *
 */
export const errorTypeRegistries = [
  _s_registry,
  n0_registry,
]
export var ClusterSummary$: StaticStructureSchema = [3, n0, _CS,
  0,
  [_i, _a],
  [0, 0], 2
];
export var CreateClusterInput$: StaticStructureSchema = [3, n0, _CCI,
  0,
  [_dPE, _kEK, _t, _cT, _mRP, _p, _bPLSC],
  [2, 0, 128 | 0, [0, 4], () => MultiRegionProperties$, 0, 2]
];
export var CreateClusterOutput$: StaticStructureSchema = [3, n0, _CCO,
  0,
  [_i, _a, _st, _cTr, _dPE, _mRP, _eD, _en],
  [0, 0, 0, 4, 2, () => MultiRegionProperties$, () => EncryptionDetails$, 0], 5
];
export var CreateStreamInput$: StaticStructureSchema = [3, n0, _CSI,
  0,
  [_cI, _tD, _o, _f, _t, _cT],
  [[0, 1], () => TargetDefinition$, 0, 0, 128 | 0, [0, 4]], 4
];
export var CreateStreamOutput$: StaticStructureSchema = [3, n0, _CSO,
  0,
  [_cI, _sI, _a, _st, _cTr, _o, _f],
  [0, 0, 0, 0, 4, 0, 0], 7
];
export var DeleteClusterInput$: StaticStructureSchema = [3, n0, _DCI,
  0,
  [_i, _cT],
  [[0, 1], [0, { [_hQ]: _ct, [_iT]: 1 }]], 1
];
export var DeleteClusterOutput$: StaticStructureSchema = [3, n0, _DCO,
  0,
  [_i, _a, _st, _cTr],
  [0, 0, 0, 4], 4
];
export var DeleteClusterPolicyInput$: StaticStructureSchema = [3, n0, _DCPI,
  0,
  [_i, _ePV, _cT],
  [[0, 1], [0, { [_hQ]: _epv }], [0, { [_hQ]: _ct, [_iT]: 1 }]], 1
];
export var DeleteClusterPolicyOutput$: StaticStructureSchema = [3, n0, _DCPO,
  0,
  [_pV],
  [0], 1
];
export var DeleteStreamInput$: StaticStructureSchema = [3, n0, _DSI,
  0,
  [_cI, _sI, _cT],
  [[0, 1], [0, 1], [0, { [_hQ]: _ct, [_iT]: 1 }]], 2
];
export var DeleteStreamOutput$: StaticStructureSchema = [3, n0, _DSO,
  0,
  [_cI, _sI, _a, _st, _cTr],
  [0, 0, 0, 0, 4], 5
];
export var EncryptionDetails$: StaticStructureSchema = [3, n0, _ED,
  0,
  [_eT, _eS, _kKA],
  [0, 0, 0], 2
];
export var GetClusterInput$: StaticStructureSchema = [3, n0, _GCI,
  0,
  [_i],
  [[0, 1]], 1
];
export var GetClusterOutput$: StaticStructureSchema = [3, n0, _GCO,
  0,
  [_i, _a, _st, _cTr, _dPE, _mRP, _t, _eD, _en],
  [0, 0, 0, 4, 2, () => MultiRegionProperties$, 128 | 0, () => EncryptionDetails$, 0], 5
];
export var GetClusterPolicyInput$: StaticStructureSchema = [3, n0, _GCPI,
  0,
  [_i],
  [[0, 1]], 1
];
export var GetClusterPolicyOutput$: StaticStructureSchema = [3, n0, _GCPO,
  0,
  [_p, _pV],
  [0, 0], 2
];
export var GetStreamInput$: StaticStructureSchema = [3, n0, _GSI,
  0,
  [_cI, _sI],
  [[0, 1], [0, 1]], 2
];
export var GetStreamOutput$: StaticStructureSchema = [3, n0, _GSO,
  0,
  [_cI, _sI, _a, _st, _cTr, _o, _f, _tD, _sR, _t],
  [0, 0, 0, 0, 4, 0, 0, () => TargetDefinition$, () => StatusReason$, 128 | 0], 7
];
export var GetVpcEndpointServiceNameInput$: StaticStructureSchema = [3, n0, _GVESNI,
  0,
  [_i],
  [[0, 1]], 1
];
export var GetVpcEndpointServiceNameOutput$: StaticStructureSchema = [3, n0, _GVESNO,
  0,
  [_sN, _cVE],
  [0, 0], 1
];
export var KinesisTargetDefinition$: StaticStructureSchema = [3, n0, _KTD,
  0,
  [_sA, _rA],
  [0, 0], 2
];
export var ListClustersInput$: StaticStructureSchema = [3, n0, _LCI,
  0,
  [_mR, _nT],
  [[1, { [_hQ]: _mr }], [0, { [_hQ]: _nt }]]
];
export var ListClustersOutput$: StaticStructureSchema = [3, n0, _LCO,
  0,
  [_cl, _nT],
  [() => ClusterList, 0], 1
];
export var ListStreamsInput$: StaticStructureSchema = [3, n0, _LSI,
  0,
  [_cI, _mR, _nT],
  [[0, 1], [1, { [_hQ]: _mr }], [0, { [_hQ]: _nt }]], 1
];
export var ListStreamsOutput$: StaticStructureSchema = [3, n0, _LSO,
  0,
  [_str, _nT],
  [() => StreamList, 0], 1
];
export var ListTagsForResourceInput$: StaticStructureSchema = [3, n0, _LTFRI,
  0,
  [_rAe],
  [[0, 1]], 1
];
export var ListTagsForResourceOutput$: StaticStructureSchema = [3, n0, _LTFRO,
  0,
  [_t],
  [128 | 0]
];
export var MultiRegionProperties$: StaticStructureSchema = [3, n0, _MRP,
  0,
  [_wR, _cl],
  [0, 64 | 0]
];
export var PutClusterPolicyInput$: StaticStructureSchema = [3, n0, _PCPI,
  0,
  [_i, _p, _bPLSC, _ePV, _cT],
  [[0, 1], 0, 2, 0, [0, 4]], 2
];
export var PutClusterPolicyOutput$: StaticStructureSchema = [3, n0, _PCPO,
  0,
  [_pV],
  [0], 1
];
export var StatusReason$: StaticStructureSchema = [3, n0, _SR,
  0,
  [_e, _uA],
  [0, 4], 2
];
export var StreamSummary$: StaticStructureSchema = [3, n0, _SS,
  0,
  [_cI, _sI, _a, _cTr, _st],
  [0, 0, 0, 4, 0], 5
];
export var TagResourceInput$: StaticStructureSchema = [3, n0, _TRI,
  0,
  [_rAe, _t],
  [[0, 1], 128 | 0], 2
];
export var UntagResourceInput$: StaticStructureSchema = [3, n0, _URI,
  0,
  [_rAe, _tK],
  [[0, 1], [64 | 0, { [_hQ]: _tK }]], 2
];
export var UpdateClusterInput$: StaticStructureSchema = [3, n0, _UCI,
  0,
  [_i, _dPE, _kEK, _cT, _mRP],
  [[0, 1], 2, 0, [0, 4], () => MultiRegionProperties$], 1
];
export var UpdateClusterOutput$: StaticStructureSchema = [3, n0, _UCO,
  0,
  [_i, _a, _st, _cTr],
  [0, 0, 0, 4], 4
];
export var ValidationExceptionField$: StaticStructureSchema = [3, n0, _VEF,
  0,
  [_n, _m],
  [0, 0], 2
];
var __Unit = "unit" as const;
var ClusterArnList = 64 | 0;
var ClusterList: StaticListSchema = [1, n0, _CL,
  0, () => ClusterSummary$
];
var StreamList: StaticListSchema = [1, n0, _SL,
  0, () => StreamSummary$
];
var TagKeyList = 64 | 0;
var ValidationExceptionFieldList: StaticListSchema = [1, n0, _VEFL,
  0, () => ValidationExceptionField$
];
var TagMap = 128 | 0;
export var TargetDefinition$: StaticUnionSchema = [4, n0, _TD,
  0,
  [_k],
  [() => KinesisTargetDefinition$]
];
export var CreateCluster$: StaticOperationSchema = [9, n0, _CC,
  { [_h]: ["POST", "/cluster", 200] }, () => CreateClusterInput$, () => CreateClusterOutput$
];
export var CreateStream$: StaticOperationSchema = [9, n0, _CSr,
  { [_h]: ["POST", "/stream/{clusterIdentifier}", 200] }, () => CreateStreamInput$, () => CreateStreamOutput$
];
export var DeleteCluster$: StaticOperationSchema = [9, n0, _DC,
  { [_h]: ["DELETE", "/cluster/{identifier}", 200] }, () => DeleteClusterInput$, () => DeleteClusterOutput$
];
export var DeleteClusterPolicy$: StaticOperationSchema = [9, n0, _DCP,
  { [_h]: ["DELETE", "/cluster/{identifier}/policy", 200] }, () => DeleteClusterPolicyInput$, () => DeleteClusterPolicyOutput$
];
export var DeleteStream$: StaticOperationSchema = [9, n0, _DS,
  { [_h]: ["DELETE", "/stream/{clusterIdentifier}/{streamIdentifier}", 200] }, () => DeleteStreamInput$, () => DeleteStreamOutput$
];
export var GetCluster$: StaticOperationSchema = [9, n0, _GC,
  { [_h]: ["GET", "/cluster/{identifier}", 200] }, () => GetClusterInput$, () => GetClusterOutput$
];
export var GetClusterPolicy$: StaticOperationSchema = [9, n0, _GCP,
  { [_h]: ["GET", "/cluster/{identifier}/policy", 200] }, () => GetClusterPolicyInput$, () => GetClusterPolicyOutput$
];
export var GetStream$: StaticOperationSchema = [9, n0, _GS,
  { [_h]: ["GET", "/stream/{clusterIdentifier}/{streamIdentifier}", 200] }, () => GetStreamInput$, () => GetStreamOutput$
];
export var GetVpcEndpointServiceName$: StaticOperationSchema = [9, n0, _GVESN,
  { [_h]: ["GET", "/clusters/{identifier}/vpc-endpoint-service-name", 200] }, () => GetVpcEndpointServiceNameInput$, () => GetVpcEndpointServiceNameOutput$
];
export var ListClusters$: StaticOperationSchema = [9, n0, _LC,
  { [_h]: ["GET", "/cluster", 200] }, () => ListClustersInput$, () => ListClustersOutput$
];
export var ListStreams$: StaticOperationSchema = [9, n0, _LS,
  { [_h]: ["GET", "/stream/{clusterIdentifier}", 200] }, () => ListStreamsInput$, () => ListStreamsOutput$
];
export var ListTagsForResource$: StaticOperationSchema = [9, n0, _LTFR,
  { [_h]: ["GET", "/tags/{resourceArn}", 200] }, () => ListTagsForResourceInput$, () => ListTagsForResourceOutput$
];
export var PutClusterPolicy$: StaticOperationSchema = [9, n0, _PCP,
  { [_h]: ["POST", "/cluster/{identifier}/policy", 200] }, () => PutClusterPolicyInput$, () => PutClusterPolicyOutput$
];
export var TagResource$: StaticOperationSchema = [9, n0, _TR,
  { [_h]: ["POST", "/tags/{resourceArn}", 200] }, () => TagResourceInput$, () => __Unit
];
export var UntagResource$: StaticOperationSchema = [9, n0, _UR,
  { [_h]: ["DELETE", "/tags/{resourceArn}", 200] }, () => UntagResourceInput$, () => __Unit
];
export var UpdateCluster$: StaticOperationSchema = [9, n0, _UC,
  { [_h]: ["POST", "/cluster/{identifier}", 200] }, () => UpdateClusterInput$, () => UpdateClusterOutput$
];
