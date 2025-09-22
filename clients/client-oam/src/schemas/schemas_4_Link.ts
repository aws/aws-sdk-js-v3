// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _A, _h, _I, _It, _L, _LL, _LLI, _LLIi, _LLIis, _LLO, _MR, _NT, _RT, _SA, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ListLinksInput = struct(n0, _LLI, 0, [_MR, _NT], [1, 0]);
export var ListLinksItem = struct(n0, _LLIi, 0, [_A, _I, _L, _RT, _SA], [0, 0, 0, 64 | 0, 0]);
export var ListLinksOutput = struct(n0, _LLO, 0, [_It, _NT], [() => ListLinksItems, 0]);
export var ListLinksItems = list(n0, _LLIis, 0, () => ListLinksItem);
export var ResourceTypesOutput = 64 | 0;

export var ListLinks = op(
  n0,
  _LL,
  {
    [_h]: ["POST", "/ListLinks", 200],
  },
  () => ListLinksInput,
  () => ListLinksOutput
);
