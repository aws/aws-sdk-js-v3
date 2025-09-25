// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _Ac,
  _Ag,
  _AI,
  _AR,
  _Ar,
  _BD,
  _CA,
  _CAR,
  _CAr,
  _CARr,
  _CARre,
  _CARrea,
  _CD,
  _CDT,
  _CU,
  _CUR,
  _CURr,
  _D,
  _DA,
  _DAe,
  _DAes,
  _DAesc,
  _DARes,
  _DAResc,
  _DARescr,
  _DARescri,
  _DI,
  _DU,
  _DUes,
  _DURe,
  _DURes,
  _EI,
  _EMS,
  _En,
  _FFD,
  _HD,
  _HDM,
  _HDME,
  _HDT,
  _LA,
  _LAis,
  _LAistc,
  _LAR,
  _LARi,
  _LPI,
  _LU,
  _LUi,
  _LUis,
  _LUR,
  _LURi,
  _MFD,
  _MRa,
  _NT,
  _P,
  _PF,
  _PFD,
  _PP,
  _PPI,
  _R,
  _S,
  _SFD,
  _SI,
  _SPK,
  _SPKB,
  _SPKC,
  _SPKI,
  _SPKs,
  _T,
  _Ta,
  _TFD,
  _Ty,
  _UA,
  _UAp,
  _UAR,
  _UARp,
  _UARpd,
  _UARpda,
  _UN,
  _Use,
  _User,
  _UU,
  _UUR,
  _UURp,
  n0,
  Tags,
} from "./schemas_0";
import { PosixProfile } from "./schemas_19_Describe";

/* eslint no-var: 0 */

export var CreateAccessRequest = struct(
  n0,
  _CAR,
  0,
  [_HD, _HDT, _HDM, _P, _PP, _R, _SI, _EI],
  [0, 0, () => HomeDirectoryMappings, 0, () => PosixProfile, 0, 0, 0]
);
export var CreateAccessResponse = struct(n0, _CARr, 0, [_SI, _EI], [0, 0]);
export var CreateAgreementRequest = struct(
  n0,
  _CARre,
  0,
  [_D, _SI, _LPI, _PPI, _BD, _AR, _S, _T, _PF, _EMS, _CD],
  [0, 0, 0, 0, 0, 0, 0, () => Tags, 0, 0, () => CustomDirectoriesType]
);
export var CreateAgreementResponse = struct(n0, _CARrea, 0, [_AI], [0]);
export var CreateUserRequest = struct(
  n0,
  _CUR,
  0,
  [_HD, _HDT, _HDM, _P, _PP, _R, _SI, _SPKB, _T, _UN],
  [0, 0, () => HomeDirectoryMappings, 0, () => PosixProfile, 0, 0, 0, () => Tags, 0]
);
export var CreateUserResponse = struct(n0, _CURr, 0, [_SI, _UN], [0, 0]);
export var CustomDirectoriesType = struct(n0, _CDT, 0, [_FFD, _MFD, _PFD, _SFD, _TFD], [0, 0, 0, 0, 0]);
export var DescribeAccessRequest = struct(n0, _DARes, 0, [_SI, _EI], [0, 0]);
export var DescribeAccessResponse = struct(n0, _DAResc, 0, [_SI, _A], [0, () => DescribedAccess]);
export var DescribeAgreementRequest = struct(n0, _DARescr, 0, [_AI, _SI], [0, 0]);
export var DescribeAgreementResponse = struct(n0, _DARescri, 0, [_Ag], [() => DescribedAgreement]);
export var DescribedAccess = struct(
  n0,
  _DA,
  0,
  [_HD, _HDM, _HDT, _P, _PP, _R, _EI],
  [0, () => HomeDirectoryMappings, 0, 0, () => PosixProfile, 0, 0]
);
export var DescribedAgreement = struct(
  n0,
  _DAe,
  0,
  [_Ar, _AI, _D, _S, _SI, _LPI, _PPI, _BD, _AR, _T, _PF, _EMS, _CD],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, () => Tags, 0, 0, () => CustomDirectoriesType]
);
export var DescribedUser = struct(
  n0,
  _DU,
  0,
  [_Ar, _HD, _HDM, _HDT, _P, _PP, _R, _SPK, _T, _UN],
  [0, 0, () => HomeDirectoryMappings, 0, 0, () => PosixProfile, 0, () => SshPublicKeys, () => Tags, 0]
);
export var DescribeUserRequest = struct(n0, _DURe, 0, [_SI, _UN], [0, 0]);
export var DescribeUserResponse = struct(n0, _DURes, 0, [_SI, _Use], [0, () => DescribedUser]);
export var HomeDirectoryMapEntry = struct(n0, _HDME, 0, [_En, _Ta, _Ty], [0, 0, 0]);
export var ListAccessesRequest = struct(n0, _LAR, 0, [_MRa, _NT, _SI], [1, 0, 0]);
export var ListAccessesResponse = struct(n0, _LARi, 0, [_NT, _SI, _Ac], [0, 0, () => ListedAccesses]);
export var ListedAccess = struct(n0, _LA, 0, [_HD, _HDT, _R, _EI], [0, 0, 0, 0]);
export var ListedUser = struct(n0, _LU, 0, [_Ar, _HD, _HDT, _R, _SPKC, _UN], [0, 0, 0, 0, 1, 0]);
export var ListUsersRequest = struct(n0, _LUR, 0, [_MRa, _NT, _SI], [1, 0, 0]);
export var ListUsersResponse = struct(n0, _LURi, 0, [_NT, _SI, _User], [0, 0, () => ListedUsers]);
export var SshPublicKey = struct(n0, _SPKs, 0, [_DI, _SPKB, _SPKI], [4, 0, 0]);
export var UpdateAccessRequest = struct(
  n0,
  _UAR,
  0,
  [_HD, _HDT, _HDM, _P, _PP, _R, _SI, _EI],
  [0, 0, () => HomeDirectoryMappings, 0, () => PosixProfile, 0, 0, 0]
);
export var UpdateAccessResponse = struct(n0, _UARp, 0, [_SI, _EI], [0, 0]);
export var UpdateAgreementRequest = struct(
  n0,
  _UARpd,
  0,
  [_AI, _SI, _D, _S, _LPI, _PPI, _BD, _AR, _PF, _EMS, _CD],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, () => CustomDirectoriesType]
);
export var UpdateAgreementResponse = struct(n0, _UARpda, 0, [_AI], [0]);
export var UpdateUserRequest = struct(
  n0,
  _UUR,
  0,
  [_HD, _HDT, _HDM, _P, _PP, _R, _SI, _UN],
  [0, 0, () => HomeDirectoryMappings, 0, () => PosixProfile, 0, 0, 0]
);
export var UpdateUserResponse = struct(n0, _UURp, 0, [_SI, _UN], [0, 0]);
export var HomeDirectoryMappings = list(n0, _HDM, 0, () => HomeDirectoryMapEntry);
export var ListedAccesses = list(n0, _LAis, 0, () => ListedAccess);
export var ListedUsers = list(n0, _LUi, 0, () => ListedUser);
export var SshPublicKeys = list(n0, _SPK, 0, () => SshPublicKey);
export var CreateAccess = op(
  n0,
  _CA,
  0,
  () => CreateAccessRequest,
  () => CreateAccessResponse
);
export var CreateAgreement = op(
  n0,
  _CAr,
  0,
  () => CreateAgreementRequest,
  () => CreateAgreementResponse
);
export var CreateUser = op(
  n0,
  _CU,
  2,
  () => CreateUserRequest,
  () => CreateUserResponse
);
export var DescribeAccess = op(
  n0,
  _DAes,
  0,
  () => DescribeAccessRequest,
  () => DescribeAccessResponse
);
export var DescribeAgreement = op(
  n0,
  _DAesc,
  0,
  () => DescribeAgreementRequest,
  () => DescribeAgreementResponse
);
export var DescribeUser = op(
  n0,
  _DUes,
  0,
  () => DescribeUserRequest,
  () => DescribeUserResponse
);
export var ListAccesses = op(
  n0,
  _LAistc,
  0,
  () => ListAccessesRequest,
  () => ListAccessesResponse
);
export var ListUsers = op(
  n0,
  _LUis,
  0,
  () => ListUsersRequest,
  () => ListUsersResponse
);
export var UpdateAccess = op(
  n0,
  _UA,
  0,
  () => UpdateAccessRequest,
  () => UpdateAccessResponse
);
export var UpdateAgreement = op(
  n0,
  _UAp,
  0,
  () => UpdateAgreementRequest,
  () => UpdateAgreementResponse
);
export var UpdateUser = op(
  n0,
  _UU,
  0,
  () => UpdateUserRequest,
  () => UpdateUserResponse
);
