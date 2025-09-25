// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { EntitlementNotAllowedException as __EntitlementNotAllowedException } from "../models/index";
import {
  _ACI,
  _AECI,
  _B,
  _BC,
  _Be,
  _c,
  _CBL,
  _CBLR,
  _CBLRh,
  _CC,
  _CLr,
  _CLRr,
  _CLRre,
  _CLV,
  _CLVR,
  _CLVRr,
  _CM,
  _CT,
  _CTr,
  _DR,
  _DSM,
  _E,
  _e,
  _EA,
  _EL,
  _EM,
  _En,
  _ENAE,
  _Ent,
  _Ex,
  _FT,
  _GLe,
  _GLR,
  _GLRe,
  _hE,
  _HR,
  _I,
  _IA,
  _ID,
  _KF,
  _L,
  _LA,
  _LCA,
  _LCT,
  _LFFLCO,
  _LFFLCOR,
  _LFFLCORi,
  _Li,
  _LL,
  _LLV,
  _LLVR,
  _LLVRi,
  _LM,
  _LN,
  _LOF,
  _LOFL,
  _M,
  _MC,
  _Me,
  _ML,
  _MR,
  _MTTLIM,
  _N,
  _NI,
  _NT,
  _ON,
  _ORB,
  _Ov,
  _PC,
  _PN,
  _PSKU,
  _RA,
  _ROI,
  _RT,
  _RTe,
  _S,
  _SK,
  _ST,
  _SV,
  _T,
  _U,
  _V,
  _Va,
  _Val,
  n0,
} from "./schemas_0";
import { TagList } from "./schemas_3_License";
import { EntitlementDataList } from "./schemas_10_License";

/* eslint no-var: 0 */

export var BorrowConfiguration = struct(n0, _BC, 0, [_AECI, _MTTLIM], [2, 1]);
export var CheckoutBorrowLicenseRequest = struct(
  n0,
  _CBLR,
  0,
  [_LA, _E, _DSM, _NI, _CM, _CT],
  [0, () => EntitlementDataList, 0, 0, () => MetadataList, 0]
);
export var CheckoutBorrowLicenseResponse = struct(
  n0,
  _CBLRh,
  0,
  [_LA, _LCT, _EA, _NI, _ST, _IA, _Ex, _CM],
  [0, 0, () => EntitlementDataList, 0, 0, 0, 0, () => MetadataList]
);
export var ConsumptionConfiguration = struct(
  n0,
  _CC,
  0,
  [_RTe, _PC, _BC],
  [0, () => ProvisionalConfiguration, () => BorrowConfiguration]
);
export var CreateLicenseRequest = struct(
  n0,
  _CLRr,
  0,
  [_LN, _PN, _PSKU, _I, _HR, _Va, _E, _B, _CC, _LM, _CT, _T],
  [
    0,
    0,
    0,
    () => Issuer,
    0,
    () => DatetimeRange,
    () => EntitlementList,
    0,
    () => ConsumptionConfiguration,
    () => MetadataList,
    0,
    () => TagList,
  ]
);
export var CreateLicenseResponse = struct(n0, _CLRre, 0, [_LA, _S, _V], [0, 0, 0]);
export var CreateLicenseVersionRequest = struct(
  n0,
  _CLVR,
  0,
  [_LA, _LN, _PN, _I, _HR, _Va, _LM, _E, _CC, _S, _CT, _SV],
  [
    0,
    0,
    0,
    () => Issuer,
    0,
    () => DatetimeRange,
    () => MetadataList,
    () => EntitlementList,
    () => ConsumptionConfiguration,
    0,
    0,
    0,
  ]
);
export var CreateLicenseVersionResponse = struct(n0, _CLVRr, 0, [_LA, _V, _S], [0, 0, 0]);
export var DatetimeRange = struct(n0, _DR, 0, [_Be, _En], [0, 0]);
export var Entitlement = struct(n0, _Ent, 0, [_N, _Val, _MC, _Ov, _U, _ACI], [0, 0, 1, 2, 0, 2]);
export var EntitlementNotAllowedException = error(
  n0,
  _ENAE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __EntitlementNotAllowedException
);
export var GetLicenseRequest = struct(n0, _GLR, 0, [_LA, _V], [0, 0]);
export var GetLicenseResponse = struct(n0, _GLRe, 0, [_L], [() => License]);
export var Issuer = struct(n0, _I, 0, [_N, _SK], [0, 0]);
export var IssuerDetails = struct(n0, _ID, 0, [_N, _SK, _KF], [0, 0, 0]);
export var License = struct(
  n0,
  _L,
  0,
  [_LA, _LN, _PN, _PSKU, _I, _HR, _S, _Va, _B, _E, _CC, _LM, _CTr, _V],
  [
    0,
    0,
    0,
    0,
    () => IssuerDetails,
    0,
    0,
    () => DatetimeRange,
    0,
    () => EntitlementList,
    () => ConsumptionConfiguration,
    () => MetadataList,
    0,
    0,
  ]
);
export var LicenseOperationFailure = struct(
  n0,
  _LOF,
  0,
  [_RA, _RT, _EM, _FT, _ON, _ROI, _ORB, _ML],
  [0, 0, 0, 4, 0, 0, 0, () => MetadataList]
);
export var ListFailuresForLicenseConfigurationOperationsRequest = struct(n0, _LFFLCOR, 0, [_LCA, _MR, _NT], [0, 1, 0]);
export var ListFailuresForLicenseConfigurationOperationsResponse = struct(
  n0,
  _LFFLCORi,
  0,
  [_LOFL, _NT],
  [() => LicenseOperationFailureList, 0]
);
export var ListLicenseVersionsRequest = struct(n0, _LLVR, 0, [_LA, _NT, _MR], [0, 0, 1]);
export var ListLicenseVersionsResponse = struct(n0, _LLVRi, 0, [_Li, _NT], [() => LicenseList, 0]);
export var Metadata = struct(n0, _Me, 0, [_N, _Val], [0, 0]);
export var ProvisionalConfiguration = struct(n0, _PC, 0, [_MTTLIM], [1]);
export var EntitlementList = list(n0, _EL, 0, () => Entitlement);
export var LicenseList = list(n0, _LL, 0, () => License);
export var LicenseOperationFailureList = list(n0, _LOFL, 0, () => LicenseOperationFailure);
export var MetadataList = list(n0, _ML, 0, () => Metadata);
export var CheckoutBorrowLicense = op(
  n0,
  _CBL,
  0,
  () => CheckoutBorrowLicenseRequest,
  () => CheckoutBorrowLicenseResponse
);
export var CreateLicense = op(
  n0,
  _CLr,
  0,
  () => CreateLicenseRequest,
  () => CreateLicenseResponse
);
export var CreateLicenseVersion = op(
  n0,
  _CLV,
  0,
  () => CreateLicenseVersionRequest,
  () => CreateLicenseVersionResponse
);
export var GetLicense = op(
  n0,
  _GLe,
  0,
  () => GetLicenseRequest,
  () => GetLicenseResponse
);
export var ListFailuresForLicenseConfigurationOperations = op(
  n0,
  _LFFLCO,
  0,
  () => ListFailuresForLicenseConfigurationOperationsRequest,
  () => ListFailuresForLicenseConfigurationOperationsResponse
);
export var ListLicenseVersions = op(
  n0,
  _LLV,
  0,
  () => ListLicenseVersionsRequest,
  () => ListLicenseVersionsResponse
);
