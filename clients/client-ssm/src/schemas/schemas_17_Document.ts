// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  AssociatedInstances as __AssociatedInstances,
  DocumentAlreadyExists as __DocumentAlreadyExists,
  InvalidDocumentContent as __InvalidDocumentContent,
  InvalidDocumentSchemaVersion as __InvalidDocumentSchemaVersion,
} from "../models/index";
import {
  _AILt,
  _AIs,
  _AIt,
  _AItt,
  _aQE,
  _ASL,
  _ASt,
  _At,
  _Au,
  _AVp,
  _c,
  _Ca,
  _CD,
  _CDR,
  _CDre,
  _CDRr,
  _CE,
  _Con,
  _D,
  _DAE,
  _DD,
  _DDe,
  _DDR,
  _DDRe,
  _DF,
  _DNi,
  _DPLo,
  _DPo,
  _DRL,
  _DRo,
  _DT,
  _DV,
  _DVe,
  _DVef,
  _DVI,
  _DVL,
  _DVo,
  _e,
  _Fo,
  _H,
  _HT,
  _IDC,
  _IDSV,
  _IDV,
  _K,
  _LDV,
  _LDVR,
  _LDVRi,
  _LV,
  _M,
  _MR,
  _N,
  _NT,
  _Ow,
  _P,
  _PRV,
  _PTL,
  _PTl,
  _PTla,
  _Req,
  _Rev,
  _RIe,
  _RIL,
  _RS,
  _RTeq,
  _RTev,
  _Sha,
  _SI,
  _St,
  _SV,
  _T,
  _TT,
  _Ty,
  _Va,
  _Ve,
  _VN,
  _xN,
  n0,
  TagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AssociatedInstances = error(
  n0,
  _AIs,
  {
    [_e]: _c,
    [_aQE]: [`AssociatedInstances`, 400],
  },
  [],
  [],

  __AssociatedInstances
);
export var AttachmentInformation = struct(n0, _AIt, 0, [_N], [0]);
export var AttachmentsSource = struct(n0, _ASt, 0, [_K, _Va, _N], [0, 64 | 0, 0]);
export var CreateDocumentRequest = struct(
  n0,
  _CDR,
  0,
  [_Con, _Req, _At, _N, _DNi, _VN, _DT, _DF, _TT, _T],
  [0, () => DocumentRequiresList, () => AttachmentsSourceList, 0, 0, 0, 0, 0, 0, () => TagList]
);
export var CreateDocumentResult = struct(n0, _CDRr, 0, [_DD], [[() => DocumentDescription, 0]]);
export var DeleteDocumentRequest = struct(n0, _DDR, 0, [_N, _DV, _VN, _Fo], [0, 0, 0, 2]);
export var DeleteDocumentResult = struct(n0, _DDRe, 0, [], []);
export var DocumentAlreadyExists = error(
  n0,
  _DAE,
  {
    [_e]: _c,
    [_aQE]: [`DocumentAlreadyExists`, 400],
  },
  [_M],
  [0],

  __DocumentAlreadyExists
);
export var DocumentDescription = struct(
  n0,
  _DD,
  0,
  [
    _Sha,
    _H,
    _HT,
    _N,
    _DNi,
    _VN,
    _Ow,
    _CD,
    _St,
    _SI,
    _DV,
    _D,
    _P,
    _PTl,
    _DT,
    _SV,
    _LV,
    _DVe,
    _DF,
    _TT,
    _T,
    _AItt,
    _Req,
    _Au,
    _RIe,
    _AVp,
    _PRV,
    _RS,
    _Ca,
    _CE,
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    4,
    0,
    0,
    0,
    0,
    [() => DocumentParameterList, 0],
    [() => PlatformTypeList, 0],
    0,
    0,
    0,
    0,
    0,
    0,
    () => TagList,
    [() => AttachmentInformationList, 0],
    () => DocumentRequiresList,
    0,
    [() => ReviewInformationList, 0],
    0,
    0,
    0,
    64 | 0,
    64 | 0,
  ]
);
export var DocumentParameter = struct(n0, _DPo, 0, [_N, _Ty, _D, _DVef], [0, 0, 0, 0]);
export var DocumentRequires = struct(n0, _DRo, 0, [_N, _Ve, _RTeq, _VN], [0, 0, 0, 0]);
export var DocumentVersionInfo = struct(
  n0,
  _DVI,
  0,
  [_N, _DNi, _DV, _VN, _CD, _IDV, _DF, _St, _SI, _RS],
  [0, 0, 0, 0, 4, 2, 0, 0, 0, 0]
);
export var InvalidDocumentContent = error(
  n0,
  _IDC,
  {
    [_e]: _c,
    [_aQE]: [`InvalidDocumentContent`, 400],
  },
  [_M],
  [0],

  __InvalidDocumentContent
);
export var InvalidDocumentSchemaVersion = error(
  n0,
  _IDSV,
  {
    [_e]: _c,
    [_aQE]: [`InvalidDocumentSchemaVersion`, 400],
  },
  [_M],
  [0],

  __InvalidDocumentSchemaVersion
);
export var ListDocumentVersionsRequest = struct(n0, _LDVR, 0, [_N, _MR, _NT], [0, 1, 0]);
export var ListDocumentVersionsResult = struct(n0, _LDVRi, 0, [_DVo, _NT], [() => DocumentVersionList, 0]);
export var ReviewInformation = struct(n0, _RIe, 0, [_RTev, _St, _Rev], [4, 0, 0]);
export var AttachmentInformationList = list(n0, _AILt, 0, [
  () => AttachmentInformation,
  {
    [_xN]: _AIt,
  },
]);
export var AttachmentsSourceList = list(n0, _ASL, 0, () => AttachmentsSource);
export var AttachmentsSourceValues = 64 | 0;

export var CategoryEnumList = 64 | 0;

export var CategoryList = 64 | 0;

export var DocumentParameterList = list(n0, _DPLo, 0, [
  () => DocumentParameter,
  {
    [_xN]: _DPo,
  },
]);
export var DocumentRequiresList = list(n0, _DRL, 0, () => DocumentRequires);
export var DocumentVersionList = list(n0, _DVL, 0, () => DocumentVersionInfo);
export var PlatformTypeList = list(n0, _PTL, 0, [
  0,
  {
    [_xN]: _PTla,
  },
]);
export var ReviewInformationList = list(n0, _RIL, 0, [
  () => ReviewInformation,
  {
    [_xN]: _RIe,
  },
]);
export var CreateDocument = op(
  n0,
  _CDre,
  0,
  () => CreateDocumentRequest,
  () => CreateDocumentResult
);
export var DeleteDocument = op(
  n0,
  _DDe,
  0,
  () => DeleteDocumentRequest,
  () => DeleteDocumentResult
);
export var ListDocumentVersions = op(
  n0,
  _LDV,
  0,
  () => ListDocumentVersionsRequest,
  () => ListDocumentVersionsResult
);
