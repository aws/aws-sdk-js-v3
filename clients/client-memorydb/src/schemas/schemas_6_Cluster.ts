// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AUSD,
  _CN,
  _CNl,
  _D,
  _DSU,
  _DSUR,
  _DSURe,
  _E,
  _MR,
  _NTex,
  _NU,
  _RD,
  _S,
  _SU,
  _SUe,
  _SUL,
  _SUN,
  _T,
  _xN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeServiceUpdatesRequest = struct(n0, _DSUR, 0, [_SUN, _CN, _S, _MR, _NTex], [0, 64 | 0, 64 | 0, 1, 0]);
export var DescribeServiceUpdatesResponse = struct(n0, _DSURe, 0, [_NTex, _SUe], [0, [() => ServiceUpdateList, 0]]);
export var ServiceUpdate = struct(
  n0,
  _SU,
  0,
  [_CNl, _SUN, _RD, _D, _S, _T, _E, _NU, _AUSD],
  [0, 0, 4, 0, 0, 0, 0, 0, 4]
);
export var ClusterNameList = 64 | 0;

export var ServiceUpdateList = list(n0, _SUL, 0, [
  () => ServiceUpdate,
  {
    [_xN]: _SU,
  },
]);
export var ServiceUpdateStatusList = 64 | 0;

export var DescribeServiceUpdates = op(
  n0,
  _DSU,
  0,
  () => DescribeServiceUpdatesRequest,
  () => DescribeServiceUpdatesResponse
);
