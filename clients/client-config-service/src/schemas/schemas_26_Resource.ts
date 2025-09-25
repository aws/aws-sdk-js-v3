// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { ResourceNotFoundException as __ResourceNotFoundException } from "../models/index";
import { _cl, _DSQ, _DSQR, _DSQRe, _e, _GSQ, _GSQR, _GSQRe, _m, _QN, _RNFE, _SQ, n0 } from "./schemas_0";
import { StoredQuery } from "./schemas_19_Stored";

/* eslint no-var: 0 */

export var DeleteStoredQueryRequest = struct(n0, _DSQR, 0, [_QN], [0]);
export var DeleteStoredQueryResponse = struct(n0, _DSQRe, 0, [], []);
export var GetStoredQueryRequest = struct(n0, _GSQR, 0, [_QN], [0]);
export var GetStoredQueryResponse = struct(n0, _GSQRe, 0, [_SQ], [() => StoredQuery]);
export var ResourceNotFoundException = error(
  n0,
  _RNFE,
  {
    [_e]: _cl,
  },
  [_m],
  [0],

  __ResourceNotFoundException
);
export var DeleteStoredQuery = op(
  n0,
  _DSQ,
  0,
  () => DeleteStoredQueryRequest,
  () => DeleteStoredQueryResponse
);
export var GetStoredQuery = op(
  n0,
  _GSQ,
  0,
  () => GetStoredQueryRequest,
  () => GetStoredQueryResponse
);
