// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _GQ,
  _GQe,
  _GQen,
  _GQR,
  _GQRe,
  _h,
  _kBA,
  _kBC,
  _mo,
  _q,
  _QGI,
  _qGI,
  _sq,
  _t,
  _TC,
  _tC,
  _TTSC,
  _tTSC,
  _TTSKBC,
  _ty,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GeneratedQuery = struct(n0, _GQ, 8, [_ty, _sq], [0, 0]);
export var GenerateQueryRequest = struct(
  n0,
  _GQR,
  0,
  [_qGI, _tC],
  [[() => QueryGenerationInput, 0], () => TransformationConfiguration]
);
export var GenerateQueryResponse = struct(n0, _GQRe, 0, [_q], [[() => GeneratedQueries, 0]]);
export var QueryGenerationInput = struct(n0, _QGI, 8, [_ty, _t], [0, 0]);
export var TextToSqlConfiguration = struct(n0, _TTSC, 0, [_ty, _kBC], [0, () => TextToSqlKnowledgeBaseConfiguration]);
export var TextToSqlKnowledgeBaseConfiguration = struct(n0, _TTSKBC, 0, [_kBA], [0]);
export var TransformationConfiguration = struct(n0, _TC, 0, [_mo, _tTSC], [0, () => TextToSqlConfiguration]);
export var GeneratedQueries = list(n0, _GQe, 0, [() => GeneratedQuery, 0]);
export var GenerateQuery = op(
  n0,
  _GQen,
  {
    [_h]: ["POST", "/generateQuery", 200],
  },
  () => GenerateQueryRequest,
  () => GenerateQueryResponse
);
