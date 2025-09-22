// smithy-typescript generated code
import { struct, struct as uni } from "@smithy/core/schema";

import { _CP, _SI, _SMCP, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var SecretsManagerCredentialsProvider = struct(n0, _SMCP, 0, [_SI], [0]);
export var CredentialsProvider = uni(n0, _CP, 0, [_SMCP], [() => SecretsManagerCredentialsProvider]);
