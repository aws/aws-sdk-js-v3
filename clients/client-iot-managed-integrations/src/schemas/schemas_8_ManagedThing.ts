// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CI,
  _CIF,
  _EIF,
  _EIn,
  _h,
  _hQ,
  _Id,
  _It,
  _LMTS,
  _LMTSR,
  _LMTSRi,
  _MR,
  _MTSLD,
  _MTSLI,
  _NT,
  _S,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ListManagedThingSchemasRequest = struct(
  n0,
  _LMTSR,
  0,
  [_Id, _EIF, _CIF, _NT, _MR],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _EIF,
      },
    ],
    [
      0,
      {
        [_hQ]: _CIF,
      },
    ],
    [
      0,
      {
        [_hQ]: _NT,
      },
    ],
    [
      1,
      {
        [_hQ]: _MR,
      },
    ],
  ]
);
export var ListManagedThingSchemasResponse = struct(
  n0,
  _LMTSRi,
  0,
  [_It, _NT],
  [() => ManagedThingSchemaListDefinition, 0]
);
export var ManagedThingSchemaListItem = struct(n0, _MTSLI, 0, [_EIn, _CI, _S], [0, 0, 15]);
export var ManagedThingSchemaListDefinition = list(n0, _MTSLD, 0, () => ManagedThingSchemaListItem);
export var ListManagedThingSchemas = op(
  n0,
  _LMTS,
  {
    [_h]: ["GET", "/managed-thing-schemas/{Identifier}", 200],
  },
  () => ListManagedThingSchemasRequest,
  () => ListManagedThingSchemasResponse
);
