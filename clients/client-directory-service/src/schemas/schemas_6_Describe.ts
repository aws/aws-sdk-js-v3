// smithy-typescript generated code
import { error, list, op, sim, struct } from "@smithy/core/schema";

import {
  DirectoryAlreadyInRegionException as __DirectoryAlreadyInRegionException,
  RegionLimitExceededException as __RegionLimitExceededException,
} from "../models/index";
import {
  _A,
  _AC,
  _AI,
  _AR,
  _ARdd,
  _ARR,
  _ARRd,
  _ARs,
  _AV,
  _AVs,
  _C,
  _c,
  _CDI,
  _CDo,
  _CDR,
  _CDr,
  _CDRo,
  _CDRr,
  _CDRre,
  _CMAD,
  _CMADR,
  _CMADRr,
  _CS,
  _CUN,
  _D,
  _DADAe,
  _DADARes,
  _DADAResc,
  _DAIRE,
  _DCI,
  _DCS,
  _DI,
  _DN,
  _DVS,
  _E,
  _e,
  _II,
  _LUDT,
  _M,
  _Na,
  _P,
  _RI,
  _RLEE,
  _RN,
  _RT,
  _S,
  _SADA,
  _SADAR,
  _SADARt,
  _SC,
  _SGI,
  _SI,
  _Si,
  _SMII,
  _SN,
  _SR,
  _ST,
  _T,
  _V,
  _Va,
  _VI,
  _VPCS,
  _VS,
  n0,
} from "./schemas_0";
import { Tags } from "./schemas_11_Create";
import { ConnectPassword } from "./schemas_15_Sso";

/* eslint no-var: 0 */

export var Password = sim(n0, _P, 0, 8);
export var AddRegionRequest = struct(n0, _ARR, 0, [_DI, _RN, _VPCS], [0, 0, () => DirectoryVpcSettings]);
export var AddRegionResult = struct(n0, _ARRd, 0, [], []);
export var Assessment = struct(
  n0,
  _A,
  0,
  [_AI, _DI, _DN, _ST, _LUDT, _S, _SC, _SR, _CDI, _VI, _SI, _SGI, _SMII, _RT, _V],
  [0, 0, 0, 4, 4, 0, 0, 0, 64 | 0, 0, 64 | 0, 64 | 0, 64 | 0, 0, 0]
);
export var AssessmentConfiguration = struct(
  n0,
  _AC,
  0,
  [_CDI, _DN, _VS, _II, _SGI],
  [64 | 0, 0, () => DirectoryVpcSettings, 64 | 0, 64 | 0]
);
export var AssessmentReport = struct(n0, _AR, 0, [_DCI, _Va], [0, () => AssessmentValidations]);
export var AssessmentValidation = struct(n0, _AV, 0, [_C, _Na, _S, _SC, _SR, _ST, _LUDT], [0, 0, 0, 0, 0, 4, 4]);
export var ConnectDirectoryRequest = struct(
  n0,
  _CDR,
  0,
  [_Na, _SN, _P, _D, _Si, _CS, _T],
  [0, 0, [() => ConnectPassword, 0], 0, 0, () => DirectoryConnectSettings, () => Tags]
);
export var ConnectDirectoryResult = struct(n0, _CDRo, 0, [_DI], [0]);
export var CreateDirectoryRequest = struct(
  n0,
  _CDRr,
  0,
  [_Na, _SN, _P, _D, _Si, _VS, _T],
  [0, 0, [() => Password, 0], 0, 0, () => DirectoryVpcSettings, () => Tags]
);
export var CreateDirectoryResult = struct(n0, _CDRre, 0, [_DI], [0]);
export var CreateMicrosoftADRequest = struct(
  n0,
  _CMADR,
  0,
  [_Na, _SN, _P, _D, _VS, _E, _T],
  [0, 0, [() => Password, 0], 0, () => DirectoryVpcSettings, 0, () => Tags]
);
export var CreateMicrosoftADResult = struct(n0, _CMADRr, 0, [_DI], [0]);
export var DescribeADAssessmentRequest = struct(n0, _DADARes, 0, [_AI], [0]);
export var DescribeADAssessmentResult = struct(
  n0,
  _DADAResc,
  0,
  [_A, _ARs],
  [() => Assessment, () => AssessmentReports]
);
export var DirectoryAlreadyInRegionException = error(
  n0,
  _DAIRE,
  {
    [_e]: _c,
  },
  [_M, _RI],
  [0, 0],

  __DirectoryAlreadyInRegionException
);
export var DirectoryConnectSettings = struct(n0, _DCS, 0, [_VI, _SI, _CDI, _CUN], [0, 64 | 0, 64 | 0, 0]);
export var DirectoryVpcSettings = struct(n0, _DVS, 0, [_VI, _SI], [0, 64 | 0]);
export var RegionLimitExceededException = error(
  n0,
  _RLEE,
  {
    [_e]: _c,
  },
  [_M, _RI],
  [0, 0],

  __RegionLimitExceededException
);
export var StartADAssessmentRequest = struct(n0, _SADAR, 0, [_AC, _DI], [() => AssessmentConfiguration, 0]);
export var StartADAssessmentResult = struct(n0, _SADARt, 0, [_AI], [0]);
export var AssessmentReports = list(n0, _ARs, 0, () => AssessmentReport);
export var AssessmentValidations = list(n0, _AVs, 0, () => AssessmentValidation);
export var SecurityGroupIds = 64 | 0;

export var SubnetIds = 64 | 0;

export var AddRegion = op(
  n0,
  _ARdd,
  0,
  () => AddRegionRequest,
  () => AddRegionResult
);
export var ConnectDirectory = op(
  n0,
  _CDo,
  0,
  () => ConnectDirectoryRequest,
  () => ConnectDirectoryResult
);
export var CreateDirectory = op(
  n0,
  _CDr,
  0,
  () => CreateDirectoryRequest,
  () => CreateDirectoryResult
);
export var CreateMicrosoftAD = op(
  n0,
  _CMAD,
  0,
  () => CreateMicrosoftADRequest,
  () => CreateMicrosoftADResult
);
export var DescribeADAssessment = op(
  n0,
  _DADAe,
  0,
  () => DescribeADAssessmentRequest,
  () => DescribeADAssessmentResult
);
export var StartADAssessment = op(
  n0,
  _SADA,
  0,
  () => StartADAssessmentRequest,
  () => StartADAssessmentResult
);
