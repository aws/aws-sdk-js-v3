// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CI, _DSCe, _DSCRe, _S, _UN, _USCpd, _USCRpd, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteSigningCertificateRequest = struct(n0, _DSCRe, 0, [_UN, _CI], [0, 0]);
export var UpdateSigningCertificateRequest = struct(n0, _USCRpd, 0, [_UN, _CI, _S], [0, 0, 0]);
export var DeleteSigningCertificate = op(
  n0,
  _DSCe,
  0,
  () => DeleteSigningCertificateRequest,
  () => Unit
);
export var UpdateSigningCertificate = op(
  n0,
  _USCpd,
  0,
  () => UpdateSigningCertificateRequest,
  () => Unit
);
