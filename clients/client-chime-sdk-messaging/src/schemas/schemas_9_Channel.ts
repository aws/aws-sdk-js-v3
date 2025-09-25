// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CF,
  _CFA,
  _Con,
  _CTr,
  _DCFe,
  _DCFRe,
  _DCFRes,
  _EO,
  _FA,
  _h,
  _IT,
  _L,
  _LC,
  _LUT,
  _N,
  _PC,
  _PL,
  _Pr,
  _Pro,
  _RA,
  _UCF,
  _UCFR,
  _UCFRp,
  n0,
  NonEmptyResourceName,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ChannelFlow = struct(
  n0,
  _CF,
  0,
  [_CFA, _Pr, _N, _CTr, _LUT],
  [0, [() => ProcessorList, 0], [() => NonEmptyResourceName, 0], 4, 4]
);
export var DescribeChannelFlowRequest = struct(n0, _DCFRe, 0, [_CFA], [[0, 1]]);
export var DescribeChannelFlowResponse = struct(n0, _DCFRes, 0, [_CF], [[() => ChannelFlow, 0]]);
export var LambdaConfiguration = struct(n0, _LC, 0, [_RA, _IT], [0, 0]);
export var Processor = struct(
  n0,
  _Pro,
  0,
  [_N, _Con, _EO, _FA],
  [[() => NonEmptyResourceName, 0], () => ProcessorConfiguration, 1, 0]
);
export var ProcessorConfiguration = struct(n0, _PC, 0, [_L], [() => LambdaConfiguration]);
export var UpdateChannelFlowRequest = struct(
  n0,
  _UCFR,
  0,
  [_CFA, _Pr, _N],
  [
    [0, 1],
    [() => ProcessorList, 0],
    [() => NonEmptyResourceName, 0],
  ]
);
export var UpdateChannelFlowResponse = struct(n0, _UCFRp, 0, [_CFA], [0]);
export var ProcessorList = list(n0, _PL, 0, [() => Processor, 0]);
export var DescribeChannelFlow = op(
  n0,
  _DCFe,
  {
    [_h]: ["GET", "/channel-flows/{ChannelFlowArn}", 200],
  },
  () => DescribeChannelFlowRequest,
  () => DescribeChannelFlowResponse
);
export var UpdateChannelFlow = op(
  n0,
  _UCF,
  {
    [_h]: ["PUT", "/channel-flows/{ChannelFlowArn}", 200],
  },
  () => UpdateChannelFlowRequest,
  () => UpdateChannelFlowResponse
);
