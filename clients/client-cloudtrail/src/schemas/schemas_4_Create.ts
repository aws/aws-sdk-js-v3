// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  ChannelMaxLimitExceededException as __ChannelMaxLimitExceededException,
  InvalidSourceException as __InvalidSourceException,
  InvalidTagParameterException as __InvalidTagParameterException,
  TagsLimitExceededException as __TagsLimitExceededException,
} from "../models/index";
import {
  _aQE,
  _c,
  _CA,
  _CC,
  _CCR,
  _CCRr,
  _CMLEE,
  _D,
  _e,
  _hE,
  _ISE,
  _ITPE,
  _K,
  _M,
  _N,
  _S,
  _Ta,
  _Tag,
  _TL,
  _TLEE,
  _Va,
  n0,
} from "./schemas_0";
import { Destinations } from "./schemas_20_Channel";

/* eslint no-var: 0 */

export var ChannelMaxLimitExceededException = error(
  n0,
  _CMLEE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`ChannelMaxLimitExceeded`, 400],
  },
  [_M],
  [0],

  __ChannelMaxLimitExceededException
);
export var CreateChannelRequest = struct(n0, _CCR, 0, [_N, _S, _D, _Ta], [0, 0, () => Destinations, () => TagsList]);
export var CreateChannelResponse = struct(
  n0,
  _CCRr,
  0,
  [_CA, _N, _S, _D, _Ta],
  [0, 0, 0, () => Destinations, () => TagsList]
);
export var InvalidSourceException = error(
  n0,
  _ISE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidSource`, 400],
  },
  [_M],
  [0],

  __InvalidSourceException
);
export var InvalidTagParameterException = error(
  n0,
  _ITPE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidTagParameter`, 400],
  },
  [_M],
  [0],

  __InvalidTagParameterException
);
export var Tag = struct(n0, _Tag, 0, [_K, _Va], [0, 0]);
export var TagsLimitExceededException = error(
  n0,
  _TLEE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`TagsLimitExceeded`, 400],
  },
  [_M],
  [0],

  __TagsLimitExceededException
);
export var TagsList = list(n0, _TL, 0, () => Tag);
export var CreateChannel = op(
  n0,
  _CC,
  0,
  () => CreateChannelRequest,
  () => CreateChannelResponse
);
