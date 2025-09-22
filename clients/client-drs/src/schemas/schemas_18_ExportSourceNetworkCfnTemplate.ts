// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ESNCT, _ESNCTR, _ESNCTRx, _ht, _sDU, _sNID, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ExportSourceNetworkCfnTemplateRequest = struct(n0, _ESNCTR, 0, [_sNID], [0]);
export var ExportSourceNetworkCfnTemplateResponse = struct(n0, _ESNCTRx, 0, [_sDU], [0]);
export var ExportSourceNetworkCfnTemplate = op(
  n0,
  _ESNCT,
  {
    [_ht]: ["POST", "/ExportSourceNetworkCfnTemplate", 200],
  },
  () => ExportSourceNetworkCfnTemplateRequest,
  () => ExportSourceNetworkCfnTemplateResponse
);
