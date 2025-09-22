// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AIc,
  _CE,
  _CEL,
  _ED,
  _EL,
  _ERN,
  _ERT,
  _ES,
  _ET,
  _ETn,
  _LCH,
  _LCHR,
  _LCHRi,
  _LLP,
  _LLPR,
  _LLPRi,
  _LLPS,
  _LLPSR,
  _LLPSRi,
  _LPL,
  _LPo,
  _LPS,
  _MR,
  _MRARN,
  _NT,
  _PSN,
  _RGN,
  _ST,
  n0,
} from "./schemas_0";
import { LogPattern } from "./schemas_4_Log";

/* eslint no-var: 0 */

export var ConfigurationEvent = struct(
  n0,
  _CE,
  0,
  [_RGN, _AIc, _MRARN, _ES, _ERT, _ET, _ED, _ERN],
  [0, 0, 0, 0, 0, 4, 0, 0]
);
export var ListConfigurationHistoryRequest = struct(
  n0,
  _LCHR,
  0,
  [_RGN, _ST, _ETn, _ES, _MR, _NT, _AIc],
  [0, 4, 4, 0, 1, 0, 0]
);
export var ListConfigurationHistoryResponse = struct(n0, _LCHRi, 0, [_EL, _NT], [() => ConfigurationEventList, 0]);
export var ListLogPatternSetsRequest = struct(n0, _LLPSR, 0, [_RGN, _MR, _NT, _AIc], [0, 1, 0, 0]);
export var ListLogPatternSetsResponse = struct(n0, _LLPSRi, 0, [_RGN, _AIc, _LPS, _NT], [0, 0, 64 | 0, 0]);
export var ListLogPatternsRequest = struct(n0, _LLPR, 0, [_RGN, _PSN, _MR, _NT, _AIc], [0, 0, 1, 0, 0]);
export var ListLogPatternsResponse = struct(n0, _LLPRi, 0, [_RGN, _AIc, _LPo, _NT], [0, 0, () => LogPatternList, 0]);
export var ConfigurationEventList = list(n0, _CEL, 0, () => ConfigurationEvent);
export var LogPatternList = list(n0, _LPL, 0, () => LogPattern);
export var LogPatternSetList = 64 | 0;

export var ListConfigurationHistory = op(
  n0,
  _LCH,
  0,
  () => ListConfigurationHistoryRequest,
  () => ListConfigurationHistoryResponse
);
export var ListLogPatterns = op(
  n0,
  _LLP,
  0,
  () => ListLogPatternsRequest,
  () => ListLogPatternsResponse
);
export var ListLogPatternSets = op(
  n0,
  _LLPS,
  0,
  () => ListLogPatternSetsRequest,
  () => ListLogPatternSetsResponse
);
