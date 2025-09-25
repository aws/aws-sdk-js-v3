// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aE, _h, _jN, _UOC, _UOCR, _UOCRp, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateOrganizationConfigurationRequest = struct(
  n0,
  _UOCR,
  0,
  [_aE],
  [
    [
      2,
      {
        [_jN]: _aE,
      },
    ],
  ]
);
export var UpdateOrganizationConfigurationResponse = struct(n0, _UOCRp, 0, [], []);
export var UpdateOrganizationConfiguration = op(
  n0,
  _UOC,
  {
    [_h]: ["PATCH", "/admin/configuration", 200],
  },
  () => UpdateOrganizationConfigurationRequest,
  () => UpdateOrganizationConfigurationResponse
);
