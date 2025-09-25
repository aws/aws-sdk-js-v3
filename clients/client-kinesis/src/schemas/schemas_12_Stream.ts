// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CARN, _CN, _DSC, _DSCI, _SARN, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeregisterStreamConsumerInput = struct(n0, _DSCI, 0, [_SARN, _CN, _CARN], [0, 0, 0]);
export var DeregisterStreamConsumer = op(
  n0,
  _DSC,
  0,
  () => DeregisterStreamConsumerInput,
  () => Unit
);
