// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _AD,
  _AIs,
  _Ar,
  _CBT,
  _CC,
  _CCT,
  _Ce,
  _Cer,
  _CIe,
  _CIer,
  _CP,
  _CPR,
  _CPRr,
  _D,
  _DC,
  _DCel,
  _DCes,
  _DCR,
  _DCRes,
  _DCResc,
  _DP,
  _DPes,
  _DPRe,
  _DPRes,
  _IC,
  _ICR,
  _ICRm,
  _ID,
  _LCi,
  _LCist,
  _LCister,
  _LCR,
  _LCRi,
  _MRa,
  _NAD,
  _NBD,
  _NT,
  _PI,
  _PK,
  _PKT,
  _Pro,
  _PT,
  _S,
  _Se,
  _T,
  _Ty,
  _UCp,
  _UCR,
  _UCRp,
  _UPp,
  _UPR,
  _UPRp,
  _Us,
  n0,
  Tags,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CertificateBodyType = sim(n0, _CBT, 0, 8);
export var CertificateChainType = sim(n0, _CCT, 0, 8);
export var PrivateKeyType = sim(n0, _PKT, 0, 8);
export var CreateProfileRequest = struct(n0, _CPR, 0, [_AIs, _PT, _CIe, _T], [0, 0, 64 | 0, () => Tags]);
export var CreateProfileResponse = struct(n0, _CPRr, 0, [_PI], [0]);
export var DeleteCertificateRequest = struct(n0, _DCR, 0, [_CIer], [0]);
export var DescribeCertificateRequest = struct(n0, _DCRes, 0, [_CIer], [0]);
export var DescribeCertificateResponse = struct(n0, _DCResc, 0, [_Ce], [[() => DescribedCertificate, 0]]);
export var DescribedCertificate = struct(
  n0,
  _DC,
  0,
  [_Ar, _CIer, _Us, _S, _Ce, _CC, _AD, _ID, _Se, _NBD, _NAD, _Ty, _D, _T],
  [0, 0, 0, 0, [() => CertificateBodyType, 0], [() => CertificateChainType, 0], 4, 4, 0, 4, 4, 0, 0, () => Tags]
);
export var DescribedProfile = struct(n0, _DP, 0, [_Ar, _PI, _PT, _AIs, _CIe, _T], [0, 0, 0, 0, 64 | 0, () => Tags]);
export var DescribeProfileRequest = struct(n0, _DPRe, 0, [_PI], [0]);
export var DescribeProfileResponse = struct(n0, _DPRes, 0, [_Pro], [() => DescribedProfile]);
export var ImportCertificateRequest = struct(
  n0,
  _ICR,
  0,
  [_Us, _Ce, _CC, _PK, _AD, _ID, _D, _T],
  [0, [() => CertificateBodyType, 0], [() => CertificateChainType, 0], [() => PrivateKeyType, 0], 4, 4, 0, () => Tags]
);
export var ImportCertificateResponse = struct(n0, _ICRm, 0, [_CIer], [0]);
export var ListCertificatesRequest = struct(n0, _LCR, 0, [_MRa, _NT], [1, 0]);
export var ListCertificatesResponse = struct(n0, _LCRi, 0, [_NT, _Cer], [0, () => ListedCertificates]);
export var ListedCertificate = struct(n0, _LCi, 0, [_Ar, _CIer, _Us, _S, _AD, _ID, _Ty, _D], [0, 0, 0, 0, 4, 4, 0, 0]);
export var UpdateCertificateRequest = struct(n0, _UCR, 0, [_CIer, _AD, _ID, _D], [0, 4, 4, 0]);
export var UpdateCertificateResponse = struct(n0, _UCRp, 0, [_CIer], [0]);
export var UpdateProfileRequest = struct(n0, _UPR, 0, [_PI, _CIe], [0, 64 | 0]);
export var UpdateProfileResponse = struct(n0, _UPRp, 0, [_PI], [0]);
export var CertificateIds = 64 | 0;

export var ListedCertificates = list(n0, _LCist, 0, () => ListedCertificate);
export var CreateProfile = op(
  n0,
  _CP,
  0,
  () => CreateProfileRequest,
  () => CreateProfileResponse
);
export var DeleteCertificate = op(
  n0,
  _DCel,
  2,
  () => DeleteCertificateRequest,
  () => Unit
);
export var DescribeCertificate = op(
  n0,
  _DCes,
  0,
  () => DescribeCertificateRequest,
  () => DescribeCertificateResponse
);
export var DescribeProfile = op(
  n0,
  _DPes,
  0,
  () => DescribeProfileRequest,
  () => DescribeProfileResponse
);
export var ImportCertificate = op(
  n0,
  _IC,
  0,
  () => ImportCertificateRequest,
  () => ImportCertificateResponse
);
export var ListCertificates = op(
  n0,
  _LCister,
  0,
  () => ListCertificatesRequest,
  () => ListCertificatesResponse
);
export var UpdateCertificate = op(
  n0,
  _UCp,
  0,
  () => UpdateCertificateRequest,
  () => UpdateCertificateResponse
);
export var UpdateProfile = op(
  n0,
  _UPp,
  0,
  () => UpdateProfileRequest,
  () => UpdateProfileResponse
);
