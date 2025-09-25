// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _eTAL, _GOOS, _GOOSI, _GOOSO, _nTAL, _s, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetOciOnboardingStatusInput = struct(n0, _GOOSI, 0, [], []);
export var GetOciOnboardingStatusOutput = struct(n0, _GOOSO, 0, [_s, _eTAL, _nTAL], [0, 0, 0]);
export var GetOciOnboardingStatus = op(
  n0,
  _GOOS,
  0,
  () => GetOciOnboardingStatusInput,
  () => GetOciOnboardingStatusOutput
);
