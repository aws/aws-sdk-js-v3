// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  CertificateMismatchException as __CertificateMismatchException,
  ConcurrentModificationException as __ConcurrentModificationException,
  InvalidRequestException as __InvalidRequestException,
  LockoutPreventedException as __LockoutPreventedException,
  MalformedCertificateException as __MalformedCertificateException,
} from "../models/index";
import {
  _c,
  _CAA,
  _CCe,
  _Ce,
  _CME,
  _CMEo,
  _DCA,
  _DCAR,
  _DPe,
  _DPRe,
  _e,
  _ICAC,
  _ICACR,
  _IRE,
  _LPE,
  _m,
  _MCE,
  _PDTID,
  _Po,
  _PP,
  _PPR,
  _RA,
  n0,
} from "./schemas_0";
import { Unit } from "./schemas_2_Certificate";

/* eslint no-var: 0 */

export var CertificateMismatchException = error(
  n0,
  _CME,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __CertificateMismatchException
);
export var ConcurrentModificationException = error(
  n0,
  _CMEo,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __ConcurrentModificationException
);
export var DeleteCertificateAuthorityRequest = struct(n0, _DCAR, 0, [_CAA, _PDTID], [0, 1]);
export var DeletePolicyRequest = struct(n0, _DPRe, 0, [_RA], [0]);
export var ImportCertificateAuthorityCertificateRequest = struct(n0, _ICACR, 0, [_CAA, _Ce, _CCe], [0, 21, 21]);
export var InvalidRequestException = error(
  n0,
  _IRE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __InvalidRequestException
);
export var LockoutPreventedException = error(
  n0,
  _LPE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __LockoutPreventedException
);
export var MalformedCertificateException = error(
  n0,
  _MCE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __MalformedCertificateException
);
export var PutPolicyRequest = struct(n0, _PPR, 0, [_RA, _Po], [0, 0]);
export var DeleteCertificateAuthority = op(
  n0,
  _DCA,
  0,
  () => DeleteCertificateAuthorityRequest,
  () => Unit
);
export var DeletePolicy = op(
  n0,
  _DPe,
  0,
  () => DeletePolicyRequest,
  () => Unit
);
export var ImportCertificateAuthorityCertificate = op(
  n0,
  _ICAC,
  0,
  () => ImportCertificateAuthorityCertificateRequest,
  () => Unit
);
export var PutPolicy = op(
  n0,
  _PP,
  0,
  () => PutPolicyRequest,
  () => Unit
);
