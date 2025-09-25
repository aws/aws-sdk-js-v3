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
  _CT,
  _DC,
  _DCM,
  _e,
  _F,
  _hE,
  _M,
  _m,
  _MR,
  _Th,
  _VF,
  _VT,
  _xN,
  FilterList,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var Certificate = struct(n0, _C, 0, [_CI, _CT, _Th, _VF, _VT, _CA], [0, 0, 0, 4, 4, 0]);
export var CertificateMessage = struct(n0, _CM, 0, [_Ce, _M], [[() => CertificateList, 0], 0]);
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
export var DescribeCertificatesMessage = struct(n0, _DCM, 0, [_CI, _F, _MR, _M], [0, [() => FilterList, 0], 1, 0]);
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
