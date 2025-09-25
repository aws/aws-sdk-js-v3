// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _Cou, _GBA, _GBAV, _GIRet, _GIRR, _GIRRe, _h, _IAns, _IRn, _IRV, _IRVL, _RV, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetInsightResultsRequest = struct(n0, _GIRR, 0, [_IAns], [[0, 1]]);
export var GetInsightResultsResponse = struct(n0, _GIRRe, 0, [_IRn], [() => InsightResults]);
export var InsightResults = struct(n0, _IRn, 0, [_IAns, _GBA, _RV], [0, 0, () => InsightResultValueList]);
export var InsightResultValue = struct(n0, _IRV, 0, [_GBAV, _Cou], [0, 1]);
export var InsightResultValueList = list(n0, _IRVL, 0, () => InsightResultValue);
export var GetInsightResults = op(
  n0,
  _GIRet,
  {
    [_h]: ["GET", "/insights/results/{InsightArn+}", 200],
  },
  () => GetInsightResultsRequest,
  () => GetInsightResultsResponse
);
