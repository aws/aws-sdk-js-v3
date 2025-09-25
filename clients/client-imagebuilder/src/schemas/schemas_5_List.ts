// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _a,
  _bN,
  _bT,
  _CRS,
  _CRSL,
  _cRSL,
  _cTon,
  _CV,
  _CVL,
  _cVL,
  _d,
  _dC,
  _DCS,
  _DCSL,
  _dCSL,
  _dLR,
  _dT,
  _dU,
  _eR,
  _fil,
  _FL,
  _ht,
  _ICS,
  _ICSL,
  _iCSL,
  _iD,
  _iPA,
  _IPLm,
  _iPLm,
  _iPN,
  _IRS,
  _IRSL,
  _iRSL,
  _iS,
  _ISL,
  _iSL,
  _ISm,
  _iT,
  _IV,
  _iVA,
  _IVL,
  _iVL,
  _LC,
  _LCR,
  _LCRi,
  _LCRis,
  _LCRR,
  _LCRRi,
  _LDC,
  _LDCR,
  _LDCRi,
  _lEI,
  _LI,
  _LIBV,
  _LIBVR,
  _LIBVRi,
  _LIC,
  _LICR,
  _LICRi,
  _LIPI,
  _LIPi,
  _LIPIR,
  _LIPIRi,
  _LIPRis,
  _LIPRist,
  _LIR,
  _LIRi,
  _LIRis,
  _LIRR,
  _LIRRi,
  _LLP,
  _LLPR,
  _LLPRi,
  _LPS,
  _LPSL,
  _lPSL,
  _LW,
  _LWR,
  _LWRi,
  _mR,
  _n,
  _nT,
  _o,
  _oR,
  _oV,
  _p,
  _pC,
  _pI,
  _pl,
  _reg,
  _rI,
  _rT,
  _rTe,
  _s,
  _sOV,
  _st,
  _t,
  _ta,
  _v,
  _WV,
  _WVL,
  _wVL,
  n0,
} from "./schemas_0";
import { Filter } from "./schemas_1_List";
import { ImagePipeline } from "./schemas_7_Image";
import { ImageState, OutputResources } from "./schemas_9_List";
import { Placement } from "./schemas_12_Infrastructure";
import { ProductCodeList } from "./schemas_17_Image";

/* eslint no-var: 0 */

export var ComponentVersion = struct(
  n0,
  _CV,
  0,
  [_a, _n, _v, _d, _p, _sOV, _t, _o, _dC, _st, _pC],
  [0, 0, 0, 0, 0, 64 | 0, 0, 0, 0, 0, () => ProductCodeList]
);
export var ContainerRecipeSummary = struct(
  n0,
  _CRS,
  0,
  [_a, _cTon, _n, _p, _o, _pI, _dC, _ta],
  [0, 0, 0, 0, 0, 0, 0, 128 | 0]
);
export var DistributionConfigurationSummary = struct(
  n0,
  _DCS,
  0,
  [_a, _n, _d, _dC, _dU, _ta, _reg],
  [0, 0, 0, 0, 0, 128 | 0, 64 | 0]
);
export var ImageRecipeSummary = struct(n0, _IRS, 0, [_a, _n, _p, _o, _pI, _dC, _ta], [0, 0, 0, 0, 0, 0, 128 | 0]);
export var ImageSummary = struct(
  n0,
  _ISm,
  0,
  [_a, _n, _t, _v, _p, _oV, _s, _o, _dC, _oR, _ta, _bT, _iS, _dT, _lEI],
  [0, 0, 0, 0, 0, 0, () => ImageState, 0, 0, () => OutputResources, 128 | 0, 0, 0, 4, 0]
);
export var ImageVersion = struct(
  n0,
  _IV,
  0,
  [_a, _n, _t, _v, _p, _oV, _o, _dC, _bT, _iS],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
);
export var InfrastructureConfigurationSummary = struct(
  n0,
  _ICS,
  0,
  [_a, _n, _d, _dC, _dU, _rT, _ta, _iT, _iPN, _pl],
  [0, 0, 0, 0, 0, 128 | 0, 128 | 0, 64 | 0, 0, () => Placement]
);
export var LifecyclePolicySummary = struct(
  n0,
  _LPS,
  0,
  [_a, _n, _d, _st, _eR, _rTe, _dC, _dU, _dLR, _ta],
  [0, 0, 0, 0, 0, 0, 4, 4, 4, 128 | 0]
);
export var ListComponentsRequest = struct(n0, _LCR, 0, [_o, _fil, _bN, _mR, _nT], [0, () => FilterList, 2, 1, 0]);
export var ListComponentsResponse = struct(n0, _LCRi, 0, [_rI, _cVL, _nT], [0, () => ComponentVersionList, 0]);
export var ListContainerRecipesRequest = struct(n0, _LCRR, 0, [_o, _fil, _mR, _nT], [0, () => FilterList, 1, 0]);
export var ListContainerRecipesResponse = struct(
  n0,
  _LCRRi,
  0,
  [_rI, _cRSL, _nT],
  [0, () => ContainerRecipeSummaryList, 0]
);
export var ListDistributionConfigurationsRequest = struct(n0, _LDCR, 0, [_fil, _mR, _nT], [() => FilterList, 1, 0]);
export var ListDistributionConfigurationsResponse = struct(
  n0,
  _LDCRi,
  0,
  [_rI, _dCSL, _nT],
  [0, () => DistributionConfigurationSummaryList, 0]
);
export var ListImageBuildVersionsRequest = struct(n0, _LIBVR, 0, [_iVA, _fil, _mR, _nT], [0, () => FilterList, 1, 0]);
export var ListImageBuildVersionsResponse = struct(n0, _LIBVRi, 0, [_rI, _iSL, _nT], [0, () => ImageSummaryList, 0]);
export var ListImagePipelineImagesRequest = struct(n0, _LIPIR, 0, [_iPA, _fil, _mR, _nT], [0, () => FilterList, 1, 0]);
export var ListImagePipelineImagesResponse = struct(n0, _LIPIRi, 0, [_rI, _iSL, _nT], [0, () => ImageSummaryList, 0]);
export var ListImagePipelinesRequest = struct(n0, _LIPRis, 0, [_fil, _mR, _nT], [() => FilterList, 1, 0]);
export var ListImagePipelinesResponse = struct(n0, _LIPRist, 0, [_rI, _iPLm, _nT], [0, () => ImagePipelineList, 0]);
export var ListImageRecipesRequest = struct(n0, _LIRR, 0, [_o, _fil, _mR, _nT], [0, () => FilterList, 1, 0]);
export var ListImageRecipesResponse = struct(n0, _LIRRi, 0, [_rI, _iRSL, _nT], [0, () => ImageRecipeSummaryList, 0]);
export var ListImagesRequest = struct(n0, _LIR, 0, [_o, _fil, _bN, _mR, _nT, _iD], [0, () => FilterList, 2, 1, 0, 2]);
export var ListImagesResponse = struct(n0, _LIRi, 0, [_rI, _iVL, _nT], [0, () => ImageVersionList, 0]);
export var ListInfrastructureConfigurationsRequest = struct(n0, _LICR, 0, [_fil, _mR, _nT], [() => FilterList, 1, 0]);
export var ListInfrastructureConfigurationsResponse = struct(
  n0,
  _LICRi,
  0,
  [_rI, _iCSL, _nT],
  [0, () => InfrastructureConfigurationSummaryList, 0]
);
export var ListLifecyclePoliciesRequest = struct(n0, _LLPR, 0, [_fil, _mR, _nT], [() => FilterList, 1, 0]);
export var ListLifecyclePoliciesResponse = struct(n0, _LLPRi, 0, [_lPSL, _nT], [() => LifecyclePolicySummaryList, 0]);
export var ListWorkflowsRequest = struct(n0, _LWR, 0, [_o, _fil, _bN, _mR, _nT], [0, () => FilterList, 2, 1, 0]);
export var ListWorkflowsResponse = struct(n0, _LWRi, 0, [_wVL, _nT], [() => WorkflowVersionList, 0]);
export var WorkflowVersion = struct(n0, _WV, 0, [_a, _n, _v, _d, _t, _o, _dC], [0, 0, 0, 0, 0, 0, 0]);
export var ComponentVersionList = list(n0, _CVL, 0, () => ComponentVersion);
export var ContainerRecipeSummaryList = list(n0, _CRSL, 0, () => ContainerRecipeSummary);
export var DistributionConfigurationSummaryList = list(n0, _DCSL, 0, () => DistributionConfigurationSummary);
export var FilterList = list(n0, _FL, 0, () => Filter);
export var ImagePipelineList = list(n0, _IPLm, 0, () => ImagePipeline);
export var ImageRecipeSummaryList = list(n0, _IRSL, 0, () => ImageRecipeSummary);
export var ImageSummaryList = list(n0, _ISL, 0, () => ImageSummary);
export var ImageVersionList = list(n0, _IVL, 0, () => ImageVersion);
export var InfrastructureConfigurationSummaryList = list(n0, _ICSL, 0, () => InfrastructureConfigurationSummary);
export var LifecyclePolicySummaryList = list(n0, _LPSL, 0, () => LifecyclePolicySummary);
export var RegionList = 64 | 0;

export var WorkflowVersionList = list(n0, _WVL, 0, () => WorkflowVersion);
export var ListComponents = op(
  n0,
  _LC,
  {
    [_ht]: ["POST", "/ListComponents", 200],
  },
  () => ListComponentsRequest,
  () => ListComponentsResponse
);
export var ListContainerRecipes = op(
  n0,
  _LCRis,
  {
    [_ht]: ["POST", "/ListContainerRecipes", 200],
  },
  () => ListContainerRecipesRequest,
  () => ListContainerRecipesResponse
);
export var ListDistributionConfigurations = op(
  n0,
  _LDC,
  {
    [_ht]: ["POST", "/ListDistributionConfigurations", 200],
  },
  () => ListDistributionConfigurationsRequest,
  () => ListDistributionConfigurationsResponse
);
export var ListImageBuildVersions = op(
  n0,
  _LIBV,
  {
    [_ht]: ["POST", "/ListImageBuildVersions", 200],
  },
  () => ListImageBuildVersionsRequest,
  () => ListImageBuildVersionsResponse
);
export var ListImagePipelineImages = op(
  n0,
  _LIPI,
  {
    [_ht]: ["POST", "/ListImagePipelineImages", 200],
  },
  () => ListImagePipelineImagesRequest,
  () => ListImagePipelineImagesResponse
);
export var ListImagePipelines = op(
  n0,
  _LIPi,
  {
    [_ht]: ["POST", "/ListImagePipelines", 200],
  },
  () => ListImagePipelinesRequest,
  () => ListImagePipelinesResponse
);
export var ListImageRecipes = op(
  n0,
  _LIRis,
  {
    [_ht]: ["POST", "/ListImageRecipes", 200],
  },
  () => ListImageRecipesRequest,
  () => ListImageRecipesResponse
);
export var ListImages = op(
  n0,
  _LI,
  {
    [_ht]: ["POST", "/ListImages", 200],
  },
  () => ListImagesRequest,
  () => ListImagesResponse
);
export var ListInfrastructureConfigurations = op(
  n0,
  _LIC,
  {
    [_ht]: ["POST", "/ListInfrastructureConfigurations", 200],
  },
  () => ListInfrastructureConfigurationsRequest,
  () => ListInfrastructureConfigurationsResponse
);
export var ListLifecyclePolicies = op(
  n0,
  _LLP,
  {
    [_ht]: ["POST", "/ListLifecyclePolicies", 200],
  },
  () => ListLifecyclePoliciesRequest,
  () => ListLifecyclePoliciesResponse
);
export var ListWorkflows = op(
  n0,
  _LW,
  {
    [_ht]: ["POST", "/ListWorkflows", 200],
  },
  () => ListWorkflowsRequest,
  () => ListWorkflowsResponse
);
