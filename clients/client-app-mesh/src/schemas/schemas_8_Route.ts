// smithy-typescript generated code
import { list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _ac,
  _cT,
  _DGR,
  _DGRe,
  _DGRI,
  _DGRIe,
  _DGRO,
  _DGROe,
  _dP,
  _dTH,
  _end,
  _ex,
  _GGR,
  _GGRA,
  _GGRM,
  _GGRML,
  _GGRMr,
  _GGRR,
  _GMMM,
  _gR,
  _GRD,
  _GRHM,
  _GRHR,
  _gRN,
  _gRr,
  _GRS,
  _GRSa,
  _GRT,
  _GRVS,
  _h,
  _he,
  _HGR,
  _HGRA,
  _HGRH,
  _HGRHt,
  _HGRM,
  _HGRPR,
  _HGRPRt,
  _HGRR,
  _HMM,
  _HPM,
  _hQ,
  _HQP,
  _HQPt,
  _hR,
  _hRt,
  _ht,
  _i,
  _ma,
  _met,
  _meth,
  _mN,
  _mO,
  _MR,
  _n,
  _pa,
  _po,
  _pr,
  _pre,
  _qP,
  _QPM,
  _ra,
  _re,
  _reg,
  _s,
  _sN,
  _st,
  _sta,
  _su,
  _tar,
  _UGR,
  _UGRI,
  _UGRO,
  _v,
  _vGN,
  _vS,
  _vSN,
  n0,
  ResourceMetadata,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteGatewayRouteInput = struct(
  n0,
  _DGRI,
  0,
  [_gRN, _mN, _vGN, _mO],
  [
    [0, 1],
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _mO,
      },
    ],
  ]
);
export var DeleteGatewayRouteOutput = struct(n0, _DGRO, 0, [_gR], [[() => GatewayRouteData, 16]]);
export var DescribeGatewayRouteInput = struct(
  n0,
  _DGRIe,
  0,
  [_gRN, _mN, _vGN, _mO],
  [
    [0, 1],
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _mO,
      },
    ],
  ]
);
export var DescribeGatewayRouteOutput = struct(n0, _DGROe, 0, [_gR], [[() => GatewayRouteData, 16]]);
export var GatewayRouteData = struct(
  n0,
  _GRD,
  0,
  [_mN, _gRN, _vGN, _s, _met, _st],
  [0, 0, 0, () => GatewayRouteSpec, () => ResourceMetadata, () => GatewayRouteStatus]
);
export var GatewayRouteHostnameMatch = struct(n0, _GRHM, 0, [_ex, _su], [0, 0]);
export var GatewayRouteHostnameRewrite = struct(n0, _GRHR, 0, [_dTH], [0]);
export var GatewayRouteSpec = struct(
  n0,
  _GRS,
  0,
  [_pr, _hR, _hRt, _gRr],
  [1, () => HttpGatewayRoute, () => HttpGatewayRoute, () => GrpcGatewayRoute]
);
export var GatewayRouteStatus = struct(n0, _GRSa, 0, [_st], [0]);
export var GatewayRouteTarget = struct(n0, _GRT, 0, [_vS, _po], [() => GatewayRouteVirtualService, 1]);
export var GatewayRouteVirtualService = struct(n0, _GRVS, 0, [_vSN], [0]);
export var GrpcGatewayRoute = struct(
  n0,
  _GGR,
  0,
  [_ma, _ac],
  [() => GrpcGatewayRouteMatch, () => GrpcGatewayRouteAction]
);
export var GrpcGatewayRouteAction = struct(
  n0,
  _GGRA,
  0,
  [_tar, _re],
  [() => GatewayRouteTarget, () => GrpcGatewayRouteRewrite]
);
export var GrpcGatewayRouteMatch = struct(
  n0,
  _GGRM,
  0,
  [_sN, _h, _met, _po],
  [0, () => GatewayRouteHostnameMatch, () => GrpcGatewayRouteMetadataList, 1]
);
export var GrpcGatewayRouteMetadata = struct(n0, _GGRMr, 0, [_n, _i, _ma], [0, 2, () => GrpcMetadataMatchMethod]);
export var GrpcGatewayRouteRewrite = struct(n0, _GGRR, 0, [_h], [() => GatewayRouteHostnameRewrite]);
export var HttpGatewayRoute = struct(
  n0,
  _HGR,
  0,
  [_ma, _ac],
  [() => HttpGatewayRouteMatch, () => HttpGatewayRouteAction]
);
export var HttpGatewayRouteAction = struct(
  n0,
  _HGRA,
  0,
  [_tar, _re],
  [() => GatewayRouteTarget, () => HttpGatewayRouteRewrite]
);
export var HttpGatewayRouteHeader = struct(n0, _HGRH, 0, [_n, _i, _ma], [0, 2, () => HeaderMatchMethod]);
export var HttpGatewayRouteMatch = struct(
  n0,
  _HGRM,
  0,
  [_pre, _pa, _qP, _meth, _h, _he, _po],
  [
    0,
    () => HttpPathMatch,
    () => HttpQueryParameters,
    0,
    () => GatewayRouteHostnameMatch,
    () => HttpGatewayRouteHeaders,
    1,
  ]
);
export var HttpGatewayRoutePathRewrite = struct(n0, _HGRPR, 0, [_ex], [0]);
export var HttpGatewayRoutePrefixRewrite = struct(n0, _HGRPRt, 0, [_dP, _v], [0, 0]);
export var HttpGatewayRouteRewrite = struct(
  n0,
  _HGRR,
  0,
  [_pre, _pa, _h],
  [() => HttpGatewayRoutePrefixRewrite, () => HttpGatewayRoutePathRewrite, () => GatewayRouteHostnameRewrite]
);
export var HttpPathMatch = struct(n0, _HPM, 0, [_ex, _reg], [0, 0]);
export var HttpQueryParameter = struct(n0, _HQP, 0, [_n, _ma], [0, () => QueryParameterMatch]);
export var MatchRange = struct(n0, _MR, 0, [_sta, _end], [1, 1]);
export var QueryParameterMatch = struct(n0, _QPM, 0, [_ex], [0]);
export var UpdateGatewayRouteInput = struct(
  n0,
  _UGRI,
  0,
  [_gRN, _mN, _vGN, _s, _cT, _mO],
  [
    [0, 1],
    [0, 1],
    [0, 1],
    () => GatewayRouteSpec,
    [0, 4],
    [
      0,
      {
        [_hQ]: _mO,
      },
    ],
  ]
);
export var UpdateGatewayRouteOutput = struct(n0, _UGRO, 0, [_gR], [[() => GatewayRouteData, 16]]);
export var GrpcGatewayRouteMetadataList = list(n0, _GGRML, 0, () => GrpcGatewayRouteMetadata);
export var HttpGatewayRouteHeaders = list(n0, _HGRHt, 0, () => HttpGatewayRouteHeader);
export var HttpQueryParameters = list(n0, _HQPt, 0, () => HttpQueryParameter);
export var GrpcMetadataMatchMethod = uni(n0, _GMMM, 0, [_ex, _reg, _ra, _pre, _su], [0, 0, () => MatchRange, 0, 0]);
export var HeaderMatchMethod = uni(n0, _HMM, 0, [_ex, _reg, _ra, _pre, _su], [0, 0, () => MatchRange, 0, 0]);
export var DeleteGatewayRoute = op(
  n0,
  _DGR,
  {
    [_ht]: [
      "DELETE",
      "/v20190125/meshes/{meshName}/virtualGateway/{virtualGatewayName}/gatewayRoutes/{gatewayRouteName}",
      200,
    ],
  },
  () => DeleteGatewayRouteInput,
  () => DeleteGatewayRouteOutput
);
export var DescribeGatewayRoute = op(
  n0,
  _DGRe,
  {
    [_ht]: [
      "GET",
      "/v20190125/meshes/{meshName}/virtualGateway/{virtualGatewayName}/gatewayRoutes/{gatewayRouteName}",
      200,
    ],
  },
  () => DescribeGatewayRouteInput,
  () => DescribeGatewayRouteOutput
);
export var UpdateGatewayRoute = op(
  n0,
  _UGR,
  {
    [_ht]: [
      "PUT",
      "/v20190125/meshes/{meshName}/virtualGateway/{virtualGatewayName}/gatewayRoutes/{gatewayRouteName}",
      200,
    ],
  },
  () => UpdateGatewayRouteInput,
  () => UpdateGatewayRouteOutput
);
