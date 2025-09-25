// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _DIP,
  _DIPo,
  _Do,
  _DP,
  _DTRel,
  _DV,
  _DVa,
  _ED,
  _GDSR,
  _GDSRR,
  _GDSRRe,
  _GDTR,
  _GDTRR,
  _GDTRRe,
  _h,
  _hQ,
  _IN,
  _IP,
  _IPs,
  _IPsp,
  _IRC,
  _Me,
  _MP,
  _OP,
  _OV,
  _PI,
  _PSl,
  _PSr,
  _RI,
  _RRP,
  _SD,
  _SP,
  _SPp,
  _SRC,
  _Ta,
  _VS,
  n0,
  TagList,
} from "./schemas_0";
import { DeliverabilityTestReport } from "./schemas_14_Test";

/* eslint no-var: 0 */

export var DailyVolume = struct(n0, _DV, 0, [_SD, _VS, _DIP], [4, () => VolumeStatistics, () => DomainIspPlacements]);
export var DomainIspPlacement = struct(n0, _DIPo, 0, [_IN, _IRC, _SRC, _IP, _SP], [0, 1, 1, 1, 1]);
export var GetDeliverabilityTestReportRequest = struct(n0, _GDTRR, 0, [_RI], [[0, 1]]);
export var GetDeliverabilityTestReportResponse = struct(
  n0,
  _GDTRRe,
  0,
  [_DTRel, _OP, _IPs, _Me, _Ta],
  [() => DeliverabilityTestReport, () => PlacementStatistics, () => IspPlacements, 0, () => TagList]
);
export var GetDomainStatisticsReportRequest = struct(
  n0,
  _GDSRR,
  0,
  [_Do, _SD, _ED],
  [
    [0, 1],
    [
      4,
      {
        [_hQ]: _SD,
      },
    ],
    [
      4,
      {
        [_hQ]: _ED,
      },
    ],
  ]
);
export var GetDomainStatisticsReportResponse = struct(
  n0,
  _GDSRRe,
  0,
  [_OV, _DVa],
  [() => OverallVolume, () => DailyVolumes]
);
export var IspPlacement = struct(n0, _IPsp, 0, [_IN, _PSl], [0, () => PlacementStatistics]);
export var OverallVolume = struct(
  n0,
  _OV,
  0,
  [_VS, _RRP, _DIP],
  [() => VolumeStatistics, 1, () => DomainIspPlacements]
);
export var PlacementStatistics = struct(n0, _PSl, 0, [_IP, _SP, _MP, _SPp, _DP], [1, 1, 1, 1, 1]);
export var VolumeStatistics = struct(n0, _VS, 0, [_IRC, _SRC, _PI, _PSr], [1, 1, 1, 1]);
export var DailyVolumes = list(n0, _DVa, 0, () => DailyVolume);
export var DomainIspPlacements = list(n0, _DIP, 0, () => DomainIspPlacement);
export var IspPlacements = list(n0, _IPs, 0, () => IspPlacement);
export var GetDeliverabilityTestReport = op(
  n0,
  _GDTR,
  {
    [_h]: ["GET", "/v2/email/deliverability-dashboard/test-reports/{ReportId}", 200],
  },
  () => GetDeliverabilityTestReportRequest,
  () => GetDeliverabilityTestReportResponse
);
export var GetDomainStatisticsReport = op(
  n0,
  _GDSR,
  {
    [_h]: ["GET", "/v2/email/deliverability-dashboard/statistics-report/{Domain}", 200],
  },
  () => GetDomainStatisticsReportRequest,
  () => GetDomainStatisticsReportResponse
);
