// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { CustomMetadataLimitExceededException as __CustomMetadataLimitExceededException } from "../models/index";
import {
  _A,
  _AT,
  _c,
  _CCM,
  _CCMR,
  _CCMRr,
  _CMLEE,
  _CMu,
  _e,
  _h,
  _hE,
  _hH,
  _hQ,
  _M,
  _RI,
  _v,
  _VI,
  AuthenticationHeaderType,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateCustomMetadataRequest = struct(
  n0,
  _CCMR,
  0,
  [_AT, _RI, _VI, _CMu],
  [
    [
      () => AuthenticationHeaderType,
      {
        [_hH]: _A,
      },
    ],
    [0, 1],
    [
      0,
      {
        [_hQ]: _v,
      },
    ],
    128 | 0,
  ]
);
export var CreateCustomMetadataResponse = struct(n0, _CCMRr, 0, [], []);
export var CustomMetadataLimitExceededException = error(
  n0,
  _CMLEE,
  {
    [_e]: _c,
    [_hE]: 429,
  },
  [_M],
  [0],

  __CustomMetadataLimitExceededException
);
export var CustomMetadataMap = 128 | 0;

export var CreateCustomMetadata = op(
  n0,
  _CCM,
  {
    [_h]: ["PUT", "/api/v1/resources/{ResourceId}/customMetadata", 200],
  },
  () => CreateCustomMetadataRequest,
  () => CreateCustomMetadataResponse
);
