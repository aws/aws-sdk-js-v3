// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  CodeValidationException as __CodeValidationException,
  ResourceProvisionedThroughputExceededException as __ResourceProvisionedThroughputExceededException,
  ServiceUnavailableException as __ServiceUnavailableException,
  UnableToDetectSchemaException as __UnableToDetectSchemaException,
} from "../models/index";
import {
  _AAI,
  _AAIR,
  _AAIRd,
  _AAO,
  _AAOR,
  _AAORd,
  _AARDS,
  _AARDSR,
  _AARDSRd,
  _AARN,
  _AN,
  _AVI,
  _BARN,
  _C,
  _c,
  _CAVI,
  _CSVMP,
  _CVE,
  _DIS,
  _DISR,
  _DISRi,
  _DS,
  _e,
  _FK,
  _hE,
  _I,
  _IASN,
  _ID,
  _IDn,
  _II,
  _IP,
  _IPC,
  _IPCD,
  _IS,
  _ISPC,
  _JSONMP,
  _KFI,
  _KFID,
  _KFO,
  _KFOD,
  _KSI,
  _KSID,
  _KSO,
  _KSOD,
  _LO,
  _LOD,
  _M,
  _Ma,
  _MP,
  _N,
  _NP,
  _O,
  _OD,
  _ODu,
  _OIu,
  _PIR,
  _PIRr,
  _RARN,
  _RARNe,
  _RC,
  _RCDe,
  _RCe,
  _RDS,
  _RDSD,
  _RDSDe,
  _REe,
  _RF,
  _RFT,
  _RI,
  _RIR,
  _RPTEE,
  _RRARN,
  _RRD,
  _RRP,
  _RS,
  _s,
  _SC,
  _SER,
  _SRDS,
  _SRDSD,
  _SSo,
  _STq,
  _SUE,
  _TN,
  _UTDSE,
  n0,
} from "./schemas_0";
import { InputProcessingConfigurationDescription } from "./schemas_16_Application";
import { InputStartingPositionConfiguration } from "./schemas_17_Application";
import { InputProcessingConfiguration } from "./schemas_20_Input";

/* eslint no-var: 0 */

export var AddApplicationInputRequest = struct(n0, _AAIR, 0, [_AN, _CAVI, _I], [0, 1, () => Input]);
export var AddApplicationInputResponse = struct(n0, _AAIRd, 0, [_AARN, _AVI, _ID], [0, 1, () => InputDescriptions]);
export var AddApplicationOutputRequest = struct(n0, _AAOR, 0, [_AN, _CAVI, _O], [0, 1, () => Output]);
export var AddApplicationOutputResponse = struct(n0, _AAORd, 0, [_AARN, _AVI, _OD], [0, 1, () => OutputDescriptions]);
export var AddApplicationReferenceDataSourceRequest = struct(
  n0,
  _AARDSR,
  0,
  [_AN, _CAVI, _RDS],
  [0, 1, () => ReferenceDataSource]
);
export var AddApplicationReferenceDataSourceResponse = struct(
  n0,
  _AARDSRd,
  0,
  [_AARN, _AVI, _RDSD],
  [0, 1, () => ReferenceDataSourceDescriptions]
);
export var CodeValidationException = error(
  n0,
  _CVE,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __CodeValidationException
);
export var CSVMappingParameters = struct(n0, _CSVMP, 0, [_RRD, _RCDe], [0, 0]);
export var DestinationSchema = struct(n0, _DS, 0, [_RFT], [0]);
export var DiscoverInputSchemaRequest = struct(
  n0,
  _DISR,
  0,
  [_RARNe, _SER, _ISPC, _SC, _IPC],
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
export var InputDescription = struct(
  n0,
  _IDn,
  0,
  [_II, _NP, _IASN, _IPCD, _KSID, _KFID, _IS, _IP, _ISPC],
  [
    0,
    0,
    64 | 0,
    () => InputProcessingConfigurationDescription,
    () => KinesisStreamsInputDescription,
    () => KinesisFirehoseInputDescription,
    () => SourceSchema,
    () => InputParallelism,
    () => InputStartingPositionConfiguration,
  ]
);
export var InputParallelism = struct(n0, _IP, 0, [_C], [1]);
export var JSONMappingParameters = struct(n0, _JSONMP, 0, [_RRP], [0]);
export var KinesisFirehoseInput = struct(n0, _KFI, 0, [_RARNe], [0]);
export var KinesisFirehoseInputDescription = struct(n0, _KFID, 0, [_RARNe, _RARN], [0, 0]);
export var KinesisFirehoseOutput = struct(n0, _KFO, 0, [_RARNe], [0]);
export var KinesisFirehoseOutputDescription = struct(n0, _KFOD, 0, [_RARNe, _RARN], [0, 0]);
export var KinesisStreamsInput = struct(n0, _KSI, 0, [_RARNe], [0]);
export var KinesisStreamsInputDescription = struct(n0, _KSID, 0, [_RARNe, _RARN], [0, 0]);
export var KinesisStreamsOutput = struct(n0, _KSO, 0, [_RARNe], [0]);
export var KinesisStreamsOutputDescription = struct(n0, _KSOD, 0, [_RARNe, _RARN], [0, 0]);
export var LambdaOutput = struct(n0, _LO, 0, [_RARNe], [0]);
export var LambdaOutputDescription = struct(n0, _LOD, 0, [_RARNe, _RARN], [0, 0]);
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
export var OutputDescription = struct(
  n0,
  _ODu,
  0,
  [_OIu, _N, _KSOD, _KFOD, _LOD, _DS],
  [
    0,
    0,
    () => KinesisStreamsOutputDescription,
    () => KinesisFirehoseOutputDescription,
    () => LambdaOutputDescription,
    () => DestinationSchema,
  ]
);
export var RecordColumn = struct(n0, _RC, 0, [_N, _Ma, _STq], [0, 0, 0]);
export var RecordFormat = struct(n0, _RF, 0, [_RFT, _MP], [0, () => MappingParameters]);
export var ReferenceDataSource = struct(
  n0,
  _RDS,
  0,
  [_TN, _SRDS, _RS],
  [0, () => S3ReferenceDataSource, () => SourceSchema]
);
export var ReferenceDataSourceDescription = struct(
  n0,
  _RDSDe,
  0,
  [_RI, _TN, _SRDSD, _RS],
  [0, 0, () => S3ReferenceDataSourceDescription, () => SourceSchema]
);
export var ResourceProvisionedThroughputExceededException = error(
  n0,
  _RPTEE,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __ResourceProvisionedThroughputExceededException
);
export var S3Configuration = struct(n0, _SC, 0, [_BARN, _FK], [0, 0]);
export var S3ReferenceDataSource = struct(n0, _SRDS, 0, [_BARN, _FK], [0, 0]);
export var S3ReferenceDataSourceDescription = struct(n0, _SRDSD, 0, [_BARN, _FK, _RRARN], [0, 0, 0]);
export var ServiceUnavailableException = error(
  n0,
  _SUE,
  {
    [_e]: _s,
    [_hE]: 503,
  },
  [_M],
  [0],

  __ServiceUnavailableException
);
export var SourceSchema = struct(n0, _SSo, 0, [_RF, _REe, _RCe], [() => RecordFormat, 0, () => RecordColumns]);
export var UnableToDetectSchemaException = error(
  n0,
  _UTDSE,
  {
    [_e]: _c,
  },
  [_M, _RIR, _PIRr],
  [0, 64 | 0, 64 | 0],

  __UnableToDetectSchemaException
);
export var InAppStreamNames = 64 | 0;

export var InputDescriptions = list(n0, _ID, 0, () => InputDescription);
export var OutputDescriptions = list(n0, _OD, 0, () => OutputDescription);
export var ParsedInputRecord = 64 | 0;

export var ParsedInputRecords = list(n0, _PIR, 0, 64 | 0);
export var ProcessedInputRecords = 64 | 0;

export var RawInputRecords = 64 | 0;

export var RecordColumns = list(n0, _RCe, 0, () => RecordColumn);
export var ReferenceDataSourceDescriptions = list(n0, _RDSD, 0, () => ReferenceDataSourceDescription);
export var AddApplicationInput = op(
  n0,
  _AAI,
  0,
  () => AddApplicationInputRequest,
  () => AddApplicationInputResponse
);
export var AddApplicationOutput = op(
  n0,
  _AAO,
  0,
  () => AddApplicationOutputRequest,
  () => AddApplicationOutputResponse
);
export var AddApplicationReferenceDataSource = op(
  n0,
  _AARDS,
  0,
  () => AddApplicationReferenceDataSourceRequest,
  () => AddApplicationReferenceDataSourceResponse
);
export var DiscoverInputSchema = op(
  n0,
  _DIS,
  0,
  () => DiscoverInputSchemaRequest,
  () => DiscoverInputSchemaResponse
);
