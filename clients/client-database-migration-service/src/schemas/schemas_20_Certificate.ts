// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { InvalidCertificateFault as __InvalidCertificateFault } from "../models/index";
import {
  _c,
  _CA,
  _CCD,
  _Ce,
  _Cer,
  _CI,
  _CLe,
  _CO,
  _CP,
  _CW,
  _DC,
  _DCes,
  _DCM,
  _DCMes,
  _DCR,
  _DCRes,
  _e,
  _F,
  _IC,
  _ICF,
  _ICM,
  _ICR,
  _KL,
  _m,
  _Ma,
  _MR,
  _SA,
  _T,
  _VFD,
  _VTD,
  _xN,
  FilterList,
  n0,
  TagList,
} from "./schemas_0";
import { SecretString } from "./schemas_46_Data";

/* eslint no-var: 0 */

export var Certificate = struct(
  n0,
  _Ce,
  0,
  [_CI, _CCD, _CP, _CW, _CA, _CO, _VFD, _VTD, _SA, _KL],
  [0, 4, 0, 21, 0, 0, 4, 4, 0, 1]
);
export var DeleteCertificateMessage = struct(n0, _DCM, 0, [_CA], [0]);
export var DeleteCertificateResponse = struct(n0, _DCR, 0, [_Ce], [() => Certificate]);
export var DescribeCertificatesMessage = struct(n0, _DCMes, 0, [_F, _MR, _Ma], [[() => FilterList, 0], 1, 0]);
export var DescribeCertificatesResponse = struct(n0, _DCRes, 0, [_Ma, _Cer], [0, [() => CertificateList, 0]]);
export var ImportCertificateMessage = struct(
  n0,
  _ICM,
  0,
  [_CI, _CP, _CW, _T],
  [0, [() => SecretString, 0], 21, [() => TagList, 0]]
);
export var ImportCertificateResponse = struct(n0, _ICR, 0, [_Ce], [() => Certificate]);
export var InvalidCertificateFault = error(
  n0,
  _ICF,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __InvalidCertificateFault
);
export var CertificateList = list(n0, _CLe, 0, [
  () => Certificate,
  {
    [_xN]: _Ce,
  },
]);
export var DeleteCertificate = op(
  n0,
  _DC,
  0,
  () => DeleteCertificateMessage,
  () => DeleteCertificateResponse
);
export var DescribeCertificates = op(
  n0,
  _DCes,
  0,
  () => DescribeCertificatesMessage,
  () => DescribeCertificatesResponse
);
export var ImportCertificate = op(
  n0,
  _IC,
  0,
  () => ImportCertificateMessage,
  () => ImportCertificateResponse
);
