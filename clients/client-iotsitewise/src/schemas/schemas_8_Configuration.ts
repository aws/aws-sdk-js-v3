// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _CED,
  _CMSS,
  _cMSS,
  _cod,
  _CS,
  _cSo,
  _DDEC,
  _DDECR,
  _DDECRe,
  _dDS,
  _dINNN,
  _DSC,
  _DSCR,
  _DSCRe,
  _e,
  _end,
  _eTn,
  _ht,
  _kKA,
  _kKI,
  _lUD,
  _m,
  _MLS,
  _mLS,
  _nOD,
  _PDEC,
  _PDECR,
  _PDECRu,
  _PSC,
  _PSCR,
  _PSCRu,
  _rAo,
  _RP,
  _rPe,
  _sRA,
  _st,
  _sTt,
  _un,
  _wT,
  _WTRP,
  _wTRP,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ConfigurationErrorDetails = struct(n0, _CED, 0, [_cod, _m], [0, 0]);
export var ConfigurationStatus = struct(n0, _CS, 0, [_st, _e], [0, () => ConfigurationErrorDetails]);
export var CustomerManagedS3Storage = struct(n0, _CMSS, 0, [_sRA, _rAo], [0, 0]);
export var DescribeDefaultEncryptionConfigurationRequest = struct(n0, _DDECR, 0, [], []);
export var DescribeDefaultEncryptionConfigurationResponse = struct(
  n0,
  _DDECRe,
  0,
  [_eTn, _kKA, _cSo],
  [0, 0, () => ConfigurationStatus]
);
export var DescribeStorageConfigurationRequest = struct(n0, _DSCR, 0, [], []);
export var DescribeStorageConfigurationResponse = struct(
  n0,
  _DSCRe,
  0,
  [_sTt, _mLS, _dDS, _rPe, _cSo, _lUD, _wT, _wTRP, _dINNN],
  [
    0,
    () => MultiLayerStorage,
    0,
    () => RetentionPeriod,
    () => ConfigurationStatus,
    4,
    0,
    () => WarmTierRetentionPeriod,
    2,
  ]
);
export var MultiLayerStorage = struct(n0, _MLS, 0, [_cMSS], [() => CustomerManagedS3Storage]);
export var PutDefaultEncryptionConfigurationRequest = struct(n0, _PDECR, 0, [_eTn, _kKI], [0, 0]);
export var PutDefaultEncryptionConfigurationResponse = struct(
  n0,
  _PDECRu,
  0,
  [_eTn, _kKA, _cSo],
  [0, 0, () => ConfigurationStatus]
);
export var PutStorageConfigurationRequest = struct(
  n0,
  _PSCR,
  0,
  [_sTt, _mLS, _dDS, _rPe, _wT, _wTRP, _dINNN],
  [0, () => MultiLayerStorage, 0, () => RetentionPeriod, 0, () => WarmTierRetentionPeriod, 2]
);
export var PutStorageConfigurationResponse = struct(
  n0,
  _PSCRu,
  0,
  [_sTt, _mLS, _dDS, _rPe, _cSo, _wT, _wTRP, _dINNN],
  [0, () => MultiLayerStorage, 0, () => RetentionPeriod, () => ConfigurationStatus, 0, () => WarmTierRetentionPeriod, 2]
);
export var RetentionPeriod = struct(n0, _RP, 0, [_nOD, _un], [1, 2]);
export var WarmTierRetentionPeriod = struct(n0, _WTRP, 0, [_nOD, _un], [1, 2]);
export var DescribeDefaultEncryptionConfiguration = op(
  n0,
  _DDEC,
  {
    [_ht]: ["GET", "/configuration/account/encryption", 200],
    [_end]: ["api."],
  },
  () => DescribeDefaultEncryptionConfigurationRequest,
  () => DescribeDefaultEncryptionConfigurationResponse
);
export var DescribeStorageConfiguration = op(
  n0,
  _DSC,
  {
    [_ht]: ["GET", "/configuration/account/storage", 200],
    [_end]: ["api."],
  },
  () => DescribeStorageConfigurationRequest,
  () => DescribeStorageConfigurationResponse
);
export var PutDefaultEncryptionConfiguration = op(
  n0,
  _PDEC,
  {
    [_ht]: ["POST", "/configuration/account/encryption", 200],
    [_end]: ["api."],
  },
  () => PutDefaultEncryptionConfigurationRequest,
  () => PutDefaultEncryptionConfigurationResponse
);
export var PutStorageConfiguration = op(
  n0,
  _PSC,
  {
    [_ht]: ["POST", "/configuration/account/storage", 200],
    [_end]: ["api."],
  },
  () => PutStorageConfigurationRequest,
  () => PutStorageConfigurationResponse
);
