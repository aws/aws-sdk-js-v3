// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { InvalidNextTokenException as __InvalidNextTokenException } from "../models/index";
import {
  _AA,
  _AAt,
  _Ac,
  _AP,
  _ASA,
  _Att,
  _BCy,
  _C,
  _c,
  _CAAr,
  _CARro,
  _CARros,
  _CRAu,
  _CRLu,
  _DAe,
  _DPM,
  _DPMe,
  _DSA,
  _DTS,
  _e,
  _EGA,
  _EGR,
  _EI,
  _hE,
  _IAp,
  _IAT,
  _INTE,
  _LAi,
  _LAR,
  _LARi,
  _LBC,
  _LBCR,
  _LBCRi,
  _LCAA,
  _LCAAR,
  _LCAARi,
  _LCAR,
  _LCARR,
  _LCARRi,
  _LCRA,
  _LCRAR,
  _LCRARi,
  _LCRL,
  _LCRLR,
  _LCRLRi,
  _LCRPM,
  _LCRPMBD,
  _LCRPMBDR,
  _LCRPMBDRi,
  _LCRPMR,
  _LCRPMRi,
  _Li,
  _LL,
  _LLR,
  _LLRi,
  _M,
  _MR,
  _NT,
  _PM,
  _PMo,
  _Po,
  _Pro,
  _ROAAIe,
  _SA,
  _SAo,
  n0,
} from "./schemas_0";
import { Accelerator, CustomRoutingAccelerator } from "./schemas_1_Accelerator";
import { ByoipCidr } from "./schemas_3_Byoip";
import { CustomRoutingListener, Listener } from "./schemas_8_Listener";
import { Attachment } from "./schemas_14_Account";

/* eslint no-var: 0 */

export var CrossAccountResource = struct(n0, _CARro, 0, [_EI, _C, _AAt], [0, 0, 0]);
export var DestinationPortMapping = struct(
  n0,
  _DPM,
  0,
  [_AA, _ASA, _EGA, _EI, _EGR, _DSA, _IAT, _DTS],
  [0, () => SocketAddresses, 0, 0, 0, () => SocketAddress, 0, 0]
);
export var InvalidNextTokenException = error(
  n0,
  _INTE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __InvalidNextTokenException
);
export var ListAcceleratorsRequest = struct(n0, _LAR, 0, [_MR, _NT], [1, 0]);
export var ListAcceleratorsResponse = struct(n0, _LARi, 0, [_Ac, _NT], [() => Accelerators, 0]);
export var ListByoipCidrsRequest = struct(n0, _LBCR, 0, [_MR, _NT], [1, 0]);
export var ListByoipCidrsResponse = struct(n0, _LBCRi, 0, [_BCy, _NT], [() => ByoipCidrs, 0]);
export var ListCrossAccountAttachmentsRequest = struct(n0, _LCAAR, 0, [_MR, _NT], [1, 0]);
export var ListCrossAccountAttachmentsResponse = struct(n0, _LCAARi, 0, [_CAAr, _NT], [() => Attachments, 0]);
export var ListCrossAccountResourcesRequest = struct(n0, _LCARR, 0, [_AA, _ROAAIe, _MR, _NT], [0, 0, 1, 0]);
export var ListCrossAccountResourcesResponse = struct(n0, _LCARRi, 0, [_CARros, _NT], [() => CrossAccountResources, 0]);
export var ListCustomRoutingAcceleratorsRequest = struct(n0, _LCRAR, 0, [_MR, _NT], [1, 0]);
export var ListCustomRoutingAcceleratorsResponse = struct(
  n0,
  _LCRARi,
  0,
  [_Ac, _NT],
  [() => CustomRoutingAccelerators, 0]
);
export var ListCustomRoutingListenersRequest = struct(n0, _LCRLR, 0, [_AA, _MR, _NT], [0, 1, 0]);
export var ListCustomRoutingListenersResponse = struct(n0, _LCRLRi, 0, [_Li, _NT], [() => CustomRoutingListeners, 0]);
export var ListCustomRoutingPortMappingsByDestinationRequest = struct(
  n0,
  _LCRPMBDR,
  0,
  [_EI, _DAe, _MR, _NT],
  [0, 0, 1, 0]
);
export var ListCustomRoutingPortMappingsByDestinationResponse = struct(
  n0,
  _LCRPMBDRi,
  0,
  [_DPMe, _NT],
  [() => DestinationPortMappings, 0]
);
export var ListCustomRoutingPortMappingsRequest = struct(n0, _LCRPMR, 0, [_AA, _EGA, _MR, _NT], [0, 0, 1, 0]);
export var ListCustomRoutingPortMappingsResponse = struct(n0, _LCRPMRi, 0, [_PM, _NT], [() => PortMappings, 0]);
export var ListListenersRequest = struct(n0, _LLR, 0, [_AA, _MR, _NT], [0, 1, 0]);
export var ListListenersResponse = struct(n0, _LLRi, 0, [_Li, _NT], [() => Listeners, 0]);
export var PortMapping = struct(
  n0,
  _PMo,
  0,
  [_AP, _EGA, _EI, _DSA, _Pro, _DTS],
  [1, 0, 0, () => SocketAddress, 64 | 0, 0]
);
export var SocketAddress = struct(n0, _SA, 0, [_IAp, _Po], [0, 1]);
export var Accelerators = list(n0, _Ac, 0, () => Accelerator);
export var Attachments = list(n0, _Att, 0, () => Attachment);
export var ByoipCidrs = list(n0, _BCy, 0, () => ByoipCidr);
export var CrossAccountResources = list(n0, _CARros, 0, () => CrossAccountResource);
export var CustomRoutingAccelerators = list(n0, _CRAu, 0, () => CustomRoutingAccelerator);
export var CustomRoutingListeners = list(n0, _CRLu, 0, () => CustomRoutingListener);
export var DestinationPortMappings = list(n0, _DPMe, 0, () => DestinationPortMapping);
export var Listeners = list(n0, _Li, 0, () => Listener);
export var PortMappings = list(n0, _PM, 0, () => PortMapping);
export var SocketAddresses = list(n0, _SAo, 0, () => SocketAddress);
export var ListAccelerators = op(
  n0,
  _LAi,
  0,
  () => ListAcceleratorsRequest,
  () => ListAcceleratorsResponse
);
export var ListByoipCidrs = op(
  n0,
  _LBC,
  0,
  () => ListByoipCidrsRequest,
  () => ListByoipCidrsResponse
);
export var ListCrossAccountAttachments = op(
  n0,
  _LCAA,
  0,
  () => ListCrossAccountAttachmentsRequest,
  () => ListCrossAccountAttachmentsResponse
);
export var ListCrossAccountResources = op(
  n0,
  _LCAR,
  0,
  () => ListCrossAccountResourcesRequest,
  () => ListCrossAccountResourcesResponse
);
export var ListCustomRoutingAccelerators = op(
  n0,
  _LCRA,
  0,
  () => ListCustomRoutingAcceleratorsRequest,
  () => ListCustomRoutingAcceleratorsResponse
);
export var ListCustomRoutingListeners = op(
  n0,
  _LCRL,
  0,
  () => ListCustomRoutingListenersRequest,
  () => ListCustomRoutingListenersResponse
);
export var ListCustomRoutingPortMappings = op(
  n0,
  _LCRPM,
  0,
  () => ListCustomRoutingPortMappingsRequest,
  () => ListCustomRoutingPortMappingsResponse
);
export var ListCustomRoutingPortMappingsByDestination = op(
  n0,
  _LCRPMBD,
  0,
  () => ListCustomRoutingPortMappingsByDestinationRequest,
  () => ListCustomRoutingPortMappingsByDestinationResponse
);
export var ListListeners = op(
  n0,
  _LL,
  0,
  () => ListListenersRequest,
  () => ListListenersResponse
);
