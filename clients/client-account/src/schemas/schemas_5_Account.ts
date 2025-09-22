// smithy-typescript generated code
import { op, sim, struct } from "@smithy/core/schema";

import { _ACD, _AI, _AN, _GAI, _GAIR, _GAIRe, _h, _PAN, _PANR, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var AccountName = sim(n0, _AN, 0, 8);
export var GetAccountInformationRequest = struct(n0, _GAIR, 0, [_AI], [0]);
export var GetAccountInformationResponse = struct(n0, _GAIRe, 0, [_AI, _AN, _ACD], [0, [() => AccountName, 0], 5]);
export var PutAccountNameRequest = struct(n0, _PANR, 0, [_AN, _AI], [[() => AccountName, 0], 0]);
export var GetAccountInformation = op(
  n0,
  _GAI,
  {
    [_h]: ["POST", "/getAccountInformation", 200],
  },
  () => GetAccountInformationRequest,
  () => GetAccountInformationResponse
);
export var PutAccountName = op(
  n0,
  _PAN,
  {
    [_h]: ["POST", "/putAccountName", 200],
  },
  () => PutAccountNameRequest,
  () => Unit
);
