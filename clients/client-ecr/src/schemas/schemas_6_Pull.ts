// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  LayerInaccessibleException as __LayerInaccessibleException,
  RepositoryNotEmptyException as __RepositoryNotEmptyException,
  UnableToGetUpstreamLayerException as __UnableToGetUpstreamLayerException,
} from "../models/index";
import {
  _c,
  _cAr,
  _DR,
  _DRes,
  _DRR,
  _DRRe,
  _DRRescr,
  _DRRescri,
  _dU,
  _e,
  _EC,
  _eC,
  _eT,
  _fo,
  _GDUFL,
  _GDUFLR,
  _GDUFLRe,
  _iSC,
  _iTM,
  _iTMEF,
  _kK,
  _lDa,
  _LIE,
  _me,
  _mR,
  _nT,
  _rAe,
  _re,
  _Rep,
  _rep,
  _rI,
  _RL,
  _rN,
  _rNe,
  _RNEE,
  _rUe,
  _UTGULE,
  n0,
} from "./schemas_0";
import { ImageScanningConfiguration } from "./schemas_4_Repository";
import { ImageTagMutabilityExclusionFilters } from "./schemas_17_Repository";

/* eslint no-var: 0 */

export var DeleteRepositoryRequest = struct(n0, _DRR, 0, [_rI, _rN, _fo], [0, 0, 2]);
export var DeleteRepositoryResponse = struct(n0, _DRRe, 0, [_re], [() => Repository]);
export var DescribeRepositoriesRequest = struct(n0, _DRRescr, 0, [_rI, _rNe, _nT, _mR], [0, 64 | 0, 0, 1]);
export var DescribeRepositoriesResponse = struct(n0, _DRRescri, 0, [_rep, _nT], [() => RepositoryList, 0]);
export var EncryptionConfiguration = struct(n0, _EC, 0, [_eT, _kK], [0, 0]);
export var GetDownloadUrlForLayerRequest = struct(n0, _GDUFLR, 0, [_rI, _rN, _lDa], [0, 0, 0]);
export var GetDownloadUrlForLayerResponse = struct(n0, _GDUFLRe, 0, [_dU, _lDa], [0, 0]);
export var LayerInaccessibleException = error(
  n0,
  _LIE,
  {
    [_e]: _c,
  },
  [_me],
  [0],

  __LayerInaccessibleException
);
export var Repository = struct(
  n0,
  _Rep,
  0,
  [_rAe, _rI, _rN, _rUe, _cAr, _iTM, _iTMEF, _iSC, _eC],
  [
    0,
    0,
    0,
    0,
    4,
    0,
    () => ImageTagMutabilityExclusionFilters,
    () => ImageScanningConfiguration,
    () => EncryptionConfiguration,
  ]
);
export var RepositoryNotEmptyException = error(
  n0,
  _RNEE,
  {
    [_e]: _c,
  },
  [_me],
  [0],

  __RepositoryNotEmptyException
);
export var UnableToGetUpstreamLayerException = error(
  n0,
  _UTGULE,
  {
    [_e]: _c,
  },
  [_me],
  [0],

  __UnableToGetUpstreamLayerException
);
export var RepositoryList = list(n0, _RL, 0, () => Repository);
export var RepositoryNameList = 64 | 0;

export var DeleteRepository = op(
  n0,
  _DR,
  0,
  () => DeleteRepositoryRequest,
  () => DeleteRepositoryResponse
);
export var DescribeRepositories = op(
  n0,
  _DRes,
  0,
  () => DescribeRepositoriesRequest,
  () => DescribeRepositoriesResponse
);
export var GetDownloadUrlForLayer = op(
  n0,
  _GDUFL,
  0,
  () => GetDownloadUrlForLayerRequest,
  () => GetDownloadUrlForLayerResponse
);
