// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _Ar,
  _CRT,
  _CTr,
  _DCF,
  _DCFL,
  _DN,
  _DNe,
  _DWDIT,
  _DWDITR,
  _DWDITRe,
  _FIDC,
  _GWDIT,
  _GWDITR,
  _GWDITRe,
  _h,
  _hQ,
  _I,
  _i,
  _IIDC,
  _ISD,
  _IWD,
  _IWDL,
  _LDFWDIT,
  _LDFWDITR,
  _LDFWDITRi,
  _LUT,
  _LWDIT,
  _LWDITR,
  _LWDITRi,
  _MR,
  _mR,
  _NT,
  _nT,
  _OIDC,
  _OS,
  _OSR,
  _PIDC,
  _Ro,
  _S,
  _SGSII,
  _SMS,
  _SR,
  _SSII,
  _SSSII,
  _SSWDIT,
  _SSWDITR,
  _SSWDITRt,
  _St,
  _st,
  _SUII,
  _SWDIT,
  _SWDITR,
  _SWDITRt,
  _Ta,
  _UWDIT,
  _UWDITR,
  _UWDITRp,
  _WDIT,
  _WDITL,
  n0,
  TagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteWirelessDeviceImportTaskRequest = struct(n0, _DWDITR, 0, [_I], [[0, 1]]);
export var DeleteWirelessDeviceImportTaskResponse = struct(n0, _DWDITRe, 0, [], []);
export var GetWirelessDeviceImportTaskRequest = struct(n0, _GWDITR, 0, [_I], [[0, 1]]);
export var GetWirelessDeviceImportTaskResponse = struct(
  n0,
  _GWDITRe,
  0,
  [_I, _Ar, _DN, _S, _CTr, _St, _SR, _IIDC, _PIDC, _OIDC, _FIDC],
  [0, 0, 0, () => SidewalkGetStartImportInfo, 5, 0, 0, 1, 1, 1, 1]
);
export var ImportedSidewalkDevice = struct(n0, _ISD, 0, [_SMS, _OS, _OSR, _LUT], [0, 0, 0, 5]);
export var ImportedWirelessDevice = struct(n0, _IWD, 0, [_S], [() => ImportedSidewalkDevice]);
export var ListDevicesForWirelessDeviceImportTaskRequest = struct(
  n0,
  _LDFWDITR,
  0,
  [_I, _MR, _NT, _St],
  [
    [
      0,
      {
        [_hQ]: _i,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      0,
      {
        [_hQ]: _st,
      },
    ],
  ]
);
export var ListDevicesForWirelessDeviceImportTaskResponse = struct(
  n0,
  _LDFWDITRi,
  0,
  [_NT, _DN, _IWDL],
  [0, 0, () => ImportedWirelessDeviceList]
);
export var ListWirelessDeviceImportTasksRequest = struct(
  n0,
  _LWDITR,
  0,
  [_MR, _NT],
  [
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
  ]
);
export var ListWirelessDeviceImportTasksResponse = struct(
  n0,
  _LWDITRi,
  0,
  [_NT, _WDITL],
  [0, () => WirelessDeviceImportTaskList]
);
export var SidewalkGetStartImportInfo = struct(n0, _SGSII, 0, [_DCFL, _Ro], [64 | 0, 0]);
export var SidewalkSingleStartImportInfo = struct(n0, _SSSII, 0, [_SMS], [0]);
export var SidewalkStartImportInfo = struct(n0, _SSII, 0, [_DCF, _Ro], [0, 0]);
export var SidewalkUpdateImportInfo = struct(n0, _SUII, 0, [_DCF], [0]);
export var StartSingleWirelessDeviceImportTaskRequest = struct(
  n0,
  _SSWDITR,
  0,
  [_DN, _CRT, _DNe, _Ta, _S],
  [0, [0, 4], 0, () => TagList, () => SidewalkSingleStartImportInfo]
);
export var StartSingleWirelessDeviceImportTaskResponse = struct(n0, _SSWDITRt, 0, [_I, _Ar], [0, 0]);
export var StartWirelessDeviceImportTaskRequest = struct(
  n0,
  _SWDITR,
  0,
  [_DN, _CRT, _Ta, _S],
  [0, [0, 4], () => TagList, () => SidewalkStartImportInfo]
);
export var StartWirelessDeviceImportTaskResponse = struct(n0, _SWDITRt, 0, [_I, _Ar], [0, 0]);
export var UpdateWirelessDeviceImportTaskRequest = struct(
  n0,
  _UWDITR,
  0,
  [_I, _S],
  [[0, 1], () => SidewalkUpdateImportInfo]
);
export var UpdateWirelessDeviceImportTaskResponse = struct(n0, _UWDITRp, 0, [], []);
export var WirelessDeviceImportTask = struct(
  n0,
  _WDIT,
  0,
  [_I, _Ar, _DN, _S, _CTr, _St, _SR, _IIDC, _PIDC, _OIDC, _FIDC],
  [0, 0, 0, () => SidewalkGetStartImportInfo, 5, 0, 0, 1, 1, 1, 1]
);
export var DeviceCreationFileList = 64 | 0;

export var ImportedWirelessDeviceList = list(n0, _IWDL, 0, () => ImportedWirelessDevice);
export var WirelessDeviceImportTaskList = list(n0, _WDITL, 0, () => WirelessDeviceImportTask);
export var DeleteWirelessDeviceImportTask = op(
  n0,
  _DWDIT,
  {
    [_h]: ["DELETE", "/wireless_device_import_task/{Id}", 204],
  },
  () => DeleteWirelessDeviceImportTaskRequest,
  () => DeleteWirelessDeviceImportTaskResponse
);
export var GetWirelessDeviceImportTask = op(
  n0,
  _GWDIT,
  {
    [_h]: ["GET", "/wireless_device_import_task/{Id}", 200],
  },
  () => GetWirelessDeviceImportTaskRequest,
  () => GetWirelessDeviceImportTaskResponse
);
export var ListDevicesForWirelessDeviceImportTask = op(
  n0,
  _LDFWDIT,
  {
    [_h]: ["GET", "/wireless_device_import_task", 200],
  },
  () => ListDevicesForWirelessDeviceImportTaskRequest,
  () => ListDevicesForWirelessDeviceImportTaskResponse
);
export var ListWirelessDeviceImportTasks = op(
  n0,
  _LWDIT,
  {
    [_h]: ["GET", "/wireless_device_import_tasks", 200],
  },
  () => ListWirelessDeviceImportTasksRequest,
  () => ListWirelessDeviceImportTasksResponse
);
export var StartSingleWirelessDeviceImportTask = op(
  n0,
  _SSWDIT,
  {
    [_h]: ["POST", "/wireless_single_device_import_task", 201],
  },
  () => StartSingleWirelessDeviceImportTaskRequest,
  () => StartSingleWirelessDeviceImportTaskResponse
);
export var StartWirelessDeviceImportTask = op(
  n0,
  _SWDIT,
  {
    [_h]: ["POST", "/wireless_device_import_task", 201],
  },
  () => StartWirelessDeviceImportTaskRequest,
  () => StartWirelessDeviceImportTaskResponse
);
export var UpdateWirelessDeviceImportTask = op(
  n0,
  _UWDIT,
  {
    [_h]: ["PATCH", "/wireless_device_import_task/{Id}", 204],
  },
  () => UpdateWirelessDeviceImportTaskRequest,
  () => UpdateWirelessDeviceImportTaskResponse
);
