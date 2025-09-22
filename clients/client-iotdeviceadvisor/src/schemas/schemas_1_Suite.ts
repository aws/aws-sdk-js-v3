// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { ConflictException as __ConflictException } from "../models/index";
import {
  _c,
  _cA,
  _cAe,
  _CE,
  _CSD,
  _CSDR,
  _CSDRr,
  _cT,
  _d,
  _dD,
  _dPRA,
  _dRA,
  _DSD,
  _DSDR,
  _DSDRe,
  _DUT,
  _DUTL,
  _e,
  _eA,
  _en,
  _eR,
  _eT,
  _f,
  _fa,
  _g,
  _gI,
  _gN,
  _GR,
  _GRL,
  _GSD,
  _GSDR,
  _GSDRe,
  _GSR,
  _GSRR,
  _GSRRe,
  _GSRRet,
  _GSRRR,
  _GSRRRe,
  _h,
  _hE,
  _hQ,
  _iFQ,
  _iLDT,
  _lMA,
  _LSD,
  _LSDR,
  _LSDRi,
  _LSR,
  _LSRR,
  _LSRRi,
  _lU,
  _lUA,
  _lV,
  _m,
  _mR,
  _nT,
  _p,
  _pa,
  _pD,
  _pR,
  _qRDU,
  _rG,
  _s,
  _sA,
  _sDA,
  _SDC,
  _sDC,
  _SDI,
  _sDI,
  _SDIL,
  _sDIL,
  _sDN,
  _sDV,
  _sM,
  _sRA,
  _SRC,
  _sRC,
  _SRI,
  _sRI,
  _SRL,
  _sRL,
  _SSR,
  _SSRR,
  _SSRRt,
  _SSRRto,
  _SSRRtop,
  _SSRt,
  _sT,
  _sTL,
  _t,
  _tA,
  _tCDI,
  _tCDN,
  _TCR,
  _TCRe,
  _tCRI,
  _TCS,
  _tCSI,
  _TCSL,
  _tCST,
  _te,
  _TR,
  _tR,
  _tS,
  _USD,
  _USDR,
  _USDRp,
  _w,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ConflictException = error(
  n0,
  _CE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __ConflictException
);
export var CreateSuiteDefinitionRequest = struct(
  n0,
  _CSDR,
  0,
  [_sDC, _t, _cT],
  [() => SuiteDefinitionConfiguration, 128 | 0, [0, 4]]
);
export var CreateSuiteDefinitionResponse = struct(n0, _CSDRr, 0, [_sDI, _sDA, _sDN, _cA], [0, 0, 0, 4]);
export var DeleteSuiteDefinitionRequest = struct(n0, _DSDR, 0, [_sDI], [[0, 1]]);
export var DeleteSuiteDefinitionResponse = struct(n0, _DSDRe, 0, [], []);
export var DeviceUnderTest = struct(n0, _DUT, 0, [_tA, _cAe, _dRA], [0, 0, 0]);
export var GetSuiteDefinitionRequest = struct(
  n0,
  _GSDR,
  0,
  [_sDI, _sDV],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _sDV,
      },
    ],
  ]
);
export var GetSuiteDefinitionResponse = struct(
  n0,
  _GSDRe,
  0,
  [_sDI, _sDA, _sDV, _lV, _sDC, _cA, _lMA, _t],
  [0, 0, 0, 0, () => SuiteDefinitionConfiguration, 4, 4, 128 | 0]
);
export var GetSuiteRunReportRequest = struct(
  n0,
  _GSRRR,
  0,
  [_sDI, _sRI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetSuiteRunReportResponse = struct(n0, _GSRRRe, 0, [_qRDU], [0]);
export var GetSuiteRunRequest = struct(
  n0,
  _GSRR,
  0,
  [_sDI, _sRI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetSuiteRunResponse = struct(
  n0,
  _GSRRe,
  0,
  [_sDI, _sDV, _sRI, _sRA, _sRC, _tR, _sT, _eT, _s, _eR, _t],
  [0, 0, 0, 0, () => SuiteRunConfiguration, () => TestResult, 4, 4, 0, 0, 128 | 0]
);
export var GroupResult = struct(n0, _GR, 0, [_gI, _gN, _te], [0, 0, () => TestCaseRuns]);
export var ListSuiteDefinitionsRequest = struct(
  n0,
  _LSDR,
  0,
  [_mR, _nT],
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
export var ListSuiteDefinitionsResponse = struct(
  n0,
  _LSDRi,
  0,
  [_sDIL, _nT],
  [() => SuiteDefinitionInformationList, 0]
);
export var ListSuiteRunsRequest = struct(
  n0,
  _LSRR,
  0,
  [_sDI, _sDV, _mR, _nT],
  [
    [
      0,
      {
        [_hQ]: _sDI,
      },
    ],
    [
      0,
      {
        [_hQ]: _sDV,
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
  ]
);
export var ListSuiteRunsResponse = struct(n0, _LSRRi, 0, [_sRL, _nT], [() => SuiteRunsList, 0]);
export var StartSuiteRunRequest = struct(
  n0,
  _SSRR,
  0,
  [_sDI, _sDV, _sRC, _t],
  [[0, 1], 0, () => SuiteRunConfiguration, 128 | 0]
);
export var StartSuiteRunResponse = struct(n0, _SSRRt, 0, [_sRI, _sRA, _cA, _en], [0, 0, 4, 0]);
export var StopSuiteRunRequest = struct(
  n0,
  _SSRRto,
  0,
  [_sDI, _sRI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var StopSuiteRunResponse = struct(n0, _SSRRtop, 0, [], []);
export var SuiteDefinitionConfiguration = struct(
  n0,
  _SDC,
  0,
  [_sDN, _d, _iFQ, _iLDT, _rG, _dPRA, _p],
  [0, () => DeviceUnderTestList, 2, 2, 0, 0, 0]
);
export var SuiteDefinitionInformation = struct(
  n0,
  _SDI,
  0,
  [_sDI, _sDN, _dD, _iFQ, _iLDT, _p, _cA],
  [0, 0, () => DeviceUnderTestList, 2, 2, 0, 4]
);
export var SuiteRunConfiguration = struct(n0, _SRC, 0, [_pD, _sTL, _pR], [() => DeviceUnderTest, 64 | 0, 2]);
export var SuiteRunInformation = struct(
  n0,
  _SRI,
  0,
  [_sDI, _sDV, _sDN, _sRI, _cA, _sA, _eA, _s, _pa, _f],
  [0, 0, 0, 0, 4, 4, 4, 0, 1, 1]
);
export var TestCaseRun = struct(
  n0,
  _TCR,
  0,
  [_tCRI, _tCDI, _tCDN, _s, _sT, _eT, _lU, _w, _fa, _tS],
  [0, 0, 0, 0, 4, 4, 0, 0, 0, () => TestCaseScenariosList]
);
export var TestCaseScenario = struct(n0, _TCS, 0, [_tCSI, _tCST, _s, _fa, _sM], [0, 0, 0, 0, 0]);
export var TestResult = struct(n0, _TR, 0, [_g], [() => GroupResultList]);
export var UpdateSuiteDefinitionRequest = struct(
  n0,
  _USDR,
  0,
  [_sDI, _sDC],
  [[0, 1], () => SuiteDefinitionConfiguration]
);
export var UpdateSuiteDefinitionResponse = struct(
  n0,
  _USDRp,
  0,
  [_sDI, _sDA, _sDN, _sDV, _cA, _lUA],
  [0, 0, 0, 0, 4, 4]
);
export var DeviceUnderTestList = list(n0, _DUTL, 0, () => DeviceUnderTest);
export var GroupResultList = list(n0, _GRL, 0, () => GroupResult);
export var SelectedTestList = 64 | 0;

export var SuiteDefinitionInformationList = list(n0, _SDIL, 0, () => SuiteDefinitionInformation);
export var SuiteRunsList = list(n0, _SRL, 0, () => SuiteRunInformation);
export var TestCaseRuns = list(n0, _TCRe, 0, () => TestCaseRun);
export var TestCaseScenariosList = list(n0, _TCSL, 0, () => TestCaseScenario);
export var CreateSuiteDefinition = op(
  n0,
  _CSD,
  {
    [_h]: ["POST", "/suiteDefinitions", 200],
  },
  () => CreateSuiteDefinitionRequest,
  () => CreateSuiteDefinitionResponse
);
export var DeleteSuiteDefinition = op(
  n0,
  _DSD,
  {
    [_h]: ["DELETE", "/suiteDefinitions/{suiteDefinitionId}", 200],
  },
  () => DeleteSuiteDefinitionRequest,
  () => DeleteSuiteDefinitionResponse
);
export var GetSuiteDefinition = op(
  n0,
  _GSD,
  {
    [_h]: ["GET", "/suiteDefinitions/{suiteDefinitionId}", 200],
  },
  () => GetSuiteDefinitionRequest,
  () => GetSuiteDefinitionResponse
);
export var GetSuiteRun = op(
  n0,
  _GSR,
  {
    [_h]: ["GET", "/suiteDefinitions/{suiteDefinitionId}/suiteRuns/{suiteRunId}", 200],
  },
  () => GetSuiteRunRequest,
  () => GetSuiteRunResponse
);
export var GetSuiteRunReport = op(
  n0,
  _GSRRet,
  {
    [_h]: ["GET", "/suiteDefinitions/{suiteDefinitionId}/suiteRuns/{suiteRunId}/report", 200],
  },
  () => GetSuiteRunReportRequest,
  () => GetSuiteRunReportResponse
);
export var ListSuiteDefinitions = op(
  n0,
  _LSD,
  {
    [_h]: ["GET", "/suiteDefinitions", 200],
  },
  () => ListSuiteDefinitionsRequest,
  () => ListSuiteDefinitionsResponse
);
export var ListSuiteRuns = op(
  n0,
  _LSR,
  {
    [_h]: ["GET", "/suiteRuns", 200],
  },
  () => ListSuiteRunsRequest,
  () => ListSuiteRunsResponse
);
export var StartSuiteRun = op(
  n0,
  _SSR,
  {
    [_h]: ["POST", "/suiteDefinitions/{suiteDefinitionId}/suiteRuns", 200],
  },
  () => StartSuiteRunRequest,
  () => StartSuiteRunResponse
);
export var StopSuiteRun = op(
  n0,
  _SSRt,
  {
    [_h]: ["POST", "/suiteDefinitions/{suiteDefinitionId}/suiteRuns/{suiteRunId}/stop", 200],
  },
  () => StopSuiteRunRequest,
  () => StopSuiteRunResponse
);
export var UpdateSuiteDefinition = op(
  n0,
  _USD,
  {
    [_h]: ["PATCH", "/suiteDefinitions/{suiteDefinitionId}", 200],
  },
  () => UpdateSuiteDefinitionRequest,
  () => UpdateSuiteDefinitionResponse
);
