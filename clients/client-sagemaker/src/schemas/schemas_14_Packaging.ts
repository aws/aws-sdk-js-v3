// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AV,
  _CJN,
  _CT,
  _CTA,
  _CTB,
  _D,
  _DAe,
  _DDes,
  _DDRes,
  _DDResc,
  _DFN,
  _DNe,
  _DSevi,
  _DSevic,
  _EMd,
  _EMdg,
  _EMSd,
  _EMSdge,
  _EPJA,
  _EPJN,
  _EPJS,
  _EPJSd,
  _EPJSdg,
  _ITN,
  _LD,
  _LDR,
  _LDRi,
  _LEPJ,
  _LEPJR,
  _LEPJRi,
  _LHA,
  _LHa,
  _LIa,
  _LMT,
  _LMTA,
  _LMTB,
  _LST,
  _MMa,
  _MNC,
  _MNo,
  _Mo,
  _MR,
  _MVo,
  _NCa,
  _NT,
  _RTeg,
  _SBo,
  _SE,
  _SO,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeDeviceRequest = struct(n0, _DDRes, 0, [_NT, _DNe, _DFN], [0, 0, 0]);
export var DescribeDeviceResponse = struct(
  n0,
  _DDResc,
  0,
  [_DAe, _DNe, _D, _DFN, _ITN, _RTeg, _LHa, _Mo, _MMa, _NT, _AV],
  [0, 0, 0, 0, 0, 4, 4, () => EdgeModels, 1, 0, 0]
);
export var DeviceSummary = struct(
  n0,
  _DSevi,
  0,
  [_DNe, _DAe, _D, _DFN, _ITN, _RTeg, _LHa, _Mo, _AV],
  [0, 0, 0, 0, 0, 4, 4, () => EdgeModelSummaries, 0]
);
export var EdgeModel = struct(n0, _EMd, 0, [_MNo, _MVo, _LST, _LIa], [0, 0, 4, 4]);
export var EdgeModelSummary = struct(n0, _EMSd, 0, [_MNo, _MVo], [0, 0]);
export var EdgePackagingJobSummary = struct(
  n0,
  _EPJSd,
  0,
  [_EPJA, _EPJN, _EPJS, _CJN, _MNo, _MVo, _CT, _LMT],
  [0, 0, 0, 0, 0, 0, 4, 4]
);
export var ListDevicesRequest = struct(n0, _LDR, 0, [_NT, _MR, _LHA, _MNo, _DFN], [0, 1, 4, 0, 0]);
export var ListDevicesResponse = struct(n0, _LDRi, 0, [_DSevic, _NT], [() => DeviceSummaries, 0]);
export var ListEdgePackagingJobsRequest = struct(
  n0,
  _LEPJR,
  0,
  [_NT, _MR, _CTA, _CTB, _LMTA, _LMTB, _NCa, _MNC, _SE, _SBo, _SO],
  [0, 1, 4, 4, 4, 4, 0, 0, 0, 0, 0]
);
export var ListEdgePackagingJobsResponse = struct(n0, _LEPJRi, 0, [_EPJSdg, _NT], [() => EdgePackagingJobSummaries, 0]);
export var DeviceSummaries = list(n0, _DSevic, 0, () => DeviceSummary);
export var EdgeModels = list(n0, _EMdg, 0, () => EdgeModel);
export var EdgeModelSummaries = list(n0, _EMSdge, 0, () => EdgeModelSummary);
export var EdgePackagingJobSummaries = list(n0, _EPJSdg, 0, () => EdgePackagingJobSummary);
export var DescribeDevice = op(
  n0,
  _DDes,
  0,
  () => DescribeDeviceRequest,
  () => DescribeDeviceResponse
);
export var ListDevices = op(
  n0,
  _LD,
  0,
  () => ListDevicesRequest,
  () => ListDevicesResponse
);
export var ListEdgePackagingJobs = op(
  n0,
  _LEPJ,
  0,
  () => ListEdgePackagingJobsRequest,
  () => ListEdgePackagingJobsResponse
);
