// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  AccountChannelLimitExceededException as __AccountChannelLimitExceededException,
  AccountStreamLimitExceededException as __AccountStreamLimitExceededException,
  DeviceStreamLimitExceededException as __DeviceStreamLimitExceededException,
  InvalidDeviceException as __InvalidDeviceException,
  TagsPerResourceExceededLimitException as __TagsPerResourceExceededLimitException,
} from "../models/index";
import {
  _ACLEE,
  _ASLEE,
  _c,
  _CARN,
  _CN,
  _CSC,
  _CSCI,
  _CSCO,
  _CSI,
  _CSO,
  _CSr,
  _CT,
  _DN,
  _DRIH,
  _DSLEE,
  _e,
  _h,
  _hE,
  _IDE,
  _K,
  _KKI,
  _LTFR,
  _LTFRI,
  _LTFRO,
  _M,
  _MT,
  _NT,
  _RARN,
  _SARN,
  _SMC,
  _SN,
  _T,
  _Ta,
  _TKL,
  _TL,
  _TOCL,
  _TPRELE,
  _TR,
  _TRI,
  _TRO,
  _UR,
  _URI,
  _URO,
  _Va,
  n0,
} from "./schemas_0";
import { SingleMasterConfiguration } from "./schemas_14_Signaling";

/* eslint no-var: 0 */

export var AccountChannelLimitExceededException = error(
  n0,
  _ACLEE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __AccountChannelLimitExceededException
);
export var AccountStreamLimitExceededException = error(
  n0,
  _ASLEE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __AccountStreamLimitExceededException
);
export var CreateSignalingChannelInput = struct(
  n0,
  _CSCI,
  0,
  [_CN, _CT, _SMC, _T],
  [0, 0, () => SingleMasterConfiguration, () => TagOnCreateList]
);
export var CreateSignalingChannelOutput = struct(n0, _CSCO, 0, [_CARN], [0]);
export var CreateStreamInput = struct(n0, _CSI, 0, [_DN, _SN, _MT, _KKI, _DRIH, _T], [0, 0, 0, 0, 1, 128 | 0]);
export var CreateStreamOutput = struct(n0, _CSO, 0, [_SARN], [0]);
export var DeviceStreamLimitExceededException = error(
  n0,
  _DSLEE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __DeviceStreamLimitExceededException
);
export var InvalidDeviceException = error(
  n0,
  _IDE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __InvalidDeviceException
);
export var ListTagsForResourceInput = struct(n0, _LTFRI, 0, [_NT, _RARN], [0, 0]);
export var ListTagsForResourceOutput = struct(n0, _LTFRO, 0, [_NT, _T], [0, 128 | 0]);
export var Tag = struct(n0, _Ta, 0, [_K, _Va], [0, 0]);
export var TagResourceInput = struct(n0, _TRI, 0, [_RARN, _T], [0, () => TagList]);
export var TagResourceOutput = struct(n0, _TRO, 0, [], []);
export var TagsPerResourceExceededLimitException = error(
  n0,
  _TPRELE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __TagsPerResourceExceededLimitException
);
export var UntagResourceInput = struct(n0, _URI, 0, [_RARN, _TKL], [0, 64 | 0]);
export var UntagResourceOutput = struct(n0, _URO, 0, [], []);
export var TagKeyList = 64 | 0;

export var TagList = list(n0, _TL, 0, () => Tag);
export var TagOnCreateList = list(n0, _TOCL, 0, () => Tag);
export var ResourceTags = 128 | 0;

export var CreateSignalingChannel = op(
  n0,
  _CSC,
  {
    [_h]: ["POST", "/createSignalingChannel", 200],
  },
  () => CreateSignalingChannelInput,
  () => CreateSignalingChannelOutput
);
export var CreateStream = op(
  n0,
  _CSr,
  {
    [_h]: ["POST", "/createStream", 200],
  },
  () => CreateStreamInput,
  () => CreateStreamOutput
);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  {
    [_h]: ["POST", "/ListTagsForResource", 200],
  },
  () => ListTagsForResourceInput,
  () => ListTagsForResourceOutput
);
export var TagResource = op(
  n0,
  _TR,
  {
    [_h]: ["POST", "/TagResource", 200],
  },
  () => TagResourceInput,
  () => TagResourceOutput
);
export var UntagResource = op(
  n0,
  _UR,
  {
    [_h]: ["POST", "/UntagResource", 200],
  },
  () => UntagResourceInput,
  () => UntagResourceOutput
);
