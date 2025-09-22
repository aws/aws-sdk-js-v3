// smithy-typescript generated code
import { error, list, map, op, struct } from "@smithy/core/schema";

import { ServiceQuotaExceededException as __ServiceQuotaExceededException } from "../models/index";
import {
  _a,
  _ACD,
  _aCD,
  _ACDL,
  _aGO,
  _ar,
  _aT,
  _C,
  _c,
  _CCS,
  _CCV,
  _CCVR,
  _CCVRr,
  _CD,
  _cD,
  _cDES,
  _CDL,
  _CDM,
  _cDo,
  _CDRo,
  _cDTN,
  _CL,
  _cLP,
  _CLV,
  _cN,
  _com,
  _cP,
  _CPL,
  _cPo,
  _cS,
  _cT,
  _cTl,
  _cV,
  _cVo,
  _D,
  _d,
  _DCe,
  _DCRe,
  _DCRes,
  _de,
  _dep,
  _dI,
  _DL,
  _dN,
  _dP,
  _dPe,
  _dS,
  _dT,
  _e,
  _eA,
  _ED,
  _eD,
  _EDL,
  _EDSD,
  _er,
  _eS,
  _eSv,
  _eT,
  _eV,
  _GCD,
  _GCDR,
  _GCDRe,
  _GD,
  _GDR,
  _GDRe,
  _h,
  _hE,
  _hF,
  _hQ,
  _IC,
  _iC,
  _ICL,
  _iJA,
  _iJC,
  _iJI,
  _iLFT,
  _iM,
  _iPET,
  _iR,
  _iRs,
  _lA,
  _LC,
  _LCD,
  _LCDAWCD,
  _LCDAWCDR,
  _LCDAWCDRi,
  _LCDR,
  _LCDRi,
  _LCP,
  _LCR,
  _LCRi,
  _LD,
  _LDL,
  _LDM,
  _LDR,
  _LDRi,
  _LED,
  _LEDR,
  _LEDRi,
  _LEP,
  _LES,
  _LESL,
  _lF,
  _LFRS,
  _LIC,
  _LICR,
  _LICRi,
  _lIS,
  _LLPP,
  _lPP,
  _lRT,
  _lS,
  _lSC,
  _lSCT,
  _lSD,
  _lSUT,
  _lV,
  _LVL,
  _LVM,
  _m,
  _mIC,
  _mITIS,
  _mQS,
  _mR,
  _mROS,
  _mSIKB,
  _mT,
  _nT,
  _p,
  _pa,
  _pe,
  _pi,
  _pl,
  _pla,
  _pTA,
  _qC,
  _re,
  _rI,
  _rIe,
  _rT,
  _ru,
  _s,
  _sC,
  _sc,
  _sD,
  _sP,
  _SQEE,
  _sTIS,
  _t,
  _tA,
  _tF,
  _tGA,
  _tIS,
  _tN,
  _to,
  _ty,
  _v,
  _vG,
  _vGM,
  _vRe,
  n0,
} from "./schemas_0";
import { ComponentDeploymentSpecifications, DeploymentIoTJobConfiguration, DeploymentPolicies } from "./schemas_2_Get";
import { ComponentPlatform } from "./schemas_5_Component";

/* eslint no-var: 0 */

export var AssociatedClientDevice = struct(n0, _ACD, 0, [_tN, _aT], [0, 4]);
export var CloudComponentStatus = struct(n0, _CCS, 0, [_cS, _m, _er, _vG, _vGM], [0, 0, 128 | 0, 0, 0]);
export var Component = struct(n0, _C, 0, [_a, _cN, _lV], [0, 0, () => ComponentLatestVersion]);
export var ComponentDependencyRequirement = struct(n0, _CDRo, 0, [_vRe, _dT], [0, 0]);
export var ComponentLatestVersion = struct(
  n0,
  _CLV,
  0,
  [_a, _cV, _cT, _d, _p, _pl],
  [0, 0, 4, 0, 0, () => ComponentPlatformList]
);
export var CoreDevice = struct(n0, _CD, 0, [_cDTN, _s, _lSUT, _pla, _ar, _ru], [0, 0, 4, 0, 0, 0]);
export var CreateComponentVersionRequest = struct(
  n0,
  _CCVR,
  0,
  [_iR, _lF, _t, _cTl],
  [21, () => LambdaFunctionRecipeSource, 128 | 0, [0, 4]]
);
export var CreateComponentVersionResponse = struct(
  n0,
  _CCVRr,
  0,
  [_a, _cN, _cV, _cT, _s],
  [0, 0, 0, 4, () => CloudComponentStatus]
);
export var Deployment = struct(n0, _D, 0, [_tA, _rIe, _dI, _dN, _cT, _dS, _iLFT, _pTA], [0, 0, 0, 0, 4, 0, 2, 0]);
export var DescribeComponentRequest = struct(n0, _DCRe, 0, [_a], [[0, 1]]);
export var DescribeComponentResponse = struct(
  n0,
  _DCRes,
  0,
  [_a, _cN, _cV, _cT, _p, _d, _s, _pl, _t],
  [0, 0, 0, 4, 0, 0, () => CloudComponentStatus, () => ComponentPlatformList, 128 | 0]
);
export var EffectiveDeployment = struct(
  n0,
  _ED,
  0,
  [_dI, _dN, _iJI, _iJA, _d, _tA, _cDES, _re, _cT, _mT, _sD],
  [0, 0, 0, 0, 0, 0, 0, 0, 4, 4, () => EffectiveDeploymentStatusDetails]
);
export var EffectiveDeploymentStatusDetails = struct(n0, _EDSD, 0, [_eS, _eT], [64 | 0, 64 | 0]);
export var GetCoreDeviceRequest = struct(n0, _GCDR, 0, [_cDTN], [[0, 1]]);
export var GetCoreDeviceResponse = struct(
  n0,
  _GCDRe,
  0,
  [_cDTN, _cVo, _pla, _ar, _ru, _s, _lSUT, _t],
  [0, 0, 0, 0, 0, 0, 4, 128 | 0]
);
export var GetDeploymentRequest = struct(n0, _GDR, 0, [_dI], [[0, 1]]);
export var GetDeploymentResponse = struct(
  n0,
  _GDRe,
  0,
  [_tA, _rIe, _dI, _dN, _dS, _iJI, _iJA, _com, _dP, _iJC, _cT, _iLFT, _pTA, _t],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    () => ComponentDeploymentSpecifications,
    () => DeploymentPolicies,
    () => DeploymentIoTJobConfiguration,
    4,
    2,
    0,
    128 | 0,
  ]
);
export var InstalledComponent = struct(
  n0,
  _IC,
  0,
  [_cN, _cV, _lS, _lSD, _iRs, _lSCT, _lRT, _lIS, _lSC],
  [0, 0, 0, 0, 2, 4, 4, 0, 64 | 0]
);
export var LambdaContainerParams = struct(
  n0,
  _LCP,
  0,
  [_mSIKB, _mROS, _v, _de],
  [1, 2, () => LambdaVolumeList, () => LambdaDeviceList]
);
export var LambdaDeviceMount = struct(n0, _LDM, 0, [_pa, _pe, _aGO], [0, 0, 2]);
export var LambdaEventSource = struct(n0, _LES, 0, [_to, _ty], [0, 0]);
export var LambdaExecutionParameters = struct(
  n0,
  _LEP,
  0,
  [_eSv, _mQS, _mIC, _mITIS, _tIS, _sTIS, _pi, _iPET, _eA, _eV, _lPP],
  [() => LambdaEventSourceList, 1, 1, 1, 1, 1, 2, 0, 64 | 0, 128 | 0, () => LambdaLinuxProcessParams]
);
export var LambdaFunctionRecipeSource = struct(
  n0,
  _LFRS,
  0,
  [_lA, _cN, _cV, _cP, _cD, _cLP],
  [0, 0, 0, () => ComponentPlatformList, () => ComponentDependencyMap, () => LambdaExecutionParameters]
);
export var LambdaLinuxProcessParams = struct(n0, _LLPP, 0, [_iM, _cPo], [0, () => LambdaContainerParams]);
export var LambdaVolumeMount = struct(n0, _LVM, 0, [_sP, _dPe, _pe, _aGO], [0, 0, 0, 2]);
export var ListClientDevicesAssociatedWithCoreDeviceRequest = struct(
  n0,
  _LCDAWCDR,
  0,
  [_cDTN, _mR, _nT],
  [
    [0, 1],
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
export var ListClientDevicesAssociatedWithCoreDeviceResponse = struct(
  n0,
  _LCDAWCDRi,
  0,
  [_aCD, _nT],
  [() => AssociatedClientDeviceList, 0]
);
export var ListComponentsRequest = struct(
  n0,
  _LCR,
  0,
  [_sc, _mR, _nT],
  [
    [
      0,
      {
        [_hQ]: _sc,
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
export var ListComponentsResponse = struct(n0, _LCRi, 0, [_com, _nT], [() => ComponentList, 0]);
export var ListCoreDevicesRequest = struct(
  n0,
  _LCDR,
  0,
  [_tGA, _s, _mR, _nT, _ru],
  [
    [
      0,
      {
        [_hQ]: _tGA,
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
    [
      0,
      {
        [_hQ]: _ru,
      },
    ],
  ]
);
export var ListCoreDevicesResponse = struct(n0, _LCDRi, 0, [_cDo, _nT], [() => CoreDevicesList, 0]);
export var ListDeploymentsRequest = struct(
  n0,
  _LDR,
  0,
  [_tA, _hF, _pTA, _mR, _nT],
  [
    [
      0,
      {
        [_hQ]: _tA,
      },
    ],
    [
      0,
      {
        [_hQ]: _hF,
      },
    ],
    [
      0,
      {
        [_hQ]: _pTA,
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
export var ListDeploymentsResponse = struct(n0, _LDRi, 0, [_dep, _nT], [() => DeploymentList, 0]);
export var ListEffectiveDeploymentsRequest = struct(
  n0,
  _LEDR,
  0,
  [_cDTN, _mR, _nT],
  [
    [0, 1],
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
export var ListEffectiveDeploymentsResponse = struct(n0, _LEDRi, 0, [_eD, _nT], [() => EffectiveDeploymentsList, 0]);
export var ListInstalledComponentsRequest = struct(
  n0,
  _LICR,
  0,
  [_cDTN, _mR, _nT, _tF],
  [
    [0, 1],
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
    [
      0,
      {
        [_hQ]: _tF,
      },
    ],
  ]
);
export var ListInstalledComponentsResponse = struct(n0, _LICRi, 0, [_iC, _nT], [() => InstalledComponentList, 0]);
export var ServiceQuotaExceededException = error(
  n0,
  _SQEE,
  {
    [_e]: _c,
    [_hE]: 402,
  },
  [_m, _rI, _rT, _qC, _sC],
  [0, 0, 0, 0, 0],

  __ServiceQuotaExceededException
);
export var AssociatedClientDeviceList = list(n0, _ACDL, 0, () => AssociatedClientDevice);
export var ComponentList = list(n0, _CL, 0, () => Component);
export var ComponentPlatformList = list(n0, _CPL, 0, () => ComponentPlatform);
export var CoreDevicesList = list(n0, _CDL, 0, () => CoreDevice);
export var DeploymentList = list(n0, _DL, 0, () => Deployment);
export var EffectiveDeploymentErrorStack = 64 | 0;

export var EffectiveDeploymentErrorTypeList = 64 | 0;

export var EffectiveDeploymentsList = list(n0, _EDL, 0, () => EffectiveDeployment);
export var InstalledComponentLifecycleStatusCodeList = 64 | 0;

export var InstalledComponentList = list(n0, _ICL, 0, () => InstalledComponent);
export var LambdaDeviceList = list(n0, _LDL, 0, () => LambdaDeviceMount);
export var LambdaEventSourceList = list(n0, _LESL, 0, () => LambdaEventSource);
export var LambdaExecArgsList = 64 | 0;

export var LambdaVolumeList = list(n0, _LVL, 0, () => LambdaVolumeMount);
export var ComponentDependencyMap = map(n0, _CDM, 0, 0, () => ComponentDependencyRequirement);
export var LambdaEnvironmentVariables = 128 | 0;

export var StringMap = 128 | 0;

export var CreateComponentVersion = op(
  n0,
  _CCV,
  {
    [_h]: ["POST", "/greengrass/v2/createComponentVersion", 201],
  },
  () => CreateComponentVersionRequest,
  () => CreateComponentVersionResponse
);
export var DescribeComponent = op(
  n0,
  _DCe,
  {
    [_h]: ["GET", "/greengrass/v2/components/{arn}/metadata", 200],
  },
  () => DescribeComponentRequest,
  () => DescribeComponentResponse
);
export var GetCoreDevice = op(
  n0,
  _GCD,
  {
    [_h]: ["GET", "/greengrass/v2/coreDevices/{coreDeviceThingName}", 200],
  },
  () => GetCoreDeviceRequest,
  () => GetCoreDeviceResponse
);
export var GetDeployment = op(
  n0,
  _GD,
  {
    [_h]: ["GET", "/greengrass/v2/deployments/{deploymentId}", 200],
  },
  () => GetDeploymentRequest,
  () => GetDeploymentResponse
);
export var ListClientDevicesAssociatedWithCoreDevice = op(
  n0,
  _LCDAWCD,
  {
    [_h]: ["GET", "/greengrass/v2/coreDevices/{coreDeviceThingName}/associatedClientDevices", 200],
  },
  () => ListClientDevicesAssociatedWithCoreDeviceRequest,
  () => ListClientDevicesAssociatedWithCoreDeviceResponse
);
export var ListComponents = op(
  n0,
  _LC,
  {
    [_h]: ["GET", "/greengrass/v2/components", 200],
  },
  () => ListComponentsRequest,
  () => ListComponentsResponse
);
export var ListCoreDevices = op(
  n0,
  _LCD,
  {
    [_h]: ["GET", "/greengrass/v2/coreDevices", 200],
  },
  () => ListCoreDevicesRequest,
  () => ListCoreDevicesResponse
);
export var ListDeployments = op(
  n0,
  _LD,
  {
    [_h]: ["GET", "/greengrass/v2/deployments", 200],
  },
  () => ListDeploymentsRequest,
  () => ListDeploymentsResponse
);
export var ListEffectiveDeployments = op(
  n0,
  _LED,
  {
    [_h]: ["GET", "/greengrass/v2/coreDevices/{coreDeviceThingName}/effectiveDeployments", 200],
  },
  () => ListEffectiveDeploymentsRequest,
  () => ListEffectiveDeploymentsResponse
);
export var ListInstalledComponents = op(
  n0,
  _LIC,
  {
    [_h]: ["GET", "/greengrass/v2/coreDevices/{coreDeviceThingName}/installedComponents", 200],
  },
  () => ListInstalledComponentsRequest,
  () => ListInstalledComponentsResponse
);
