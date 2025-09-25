// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _DEV, _DEVR, _DEVRe, _DO, _E, _EPV, _EV, _EVI, _EVIL, _EVn, _MR, _NTex, _PGF, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeEngineVersionsRequest = struct(n0, _DEVR, 0, [_E, _EV, _PGF, _MR, _NTex, _DO], [0, 0, 0, 1, 0, 2]);
export var DescribeEngineVersionsResponse = struct(n0, _DEVRe, 0, [_NTex, _EVn], [0, () => EngineVersionInfoList]);
export var EngineVersionInfo = struct(n0, _EVI, 0, [_E, _EV, _EPV, _PGF], [0, 0, 0, 0]);
export var EngineVersionInfoList = list(n0, _EVIL, 0, () => EngineVersionInfo);
export var DescribeEngineVersions = op(
  n0,
  _DEV,
  0,
  () => DescribeEngineVersionsRequest,
  () => DescribeEngineVersionsResponse
);
