// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aRTn, _cTIo, _DCT, _DCTAR, _DCTARI, _DCTARO, _DCTI, _DCTO, _h, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteConfiguredTableAnalysisRuleInput = struct(
  n0,
  _DCTARI,
  0,
  [_cTIo, _aRTn],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteConfiguredTableAnalysisRuleOutput = struct(n0, _DCTARO, 0, [], []);
export var DeleteConfiguredTableInput = struct(n0, _DCTI, 0, [_cTIo], [[0, 1]]);
export var DeleteConfiguredTableOutput = struct(n0, _DCTO, 0, [], []);
export var DeleteConfiguredTable = op(
  n0,
  _DCT,
  {
    [_h]: ["DELETE", "/configuredTables/{configuredTableIdentifier}", 204],
  },
  () => DeleteConfiguredTableInput,
  () => DeleteConfiguredTableOutput
);
export var DeleteConfiguredTableAnalysisRule = op(
  n0,
  _DCTAR,
  {
    [_h]: ["DELETE", "/configuredTables/{configuredTableIdentifier}/analysisRule/{analysisRuleType}", 204],
  },
  () => DeleteConfiguredTableAnalysisRuleInput,
  () => DeleteConfiguredTableAnalysisRuleOutput
);
