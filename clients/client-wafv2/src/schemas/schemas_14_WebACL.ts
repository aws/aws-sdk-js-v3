// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _APIK, _CAPIK, _CAPIKR, _CAPIKRr, _Sc, _TD, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var CreateAPIKeyRequest = struct(n0, _CAPIKR, 0, [_Sc, _TD], [0, 64 | 0]);
export var CreateAPIKeyResponse = struct(n0, _CAPIKRr, 0, [_APIK], [0]);
export var APIKeyTokenDomains = 64 | 0;

export var TokenDomains = 64 | 0;

export var CreateAPIKey = op(
  n0,
  _CAPIK,
  0,
  () => CreateAPIKeyRequest,
  () => CreateAPIKeyResponse
);
