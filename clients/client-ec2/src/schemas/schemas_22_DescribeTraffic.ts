// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _DR,
  _DTMSe,
  _DTMSRes,
  _DTMSResc,
  _DTMTe,
  _DTMTRes,
  _DTMTResc,
  _eQN,
  _Fi,
  _Fil,
  _it,
  _MR,
  _NTe,
  _nTe,
  _TMSI,
  _TMSIL,
  _TMSIr,
  _TMSr,
  _TMSS,
  _tMSS,
  _TMTI,
  _TMTIL,
  _TMTIr,
  _TMTr,
  _TMTS,
  _tMTS,
  _xN,
  FilterList,
  n0,
} from "./schemas_0";
import { TrafficMirrorTarget } from "./schemas_274_TrafficMirror";
import { TrafficMirrorSession } from "./schemas_277_TrafficMirror";

/* eslint no-var: 0 */

export var DescribeTrafficMirrorSessionsRequest = struct(
  n0,
  _DTMSRes,
  0,
  [_TMSIr, _DR, _Fi, _MR, _NTe],
  [
    [
      () => TrafficMirrorSessionIdList,
      {
        [_xN]: _TMSI,
      },
    ],
    2,
    [
      () => FilterList,
      {
        [_xN]: _Fil,
      },
    ],
    1,
    0,
  ]
);
export var DescribeTrafficMirrorSessionsResult = struct(
  n0,
  _DTMSResc,
  0,
  [_TMSr, _NTe],
  [
    [
      () => TrafficMirrorSessionSet,
      {
        [_eQN]: `TrafficMirrorSessionSet`,
        [_xN]: _tMSS,
      },
    ],
    [
      0,
      {
        [_eQN]: `NextToken`,
        [_xN]: _nTe,
      },
    ],
  ]
);
export var DescribeTrafficMirrorTargetsRequest = struct(
  n0,
  _DTMTRes,
  0,
  [_TMTIr, _DR, _Fi, _MR, _NTe],
  [
    [
      () => TrafficMirrorTargetIdList,
      {
        [_xN]: _TMTI,
      },
    ],
    2,
    [
      () => FilterList,
      {
        [_xN]: _Fil,
      },
    ],
    1,
    0,
  ]
);
export var DescribeTrafficMirrorTargetsResult = struct(
  n0,
  _DTMTResc,
  0,
  [_TMTr, _NTe],
  [
    [
      () => TrafficMirrorTargetSet,
      {
        [_eQN]: `TrafficMirrorTargetSet`,
        [_xN]: _tMTS,
      },
    ],
    [
      0,
      {
        [_eQN]: `NextToken`,
        [_xN]: _nTe,
      },
    ],
  ]
);
export var TrafficMirrorSessionIdList = list(n0, _TMSIL, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var TrafficMirrorSessionSet = list(n0, _TMSS, 0, [
  () => TrafficMirrorSession,
  {
    [_xN]: _it,
  },
]);
export var TrafficMirrorTargetIdList = list(n0, _TMTIL, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var TrafficMirrorTargetSet = list(n0, _TMTS, 0, [
  () => TrafficMirrorTarget,
  {
    [_xN]: _it,
  },
]);
export var DescribeTrafficMirrorSessions = op(
  n0,
  _DTMSe,
  0,
  () => DescribeTrafficMirrorSessionsRequest,
  () => DescribeTrafficMirrorSessionsResult
);
export var DescribeTrafficMirrorTargets = op(
  n0,
  _DTMTe,
  0,
  () => DescribeTrafficMirrorTargetsRequest,
  () => DescribeTrafficMirrorTargetsResult
);
