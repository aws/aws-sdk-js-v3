// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _cA,
  _cB,
  _CMGR,
  _CMGRI,
  _CMGRO,
  _cT,
  _dI,
  _dIo,
  _GMGR,
  _GMGRI,
  _GMGRO,
  _hQ,
  _ht,
  _i,
  _id,
  _it,
  _LMGR,
  _LMGRI,
  _LMGRO,
  _MGR,
  _MGRI,
  _MGRT,
  _mRa,
  _nT,
  _oPI,
  _oPIw,
  _r,
  _s,
  _SMGR,
  _SMGRI,
  _SMGRO,
  _tar,
  _ty,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CancelMetadataGenerationRunInput = struct(
  n0,
  _CMGRI,
  0,
  [_dI, _i],
  [
    [0, 1],
    [0, 1],
  ]
);
export var CancelMetadataGenerationRunOutput = struct(n0, _CMGRO, 0, [], []);
export var GetMetadataGenerationRunInput = struct(
  n0,
  _GMGRI,
  0,
  [_dI, _i],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetMetadataGenerationRunOutput = struct(
  n0,
  _GMGRO,
  0,
  [_dIo, _id, _tar, _s, _ty, _cA, _cB, _oPI],
  [0, 0, () => MetadataGenerationRunTarget, 0, 0, 4, 0, 0]
);
export var ListMetadataGenerationRunsInput = struct(
  n0,
  _LMGRI,
  0,
  [_dI, _s, _ty, _nT, _mRa],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _s,
      },
    ],
    [
      0,
      {
        [_hQ]: _ty,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mRa,
      },
    ],
  ]
);
export var ListMetadataGenerationRunsOutput = struct(n0, _LMGRO, 0, [_it, _nT], [() => MetadataGenerationRuns, 0]);
export var MetadataGenerationRunItem = struct(
  n0,
  _MGRI,
  0,
  [_dIo, _id, _tar, _s, _ty, _cA, _cB, _oPI],
  [0, 0, () => MetadataGenerationRunTarget, 0, 0, 4, 0, 0]
);
export var MetadataGenerationRunTarget = struct(n0, _MGRT, 0, [_ty, _i, _r], [0, 0, 0]);
export var StartMetadataGenerationRunInput = struct(
  n0,
  _SMGRI,
  0,
  [_dI, _ty, _tar, _cT, _oPIw],
  [[0, 1], 0, () => MetadataGenerationRunTarget, [0, 4], 0]
);
export var StartMetadataGenerationRunOutput = struct(
  n0,
  _SMGRO,
  0,
  [_dIo, _id, _s, _ty, _cA, _cB, _oPI],
  [0, 0, 0, 0, 4, 0, 0]
);
export var MetadataGenerationRuns = list(n0, _MGR, 0, () => MetadataGenerationRunItem);
export var CancelMetadataGenerationRun = op(
  n0,
  _CMGR,
  {
    [_ht]: ["POST", "/v2/domains/{domainIdentifier}/metadata-generation-runs/{identifier}/cancel", 200],
  },
  () => CancelMetadataGenerationRunInput,
  () => CancelMetadataGenerationRunOutput
);
export var GetMetadataGenerationRun = op(
  n0,
  _GMGR,
  {
    [_ht]: ["GET", "/v2/domains/{domainIdentifier}/metadata-generation-runs/{identifier}", 200],
  },
  () => GetMetadataGenerationRunInput,
  () => GetMetadataGenerationRunOutput
);
export var ListMetadataGenerationRuns = op(
  n0,
  _LMGR,
  {
    [_ht]: ["GET", "/v2/domains/{domainIdentifier}/metadata-generation-runs", 200],
  },
  () => ListMetadataGenerationRunsInput,
  () => ListMetadataGenerationRunsOutput
);
export var StartMetadataGenerationRun = op(
  n0,
  _SMGR,
  {
    [_ht]: ["POST", "/v2/domains/{domainIdentifier}/metadata-generation-runs", 200],
  },
  () => StartMetadataGenerationRunInput,
  () => StartMetadataGenerationRunOutput
);
