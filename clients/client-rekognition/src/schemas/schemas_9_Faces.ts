// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AF,
  _AFL,
  _AFR,
  _AFRs,
  _AFs,
  _AFss,
  _BB,
  _CI,
  _Con,
  _CRT,
  _DF,
  _DFel,
  _DFi,
  _DFis,
  _DFisa,
  _DFL,
  _DFR,
  _DFRe,
  _DFRi,
  _DFRis,
  _EII,
  _F,
  _Fa,
  _FI,
  _FIa,
  _FL,
  _FM,
  _FMa,
  _FML,
  _FMT,
  _FMV,
  _IFMV,
  _II,
  _LF,
  _LFR,
  _LFRi,
  _MF,
  _MR,
  _MUa,
  _NT,
  _Rea,
  _SF,
  _SFe,
  _SFI,
  _SFR,
  _SFRe,
  _Si,
  _SU,
  _SUe,
  _SUR,
  _SURe,
  _UFA,
  _UFAL,
  _UFAn,
  _UFD,
  _UFDL,
  _UFDLn,
  _UFDn,
  _UFDns,
  _UFDnsu,
  _UI,
  _UM,
  _UMT,
  _US,
  BoundingBox,
  n0,
} from "./schemas_0";
import { UserMatchList } from "./schemas_23_Users";

/* eslint no-var: 0 */

export var AssociatedFace = struct(n0, _AF, 0, [_FI], [0]);
export var AssociateFacesRequest = struct(n0, _AFR, 0, [_CI, _UI, _FIa, _UMT, _CRT], [0, 0, 64 | 0, 1, [0, 4]]);
export var AssociateFacesResponse = struct(
  n0,
  _AFRs,
  0,
  [_AFs, _UFA, _US],
  [() => AssociatedFacesList, () => UnsuccessfulFaceAssociationList, 0]
);
export var DeleteFacesRequest = struct(n0, _DFR, 0, [_CI, _FIa], [0, 64 | 0]);
export var DeleteFacesResponse = struct(n0, _DFRe, 0, [_DF, _UFD], [64 | 0, () => UnsuccessfulFaceDeletionsList]);
export var DisassociatedFace = struct(n0, _DFi, 0, [_FI], [0]);
export var DisassociateFacesRequest = struct(n0, _DFRi, 0, [_CI, _UI, _CRT, _FIa], [0, 0, [0, 4], 64 | 0]);
export var DisassociateFacesResponse = struct(
  n0,
  _DFRis,
  0,
  [_DFis, _UFDn, _US],
  [() => DisassociatedFacesList, () => UnsuccessfulFaceDisassociationList, 0]
);
export var Face = struct(n0, _F, 0, [_FI, _BB, _II, _EII, _Con, _IFMV, _UI], [0, () => BoundingBox, 0, 0, 1, 0, 0]);
export var FaceMatch = struct(n0, _FMa, 0, [_Si, _F], [1, () => Face]);
export var ListFacesRequest = struct(n0, _LFR, 0, [_CI, _NT, _MR, _UI, _FIa], [0, 0, 1, 0, 64 | 0]);
export var ListFacesResponse = struct(n0, _LFRi, 0, [_Fa, _NT, _FMV], [() => FaceList, 0, 0]);
export var SearchedFace = struct(n0, _SF, 0, [_FI], [0]);
export var SearchedUser = struct(n0, _SU, 0, [_UI], [0]);
export var SearchFacesRequest = struct(n0, _SFR, 0, [_CI, _FI, _MF, _FMT], [0, 0, 1, 1]);
export var SearchFacesResponse = struct(n0, _SFRe, 0, [_SFI, _FM, _FMV], [0, () => FaceMatchList, 0]);
export var SearchUsersRequest = struct(n0, _SUR, 0, [_CI, _UI, _FI, _UMT, _MUa], [0, 0, 0, 1, 1]);
export var SearchUsersResponse = struct(
  n0,
  _SURe,
  0,
  [_UM, _FMV, _SF, _SU],
  [() => UserMatchList, 0, () => SearchedFace, () => SearchedUser]
);
export var UnsuccessfulFaceAssociation = struct(n0, _UFAn, 0, [_FI, _UI, _Con, _Rea], [0, 0, 1, 64 | 0]);
export var UnsuccessfulFaceDeletion = struct(n0, _UFDns, 0, [_FI, _UI, _Rea], [0, 0, 64 | 0]);
export var UnsuccessfulFaceDisassociation = struct(n0, _UFDnsu, 0, [_FI, _UI, _Rea], [0, 0, 64 | 0]);
export var AssociatedFacesList = list(n0, _AFL, 0, () => AssociatedFace);
export var DisassociatedFacesList = list(n0, _DFL, 0, () => DisassociatedFace);
export var FaceIdList = 64 | 0;

export var FaceList = list(n0, _FL, 0, () => Face);
export var FaceMatchList = list(n0, _FML, 0, () => FaceMatch);
export var UnsuccessfulFaceAssociationList = list(n0, _UFAL, 0, () => UnsuccessfulFaceAssociation);
export var UnsuccessfulFaceAssociationReasons = 64 | 0;

export var UnsuccessfulFaceDeletionReasons = 64 | 0;

export var UnsuccessfulFaceDeletionsList = list(n0, _UFDL, 0, () => UnsuccessfulFaceDeletion);
export var UnsuccessfulFaceDisassociationList = list(n0, _UFDLn, 0, () => UnsuccessfulFaceDisassociation);
export var UnsuccessfulFaceDisassociationReasons = 64 | 0;

export var UserFaceIdList = 64 | 0;

export var AssociateFaces = op(
  n0,
  _AFss,
  0,
  () => AssociateFacesRequest,
  () => AssociateFacesResponse
);
export var DeleteFaces = op(
  n0,
  _DFel,
  0,
  () => DeleteFacesRequest,
  () => DeleteFacesResponse
);
export var DisassociateFaces = op(
  n0,
  _DFisa,
  0,
  () => DisassociateFacesRequest,
  () => DisassociateFacesResponse
);
export var ListFaces = op(
  n0,
  _LF,
  0,
  () => ListFacesRequest,
  () => ListFacesResponse
);
export var SearchFaces = op(
  n0,
  _SFe,
  0,
  () => SearchFacesRequest,
  () => SearchFacesResponse
);
export var SearchUsers = op(
  n0,
  _SUe,
  0,
  () => SearchUsersRequest,
  () => SearchUsersResponse
);
