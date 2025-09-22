// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CD, _GLP, _GLPR, _GLPRe, _LP, _PRR, _UN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetLoginProfileRequest = struct(n0, _GLPR, 0, [_UN], [0]);
export var GetLoginProfileResponse = struct(n0, _GLPRe, 0, [_LP], [() => LoginProfile]);
export var LoginProfile = struct(n0, _LP, 0, [_UN, _CD, _PRR], [0, 4, 2]);
export var GetLoginProfile = op(
  n0,
  _GLP,
  0,
  () => GetLoginProfileRequest,
  () => GetLoginProfileResponse
);
