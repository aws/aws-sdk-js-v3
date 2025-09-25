// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CM, _CMR, _CMRr, _d, _eTN, _mI, _mT, _ta, n0, tagList } from "./schemas_0";

/* eslint no-var: 0 */

export var CreateModelRequest = struct(n0, _CMR, 0, [_mI, _mT, _d, _eTN, _ta], [0, 0, 0, 0, () => tagList]);
export var CreateModelResult = struct(n0, _CMRr, 0, [], []);
export var CreateModel = op(
  n0,
  _CM,
  0,
  () => CreateModelRequest,
  () => CreateModelResult
);
