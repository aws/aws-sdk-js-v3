// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AAt,
  _AEd,
  _AER,
  _AERd,
  _CIPPE,
  _DEGe,
  _DEGRe,
  _DEGRes,
  _EC,
  _ECn,
  _ED,
  _EDn,
  _EG,
  _EGA,
  _EGR,
  _EI,
  _EP,
  _HCIS,
  _HCP,
  _HCPe,
  _HCPea,
  _HR,
  _HS,
  _LP,
  _PO,
  _POo,
  _TC,
  _TDP,
  _UEG,
  _UEGR,
  _UEGRp,
  _W,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AddEndpointsRequest = struct(n0, _AER, 0, [_EC, _EGA], [() => EndpointConfigurations, 0]);
export var AddEndpointsResponse = struct(n0, _AERd, 0, [_ED, _EGA], [() => EndpointDescriptions, 0]);
export var DescribeEndpointGroupRequest = struct(n0, _DEGRe, 0, [_EGA], [0]);
export var DescribeEndpointGroupResponse = struct(n0, _DEGRes, 0, [_EG], [() => EndpointGroup]);
export var EndpointConfiguration = struct(n0, _ECn, 0, [_EI, _W, _CIPPE, _AAt], [0, 1, 2, 0]);
export var EndpointDescription = struct(n0, _EDn, 0, [_EI, _W, _HS, _HR, _CIPPE], [0, 1, 0, 0, 2]);
export var EndpointGroup = struct(
  n0,
  _EG,
  0,
  [_EGA, _EGR, _ED, _TDP, _HCP, _HCPe, _HCPea, _HCIS, _TC, _PO],
  [0, 0, () => EndpointDescriptions, 1, 1, 0, 0, 1, 1, () => PortOverrides]
);
export var PortOverride = struct(n0, _POo, 0, [_LP, _EP], [1, 1]);
export var UpdateEndpointGroupRequest = struct(
  n0,
  _UEGR,
  0,
  [_EGA, _EC, _TDP, _HCP, _HCPe, _HCPea, _HCIS, _TC, _PO],
  [0, () => EndpointConfigurations, 1, 1, 0, 0, 1, 1, () => PortOverrides]
);
export var UpdateEndpointGroupResponse = struct(n0, _UEGRp, 0, [_EG], [() => EndpointGroup]);
export var EndpointConfigurations = list(n0, _EC, 0, () => EndpointConfiguration);
export var EndpointDescriptions = list(n0, _ED, 0, () => EndpointDescription);
export var PortOverrides = list(n0, _PO, 0, () => PortOverride);
export var AddEndpoints = op(
  n0,
  _AEd,
  0,
  () => AddEndpointsRequest,
  () => AddEndpointsResponse
);
export var DescribeEndpointGroup = op(
  n0,
  _DEGe,
  0,
  () => DescribeEndpointGroupRequest,
  () => DescribeEndpointGroupResponse
);
export var UpdateEndpointGroup = op(
  n0,
  _UEG,
  0,
  () => UpdateEndpointGroupRequest,
  () => UpdateEndpointGroupResponse
);
