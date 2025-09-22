// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _co, _fIi, _GSDOA, _GSDOAR, _GSDOARe, _h, _jN, _reas, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetSensitiveDataOccurrencesAvailabilityRequest = struct(n0, _GSDOAR, 0, [_fIi], [[0, 1]]);
export var GetSensitiveDataOccurrencesAvailabilityResponse = struct(
  n0,
  _GSDOARe,
  0,
  [_co, _reas],
  [
    [
      0,
      {
        [_jN]: _co,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _reas,
      },
    ],
  ]
);
export var __listOfUnavailabilityReasonCode = 64 | 0;

export var GetSensitiveDataOccurrencesAvailability = op(
  n0,
  _GSDOA,
  {
    [_h]: ["GET", "/findings/{findingId}/reveal/availability", 200],
  },
  () => GetSensitiveDataOccurrencesAvailabilityRequest,
  () => GetSensitiveDataOccurrencesAvailabilityResponse
);
