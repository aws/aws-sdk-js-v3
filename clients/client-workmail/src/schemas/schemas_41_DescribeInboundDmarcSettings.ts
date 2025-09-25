// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DIDS, _DIDSR, _DIDSRe, _En, _OI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeInboundDmarcSettingsRequest = struct(n0, _DIDSR, 0, [_OI], [0]);
export var DescribeInboundDmarcSettingsResponse = struct(n0, _DIDSRe, 0, [_En], [2]);
export var DescribeInboundDmarcSettings = op(
  n0,
  _DIDS,
  2,
  () => DescribeInboundDmarcSettingsRequest,
  () => DescribeInboundDmarcSettingsResponse
);
