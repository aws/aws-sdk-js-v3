// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _aM,
  _aMA,
  _AML,
  _AMS,
  _cT,
  _d,
  _DAM,
  _DAMR,
  _hQ,
  _ht,
  _LAM,
  _LAMR,
  _LAMRi,
  _mR,
  _n,
  _nT,
  _s,
  _tDA,
  _uT,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AudienceModelSummary = struct(n0, _AMS, 0, [_cT, _uT, _aMA, _n, _tDA, _s, _d], [5, 5, 0, 0, 0, 0, 0]);
export var DeleteAudienceModelRequest = struct(n0, _DAMR, 0, [_aMA], [[0, 1]]);
export var ListAudienceModelsRequest = struct(
  n0,
  _LAMR,
  0,
  [_nT, _mR],
  [
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
export var ListAudienceModelsResponse = struct(n0, _LAMRi, 0, [_nT, _aM], [0, () => AudienceModelList]);
export var AudienceModelList = list(n0, _AML, 0, () => AudienceModelSummary);
export var DeleteAudienceModel = op(
  n0,
  _DAM,
  {
    [_ht]: ["DELETE", "/audience-model/{audienceModelArn}", 200],
  },
  () => DeleteAudienceModelRequest,
  () => Unit
);
export var ListAudienceModels = op(
  n0,
  _LAM,
  {
    [_ht]: ["GET", "/audience-model", 200],
  },
  () => ListAudienceModelsRequest,
  () => ListAudienceModelsResponse
);
