// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _HITI, _Rev, _UHITRS, _UHITRSR, _UHITRSRp, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateHITReviewStatusRequest = struct(n0, _UHITRSR, 0, [_HITI, _Rev], [0, 2]);
export var UpdateHITReviewStatusResponse = struct(n0, _UHITRSRp, 0, [], []);
export var UpdateHITReviewStatus = op(
  n0,
  _UHITRS,
  2,
  () => UpdateHITReviewStatusRequest,
  () => UpdateHITReviewStatusResponse
);
