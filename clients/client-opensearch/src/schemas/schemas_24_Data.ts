// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { DependencyFailureException as __DependencyFailureException } from "../models/index";
import { _c, _DDS, _DDSR, _DDSRe, _DFE, _DN, _e, _h, _hE, _M, _m, _N, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteDataSourceRequest = struct(
  n0,
  _DDSR,
  0,
  [_DN, _N],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteDataSourceResponse = struct(n0, _DDSRe, 0, [_M], [0]);
export var DependencyFailureException = error(
  n0,
  _DFE,
  {
    [_e]: _c,
    [_hE]: 424,
  },
  [_m],
  [0],

  __DependencyFailureException
);
export var DeleteDataSource = op(
  n0,
  _DDS,
  {
    [_h]: ["DELETE", "/2021-01-01/opensearch/domain/{DomainName}/dataSource/{Name}", 200],
  },
  () => DeleteDataSourceRequest,
  () => DeleteDataSourceResponse
);
