// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _cTr,
  _h,
  _hQ,
  _LTC,
  _LTCi,
  _LTCR,
  _LTCRi,
  _LTCRis,
  _LTCRist,
  _LTR,
  _LTRR,
  _LTRRi,
  _LTS,
  _LTSR,
  _LTSRi,
  _lUT,
  _lV,
  _mR,
  _n,
  _nT,
  _rET,
  _rST,
  _sR,
  _st,
  _tC,
  _tCA,
  _tCAe,
  _tCe,
  _tCI,
  _tCIe,
  _tCIes,
  _tCIest,
  _TCL,
  _TCS,
  _TCSe,
  _TCSL,
  _tCVe,
  _tI,
  _tR,
  _tRA,
  _tRI,
  _tRIe,
  _TRS,
  _TRSL,
  _tS,
  _tSA,
  _tSI,
  _tSIe,
  _TSL,
  _TSS,
  _tSV,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ListTestCasesRequest = struct(
  n0,
  _LTCR,
  0,
  [_tCIes, _nT, _mR],
  [
    [
      64 | 0,
      {
        [_hQ]: _tCIes,
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
export var ListTestCasesResponse = struct(n0, _LTCRi, 0, [_tC, _nT], [() => TestCaseSummaryList, 0]);
export var ListTestConfigurationsRequest = struct(
  n0,
  _LTCRis,
  0,
  [_tCIest, _nT, _mR],
  [
    [
      64 | 0,
      {
        [_hQ]: _tCIest,
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
export var ListTestConfigurationsResponse = struct(n0, _LTCRist, 0, [_tCe, _nT], [() => TestConfigurationList, 0]);
export var ListTestRunsRequest = struct(
  n0,
  _LTRR,
  0,
  [_tSI, _tRIe, _nT, _mR],
  [
    [
      0,
      {
        [_hQ]: _tSI,
      },
    ],
    [
      64 | 0,
      {
        [_hQ]: _tI,
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
export var ListTestRunsResponse = struct(n0, _LTRRi, 0, [_tR, _nT], [() => TestRunSummaryList, 0]);
export var ListTestSuitesRequest = struct(
  n0,
  _LTSR,
  0,
  [_tSIe, _nT, _mR],
  [
    [
      64 | 0,
      {
        [_hQ]: _tSIe,
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
export var ListTestSuitesResponse = struct(n0, _LTSRi, 0, [_tS, _nT], [() => TestSuiteList, 0]);
export var TestCaseSummary = struct(n0, _TCS, 0, [_tCI, _tCA, _n, _sR, _lV, _st, _cTr, _lUT], [0, 0, 0, 0, 1, 0, 4, 4]);
export var TestConfigurationSummary = struct(
  n0,
  _TCSe,
  0,
  [_tCIe, _n, _sR, _lV, _tCAe, _st, _cTr, _lUT],
  [0, 0, 0, 1, 0, 0, 4, 4]
);
export var TestRunSummary = struct(
  n0,
  _TRS,
  0,
  [_tRI, _tRA, _tSI, _tSV, _tCIe, _tCVe, _st, _sR, _rST, _rET],
  [0, 0, 0, 1, 0, 1, 0, 0, 4, 4]
);
export var TestSuiteSummary = struct(
  n0,
  _TSS,
  0,
  [_tSI, _n, _sR, _lV, _tSA, _st, _cTr, _lUT],
  [0, 0, 0, 1, 0, 0, 4, 4]
);
export var TestCaseIdList = 64 | 0;

export var TestCaseSummaryList = list(n0, _TCSL, 0, () => TestCaseSummary);
export var TestConfigurationIdList = 64 | 0;

export var TestConfigurationList = list(n0, _TCL, 0, () => TestConfigurationSummary);
export var TestRunIdList = 64 | 0;

export var TestRunSummaryList = list(n0, _TRSL, 0, () => TestRunSummary);
export var TestSuiteIdList = 64 | 0;

export var TestSuiteList = list(n0, _TSL, 0, () => TestSuiteSummary);
export var ListTestCases = op(
  n0,
  _LTC,
  {
    [_h]: ["GET", "/testcases", 200],
  },
  () => ListTestCasesRequest,
  () => ListTestCasesResponse
);
export var ListTestConfigurations = op(
  n0,
  _LTCi,
  {
    [_h]: ["GET", "/testconfigurations", 200],
  },
  () => ListTestConfigurationsRequest,
  () => ListTestConfigurationsResponse
);
export var ListTestRuns = op(
  n0,
  _LTR,
  {
    [_h]: ["GET", "/testruns", 200],
  },
  () => ListTestRunsRequest,
  () => ListTestRunsResponse
);
export var ListTestSuites = op(
  n0,
  _LTS,
  {
    [_h]: ["GET", "/testsuites", 200],
  },
  () => ListTestSuitesRequest,
  () => ListTestSuitesResponse
);
