// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _Ali, _EI, _LAi, _LAR, _LARi, _MRa, _NT, _OI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ListAliasesRequest = struct(n0, _LAR, 0, [_OI, _EI, _NT, _MRa], [0, 0, 0, 1]);
export var ListAliasesResponse = struct(n0, _LARi, 0, [_Ali, _NT], [64 | 0, 0]);
export var Aliases = 64 | 0;

export var ListAliases = op(
  n0,
  _LAi,
  2,
  () => ListAliasesRequest,
  () => ListAliasesResponse
);
