// smithy-typescript generated code
import { error, op, sim, struct } from "@smithy/core/schema";

import { RequestInProgressException as __RequestInProgressException } from "../models/index";
import {
  _C,
  _c,
  _CA,
  _CC,
  _e,
  _EC,
  _ECR,
  _ECRx,
  _GC,
  _GCR,
  _GCRe,
  _m,
  _P,
  _PB,
  _PK,
  _RC,
  _RCR,
  _RIPE,
  n0,
} from "./schemas_0";
import { Unit } from "./schemas_3_Certificate";

/* eslint no-var: 0 */

export var PassphraseBlob = sim(n0, _PB, 21, 8);
export var PrivateKey = sim(n0, _PK, 0, 8);
export var ExportCertificateRequest = struct(n0, _ECR, 0, [_CA, _P], [0, [() => PassphraseBlob, 0]]);
export var ExportCertificateResponse = struct(n0, _ECRx, 0, [_C, _CC, _PK], [0, 0, [() => PrivateKey, 0]]);
export var GetCertificateRequest = struct(n0, _GCR, 0, [_CA], [0]);
export var GetCertificateResponse = struct(n0, _GCRe, 0, [_C, _CC], [0, 0]);
export var RenewCertificateRequest = struct(n0, _RCR, 0, [_CA], [0]);
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
export var ExportCertificate = op(
  n0,
  _EC,
  0,
  () => ExportCertificateRequest,
  () => ExportCertificateResponse
);
export var GetCertificate = op(
  n0,
  _GC,
  0,
  () => GetCertificateRequest,
  () => GetCertificateResponse
);
export var RenewCertificate = op(
  n0,
  _RC,
  0,
  () => RenewCertificateRequest,
  () => Unit
);
