// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _C,
  _CS,
  _DCB,
  _Def,
  _Dest,
  _DTG,
  _DTGR,
  _DTGRe,
  _FP,
  _GNI,
  _GRA,
  _GRAR,
  _GRARe,
  _GTGP,
  _GTGPR,
  _GTGPRe,
  _GTGR,
  _GTGRR,
  _GTGRRe,
  _h,
  _hQ,
  _IA,
  _IM,
  _IRP,
  _M,
  _MR,
  _mR,
  _NRS,
  _NT,
  _nT,
  _NTa,
  _OAI,
  _Pa,
  _PC,
  _PCL,
  _Pe,
  _PI,
  _RA,
  _RAC,
  _RAEO,
  _RAEOS,
  _RAI,
  _RAo,
  _RAP,
  _RC,
  _RCe,
  _RCea,
  _Re,
  _RGA,
  _RP,
  _RT,
  _RTG,
  _RTGR,
  _RTGRe,
  _S,
  _Seq,
  _So,
  _SRA,
  _SRAR,
  _SRARt,
  _ST,
  _St,
  _TGA,
  _tGA,
  _TGAA,
  _TGAr,
  _TGP,
  _TGPAI,
  _TGR,
  _TGRL,
  _TGRr,
  _TGRSR,
  _UM,
  n0,
} from "./schemas_0";
import { Peering } from "./schemas_19_Transit";

/* eslint no-var: 0 */

export var DeregisterTransitGatewayRequest = struct(
  n0,
  _DTGR,
  0,
  [_GNI, _TGA],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeregisterTransitGatewayResponse = struct(n0, _DTGRe, 0, [_TGR], [() => TransitGatewayRegistration]);
export var GetRouteAnalysisRequest = struct(
  n0,
  _GRAR,
  0,
  [_GNI, _RAI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetRouteAnalysisResponse = struct(n0, _GRARe, 0, [_RAo], [() => RouteAnalysis]);
export var GetTransitGatewayPeeringRequest = struct(n0, _GTGPR, 0, [_PI], [[0, 1]]);
export var GetTransitGatewayPeeringResponse = struct(n0, _GTGPRe, 0, [_TGP], [() => TransitGatewayPeering]);
export var GetTransitGatewayRegistrationsRequest = struct(
  n0,
  _GTGRR,
  0,
  [_GNI, _TGAr, _MR, _NT],
  [
    [0, 1],
    [
      64 | 0,
      {
        [_hQ]: _tGA,
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
export var GetTransitGatewayRegistrationsResponse = struct(
  n0,
  _GTGRRe,
  0,
  [_TGRr, _NT],
  [() => TransitGatewayRegistrationList, 0]
);
export var NetworkResourceSummary = struct(n0, _NRS, 0, [_RGA, _RA, _RT, _Def, _NTa, _IM], [0, 0, 0, 0, 0, 2]);
export var PathComponent = struct(n0, _PC, 0, [_Seq, _Re, _DCB], [1, () => NetworkResourceSummary, 0]);
export var RegisterTransitGatewayRequest = struct(n0, _RTGR, 0, [_GNI, _TGA], [[0, 1], 0]);
export var RegisterTransitGatewayResponse = struct(n0, _RTGRe, 0, [_TGR], [() => TransitGatewayRegistration]);
export var RouteAnalysis = struct(
  n0,
  _RAo,
  0,
  [_GNI, _OAI, _RAI, _ST, _St, _So, _Dest, _IRP, _UM, _FP, _RP],
  [
    0,
    0,
    0,
    4,
    0,
    () => RouteAnalysisEndpointOptions,
    () => RouteAnalysisEndpointOptions,
    2,
    2,
    () => RouteAnalysisPath,
    () => RouteAnalysisPath,
  ]
);
export var RouteAnalysisCompletion = struct(n0, _RAC, 0, [_RC, _RCe, _RCea], [0, 0, 128 | 0]);
export var RouteAnalysisEndpointOptions = struct(n0, _RAEO, 0, [_TGAA, _TGA, _IA], [0, 0, 0]);
export var RouteAnalysisEndpointOptionsSpecification = struct(n0, _RAEOS, 0, [_TGAA, _IA], [0, 0]);
export var RouteAnalysisPath = struct(
  n0,
  _RAP,
  0,
  [_CS, _Pa],
  [() => RouteAnalysisCompletion, () => PathComponentList]
);
export var StartRouteAnalysisRequest = struct(
  n0,
  _SRAR,
  0,
  [_GNI, _So, _Dest, _IRP, _UM],
  [[0, 1], () => RouteAnalysisEndpointOptionsSpecification, () => RouteAnalysisEndpointOptionsSpecification, 2, 2]
);
export var StartRouteAnalysisResponse = struct(n0, _SRARt, 0, [_RAo], [() => RouteAnalysis]);
export var TransitGatewayPeering = struct(n0, _TGP, 0, [_Pe, _TGA, _TGPAI], [() => Peering, 0, 0]);
export var TransitGatewayRegistration = struct(
  n0,
  _TGR,
  0,
  [_GNI, _TGA, _S],
  [0, 0, () => TransitGatewayRegistrationStateReason]
);
export var TransitGatewayRegistrationStateReason = struct(n0, _TGRSR, 0, [_C, _M], [0, 0]);
export var PathComponentList = list(n0, _PCL, 0, () => PathComponent);
export var TransitGatewayArnList = 64 | 0;

export var TransitGatewayRegistrationList = list(n0, _TGRL, 0, () => TransitGatewayRegistration);
export var ReasonContextMap = 128 | 0;

export var DeregisterTransitGateway = op(
  n0,
  _DTG,
  {
    [_h]: ["DELETE", "/global-networks/{GlobalNetworkId}/transit-gateway-registrations/{TransitGatewayArn}", 200],
  },
  () => DeregisterTransitGatewayRequest,
  () => DeregisterTransitGatewayResponse
);
export var GetRouteAnalysis = op(
  n0,
  _GRA,
  {
    [_h]: ["GET", "/global-networks/{GlobalNetworkId}/route-analyses/{RouteAnalysisId}", 200],
  },
  () => GetRouteAnalysisRequest,
  () => GetRouteAnalysisResponse
);
export var GetTransitGatewayPeering = op(
  n0,
  _GTGP,
  {
    [_h]: ["GET", "/transit-gateway-peerings/{PeeringId}", 200],
  },
  () => GetTransitGatewayPeeringRequest,
  () => GetTransitGatewayPeeringResponse
);
export var GetTransitGatewayRegistrations = op(
  n0,
  _GTGR,
  {
    [_h]: ["GET", "/global-networks/{GlobalNetworkId}/transit-gateway-registrations", 200],
  },
  () => GetTransitGatewayRegistrationsRequest,
  () => GetTransitGatewayRegistrationsResponse
);
export var RegisterTransitGateway = op(
  n0,
  _RTG,
  {
    [_h]: ["POST", "/global-networks/{GlobalNetworkId}/transit-gateway-registrations", 200],
  },
  () => RegisterTransitGatewayRequest,
  () => RegisterTransitGatewayResponse
);
export var StartRouteAnalysis = op(
  n0,
  _SRA,
  {
    [_h]: ["POST", "/global-networks/{GlobalNetworkId}/route-analyses", 200],
  },
  () => StartRouteAnalysisRequest,
  () => StartRouteAnalysisResponse
);
