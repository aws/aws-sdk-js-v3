// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { WAFInvalidRegexPatternException as __WAFInvalidRegexPatternException } from "../models/index";
import {
  _A,
  _c,
  _CRPS,
  _CRPSR,
  _CRPSRr,
  _CT,
  _e,
  _GRPS,
  _GRPSR,
  _GRPSRe,
  _m,
  _N,
  _RPS,
  _RPSeg,
  _RPSege,
  _RPSI,
  _RPSU,
  _RPSUe,
  _U,
  _URPS,
  _URPSR,
  _URPSRp,
  _WAFIRPE,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateRegexPatternSetRequest = struct(n0, _CRPSR, 0, [_N, _CT], [0, 0]);
export var CreateRegexPatternSetResponse = struct(n0, _CRPSRr, 0, [_RPS, _CT], [() => RegexPatternSet, 0]);
export var GetRegexPatternSetRequest = struct(n0, _GRPSR, 0, [_RPSI], [0]);
export var GetRegexPatternSetResponse = struct(n0, _GRPSRe, 0, [_RPS], [() => RegexPatternSet]);
export var RegexPatternSet = struct(n0, _RPS, 0, [_RPSI, _N, _RPSeg], [0, 0, 64 | 0]);
export var RegexPatternSetUpdate = struct(n0, _RPSU, 0, [_A, _RPSege], [0, 0]);
export var UpdateRegexPatternSetRequest = struct(n0, _URPSR, 0, [_RPSI, _U, _CT], [0, () => RegexPatternSetUpdates, 0]);
export var UpdateRegexPatternSetResponse = struct(n0, _URPSRp, 0, [_CT], [0]);
export var WAFInvalidRegexPatternException = error(
  n0,
  _WAFIRPE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __WAFInvalidRegexPatternException
);
export var RegexPatternSetUpdates = list(n0, _RPSUe, 0, () => RegexPatternSetUpdate);
export var RegexPatternStrings = 64 | 0;

export var CreateRegexPatternSet = op(
  n0,
  _CRPS,
  0,
  () => CreateRegexPatternSetRequest,
  () => CreateRegexPatternSetResponse
);
export var GetRegexPatternSet = op(
  n0,
  _GRPS,
  0,
  () => GetRegexPatternSetRequest,
  () => GetRegexPatternSetResponse
);
export var UpdateRegexPatternSet = op(
  n0,
  _URPS,
  0,
  () => UpdateRegexPatternSetRequest,
  () => UpdateRegexPatternSetResponse
);
