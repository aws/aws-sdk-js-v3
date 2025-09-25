// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DDS, _DDSR, _I, _II, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteDataSourceRequest = struct(n0, _DDSR, 0, [_I, _II], [0, 0]);
export var DeleteDataSource = op(
  n0,
  _DDS,
  0,
  () => DeleteDataSourceRequest,
  () => Unit
);
