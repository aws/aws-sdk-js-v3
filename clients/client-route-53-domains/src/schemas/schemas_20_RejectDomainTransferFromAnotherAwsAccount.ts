// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DN, _OI, _RDTFAAA, _RDTFAAAR, _RDTFAAARe, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var RejectDomainTransferFromAnotherAwsAccountRequest = struct(n0, _RDTFAAAR, 0, [_DN], [0]);
export var RejectDomainTransferFromAnotherAwsAccountResponse = struct(n0, _RDTFAAARe, 0, [_OI], [0]);
export var RejectDomainTransferFromAnotherAwsAccount = op(
  n0,
  _RDTFAAA,
  0,
  () => RejectDomainTransferFromAnotherAwsAccountRequest,
  () => RejectDomainTransferFromAnotherAwsAccountResponse
);
