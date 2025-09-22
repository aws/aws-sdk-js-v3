// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CN, _h, _P, _PCP, _PCPR, _PCPRu, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var PutChannelPolicyRequest = struct(n0, _PCPR, 0, [_CN, _P], [[0, 1], 0]);
export var PutChannelPolicyResponse = struct(n0, _PCPRu, 0, [], []);
export var PutChannelPolicy = op(
  n0,
  _PCP,
  {
    [_h]: ["PUT", "/channel/{ChannelName}/policy", 200],
  },
  () => PutChannelPolicyRequest,
  () => PutChannelPolicyResponse
);
