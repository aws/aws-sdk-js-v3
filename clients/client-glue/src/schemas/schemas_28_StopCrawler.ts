// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  CrawlerNotRunningException as __CrawlerNotRunningException,
  CrawlerStoppingException as __CrawlerStoppingException,
} from "../models/index";
import { _c, _CNRE, _CSEr, _e, _M, _N, _SCRto, _SCRtop, _SCto, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var CrawlerNotRunningException = error(
  n0,
  _CNRE,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __CrawlerNotRunningException
);
export var CrawlerStoppingException = error(
  n0,
  _CSEr,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __CrawlerStoppingException
);
export var StopCrawlerRequest = struct(n0, _SCRto, 0, [_N], [0]);
export var StopCrawlerResponse = struct(n0, _SCRtop, 0, [], []);
export var StopCrawler = op(
  n0,
  _SCto,
  0,
  () => StopCrawlerRequest,
  () => StopCrawlerResponse
);
