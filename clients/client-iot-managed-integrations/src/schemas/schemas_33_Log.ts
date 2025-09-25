// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DELC, _DELCR, _h, _I, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteEventLogConfigurationRequest = struct(n0, _DELCR, 0, [_I], [[0, 1]]);
export var DeleteEventLogConfiguration = op(
  n0,
  _DELC,
  {
    [_h]: ["DELETE", "/event-log-configurations/{Id}", 200],
  },
  () => DeleteEventLogConfigurationRequest,
  () => Unit
);
