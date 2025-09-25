// smithy-typescript generated code
import { list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _aEg,
  _aI,
  _aTAn,
  _aTg,
  _BJRU,
  _BRU,
  _bRU,
  _bu,
  _CC,
  _cC,
  _co,
  _cT,
  _di,
  _dP,
  _DPP,
  _DPSP,
  _DPSPL,
  _e,
  _GPJ,
  _GPJI,
  _GPJO,
  _GPQ,
  _GPQI,
  _GPQO,
  _h,
  _i,
  _jP,
  _kP,
  _l,
  _lo,
  _m,
  _mA,
  _mCV,
  _mCVa,
  _memb,
  _mI,
  _mIe,
  _mLe,
  _nu,
  _o,
  _oCu,
  _pa,
  _PJ,
  _pJ,
  _PJCC,
  _PJE,
  _pJI,
  _PJMOCI,
  _PJMOCO,
  _PJMOL,
  _PJO,
  _PJOCI,
  _PJOCO,
  _PJP,
  _PJR,
  _PJRCI,
  _PJRCO,
  _PJS,
  _PJSMO,
  _PJSO,
  _PJSOCO,
  _PJWCC,
  _PQ,
  _pQ,
  _PQDO,
  _PQDOC,
  _PQDOCL,
  _PQDOCLr,
  _PQE,
  _pQI,
  _PQMOC,
  _PQMOL,
  _PQO,
  _PQOC,
  _PQR,
  _PQRC,
  _PQS,
  _PQSMO,
  _PQSO,
  _PQSOC,
  _PQSQLP,
  _qS,
  _rCe,
  _res,
  _rF,
  _s_,
  _sFO,
  _sP,
  _SPJ,
  _SPJI,
  _SPJO,
  _SPQ,
  _sPq,
  _SPQI,
  _SPQO,
  _st,
  _sta,
  _t,
  _tDIM,
  _tSa,
  _u,
  _uCL,
  _UPJ,
  _UPJI,
  _UPJO,
  _UPQ,
  _UPQI,
  _UPQO,
  _w,
  _WCC,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var BilledJobResourceUtilization = struct(n0, _BJRU, 0, [_u], [1]);
export var BilledResourceUtilization = struct(n0, _BRU, 0, [_u], [1]);
export var DifferentialPrivacyParameters = struct(
  n0,
  _DPP,
  0,
  [_sP],
  [() => DifferentialPrivacySensitivityParametersList]
);
export var DifferentialPrivacySensitivityParameters = struct(
  n0,
  _DPSP,
  0,
  [_aTg, _aEg, _uCL, _mCV, _mCVa],
  [0, 0, 1, 1, 1]
);
export var GetProtectedJobInput = struct(
  n0,
  _GPJI,
  0,
  [_mIe, _pJI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetProtectedJobOutput = struct(n0, _GPJO, 0, [_pJ], [() => ProtectedJob]);
export var GetProtectedQueryInput = struct(
  n0,
  _GPQI,
  0,
  [_mIe, _pQI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetProtectedQueryOutput = struct(n0, _GPQO, 0, [_pQ], [[() => ProtectedQuery, 0]]);
export var ProtectedJob = struct(
  n0,
  _PJ,
  0,
  [_i, _mI, _mA, _cT, _jP, _st, _rCe, _sta, _res, _e, _cC],
  [
    0,
    0,
    0,
    4,
    () => ProtectedJobParameters,
    0,
    () => ProtectedJobResultConfigurationOutput,
    () => ProtectedJobStatistics,
    () => ProtectedJobResult,
    () => ProtectedJobError,
    () => ProtectedJobComputeConfiguration,
  ]
);
export var ProtectedJobError = struct(n0, _PJE, 0, [_m, _co], [0, 0]);
export var ProtectedJobMemberOutputConfigurationInput = struct(n0, _PJMOCI, 0, [_aI], [0]);
export var ProtectedJobMemberOutputConfigurationOutput = struct(n0, _PJMOCO, 0, [_aI], [0]);
export var ProtectedJobParameters = struct(n0, _PJP, 0, [_aTAn], [0]);
export var ProtectedJobResult = struct(n0, _PJR, 0, [_o], [() => ProtectedJobOutput]);
export var ProtectedJobResultConfigurationInput = struct(
  n0,
  _PJRCI,
  0,
  [_oCu],
  [() => ProtectedJobOutputConfigurationInput]
);
export var ProtectedJobResultConfigurationOutput = struct(
  n0,
  _PJRCO,
  0,
  [_oCu],
  [() => ProtectedJobOutputConfigurationOutput]
);
export var ProtectedJobS3Output = struct(n0, _PJSO, 0, [_l], [0]);
export var ProtectedJobS3OutputConfigurationOutput = struct(n0, _PJSOCO, 0, [_bu, _kP], [0, 0]);
export var ProtectedJobSingleMemberOutput = struct(n0, _PJSMO, 0, [_aI], [0]);
export var ProtectedJobStatistics = struct(n0, _PJS, 0, [_tDIM, _bRU], [1, () => BilledJobResourceUtilization]);
export var ProtectedJobWorkerComputeConfiguration = struct(n0, _PJWCC, 0, [_t, _nu], [0, 1]);
export var ProtectedQuery = struct(
  n0,
  _PQ,
  0,
  [_i, _mI, _mA, _cT, _sPq, _st, _rCe, _sta, _res, _e, _dP, _cC],
  [
    0,
    0,
    0,
    4,
    [() => ProtectedQuerySQLParameters, 0],
    0,
    () => ProtectedQueryResultConfiguration,
    () => ProtectedQueryStatistics,
    () => ProtectedQueryResult,
    () => ProtectedQueryError,
    () => DifferentialPrivacyParameters,
    () => ComputeConfiguration,
  ]
);
export var ProtectedQueryDistributeOutput = struct(
  n0,
  _PQDO,
  0,
  [_s_, _mLe],
  [() => ProtectedQueryS3Output, () => ProtectedQueryMemberOutputList]
);
export var ProtectedQueryDistributeOutputConfiguration = struct(
  n0,
  _PQDOC,
  0,
  [_lo],
  [() => ProtectedQueryDistributeOutputConfigurationLocations]
);
export var ProtectedQueryError = struct(n0, _PQE, 0, [_m, _co], [0, 0]);
export var ProtectedQueryMemberOutputConfiguration = struct(n0, _PQMOC, 0, [_aI], [0]);
export var ProtectedQueryResult = struct(n0, _PQR, 0, [_o], [() => ProtectedQueryOutput]);
export var ProtectedQueryResultConfiguration = struct(n0, _PQRC, 0, [_oCu], [() => ProtectedQueryOutputConfiguration]);
export var ProtectedQueryS3Output = struct(n0, _PQSO, 0, [_l], [0]);
export var ProtectedQueryS3OutputConfiguration = struct(n0, _PQSOC, 0, [_rF, _bu, _kP, _sFO], [0, 0, 0, 2]);
export var ProtectedQuerySingleMemberOutput = struct(n0, _PQSMO, 0, [_aI], [0]);
export var ProtectedQuerySQLParameters = struct(n0, _PQSQLP, 8, [_qS, _aTAn, _pa], [0, 0, 128 | 0]);
export var ProtectedQueryStatistics = struct(n0, _PQS, 0, [_tDIM, _bRU], [1, () => BilledResourceUtilization]);
export var StartProtectedJobInput = struct(
  n0,
  _SPJI,
  0,
  [_t, _mIe, _jP, _rCe, _cC],
  [
    0,
    [0, 1],
    () => ProtectedJobParameters,
    () => ProtectedJobResultConfigurationInput,
    () => ProtectedJobComputeConfiguration,
  ]
);
export var StartProtectedJobOutput = struct(n0, _SPJO, 0, [_pJ], [() => ProtectedJob]);
export var StartProtectedQueryInput = struct(
  n0,
  _SPQI,
  0,
  [_t, _mIe, _sPq, _rCe, _cC],
  [
    0,
    [0, 1],
    [() => ProtectedQuerySQLParameters, 0],
    () => ProtectedQueryResultConfiguration,
    () => ComputeConfiguration,
  ]
);
export var StartProtectedQueryOutput = struct(n0, _SPQO, 0, [_pQ], [[() => ProtectedQuery, 0]]);
export var UpdateProtectedJobInput = struct(n0, _UPJI, 0, [_mIe, _pJI, _tSa], [[0, 1], [0, 1], 0]);
export var UpdateProtectedJobOutput = struct(n0, _UPJO, 0, [_pJ], [() => ProtectedJob]);
export var UpdateProtectedQueryInput = struct(n0, _UPQI, 0, [_mIe, _pQI, _tSa], [[0, 1], [0, 1], 0]);
export var UpdateProtectedQueryOutput = struct(n0, _UPQO, 0, [_pQ], [[() => ProtectedQuery, 0]]);
export var WorkerComputeConfiguration = struct(n0, _WCC, 0, [_t, _nu], [0, 1]);
export var DifferentialPrivacySensitivityParametersList = list(
  n0,
  _DPSPL,
  0,
  () => DifferentialPrivacySensitivityParameters
);
export var ProtectedJobMemberOutputList = list(n0, _PJMOL, 0, () => ProtectedJobSingleMemberOutput);
export var ProtectedQueryDistributeOutputConfigurationLocations = list(
  n0,
  _PQDOCL,
  0,
  () => ProtectedQueryDistributeOutputConfigurationLocation
);
export var ProtectedQueryMemberOutputList = list(n0, _PQMOL, 0, () => ProtectedQuerySingleMemberOutput);
export var ParameterMap = 128 | 0;

export var ComputeConfiguration = uni(n0, _CC, 0, [_w], [() => WorkerComputeConfiguration]);
export var ProtectedJobComputeConfiguration = uni(n0, _PJCC, 0, [_w], [() => ProtectedJobWorkerComputeConfiguration]);
export var ProtectedJobOutput = uni(
  n0,
  _PJO,
  0,
  [_s_, _mLe],
  [() => ProtectedJobS3Output, () => ProtectedJobMemberOutputList]
);
export var ProtectedJobOutputConfigurationInput = uni(
  n0,
  _PJOCI,
  0,
  [_memb],
  [() => ProtectedJobMemberOutputConfigurationInput]
);
export var ProtectedJobOutputConfigurationOutput = uni(
  n0,
  _PJOCO,
  0,
  [_s_, _memb],
  [() => ProtectedJobS3OutputConfigurationOutput, () => ProtectedJobMemberOutputConfigurationOutput]
);
export var ProtectedQueryDistributeOutputConfigurationLocation = uni(
  n0,
  _PQDOCLr,
  0,
  [_s_, _memb],
  [() => ProtectedQueryS3OutputConfiguration, () => ProtectedQueryMemberOutputConfiguration]
);
export var ProtectedQueryOutput = uni(
  n0,
  _PQO,
  0,
  [_s_, _mLe, _di],
  [() => ProtectedQueryS3Output, () => ProtectedQueryMemberOutputList, () => ProtectedQueryDistributeOutput]
);
export var ProtectedQueryOutputConfiguration = uni(
  n0,
  _PQOC,
  0,
  [_s_, _memb, _di],
  [
    () => ProtectedQueryS3OutputConfiguration,
    () => ProtectedQueryMemberOutputConfiguration,
    () => ProtectedQueryDistributeOutputConfiguration,
  ]
);
export var GetProtectedJob = op(
  n0,
  _GPJ,
  {
    [_h]: ["GET", "/memberships/{membershipIdentifier}/protectedJobs/{protectedJobIdentifier}", 200],
  },
  () => GetProtectedJobInput,
  () => GetProtectedJobOutput
);
export var GetProtectedQuery = op(
  n0,
  _GPQ,
  {
    [_h]: ["GET", "/memberships/{membershipIdentifier}/protectedQueries/{protectedQueryIdentifier}", 200],
  },
  () => GetProtectedQueryInput,
  () => GetProtectedQueryOutput
);
export var StartProtectedJob = op(
  n0,
  _SPJ,
  {
    [_h]: ["POST", "/memberships/{membershipIdentifier}/protectedJobs", 200],
  },
  () => StartProtectedJobInput,
  () => StartProtectedJobOutput
);
export var StartProtectedQuery = op(
  n0,
  _SPQ,
  {
    [_h]: ["POST", "/memberships/{membershipIdentifier}/protectedQueries", 200],
  },
  () => StartProtectedQueryInput,
  () => StartProtectedQueryOutput
);
export var UpdateProtectedJob = op(
  n0,
  _UPJ,
  {
    [_h]: ["PATCH", "/memberships/{membershipIdentifier}/protectedJobs/{protectedJobIdentifier}", 200],
  },
  () => UpdateProtectedJobInput,
  () => UpdateProtectedJobOutput
);
export var UpdateProtectedQuery = op(
  n0,
  _UPQ,
  {
    [_h]: ["PATCH", "/memberships/{membershipIdentifier}/protectedQueries/{protectedQueryIdentifier}", 200],
  },
  () => UpdateProtectedQueryInput,
  () => UpdateProtectedQueryOutput
);
