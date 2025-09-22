// smithy-typescript generated code
import { list, struct } from "@smithy/core/schema";

import { _Ad, _AIc, _ASnom, _Fr, _MAL, _S, _SA, _SN, _St, _Sub, _T, _TE, _Ty, Expression, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var AnomalySubscription = struct(
  n0,
  _ASnom,
  0,
  [_SA, _AIc, _MAL, _S, _T, _Fr, _SN, _TE],
  [0, 0, 64 | 0, () => Subscribers, 1, 0, 0, () => Expression]
);
export var Subscriber = struct(n0, _Sub, 0, [_Ad, _Ty, _St], [0, 0, 0]);
export var MonitorArnList = 64 | 0;

export var Subscribers = list(n0, _S, 0, () => Subscriber);
