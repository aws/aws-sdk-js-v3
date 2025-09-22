// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { CrawlerRunningException as __CrawlerRunningException } from "../models/index";
import { _c, _CRE, _e, _M, _N, _SCR, _SCRt, _SCt, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var CrawlerRunningException = error(
  n0,
  _CRE,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __CrawlerRunningException
);
export var StartCrawlerRequest = struct(n0, _SCR, 0, [_N], [0]);
export var StartCrawlerResponse = struct(n0, _SCRt, 0, [], []);
export var StartCrawler = op(
  n0,
  _SCt,
  0,
  () => StartCrawlerRequest,
  () => StartCrawlerResponse
);
