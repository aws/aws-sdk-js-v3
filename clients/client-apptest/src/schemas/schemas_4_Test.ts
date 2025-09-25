// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _aS,
  _bS,
  _cTr,
  _d,
  _GTC,
  _GTCe,
  _GTCR,
  _GTCRe,
  _GTCRet,
  _GTCRete,
  _GTS,
  _GTSR,
  _GTSRe,
  _h,
  _hQ,
  _LTFR,
  _LTFRR,
  _LTFRRi,
  _lUT,
  _lV,
  _n,
  _p,
  _rA,
  _re,
  _s,
  _sR,
  _sS,
  _st,
  _ta,
  _tC,
  _tCA,
  _tCAe,
  _tCI,
  _tCIe,
  _TCLV,
  _TCLVe,
  _tCV,
  _tCVe,
  _tK,
  _TR,
  _TRR,
  _TRRa,
  _tSA,
  _tSI,
  _TSLV,
  _tSV,
  _UR,
  _URR,
  _URRn,
  _v,
  n0,
} from "./schemas_0";
import { ResourceList, ServiceSettings, StepList, TestCases } from "./schemas_3_Test";

/* eslint no-var: 0 */

export var GetTestCaseRequest = struct(
  n0,
  _GTCR,
  0,
  [_tCI, _tCV],
  [
    [0, 1],
    [
      1,
      {
        [_hQ]: _tCV,
      },
    ],
  ]
);
export var GetTestCaseResponse = struct(
  n0,
  _GTCRe,
  0,
  [_tCI, _tCA, _n, _d, _lV, _tCV, _st, _sR, _cTr, _lUT, _s, _ta],
  [0, 0, 0, 0, () => TestCaseLatestVersion, 1, 0, 0, 4, 4, () => StepList, 128 | 0]
);
export var GetTestConfigurationRequest = struct(
  n0,
  _GTCRet,
  0,
  [_tCIe, _tCVe],
  [
    [0, 1],
    [
      1,
      {
        [_hQ]: _tCVe,
      },
    ],
  ]
);
export var GetTestConfigurationResponse = struct(
  n0,
  _GTCRete,
  0,
  [_tCIe, _n, _tCAe, _lV, _tCVe, _st, _sR, _cTr, _lUT, _d, _re, _p, _ta, _sS],
  [
    0,
    0,
    0,
    () => TestConfigurationLatestVersion,
    1,
    0,
    0,
    4,
    4,
    0,
    () => ResourceList,
    128 | 0,
    128 | 0,
    () => ServiceSettings,
  ]
);
export var GetTestSuiteRequest = struct(
  n0,
  _GTSR,
  0,
  [_tSI, _tSV],
  [
    [0, 1],
    [
      1,
      {
        [_hQ]: _tSV,
      },
    ],
  ]
);
export var GetTestSuiteResponse = struct(
  n0,
  _GTSRe,
  0,
  [_tSI, _n, _lV, _tSV, _st, _sR, _tSA, _cTr, _lUT, _d, _bS, _aS, _tC, _ta],
  [0, 0, () => TestSuiteLatestVersion, 1, 0, 0, 0, 4, 4, 0, () => StepList, () => StepList, () => TestCases, 128 | 0]
);
export var ListTagsForResourceRequest = struct(n0, _LTFRR, 0, [_rA], [[0, 1]]);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_ta], [128 | 0]);
export var TagResourceRequest = struct(n0, _TRR, 0, [_rA, _ta], [[0, 1], 128 | 0]);
export var TagResourceResponse = struct(n0, _TRRa, 0, [], []);
export var TestCaseLatestVersion = struct(n0, _TCLV, 0, [_v, _st, _sR], [1, 0, 0]);
export var TestConfigurationLatestVersion = struct(n0, _TCLVe, 0, [_v, _st, _sR], [1, 0, 0]);
export var TestSuiteLatestVersion = struct(n0, _TSLV, 0, [_v, _st, _sR], [1, 0, 0]);
export var UntagResourceRequest = struct(
  n0,
  _URR,
  0,
  [_rA, _tK],
  [
    [0, 1],
    [
      64 | 0,
      {
        [_hQ]: _tK,
      },
    ],
  ]
);
export var UntagResourceResponse = struct(n0, _URRn, 0, [], []);
export var TagKeyList = 64 | 0;

export var TagMap = 128 | 0;

export var GetTestCase = op(
  n0,
  _GTC,
  {
    [_h]: ["GET", "/testcases/{testCaseId}", 200],
  },
  () => GetTestCaseRequest,
  () => GetTestCaseResponse
);
export var GetTestConfiguration = op(
  n0,
  _GTCe,
  {
    [_h]: ["GET", "/testconfigurations/{testConfigurationId}", 200],
  },
  () => GetTestConfigurationRequest,
  () => GetTestConfigurationResponse
);
export var GetTestSuite = op(
  n0,
  _GTS,
  {
    [_h]: ["GET", "/testsuites/{testSuiteId}", 200],
  },
  () => GetTestSuiteRequest,
  () => GetTestSuiteResponse
);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  {
    [_h]: ["GET", "/tags/{resourceArn}", 200],
  },
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse
);
export var TagResource = op(
  n0,
  _TR,
  {
    [_h]: ["POST", "/tags/{resourceArn}", 200],
  },
  () => TagResourceRequest,
  () => TagResourceResponse
);
export var UntagResource = op(
  n0,
  _UR,
  {
    [_h]: ["DELETE", "/tags/{resourceArn}", 200],
  },
  () => UntagResourceRequest,
  () => UntagResourceResponse
);
