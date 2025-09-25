// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { ResourceDependencyException as __ResourceDependencyException } from "../models/index";
import {
  _c,
  _cBVA,
  _cRA,
  _dCA,
  _DCe,
  _DCR,
  _DCRe,
  _DCRel,
  _DCRR,
  _DCRRe,
  _DDC,
  _DDCR,
  _DDCRe,
  _DI,
  _DIC,
  _DICR,
  _DICRe,
  _DIP,
  _DIPR,
  _DIPRe,
  _DIR,
  _DIRe,
  _DIRel,
  _DIRR,
  _DIRRe,
  _DLP,
  _DLPR,
  _DLPRe,
  _DW,
  _DWR,
  _DWRe,
  _e,
  _hE,
  _hQ,
  _ht,
  _iBVA,
  _iCA,
  _iPA,
  _iRA,
  _lPA,
  _m,
  _RDE,
  _rI,
  _wBVA,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteComponentRequest = struct(
  n0,
  _DCR,
  0,
  [_cBVA],
  [
    [
      0,
      {
        [_hQ]: _cBVA,
      },
    ],
  ]
);
export var DeleteComponentResponse = struct(n0, _DCRe, 0, [_rI, _cBVA], [0, 0]);
export var DeleteContainerRecipeRequest = struct(
  n0,
  _DCRR,
  0,
  [_cRA],
  [
    [
      0,
      {
        [_hQ]: _cRA,
      },
    ],
  ]
);
export var DeleteContainerRecipeResponse = struct(n0, _DCRRe, 0, [_rI, _cRA], [0, 0]);
export var DeleteDistributionConfigurationRequest = struct(
  n0,
  _DDCR,
  0,
  [_dCA],
  [
    [
      0,
      {
        [_hQ]: _dCA,
      },
    ],
  ]
);
export var DeleteDistributionConfigurationResponse = struct(n0, _DDCRe, 0, [_rI, _dCA], [0, 0]);
export var DeleteImagePipelineRequest = struct(
  n0,
  _DIPR,
  0,
  [_iPA],
  [
    [
      0,
      {
        [_hQ]: _iPA,
      },
    ],
  ]
);
export var DeleteImagePipelineResponse = struct(n0, _DIPRe, 0, [_rI, _iPA], [0, 0]);
export var DeleteImageRecipeRequest = struct(
  n0,
  _DIRR,
  0,
  [_iRA],
  [
    [
      0,
      {
        [_hQ]: _iRA,
      },
    ],
  ]
);
export var DeleteImageRecipeResponse = struct(n0, _DIRRe, 0, [_rI, _iRA], [0, 0]);
export var DeleteImageRequest = struct(
  n0,
  _DIR,
  0,
  [_iBVA],
  [
    [
      0,
      {
        [_hQ]: _iBVA,
      },
    ],
  ]
);
export var DeleteImageResponse = struct(n0, _DIRe, 0, [_rI, _iBVA], [0, 0]);
export var DeleteInfrastructureConfigurationRequest = struct(
  n0,
  _DICR,
  0,
  [_iCA],
  [
    [
      0,
      {
        [_hQ]: _iCA,
      },
    ],
  ]
);
export var DeleteInfrastructureConfigurationResponse = struct(n0, _DICRe, 0, [_rI, _iCA], [0, 0]);
export var DeleteLifecyclePolicyRequest = struct(
  n0,
  _DLPR,
  0,
  [_lPA],
  [
    [
      0,
      {
        [_hQ]: _lPA,
      },
    ],
  ]
);
export var DeleteLifecyclePolicyResponse = struct(n0, _DLPRe, 0, [_lPA], [0]);
export var DeleteWorkflowRequest = struct(
  n0,
  _DWR,
  0,
  [_wBVA],
  [
    [
      0,
      {
        [_hQ]: _wBVA,
      },
    ],
  ]
);
export var DeleteWorkflowResponse = struct(n0, _DWRe, 0, [_wBVA], [0]);
export var ResourceDependencyException = error(
  n0,
  _RDE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __ResourceDependencyException
);
export var DeleteComponent = op(
  n0,
  _DCe,
  {
    [_ht]: ["DELETE", "/DeleteComponent", 200],
  },
  () => DeleteComponentRequest,
  () => DeleteComponentResponse
);
export var DeleteContainerRecipe = op(
  n0,
  _DCRel,
  {
    [_ht]: ["DELETE", "/DeleteContainerRecipe", 200],
  },
  () => DeleteContainerRecipeRequest,
  () => DeleteContainerRecipeResponse
);
export var DeleteDistributionConfiguration = op(
  n0,
  _DDC,
  {
    [_ht]: ["DELETE", "/DeleteDistributionConfiguration", 200],
  },
  () => DeleteDistributionConfigurationRequest,
  () => DeleteDistributionConfigurationResponse
);
export var DeleteImage = op(
  n0,
  _DI,
  {
    [_ht]: ["DELETE", "/DeleteImage", 200],
  },
  () => DeleteImageRequest,
  () => DeleteImageResponse
);
export var DeleteImagePipeline = op(
  n0,
  _DIP,
  {
    [_ht]: ["DELETE", "/DeleteImagePipeline", 200],
  },
  () => DeleteImagePipelineRequest,
  () => DeleteImagePipelineResponse
);
export var DeleteImageRecipe = op(
  n0,
  _DIRel,
  {
    [_ht]: ["DELETE", "/DeleteImageRecipe", 200],
  },
  () => DeleteImageRecipeRequest,
  () => DeleteImageRecipeResponse
);
export var DeleteInfrastructureConfiguration = op(
  n0,
  _DIC,
  {
    [_ht]: ["DELETE", "/DeleteInfrastructureConfiguration", 200],
  },
  () => DeleteInfrastructureConfigurationRequest,
  () => DeleteInfrastructureConfigurationResponse
);
export var DeleteLifecyclePolicy = op(
  n0,
  _DLP,
  {
    [_ht]: ["DELETE", "/DeleteLifecyclePolicy", 200],
  },
  () => DeleteLifecyclePolicyRequest,
  () => DeleteLifecyclePolicyResponse
);
export var DeleteWorkflow = op(
  n0,
  _DW,
  {
    [_ht]: ["DELETE", "/DeleteWorkflow", 200],
  },
  () => DeleteWorkflowRequest,
  () => DeleteWorkflowResponse
);
