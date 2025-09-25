// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  HsmClientCertificateAlreadyExistsFault as __HsmClientCertificateAlreadyExistsFault,
  HsmClientCertificateQuotaExceededFault as __HsmClientCertificateQuotaExceededFault,
} from "../models/index";
import {
  _aQE,
  _c,
  _CHCC,
  _CHCCM,
  _CHCCR,
  _e,
  _HCC,
  _HCCAEF,
  _HCCI,
  _HCCPK,
  _HCCQEF,
  _hE,
  _m,
  _T,
  n0,
  TagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateHsmClientCertificateMessage = struct(n0, _CHCCM, 0, [_HCCI, _T], [0, [() => TagList, 0]]);
export var CreateHsmClientCertificateResult = struct(n0, _CHCCR, 0, [_HCC], [[() => HsmClientCertificate, 0]]);
export var HsmClientCertificate = struct(n0, _HCC, 0, [_HCCI, _HCCPK, _T], [0, 0, [() => TagList, 0]]);
export var HsmClientCertificateAlreadyExistsFault = error(
  n0,
  _HCCAEF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`HsmClientCertificateAlreadyExistsFault`, 400],
  },
  [_m],
  [0],

  __HsmClientCertificateAlreadyExistsFault
);
export var HsmClientCertificateQuotaExceededFault = error(
  n0,
  _HCCQEF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`HsmClientCertificateQuotaExceededFault`, 400],
  },
  [_m],
  [0],

  __HsmClientCertificateQuotaExceededFault
);
export var CreateHsmClientCertificate = op(
  n0,
  _CHCC,
  0,
  () => CreateHsmClientCertificateMessage,
  () => CreateHsmClientCertificateResult
);
