export const _ADE = "AccessDeniedException";
export const _AEC = "ActivateEmailContact";
export const _AECR = "ActivateEmailContactRequest";
export const _AECRc = "ActivateEmailContactResponse";
export const _CE = "ConflictException";
export const _CEC = "CreateEmailContact";
export const _CECR = "CreateEmailContactRequest";
export const _CECRr = "CreateEmailContactResponse";
export const _DEC = "DeleteEmailContact";
export const _DECR = "DeleteEmailContactRequest";
export const _DECRe = "DeleteEmailContactResponse";
export const _EC = "EmailContact";
export const _ECN = "EmailContactName";
export const _ECm = "EmailContacts";
export const _GEC = "GetEmailContact";
export const _GECR = "GetEmailContactRequest";
export const _GECRe = "GetEmailContactResponse";
export const _ISE = "InternalServerException";
export const _LEC = "ListEmailContacts";
export const _LECR = "ListEmailContactsRequest";
export const _LECRi = "ListEmailContactsResponse";
export const _LTFR = "ListTagsForResource";
export const _LTFRR = "ListTagsForResourceRequest";
export const _LTFRRi = "ListTagsForResourceResponse";
export const _RA = "Retry-After";
export const _RNFE = "ResourceNotFoundException";
export const _SAC = "SendActivationCode";
export const _SACR = "SendActivationCodeRequest";
export const _SACRe = "SendActivationCodeResponse";
export const _SECA = "SensitiveEmailContactAddress";
export const _SQEE = "ServiceQuotaExceededException";
export const _T = "Token";
export const _TE = "ThrottlingException";
export const _TR = "TagResource";
export const _TRR = "TagResourceRequest";
export const _TRRa = "TagResourceResponse";
export const _UR = "UntagResource";
export const _URR = "UntagResourceRequest";
export const _URRn = "UntagResourceResponse";
export const _VE = "ValidationException";
export const _VEF = "ValidationExceptionField";
export const _VEFL = "ValidationExceptionFieldList";
export const _a = "arn";
export const _ad = "address";
export const _c = "client";
export const _cT = "creationTime";
export const _co = "code";
export const _e = "error";
export const _eA = "emailAddress";
export const _eC = "emailContact";
export const _eCm = "emailContacts";
export const _fL = "fieldList";
export const _h = "http";
export const _hE = "httpError";
export const _hH = "httpHeader";
export const _hQ = "httpQuery";
export const _m = "message";
export const _mR = "maxResults";
export const _n = "name";
export const _nT = "nextToken";
export const _qC = "quotaCode";
export const _r = "reason";
export const _rAS = "retryAfterSeconds";
export const _rI = "resourceId";
export const _rT = "resourceType";
export const _s = "status";
export const _sC = "serviceCode";
export const _se = "server";
export const _t = "tags";
export const _tK = "tagKeys";
export const _uT = "updateTime";
export const n0 = "com.amazonaws.notificationscontacts";

// smithy-typescript generated code
import { error } from "@smithy/core/schema";

import { NotificationsContactsServiceException as __NotificationsContactsServiceException } from "../models/NotificationsContactsServiceException";

/* eslint no-var: 0 */

export var NotificationsContactsServiceException = error(
  "smithy.ts.sdk.synthetic.com.amazonaws.notificationscontacts",
  "NotificationsContactsServiceException",
  0,
  [],
  [],
  __NotificationsContactsServiceException
);
