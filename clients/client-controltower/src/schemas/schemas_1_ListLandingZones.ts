// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _a, _h, _LLZ, _LLZI, _LLZO, _lZa, _LZS, _LZSa, _mR, _nT, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var LandingZoneSummary = struct(n0, _LZS, 0, [_a], [0]);
export var ListLandingZonesInput = struct(n0, _LLZI, 0, [_nT, _mR], [0, 1]);
export var ListLandingZonesOutput = struct(n0, _LLZO, 0, [_lZa, _nT], [() => LandingZoneSummaries, 0]);
export var LandingZoneSummaries = list(n0, _LZSa, 0, () => LandingZoneSummary);
export var ListLandingZones = op(
  n0,
  _LLZ,
  {
    [_h]: ["POST", "/list-landingzones", 200],
  },
  () => ListLandingZonesInput,
  () => ListLandingZonesOutput
);
