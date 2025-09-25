// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DAAC, _DAACR, _DAACRe, _dSA, _h, _hQ, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteAccountAuditConfigurationRequest = struct(
  n0,
  _DAACR,
  0,
  [_dSA],
  [
    [
      2,
      {
        [_hQ]: _dSA,
      },
    ],
  ]
);
export var DeleteAccountAuditConfigurationResponse = struct(n0, _DAACRe, 0, [], []);
export var DeleteAccountAuditConfiguration = op(
  n0,
  _DAAC,
  {
    [_h]: ["DELETE", "/audit/configuration", 200],
  },
  () => DeleteAccountAuditConfigurationRequest,
  () => DeleteAccountAuditConfigurationResponse
);
