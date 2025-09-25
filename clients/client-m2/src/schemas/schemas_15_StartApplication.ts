// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aI, _h, _SA, _SAR, _SARt, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var StartApplicationRequest = struct(n0, _SAR, 0, [_aI], [[0, 1]]);
export var StartApplicationResponse = struct(n0, _SARt, 0, [], []);
export var StartApplication = op(
  n0,
  _SA,
  {
    [_h]: ["POST", "/applications/{applicationId}/start", 200],
  },
  () => StartApplicationRequest,
  () => StartApplicationResponse
);
