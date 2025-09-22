// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DLO, _DLOR, _DLORe, _end, _ht, _le, _LO, _lO, _PLO, _PLOR, _PLORu, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeLoggingOptionsRequest = struct(n0, _DLOR, 0, [], []);
export var DescribeLoggingOptionsResponse = struct(n0, _DLORe, 0, [_lO], [() => LoggingOptions]);
export var LoggingOptions = struct(n0, _LO, 0, [_le], [0]);
export var PutLoggingOptionsRequest = struct(n0, _PLOR, 0, [_lO], [() => LoggingOptions]);
export var PutLoggingOptionsResponse = struct(n0, _PLORu, 0, [], []);
export var DescribeLoggingOptions = op(
  n0,
  _DLO,
  {
    [_ht]: ["GET", "/logging", 200],
    [_end]: ["api."],
  },
  () => DescribeLoggingOptionsRequest,
  () => DescribeLoggingOptionsResponse
);
export var PutLoggingOptions = op(
  n0,
  _PLO,
  {
    [_ht]: ["PUT", "/logging", 200],
    [_end]: ["api."],
  },
  () => PutLoggingOptionsRequest,
  () => PutLoggingOptionsResponse
);
