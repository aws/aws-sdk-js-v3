// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _QRI, _R, _RQR, _RQRR, _RQRRe, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var RejectQualificationRequestRequest = struct(n0, _RQRR, 0, [_QRI, _R], [0, 0]);
export var RejectQualificationRequestResponse = struct(n0, _RQRRe, 0, [], []);
export var RejectQualificationRequest = op(
  n0,
  _RQR,
  0,
  () => RejectQualificationRequestRequest,
  () => RejectQualificationRequestResponse
);
