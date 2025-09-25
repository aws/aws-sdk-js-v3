// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CQS, _CQSR, _II, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var ClearQuerySuggestionsRequest = struct(n0, _CQSR, 0, [_II], [0]);
export var ClearQuerySuggestions = op(
  n0,
  _CQS,
  0,
  () => ClearQuerySuggestionsRequest,
  () => Unit
);
