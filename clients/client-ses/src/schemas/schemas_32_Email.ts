// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _LVEA, _LVEAR, _VEA, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var ListVerifiedEmailAddressesResponse = struct(n0, _LVEAR, 0, [_VEA], [64 | 0]);
export var AddressList = 64 | 0;

export var ListVerifiedEmailAddresses = op(
  n0,
  _LVEA,
  0,
  () => Unit,
  () => ListVerifiedEmailAddressesResponse
);
