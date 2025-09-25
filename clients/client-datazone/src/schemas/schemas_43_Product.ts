// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _cA,
  _cB,
  _DDP,
  _DDPI,
  _DDPO,
  _dI,
  _dIo,
  _DPD,
  _DPN,
  _DPR,
  _DPRa,
  _hQ,
  _ht,
  _i,
  _id,
  _it,
  _LDPR,
  _LDPRI,
  _LDPRO,
  _mRa,
  _nT,
  _r,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DataProductDescription = sim(n0, _DPD, 0, 8);
export var DataProductName = sim(n0, _DPN, 0, 8);
export var DataProductRevision = struct(n0, _DPR, 0, [_dIo, _id, _r, _cA, _cB], [0, 0, 0, 4, 0]);
export var DeleteDataProductInput = struct(
  n0,
  _DDPI,
  0,
  [_dI, _i],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteDataProductOutput = struct(n0, _DDPO, 0, [], []);
export var ListDataProductRevisionsInput = struct(
  n0,
  _LDPRI,
  0,
  [_dI, _i, _mRa, _nT],
  [
    [0, 1],
    [0, 1],
    [
      1,
      {
        [_hQ]: _mRa,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
  ]
);
export var ListDataProductRevisionsOutput = struct(n0, _LDPRO, 0, [_it, _nT], [() => DataProductRevisions, 0]);
export var DataProductRevisions = list(n0, _DPRa, 0, () => DataProductRevision);
export var DeleteDataProduct = op(
  n0,
  _DDP,
  {
    [_ht]: ["DELETE", "/v2/domains/{domainIdentifier}/data-products/{identifier}", 204],
  },
  () => DeleteDataProductInput,
  () => DeleteDataProductOutput
);
export var ListDataProductRevisions = op(
  n0,
  _LDPR,
  {
    [_ht]: ["GET", "/v2/domains/{domainIdentifier}/data-products/{identifier}/revisions", 200],
  },
  () => ListDataProductRevisionsInput,
  () => ListDataProductRevisionsOutput
);
