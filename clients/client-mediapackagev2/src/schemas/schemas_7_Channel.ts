// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _CA,
  _CGN,
  _CL,
  _CLC,
  _CN,
  _D,
  _h,
  _hQ,
  _IT,
  _It,
  _LCi,
  _LCR,
  _LCRi,
  _MA,
  _MR,
  _mR,
  _NT,
  _nT,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ChannelListConfiguration = struct(n0, _CLC, 0, [_A, _CN, _CGN, _CA, _MA, _D, _IT], [0, 0, 0, 4, 4, 0, 0]);
export var ListChannelsRequest = struct(
  n0,
  _LCR,
  0,
  [_CGN, _MR, _NT],
  [
    [0, 1],
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
export var ListChannelsResponse = struct(n0, _LCRi, 0, [_It, _NT], [() => ChannelList, 0]);
export var ChannelList = list(n0, _CL, 0, () => ChannelListConfiguration);
export var ListChannels = op(
  n0,
  _LCi,
  {
    [_h]: ["GET", "/channelGroup/{ChannelGroupName}/channel", 200],
  },
  () => ListChannelsRequest,
  () => ListChannelsResponse
);
