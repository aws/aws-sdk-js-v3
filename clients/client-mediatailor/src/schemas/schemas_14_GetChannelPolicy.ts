// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CN, _GCP, _GCPR, _GCPRe, _h, _P, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetChannelPolicyRequest = struct(n0, _GCPR, 0, [_CN], [[0, 1]]);
export var GetChannelPolicyResponse = struct(n0, _GCPRe, 0, [_P], [0]);
export var GetChannelPolicy = op(
  n0,
  _GCP,
  {
    [_h]: ["GET", "/channel/{ChannelName}/policy", 200],
  },
  () => GetChannelPolicyRequest,
  () => GetChannelPolicyResponse
);
