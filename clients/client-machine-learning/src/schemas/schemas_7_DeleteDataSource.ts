// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DDS, _DDSI, _DDSO, _DSI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteDataSourceInput = struct(n0, _DDSI, 0, [_DSI], [0]);
export var DeleteDataSourceOutput = struct(n0, _DDSO, 0, [_DSI], [0]);
export var DeleteDataSource = op(
  n0,
  _DDS,
  0,
  () => DeleteDataSourceInput,
  () => DeleteDataSourceOutput
);
