// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { ResourceInUseException as __ResourceInUseException } from "../models/index";
import { _c, _e, _EIx, _hE, _I, _II, _M, _RIUE, _SDSSJ, _SDSSJR, _SDSSJRt, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ResourceInUseException = error(
  n0,
  _RIUE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __ResourceInUseException
);
export var StartDataSourceSyncJobRequest = struct(n0, _SDSSJR, 0, [_I, _II], [0, 0]);
export var StartDataSourceSyncJobResponse = struct(n0, _SDSSJRt, 0, [_EIx], [0]);
export var StartDataSourceSyncJob = op(
  n0,
  _SDSSJ,
  0,
  () => StartDataSourceSyncJobRequest,
  () => StartDataSourceSyncJobResponse
);
