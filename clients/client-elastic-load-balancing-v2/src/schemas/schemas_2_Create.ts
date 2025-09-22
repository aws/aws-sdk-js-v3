// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  DuplicateTagKeysException as __DuplicateTagKeysException,
  DuplicateTrustStoreNameException as __DuplicateTrustStoreNameException,
  TooManyTagsException as __TooManyTagsException,
  TooManyTargetGroupsException as __TooManyTargetGroupsException,
  TooManyTrustStoresException as __TooManyTrustStoresException,
} from "../models/index";
import {
  _aQE,
  _AT,
  _ATI,
  _ATO,
  _c,
  _CCBSB,
  _CCBSK,
  _CCBSOV,
  _CTS,
  _CTSI,
  _CTSO,
  _DTe,
  _DTIe,
  _DTKE,
  _DTOe,
  _DTSNE,
  _e,
  _hE,
  _K,
  _M,
  _N,
  _RA,
  _RAe,
  _RTem,
  _RTIe,
  _RTOe,
  _Ta,
  _Tag,
  _TD,
  _TDa,
  _TK,
  _TL,
  _TMTE,
  _TMTGE,
  _TMTSE,
  _TS,
  _Va,
  n0,
} from "./schemas_0";
import { TrustStores } from "./schemas_7_Trust";

/* eslint no-var: 0 */

export var AddTagsInput = struct(n0, _ATI, 0, [_RA, _Ta], [64 | 0, () => TagList]);
export var AddTagsOutput = struct(n0, _ATO, 0, [], []);
export var CreateTrustStoreInput = struct(
  n0,
  _CTSI,
  0,
  [_N, _CCBSB, _CCBSK, _CCBSOV, _Ta],
  [0, 0, 0, 0, () => TagList]
);
export var CreateTrustStoreOutput = struct(n0, _CTSO, 0, [_TS], [() => TrustStores]);
export var DescribeTagsInput = struct(n0, _DTIe, 0, [_RA], [64 | 0]);
export var DescribeTagsOutput = struct(n0, _DTOe, 0, [_TD], [() => TagDescriptions]);
export var DuplicateTagKeysException = error(
  n0,
  _DTKE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`DuplicateTagKeys`, 400],
  },
  [_M],
  [0],

  __DuplicateTagKeysException
);
export var DuplicateTrustStoreNameException = error(
  n0,
  _DTSNE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`DuplicateTrustStoreName`, 400],
  },
  [_M],
  [0],

  __DuplicateTrustStoreNameException
);
export var RemoveTagsInput = struct(n0, _RTIe, 0, [_RA, _TK], [64 | 0, 64 | 0]);
export var RemoveTagsOutput = struct(n0, _RTOe, 0, [], []);
export var Tag = struct(n0, _Tag, 0, [_K, _Va], [0, 0]);
export var TagDescription = struct(n0, _TDa, 0, [_RAe, _Ta], [0, () => TagList]);
export var TooManyTagsException = error(
  n0,
  _TMTE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`TooManyTags`, 400],
  },
  [_M],
  [0],

  __TooManyTagsException
);
export var TooManyTargetGroupsException = error(
  n0,
  _TMTGE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`TooManyTargetGroups`, 400],
  },
  [_M],
  [0],

  __TooManyTargetGroupsException
);
export var TooManyTrustStoresException = error(
  n0,
  _TMTSE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`TooManyTrustStores`, 400],
  },
  [_M],
  [0],

  __TooManyTrustStoresException
);
export var ResourceArns = 64 | 0;

export var TagDescriptions = list(n0, _TD, 0, () => TagDescription);
export var TagKeys = 64 | 0;

export var TagList = list(n0, _TL, 0, () => Tag);
export var AddTags = op(
  n0,
  _AT,
  0,
  () => AddTagsInput,
  () => AddTagsOutput
);
export var CreateTrustStore = op(
  n0,
  _CTS,
  0,
  () => CreateTrustStoreInput,
  () => CreateTrustStoreOutput
);
export var DescribeTags = op(
  n0,
  _DTe,
  0,
  () => DescribeTagsInput,
  () => DescribeTagsOutput
);
export var RemoveTags = op(
  n0,
  _RTem,
  0,
  () => RemoveTagsInput,
  () => RemoveTagsOutput
);
