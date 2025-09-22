// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { GenerateResponseException as __GenerateResponseException } from "../models/index";
import { _aQE, _c, _e, _EDSOAI, _EDSv, _GQ, _GQR, _GQRe, _GRE, _hE, _M, _P, _QA, _QSuer, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GenerateQueryRequest = struct(n0, _GQR, 0, [_EDSv, _P], [64 | 0, 0]);
export var GenerateQueryResponse = struct(n0, _GQRe, 0, [_QSuer, _QA, _EDSOAI], [0, 0, 0]);
export var GenerateResponseException = error(
  n0,
  _GRE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`GenerateResponse`, 400],
  },
  [_M],
  [0],

  __GenerateResponseException
);
export var EventDataStoreList = 64 | 0;

export var GenerateQuery = op(
  n0,
  _GQ,
  2,
  () => GenerateQueryRequest,
  () => GenerateQueryResponse
);
