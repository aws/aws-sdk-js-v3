// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _Ar,
  _BBC,
  _Cha,
  _CLo,
  _D,
  _DA,
  _DC,
  _DDE,
  _DDe,
  _DDER,
  _DDERi,
  _DDi,
  _DDML,
  _DDR,
  _DDRe,
  _DE,
  _DLD,
  _DLDa,
  _DLS,
  _EC,
  _GT,
  _HE,
  _Label,
  _LDE,
  _LDER,
  _LDERi,
  _LDL,
  _LDLR,
  _LDLRi,
  _LN,
  _LS,
  _MR,
  _NT,
  _SRC,
  _UDE,
  _UDER,
  _UDERp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DatasetChanges = struct(n0, _DC, 0, [_GT], [21]);
export var DatasetLabelDescription = struct(n0, _DLD, 0, [_LN, _LS], [0, () => DatasetLabelStats]);
export var DatasetLabelStats = struct(n0, _DLS, 0, [_EC, _BBC], [1, 1]);
export var DeleteDatasetRequest = struct(n0, _DDR, 0, [_DA], [0]);
export var DeleteDatasetResponse = struct(n0, _DDRe, 0, [], []);
export var DistributeDataset = struct(n0, _DDi, 0, [_Ar], [0]);
export var DistributeDatasetEntriesRequest = struct(n0, _DDER, 0, [_D], [() => DistributeDatasetMetadataList]);
export var DistributeDatasetEntriesResponse = struct(n0, _DDERi, 0, [], []);
export var ListDatasetEntriesRequest = struct(
  n0,
  _LDER,
  0,
  [_DA, _CLo, _Label, _SRC, _HE, _NT, _MR],
  [0, 64 | 0, 2, 0, 2, 0, 1]
);
export var ListDatasetEntriesResponse = struct(n0, _LDERi, 0, [_DE, _NT], [64 | 0, 0]);
export var ListDatasetLabelsRequest = struct(n0, _LDLR, 0, [_DA, _NT, _MR], [0, 0, 1]);
export var ListDatasetLabelsResponse = struct(n0, _LDLRi, 0, [_DLDa, _NT], [() => DatasetLabelDescriptions, 0]);
export var UpdateDatasetEntriesRequest = struct(n0, _UDER, 0, [_DA, _Cha], [0, () => DatasetChanges]);
export var UpdateDatasetEntriesResponse = struct(n0, _UDERp, 0, [], []);
export var DatasetEntries = 64 | 0;

export var DatasetLabelDescriptions = list(n0, _DLDa, 0, () => DatasetLabelDescription);
export var DatasetLabels = 64 | 0;

export var DistributeDatasetMetadataList = list(n0, _DDML, 0, () => DistributeDataset);
export var DeleteDataset = op(
  n0,
  _DDe,
  0,
  () => DeleteDatasetRequest,
  () => DeleteDatasetResponse
);
export var DistributeDatasetEntries = op(
  n0,
  _DDE,
  0,
  () => DistributeDatasetEntriesRequest,
  () => DistributeDatasetEntriesResponse
);
export var ListDatasetEntries = op(
  n0,
  _LDE,
  0,
  () => ListDatasetEntriesRequest,
  () => ListDatasetEntriesResponse
);
export var ListDatasetLabels = op(
  n0,
  _LDL,
  0,
  () => ListDatasetLabelsRequest,
  () => ListDatasetLabelsResponse
);
export var UpdateDatasetEntries = op(
  n0,
  _UDE,
  0,
  () => UpdateDatasetEntriesRequest,
  () => UpdateDatasetEntriesResponse
);
