// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CAo, _CNon, _DCele, _DCRele, _DCRelet, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteContextRequest = struct(n0, _DCRele, 0, [_CNon], [0]);
export var DeleteContextResponse = struct(n0, _DCRelet, 0, [_CAo], [0]);
export var DeleteContext = op(
  n0,
  _DCele,
  0,
  () => DeleteContextRequest,
  () => DeleteContextResponse
);
