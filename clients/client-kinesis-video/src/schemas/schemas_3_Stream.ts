// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  InvalidResourceFormatException as __InvalidResourceFormatException,
  NotAuthorizedException as __NotAuthorizedException,
} from "../models/index";
import {
  _APIN,
  _c,
  _CTr,
  _CVu,
  _DE,
  _DN,
  _DRCIH,
  _DS,
  _DSe,
  _DSI,
  _DSIe,
  _DSO,
  _DSOe,
  _e,
  _EC,
  _ECd,
  _FSD,
  _GDE,
  _GDEI,
  _GDEO,
  _h,
  _HDA,
  _hE,
  _IRFE,
  _LEAC,
  _LEACEC,
  _LEACECL,
  _LEACI,
  _LEACO,
  _LTFS,
  _LTFSI,
  _LTFSO,
  _LUT,
  _M,
  _MR,
  _MT,
  _NAE,
  _NT,
  _O,
  _SARN,
  _SI,
  _SN,
  _SS,
  _T,
  _TKL,
  _TS,
  _TSI,
  _TSO,
  _UDR,
  _UDRI,
  _UDRO,
  _USI,
  _USIp,
  _USn,
  _USO,
  _USOp,
  _USp,
  n0,
} from "./schemas_0";
import { StreamInfo } from "./schemas_6_Signaling";
import { EdgeConfig } from "./schemas_7_Describe";

/* eslint no-var: 0 */

export var DeleteStreamInput = struct(n0, _DSI, 0, [_SARN, _CVu], [0, 0]);
export var DeleteStreamOutput = struct(n0, _DSO, 0, [], []);
export var DescribeStreamInput = struct(n0, _DSIe, 0, [_SN, _SARN], [0, 0]);
export var DescribeStreamOutput = struct(n0, _DSOe, 0, [_SI], [() => StreamInfo]);
export var GetDataEndpointInput = struct(n0, _GDEI, 0, [_SN, _SARN, _APIN], [0, 0, 0]);
export var GetDataEndpointOutput = struct(n0, _GDEO, 0, [_DE], [0]);
export var InvalidResourceFormatException = error(
  n0,
  _IRFE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __InvalidResourceFormatException
);
export var ListEdgeAgentConfigurationsEdgeConfig = struct(
  n0,
  _LEACEC,
  0,
  [_SN, _SARN, _CTr, _LUT, _SS, _FSD, _EC],
  [0, 0, 4, 4, 0, 0, [() => EdgeConfig, 0]]
);
export var ListEdgeAgentConfigurationsInput = struct(n0, _LEACI, 0, [_HDA, _MR, _NT], [0, 1, 0]);
export var ListEdgeAgentConfigurationsOutput = struct(
  n0,
  _LEACO,
  0,
  [_ECd, _NT],
  [[() => ListEdgeAgentConfigurationsEdgeConfigList, 0], 0]
);
export var ListTagsForStreamInput = struct(n0, _LTFSI, 0, [_NT, _SARN, _SN], [0, 0, 0]);
export var ListTagsForStreamOutput = struct(n0, _LTFSO, 0, [_NT, _T], [0, 128 | 0]);
export var NotAuthorizedException = error(
  n0,
  _NAE,
  {
    [_e]: _c,
    [_hE]: 401,
  },
  [_M],
  [0],

  __NotAuthorizedException
);
export var TagStreamInput = struct(n0, _TSI, 0, [_SARN, _SN, _T], [0, 0, 128 | 0]);
export var TagStreamOutput = struct(n0, _TSO, 0, [], []);
export var UntagStreamInput = struct(n0, _USI, 0, [_SARN, _SN, _TKL], [0, 0, 64 | 0]);
export var UntagStreamOutput = struct(n0, _USO, 0, [], []);
export var UpdateDataRetentionInput = struct(n0, _UDRI, 0, [_SN, _SARN, _CVu, _O, _DRCIH], [0, 0, 0, 0, 1]);
export var UpdateDataRetentionOutput = struct(n0, _UDRO, 0, [], []);
export var UpdateStreamInput = struct(n0, _USIp, 0, [_SN, _SARN, _CVu, _DN, _MT], [0, 0, 0, 0, 0]);
export var UpdateStreamOutput = struct(n0, _USOp, 0, [], []);
export var ListEdgeAgentConfigurationsEdgeConfigList = list(n0, _LEACECL, 0, [
  () => ListEdgeAgentConfigurationsEdgeConfig,
  0,
]);
export var DeleteStream = op(
  n0,
  _DS,
  {
    [_h]: ["POST", "/deleteStream", 200],
  },
  () => DeleteStreamInput,
  () => DeleteStreamOutput
);
export var DescribeStream = op(
  n0,
  _DSe,
  {
    [_h]: ["POST", "/describeStream", 200],
  },
  () => DescribeStreamInput,
  () => DescribeStreamOutput
);
export var GetDataEndpoint = op(
  n0,
  _GDE,
  {
    [_h]: ["POST", "/getDataEndpoint", 200],
  },
  () => GetDataEndpointInput,
  () => GetDataEndpointOutput
);
export var ListEdgeAgentConfigurations = op(
  n0,
  _LEAC,
  {
    [_h]: ["POST", "/listEdgeAgentConfigurations", 200],
  },
  () => ListEdgeAgentConfigurationsInput,
  () => ListEdgeAgentConfigurationsOutput
);
export var ListTagsForStream = op(
  n0,
  _LTFS,
  {
    [_h]: ["POST", "/listTagsForStream", 200],
  },
  () => ListTagsForStreamInput,
  () => ListTagsForStreamOutput
);
export var TagStream = op(
  n0,
  _TS,
  {
    [_h]: ["POST", "/tagStream", 200],
  },
  () => TagStreamInput,
  () => TagStreamOutput
);
export var UntagStream = op(
  n0,
  _USn,
  {
    [_h]: ["POST", "/untagStream", 200],
  },
  () => UntagStreamInput,
  () => UntagStreamOutput
);
export var UpdateDataRetention = op(
  n0,
  _UDR,
  {
    [_h]: ["POST", "/updateDataRetention", 200],
  },
  () => UpdateDataRetentionInput,
  () => UpdateDataRetentionOutput
);
export var UpdateStream = op(
  n0,
  _USp,
  {
    [_h]: ["POST", "/updateStream", 200],
  },
  () => UpdateStreamInput,
  () => UpdateStreamOutput
);
