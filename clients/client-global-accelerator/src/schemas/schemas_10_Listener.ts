// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CRDD,
  _CRDDu,
  _CREG,
  _DCREGe,
  _DCREGRe,
  _DCREGRes,
  _DD,
  _ED,
  _EG,
  _EGA,
  _EGR,
  _FP,
  _Pro,
  _TP,
  n0,
} from "./schemas_0";
import { CustomRoutingEndpointDescriptions } from "./schemas_6_Routing";

/* eslint no-var: 0 */

export var CustomRoutingDestinationDescription = struct(n0, _CRDD, 0, [_FP, _TP, _Pro], [1, 1, 64 | 0]);
export var CustomRoutingEndpointGroup = struct(
  n0,
  _CREG,
  0,
  [_EGA, _EGR, _DD, _ED],
  [0, 0, () => CustomRoutingDestinationDescriptions, () => CustomRoutingEndpointDescriptions]
);
export var DescribeCustomRoutingEndpointGroupRequest = struct(n0, _DCREGRe, 0, [_EGA], [0]);
export var DescribeCustomRoutingEndpointGroupResponse = struct(
  n0,
  _DCREGRes,
  0,
  [_EG],
  [() => CustomRoutingEndpointGroup]
);
export var CustomRoutingDestinationDescriptions = list(n0, _CRDDu, 0, () => CustomRoutingDestinationDescription);
export var Protocols = 64 | 0;

export var DescribeCustomRoutingEndpointGroup = op(
  n0,
  _DCREGe,
  0,
  () => DescribeCustomRoutingEndpointGroupRequest,
  () => DescribeCustomRoutingEndpointGroupResponse
);
