// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _cT, _eM, _eS, _eTn, _GEC, _GECR, _GECRe, _ht, _kKI, _lMT, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetEncryptionConfigurationRequest = struct(n0, _GECR, 0, [], []);
export var GetEncryptionConfigurationResponse = struct(
  n0,
  _GECRe,
  0,
  [_kKI, _eS, _eTn, _eM, _cT, _lMT],
  [0, 0, 0, 0, 4, 4]
);
export var GetEncryptionConfiguration = op(
  n0,
  _GEC,
  {
    [_ht]: ["GET", "/encryptionConfiguration", 200],
  },
  () => GetEncryptionConfigurationRequest,
  () => GetEncryptionConfigurationResponse
);
