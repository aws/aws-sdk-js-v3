// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ASA, _GASV, _GASVR, _GASVRe, _h, _SA, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetAppliedSchemaVersionRequest = struct(n0, _GASVR, 0, [_SA], [0]);
export var GetAppliedSchemaVersionResponse = struct(n0, _GASVRe, 0, [_ASA], [0]);
export var GetAppliedSchemaVersion = op(
  n0,
  _GASV,
  {
    [_h]: ["POST", "/amazonclouddirectory/2017-01-11/schema/getappliedschema", 200],
  },
  () => GetAppliedSchemaVersionRequest,
  () => GetAppliedSchemaVersionResponse
);
