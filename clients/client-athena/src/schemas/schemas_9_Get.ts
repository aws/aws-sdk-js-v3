// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AT,
  _ATET,
  _CEI,
  _Ch,
  _CI,
  _CIL,
  _CN,
  _CPNU,
  _CPNUR,
  _CPNURr,
  _CR,
  _CS,
  _CSas,
  _D,
  _Dat,
  _Data,
  _DEIM,
  _dL,
  _EETIM,
  _EI,
  _ES,
  _ESF,
  _ESL,
  _ESx,
  _ESxe,
  _ETx,
  _ETxe,
  _GCE,
  _GCER,
  _GCERe,
  _GCES,
  _GCESR,
  _GCESRe,
  _GQR,
  _GQRI,
  _GQRO,
  _GQRS,
  _GQRSI,
  _GQRSO,
  _I,
  _IB,
  _IR,
  _L,
  _LE,
  _LER,
  _LERi,
  _MR,
  _N,
  _NT,
  _NU,
  _Nu,
  _OB,
  _OR,
  _OS,
  _P,
  _Pr,
  _QEIu,
  _QPTIM,
  _QQTIM,
  _QRS,
  _QRSR,
  _QRST,
  _QRT,
  _QSP,
  _QSPN,
  _QSPNu,
  _QSue,
  _QSuer,
  _Re,
  _RL,
  _Ro,
  _Row,
  _RS,
  _RSe,
  _RSM,
  _RSU,
  _RT,
  _S,
  _Sc,
  _SDTt,
  _SESU,
  _SI,
  _SIt,
  _SN,
  _SOSU,
  _SPPTIM,
  _SPTIM,
  _SS,
  _St,
  _Sta,
  _T,
  _TDT,
  _TETIM,
  _Ti,
  _TN,
  _UC,
  _VCV,
  _WD,
  n0,
} from "./schemas_0";
import { CalculationStatus } from "./schemas_2_Calculation";

/* eslint no-var: 0 */

export var CalculationResult = struct(n0, _CR, 0, [_SOSU, _SESU, _RSU, _RT], [0, 0, 0, 0]);
export var CalculationStatistics = struct(n0, _CS, 0, [_DEIM, _P], [1, 0]);
export var ColumnInfo = struct(
  n0,
  _CI,
  0,
  [_CN, _SN, _TN, _N, _L, _T, _Pr, _Sc, _Nu, _CSas],
  [0, 0, 0, 0, 0, 0, 1, 1, 0, 2]
);
export var CreatePresignedNotebookUrlRequest = struct(n0, _CPNUR, 0, [_SI], [0]);
export var CreatePresignedNotebookUrlResponse = struct(n0, _CPNURr, 0, [_NU, _AT, _ATET], [0, 0, 1]);
export var Datum = struct(n0, _Dat, 0, [_VCV], [0]);
export var ExecutorsSummary = struct(n0, _ES, 0, [_EI, _ETx, _SDTt, _TDT, _ESx, _ESxe], [0, 0, 1, 1, 0, 1]);
export var GetCalculationExecutionRequest = struct(n0, _GCER, 0, [_CEI], [0]);
export var GetCalculationExecutionResponse = struct(
  n0,
  _GCERe,
  0,
  [_CEI, _SI, _D, _WD, _St, _Sta, _Re],
  [0, 0, 0, 0, () => CalculationStatus, () => CalculationStatistics, () => CalculationResult]
);
export var GetCalculationExecutionStatusRequest = struct(n0, _GCESR, 0, [_CEI], [0]);
export var GetCalculationExecutionStatusResponse = struct(
  n0,
  _GCESRe,
  0,
  [_St, _Sta],
  [() => CalculationStatus, () => CalculationStatistics]
);
export var GetQueryResultsInput = struct(n0, _GQRI, 0, [_QEIu, _NT, _MR, _QRT], [0, 0, 1, 0]);
export var GetQueryResultsOutput = struct(n0, _GQRO, 0, [_UC, _RS, _NT], [1, () => ResultSet, 0]);
export var GetQueryRuntimeStatisticsInput = struct(n0, _GQRSI, 0, [_QEIu], [0]);
export var GetQueryRuntimeStatisticsOutput = struct(n0, _GQRSO, 0, [_QRS], [() => QueryRuntimeStatistics]);
export var ListExecutorsRequest = struct(n0, _LER, 0, [_SI, _ESF, _MR, _NT], [0, 0, 1, 0]);
export var ListExecutorsResponse = struct(n0, _LERi, 0, [_SI, _NT, _ES], [0, 0, () => ExecutorsSummaryList]);
export var QueryRuntimeStatistics = struct(
  n0,
  _QRS,
  0,
  [_Ti, _Ro, _OS],
  [() => QueryRuntimeStatisticsTimeline, () => QueryRuntimeStatisticsRows, () => QueryStage]
);
export var QueryRuntimeStatisticsRows = struct(n0, _QRSR, 0, [_IR, _IB, _OB, _OR], [1, 1, 1, 1]);
export var QueryRuntimeStatisticsTimeline = struct(
  n0,
  _QRST,
  0,
  [_QQTIM, _SPPTIM, _QPTIM, _EETIM, _SPTIM, _TETIM],
  [1, 1, 1, 1, 1, 1]
);
export var QueryStage = struct(
  n0,
  _QSue,
  0,
  [_SIt, _S, _OB, _OR, _IB, _IR, _ETxe, _QSP, _SS],
  [1, 0, 1, 1, 1, 1, 1, () => QueryStagePlanNode, () => QueryStages]
);
export var QueryStagePlanNode = struct(n0, _QSPN, 0, [_N, _I, _Ch, _RSe], [0, 0, () => QueryStagePlanNodes, 64 | 0]);
export var ResultSet = struct(n0, _RS, 0, [_Ro, _RSM], [() => RowList, () => ResultSetMetadata]);
export var ResultSetMetadata = struct(n0, _RSM, 0, [_CI], [() => ColumnInfoList]);
export var Row = struct(n0, _Row, 0, [_Data], [() => datumList]);
export var ColumnInfoList = list(n0, _CIL, 0, () => ColumnInfo);
export var datumList = list(n0, _dL, 0, () => Datum);
export var ExecutorsSummaryList = list(n0, _ESL, 0, () => ExecutorsSummary);
export var QueryStagePlanNodes = list(n0, _QSPNu, 0, () => QueryStagePlanNode);
export var QueryStages = list(n0, _QSuer, 0, () => QueryStage);
export var RowList = list(n0, _RL, 0, () => Row);
export var StringList = 64 | 0;

export var CreatePresignedNotebookUrl = op(
  n0,
  _CPNU,
  0,
  () => CreatePresignedNotebookUrlRequest,
  () => CreatePresignedNotebookUrlResponse
);
export var GetCalculationExecution = op(
  n0,
  _GCE,
  0,
  () => GetCalculationExecutionRequest,
  () => GetCalculationExecutionResponse
);
export var GetCalculationExecutionStatus = op(
  n0,
  _GCES,
  0,
  () => GetCalculationExecutionStatusRequest,
  () => GetCalculationExecutionStatusResponse
);
export var GetQueryResults = op(
  n0,
  _GQR,
  0,
  () => GetQueryResultsInput,
  () => GetQueryResultsOutput
);
export var GetQueryRuntimeStatistics = op(
  n0,
  _GQRS,
  0,
  () => GetQueryRuntimeStatisticsInput,
  () => GetQueryRuntimeStatisticsOutput
);
export var ListExecutors = op(
  n0,
  _LE,
  0,
  () => ListExecutorsRequest,
  () => ListExecutorsResponse
);
