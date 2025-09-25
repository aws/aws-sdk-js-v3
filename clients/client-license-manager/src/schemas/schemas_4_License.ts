// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AAS,
  _AC,
  _ADI,
  _ATs,
  _CL,
  _CLS,
  _CLSL,
  _DLC,
  _ET,
  _GLCT,
  _GLCTR,
  _GLCTRe,
  _LAFLC,
  _LAFLCR,
  _LAFLCRi,
  _LCA,
  _LCAi,
  _LCAic,
  _LCTI,
  _LCTic,
  _LRT,
  _MR,
  _MRS,
  _MRSL,
  _NT,
  _RA,
  _ROI,
  _RT,
  _S,
  _SLC,
  _SM,
  _STt,
  n0,
} from "./schemas_0";
import { LicenseConversionContext } from "./schemas_8_License";

/* eslint no-var: 0 */

export var AutomatedDiscoveryInformation = struct(n0, _ADI, 0, [_LRT], [4]);
export var ConsumedLicenseSummary = struct(n0, _CLS, 0, [_RT, _CL], [0, 1]);
export var GetLicenseConversionTaskRequest = struct(n0, _GLCTR, 0, [_LCTI], [0]);
export var GetLicenseConversionTaskResponse = struct(
  n0,
  _GLCTRe,
  0,
  [_LCTI, _RA, _SLC, _DLC, _SM, _S, _STt, _LCTic, _ET],
  [0, 0, () => LicenseConversionContext, () => LicenseConversionContext, 0, 0, 4, 4, 4]
);
export var LicenseConfigurationAssociation = struct(n0, _LCAi, 0, [_RA, _RT, _ROI, _ATs, _AAS], [0, 0, 0, 4, 0]);
export var ListAssociationsForLicenseConfigurationRequest = struct(n0, _LAFLCR, 0, [_LCA, _MR, _NT], [0, 1, 0]);
export var ListAssociationsForLicenseConfigurationResponse = struct(
  n0,
  _LAFLCRi,
  0,
  [_LCAic, _NT],
  [() => LicenseConfigurationAssociations, 0]
);
export var ManagedResourceSummary = struct(n0, _MRS, 0, [_RT, _AC], [0, 1]);
export var ConsumedLicenseSummaryList = list(n0, _CLSL, 0, () => ConsumedLicenseSummary);
export var LicenseConfigurationAssociations = list(n0, _LCAic, 0, () => LicenseConfigurationAssociation);
export var ManagedResourceSummaryList = list(n0, _MRSL, 0, () => ManagedResourceSummary);
export var GetLicenseConversionTask = op(
  n0,
  _GLCT,
  0,
  () => GetLicenseConversionTaskRequest,
  () => GetLicenseConversionTaskResponse
);
export var ListAssociationsForLicenseConfiguration = op(
  n0,
  _LAFLC,
  0,
  () => ListAssociationsForLicenseConfigurationRequest,
  () => ListAssociationsForLicenseConfigurationResponse
);
