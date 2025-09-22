// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _GMSRU, _GMSRUR, _GMSRURe, _Pl, _RV, _U, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GenerateMobileSdkReleaseUrlRequest = struct(n0, _GMSRUR, 0, [_Pl, _RV], [0, 0]);
export var GenerateMobileSdkReleaseUrlResponse = struct(n0, _GMSRURe, 0, [_U], [0]);
export var GenerateMobileSdkReleaseUrl = op(
  n0,
  _GMSRU,
  0,
  () => GenerateMobileSdkReleaseUrlRequest,
  () => GenerateMobileSdkReleaseUrlResponse
);
