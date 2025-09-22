// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DCWATG, _DCWATGR, _ht, _Id, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteCloudWatchAlarmTemplateGroupRequest = struct(n0, _DCWATGR, 0, [_Id], [[0, 1]]);
export var DeleteCloudWatchAlarmTemplateGroup = op(
  n0,
  _DCWATG,
  {
    [_ht]: ["DELETE", "/prod/cloudwatch-alarm-template-groups/{Identifier}", 204],
  },
  () => DeleteCloudWatchAlarmTemplateGroupRequest,
  () => Unit
);
