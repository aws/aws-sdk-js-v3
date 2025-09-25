// smithy-typescript generated code
import { error, list, map, op, sim, struct } from "@smithy/core/schema";

import {
  CodeVerificationFailedException as __CodeVerificationFailedException,
  InvalidCodeSignatureException as __InvalidCodeSignatureException,
} from "../models/index";
import {
  _ALL,
  _AOp,
  _Ar,
  _Arn,
  _C,
  _c,
  _CF,
  _CFR,
  _Cod,
  _Com,
  _Con,
  _CS,
  _CSCA,
  _CSo,
  _CVFE,
  _D,
  _DLC,
  _DR,
  _e,
  _EC,
  _EE,
  _En,
  _EP,
  _ER,
  _Er,
  _ES,
  _EVN,
  _EVn,
  _EVV,
  _FA,
  _FCL,
  _FCu,
  _FCun,
  _FLu,
  _FN,
  _FSC,
  _FSCi,
  _FSCL,
  _Fu,
  _FV,
  _GF,
  _GFCe,
  _GFCRet,
  _GFR,
  _GFRe,
  _GRMC,
  _GRMCR,
  _GRMCRe,
  _H,
  _h,
  _hE,
  _hQ,
  _IAFDS,
  _IC,
  _ICE,
  _ICR,
  _ICSE,
  _IU,
  _KMSKA,
  _L,
  _La,
  _LC,
  _LF,
  _LFi,
  _LFR,
  _LFRi,
  _LG,
  _LM,
  _LMP,
  _Lo,
  _LRL,
  _LUS,
  _LUSR,
  _LUSRC,
  _LVBF,
  _LVBFR,
  _LVBFRi,
  _M,
  _Ma,
  _MAa,
  _MI,
  _Mo,
  _MR,
  _MS,
  _NM,
  _OSp,
  _PRMC,
  _PRMCR,
  _PRMCRu,
  _PT,
  _Pu,
  _PV,
  _PVR,
  _Q,
  _R,
  _RI,
  _RIU,
  _Ro,
  _RT,
  _RVA,
  _RVC,
  _RVE,
  _SB,
  _SGI,
  _Si,
  _SIu,
  _SJA,
  _SK,
  _SKMSKA,
  _SLL,
  _SOV,
  _SPVAi,
  _SR,
  _SRCt,
  _SS,
  _SSn,
  _SSR,
  _St,
  _T,
  _TA,
  _Ta,
  _TC,
  _TCR,
  _TE,
  _Ti,
  _UFC,
  _UFCp,
  _UFCR,
  _UFCRp,
  _URO,
  _V,
  _VC,
  _VCR,
  _Ve,
  _Ver,
  _VI,
  _WD,
  _ZF,
  n0,
} from "./schemas_0";
import { _Blob } from "./schemas_3_Function";
import { Concurrency } from "./schemas_19_Function";

/* eslint no-var: 0 */

export var EnvironmentVariableName = sim(n0, _EVN, 0, 8);
export var EnvironmentVariableValue = sim(n0, _EVV, 0, 8);
export var SensitiveString = sim(n0, _SS, 0, 8);
export var CodeVerificationFailedException = error(
  n0,
  _CVFE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_T, _M],
  [0, 0],

  __CodeVerificationFailedException
);
export var CreateFunctionRequest = struct(
  n0,
  _CFR,
  0,
  [
    _FN,
    _R,
    _Ro,
    _H,
    _Cod,
    _D,
    _Ti,
    _MS,
    _Pu,
    _VC,
    _PT,
    _DLC,
    _En,
    _KMSKA,
    _TC,
    _Ta,
    _L,
    _FSC,
    _IC,
    _CSCA,
    _Ar,
    _ES,
    _SSn,
    _LC,
  ],
  [
    0,
    0,
    0,
    0,
    [() => FunctionCode, 0],
    0,
    1,
    1,
    2,
    () => VpcConfig,
    0,
    () => DeadLetterConfig,
    [() => Environment, 0],
    0,
    () => TracingConfig,
    128 | 0,
    64 | 0,
    () => FileSystemConfigList,
    () => ImageConfig,
    0,
    64 | 0,
    () => EphemeralStorage,
    () => SnapStart,
    () => LoggingConfig,
  ]
);
export var DeadLetterConfig = struct(n0, _DLC, 0, [_TA], [0]);
export var Environment = struct(n0, _En, 0, [_V], [[() => EnvironmentVariables, 0]]);
export var EnvironmentError = struct(n0, _EE, 0, [_EC, _M], [0, [() => SensitiveString, 0]]);
export var EnvironmentResponse = struct(
  n0,
  _ER,
  0,
  [_V, _Er],
  [
    [() => EnvironmentVariables, 0],
    [() => EnvironmentError, 0],
  ]
);
export var EphemeralStorage = struct(n0, _ES, 0, [_Si], [1]);
export var FileSystemConfig = struct(n0, _FSCi, 0, [_Arn, _LMP], [0, 0]);
export var FunctionCode = struct(n0, _FCu, 0, [_ZF, _SB, _SK, _SOV, _IU, _SKMSKA], [[() => _Blob, 0], 0, 0, 0, 0, 0]);
export var FunctionCodeLocation = struct(n0, _FCL, 0, [_RT, _Lo, _IU, _RIU, _SKMSKA], [0, 0, 0, 0, 0]);
export var FunctionConfiguration = struct(
  n0,
  _FCun,
  0,
  [
    _FN,
    _FA,
    _R,
    _Ro,
    _H,
    _CS,
    _D,
    _Ti,
    _MS,
    _LM,
    _CSo,
    _Ve,
    _VC,
    _DLC,
    _En,
    _KMSKA,
    _TC,
    _MAa,
    _RI,
    _L,
    _St,
    _SR,
    _SRCt,
    _LUS,
    _LUSR,
    _LUSRC,
    _FSC,
    _PT,
    _ICR,
    _SPVAi,
    _SJA,
    _Ar,
    _ES,
    _SSn,
    _RVC,
    _LC,
  ],
  [
    0,
    0,
    0,
    0,
    0,
    1,
    0,
    1,
    1,
    0,
    0,
    0,
    () => VpcConfigResponse,
    () => DeadLetterConfig,
    [() => EnvironmentResponse, 0],
    0,
    () => TracingConfigResponse,
    0,
    0,
    () => LayersReferenceList,
    0,
    0,
    0,
    0,
    0,
    0,
    () => FileSystemConfigList,
    0,
    [() => ImageConfigResponse, 0],
    0,
    0,
    64 | 0,
    () => EphemeralStorage,
    () => SnapStartResponse,
    [() => RuntimeVersionConfig, 0],
    () => LoggingConfig,
  ]
);
export var GetFunctionConfigurationRequest = struct(
  n0,
  _GFCRet,
  0,
  [_FN, _Q],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _Q,
      },
    ],
  ]
);
export var GetFunctionRequest = struct(
  n0,
  _GFR,
  0,
  [_FN, _Q],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _Q,
      },
    ],
  ]
);
export var GetFunctionResponse = struct(
  n0,
  _GFRe,
  0,
  [_Con, _Cod, _Ta, _TE, _C],
  [[() => FunctionConfiguration, 0], () => FunctionCodeLocation, 128 | 0, () => TagsError, () => Concurrency]
);
export var GetRuntimeManagementConfigRequest = struct(
  n0,
  _GRMCR,
  0,
  [_FN, _Q],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _Q,
      },
    ],
  ]
);
export var GetRuntimeManagementConfigResponse = struct(n0, _GRMCRe, 0, [_URO, _RVA, _FA], [0, 0, 0]);
export var ImageConfig = struct(n0, _IC, 0, [_EP, _Com, _WD], [64 | 0, 64 | 0, 0]);
export var ImageConfigError = struct(n0, _ICE, 0, [_EC, _M], [0, [() => SensitiveString, 0]]);
export var ImageConfigResponse = struct(n0, _ICR, 0, [_IC, _Er], [() => ImageConfig, [() => ImageConfigError, 0]]);
export var InvalidCodeSignatureException = error(
  n0,
  _ICSE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_T, _M],
  [0, 0],

  __InvalidCodeSignatureException
);
export var Layer = struct(n0, _La, 0, [_Arn, _CS, _SPVAi, _SJA], [0, 1, 0, 0]);
export var ListFunctionsRequest = struct(
  n0,
  _LFR,
  0,
  [_MR, _FV, _Ma, _MI],
  [
    [
      0,
      {
        [_hQ]: _MR,
      },
    ],
    [
      0,
      {
        [_hQ]: _FV,
      },
    ],
    [
      0,
      {
        [_hQ]: _Ma,
      },
    ],
    [
      1,
      {
        [_hQ]: _MI,
      },
    ],
  ]
);
export var ListFunctionsResponse = struct(n0, _LFRi, 0, [_NM, _Fu], [0, [() => FunctionList, 0]]);
export var ListVersionsByFunctionRequest = struct(
  n0,
  _LVBFR,
  0,
  [_FN, _Ma, _MI],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _Ma,
      },
    ],
    [
      1,
      {
        [_hQ]: _MI,
      },
    ],
  ]
);
export var ListVersionsByFunctionResponse = struct(n0, _LVBFRi, 0, [_NM, _Ver], [0, [() => FunctionList, 0]]);
export var LoggingConfig = struct(n0, _LC, 0, [_LF, _ALL, _SLL, _LG], [0, 0, 0, 0]);
export var PublishVersionRequest = struct(n0, _PVR, 0, [_FN, _CSo, _D, _RI], [[0, 1], 0, 0, 0]);
export var PutRuntimeManagementConfigRequest = struct(
  n0,
  _PRMCR,
  0,
  [_FN, _Q, _URO, _RVA],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _Q,
      },
    ],
    0,
    0,
  ]
);
export var PutRuntimeManagementConfigResponse = struct(n0, _PRMCRu, 0, [_URO, _FA, _RVA], [0, 0, 0]);
export var RuntimeVersionConfig = struct(n0, _RVC, 0, [_RVA, _Er], [0, [() => RuntimeVersionError, 0]]);
export var RuntimeVersionError = struct(n0, _RVE, 0, [_EC, _M], [0, [() => SensitiveString, 0]]);
export var SnapStart = struct(n0, _SSn, 0, [_AOp], [0]);
export var SnapStartResponse = struct(n0, _SSR, 0, [_AOp, _OSp], [0, 0]);
export var TagsError = struct(n0, _TE, 0, [_EC, _M], [0, 0]);
export var TracingConfig = struct(n0, _TC, 0, [_Mo], [0]);
export var TracingConfigResponse = struct(n0, _TCR, 0, [_Mo], [0]);
export var UpdateFunctionCodeRequest = struct(
  n0,
  _UFCR,
  0,
  [_FN, _ZF, _SB, _SK, _SOV, _IU, _Pu, _DR, _RI, _Ar, _SKMSKA],
  [[0, 1], [() => _Blob, 0], 0, 0, 0, 0, 2, 2, 0, 64 | 0, 0]
);
export var UpdateFunctionConfigurationRequest = struct(
  n0,
  _UFCRp,
  0,
  [_FN, _Ro, _H, _D, _Ti, _MS, _VC, _En, _R, _DLC, _KMSKA, _TC, _RI, _L, _FSC, _IC, _ES, _SSn, _LC],
  [
    [0, 1],
    0,
    0,
    0,
    1,
    1,
    () => VpcConfig,
    [() => Environment, 0],
    0,
    () => DeadLetterConfig,
    0,
    () => TracingConfig,
    0,
    64 | 0,
    () => FileSystemConfigList,
    () => ImageConfig,
    () => EphemeralStorage,
    () => SnapStart,
    () => LoggingConfig,
  ]
);
export var VpcConfig = struct(n0, _VC, 0, [_SIu, _SGI, _IAFDS], [64 | 0, 64 | 0, 2]);
export var VpcConfigResponse = struct(n0, _VCR, 0, [_SIu, _SGI, _VI, _IAFDS], [64 | 0, 64 | 0, 0, 2]);
export var ArchitecturesList = 64 | 0;

export var FileSystemConfigList = list(n0, _FSCL, 0, () => FileSystemConfig);
export var FunctionList = list(n0, _FLu, 0, [() => FunctionConfiguration, 0]);
export var LayerList = 64 | 0;

export var LayersReferenceList = list(n0, _LRL, 0, () => Layer);
export var SecurityGroupIds = 64 | 0;

export var StringList = 64 | 0;

export var SubnetIds = 64 | 0;

export var EnvironmentVariables = map(
  n0,
  _EVn,
  8,
  [() => EnvironmentVariableName, 0],
  [() => EnvironmentVariableValue, 0]
);
export var CreateFunction = op(
  n0,
  _CF,
  {
    [_h]: ["POST", "/2015-03-31/functions", 201],
  },
  () => CreateFunctionRequest,
  () => FunctionConfiguration
);
export var GetFunction = op(
  n0,
  _GF,
  {
    [_h]: ["GET", "/2015-03-31/functions/{FunctionName}", 200],
  },
  () => GetFunctionRequest,
  () => GetFunctionResponse
);
export var GetFunctionConfiguration = op(
  n0,
  _GFCe,
  {
    [_h]: ["GET", "/2015-03-31/functions/{FunctionName}/configuration", 200],
  },
  () => GetFunctionConfigurationRequest,
  () => FunctionConfiguration
);
export var GetRuntimeManagementConfig = op(
  n0,
  _GRMC,
  {
    [_h]: ["GET", "/2021-07-20/functions/{FunctionName}/runtime-management-config", 200],
  },
  () => GetRuntimeManagementConfigRequest,
  () => GetRuntimeManagementConfigResponse
);
export var ListFunctions = op(
  n0,
  _LFi,
  {
    [_h]: ["GET", "/2015-03-31/functions", 200],
  },
  () => ListFunctionsRequest,
  () => ListFunctionsResponse
);
export var ListVersionsByFunction = op(
  n0,
  _LVBF,
  {
    [_h]: ["GET", "/2015-03-31/functions/{FunctionName}/versions", 200],
  },
  () => ListVersionsByFunctionRequest,
  () => ListVersionsByFunctionResponse
);
export var PublishVersion = op(
  n0,
  _PV,
  {
    [_h]: ["POST", "/2015-03-31/functions/{FunctionName}/versions", 201],
  },
  () => PublishVersionRequest,
  () => FunctionConfiguration
);
export var PutRuntimeManagementConfig = op(
  n0,
  _PRMC,
  {
    [_h]: ["PUT", "/2021-07-20/functions/{FunctionName}/runtime-management-config", 200],
  },
  () => PutRuntimeManagementConfigRequest,
  () => PutRuntimeManagementConfigResponse
);
export var UpdateFunctionCode = op(
  n0,
  _UFC,
  {
    [_h]: ["PUT", "/2015-03-31/functions/{FunctionName}/code", 200],
  },
  () => UpdateFunctionCodeRequest,
  () => FunctionConfiguration
);
export var UpdateFunctionConfiguration = op(
  n0,
  _UFCp,
  {
    [_h]: ["PUT", "/2015-03-31/functions/{FunctionName}/configuration", 200],
  },
  () => UpdateFunctionConfigurationRequest,
  () => FunctionConfiguration
);
