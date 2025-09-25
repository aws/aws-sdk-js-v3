// smithy-typescript generated code
import { op, sim, struct } from "@smithy/core/schema";

import { _AI, _DN, _OI, _P, _TDTAAA, _TDTAAAR, _TDTAAARr, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var Password = sim(n0, _P, 0, 8);
export var TransferDomainToAnotherAwsAccountRequest = struct(n0, _TDTAAAR, 0, [_DN, _AI], [0, 0]);
export var TransferDomainToAnotherAwsAccountResponse = struct(n0, _TDTAAARr, 0, [_OI, _P], [0, [() => Password, 0]]);
export var TransferDomainToAnotherAwsAccount = op(
  n0,
  _TDTAAA,
  0,
  () => TransferDomainToAnotherAwsAccountRequest,
  () => TransferDomainToAnotherAwsAccountResponse
);
