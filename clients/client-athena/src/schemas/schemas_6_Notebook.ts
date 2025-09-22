// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CNI,
  _CNO,
  _CNr,
  _CRT,
  _CT,
  _DNe,
  _DNI,
  _DNO,
  _EN,
  _ENI,
  _ENO,
  _F,
  _FD,
  _GNM,
  _GNMI,
  _GNMO,
  _IN,
  _INI,
  _INO,
  _LMT,
  _LNM,
  _LNMI,
  _LNMO,
  _LNS,
  _LNSR,
  _LNSRi,
  _MR,
  _N,
  _NI,
  _NM,
  _NMA,
  _NML,
  _NSL,
  _NSLU,
  _NSS,
  _NT,
  _Pay,
  _SI,
  _T,
  _UN,
  _UNI,
  _UNM,
  _UNMI,
  _UNMO,
  _UNO,
  _WG,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateNotebookInput = struct(n0, _CNI, 0, [_WG, _N, _CRT], [0, 0, 0]);
export var CreateNotebookOutput = struct(n0, _CNO, 0, [_NI], [0]);
export var DeleteNotebookInput = struct(n0, _DNI, 0, [_NI], [0]);
export var DeleteNotebookOutput = struct(n0, _DNO, 0, [], []);
export var ExportNotebookInput = struct(n0, _ENI, 0, [_NI], [0]);
export var ExportNotebookOutput = struct(n0, _ENO, 0, [_NM, _Pay], [() => NotebookMetadata, 0]);
export var FilterDefinition = struct(n0, _FD, 0, [_N], [0]);
export var GetNotebookMetadataInput = struct(n0, _GNMI, 0, [_NI], [0]);
export var GetNotebookMetadataOutput = struct(n0, _GNMO, 0, [_NM], [() => NotebookMetadata]);
export var ImportNotebookInput = struct(n0, _INI, 0, [_WG, _N, _Pay, _T, _NSLU, _CRT], [0, 0, 0, 0, 0, 0]);
export var ImportNotebookOutput = struct(n0, _INO, 0, [_NI], [0]);
export var ListNotebookMetadataInput = struct(n0, _LNMI, 0, [_F, _NT, _MR, _WG], [() => FilterDefinition, 0, 1, 0]);
export var ListNotebookMetadataOutput = struct(n0, _LNMO, 0, [_NT, _NML], [0, () => NotebookMetadataArray]);
export var ListNotebookSessionsRequest = struct(n0, _LNSR, 0, [_NI, _MR, _NT], [0, 1, 0]);
export var ListNotebookSessionsResponse = struct(n0, _LNSRi, 0, [_NSL, _NT], [() => NotebookSessionsList, 0]);
export var NotebookMetadata = struct(n0, _NM, 0, [_NI, _N, _WG, _CT, _T, _LMT], [0, 0, 0, 4, 0, 4]);
export var NotebookSessionSummary = struct(n0, _NSS, 0, [_SI, _CT], [0, 4]);
export var UpdateNotebookInput = struct(n0, _UNI, 0, [_NI, _Pay, _T, _SI, _CRT], [0, 0, 0, 0, 0]);
export var UpdateNotebookMetadataInput = struct(n0, _UNMI, 0, [_NI, _CRT, _N], [0, 0, 0]);
export var UpdateNotebookMetadataOutput = struct(n0, _UNMO, 0, [], []);
export var UpdateNotebookOutput = struct(n0, _UNO, 0, [], []);
export var NotebookMetadataArray = list(n0, _NMA, 0, () => NotebookMetadata);
export var NotebookSessionsList = list(n0, _NSL, 0, () => NotebookSessionSummary);
export var CreateNotebook = op(
  n0,
  _CNr,
  0,
  () => CreateNotebookInput,
  () => CreateNotebookOutput
);
export var DeleteNotebook = op(
  n0,
  _DNe,
  0,
  () => DeleteNotebookInput,
  () => DeleteNotebookOutput
);
export var ExportNotebook = op(
  n0,
  _EN,
  0,
  () => ExportNotebookInput,
  () => ExportNotebookOutput
);
export var GetNotebookMetadata = op(
  n0,
  _GNM,
  0,
  () => GetNotebookMetadataInput,
  () => GetNotebookMetadataOutput
);
export var ImportNotebook = op(
  n0,
  _IN,
  0,
  () => ImportNotebookInput,
  () => ImportNotebookOutput
);
export var ListNotebookMetadata = op(
  n0,
  _LNM,
  0,
  () => ListNotebookMetadataInput,
  () => ListNotebookMetadataOutput
);
export var ListNotebookSessions = op(
  n0,
  _LNS,
  0,
  () => ListNotebookSessionsRequest,
  () => ListNotebookSessionsResponse
);
export var UpdateNotebook = op(
  n0,
  _UN,
  0,
  () => UpdateNotebookInput,
  () => UpdateNotebookOutput
);
export var UpdateNotebookMetadata = op(
  n0,
  _UNM,
  0,
  () => UpdateNotebookMetadataInput,
  () => UpdateNotebookMetadataOutput
);
