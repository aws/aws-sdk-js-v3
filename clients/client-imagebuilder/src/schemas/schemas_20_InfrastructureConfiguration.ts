// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _cT,
  _d,
  _GIC,
  _GICR,
  _GICRe,
  _hQ,
  _ht,
  _iCA,
  _iCn,
  _iMO,
  _iPN,
  _iT,
  _kP,
  _l,
  _pl,
  _rI,
  _rT,
  _sGI,
  _sI,
  _sTA,
  _tIOF,
  _UIC,
  _UICR,
  _UICRp,
  n0,
} from "./schemas_0";
import { InfrastructureConfiguration, InstanceMetadataOptions, Logging, Placement } from "./schemas_12_Infrastructure";

/* eslint no-var: 0 */

export var GetInfrastructureConfigurationRequest = struct(
  n0,
  _GICR,
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
export var GetInfrastructureConfigurationResponse = struct(
  n0,
  _GICRe,
  0,
  [_rI, _iCn],
  [0, () => InfrastructureConfiguration]
);
export var UpdateInfrastructureConfigurationRequest = struct(
  n0,
  _UICR,
  0,
  [_iCA, _d, _iT, _iPN, _sGI, _sI, _l, _kP, _tIOF, _sTA, _rT, _iMO, _pl, _cT],
  [0, 0, 64 | 0, 0, 64 | 0, 0, () => Logging, 0, 2, 0, 128 | 0, () => InstanceMetadataOptions, () => Placement, [0, 4]]
);
export var UpdateInfrastructureConfigurationResponse = struct(n0, _UICRp, 0, [_rI, _cT, _iCA], [0, 0, 0]);
export var GetInfrastructureConfiguration = op(
  n0,
  _GIC,
  {
    [_ht]: ["GET", "/GetInfrastructureConfiguration", 200],
  },
  () => GetInfrastructureConfigurationRequest,
  () => GetInfrastructureConfigurationResponse
);
export var UpdateInfrastructureConfiguration = op(
  n0,
  _UIC,
  {
    [_ht]: ["PUT", "/UpdateInfrastructureConfiguration", 200],
  },
  () => UpdateInfrastructureConfigurationRequest,
  () => UpdateInfrastructureConfigurationResponse
);
