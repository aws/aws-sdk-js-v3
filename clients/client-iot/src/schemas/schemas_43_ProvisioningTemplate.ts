// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _cD,
  _h,
  _hQ,
  _iDV,
  _LPTVi,
  _LPTVRis,
  _LPTVRist,
  _mR,
  _nT,
  _PTVL,
  _PTVS,
  _tNe,
  _ver,
  _vIe,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ListProvisioningTemplateVersionsRequest = struct(
  n0,
  _LPTVRis,
  0,
  [_tNe, _mR, _nT],
  [
    [0, 1],
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
export var ListProvisioningTemplateVersionsResponse = struct(
  n0,
  _LPTVRist,
  0,
  [_ver, _nT],
  [() => ProvisioningTemplateVersionListing, 0]
);
export var ProvisioningTemplateVersionSummary = struct(n0, _PTVS, 0, [_vIe, _cD, _iDV], [1, 4, 2]);
export var ProvisioningTemplateVersionListing = list(n0, _PTVL, 0, () => ProvisioningTemplateVersionSummary);
export var ListProvisioningTemplateVersions = op(
  n0,
  _LPTVi,
  {
    [_h]: ["GET", "/provisioning-templates/{templateName}/versions", 200],
  },
  () => ListProvisioningTemplateVersionsRequest,
  () => ListProvisioningTemplateVersionsResponse
);
