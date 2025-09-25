// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _EC, _eCn, _GAC, _GACR, _GACRe, _ht, _kKA, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var EncryptionConfig = struct(n0, _EC, 0, [_kKA], [0]);
export var GetAccountConfigurationRequest = struct(n0, _GACR, 0, [], []);
export var GetAccountConfigurationResponse = struct(n0, _GACRe, 0, [_eCn], [() => EncryptionConfig]);
export var GetAccountConfiguration = op(
  n0,
  _GAC,
  {
    [_ht]: ["GET", "/accountConfiguration/get", 200],
  },
  () => GetAccountConfigurationRequest,
  () => GetAccountConfigurationResponse
);
