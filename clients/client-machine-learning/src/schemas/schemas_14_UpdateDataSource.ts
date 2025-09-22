// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DSI, _DSN, _UDS, _UDSI, _UDSO, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateDataSourceInput = struct(n0, _UDSI, 0, [_DSI, _DSN], [0, 0]);
export var UpdateDataSourceOutput = struct(n0, _UDSO, 0, [_DSI], [0]);
export var UpdateDataSource = op(
  n0,
  _UDS,
  0,
  () => UpdateDataSourceInput,
  () => UpdateDataSourceOutput
);
