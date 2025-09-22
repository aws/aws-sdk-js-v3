// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { CertificateNotFoundFault as __CertificateNotFoundFault } from "../models/index";
import {
  _aQE,
  _C,
  _c,
  _CA,
  _Ce,
  _CI,
  _CL,
  _CM,
  _CNFF,
  _CO,
  _COVT,
  _CTe,
  _DC,
  _DCFNL,
  _DCM,
  _e,
  _Fi,
  _hE,
  _m,
  _Ma,
  _MCM,
  _MCo,
  _MCR,
  _MR,
  _RCO,
  _Th,
  _VF,
  _VT,
  _xN,
  FilterList,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var Certificate = struct(n0, _C, 0, [_CI, _CTe, _Th, _VF, _VT, _CA, _CO, _COVT], [0, 0, 0, 4, 4, 0, 2, 4]);
export var CertificateMessage = struct(n0, _CM, 0, [_DCFNL, _Ce, _Ma], [0, [() => CertificateList, 0], 0]);
export var CertificateNotFoundFault = error(
  n0,
  _CNFF,
  {
    [_e]: _c,
    [_hE]: 404,
    [_aQE]: [`CertificateNotFound`, 404],
  },
  [_m],
  [0],

  __CertificateNotFoundFault
);
export var DescribeCertificatesMessage = struct(n0, _DCM, 0, [_CI, _Fi, _MR, _Ma], [0, [() => FilterList, 0], 1, 0]);
export var ModifyCertificatesMessage = struct(n0, _MCM, 0, [_CI, _RCO], [0, 2]);
export var ModifyCertificatesResult = struct(n0, _MCR, 0, [_C], [() => Certificate]);
export var CertificateList = list(n0, _CL, 0, [
  () => Certificate,
  {
    [_xN]: _C,
  },
]);
export var DescribeCertificates = op(
  n0,
  _DC,
  0,
  () => DescribeCertificatesMessage,
  () => CertificateMessage
);
export var ModifyCertificates = op(
  n0,
  _MCo,
  0,
  () => ModifyCertificatesMessage,
  () => ModifyCertificatesResult
);
