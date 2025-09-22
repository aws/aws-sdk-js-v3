// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  CertificateAlreadyExistsException as __CertificateAlreadyExistsException,
  CertificateDoesNotExistException as __CertificateDoesNotExistException,
  CertificateInUseException as __CertificateInUseException,
  CertificateLimitExceededException as __CertificateLimitExceededException,
  InvalidCertificateException as __InvalidCertificateException,
} from "../models/index";
import {
  _c,
  _CAEE,
  _CCAS,
  _CD,
  _CDNEE,
  _Ce,
  _CI,
  _CIe,
  _CIer,
  _CIUE,
  _CLEE,
  _CN,
  _DCe,
  _DCes,
  _DCR,
  _DCRe,
  _DCRes,
  _DCResc,
  _DI,
  _e,
  _EDT,
  _ICE,
  _L,
  _LCi,
  _LCR,
  _LCRi,
  _M,
  _NT,
  _OCSPU,
  _RC,
  _RCR,
  _RCRe,
  _RDT,
  _RI,
  _SRt,
  _St,
  _Ty,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var Certificate = struct(
  n0,
  _Ce,
  0,
  [_CI, _St, _SRt, _CN, _RDT, _EDT, _Ty, _CCAS],
  [0, 0, 0, 0, 4, 4, 0, () => ClientCertAuthSettings]
);
export var CertificateAlreadyExistsException = error(
  n0,
  _CAEE,
  {
    [_e]: _c,
  },
  [_M, _RI],
  [0, 0],

  __CertificateAlreadyExistsException
);
export var CertificateDoesNotExistException = error(
  n0,
  _CDNEE,
  {
    [_e]: _c,
  },
  [_M, _RI],
  [0, 0],

  __CertificateDoesNotExistException
);
export var CertificateInfo = struct(n0, _CIe, 0, [_CI, _CN, _St, _EDT, _Ty], [0, 0, 0, 4, 0]);
export var CertificateInUseException = error(
  n0,
  _CIUE,
  {
    [_e]: _c,
  },
  [_M, _RI],
  [0, 0],

  __CertificateInUseException
);
export var CertificateLimitExceededException = error(
  n0,
  _CLEE,
  {
    [_e]: _c,
  },
  [_M, _RI],
  [0, 0],

  __CertificateLimitExceededException
);
export var ClientCertAuthSettings = struct(n0, _CCAS, 0, [_OCSPU], [0]);
export var DeregisterCertificateRequest = struct(n0, _DCR, 0, [_DI, _CI], [0, 0]);
export var DeregisterCertificateResult = struct(n0, _DCRe, 0, [], []);
export var DescribeCertificateRequest = struct(n0, _DCRes, 0, [_DI, _CI], [0, 0]);
export var DescribeCertificateResult = struct(n0, _DCResc, 0, [_Ce], [() => Certificate]);
export var InvalidCertificateException = error(
  n0,
  _ICE,
  {
    [_e]: _c,
  },
  [_M, _RI],
  [0, 0],

  __InvalidCertificateException
);
export var ListCertificatesRequest = struct(n0, _LCR, 0, [_DI, _NT, _L], [0, 0, 1]);
export var ListCertificatesResult = struct(n0, _LCRi, 0, [_NT, _CIer], [0, () => CertificatesInfo]);
export var RegisterCertificateRequest = struct(
  n0,
  _RCR,
  0,
  [_DI, _CD, _Ty, _CCAS],
  [0, 0, 0, () => ClientCertAuthSettings]
);
export var RegisterCertificateResult = struct(n0, _RCRe, 0, [_CI], [0]);
export var CertificatesInfo = list(n0, _CIer, 0, () => CertificateInfo);
export var DeregisterCertificate = op(
  n0,
  _DCe,
  0,
  () => DeregisterCertificateRequest,
  () => DeregisterCertificateResult
);
export var DescribeCertificate = op(
  n0,
  _DCes,
  0,
  () => DescribeCertificateRequest,
  () => DescribeCertificateResult
);
export var ListCertificates = op(
  n0,
  _LCi,
  0,
  () => ListCertificatesRequest,
  () => ListCertificatesResult
);
export var RegisterCertificate = op(
  n0,
  _RC,
  0,
  () => RegisterCertificateRequest,
  () => RegisterCertificateResult
);
