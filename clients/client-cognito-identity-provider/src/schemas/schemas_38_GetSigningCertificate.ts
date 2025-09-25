// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _Ce, _GSC, _GSCR, _GSCRe, _UPI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetSigningCertificateRequest = struct(n0, _GSCR, 0, [_UPI], [0]);
export var GetSigningCertificateResponse = struct(n0, _GSCRe, 0, [_Ce], [0]);
export var GetSigningCertificate = op(
  n0,
  _GSC,
  0,
  () => GetSigningCertificateRequest,
  () => GetSigningCertificateResponse
);
