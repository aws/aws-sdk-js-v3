// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  CustomVerificationEmailInvalidContentException as __CustomVerificationEmailInvalidContentException,
  CustomVerificationEmailTemplateDoesNotExistException as __CustomVerificationEmailTemplateDoesNotExistException,
  FromEmailAddressNotVerifiedException as __FromEmailAddressNotVerifiedException,
} from "../models/index";
import {
  _aQE,
  _c,
  _CVEICE,
  _CVETDNEE,
  _CVETN,
  _e,
  _FEA,
  _FEANVE,
  _FRURL,
  _GCVET,
  _GCVETR,
  _GCVETRe,
  _hE,
  _m,
  _SRURL,
  _TC,
  _TN,
  _TS,
  _UCVET,
  _UCVETR,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CustomVerificationEmailInvalidContentException = error(
  n0,
  _CVEICE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`CustomVerificationEmailInvalidContent`, 400],
  },
  [_m],
  [0],

  __CustomVerificationEmailInvalidContentException
);
export var CustomVerificationEmailTemplateDoesNotExistException = error(
  n0,
  _CVETDNEE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`CustomVerificationEmailTemplateDoesNotExist`, 400],
  },
  [_CVETN, _m],
  [0, 0],

  __CustomVerificationEmailTemplateDoesNotExistException
);
export var FromEmailAddressNotVerifiedException = error(
  n0,
  _FEANVE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`FromEmailAddressNotVerified`, 400],
  },
  [_FEA, _m],
  [0, 0],

  __FromEmailAddressNotVerifiedException
);
export var GetCustomVerificationEmailTemplateRequest = struct(n0, _GCVETR, 0, [_TN], [0]);
export var GetCustomVerificationEmailTemplateResponse = struct(
  n0,
  _GCVETRe,
  0,
  [_TN, _FEA, _TS, _TC, _SRURL, _FRURL],
  [0, 0, 0, 0, 0, 0]
);
export var UpdateCustomVerificationEmailTemplateRequest = struct(
  n0,
  _UCVETR,
  0,
  [_TN, _FEA, _TS, _TC, _SRURL, _FRURL],
  [0, 0, 0, 0, 0, 0]
);
export var GetCustomVerificationEmailTemplate = op(
  n0,
  _GCVET,
  0,
  () => GetCustomVerificationEmailTemplateRequest,
  () => GetCustomVerificationEmailTemplateResponse
);
export var UpdateCustomVerificationEmailTemplate = op(
  n0,
  _UCVET,
  0,
  () => UpdateCustomVerificationEmailTemplateRequest,
  () => Unit
);
