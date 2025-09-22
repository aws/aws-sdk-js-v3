// smithy-typescript generated code
import { list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _a,
  _aATSSN,
  _aM,
  _AR,
  _aR,
  _cA,
  _cDN,
  _dN,
  _DR,
  _dR,
  _DRG,
  _DRGR,
  _DRGRe,
  _fR,
  _GRC,
  _GRCR,
  _GRCRe,
  _h,
  _hQ,
  _i,
  _iA,
  _iAT,
  _IR,
  _iR,
  _it,
  _LRC,
  _LRCR,
  _LRCRi,
  _lUA,
  _mR,
  _n,
  _nT,
  _p,
  _pR,
  _RCD,
  _rCD,
  _rCGI,
  _rCGIe,
  _rCI,
  _RCS,
  _RCSL,
  _rGI,
  _rGIe,
  _st,
  _ty,
  _URC,
  _URCR,
  _URCRp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ArnResource = struct(n0, _AR, 0, [_a], [0]);
export var DeleteResourceGatewayRequest = struct(n0, _DRGR, 0, [_rGI], [[0, 1]]);
export var DeleteResourceGatewayResponse = struct(n0, _DRGRe, 0, [_i, _a, _n, _st], [0, 0, 0, 0]);
export var DnsResource = struct(n0, _DR, 0, [_dN, _iAT], [0, 0]);
export var GetResourceConfigurationRequest = struct(n0, _GRCR, 0, [_rCI], [[0, 1]]);
export var GetResourceConfigurationResponse = struct(
  n0,
  _GRCRe,
  0,
  [_i, _n, _a, _rGIe, _rCGIe, _ty, _aATSSN, _pR, _p, _cDN, _st, _rCD, _cA, _aM, _fR, _lUA],
  [0, 0, 0, 0, 0, 0, 2, 64 | 0, 0, 0, 0, () => ResourceConfigurationDefinition, 5, 2, 0, 5]
);
export var IpResource = struct(n0, _IR, 0, [_iA], [0]);
export var ListResourceConfigurationsRequest = struct(
  n0,
  _LRCR,
  0,
  [_rGI, _rCGI, _mR, _nT],
  [
    [
      0,
      {
        [_hQ]: _rGI,
      },
    ],
    [
      0,
      {
        [_hQ]: _rCGI,
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
export var ListResourceConfigurationsResponse = struct(
  n0,
  _LRCRi,
  0,
  [_it, _nT],
  [() => ResourceConfigurationSummaryList, 0]
);
export var ResourceConfigurationSummary = struct(
  n0,
  _RCS,
  0,
  [_i, _n, _a, _rGIe, _rCGIe, _ty, _st, _aM, _cA, _lUA],
  [0, 0, 0, 0, 0, 0, 0, 2, 5, 5]
);
export var UpdateResourceConfigurationRequest = struct(
  n0,
  _URCR,
  0,
  [_rCI, _rCD, _aATSSN, _pR],
  [[0, 1], () => ResourceConfigurationDefinition, 2, 64 | 0]
);
export var UpdateResourceConfigurationResponse = struct(
  n0,
  _URCRp,
  0,
  [_i, _n, _a, _rGIe, _rCGIe, _ty, _pR, _aATSSN, _p, _st, _rCD],
  [0, 0, 0, 0, 0, 0, 64 | 0, 2, 0, 0, () => ResourceConfigurationDefinition]
);
export var PortRangeList = 64 | 0;

export var ResourceConfigurationSummaryList = list(n0, _RCSL, 0, () => ResourceConfigurationSummary);
export var ResourceConfigurationDefinition = uni(
  n0,
  _RCD,
  0,
  [_dR, _iR, _aR],
  [() => DnsResource, () => IpResource, () => ArnResource]
);
export var DeleteResourceGateway = op(
  n0,
  _DRG,
  {
    [_h]: ["DELETE", "/resourcegateways/{resourceGatewayIdentifier}", 200],
  },
  () => DeleteResourceGatewayRequest,
  () => DeleteResourceGatewayResponse
);
export var GetResourceConfiguration = op(
  n0,
  _GRC,
  {
    [_h]: ["GET", "/resourceconfigurations/{resourceConfigurationIdentifier}", 200],
  },
  () => GetResourceConfigurationRequest,
  () => GetResourceConfigurationResponse
);
export var ListResourceConfigurations = op(
  n0,
  _LRC,
  {
    [_h]: ["GET", "/resourceconfigurations", 200],
  },
  () => ListResourceConfigurationsRequest,
  () => ListResourceConfigurationsResponse
);
export var UpdateResourceConfiguration = op(
  n0,
  _URC,
  {
    [_h]: ["PATCH", "/resourceconfigurations/{resourceConfigurationIdentifier}", 200],
  },
  () => UpdateResourceConfigurationRequest,
  () => UpdateResourceConfigurationResponse
);
