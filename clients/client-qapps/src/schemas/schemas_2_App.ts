// smithy-typescript generated code
import { list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _a,
  _aA,
  _aAF,
  _aD,
  _ADI,
  _AF,
  _aF,
  _AFt,
  _aI,
  _aIc,
  _aO,
  _ap,
  _b,
  _cA,
  _ca,
  _cAo,
  _cAr,
  _cE,
  _CIa,
  _CL,
  _CM,
  _cM,
  _con,
  _d,
  _DA,
  _DAV,
  _dV,
  _dVa,
  _eT,
  _f,
  _fI,
  _FICI,
  _FICM,
  _fIo,
  _fU,
  _FUCI,
  _gT,
  _gTOE,
  _h,
  _hH,
  _hQ,
  _i,
  _iI,
  _ii,
  _iP,
  _iV,
  _l,
  _LQA,
  _LQAI,
  _LQAO,
  _lT,
  _lTOE,
  _lV,
  _me,
  _ML,
  _n,
  _nF,
  _nT,
  _o,
  _oAF,
  _oS,
  _PAD,
  _pI,
  _pl,
  _PQA,
  _PQAI,
  _PQAIO,
  _PQAO,
  _pro,
  _pS,
  _qP,
  _QPCI,
  _qQ,
  _QQCI,
  _sch,
  _sLV,
  _st,
  _sV,
  _t,
  _tI,
  _TICI,
  _ty,
  _UAI,
  _UAL,
  _v,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AppDefinitionInput = struct(n0, _ADI, 0, [_ca, _iP], [() => CardList, 0]);
export var AttributeFilter = struct(
  n0,
  _AF,
  0,
  [_aAF, _oAF, _nF, _eT, _cA, _cAo, _gT, _gTOE, _lT, _lTOE],
  [
    () => AttributeFilters,
    () => AttributeFilters,
    () => AttributeFilter,
    () => DocumentAttribute,
    () => DocumentAttribute,
    () => DocumentAttribute,
    () => DocumentAttribute,
    () => DocumentAttribute,
    () => DocumentAttribute,
    () => DocumentAttribute,
  ]
);
export var ConversationMessage = struct(n0, _CM, 0, [_b, _ty], [0, 0]);
export var DocumentAttribute = struct(n0, _DA, 0, [_n, _v], [0, () => DocumentAttributeValue]);
export var FileUploadCardInput = struct(n0, _FUCI, 0, [_t, _i, _ty, _f, _fI, _aO], [0, 0, 0, 0, 0, 2]);
export var FormInputCardInput = struct(
  n0,
  _FICI,
  0,
  [_t, _i, _ty, _me, _cM],
  [0, 0, 0, () => FormInputCardMetadata, 0]
);
export var FormInputCardMetadata = struct(n0, _FICM, 0, [_sch], [15]);
export var ListQAppsInput = struct(
  n0,
  _LQAI,
  0,
  [_iI, _l, _nT],
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
  ]
);
export var ListQAppsOutput = struct(n0, _LQAO, 0, [_a, _nT], [() => UserAppsList, 0]);
export var PredictAppDefinition = struct(n0, _PAD, 0, [_t, _d, _aD], [0, 0, () => AppDefinitionInput]);
export var PredictQAppInput = struct(
  n0,
  _PQAI,
  0,
  [_iI, _o],
  [
    [
      0,
      {
        [_hH]: _ii,
      },
    ],
    () => PredictQAppInputOptions,
  ]
);
export var PredictQAppOutput = struct(n0, _PQAO, 0, [_ap, _pS], [() => PredictAppDefinition, 0]);
export var QPluginCardInput = struct(n0, _QPCI, 0, [_t, _i, _ty, _pro, _pI, _aIc], [0, 0, 0, 0, 0, 0]);
export var QQueryCardInput = struct(
  n0,
  _QQCI,
  0,
  [_t, _i, _ty, _pro, _oS, _aF],
  [0, 0, 0, 0, 0, () => AttributeFilter]
);
export var TextInputCardInput = struct(n0, _TICI, 0, [_t, _i, _ty, _pl, _dV], [0, 0, 0, 0, 0]);
export var UserAppItem = struct(n0, _UAI, 0, [_aI, _aA, _t, _d, _cAr, _cE, _st, _iV], [0, 0, 0, 0, 5, 2, 0, 2]);
export var AttributeFilters = list(n0, _AFt, 0, () => AttributeFilter);
export var CardList = list(n0, _CL, 0, () => CardInput);
export var DocumentAttributeStringListValue = 64 | 0;

export var MessageList = list(n0, _ML, 0, () => ConversationMessage);
export var UserAppsList = list(n0, _UAL, 0, () => UserAppItem);
export var CardInput = uni(
  n0,
  _CIa,
  0,
  [_tI, _qQ, _qP, _fU, _fIo],
  [
    () => TextInputCardInput,
    () => QQueryCardInput,
    () => QPluginCardInput,
    () => FileUploadCardInput,
    () => FormInputCardInput,
  ]
);
export var DocumentAttributeValue = uni(n0, _DAV, 0, [_sV, _sLV, _lV, _dVa], [0, 64 | 0, 1, 4]);
export var PredictQAppInputOptions = uni(n0, _PQAIO, 0, [_con, _pS], [() => MessageList, 0]);
export var ListQApps = op(
  n0,
  _LQA,
  {
    [_h]: ["GET", "/apps.list", 200],
  },
  () => ListQAppsInput,
  () => ListQAppsOutput
);
export var PredictQApp = op(
  n0,
  _PQA,
  {
    [_h]: ["POST", "/apps.predictQApp", 200],
  },
  () => PredictQAppInput,
  () => PredictQAppOutput
);
