// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _eTn, _h, _kARA, _kKA, _UEC, _UECR, _UECRp, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateEncryptionConfigurationRequest = struct(n0, _UECR, 0, [_eTn, _kKA, _kARA], [0, 0, 0]);
export var UpdateEncryptionConfigurationResponse = struct(n0, _UECRp, 0, [], []);
export var UpdateEncryptionConfiguration = op(
  n0,
  _UEC,
  {
    [_h]: ["PATCH", "/encryption-configuration", 200],
  },
  () => UpdateEncryptionConfigurationRequest,
  () => UpdateEncryptionConfigurationResponse
);
