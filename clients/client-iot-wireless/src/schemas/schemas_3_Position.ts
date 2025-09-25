// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _Ac,
  _Dest,
  _Fe,
  _GJP,
  _GP,
  _GPC,
  _GPCR,
  _GPCRe,
  _GPR,
  _GPRe,
  _GRP,
  _GRPR,
  _GRPRe,
  _h,
  _HA,
  _hQ,
  _LPC,
  _LPCR,
  _LPCRi,
  _MR,
  _mR,
  _NT,
  _nT,
  _PCI,
  _PCL,
  _Po,
  _PPC,
  _PPCR,
  _PPCRu,
  _Pro,
  _PSC,
  _PSDo,
  _RIe,
  _RT,
  _rT,
  _SG,
  _SGC,
  _SGD,
  _So,
  _SP,
  _ST,
  _St,
  _SV,
  _T,
  _Ti,
  _UP,
  _UPR,
  _UPRp,
  _URPp,
  _URPR,
  _URPRp,
  _VA,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var Accuracy = struct(n0, _Ac, 0, [_HA, _VA], [1, 1]);
export var GetPositionConfigurationRequest = struct(
  n0,
  _GPCR,
  0,
  [_RIe, _RT],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _rT,
      },
    ],
  ]
);
export var GetPositionConfigurationResponse = struct(n0, _GPCRe, 0, [_So, _Dest], [() => PositionSolverDetails, 0]);
export var GetPositionRequest = struct(
  n0,
  _GPR,
  0,
  [_RIe, _RT],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _rT,
      },
    ],
  ]
);
export var GetPositionResponse = struct(
  n0,
  _GPRe,
  0,
  [_Po, _Ac, _ST, _SP, _SV, _Ti],
  [64 | 1, () => Accuracy, 0, 0, 0, 0]
);
export var GetResourcePositionRequest = struct(
  n0,
  _GRPR,
  0,
  [_RIe, _RT],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _rT,
      },
    ],
  ]
);
export var GetResourcePositionResponse = struct(n0, _GRPRe, 0, [_GJP], [[21, 16]]);
export var ListPositionConfigurationsRequest = struct(
  n0,
  _LPCR,
  0,
  [_RT, _MR, _NT],
  [
    [
      0,
      {
        [_hQ]: _rT,
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
export var ListPositionConfigurationsResponse = struct(
  n0,
  _LPCRi,
  0,
  [_PCL, _NT],
  [() => PositionConfigurationList, 0]
);
export var PositionConfigurationItem = struct(
  n0,
  _PCI,
  0,
  [_RIe, _RT, _So, _Dest],
  [0, 0, () => PositionSolverDetails, 0]
);
export var PositionSolverConfigurations = struct(n0, _PSC, 0, [_SG], [() => SemtechGnssConfiguration]);
export var PositionSolverDetails = struct(n0, _PSDo, 0, [_SG], [() => SemtechGnssDetail]);
export var PutPositionConfigurationRequest = struct(
  n0,
  _PPCR,
  0,
  [_RIe, _RT, _So, _Dest],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _rT,
      },
    ],
    () => PositionSolverConfigurations,
    0,
  ]
);
export var PutPositionConfigurationResponse = struct(n0, _PPCRu, 0, [], []);
export var SemtechGnssConfiguration = struct(n0, _SGC, 0, [_St, _Fe], [0, 0]);
export var SemtechGnssDetail = struct(n0, _SGD, 0, [_Pro, _T, _St, _Fe], [0, 0, 0, 0]);
export var UpdatePositionRequest = struct(
  n0,
  _UPR,
  0,
  [_RIe, _RT, _Po],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _rT,
      },
    ],
    64 | 1,
  ]
);
export var UpdatePositionResponse = struct(n0, _UPRp, 0, [], []);
export var UpdateResourcePositionRequest = struct(
  n0,
  _URPR,
  0,
  [_RIe, _RT, _GJP],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _rT,
      },
    ],
    [21, 16],
  ]
);
export var UpdateResourcePositionResponse = struct(n0, _URPRp, 0, [], []);
export var PositionConfigurationList = list(n0, _PCL, 0, () => PositionConfigurationItem);
export var PositionCoordinate = 64 | 1;

export var GetPosition = op(
  n0,
  _GP,
  {
    [_h]: ["GET", "/positions/{ResourceIdentifier}", 200],
  },
  () => GetPositionRequest,
  () => GetPositionResponse
);
export var GetPositionConfiguration = op(
  n0,
  _GPC,
  {
    [_h]: ["GET", "/position-configurations/{ResourceIdentifier}", 200],
  },
  () => GetPositionConfigurationRequest,
  () => GetPositionConfigurationResponse
);
export var GetResourcePosition = op(
  n0,
  _GRP,
  {
    [_h]: ["GET", "/resource-positions/{ResourceIdentifier}", 200],
  },
  () => GetResourcePositionRequest,
  () => GetResourcePositionResponse
);
export var ListPositionConfigurations = op(
  n0,
  _LPC,
  {
    [_h]: ["GET", "/position-configurations", 200],
  },
  () => ListPositionConfigurationsRequest,
  () => ListPositionConfigurationsResponse
);
export var PutPositionConfiguration = op(
  n0,
  _PPC,
  {
    [_h]: ["PUT", "/position-configurations/{ResourceIdentifier}", 200],
  },
  () => PutPositionConfigurationRequest,
  () => PutPositionConfigurationResponse
);
export var UpdatePosition = op(
  n0,
  _UP,
  {
    [_h]: ["PATCH", "/positions/{ResourceIdentifier}", 204],
  },
  () => UpdatePositionRequest,
  () => UpdatePositionResponse
);
export var UpdateResourcePosition = op(
  n0,
  _URPp,
  {
    [_h]: ["PATCH", "/resource-positions/{ResourceIdentifier}", 204],
  },
  () => UpdateResourcePositionRequest,
  () => UpdateResourcePositionResponse
);
