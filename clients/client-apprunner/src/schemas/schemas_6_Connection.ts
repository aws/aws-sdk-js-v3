// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _C, _CA, _CAr, _CN, _DC, _DCR, _DCRe, _PT, _S, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var Connection = struct(n0, _C, 0, [_CN, _CA, _PT, _S, _CAr], [0, 0, 0, 0, 4]);
export var DeleteConnectionRequest = struct(n0, _DCR, 0, [_CA], [0]);
export var DeleteConnectionResponse = struct(n0, _DCRe, 0, [_C], [() => Connection]);
export var DeleteConnection = op(
  n0,
  _DC,
  0,
  () => DeleteConnectionRequest,
  () => DeleteConnectionResponse
);
