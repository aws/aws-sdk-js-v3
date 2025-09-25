// smithy-typescript generated code
import { error, op, sim, struct } from "@smithy/core/schema";

import {
  ClientLimitExceededException as __ClientLimitExceededException,
  ConnectionLimitExceededException as __ConnectionLimitExceededException,
  InvalidArgumentException as __InvalidArgumentException,
  InvalidEndpointException as __InvalidEndpointException,
  NotAuthorizedException as __NotAuthorizedException,
  ResourceNotFoundException as __ResourceNotFoundException,
} from "../models/index";
import {
  _AFN,
  _c,
  _CLEE,
  _CLEEo,
  _CT,
  _CT_,
  _CTo,
  _e,
  _GM,
  _GMI,
  _GMO,
  _h,
  _hE,
  _hH,
  _IAE,
  _IEE,
  _M,
  _NAE,
  _P,
  _RNFE,
  _s,
  _SARN,
  _SN,
  _SS,
  _SST,
  _ST,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var Payload = sim(n0, _P, 42, {
  [_s]: 1,
});
export var ClientLimitExceededException = error(
  n0,
  _CLEE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __ClientLimitExceededException
);
export var ConnectionLimitExceededException = error(
  n0,
  _CLEEo,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __ConnectionLimitExceededException
);
export var GetMediaInput = struct(n0, _GMI, 0, [_SN, _SARN, _SS], [0, 0, () => StartSelector]);
export var GetMediaOutput = struct(
  n0,
  _GMO,
  0,
  [_CT, _P],
  [
    [
      0,
      {
        [_hH]: _CT_,
      },
    ],
    [() => Payload, 16],
  ]
);
export var InvalidArgumentException = error(
  n0,
  _IAE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __InvalidArgumentException
);
export var InvalidEndpointException = error(
  n0,
  _IEE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __InvalidEndpointException
);
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
export var ResourceNotFoundException = error(
  n0,
  _RNFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_M],
  [0],

  __ResourceNotFoundException
);
export var StartSelector = struct(n0, _SS, 0, [_SST, _AFN, _ST, _CTo], [0, 0, 4, 0]);
export var Unit = "unit" as const;

export var GetMedia = op(
  n0,
  _GM,
  {
    [_h]: ["POST", "/getMedia", 200],
  },
  () => GetMediaInput,
  () => GetMediaOutput
);
