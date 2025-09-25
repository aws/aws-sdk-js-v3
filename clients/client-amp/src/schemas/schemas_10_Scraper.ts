// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _co, _GDSC, _GDSCR, _GDSCRe, _h, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetDefaultScraperConfigurationRequest = struct(n0, _GDSCR, 0, [], []);
export var GetDefaultScraperConfigurationResponse = struct(n0, _GDSCRe, 0, [_co], [21]);
export var GetDefaultScraperConfiguration = op(
  n0,
  _GDSC,
  {
    [_h]: ["GET", "/scraperconfiguration", 200],
  },
  () => GetDefaultScraperConfigurationRequest,
  () => GetDefaultScraperConfigurationResponse
);
