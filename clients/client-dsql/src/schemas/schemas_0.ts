const _ADE = "AccessDeniedException";
const _CC = "CreateCluster";
const _CCI = "CreateClusterInput";
const _CCO = "CreateClusterOutput";
const _CE = "ConflictException";
const _CL = "ClusterList";
const _CS = "ClusterSummary";
const _DC = "DeleteCluster";
const _DCI = "DeleteClusterInput";
const _DCO = "DeleteClusterOutput";
const _DCP = "DeleteClusterPolicy";
const _DCPI = "DeleteClusterPolicyInput";
const _DCPO = "DeleteClusterPolicyOutput";
const _ED = "EncryptionDetails";
const _GC = "GetCluster";
const _GCI = "GetClusterInput";
const _GCO = "GetClusterOutput";
const _GCP = "GetClusterPolicy";
const _GCPI = "GetClusterPolicyInput";
const _GCPO = "GetClusterPolicyOutput";
const _GVESN = "GetVpcEndpointServiceName";
const _GVESNI = "GetVpcEndpointServiceNameInput";
const _GVESNO = "GetVpcEndpointServiceNameOutput";
const _ISE = "InternalServerException";
const _LC = "ListClusters";
const _LCI = "ListClustersInput";
const _LCO = "ListClustersOutput";
const _LTFR = "ListTagsForResource";
const _LTFRI = "ListTagsForResourceInput";
const _LTFRO = "ListTagsForResourceOutput";
const _MRP = "MultiRegionProperties";
const _PCP = "PutClusterPolicy";
const _PCPI = "PutClusterPolicyInput";
const _PCPO = "PutClusterPolicyOutput";
const _RA = "Retry-After";
const _RNFE = "ResourceNotFoundException";
const _SQEE = "ServiceQuotaExceededException";
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
const _fL = "fieldList";
const _h = "http";
const _hE = "httpError";
const _hH = "httpHeader";
const _hQ = "httpQuery";
const _i = "identifier";
const _iT = "idempotencyToken";
const _kEK = "kmsEncryptionKey";
const _kKA = "kmsKeyArn";
const _m = "message";
const _mR = "maxResults";
const _mRP = "multiRegionProperties";
const _mr = "max-results";
const _n = "name";
const _nT = "nextToken";
const _nt = "next-token";
const _p = "policy";
const _pV = "policyVersion";
const _qC = "quotaCode";
const _r = "reason";
const _rA = "resourceArn";
const _rAS = "retryAfterSeconds";
const _rI = "resourceId";
const _rT = "resourceType";
const _s = "status";
const _sC = "serviceCode";
const _sN = "serviceName";
const _se = "server";
const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.dsql";
const _t = "tags";
const _tK = "tagKeys";
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
} from "@smithy/types";

import { DSQLServiceException as __DSQLServiceException } from "../models/DSQLServiceException";
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
export var AccessDeniedException: StaticErrorSchema = [-3, n0, _ADE, { [_e]: _c, [_hE]: 403 }, [_m], [0]];
TypeRegistry.for(n0).registerError(AccessDeniedException, __AccessDeniedException);
export var ClusterSummary: StaticStructureSchema = [3, n0, _CS, 0, [_i, _a], [0, 0]];
export var ConflictException: StaticErrorSchema = [-3, n0, _CE, { [_e]: _c, [_hE]: 409 }, [_m, _rI, _rT], [0, 0, 0]];
TypeRegistry.for(n0).registerError(ConflictException, __ConflictException);
export var CreateClusterInput: StaticStructureSchema = [
  3,
  n0,
  _CCI,
  0,
  [_dPE, _kEK, _t, _cT, _mRP, _p, _bPLSC],
  [2, 0, 128 | 0, [0, 4], () => MultiRegionProperties, 0, 2],
];
export var CreateClusterOutput: StaticStructureSchema = [
  3,
  n0,
  _CCO,
  0,
  [_i, _a, _s, _cTr, _mRP, _eD, _dPE, _en],
  [0, 0, 0, 4, () => MultiRegionProperties, () => EncryptionDetails, 2, 0],
];
export var DeleteClusterInput: StaticStructureSchema = [
  3,
  n0,
  _DCI,
  0,
  [_i, _cT],
  [
    [0, 1],
    [0, { [_iT]: 1, [_hQ]: _ct }],
  ],
];
export var DeleteClusterOutput: StaticStructureSchema = [3, n0, _DCO, 0, [_i, _a, _s, _cTr], [0, 0, 0, 4]];
export var DeleteClusterPolicyInput: StaticStructureSchema = [
  3,
  n0,
  _DCPI,
  0,
  [_i, _ePV, _cT],
  [
    [0, 1],
    [0, { [_hQ]: _epv }],
    [0, { [_iT]: 1, [_hQ]: _ct }],
  ],
];
export var DeleteClusterPolicyOutput: StaticStructureSchema = [3, n0, _DCPO, 0, [_pV], [0]];
export var EncryptionDetails: StaticStructureSchema = [3, n0, _ED, 0, [_eT, _kKA, _eS], [0, 0, 0]];
export var GetClusterInput: StaticStructureSchema = [3, n0, _GCI, 0, [_i], [[0, 1]]];
export var GetClusterOutput: StaticStructureSchema = [
  3,
  n0,
  _GCO,
  0,
  [_i, _a, _s, _cTr, _dPE, _mRP, _t, _eD, _en],
  [0, 0, 0, 4, 2, () => MultiRegionProperties, 128 | 0, () => EncryptionDetails, 0],
];
export var GetClusterPolicyInput: StaticStructureSchema = [3, n0, _GCPI, 0, [_i], [[0, 1]]];
export var GetClusterPolicyOutput: StaticStructureSchema = [3, n0, _GCPO, 0, [_p, _pV], [0, 0]];
export var GetVpcEndpointServiceNameInput: StaticStructureSchema = [3, n0, _GVESNI, 0, [_i], [[0, 1]]];
export var GetVpcEndpointServiceNameOutput: StaticStructureSchema = [3, n0, _GVESNO, 0, [_sN, _cVE], [0, 0]];
export var InternalServerException: StaticErrorSchema = [
  -3,
  n0,
  _ISE,
  { [_e]: _se, [_hE]: 500 },
  [_m, _rAS],
  [0, [1, { [_hH]: _RA }]],
];
TypeRegistry.for(n0).registerError(InternalServerException, __InternalServerException);
export var ListClustersInput: StaticStructureSchema = [
  3,
  n0,
  _LCI,
  0,
  [_mR, _nT],
  [
    [1, { [_hQ]: _mr }],
    [0, { [_hQ]: _nt }],
  ],
];
export var ListClustersOutput: StaticStructureSchema = [3, n0, _LCO, 0, [_nT, _cl], [0, () => ClusterList]];
export var ListTagsForResourceInput: StaticStructureSchema = [3, n0, _LTFRI, 0, [_rA], [[0, 1]]];
export var ListTagsForResourceOutput: StaticStructureSchema = [3, n0, _LTFRO, 0, [_t], [128 | 0]];
export var MultiRegionProperties: StaticStructureSchema = [3, n0, _MRP, 0, [_wR, _cl], [0, 64 | 0]];
export var PutClusterPolicyInput: StaticStructureSchema = [
  3,
  n0,
  _PCPI,
  0,
  [_i, _p, _bPLSC, _ePV, _cT],
  [[0, 1], 0, 2, 0, [0, 4]],
];
export var PutClusterPolicyOutput: StaticStructureSchema = [3, n0, _PCPO, 0, [_pV], [0]];
export var ResourceNotFoundException: StaticErrorSchema = [
  -3,
  n0,
  _RNFE,
  { [_e]: _c, [_hE]: 404 },
  [_m, _rI, _rT],
  [0, 0, 0],
];
TypeRegistry.for(n0).registerError(ResourceNotFoundException, __ResourceNotFoundException);
export var ServiceQuotaExceededException: StaticErrorSchema = [
  -3,
  n0,
  _SQEE,
  { [_e]: _c, [_hE]: 402 },
  [_m, _rI, _rT, _sC, _qC],
  [0, 0, 0, 0, 0],
];
TypeRegistry.for(n0).registerError(ServiceQuotaExceededException, __ServiceQuotaExceededException);
export var TagResourceInput: StaticStructureSchema = [3, n0, _TRI, 0, [_rA, _t], [[0, 1], 128 | 0]];
export var ThrottlingException: StaticErrorSchema = [
  -3,
  n0,
  _TE,
  { [_e]: _c, [_hE]: 429 },
  [_m, _sC, _qC, _rAS],
  [0, 0, 0, [1, { [_hH]: _RA }]],
];
TypeRegistry.for(n0).registerError(ThrottlingException, __ThrottlingException);
export var UntagResourceInput: StaticStructureSchema = [
  3,
  n0,
  _URI,
  0,
  [_rA, _tK],
  [
    [0, 1],
    [64 | 0, { [_hQ]: _tK }],
  ],
];
export var UpdateClusterInput: StaticStructureSchema = [
  3,
  n0,
  _UCI,
  0,
  [_i, _dPE, _kEK, _cT, _mRP],
  [[0, 1], 2, 0, [0, 4], () => MultiRegionProperties],
];
export var UpdateClusterOutput: StaticStructureSchema = [3, n0, _UCO, 0, [_i, _a, _s, _cTr], [0, 0, 0, 4]];
export var ValidationException: StaticErrorSchema = [
  -3,
  n0,
  _VE,
  { [_e]: _c, [_hE]: 400 },
  [_m, _r, _fL],
  [0, 0, () => ValidationExceptionFieldList],
];
TypeRegistry.for(n0).registerError(ValidationException, __ValidationException);
export var ValidationExceptionField: StaticStructureSchema = [3, n0, _VEF, 0, [_n, _m], [0, 0]];
export var __Unit = "unit" as const;
export var DSQLServiceException: StaticErrorSchema = [-3, _sm, "DSQLServiceException", 0, [], []];
TypeRegistry.for(_sm).registerError(DSQLServiceException, __DSQLServiceException);
export var ClusterArnList = 64 | 0;
export var ClusterList: StaticListSchema = [1, n0, _CL, 0, () => ClusterSummary];
export var TagKeyList = 64 | 0;
export var ValidationExceptionFieldList: StaticListSchema = [1, n0, _VEFL, 0, () => ValidationExceptionField];
export var TagMap = 128 | 0;
export var CreateCluster: StaticOperationSchema = [
  9,
  n0,
  _CC,
  { [_h]: ["POST", "/cluster", 200] },
  () => CreateClusterInput,
  () => CreateClusterOutput,
];
export var DeleteCluster: StaticOperationSchema = [
  9,
  n0,
  _DC,
  { [_h]: ["DELETE", "/cluster/{identifier}", 200] },
  () => DeleteClusterInput,
  () => DeleteClusterOutput,
];
export var DeleteClusterPolicy: StaticOperationSchema = [
  9,
  n0,
  _DCP,
  { [_h]: ["DELETE", "/cluster/{identifier}/policy", 200] },
  () => DeleteClusterPolicyInput,
  () => DeleteClusterPolicyOutput,
];
export var GetCluster: StaticOperationSchema = [
  9,
  n0,
  _GC,
  { [_h]: ["GET", "/cluster/{identifier}", 200] },
  () => GetClusterInput,
  () => GetClusterOutput,
];
export var GetClusterPolicy: StaticOperationSchema = [
  9,
  n0,
  _GCP,
  { [_h]: ["GET", "/cluster/{identifier}/policy", 200] },
  () => GetClusterPolicyInput,
  () => GetClusterPolicyOutput,
];
export var GetVpcEndpointServiceName: StaticOperationSchema = [
  9,
  n0,
  _GVESN,
  { [_h]: ["GET", "/clusters/{identifier}/vpc-endpoint-service-name", 200] },
  () => GetVpcEndpointServiceNameInput,
  () => GetVpcEndpointServiceNameOutput,
];
export var ListClusters: StaticOperationSchema = [
  9,
  n0,
  _LC,
  { [_h]: ["GET", "/cluster", 200] },
  () => ListClustersInput,
  () => ListClustersOutput,
];
export var ListTagsForResource: StaticOperationSchema = [
  9,
  n0,
  _LTFR,
  { [_h]: ["GET", "/tags/{resourceArn}", 200] },
  () => ListTagsForResourceInput,
  () => ListTagsForResourceOutput,
];
export var PutClusterPolicy: StaticOperationSchema = [
  9,
  n0,
  _PCP,
  { [_h]: ["POST", "/cluster/{identifier}/policy", 200] },
  () => PutClusterPolicyInput,
  () => PutClusterPolicyOutput,
];
export var TagResource: StaticOperationSchema = [
  9,
  n0,
  _TR,
  { [_h]: ["POST", "/tags/{resourceArn}", 200] },
  () => TagResourceInput,
  () => __Unit,
];
export var UntagResource: StaticOperationSchema = [
  9,
  n0,
  _UR,
  { [_h]: ["DELETE", "/tags/{resourceArn}", 200] },
  () => UntagResourceInput,
  () => __Unit,
];
export var UpdateCluster: StaticOperationSchema = [
  9,
  n0,
  _UC,
  { [_h]: ["POST", "/cluster/{identifier}", 200] },
  () => UpdateClusterInput,
  () => UpdateClusterOutput,
];
