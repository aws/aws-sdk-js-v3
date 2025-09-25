// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DDI, _DDIR, _DDIRe, _DII, _h, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteDataIntegrationRequest = struct(n0, _DDIR, 0, [_DII], [[0, 1]]);
export var DeleteDataIntegrationResponse = struct(n0, _DDIRe, 0, [], []);
export var DeleteDataIntegration = op(
  n0,
  _DDI,
  {
    [_h]: ["DELETE", "/dataIntegrations/{DataIntegrationIdentifier}", 200],
  },
  () => DeleteDataIntegrationRequest,
  () => DeleteDataIntegrationResponse
);
