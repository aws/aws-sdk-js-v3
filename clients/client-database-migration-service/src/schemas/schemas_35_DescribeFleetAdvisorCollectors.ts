// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CD,
  _CHC,
  _CN,
  _Col,
  _CR,
  _CRI,
  _CRo,
  _CS,
  _CV,
  _De,
  _DFACe,
  _DFACR,
  _DFACRe,
  _F,
  _ID,
  _LCSA,
  _LDR,
  _MD,
  _MR,
  _NOD,
  _NOS,
  _NTe,
  _RD,
  _SARA,
  _SBN,
  _VS,
  _WCGRBA,
  _WCSA,
  FilterList,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CollectorHealthCheck = struct(n0, _CHC, 0, [_CS, _LCSA, _WCSA, _WCGRBA], [0, 2, 2, 2]);
export var CollectorResponse = struct(
  n0,
  _CR,
  0,
  [_CRI, _CN, _CV, _VS, _De, _SBN, _SARA, _CHC, _LDR, _RD, _CD, _MD, _ID],
  [0, 0, 0, 0, 0, 0, 0, () => CollectorHealthCheck, 0, 0, 0, 0, () => InventoryData]
);
export var DescribeFleetAdvisorCollectorsRequest = struct(
  n0,
  _DFACR,
  0,
  [_F, _MR, _NTe],
  [[() => FilterList, 0], 1, 0]
);
export var DescribeFleetAdvisorCollectorsResponse = struct(n0, _DFACRe, 0, [_Col, _NTe], [() => CollectorResponses, 0]);
export var InventoryData = struct(n0, _ID, 0, [_NOD, _NOS], [1, 1]);
export var CollectorResponses = list(n0, _CRo, 0, () => CollectorResponse);
export var DescribeFleetAdvisorCollectors = op(
  n0,
  _DFACe,
  0,
  () => DescribeFleetAdvisorCollectorsRequest,
  () => DescribeFleetAdvisorCollectorsResponse
);
