// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _BDRV,
  _BDRVR,
  _BDRVRa,
  _CB,
  _CD,
  _D,
  _DRe,
  _DRRes,
  _DRResc,
  _DRV,
  _DRVR,
  _DRVRe,
  _E,
  _EC,
  _EMr,
  _h,
  _hQ,
  _LMB,
  _LMD,
  _LR,
  _LRR,
  _LRRi,
  _LRV,
  _LRVR,
  _LRVRi,
  _mR,
  _MRa,
  _N,
  _n,
  _NT,
  _nT,
  _PB,
  _PD,
  _PN,
  _RAe,
  _Re,
  _Rec,
  _REL,
  _RL,
  _RV,
  _rV,
  _RVe,
  _RVED,
  _St,
  _T,
  n0,
} from "./schemas_0";
import { RecipeStepList } from "./schemas_4_Recipe";

/* eslint no-var: 0 */

export var BatchDeleteRecipeVersionRequest = struct(n0, _BDRVR, 0, [_N, _RV], [[0, 1], 64 | 0]);
export var BatchDeleteRecipeVersionResponse = struct(n0, _BDRVRa, 0, [_N, _E], [0, () => RecipeErrorList]);
export var DeleteRecipeVersionRequest = struct(
  n0,
  _DRVR,
  0,
  [_N, _RVe],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteRecipeVersionResponse = struct(n0, _DRVRe, 0, [_N, _RVe], [0, 0]);
export var DescribeRecipeRequest = struct(
  n0,
  _DRRes,
  0,
  [_N, _RVe],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _rV,
      },
    ],
  ]
);
export var DescribeRecipeResponse = struct(
  n0,
  _DRResc,
  0,
  [_CB, _CD, _LMB, _LMD, _PN, _PB, _PD, _D, _N, _St, _T, _RAe, _RVe],
  [0, 4, 0, 4, 0, 0, 4, 0, 0, () => RecipeStepList, 128 | 0, 0, 0]
);
export var ListRecipesRequest = struct(
  n0,
  _LRR,
  0,
  [_MRa, _NT, _RVe],
  [
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      0,
      {
        [_hQ]: _rV,
      },
    ],
  ]
);
export var ListRecipesResponse = struct(n0, _LRRi, 0, [_Re, _NT], [() => RecipeList, 0]);
export var ListRecipeVersionsRequest = struct(
  n0,
  _LRVR,
  0,
  [_MRa, _NT, _N],
  [
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      0,
      {
        [_hQ]: _n,
      },
    ],
  ]
);
export var ListRecipeVersionsResponse = struct(n0, _LRVRi, 0, [_NT, _Re], [0, () => RecipeList]);
export var Recipe = struct(
  n0,
  _Rec,
  0,
  [_CB, _CD, _LMB, _LMD, _PN, _PB, _PD, _D, _N, _RAe, _St, _T, _RVe],
  [0, 4, 0, 4, 0, 0, 4, 0, 0, 0, () => RecipeStepList, 128 | 0, 0]
);
export var RecipeVersionErrorDetail = struct(n0, _RVED, 0, [_EC, _EMr, _RVe], [0, 0, 0]);
export var RecipeErrorList = list(n0, _REL, 0, () => RecipeVersionErrorDetail);
export var RecipeList = list(n0, _RL, 0, () => Recipe);
export var RecipeVersionList = 64 | 0;

export var BatchDeleteRecipeVersion = op(
  n0,
  _BDRV,
  {
    [_h]: ["POST", "/recipes/{Name}/batchDeleteRecipeVersion", 200],
  },
  () => BatchDeleteRecipeVersionRequest,
  () => BatchDeleteRecipeVersionResponse
);
export var DeleteRecipeVersion = op(
  n0,
  _DRV,
  {
    [_h]: ["DELETE", "/recipes/{Name}/recipeVersion/{RecipeVersion}", 200],
  },
  () => DeleteRecipeVersionRequest,
  () => DeleteRecipeVersionResponse
);
export var DescribeRecipe = op(
  n0,
  _DRe,
  {
    [_h]: ["GET", "/recipes/{Name}", 200],
  },
  () => DescribeRecipeRequest,
  () => DescribeRecipeResponse
);
export var ListRecipes = op(
  n0,
  _LR,
  {
    [_h]: ["GET", "/recipes", 200],
  },
  () => ListRecipesRequest,
  () => ListRecipesResponse
);
export var ListRecipeVersions = op(
  n0,
  _LRV,
  {
    [_h]: ["GET", "/recipeVersions", 200],
  },
  () => ListRecipeVersionsRequest,
  () => ListRecipeVersionsResponse
);
