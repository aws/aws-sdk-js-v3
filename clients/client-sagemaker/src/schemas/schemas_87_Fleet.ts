// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AC,
  _ADC,
  _Art,
  _AV,
  _AVg,
  _CDC,
  _CDF,
  _CDFR,
  _CEPJ,
  _CEPJR,
  _CJN,
  _CT,
  _D,
  _DDFe,
  _DDFRe,
  _DDFRes,
  _DEPJ,
  _DEPJR,
  _DEPJRe,
  _DFA,
  _DFN,
  _DSev,
  _EIRA,
  _EMS,
  _EMSdg,
  _EOC,
  _EPDO,
  _EPJA,
  _EPJN,
  _EPJS,
  _EPJSM,
  _GDFR,
  _GDFRR,
  _GDFRRe,
  _IRA,
  _KKI,
  _LMT,
  _MAod,
  _MNo,
  _MSo,
  _MSod,
  _MVo,
  _OC,
  _ODCf,
  _PDC,
  _PDO,
  _PDT,
  _RAo,
  _RDCe,
  _RG,
  _RK,
  _SDC,
  _SM,
  _SOL,
  _St,
  _T,
  _Ty,
  _UDF,
  _UDFR,
  _V,
  n0,
  TagList,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AgentVersion = struct(n0, _AV, 0, [_V, _AC], [0, 1]);
export var CreateDeviceFleetRequest = struct(
  n0,
  _CDFR,
  0,
  [_DFN, _RAo, _D, _OC, _T, _EIRA],
  [0, 0, 0, () => EdgeOutputConfig, () => TagList, 2]
);
export var CreateEdgePackagingJobRequest = struct(
  n0,
  _CEPJR,
  0,
  [_EPJN, _CJN, _MNo, _MVo, _RAo, _OC, _RK, _T],
  [0, 0, 0, 0, 0, () => EdgeOutputConfig, 0, () => TagList]
);
export var DescribeDeviceFleetRequest = struct(n0, _DDFRe, 0, [_DFN], [0]);
export var DescribeDeviceFleetResponse = struct(
  n0,
  _DDFRes,
  0,
  [_DFN, _DFA, _OC, _D, _CT, _LMT, _RAo, _IRA],
  [0, 0, () => EdgeOutputConfig, 0, 4, 4, 0, 0]
);
export var DescribeEdgePackagingJobRequest = struct(n0, _DEPJR, 0, [_EPJN], [0]);
export var DescribeEdgePackagingJobResponse = struct(
  n0,
  _DEPJRe,
  0,
  [_EPJA, _EPJN, _CJN, _MNo, _MVo, _RAo, _OC, _RK, _EPJS, _EPJSM, _CT, _LMT, _MAod, _MSo, _PDO],
  [0, 0, 0, 0, 0, 0, () => EdgeOutputConfig, 0, 0, 0, 4, 4, 0, 0, () => EdgePresetDeploymentOutput]
);
export var DeviceStats = struct(n0, _DSev, 0, [_CDC, _RDCe], [1, 1]);
export var EdgeModelStat = struct(n0, _EMS, 0, [_MNo, _MVo, _ODCf, _CDC, _ADC, _SDC], [0, 0, 1, 1, 1, 1]);
export var EdgeOutputConfig = struct(n0, _EOC, 0, [_SOL, _KKI, _PDT, _PDC], [0, 0, 0, 0]);
export var EdgePresetDeploymentOutput = struct(n0, _EPDO, 0, [_Ty, _Art, _St, _SM], [0, 0, 0, 0]);
export var GetDeviceFleetReportRequest = struct(n0, _GDFRR, 0, [_DFN], [0]);
export var GetDeviceFleetReportResponse = struct(
  n0,
  _GDFRRe,
  0,
  [_DFA, _DFN, _OC, _D, _RG, _DSev, _AVg, _MSod],
  [0, 0, () => EdgeOutputConfig, 0, 4, () => DeviceStats, () => AgentVersions, () => EdgeModelStats]
);
export var UpdateDeviceFleetRequest = struct(
  n0,
  _UDFR,
  0,
  [_DFN, _RAo, _D, _OC, _EIRA],
  [0, 0, 0, () => EdgeOutputConfig, 2]
);
export var AgentVersions = list(n0, _AVg, 0, () => AgentVersion);
export var EdgeModelStats = list(n0, _EMSdg, 0, () => EdgeModelStat);
export var CreateDeviceFleet = op(
  n0,
  _CDF,
  0,
  () => CreateDeviceFleetRequest,
  () => Unit
);
export var CreateEdgePackagingJob = op(
  n0,
  _CEPJ,
  0,
  () => CreateEdgePackagingJobRequest,
  () => Unit
);
export var DescribeDeviceFleet = op(
  n0,
  _DDFe,
  0,
  () => DescribeDeviceFleetRequest,
  () => DescribeDeviceFleetResponse
);
export var DescribeEdgePackagingJob = op(
  n0,
  _DEPJ,
  0,
  () => DescribeEdgePackagingJobRequest,
  () => DescribeEdgePackagingJobResponse
);
export var GetDeviceFleetReport = op(
  n0,
  _GDFR,
  0,
  () => GetDeviceFleetReportRequest,
  () => GetDeviceFleetReportResponse
);
export var UpdateDeviceFleet = op(
  n0,
  _UDF,
  0,
  () => UpdateDeviceFleetRequest,
  () => Unit
);
