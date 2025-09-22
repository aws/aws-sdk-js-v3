// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _DSV, _DSVI, _DSVR, _ECr, _EDr, _EM, _SIc, _SVE, _SVEI, _SVEL, _Vers, _VN, n0, SchemaId } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteSchemaVersionsInput = struct(n0, _DSVI, 0, [_SIc, _Vers], [() => SchemaId, 0]);
export var DeleteSchemaVersionsResponse = struct(n0, _DSVR, 0, [_SVE], [() => SchemaVersionErrorList]);
export var ErrorDetails = struct(n0, _EDr, 0, [_ECr, _EM], [0, 0]);
export var SchemaVersionErrorItem = struct(n0, _SVEI, 0, [_VN, _EDr], [1, () => ErrorDetails]);
export var SchemaVersionErrorList = list(n0, _SVEL, 0, () => SchemaVersionErrorItem);
export var DeleteSchemaVersions = op(
  n0,
  _DSV,
  0,
  () => DeleteSchemaVersionsInput,
  () => DeleteSchemaVersionsResponse
);
