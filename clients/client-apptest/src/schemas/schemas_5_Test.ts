// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { ConflictException as __ConflictException } from "../models/index";
import {
  _aS,
  _bS,
  _c,
  _CE,
  _cT,
  _CTC,
  _CTCR,
  _CTCr,
  _CTCRr,
  _CTCRre,
  _CTCRrea,
  _CTS,
  _CTSR,
  _CTSRr,
  _d,
  _DTC,
  _DTCe,
  _DTCR,
  _DTCRe,
  _DTCRel,
  _DTCRele,
  _DTR,
  _DTRR,
  _DTRRe,
  _DTS,
  _DTSR,
  _DTSRe,
  _e,
  _h,
  _hE,
  _m,
  _n,
  _p,
  _re,
  _rI,
  _rT,
  _s,
  _sS,
  _STR,
  _STRR,
  _STRRt,
  _ta,
  _tC,
  _tCI,
  _tCIe,
  _tCV,
  _tCVe,
  _tRI,
  _tRSe,
  _tSI,
  _tSV,
  _UTC,
  _UTCp,
  _UTCR,
  _UTCRp,
  _UTCRpd,
  _UTCRpda,
  _UTS,
  _UTSR,
  _UTSRp,
  n0,
} from "./schemas_0";
import { ResourceList, ServiceSettings, StepList, TestCases } from "./schemas_3_Test";

/* eslint no-var: 0 */

export var ConflictException = error(
  n0,
  _CE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_m, _rI, _rT],
  [0, 0, 0],

  __ConflictException
);
export var CreateTestCaseRequest = struct(
  n0,
  _CTCR,
  0,
  [_n, _d, _s, _cT, _ta],
  [0, 0, () => StepList, [0, 4], 128 | 0]
);
export var CreateTestCaseResponse = struct(n0, _CTCRr, 0, [_tCI, _tCV], [0, 1]);
export var CreateTestConfigurationRequest = struct(
  n0,
  _CTCRre,
  0,
  [_n, _d, _re, _p, _cT, _ta, _sS],
  [0, 0, () => ResourceList, 128 | 0, [0, 4], 128 | 0, () => ServiceSettings]
);
export var CreateTestConfigurationResponse = struct(n0, _CTCRrea, 0, [_tCIe, _tCVe], [0, 1]);
export var CreateTestSuiteRequest = struct(
  n0,
  _CTSR,
  0,
  [_n, _d, _bS, _aS, _tC, _cT, _ta],
  [0, 0, () => StepList, () => StepList, () => TestCases, [0, 4], 128 | 0]
);
export var CreateTestSuiteResponse = struct(n0, _CTSRr, 0, [_tSI, _tSV], [0, 1]);
export var DeleteTestCaseRequest = struct(n0, _DTCR, 0, [_tCI], [[0, 1]]);
export var DeleteTestCaseResponse = struct(n0, _DTCRe, 0, [], []);
export var DeleteTestConfigurationRequest = struct(n0, _DTCRel, 0, [_tCIe], [[0, 1]]);
export var DeleteTestConfigurationResponse = struct(n0, _DTCRele, 0, [], []);
export var DeleteTestRunRequest = struct(n0, _DTRR, 0, [_tRI], [[0, 1]]);
export var DeleteTestRunResponse = struct(n0, _DTRRe, 0, [], []);
export var DeleteTestSuiteRequest = struct(n0, _DTSR, 0, [_tSI], [[0, 1]]);
export var DeleteTestSuiteResponse = struct(n0, _DTSRe, 0, [], []);
export var StartTestRunRequest = struct(n0, _STRR, 0, [_tSI, _tCIe, _cT, _ta], [0, 0, [0, 4], 128 | 0]);
export var StartTestRunResponse = struct(n0, _STRRt, 0, [_tRI, _tRSe], [0, 0]);
export var UpdateTestCaseRequest = struct(n0, _UTCR, 0, [_tCI, _d, _s], [[0, 1], 0, () => StepList]);
export var UpdateTestCaseResponse = struct(n0, _UTCRp, 0, [_tCI, _tCV], [0, 1]);
export var UpdateTestConfigurationRequest = struct(
  n0,
  _UTCRpd,
  0,
  [_tCIe, _d, _re, _p, _sS],
  [[0, 1], 0, () => ResourceList, 128 | 0, () => ServiceSettings]
);
export var UpdateTestConfigurationResponse = struct(n0, _UTCRpda, 0, [_tCIe, _tCVe], [0, 1]);
export var UpdateTestSuiteRequest = struct(
  n0,
  _UTSR,
  0,
  [_tSI, _d, _bS, _aS, _tC],
  [[0, 1], 0, () => StepList, () => StepList, () => TestCases]
);
export var UpdateTestSuiteResponse = struct(n0, _UTSRp, 0, [_tSI, _tSV], [0, 1]);
export var CreateTestCase = op(
  n0,
  _CTC,
  {
    [_h]: ["POST", "/testcase", 201],
  },
  () => CreateTestCaseRequest,
  () => CreateTestCaseResponse
);
export var CreateTestConfiguration = op(
  n0,
  _CTCr,
  {
    [_h]: ["POST", "/testconfiguration", 201],
  },
  () => CreateTestConfigurationRequest,
  () => CreateTestConfigurationResponse
);
export var CreateTestSuite = op(
  n0,
  _CTS,
  {
    [_h]: ["POST", "/testsuite", 201],
  },
  () => CreateTestSuiteRequest,
  () => CreateTestSuiteResponse
);
export var DeleteTestCase = op(
  n0,
  _DTC,
  {
    [_h]: ["DELETE", "/testcases/{testCaseId}", 204],
  },
  () => DeleteTestCaseRequest,
  () => DeleteTestCaseResponse
);
export var DeleteTestConfiguration = op(
  n0,
  _DTCe,
  {
    [_h]: ["DELETE", "/testconfigurations/{testConfigurationId}", 204],
  },
  () => DeleteTestConfigurationRequest,
  () => DeleteTestConfigurationResponse
);
export var DeleteTestRun = op(
  n0,
  _DTR,
  {
    [_h]: ["DELETE", "/testruns/{testRunId}", 204],
  },
  () => DeleteTestRunRequest,
  () => DeleteTestRunResponse
);
export var DeleteTestSuite = op(
  n0,
  _DTS,
  {
    [_h]: ["DELETE", "/testsuites/{testSuiteId}", 204],
  },
  () => DeleteTestSuiteRequest,
  () => DeleteTestSuiteResponse
);
export var StartTestRun = op(
  n0,
  _STR,
  {
    [_h]: ["POST", "/testrun", 200],
  },
  () => StartTestRunRequest,
  () => StartTestRunResponse
);
export var UpdateTestCase = op(
  n0,
  _UTC,
  {
    [_h]: ["PATCH", "/testcases/{testCaseId}", 200],
  },
  () => UpdateTestCaseRequest,
  () => UpdateTestCaseResponse
);
export var UpdateTestConfiguration = op(
  n0,
  _UTCp,
  {
    [_h]: ["PATCH", "/testconfigurations/{testConfigurationId}", 200],
  },
  () => UpdateTestConfigurationRequest,
  () => UpdateTestConfigurationResponse
);
export var UpdateTestSuite = op(
  n0,
  _UTS,
  {
    [_h]: ["PATCH", "/testsuites/{testSuiteId}", 200],
  },
  () => UpdateTestSuiteRequest,
  () => UpdateTestSuiteResponse
);
