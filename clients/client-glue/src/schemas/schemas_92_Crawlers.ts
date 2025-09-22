// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CNr, _LCi, _LCR, _LCRi, _MRax, _NTe, _Tag, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ListCrawlersRequest = struct(n0, _LCR, 0, [_MRax, _NTe, _Tag], [1, 0, 128 | 0]);
export var ListCrawlersResponse = struct(n0, _LCRi, 0, [_CNr, _NTe], [64 | 0, 0]);
export var CrawlerNameList = 64 | 0;

export var ListCrawlers = op(
  n0,
  _LCi,
  0,
  () => ListCrawlersRequest,
  () => ListCrawlersResponse
);
