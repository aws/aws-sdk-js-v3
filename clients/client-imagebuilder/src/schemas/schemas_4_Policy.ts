// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _a,
  _aAIm,
  _ac,
  _ADC,
  _aDC,
  _aI,
  _am,
  _aT,
  _CDC,
  _cDC,
  _con,
  _cT,
  _cTo,
  _D,
  _d,
  _DC,
  _dC,
  _dCA,
  _dCi,
  _di,
  _dIF,
  _DL,
  _dTa,
  _dU,
  _ena,
  _eR,
  _eRx,
  _fi,
  _FLC,
  _fLC,
  _FLCL,
  _FLLTS,
  _FLSC,
  _GDC,
  _GDCR,
  _GDCRe,
  _hQ,
  _ht,
  _iPs,
  _iRn,
  _kKI,
  _lCA,
  _lL,
  _lP,
  _lPA,
  _LPC,
  _LPD,
  _LPDA,
  _LPDAIR,
  _LPDER,
  _LPDERA,
  _LPDERALL,
  _LPDF,
  _LPDi,
  _LPRS,
  _LPRSR,
  _LPRSRi,
  _lT,
  _LTC,
  _lTC,
  _LTCL,
  _lTI,
  _lTN,
  _lTV,
  _mPL,
  _n,
  _oA,
  _oUA,
  _pD,
  _pNa,
  _r,
  _rAL,
  _rec,
  _reg,
  _rI,
  _rNo,
  _rS,
  _rTe,
  _sA,
  _sB,
  _sCn,
  _sDV,
  _SEC,
  _sEC,
  _sn,
  _sP,
  _SPC,
  _sPC,
  _SPCL,
  _st,
  _sV,
  _t,
  _ta,
  _tAI,
  _tM,
  _tMa,
  _tR,
  _tRC,
  _UDC,
  _UDCR,
  _UDCRp,
  _uG,
  _uI,
  _ULP,
  _ULPR,
  _ULPRp,
  _un,
  _va,
  n0,
} from "./schemas_0";
import { TargetContainerRepository } from "./schemas_34_Configuration";

/* eslint no-var: 0 */

export var AmiDistributionConfiguration = struct(
  n0,
  _ADC,
  0,
  [_n, _d, _tAI, _aT, _kKI, _lP],
  [0, 0, 64 | 0, 128 | 0, 0, () => LaunchPermissionConfiguration]
);
export var ContainerDistributionConfiguration = struct(
  n0,
  _CDC,
  0,
  [_d, _cTo, _tR],
  [0, 64 | 0, () => TargetContainerRepository]
);
export var Distribution = struct(
  n0,
  _D,
  0,
  [_r, _aDC, _cDC, _lCA, _lTC, _sEC, _fLC, _sPC],
  [
    0,
    () => AmiDistributionConfiguration,
    () => ContainerDistributionConfiguration,
    64 | 0,
    () => LaunchTemplateConfigurationList,
    () => S3ExportConfiguration,
    () => FastLaunchConfigurationList,
    () => SsmParameterConfigurationList,
  ]
);
export var DistributionConfiguration = struct(
  n0,
  _DC,
  0,
  [_a, _n, _d, _di, _tM, _dC, _dU, _ta],
  [0, 0, 0, () => DistributionList, 1, 0, 0, 128 | 0]
);
export var FastLaunchConfiguration = struct(
  n0,
  _FLC,
  0,
  [_ena, _sCn, _mPL, _lT, _aI],
  [2, () => FastLaunchSnapshotConfiguration, 1, () => FastLaunchLaunchTemplateSpecification, 0]
);
export var FastLaunchLaunchTemplateSpecification = struct(n0, _FLLTS, 0, [_lTI, _lTN, _lTV], [0, 0, 0]);
export var FastLaunchSnapshotConfiguration = struct(n0, _FLSC, 0, [_tRC], [1]);
export var GetDistributionConfigurationRequest = struct(
  n0,
  _GDCR,
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
export var GetDistributionConfigurationResponse = struct(
  n0,
  _GDCRe,
  0,
  [_rI, _dCi],
  [0, () => DistributionConfiguration]
);
export var LaunchPermissionConfiguration = struct(n0, _LPC, 0, [_uI, _uG, _oA, _oUA], [64 | 0, 64 | 0, 64 | 0, 64 | 0]);
export var LaunchTemplateConfiguration = struct(n0, _LTC, 0, [_lTI, _aI, _sDV], [0, 0, 2]);
export var LifecyclePolicyDetail = struct(
  n0,
  _LPD,
  0,
  [_ac, _fi, _eRx],
  [() => LifecyclePolicyDetailAction, () => LifecyclePolicyDetailFilter, () => LifecyclePolicyDetailExclusionRules]
);
export var LifecyclePolicyDetailAction = struct(
  n0,
  _LPDA,
  0,
  [_t, _iRn],
  [0, () => LifecyclePolicyDetailActionIncludeResources]
);
export var LifecyclePolicyDetailActionIncludeResources = struct(n0, _LPDAIR, 0, [_am, _sn, _con], [2, 2, 2]);
export var LifecyclePolicyDetailExclusionRules = struct(
  n0,
  _LPDER,
  0,
  [_tMa, _am],
  [128 | 0, () => LifecyclePolicyDetailExclusionRulesAmis]
);
export var LifecyclePolicyDetailExclusionRulesAmis = struct(
  n0,
  _LPDERA,
  0,
  [_iPs, _reg, _sA, _lL, _tMa],
  [2, 64 | 0, 64 | 0, () => LifecyclePolicyDetailExclusionRulesAmisLastLaunched, 128 | 0]
);
export var LifecyclePolicyDetailExclusionRulesAmisLastLaunched = struct(n0, _LPDERALL, 0, [_va, _un], [1, 0]);
export var LifecyclePolicyDetailFilter = struct(n0, _LPDF, 0, [_t, _va, _un, _rAL], [0, 1, 0, 1]);
export var LifecyclePolicyResourceSelection = struct(
  n0,
  _LPRS,
  0,
  [_rec, _tMa],
  [() => LifecyclePolicyResourceSelectionRecipes, 128 | 0]
);
export var LifecyclePolicyResourceSelectionRecipe = struct(n0, _LPRSR, 0, [_n, _sV], [0, 0]);
export var S3ExportConfiguration = struct(n0, _SEC, 0, [_rNo, _dIF, _sB, _sP], [0, 0, 0, 0]);
export var SsmParameterConfiguration = struct(n0, _SPC, 0, [_aAIm, _pNa, _dTa], [0, 0, 0]);
export var UpdateDistributionConfigurationRequest = struct(
  n0,
  _UDCR,
  0,
  [_dCA, _d, _di, _cT],
  [0, 0, () => DistributionList, [0, 4]]
);
export var UpdateDistributionConfigurationResponse = struct(n0, _UDCRp, 0, [_rI, _cT, _dCA], [0, 0, 0]);
export var UpdateLifecyclePolicyRequest = struct(
  n0,
  _ULPR,
  0,
  [_lPA, _d, _st, _eR, _rTe, _pD, _rS, _cT],
  [0, 0, 0, 0, 0, () => LifecyclePolicyDetails, () => LifecyclePolicyResourceSelection, [0, 4]]
);
export var UpdateLifecyclePolicyResponse = struct(n0, _ULPRp, 0, [_lPA], [0]);
export var AccountList = 64 | 0;

export var DistributionList = list(n0, _DL, 0, () => Distribution);
export var FastLaunchConfigurationList = list(n0, _FLCL, 0, () => FastLaunchConfiguration);
export var LaunchTemplateConfigurationList = list(n0, _LTCL, 0, () => LaunchTemplateConfiguration);
export var LicenseConfigurationArnList = 64 | 0;

export var LifecyclePolicyDetails = list(n0, _LPDi, 0, () => LifecyclePolicyDetail);
export var LifecyclePolicyResourceSelectionRecipes = list(n0, _LPRSRi, 0, () => LifecyclePolicyResourceSelectionRecipe);
export var OrganizationalUnitArnList = 64 | 0;

export var OrganizationArnList = 64 | 0;

export var SsmParameterConfigurationList = list(n0, _SPCL, 0, () => SsmParameterConfiguration);
export var GetDistributionConfiguration = op(
  n0,
  _GDC,
  {
    [_ht]: ["GET", "/GetDistributionConfiguration", 200],
  },
  () => GetDistributionConfigurationRequest,
  () => GetDistributionConfigurationResponse
);
export var UpdateDistributionConfiguration = op(
  n0,
  _UDC,
  {
    [_ht]: ["PUT", "/UpdateDistributionConfiguration", 200],
  },
  () => UpdateDistributionConfigurationRequest,
  () => UpdateDistributionConfigurationResponse
);
export var UpdateLifecyclePolicy = op(
  n0,
  _ULP,
  {
    [_ht]: ["PUT", "/UpdateLifecyclePolicy", 200],
  },
  () => UpdateLifecyclePolicyRequest,
  () => UpdateLifecyclePolicyResponse
);
