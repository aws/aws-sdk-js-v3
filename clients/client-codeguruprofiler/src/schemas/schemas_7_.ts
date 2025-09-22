// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aPg, _CT, _cTo, _h, _hH, _hQ, _iT, _PAP, _PAPR, _PAPRo, _pGN, _pTr, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var PostAgentProfileRequest = struct(
  n0,
  _PAPR,
  0,
  [_pGN, _aPg, _pTr, _cTo],
  [
    [0, 1],
    [21, 16],
    [
      0,
      {
        [_iT]: 1,
        [_hQ]: _pTr,
      },
    ],
    [
      0,
      {
        [_hH]: _CT,
      },
    ],
  ]
);
export var PostAgentProfileResponse = struct(n0, _PAPRo, 0, [], []);
export var PostAgentProfile = op(
  n0,
  _PAP,
  {
    [_h]: ["POST", "/profilingGroups/{profilingGroupName}/agentProfile", 204],
  },
  () => PostAgentProfileRequest,
  () => PostAgentProfileResponse
);
