// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { InvalidStateException as __InvalidStateException } from "../models/index";
import {
  _c,
  _cDP,
  _cII,
  _DCIC,
  _DCICR,
  _DIOJ,
  _DIOJR,
  _e,
  _h,
  _hE,
  _hH,
  _hQ,
  _ISEn,
  _m,
  _xaE,
  _xAET,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteConnectInstanceConfigRequest = struct(
  n0,
  _DCICR,
  0,
  [_cII, _cDP],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _cDP,
      },
    ],
  ]
);
export var DeleteInstanceOnboardingJobRequest = struct(n0, _DIOJR, 0, [_cII], [[0, 1]]);
export var InvalidStateException = error(
  n0,
  _ISEn,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_m, _xAET],
  [
    0,
    [
      0,
      {
        [_hH]: _xaE,
      },
    ],
  ],

  __InvalidStateException
);
export var DeleteConnectInstanceConfig = op(
  n0,
  _DCIC,
  {
    [_h]: ["DELETE", "/v2/connect-instance/{connectInstanceId}/config", 200],
  },
  () => DeleteConnectInstanceConfigRequest,
  () => Unit
);
export var DeleteInstanceOnboardingJob = op(
  n0,
  _DIOJ,
  {
    [_h]: ["DELETE", "/v2/connect-instance/{connectInstanceId}/onboarding", 200],
  },
  () => DeleteInstanceOnboardingJobRequest,
  () => Unit
);
