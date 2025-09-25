// smithy-typescript generated code
import { error, list, op, sim, struct } from "@smithy/core/schema";

import {
  AccessDeniedException as __AccessDeniedException,
  ConflictException as __ConflictException,
  InternalServerException as __InternalServerException,
  ResourceNotFoundException as __ResourceNotFoundException,
  ServiceQuotaExceededException as __ServiceQuotaExceededException,
  ThrottlingException as __ThrottlingException,
  ValidationException as __ValidationException,
} from "../models/index";
import {
  _a,
  _ad,
  _ADE,
  _AEC,
  _AECR,
  _AECRc,
  _c,
  _CE,
  _CEC,
  _CECR,
  _CECRr,
  _co,
  _cT,
  _DEC,
  _DECR,
  _DECRe,
  _e,
  _eA,
  _EC,
  _eC,
  _ECm,
  _eCm,
  _ECN,
  _fL,
  _GEC,
  _GECR,
  _GECRe,
  _h,
  _hE,
  _hH,
  _hQ,
  _ISE,
  _LEC,
  _LECR,
  _LECRi,
  _LTFR,
  _LTFRR,
  _LTFRRi,
  _m,
  _mR,
  _n,
  _nT,
  _qC,
  _r,
  _RA,
  _rAS,
  _rI,
  _RNFE,
  _rT,
  _s,
  _SAC,
  _SACR,
  _SACRe,
  _sC,
  _se,
  _SECA,
  _SQEE,
  _T,
  _t,
  _TE,
  _tK,
  _TR,
  _TRR,
  _TRRa,
  _UR,
  _URR,
  _URRn,
  _uT,
  _VE,
  _VEF,
  _VEFL,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var EmailContactName = sim(n0, _ECN, 0, 8);
export var SensitiveEmailContactAddress = sim(n0, _SECA, 0, 8);
export var Token = sim(n0, _T, 0, 8);
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
export var ActivateEmailContactRequest = struct(
  n0,
  _AECR,
  0,
  [_a, _co],
  [
    [0, 1],
    [() => Token, 1],
  ]
);
export var ActivateEmailContactResponse = struct(n0, _AECRc, 0, [], []);
export var ConflictException = error(
  n0,
  _CE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_m, _rI, _rT],
  [0, 0, 0],

  __ConflictException
);
export var CreateEmailContactRequest = struct(n0, _CECR, 0, [_n, _eA, _t], [[() => EmailContactName, 0], 0, 128 | 0]);
export var CreateEmailContactResponse = struct(n0, _CECRr, 0, [_a], [0]);
export var DeleteEmailContactRequest = struct(n0, _DECR, 0, [_a], [[0, 1]]);
export var DeleteEmailContactResponse = struct(n0, _DECRe, 0, [], []);
export var EmailContact = struct(
  n0,
  _EC,
  0,
  [_a, _n, _ad, _s, _cT, _uT],
  [0, [() => EmailContactName, 0], [() => SensitiveEmailContactAddress, 0], 0, 5, 5]
);
export var GetEmailContactRequest = struct(n0, _GECR, 0, [_a], [[0, 1]]);
export var GetEmailContactResponse = struct(n0, _GECRe, 0, [_eC], [[() => EmailContact, 0]]);
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
export var ListEmailContactsRequest = struct(
  n0,
  _LECR,
  0,
  [_mR, _nT],
  [
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
  ]
);
export var ListEmailContactsResponse = struct(n0, _LECRi, 0, [_nT, _eCm], [0, [() => EmailContacts, 0]]);
export var ListTagsForResourceRequest = struct(n0, _LTFRR, 0, [_a], [[0, 1]]);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_t], [128 | 0]);
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
export var SendActivationCodeRequest = struct(n0, _SACR, 0, [_a], [[0, 1]]);
export var SendActivationCodeResponse = struct(n0, _SACRe, 0, [], []);
export var ServiceQuotaExceededException = error(
  n0,
  _SQEE,
  {
    [_e]: _c,
    [_hE]: 402,
  },
  [_m, _rI, _rT, _sC, _qC],
  [0, 0, 0, 0, 0],

  __ServiceQuotaExceededException
);
export var TagResourceRequest = struct(n0, _TRR, 0, [_a, _t], [[0, 1], 128 | 0]);
export var TagResourceResponse = struct(n0, _TRRa, 0, [], []);
export var ThrottlingException = error(
  n0,
  _TE,
  {
    [_e]: _c,
    [_hE]: 429,
  },
  [_m, _sC, _qC, _rAS],
  [
    0,
    0,
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
export var UntagResourceRequest = struct(
  n0,
  _URR,
  0,
  [_a, _tK],
  [
    [0, 1],
    [
      64 | 0,
      {
        [_hQ]: _tK,
      },
    ],
  ]
);
export var UntagResourceResponse = struct(n0, _URRn, 0, [], []);
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
export var Unit = "unit" as const;

export var EmailContacts = list(n0, _ECm, 0, [() => EmailContact, 0]);
export var TagKeys = 64 | 0;

export var ValidationExceptionFieldList = list(n0, _VEFL, 0, () => ValidationExceptionField);
export var TagMap = 128 | 0;

export var ActivateEmailContact = op(
  n0,
  _AEC,
  {
    [_h]: ["PUT", "/emailcontacts/{arn}/activate/{code}", 200],
  },
  () => ActivateEmailContactRequest,
  () => ActivateEmailContactResponse
);
export var CreateEmailContact = op(
  n0,
  _CEC,
  {
    [_h]: ["POST", "/2022-09-19/emailcontacts", 201],
  },
  () => CreateEmailContactRequest,
  () => CreateEmailContactResponse
);
export var DeleteEmailContact = op(
  n0,
  _DEC,
  {
    [_h]: ["DELETE", "/emailcontacts/{arn}", 200],
  },
  () => DeleteEmailContactRequest,
  () => DeleteEmailContactResponse
);
export var GetEmailContact = op(
  n0,
  _GEC,
  {
    [_h]: ["GET", "/emailcontacts/{arn}", 200],
  },
  () => GetEmailContactRequest,
  () => GetEmailContactResponse
);
export var ListEmailContacts = op(
  n0,
  _LEC,
  {
    [_h]: ["GET", "/emailcontacts", 200],
  },
  () => ListEmailContactsRequest,
  () => ListEmailContactsResponse
);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  {
    [_h]: ["GET", "/tags/{arn}", 200],
  },
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse
);
export var SendActivationCode = op(
  n0,
  _SAC,
  {
    [_h]: ["POST", "/2022-10-31/emailcontacts/{arn}/activate/send", 200],
  },
  () => SendActivationCodeRequest,
  () => SendActivationCodeResponse
);
export var TagResource = op(
  n0,
  _TR,
  {
    [_h]: ["POST", "/tags/{arn}", 200],
  },
  () => TagResourceRequest,
  () => TagResourceResponse
);
export var UntagResource = op(
  n0,
  _UR,
  {
    [_h]: ["DELETE", "/tags/{arn}", 200],
  },
  () => UntagResourceRequest,
  () => UntagResourceResponse
);
