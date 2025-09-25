// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AAI, _F, _h, _hQ, _LFFR, _LFFRR, _LFFRRi, _MR, _mr, _NT, _nt, _RAeso, _RI, _St, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ListFoldersForResourceRequest = struct(
  n0,
  _LFFRR,
  0,
  [_AAI, _RAeso, _NT, _MR],
  [
    [0, 1],
    [0, 1],
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
  ]
);
export var ListFoldersForResourceResponse = struct(n0, _LFFRRi, 0, [_St, _F, _NT, _RI], [[1, 32], 64 | 0, 0, 0]);
export var FoldersForResourceArnList = 64 | 0;

export var ListFoldersForResource = op(
  n0,
  _LFFR,
  {
    [_h]: ["GET", "/accounts/{AwsAccountId}/resource/{ResourceArn}/folders", 200],
  },
  () => ListFoldersForResourceRequest,
  () => ListFoldersForResourceResponse
);
