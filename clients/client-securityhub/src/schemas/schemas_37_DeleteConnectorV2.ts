// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CIo, _DCV, _DCVR, _DCVRe, _h, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteConnectorV2Request = struct(n0, _DCVR, 0, [_CIo], [[0, 1]]);
export var DeleteConnectorV2Response = struct(n0, _DCVRe, 0, [], []);
export var DeleteConnectorV2 = op(
  n0,
  _DCV,
  {
    [_h]: ["DELETE", "/connectorsv2/{ConnectorId+}", 200],
  },
  () => DeleteConnectorV2Request,
  () => DeleteConnectorV2Response
);
