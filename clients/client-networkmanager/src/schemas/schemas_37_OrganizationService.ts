// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _Ac,
  _AIc,
  _AS,
  _ASL,
  _h,
  _hQ,
  _LOSAS,
  _LOSASR,
  _LOSASRi,
  _MR,
  _mR,
  _NT,
  _nT,
  _OASAS,
  _OI,
  _OS,
  _SLRDS,
  _SOSAU,
  _SOSAUR,
  _SOSAURt,
  _xN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AccountStatus = struct(n0, _AS, 0, [_AIc, _SLRDS], [0, 0]);
export var ListOrganizationServiceAccessStatusRequest = struct(
  n0,
  _LOSASR,
  0,
  [_MR, _NT],
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
export var ListOrganizationServiceAccessStatusResponse = struct(
  n0,
  _LOSASRi,
  0,
  [_OS, _NT],
  [[() => OrganizationStatus, 0], 0]
);
export var OrganizationStatus = struct(
  n0,
  _OS,
  0,
  [_OI, _OASAS, _SLRDS, _ASL],
  [
    0,
    0,
    0,
    [
      () => AccountStatusList,
      {
        [_xN]: _OS,
      },
    ],
  ]
);
export var StartOrganizationServiceAccessUpdateRequest = struct(n0, _SOSAUR, 0, [_Ac], [0]);
export var StartOrganizationServiceAccessUpdateResponse = struct(
  n0,
  _SOSAURt,
  0,
  [_OS],
  [[() => OrganizationStatus, 0]]
);
export var AccountStatusList = list(n0, _ASL, 0, () => AccountStatus);
export var ListOrganizationServiceAccessStatus = op(
  n0,
  _LOSAS,
  {
    [_h]: ["GET", "/organizations/service-access", 200],
  },
  () => ListOrganizationServiceAccessStatusRequest,
  () => ListOrganizationServiceAccessStatusResponse
);
export var StartOrganizationServiceAccessUpdate = op(
  n0,
  _SOSAU,
  {
    [_h]: ["POST", "/organizations/service-access", 200],
  },
  () => StartOrganizationServiceAccessUpdateRequest,
  () => StartOrganizationServiceAccessUpdateResponse
);
