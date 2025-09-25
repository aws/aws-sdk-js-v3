// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _D, _Ex, _LSQ, _LSQR, _LSQRi, _MR, _NT, _QA, _QIu, _QN, _SQ, _SQM, _SQML, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ListStoredQueriesRequest = struct(n0, _LSQR, 0, [_NT, _MR], [0, 1]);
export var ListStoredQueriesResponse = struct(n0, _LSQRi, 0, [_SQM, _NT], [() => StoredQueryMetadataList, 0]);
export var StoredQuery = struct(n0, _SQ, 0, [_QIu, _QA, _QN, _D, _Ex], [0, 0, 0, 0, 0]);
export var StoredQueryMetadata = struct(n0, _SQM, 0, [_QIu, _QA, _QN, _D], [0, 0, 0, 0]);
export var StoredQueryMetadataList = list(n0, _SQML, 0, () => StoredQueryMetadata);
export var ListStoredQueries = op(
  n0,
  _LSQ,
  0,
  () => ListStoredQueriesRequest,
  () => ListStoredQueriesResponse
);
