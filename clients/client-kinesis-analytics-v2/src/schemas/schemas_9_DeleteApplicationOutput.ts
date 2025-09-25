// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AARN, _AN, _AVI, _CAVI, _DAO, _DAOR, _DAORe, _OIu, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteApplicationOutputRequest = struct(n0, _DAOR, 0, [_AN, _CAVI, _OIu], [0, 1, 0]);
export var DeleteApplicationOutputResponse = struct(n0, _DAORe, 0, [_AARN, _AVI], [0, 1]);
export var DeleteApplicationOutput = op(
  n0,
  _DAO,
  0,
  () => DeleteApplicationOutputRequest,
  () => DeleteApplicationOutputResponse
);
