// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _Ap,
  _C,
  _CTo,
  _CUWI,
  _CUWIR,
  _CUWIRr,
  _CWIr,
  _CWIRr,
  _CWIRre,
  _D,
  _EII,
  _ICA,
  _ICWI,
  _ICWIR,
  _ICWIRm,
  _ID,
  _II,
  _IN,
  _IPn,
  _IS,
  _IWI,
  _IWIR,
  _IWIRm,
  _N,
  _OAI,
  _OS,
  _OV,
  _Pl,
  _Pr,
  _RT,
  _S,
  _SII,
  _T,
  _Ty,
  _WI,
  n0,
  TagList,
} from "./schemas_0";
import { ImageSourceIdentifier } from "./schemas_12_Import";

/* eslint no-var: 0 */

export var CreateUpdatedWorkspaceImageRequest = struct(n0, _CUWIR, 0, [_N, _D, _SII, _T], [0, 0, 0, () => TagList]);
export var CreateUpdatedWorkspaceImageResult = struct(n0, _CUWIRr, 0, [_II], [0]);
export var CreateWorkspaceImageRequest = struct(n0, _CWIRr, 0, [_N, _D, _WI, _T], [0, 0, 0, () => TagList]);
export var CreateWorkspaceImageResult = struct(
  n0,
  _CWIRre,
  0,
  [_II, _N, _D, _OS, _S, _RT, _C, _OAI],
  [0, 0, 0, () => OperatingSystem, 0, 0, 4, 0]
);
export var ImportCustomWorkspaceImageRequest = struct(
  n0,
  _ICWIR,
  0,
  [_IN, _ID, _CTo, _Pr, _IS, _ICA, _Pl, _OV, _T],
  [0, 0, 0, 0, () => ImageSourceIdentifier, 0, 0, 0, () => TagList]
);
export var ImportCustomWorkspaceImageResult = struct(n0, _ICWIRm, 0, [_II, _S], [0, 0]);
export var ImportWorkspaceImageRequest = struct(
  n0,
  _IWIR,
  0,
  [_EII, _IPn, _IN, _ID, _T, _Ap],
  [0, 0, 0, 0, () => TagList, 64 | 0]
);
export var ImportWorkspaceImageResult = struct(n0, _IWIRm, 0, [_II], [0]);
export var OperatingSystem = struct(n0, _OS, 0, [_Ty], [0]);
export var ApplicationList = 64 | 0;

export var CreateUpdatedWorkspaceImage = op(
  n0,
  _CUWI,
  0,
  () => CreateUpdatedWorkspaceImageRequest,
  () => CreateUpdatedWorkspaceImageResult
);
export var CreateWorkspaceImage = op(
  n0,
  _CWIr,
  0,
  () => CreateWorkspaceImageRequest,
  () => CreateWorkspaceImageResult
);
export var ImportCustomWorkspaceImage = op(
  n0,
  _ICWI,
  0,
  () => ImportCustomWorkspaceImageRequest,
  () => ImportCustomWorkspaceImageResult
);
export var ImportWorkspaceImage = op(
  n0,
  _IWI,
  0,
  () => ImportWorkspaceImageRequest,
  () => ImportWorkspaceImageResult
);
