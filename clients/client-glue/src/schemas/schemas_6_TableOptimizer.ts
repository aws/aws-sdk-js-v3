// smithy-typescript generated code
import { error, list, op, struct, struct as uni } from "@smithy/core/schema";

import { ThrottlingException as __ThrottlingException } from "../models/index";
import {
  _BGTO,
  _BGTOE,
  _BGTOEa,
  _BGTOEat,
  _BGTOEatc,
  _BGTOR,
  _BGTORa,
  _BTO,
  _BTOa,
  _c,
  _cC,
  _CCo,
  _cEF,
  _CI,
  _cI,
  _CM,
  _cM,
  _co,
  _cS,
  _cSo,
  _CTO,
  _CTOR,
  _CTORr,
  _dFT,
  _DH,
  _DN,
  _dN,
  _DTO,
  _DTOR,
  _DTORe,
  _e,
  _En,
  _en,
  _eT,
  _eTn,
  _F,
  _gCN,
  _GTO,
  _GTOR,
  _GTORe,
  _iC,
  _ICC,
  _ICM,
  _IM,
  _IOFDC,
  _IOFDM,
  _IRC,
  _IRM,
  _JDIH,
  _l,
  _lR,
  _LTOR,
  _LTORR,
  _LTORRi,
  _M,
  _m,
  _mIF,
  _MRax,
  _NOBC,
  _NOD,
  _NODFD,
  _NOFC,
  _NOMFD,
  _NOMLD,
  _NOOFD,
  _nOSTR,
  _NTe,
  _OFDC,
  _oFDC,
  _OFDM,
  _oFDM,
  _oFRPID,
  _rA,
  _rC,
  _RCet,
  _rM,
  _RMe,
  _RMu,
  _rRIH,
  _s,
  _sRPID,
  _sT,
  _t,
  _TEh,
  _TN,
  _tN,
  _TO,
  _tO,
  _TOa,
  _TOC,
  _TOR,
  _TORa,
  _TOVC,
  _Ty,
  _UTO,
  _UTOR,
  _UTORp,
  _vC,
  ErrorDetail,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var BatchGetTableOptimizerEntry = struct(n0, _BGTOE, 0, [_cI, _dN, _tN, _t], [0, 0, 0, 0]);
export var BatchGetTableOptimizerError = struct(
  n0,
  _BGTOEa,
  0,
  [_e, _cI, _dN, _tN, _t],
  [() => ErrorDetail, 0, 0, 0, 0]
);
export var BatchGetTableOptimizerRequest = struct(n0, _BGTOR, 0, [_En], [() => BatchGetTableOptimizerEntries]);
export var BatchGetTableOptimizerResponse = struct(
  n0,
  _BGTORa,
  0,
  [_TO, _F],
  [() => BatchTableOptimizers, () => BatchGetTableOptimizerErrors]
);
export var BatchTableOptimizer = struct(n0, _BTO, 0, [_cI, _dN, _tN, _tO], [0, 0, 0, () => TableOptimizer]);
export var CompactionConfiguration = struct(n0, _CCo, 0, [_iC], [() => IcebergCompactionConfiguration]);
export var CompactionMetrics = struct(n0, _CM, 0, [_IM], [() => IcebergCompactionMetrics]);
export var CreateTableOptimizerRequest = struct(
  n0,
  _CTOR,
  0,
  [_CI, _DN, _TN, _Ty, _TOC],
  [0, 0, 0, 0, () => TableOptimizerConfiguration]
);
export var CreateTableOptimizerResponse = struct(n0, _CTORr, 0, [], []);
export var DeleteTableOptimizerRequest = struct(n0, _DTOR, 0, [_CI, _DN, _TN, _Ty], [0, 0, 0, 0]);
export var DeleteTableOptimizerResponse = struct(n0, _DTORe, 0, [], []);
export var GetTableOptimizerRequest = struct(n0, _GTOR, 0, [_CI, _DN, _TN, _Ty], [0, 0, 0, 0]);
export var GetTableOptimizerResponse = struct(n0, _GTORe, 0, [_CI, _DN, _TN, _TOa], [0, 0, 0, () => TableOptimizer]);
export var IcebergCompactionConfiguration = struct(n0, _ICC, 0, [_s, _mIF, _dFT], [0, 1, 1]);
export var IcebergCompactionMetrics = struct(n0, _ICM, 0, [_NOBC, _NOFC, _DH, _NOD, _JDIH], [1, 1, 1, 1, 1]);
export var IcebergOrphanFileDeletionConfiguration = struct(n0, _IOFDC, 0, [_oFRPID, _l, _rRIH], [1, 0, 1]);
export var IcebergOrphanFileDeletionMetrics = struct(n0, _IOFDM, 0, [_NOOFD, _DH, _NOD, _JDIH], [1, 1, 1, 1]);
export var IcebergRetentionConfiguration = struct(n0, _IRC, 0, [_sRPID, _nOSTR, _cEF, _rRIH], [1, 1, 2, 1]);
export var IcebergRetentionMetrics = struct(
  n0,
  _IRM,
  0,
  [_NODFD, _NOMFD, _NOMLD, _DH, _NOD, _JDIH],
  [1, 1, 1, 1, 1, 1]
);
export var ListTableOptimizerRunsRequest = struct(n0, _LTORR, 0, [_CI, _DN, _TN, _Ty, _MRax, _NTe], [0, 0, 0, 0, 1, 0]);
export var ListTableOptimizerRunsResponse = struct(
  n0,
  _LTORRi,
  0,
  [_CI, _DN, _TN, _NTe, _TOR],
  [0, 0, 0, 0, () => TableOptimizerRuns]
);
export var OrphanFileDeletionConfiguration = struct(
  n0,
  _OFDC,
  0,
  [_iC],
  [() => IcebergOrphanFileDeletionConfiguration]
);
export var OrphanFileDeletionMetrics = struct(n0, _OFDM, 0, [_IM], [() => IcebergOrphanFileDeletionMetrics]);
export var RetentionConfiguration = struct(n0, _RCet, 0, [_iC], [() => IcebergRetentionConfiguration]);
export var RetentionMetrics = struct(n0, _RMe, 0, [_IM], [() => IcebergRetentionMetrics]);
export var RunMetrics = struct(n0, _RMu, 0, [_NOBC, _NOFC, _NOD, _JDIH], [0, 0, 0, 0]);
export var TableOptimizer = struct(
  n0,
  _TOa,
  0,
  [_t, _co, _lR, _cS],
  [0, () => TableOptimizerConfiguration, () => TableOptimizerRun, 0]
);
export var TableOptimizerConfiguration = struct(
  n0,
  _TOC,
  0,
  [_rA, _en, _vC, _cC, _rC, _oFDC],
  [
    0,
    2,
    () => TableOptimizerVpcConfiguration,
    () => CompactionConfiguration,
    () => RetentionConfiguration,
    () => OrphanFileDeletionConfiguration,
  ]
);
export var TableOptimizerRun = struct(
  n0,
  _TORa,
  0,
  [_eT, _sT, _eTn, _m, _e, _cM, _cSo, _rM, _oFDM],
  [0, 4, 4, () => RunMetrics, 0, () => CompactionMetrics, 0, () => RetentionMetrics, () => OrphanFileDeletionMetrics]
);
export var ThrottlingException = error(
  n0,
  _TEh,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __ThrottlingException
);
export var UpdateTableOptimizerRequest = struct(
  n0,
  _UTOR,
  0,
  [_CI, _DN, _TN, _Ty, _TOC],
  [0, 0, 0, 0, () => TableOptimizerConfiguration]
);
export var UpdateTableOptimizerResponse = struct(n0, _UTORp, 0, [], []);
export var BatchGetTableOptimizerEntries = list(n0, _BGTOEat, 0, () => BatchGetTableOptimizerEntry);
export var BatchGetTableOptimizerErrors = list(n0, _BGTOEatc, 0, () => BatchGetTableOptimizerError);
export var BatchTableOptimizers = list(n0, _BTOa, 0, () => BatchTableOptimizer);
export var TableOptimizerRuns = list(n0, _TOR, 0, () => TableOptimizerRun);
export var TableOptimizerVpcConfiguration = uni(n0, _TOVC, 0, [_gCN], [0]);
export var BatchGetTableOptimizer = op(
  n0,
  _BGTO,
  0,
  () => BatchGetTableOptimizerRequest,
  () => BatchGetTableOptimizerResponse
);
export var CreateTableOptimizer = op(
  n0,
  _CTO,
  0,
  () => CreateTableOptimizerRequest,
  () => CreateTableOptimizerResponse
);
export var DeleteTableOptimizer = op(
  n0,
  _DTO,
  0,
  () => DeleteTableOptimizerRequest,
  () => DeleteTableOptimizerResponse
);
export var GetTableOptimizer = op(
  n0,
  _GTO,
  0,
  () => GetTableOptimizerRequest,
  () => GetTableOptimizerResponse
);
export var ListTableOptimizerRuns = op(
  n0,
  _LTOR,
  0,
  () => ListTableOptimizerRunsRequest,
  () => ListTableOptimizerRunsResponse
);
export var UpdateTableOptimizer = op(
  n0,
  _UTO,
  0,
  () => UpdateTableOptimizerRequest,
  () => UpdateTableOptimizerResponse
);
