// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _ca, _h, _i, _it, _jN, _LMDI, _LMDIR, _LMDIRi, _lOMDIS, _MDIS, _nT, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ListManagedDataIdentifiersRequest = struct(
  n0,
  _LMDIR,
  0,
  [_nT],
  [
    [
      0,
      {
        [_jN]: _nT,
      },
    ],
  ]
);
export var ListManagedDataIdentifiersResponse = struct(
  n0,
  _LMDIRi,
  0,
  [_it, _nT],
  [
    [
      () => __listOfManagedDataIdentifierSummary,
      {
        [_jN]: _it,
      },
    ],
    [
      0,
      {
        [_jN]: _nT,
      },
    ],
  ]
);
export var ManagedDataIdentifierSummary = struct(
  n0,
  _MDIS,
  0,
  [_ca, _i],
  [
    [
      0,
      {
        [_jN]: _ca,
      },
    ],
    [
      0,
      {
        [_jN]: _i,
      },
    ],
  ]
);
export var __listOfManagedDataIdentifierSummary = list(n0, _lOMDIS, 0, [() => ManagedDataIdentifierSummary, 0]);
export var ListManagedDataIdentifiers = op(
  n0,
  _LMDI,
  {
    [_h]: ["POST", "/managed-data-identifiers/list", 200],
  },
  () => ListManagedDataIdentifiersRequest,
  () => ListManagedDataIdentifiersResponse
);
