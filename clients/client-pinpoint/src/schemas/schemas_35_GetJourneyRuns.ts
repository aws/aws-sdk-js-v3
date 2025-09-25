// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AI,
  _CTr,
  _GJRet,
  _GJRR,
  _GJRRe,
  _h,
  _hQ,
  _I,
  _JI,
  _JRR,
  _JRRo,
  _LOJRR,
  _LUT,
  _NT,
  _PS,
  _ps,
  _RIu,
  _Sta,
  _to,
  _Tok,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetJourneyRunsRequest = struct(
  n0,
  _GJRR,
  0,
  [_AI, _JI, _PS, _Tok],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _ps,
      },
    ],
    [
      0,
      {
        [_hQ]: _to,
      },
    ],
  ]
);
export var GetJourneyRunsResponse = struct(n0, _GJRRe, 0, [_JRR], [[() => JourneyRunsResponse, 16]]);
export var JourneyRunResponse = struct(n0, _JRRo, 0, [_CTr, _LUT, _RIu, _Sta], [0, 0, 0, 0]);
export var JourneyRunsResponse = struct(n0, _JRR, 0, [_I, _NT], [() => ListOfJourneyRunResponse, 0]);
export var ListOfJourneyRunResponse = list(n0, _LOJRR, 0, () => JourneyRunResponse);
export var GetJourneyRuns = op(
  n0,
  _GJRet,
  {
    [_h]: ["GET", "/v1/apps/{ApplicationId}/journeys/{JourneyId}/runs", 200],
  },
  () => GetJourneyRunsRequest,
  () => GetJourneyRunsResponse
);
