// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { ResourceLimitExceededException as __ResourceLimitExceededException } from "../models/index";
import {
  _AIA,
  _c,
  _CA,
  _CB,
  _CCB,
  _CCBR,
  _CCBRr,
  _CCF,
  _CCFR,
  _CCFRr,
  _CCMr,
  _CCMRre,
  _CCMRrea,
  _CFA,
  _CMA,
  _CMha,
  _Co,
  _CRT,
  _e,
  _h,
  _hE,
  _hH,
  _MA,
  _Me,
  _Memb,
  _N,
  _Pr,
  _RARN,
  _RLEE,
  _Tag,
  _TR,
  _TRR,
  _xacb,
  Identity,
  n0,
  NonEmptyResourceName,
  Unit,
} from "./schemas_0";
import { ProcessorList } from "./schemas_9_Channel";
import { TagList } from "./schemas_13_Resource";
import { ClientRequestToken } from "./schemas_19_Channel";

/* eslint no-var: 0 */

export var CreateChannelBanRequest = struct(
  n0,
  _CCBR,
  0,
  [_CA, _MA, _CB],
  [
    [0, 1],
    0,
    [
      0,
      {
        [_hH]: _xacb,
      },
    ],
  ]
);
export var CreateChannelBanResponse = struct(n0, _CCBRr, 0, [_CA, _Memb], [0, [() => Identity, 0]]);
export var CreateChannelFlowRequest = struct(
  n0,
  _CCFR,
  0,
  [_AIA, _Pr, _N, _Tag, _CRT],
  [0, [() => ProcessorList, 0], [() => NonEmptyResourceName, 0], [() => TagList, 0], [() => ClientRequestToken, 4]]
);
export var CreateChannelFlowResponse = struct(n0, _CCFRr, 0, [_CFA], [0]);
export var CreateChannelModeratorRequest = struct(
  n0,
  _CCMRre,
  0,
  [_CA, _CMA, _CB],
  [
    [0, 1],
    0,
    [
      0,
      {
        [_hH]: _xacb,
      },
    ],
  ]
);
export var CreateChannelModeratorResponse = struct(n0, _CCMRrea, 0, [_CA, _CMha], [0, [() => Identity, 0]]);
export var ResourceLimitExceededException = error(
  n0,
  _RLEE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_Co, _Me],
  [0, 0],

  __ResourceLimitExceededException
);
export var TagResourceRequest = struct(n0, _TRR, 0, [_RARN, _Tag], [0, [() => TagList, 0]]);
export var CreateChannelBan = op(
  n0,
  _CCB,
  {
    [_h]: ["POST", "/channels/{ChannelArn}/bans", 201],
  },
  () => CreateChannelBanRequest,
  () => CreateChannelBanResponse
);
export var CreateChannelFlow = op(
  n0,
  _CCF,
  {
    [_h]: ["POST", "/channel-flows", 201],
  },
  () => CreateChannelFlowRequest,
  () => CreateChannelFlowResponse
);
export var CreateChannelModerator = op(
  n0,
  _CCMr,
  {
    [_h]: ["POST", "/channels/{ChannelArn}/moderators", 201],
  },
  () => CreateChannelModeratorRequest,
  () => CreateChannelModeratorResponse
);
export var TagResource = op(
  n0,
  _TR,
  {
    [_h]: ["POST", "/tags?operation=tag-resource", 204],
  },
  () => TagResourceRequest,
  () => Unit
);
