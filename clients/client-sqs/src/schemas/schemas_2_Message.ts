// smithy-typescript generated code
import { error, map, op, struct } from "@smithy/core/schema";

import {
  InvalidAttributeName as __InvalidAttributeName,
  InvalidAttributeValue as __InvalidAttributeValue,
  QueueDeletedRecently as __QueueDeletedRecently,
  QueueNameExists as __QueueNameExists,
} from "../models/index";
import {
  _ANt,
  _ANtt,
  _aQE,
  _At,
  _Att,
  _c,
  _CQ,
  _CQR,
  _CQRr,
  _e,
  _GQA,
  _GQAR,
  _GQARe,
  _hE,
  _IAN,
  _IAV,
  _m,
  _N,
  _QAM,
  _QDR,
  _QN,
  _QNE,
  _QU,
  _SQA,
  _SQAR,
  _T,
  _t,
  _V,
  _xF,
  _xN,
  n0,
} from "./schemas_0";
import { TagMap } from "./schemas_7_Queue";

/* eslint no-var: 0 */

export var CreateQueueRequest = struct(
  n0,
  _CQR,
  0,
  [_QN, _At, _t],
  [
    0,
    [
      () => QueueAttributeMap,
      {
        [_xN]: _Att,
        [_xF]: 1,
      },
    ],
    [
      () => TagMap,
      {
        [_xN]: _T,
        [_xF]: 1,
      },
    ],
  ]
);
export var CreateQueueResult = struct(n0, _CQRr, 0, [_QU], [0]);
export var GetQueueAttributesRequest = struct(
  n0,
  _GQAR,
  0,
  [_QU, _ANt],
  [
    0,
    [
      64 | 0,
      {
        [_xN]: _ANtt,
        [_xF]: 1,
      },
    ],
  ]
);
export var GetQueueAttributesResult = struct(
  n0,
  _GQARe,
  0,
  [_At],
  [
    [
      () => QueueAttributeMap,
      {
        [_xN]: _Att,
        [_xF]: 1,
      },
    ],
  ]
);
export var InvalidAttributeName = error(
  n0,
  _IAN,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __InvalidAttributeName
);
export var InvalidAttributeValue = error(
  n0,
  _IAV,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __InvalidAttributeValue
);
export var QueueDeletedRecently = error(
  n0,
  _QDR,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`AWS.SimpleQueueService.QueueDeletedRecently`, 400],
  },
  [_m],
  [0],

  __QueueDeletedRecently
);
export var QueueNameExists = error(
  n0,
  _QNE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`QueueAlreadyExists`, 400],
  },
  [_m],
  [0],

  __QueueNameExists
);
export var SetQueueAttributesRequest = struct(
  n0,
  _SQAR,
  0,
  [_QU, _At],
  [
    0,
    [
      () => QueueAttributeMap,
      {
        [_xN]: _Att,
        [_xF]: 1,
      },
    ],
  ]
);
export var Unit = "unit" as const;

export var AttributeNameList = 64 | 0;

export var QueueAttributeMap = map(
  n0,
  _QAM,
  0,
  [
    0,
    {
      [_xN]: _N,
    },
  ],
  [
    0,
    {
      [_xN]: _V,
    },
  ]
);
export var CreateQueue = op(
  n0,
  _CQ,
  0,
  () => CreateQueueRequest,
  () => CreateQueueResult
);
export var GetQueueAttributes = op(
  n0,
  _GQA,
  0,
  () => GetQueueAttributesRequest,
  () => GetQueueAttributesResult
);
export var SetQueueAttributes = op(
  n0,
  _SQA,
  0,
  () => SetQueueAttributesRequest,
  () => Unit
);
