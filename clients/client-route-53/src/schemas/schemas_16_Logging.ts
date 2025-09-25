// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { NoSuchQueryLoggingConfig as __NoSuchQueryLoggingConfig } from "../models/index";
import {
  _c,
  _CWLLGA,
  _DQLC,
  _DQLCR,
  _DQLCRe,
  _e,
  _GQLC,
  _GQLCR,
  _GQLCRe,
  _hE,
  _ht,
  _HZI,
  _I,
  _m,
  _NSQLC,
  _QLC,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteQueryLoggingConfigRequest = struct(n0, _DQLCR, 0, [_I], [[0, 1]]);
export var DeleteQueryLoggingConfigResponse = struct(n0, _DQLCRe, 0, [], []);
export var GetQueryLoggingConfigRequest = struct(n0, _GQLCR, 0, [_I], [[0, 1]]);
export var GetQueryLoggingConfigResponse = struct(n0, _GQLCRe, 0, [_QLC], [() => QueryLoggingConfig]);
export var NoSuchQueryLoggingConfig = error(
  n0,
  _NSQLC,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_m],
  [0],

  __NoSuchQueryLoggingConfig
);
export var QueryLoggingConfig = struct(n0, _QLC, 0, [_I, _HZI, _CWLLGA], [0, 0, 0]);
export var DeleteQueryLoggingConfig = op(
  n0,
  _DQLC,
  {
    [_ht]: ["DELETE", "/2013-04-01/queryloggingconfig/{Id}", 200],
  },
  () => DeleteQueryLoggingConfigRequest,
  () => DeleteQueryLoggingConfigResponse
);
export var GetQueryLoggingConfig = op(
  n0,
  _GQLC,
  {
    [_ht]: ["GET", "/2013-04-01/queryloggingconfig/{Id}", 200],
  },
  () => GetQueryLoggingConfigRequest,
  () => GetQueryLoggingConfigResponse
);
