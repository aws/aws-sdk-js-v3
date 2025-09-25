// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { VersionMismatchException as __VersionMismatchException } from "../models/index";
import {
  _c,
  _CARN,
  _CI,
  _CIL,
  _CN,
  _CNC,
  _CO,
  _CS,
  _CT,
  _CTr,
  _CV,
  _CVu,
  _DN,
  _DRIH,
  _DSC,
  _DSCe,
  _DSCI,
  _DSCIe,
  _DSCO,
  _DSCOe,
  _e,
  _h,
  _hE,
  _KKI,
  _LS,
  _LSCI,
  _LSCi,
  _LSCO,
  _LSI,
  _LSO,
  _M,
  _MR,
  _MT,
  _NT,
  _S,
  _SARN,
  _SI,
  _SIL,
  _SMC,
  _SN,
  _SNC,
  _USC,
  _USCI,
  _USCO,
  _V,
  _VME,
  n0,
} from "./schemas_0";
import { SingleMasterConfiguration } from "./schemas_14_Signaling";

/* eslint no-var: 0 */

export var ChannelInfo = struct(
  n0,
  _CI,
  0,
  [_CN, _CARN, _CT, _CS, _CTr, _SMC, _V],
  [0, 0, 0, 0, 4, () => SingleMasterConfiguration, 0]
);
export var ChannelNameCondition = struct(n0, _CNC, 0, [_CO, _CV], [0, 0]);
export var DeleteSignalingChannelInput = struct(n0, _DSCI, 0, [_CARN, _CVu], [0, 0]);
export var DeleteSignalingChannelOutput = struct(n0, _DSCO, 0, [], []);
export var DescribeSignalingChannelInput = struct(n0, _DSCIe, 0, [_CN, _CARN], [0, 0]);
export var DescribeSignalingChannelOutput = struct(n0, _DSCOe, 0, [_CI], [() => ChannelInfo]);
export var ListSignalingChannelsInput = struct(n0, _LSCI, 0, [_MR, _NT, _CNC], [1, 0, () => ChannelNameCondition]);
export var ListSignalingChannelsOutput = struct(n0, _LSCO, 0, [_CIL, _NT], [() => ChannelInfoList, 0]);
export var ListStreamsInput = struct(n0, _LSI, 0, [_MR, _NT, _SNC], [1, 0, () => StreamNameCondition]);
export var ListStreamsOutput = struct(n0, _LSO, 0, [_SIL, _NT], [() => StreamInfoList, 0]);
export var StreamInfo = struct(
  n0,
  _SI,
  0,
  [_DN, _SN, _SARN, _MT, _KKI, _V, _S, _CTr, _DRIH],
  [0, 0, 0, 0, 0, 0, 0, 4, 1]
);
export var StreamNameCondition = struct(n0, _SNC, 0, [_CO, _CV], [0, 0]);
export var UpdateSignalingChannelInput = struct(
  n0,
  _USCI,
  0,
  [_CARN, _CVu, _SMC],
  [0, 0, () => SingleMasterConfiguration]
);
export var UpdateSignalingChannelOutput = struct(n0, _USCO, 0, [], []);
export var VersionMismatchException = error(
  n0,
  _VME,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __VersionMismatchException
);
export var ChannelInfoList = list(n0, _CIL, 0, () => ChannelInfo);
export var StreamInfoList = list(n0, _SIL, 0, () => StreamInfo);
export var DeleteSignalingChannel = op(
  n0,
  _DSC,
  {
    [_h]: ["POST", "/deleteSignalingChannel", 200],
  },
  () => DeleteSignalingChannelInput,
  () => DeleteSignalingChannelOutput
);
export var DescribeSignalingChannel = op(
  n0,
  _DSCe,
  {
    [_h]: ["POST", "/describeSignalingChannel", 200],
  },
  () => DescribeSignalingChannelInput,
  () => DescribeSignalingChannelOutput
);
export var ListSignalingChannels = op(
  n0,
  _LSCi,
  {
    [_h]: ["POST", "/listSignalingChannels", 200],
  },
  () => ListSignalingChannelsInput,
  () => ListSignalingChannelsOutput
);
export var ListStreams = op(
  n0,
  _LS,
  {
    [_h]: ["POST", "/listStreams", 200],
  },
  () => ListStreamsInput,
  () => ListStreamsOutput
);
export var UpdateSignalingChannel = op(
  n0,
  _USC,
  {
    [_h]: ["POST", "/updateSignalingChannel", 200],
  },
  () => UpdateSignalingChannelInput,
  () => UpdateSignalingChannelOutput
);
