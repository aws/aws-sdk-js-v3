// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _a,
  _cA,
  _cB,
  _fC,
  _fM,
  _GRG,
  _GRGR,
  _GRGRe,
  _GSNVA,
  _GSNVAR,
  _GSNVARe,
  _h,
  _hQ,
  _i,
  _iAT,
  _it,
  _LRG,
  _LRGR,
  _LRGRi,
  _LSNVA,
  _LSNVAR,
  _LSNVARi,
  _lUA,
  _mR,
  _n,
  _nT,
  _rGI,
  _RGL,
  _RGS,
  _sGI,
  _sIu,
  _sNA,
  _sNI,
  _sNIe,
  _sNN,
  _sNVAI,
  _SNVAL,
  _SNVAS,
  _st,
  _URG,
  _URGR,
  _URGRp,
  _vI,
  _vIp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetResourceGatewayRequest = struct(n0, _GRGR, 0, [_rGI], [[0, 1]]);
export var GetResourceGatewayResponse = struct(
  n0,
  _GRGRe,
  0,
  [_n, _i, _a, _st, _vIp, _sIu, _sGI, _iAT, _cA, _lUA],
  [0, 0, 0, 0, 0, 64 | 0, 64 | 0, 0, 5, 5]
);
export var GetServiceNetworkVpcAssociationRequest = struct(n0, _GSNVAR, 0, [_sNVAI], [[0, 1]]);
export var GetServiceNetworkVpcAssociationResponse = struct(
  n0,
  _GSNVARe,
  0,
  [_i, _st, _a, _cB, _cA, _sNIe, _sNN, _sNA, _vIp, _sGI, _fM, _fC, _lUA],
  [0, 0, 0, 0, 5, 0, 0, 0, 0, 64 | 0, 0, 0, 5]
);
export var ListResourceGatewaysRequest = struct(
  n0,
  _LRGR,
  0,
  [_mR, _nT],
  [
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
export var ListResourceGatewaysResponse = struct(n0, _LRGRi, 0, [_it, _nT], [() => ResourceGatewayList, 0]);
export var ListServiceNetworkVpcAssociationsRequest = struct(
  n0,
  _LSNVAR,
  0,
  [_sNI, _vI, _mR, _nT],
  [
    [
      0,
      {
        [_hQ]: _sNI,
      },
    ],
    [
      0,
      {
        [_hQ]: _vI,
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
export var ListServiceNetworkVpcAssociationsResponse = struct(
  n0,
  _LSNVARi,
  0,
  [_it, _nT],
  [() => ServiceNetworkVpcAssociationList, 0]
);
export var ResourceGatewaySummary = struct(
  n0,
  _RGS,
  0,
  [_n, _i, _a, _st, _vI, _sIu, _sGI, _iAT, _cA, _lUA],
  [0, 0, 0, 0, 0, 64 | 0, 64 | 0, 0, 5, 5]
);
export var ServiceNetworkVpcAssociationSummary = struct(
  n0,
  _SNVAS,
  0,
  [_i, _a, _st, _cB, _cA, _sNIe, _sNN, _sNA, _vIp, _lUA],
  [0, 0, 0, 0, 5, 0, 0, 0, 0, 5]
);
export var UpdateResourceGatewayRequest = struct(n0, _URGR, 0, [_rGI, _sGI], [[0, 1], 64 | 0]);
export var UpdateResourceGatewayResponse = struct(
  n0,
  _URGRp,
  0,
  [_n, _i, _a, _st, _vIp, _sIu, _sGI, _iAT],
  [0, 0, 0, 0, 0, 64 | 0, 64 | 0, 0]
);
export var ResourceGatewayList = list(n0, _RGL, 0, () => ResourceGatewaySummary);
export var ServiceNetworkVpcAssociationList = list(n0, _SNVAL, 0, () => ServiceNetworkVpcAssociationSummary);
export var SubnetList = 64 | 0;

export var GetResourceGateway = op(
  n0,
  _GRG,
  {
    [_h]: ["GET", "/resourcegateways/{resourceGatewayIdentifier}", 200],
  },
  () => GetResourceGatewayRequest,
  () => GetResourceGatewayResponse
);
export var GetServiceNetworkVpcAssociation = op(
  n0,
  _GSNVA,
  {
    [_h]: ["GET", "/servicenetworkvpcassociations/{serviceNetworkVpcAssociationIdentifier}", 200],
  },
  () => GetServiceNetworkVpcAssociationRequest,
  () => GetServiceNetworkVpcAssociationResponse
);
export var ListResourceGateways = op(
  n0,
  _LRG,
  {
    [_h]: ["GET", "/resourcegateways", 200],
  },
  () => ListResourceGatewaysRequest,
  () => ListResourceGatewaysResponse
);
export var ListServiceNetworkVpcAssociations = op(
  n0,
  _LSNVA,
  {
    [_h]: ["GET", "/servicenetworkvpcassociations", 200],
  },
  () => ListServiceNetworkVpcAssociationsRequest,
  () => ListServiceNetworkVpcAssociationsResponse
);
export var UpdateResourceGateway = op(
  n0,
  _URG,
  {
    [_h]: ["PATCH", "/resourcegateways/{resourceGatewayIdentifier}", 200],
  },
  () => UpdateResourceGatewayRequest,
  () => UpdateResourceGatewayResponse
);
