// smithy-typescript generated code
import { error, list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  InternalStreamingException as __InternalStreamingException,
  InvalidOperationException as __InvalidOperationException,
} from "../models/index";
import {
  _AK,
  _aK,
  _AKE,
  _AKEd,
  _c,
  _CET,
  _CETR,
  _co,
  _cs,
  _CSV,
  _cTr,
  _CV,
  _cV,
  _CVE,
  _CVEo,
  _da,
  _del,
  _des,
  _DK,
  _dK,
  _DT,
  _DTC,
  _dTC,
  _DTR,
  _e,
  _eM,
  _eN,
  _en,
  _end,
  _eS,
  _f,
  _FD,
  _fD,
  _fE,
  _fie,
  _fl,
  _fSi,
  _G,
  _g,
  _GLO,
  _GLOR,
  _GLORe,
  _GLORS,
  _GT,
  _GTR,
  _GTRe,
  _IOE,
  _ISE,
  _k,
  _kP,
  _kVD,
  _l,
  _LCS,
  _lCS,
  _lEM,
  _lGI,
  _lMT,
  _lOP,
  _LTM,
  _lTM,
  _m,
  _ma,
  _MK,
  _mK,
  _MKE,
  _MKEo,
  _mP,
  _nMV,
  _oIE,
  _oV,
  _PC,
  _pC,
  _PJSON,
  _pJSON,
  _PKV,
  _pKV,
  _PP,
  _pP,
  _PR,
  _Pr,
  _pRa,
  _Pro,
  _PTOCSF,
  _pTOCSF,
  _PTR,
  _PTu,
  _PVPC,
  _pVPC,
  _PWAF,
  _pWAF,
  _qC,
  _RK,
  _rK,
  _RKE,
  _RKEe,
  _rTen,
  _so,
  _SS,
  _SSEp,
  _SSEpl,
  _SSEu,
  _SSEub,
  _sSp,
  _SSu,
  _sSu,
  _sT,
  _str,
  _t,
  _TC,
  _tC,
  _TCE,
  _TCEy,
  _tCy,
  _tEM,
  _tF,
  _tI,
  _TL,
  _tL,
  _TLR,
  _to,
  _TS,
  _tSr,
  _TT,
  _tT,
  _TTR,
  _TTRe,
  _ty,
  _u,
  _UCS,
  _uCS,
  _v,
  _vK,
  _wK,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AddKeyEntry = struct(n0, _AKE, 0, [_k, _v, _oIE], [0, 0, 2]);
export var AddKeys = struct(n0, _AK, 0, [_en], [() => AddKeyEntries]);
export var CancelExportTaskRequest = struct(n0, _CETR, 0, [_tI], [0]);
export var CopyValue = struct(n0, _CV, 0, [_en], [() => CopyValueEntries]);
export var CopyValueEntry = struct(n0, _CVE, 0, [_so, _t, _oIE], [0, 0, 2]);
export var CSV = struct(n0, _CSV, 0, [_qC, _del, _co, _so], [0, 0, 64 | 0, 0]);
export var DateTimeConverter = struct(n0, _DTC, 0, [_so, _t, _tF, _mP, _sT, _tT, _l], [0, 0, 0, 64 | 0, 0, 0, 0]);
export var DeleteKeys = struct(n0, _DK, 0, [_wK], [64 | 0]);
export var DeleteTransformerRequest = struct(n0, _DTR, 0, [_lGI], [0]);
export var FieldsData = struct(n0, _FD, 0, [_da], [21]);
export var GetLogObjectRequest = struct(n0, _GLOR, 0, [_u, _lOP], [2, 0]);
export var GetLogObjectResponse = struct(n0, _GLORe, 0, [_fSi], [[() => GetLogObjectResponseStream, 0]]);
export var GetTransformerRequest = struct(n0, _GTR, 0, [_lGI], [0]);
export var GetTransformerResponse = struct(n0, _GTRe, 0, [_lGI, _cTr, _lMT, _tC], [0, 1, 1, () => Processors]);
export var Grok = struct(n0, _G, 0, [_so, _ma], [0, 0]);
export var InternalStreamingException = error(
  n0,
  _ISE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __InternalStreamingException
);
export var InvalidOperationException = error(
  n0,
  _IOE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __InvalidOperationException
);
export var ListToMap = struct(n0, _LTM, 0, [_so, _k, _vK, _t, _fl, _fE], [0, 0, 0, 0, 2, 0]);
export var LowerCaseString = struct(n0, _LCS, 0, [_wK], [64 | 0]);
export var MoveKeyEntry = struct(n0, _MKE, 0, [_so, _t, _oIE], [0, 0, 2]);
export var MoveKeys = struct(n0, _MK, 0, [_en], [() => MoveKeyEntries]);
export var ParseCloudfront = struct(n0, _PC, 0, [_so], [0]);
export var ParseJSON = struct(n0, _PJSON, 0, [_so, _des], [0, 0]);
export var ParseKeyValue = struct(n0, _PKV, 0, [_so, _des, _fD, _kVD, _kP, _nMV, _oIE], [0, 0, 0, 0, 0, 0, 2]);
export var ParsePostgres = struct(n0, _PP, 0, [_so], [0]);
export var ParseRoute53 = struct(n0, _PR, 0, [_so], [0]);
export var ParseToOCSF = struct(n0, _PTOCSF, 0, [_so, _eS, _oV], [0, 0, 0]);
export var ParseVPC = struct(n0, _PVPC, 0, [_so], [0]);
export var ParseWAF = struct(n0, _PWAF, 0, [_so], [0]);
export var Processor = struct(
  n0,
  _Pr,
  0,
  [
    _aK,
    _cV,
    _cs,
    _dTC,
    _dK,
    _g,
    _lTM,
    _lCS,
    _mK,
    _pC,
    _pJSON,
    _pKV,
    _pRa,
    _pTOCSF,
    _pP,
    _pVPC,
    _pWAF,
    _rK,
    _sSp,
    _sSu,
    _tSr,
    _tCy,
    _uCS,
  ],
  [
    () => AddKeys,
    () => CopyValue,
    () => CSV,
    () => DateTimeConverter,
    () => DeleteKeys,
    () => Grok,
    () => ListToMap,
    () => LowerCaseString,
    () => MoveKeys,
    () => ParseCloudfront,
    () => ParseJSON,
    () => ParseKeyValue,
    () => ParseRoute53,
    () => ParseToOCSF,
    () => ParsePostgres,
    () => ParseVPC,
    () => ParseWAF,
    () => RenameKeys,
    () => SplitString,
    () => SubstituteString,
    () => TrimString,
    () => TypeConverter,
    () => UpperCaseString,
  ]
);
export var PutTransformerRequest = struct(n0, _PTR, 0, [_lGI, _tC], [0, () => Processors]);
export var RenameKeyEntry = struct(n0, _RKE, 0, [_k, _rTen, _oIE], [0, 0, 2]);
export var RenameKeys = struct(n0, _RK, 0, [_en], [() => RenameKeyEntries]);
export var SplitString = struct(n0, _SS, 0, [_en], [() => SplitStringEntries]);
export var SplitStringEntry = struct(n0, _SSEp, 0, [_so, _del], [0, 0]);
export var SubstituteString = struct(n0, _SSu, 0, [_en], [() => SubstituteStringEntries]);
export var SubstituteStringEntry = struct(n0, _SSEu, 0, [_so, _f, _to], [0, 0, 0]);
export var TestTransformerRequest = struct(n0, _TTR, 0, [_tC, _lEM], [() => Processors, 64 | 0]);
export var TestTransformerResponse = struct(n0, _TTRe, 0, [_tL], [() => TransformedLogs]);
export var TransformedLogRecord = struct(n0, _TLR, 0, [_eN, _eM, _tEM], [1, 0, 0]);
export var TrimString = struct(n0, _TS, 0, [_wK], [64 | 0]);
export var TypeConverter = struct(n0, _TC, 0, [_en], [() => TypeConverterEntries]);
export var TypeConverterEntry = struct(n0, _TCE, 0, [_k, _ty], [0, 0]);
export var UpperCaseString = struct(n0, _UCS, 0, [_wK], [64 | 0]);
export var AddKeyEntries = list(n0, _AKEd, 0, () => AddKeyEntry);
export var Columns = 64 | 0;

export var CopyValueEntries = list(n0, _CVEo, 0, () => CopyValueEntry);
export var DeleteWithKeys = 64 | 0;

export var LowerCaseStringWithKeys = 64 | 0;

export var MatchPatterns = 64 | 0;

export var MoveKeyEntries = list(n0, _MKEo, 0, () => MoveKeyEntry);
export var Processors = list(n0, _Pro, 0, () => Processor);
export var RenameKeyEntries = list(n0, _RKEe, 0, () => RenameKeyEntry);
export var SplitStringEntries = list(n0, _SSEpl, 0, () => SplitStringEntry);
export var SubstituteStringEntries = list(n0, _SSEub, 0, () => SubstituteStringEntry);
export var TransformedLogs = list(n0, _TL, 0, () => TransformedLogRecord);
export var TrimStringWithKeys = 64 | 0;

export var TypeConverterEntries = list(n0, _TCEy, 0, () => TypeConverterEntry);
export var UpperCaseStringWithKeys = 64 | 0;

export var GetLogObjectResponseStream = uni(
  n0,
  _GLORS,
  {
    [_str]: 1,
  },
  [_fie, _ISE],
  [() => FieldsData, [() => InternalStreamingException, 0]]
);
export var CancelExportTask = op(
  n0,
  _CET,
  0,
  () => CancelExportTaskRequest,
  () => Unit
);
export var DeleteTransformer = op(
  n0,
  _DT,
  0,
  () => DeleteTransformerRequest,
  () => Unit
);
export var GetLogObject = op(
  n0,
  _GLO,
  {
    [_end]: ["streaming-"],
  },
  () => GetLogObjectRequest,
  () => GetLogObjectResponse
);
export var GetTransformer = op(
  n0,
  _GT,
  0,
  () => GetTransformerRequest,
  () => GetTransformerResponse
);
export var PutTransformer = op(
  n0,
  _PTu,
  0,
  () => PutTransformerRequest,
  () => Unit
);
export var TestTransformer = op(
  n0,
  _TT,
  0,
  () => TestTransformerRequest,
  () => TestTransformerResponse
);
