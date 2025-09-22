// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _eS, _eTn, _ht, _kKI, _PEC, _PECR, _PECRu, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var PutEncryptionConfigurationRequest = struct(n0, _PECR, 0, [_kKI, _eTn], [0, 0]);
export var PutEncryptionConfigurationResponse = struct(n0, _PECRu, 0, [_kKI, _eS, _eTn], [0, 0, 0]);
export var PutEncryptionConfiguration = op(
  n0,
  _PEC,
  {
    [_ht]: ["POST", "/encryptionConfiguration", 200],
  },
  () => PutEncryptionConfigurationRequest,
  () => PutEncryptionConfigurationResponse
);
