// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CN, _DC, _DCI, _DCO, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteContainerInput = struct(n0, _DCI, 0, [_CN], [0]);
export var DeleteContainerOutput = struct(n0, _DCO, 0, [], []);
export var DeleteContainer = op(
  n0,
  _DC,
  0,
  () => DeleteContainerInput,
  () => DeleteContainerOutput
);
