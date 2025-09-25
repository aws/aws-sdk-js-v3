// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CDTTAAA, _CDTTAAAR, _CDTTAAARa, _DN, _OI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var CancelDomainTransferToAnotherAwsAccountRequest = struct(n0, _CDTTAAAR, 0, [_DN], [0]);
export var CancelDomainTransferToAnotherAwsAccountResponse = struct(n0, _CDTTAAARa, 0, [_OI], [0]);
export var CancelDomainTransferToAnotherAwsAccount = op(
  n0,
  _CDTTAAA,
  0,
  () => CancelDomainTransferToAnotherAwsAccountRequest,
  () => CancelDomainTransferToAnotherAwsAccountResponse
);
