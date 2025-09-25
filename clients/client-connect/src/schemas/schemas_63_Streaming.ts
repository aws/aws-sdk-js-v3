// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CI, _CSCh, _CT, _h, _II, _SCS, _SCSR, _SCSRt, _SCSRto, _SCSRtop, _SCSt, _SIt, n0 } from "./schemas_0";
import { ChatStreamingConfiguration } from "./schemas_95_";

/* eslint no-var: 0 */

export var StartContactStreamingRequest = struct(
  n0,
  _SCSR,
  0,
  [_II, _CI, _CSCh, _CT],
  [0, 0, () => ChatStreamingConfiguration, [0, 4]]
);
export var StartContactStreamingResponse = struct(n0, _SCSRt, 0, [_SIt], [0]);
export var StopContactStreamingRequest = struct(n0, _SCSRto, 0, [_II, _CI, _SIt], [0, 0, 0]);
export var StopContactStreamingResponse = struct(n0, _SCSRtop, 0, [], []);
export var StartContactStreaming = op(
  n0,
  _SCS,
  {
    [_h]: ["POST", "/contact/start-streaming", 200],
  },
  () => StartContactStreamingRequest,
  () => StartContactStreamingResponse
);
export var StopContactStreaming = op(
  n0,
  _SCSt,
  {
    [_h]: ["POST", "/contact/stop-streaming", 200],
  },
  () => StopContactStreamingRequest,
  () => StopContactStreamingResponse
);
