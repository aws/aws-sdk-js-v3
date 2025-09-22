// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  ResourceAlreadyExistsException as __ResourceAlreadyExistsException,
  ServiceQuotaExceededException as __ServiceQuotaExceededException,
} from "../models/index";
import {
  _aIC,
  _bDM,
  _c,
  _CCRR,
  _CCRre,
  _CCRRr,
  _cD,
  _CDCR,
  _CDCr,
  _CDCRr,
  _CI,
  _CICr,
  _CICRr,
  _CICRre,
  _CIP,
  _CIPR,
  _CIPRr,
  _CIR,
  _CIRR,
  _CIRr,
  _CIRre,
  _CIRRr,
  _CLP,
  _CLPR,
  _CLPRr,
  _co,
  _cRA,
  _cT,
  _cTon,
  _CW,
  _CWR,
  _CWRr,
  _d,
  _da,
  _dCA,
  _di,
  _dTD,
  _dTU,
  _e,
  _eIME,
  _eR,
  _hE,
  _ht,
  _iBVA,
  _iC,
  _iCA,
  _iMO,
  _iOVO,
  _iPA,
  _iPN,
  _iRA,
  _iSC,
  _iT,
  _iTC,
  _kKI,
  _kP,
  _l,
  _lPA,
  _m,
  _n,
  _pD,
  _pI,
  _pl,
  _pO,
  _RAEE,
  _rI,
  _rS,
  _rT,
  _rTe,
  _sc,
  _sGI,
  _sI,
  _SQEE,
  _st,
  _sTA,
  _sV,
  _t,
  _ta,
  _tIOF,
  _tR,
  _u,
  _w,
  _wBVA,
  _wD,
  n0,
} from "./schemas_0";
import { DistributionList, LifecyclePolicyDetails, LifecyclePolicyResourceSelection } from "./schemas_4_Policy";
import {
  ImageScanningConfiguration,
  ImageTestsConfiguration,
  Schedule,
  WorkflowConfigurationList,
} from "./schemas_7_Image";
import { InstanceMetadataOptions, Logging, Placement } from "./schemas_12_Infrastructure";
import {
  AdditionalInstanceConfiguration,
  ComponentConfigurationList,
  InstanceBlockDeviceMappings,
  InstanceConfiguration,
} from "./schemas_13_Recipe";
import { TargetContainerRepository } from "./schemas_34_Configuration";

/* eslint no-var: 0 */

export var CreateContainerRecipeRequest = struct(
  n0,
  _CCRR,
  0,
  [_cTon, _n, _d, _sV, _co, _iC, _dTD, _dTU, _pO, _iOVO, _pI, _ta, _wD, _tR, _kKI, _cT],
  [
    0,
    0,
    0,
    0,
    () => ComponentConfigurationList,
    () => InstanceConfiguration,
    0,
    0,
    0,
    0,
    0,
    128 | 0,
    0,
    () => TargetContainerRepository,
    0,
    [0, 4],
  ]
);
export var CreateContainerRecipeResponse = struct(n0, _CCRRr, 0, [_rI, _cT, _cRA], [0, 0, 0]);
export var CreateDistributionConfigurationRequest = struct(
  n0,
  _CDCR,
  0,
  [_n, _d, _di, _ta, _cT],
  [0, 0, () => DistributionList, 128 | 0, [0, 4]]
);
export var CreateDistributionConfigurationResponse = struct(n0, _CDCRr, 0, [_rI, _cT, _dCA], [0, 0, 0]);
export var CreateImagePipelineRequest = struct(
  n0,
  _CIPR,
  0,
  [_n, _d, _iRA, _cRA, _iCA, _dCA, _iTC, _eIME, _sc, _st, _ta, _cT, _iSC, _w, _eR],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    () => ImageTestsConfiguration,
    2,
    () => Schedule,
    0,
    128 | 0,
    [0, 4],
    () => ImageScanningConfiguration,
    () => WorkflowConfigurationList,
    0,
  ]
);
export var CreateImagePipelineResponse = struct(n0, _CIPRr, 0, [_rI, _cT, _iPA], [0, 0, 0]);
export var CreateImageRecipeRequest = struct(
  n0,
  _CIRR,
  0,
  [_n, _d, _sV, _co, _pI, _bDM, _ta, _wD, _aIC, _cT],
  [
    0,
    0,
    0,
    () => ComponentConfigurationList,
    0,
    () => InstanceBlockDeviceMappings,
    128 | 0,
    0,
    () => AdditionalInstanceConfiguration,
    [0, 4],
  ]
);
export var CreateImageRecipeResponse = struct(n0, _CIRRr, 0, [_rI, _cT, _iRA], [0, 0, 0]);
export var CreateImageRequest = struct(
  n0,
  _CIR,
  0,
  [_iRA, _cRA, _dCA, _iCA, _iTC, _eIME, _ta, _cT, _iSC, _w, _eR],
  [
    0,
    0,
    0,
    0,
    () => ImageTestsConfiguration,
    2,
    128 | 0,
    [0, 4],
    () => ImageScanningConfiguration,
    () => WorkflowConfigurationList,
    0,
  ]
);
export var CreateImageResponse = struct(n0, _CIRr, 0, [_rI, _cT, _iBVA], [0, 0, 0]);
export var CreateInfrastructureConfigurationRequest = struct(
  n0,
  _CICRr,
  0,
  [_n, _d, _iT, _iPN, _sGI, _sI, _l, _kP, _tIOF, _sTA, _rT, _iMO, _ta, _pl, _cT],
  [
    0,
    0,
    64 | 0,
    0,
    64 | 0,
    0,
    () => Logging,
    0,
    2,
    0,
    128 | 0,
    () => InstanceMetadataOptions,
    128 | 0,
    () => Placement,
    [0, 4],
  ]
);
export var CreateInfrastructureConfigurationResponse = struct(n0, _CICRre, 0, [_rI, _cT, _iCA], [0, 0, 0]);
export var CreateLifecyclePolicyRequest = struct(
  n0,
  _CLPR,
  0,
  [_n, _d, _st, _eR, _rTe, _pD, _rS, _ta, _cT],
  [0, 0, 0, 0, 0, () => LifecyclePolicyDetails, () => LifecyclePolicyResourceSelection, 128 | 0, [0, 4]]
);
export var CreateLifecyclePolicyResponse = struct(n0, _CLPRr, 0, [_cT, _lPA], [0, 0]);
export var CreateWorkflowRequest = struct(
  n0,
  _CWR,
  0,
  [_n, _sV, _d, _cD, _da, _u, _kKI, _ta, _cT, _t],
  [0, 0, 0, 0, 0, 0, 0, 128 | 0, [0, 4], 0]
);
export var CreateWorkflowResponse = struct(n0, _CWRr, 0, [_cT, _wBVA], [0, 0]);
export var ResourceAlreadyExistsException = error(
  n0,
  _RAEE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __ResourceAlreadyExistsException
);
export var ServiceQuotaExceededException = error(
  n0,
  _SQEE,
  {
    [_e]: _c,
    [_hE]: 402,
  },
  [_m],
  [0],

  __ServiceQuotaExceededException
);
export var CreateContainerRecipe = op(
  n0,
  _CCRre,
  {
    [_ht]: ["PUT", "/CreateContainerRecipe", 200],
  },
  () => CreateContainerRecipeRequest,
  () => CreateContainerRecipeResponse
);
export var CreateDistributionConfiguration = op(
  n0,
  _CDCr,
  {
    [_ht]: ["PUT", "/CreateDistributionConfiguration", 200],
  },
  () => CreateDistributionConfigurationRequest,
  () => CreateDistributionConfigurationResponse
);
export var CreateImage = op(
  n0,
  _CI,
  {
    [_ht]: ["PUT", "/CreateImage", 200],
  },
  () => CreateImageRequest,
  () => CreateImageResponse
);
export var CreateImagePipeline = op(
  n0,
  _CIP,
  {
    [_ht]: ["PUT", "/CreateImagePipeline", 200],
  },
  () => CreateImagePipelineRequest,
  () => CreateImagePipelineResponse
);
export var CreateImageRecipe = op(
  n0,
  _CIRre,
  {
    [_ht]: ["PUT", "/CreateImageRecipe", 200],
  },
  () => CreateImageRecipeRequest,
  () => CreateImageRecipeResponse
);
export var CreateInfrastructureConfiguration = op(
  n0,
  _CICr,
  {
    [_ht]: ["PUT", "/CreateInfrastructureConfiguration", 200],
  },
  () => CreateInfrastructureConfigurationRequest,
  () => CreateInfrastructureConfigurationResponse
);
export var CreateLifecyclePolicy = op(
  n0,
  _CLP,
  {
    [_ht]: ["PUT", "/CreateLifecyclePolicy", 200],
  },
  () => CreateLifecyclePolicyRequest,
  () => CreateLifecyclePolicyResponse
);
export var CreateWorkflow = op(
  n0,
  _CW,
  {
    [_ht]: ["PUT", "/CreateWorkflow", 200],
  },
  () => CreateWorkflowRequest,
  () => CreateWorkflowResponse
);
