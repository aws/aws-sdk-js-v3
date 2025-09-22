// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { StorageVirtualMachineNotFound as __StorageVirtualMachineNotFound } from "../models/index";
import {
  _A,
  _AC,
  _ADC,
  _ALV,
  _APu,
  _c,
  _CAC,
  _COVC,
  _COZFSOSC,
  _COZFSVC,
  _CPA,
  _CRT,
  _CS,
  _CSC,
  _CTTB,
  _CTTS,
  _CV,
  _CVR,
  _CVRr,
  _DCTa,
  _DSVM,
  _DSVMR,
  _DSVMRe,
  _e,
  _JP,
  _L,
  _M,
  _N,
  _NBN,
  _NE,
  _OC,
  _OS,
  _OVT,
  _OZFSC,
  _PD,
  _PVI,
  _RO,
  _RP,
  _RSKB,
  _SAPv,
  _SARN,
  _SCn,
  _SCQGB,
  _SCRGB,
  _SEE,
  _SIB,
  _SIM,
  _SMADC,
  _SP,
  _SS,
  _STn,
  _SVM,
  _SVMI,
  _SVMNF,
  _Ta,
  _TP,
  _UAGQ,
  _USADC,
  _USVM,
  _USVMR,
  _USVMRp,
  _VAME,
  _Vo,
  _VS,
  _VT,
  AdminPassword,
  AutocommitPeriod,
  n0,
  OpenZFSNfsExports,
  OpenZFSUserAndGroupQuotas,
  SnaplockRetentionPeriod,
  Tags,
  TieringPolicy,
  Volume,
} from "./schemas_0";
import { SelfManagedActiveDirectoryConfigurationUpdates } from "./schemas_13_System";
import { StorageVirtualMachine } from "./schemas_17_Storage";

/* eslint no-var: 0 */

export var CreateAggregateConfiguration = struct(n0, _CAC, 0, [_A, _CPA], [64 | 0, 1]);
export var CreateOntapVolumeConfiguration = struct(
  n0,
  _COVC,
  0,
  [_JP, _SS, _SIM, _SEE, _SVMI, _TP, _OVT, _SP, _CTTB, _SCn, _VS, _AC, _SIB],
  [
    0,
    0,
    1,
    2,
    0,
    () => TieringPolicy,
    0,
    0,
    2,
    () => CreateSnaplockConfiguration,
    0,
    () => CreateAggregateConfiguration,
    1,
  ]
);
export var CreateOpenZFSOriginSnapshotConfiguration = struct(n0, _COZFSOSC, 0, [_SARN, _CS], [0, 0]);
export var CreateOpenZFSVolumeConfiguration = struct(
  n0,
  _COZFSVC,
  0,
  [_PVI, _SCRGB, _SCQGB, _RSKB, _DCTa, _CTTS, _OS, _RO, _NE, _UAGQ],
  [
    0,
    1,
    1,
    1,
    0,
    2,
    () => CreateOpenZFSOriginSnapshotConfiguration,
    2,
    () => OpenZFSNfsExports,
    () => OpenZFSUserAndGroupQuotas,
  ]
);
export var CreateSnaplockConfiguration = struct(
  n0,
  _CSC,
  0,
  [_ALV, _APu, _PD, _RP, _STn, _VAME],
  [2, () => AutocommitPeriod, 0, () => SnaplockRetentionPeriod, 0, 2]
);
export var CreateVolumeRequest = struct(
  n0,
  _CVR,
  0,
  [_CRT, _VT, _N, _OC, _Ta, _OZFSC],
  [[0, 4], 0, 0, () => CreateOntapVolumeConfiguration, () => Tags, () => CreateOpenZFSVolumeConfiguration]
);
export var CreateVolumeResponse = struct(n0, _CVRr, 0, [_Vo], [() => Volume]);
export var DeleteStorageVirtualMachineRequest = struct(n0, _DSVMR, 0, [_CRT, _SVMI], [[0, 4], 0]);
export var DeleteStorageVirtualMachineResponse = struct(n0, _DSVMRe, 0, [_SVMI, _L], [0, 0]);
export var StorageVirtualMachineNotFound = error(
  n0,
  _SVMNF,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __StorageVirtualMachineNotFound
);
export var UpdateStorageVirtualMachineRequest = struct(
  n0,
  _USVMR,
  0,
  [_ADC, _CRT, _SVMI, _SAPv],
  [[() => UpdateSvmActiveDirectoryConfiguration, 0], [0, 4], 0, [() => AdminPassword, 0]]
);
export var UpdateStorageVirtualMachineResponse = struct(n0, _USVMRp, 0, [_SVM], [() => StorageVirtualMachine]);
export var UpdateSvmActiveDirectoryConfiguration = struct(
  n0,
  _USADC,
  0,
  [_SMADC, _NBN],
  [[() => SelfManagedActiveDirectoryConfigurationUpdates, 0], 0]
);
export var CreateVolume = op(
  n0,
  _CV,
  0,
  () => CreateVolumeRequest,
  () => CreateVolumeResponse
);
export var DeleteStorageVirtualMachine = op(
  n0,
  _DSVM,
  0,
  () => DeleteStorageVirtualMachineRequest,
  () => DeleteStorageVirtualMachineResponse
);
export var UpdateStorageVirtualMachine = op(
  n0,
  _USVM,
  0,
  () => UpdateStorageVirtualMachineRequest,
  () => UpdateStorageVirtualMachineResponse
);
