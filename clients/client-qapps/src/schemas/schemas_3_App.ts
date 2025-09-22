// smithy-typescript generated code
import { list, map, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _aA,
  _AD,
  _aD,
  _aDV,
  _aF,
  _aI,
  _aIc,
  _aO,
  _aV,
  _Ca,
  _ca,
  _cAr,
  _cat,
  _cB,
  _cE,
  _cIa,
  _CLat,
  _CLII,
  _CLIO,
  _CLIr,
  _cM,
  _CML,
  _CS,
  _cS,
  _cSa,
  _CSM,
  _cV,
  _d,
  _de,
  _dV,
  _f,
  _fI,
  _FIC,
  _fIo,
  _fU,
  _FUC,
  _GLI,
  _GLII,
  _GLIO,
  _GQA,
  _GQAI,
  _GQAO,
  _GQAS,
  _GQASI,
  _GQASO,
  _h,
  _hH,
  _hQ,
  _i,
  _iI,
  _ii,
  _iP,
  _iRBU,
  _iV,
  _iVn,
  _l,
  _lI,
  _lII,
  _LIL,
  _LIM,
  _LLI,
  _LLII,
  _LLIO,
  _lPAV,
  _me,
  _mR,
  _nT,
  _oS,
  _pI,
  _pl,
  _pro,
  _pT,
  _qP,
  _QPC,
  _qQ,
  _QQC,
  _rC,
  _rCe,
  _S,
  _s,
  _sA,
  _sI,
  _sIu,
  _SL,
  _sN,
  _SQAS,
  _SQASI,
  _SQASO,
  _st,
  _t,
  _ta,
  _tI,
  _ti,
  _TIC,
  _ty,
  _uA,
  _uB,
  _uC,
  _uIH,
  _UQA,
  _UQAI,
  _UQAO,
  _v,
  n0,
} from "./schemas_0";
import { AppDefinitionInput, AttributeFilter, FormInputCardMetadata } from "./schemas_2_App";
import { CardValueList } from "./schemas_6_App";
import { Category } from "./schemas_13_Library";

/* eslint no-var: 0 */

export var AppDefinition = struct(n0, _AD, 0, [_aDV, _ca, _cE], [0, () => CardModelList, 2]);
export var CardStatus = struct(n0, _CS, 0, [_cS, _cV, _s], [0, 0, () => SubmissionList]);
export var CreateLibraryItemInput = struct(
  n0,
  _CLII,
  0,
  [_iI, _aI, _aV, _cat],
  [
    [
      0,
      {
        [_hH]: _ii,
      },
    ],
    0,
    1,
    64 | 0,
  ]
);
export var CreateLibraryItemOutput = struct(
  n0,
  _CLIO,
  0,
  [_lII, _st, _cAr, _cB, _uA, _uB, _rC, _iV],
  [0, 0, 5, 0, 5, 0, 1, 2]
);
export var FileUploadCard = struct(n0, _FUC, 0, [_i, _t, _de, _ty, _f, _fI, _aO], [0, 0, 64 | 0, 0, 0, 0, 2]);
export var FormInputCard = struct(
  n0,
  _FIC,
  0,
  [_i, _t, _de, _ty, _me, _cM],
  [0, 0, 64 | 0, 0, () => FormInputCardMetadata, 0]
);
export var GetLibraryItemInput = struct(
  n0,
  _GLII,
  0,
  [_iI, _lII, _aI],
  [
    [
      0,
      {
        [_hH]: _ii,
      },
    ],
    [
      0,
      {
        [_hQ]: _lII,
      },
    ],
    [
      0,
      {
        [_hQ]: _aI,
      },
    ],
  ]
);
export var GetLibraryItemOutput = struct(
  n0,
  _GLIO,
  0,
  [_lII, _aI, _aV, _cat, _st, _cAr, _cB, _uA, _uB, _rC, _iRBU, _uC, _iV],
  [0, 0, 1, () => CategoryList, 0, 5, 0, 5, 0, 1, 2, 1, 2]
);
export var GetQAppInput = struct(
  n0,
  _GQAI,
  0,
  [_iI, _aI, _aV],
  [
    [
      0,
      {
        [_hH]: _ii,
      },
    ],
    [
      0,
      {
        [_hQ]: _aI,
      },
    ],
    [
      1,
      {
        [_hQ]: _aV,
      },
    ],
  ]
);
export var GetQAppOutput = struct(
  n0,
  _GQAO,
  0,
  [_aI, _aA, _t, _d, _iP, _aV, _st, _cAr, _cB, _uA, _uB, _rCe, _aD],
  [0, 0, 0, 0, 0, 1, 0, 5, 0, 5, 0, 64 | 0, () => AppDefinition]
);
export var GetQAppSessionInput = struct(
  n0,
  _GQASI,
  0,
  [_iI, _sI],
  [
    [
      0,
      {
        [_hH]: _ii,
      },
    ],
    [
      0,
      {
        [_hQ]: _sI,
      },
    ],
  ]
);
export var GetQAppSessionOutput = struct(
  n0,
  _GQASO,
  0,
  [_sI, _sA, _sN, _aV, _lPAV, _st, _cSa, _uIH],
  [0, 0, 0, 1, 1, 0, () => CardStatusMap, 2]
);
export var LibraryItemMember = struct(
  n0,
  _LIM,
  0,
  [_lII, _aI, _aV, _cat, _st, _cAr, _cB, _uA, _uB, _rC, _iRBU, _uC, _iV],
  [0, 0, 1, () => CategoryList, 0, 5, 0, 5, 0, 1, 2, 1, 2]
);
export var ListLibraryItemsInput = struct(
  n0,
  _LLII,
  0,
  [_iI, _l, _nT, _cIa],
  [
    [
      0,
      {
        [_hH]: _ii,
      },
    ],
    [
      1,
      {
        [_hQ]: _l,
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
        [_hQ]: _cIa,
      },
    ],
  ]
);
export var ListLibraryItemsOutput = struct(n0, _LLIO, 0, [_lI, _nT], [() => LibraryItemList, 0]);
export var QPluginCard = struct(n0, _QPC, 0, [_i, _t, _de, _ty, _pro, _pT, _pI, _aIc], [0, 0, 64 | 0, 0, 0, 0, 0, 0]);
export var QQueryCard = struct(
  n0,
  _QQC,
  0,
  [_i, _t, _de, _ty, _pro, _oS, _aF, _mR],
  [0, 0, 64 | 0, 0, 0, 0, () => AttributeFilter, 64 | 0]
);
export var StartQAppSessionInput = struct(
  n0,
  _SQASI,
  0,
  [_iI, _aI, _aV, _iVn, _sI, _ta],
  [
    [
      0,
      {
        [_hH]: _ii,
      },
    ],
    0,
    1,
    () => CardValueList,
    0,
    128 | 0,
  ]
);
export var StartQAppSessionOutput = struct(n0, _SQASO, 0, [_sI, _sA], [0, 0]);
export var Submission = struct(n0, _S, 0, [_v, _sIu, _ti], [15, 0, 5]);
export var TextInputCard = struct(n0, _TIC, 0, [_i, _t, _de, _ty, _pl, _dV], [0, 0, 64 | 0, 0, 0, 0]);
export var UpdateQAppInput = struct(
  n0,
  _UQAI,
  0,
  [_iI, _aI, _t, _d, _aD],
  [
    [
      0,
      {
        [_hH]: _ii,
      },
    ],
    0,
    0,
    0,
    () => AppDefinitionInput,
  ]
);
export var UpdateQAppOutput = struct(
  n0,
  _UQAO,
  0,
  [_aI, _aA, _t, _d, _iP, _aV, _st, _cAr, _cB, _uA, _uB, _rCe],
  [0, 0, 0, 0, 0, 1, 0, 5, 0, 5, 0, 64 | 0]
);
export var AppRequiredCapabilities = 64 | 0;

export var CardModelList = list(n0, _CML, 0, () => Card);
export var CategoryIdList = 64 | 0;

export var CategoryList = list(n0, _CLat, 0, () => Category);
export var DependencyList = 64 | 0;

export var LibraryItemList = list(n0, _LIL, 0, () => LibraryItemMember);
export var MemoryReferenceList = 64 | 0;

export var SubmissionList = list(n0, _SL, 0, () => Submission);
export var CardStatusMap = map(n0, _CSM, 0, 0, () => CardStatus);
export var TagMap = 128 | 0;

export var Card = uni(
  n0,
  _Ca,
  0,
  [_tI, _qQ, _qP, _fU, _fIo],
  [() => TextInputCard, () => QQueryCard, () => QPluginCard, () => FileUploadCard, () => FormInputCard]
);
export var CreateLibraryItem = op(
  n0,
  _CLIr,
  {
    [_h]: ["POST", "/catalog.createItem", 200],
  },
  () => CreateLibraryItemInput,
  () => CreateLibraryItemOutput
);
export var GetLibraryItem = op(
  n0,
  _GLI,
  {
    [_h]: ["GET", "/catalog.getItem", 200],
  },
  () => GetLibraryItemInput,
  () => GetLibraryItemOutput
);
export var GetQApp = op(
  n0,
  _GQA,
  {
    [_h]: ["GET", "/apps.get", 200],
  },
  () => GetQAppInput,
  () => GetQAppOutput
);
export var GetQAppSession = op(
  n0,
  _GQAS,
  {
    [_h]: ["GET", "/runtime.getQAppSession", 200],
  },
  () => GetQAppSessionInput,
  () => GetQAppSessionOutput
);
export var ListLibraryItems = op(
  n0,
  _LLI,
  {
    [_h]: ["GET", "/catalog.list", 200],
  },
  () => ListLibraryItemsInput,
  () => ListLibraryItemsOutput
);
export var StartQAppSession = op(
  n0,
  _SQAS,
  {
    [_h]: ["POST", "/runtime.startQAppSession", 200],
  },
  () => StartQAppSessionInput,
  () => StartQAppSessionOutput
);
export var UpdateQApp = op(
  n0,
  _UQA,
  {
    [_h]: ["POST", "/apps.update", 200],
  },
  () => UpdateQAppInput,
  () => UpdateQAppOutput
);
