// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _aI, _CI, _ED, _h, _LPC, _LPCI, _LPCO, _PCD, _PCL, _SD, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ListProvisionedCapacityInput = struct(n0, _LPCI, 0, [_aI], [[0, 1]]);
export var ListProvisionedCapacityOutput = struct(n0, _LPCO, 0, [_PCL], [() => ProvisionedCapacityList]);
export var ProvisionedCapacityDescription = struct(n0, _PCD, 0, [_CI, _SD, _ED], [0, 0, 0]);
export var ProvisionedCapacityList = list(n0, _PCL, 0, () => ProvisionedCapacityDescription);
export var ListProvisionedCapacity = op(
  n0,
  _LPC,
  {
    [_h]: ["GET", "/{accountId}/provisioned-capacity", 200],
  },
  () => ListProvisionedCapacityInput,
  () => ListProvisionedCapacityOutput
);
