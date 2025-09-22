// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DN, _h, _hQ, _LRBM, _LRBMR, _LRBMRi, _MIa, _MR, _mr, _NT, _nt, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ListRuleBasedMatchesRequest = struct(
  n0,
  _LRBMR,
  0,
  [_NT, _MR, _DN],
  [
    [
      0,
      {
        [_hQ]: _nt,
      },
    ],
    [
      1,
      {
        [_hQ]: _mr,
      },
    ],
    [0, 1],
  ]
);
export var ListRuleBasedMatchesResponse = struct(n0, _LRBMRi, 0, [_MIa, _NT], [64 | 0, 0]);
export var MatchIdList = 64 | 0;

export var ListRuleBasedMatches = op(
  n0,
  _LRBM,
  {
    [_h]: ["GET", "/domains/{DomainName}/profiles/ruleBasedMatches", 200],
  },
  () => ListRuleBasedMatchesRequest,
  () => ListRuleBasedMatchesResponse
);
