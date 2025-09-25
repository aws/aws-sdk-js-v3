// smithy-typescript generated code
import { map, op, struct } from "@smithy/core/schema";

import { _Co, _E, _EC, _eCv, _h, _UECp, _UECRpd, _UECRpda, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var Configuration = struct(n0, _Co, 0, [_E], [2]);
export var UpdateEventConfigurationsRequest = struct(n0, _UECRpd, 0, [_eCv], [() => EventConfigurations]);
export var UpdateEventConfigurationsResponse = struct(n0, _UECRpda, 0, [], []);
export var EventConfigurations = map(n0, _EC, 0, 0, () => Configuration);
export var UpdateEventConfigurations = op(
  n0,
  _UECp,
  {
    [_h]: ["PATCH", "/event-configurations", 200],
  },
  () => UpdateEventConfigurationsRequest,
  () => UpdateEventConfigurationsResponse
);
