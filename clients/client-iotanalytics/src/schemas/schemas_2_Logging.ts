// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DLO, _DLOR, _DLORe, _en, _h, _l, _LO, _lO, _PLO, _PLOR, _rA, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeLoggingOptionsRequest = struct(n0, _DLOR, 0, [], []);
export var DescribeLoggingOptionsResponse = struct(n0, _DLORe, 0, [_lO], [() => LoggingOptions]);
export var LoggingOptions = struct(n0, _LO, 0, [_rA, _l, _en], [0, 0, 2]);
export var PutLoggingOptionsRequest = struct(n0, _PLOR, 0, [_lO], [() => LoggingOptions]);
export var DescribeLoggingOptions = op(
  n0,
  _DLO,
  {
    [_h]: ["GET", "/logging", 200],
  },
  () => DescribeLoggingOptionsRequest,
  () => DescribeLoggingOptionsResponse
);
export var PutLoggingOptions = op(
  n0,
  _PLO,
  {
    [_h]: ["PUT", "/logging", 200],
  },
  () => PutLoggingOptionsRequest,
  () => Unit
);
