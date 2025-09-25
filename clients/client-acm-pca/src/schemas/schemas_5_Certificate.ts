// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { RequestInProgressException as __RequestInProgressException } from "../models/index";
import {
  _c,
  _CAA,
  _CAer,
  _CCe,
  _Ce,
  _Cs,
  _e,
  _GC,
  _GCACe,
  _GCACRet,
  _GCACRete,
  _GCR,
  _GCRe,
  _m,
  _RIPE,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetCertificateAuthorityCsrRequest = struct(n0, _GCACRet, 0, [_CAA], [0]);
export var GetCertificateAuthorityCsrResponse = struct(n0, _GCACRete, 0, [_Cs], [0]);
export var GetCertificateRequest = struct(n0, _GCR, 0, [_CAA, _CAer], [0, 0]);
export var GetCertificateResponse = struct(n0, _GCRe, 0, [_Ce, _CCe], [0, 0]);
export var RequestInProgressException = error(
  n0,
  _RIPE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __RequestInProgressException
);
export var GetCertificate = op(
  n0,
  _GC,
  0,
  () => GetCertificateRequest,
  () => GetCertificateResponse
);
export var GetCertificateAuthorityCsr = op(
  n0,
  _GCACe,
  0,
  () => GetCertificateAuthorityCsrRequest,
  () => GetCertificateAuthorityCsrResponse
);
