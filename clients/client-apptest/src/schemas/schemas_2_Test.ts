// smithy-typescript generated code
import { list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _aI,
  _aSf,
  _aT,
  _b,
  _bJN,
  _bJP,
  _BS,
  _bSe,
  _BSI,
  _BSO,
  _cA,
  _CAS,
  _cC,
  _CCFS,
  _CCFSI,
  _CCFSO,
  _CDCDCS,
  _CDCDCSI,
  _CDCDCSO,
  _CDSS,
  _CDSSI,
  _CDSSO,
  _cF,
  _CFSS,
  _CFT,
  _cOL,
  _cS,
  _da,
  _dC,
  _dCDC,
  _DCFS,
  _DCFSI,
  _DCFSO,
  _dOL,
  _dSD,
  _dSEL,
  _eDSN,
  _ex,
  _F,
  _fT,
  _GTRS,
  _GTRSR,
  _GTRSRe,
  _h,
  _hQ,
  _iDSS,
  _lP,
  _LTRS,
  _LTRSR,
  _LTRSRi,
  _LTRTC,
  _LTRTCR,
  _LTRTCRi,
  _mA,
  _MAS,
  _mMA,
  _MMAS,
  _MMASI,
  _MMASO,
  _MMASS,
  _mNMA,
  _MNMAS,
  _MNMASI,
  _MNMASO,
  _MNMASS,
  _mR,
  _MRS,
  _nT,
  _oL,
  _p,
  _pa,
  _r,
  _rAe,
  _RAS,
  _rET,
  _rST,
  _ru,
  _sc,
  _sDS,
  _sI,
  _sIt,
  _sL,
  _sLc,
  _sM,
  _sN,
  _sO,
  _sOL,
  _sR,
  _SRS,
  _sRS,
  _SS,
  _st,
  _t,
  _tCI,
  _TCRS,
  _TCRSL,
  _tCV,
  _tDS,
  _tL,
  _tLa,
  _tM,
  _tn,
  _TNS,
  _TNSI,
  _TNSO,
  _tRI,
  _tRS,
  _TRSS,
  _TRSSL,
  _tRTC,
  _tSI,
  _tSV,
  _vESN,
  _wAN,
  n0,
} from "./schemas_0";
import {
  DataSetList,
  M2ManagedActionProperties,
  MainframeActionProperties,
  SourceDatabaseMetadata,
  TargetDatabaseMetadata,
} from "./schemas_3_Test";

/* eslint no-var: 0 */

export var BatchStepInput = struct(
  n0,
  _BSI,
  0,
  [_r, _bJN, _bJP, _eDSN, _p],
  [() => MainframeResourceSummary, 0, 128 | 0, 64 | 0, () => MainframeActionProperties]
);
export var BatchStepOutput = struct(n0, _BSO, 0, [_dSEL, _dOL, _dSD], [0, 0, () => DataSetList]);
export var BatchSummary = struct(n0, _BS, 0, [_sI, _sO], [() => BatchStepInput, () => BatchStepOutput]);
export var CompareActionSummary = struct(n0, _CAS, 0, [_t], [() => File]);
export var CompareDatabaseCDCStepInput = struct(
  n0,
  _CDCDCSI,
  0,
  [_sL, _tLa, _oL, _sM, _tM],
  [0, 0, 0, () => SourceDatabaseMetadata, () => TargetDatabaseMetadata]
);
export var CompareDatabaseCDCStepOutput = struct(n0, _CDCDCSO, 0, [_cOL, _cS], [0, 0]);
export var CompareDatabaseCDCSummary = struct(
  n0,
  _CDCDCS,
  0,
  [_sI, _sO],
  [() => CompareDatabaseCDCStepInput, () => CompareDatabaseCDCStepOutput]
);
export var CompareDataSetsStepInput = struct(
  n0,
  _CDSSI,
  0,
  [_sL, _tLa, _sDS, _tDS],
  [0, 0, () => DataSetList, () => DataSetList]
);
export var CompareDataSetsStepOutput = struct(n0, _CDSSO, 0, [_cOL, _cS], [0, 0]);
export var CompareDataSetsSummary = struct(
  n0,
  _CDSS,
  0,
  [_sI, _sO],
  [() => CompareDataSetsStepInput, () => CompareDataSetsStepOutput]
);
export var CreateCloudFormationStepInput = struct(n0, _CCFSI, 0, [_tL, _pa], [0, 128 | 0]);
export var CreateCloudFormationStepOutput = struct(n0, _CCFSO, 0, [_sIt, _ex], [0, 128 | 0]);
export var CreateCloudFormationSummary = struct(
  n0,
  _CCFS,
  0,
  [_sI, _sO],
  [() => CreateCloudFormationStepInput, () => CreateCloudFormationStepOutput]
);
export var DeleteCloudFormationStepInput = struct(n0, _DCFSI, 0, [_sIt], [0]);
export var DeleteCloudFormationStepOutput = struct(n0, _DCFSO, 0, [], []);
export var DeleteCloudFormationSummary = struct(
  n0,
  _DCFS,
  0,
  [_sI, _sO],
  [() => DeleteCloudFormationStepInput, () => DeleteCloudFormationStepOutput]
);
export var GetTestRunStepRequest = struct(
  n0,
  _GTRSR,
  0,
  [_tRI, _sN, _tCI, _tSI],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _tCI,
      },
    ],
    [
      0,
      {
        [_hQ]: _tSI,
      },
    ],
  ]
);
export var GetTestRunStepResponse = struct(
  n0,
  _GTRSRe,
  0,
  [_sN, _tRI, _tCI, _tCV, _tSI, _tSV, _bSe, _aSf, _st, _sR, _rST, _rET, _sRS],
  [0, 0, 0, 1, 0, 1, 2, 2, 0, 0, 4, 4, () => StepRunSummary]
);
export var ListTestRunStepsRequest = struct(
  n0,
  _LTRSR,
  0,
  [_tRI, _tCI, _tSI, _nT, _mR],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _tCI,
      },
    ],
    [
      0,
      {
        [_hQ]: _tSI,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
  ]
);
export var ListTestRunStepsResponse = struct(n0, _LTRSRi, 0, [_tRS, _nT], [() => TestRunStepSummaryList, 0]);
export var ListTestRunTestCasesRequest = struct(
  n0,
  _LTRTCR,
  0,
  [_tRI, _nT, _mR],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
  ]
);
export var ListTestRunTestCasesResponse = struct(n0, _LTRTCRi, 0, [_tRTC, _nT], [() => TestCaseRunSummaryList, 0]);
export var M2ManagedApplicationStepInput = struct(
  n0,
  _MMASI,
  0,
  [_aI, _ru, _vESN, _lP, _aT, _p],
  [0, 0, 0, 1, 0, () => M2ManagedActionProperties]
);
export var M2ManagedApplicationStepOutput = struct(n0, _MMASO, 0, [_iDSS], [128 | 0]);
export var M2ManagedApplicationStepSummary = struct(
  n0,
  _MMASS,
  0,
  [_sI, _sO],
  [() => M2ManagedApplicationStepInput, () => M2ManagedApplicationStepOutput]
);
export var M2ManagedApplicationSummary = struct(n0, _MMAS, 0, [_aI, _ru, _lP], [0, 0, 1]);
export var M2NonManagedApplicationStepInput = struct(n0, _MNMASI, 0, [_vESN, _lP, _ru, _wAN, _aT], [0, 1, 0, 0, 0]);
export var M2NonManagedApplicationStepOutput = struct(n0, _MNMASO, 0, [], []);
export var M2NonManagedApplicationStepSummary = struct(
  n0,
  _MNMASS,
  0,
  [_sI, _sO],
  [() => M2NonManagedApplicationStepInput, () => M2NonManagedApplicationStepOutput]
);
export var M2NonManagedApplicationSummary = struct(n0, _MNMAS, 0, [_vESN, _lP, _ru, _wAN], [0, 1, 0, 0]);
export var ScriptSummary = struct(n0, _SS, 0, [_sLc, _t], [0, 0]);
export var TestCaseRunSummary = struct(n0, _TCRS, 0, [_tCI, _tCV, _tRI, _st, _sR, _rST, _rET], [0, 1, 0, 0, 0, 4, 4]);
export var TestRunStepSummary = struct(
  n0,
  _TRSS,
  0,
  [_sN, _tRI, _tCI, _tCV, _tSI, _tSV, _bSe, _aSf, _st, _sR, _rST, _rET],
  [0, 0, 0, 1, 0, 1, 2, 2, 0, 0, 4, 4]
);
export var TN3270StepInput = struct(
  n0,
  _TNSI,
  0,
  [_r, _sc, _eDSN, _p],
  [() => MainframeResourceSummary, () => ScriptSummary, 64 | 0, () => MainframeActionProperties]
);
export var TN3270StepOutput = struct(n0, _TNSO, 0, [_dSEL, _dOL, _dSD, _sOL], [0, 0, () => DataSetList, 0]);
export var TN3270Summary = struct(n0, _TNS, 0, [_sI, _sO], [() => TN3270StepInput, () => TN3270StepOutput]);
export var TestCaseRunSummaryList = list(n0, _TCRSL, 0, () => TestCaseRunSummary);
export var TestRunStepSummaryList = list(n0, _TRSSL, 0, () => TestRunStepSummary);
export var CloudFormationStepSummary = uni(
  n0,
  _CFSS,
  0,
  [_cC, _dC],
  [() => CreateCloudFormationSummary, () => DeleteCloudFormationSummary]
);
export var CompareFileType = uni(
  n0,
  _CFT,
  0,
  [_da, _dCDC],
  [() => CompareDataSetsSummary, () => CompareDatabaseCDCSummary]
);
export var File = uni(n0, _F, 0, [_fT], [() => CompareFileType]);
export var MainframeActionSummary = uni(n0, _MAS, 0, [_b, _tn], [() => BatchSummary, () => TN3270Summary]);
export var MainframeResourceSummary = uni(
  n0,
  _MRS,
  0,
  [_mMA, _mNMA],
  [() => M2ManagedApplicationSummary, () => M2NonManagedApplicationSummary]
);
export var ResourceActionSummary = uni(
  n0,
  _RAS,
  0,
  [_cF, _mMA, _mNMA],
  [() => CloudFormationStepSummary, () => M2ManagedApplicationStepSummary, () => M2NonManagedApplicationStepSummary]
);
export var StepRunSummary = uni(
  n0,
  _SRS,
  0,
  [_mA, _cA, _rAe],
  [() => MainframeActionSummary, () => CompareActionSummary, () => ResourceActionSummary]
);
export var GetTestRunStep = op(
  n0,
  _GTRS,
  {
    [_h]: ["GET", "/testruns/{testRunId}/steps/{stepName}", 200],
  },
  () => GetTestRunStepRequest,
  () => GetTestRunStepResponse
);
export var ListTestRunSteps = op(
  n0,
  _LTRS,
  {
    [_h]: ["GET", "/testruns/{testRunId}/steps", 200],
  },
  () => ListTestRunStepsRequest,
  () => ListTestRunStepsResponse
);
export var ListTestRunTestCases = op(
  n0,
  _LTRTC,
  {
    [_h]: ["GET", "/testruns/{testRunId}/testcases", 200],
  },
  () => ListTestRunTestCasesRequest,
  () => ListTestRunTestCasesResponse
);
