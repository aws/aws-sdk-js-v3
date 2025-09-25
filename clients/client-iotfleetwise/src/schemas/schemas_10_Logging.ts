// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _cWLD, _CWLDO, _GLO, _GLOR, _GLORe, _ht, _lGN, _lT, _PLO, _PLOR, _PLORu, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var CloudWatchLogDeliveryOptions = struct(n0, _CWLDO, 0, [_lT, _lGN], [0, 0]);
export var GetLoggingOptionsRequest = struct(n0, _GLOR, 0, [], []);
export var GetLoggingOptionsResponse = struct(n0, _GLORe, 0, [_cWLD], [() => CloudWatchLogDeliveryOptions]);
export var PutLoggingOptionsRequest = struct(n0, _PLOR, 0, [_cWLD], [() => CloudWatchLogDeliveryOptions]);
export var PutLoggingOptionsResponse = struct(n0, _PLORu, 0, [], []);
export var GetLoggingOptions = op(
  n0,
  _GLO,
  {
    [_ht]: ["GET", "/loggingOptions", 200],
  },
  () => GetLoggingOptionsRequest,
  () => GetLoggingOptionsResponse
);
export var PutLoggingOptions = op(
  n0,
  _PLO,
  {
    [_ht]: ["PUT", "/loggingOptions", 204],
  },
  () => PutLoggingOptionsRequest,
  () => PutLoggingOptionsResponse
);
