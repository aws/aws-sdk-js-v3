// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DPC, _DPCR, _DPCRe, _h, _N, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeletePlaybackConfigurationRequest = struct(n0, _DPCR, 0, [_N], [[0, 1]]);
export var DeletePlaybackConfigurationResponse = struct(n0, _DPCRe, 0, [], []);
export var DeletePlaybackConfiguration = op(
  n0,
  _DPC,
  {
    [_h]: ["DELETE", "/playbackConfiguration/{Name}", 204],
  },
  () => DeletePlaybackConfigurationRequest,
  () => DeletePlaybackConfigurationResponse
);
