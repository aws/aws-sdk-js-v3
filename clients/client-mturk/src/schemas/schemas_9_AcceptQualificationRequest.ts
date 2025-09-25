// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AQR, _AQRR, _AQRRc, _IV, _QRI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var AcceptQualificationRequestRequest = struct(n0, _AQRR, 0, [_QRI, _IV], [0, 1]);
export var AcceptQualificationRequestResponse = struct(n0, _AQRRc, 0, [], []);
export var AcceptQualificationRequest = op(
  n0,
  _AQR,
  0,
  () => AcceptQualificationRequestRequest,
  () => AcceptQualificationRequestResponse
);
