// smithy-typescript generated code
import { list, struct } from "@smithy/core/schema";

import { _AM, _Con, _CR, _CRM, _En, _MACSFM, _MAL, _SN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var AutoMerging = struct(
  n0,
  _AM,
  0,
  [_En, _Con, _CR, _MACSFM],
  [2, () => Consolidation, () => ConflictResolution, 1]
);
export var ConflictResolution = struct(n0, _CR, 0, [_CRM, _SN], [0, 0]);
export var Consolidation = struct(n0, _Con, 0, [_MAL], [list(n0, _MAL, 0, 64 | 0)]);
export var MatchingAttributes = 64 | 0;

export var MatchingAttributesList = list(n0, _MAL, 0, 64 | 0);
