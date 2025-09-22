// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _CDT, _DETe, _DETRes, _DETResc, _DI, _ET, _ETv, _S, _TA, _TN, _TNo, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeEventTopicsRequest = struct(n0, _DETRes, 0, [_DI, _TNo], [0, 64 | 0]);
export var DescribeEventTopicsResult = struct(n0, _DETResc, 0, [_ET], [() => EventTopics]);
export var EventTopic = struct(n0, _ETv, 0, [_DI, _TN, _TA, _CDT, _S], [0, 0, 0, 4, 0]);
export var EventTopics = list(n0, _ET, 0, () => EventTopic);
export var TopicNames = 64 | 0;

export var DescribeEventTopics = op(
  n0,
  _DETe,
  0,
  () => DescribeEventTopicsRequest,
  () => DescribeEventTopicsResult
);
