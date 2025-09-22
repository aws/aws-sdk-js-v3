// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aI, _deta, _GSCS, _GSCSR, _GSCSRe, _h, _s, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetSchemaCreationStatusRequest = struct(n0, _GSCSR, 0, [_aI], [[0, 1]]);
export var GetSchemaCreationStatusResponse = struct(n0, _GSCSRe, 0, [_s, _deta], [0, 0]);
export var GetSchemaCreationStatus = op(
  n0,
  _GSCS,
  {
    [_h]: ["GET", "/v1/apis/{apiId}/schemacreation", 200],
  },
  () => GetSchemaCreationStatusRequest,
  () => GetSchemaCreationStatusResponse
);
