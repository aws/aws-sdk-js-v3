// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DSW, _DSWR, _DSWRe, _LIi, _MDar, _MTa, _SNe, _SW, _WAo, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeSubscribedWorkteamRequest = struct(n0, _DSWR, 0, [_WAo], [0]);
export var DescribeSubscribedWorkteamResponse = struct(n0, _DSWRe, 0, [_SW], [() => SubscribedWorkteam]);
export var SubscribedWorkteam = struct(n0, _SW, 0, [_WAo, _MTa, _SNe, _MDar, _LIi], [0, 0, 0, 0, 0]);
export var DescribeSubscribedWorkteam = op(
  n0,
  _DSW,
  0,
  () => DescribeSubscribedWorkteamRequest,
  () => DescribeSubscribedWorkteamResponse
);
