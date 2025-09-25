// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _Ac,
  _ac,
  _CAr,
  _DMD,
  _DML,
  _DMo,
  _DN,
  _GDMS,
  _GDMSR,
  _GDMSRe,
  _h,
  _hQ,
  _LDM,
  _LDMR,
  _LDMRi,
  _MI,
  _mI,
  _MR,
  _mR,
  _NI,
  _NT,
  _nT,
  _S,
  _s,
  _SDM,
  _SDMR,
  _SDMRt,
  _SM,
  _UA,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DomainMaintenanceDetails = struct(
  n0,
  _DMD,
  0,
  [_MI, _DN, _Ac, _NI, _S, _SM, _CAr, _UA],
  [0, 0, 0, 0, 0, 0, 4, 4]
);
export var GetDomainMaintenanceStatusRequest = struct(
  n0,
  _GDMSR,
  0,
  [_DN, _MI],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _mI,
      },
    ],
  ]
);
export var GetDomainMaintenanceStatusResponse = struct(
  n0,
  _GDMSRe,
  0,
  [_S, _SM, _NI, _Ac, _CAr, _UA],
  [0, 0, 0, 0, 4, 4]
);
export var ListDomainMaintenancesRequest = struct(
  n0,
  _LDMR,
  0,
  [_DN, _Ac, _S, _MR, _NT],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _ac,
      },
    ],
    [
      0,
      {
        [_hQ]: _s,
      },
    ],
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
export var ListDomainMaintenancesResponse = struct(n0, _LDMRi, 0, [_DMo, _NT], [() => DomainMaintenanceList, 0]);
export var StartDomainMaintenanceRequest = struct(n0, _SDMR, 0, [_DN, _Ac, _NI], [[0, 1], 0, 0]);
export var StartDomainMaintenanceResponse = struct(n0, _SDMRt, 0, [_MI], [0]);
export var DomainMaintenanceList = list(n0, _DML, 0, () => DomainMaintenanceDetails);
export var GetDomainMaintenanceStatus = op(
  n0,
  _GDMS,
  {
    [_h]: ["GET", "/2021-01-01/opensearch/domain/{DomainName}/domainMaintenance", 200],
  },
  () => GetDomainMaintenanceStatusRequest,
  () => GetDomainMaintenanceStatusResponse
);
export var ListDomainMaintenances = op(
  n0,
  _LDM,
  {
    [_h]: ["GET", "/2021-01-01/opensearch/domain/{DomainName}/domainMaintenances", 200],
  },
  () => ListDomainMaintenancesRequest,
  () => ListDomainMaintenancesResponse
);
export var StartDomainMaintenance = op(
  n0,
  _SDM,
  {
    [_h]: ["POST", "/2021-01-01/opensearch/domain/{DomainName}/domainMaintenance", 200],
  },
  () => StartDomainMaintenanceRequest,
  () => StartDomainMaintenanceResponse
);
