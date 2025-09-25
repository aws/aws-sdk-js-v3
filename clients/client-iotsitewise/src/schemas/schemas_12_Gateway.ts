// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _cC,
  _cD,
  _cNa,
  _cSS,
  _DGCC,
  _DGCCR,
  _DGCCRe,
  _DGe,
  _DGRe,
  _DGRes,
  _end,
  _gA,
  _GCS,
  _gCS,
  _GCSa,
  _gI,
  _gN,
  _gP,
  _GS,
  _gS,
  _GSa,
  _gV,
  _hQ,
  _ht,
  _LG,
  _LGR,
  _LGRi,
  _lUD,
  _mR,
  _nT,
  _UGCC,
  _UGCCR,
  _UGCCRp,
  n0,
} from "./schemas_0";
import { GatewayPlatform } from "./schemas_25_Gateway";

/* eslint no-var: 0 */

export var DescribeGatewayCapabilityConfigurationRequest = struct(
  n0,
  _DGCCR,
  0,
  [_gI, _cNa],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DescribeGatewayCapabilityConfigurationResponse = struct(
  n0,
  _DGCCRe,
  0,
  [_gI, _cNa, _cC, _cSS],
  [0, 0, 0, 0]
);
export var DescribeGatewayRequest = struct(n0, _DGRe, 0, [_gI], [[0, 1]]);
export var DescribeGatewayResponse = struct(
  n0,
  _DGRes,
  0,
  [_gI, _gN, _gA, _gP, _gV, _gCS, _cD, _lUD],
  [0, 0, 0, () => GatewayPlatform, 0, () => GatewayCapabilitySummaries, 4, 4]
);
export var GatewayCapabilitySummary = struct(n0, _GCS, 0, [_cNa, _cSS], [0, 0]);
export var GatewaySummary = struct(
  n0,
  _GS,
  0,
  [_gI, _gN, _gP, _gV, _gCS, _cD, _lUD],
  [0, 0, () => GatewayPlatform, 0, () => GatewayCapabilitySummaries, 4, 4]
);
export var ListGatewaysRequest = struct(
  n0,
  _LGR,
  0,
  [_nT, _mR],
  [
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
  ]
);
export var ListGatewaysResponse = struct(n0, _LGRi, 0, [_gS, _nT], [() => GatewaySummaries, 0]);
export var UpdateGatewayCapabilityConfigurationRequest = struct(n0, _UGCCR, 0, [_gI, _cNa, _cC], [[0, 1], 0, 0]);
export var UpdateGatewayCapabilityConfigurationResponse = struct(n0, _UGCCRp, 0, [_cNa, _cSS], [0, 0]);
export var GatewayCapabilitySummaries = list(n0, _GCSa, 0, () => GatewayCapabilitySummary);
export var GatewaySummaries = list(n0, _GSa, 0, () => GatewaySummary);
export var DescribeGateway = op(
  n0,
  _DGe,
  {
    [_ht]: ["GET", "/20200301/gateways/{gatewayId}", 200],
    [_end]: ["api."],
  },
  () => DescribeGatewayRequest,
  () => DescribeGatewayResponse
);
export var DescribeGatewayCapabilityConfiguration = op(
  n0,
  _DGCC,
  {
    [_ht]: ["GET", "/20200301/gateways/{gatewayId}/capability/{capabilityNamespace}", 200],
    [_end]: ["api."],
  },
  () => DescribeGatewayCapabilityConfigurationRequest,
  () => DescribeGatewayCapabilityConfigurationResponse
);
export var ListGateways = op(
  n0,
  _LG,
  {
    [_ht]: ["GET", "/20200301/gateways", 200],
    [_end]: ["api."],
  },
  () => ListGatewaysRequest,
  () => ListGatewaysResponse
);
export var UpdateGatewayCapabilityConfiguration = op(
  n0,
  _UGCC,
  {
    [_ht]: ["POST", "/20200301/gateways/{gatewayId}/capability", 201],
    [_end]: ["api."],
  },
  () => UpdateGatewayCapabilityConfigurationRequest,
  () => UpdateGatewayCapabilityConfigurationResponse
);
