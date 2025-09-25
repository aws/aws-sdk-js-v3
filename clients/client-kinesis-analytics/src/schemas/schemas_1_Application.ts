// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  CodeValidationException as __CodeValidationException,
  InvalidApplicationConfigurationException as __InvalidApplicationConfigurationException,
  LimitExceededException as __LimitExceededException,
  ResourceProvisionedThroughputExceededException as __ResourceProvisionedThroughputExceededException,
  ServiceUnavailableException as __ServiceUnavailableException,
  UnableToDetectSchemaException as __UnableToDetectSchemaException,
} from "../models/index";
import {
  _AARN,
  _AC,
  _ADp,
  _AN,
  _AS,
  _ASp,
  _ASpp,
  _BARN,
  _C,
  _c,
  _CA,
  _CAR,
  _CARr,
  _CSVMP,
  _CVE,
  _CWLOl,
  _DIS,
  _DISR,
  _DISRi,
  _DS,
  _e,
  _ESAN,
  _FK,
  _hE,
  _HMA,
  _I,
  _IACE,
  _IC,
  _ICn,
  _Id,
  _In,
  _IP,
  _IPC,
  _IS,
  _ISP,
  _ISPC,
  _JSONMP,
  _KFI,
  _KFO,
  _KSI,
  _KSO,
  _L,
  _LA,
  _LAR,
  _LARi,
  _LEE,
  _LO,
  _M,
  _m,
  _MP,
  _N,
  _NP,
  _O,
  _Ou,
  _PIR,
  _PIRr,
  _RARN,
  _RARNe,
  _RC,
  _RCD,
  _RCe,
  _RE,
  _RF,
  _RFT,
  _RIR,
  _RPTEE,
  _RRD,
  _RRP,
  _s,
  _SA,
  _SAR,
  _SARt,
  _SC,
  _SS,
  _ST,
  _SUE,
  _T,
  _UTDSE,
  n0,
} from "./schemas_0";
import { Tags } from "./schemas_4_Resource";
import { CloudWatchLoggingOption, InputProcessingConfiguration } from "./schemas_5_Application";

/* eslint no-var: 0 */

export var ApplicationSummary = struct(n0, _ASp, 0, [_AN, _AARN, _AS], [0, 0, 0]);
export var CodeValidationException = error(
  n0,
  _CVE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __CodeValidationException
);
export var CreateApplicationRequest = struct(
  n0,
  _CAR,
  0,
  [_AN, _ADp, _In, _Ou, _CWLOl, _AC, _T],
  [0, 0, () => Inputs, () => Outputs, () => CloudWatchLoggingOptions, 0, () => Tags]
);
export var CreateApplicationResponse = struct(n0, _CARr, 0, [_ASp], [() => ApplicationSummary]);
export var CSVMappingParameters = struct(n0, _CSVMP, 0, [_RRD, _RCD], [0, 0]);
export var DestinationSchema = struct(n0, _DS, 0, [_RFT], [0]);
export var DiscoverInputSchemaRequest = struct(
  n0,
  _DISR,
  0,
  [_RARNe, _RARN, _ISPC, _SC, _IPC],
  [0, 0, () => InputStartingPositionConfiguration, () => S3Configuration, () => InputProcessingConfiguration]
);
export var DiscoverInputSchemaResponse = struct(
  n0,
  _DISRi,
  0,
  [_IS, _PIR, _PIRr, _RIR],
  [() => SourceSchema, list(n0, _PIR, 0, 64 | 0), 64 | 0, 64 | 0]
);
export var Input = struct(
  n0,
  _I,
  0,
  [_NP, _IPC, _KSI, _KFI, _IP, _IS],
  [
    0,
    () => InputProcessingConfiguration,
    () => KinesisStreamsInput,
    () => KinesisFirehoseInput,
    () => InputParallelism,
    () => SourceSchema,
  ]
);
export var InputConfiguration = struct(n0, _IC, 0, [_Id, _ISPC], [0, () => InputStartingPositionConfiguration]);
export var InputParallelism = struct(n0, _IP, 0, [_C], [1]);
export var InputStartingPositionConfiguration = struct(n0, _ISPC, 0, [_ISP], [0]);
export var InvalidApplicationConfigurationException = error(
  n0,
  _IACE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __InvalidApplicationConfigurationException
);
export var JSONMappingParameters = struct(n0, _JSONMP, 0, [_RRP], [0]);
export var KinesisFirehoseInput = struct(n0, _KFI, 0, [_RARNe, _RARN], [0, 0]);
export var KinesisFirehoseOutput = struct(n0, _KFO, 0, [_RARNe, _RARN], [0, 0]);
export var KinesisStreamsInput = struct(n0, _KSI, 0, [_RARNe, _RARN], [0, 0]);
export var KinesisStreamsOutput = struct(n0, _KSO, 0, [_RARNe, _RARN], [0, 0]);
export var LambdaOutput = struct(n0, _LO, 0, [_RARNe, _RARN], [0, 0]);
export var LimitExceededException = error(
  n0,
  _LEE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __LimitExceededException
);
export var ListApplicationsRequest = struct(n0, _LAR, 0, [_L, _ESAN], [1, 0]);
export var ListApplicationsResponse = struct(n0, _LARi, 0, [_ASpp, _HMA], [() => ApplicationSummaries, 2]);
export var MappingParameters = struct(
  n0,
  _MP,
  0,
  [_JSONMP, _CSVMP],
  [() => JSONMappingParameters, () => CSVMappingParameters]
);
export var Output = struct(
  n0,
  _O,
  0,
  [_N, _KSO, _KFO, _LO, _DS],
  [0, () => KinesisStreamsOutput, () => KinesisFirehoseOutput, () => LambdaOutput, () => DestinationSchema]
);
export var RecordColumn = struct(n0, _RC, 0, [_N, _M, _ST], [0, 0, 0]);
export var RecordFormat = struct(n0, _RF, 0, [_RFT, _MP], [0, () => MappingParameters]);
export var ResourceProvisionedThroughputExceededException = error(
  n0,
  _RPTEE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __ResourceProvisionedThroughputExceededException
);
export var S3Configuration = struct(n0, _SC, 0, [_RARN, _BARN, _FK], [0, 0, 0]);
export var ServiceUnavailableException = error(
  n0,
  _SUE,
  {
    [_e]: _s,
    [_hE]: 503,
  },
  [_m],
  [0],

  __ServiceUnavailableException
);
export var SourceSchema = struct(n0, _SS, 0, [_RF, _RE, _RCe], [() => RecordFormat, 0, () => RecordColumns]);
export var StartApplicationRequest = struct(n0, _SAR, 0, [_AN, _ICn], [0, () => InputConfigurations]);
export var StartApplicationResponse = struct(n0, _SARt, 0, [], []);
export var UnableToDetectSchemaException = error(
  n0,
  _UTDSE,
  {
    [_e]: _c,
  },
  [_m, _RIR, _PIRr],
  [0, 64 | 0, 64 | 0],

  __UnableToDetectSchemaException
);
export var Unit = "unit" as const;

export var ApplicationSummaries = list(n0, _ASpp, 0, () => ApplicationSummary);
export var CloudWatchLoggingOptions = list(n0, _CWLOl, 0, () => CloudWatchLoggingOption);
export var InputConfigurations = list(n0, _ICn, 0, () => InputConfiguration);
export var Inputs = list(n0, _In, 0, () => Input);
export var Outputs = list(n0, _Ou, 0, () => Output);
export var ParsedInputRecord = 64 | 0;

export var ParsedInputRecords = list(n0, _PIR, 0, 64 | 0);
export var ProcessedInputRecords = 64 | 0;

export var RawInputRecords = 64 | 0;

export var RecordColumns = list(n0, _RCe, 0, () => RecordColumn);
export var CreateApplication = op(
  n0,
  _CA,
  0,
  () => CreateApplicationRequest,
  () => CreateApplicationResponse
);
export var DiscoverInputSchema = op(
  n0,
  _DIS,
  0,
  () => DiscoverInputSchemaRequest,
  () => DiscoverInputSchemaResponse
);
export var ListApplications = op(
  n0,
  _LA,
  0,
  () => ListApplicationsRequest,
  () => ListApplicationsResponse
);
export var StartApplication = op(
  n0,
  _SA,
  0,
  () => StartApplicationRequest,
  () => StartApplicationResponse
);
