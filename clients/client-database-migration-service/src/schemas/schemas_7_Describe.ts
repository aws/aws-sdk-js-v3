// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AU,
  _AUD,
  _DD,
  _DEV,
  _DEVM,
  _DEVR,
  _EV,
  _EVL,
  _EVn,
  _FUD,
  _LD,
  _Li,
  _Ma,
  _MR,
  _RSel,
  _Ve,
  _xN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeEngineVersionsMessage = struct(n0, _DEVM, 0, [_MR, _Ma], [1, 0]);
export var DescribeEngineVersionsResponse = struct(n0, _DEVR, 0, [_EVn, _Ma], [[() => EngineVersionList, 0], 0]);
export var EngineVersion = struct(
  n0,
  _EV,
  0,
  [_Ve, _Li, _RSel, _LD, _AUD, _DD, _FUD, _AU],
  [0, 0, 0, 4, 4, 4, 4, 64 | 0]
);
export var AvailableUpgradesList = 64 | 0;

export var EngineVersionList = list(n0, _EVL, 0, [
  () => EngineVersion,
  {
    [_xN]: _EV,
  },
]);
export var DescribeEngineVersions = op(
  n0,
  _DEV,
  0,
  () => DescribeEngineVersionsMessage,
  () => DescribeEngineVersionsResponse
);
