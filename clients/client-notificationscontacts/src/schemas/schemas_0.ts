const _ADE = "AccessDeniedException";
const _AEC = "ActivateEmailContact";
const _AECR = "ActivateEmailContactRequest";
const _AECRc = "ActivateEmailContactResponse";
const _CE = "ConflictException";
const _CEC = "CreateEmailContact";
const _CECR = "CreateEmailContactRequest";
const _CECRr = "CreateEmailContactResponse";
const _DEC = "DeleteEmailContact";
const _DECR = "DeleteEmailContactRequest";
const _DECRe = "DeleteEmailContactResponse";
const _EC = "EmailContact";
const _ECN = "EmailContactName";
const _ECm = "EmailContacts";
const _GEC = "GetEmailContact";
const _GECR = "GetEmailContactRequest";
const _GECRe = "GetEmailContactResponse";
const _ISE = "InternalServerException";
const _LEC = "ListEmailContacts";
const _LECR = "ListEmailContactsRequest";
const _LECRi = "ListEmailContactsResponse";
const _LTFR = "ListTagsForResource";
const _LTFRR = "ListTagsForResourceRequest";
const _LTFRRi = "ListTagsForResourceResponse";
const _RA = "Retry-After";
const _RNFE = "ResourceNotFoundException";
const _SAC = "SendActivationCode";
const _SACR = "SendActivationCodeRequest";
const _SACRe = "SendActivationCodeResponse";
const _SECA = "SensitiveEmailContactAddress";
const _SQEE = "ServiceQuotaExceededException";
const _T = "Token";
const _TE = "ThrottlingException";
const _TR = "TagResource";
const _TRR = "TagResourceRequest";
const _TRRa = "TagResourceResponse";
const _UR = "UntagResource";
const _URR = "UntagResourceRequest";
const _URRn = "UntagResourceResponse";
const _VE = "ValidationException";
const _VEF = "ValidationExceptionField";
const _VEFL = "ValidationExceptionFieldList";
const _a = "arn";
const _ad = "address";
const _c = "client";
const _cT = "creationTime";
const _co = "code";
const _e = "error";
const _eA = "emailAddress";
const _eC = "emailContact";
const _eCm = "emailContacts";
const _fL = "fieldList";
const _h = "http";
const _hE = "httpError";
const _hH = "httpHeader";
const _hQ = "httpQuery";
const _m = "message";
const _mR = "maxResults";
const _n = "name";
const _nT = "nextToken";
const _qC = "quotaCode";
const _r = "reason";
const _rAS = "retryAfterSeconds";
const _rI = "resourceId";
const _rT = "resourceType";
const _s = "status";
const _sC = "serviceCode";
const _se = "server";
const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.notificationscontacts";
const _t = "tags";
const _tK = "tagKeys";
const _uT = "updateTime";
const n0 = "com.amazonaws.notificationscontacts";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import type {
  StaticErrorSchema,
  StaticListSchema,
  StaticMapSchema,
  StaticOperationSchema,
  StaticSimpleSchema,
  StaticStructureSchema,
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
import { NotificationsContactsServiceException } from "../models/NotificationsContactsServiceException";

/* eslint no-var: 0 */
var EmailContactName: StaticSimpleSchema = [0, n0, _ECN, 8, 0];
var SensitiveEmailContactAddress: StaticSimpleSchema = [0, n0, _SECA, 8, 0];
var Token: StaticSimpleSchema = [0, n0, _T, 8, 0];
export var AccessDeniedException$: StaticErrorSchema = [-3, n0, _ADE, { [_e]: _c, [_hE]: 403 }, [_m], [0]];
TypeRegistry.for(n0).registerError(AccessDeniedException$, AccessDeniedException);
export var ActivateEmailContactRequest$: StaticStructureSchema = [
  3,
  n0,
  _AECR,
  0,
  [_a, _co],
  [
    [0, 1],
    [() => Token, 1],
  ],
];
export var ActivateEmailContactResponse$: StaticStructureSchema = [3, n0, _AECRc, 0, [], []];
export var ConflictException$: StaticErrorSchema = [-3, n0, _CE, { [_e]: _c, [_hE]: 409 }, [_m, _rI, _rT], [0, 0, 0]];
TypeRegistry.for(n0).registerError(ConflictException$, ConflictException);
export var CreateEmailContactRequest$: StaticStructureSchema = [
  3,
  n0,
  _CECR,
  0,
  [_n, _eA, _t],
  [[() => EmailContactName, 0], 0, 128 | 0],
];
export var CreateEmailContactResponse$: StaticStructureSchema = [3, n0, _CECRr, 0, [_a], [0]];
export var DeleteEmailContactRequest$: StaticStructureSchema = [3, n0, _DECR, 0, [_a], [[0, 1]]];
export var DeleteEmailContactResponse$: StaticStructureSchema = [3, n0, _DECRe, 0, [], []];
export var EmailContact$: StaticStructureSchema = [
  3,
  n0,
  _EC,
  0,
  [_a, _n, _ad, _s, _cT, _uT],
  [0, [() => EmailContactName, 0], [() => SensitiveEmailContactAddress, 0], 0, 5, 5],
];
export var GetEmailContactRequest$: StaticStructureSchema = [3, n0, _GECR, 0, [_a], [[0, 1]]];
export var GetEmailContactResponse$: StaticStructureSchema = [3, n0, _GECRe, 0, [_eC], [[() => EmailContact$, 0]]];
export var InternalServerException$: StaticErrorSchema = [-3, n0, _ISE, { [_e]: _se, [_hE]: 500 }, [_m], [0]];
TypeRegistry.for(n0).registerError(InternalServerException$, InternalServerException);
export var ListEmailContactsRequest$: StaticStructureSchema = [
  3,
  n0,
  _LECR,
  0,
  [_mR, _nT],
  [
    [1, { [_hQ]: _mR }],
    [0, { [_hQ]: _nT }],
  ],
];
export var ListEmailContactsResponse$: StaticStructureSchema = [
  3,
  n0,
  _LECRi,
  0,
  [_nT, _eCm],
  [0, [() => EmailContacts, 0]],
];
export var ListTagsForResourceRequest$: StaticStructureSchema = [3, n0, _LTFRR, 0, [_a], [[0, 1]]];
export var ListTagsForResourceResponse$: StaticStructureSchema = [3, n0, _LTFRRi, 0, [_t], [128 | 0]];
export var ResourceNotFoundException$: StaticErrorSchema = [
  -3,
  n0,
  _RNFE,
  { [_e]: _c, [_hE]: 404 },
  [_m, _rI, _rT],
  [0, 0, 0],
];
TypeRegistry.for(n0).registerError(ResourceNotFoundException$, ResourceNotFoundException);
export var SendActivationCodeRequest$: StaticStructureSchema = [3, n0, _SACR, 0, [_a], [[0, 1]]];
export var SendActivationCodeResponse$: StaticStructureSchema = [3, n0, _SACRe, 0, [], []];
export var ServiceQuotaExceededException$: StaticErrorSchema = [
  -3,
  n0,
  _SQEE,
  { [_e]: _c, [_hE]: 402 },
  [_m, _rI, _rT, _sC, _qC],
  [0, 0, 0, 0, 0],
];
TypeRegistry.for(n0).registerError(ServiceQuotaExceededException$, ServiceQuotaExceededException);
export var TagResourceRequest$: StaticStructureSchema = [3, n0, _TRR, 0, [_a, _t], [[0, 1], 128 | 0]];
export var TagResourceResponse$: StaticStructureSchema = [3, n0, _TRRa, 0, [], []];
export var ThrottlingException$: StaticErrorSchema = [
  -3,
  n0,
  _TE,
  { [_e]: _c, [_hE]: 429 },
  [_m, _sC, _qC, _rAS],
  [0, 0, 0, [1, { [_hH]: _RA }]],
];
TypeRegistry.for(n0).registerError(ThrottlingException$, ThrottlingException);
export var UntagResourceRequest$: StaticStructureSchema = [
  3,
  n0,
  _URR,
  0,
  [_a, _tK],
  [
    [0, 1],
    [64 | 0, { [_hQ]: _tK }],
  ],
];
export var UntagResourceResponse$: StaticStructureSchema = [3, n0, _URRn, 0, [], []];
export var ValidationException$: StaticErrorSchema = [
  -3,
  n0,
  _VE,
  { [_e]: _c, [_hE]: 400 },
  [_m, _r, _fL],
  [0, 0, () => ValidationExceptionFieldList],
];
TypeRegistry.for(n0).registerError(ValidationException$, ValidationException);
export var ValidationExceptionField$: StaticStructureSchema = [3, n0, _VEF, 0, [_n, _m], [0, 0]];
export var NotificationsContactsServiceException$: StaticErrorSchema = [
  -3,
  _sm,
  "NotificationsContactsServiceException",
  0,
  [],
  [],
];
TypeRegistry.for(_sm).registerError(NotificationsContactsServiceException$, NotificationsContactsServiceException);
var EmailContacts: StaticListSchema = [1, n0, _ECm, 0, [() => EmailContact$, 0]];
var TagKeys = 64 | 0;
var ValidationExceptionFieldList: StaticListSchema = [1, n0, _VEFL, 0, () => ValidationExceptionField$];
var TagMap = 128 | 0;
export var ActivateEmailContact$: StaticOperationSchema = [
  9,
  n0,
  _AEC,
  { [_h]: ["PUT", "/emailcontacts/{arn}/activate/{code}", 200] },
  () => ActivateEmailContactRequest$,
  () => ActivateEmailContactResponse$,
];
export var CreateEmailContact$: StaticOperationSchema = [
  9,
  n0,
  _CEC,
  { [_h]: ["POST", "/2022-09-19/emailcontacts", 201] },
  () => CreateEmailContactRequest$,
  () => CreateEmailContactResponse$,
];
export var DeleteEmailContact$: StaticOperationSchema = [
  9,
  n0,
  _DEC,
  { [_h]: ["DELETE", "/emailcontacts/{arn}", 200] },
  () => DeleteEmailContactRequest$,
  () => DeleteEmailContactResponse$,
];
export var GetEmailContact$: StaticOperationSchema = [
  9,
  n0,
  _GEC,
  { [_h]: ["GET", "/emailcontacts/{arn}", 200] },
  () => GetEmailContactRequest$,
  () => GetEmailContactResponse$,
];
export var ListEmailContacts$: StaticOperationSchema = [
  9,
  n0,
  _LEC,
  { [_h]: ["GET", "/emailcontacts", 200] },
  () => ListEmailContactsRequest$,
  () => ListEmailContactsResponse$,
];
export var ListTagsForResource$: StaticOperationSchema = [
  9,
  n0,
  _LTFR,
  { [_h]: ["GET", "/tags/{arn}", 200] },
  () => ListTagsForResourceRequest$,
  () => ListTagsForResourceResponse$,
];
export var SendActivationCode$: StaticOperationSchema = [
  9,
  n0,
  _SAC,
  { [_h]: ["POST", "/2022-10-31/emailcontacts/{arn}/activate/send", 200] },
  () => SendActivationCodeRequest$,
  () => SendActivationCodeResponse$,
];
export var TagResource$: StaticOperationSchema = [
  9,
  n0,
  _TR,
  { [_h]: ["POST", "/tags/{arn}", 200] },
  () => TagResourceRequest$,
  () => TagResourceResponse$,
];
export var UntagResource$: StaticOperationSchema = [
  9,
  n0,
  _UR,
  { [_h]: ["DELETE", "/tags/{arn}", 200] },
  () => UntagResourceRequest$,
  () => UntagResourceResponse$,
];
