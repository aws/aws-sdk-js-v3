// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _AA, _AAd, _AAS, _AASL, _DA, _LAAFO, _LAAFOR, _LAAFORi, _MR, _NT, _S, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var AdminAccountSummary = struct(n0, _AAS, 0, [_AA, _DA, _S], [0, 2, 0]);
export var ListAdminAccountsForOrganizationRequest = struct(n0, _LAAFOR, 0, [_NT, _MR], [0, 1]);
export var ListAdminAccountsForOrganizationResponse = struct(
  n0,
  _LAAFORi,
  0,
  [_AAd, _NT],
  [() => AdminAccountSummaryList, 0]
);
export var AdminAccountSummaryList = list(n0, _AASL, 0, () => AdminAccountSummary);
export var ListAdminAccountsForOrganization = op(
  n0,
  _LAAFO,
  0,
  () => ListAdminAccountsForOrganizationRequest,
  () => ListAdminAccountsForOrganizationResponse
);
