const _ADE = "AccessDeniedException";
const _AS = "ActionSummary";
const _ASc = "ActionSummaries";
const _ASct = "ActionSet";
const _C = "Conditions";
const _CE = "ConflictException";
const _CSP = "CreateSupportPermit";
const _CSPI = "CreateSupportPermitInput";
const _CSPO = "CreateSupportPermitOutput";
const _Co = "Condition";
const _DSP = "DeleteSupportPermit";
const _DSPI = "DeleteSupportPermitInput";
const _DSPO = "DeleteSupportPermitOutput";
const _GA = "GetAction";
const _GAI = "GetActionInput";
const _GAO = "GetActionOutput";
const _GSP = "GetSupportPermit";
const _GSPI = "GetSupportPermitInput";
const _GSPO = "GetSupportPermitOutput";
const _ISE = "InternalServerException";
const _LA = "ListActions";
const _LAI = "ListActionsInput";
const _LAO = "ListActionsOutput";
const _LSP = "ListSupportPermits";
const _LSPI = "ListSupportPermitsInput";
const _LSPO = "ListSupportPermitsOutput";
const _LSPR = "ListSupportPermitRequests";
const _LSPRI = "ListSupportPermitRequestsInput";
const _LSPRO = "ListSupportPermitRequestsOutput";
const _LTFR = "ListTagsForResource";
const _LTFRI = "ListTagsForResourceInput";
const _LTFRO = "ListTagsForResourceOutput";
const _P = "Permit";
const _RA = "Retry-After";
const _RNFE = "ResourceNotFoundException";
const _RS = "ResourceSet";
const _RSPR = "RejectSupportPermitRequest";
const _RSPRI = "RejectSupportPermitRequestInput";
const _RSPRO = "RejectSupportPermitRequestOutput";
const _SKI = "SigningKeyInfo";
const _SPR = "SupportPermitRequest";
const _SPRu = "SupportPermitRequests";
const _SPS = "SupportPermitSummary";
const _SPSu = "SupportPermitSummaries";
const _SQEE = "ServiceQuotaExceededException";
const _TE = "ThrottlingException";
const _TR = "TagResource";
const _TRI = "TagResourceInput";
const _TRO = "TagResourceOutput";
const _UR = "UntagResource";
const _URI = "UntagResourceInput";
const _URO = "UntagResourceOutput";
const _VE = "ValidationException";
const _VEF = "ValidationExceptionField";
const _VEFL = "ValidationExceptionFieldList";
const _a = "action";
const _aA = "allActions";
const _aAl = "allowAfter";
const _aB = "allowBefore";
const _aRIR = "allResourcesInRegion";
const _aS = "actionSummaries";
const _ac = "actions";
const _ar = "arn";
const _c = "client";
const _cA = "createdAt";
const _cT = "clientToken";
const _co = "conditions";
const _d = "description";
const _e = "error";
const _fL = "fieldList";
const _h = "http";
const _hE = "httpError";
const _hH = "httpHeader";
const _hQ = "httpQuery";
const _kK = "kmsKey";
const _m = "message";
const _mR = "maxResults";
const _n = "name";
const _nT = "nextToken";
const _p = "permit";
const _pa = "path";
const _qC = "quotaCode";
const _r = "resources";
const _rA = "resourceArn";
const _rAS = "retryAfterSeconds";
const _rAe = "requestArn";
const _rI = "resourceId";
const _rT = "resourceType";
const _s = "smithy.ts.sdk.synthetic.com.amazonaws.supportauthz";
const _sC = "serviceCode";
const _sCDI = "supportCaseDisplayId";
const _sKI = "signingKeyInfo";
const _sP = "supportPermits";
const _sPI = "supportPermitIdentifier";
const _sPR = "supportPermitRequests";
const _sPS = "supportPermitStatuses";
const _se = "server";
const _ser = "service";
const _st = "status";
const _t = "tags";
const _tK = "tagKeys";
const _uA = "updatedAt";
const n0 = "com.amazonaws.supportauthz";

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

import {
  AccessDeniedException,
  ConflictException,
  InternalServerException,
  ResourceNotFoundException,
  ServiceQuotaExceededException,
  ThrottlingException,
  ValidationException,
} from "../models/errors";
import { SupportAuthZServiceException } from "../models/SupportAuthZServiceException";

/* eslint no-var: 0 */
const _s_registry = TypeRegistry.for(_s);
export var SupportAuthZServiceException$: StaticErrorSchema = [-3, _s, "SupportAuthZServiceException", 0, [], []];
_s_registry.registerError(SupportAuthZServiceException$, SupportAuthZServiceException);
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
  [0, 0, 0], 3
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
  [_m, _rAS],
  [0, [1, { [_hH]: _RA }]], 1
];
n0_registry.registerError(ThrottlingException$, ThrottlingException);
export var ValidationException$: StaticErrorSchema = [-3, n0, _VE,
  { [_e]: _c },
  [_m, _fL],
  [0, () => ValidationExceptionFieldList], 1
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
export var ActionSummary$: StaticStructureSchema = [3, n0, _AS,
  0,
  [_a, _ser, _d],
  [0, 0, 0], 3
];
export var CreateSupportPermitInput$: StaticStructureSchema = [3, n0, _CSPI,
  0,
  [_p, _n, _sKI, _d, _sCDI, _cT, _t],
  [() => Permit$, 0, () => SigningKeyInfo$, 0, 0, [0, 4], 128 | 0], 3
];
export var CreateSupportPermitOutput$: StaticStructureSchema = [3, n0, _CSPO,
  0,
  [_n, _ar, _p, _st, _sKI, _cA, _d, _sCDI, _t],
  [0, 0, () => Permit$, 0, () => SigningKeyInfo$, 4, 0, 0, 128 | 0], 6
];
export var DeleteSupportPermitInput$: StaticStructureSchema = [3, n0, _DSPI,
  0,
  [_sPI],
  [[0, 1]], 1
];
export var DeleteSupportPermitOutput$: StaticStructureSchema = [3, n0, _DSPO,
  0,
  [_n, _ar, _p, _st, _sKI, _cA, _d, _sCDI],
  [0, 0, () => Permit$, 0, () => SigningKeyInfo$, 4, 0, 0], 6
];
export var GetActionInput$: StaticStructureSchema = [3, n0, _GAI,
  0,
  [_a],
  [[0, 1]], 1
];
export var GetActionOutput$: StaticStructureSchema = [3, n0, _GAO,
  0,
  [_a, _ser, _d],
  [0, 0, 0], 3
];
export var GetSupportPermitInput$: StaticStructureSchema = [3, n0, _GSPI,
  0,
  [_sPI],
  [[0, 1]], 1
];
export var GetSupportPermitOutput$: StaticStructureSchema = [3, n0, _GSPO,
  0,
  [_n, _ar, _p, _st, _sKI, _cA, _d, _sCDI, _t],
  [0, 0, () => Permit$, 0, () => SigningKeyInfo$, 4, 0, 0, 128 | 0], 6
];
export var ListActionsInput$: StaticStructureSchema = [3, n0, _LAI,
  0,
  [_ser, _nT, _mR],
  [[0, { [_hQ]: _ser }], [0, { [_hQ]: _nT }], [1, { [_hQ]: _mR }]], 1
];
export var ListActionsOutput$: StaticStructureSchema = [3, n0, _LAO,
  0,
  [_aS, _nT],
  [() => ActionSummaries, 0], 1
];
export var ListSupportPermitRequestsInput$: StaticStructureSchema = [3, n0, _LSPRI,
  0,
  [_nT, _mR, _sCDI],
  [[0, { [_hQ]: _nT }], [1, { [_hQ]: _mR }], [0, { [_hQ]: _sCDI }]]
];
export var ListSupportPermitRequestsOutput$: StaticStructureSchema = [3, n0, _LSPRO,
  0,
  [_sPR, _nT],
  [() => SupportPermitRequests, 0], 1
];
export var ListSupportPermitsInput$: StaticStructureSchema = [3, n0, _LSPI,
  0,
  [_nT, _mR, _sPS],
  [[0, { [_hQ]: _nT }], [1, { [_hQ]: _mR }], [64 | 0, { [_hQ]: _sPS }]]
];
export var ListSupportPermitsOutput$: StaticStructureSchema = [3, n0, _LSPO,
  0,
  [_sP, _nT],
  [() => SupportPermitSummaries, 0], 1
];
export var ListTagsForResourceInput$: StaticStructureSchema = [3, n0, _LTFRI,
  0,
  [_rA],
  [[0, 1]], 1
];
export var ListTagsForResourceOutput$: StaticStructureSchema = [3, n0, _LTFRO,
  0,
  [_t],
  [128 | 0]
];
export var Permit$: StaticStructureSchema = [3, n0, _P,
  0,
  [_ac, _r, _co],
  [() => ActionSet$, () => ResourceSet$, () => Conditions], 2
];
export var RejectSupportPermitRequestInput$: StaticStructureSchema = [3, n0, _RSPRI,
  0,
  [_rAe],
  [[0, 1]], 1
];
export var RejectSupportPermitRequestOutput$: StaticStructureSchema = [3, n0, _RSPRO,
  0,
  [_rAe],
  [0], 1
];
export var SupportPermitRequest$: StaticStructureSchema = [3, n0, _SPR,
  0,
  [_rAe, _p, _sCDI, _st, _cA, _uA],
  [0, () => Permit$, 0, 0, 4, 4], 6
];
export var SupportPermitSummary$: StaticStructureSchema = [3, n0, _SPS,
  0,
  [_n, _ar, _p, _st, _sKI, _cA, _sCDI],
  [0, 0, () => Permit$, 0, () => SigningKeyInfo$, 4, 0], 6
];
export var TagResourceInput$: StaticStructureSchema = [3, n0, _TRI,
  0,
  [_rA, _t],
  [[0, 1], 128 | 0], 2
];
export var TagResourceOutput$: StaticStructureSchema = [3, n0, _TRO,
  0,
  [],
  []
];
export var UntagResourceInput$: StaticStructureSchema = [3, n0, _URI,
  0,
  [_rA, _tK],
  [[0, 1], [64 | 0, { [_hQ]: _tK }]], 2
];
export var UntagResourceOutput$: StaticStructureSchema = [3, n0, _URO,
  0,
  [],
  []
];
export var ValidationExceptionField$: StaticStructureSchema = [3, n0, _VEF,
  0,
  [_pa, _m],
  [0, 0], 2
];
var __Unit = "unit" as const;
var Actions = 64 | 0;
var ActionSummaries: StaticListSchema = [1, n0, _ASc,
  0, () => ActionSummary$
];
var Conditions: StaticListSchema = [1, n0, _C,
  0, () => Condition$
];
var Resources = 64 | 0;
var SupportPermitRequests: StaticListSchema = [1, n0, _SPRu,
  0, () => SupportPermitRequest$
];
var SupportPermitStatuses = 64 | 0;
var SupportPermitSummaries: StaticListSchema = [1, n0, _SPSu,
  0, () => SupportPermitSummary$
];
var TagKeyList = 64 | 0;
var ValidationExceptionFieldList: StaticListSchema = [1, n0, _VEFL,
  0, () => ValidationExceptionField$
];
var Tags = 128 | 0;
export var ActionSet$: StaticUnionSchema = [4, n0, _ASct,
  0,
  [_aA, _ac],
  [() => __Unit, 64 | 0]
];
export var Condition$: StaticUnionSchema = [4, n0, _Co,
  0,
  [_aAl, _aB],
  [4, 4]
];
export var ResourceSet$: StaticUnionSchema = [4, n0, _RS,
  0,
  [_aRIR, _r],
  [() => __Unit, 64 | 0]
];
export var SigningKeyInfo$: StaticUnionSchema = [4, n0, _SKI,
  0,
  [_kK],
  [0]
];
export var CreateSupportPermit$: StaticOperationSchema = [9, n0, _CSP,
  { [_h]: ["POST", "/support-permits", 200] }, () => CreateSupportPermitInput$, () => CreateSupportPermitOutput$
];
export var DeleteSupportPermit$: StaticOperationSchema = [9, n0, _DSP,
  { [_h]: ["DELETE", "/support-permits/{supportPermitIdentifier}", 200] }, () => DeleteSupportPermitInput$, () => DeleteSupportPermitOutput$
];
export var GetAction$: StaticOperationSchema = [9, n0, _GA,
  { [_h]: ["GET", "/actions/{action}", 200] }, () => GetActionInput$, () => GetActionOutput$
];
export var GetSupportPermit$: StaticOperationSchema = [9, n0, _GSP,
  { [_h]: ["GET", "/support-permits/{supportPermitIdentifier}", 200] }, () => GetSupportPermitInput$, () => GetSupportPermitOutput$
];
export var ListActions$: StaticOperationSchema = [9, n0, _LA,
  { [_h]: ["GET", "/actions", 200] }, () => ListActionsInput$, () => ListActionsOutput$
];
export var ListSupportPermitRequests$: StaticOperationSchema = [9, n0, _LSPR,
  { [_h]: ["GET", "/support-permit-requests", 200] }, () => ListSupportPermitRequestsInput$, () => ListSupportPermitRequestsOutput$
];
export var ListSupportPermits$: StaticOperationSchema = [9, n0, _LSP,
  { [_h]: ["GET", "/support-permits", 200] }, () => ListSupportPermitsInput$, () => ListSupportPermitsOutput$
];
export var ListTagsForResource$: StaticOperationSchema = [9, n0, _LTFR,
  { [_h]: ["GET", "/tags/{resourceArn}", 200] }, () => ListTagsForResourceInput$, () => ListTagsForResourceOutput$
];
export var RejectSupportPermitRequest$: StaticOperationSchema = [9, n0, _RSPR,
  { [_h]: ["PUT", "/support-permit-requests/{requestArn}/reject", 200] }, () => RejectSupportPermitRequestInput$, () => RejectSupportPermitRequestOutput$
];
export var TagResource$: StaticOperationSchema = [9, n0, _TR,
  { [_h]: ["POST", "/tags/{resourceArn}", 204] }, () => TagResourceInput$, () => TagResourceOutput$
];
export var UntagResource$: StaticOperationSchema = [9, n0, _UR,
  { [_h]: ["DELETE", "/tags/{resourceArn}", 204] }, () => UntagResourceInput$, () => UntagResourceOutput$
];
