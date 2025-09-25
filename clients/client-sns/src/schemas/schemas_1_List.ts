// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _LT, _LTI, _LTR, _NT, _TA, _TLo, _To, _Top, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ListTopicsInput = struct(n0, _LTI, 0, [_NT], [0]);
export var ListTopicsResponse = struct(n0, _LTR, 0, [_To, _NT], [() => TopicsList, 0]);
export var Topic = struct(n0, _Top, 0, [_TA], [0]);
export var TopicsList = list(n0, _TLo, 0, () => Topic);
export var ListTopics = op(
  n0,
  _LT,
  0,
  () => ListTopicsInput,
  () => ListTopicsResponse
);
