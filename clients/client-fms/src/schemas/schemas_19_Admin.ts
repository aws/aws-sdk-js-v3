// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AAd, _LAMA, _LAMAR, _LAMARi, _MR, _NT, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ListAdminsManagingAccountRequest = struct(n0, _LAMAR, 0, [_NT, _MR], [0, 1]);
export var ListAdminsManagingAccountResponse = struct(n0, _LAMARi, 0, [_AAd, _NT], [64 | 0, 0]);
export var AccountIdList = 64 | 0;

export var ListAdminsManagingAccount = op(
  n0,
  _LAMA,
  0,
  () => ListAdminsManagingAccountRequest,
  () => ListAdminsManagingAccountResponse
);
