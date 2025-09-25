// smithy-typescript generated code
import { list, struct } from "@smithy/core/schema";

import { _CNPE, _CNPEL, _EC, _M, _Pa, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var CoreNetworkPolicyError = struct(n0, _CNPE, 0, [_EC, _M, _Pa], [0, 0, 0]);
export var CoreNetworkPolicyErrorList = list(n0, _CNPEL, 0, () => CoreNetworkPolicyError);
