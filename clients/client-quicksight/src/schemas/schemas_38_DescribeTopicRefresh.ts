// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AAI, _DTRescribeo, _DTRR, _DTRRe, _h, _RAe, _RDe, _RI, _RIe, _RSef, _St, _TIo, _TRD, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeTopicRefreshRequest = struct(
  n0,
  _DTRR,
  0,
  [_AAI, _TIo, _RIe],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var DescribeTopicRefreshResponse = struct(
  n0,
  _DTRRe,
  0,
  [_RDe, _RI, _St],
  [() => TopicRefreshDetails, 0, [1, 32]]
);
export var TopicRefreshDetails = struct(n0, _TRD, 0, [_RAe, _RIe, _RSef], [0, 0, 0]);
export var DescribeTopicRefresh = op(
  n0,
  _DTRescribeo,
  {
    [_h]: ["GET", "/accounts/{AwsAccountId}/topics/{TopicId}/refresh/{RefreshId}", 200],
  },
  () => DescribeTopicRefreshRequest,
  () => DescribeTopicRefreshResponse
);
