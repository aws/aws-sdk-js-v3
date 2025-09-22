export const _CE = "ConflictException";
export const _CSD = "CreateSuiteDefinition";
export const _CSDR = "CreateSuiteDefinitionRequest";
export const _CSDRr = "CreateSuiteDefinitionResponse";
export const _DSD = "DeleteSuiteDefinition";
export const _DSDR = "DeleteSuiteDefinitionRequest";
export const _DSDRe = "DeleteSuiteDefinitionResponse";
export const _DUT = "DeviceUnderTest";
export const _DUTL = "DeviceUnderTestList";
export const _GE = "GetEndpoint";
export const _GER = "GetEndpointRequest";
export const _GERe = "GetEndpointResponse";
export const _GR = "GroupResult";
export const _GRL = "GroupResultList";
export const _GSD = "GetSuiteDefinition";
export const _GSDR = "GetSuiteDefinitionRequest";
export const _GSDRe = "GetSuiteDefinitionResponse";
export const _GSR = "GetSuiteRun";
export const _GSRR = "GetSuiteRunRequest";
export const _GSRRR = "GetSuiteRunReportRequest";
export const _GSRRRe = "GetSuiteRunReportResponse";
export const _GSRRe = "GetSuiteRunResponse";
export const _GSRRet = "GetSuiteRunReport";
export const _ISE = "InternalServerException";
export const _LSD = "ListSuiteDefinitions";
export const _LSDR = "ListSuiteDefinitionsRequest";
export const _LSDRi = "ListSuiteDefinitionsResponse";
export const _LSR = "ListSuiteRuns";
export const _LSRR = "ListSuiteRunsRequest";
export const _LSRRi = "ListSuiteRunsResponse";
export const _LTFR = "ListTagsForResource";
export const _LTFRR = "ListTagsForResourceRequest";
export const _LTFRRi = "ListTagsForResourceResponse";
export const _RNFE = "ResourceNotFoundException";
export const _SDC = "SuiteDefinitionConfiguration";
export const _SDI = "SuiteDefinitionInformation";
export const _SDIL = "SuiteDefinitionInformationList";
export const _SRC = "SuiteRunConfiguration";
export const _SRI = "SuiteRunInformation";
export const _SRL = "SuiteRunsList";
export const _SSR = "StartSuiteRun";
export const _SSRR = "StartSuiteRunRequest";
export const _SSRRt = "StartSuiteRunResponse";
export const _SSRRto = "StopSuiteRunRequest";
export const _SSRRtop = "StopSuiteRunResponse";
export const _SSRt = "StopSuiteRun";
export const _TCR = "TestCaseRun";
export const _TCRe = "TestCaseRuns";
export const _TCS = "TestCaseScenario";
export const _TCSL = "TestCaseScenariosList";
export const _TR = "TestResult";
export const _TRR = "TagResourceRequest";
export const _TRRa = "TagResourceResponse";
export const _TRa = "TagResource";
export const _UR = "UntagResource";
export const _URR = "UntagResourceRequest";
export const _URRn = "UntagResourceResponse";
export const _USD = "UpdateSuiteDefinition";
export const _USDR = "UpdateSuiteDefinitionRequest";
export const _USDRp = "UpdateSuiteDefinitionResponse";
export const _VE = "ValidationException";
export const _aM = "authenticationMethod";
export const _c = "client";
export const _cA = "createdAt";
export const _cAe = "certificateArn";
export const _cT = "clientToken";
export const _d = "devices";
export const _dD = "defaultDevices";
export const _dPRA = "devicePermissionRoleArn";
export const _dRA = "deviceRoleArn";
export const _e = "error";
export const _eA = "endAt";
export const _eR = "errorReason";
export const _eT = "endTime";
export const _en = "endpoint";
export const _f = "failed";
export const _fa = "failure";
export const _g = "groups";
export const _gI = "groupId";
export const _gN = "groupName";
export const _h = "http";
export const _hE = "httpError";
export const _hQ = "httpQuery";
export const _iFQ = "intendedForQualification";
export const _iLDT = "isLongDurationTest";
export const _lMA = "lastModifiedAt";
export const _lU = "logUrl";
export const _lUA = "lastUpdatedAt";
export const _lV = "latestVersion";
export const _m = "message";
export const _mR = "maxResults";
export const _nT = "nextToken";
export const _p = "protocol";
export const _pD = "primaryDevice";
export const _pR = "parallelRun";
export const _pa = "passed";
export const _qRDU = "qualificationReportDownloadUrl";
export const _rA = "resourceArn";
export const _rG = "rootGroup";
export const _s = "status";
export const _sA = "startedAt";
export const _sDA = "suiteDefinitionArn";
export const _sDC = "suiteDefinitionConfiguration";
export const _sDI = "suiteDefinitionId";
export const _sDIL = "suiteDefinitionInformationList";
export const _sDN = "suiteDefinitionName";
export const _sDV = "suiteDefinitionVersion";
export const _sM = "systemMessage";
export const _sRA = "suiteRunArn";
export const _sRC = "suiteRunConfiguration";
export const _sRI = "suiteRunId";
export const _sRL = "suiteRunsList";
export const _sT = "startTime";
export const _sTL = "selectedTestList";
export const _se = "server";
export const _t = "tags";
export const _tA = "thingArn";
export const _tCDI = "testCaseDefinitionId";
export const _tCDN = "testCaseDefinitionName";
export const _tCRI = "testCaseRunId";
export const _tCSI = "testCaseScenarioId";
export const _tCST = "testCaseScenarioType";
export const _tK = "tagKeys";
export const _tR = "testResult";
export const _tS = "testScenarios";
export const _te = "tests";
export const _w = "warnings";
export const n0 = "com.amazonaws.iotdeviceadvisor";

// smithy-typescript generated code
import { error } from "@smithy/core/schema";

import {
  InternalServerException as __InternalServerException,
  ValidationException as __ValidationException,
} from "../models/index";
import { IotDeviceAdvisorServiceException as __IotDeviceAdvisorServiceException } from "../models/IotDeviceAdvisorServiceException";

/* eslint no-var: 0 */

export var InternalServerException = error(
  n0,
  _ISE,
  {
    [_e]: _se,
    [_hE]: 500,
  },
  [_m],
  [0],

  __InternalServerException
);
export var ValidationException = error(
  n0,
  _VE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __ValidationException
);
export var IotDeviceAdvisorServiceException = error(
  "smithy.ts.sdk.synthetic.com.amazonaws.iotdeviceadvisor",
  "IotDeviceAdvisorServiceException",
  0,
  [],
  [],
  __IotDeviceAdvisorServiceException
);
