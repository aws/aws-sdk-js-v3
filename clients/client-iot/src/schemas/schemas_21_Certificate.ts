// smithy-typescript generated code
import { error, op, sim, struct } from "@smithy/core/schema";

import { CertificateConflictException as __CertificateConflictException } from "../models/index";
import {
  _aDcc,
  _cAe,
  _CCE,
  _CCFC,
  _CCFCR,
  _CCFCRr,
  _cCI,
  _cCP,
  _CD,
  _cD,
  _cDe,
  _cI,
  _CKAC,
  _CKACR,
  _CKACRr,
  _cl,
  _cMe,
  _cP,
  _CPC,
  _CPCR,
  _CPCRr,
  _cSR,
  _CV,
  _cV,
  _DCes,
  _DCRes,
  _DCResc,
  _er,
  _ex,
  _gI,
  _h,
  _hE,
  _hQ,
  _KP,
  _kP,
  _lMD,
  _me,
  _nA,
  _nB,
  _oB,
  _PK,
  _PKu,
  _pOB,
  _RCeg,
  _RCR,
  _RCRe,
  _RCWCA,
  _RCWCAR,
  _RCWCARe,
  _rDej,
  _rRe,
  _sAA,
  _st,
  _tD,
  _TDr,
  _tDr,
  _tM,
  _tNe,
  _val,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var PrivateKey = sim(n0, _PK, 0, 8);
export var CertificateConflictException = error(
  n0,
  _CCE,
  {
    [_er]: _cl,
    [_hE]: 409,
  },
  [_me],
  [0],

  __CertificateConflictException
);
export var CertificateDescription = struct(
  n0,
  _CD,
  0,
  [_cAe, _cI, _cCI, _st, _cP, _oB, _pOB, _cD, _lMD, _cV, _tD, _gI, _val, _cMe],
  [0, 0, 0, 0, 0, 0, 0, 4, 4, 1, () => TransferData, 0, () => CertificateValidity, 0]
);
export var CertificateValidity = struct(n0, _CV, 0, [_nB, _nA], [4, 4]);
export var CreateCertificateFromCsrRequest = struct(
  n0,
  _CCFCR,
  0,
  [_cSR, _sAA],
  [
    0,
    [
      2,
      {
        [_hQ]: _sAA,
      },
    ],
  ]
);
export var CreateCertificateFromCsrResponse = struct(n0, _CCFCRr, 0, [_cAe, _cI, _cP], [0, 0, 0]);
export var CreateKeysAndCertificateRequest = struct(
  n0,
  _CKACR,
  0,
  [_sAA],
  [
    [
      2,
      {
        [_hQ]: _sAA,
      },
    ],
  ]
);
export var CreateKeysAndCertificateResponse = struct(
  n0,
  _CKACRr,
  0,
  [_cAe, _cI, _cP, _kP],
  [0, 0, 0, [() => KeyPair, 0]]
);
export var CreateProvisioningClaimRequest = struct(n0, _CPCR, 0, [_tNe], [[0, 1]]);
export var CreateProvisioningClaimResponse = struct(n0, _CPCRr, 0, [_cI, _cP, _kP, _ex], [0, 0, [() => KeyPair, 0], 4]);
export var DescribeCertificateRequest = struct(n0, _DCRes, 0, [_cI], [[0, 1]]);
export var DescribeCertificateResponse = struct(n0, _DCResc, 0, [_cDe], [() => CertificateDescription]);
export var KeyPair = struct(n0, _KP, 0, [_PKu, _PK], [0, [() => PrivateKey, 0]]);
export var RegisterCertificateRequest = struct(
  n0,
  _RCR,
  0,
  [_cP, _cCP, _sAA, _st],
  [
    0,
    0,
    [
      2,
      {
        [_hQ]: _sAA,
      },
    ],
    0,
  ]
);
export var RegisterCertificateResponse = struct(n0, _RCRe, 0, [_cAe, _cI], [0, 0]);
export var RegisterCertificateWithoutCARequest = struct(n0, _RCWCAR, 0, [_cP, _st], [0, 0]);
export var RegisterCertificateWithoutCAResponse = struct(n0, _RCWCARe, 0, [_cAe, _cI], [0, 0]);
export var TransferData = struct(n0, _TDr, 0, [_tM, _rRe, _tDr, _aDcc, _rDej], [0, 0, 4, 4, 4]);
export var CreateCertificateFromCsr = op(
  n0,
  _CCFC,
  {
    [_h]: ["POST", "/certificates", 200],
  },
  () => CreateCertificateFromCsrRequest,
  () => CreateCertificateFromCsrResponse
);
export var CreateKeysAndCertificate = op(
  n0,
  _CKAC,
  {
    [_h]: ["POST", "/keys-and-certificate", 200],
  },
  () => CreateKeysAndCertificateRequest,
  () => CreateKeysAndCertificateResponse
);
export var CreateProvisioningClaim = op(
  n0,
  _CPC,
  {
    [_h]: ["POST", "/provisioning-templates/{templateName}/provisioning-claim", 200],
  },
  () => CreateProvisioningClaimRequest,
  () => CreateProvisioningClaimResponse
);
export var DescribeCertificate = op(
  n0,
  _DCes,
  {
    [_h]: ["GET", "/certificates/{certificateId}", 200],
  },
  () => DescribeCertificateRequest,
  () => DescribeCertificateResponse
);
export var RegisterCertificate = op(
  n0,
  _RCeg,
  {
    [_h]: ["POST", "/certificate/register", 200],
  },
  () => RegisterCertificateRequest,
  () => RegisterCertificateResponse
);
export var RegisterCertificateWithoutCA = op(
  n0,
  _RCWCA,
  {
    [_h]: ["POST", "/certificate/register-no-ca", 200],
  },
  () => RegisterCertificateWithoutCARequest,
  () => RegisterCertificateWithoutCAResponse
);
