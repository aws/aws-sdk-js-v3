// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  InvalidTagParameterException as __InvalidTagParameterException,
  RepositoryAlreadyExistsException as __RepositoryAlreadyExistsException,
  RepositoryNotEmptyException as __RepositoryNotEmptyException,
  TooManyTagsException as __TooManyTagsException,
} from "../models/index";
import {
  _a,
  _c,
  _cA,
  _cD,
  _CR,
  _CRR,
  _CRRr,
  _DR,
  _dRA,
  _DRe,
  _DRes,
  _DRR,
  _DRRe,
  _DRRes,
  _DRResc,
  _DRRescr,
  _DRRescri,
  _e,
  _fo,
  _ITPE,
  _K,
  _LTFR,
  _LTFRR,
  _LTFRRi,
  _m,
  _mR,
  _n,
  _nT,
  _pRA,
  _R,
  _r,
  _RA,
  _rA,
  _rAe,
  _RAEE,
  _rAep,
  _RAL,
  _Re,
  _re,
  _rep,
  _rI,
  _RL,
  _RLe,
  _rN,
  _rNe,
  _RNEE,
  _rU,
  _rUe,
  _s,
  _T,
  _t,
  _tK,
  _TL,
  _TMTE,
  _TR,
  _TRR,
  _TRRa,
  _UR,
  _URR,
  _URRn,
  _V,
  _v,
  n0,
} from "./schemas_0";
import { RepositoryCatalogData, RepositoryCatalogDataInput } from "./schemas_7_Repository";

/* eslint no-var: 0 */

export var CreateRepositoryRequest = struct(
  n0,
  _CRR,
  0,
  [_rN, _cD, _t],
  [0, () => RepositoryCatalogDataInput, () => TagList]
);
export var CreateRepositoryResponse = struct(n0, _CRRr, 0, [_r, _cD], [() => Repository, () => RepositoryCatalogData]);
export var DeleteRepositoryRequest = struct(n0, _DRR, 0, [_rI, _rN, _fo], [0, 0, 2]);
export var DeleteRepositoryResponse = struct(n0, _DRRe, 0, [_r], [() => Repository]);
export var DescribeRegistriesRequest = struct(n0, _DRRes, 0, [_nT, _mR], [0, 1]);
export var DescribeRegistriesResponse = struct(n0, _DRResc, 0, [_re, _nT], [() => RegistryList, 0]);
export var DescribeRepositoriesRequest = struct(n0, _DRRescr, 0, [_rI, _rNe, _nT, _mR], [0, 64 | 0, 0, 1]);
export var DescribeRepositoriesResponse = struct(n0, _DRRescri, 0, [_rep, _nT], [() => RepositoryList, 0]);
export var InvalidTagParameterException = error(
  n0,
  _ITPE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __InvalidTagParameterException
);
export var ListTagsForResourceRequest = struct(n0, _LTFRR, 0, [_rA], [0]);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_t], [() => TagList]);
export var Registry = struct(n0, _R, 0, [_rI, _rAe, _rU, _v, _a], [0, 0, 0, 2, () => RegistryAliasList]);
export var RegistryAlias = struct(n0, _RA, 0, [_n, _s, _pRA, _dRA], [0, 0, 2, 2]);
export var Repository = struct(n0, _Re, 0, [_rAep, _rI, _rN, _rUe, _cA], [0, 0, 0, 0, 4]);
export var RepositoryAlreadyExistsException = error(
  n0,
  _RAEE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __RepositoryAlreadyExistsException
);
export var RepositoryNotEmptyException = error(
  n0,
  _RNEE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __RepositoryNotEmptyException
);
export var Tag = struct(n0, _T, 0, [_K, _V], [0, 0]);
export var TagResourceRequest = struct(n0, _TRR, 0, [_rA, _t], [0, () => TagList]);
export var TagResourceResponse = struct(n0, _TRRa, 0, [], []);
export var TooManyTagsException = error(
  n0,
  _TMTE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __TooManyTagsException
);
export var UntagResourceRequest = struct(n0, _URR, 0, [_rA, _tK], [0, 64 | 0]);
export var UntagResourceResponse = struct(n0, _URRn, 0, [], []);
export var RegistryAliasList = list(n0, _RAL, 0, () => RegistryAlias);
export var RegistryList = list(n0, _RL, 0, () => Registry);
export var RepositoryList = list(n0, _RLe, 0, () => Repository);
export var RepositoryNameList = 64 | 0;

export var TagKeyList = 64 | 0;

export var TagList = list(n0, _TL, 0, () => Tag);
export var CreateRepository = op(
  n0,
  _CR,
  0,
  () => CreateRepositoryRequest,
  () => CreateRepositoryResponse
);
export var DeleteRepository = op(
  n0,
  _DR,
  0,
  () => DeleteRepositoryRequest,
  () => DeleteRepositoryResponse
);
export var DescribeRegistries = op(
  n0,
  _DRe,
  0,
  () => DescribeRegistriesRequest,
  () => DescribeRegistriesResponse
);
export var DescribeRepositories = op(
  n0,
  _DRes,
  0,
  () => DescribeRepositoriesRequest,
  () => DescribeRepositoriesResponse
);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  0,
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse
);
export var TagResource = op(
  n0,
  _TR,
  0,
  () => TagResourceRequest,
  () => TagResourceResponse
);
export var UntagResource = op(
  n0,
  _UR,
  0,
  () => UntagResourceRequest,
  () => UntagResourceResponse
);
