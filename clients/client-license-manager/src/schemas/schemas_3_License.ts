// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ADI,
  _CL,
  _CLC,
  _CLCR,
  _CLCRr,
  _CLSL,
  _D,
  _DWNF,
  _GLC,
  _GLCR,
  _GLCRe,
  _K,
  _LC,
  _LCA,
  _LCHL,
  _LCI,
  _LCTi,
  _LR,
  _LTFR,
  _LTFRR,
  _LTFRRi,
  _MRSL,
  _N,
  _OAI,
  _PIL,
  _RA,
  _S,
  _T,
  _Ta,
  _TL,
  _TR,
  _TRR,
  _TRRa,
  _Val,
  n0,
} from "./schemas_0";
import {
  AutomatedDiscoveryInformation,
  ConsumedLicenseSummaryList,
  ManagedResourceSummaryList,
} from "./schemas_4_License";
import { ProductInformationList } from "./schemas_16_License";

/* eslint no-var: 0 */

export var CreateLicenseConfigurationRequest = struct(
  n0,
  _CLCR,
  0,
  [_N, _D, _LCTi, _LC, _LCHL, _LR, _T, _DWNF, _PIL],
  [0, 0, 0, 1, 2, 64 | 0, () => TagList, 2, () => ProductInformationList]
);
export var CreateLicenseConfigurationResponse = struct(n0, _CLCRr, 0, [_LCA], [0]);
export var GetLicenseConfigurationRequest = struct(n0, _GLCR, 0, [_LCA], [0]);
export var GetLicenseConfigurationResponse = struct(
  n0,
  _GLCRe,
  0,
  [_LCI, _LCA, _N, _D, _LCTi, _LR, _LC, _LCHL, _CL, _S, _OAI, _CLSL, _MRSL, _T, _PIL, _ADI, _DWNF],
  [
    0,
    0,
    0,
    0,
    0,
    64 | 0,
    1,
    2,
    1,
    0,
    0,
    () => ConsumedLicenseSummaryList,
    () => ManagedResourceSummaryList,
    () => TagList,
    () => ProductInformationList,
    () => AutomatedDiscoveryInformation,
    2,
  ]
);
export var ListTagsForResourceRequest = struct(n0, _LTFRR, 0, [_RA], [0]);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_T], [() => TagList]);
export var Tag = struct(n0, _Ta, 0, [_K, _Val], [0, 0]);
export var TagResourceRequest = struct(n0, _TRR, 0, [_RA, _T], [0, () => TagList]);
export var TagResourceResponse = struct(n0, _TRRa, 0, [], []);
export var TagList = list(n0, _TL, 0, () => Tag);
export var CreateLicenseConfiguration = op(
  n0,
  _CLC,
  0,
  () => CreateLicenseConfigurationRequest,
  () => CreateLicenseConfigurationResponse
);
export var GetLicenseConfiguration = op(
  n0,
  _GLC,
  0,
  () => GetLicenseConfigurationRequest,
  () => GetLicenseConfigurationResponse
);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  0,
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse
);
export var TagResource = op(
  n0,
  _TR,
  0,
  () => TagResourceRequest,
  () => TagResourceResponse
);
