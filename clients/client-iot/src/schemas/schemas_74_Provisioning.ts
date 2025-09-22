// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _cD,
  _d,
  _en,
  _h,
  _hQ,
  _lMD,
  _LPTi,
  _LPTRis,
  _LPTRist,
  _mR,
  _nT,
  _PTL,
  _PTS,
  _tAem,
  _te,
  _tNe,
  _ty,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ListProvisioningTemplatesRequest = struct(
  n0,
  _LPTRis,
  0,
  [_mR, _nT],
  [
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
  ]
);
export var ListProvisioningTemplatesResponse = struct(
  n0,
  _LPTRist,
  0,
  [_te, _nT],
  [() => ProvisioningTemplateListing, 0]
);
export var ProvisioningTemplateSummary = struct(
  n0,
  _PTS,
  0,
  [_tAem, _tNe, _d, _cD, _lMD, _en, _ty],
  [0, 0, 0, 4, 4, 2, 0]
);
export var ProvisioningTemplateListing = list(n0, _PTL, 0, () => ProvisioningTemplateSummary);
export var ListProvisioningTemplates = op(
  n0,
  _LPTi,
  {
    [_h]: ["GET", "/provisioning-templates", 200],
  },
  () => ListProvisioningTemplatesRequest,
  () => ListProvisioningTemplatesResponse
);
