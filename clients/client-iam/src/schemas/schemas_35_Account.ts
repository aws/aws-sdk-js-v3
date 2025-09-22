// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AA, _AAc, _CAA, _CAAR, _DAA, _DAAR, _IT, _LAA, _LAAR, _LAARi, _Ma, _MI, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var CreateAccountAliasRequest = struct(n0, _CAAR, 0, [_AA], [0]);
export var DeleteAccountAliasRequest = struct(n0, _DAAR, 0, [_AA], [0]);
export var ListAccountAliasesRequest = struct(n0, _LAAR, 0, [_Ma, _MI], [0, 1]);
export var ListAccountAliasesResponse = struct(n0, _LAARi, 0, [_AAc, _IT, _Ma], [64 | 0, 2, 0]);
export var accountAliasListType = 64 | 0;

export var CreateAccountAlias = op(
  n0,
  _CAA,
  0,
  () => CreateAccountAliasRequest,
  () => Unit
);
export var DeleteAccountAlias = op(
  n0,
  _DAA,
  0,
  () => DeleteAccountAliasRequest,
  () => Unit
);
export var ListAccountAliases = op(
  n0,
  _LAA,
  0,
  () => ListAccountAliasesRequest,
  () => ListAccountAliasesResponse
);
