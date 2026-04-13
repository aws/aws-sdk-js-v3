const _ACP = "AcceptConnectionProposal";
const _ACPR = "AcceptConnectionProposalRequest";
const _ACPRc = "AcceptConnectionProposalResponse";
const _ADE = "AccessDeniedException";
const _AK = "ActivationKey";
const _AP = "AttachPoint";
const _APD = "AttachPointDescriptor";
const _APDL = "AttachPointDescriptorList";
const _B = "Bandwidths";
const _C = "Connection";
const _CC = "CreateConnection";
const _CCR = "CreateConnectionRequest";
const _CCRr = "CreateConnectionResponse";
const _CS = "ConnectionSummary";
const _CSL = "ConnectionSummariesList";
const _DC = "DeleteConnection";
const _DCP = "DescribeConnectionProposal";
const _DCPR = "DescribeConnectionProposalRequest";
const _DCPRe = "DescribeConnectionProposalResponse";
const _DCR = "DeleteConnectionRequest";
const _DCRe = "DeleteConnectionResponse";
const _E = "Environment";
const _EL = "EnvironmentList";
const _GC = "GetConnection";
const _GCR = "GetConnectionRequest";
const _GCRe = "GetConnectionResponse";
const _GE = "GetEnvironment";
const _GER = "GetEnvironmentRequest";
const _GERe = "GetEnvironmentResponse";
const _ICE = "InterconnectClientException";
const _ISE = "InterconnectServerException";
const _IVE = "InterconnectValidationException";
const _LAP = "ListAttachPoints";
const _LAPR = "ListAttachPointsRequest";
const _LAPRi = "ListAttachPointsResponse";
const _LC = "ListConnections";
const _LCR = "ListConnectionsRequest";
const _LCRi = "ListConnectionsResponse";
const _LE = "ListEnvironments";
const _LER = "ListEnvironmentsRequest";
const _LERi = "ListEnvironmentsResponse";
const _LTFR = "ListTagsForResource";
const _LTFRR = "ListTagsForResourceRequest";
const _LTFRRi = "ListTagsForResourceResponse";
const _P = "Provider";
const _RAI = "RemoteAccountIdentifier";
const _RNFE = "ResourceNotFoundException";
const _SQEE = "ServiceQuotaExceededException";
const _TE = "ThrottlingException";
const _TR = "TagResource";
const _TRR = "TagResourceRequest";
const _TRRa = "TagResourceResponse";
const _UC = "UpdateConnection";
const _UCR = "UpdateConnectionRequest";
const _UCRp = "UpdateConnectionResponse";
const _UR = "UntagResource";
const _URR = "UntagResourceRequest";
const _URRn = "UntagResourceResponse";
const _a = "available";
const _aK = "activationKey";
const _aP = "attachPoint";
const _aPU = "activationPageUrl";
const _aPt = "attachPoints";
const _ar = "arn";
const _b = "bandwidth";
const _bT = "billingTier";
const _ba = "bandwidths";
const _c = "client";
const _cSP = "cloudServiceProvider";
const _cT = "clientToken";
const _co = "connection";
const _con = "connections";
const _d = "description";
const _dCG = "directConnectGateway";
const _e = "error";
const _eI = "environmentId";
const _en = "environment";
const _env = "environments";
const _hE = "httpError";
const _i = "identifier";
const _id = "id";
const _l = "location";
const _lMP = "lastMileProvider";
const _m = "message";
const _mR = "maxResults";
const _n = "name";
const _nT = "nextToken";
const _oA = "ownerAccount";
const _p = "provider";
const _rA = "remoteAccount";
const _rIT = "remoteIdentifierType";
const _s = "smithy.ts.sdk.synthetic.com.amazonaws.interconnect";
const _sI = "sharedId";
const _se = "server";
const _st = "state";
const _su = "supported";
const _t = "tags";
const _tK = "tagKeys";
const _ty = "type";
const n0 = "com.amazonaws.interconnect";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import type {
  StaticErrorSchema,
  StaticListSchema,
  StaticMapSchema,
  StaticOperationSchema,
  StaticSimpleSchema,
  StaticStructureSchema,
  StaticUnionSchema,
} from "@smithy/types";

import {
  AccessDeniedException,
  InterconnectClientException,
  InterconnectServerException,
  InterconnectValidationException,
  ResourceNotFoundException,
  ServiceQuotaExceededException,
  ThrottlingException,
} from "../models/errors";
import { InterconnectServiceException } from "../models/InterconnectServiceException";

/* eslint no-var: 0 */
const _s_registry = TypeRegistry.for(_s);
export var InterconnectServiceException$: StaticErrorSchema = [-3, _s, "InterconnectServiceException", 0, [], []];
_s_registry.registerError(InterconnectServiceException$, InterconnectServiceException);
const n0_registry = TypeRegistry.for(n0);
export var AccessDeniedException$: StaticErrorSchema = [-3, n0, _ADE,
  { [_e]: _c, [_hE]: 403 },
  [_m],
  [0]
];
n0_registry.registerError(AccessDeniedException$, AccessDeniedException);
export var InterconnectClientException$: StaticErrorSchema = [-3, n0, _ICE,
  { [_e]: _c, [_hE]: 400 },
  [_m],
  [0], 1
];
n0_registry.registerError(InterconnectClientException$, InterconnectClientException);
export var InterconnectServerException$: StaticErrorSchema = [-3, n0, _ISE,
  { [_e]: _se, [_hE]: 500 },
  [_m],
  [0], 1
];
n0_registry.registerError(InterconnectServerException$, InterconnectServerException);
export var InterconnectValidationException$: StaticErrorSchema = [-3, n0, _IVE,
  { [_e]: _c, [_hE]: 400 },
  [_m],
  [0], 1
];
n0_registry.registerError(InterconnectValidationException$, InterconnectValidationException);
export var ResourceNotFoundException$: StaticErrorSchema = [-3, n0, _RNFE,
  { [_e]: _c, [_hE]: 404 },
  [_m],
  [0]
];
n0_registry.registerError(ResourceNotFoundException$, ResourceNotFoundException);
export var ServiceQuotaExceededException$: StaticErrorSchema = [-3, n0, _SQEE,
  { [_e]: _c, [_hE]: 402 },
  [_m],
  [0]
];
n0_registry.registerError(ServiceQuotaExceededException$, ServiceQuotaExceededException);
export var ThrottlingException$: StaticErrorSchema = [-3, n0, _TE,
  { [_e]: _c, [_hE]: 429 },
  [_m],
  [0]
];
n0_registry.registerError(ThrottlingException$, ThrottlingException);
/**
 * TypeRegistry instances containing modeled errors.
 * @internal
 *
 */
export const errorTypeRegistries = [
  _s_registry,
  n0_registry,
]
var ActivationKey: StaticSimpleSchema = [0, n0, _AK, 8, 0];
export var AcceptConnectionProposalRequest$: StaticStructureSchema = [3, n0, _ACPR,
  0,
  [_aP, _aK, _d, _t, _cT],
  [() => AttachPoint$, [() => ActivationKey, 0], 0, 128 | 0, [0, 4]], 2
];
export var AcceptConnectionProposalResponse$: StaticStructureSchema = [3, n0, _ACPRc,
  0,
  [_co],
  [[() => Connection$, 0]]
];
export var AttachPointDescriptor$: StaticStructureSchema = [3, n0, _APD,
  0,
  [_ty, _i, _n],
  [0, 0, 0], 3
];
export var Bandwidths$: StaticStructureSchema = [3, n0, _B,
  0,
  [_a, _su],
  [64 | 0, 64 | 0]
];
export var Connection$: StaticStructureSchema = [3, n0, _C,
  0,
  [_id, _ar, _d, _b, _aP, _eI, _p, _l, _ty, _st, _sI, _oA, _aK, _bT, _t],
  [0, 0, 0, 0, () => AttachPoint$, 0, () => Provider$, 0, 0, 0, 0, 0, [() => ActivationKey, 0], 1, 128 | 0], 13
];
export var ConnectionSummary$: StaticStructureSchema = [3, n0, _CS,
  0,
  [_id, _ar, _d, _b, _aP, _eI, _p, _l, _ty, _st, _sI, _bT],
  [0, 0, 0, 0, () => AttachPoint$, 0, () => Provider$, 0, 0, 0, 0, 1], 11
];
export var CreateConnectionRequest$: StaticStructureSchema = [3, n0, _CCR,
  0,
  [_b, _aP, _eI, _d, _rA, _t, _cT],
  [0, () => AttachPoint$, 0, 0, () => RemoteAccountIdentifier$, 128 | 0, [0, 4]], 3
];
export var CreateConnectionResponse$: StaticStructureSchema = [3, n0, _CCRr,
  0,
  [_co],
  [[() => Connection$, 0]]
];
export var DeleteConnectionRequest$: StaticStructureSchema = [3, n0, _DCR,
  0,
  [_i, _cT],
  [0, [0, 4]], 1
];
export var DeleteConnectionResponse$: StaticStructureSchema = [3, n0, _DCRe,
  0,
  [_co],
  [[() => Connection$, 0]], 1
];
export var DescribeConnectionProposalRequest$: StaticStructureSchema = [3, n0, _DCPR,
  0,
  [_aK],
  [[() => ActivationKey, 0]], 1
];
export var DescribeConnectionProposalResponse$: StaticStructureSchema = [3, n0, _DCPRe,
  0,
  [_b, _eI, _p, _l],
  [0, 0, () => Provider$, 0], 4
];
export var Environment$: StaticStructureSchema = [3, n0, _E,
  0,
  [_p, _l, _eI, _st, _ba, _ty, _aPU, _rIT],
  [() => Provider$, 0, 0, 0, () => Bandwidths$, 0, 0, 0], 6
];
export var GetConnectionRequest$: StaticStructureSchema = [3, n0, _GCR,
  0,
  [_i],
  [0], 1
];
export var GetConnectionResponse$: StaticStructureSchema = [3, n0, _GCRe,
  0,
  [_co],
  [[() => Connection$, 0]]
];
export var GetEnvironmentRequest$: StaticStructureSchema = [3, n0, _GER,
  0,
  [_id],
  [0], 1
];
export var GetEnvironmentResponse$: StaticStructureSchema = [3, n0, _GERe,
  0,
  [_en],
  [() => Environment$], 1
];
export var ListAttachPointsRequest$: StaticStructureSchema = [3, n0, _LAPR,
  0,
  [_eI, _mR, _nT],
  [0, 1, 0], 1
];
export var ListAttachPointsResponse$: StaticStructureSchema = [3, n0, _LAPRi,
  0,
  [_aPt, _nT],
  [() => AttachPointDescriptorList, 0], 1
];
export var ListConnectionsRequest$: StaticStructureSchema = [3, n0, _LCR,
  0,
  [_mR, _nT, _st, _eI, _p, _aP],
  [1, 0, 0, 0, () => Provider$, () => AttachPoint$]
];
export var ListConnectionsResponse$: StaticStructureSchema = [3, n0, _LCRi,
  0,
  [_con, _nT],
  [() => ConnectionSummariesList, 0]
];
export var ListEnvironmentsRequest$: StaticStructureSchema = [3, n0, _LER,
  0,
  [_mR, _nT, _p, _l],
  [1, 0, () => Provider$, 0]
];
export var ListEnvironmentsResponse$: StaticStructureSchema = [3, n0, _LERi,
  0,
  [_env, _nT],
  [() => EnvironmentList, 0], 1
];
export var ListTagsForResourceRequest$: StaticStructureSchema = [3, n0, _LTFRR,
  0,
  [_ar],
  [0], 1
];
export var ListTagsForResourceResponse$: StaticStructureSchema = [3, n0, _LTFRRi,
  0,
  [_t],
  [128 | 0]
];
export var TagResourceRequest$: StaticStructureSchema = [3, n0, _TRR,
  0,
  [_ar, _t],
  [0, 128 | 0], 2
];
export var TagResourceResponse$: StaticStructureSchema = [3, n0, _TRRa,
  0,
  [],
  []
];
export var UntagResourceRequest$: StaticStructureSchema = [3, n0, _URR,
  0,
  [_ar, _tK],
  [0, 64 | 0], 2
];
export var UntagResourceResponse$: StaticStructureSchema = [3, n0, _URRn,
  0,
  [],
  []
];
export var UpdateConnectionRequest$: StaticStructureSchema = [3, n0, _UCR,
  0,
  [_i, _d, _b, _cT],
  [0, 0, 0, [0, 4]], 1
];
export var UpdateConnectionResponse$: StaticStructureSchema = [3, n0, _UCRp,
  0,
  [_co],
  [[() => Connection$, 0]]
];
var AttachPointDescriptorList: StaticListSchema = [1, n0, _APDL,
  0, () => AttachPointDescriptor$
];
var BandwidthList = 64 | 0;
var ConnectionSummariesList: StaticListSchema = [1, n0, _CSL,
  0, () => ConnectionSummary$
];
var EnvironmentList: StaticListSchema = [1, n0, _EL,
  0, () => Environment$
];
var TagKeyList = 64 | 0;
var TagMap = 128 | 0;
export var AttachPoint$: StaticUnionSchema = [4, n0, _AP,
  0,
  [_dCG, _ar],
  [0, 0]
];
export var Provider$: StaticUnionSchema = [4, n0, _P,
  0,
  [_cSP, _lMP],
  [0, 0]
];
export var RemoteAccountIdentifier$: StaticUnionSchema = [4, n0, _RAI,
  0,
  [_i],
  [0]
];
export var AcceptConnectionProposal$: StaticOperationSchema = [9, n0, _ACP,
  2, () => AcceptConnectionProposalRequest$, () => AcceptConnectionProposalResponse$
];
export var CreateConnection$: StaticOperationSchema = [9, n0, _CC,
  2, () => CreateConnectionRequest$, () => CreateConnectionResponse$
];
export var DeleteConnection$: StaticOperationSchema = [9, n0, _DC,
  2, () => DeleteConnectionRequest$, () => DeleteConnectionResponse$
];
export var DescribeConnectionProposal$: StaticOperationSchema = [9, n0, _DCP,
  0, () => DescribeConnectionProposalRequest$, () => DescribeConnectionProposalResponse$
];
export var GetConnection$: StaticOperationSchema = [9, n0, _GC,
  0, () => GetConnectionRequest$, () => GetConnectionResponse$
];
export var GetEnvironment$: StaticOperationSchema = [9, n0, _GE,
  0, () => GetEnvironmentRequest$, () => GetEnvironmentResponse$
];
export var ListAttachPoints$: StaticOperationSchema = [9, n0, _LAP,
  0, () => ListAttachPointsRequest$, () => ListAttachPointsResponse$
];
export var ListConnections$: StaticOperationSchema = [9, n0, _LC,
  0, () => ListConnectionsRequest$, () => ListConnectionsResponse$
];
export var ListEnvironments$: StaticOperationSchema = [9, n0, _LE,
  0, () => ListEnvironmentsRequest$, () => ListEnvironmentsResponse$
];
export var ListTagsForResource$: StaticOperationSchema = [9, n0, _LTFR,
  0, () => ListTagsForResourceRequest$, () => ListTagsForResourceResponse$
];
export var TagResource$: StaticOperationSchema = [9, n0, _TR,
  0, () => TagResourceRequest$, () => TagResourceResponse$
];
export var UntagResource$: StaticOperationSchema = [9, n0, _UR,
  0, () => UntagResourceRequest$, () => UntagResourceResponse$
];
export var UpdateConnection$: StaticOperationSchema = [9, n0, _UC,
  2, () => UpdateConnectionRequest$, () => UpdateConnectionResponse$
];
