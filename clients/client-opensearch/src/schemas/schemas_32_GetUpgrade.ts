// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DN, _GUS, _GUSR, _GUSRe, _h, _SSt, _UN, _US, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetUpgradeStatusRequest = struct(n0, _GUSR, 0, [_DN], [[0, 1]]);
export var GetUpgradeStatusResponse = struct(n0, _GUSRe, 0, [_US, _SSt, _UN], [0, 0, 0]);
export var GetUpgradeStatus = op(
  n0,
  _GUS,
  {
    [_h]: ["GET", "/2021-01-01/opensearch/upgradeDomain/{DomainName}/status", 200],
  },
  () => GetUpgradeStatusRequest,
  () => GetUpgradeStatusResponse
);
