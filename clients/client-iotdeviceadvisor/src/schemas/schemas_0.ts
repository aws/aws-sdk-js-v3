const _CE = "ConflictException";
const _CSD = "CreateSuiteDefinition";
const _CSDR = "CreateSuiteDefinitionRequest";
const _CSDRr = "CreateSuiteDefinitionResponse";
const _DSD = "DeleteSuiteDefinition";
const _DSDR = "DeleteSuiteDefinitionRequest";
const _DSDRe = "DeleteSuiteDefinitionResponse";
const _DUT = "DeviceUnderTest";
const _DUTL = "DeviceUnderTestList";
const _GE = "GetEndpoint";
const _GER = "GetEndpointRequest";
const _GERe = "GetEndpointResponse";
const _GR = "GroupResult";
const _GRL = "GroupResultList";
const _GSD = "GetSuiteDefinition";
const _GSDR = "GetSuiteDefinitionRequest";
const _GSDRe = "GetSuiteDefinitionResponse";
const _GSR = "GetSuiteRun";
const _GSRR = "GetSuiteRunRequest";
const _GSRRR = "GetSuiteRunReportRequest";
const _GSRRRe = "GetSuiteRunReportResponse";
const _GSRRe = "GetSuiteRunResponse";
const _GSRRet = "GetSuiteRunReport";
const _ISE = "InternalServerException";
const _LSD = "ListSuiteDefinitions";
const _LSDR = "ListSuiteDefinitionsRequest";
const _LSDRi = "ListSuiteDefinitionsResponse";
const _LSR = "ListSuiteRuns";
const _LSRR = "ListSuiteRunsRequest";
const _LSRRi = "ListSuiteRunsResponse";
const _LTFR = "ListTagsForResource";
const _LTFRR = "ListTagsForResourceRequest";
const _LTFRRi = "ListTagsForResourceResponse";
const _RNFE = "ResourceNotFoundException";
const _SDC = "SuiteDefinitionConfiguration";
const _SDI = "SuiteDefinitionInformation";
const _SDIL = "SuiteDefinitionInformationList";
const _SRC = "SuiteRunConfiguration";
const _SRI = "SuiteRunInformation";
const _SRL = "SuiteRunsList";
const _SSR = "StartSuiteRun";
const _SSRR = "StartSuiteRunRequest";
const _SSRRt = "StartSuiteRunResponse";
const _SSRRto = "StopSuiteRunRequest";
const _SSRRtop = "StopSuiteRunResponse";
const _SSRt = "StopSuiteRun";
const _TCR = "TestCaseRun";
const _TCRe = "TestCaseRuns";
const _TCS = "TestCaseScenario";
const _TCSL = "TestCaseScenariosList";
const _TR = "TestResult";
const _TRR = "TagResourceRequest";
const _TRRa = "TagResourceResponse";
const _TRa = "TagResource";
const _UR = "UntagResource";
const _URR = "UntagResourceRequest";
const _URRn = "UntagResourceResponse";
const _USD = "UpdateSuiteDefinition";
const _USDR = "UpdateSuiteDefinitionRequest";
const _USDRp = "UpdateSuiteDefinitionResponse";
const _VE = "ValidationException";
const _aM = "authenticationMethod";
const _c = "client";
const _cA = "createdAt";
const _cAe = "certificateArn";
const _cT = "clientToken";
const _d = "devices";
const _dD = "defaultDevices";
const _dPRA = "devicePermissionRoleArn";
const _dRA = "deviceRoleArn";
const _e = "error";
const _eA = "endAt";
const _eR = "errorReason";
const _eT = "endTime";
const _en = "endpoint";
const _f = "failed";
const _fa = "failure";
const _g = "groups";
const _gI = "groupId";
const _gN = "groupName";
const _h = "http";
const _hE = "httpError";
const _hQ = "httpQuery";
const _iFQ = "intendedForQualification";
const _iLDT = "isLongDurationTest";
const _lMA = "lastModifiedAt";
const _lU = "logUrl";
const _lUA = "lastUpdatedAt";
const _lV = "latestVersion";
const _m = "message";
const _mR = "maxResults";
const _nT = "nextToken";
const _p = "protocol";
const _pD = "primaryDevice";
const _pR = "parallelRun";
const _pa = "passed";
const _qRDU = "qualificationReportDownloadUrl";
const _rA = "resourceArn";
const _rG = "rootGroup";
const _s = "status";
const _sA = "startedAt";
const _sDA = "suiteDefinitionArn";
const _sDC = "suiteDefinitionConfiguration";
const _sDI = "suiteDefinitionId";
const _sDIL = "suiteDefinitionInformationList";
const _sDN = "suiteDefinitionName";
const _sDV = "suiteDefinitionVersion";
const _sM = "systemMessage";
const _sRA = "suiteRunArn";
const _sRC = "suiteRunConfiguration";
const _sRI = "suiteRunId";
const _sRL = "suiteRunsList";
const _sT = "startTime";
const _sTL = "selectedTestList";
const _se = "server";
const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.iotdeviceadvisor";
const _t = "tags";
const _tA = "thingArn";
const _tCDI = "testCaseDefinitionId";
const _tCDN = "testCaseDefinitionName";
const _tCRI = "testCaseRunId";
const _tCSI = "testCaseScenarioId";
const _tCST = "testCaseScenarioType";
const _tK = "tagKeys";
const _tR = "testResult";
const _tS = "testScenarios";
const _te = "tests";
const _w = "warnings";
const n0 = "com.amazonaws.iotdeviceadvisor";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import {
  StaticErrorSchema,
  StaticListSchema,
  StaticMapSchema,
  StaticOperationSchema,
  StaticStructureSchema,
} from "@smithy/types";

import {
  ConflictException as __ConflictException,
  InternalServerException as __InternalServerException,
  ResourceNotFoundException as __ResourceNotFoundException,
  ValidationException as __ValidationException,
} from "../models/errors";
import { IotDeviceAdvisorServiceException as __IotDeviceAdvisorServiceException } from "../models/IotDeviceAdvisorServiceException";

/* eslint no-var: 0 */

export var ConflictException: StaticErrorSchema = [
  -3,
  n0,
  _CE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(ConflictException, __ConflictException);

export var CreateSuiteDefinitionRequest: StaticStructureSchema = [
  3,
  n0,
  _CSDR,
  0,
  [_sDC, _t, _cT],
  [() => SuiteDefinitionConfiguration, 128 | 0, [0, 4]],
];
export var CreateSuiteDefinitionResponse: StaticStructureSchema = [
  3,
  n0,
  _CSDRr,
  0,
  [_sDI, _sDA, _sDN, _cA],
  [0, 0, 0, 4],
];
export var DeleteSuiteDefinitionRequest: StaticStructureSchema = [3, n0, _DSDR, 0, [_sDI], [[0, 1]]];
export var DeleteSuiteDefinitionResponse: StaticStructureSchema = [3, n0, _DSDRe, 0, [], []];
export var DeviceUnderTest: StaticStructureSchema = [3, n0, _DUT, 0, [_tA, _cAe, _dRA], [0, 0, 0]];
export var GetEndpointRequest: StaticStructureSchema = [
  3,
  n0,
  _GER,
  0,
  [_tA, _cAe, _dRA, _aM],
  [
    [
      0,
      {
        [_hQ]: _tA,
      },
    ],
    [
      0,
      {
        [_hQ]: _cAe,
      },
    ],
    [
      0,
      {
        [_hQ]: _dRA,
      },
    ],
    [
      0,
      {
        [_hQ]: _aM,
      },
    ],
  ],
];
export var GetEndpointResponse: StaticStructureSchema = [3, n0, _GERe, 0, [_en], [0]];
export var GetSuiteDefinitionRequest: StaticStructureSchema = [
  3,
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
  ],
];
export var GetSuiteDefinitionResponse: StaticStructureSchema = [
  3,
  n0,
  _GSDRe,
  0,
  [_sDI, _sDA, _sDV, _lV, _sDC, _cA, _lMA, _t],
  [0, 0, 0, 0, () => SuiteDefinitionConfiguration, 4, 4, 128 | 0],
];
export var GetSuiteRunReportRequest: StaticStructureSchema = [
  3,
  n0,
  _GSRRR,
  0,
  [_sDI, _sRI],
  [
    [0, 1],
    [0, 1],
  ],
];
export var GetSuiteRunReportResponse: StaticStructureSchema = [3, n0, _GSRRRe, 0, [_qRDU], [0]];
export var GetSuiteRunRequest: StaticStructureSchema = [
  3,
  n0,
  _GSRR,
  0,
  [_sDI, _sRI],
  [
    [0, 1],
    [0, 1],
  ],
];
export var GetSuiteRunResponse: StaticStructureSchema = [
  3,
  n0,
  _GSRRe,
  0,
  [_sDI, _sDV, _sRI, _sRA, _sRC, _tR, _sT, _eT, _s, _eR, _t],
  [0, 0, 0, 0, () => SuiteRunConfiguration, () => TestResult, 4, 4, 0, 0, 128 | 0],
];
export var GroupResult: StaticStructureSchema = [3, n0, _GR, 0, [_gI, _gN, _te], [0, 0, () => TestCaseRuns]];
export var InternalServerException: StaticErrorSchema = [
  -3,
  n0,
  _ISE,
  {
    [_e]: _se,
    [_hE]: 500,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(InternalServerException, __InternalServerException);

export var ListSuiteDefinitionsRequest: StaticStructureSchema = [
  3,
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
  ],
];
export var ListSuiteDefinitionsResponse: StaticStructureSchema = [
  3,
  n0,
  _LSDRi,
  0,
  [_sDIL, _nT],
  [() => SuiteDefinitionInformationList, 0],
];
export var ListSuiteRunsRequest: StaticStructureSchema = [
  3,
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
  ],
];
export var ListSuiteRunsResponse: StaticStructureSchema = [3, n0, _LSRRi, 0, [_sRL, _nT], [() => SuiteRunsList, 0]];
export var ListTagsForResourceRequest: StaticStructureSchema = [3, n0, _LTFRR, 0, [_rA], [[0, 1]]];
export var ListTagsForResourceResponse: StaticStructureSchema = [3, n0, _LTFRRi, 0, [_t], [128 | 0]];
export var ResourceNotFoundException: StaticErrorSchema = [
  -3,
  n0,
  _RNFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(ResourceNotFoundException, __ResourceNotFoundException);

export var StartSuiteRunRequest: StaticStructureSchema = [
  3,
  n0,
  _SSRR,
  0,
  [_sDI, _sDV, _sRC, _t],
  [[0, 1], 0, () => SuiteRunConfiguration, 128 | 0],
];
export var StartSuiteRunResponse: StaticStructureSchema = [3, n0, _SSRRt, 0, [_sRI, _sRA, _cA, _en], [0, 0, 4, 0]];
export var StopSuiteRunRequest: StaticStructureSchema = [
  3,
  n0,
  _SSRRto,
  0,
  [_sDI, _sRI],
  [
    [0, 1],
    [0, 1],
  ],
];
export var StopSuiteRunResponse: StaticStructureSchema = [3, n0, _SSRRtop, 0, [], []];
export var SuiteDefinitionConfiguration: StaticStructureSchema = [
  3,
  n0,
  _SDC,
  0,
  [_sDN, _d, _iFQ, _iLDT, _rG, _dPRA, _p],
  [0, () => DeviceUnderTestList, 2, 2, 0, 0, 0],
];
export var SuiteDefinitionInformation: StaticStructureSchema = [
  3,
  n0,
  _SDI,
  0,
  [_sDI, _sDN, _dD, _iFQ, _iLDT, _p, _cA],
  [0, 0, () => DeviceUnderTestList, 2, 2, 0, 4],
];
export var SuiteRunConfiguration: StaticStructureSchema = [
  3,
  n0,
  _SRC,
  0,
  [_pD, _sTL, _pR],
  [() => DeviceUnderTest, 64 | 0, 2],
];
export var SuiteRunInformation: StaticStructureSchema = [
  3,
  n0,
  _SRI,
  0,
  [_sDI, _sDV, _sDN, _sRI, _cA, _sA, _eA, _s, _pa, _f],
  [0, 0, 0, 0, 4, 4, 4, 0, 1, 1],
];
export var TagResourceRequest: StaticStructureSchema = [3, n0, _TRR, 0, [_rA, _t], [[0, 1], 128 | 0]];
export var TagResourceResponse: StaticStructureSchema = [3, n0, _TRRa, 0, [], []];
export var TestCaseRun: StaticStructureSchema = [
  3,
  n0,
  _TCR,
  0,
  [_tCRI, _tCDI, _tCDN, _s, _sT, _eT, _lU, _w, _fa, _tS],
  [0, 0, 0, 0, 4, 4, 0, 0, 0, () => TestCaseScenariosList],
];
export var TestCaseScenario: StaticStructureSchema = [3, n0, _TCS, 0, [_tCSI, _tCST, _s, _fa, _sM], [0, 0, 0, 0, 0]];
export var TestResult: StaticStructureSchema = [3, n0, _TR, 0, [_g], [() => GroupResultList]];
export var UntagResourceRequest: StaticStructureSchema = [
  3,
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
  ],
];
export var UntagResourceResponse: StaticStructureSchema = [3, n0, _URRn, 0, [], []];
export var UpdateSuiteDefinitionRequest: StaticStructureSchema = [
  3,
  n0,
  _USDR,
  0,
  [_sDI, _sDC],
  [[0, 1], () => SuiteDefinitionConfiguration],
];
export var UpdateSuiteDefinitionResponse: StaticStructureSchema = [
  3,
  n0,
  _USDRp,
  0,
  [_sDI, _sDA, _sDN, _sDV, _cA, _lUA],
  [0, 0, 0, 0, 4, 4],
];
export var ValidationException: StaticErrorSchema = [
  -3,
  n0,
  _VE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(ValidationException, __ValidationException);

export var __Unit = "unit" as const;

export var IotDeviceAdvisorServiceException: StaticErrorSchema = [
  -3,
  _sm,
  "IotDeviceAdvisorServiceException",
  0,
  [],
  [],
];
TypeRegistry.for(_sm).registerError(IotDeviceAdvisorServiceException, __IotDeviceAdvisorServiceException);

export var DeviceUnderTestList: StaticListSchema = [1, n0, _DUTL, 0, () => DeviceUnderTest];
export var GroupResultList: StaticListSchema = [1, n0, _GRL, 0, () => GroupResult];
export var SelectedTestList = 64 | 0;

export var SuiteDefinitionInformationList: StaticListSchema = [1, n0, _SDIL, 0, () => SuiteDefinitionInformation];
export var SuiteRunsList: StaticListSchema = [1, n0, _SRL, 0, () => SuiteRunInformation];
export var TagKeyList = 64 | 0;

export var TestCaseRuns: StaticListSchema = [1, n0, _TCRe, 0, () => TestCaseRun];
export var TestCaseScenariosList: StaticListSchema = [1, n0, _TCSL, 0, () => TestCaseScenario];
export var TagMap = 128 | 0;

export var CreateSuiteDefinition: StaticOperationSchema = [
  9,
  n0,
  _CSD,
  {
    [_h]: ["POST", "/suiteDefinitions", 200],
  },
  () => CreateSuiteDefinitionRequest,
  () => CreateSuiteDefinitionResponse,
];
export var DeleteSuiteDefinition: StaticOperationSchema = [
  9,
  n0,
  _DSD,
  {
    [_h]: ["DELETE", "/suiteDefinitions/{suiteDefinitionId}", 200],
  },
  () => DeleteSuiteDefinitionRequest,
  () => DeleteSuiteDefinitionResponse,
];
export var GetEndpoint: StaticOperationSchema = [
  9,
  n0,
  _GE,
  {
    [_h]: ["GET", "/endpoint", 200],
  },
  () => GetEndpointRequest,
  () => GetEndpointResponse,
];
export var GetSuiteDefinition: StaticOperationSchema = [
  9,
  n0,
  _GSD,
  {
    [_h]: ["GET", "/suiteDefinitions/{suiteDefinitionId}", 200],
  },
  () => GetSuiteDefinitionRequest,
  () => GetSuiteDefinitionResponse,
];
export var GetSuiteRun: StaticOperationSchema = [
  9,
  n0,
  _GSR,
  {
    [_h]: ["GET", "/suiteDefinitions/{suiteDefinitionId}/suiteRuns/{suiteRunId}", 200],
  },
  () => GetSuiteRunRequest,
  () => GetSuiteRunResponse,
];
export var GetSuiteRunReport: StaticOperationSchema = [
  9,
  n0,
  _GSRRet,
  {
    [_h]: ["GET", "/suiteDefinitions/{suiteDefinitionId}/suiteRuns/{suiteRunId}/report", 200],
  },
  () => GetSuiteRunReportRequest,
  () => GetSuiteRunReportResponse,
];
export var ListSuiteDefinitions: StaticOperationSchema = [
  9,
  n0,
  _LSD,
  {
    [_h]: ["GET", "/suiteDefinitions", 200],
  },
  () => ListSuiteDefinitionsRequest,
  () => ListSuiteDefinitionsResponse,
];
export var ListSuiteRuns: StaticOperationSchema = [
  9,
  n0,
  _LSR,
  {
    [_h]: ["GET", "/suiteRuns", 200],
  },
  () => ListSuiteRunsRequest,
  () => ListSuiteRunsResponse,
];
export var ListTagsForResource: StaticOperationSchema = [
  9,
  n0,
  _LTFR,
  {
    [_h]: ["GET", "/tags/{resourceArn}", 200],
  },
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse,
];
export var StartSuiteRun: StaticOperationSchema = [
  9,
  n0,
  _SSR,
  {
    [_h]: ["POST", "/suiteDefinitions/{suiteDefinitionId}/suiteRuns", 200],
  },
  () => StartSuiteRunRequest,
  () => StartSuiteRunResponse,
];
export var StopSuiteRun: StaticOperationSchema = [
  9,
  n0,
  _SSRt,
  {
    [_h]: ["POST", "/suiteDefinitions/{suiteDefinitionId}/suiteRuns/{suiteRunId}/stop", 200],
  },
  () => StopSuiteRunRequest,
  () => StopSuiteRunResponse,
];
export var TagResource: StaticOperationSchema = [
  9,
  n0,
  _TRa,
  {
    [_h]: ["POST", "/tags/{resourceArn}", 200],
  },
  () => TagResourceRequest,
  () => TagResourceResponse,
];
export var UntagResource: StaticOperationSchema = [
  9,
  n0,
  _UR,
  {
    [_h]: ["DELETE", "/tags/{resourceArn}", 200],
  },
  () => UntagResourceRequest,
  () => UntagResourceResponse,
];
export var UpdateSuiteDefinition: StaticOperationSchema = [
  9,
  n0,
  _USD,
  {
    [_h]: ["PATCH", "/suiteDefinitions/{suiteDefinitionId}", 200],
  },
  () => UpdateSuiteDefinitionRequest,
  () => UpdateSuiteDefinitionResponse,
];
