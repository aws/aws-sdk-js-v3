// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AIp,
  _ALp,
  _App,
  _Ar,
  _CA,
  _CN,
  _CPI,
  _CT,
  _CV,
  _D,
  _DDIM,
  _Depl,
  _DL,
  _DN,
  _DS,
  _DSep,
  _DSL,
  _EIn,
  _ES,
  _ESx,
  _Ext,
  _FBTIM,
  _GF,
  _GT,
  _h,
  _HCVo,
  _HCVS,
  _HCVSL,
  _hQ,
  _I,
  _It,
  _KKA,
  _LA,
  _LAR,
  _LD,
  _LDR,
  _LDS,
  _LDSR,
  _LEi,
  _LERi,
  _LHCV,
  _LHCVR,
  _MR,
  _mr,
  _N,
  _n,
  _NT,
  _nt,
  _PC,
  _S,
  _SA,
  _VL,
  _vl,
  _VN,
  n0,
} from "./schemas_0";
import { DeploymentStrategy } from "./schemas_3_Deployment";
import { Application } from "./schemas_10_Application";

/* eslint no-var: 0 */

export var Applications = struct(n0, _App, 0, [_It, _NT], [() => ApplicationList, 0]);
export var Deployments = struct(n0, _Depl, 0, [_It, _NT], [() => DeploymentList, 0]);
export var DeploymentStrategies = struct(n0, _DS, 0, [_It, _NT], [() => DeploymentStrategyList, 0]);
export var DeploymentSummary = struct(
  n0,
  _DSep,
  0,
  [_DN, _CN, _CV, _DDIM, _GT, _GF, _FBTIM, _S, _PC, _SA, _CA, _VL],
  [1, 0, 0, 1, 0, 1, 1, 0, 1, 5, 5, 0]
);
export var Extensions = struct(n0, _Ext, 0, [_It, _NT], [() => ExtensionSummaries, 0]);
export var ExtensionSummary = struct(n0, _ES, 0, [_I, _N, _VN, _Ar, _D], [0, 0, 1, 0, 0]);
export var HostedConfigurationVersions = struct(
  n0,
  _HCVo,
  0,
  [_It, _NT],
  [() => HostedConfigurationVersionSummaryList, 0]
);
export var HostedConfigurationVersionSummary = struct(
  n0,
  _HCVS,
  0,
  [_AIp, _CPI, _VN, _D, _CT, _VL, _KKA],
  [0, 0, 1, 0, 0, 0, 0]
);
export var ListApplicationsRequest = struct(
  n0,
  _LAR,
  0,
  [_MR, _NT],
  [
    [
      1,
      {
        [_hQ]: _mr,
      },
    ],
    [
      0,
      {
        [_hQ]: _nt,
      },
    ],
  ]
);
export var ListDeploymentsRequest = struct(
  n0,
  _LDR,
  0,
  [_AIp, _EIn, _MR, _NT],
  [
    [0, 1],
    [0, 1],
    [
      1,
      {
        [_hQ]: _mr,
      },
    ],
    [
      0,
      {
        [_hQ]: _nt,
      },
    ],
  ]
);
export var ListDeploymentStrategiesRequest = struct(
  n0,
  _LDSR,
  0,
  [_MR, _NT],
  [
    [
      1,
      {
        [_hQ]: _mr,
      },
    ],
    [
      0,
      {
        [_hQ]: _nt,
      },
    ],
  ]
);
export var ListExtensionsRequest = struct(
  n0,
  _LERi,
  0,
  [_MR, _NT, _N],
  [
    [
      1,
      {
        [_hQ]: _mr,
      },
    ],
    [
      0,
      {
        [_hQ]: _nt,
      },
    ],
    [
      0,
      {
        [_hQ]: _n,
      },
    ],
  ]
);
export var ListHostedConfigurationVersionsRequest = struct(
  n0,
  _LHCVR,
  0,
  [_AIp, _CPI, _MR, _NT, _VL],
  [
    [0, 1],
    [0, 1],
    [
      1,
      {
        [_hQ]: _mr,
      },
    ],
    [
      0,
      {
        [_hQ]: _nt,
      },
    ],
    [
      0,
      {
        [_hQ]: _vl,
      },
    ],
  ]
);
export var ApplicationList = list(n0, _ALp, 0, () => Application);
export var DeploymentList = list(n0, _DL, 0, () => DeploymentSummary);
export var DeploymentStrategyList = list(n0, _DSL, 0, () => DeploymentStrategy);
export var ExtensionSummaries = list(n0, _ESx, 0, () => ExtensionSummary);
export var HostedConfigurationVersionSummaryList = list(n0, _HCVSL, 0, () => HostedConfigurationVersionSummary);
export var ListApplications = op(
  n0,
  _LA,
  {
    [_h]: ["GET", "/applications", 200],
  },
  () => ListApplicationsRequest,
  () => Applications
);
export var ListDeployments = op(
  n0,
  _LD,
  {
    [_h]: ["GET", "/applications/{ApplicationId}/environments/{EnvironmentId}/deployments", 200],
  },
  () => ListDeploymentsRequest,
  () => Deployments
);
export var ListDeploymentStrategies = op(
  n0,
  _LDS,
  {
    [_h]: ["GET", "/deploymentstrategies", 200],
  },
  () => ListDeploymentStrategiesRequest,
  () => DeploymentStrategies
);
export var ListExtensions = op(
  n0,
  _LEi,
  {
    [_h]: ["GET", "/extensions", 200],
  },
  () => ListExtensionsRequest,
  () => Extensions
);
export var ListHostedConfigurationVersions = op(
  n0,
  _LHCV,
  {
    [_h]: [
      "GET",
      "/applications/{ApplicationId}/configurationprofiles/{ConfigurationProfileId}/hostedconfigurationversions",
      200,
    ],
  },
  () => ListHostedConfigurationVersionsRequest,
  () => HostedConfigurationVersions
);
