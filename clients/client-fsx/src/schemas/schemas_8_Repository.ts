// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { DataRepositoryAssociationNotFound as __DataRepositoryAssociationNotFound } from "../models/index";
import { _AI, _c, _CRT, _DDIFS, _DDRA, _DDRAR, _DDRARe, _DRANF, _e, _L, _M, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DataRepositoryAssociationNotFound = error(
  n0,
  _DRANF,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __DataRepositoryAssociationNotFound
);
export var DeleteDataRepositoryAssociationRequest = struct(n0, _DDRAR, 0, [_AI, _CRT, _DDIFS], [0, [0, 4], 2]);
export var DeleteDataRepositoryAssociationResponse = struct(n0, _DDRARe, 0, [_AI, _L, _DDIFS], [0, 0, 2]);
export var DeleteDataRepositoryAssociation = op(
  n0,
  _DDRA,
  2,
  () => DeleteDataRepositoryAssociationRequest,
  () => DeleteDataRepositoryAssociationResponse
);
