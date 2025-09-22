// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { PermissionTypeMismatchException as __PermissionTypeMismatchException } from "../models/index";
import {
  _AAC,
  _AC,
  _ACd,
  _AEDF,
  _AFTEDA,
  _AKI,
  _ASTVL,
  _BGP,
  _BGPR,
  _BGPRa,
  _BPFE,
  _BPFL,
  _BPRE,
  _BPREL,
  _BRP,
  _BRPR,
  _BRPRa,
  _C,
  _c,
  _CDDP,
  _CI,
  _CIl,
  _CTDP,
  _DLA,
  _DLS,
  _DS,
  _E,
  _e,
  _EDFAL,
  _En,
  _Er,
  _F,
  _GDLS,
  _GDLSR,
  _GDLSRe,
  _GP,
  _GPR,
  _GPRr,
  _GTGPC,
  _GTGPCR,
  _GTGPCRe,
  _GTGTC,
  _GTGTCR,
  _GTGTCRe,
  _h,
  _I,
  _M,
  _P,
  _Pa,
  _Par,
  _PDLS,
  _PDLSR,
  _PDLSRu,
  _Pe,
  _PPL,
  _PPr,
  _PTME,
  _PVL,
  _PWGO,
  _QAI,
  _QI,
  _QSC,
  _QSTu,
  _R,
  _RE,
  _ROA,
  _RP,
  _RPR,
  _RPRe,
  _SAK,
  _SP,
  _SPT,
  _ST,
  _TA,
  _TRO,
  _V,
  _VSP,
  DataLakePrincipal,
  n0,
} from "./schemas_0";
import { ErrorDetail } from "./schemas_2_LFTag";
import { DataLakePrincipalList } from "./schemas_6_Lake";
import { Condition } from "./schemas_10_Permissions";
import { Resource } from "./schemas_14_Permissions";

/* eslint no-var: 0 */

export var AuditContext = struct(n0, _AC, 0, [_AAC], [0]);
export var BatchGrantPermissionsRequest = struct(n0, _BGPR, 0, [_CI, _En], [0, () => BatchPermissionsRequestEntryList]);
export var BatchGrantPermissionsResponse = struct(n0, _BGPRa, 0, [_F], [() => BatchPermissionsFailureList]);
export var BatchPermissionsFailureEntry = struct(
  n0,
  _BPFE,
  0,
  [_RE, _Er],
  [() => BatchPermissionsRequestEntry, () => ErrorDetail]
);
export var BatchPermissionsRequestEntry = struct(
  n0,
  _BPRE,
  0,
  [_I, _P, _R, _Pe, _C, _PWGO],
  [0, () => DataLakePrincipal, () => Resource, 64 | 0, () => Condition, 64 | 0]
);
export var BatchRevokePermissionsRequest = struct(
  n0,
  _BRPR,
  0,
  [_CI, _En],
  [0, () => BatchPermissionsRequestEntryList]
);
export var BatchRevokePermissionsResponse = struct(n0, _BRPRa, 0, [_F], [() => BatchPermissionsFailureList]);
export var DataLakeSettings = struct(
  n0,
  _DLS,
  0,
  [_DLA, _ROA, _CDDP, _CTDP, _Pa, _TRO, _AEDF, _AFTEDA, _EDFAL, _ASTVL],
  [
    () => DataLakePrincipalList,
    () => DataLakePrincipalList,
    () => PrincipalPermissionsList,
    () => PrincipalPermissionsList,
    128 | 0,
    64 | 0,
    2,
    2,
    () => DataLakePrincipalList,
    64 | 0,
  ]
);
export var GetDataLakeSettingsRequest = struct(n0, _GDLSR, 0, [_CI], [0]);
export var GetDataLakeSettingsResponse = struct(n0, _GDLSRe, 0, [_DLS], [() => DataLakeSettings]);
export var GetTemporaryGluePartitionCredentialsRequest = struct(
  n0,
  _GTGPCR,
  0,
  [_TA, _Par, _Pe, _DS, _AC, _SPT],
  [0, () => PartitionValueList, 64 | 0, 1, () => AuditContext, 64 | 0]
);
export var GetTemporaryGluePartitionCredentialsResponse = struct(n0, _GTGPCRe, 0, [_AKI, _SAK, _ST, _E], [0, 0, 0, 4]);
export var GetTemporaryGlueTableCredentialsRequest = struct(
  n0,
  _GTGTCR,
  0,
  [_TA, _Pe, _DS, _AC, _SPT, _SP, _QSC],
  [0, 64 | 0, 1, () => AuditContext, 64 | 0, 0, () => QuerySessionContext]
);
export var GetTemporaryGlueTableCredentialsResponse = struct(
  n0,
  _GTGTCRe,
  0,
  [_AKI, _SAK, _ST, _E, _VSP],
  [0, 0, 0, 4, 64 | 0]
);
export var GrantPermissionsRequest = struct(
  n0,
  _GPR,
  0,
  [_CI, _P, _R, _Pe, _C, _PWGO],
  [0, () => DataLakePrincipal, () => Resource, 64 | 0, () => Condition, 64 | 0]
);
export var GrantPermissionsResponse = struct(n0, _GPRr, 0, [], []);
export var PartitionValueList = struct(n0, _PVL, 0, [_V], [64 | 0]);
export var PermissionTypeMismatchException = error(
  n0,
  _PTME,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __PermissionTypeMismatchException
);
export var PrincipalPermissions = struct(n0, _PPr, 0, [_P, _Pe], [() => DataLakePrincipal, 64 | 0]);
export var PutDataLakeSettingsRequest = struct(n0, _PDLSR, 0, [_CI, _DLS], [0, () => DataLakeSettings]);
export var PutDataLakeSettingsResponse = struct(n0, _PDLSRu, 0, [], []);
export var QuerySessionContext = struct(n0, _QSC, 0, [_QI, _QSTu, _CIl, _QAI, _ACd], [0, 4, 0, 0, 128 | 0]);
export var RevokePermissionsRequest = struct(
  n0,
  _RPR,
  0,
  [_CI, _P, _R, _Pe, _C, _PWGO],
  [0, () => DataLakePrincipal, () => Resource, 64 | 0, () => Condition, 64 | 0]
);
export var RevokePermissionsResponse = struct(n0, _RPRe, 0, [], []);
export var AuthorizedSessionTagValueList = 64 | 0;

export var BatchPermissionsFailureList = list(n0, _BPFL, 0, () => BatchPermissionsFailureEntry);
export var BatchPermissionsRequestEntryList = list(n0, _BPREL, 0, () => BatchPermissionsRequestEntry);
export var PathStringList = 64 | 0;

export var PermissionList = 64 | 0;

export var PermissionTypeList = 64 | 0;

export var PrincipalPermissionsList = list(n0, _PPL, 0, () => PrincipalPermissions);
export var TrustedResourceOwners = 64 | 0;

export var ValueStringList = 64 | 0;

export var AdditionalContextMap = 128 | 0;

export var ParametersMap = 128 | 0;

export var BatchGrantPermissions = op(
  n0,
  _BGP,
  {
    [_h]: ["POST", "/BatchGrantPermissions", 200],
  },
  () => BatchGrantPermissionsRequest,
  () => BatchGrantPermissionsResponse
);
export var BatchRevokePermissions = op(
  n0,
  _BRP,
  {
    [_h]: ["POST", "/BatchRevokePermissions", 200],
  },
  () => BatchRevokePermissionsRequest,
  () => BatchRevokePermissionsResponse
);
export var GetDataLakeSettings = op(
  n0,
  _GDLS,
  {
    [_h]: ["POST", "/GetDataLakeSettings", 200],
  },
  () => GetDataLakeSettingsRequest,
  () => GetDataLakeSettingsResponse
);
export var GetTemporaryGluePartitionCredentials = op(
  n0,
  _GTGPC,
  {
    [_h]: ["POST", "/GetTemporaryGluePartitionCredentials", 200],
  },
  () => GetTemporaryGluePartitionCredentialsRequest,
  () => GetTemporaryGluePartitionCredentialsResponse
);
export var GetTemporaryGlueTableCredentials = op(
  n0,
  _GTGTC,
  {
    [_h]: ["POST", "/GetTemporaryGlueTableCredentials", 200],
  },
  () => GetTemporaryGlueTableCredentialsRequest,
  () => GetTemporaryGlueTableCredentialsResponse
);
export var GrantPermissions = op(
  n0,
  _GP,
  {
    [_h]: ["POST", "/GrantPermissions", 200],
  },
  () => GrantPermissionsRequest,
  () => GrantPermissionsResponse
);
export var PutDataLakeSettings = op(
  n0,
  _PDLS,
  {
    [_h]: ["POST", "/PutDataLakeSettings", 200],
  },
  () => PutDataLakeSettingsRequest,
  () => PutDataLakeSettingsResponse
);
export var RevokePermissions = op(
  n0,
  _RP,
  {
    [_h]: ["POST", "/RevokePermissions", 200],
  },
  () => RevokePermissionsRequest,
  () => RevokePermissionsResponse
);
