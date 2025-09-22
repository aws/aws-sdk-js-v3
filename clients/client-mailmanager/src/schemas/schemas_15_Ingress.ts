// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DIP, _DIPR, _DIPRe, _IPI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteIngressPointRequest = struct(n0, _DIPR, 0, [_IPI], [0]);
export var DeleteIngressPointResponse = struct(n0, _DIPRe, 0, [], []);
export var DeleteIngressPoint = op(
  n0,
  _DIP,
  2,
  () => DeleteIngressPointRequest,
  () => DeleteIngressPointResponse
);
