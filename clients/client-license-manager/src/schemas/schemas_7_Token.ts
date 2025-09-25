// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AT, _GAT, _GATR, _GATRe, _To, _TP, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetAccessTokenRequest = struct(n0, _GATR, 0, [_To, _TP], [0, 64 | 0]);
export var GetAccessTokenResponse = struct(n0, _GATRe, 0, [_AT], [0]);
export var MaxSize3StringList = 64 | 0;

export var GetAccessToken = op(
  n0,
  _GAT,
  0,
  () => GetAccessTokenRequest,
  () => GetAccessTokenResponse
);
