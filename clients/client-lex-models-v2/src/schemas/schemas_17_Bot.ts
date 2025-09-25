// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _BBL, _BBLR, _BBLRu, _bI, _bLS, _bV, _DBL, _DBLR, _DBLRe, _h, _lBSDT, _lI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var BuildBotLocaleRequest = struct(
  n0,
  _BBLR,
  0,
  [_bI, _bV, _lI],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var BuildBotLocaleResponse = struct(n0, _BBLRu, 0, [_bI, _bV, _lI, _bLS, _lBSDT], [0, 0, 0, 0, 4]);
export var DeleteBotLocaleRequest = struct(
  n0,
  _DBLR,
  0,
  [_bI, _bV, _lI],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var DeleteBotLocaleResponse = struct(n0, _DBLRe, 0, [_bI, _bV, _lI, _bLS], [0, 0, 0, 0]);
export var BuildBotLocale = op(
  n0,
  _BBL,
  {
    [_h]: ["POST", "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}", 202],
  },
  () => BuildBotLocaleRequest,
  () => BuildBotLocaleResponse
);
export var DeleteBotLocale = op(
  n0,
  _DBL,
  {
    [_h]: ["DELETE", "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}", 202],
  },
  () => DeleteBotLocaleRequest,
  () => DeleteBotLocaleResponse
);
