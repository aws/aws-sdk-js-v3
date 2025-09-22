// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AACWLO,
  _AACWLOR,
  _AACWLORd,
  _AAI,
  _AAIPC,
  _AAIPCR,
  _AAIPCRd,
  _AAIR,
  _AAIRd,
  _AAO,
  _AAOR,
  _AAORd,
  _AARDS,
  _AARDSR,
  _AARDSRd,
  _AARN,
  _AC,
  _ACU,
  _AD,
  _ADp,
  _AN,
  _AS,
  _AU,
  _AVI,
  _BARN,
  _BARNU,
  _CAVI,
  _CT,
  _CU,
  _CWLO,
  _CWLOD,
  _CWLODl,
  _CWLOI,
  _CWLOU,
  _CWLOUl,
  _DACWLO,
  _DACWLOR,
  _DACWLORe,
  _DAe,
  _DAIPC,
  _DAIPCR,
  _DAIPCRe,
  _DAO,
  _DAOR,
  _DAORe,
  _DARDS,
  _DARDSR,
  _DARDSRe,
  _DARes,
  _DAResc,
  _DS,
  _DSU,
  _FK,
  _FKU,
  _I,
  _IASN,
  _ID,
  _IDn,
  _II,
  _ILPD,
  _ILPU,
  _IP,
  _IPC,
  _IPCD,
  _IPCU,
  _IPU,
  _IS,
  _ISPC,
  _ISU,
  _IU,
  _IUn,
  _KFID,
  _KFIU,
  _KFOD,
  _KFOU,
  _KSID,
  _KSIU,
  _KSOD,
  _KSOU,
  _LOD,
  _LOU,
  _LSARN,
  _LSARNU,
  _LUT,
  _N,
  _NP,
  _NPU,
  _NU,
  _O,
  _OD,
  _ODu,
  _OI,
  _OU,
  _OUu,
  _RARN,
  _RARNe,
  _RARNU,
  _RARNUe,
  _RCU,
  _RDS,
  _RDSD,
  _RDSDe,
  _RDSU,
  _RDSUe,
  _REU,
  _RFU,
  _RI,
  _RRARN,
  _RRARNU,
  _RS,
  _RSU,
  _SRDS,
  _SRDSD,
  _SRDSU,
  _TN,
  _TNU,
  _UA,
  _UAR,
  _UARp,
  n0,
} from "./schemas_0";
import {
  DestinationSchema,
  Input,
  InputParallelism,
  InputStartingPositionConfiguration,
  Output,
  RecordColumns,
  RecordFormat,
  SourceSchema,
} from "./schemas_1_Application";
import { CloudWatchLoggingOption, InputProcessingConfiguration } from "./schemas_5_Application";

/* eslint no-var: 0 */

export var AddApplicationCloudWatchLoggingOptionRequest = struct(
  n0,
  _AACWLOR,
  0,
  [_AN, _CAVI, _CWLO],
  [0, 1, () => CloudWatchLoggingOption]
);
export var AddApplicationCloudWatchLoggingOptionResponse = struct(n0, _AACWLORd, 0, [], []);
export var AddApplicationInputProcessingConfigurationRequest = struct(
  n0,
  _AAIPCR,
  0,
  [_AN, _CAVI, _II, _IPC],
  [0, 1, 0, () => InputProcessingConfiguration]
);
export var AddApplicationInputProcessingConfigurationResponse = struct(n0, _AAIPCRd, 0, [], []);
export var AddApplicationInputRequest = struct(n0, _AAIR, 0, [_AN, _CAVI, _I], [0, 1, () => Input]);
export var AddApplicationInputResponse = struct(n0, _AAIRd, 0, [], []);
export var AddApplicationOutputRequest = struct(n0, _AAOR, 0, [_AN, _CAVI, _O], [0, 1, () => Output]);
export var AddApplicationOutputResponse = struct(n0, _AAORd, 0, [], []);
export var AddApplicationReferenceDataSourceRequest = struct(
  n0,
  _AARDSR,
  0,
  [_AN, _CAVI, _RDS],
  [0, 1, () => ReferenceDataSource]
);
export var AddApplicationReferenceDataSourceResponse = struct(n0, _AARDSRd, 0, [], []);
export var ApplicationDetail = struct(
  n0,
  _AD,
  0,
  [_AN, _ADp, _AARN, _AS, _CT, _LUT, _ID, _OD, _RDSD, _CWLOD, _AC, _AVI],
  [
    0,
    0,
    0,
    0,
    4,
    4,
    () => InputDescriptions,
    () => OutputDescriptions,
    () => ReferenceDataSourceDescriptions,
    () => CloudWatchLoggingOptionDescriptions,
    0,
    1,
  ]
);
export var ApplicationUpdate = struct(
  n0,
  _AU,
  0,
  [_IU, _ACU, _OU, _RDSU, _CWLOU],
  [() => InputUpdates, 0, () => OutputUpdates, () => ReferenceDataSourceUpdates, () => CloudWatchLoggingOptionUpdates]
);
export var CloudWatchLoggingOptionDescription = struct(n0, _CWLODl, 0, [_CWLOI, _LSARN, _RARN], [0, 0, 0]);
export var CloudWatchLoggingOptionUpdate = struct(n0, _CWLOUl, 0, [_CWLOI, _LSARNU, _RARNU], [0, 0, 0]);
export var DeleteApplicationCloudWatchLoggingOptionRequest = struct(n0, _DACWLOR, 0, [_AN, _CAVI, _CWLOI], [0, 1, 0]);
export var DeleteApplicationCloudWatchLoggingOptionResponse = struct(n0, _DACWLORe, 0, [], []);
export var DeleteApplicationInputProcessingConfigurationRequest = struct(n0, _DAIPCR, 0, [_AN, _CAVI, _II], [0, 1, 0]);
export var DeleteApplicationInputProcessingConfigurationResponse = struct(n0, _DAIPCRe, 0, [], []);
export var DeleteApplicationOutputRequest = struct(n0, _DAOR, 0, [_AN, _CAVI, _OI], [0, 1, 0]);
export var DeleteApplicationOutputResponse = struct(n0, _DAORe, 0, [], []);
export var DeleteApplicationReferenceDataSourceRequest = struct(n0, _DARDSR, 0, [_AN, _CAVI, _RI], [0, 1, 0]);
export var DeleteApplicationReferenceDataSourceResponse = struct(n0, _DARDSRe, 0, [], []);
export var DescribeApplicationRequest = struct(n0, _DARes, 0, [_AN], [0]);
export var DescribeApplicationResponse = struct(n0, _DAResc, 0, [_AD], [() => ApplicationDetail]);
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
export var InputLambdaProcessorDescription = struct(n0, _ILPD, 0, [_RARNe, _RARN], [0, 0]);
export var InputLambdaProcessorUpdate = struct(n0, _ILPU, 0, [_RARNUe, _RARNU], [0, 0]);
export var InputParallelismUpdate = struct(n0, _IPU, 0, [_CU], [1]);
export var InputProcessingConfigurationDescription = struct(
  n0,
  _IPCD,
  0,
  [_ILPD],
  [() => InputLambdaProcessorDescription]
);
export var InputProcessingConfigurationUpdate = struct(n0, _IPCU, 0, [_ILPU], [() => InputLambdaProcessorUpdate]);
export var InputSchemaUpdate = struct(n0, _ISU, 0, [_RFU, _REU, _RCU], [() => RecordFormat, 0, () => RecordColumns]);
export var InputUpdate = struct(
  n0,
  _IUn,
  0,
  [_II, _NPU, _IPCU, _KSIU, _KFIU, _ISU, _IPU],
  [
    0,
    0,
    () => InputProcessingConfigurationUpdate,
    () => KinesisStreamsInputUpdate,
    () => KinesisFirehoseInputUpdate,
    () => InputSchemaUpdate,
    () => InputParallelismUpdate,
  ]
);
export var KinesisFirehoseInputDescription = struct(n0, _KFID, 0, [_RARNe, _RARN], [0, 0]);
export var KinesisFirehoseInputUpdate = struct(n0, _KFIU, 0, [_RARNUe, _RARNU], [0, 0]);
export var KinesisFirehoseOutputDescription = struct(n0, _KFOD, 0, [_RARNe, _RARN], [0, 0]);
export var KinesisFirehoseOutputUpdate = struct(n0, _KFOU, 0, [_RARNUe, _RARNU], [0, 0]);
export var KinesisStreamsInputDescription = struct(n0, _KSID, 0, [_RARNe, _RARN], [0, 0]);
export var KinesisStreamsInputUpdate = struct(n0, _KSIU, 0, [_RARNUe, _RARNU], [0, 0]);
export var KinesisStreamsOutputDescription = struct(n0, _KSOD, 0, [_RARNe, _RARN], [0, 0]);
export var KinesisStreamsOutputUpdate = struct(n0, _KSOU, 0, [_RARNUe, _RARNU], [0, 0]);
export var LambdaOutputDescription = struct(n0, _LOD, 0, [_RARNe, _RARN], [0, 0]);
export var LambdaOutputUpdate = struct(n0, _LOU, 0, [_RARNUe, _RARNU], [0, 0]);
export var OutputDescription = struct(
  n0,
  _ODu,
  0,
  [_OI, _N, _KSOD, _KFOD, _LOD, _DS],
  [
    0,
    0,
    () => KinesisStreamsOutputDescription,
    () => KinesisFirehoseOutputDescription,
    () => LambdaOutputDescription,
    () => DestinationSchema,
  ]
);
export var OutputUpdate = struct(
  n0,
  _OUu,
  0,
  [_OI, _NU, _KSOU, _KFOU, _LOU, _DSU],
  [
    0,
    0,
    () => KinesisStreamsOutputUpdate,
    () => KinesisFirehoseOutputUpdate,
    () => LambdaOutputUpdate,
    () => DestinationSchema,
  ]
);
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
export var ReferenceDataSourceUpdate = struct(
  n0,
  _RDSUe,
  0,
  [_RI, _TNU, _SRDSU, _RSU],
  [0, 0, () => S3ReferenceDataSourceUpdate, () => SourceSchema]
);
export var S3ReferenceDataSource = struct(n0, _SRDS, 0, [_BARN, _FK, _RRARN], [0, 0, 0]);
export var S3ReferenceDataSourceDescription = struct(n0, _SRDSD, 0, [_BARN, _FK, _RRARN], [0, 0, 0]);
export var S3ReferenceDataSourceUpdate = struct(n0, _SRDSU, 0, [_BARNU, _FKU, _RRARNU], [0, 0, 0]);
export var UpdateApplicationRequest = struct(n0, _UAR, 0, [_AN, _CAVI, _AU], [0, 1, () => ApplicationUpdate]);
export var UpdateApplicationResponse = struct(n0, _UARp, 0, [], []);
export var CloudWatchLoggingOptionDescriptions = list(n0, _CWLOD, 0, () => CloudWatchLoggingOptionDescription);
export var CloudWatchLoggingOptionUpdates = list(n0, _CWLOU, 0, () => CloudWatchLoggingOptionUpdate);
export var InAppStreamNames = 64 | 0;

export var InputDescriptions = list(n0, _ID, 0, () => InputDescription);
export var InputUpdates = list(n0, _IU, 0, () => InputUpdate);
export var OutputDescriptions = list(n0, _OD, 0, () => OutputDescription);
export var OutputUpdates = list(n0, _OU, 0, () => OutputUpdate);
export var ReferenceDataSourceDescriptions = list(n0, _RDSD, 0, () => ReferenceDataSourceDescription);
export var ReferenceDataSourceUpdates = list(n0, _RDSU, 0, () => ReferenceDataSourceUpdate);
export var AddApplicationCloudWatchLoggingOption = op(
  n0,
  _AACWLO,
  0,
  () => AddApplicationCloudWatchLoggingOptionRequest,
  () => AddApplicationCloudWatchLoggingOptionResponse
);
export var AddApplicationInput = op(
  n0,
  _AAI,
  0,
  () => AddApplicationInputRequest,
  () => AddApplicationInputResponse
);
export var AddApplicationInputProcessingConfiguration = op(
  n0,
  _AAIPC,
  0,
  () => AddApplicationInputProcessingConfigurationRequest,
  () => AddApplicationInputProcessingConfigurationResponse
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
export var DeleteApplicationCloudWatchLoggingOption = op(
  n0,
  _DACWLO,
  0,
  () => DeleteApplicationCloudWatchLoggingOptionRequest,
  () => DeleteApplicationCloudWatchLoggingOptionResponse
);
export var DeleteApplicationInputProcessingConfiguration = op(
  n0,
  _DAIPC,
  0,
  () => DeleteApplicationInputProcessingConfigurationRequest,
  () => DeleteApplicationInputProcessingConfigurationResponse
);
export var DeleteApplicationOutput = op(
  n0,
  _DAO,
  0,
  () => DeleteApplicationOutputRequest,
  () => DeleteApplicationOutputResponse
);
export var DeleteApplicationReferenceDataSource = op(
  n0,
  _DARDS,
  0,
  () => DeleteApplicationReferenceDataSourceRequest,
  () => DeleteApplicationReferenceDataSourceResponse
);
export var DescribeApplication = op(
  n0,
  _DAe,
  0,
  () => DescribeApplicationRequest,
  () => DescribeApplicationResponse
);
export var UpdateApplication = op(
  n0,
  _UA,
  0,
  () => UpdateApplicationRequest,
  () => UpdateApplicationResponse
);
