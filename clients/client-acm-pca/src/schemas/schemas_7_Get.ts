// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CAA, _CCe, _Ce, _GCAC, _GCACR, _GCACRe, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetCertificateAuthorityCertificateRequest = struct(n0, _GCACR, 0, [_CAA], [0]);
export var GetCertificateAuthorityCertificateResponse = struct(n0, _GCACRe, 0, [_Ce, _CCe], [0, 0]);
export var GetCertificateAuthorityCertificate = op(
  n0,
  _GCAC,
  0,
  () => GetCertificateAuthorityCertificateRequest,
  () => GetCertificateAuthorityCertificateResponse
);
