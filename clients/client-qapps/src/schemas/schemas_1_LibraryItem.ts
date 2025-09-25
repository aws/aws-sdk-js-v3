// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { ConflictException as __ConflictException } from "../models/index";
import {
  _aA,
  _aD,
  _aI,
  _ALIR,
  _ALIRI,
  _aV,
  _BCC,
  _BCCI,
  _BCCIC,
  _BCCICL,
  _BDC,
  _BDCI,
  _BUC,
  _BUCI,
  _c,
  _cAr,
  _cat,
  _cB,
  _CE,
  _cFL,
  _CI,
  _CLI,
  _co,
  _CQA,
  _CQAI,
  _CQAO,
  _d,
  _DLIR,
  _DLIRI,
  _e,
  _eA,
  _EQASD,
  _EQASDI,
  _EQASDO,
  _h,
  _hE,
  _hH,
  _i,
  _iI,
  _ii,
  _iP,
  _iRBU,
  _iV,
  _lII,
  _m,
  _rARN,
  _rC,
  _rCe,
  _rI,
  _rT,
  _sA,
  _sI,
  _st,
  _t,
  _ta,
  _TR,
  _TRR,
  _TRRa,
  _uA,
  _uB,
  _uC,
  _ULI,
  _ULII,
  _ULIM,
  _ULIMI,
  _ULIO,
  n0,
} from "./schemas_0";
import { AppDefinitionInput } from "./schemas_2_App";
import { CategoryList } from "./schemas_3_App";
import { Unit } from "./schemas_7_App";

/* eslint no-var: 0 */

export var AssociateLibraryItemReviewInput = struct(
  n0,
  _ALIRI,
  0,
  [_iI, _lII],
  [
    [
      0,
      {
        [_hH]: _ii,
      },
    ],
    0,
  ]
);
export var BatchCreateCategoryInput = struct(
  n0,
  _BCCI,
  0,
  [_iI, _cat],
  [
    [
      0,
      {
        [_hH]: _ii,
      },
    ],
    () => BatchCreateCategoryInputCategoryList,
  ]
);
export var BatchCreateCategoryInputCategory = struct(n0, _BCCIC, 0, [_i, _t, _co], [0, 0, 0]);
export var BatchDeleteCategoryInput = struct(
  n0,
  _BDCI,
  0,
  [_iI, _cat],
  [
    [
      0,
      {
        [_hH]: _ii,
      },
    ],
    64 | 0,
  ]
);
export var BatchUpdateCategoryInput = struct(
  n0,
  _BUCI,
  0,
  [_iI, _cat],
  [
    [
      0,
      {
        [_hH]: _ii,
      },
    ],
    () => CategoryListInput,
  ]
);
export var CategoryInput = struct(n0, _CI, 0, [_i, _t, _co], [0, 0, 0]);
export var ConflictException = error(
  n0,
  _CE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_m, _rI, _rT],
  [0, 0, 0],

  __ConflictException
);
export var CreateQAppInput = struct(
  n0,
  _CQAI,
  0,
  [_iI, _t, _d, _aD, _ta],
  [
    [
      0,
      {
        [_hH]: _ii,
      },
    ],
    0,
    0,
    () => AppDefinitionInput,
    128 | 0,
  ]
);
export var CreateQAppOutput = struct(
  n0,
  _CQAO,
  0,
  [_aI, _aA, _t, _d, _iP, _aV, _st, _cAr, _cB, _uA, _uB, _rCe],
  [0, 0, 0, 0, 0, 1, 0, 5, 0, 5, 0, 64 | 0]
);
export var DisassociateLibraryItemReviewInput = struct(
  n0,
  _DLIRI,
  0,
  [_iI, _lII],
  [
    [
      0,
      {
        [_hH]: _ii,
      },
    ],
    0,
  ]
);
export var ExportQAppSessionDataInput = struct(
  n0,
  _EQASDI,
  0,
  [_iI, _sI],
  [
    [
      0,
      {
        [_hH]: _ii,
      },
    ],
    0,
  ]
);
export var ExportQAppSessionDataOutput = struct(n0, _EQASDO, 0, [_cFL, _eA, _sA], [0, 5, 0]);
export var TagResourceRequest = struct(n0, _TRR, 0, [_rARN, _ta], [[0, 1], 128 | 0]);
export var TagResourceResponse = struct(n0, _TRRa, 0, [], []);
export var UpdateLibraryItemInput = struct(
  n0,
  _ULII,
  0,
  [_iI, _lII, _st, _cat],
  [
    [
      0,
      {
        [_hH]: _ii,
      },
    ],
    0,
    0,
    64 | 0,
  ]
);
export var UpdateLibraryItemMetadataInput = struct(
  n0,
  _ULIMI,
  0,
  [_iI, _lII, _iV],
  [
    [
      0,
      {
        [_hH]: _ii,
      },
    ],
    0,
    2,
  ]
);
export var UpdateLibraryItemOutput = struct(
  n0,
  _ULIO,
  0,
  [_lII, _aI, _aV, _cat, _st, _cAr, _cB, _uA, _uB, _rC, _iRBU, _uC, _iV],
  [0, 0, 1, () => CategoryList, 0, 5, 0, 5, 0, 1, 2, 1, 2]
);
export var BatchCreateCategoryInputCategoryList = list(n0, _BCCICL, 0, () => BatchCreateCategoryInputCategory);
export var CategoryListInput = list(n0, _CLI, 0, () => CategoryInput);
export var DeleteCategoryInputList = 64 | 0;

export var AssociateLibraryItemReview = op(
  n0,
  _ALIR,
  {
    [_h]: ["POST", "/catalog.associateItemRating", 200],
  },
  () => AssociateLibraryItemReviewInput,
  () => Unit
);
export var BatchCreateCategory = op(
  n0,
  _BCC,
  {
    [_h]: ["POST", "/catalog.createCategories", 200],
  },
  () => BatchCreateCategoryInput,
  () => Unit
);
export var BatchDeleteCategory = op(
  n0,
  _BDC,
  {
    [_h]: ["POST", "/catalog.deleteCategories", 200],
  },
  () => BatchDeleteCategoryInput,
  () => Unit
);
export var BatchUpdateCategory = op(
  n0,
  _BUC,
  {
    [_h]: ["POST", "/catalog.updateCategories", 200],
  },
  () => BatchUpdateCategoryInput,
  () => Unit
);
export var CreateQApp = op(
  n0,
  _CQA,
  {
    [_h]: ["POST", "/apps.create", 200],
  },
  () => CreateQAppInput,
  () => CreateQAppOutput
);
export var DisassociateLibraryItemReview = op(
  n0,
  _DLIR,
  {
    [_h]: ["POST", "/catalog.disassociateItemRating", 200],
  },
  () => DisassociateLibraryItemReviewInput,
  () => Unit
);
export var ExportQAppSessionData = op(
  n0,
  _EQASD,
  {
    [_h]: ["POST", "/runtime.exportQAppSessionData", 200],
  },
  () => ExportQAppSessionDataInput,
  () => ExportQAppSessionDataOutput
);
export var TagResource = op(
  n0,
  _TR,
  {
    [_h]: ["POST", "/tags/{resourceARN}", 200],
  },
  () => TagResourceRequest,
  () => TagResourceResponse
);
export var UpdateLibraryItem = op(
  n0,
  _ULI,
  {
    [_h]: ["POST", "/catalog.updateItem", 200],
  },
  () => UpdateLibraryItemInput,
  () => UpdateLibraryItemOutput
);
export var UpdateLibraryItemMetadata = op(
  n0,
  _ULIM,
  {
    [_h]: ["POST", "/catalog.updateItemMetadata", 200],
  },
  () => UpdateLibraryItemMetadataInput,
  () => Unit
);
