// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _bI, _DU, _DUR, _DURe, _h, _hQ, _lI, _sIe, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteUtterancesRequest = struct(
  n0,
  _DUR,
  0,
  [_bI, _lI, _sIe],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _lI,
      },
    ],
    [
      0,
      {
        [_hQ]: _sIe,
      },
    ],
  ]
);
export var DeleteUtterancesResponse = struct(n0, _DURe, 0, [], []);
export var DeleteUtterances = op(
  n0,
  _DU,
  {
    [_h]: ["DELETE", "/bots/{botId}/utterances", 204],
  },
  () => DeleteUtterancesRequest,
  () => DeleteUtterancesResponse
);
