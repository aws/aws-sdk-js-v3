// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  InternalServerException as __InternalServerException,
  ServiceUnavailableException as __ServiceUnavailableException,
} from "../models/index";
import { _DE, _DER, _DERe, _e, _ex, _h, _hE, _ISE, _m, _p, _se, _SUE, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteExperimentRequest = struct(
  n0,
  _DER,
  0,
  [_p, _ex],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteExperimentResponse = struct(n0, _DERe, 0, [], []);
export var InternalServerException = error(
  n0,
  _ISE,
  {
    [_e]: _se,
    [_hE]: 500,
  },
  [_m],
  [0],

  __InternalServerException
);
export var ServiceUnavailableException = error(
  n0,
  _SUE,
  {
    [_e]: _se,
    [_hE]: 503,
  },
  [_m],
  [0],

  __ServiceUnavailableException
);
export var DeleteExperiment = op(
  n0,
  _DE,
  {
    [_h]: ["DELETE", "/projects/{project}/experiments/{experiment}", 200],
  },
  () => DeleteExperimentRequest,
  () => DeleteExperimentResponse
);
