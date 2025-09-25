// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  DuplicateCertificateException as __DuplicateCertificateException,
  InvalidCertificateException as __InvalidCertificateException,
  MalformedCertificateException as __MalformedCertificateException,
} from "../models/index";
import {
  _aQE,
  _c,
  _CB,
  _Cer,
  _Cert,
  _CI,
  _cLT,
  _DCEu,
  _e,
  _hE,
  _ICE,
  _IT,
  _LSCi,
  _LSCRis,
  _LSCRist,
  _m,
  _Ma,
  _MCE,
  _MI,
  _S,
  _SCi,
  _UDp,
  _UN,
  _USCplo,
  _USCRploa,
  _USCRpload,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DuplicateCertificateException = error(
  n0,
  _DCEu,
  {
    [_e]: _c,
    [_hE]: 409,
    [_aQE]: [`DuplicateCertificate`, 409],
  },
  [_m],
  [0],

  __DuplicateCertificateException
);
export var InvalidCertificateException = error(
  n0,
  _ICE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidCertificate`, 400],
  },
  [_m],
  [0],

  __InvalidCertificateException
);
export var ListSigningCertificatesRequest = struct(n0, _LSCRis, 0, [_UN, _Ma, _MI], [0, 0, 1]);
export var ListSigningCertificatesResponse = struct(
  n0,
  _LSCRist,
  0,
  [_Cer, _IT, _Ma],
  [() => certificateListType, 2, 0]
);
export var MalformedCertificateException = error(
  n0,
  _MCE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`MalformedCertificate`, 400],
  },
  [_m],
  [0],

  __MalformedCertificateException
);
export var SigningCertificate = struct(n0, _SCi, 0, [_UN, _CI, _CB, _S, _UDp], [0, 0, 0, 0, 4]);
export var UploadSigningCertificateRequest = struct(n0, _USCRploa, 0, [_UN, _CB], [0, 0]);
export var UploadSigningCertificateResponse = struct(n0, _USCRpload, 0, [_Cert], [() => SigningCertificate]);
export var certificateListType = list(n0, _cLT, 0, () => SigningCertificate);
export var ListSigningCertificates = op(
  n0,
  _LSCi,
  0,
  () => ListSigningCertificatesRequest,
  () => ListSigningCertificatesResponse
);
export var UploadSigningCertificate = op(
  n0,
  _USCplo,
  0,
  () => UploadSigningCertificateRequest,
  () => UploadSigningCertificateResponse
);
