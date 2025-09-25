// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _Attr, _GCA, _GCAR, _GCARe, _h, _ICI, _II, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetContactAttributesRequest = struct(
  n0,
  _GCAR,
  0,
  [_II, _ICI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetContactAttributesResponse = struct(n0, _GCARe, 0, [_Attr], [128 | 0]);
export var GetContactAttributes = op(
  n0,
  _GCA,
  {
    [_h]: ["GET", "/contact/attributes/{InstanceId}/{InitialContactId}", 200],
  },
  () => GetContactAttributesRequest,
  () => GetContactAttributesResponse
);
