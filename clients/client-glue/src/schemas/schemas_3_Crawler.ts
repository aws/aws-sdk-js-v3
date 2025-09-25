// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AI,
  _BGC,
  _BGCR,
  _BGCRa,
  _CCreat,
  _CCRreater,
  _CCRreatera,
  _CCSTS,
  _CCSTSR,
  _CCSTSRr,
  _CETr,
  _CID,
  _Cla,
  _CLr,
  _CLS,
  _CN,
  _CNDT,
  _CNF,
  _CNLo,
  _CNo,
  _CNr,
  _Conf,
  _Cr,
  _Craw,
  _CSC,
  _CSTRI,
  _CSTS,
  _CTa,
  _CTat,
  _CTL,
  _CTra,
  _CTre,
  _D,
  _DB,
  _DDBT,
  _DDBTL,
  _DDBTy,
  _DEQA,
  _DN,
  _DTe,
  _DTel,
  _DTelt,
  _DTL,
  _EA,
  _EAM,
  _EM,
  _EQA,
  _ETx,
  _Exc,
  _GCetr,
  _GCetra,
  _GCRetr,
  _GCRetra,
  _GCRetraw,
  _GCRetrawl,
  _GCSTS,
  _GCSTSR,
  _GCSTSRe,
  _HT,
  _HTL,
  _HTu,
  _ITc,
  _ITce,
  _ITL,
  _JTd,
  _JTdb,
  _JTL,
  _LC,
  _LCa,
  _LCI,
  _LEA,
  _LFC,
  _LG,
  _LS,
  _LU,
  _MDBT,
  _MDBTL,
  _MDBTo,
  _MP,
  _MRax,
  _MTD,
  _N,
  _NTe,
  _Pat,
  _Path,
  _RB,
  _Rol,
  _RP,
  _sA,
  _SAca,
  _SC,
  _Sc,
  _SCP,
  _SEc,
  _sR,
  _SSa,
  _SSe,
  _St,
  _STa,
  _Sta,
  _STar,
  _STc,
  _STL,
  _STta,
  _Tab,
  _Tag,
  _Targ,
  _TN,
  _TP,
  _UB,
  _UCpda,
  _UCRpdater,
  _UCRpdatera,
  _UCS,
  _UCSR,
  _UCSRp,
  _UCSTS,
  _UCSTSR,
  _UCSTSRp,
  _ULFC,
  _Ver,
  _WM,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var BatchGetCrawlersRequest = struct(n0, _BGCR, 0, [_CNr], [64 | 0]);
export var BatchGetCrawlersResponse = struct(n0, _BGCRa, 0, [_Cr, _CNF], [() => CrawlerList, 64 | 0]);
export var CatalogTarget = struct(n0, _CTa, 0, [_DN, _Tab, _CNo, _EQA, _DEQA], [0, 64 | 0, 0, 0, 0]);
export var ColumnStatisticsTaskSettings = struct(
  n0,
  _CSTS,
  0,
  [_DN, _TN, _Sc, _CNLo, _CID, _Rol, _SSa, _SC, _STc, _SSe, _LEA],
  [0, 0, () => Schedule, 64 | 0, 0, 0, 1, 0, 0, 0, () => ExecutionAttempt]
);
export var Crawler = struct(
  n0,
  _Craw,
  0,
  [_N, _Rol, _Targ, _DN, _D, _Cla, _RP, _SCP, _LC, _Sta, _TP, _Sc, _CETr, _CTre, _LU, _LCa, _Ver, _Conf, _CSC, _LFC],
  [
    0,
    0,
    () => CrawlerTargets,
    0,
    0,
    64 | 0,
    () => RecrawlPolicy,
    () => SchemaChangePolicy,
    () => LineageConfiguration,
    0,
    0,
    () => Schedule,
    1,
    4,
    4,
    () => LastCrawlInfo,
    1,
    0,
    0,
    () => LakeFormationConfiguration,
  ]
);
export var CrawlerTargets = struct(
  n0,
  _CTra,
  0,
  [_STa, _JTd, _MDBT, _DDBT, _CTat, _DTe, _ITc, _HT],
  [
    () => S3TargetList,
    () => JdbcTargetList,
    () => MongoDBTargetList,
    () => DynamoDBTargetList,
    () => CatalogTargetList,
    () => DeltaTargetList,
    () => IcebergTargetList,
    () => HudiTargetList,
  ]
);
export var CreateColumnStatisticsTaskSettingsRequest = struct(
  n0,
  _CCSTSR,
  0,
  [_DN, _TN, _Rol, _Sc, _CNLo, _SSa, _CID, _SC, _Tag],
  [0, 0, 0, 0, 64 | 0, 1, 0, 0, 128 | 0]
);
export var CreateColumnStatisticsTaskSettingsResponse = struct(n0, _CCSTSRr, 0, [], []);
export var CreateCrawlerRequest = struct(
  n0,
  _CCRreater,
  0,
  [_N, _Rol, _DN, _D, _Targ, _Sc, _Cla, _TP, _SCP, _RP, _LC, _LFC, _Conf, _CSC, _Tag],
  [
    0,
    0,
    0,
    0,
    () => CrawlerTargets,
    0,
    64 | 0,
    0,
    () => SchemaChangePolicy,
    () => RecrawlPolicy,
    () => LineageConfiguration,
    () => LakeFormationConfiguration,
    0,
    0,
    128 | 0,
  ]
);
export var CreateCrawlerResponse = struct(n0, _CCRreatera, 0, [], []);
export var DeltaTarget = struct(n0, _DTel, 0, [_DTelt, _CNo, _WM, _CNDT], [64 | 0, 0, 2, 2]);
export var DynamoDBTarget = struct(n0, _DDBTy, 0, [_Path, _sA, _sR], [0, 2, 1]);
export var ExecutionAttempt = struct(n0, _EA, 0, [_St, _CSTRI, _ETx, _EM], [0, 0, 4, 0]);
export var GetColumnStatisticsTaskSettingsRequest = struct(n0, _GCSTSR, 0, [_DN, _TN], [0, 0]);
export var GetColumnStatisticsTaskSettingsResponse = struct(
  n0,
  _GCSTSRe,
  0,
  [_CSTS],
  [() => ColumnStatisticsTaskSettings]
);
export var GetCrawlerRequest = struct(n0, _GCRetr, 0, [_N], [0]);
export var GetCrawlerResponse = struct(n0, _GCRetra, 0, [_Craw], [() => Crawler]);
export var GetCrawlersRequest = struct(n0, _GCRetraw, 0, [_MRax, _NTe], [1, 0]);
export var GetCrawlersResponse = struct(n0, _GCRetrawl, 0, [_Cr, _NTe], [() => CrawlerList, 0]);
export var HudiTarget = struct(n0, _HTu, 0, [_Pat, _CNo, _Exc, _MTD], [64 | 0, 0, 64 | 0, 1]);
export var IcebergTarget = struct(n0, _ITce, 0, [_Pat, _CNo, _Exc, _MTD], [64 | 0, 0, 64 | 0, 1]);
export var JdbcTarget = struct(n0, _JTdb, 0, [_CNo, _Path, _Exc, _EAM], [0, 0, 64 | 0, 64 | 0]);
export var LakeFormationConfiguration = struct(n0, _LFC, 0, [_ULFC, _AI], [2, 0]);
export var LastCrawlInfo = struct(n0, _LCI, 0, [_St, _EM, _LG, _LS, _MP, _STta], [0, 0, 0, 0, 0, 4]);
export var LineageConfiguration = struct(n0, _LC, 0, [_CLS], [0]);
export var MongoDBTarget = struct(n0, _MDBTo, 0, [_CNo, _Path, _SAca], [0, 0, 2]);
export var RecrawlPolicy = struct(n0, _RP, 0, [_RB], [0]);
export var S3Target = struct(n0, _STar, 0, [_Path, _Exc, _CNo, _SSa, _EQA, _DEQA], [0, 64 | 0, 0, 1, 0, 0]);
export var Schedule = struct(n0, _Sc, 0, [_SEc, _Sta], [0, 0]);
export var SchemaChangePolicy = struct(n0, _SCP, 0, [_UB, _DB], [0, 0]);
export var UpdateColumnStatisticsTaskSettingsRequest = struct(
  n0,
  _UCSTSR,
  0,
  [_DN, _TN, _Rol, _Sc, _CNLo, _SSa, _CID, _SC],
  [0, 0, 0, 0, 64 | 0, 1, 0, 0]
);
export var UpdateColumnStatisticsTaskSettingsResponse = struct(n0, _UCSTSRp, 0, [], []);
export var UpdateCrawlerRequest = struct(
  n0,
  _UCRpdater,
  0,
  [_N, _Rol, _DN, _D, _Targ, _Sc, _Cla, _TP, _SCP, _RP, _LC, _LFC, _Conf, _CSC],
  [
    0,
    0,
    0,
    0,
    () => CrawlerTargets,
    0,
    64 | 0,
    0,
    () => SchemaChangePolicy,
    () => RecrawlPolicy,
    () => LineageConfiguration,
    () => LakeFormationConfiguration,
    0,
    0,
  ]
);
export var UpdateCrawlerResponse = struct(n0, _UCRpdatera, 0, [], []);
export var UpdateCrawlerScheduleRequest = struct(n0, _UCSR, 0, [_CN, _Sc], [0, 0]);
export var UpdateCrawlerScheduleResponse = struct(n0, _UCSRp, 0, [], []);
export var CatalogTablesList = 64 | 0;

export var CatalogTargetList = list(n0, _CTL, 0, () => CatalogTarget);
export var ClassifierNameList = 64 | 0;

export var CrawlerList = list(n0, _CLr, 0, () => Crawler);
export var DeltaTargetList = list(n0, _DTL, 0, () => DeltaTarget);
export var DynamoDBTargetList = list(n0, _DDBTL, 0, () => DynamoDBTarget);
export var EnableAdditionalMetadata = 64 | 0;

export var HudiTargetList = list(n0, _HTL, 0, () => HudiTarget);
export var IcebergTargetList = list(n0, _ITL, 0, () => IcebergTarget);
export var JdbcTargetList = list(n0, _JTL, 0, () => JdbcTarget);
export var MongoDBTargetList = list(n0, _MDBTL, 0, () => MongoDBTarget);
export var PathList = 64 | 0;

export var S3TargetList = list(n0, _STL, 0, () => S3Target);
export var BatchGetCrawlers = op(
  n0,
  _BGC,
  0,
  () => BatchGetCrawlersRequest,
  () => BatchGetCrawlersResponse
);
export var CreateColumnStatisticsTaskSettings = op(
  n0,
  _CCSTS,
  0,
  () => CreateColumnStatisticsTaskSettingsRequest,
  () => CreateColumnStatisticsTaskSettingsResponse
);
export var CreateCrawler = op(
  n0,
  _CCreat,
  0,
  () => CreateCrawlerRequest,
  () => CreateCrawlerResponse
);
export var GetColumnStatisticsTaskSettings = op(
  n0,
  _GCSTS,
  0,
  () => GetColumnStatisticsTaskSettingsRequest,
  () => GetColumnStatisticsTaskSettingsResponse
);
export var GetCrawler = op(
  n0,
  _GCetr,
  0,
  () => GetCrawlerRequest,
  () => GetCrawlerResponse
);
export var GetCrawlers = op(
  n0,
  _GCetra,
  0,
  () => GetCrawlersRequest,
  () => GetCrawlersResponse
);
export var UpdateColumnStatisticsTaskSettings = op(
  n0,
  _UCSTS,
  0,
  () => UpdateColumnStatisticsTaskSettingsRequest,
  () => UpdateColumnStatisticsTaskSettingsResponse
);
export var UpdateCrawler = op(
  n0,
  _UCpda,
  0,
  () => UpdateCrawlerRequest,
  () => UpdateCrawlerResponse
);
export var UpdateCrawlerSchedule = op(
  n0,
  _UCS,
  0,
  () => UpdateCrawlerScheduleRequest,
  () => UpdateCrawlerScheduleResponse
);
