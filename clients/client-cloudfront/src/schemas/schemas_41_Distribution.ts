// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _Ac,
  _AF,
  _Ar,
  _CAe,
  _Ce,
  _CGI,
  _CTr,
  _Cu,
  _DI,
  _Do,
  _Dom,
  _DR,
  _DRL,
  _DTAF,
  _DTL,
  _DTS,
  _E,
  _ET,
  _GR,
  _GRC,
  _h,
  _Id,
  _LDT,
  _LDTBC,
  _LDTBCR,
  _LDTBCRi,
  _LDTR,
  _LDTRi,
  _LMT,
  _Loc,
  _Ma,
  _MI,
  _N,
  _NM,
  _RTe,
  _S,
  _WA,
  _WAC,
  _WACLA,
  _xN,
  LocationList,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var Certificate = struct(n0, _Ce, 0, [_Ar], [0]);
export var Customizations = struct(
  n0,
  _Cu,
  0,
  [_WA, _Ce, _GR],
  [() => WebAclCustomization, () => Certificate, [() => GeoRestrictionCustomization, 0]]
);
export var DistributionTenantAssociationFilter = struct(n0, _DTAF, 0, [_DI, _CGI], [0, 0]);
export var DistributionTenantSummary = struct(
  n0,
  _DTS,
  0,
  [_Id, _DI, _N, _Ar, _Do, _CGI, _Cu, _CTr, _LMT, _ET, _E, _S],
  [0, 0, 0, 0, () => DomainResultList, 0, [() => Customizations, 0], 4, 4, 0, 2, 0]
);
export var DomainResult = struct(n0, _DR, 0, [_Dom, _S], [0, 0]);
export var GeoRestrictionCustomization = struct(n0, _GRC, 0, [_RTe, _Loc], [0, [() => LocationList, 0]]);
export var ListDistributionTenantsByCustomizationRequest = struct(
  n0,
  _LDTBCR,
  0,
  [_WACLA, _CAe, _Ma, _MI],
  [0, 0, 0, 1]
);
export var ListDistributionTenantsByCustomizationResult = struct(
  n0,
  _LDTBCRi,
  0,
  [_NM, _DTL],
  [0, [() => DistributionTenantList, 0]]
);
export var ListDistributionTenantsRequest = struct(
  n0,
  _LDTR,
  0,
  [_AF, _Ma, _MI],
  [() => DistributionTenantAssociationFilter, 0, 1]
);
export var ListDistributionTenantsResult = struct(n0, _LDTRi, 0, [_NM, _DTL], [0, [() => DistributionTenantList, 0]]);
export var WebAclCustomization = struct(n0, _WAC, 0, [_Ac, _Ar], [0, 0]);
export var DistributionTenantList = list(n0, _DTL, 0, [
  () => DistributionTenantSummary,
  {
    [_xN]: _DTS,
  },
]);
export var DomainResultList = list(n0, _DRL, 0, () => DomainResult);
export var ListDistributionTenants = op(
  n0,
  _LDT,
  {
    [_h]: ["POST", "/2020-05-31/distribution-tenants", 200],
  },
  () => ListDistributionTenantsRequest,
  () => ListDistributionTenantsResult
);
export var ListDistributionTenantsByCustomization = op(
  n0,
  _LDTBC,
  {
    [_h]: ["POST", "/2020-05-31/distribution-tenants-by-customization", 200],
  },
  () => ListDistributionTenantsByCustomizationRequest,
  () => ListDistributionTenantsByCustomizationResult
);
