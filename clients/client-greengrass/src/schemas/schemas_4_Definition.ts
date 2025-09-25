// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _ACT,
  _AS,
  _BDI,
  _BDM,
  _BDS,
  _CA,
  _CFD,
  _CFDR,
  _CFDRr,
  _CFDV,
  _CFDVR,
  _CFDVRr,
  _CI,
  _CLD,
  _CLDR,
  _CLDRr,
  _CLDV,
  _CLDVR,
  _CLDVRr,
  _Com,
  _CT,
  _DC,
  _Def,
  _E,
  _EA,
  _ED,
  _EM,
  _ET,
  _Ex,
  _Exe,
  _F,
  _FA,
  _FC,
  _FCE,
  _FDC,
  _FDEC,
  _FDI,
  _FDV,
  _FDVI,
  _FEC,
  _FRAC,
  _FRO,
  _Fu,
  _G,
  _GBDS,
  _GBDSR,
  _GBDSRe,
  _GCI,
  _GCIR,
  _GCIRe,
  _GFDV,
  _GFDVR,
  _GFDVRe,
  _GLDV,
  _GLDVR,
  _GLDVRe,
  _h,
  _HA,
  _hH,
  _hQ,
  _I,
  _IIR,
  _IM,
  _IV,
  _jN,
  _L,
  _LDI,
  _LDV,
  _LDVI,
  _Le,
  _Lo,
  _lOCI,
  _lOF,
  _lOL,
  _lORAP,
  _LUT,
  _LV,
  _LVA,
  _M,
  _m,
  _Me,
  _MS,
  _N,
  _NT,
  _Pe,
  _Pi,
  _PN,
  _RAe,
  _RAP,
  _RAPe,
  _RAu,
  _RI,
  _RP,
  _Sp,
  _t,
  _Ti,
  _TN,
  _Ty,
  _U,
  _UCI,
  _UCIR,
  _UCIRp,
  _V,
  _Va,
  _XACT,
  ErrorDetails,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var BulkDeploymentMetrics = struct(n0, _BDM, 0, [_IIR, _RP, _RAe], [1, 1, 1]);
export var ConnectivityInfo = struct(n0, _CI, 0, [_HA, _I, _Me, _PN], [0, 0, 0, 1]);
export var CreateFunctionDefinitionRequest = struct(
  n0,
  _CFDR,
  0,
  [_ACT, _IV, _N, _t],
  [
    [
      0,
      {
        [_hH]: _XACT,
      },
    ],
    () => FunctionDefinitionVersion,
    0,
    128 | 0,
  ]
);
export var CreateFunctionDefinitionResponse = struct(
  n0,
  _CFDRr,
  0,
  [_A, _CT, _I, _LUT, _LV, _LVA, _N],
  [0, 0, 0, 0, 0, 0, 0]
);
export var CreateFunctionDefinitionVersionRequest = struct(
  n0,
  _CFDVR,
  0,
  [_ACT, _DC, _FDI, _F],
  [
    [
      0,
      {
        [_hH]: _XACT,
      },
    ],
    () => FunctionDefaultConfig,
    [0, 1],
    () => __listOfFunction,
  ]
);
export var CreateFunctionDefinitionVersionResponse = struct(n0, _CFDVRr, 0, [_A, _CT, _I, _V], [0, 0, 0, 0]);
export var CreateLoggerDefinitionRequest = struct(
  n0,
  _CLDR,
  0,
  [_ACT, _IV, _N, _t],
  [
    [
      0,
      {
        [_hH]: _XACT,
      },
    ],
    () => LoggerDefinitionVersion,
    0,
    128 | 0,
  ]
);
export var CreateLoggerDefinitionResponse = struct(
  n0,
  _CLDRr,
  0,
  [_A, _CT, _I, _LUT, _LV, _LVA, _N],
  [0, 0, 0, 0, 0, 0, 0]
);
export var CreateLoggerDefinitionVersionRequest = struct(
  n0,
  _CLDVR,
  0,
  [_ACT, _LDI, _L],
  [
    [
      0,
      {
        [_hH]: _XACT,
      },
    ],
    [0, 1],
    () => __listOfLogger,
  ]
);
export var CreateLoggerDefinitionVersionResponse = struct(n0, _CLDVRr, 0, [_A, _CT, _I, _V], [0, 0, 0, 0]);
export var Function = struct(n0, _Fu, 0, [_FA, _FC, _I], [0, () => FunctionConfiguration, 0]);
export var FunctionConfiguration = struct(
  n0,
  _FC,
  0,
  [_ET, _E, _EA, _Ex, _MS, _Pi, _Ti, _FRO],
  [0, () => FunctionConfigurationEnvironment, 0, 0, 1, 2, 1, 0]
);
export var FunctionConfigurationEnvironment = struct(
  n0,
  _FCE,
  0,
  [_AS, _Exe, _RAP, _Va],
  [2, () => FunctionExecutionConfig, () => __listOfResourceAccessPolicy, 128 | 0]
);
export var FunctionDefaultConfig = struct(n0, _FDC, 0, [_Exe], [() => FunctionDefaultExecutionConfig]);
export var FunctionDefaultExecutionConfig = struct(n0, _FDEC, 0, [_IM, _RAu], [0, () => FunctionRunAsConfig]);
export var FunctionDefinitionVersion = struct(
  n0,
  _FDV,
  0,
  [_DC, _F],
  [() => FunctionDefaultConfig, () => __listOfFunction]
);
export var FunctionExecutionConfig = struct(n0, _FEC, 0, [_IM, _RAu], [0, () => FunctionRunAsConfig]);
export var FunctionRunAsConfig = struct(n0, _FRAC, 0, [_G, _U], [1, 1]);
export var GetBulkDeploymentStatusRequest = struct(n0, _GBDSR, 0, [_BDI], [[0, 1]]);
export var GetBulkDeploymentStatusResponse = struct(
  n0,
  _GBDSRe,
  0,
  [_BDM, _BDS, _CA, _ED, _EM, _t],
  [() => BulkDeploymentMetrics, 0, 0, () => ErrorDetails, 0, 128 | 0]
);
export var GetConnectivityInfoRequest = struct(n0, _GCIR, 0, [_TN], [[0, 1]]);
export var GetConnectivityInfoResponse = struct(
  n0,
  _GCIRe,
  0,
  [_CI, _M],
  [
    () => __listOfConnectivityInfo,
    [
      0,
      {
        [_jN]: _m,
      },
    ],
  ]
);
export var GetFunctionDefinitionVersionRequest = struct(
  n0,
  _GFDVR,
  0,
  [_FDI, _FDVI, _NT],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _NT,
      },
    ],
  ]
);
export var GetFunctionDefinitionVersionResponse = struct(
  n0,
  _GFDVRe,
  0,
  [_A, _CT, _Def, _I, _NT, _V],
  [0, 0, () => FunctionDefinitionVersion, 0, 0, 0]
);
export var GetLoggerDefinitionVersionRequest = struct(
  n0,
  _GLDVR,
  0,
  [_LDI, _LDVI, _NT],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _NT,
      },
    ],
  ]
);
export var GetLoggerDefinitionVersionResponse = struct(
  n0,
  _GLDVRe,
  0,
  [_A, _CT, _Def, _I, _V],
  [0, 0, () => LoggerDefinitionVersion, 0, 0]
);
export var Logger = struct(n0, _Lo, 0, [_Com, _I, _Le, _Sp, _Ty], [0, 0, 0, 1, 0]);
export var LoggerDefinitionVersion = struct(n0, _LDV, 0, [_L], [() => __listOfLogger]);
export var ResourceAccessPolicy = struct(n0, _RAPe, 0, [_Pe, _RI], [0, 0]);
export var UpdateConnectivityInfoRequest = struct(n0, _UCIR, 0, [_CI, _TN], [() => __listOfConnectivityInfo, [0, 1]]);
export var UpdateConnectivityInfoResponse = struct(
  n0,
  _UCIRp,
  0,
  [_M, _V],
  [
    [
      0,
      {
        [_jN]: _m,
      },
    ],
    0,
  ]
);
export var __listOfConnectivityInfo = list(n0, _lOCI, 0, () => ConnectivityInfo);
export var __listOfFunction = list(n0, _lOF, 0, () => Function);
export var __listOfLogger = list(n0, _lOL, 0, () => Logger);
export var __listOfResourceAccessPolicy = list(n0, _lORAP, 0, () => ResourceAccessPolicy);
export var CreateFunctionDefinition = op(
  n0,
  _CFD,
  {
    [_h]: ["POST", "/greengrass/definition/functions", 200],
  },
  () => CreateFunctionDefinitionRequest,
  () => CreateFunctionDefinitionResponse
);
export var CreateFunctionDefinitionVersion = op(
  n0,
  _CFDV,
  {
    [_h]: ["POST", "/greengrass/definition/functions/{FunctionDefinitionId}/versions", 200],
  },
  () => CreateFunctionDefinitionVersionRequest,
  () => CreateFunctionDefinitionVersionResponse
);
export var CreateLoggerDefinition = op(
  n0,
  _CLD,
  {
    [_h]: ["POST", "/greengrass/definition/loggers", 200],
  },
  () => CreateLoggerDefinitionRequest,
  () => CreateLoggerDefinitionResponse
);
export var CreateLoggerDefinitionVersion = op(
  n0,
  _CLDV,
  {
    [_h]: ["POST", "/greengrass/definition/loggers/{LoggerDefinitionId}/versions", 200],
  },
  () => CreateLoggerDefinitionVersionRequest,
  () => CreateLoggerDefinitionVersionResponse
);
export var GetBulkDeploymentStatus = op(
  n0,
  _GBDS,
  {
    [_h]: ["GET", "/greengrass/bulk/deployments/{BulkDeploymentId}/status", 200],
  },
  () => GetBulkDeploymentStatusRequest,
  () => GetBulkDeploymentStatusResponse
);
export var GetConnectivityInfo = op(
  n0,
  _GCI,
  {
    [_h]: ["GET", "/greengrass/things/{ThingName}/connectivityInfo", 200],
  },
  () => GetConnectivityInfoRequest,
  () => GetConnectivityInfoResponse
);
export var GetFunctionDefinitionVersion = op(
  n0,
  _GFDV,
  {
    [_h]: [
      "GET",
      "/greengrass/definition/functions/{FunctionDefinitionId}/versions/{FunctionDefinitionVersionId}",
      200,
    ],
  },
  () => GetFunctionDefinitionVersionRequest,
  () => GetFunctionDefinitionVersionResponse
);
export var GetLoggerDefinitionVersion = op(
  n0,
  _GLDV,
  {
    [_h]: ["GET", "/greengrass/definition/loggers/{LoggerDefinitionId}/versions/{LoggerDefinitionVersionId}", 200],
  },
  () => GetLoggerDefinitionVersionRequest,
  () => GetLoggerDefinitionVersionResponse
);
export var UpdateConnectivityInfo = op(
  n0,
  _UCI,
  {
    [_h]: ["PUT", "/greengrass/things/{ThingName}/connectivityInfo", 200],
  },
  () => UpdateConnectivityInfoRequest,
  () => UpdateConnectivityInfoResponse
);
