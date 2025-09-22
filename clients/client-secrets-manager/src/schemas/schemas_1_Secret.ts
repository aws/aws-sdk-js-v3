// smithy-typescript generated code
import { error, list, map, op, sim, struct } from "@smithy/core/schema";

import {
  DecryptionFailure as __DecryptionFailure,
  EncryptionFailure as __EncryptionFailure,
  InvalidNextTokenException as __InvalidNextTokenException,
  LimitExceededException as __LimitExceededException,
  PreconditionNotMetException as __PreconditionNotMetException,
  ResourceExistsException as __ResourceExistsException,
} from "../models/index";
import {
  _AAD,
  _APIELT,
  _APIET,
  _ARN,
  _ARR,
  _BGSV,
  _BGSVR,
  _BGSVRa,
  _c,
  _CD,
  _CRS,
  _CRSR,
  _CRSRa,
  _CRT,
  _CS,
  _CSR,
  _CSRr,
  _D,
  _DDe,
  _DF,
  _DSe,
  _DSRes,
  _DSResc,
  _Du,
  _E,
  _e,
  _EC,
  _EF,
  _F,
  _Fi,
  _FLT,
  _FORS,
  _GSV,
  _GSVR,
  _GSVRe,
  _ID,
  _INTE,
  _IPD,
  _K,
  _KKI,
  _KKIm,
  _LAD,
  _LCD,
  _LEE,
  _LRD,
  _LS,
  _LSR,
  _LSRi,
  _LSVI,
  _LSVIR,
  _LSVIRi,
  _M,
  _MR,
  _MTVI,
  _N,
  _NRD,
  _NT,
  _OS,
  _PNME,
  _PR,
  _PSV,
  _PSVR,
  _PSVRu,
  _RE,
  _REE,
  _RFVI,
  _RI,
  _RLARN,
  _RR,
  _RRTo,
  _RS,
  _RSo,
  _RSRo,
  _RSRot,
  _RT,
  _RTT,
  _SB,
  _SBT,
  _SE,
  _SI,
  _SIL,
  _SL,
  _SLE,
  _SLT,
  _SO,
  _SS,
  _SST,
  _SV,
  _SVE,
  _SVLE,
  _SVLT,
  _SVT,
  _SVTS,
  _SVTSMT,
  _T,
  _US,
  _USR,
  _USRp,
  _USVS,
  _USVSR,
  _USVSRp,
  _V,
  _Ve,
  _VI,
  _VITS,
  _VS,
  _VSe,
  n0,
} from "./schemas_0";
import { AddReplicaRegionListType } from "./schemas_3_Secret";
import { ReplicationStatusListType } from "./schemas_6_Secret";
import { TagListType } from "./schemas_8_Secret";

/* eslint no-var: 0 */

export var RotationTokenType = sim(n0, _RTT, 0, 8);
export var SecretBinaryType = sim(n0, _SBT, 21, 8);
export var SecretStringType = sim(n0, _SST, 0, 8);
export var APIErrorType = struct(n0, _APIET, 0, [_SI, _EC, _M], [0, 0, 0]);
export var BatchGetSecretValueRequest = struct(
  n0,
  _BGSVR,
  0,
  [_SIL, _F, _MR, _NT],
  [64 | 0, () => FiltersListType, 1, 0]
);
export var BatchGetSecretValueResponse = struct(
  n0,
  _BGSVRa,
  0,
  [_SV, _NT, _E],
  [[() => SecretValuesType, 0], 0, () => APIErrorListType]
);
export var CancelRotateSecretRequest = struct(n0, _CRSR, 0, [_SI], [0]);
export var CancelRotateSecretResponse = struct(n0, _CRSRa, 0, [_ARN, _N, _VI], [0, 0, 0]);
export var CreateSecretRequest = struct(
  n0,
  _CSR,
  0,
  [_N, _CRT, _D, _KKI, _SB, _SS, _T, _ARR, _FORS],
  [
    0,
    [0, 4],
    0,
    0,
    [() => SecretBinaryType, 0],
    [() => SecretStringType, 0],
    () => TagListType,
    () => AddReplicaRegionListType,
    2,
  ]
);
export var CreateSecretResponse = struct(
  n0,
  _CSRr,
  0,
  [_ARN, _N, _VI, _RS],
  [0, 0, 0, () => ReplicationStatusListType]
);
export var DecryptionFailure = error(
  n0,
  _DF,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __DecryptionFailure
);
export var DescribeSecretRequest = struct(n0, _DSRes, 0, [_SI], [0]);
export var DescribeSecretResponse = struct(
  n0,
  _DSResc,
  0,
  [_ARN, _N, _D, _KKI, _RE, _RLARN, _RR, _LRD, _LCD, _LAD, _DDe, _NRD, _T, _VITS, _OS, _CD, _PR, _RS],
  [
    0,
    0,
    0,
    0,
    2,
    0,
    () => RotationRulesType,
    4,
    4,
    4,
    4,
    4,
    () => TagListType,
    map(n0, _SVTSMT, 0, 0, 64 | 0),
    0,
    4,
    0,
    () => ReplicationStatusListType,
  ]
);
export var EncryptionFailure = error(
  n0,
  _EF,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __EncryptionFailure
);
export var Filter = struct(n0, _Fi, 0, [_K, _V], [0, 64 | 0]);
export var GetSecretValueRequest = struct(n0, _GSVR, 0, [_SI, _VI, _VS], [0, 0, 0]);
export var GetSecretValueResponse = struct(
  n0,
  _GSVRe,
  0,
  [_ARN, _N, _VI, _SB, _SS, _VSe, _CD],
  [0, 0, 0, [() => SecretBinaryType, 0], [() => SecretStringType, 0], 64 | 0, 4]
);
export var InvalidNextTokenException = error(
  n0,
  _INTE,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __InvalidNextTokenException
);
export var LimitExceededException = error(
  n0,
  _LEE,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __LimitExceededException
);
export var ListSecretsRequest = struct(n0, _LSR, 0, [_IPD, _MR, _NT, _F, _SO], [2, 1, 0, () => FiltersListType, 0]);
export var ListSecretsResponse = struct(n0, _LSRi, 0, [_SL, _NT], [() => SecretListType, 0]);
export var ListSecretVersionIdsRequest = struct(n0, _LSVIR, 0, [_SI, _MR, _NT, _ID], [0, 1, 0, 2]);
export var ListSecretVersionIdsResponse = struct(
  n0,
  _LSVIRi,
  0,
  [_Ve, _NT, _ARN, _N],
  [() => SecretVersionsListType, 0, 0, 0]
);
export var PreconditionNotMetException = error(
  n0,
  _PNME,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __PreconditionNotMetException
);
export var PutSecretValueRequest = struct(
  n0,
  _PSVR,
  0,
  [_SI, _CRT, _SB, _SS, _VSe, _RT],
  [0, [0, 4], [() => SecretBinaryType, 0], [() => SecretStringType, 0], 64 | 0, [() => RotationTokenType, 0]]
);
export var PutSecretValueResponse = struct(n0, _PSVRu, 0, [_ARN, _N, _VI, _VSe], [0, 0, 0, 64 | 0]);
export var ResourceExistsException = error(
  n0,
  _REE,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __ResourceExistsException
);
export var RotateSecretRequest = struct(
  n0,
  _RSRo,
  0,
  [_SI, _CRT, _RLARN, _RR, _RI],
  [0, [0, 4], 0, () => RotationRulesType, 2]
);
export var RotateSecretResponse = struct(n0, _RSRot, 0, [_ARN, _N, _VI], [0, 0, 0]);
export var RotationRulesType = struct(n0, _RRTo, 0, [_AAD, _Du, _SE], [1, 0, 0]);
export var SecretListEntry = struct(
  n0,
  _SLE,
  0,
  [_ARN, _N, _D, _KKI, _RE, _RLARN, _RR, _LRD, _LCD, _LAD, _DDe, _NRD, _T, _SVTS, _OS, _CD, _PR],
  [0, 0, 0, 0, 2, 0, () => RotationRulesType, 4, 4, 4, 4, 4, () => TagListType, map(n0, _SVTSMT, 0, 0, 64 | 0), 0, 4, 0]
);
export var SecretValueEntry = struct(
  n0,
  _SVE,
  0,
  [_ARN, _N, _VI, _SB, _SS, _VSe, _CD],
  [0, 0, 0, [() => SecretBinaryType, 0], [() => SecretStringType, 0], 64 | 0, 4]
);
export var SecretVersionsListEntry = struct(n0, _SVLE, 0, [_VI, _VSe, _LAD, _CD, _KKIm], [0, 64 | 0, 4, 4, 64 | 0]);
export var UpdateSecretRequest = struct(
  n0,
  _USR,
  0,
  [_SI, _CRT, _D, _KKI, _SB, _SS],
  [0, [0, 4], 0, 0, [() => SecretBinaryType, 0], [() => SecretStringType, 0]]
);
export var UpdateSecretResponse = struct(n0, _USRp, 0, [_ARN, _N, _VI], [0, 0, 0]);
export var UpdateSecretVersionStageRequest = struct(n0, _USVSR, 0, [_SI, _VS, _RFVI, _MTVI], [0, 0, 0, 0]);
export var UpdateSecretVersionStageResponse = struct(n0, _USVSRp, 0, [_ARN, _N], [0, 0]);
export var APIErrorListType = list(n0, _APIELT, 0, () => APIErrorType);
export var FiltersListType = list(n0, _FLT, 0, () => Filter);
export var FilterValuesStringList = 64 | 0;

export var KmsKeyIdListType = 64 | 0;

export var SecretIdListType = 64 | 0;

export var SecretListType = list(n0, _SLT, 0, () => SecretListEntry);
export var SecretValuesType = list(n0, _SVT, 0, [() => SecretValueEntry, 0]);
export var SecretVersionsListType = list(n0, _SVLT, 0, () => SecretVersionsListEntry);
export var SecretVersionStagesType = 64 | 0;

export var SecretVersionsToStagesMapType = map(n0, _SVTSMT, 0, 0, 64 | 0);
export var BatchGetSecretValue = op(
  n0,
  _BGSV,
  0,
  () => BatchGetSecretValueRequest,
  () => BatchGetSecretValueResponse
);
export var CancelRotateSecret = op(
  n0,
  _CRS,
  0,
  () => CancelRotateSecretRequest,
  () => CancelRotateSecretResponse
);
export var CreateSecret = op(
  n0,
  _CS,
  0,
  () => CreateSecretRequest,
  () => CreateSecretResponse
);
export var DescribeSecret = op(
  n0,
  _DSe,
  0,
  () => DescribeSecretRequest,
  () => DescribeSecretResponse
);
export var GetSecretValue = op(
  n0,
  _GSV,
  0,
  () => GetSecretValueRequest,
  () => GetSecretValueResponse
);
export var ListSecrets = op(
  n0,
  _LS,
  0,
  () => ListSecretsRequest,
  () => ListSecretsResponse
);
export var ListSecretVersionIds = op(
  n0,
  _LSVI,
  0,
  () => ListSecretVersionIdsRequest,
  () => ListSecretVersionIdsResponse
);
export var PutSecretValue = op(
  n0,
  _PSV,
  0,
  () => PutSecretValueRequest,
  () => PutSecretValueResponse
);
export var RotateSecret = op(
  n0,
  _RSo,
  0,
  () => RotateSecretRequest,
  () => RotateSecretResponse
);
export var UpdateSecret = op(
  n0,
  _US,
  0,
  () => UpdateSecretRequest,
  () => UpdateSecretResponse
);
export var UpdateSecretVersionStage = op(
  n0,
  _USVS,
  0,
  () => UpdateSecretVersionStageRequest,
  () => UpdateSecretVersionStageResponse
);
