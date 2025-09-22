// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  InvalidTagParameterException as __InvalidTagParameterException,
  RepositoryAlreadyExistsException as __RepositoryAlreadyExistsException,
  TooManyTagsException as __TooManyTagsException,
} from "../models/index";
import {
  _c,
  _CR,
  _CRR,
  _CRRr,
  _e,
  _eC,
  _iSC,
  _iTM,
  _iTMEF,
  _ITPE,
  _K,
  _LTFR,
  _LTFRR,
  _LTFRRi,
  _me,
  _rA,
  _RAEE,
  _re,
  _rI,
  _rN,
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
  n0,
} from "./schemas_0";
import { ImageScanningConfiguration } from "./schemas_4_Repository";
import { EncryptionConfiguration, Repository } from "./schemas_6_Pull";
import { ImageTagMutabilityExclusionFilters } from "./schemas_17_Repository";

/* eslint no-var: 0 */

export var CreateRepositoryRequest = struct(
  n0,
  _CRR,
  0,
  [_rI, _rN, _t, _iTM, _iTMEF, _iSC, _eC],
  [
    0,
    0,
    () => TagList,
    0,
    () => ImageTagMutabilityExclusionFilters,
    () => ImageScanningConfiguration,
    () => EncryptionConfiguration,
  ]
);
export var CreateRepositoryResponse = struct(n0, _CRRr, 0, [_re], [() => Repository]);
export var InvalidTagParameterException = error(
  n0,
  _ITPE,
  {
    [_e]: _c,
  },
  [_me],
  [0],

  __InvalidTagParameterException
);
export var ListTagsForResourceRequest = struct(n0, _LTFRR, 0, [_rA], [0]);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_t], [() => TagList]);
export var RepositoryAlreadyExistsException = error(
  n0,
  _RAEE,
  {
    [_e]: _c,
  },
  [_me],
  [0],

  __RepositoryAlreadyExistsException
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
  [_me],
  [0],

  __TooManyTagsException
);
export var UntagResourceRequest = struct(n0, _URR, 0, [_rA, _tK], [0, 64 | 0]);
export var UntagResourceResponse = struct(n0, _URRn, 0, [], []);
export var TagKeyList = 64 | 0;

export var TagList = list(n0, _TL, 0, () => Tag);
export var CreateRepository = op(
  n0,
  _CR,
  0,
  () => CreateRepositoryRequest,
  () => CreateRepositoryResponse
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
