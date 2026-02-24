const _ADE = "AccessDeniedException";
const _AF = "AssociateFeed";
const _AFR = "AssociateFeedRequest";
const _AFRs = "AssociateFeedResponse";
const _CC = "ClippingConfig";
const _CCr = "CroppingConfig";
const _CE = "ConflictException";
const _CF = "CreateFeed";
const _CFR = "CreateFeedRequest";
const _CFRr = "CreateFeedResponse";
const _CO = "CreateOutput";
const _COL = "CreateOutputList";
const _DF = "DeleteFeed";
const _DFR = "DeleteFeedRequest";
const _DFRe = "DeleteFeedResponse";
const _DFRi = "DisassociateFeedRequest";
const _DFRis = "DisassociateFeedResponse";
const _DFi = "DisassociateFeed";
const _FA = "FeedAssociation";
const _FS = "FeedSummary";
const _FSL = "FeedSummaryList";
const _GF = "GetFeed";
const _GFR = "GetFeedRequest";
const _GFRe = "GetFeedResponse";
const _GO = "GetOutput";
const _GOL = "GetOutputList";
const _ISEE = "InternalServerErrorException";
const _LF = "ListFeeds";
const _LFR = "ListFeedsRequest";
const _LFRi = "ListFeedsResponse";
const _LTFR = "ListTagsForResource";
const _LTFRR = "ListTagsForResourceRequest";
const _LTFRRi = "ListTagsForResourceResponse";
const _OC = "OutputConfig";
const _RNFE = "ResourceNotFoundException";
const _SQEE = "ServiceQuotaExceededException";
const _TMRE = "TooManyRequestException";
const _TR = "TagResource";
const _TRR = "TagResourceRequest";
const _UF = "UpdateFeed";
const _UFR = "UpdateFeedRequest";
const _UFRp = "UpdateFeedResponse";
const _UO = "UpdateOutput";
const _UOL = "UpdateOutputList";
const _UR = "UntagResource";
const _URR = "UntagResourceRequest";
const _VE = "ValidationException";
const _a = "arn";
const _aRN = "associatedResourceName";
const _as = "association";
const _c = "client";
const _cM = "callbackMetadata";
const _cl = "clipping";
const _cr = "cropping";
const _d = "description";
const _dE = "dataEndpoints";
const _dR = "dryRun";
const _e = "error";
const _f = "feeds";
const _fA = "fromAssociation";
const _h = "http";
const _hE = "httpError";
const _hQ = "httpQuery";
const _i = "id";
const _m = "message";
const _mR = "maxResults";
const _n = "name";
const _nT = "nextToken";
const _o = "outputs";
const _oC = "outputConfig";
const _rA = "resourceArn";
const _s = "smithy.ts.sdk.synthetic.com.amazonaws.elementalinference";
const _se = "server";
const _st = "status";
const _t = "tags";
const _tK = "tagKeys";
const n0 = "com.amazonaws.elementalinference";

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

import { ElementalInferenceServiceException } from "../models/ElementalInferenceServiceException";
import {
  AccessDeniedException,
  ConflictException,
  InternalServerErrorException,
  ResourceNotFoundException,
  ServiceQuotaExceededException,
  TooManyRequestException,
  ValidationException,
} from "../models/errors";

/* eslint no-var: 0 */
const _s_registry = TypeRegistry.for(_s);
export var ElementalInferenceServiceException$: StaticErrorSchema = [-3, _s, "ElementalInferenceServiceException", 0, [], []];
_s_registry.registerError(ElementalInferenceServiceException$, ElementalInferenceServiceException);
const n0_registry = TypeRegistry.for(n0);
export var AccessDeniedException$: StaticErrorSchema = [-3, n0, _ADE,
  { [_e]: _c, [_hE]: 403 },
  [_m],
  [0], 1
];
n0_registry.registerError(AccessDeniedException$, AccessDeniedException);
export var ConflictException$: StaticErrorSchema = [-3, n0, _CE,
  { [_e]: _c, [_hE]: 409 },
  [_m],
  [0], 1
];
n0_registry.registerError(ConflictException$, ConflictException);
export var InternalServerErrorException$: StaticErrorSchema = [-3, n0, _ISEE,
  { [_e]: _se, [_hE]: 500 },
  [_m],
  [0], 1
];
n0_registry.registerError(InternalServerErrorException$, InternalServerErrorException);
export var ResourceNotFoundException$: StaticErrorSchema = [-3, n0, _RNFE,
  { [_e]: _c, [_hE]: 404 },
  [_m],
  [0], 1
];
n0_registry.registerError(ResourceNotFoundException$, ResourceNotFoundException);
export var ServiceQuotaExceededException$: StaticErrorSchema = [-3, n0, _SQEE,
  { [_e]: _c, [_hE]: 402 },
  [_m],
  [0], 1
];
n0_registry.registerError(ServiceQuotaExceededException$, ServiceQuotaExceededException);
export var TooManyRequestException$: StaticErrorSchema = [-3, n0, _TMRE,
  { [_e]: _c, [_hE]: 429 },
  [_m],
  [0], 1
];
n0_registry.registerError(TooManyRequestException$, TooManyRequestException);
export var ValidationException$: StaticErrorSchema = [-3, n0, _VE,
  { [_e]: _c, [_hE]: 400 },
  [_m],
  [0], 1
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
export var AssociateFeedRequest$: StaticStructureSchema = [3, n0, _AFR,
  0,
  [_i, _o, _aRN, _dR],
  [[0, 1], () => CreateOutputList, [0, 4], 2], 2
];
export var AssociateFeedResponse$: StaticStructureSchema = [3, n0, _AFRs,
  0,
  [_a, _i],
  [0, 0], 2
];
export var ClippingConfig$: StaticStructureSchema = [3, n0, _CC,
  0,
  [_cM],
  [0]
];
export var CreateFeedRequest$: StaticStructureSchema = [3, n0, _CFR,
  0,
  [_n, _o, _t],
  [0, () => CreateOutputList, 128 | 0], 2
];
export var CreateFeedResponse$: StaticStructureSchema = [3, n0, _CFRr,
  0,
  [_a, _n, _i, _dE, _o, _st, _as, _t],
  [0, 0, 0, 64 | 0, () => GetOutputList, 0, () => FeedAssociation$, 128 | 0], 6
];
export var CreateOutput$: StaticStructureSchema = [3, n0, _CO,
  0,
  [_n, _oC, _st, _d],
  [0, () => OutputConfig$, 0, 0], 3
];
export var CroppingConfig$: StaticStructureSchema = [3, n0, _CCr,
  0,
  [],
  []
];
export var DeleteFeedRequest$: StaticStructureSchema = [3, n0, _DFR,
  0,
  [_i],
  [[0, 1]], 1
];
export var DeleteFeedResponse$: StaticStructureSchema = [3, n0, _DFRe,
  0,
  [_a, _i, _st],
  [0, 0, 0], 3
];
export var DisassociateFeedRequest$: StaticStructureSchema = [3, n0, _DFRi,
  0,
  [_i, _aRN, _dR],
  [[0, 1], [0, 4], 2], 1
];
export var DisassociateFeedResponse$: StaticStructureSchema = [3, n0, _DFRis,
  0,
  [_a, _i],
  [0, 0], 2
];
export var FeedAssociation$: StaticStructureSchema = [3, n0, _FA,
  0,
  [_aRN],
  [0], 1
];
export var FeedSummary$: StaticStructureSchema = [3, n0, _FS,
  0,
  [_a, _i, _n, _st, _as],
  [0, 0, 0, 0, () => FeedAssociation$], 4
];
export var GetFeedRequest$: StaticStructureSchema = [3, n0, _GFR,
  0,
  [_i],
  [[0, 1]], 1
];
export var GetFeedResponse$: StaticStructureSchema = [3, n0, _GFRe,
  0,
  [_a, _n, _i, _dE, _o, _st, _as, _t],
  [0, 0, 0, 64 | 0, () => GetOutputList, 0, () => FeedAssociation$, 128 | 0], 6
];
export var GetOutput$: StaticStructureSchema = [3, n0, _GO,
  0,
  [_n, _oC, _st, _d, _fA],
  [0, () => OutputConfig$, 0, 0, 2], 3
];
export var ListFeedsRequest$: StaticStructureSchema = [3, n0, _LFR,
  0,
  [_mR, _nT],
  [[1, { [_hQ]: _mR }], [0, { [_hQ]: _nT }]]
];
export var ListFeedsResponse$: StaticStructureSchema = [3, n0, _LFRi,
  0,
  [_f, _nT],
  [() => FeedSummaryList, 0], 1
];
export var ListTagsForResourceRequest$: StaticStructureSchema = [3, n0, _LTFRR,
  0,
  [_rA],
  [[0, 1]], 1
];
export var ListTagsForResourceResponse$: StaticStructureSchema = [3, n0, _LTFRRi,
  0,
  [_t],
  [128 | 0]
];
export var TagResourceRequest$: StaticStructureSchema = [3, n0, _TRR,
  0,
  [_rA, _t],
  [[0, 1], 128 | 0], 2
];
export var UntagResourceRequest$: StaticStructureSchema = [3, n0, _URR,
  0,
  [_rA, _tK],
  [[0, 1], [64 | 0, { [_hQ]: _tK }]], 2
];
export var UpdateFeedRequest$: StaticStructureSchema = [3, n0, _UFR,
  0,
  [_n, _i, _o],
  [0, [0, 1], () => UpdateOutputList], 3
];
export var UpdateFeedResponse$: StaticStructureSchema = [3, n0, _UFRp,
  0,
  [_a, _n, _i, _dE, _o, _st, _as, _t],
  [0, 0, 0, 64 | 0, () => GetOutputList, 0, () => FeedAssociation$, 128 | 0], 6
];
export var UpdateOutput$: StaticStructureSchema = [3, n0, _UO,
  0,
  [_n, _oC, _st, _d, _fA],
  [0, () => OutputConfig$, 0, 0, 2], 3
];
var __Unit = "unit" as const;
var CreateOutputList: StaticListSchema = [1, n0, _COL,
  0, () => CreateOutput$
];
var FeedSummaryList: StaticListSchema = [1, n0, _FSL,
  0, () => FeedSummary$
];
var GetOutputList: StaticListSchema = [1, n0, _GOL,
  0, () => GetOutput$
];
var StringList = 64 | 0;
var TagKeyList = 64 | 0;
var UpdateOutputList: StaticListSchema = [1, n0, _UOL,
  0, () => UpdateOutput$
];
var TagMap = 128 | 0;
export var OutputConfig$: StaticUnionSchema = [4, n0, _OC,
  0,
  [_cr, _cl],
  [() => CroppingConfig$, () => ClippingConfig$]
];
export var AssociateFeed$: StaticOperationSchema = [9, n0, _AF,
  { [_h]: ["POST", "/v1/feed/{id}/associate", 200] }, () => AssociateFeedRequest$, () => AssociateFeedResponse$
];
export var CreateFeed$: StaticOperationSchema = [9, n0, _CF,
  { [_h]: ["POST", "/v1/feed", 202] }, () => CreateFeedRequest$, () => CreateFeedResponse$
];
export var DeleteFeed$: StaticOperationSchema = [9, n0, _DF,
  { [_h]: ["DELETE", "/v1/feed/{id}", 202] }, () => DeleteFeedRequest$, () => DeleteFeedResponse$
];
export var DisassociateFeed$: StaticOperationSchema = [9, n0, _DFi,
  { [_h]: ["POST", "/v1/feed/{id}/disassociate", 200] }, () => DisassociateFeedRequest$, () => DisassociateFeedResponse$
];
export var GetFeed$: StaticOperationSchema = [9, n0, _GF,
  { [_h]: ["GET", "/v1/feed/{id}", 200] }, () => GetFeedRequest$, () => GetFeedResponse$
];
export var ListFeeds$: StaticOperationSchema = [9, n0, _LF,
  { [_h]: ["GET", "/v1/feeds", 200] }, () => ListFeedsRequest$, () => ListFeedsResponse$
];
export var ListTagsForResource$: StaticOperationSchema = [9, n0, _LTFR,
  { [_h]: ["GET", "/v1/tags/{resourceArn}", 200] }, () => ListTagsForResourceRequest$, () => ListTagsForResourceResponse$
];
export var TagResource$: StaticOperationSchema = [9, n0, _TR,
  { [_h]: ["POST", "/v1/tags/{resourceArn}", 204] }, () => TagResourceRequest$, () => __Unit
];
export var UntagResource$: StaticOperationSchema = [9, n0, _UR,
  { [_h]: ["DELETE", "/v1/tags/{resourceArn}", 204] }, () => UntagResourceRequest$, () => __Unit
];
export var UpdateFeed$: StaticOperationSchema = [9, n0, _UF,
  { [_h]: ["PUT", "/v1/feed/{id}", 200] }, () => UpdateFeedRequest$, () => UpdateFeedResponse$
];
