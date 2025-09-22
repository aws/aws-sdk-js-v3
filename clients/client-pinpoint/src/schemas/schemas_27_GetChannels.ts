// smithy-typescript generated code
import { map, op, struct } from "@smithy/core/schema";

import {
  _AI,
  _CD,
  _Ch,
  _CRh,
  _CRha,
  _En,
  _GCet,
  _GCReth,
  _GCRetha,
  _h,
  _HC,
  _IA,
  _Id,
  _LMB,
  _LMD,
  _MOCR,
  _V,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ChannelResponse = struct(
  n0,
  _CRh,
  0,
  [_AI, _CD, _En, _HC, _Id, _IA, _LMB, _LMD, _V],
  [0, 0, 2, 2, 0, 2, 0, 0, 1]
);
export var ChannelsResponse = struct(n0, _CRha, 0, [_Ch], [() => MapOfChannelResponse]);
export var GetChannelsRequest = struct(n0, _GCReth, 0, [_AI], [[0, 1]]);
export var GetChannelsResponse = struct(n0, _GCRetha, 0, [_CRha], [[() => ChannelsResponse, 16]]);
export var MapOfChannelResponse = map(n0, _MOCR, 0, 0, () => ChannelResponse);
export var GetChannels = op(
  n0,
  _GCet,
  {
    [_h]: ["GET", "/v1/apps/{ApplicationId}/channels", 200],
  },
  () => GetChannelsRequest,
  () => GetChannelsResponse
);
