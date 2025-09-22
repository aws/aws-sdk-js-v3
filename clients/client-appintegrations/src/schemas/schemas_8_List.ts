// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AA,
  _AAA,
  _AAL,
  _AAp,
  _AAS,
  _AI,
  _CI,
  _h,
  _hQ,
  _LAA,
  _LAAR,
  _LAARi,
  _MR,
  _mR,
  _NT,
  _nT,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ApplicationAssociationSummary = struct(n0, _AAS, 0, [_AAA, _AA, _CI], [0, 0, 0]);
export var ListApplicationAssociationsRequest = struct(
  n0,
  _LAAR,
  0,
  [_AI, _NT, _MR],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
  ]
);
export var ListApplicationAssociationsResponse = struct(
  n0,
  _LAARi,
  0,
  [_AAp, _NT],
  [() => ApplicationAssociationsList, 0]
);
export var ApplicationAssociationsList = list(n0, _AAL, 0, () => ApplicationAssociationSummary);
export var ListApplicationAssociations = op(
  n0,
  _LAA,
  {
    [_h]: ["GET", "/applications/{ApplicationId}/associations", 200],
  },
  () => ListApplicationAssociationsRequest,
  () => ListApplicationAssociationsResponse
);
