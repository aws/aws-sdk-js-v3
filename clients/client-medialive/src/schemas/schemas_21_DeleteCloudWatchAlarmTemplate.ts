// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DCWAT, _DCWATR, _ht, _Id, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteCloudWatchAlarmTemplateRequest = struct(n0, _DCWATR, 0, [_Id], [[0, 1]]);
export var DeleteCloudWatchAlarmTemplate = op(
  n0,
  _DCWAT,
  {
    [_ht]: ["DELETE", "/prod/cloudwatch-alarm-templates/{Identifier}", 204],
  },
  () => DeleteCloudWatchAlarmTemplateRequest,
  () => Unit
);
