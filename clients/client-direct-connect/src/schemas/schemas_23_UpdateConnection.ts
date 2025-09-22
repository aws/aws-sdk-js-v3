// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _cI, _cN, _eM, _UC, _UCR, Connection, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateConnectionRequest = struct(n0, _UCR, 0, [_cI, _cN, _eM], [0, 0, 0]);
export var UpdateConnection = op(
  n0,
  _UC,
  0,
  () => UpdateConnectionRequest,
  () => Connection
);
