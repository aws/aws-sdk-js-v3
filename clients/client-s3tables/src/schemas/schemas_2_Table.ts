// smithy-typescript generated code
import { map, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _co,
  _GTBMC,
  _GTBMCR,
  _GTBMCRe,
  _h,
  _iC,
  _ICS,
  _iSM,
  _ISMS,
  _iUFR,
  _IUFRS,
  _mSAH,
  _mSTK,
  _n,
  _na,
  _nCD,
  _PTBMC,
  _PTBMCR,
  _PTMC,
  _PTMCR,
  _s,
  _set,
  _st,
  _t,
  _tBARN,
  _TBMC,
  _TBMCV,
  _TBMS,
  _tFSMB,
  _TMCV,
  _TMS,
  _uD,
  _v,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetTableBucketMaintenanceConfigurationRequest = struct(n0, _GTBMCR, 0, [_tBARN], [[0, 1]]);
export var GetTableBucketMaintenanceConfigurationResponse = struct(
  n0,
  _GTBMCRe,
  0,
  [_tBARN, _co],
  [0, () => TableBucketMaintenanceConfiguration]
);
export var IcebergCompactionSettings = struct(n0, _ICS, 0, [_tFSMB, _st], [1, 0]);
export var IcebergSnapshotManagementSettings = struct(n0, _ISMS, 0, [_mSTK, _mSAH], [1, 1]);
export var IcebergUnreferencedFileRemovalSettings = struct(n0, _IUFRS, 0, [_uD, _nCD], [1, 1]);
export var PutTableBucketMaintenanceConfigurationRequest = struct(
  n0,
  _PTBMCR,
  0,
  [_tBARN, _t, _v],
  [[0, 1], [0, 1], () => TableBucketMaintenanceConfigurationValue]
);
export var PutTableMaintenanceConfigurationRequest = struct(
  n0,
  _PTMCR,
  0,
  [_tBARN, _n, _na, _t, _v],
  [[0, 1], [0, 1], [0, 1], [0, 1], () => TableMaintenanceConfigurationValue]
);
export var TableBucketMaintenanceConfigurationValue = struct(
  n0,
  _TBMCV,
  0,
  [_s, _set],
  [0, () => TableBucketMaintenanceSettings]
);
export var TableMaintenanceConfigurationValue = struct(n0, _TMCV, 0, [_s, _set], [0, () => TableMaintenanceSettings]);
export var TableBucketMaintenanceConfiguration = map(n0, _TBMC, 0, 0, () => TableBucketMaintenanceConfigurationValue);
export var TableBucketMaintenanceSettings = uni(n0, _TBMS, 0, [_iUFR], [() => IcebergUnreferencedFileRemovalSettings]);
export var TableMaintenanceSettings = uni(
  n0,
  _TMS,
  0,
  [_iC, _iSM],
  [() => IcebergCompactionSettings, () => IcebergSnapshotManagementSettings]
);
export var GetTableBucketMaintenanceConfiguration = op(
  n0,
  _GTBMC,
  {
    [_h]: ["GET", "/buckets/{tableBucketARN}/maintenance", 200],
  },
  () => GetTableBucketMaintenanceConfigurationRequest,
  () => GetTableBucketMaintenanceConfigurationResponse
);
export var PutTableBucketMaintenanceConfiguration = op(
  n0,
  _PTBMC,
  {
    [_h]: ["PUT", "/buckets/{tableBucketARN}/maintenance/{type}", 204],
  },
  () => PutTableBucketMaintenanceConfigurationRequest,
  () => Unit
);
export var PutTableMaintenanceConfiguration = op(
  n0,
  _PTMC,
  {
    [_h]: ["PUT", "/tables/{tableBucketARN}/{namespace}/{name}/maintenance/{type}", 204],
  },
  () => PutTableMaintenanceConfigurationRequest,
  () => Unit
);
