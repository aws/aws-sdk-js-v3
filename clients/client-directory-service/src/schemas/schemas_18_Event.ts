// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DET, _DETR, _DETRe, _DI, _RET, _RETR, _RETRe, _TN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeregisterEventTopicRequest = struct(n0, _DETR, 0, [_DI, _TN], [0, 0]);
export var DeregisterEventTopicResult = struct(n0, _DETRe, 0, [], []);
export var RegisterEventTopicRequest = struct(n0, _RETR, 0, [_DI, _TN], [0, 0]);
export var RegisterEventTopicResult = struct(n0, _RETRe, 0, [], []);
export var DeregisterEventTopic = op(
  n0,
  _DET,
  0,
  () => DeregisterEventTopicRequest,
  () => DeregisterEventTopicResult
);
export var RegisterEventTopic = op(
  n0,
  _RET,
  0,
  () => RegisterEventTopicRequest,
  () => RegisterEventTopicResult
);
