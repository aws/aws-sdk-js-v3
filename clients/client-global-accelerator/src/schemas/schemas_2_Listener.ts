// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  AssociatedEndpointGroupFoundException as __AssociatedEndpointGroupFoundException,
  EndpointGroupAlreadyExistsException as __EndpointGroupAlreadyExistsException,
  ListenerNotFoundException as __ListenerNotFoundException,
} from "../models/index";
import {
  _AEGFE,
  _c,
  _CA,
  _CCREG,
  _CCREGR,
  _CCREGRr,
  _CEG,
  _CEGR,
  _CEGRr,
  _CRDC,
  _CRDCu,
  _CREGu,
  _DC,
  _DCRL,
  _DCRLe,
  _DCRLR,
  _DCRLRe,
  _DCRLRes,
  _DL,
  _DLe,
  _DLR,
  _DLRe,
  _DLRes,
  _e,
  _EC,
  _EG,
  _EGAEE,
  _EGn,
  _EGR,
  _FP,
  _HCIS,
  _HCP,
  _HCPe,
  _HCPea,
  _hE,
  _IT,
  _L,
  _LA,
  _LCREG,
  _LCREGR,
  _LCREGRi,
  _LEG,
  _LEGR,
  _LEGRi,
  _LNFE,
  _LTFR,
  _LTFRR,
  _LTFRRi,
  _M,
  _MR,
  _NT,
  _PO,
  _PR,
  _Pr,
  _Pro,
  _RA,
  _Ta,
  _TC,
  _TDP,
  _TP,
  _UCRL,
  _UCRLR,
  _UCRLRp,
  _UL,
  _ULR,
  _ULRp,
  n0,
  Unit,
} from "./schemas_0";
import { EndpointConfigurations, EndpointGroup, PortOverrides } from "./schemas_5_Endpoint";
import { CustomRoutingListener, Listener, PortRanges } from "./schemas_8_Listener";
import { CustomRoutingEndpointGroup } from "./schemas_10_Listener";
import { Tags } from "./schemas_12_Create";

/* eslint no-var: 0 */

export var AssociatedEndpointGroupFoundException = error(
  n0,
  _AEGFE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __AssociatedEndpointGroupFoundException
);
export var CreateCustomRoutingEndpointGroupRequest = struct(
  n0,
  _CCREGR,
  0,
  [_LA, _EGR, _DC, _IT],
  [0, 0, () => CustomRoutingDestinationConfigurations, [0, 4]]
);
export var CreateCustomRoutingEndpointGroupResponse = struct(
  n0,
  _CCREGRr,
  0,
  [_EG],
  [() => CustomRoutingEndpointGroup]
);
export var CreateEndpointGroupRequest = struct(
  n0,
  _CEGR,
  0,
  [_LA, _EGR, _EC, _TDP, _HCP, _HCPe, _HCPea, _HCIS, _TC, _IT, _PO],
  [0, 0, () => EndpointConfigurations, 1, 1, 0, 0, 1, 1, [0, 4], () => PortOverrides]
);
export var CreateEndpointGroupResponse = struct(n0, _CEGRr, 0, [_EG], [() => EndpointGroup]);
export var CustomRoutingDestinationConfiguration = struct(n0, _CRDC, 0, [_FP, _TP, _Pro], [1, 1, 64 | 0]);
export var DeleteCustomRoutingListenerRequest = struct(n0, _DCRLR, 0, [_LA], [0]);
export var DeleteListenerRequest = struct(n0, _DLR, 0, [_LA], [0]);
export var DescribeCustomRoutingListenerRequest = struct(n0, _DCRLRe, 0, [_LA], [0]);
export var DescribeCustomRoutingListenerResponse = struct(n0, _DCRLRes, 0, [_L], [() => CustomRoutingListener]);
export var DescribeListenerRequest = struct(n0, _DLRe, 0, [_LA], [0]);
export var DescribeListenerResponse = struct(n0, _DLRes, 0, [_L], [() => Listener]);
export var EndpointGroupAlreadyExistsException = error(
  n0,
  _EGAEE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __EndpointGroupAlreadyExistsException
);
export var ListCustomRoutingEndpointGroupsRequest = struct(n0, _LCREGR, 0, [_LA, _MR, _NT], [0, 1, 0]);
export var ListCustomRoutingEndpointGroupsResponse = struct(
  n0,
  _LCREGRi,
  0,
  [_EGn, _NT],
  [() => CustomRoutingEndpointGroups, 0]
);
export var ListEndpointGroupsRequest = struct(n0, _LEGR, 0, [_LA, _MR, _NT], [0, 1, 0]);
export var ListEndpointGroupsResponse = struct(n0, _LEGRi, 0, [_EGn, _NT], [() => EndpointGroups, 0]);
export var ListenerNotFoundException = error(
  n0,
  _LNFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_M],
  [0],

  __ListenerNotFoundException
);
export var ListTagsForResourceRequest = struct(n0, _LTFRR, 0, [_RA], [0]);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_Ta], [() => Tags]);
export var UpdateCustomRoutingListenerRequest = struct(n0, _UCRLR, 0, [_LA, _PR], [0, () => PortRanges]);
export var UpdateCustomRoutingListenerResponse = struct(n0, _UCRLRp, 0, [_L], [() => CustomRoutingListener]);
export var UpdateListenerRequest = struct(n0, _ULR, 0, [_LA, _PR, _Pr, _CA], [0, () => PortRanges, 0, 0]);
export var UpdateListenerResponse = struct(n0, _ULRp, 0, [_L], [() => Listener]);
export var CustomRoutingDestinationConfigurations = list(n0, _CRDCu, 0, () => CustomRoutingDestinationConfiguration);
export var CustomRoutingEndpointGroups = list(n0, _CREGu, 0, () => CustomRoutingEndpointGroup);
export var EndpointGroups = list(n0, _EGn, 0, () => EndpointGroup);
export var CreateCustomRoutingEndpointGroup = op(
  n0,
  _CCREG,
  0,
  () => CreateCustomRoutingEndpointGroupRequest,
  () => CreateCustomRoutingEndpointGroupResponse
);
export var CreateEndpointGroup = op(
  n0,
  _CEG,
  0,
  () => CreateEndpointGroupRequest,
  () => CreateEndpointGroupResponse
);
export var DeleteCustomRoutingListener = op(
  n0,
  _DCRL,
  0,
  () => DeleteCustomRoutingListenerRequest,
  () => Unit
);
export var DeleteListener = op(
  n0,
  _DL,
  0,
  () => DeleteListenerRequest,
  () => Unit
);
export var DescribeCustomRoutingListener = op(
  n0,
  _DCRLe,
  0,
  () => DescribeCustomRoutingListenerRequest,
  () => DescribeCustomRoutingListenerResponse
);
export var DescribeListener = op(
  n0,
  _DLe,
  0,
  () => DescribeListenerRequest,
  () => DescribeListenerResponse
);
export var ListCustomRoutingEndpointGroups = op(
  n0,
  _LCREG,
  0,
  () => ListCustomRoutingEndpointGroupsRequest,
  () => ListCustomRoutingEndpointGroupsResponse
);
export var ListEndpointGroups = op(
  n0,
  _LEG,
  0,
  () => ListEndpointGroupsRequest,
  () => ListEndpointGroupsResponse
);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  0,
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse
);
export var UpdateCustomRoutingListener = op(
  n0,
  _UCRL,
  0,
  () => UpdateCustomRoutingListenerRequest,
  () => UpdateCustomRoutingListenerResponse
);
export var UpdateListener = op(
  n0,
  _UL,
  0,
  () => UpdateListenerRequest,
  () => UpdateListenerResponse
);
