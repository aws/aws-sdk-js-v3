// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _CC,
  _CCI,
  _CCO,
  _CD,
  _cD,
  _CDh,
  _cDT,
  _ch,
  _cI,
  _CL,
  _CN,
  _cN,
  _cS,
  _dDT,
  _gC,
  _h,
  _hQ,
  _LC,
  _LCI,
  _LCO,
  _mR,
  _nT,
  _sI,
  _UC,
  _uC,
  _UCI,
  _UCO,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ChannelDescription = sim(n0, _CD, 0, 8);
export var ChannelName = sim(n0, _CN, 0, 8);
export var ChannelData = struct(
  n0,
  _CDh,
  0,
  [_sI, _cI, _cN, _cD, _cDT, _dDT, _cS, _uC, _gC],
  [0, 0, [() => ChannelName, 0], [() => ChannelDescription, 0], 5, 5, 0, 1, 1]
);
export var CreateChannelInput = struct(
  n0,
  _CCI,
  0,
  [_sI, _cN, _cD],
  [
    [0, 1],
    [() => ChannelName, 0],
    [() => ChannelDescription, 0],
  ]
);
export var CreateChannelOutput = struct(n0, _CCO, 0, [_cI], [0]);
export var ListChannelsInput = struct(
  n0,
  _LCI,
  0,
  [_sI, _nT, _mR],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
  ]
);
export var ListChannelsOutput = struct(n0, _LCO, 0, [_ch, _nT], [[() => ChannelsList, 0], 0]);
export var UpdateChannelInput = struct(
  n0,
  _UCI,
  0,
  [_sI, _cI, _cN, _cD],
  [
    [0, 1],
    [0, 1],
    [() => ChannelName, 0],
    [() => ChannelDescription, 0],
  ]
);
export var UpdateChannelOutput = struct(n0, _UCO, 0, [], []);
export var ChannelsList = list(n0, _CL, 0, [() => ChannelData, 0]);
export var CreateChannel = op(
  n0,
  _CC,
  {
    [_h]: ["POST", "/spaces/{spaceId}/channels", 200],
  },
  () => CreateChannelInput,
  () => CreateChannelOutput
);
export var ListChannels = op(
  n0,
  _LC,
  {
    [_h]: ["GET", "/spaces/{spaceId}/channels", 200],
  },
  () => ListChannelsInput,
  () => ListChannelsOutput
);
export var UpdateChannel = op(
  n0,
  _UC,
  {
    [_h]: ["PUT", "/spaces/{spaceId}/channels/{channelId}", 200],
  },
  () => UpdateChannelInput,
  () => UpdateChannelOutput
);
