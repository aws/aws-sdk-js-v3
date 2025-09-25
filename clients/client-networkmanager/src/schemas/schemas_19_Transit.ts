// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _AI,
  _C,
  _CA,
  _CNA,
  _CNI,
  _cNI,
  _DP,
  _DPR,
  _DPRe,
  _EL,
  _eL,
  _GTGRTA,
  _GTGRTAR,
  _GTGRTARe,
  _h,
  _hQ,
  _LME,
  _LP,
  _LPR,
  _LPRi,
  _M,
  _MP,
  _MPC,
  _MR,
  _mR,
  _NT,
  _nT,
  _OAI,
  _Pe,
  _PEC,
  _PEe,
  _Pee,
  _PEL,
  _PI,
  _PL,
  _PT,
  _pT,
  _RA,
  _RI,
  _S,
  _st,
  _T,
  _TGRTA,
  _TGRTAr,
  Attachment,
  n0,
  TagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeletePeeringRequest = struct(n0, _DPR, 0, [_PI], [[0, 1]]);
export var DeletePeeringResponse = struct(n0, _DPRe, 0, [_Pe], [() => Peering]);
export var GetTransitGatewayRouteTableAttachmentRequest = struct(n0, _GTGRTAR, 0, [_AI], [[0, 1]]);
export var GetTransitGatewayRouteTableAttachmentResponse = struct(
  n0,
  _GTGRTARe,
  0,
  [_TGRTAr],
  [() => TransitGatewayRouteTableAttachment]
);
export var ListPeeringsRequest = struct(
  n0,
  _LPR,
  0,
  [_CNI, _PT, _EL, _S, _MR, _NT],
  [
    [
      0,
      {
        [_hQ]: _cNI,
      },
    ],
    [
      0,
      {
        [_hQ]: _pT,
      },
    ],
    [
      0,
      {
        [_hQ]: _eL,
      },
    ],
    [
      0,
      {
        [_hQ]: _st,
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
export var ListPeeringsResponse = struct(n0, _LPRi, 0, [_Pee, _NT], [() => PeeringList, 0]);
export var Peering = struct(
  n0,
  _Pe,
  0,
  [_CNI, _CNA, _PI, _OAI, _PT, _S, _EL, _RA, _T, _CA, _LME],
  [0, 0, 0, 0, 0, 0, 0, 0, () => TagList, 4, () => PeeringErrorList]
);
export var PeeringError = struct(n0, _PEe, 0, [_C, _M, _RA, _RI, _MPC], [0, 0, 0, 0, () => PermissionsErrorContext]);
export var PermissionsErrorContext = struct(n0, _PEC, 0, [_MP], [0]);
export var TransitGatewayRouteTableAttachment = struct(n0, _TGRTAr, 0, [_A, _PI, _TGRTA], [() => Attachment, 0, 0]);
export var PeeringErrorList = list(n0, _PEL, 0, () => PeeringError);
export var PeeringList = list(n0, _PL, 0, () => Peering);
export var DeletePeering = op(
  n0,
  _DP,
  {
    [_h]: ["DELETE", "/peerings/{PeeringId}", 200],
  },
  () => DeletePeeringRequest,
  () => DeletePeeringResponse
);
export var GetTransitGatewayRouteTableAttachment = op(
  n0,
  _GTGRTA,
  {
    [_h]: ["GET", "/transit-gateway-route-table-attachments/{AttachmentId}", 200],
  },
  () => GetTransitGatewayRouteTableAttachmentRequest,
  () => GetTransitGatewayRouteTableAttachmentResponse
);
export var ListPeerings = op(
  n0,
  _LP,
  {
    [_h]: ["GET", "/peerings", 200],
  },
  () => ListPeeringsRequest,
  () => ListPeeringsResponse
);
