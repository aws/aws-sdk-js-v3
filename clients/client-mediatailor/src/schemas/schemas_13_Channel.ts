// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CLFC, _CLFCR, _CLFCRo, _CN, _h, _LT, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ConfigureLogsForChannelRequest = struct(n0, _CLFCR, 0, [_CN, _LT], [0, 64 | 0]);
export var ConfigureLogsForChannelResponse = struct(n0, _CLFCRo, 0, [_CN, _LT], [0, 64 | 0]);
export var LogTypes = 64 | 0;

export var ConfigureLogsForChannel = op(
  n0,
  _CLFC,
  {
    [_h]: ["PUT", "/configureLogs/channel", 200],
  },
  () => ConfigureLogsForChannelRequest,
  () => ConfigureLogsForChannelResponse
);
