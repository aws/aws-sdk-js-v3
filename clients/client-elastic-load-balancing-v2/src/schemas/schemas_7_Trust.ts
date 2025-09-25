// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  CaCertificatesBundleNotFoundException as __CaCertificatesBundleNotFoundException,
  InvalidCaCertificatesBundleException as __InvalidCaCertificatesBundleException,
} from "../models/index";
import {
  _aQE,
  _c,
  _CCBNFE,
  _CCBSB,
  _CCBSK,
  _CCBSOV,
  _e,
  _hE,
  _ICCBE,
  _M,
  _MTS,
  _MTSI,
  _MTSO,
  _N,
  _NOCC,
  _St,
  _TRE,
  _TS,
  _TSA,
  _TSr,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CaCertificatesBundleNotFoundException = error(
  n0,
  _CCBNFE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`CaCertificatesBundleNotFound`, 400],
  },
  [_M],
  [0],

  __CaCertificatesBundleNotFoundException
);
export var InvalidCaCertificatesBundleException = error(
  n0,
  _ICCBE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidCaCertificatesBundle`, 400],
  },
  [_M],
  [0],

  __InvalidCaCertificatesBundleException
);
export var ModifyTrustStoreInput = struct(n0, _MTSI, 0, [_TSA, _CCBSB, _CCBSK, _CCBSOV], [0, 0, 0, 0]);
export var ModifyTrustStoreOutput = struct(n0, _MTSO, 0, [_TS], [() => TrustStores]);
export var TrustStore = struct(n0, _TSr, 0, [_N, _TSA, _St, _NOCC, _TRE], [0, 0, 0, 1, 1]);
export var TrustStores = list(n0, _TS, 0, () => TrustStore);
export var ModifyTrustStore = op(
  n0,
  _MTS,
  0,
  () => ModifyTrustStoreInput,
  () => ModifyTrustStoreOutput
);
