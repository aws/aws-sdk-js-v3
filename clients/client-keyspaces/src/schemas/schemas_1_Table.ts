// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { ConflictException as __ConflictException } from "../models/index";
import {
  _aCd,
  _aQE,
  _aSS,
  _c,
  _CE,
  _CKR,
  _CKr,
  _CKRr,
  _co,
  _CS,
  _cS,
  _CSd,
  _cSd,
  _cSO,
  _cST,
  _CT,
  _CTR,
  _CTr,
  _CTRr,
  _CTRre,
  _CTRrea,
  _DK,
  _DKR,
  _DKRe,
  _DT,
  _DTe,
  _DTR,
  _DTRe,
  _DTRel,
  _DTRele,
  _dTTL,
  _e,
  _eS,
  _eSO,
  _fD,
  _hE,
  _kA,
  _kN,
  _m,
  _PITR,
  _pITR,
  _pITRO,
  _pT,
  _r,
  _rA,
  _rCAS,
  _rCU,
  _rL,
  _RS,
  _rS,
  _RSe,
  _rSe,
  _rSep,
  _RSL,
  _RT,
  _rT,
  _rTARN,
  _RTR,
  _RTRe,
  _s,
  _sD,
  _sKN,
  _sTN,
  _t,
  _tKN,
  _tM,
  _tN,
  _tNy,
  _tO,
  _TR,
  _TRR,
  _TRRa,
  _tt,
  _tTN,
  _UK,
  _UKR,
  _UKRp,
  _UR,
  _URR,
  _URRn,
  _UT,
  _UTR,
  _UTRp,
  _vT,
  _wCU,
  n0,
} from "./schemas_0";
import {
  AutoScalingSettings,
  AutoScalingSpecification,
  ClientSideTimestamps,
  ColumnDefinitionList,
  Comment,
  EncryptionSpecification,
  SchemaDefinition,
  TimeToLive,
} from "./schemas_2_Table";
import { TagList } from "./schemas_3_Table";
import { FieldList } from "./schemas_6_Table";

/* eslint no-var: 0 */

export var CapacitySpecification = struct(n0, _CS, 0, [_tM, _rCU, _wCU], [0, 1, 1]);
export var CdcSpecification = struct(n0, _CSd, 0, [_s, _vT, _t, _pT], [0, 0, () => TagList, 0]);
export var ConflictException = error(
  n0,
  _CE,
  {
    [_e]: _c,
    [_hE]: 409,
    [_aQE]: [`ConflictException`, 409],
  },
  [_m],
  [0],

  __ConflictException
);
export var CreateKeyspaceRequest = struct(
  n0,
  _CKR,
  0,
  [_kN, _t, _rS],
  [0, () => TagList, () => ReplicationSpecification]
);
export var CreateKeyspaceResponse = struct(n0, _CKRr, 0, [_rA], [0]);
export var CreateTableRequest = struct(
  n0,
  _CTR,
  0,
  [_kN, _tN, _sD, _co, _cS, _eS, _pITR, _tt, _dTTL, _t, _cST, _aSS, _rSe, _cSd],
  [
    0,
    0,
    () => SchemaDefinition,
    () => Comment,
    () => CapacitySpecification,
    () => EncryptionSpecification,
    () => PointInTimeRecovery,
    () => TimeToLive,
    1,
    () => TagList,
    () => ClientSideTimestamps,
    () => AutoScalingSpecification,
    () => ReplicaSpecificationList,
    () => CdcSpecification,
  ]
);
export var CreateTableResponse = struct(n0, _CTRr, 0, [_rA], [0]);
export var CreateTypeRequest = struct(n0, _CTRre, 0, [_kN, _tNy, _fD], [0, 0, () => FieldList]);
export var CreateTypeResponse = struct(n0, _CTRrea, 0, [_kA, _tNy], [0, 0]);
export var DeleteKeyspaceRequest = struct(n0, _DKR, 0, [_kN], [0]);
export var DeleteKeyspaceResponse = struct(n0, _DKRe, 0, [], []);
export var DeleteTableRequest = struct(n0, _DTR, 0, [_kN, _tN], [0, 0]);
export var DeleteTableResponse = struct(n0, _DTRe, 0, [], []);
export var DeleteTypeRequest = struct(n0, _DTRel, 0, [_kN, _tNy], [0, 0]);
export var DeleteTypeResponse = struct(n0, _DTRele, 0, [_kA, _tNy], [0, 0]);
export var PointInTimeRecovery = struct(n0, _PITR, 0, [_s], [0]);
export var ReplicaSpecification = struct(n0, _RS, 0, [_r, _rCU, _rCAS], [0, 1, () => AutoScalingSettings]);
export var ReplicationSpecification = struct(n0, _RSe, 0, [_rSep, _rL], [0, 64 | 0]);
export var RestoreTableRequest = struct(
  n0,
  _RTR,
  0,
  [_sKN, _sTN, _tKN, _tTN, _rT, _cSO, _eSO, _pITRO, _tO, _aSS, _rSe],
  [
    0,
    0,
    0,
    0,
    4,
    () => CapacitySpecification,
    () => EncryptionSpecification,
    () => PointInTimeRecovery,
    () => TagList,
    () => AutoScalingSpecification,
    () => ReplicaSpecificationList,
  ]
);
export var RestoreTableResponse = struct(n0, _RTRe, 0, [_rTARN], [0]);
export var TagResourceRequest = struct(n0, _TRR, 0, [_rA, _t], [0, () => TagList]);
export var TagResourceResponse = struct(n0, _TRRa, 0, [], []);
export var UntagResourceRequest = struct(n0, _URR, 0, [_rA, _t], [0, () => TagList]);
export var UntagResourceResponse = struct(n0, _URRn, 0, [], []);
export var UpdateKeyspaceRequest = struct(
  n0,
  _UKR,
  0,
  [_kN, _rS, _cST],
  [0, () => ReplicationSpecification, () => ClientSideTimestamps]
);
export var UpdateKeyspaceResponse = struct(n0, _UKRp, 0, [_rA], [0]);
export var UpdateTableRequest = struct(
  n0,
  _UTR,
  0,
  [_kN, _tN, _aCd, _cS, _eS, _pITR, _tt, _dTTL, _cST, _aSS, _rSe, _cSd],
  [
    0,
    0,
    () => ColumnDefinitionList,
    () => CapacitySpecification,
    () => EncryptionSpecification,
    () => PointInTimeRecovery,
    () => TimeToLive,
    1,
    () => ClientSideTimestamps,
    () => AutoScalingSpecification,
    () => ReplicaSpecificationList,
    () => CdcSpecification,
  ]
);
export var UpdateTableResponse = struct(n0, _UTRp, 0, [_rA], [0]);
export var ReplicaSpecificationList = list(n0, _RSL, 0, () => ReplicaSpecification);
export var CreateKeyspace = op(
  n0,
  _CKr,
  0,
  () => CreateKeyspaceRequest,
  () => CreateKeyspaceResponse
);
export var CreateTable = op(
  n0,
  _CT,
  0,
  () => CreateTableRequest,
  () => CreateTableResponse
);
export var CreateType = op(
  n0,
  _CTr,
  0,
  () => CreateTypeRequest,
  () => CreateTypeResponse
);
export var DeleteKeyspace = op(
  n0,
  _DK,
  0,
  () => DeleteKeyspaceRequest,
  () => DeleteKeyspaceResponse
);
export var DeleteTable = op(
  n0,
  _DT,
  0,
  () => DeleteTableRequest,
  () => DeleteTableResponse
);
export var DeleteType = op(
  n0,
  _DTe,
  0,
  () => DeleteTypeRequest,
  () => DeleteTypeResponse
);
export var RestoreTable = op(
  n0,
  _RT,
  0,
  () => RestoreTableRequest,
  () => RestoreTableResponse
);
export var TagResource = op(
  n0,
  _TR,
  0,
  () => TagResourceRequest,
  () => TagResourceResponse
);
export var UntagResource = op(
  n0,
  _UR,
  0,
  () => UntagResourceRequest,
  () => UntagResourceResponse
);
export var UpdateKeyspace = op(
  n0,
  _UK,
  0,
  () => UpdateKeyspaceRequest,
  () => UpdateKeyspaceResponse
);
export var UpdateTable = op(
  n0,
  _UT,
  0,
  () => UpdateTableRequest,
  () => UpdateTableResponse
);
