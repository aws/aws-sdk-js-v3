// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DA, _DGA, _UDG, _UDGR, _UDGRp, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateDatasetGroupRequest = struct(n0, _UDGR, 0, [_DGA, _DA], [0, 64 | 0]);
export var UpdateDatasetGroupResponse = struct(n0, _UDGRp, 0, [], []);
export var ArnList = 64 | 0;

export var UpdateDatasetGroup = op(
  n0,
  _UDG,
  2,
  () => UpdateDatasetGroupRequest,
  () => UpdateDatasetGroupResponse
);
