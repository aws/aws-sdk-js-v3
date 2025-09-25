// smithy-typescript generated code
import { list, map, op, struct } from "@smithy/core/schema";

import {
  _AA,
  _AE,
  _AEp,
  _AI,
  _AIc,
  _AIp,
  _AN,
  _AR,
  _Ar,
  _AR_,
  _ARA,
  _CA,
  _CEA,
  _CEAR,
  _CER,
  _CEr,
  _CLU,
  _CN,
  _CPI,
  _CV,
  _D,
  _DDIM,
  _DE,
  _DEe,
  _DEP,
  _Dep,
  _DN,
  _DPM,
  _DSI,
  _EA,
  _EAI,
  _EAx,
  _EC,
  _EI,
  _EIn,
  _EIx,
  _EL,
  _ELn,
  _EM,
  _En,
  _Env,
  _ET,
  _EVN,
  _FBTIM,
  _GD,
  _GDR,
  _GE,
  _GEA,
  _GEAR,
  _GER,
  _GF,
  _GT,
  _h,
  _hH,
  _hQ,
  _I,
  _II,
  _It,
  _KKA,
  _KKI,
  _LE,
  _LER,
  _ML,
  _Mo,
  _Mon,
  _MR,
  _mr,
  _N,
  _NT,
  _nt,
  _OA,
  _P,
  _PC,
  _RA,
  _RAe,
  _RI,
  _S,
  _SA,
  _SD,
  _SDR,
  _SDRt,
  _SDt,
  _Ta,
  _TB,
  _U,
  _UE,
  _UEA,
  _UEAR,
  _UER,
  _VL,
  _VN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ActionInvocation = struct(n0, _AI, 0, [_EI, _AN, _U, _RA, _EM, _EC, _II], [0, 0, 0, 0, 0, 0, 0]);
export var AppliedExtension = struct(n0, _AE, 0, [_EIx, _EAI, _VN, _P], [0, 0, 1, 128 | 0]);
export var CreateEnvironmentRequest = struct(
  n0,
  _CER,
  0,
  [_AIp, _N, _D, _Mo, _Ta],
  [[0, 1], 0, 0, () => MonitorList, 128 | 0]
);
export var CreateExtensionAssociationRequest = struct(
  n0,
  _CEAR,
  0,
  [_EI, _EVN, _RI, _P, _Ta],
  [0, 1, 0, 128 | 0, 128 | 0]
);
export var Deployment = struct(
  n0,
  _Dep,
  0,
  [
    _AIp,
    _EIn,
    _DSI,
    _CPI,
    _DN,
    _CN,
    _CLU,
    _CV,
    _D,
    _DDIM,
    _GT,
    _GF,
    _FBTIM,
    _S,
    _EL,
    _PC,
    _SA,
    _CA,
    _AEp,
    _KKA,
    _KKI,
    _VL,
  ],
  [0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 0, () => DeploymentEvents, 1, 5, 5, () => AppliedExtensions, 0, 0, 0]
);
export var DeploymentEvent = struct(n0, _DE, 0, [_ET, _TB, _D, _AIc, _OA], [0, 0, 0, () => ActionInvocations, 5]);
export var Environment = struct(n0, _En, 0, [_AIp, _I, _N, _D, _S, _Mo], [0, 0, 0, 0, 0, () => MonitorList]);
export var Environments = struct(n0, _Env, 0, [_It, _NT], [() => EnvironmentList, 0]);
export var ExtensionAssociation = struct(n0, _EA, 0, [_I, _EAx, _RAe, _Ar, _P, _EVN], [0, 0, 0, 0, 128 | 0, 1]);
export var GetDeploymentRequest = struct(
  n0,
  _GDR,
  0,
  [_AIp, _EIn, _DN],
  [
    [0, 1],
    [0, 1],
    [1, 1],
  ]
);
export var GetEnvironmentRequest = struct(
  n0,
  _GER,
  0,
  [_AIp, _EIn],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetExtensionAssociationRequest = struct(n0, _GEAR, 0, [_EAI], [[0, 1]]);
export var ListEnvironmentsRequest = struct(
  n0,
  _LER,
  0,
  [_AIp, _MR, _NT],
  [
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
export var Monitor = struct(n0, _Mon, 0, [_AA, _ARA], [0, 0]);
export var StartDeploymentRequest = struct(
  n0,
  _SDR,
  0,
  [_AIp, _EIn, _DSI, _CPI, _CV, _D, _Ta, _KKI, _DEP],
  [[0, 1], [0, 1], 0, 0, 0, 0, 128 | 0, 0, [() => DynamicParameterMap, 0]]
);
export var StopDeploymentRequest = struct(
  n0,
  _SDRt,
  0,
  [_AIp, _EIn, _DN, _AR],
  [
    [0, 1],
    [0, 1],
    [1, 1],
    [
      2,
      {
        [_hH]: _AR_,
      },
    ],
  ]
);
export var UpdateEnvironmentRequest = struct(
  n0,
  _UER,
  0,
  [_AIp, _EIn, _N, _D, _Mo],
  [[0, 1], [0, 1], 0, 0, () => MonitorList]
);
export var UpdateExtensionAssociationRequest = struct(n0, _UEAR, 0, [_EAI, _P], [[0, 1], 128 | 0]);
export var ActionInvocations = list(n0, _AIc, 0, () => ActionInvocation);
export var AppliedExtensions = list(n0, _AEp, 0, () => AppliedExtension);
export var DeploymentEvents = list(n0, _DEe, 0, () => DeploymentEvent);
export var EnvironmentList = list(n0, _ELn, 0, () => Environment);
export var MonitorList = list(n0, _ML, 0, () => Monitor);
export var DynamicParameterMap = map(n0, _DPM, 8, 0, 0);
export var ParameterValueMap = 128 | 0;

export var CreateEnvironment = op(
  n0,
  _CEr,
  {
    [_h]: ["POST", "/applications/{ApplicationId}/environments", 201],
  },
  () => CreateEnvironmentRequest,
  () => Environment
);
export var CreateExtensionAssociation = op(
  n0,
  _CEA,
  {
    [_h]: ["POST", "/extensionassociations", 201],
  },
  () => CreateExtensionAssociationRequest,
  () => ExtensionAssociation
);
export var GetDeployment = op(
  n0,
  _GD,
  {
    [_h]: ["GET", "/applications/{ApplicationId}/environments/{EnvironmentId}/deployments/{DeploymentNumber}", 200],
  },
  () => GetDeploymentRequest,
  () => Deployment
);
export var GetEnvironment = op(
  n0,
  _GE,
  {
    [_h]: ["GET", "/applications/{ApplicationId}/environments/{EnvironmentId}", 200],
  },
  () => GetEnvironmentRequest,
  () => Environment
);
export var GetExtensionAssociation = op(
  n0,
  _GEA,
  {
    [_h]: ["GET", "/extensionassociations/{ExtensionAssociationId}", 200],
  },
  () => GetExtensionAssociationRequest,
  () => ExtensionAssociation
);
export var ListEnvironments = op(
  n0,
  _LE,
  {
    [_h]: ["GET", "/applications/{ApplicationId}/environments", 200],
  },
  () => ListEnvironmentsRequest,
  () => Environments
);
export var StartDeployment = op(
  n0,
  _SD,
  {
    [_h]: ["POST", "/applications/{ApplicationId}/environments/{EnvironmentId}/deployments", 201],
  },
  () => StartDeploymentRequest,
  () => Deployment
);
export var StopDeployment = op(
  n0,
  _SDt,
  {
    [_h]: ["DELETE", "/applications/{ApplicationId}/environments/{EnvironmentId}/deployments/{DeploymentNumber}", 202],
  },
  () => StopDeploymentRequest,
  () => Deployment
);
export var UpdateEnvironment = op(
  n0,
  _UE,
  {
    [_h]: ["PATCH", "/applications/{ApplicationId}/environments/{EnvironmentId}", 200],
  },
  () => UpdateEnvironmentRequest,
  () => Environment
);
export var UpdateExtensionAssociation = op(
  n0,
  _UEA,
  {
    [_h]: ["PATCH", "/extensionassociations/{ExtensionAssociationId}", 200],
  },
  () => UpdateExtensionAssociationRequest,
  () => ExtensionAssociation
);
