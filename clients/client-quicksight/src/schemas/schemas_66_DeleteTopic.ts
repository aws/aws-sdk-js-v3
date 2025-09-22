// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AAI, _Ar, _DTelet, _DTRelet, _DTRelete, _h, _RI, _St, _TIo, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteTopicRequest = struct(
  n0,
  _DTRelet,
  0,
  [_AAI, _TIo],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteTopicResponse = struct(n0, _DTRelete, 0, [_Ar, _TIo, _RI, _St], [0, 0, 0, [1, 32]]);
export var DeleteTopic = op(
  n0,
  _DTelet,
  {
    [_h]: ["DELETE", "/accounts/{AwsAccountId}/topics/{TopicId}", 200],
  },
  () => DeleteTopicRequest,
  () => DeleteTopicResponse
);
