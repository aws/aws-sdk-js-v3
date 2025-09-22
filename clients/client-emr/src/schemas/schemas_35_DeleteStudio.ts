// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DS, _DSI, _SItu, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteStudioInput = struct(n0, _DSI, 0, [_SItu], [0]);
export var DeleteStudio = op(
  n0,
  _DS,
  0,
  () => DeleteStudioInput,
  () => Unit
);
