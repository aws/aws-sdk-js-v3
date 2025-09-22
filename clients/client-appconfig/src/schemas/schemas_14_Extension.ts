// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { ConflictException as __ConflictException } from "../models/index";
import {
  _AIp,
  _c,
  _CE,
  _CPI,
  _DCP,
  _DCPR,
  _DEel,
  _DER,
  _DPC,
  _e,
  _EIn,
  _h,
  _hE,
  _hH,
  _M,
  _xadpc,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ConflictException = error(
  n0,
  _CE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_M],
  [0],

  __ConflictException
);
export var DeleteConfigurationProfileRequest = struct(
  n0,
  _DCPR,
  0,
  [_AIp, _CPI, _DPC],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hH]: _xadpc,
      },
    ],
  ]
);
export var DeleteEnvironmentRequest = struct(
  n0,
  _DER,
  0,
  [_EIn, _AIp, _DPC],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hH]: _xadpc,
      },
    ],
  ]
);
export var DeleteConfigurationProfile = op(
  n0,
  _DCP,
  {
    [_h]: ["DELETE", "/applications/{ApplicationId}/configurationprofiles/{ConfigurationProfileId}", 204],
  },
  () => DeleteConfigurationProfileRequest,
  () => Unit
);
export var DeleteEnvironment = op(
  n0,
  _DEel,
  {
    [_h]: ["DELETE", "/applications/{ApplicationId}/environments/{EnvironmentId}", 204],
  },
  () => DeleteEnvironmentRequest,
  () => Unit
);
