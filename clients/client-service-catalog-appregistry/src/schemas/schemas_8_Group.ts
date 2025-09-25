// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  ConflictException as __ConflictException,
  ServiceQuotaExceededException as __ServiceQuotaExceededException,
} from "../models/index";
import { _c, _CE, _co, _e, _h, _hE, _m, _PC, _PCR, _SQEE, n0 } from "./schemas_0";
import { Unit } from "./schemas_1_Resource";
import { AppRegistryConfiguration } from "./schemas_7_Configuration";

/* eslint no-var: 0 */

export var ConflictException = error(
  n0,
  _CE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_m],
  [0],

  __ConflictException
);
export var PutConfigurationRequest = struct(n0, _PCR, 0, [_co], [() => AppRegistryConfiguration]);
export var ServiceQuotaExceededException = error(
  n0,
  _SQEE,
  {
    [_e]: _c,
    [_hE]: 402,
  },
  [_m],
  [0],

  __ServiceQuotaExceededException
);
export var PutConfiguration = op(
  n0,
  _PC,
  {
    [_h]: ["PUT", "/configuration", 200],
  },
  () => PutConfigurationRequest,
  () => Unit
);
