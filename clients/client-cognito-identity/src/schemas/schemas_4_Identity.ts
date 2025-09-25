// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _IPd, _IPI, _IPL, _IPN, _IPSD, _LIP, _LIPI, _LIPR, _MR, _NT, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var IdentityPoolShortDescription = struct(n0, _IPSD, 0, [_IPI, _IPN], [0, 0]);
export var ListIdentityPoolsInput = struct(n0, _LIPI, 0, [_MR, _NT], [1, 0]);
export var ListIdentityPoolsResponse = struct(n0, _LIPR, 0, [_IPd, _NT], [() => IdentityPoolsList, 0]);
export var IdentityPoolsList = list(n0, _IPL, 0, () => IdentityPoolShortDescription);
export var ListIdentityPools = op(
  n0,
  _LIP,
  0,
  () => ListIdentityPoolsInput,
  () => ListIdentityPoolsResponse
);
