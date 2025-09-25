// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _bN,
  _bV,
  _bv,
  _bVo,
  _cou,
  _dU,
  _fUD,
  _GUV,
  _GUVR,
  _GUVRe,
  _h,
  _hQ,
  _LOU,
  _LOUi,
  _lUDa,
  _st,
  _sTt,
  _UD,
  _UL,
  _uS,
  _ut,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetUtterancesViewRequest = struct(
  n0,
  _GUVR,
  0,
  [_bN, _bVo, _sTt],
  [
    [0, 1],
    [
      64 | 0,
      {
        [_hQ]: _bv,
      },
    ],
    [
      0,
      {
        [_hQ]: _st,
      },
    ],
  ]
);
export var GetUtterancesViewResponse = struct(n0, _GUVRe, 0, [_bN, _ut], [0, () => ListsOfUtterances]);
export var UtteranceData = struct(n0, _UD, 0, [_uS, _cou, _dU, _fUD, _lUDa], [0, 1, 1, 4, 4]);
export var UtteranceList = struct(n0, _UL, 0, [_bV, _ut], [0, () => ListOfUtterance]);
export var BotVersions = 64 | 0;

export var ListOfUtterance = list(n0, _LOU, 0, () => UtteranceData);
export var ListsOfUtterances = list(n0, _LOUi, 0, () => UtteranceList);
export var GetUtterancesView = op(
  n0,
  _GUV,
  {
    [_h]: ["GET", "/bots/{botName}/utterances?view=aggregation", 200],
  },
  () => GetUtterancesViewRequest,
  () => GetUtterancesViewResponse
);
