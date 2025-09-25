// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _Al, _ALl, _FN, _FV, _h, _hQ, _LAi, _LAR, _LARi, _Ma, _MI, _NM, n0 } from "./schemas_0";
import { AliasConfiguration } from "./schemas_9_Alias";

/* eslint no-var: 0 */

export var ListAliasesRequest = struct(
  n0,
  _LAR,
  0,
  [_FN, _FV, _Ma, _MI],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _FV,
      },
    ],
    [
      0,
      {
        [_hQ]: _Ma,
      },
    ],
    [
      1,
      {
        [_hQ]: _MI,
      },
    ],
  ]
);
export var ListAliasesResponse = struct(n0, _LARi, 0, [_NM, _Al], [0, () => AliasList]);
export var AliasList = list(n0, _ALl, 0, () => AliasConfiguration);
export var ListAliases = op(
  n0,
  _LAi,
  {
    [_h]: ["GET", "/2015-03-31/functions/{FunctionName}/aliases", 200],
  },
  () => ListAliasesRequest,
  () => ListAliasesResponse
);
