// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _bI, _bV, _GBE, _GBER, _GBERe, _h, _iI, _lI, _SU, _sU, _SUL, _u, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GenerateBotElementRequest = struct(n0, _GBER, 0, [_iI, _bI, _bV, _lI], [0, [0, 1], [0, 1], [0, 1]]);
export var GenerateBotElementResponse = struct(
  n0,
  _GBERe,
  0,
  [_bI, _bV, _lI, _iI, _sU],
  [0, 0, 0, 0, () => SampleUtterancesList]
);
export var SampleUtterance = struct(n0, _SU, 0, [_u], [0]);
export var SampleUtterancesList = list(n0, _SUL, 0, () => SampleUtterance);
export var GenerateBotElement = op(
  n0,
  _GBE,
  {
    [_h]: ["POST", "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/generate", 202],
  },
  () => GenerateBotElementRequest,
  () => GenerateBotElementResponse
);
