// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _CA,
  _CPA,
  _CRC,
  _CRCR,
  _CRCRr,
  _CT,
  _DRCe,
  _DRCRes,
  _DRCResc,
  _h,
  _N,
  _O,
  _RCA,
  _RCN,
  _RCo,
  _S,
  _URC,
  _URCR,
  _URCRp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateRoutingControlRequest = struct(n0, _CRCR, 0, [_CT, _CA, _CPA, _RCN], [[0, 4], 0, 0, 0]);
export var CreateRoutingControlResponse = struct(n0, _CRCRr, 0, [_RCo], [() => RoutingControl]);
export var DescribeRoutingControlRequest = struct(n0, _DRCRes, 0, [_RCA], [[0, 1]]);
export var DescribeRoutingControlResponse = struct(n0, _DRCResc, 0, [_RCo], [() => RoutingControl]);
export var RoutingControl = struct(n0, _RCo, 0, [_CPA, _N, _RCA, _S, _O], [0, 0, 0, 0, 0]);
export var UpdateRoutingControlRequest = struct(n0, _URCR, 0, [_RCA, _RCN], [0, 0]);
export var UpdateRoutingControlResponse = struct(n0, _URCRp, 0, [_RCo], [() => RoutingControl]);
export var CreateRoutingControl = op(
  n0,
  _CRC,
  {
    [_h]: ["POST", "/routingcontrol", 200],
  },
  () => CreateRoutingControlRequest,
  () => CreateRoutingControlResponse
);
export var DescribeRoutingControl = op(
  n0,
  _DRCe,
  {
    [_h]: ["GET", "/routingcontrol/{RoutingControlArn}", 200],
  },
  () => DescribeRoutingControlRequest,
  () => DescribeRoutingControlResponse
);
export var UpdateRoutingControl = op(
  n0,
  _URC,
  {
    [_h]: ["PUT", "/routingcontrol", 200],
  },
  () => UpdateRoutingControlRequest,
  () => UpdateRoutingControlResponse
);
