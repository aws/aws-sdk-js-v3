// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  HsmClientCertificateNotFoundFault as __HsmClientCertificateNotFoundFault,
  InvalidHsmClientCertificateStateFault as __InvalidHsmClientCertificateStateFault,
} from "../models/index";
import {
  _aQE,
  _c,
  _DHCC,
  _DHCCe,
  _DHCCM,
  _DHCCMe,
  _e,
  _HCC,
  _HCCI,
  _HCCL,
  _HCCM,
  _HCCNFF,
  _HCCs,
  _hE,
  _IHCCSF,
  _M,
  _m,
  _MR,
  _TK,
  _TV,
  _xN,
  n0,
  TagKeyList,
  Unit,
} from "./schemas_0";
import { HsmClientCertificate } from "./schemas_29_Hsm";
import { TagValueList } from "./schemas_65_Describe";

/* eslint no-var: 0 */

export var DeleteHsmClientCertificateMessage = struct(n0, _DHCCM, 0, [_HCCI], [0]);
export var DescribeHsmClientCertificatesMessage = struct(
  n0,
  _DHCCMe,
  0,
  [_HCCI, _MR, _M, _TK, _TV],
  [0, 1, 0, [() => TagKeyList, 0], [() => TagValueList, 0]]
);
export var HsmClientCertificateMessage = struct(n0, _HCCM, 0, [_M, _HCCs], [0, [() => HsmClientCertificateList, 0]]);
export var HsmClientCertificateNotFoundFault = error(
  n0,
  _HCCNFF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`HsmClientCertificateNotFoundFault`, 400],
  },
  [_m],
  [0],

  __HsmClientCertificateNotFoundFault
);
export var InvalidHsmClientCertificateStateFault = error(
  n0,
  _IHCCSF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidHsmClientCertificateStateFault`, 400],
  },
  [_m],
  [0],

  __InvalidHsmClientCertificateStateFault
);
export var HsmClientCertificateList = list(n0, _HCCL, 0, [
  () => HsmClientCertificate,
  {
    [_xN]: _HCC,
  },
]);
export var DeleteHsmClientCertificate = op(
  n0,
  _DHCC,
  0,
  () => DeleteHsmClientCertificateMessage,
  () => Unit
);
export var DescribeHsmClientCertificates = op(
  n0,
  _DHCCe,
  0,
  () => DescribeHsmClientCertificatesMessage,
  () => HsmClientCertificateMessage
);
