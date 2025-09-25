// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AAg,
  _Ac,
  _ADFD,
  _APA,
  _AS,
  _BARA,
  _BC,
  _BTy,
  _BW,
  _CLE,
  _CLER,
  _CLERr,
  _CLS,
  _CLSR,
  _CLSRr,
  _CT,
  _CTEA,
  _CTR,
  _CTr,
  _CTRr,
  _CWLGA,
  _DB,
  _De,
  _Del,
  _Des,
  _DLA,
  _DLE,
  _DLER,
  _DLERe,
  _DLS,
  _DLSR,
  _DLSRe,
  _DNIA,
  _DR,
  _DTE,
  _DTe,
  _DTER,
  _DTERe,
  _DTRes,
  _DTResc,
  _E,
  _EBTT,
  _EC,
  _ECr,
  _ED,
  _EFA,
  _EFTD,
  _EFTT,
  _ETn,
  _FD,
  _FF,
  _FL,
  _FLi,
  _Fo,
  _FP,
  _FR,
  _FS,
  _FSARA,
  _FT,
  _FTi,
  _FV,
  _I,
  _ITE,
  _LA,
  _LT,
  _LU,
  _MC,
  _MOP,
  _MOVI,
  _N,
  _O,
  _OO,
  _OTu,
  _Ov,
  _OVI,
  _PDr,
  _Pre,
  _PS,
  _R,
  _RD,
  _RDS,
  _RL,
  _RO,
  _ROe,
  _RR,
  _S,
  _S_,
  _SAub,
  _SBA,
  _Sc,
  _SCo,
  _SD,
  _SE,
  _SGA,
  _Sk,
  _SLA,
  _SMC,
  _SMCo,
  _SNIA,
  _So,
  _SSC,
  _ST,
  _STE,
  _STER,
  _STERt,
  _Su,
  _SUT,
  _TA,
  _Ta,
  _TD,
  _TDr,
  _TEA,
  _TEFFD,
  _TEFLD,
  _TERD,
  _TM,
  _Tr,
  _Tra,
  _TRC,
  _TS,
  _TSa,
  _TSD,
  _ULS,
  _ULSR,
  _ULSRp,
  _UT,
  _UTR,
  _UTRp,
  _V,
  _VD,
  _Ver,
  _Veri,
  _VS,
  InputTagList,
  n0,
} from "./schemas_0";
import { Options } from "./schemas_8_Task";

/* eslint no-var: 0 */

export var CreateLocationEfsRequest = struct(
  n0,
  _CLER,
  0,
  [_Su, _EFA, _EC, _Ta, _APA, _FSARA, _ITE],
  [0, 0, () => Ec2Config, () => InputTagList, 0, 0, 0]
);
export var CreateLocationEfsResponse = struct(n0, _CLERr, 0, [_LA], [0]);
export var CreateLocationS3Request = struct(
  n0,
  _CLSR,
  0,
  [_Su, _SBA, _SSC, _SCo, _AAg, _Ta],
  [0, 0, 0, () => S3Config, 64 | 0, () => InputTagList]
);
export var CreateLocationS3Response = struct(n0, _CLSRr, 0, [_LA], [0]);
export var CreateTaskRequest = struct(
  n0,
  _CTR,
  0,
  [_SLA, _DLA, _CWLGA, _N, _O, _E, _Sc, _Ta, _I, _MC, _TRC, _TM],
  [
    0,
    0,
    0,
    0,
    () => Options,
    () => FilterList,
    () => TaskSchedule,
    () => InputTagList,
    () => FilterList,
    () => ManifestConfig,
    () => TaskReportConfig,
    0,
  ]
);
export var CreateTaskResponse = struct(n0, _CTRr, 0, [_TA], [0]);
export var DescribeLocationEfsRequest = struct(n0, _DLER, 0, [_LA], [0]);
export var DescribeLocationEfsResponse = struct(
  n0,
  _DLERe,
  0,
  [_LA, _LU, _EC, _CT, _APA, _FSARA, _ITE],
  [0, 0, () => Ec2Config, 4, 0, 0, 0]
);
export var DescribeLocationS3Request = struct(n0, _DLSR, 0, [_LA], [0]);
export var DescribeLocationS3Response = struct(
  n0,
  _DLSRe,
  0,
  [_LA, _LU, _SSC, _SCo, _AAg, _CT],
  [0, 0, 0, () => S3Config, 64 | 0, 4]
);
export var DescribeTaskExecutionRequest = struct(n0, _DTER, 0, [_TEA], [0]);
export var DescribeTaskExecutionResponse = struct(
  n0,
  _DTERe,
  0,
  [
    _TEA,
    _S,
    _O,
    _E,
    _I,
    _MC,
    _ST,
    _EFTT,
    _EBTT,
    _FT,
    _BW,
    _BTy,
    _BC,
    _R,
    _TRC,
    _FD,
    _FS,
    _FV,
    _RR,
    _EFTD,
    _TM,
    _FP,
    _FL,
    _FF,
    _LT,
    _ETn,
  ],
  [
    0,
    0,
    () => Options,
    () => FilterList,
    () => FilterList,
    () => ManifestConfig,
    4,
    1,
    1,
    1,
    1,
    1,
    1,
    () => TaskExecutionResultDetail,
    () => TaskReportConfig,
    1,
    1,
    1,
    () => ReportResult,
    1,
    0,
    1,
    () => TaskExecutionFilesListedDetail,
    () => TaskExecutionFilesFailedDetail,
    4,
    4,
  ]
);
export var DescribeTaskRequest = struct(n0, _DTRes, 0, [_TA], [0]);
export var DescribeTaskResponse = struct(
  n0,
  _DTResc,
  0,
  [_TA, _S, _N, _CTEA, _SLA, _DLA, _CWLGA, _SNIA, _DNIA, _O, _E, _Sc, _ECr, _ED, _CT, _I, _MC, _TRC, _SD, _TM],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    64 | 0,
    64 | 0,
    () => Options,
    () => FilterList,
    () => TaskSchedule,
    0,
    0,
    4,
    () => FilterList,
    () => ManifestConfig,
    () => TaskReportConfig,
    () => TaskScheduleDetails,
    0,
  ]
);
export var Ec2Config = struct(n0, _EC, 0, [_SAub, _SGA], [0, 64 | 0]);
export var FilterRule = struct(n0, _FR, 0, [_FTi, _V], [0, 0]);
export var ManifestConfig = struct(n0, _MC, 0, [_Ac, _Fo, _So], [0, 0, () => SourceManifestConfig]);
export var ReportDestination = struct(n0, _RD, 0, [_S_], [() => ReportDestinationS3]);
export var ReportDestinationS3 = struct(n0, _RDS, 0, [_Su, _SBA, _BARA], [0, 0, 0]);
export var ReportOverride = struct(n0, _RO, 0, [_RL], [0]);
export var ReportOverrides = struct(
  n0,
  _ROe,
  0,
  [_Tr, _Ver, _De, _Sk],
  [() => ReportOverride, () => ReportOverride, () => ReportOverride, () => ReportOverride]
);
export var ReportResult = struct(n0, _RR, 0, [_S, _ECr, _ED], [0, 0, 0]);
export var S3Config = struct(n0, _SCo, 0, [_BARA], [0]);
export var S3ManifestConfig = struct(n0, _SMC, 0, [_MOP, _BARA, _SBA, _MOVI], [0, 0, 0, 0]);
export var SourceManifestConfig = struct(n0, _SMCo, 0, [_S_], [() => S3ManifestConfig]);
export var StartTaskExecutionRequest = struct(
  n0,
  _STER,
  0,
  [_TA, _OO, _I, _E, _MC, _TRC, _Ta],
  [
    0,
    () => Options,
    () => FilterList,
    () => FilterList,
    () => ManifestConfig,
    () => TaskReportConfig,
    () => InputTagList,
  ]
);
export var StartTaskExecutionResponse = struct(n0, _STERt, 0, [_TEA], [0]);
export var TaskExecutionFilesFailedDetail = struct(n0, _TEFFD, 0, [_Pre, _Tra, _Veri, _Del], [1, 1, 1, 1]);
export var TaskExecutionFilesListedDetail = struct(n0, _TEFLD, 0, [_AS, _ADFD], [1, 1]);
export var TaskExecutionResultDetail = struct(
  n0,
  _TERD,
  0,
  [_PDr, _PS, _TD, _TDr, _TS, _VD, _VS, _ECr, _ED],
  [1, 0, 1, 1, 0, 1, 0, 0, 0]
);
export var TaskReportConfig = struct(
  n0,
  _TRC,
  0,
  [_Des, _OTu, _RL, _OVI, _Ov],
  [() => ReportDestination, 0, 0, 0, () => ReportOverrides]
);
export var TaskSchedule = struct(n0, _TSa, 0, [_SE, _S], [0, 0]);
export var TaskScheduleDetails = struct(n0, _TSD, 0, [_SUT, _DR, _DB], [4, 0, 0]);
export var UpdateLocationS3Request = struct(n0, _ULSR, 0, [_LA, _Su, _SSC, _SCo], [0, 0, 0, () => S3Config]);
export var UpdateLocationS3Response = struct(n0, _ULSRp, 0, [], []);
export var UpdateTaskRequest = struct(
  n0,
  _UTR,
  0,
  [_TA, _O, _E, _Sc, _N, _CWLGA, _I, _MC, _TRC],
  [
    0,
    () => Options,
    () => FilterList,
    () => TaskSchedule,
    0,
    0,
    () => FilterList,
    () => ManifestConfig,
    () => TaskReportConfig,
  ]
);
export var UpdateTaskResponse = struct(n0, _UTRp, 0, [], []);
export var DestinationNetworkInterfaceArns = 64 | 0;

export var FilterList = list(n0, _FLi, 0, () => FilterRule);
export var SourceNetworkInterfaceArns = 64 | 0;

export var CreateLocationEfs = op(
  n0,
  _CLE,
  0,
  () => CreateLocationEfsRequest,
  () => CreateLocationEfsResponse
);
export var CreateLocationS3 = op(
  n0,
  _CLS,
  0,
  () => CreateLocationS3Request,
  () => CreateLocationS3Response
);
export var CreateTask = op(
  n0,
  _CTr,
  0,
  () => CreateTaskRequest,
  () => CreateTaskResponse
);
export var DescribeLocationEfs = op(
  n0,
  _DLE,
  0,
  () => DescribeLocationEfsRequest,
  () => DescribeLocationEfsResponse
);
export var DescribeLocationS3 = op(
  n0,
  _DLS,
  0,
  () => DescribeLocationS3Request,
  () => DescribeLocationS3Response
);
export var DescribeTask = op(
  n0,
  _DTe,
  0,
  () => DescribeTaskRequest,
  () => DescribeTaskResponse
);
export var DescribeTaskExecution = op(
  n0,
  _DTE,
  0,
  () => DescribeTaskExecutionRequest,
  () => DescribeTaskExecutionResponse
);
export var StartTaskExecution = op(
  n0,
  _STE,
  0,
  () => StartTaskExecutionRequest,
  () => StartTaskExecutionResponse
);
export var UpdateLocationS3 = op(
  n0,
  _ULS,
  0,
  () => UpdateLocationS3Request,
  () => UpdateLocationS3Response
);
export var UpdateTask = op(
  n0,
  _UT,
  0,
  () => UpdateTaskRequest,
  () => UpdateTaskResponse
);
