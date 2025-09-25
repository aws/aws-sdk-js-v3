// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _GSRT, _GSRTO, _h, _RTe, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var GetSupportedResourceTypesOutput = struct(n0, _GSRTO, 0, [_RTe], [64 | 0]);
export var ResourceTypes = 64 | 0;

export var GetSupportedResourceTypes = op(
  n0,
  _GSRT,
  {
    [_h]: ["GET", "/supported-resource-types", 200],
  },
  () => Unit,
  () => GetSupportedResourceTypesOutput
);
