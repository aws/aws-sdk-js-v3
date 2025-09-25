// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AIc,
  _CPIP,
  _CPN,
  _DOCPe,
  _DOCPRe,
  _DOCPRes,
  _DOCPS,
  _DOCPSR,
  _DOCPSRe,
  _DSB,
  _DSKP,
  _EA,
  _ECr,
  _EMr,
  _F,
  _GOCPDS,
  _GOCPDSR,
  _GOCPDSRe,
  _L,
  _LUT,
  _NT,
  _OCP,
  _OCPA,
  _OCPDS,
  _OCPDSr,
  _OCPN,
  _OCPNr,
  _OCPr,
  _OCPS,
  _OCPSr,
  _ORDSF,
  _St,
  n0,
} from "./schemas_0";
import { ConformancePackInputParameters } from "./schemas_24_Conformance";

/* eslint no-var: 0 */

export var DescribeOrganizationConformancePacksRequest = struct(n0, _DOCPRe, 0, [_OCPNr, _L, _NT], [64 | 0, 1, 0]);
export var DescribeOrganizationConformancePacksResponse = struct(
  n0,
  _DOCPRes,
  0,
  [_OCP, _NT],
  [() => OrganizationConformancePacks, 0]
);
export var DescribeOrganizationConformancePackStatusesRequest = struct(
  n0,
  _DOCPSR,
  0,
  [_OCPNr, _L, _NT],
  [64 | 0, 1, 0]
);
export var DescribeOrganizationConformancePackStatusesResponse = struct(
  n0,
  _DOCPSRe,
  0,
  [_OCPS, _NT],
  [() => OrganizationConformancePackStatuses, 0]
);
export var GetOrganizationConformancePackDetailedStatusRequest = struct(
  n0,
  _GOCPDSR,
  0,
  [_OCPN, _F, _L, _NT],
  [0, () => OrganizationResourceDetailedStatusFilters, 1, 0]
);
export var GetOrganizationConformancePackDetailedStatusResponse = struct(
  n0,
  _GOCPDSRe,
  0,
  [_OCPDS, _NT],
  [() => OrganizationConformancePackDetailedStatuses, 0]
);
export var OrganizationConformancePack = struct(
  n0,
  _OCPr,
  0,
  [_OCPN, _OCPA, _DSB, _DSKP, _CPIP, _EA, _LUT],
  [0, 0, 0, 0, () => ConformancePackInputParameters, 64 | 0, 4]
);
export var OrganizationConformancePackDetailedStatus = struct(
  n0,
  _OCPDSr,
  0,
  [_AIc, _CPN, _St, _ECr, _EMr, _LUT],
  [0, 0, 0, 0, 0, 4]
);
export var OrganizationConformancePackStatus = struct(n0, _OCPSr, 0, [_OCPN, _St, _ECr, _EMr, _LUT], [0, 0, 0, 0, 4]);
export var OrganizationResourceDetailedStatusFilters = struct(n0, _ORDSF, 0, [_AIc, _St], [0, 0]);
export var OrganizationConformancePackDetailedStatuses = list(
  n0,
  _OCPDS,
  0,
  () => OrganizationConformancePackDetailedStatus
);
export var OrganizationConformancePackNames = 64 | 0;

export var OrganizationConformancePacks = list(n0, _OCP, 0, () => OrganizationConformancePack);
export var OrganizationConformancePackStatuses = list(n0, _OCPS, 0, () => OrganizationConformancePackStatus);
export var DescribeOrganizationConformancePacks = op(
  n0,
  _DOCPe,
  0,
  () => DescribeOrganizationConformancePacksRequest,
  () => DescribeOrganizationConformancePacksResponse
);
export var DescribeOrganizationConformancePackStatuses = op(
  n0,
  _DOCPS,
  0,
  () => DescribeOrganizationConformancePackStatusesRequest,
  () => DescribeOrganizationConformancePackStatusesResponse
);
export var GetOrganizationConformancePackDetailedStatus = op(
  n0,
  _GOCPDS,
  0,
  () => GetOrganizationConformancePackDetailedStatusRequest,
  () => GetOrganizationConformancePackDetailedStatusResponse
);
