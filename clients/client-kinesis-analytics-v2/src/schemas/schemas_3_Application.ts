// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AARN,
  _AC,
  _ACC,
  _ACCD,
  _ACCU,
  _ACD,
  _ACU,
  _AD,
  _ADp,
  _AEC,
  _AECD,
  _AECU,
  _AI,
  _AM,
  _AMCD,
  _AN,
  _AOI,
  _AOID,
  _AOIL,
  _ARC,
  _ARCD,
  _AS,
  _ASC,
  _ASCD,
  _ASCU,
  _ASE,
  _ASEU,
  _ASRC,
  _ASRCD,
  _ASRCU,
  _AT,
  _AVCD,
  _AVCT,
  _AVD,
  _AVI,
  _AVRBF,
  _AVRBT,
  _AVUF,
  _AVUT,
  _BARN,
  _BARNU,
  _BP,
  _BPU,
  _CA,
  _CAC,
  _CACD,
  _CACDL,
  _CACDu,
  _CACL,
  _CACU,
  _CACu,
  _CAR,
  _CARr,
  _CAVI,
  _CC,
  _CCa,
  _CCD,
  _CCDa,
  _CCDh,
  _CCh,
  _CCT,
  _CCTU,
  _CCU,
  _CCUa,
  _CCUh,
  _CE,
  _CEU,
  _CI,
  _CIU,
  _CMD,
  _CP,
  _CS,
  _CT,
  _CTo,
  _CTr,
  _CTU,
  _CU,
  _CWLOD,
  _CWLOI,
  _CWLOl,
  _CWLOU,
  _CWLOUl,
  _DA,
  _DAAC,
  _DAACD,
  _DAACU,
  _DAe,
  _DAOe,
  _DAORes,
  _DAOResc,
  _DAR,
  _DARe,
  _DARes,
  _DAResc,
  _DARN,
  _DARNU,
  _DAS,
  _DASe,
  _DASR,
  _DASRe,
  _DASRes,
  _DASResc,
  _DAV,
  _DAVR,
  _DAVRe,
  _DSU,
  _EI,
  _EP,
  _EPD,
  _EPU,
  _ES,
  _ET,
  _FAC,
  _FACD,
  _FACU,
  _FK,
  _FKU,
  _FRC,
  _FRCD,
  _GDCC,
  _GDCCD,
  _GDCCU,
  _GI,
  _IAD,
  _ID,
  _II,
  _ILPU,
  _In,
  _IPCU,
  _IPU,
  _ISU,
  _IU,
  _IUn,
  _JPD,
  _KFIU,
  _KFOU,
  _KI,
  _KIU,
  _KSIU,
  _KSOU,
  _KT,
  _KTU,
  _L,
  _LAO,
  _LAOR,
  _LAORi,
  _LAS,
  _LASR,
  _LASRi,
  _LL,
  _LLU,
  _LOU,
  _LSARNU,
  _LUT,
  _MC,
  _MCD,
  _MCU,
  _ML,
  _MLU,
  _MPBC,
  _MPBCU,
  _MR,
  _MRD,
  _NPU,
  _NT,
  _NU,
  _OD,
  _OFD,
  _OI,
  _OIu,
  _Op,
  _OS,
  _OU,
  _Ou,
  _OUu,
  _OV,
  _OVU,
  _P,
  _PC,
  _PCD,
  _PCU,
  _PG,
  _PGD,
  _PGI,
  _PGr,
  _PM,
  _PPKPU,
  _PPKPUU,
  _PU,
  _RA,
  _RAR,
  _RARNU,
  _RARo,
  _RCD,
  _RCU,
  _RCUu,
  _RDSD,
  _RDSe,
  _RDSU,
  _RDSUe,
  _RE,
  _REo,
  _REU,
  _REUe,
  _REUu,
  _RFU,
  _RI,
  _ROI,
  _RSU,
  _SAC,
  _SACD,
  _SACLD,
  _SACU,
  _SCBL,
  _SCBLD,
  _SCBLU,
  _SCL,
  _SCLD,
  _SCLU,
  _SCT,
  _SD,
  _SE,
  _SER,
  _SERU,
  _SEU,
  _SGIU,
  _SIU,
  _SN,
  _SRDSU,
  _SS,
  _SSn,
  _ST,
  _T,
  _TC,
  _TCU,
  _TNU,
  _UA,
  _UAR,
  _UARp,
  _V,
  _VCDp,
  _VCI,
  _VCp,
  _VCU,
  _VCUp,
  _ZAC,
  _ZACD,
  _ZACU,
  _ZFC,
  _ZFCU,
  _ZMC,
  _ZMCD,
  _ZMCU,
  n0,
} from "./schemas_0";
import { ApplicationRestoreConfiguration, FlinkRunConfiguration } from "./schemas_1_Application";
import {
  DestinationSchema,
  Input,
  InputDescriptions,
  Output,
  OutputDescriptions,
  RecordColumns,
  RecordFormat,
  ReferenceDataSource,
  ReferenceDataSourceDescriptions,
  SourceSchema,
} from "./schemas_2_Application";
import { Tags } from "./schemas_4_Resource";
import {
  CloudWatchLoggingOption,
  CloudWatchLoggingOptionDescriptions,
  VpcConfiguration,
  VpcConfigurationDescription,
} from "./schemas_6_Application";
import { ApplicationMaintenanceConfigurationDescription } from "./schemas_8_Application";

/* eslint no-var: 0 */

export var ApplicationCodeConfiguration = struct(n0, _ACC, 0, [_CC, _CCT], [() => CodeContent, 0]);
export var ApplicationCodeConfigurationDescription = struct(
  n0,
  _ACCD,
  0,
  [_CCT, _CCD],
  [0, () => CodeContentDescription]
);
export var ApplicationCodeConfigurationUpdate = struct(n0, _ACCU, 0, [_CCTU, _CCU], [0, () => CodeContentUpdate]);
export var ApplicationConfiguration = struct(
  n0,
  _AC,
  0,
  [_SAC, _FAC, _EP, _ACC, _ASC, _ASRC, _VCp, _ZAC, _AEC],
  [
    () => SqlApplicationConfiguration,
    () => FlinkApplicationConfiguration,
    () => EnvironmentProperties,
    () => ApplicationCodeConfiguration,
    () => ApplicationSnapshotConfiguration,
    () => ApplicationSystemRollbackConfiguration,
    () => VpcConfigurations,
    () => ZeppelinApplicationConfiguration,
    () => ApplicationEncryptionConfiguration,
  ]
);
export var ApplicationConfigurationDescription = struct(
  n0,
  _ACD,
  0,
  [_SACD, _ACCD, _RCD, _FACD, _EPD, _ASCD, _ASRCD, _VCDp, _ZACD, _AECD],
  [
    () => SqlApplicationConfigurationDescription,
    () => ApplicationCodeConfigurationDescription,
    () => RunConfigurationDescription,
    () => FlinkApplicationConfigurationDescription,
    () => EnvironmentPropertyDescriptions,
    () => ApplicationSnapshotConfigurationDescription,
    () => ApplicationSystemRollbackConfigurationDescription,
    () => VpcConfigurationDescriptions,
    () => ZeppelinApplicationConfigurationDescription,
    () => ApplicationEncryptionConfigurationDescription,
  ]
);
export var ApplicationConfigurationUpdate = struct(
  n0,
  _ACU,
  0,
  [_SACU, _ACCU, _FACU, _EPU, _ASCU, _ASRCU, _VCU, _ZACU, _AECU],
  [
    () => SqlApplicationConfigurationUpdate,
    () => ApplicationCodeConfigurationUpdate,
    () => FlinkApplicationConfigurationUpdate,
    () => EnvironmentPropertyUpdates,
    () => ApplicationSnapshotConfigurationUpdate,
    () => ApplicationSystemRollbackConfigurationUpdate,
    () => VpcConfigurationUpdates,
    () => ZeppelinApplicationConfigurationUpdate,
    () => ApplicationEncryptionConfigurationUpdate,
  ]
);
export var ApplicationDetail = struct(
  n0,
  _AD,
  0,
  [_AARN, _ADp, _AN, _RE, _SER, _AS, _AVI, _CTr, _LUT, _ACD, _CWLOD, _AMCD, _AVUF, _AVRBF, _AVCT, _CT, _AVRBT, _AM],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    4,
    4,
    () => ApplicationConfigurationDescription,
    () => CloudWatchLoggingOptionDescriptions,
    () => ApplicationMaintenanceConfigurationDescription,
    1,
    1,
    4,
    0,
    1,
    0,
  ]
);
export var ApplicationEncryptionConfiguration = struct(n0, _AEC, 0, [_KI, _KT], [0, 0]);
export var ApplicationEncryptionConfigurationDescription = struct(n0, _AECD, 0, [_KI, _KT], [0, 0]);
export var ApplicationEncryptionConfigurationUpdate = struct(n0, _AECU, 0, [_KIU, _KTU], [0, 0]);
export var ApplicationOperationInfo = struct(n0, _AOI, 0, [_Op, _OI, _ST, _ET, _OS], [0, 0, 4, 4, 0]);
export var ApplicationOperationInfoDetails = struct(
  n0,
  _AOID,
  0,
  [_Op, _ST, _ET, _OS, _AVCD, _OFD],
  [0, 4, 4, 0, () => ApplicationVersionChangeDetails, () => OperationFailureDetails]
);
export var ApplicationSnapshotConfiguration = struct(n0, _ASC, 0, [_SE], [2]);
export var ApplicationSnapshotConfigurationDescription = struct(n0, _ASCD, 0, [_SE], [2]);
export var ApplicationSnapshotConfigurationUpdate = struct(n0, _ASCU, 0, [_SEU], [2]);
export var ApplicationSystemRollbackConfiguration = struct(n0, _ASRC, 0, [_REo], [2]);
export var ApplicationSystemRollbackConfigurationDescription = struct(n0, _ASRCD, 0, [_REo], [2]);
export var ApplicationSystemRollbackConfigurationUpdate = struct(n0, _ASRCU, 0, [_REU], [2]);
export var ApplicationVersionChangeDetails = struct(n0, _AVCD, 0, [_AVUF, _AVUT], [1, 1]);
export var CatalogConfiguration = struct(n0, _CCa, 0, [_GDCC], [() => GlueDataCatalogConfiguration]);
export var CatalogConfigurationDescription = struct(
  n0,
  _CCDa,
  0,
  [_GDCCD],
  [() => GlueDataCatalogConfigurationDescription]
);
export var CatalogConfigurationUpdate = struct(n0, _CCUa, 0, [_GDCCU], [() => GlueDataCatalogConfigurationUpdate]);
export var CheckpointConfiguration = struct(n0, _CCh, 0, [_CTo, _CE, _CI, _MPBC], [0, 2, 1, 1]);
export var CheckpointConfigurationDescription = struct(n0, _CCDh, 0, [_CTo, _CE, _CI, _MPBC], [0, 2, 1, 1]);
export var CheckpointConfigurationUpdate = struct(n0, _CCUh, 0, [_CTU, _CEU, _CIU, _MPBCU], [0, 2, 1, 1]);
export var CloudWatchLoggingOptionUpdate = struct(n0, _CWLOU, 0, [_CWLOI, _LSARNU], [0, 0]);
export var CodeContent = struct(n0, _CC, 0, [_TC, _ZFC, _SCL], [0, 21, () => S3ContentLocation]);
export var CodeContentDescription = struct(
  n0,
  _CCD,
  0,
  [_TC, _CMD, _CS, _SACLD],
  [0, 0, 1, () => S3ApplicationCodeLocationDescription]
);
export var CodeContentUpdate = struct(n0, _CCU, 0, [_TCU, _ZFCU, _SCLU], [0, 21, () => S3ContentLocationUpdate]);
export var CreateApplicationRequest = struct(
  n0,
  _CAR,
  0,
  [_AN, _ADp, _RE, _SER, _AC, _CWLOl, _T, _AM],
  [0, 0, 0, 0, () => ApplicationConfiguration, () => CloudWatchLoggingOptions, () => Tags, 0]
);
export var CreateApplicationResponse = struct(n0, _CARr, 0, [_AD], [() => ApplicationDetail]);
export var CustomArtifactConfiguration = struct(
  n0,
  _CAC,
  0,
  [_AT, _SCL, _MR],
  [0, () => S3ContentLocation, () => MavenReference]
);
export var CustomArtifactConfigurationDescription = struct(
  n0,
  _CACD,
  0,
  [_AT, _SCLD, _MRD],
  [0, () => S3ContentLocation, () => MavenReference]
);
export var DeleteApplicationRequest = struct(n0, _DAR, 0, [_AN, _CTr], [0, 4]);
export var DeleteApplicationResponse = struct(n0, _DARe, 0, [], []);
export var DeleteApplicationSnapshotRequest = struct(n0, _DASR, 0, [_AN, _SN, _SCT], [0, 0, 4]);
export var DeleteApplicationSnapshotResponse = struct(n0, _DASRe, 0, [], []);
export var DeployAsApplicationConfiguration = struct(n0, _DAAC, 0, [_SCL], [() => S3ContentBaseLocation]);
export var DeployAsApplicationConfigurationDescription = struct(
  n0,
  _DAACD,
  0,
  [_SCLD],
  [() => S3ContentBaseLocationDescription]
);
export var DeployAsApplicationConfigurationUpdate = struct(n0, _DAACU, 0, [_SCLU], [() => S3ContentBaseLocationUpdate]);
export var DescribeApplicationOperationRequest = struct(n0, _DAORes, 0, [_AN, _OI], [0, 0]);
export var DescribeApplicationOperationResponse = struct(
  n0,
  _DAOResc,
  0,
  [_AOID],
  [() => ApplicationOperationInfoDetails]
);
export var DescribeApplicationRequest = struct(n0, _DARes, 0, [_AN, _IAD], [0, 2]);
export var DescribeApplicationResponse = struct(n0, _DAResc, 0, [_AD], [() => ApplicationDetail]);
export var DescribeApplicationSnapshotRequest = struct(n0, _DASRes, 0, [_AN, _SN], [0, 0]);
export var DescribeApplicationSnapshotResponse = struct(n0, _DASResc, 0, [_SD], [() => SnapshotDetails]);
export var DescribeApplicationVersionRequest = struct(n0, _DAVR, 0, [_AN, _AVI], [0, 1]);
export var DescribeApplicationVersionResponse = struct(n0, _DAVRe, 0, [_AVD], [() => ApplicationDetail]);
export var EnvironmentProperties = struct(n0, _EP, 0, [_PG], [() => PropertyGroups]);
export var EnvironmentPropertyDescriptions = struct(n0, _EPD, 0, [_PGD], [() => PropertyGroups]);
export var EnvironmentPropertyUpdates = struct(n0, _EPU, 0, [_PG], [() => PropertyGroups]);
export var ErrorInfo = struct(n0, _EI, 0, [_ES], [0]);
export var FlinkApplicationConfiguration = struct(
  n0,
  _FAC,
  0,
  [_CCh, _MC, _PC],
  [() => CheckpointConfiguration, () => MonitoringConfiguration, () => ParallelismConfiguration]
);
export var FlinkApplicationConfigurationDescription = struct(
  n0,
  _FACD,
  0,
  [_CCDh, _MCD, _PCD, _JPD],
  [
    () => CheckpointConfigurationDescription,
    () => MonitoringConfigurationDescription,
    () => ParallelismConfigurationDescription,
    0,
  ]
);
export var FlinkApplicationConfigurationUpdate = struct(
  n0,
  _FACU,
  0,
  [_CCUh, _MCU, _PCU],
  [() => CheckpointConfigurationUpdate, () => MonitoringConfigurationUpdate, () => ParallelismConfigurationUpdate]
);
export var GlueDataCatalogConfiguration = struct(n0, _GDCC, 0, [_DARN], [0]);
export var GlueDataCatalogConfigurationDescription = struct(n0, _GDCCD, 0, [_DARN], [0]);
export var GlueDataCatalogConfigurationUpdate = struct(n0, _GDCCU, 0, [_DARNU], [0]);
export var InputLambdaProcessorUpdate = struct(n0, _ILPU, 0, [_RARNU], [0]);
export var InputParallelismUpdate = struct(n0, _IPU, 0, [_CU], [1]);
export var InputProcessingConfigurationUpdate = struct(n0, _IPCU, 0, [_ILPU], [() => InputLambdaProcessorUpdate]);
export var InputSchemaUpdate = struct(n0, _ISU, 0, [_RFU, _REUe, _RCU], [() => RecordFormat, 0, () => RecordColumns]);
export var InputUpdate = struct(
  n0,
  _IU,
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
export var KinesisFirehoseInputUpdate = struct(n0, _KFIU, 0, [_RARNU], [0]);
export var KinesisFirehoseOutputUpdate = struct(n0, _KFOU, 0, [_RARNU], [0]);
export var KinesisStreamsInputUpdate = struct(n0, _KSIU, 0, [_RARNU], [0]);
export var KinesisStreamsOutputUpdate = struct(n0, _KSOU, 0, [_RARNU], [0]);
export var LambdaOutputUpdate = struct(n0, _LOU, 0, [_RARNU], [0]);
export var ListApplicationOperationsRequest = struct(n0, _LAOR, 0, [_AN, _L, _NT, _Op, _OS], [0, 1, 0, 0, 0]);
export var ListApplicationOperationsResponse = struct(
  n0,
  _LAORi,
  0,
  [_AOIL, _NT],
  [() => ApplicationOperationInfoList, 0]
);
export var ListApplicationSnapshotsRequest = struct(n0, _LASR, 0, [_AN, _L, _NT], [0, 1, 0]);
export var ListApplicationSnapshotsResponse = struct(n0, _LASRi, 0, [_SS, _NT], [() => SnapshotSummaries, 0]);
export var MavenReference = struct(n0, _MR, 0, [_GI, _AI, _V], [0, 0, 0]);
export var MonitoringConfiguration = struct(n0, _MC, 0, [_CTo, _ML, _LL], [0, 0, 0]);
export var MonitoringConfigurationDescription = struct(n0, _MCD, 0, [_CTo, _ML, _LL], [0, 0, 0]);
export var MonitoringConfigurationUpdate = struct(n0, _MCU, 0, [_CTU, _MLU, _LLU], [0, 0, 0]);
export var OperationFailureDetails = struct(n0, _OFD, 0, [_ROI, _EI], [0, () => ErrorInfo]);
export var OutputUpdate = struct(
  n0,
  _OU,
  0,
  [_OIu, _NU, _KSOU, _KFOU, _LOU, _DSU],
  [
    0,
    0,
    () => KinesisStreamsOutputUpdate,
    () => KinesisFirehoseOutputUpdate,
    () => LambdaOutputUpdate,
    () => DestinationSchema,
  ]
);
export var ParallelismConfiguration = struct(n0, _PC, 0, [_CTo, _P, _PPKPU, _ASE], [0, 1, 1, 2]);
export var ParallelismConfigurationDescription = struct(n0, _PCD, 0, [_CTo, _P, _PPKPU, _CP, _ASE], [0, 1, 1, 1, 2]);
export var ParallelismConfigurationUpdate = struct(n0, _PCU, 0, [_CTU, _PU, _PPKPUU, _ASEU], [0, 1, 1, 2]);
export var PropertyGroup = struct(n0, _PGr, 0, [_PGI, _PM], [0, 128 | 0]);
export var ReferenceDataSourceUpdate = struct(
  n0,
  _RDSU,
  0,
  [_RI, _TNU, _SRDSU, _RSU],
  [0, 0, () => S3ReferenceDataSourceUpdate, () => SourceSchema]
);
export var RollbackApplicationRequest = struct(n0, _RAR, 0, [_AN, _CAVI], [0, 1]);
export var RollbackApplicationResponse = struct(n0, _RARo, 0, [_AD, _OI], [() => ApplicationDetail, 0]);
export var RunConfigurationDescription = struct(
  n0,
  _RCD,
  0,
  [_ARCD, _FRCD],
  [() => ApplicationRestoreConfiguration, () => FlinkRunConfiguration]
);
export var RunConfigurationUpdate = struct(
  n0,
  _RCUu,
  0,
  [_FRC, _ARC],
  [() => FlinkRunConfiguration, () => ApplicationRestoreConfiguration]
);
export var S3ApplicationCodeLocationDescription = struct(n0, _SACLD, 0, [_BARN, _FK, _OV], [0, 0, 0]);
export var S3ContentBaseLocation = struct(n0, _SCBL, 0, [_BARN, _BP], [0, 0]);
export var S3ContentBaseLocationDescription = struct(n0, _SCBLD, 0, [_BARN, _BP], [0, 0]);
export var S3ContentBaseLocationUpdate = struct(n0, _SCBLU, 0, [_BARNU, _BPU], [0, 0]);
export var S3ContentLocation = struct(n0, _SCL, 0, [_BARN, _FK, _OV], [0, 0, 0]);
export var S3ContentLocationUpdate = struct(n0, _SCLU, 0, [_BARNU, _FKU, _OVU], [0, 0, 0]);
export var S3ReferenceDataSourceUpdate = struct(n0, _SRDSU, 0, [_BARNU, _FKU], [0, 0]);
export var SnapshotDetails = struct(
  n0,
  _SD,
  0,
  [_SN, _SSn, _AVI, _SCT, _RE, _AECD],
  [0, 0, 1, 4, 0, () => ApplicationEncryptionConfigurationDescription]
);
export var SqlApplicationConfiguration = struct(
  n0,
  _SAC,
  0,
  [_In, _Ou, _RDSe],
  [() => Inputs, () => Outputs, () => ReferenceDataSources]
);
export var SqlApplicationConfigurationDescription = struct(
  n0,
  _SACD,
  0,
  [_ID, _OD, _RDSD],
  [() => InputDescriptions, () => OutputDescriptions, () => ReferenceDataSourceDescriptions]
);
export var SqlApplicationConfigurationUpdate = struct(
  n0,
  _SACU,
  0,
  [_IUn, _OUu, _RDSUe],
  [() => InputUpdates, () => OutputUpdates, () => ReferenceDataSourceUpdates]
);
export var UpdateApplicationRequest = struct(
  n0,
  _UAR,
  0,
  [_AN, _CAVI, _ACU, _SERU, _RCUu, _CWLOUl, _CT, _REUu],
  [
    0,
    1,
    () => ApplicationConfigurationUpdate,
    0,
    () => RunConfigurationUpdate,
    () => CloudWatchLoggingOptionUpdates,
    0,
    0,
  ]
);
export var UpdateApplicationResponse = struct(n0, _UARp, 0, [_AD, _OI], [() => ApplicationDetail, 0]);
export var VpcConfigurationUpdate = struct(n0, _VCUp, 0, [_VCI, _SIU, _SGIU], [0, 64 | 0, 64 | 0]);
export var ZeppelinApplicationConfiguration = struct(
  n0,
  _ZAC,
  0,
  [_MC, _CCa, _DAAC, _CACu],
  [
    () => ZeppelinMonitoringConfiguration,
    () => CatalogConfiguration,
    () => DeployAsApplicationConfiguration,
    () => CustomArtifactsConfigurationList,
  ]
);
export var ZeppelinApplicationConfigurationDescription = struct(
  n0,
  _ZACD,
  0,
  [_MCD, _CCDa, _DAACD, _CACDu],
  [
    () => ZeppelinMonitoringConfigurationDescription,
    () => CatalogConfigurationDescription,
    () => DeployAsApplicationConfigurationDescription,
    () => CustomArtifactsConfigurationDescriptionList,
  ]
);
export var ZeppelinApplicationConfigurationUpdate = struct(
  n0,
  _ZACU,
  0,
  [_MCU, _CCUa, _DAACU, _CACU],
  [
    () => ZeppelinMonitoringConfigurationUpdate,
    () => CatalogConfigurationUpdate,
    () => DeployAsApplicationConfigurationUpdate,
    () => CustomArtifactsConfigurationList,
  ]
);
export var ZeppelinMonitoringConfiguration = struct(n0, _ZMC, 0, [_LL], [0]);
export var ZeppelinMonitoringConfigurationDescription = struct(n0, _ZMCD, 0, [_LL], [0]);
export var ZeppelinMonitoringConfigurationUpdate = struct(n0, _ZMCU, 0, [_LLU], [0]);
export var ApplicationOperationInfoList = list(n0, _AOIL, 0, () => ApplicationOperationInfo);
export var CloudWatchLoggingOptions = list(n0, _CWLOl, 0, () => CloudWatchLoggingOption);
export var CloudWatchLoggingOptionUpdates = list(n0, _CWLOUl, 0, () => CloudWatchLoggingOptionUpdate);
export var CustomArtifactsConfigurationDescriptionList = list(
  n0,
  _CACDL,
  0,
  () => CustomArtifactConfigurationDescription
);
export var CustomArtifactsConfigurationList = list(n0, _CACL, 0, () => CustomArtifactConfiguration);
export var Inputs = list(n0, _In, 0, () => Input);
export var InputUpdates = list(n0, _IUn, 0, () => InputUpdate);
export var Outputs = list(n0, _Ou, 0, () => Output);
export var OutputUpdates = list(n0, _OUu, 0, () => OutputUpdate);
export var PropertyGroups = list(n0, _PG, 0, () => PropertyGroup);
export var ReferenceDataSources = list(n0, _RDSe, 0, () => ReferenceDataSource);
export var ReferenceDataSourceUpdates = list(n0, _RDSUe, 0, () => ReferenceDataSourceUpdate);
export var SnapshotSummaries = list(n0, _SS, 0, () => SnapshotDetails);
export var VpcConfigurationDescriptions = list(n0, _VCDp, 0, () => VpcConfigurationDescription);
export var VpcConfigurations = list(n0, _VCp, 0, () => VpcConfiguration);
export var VpcConfigurationUpdates = list(n0, _VCU, 0, () => VpcConfigurationUpdate);
export var PropertyMap = 128 | 0;

export var CreateApplication = op(
  n0,
  _CA,
  0,
  () => CreateApplicationRequest,
  () => CreateApplicationResponse
);
export var DeleteApplication = op(
  n0,
  _DA,
  0,
  () => DeleteApplicationRequest,
  () => DeleteApplicationResponse
);
export var DeleteApplicationSnapshot = op(
  n0,
  _DAS,
  0,
  () => DeleteApplicationSnapshotRequest,
  () => DeleteApplicationSnapshotResponse
);
export var DescribeApplication = op(
  n0,
  _DAe,
  0,
  () => DescribeApplicationRequest,
  () => DescribeApplicationResponse
);
export var DescribeApplicationOperation = op(
  n0,
  _DAOe,
  0,
  () => DescribeApplicationOperationRequest,
  () => DescribeApplicationOperationResponse
);
export var DescribeApplicationSnapshot = op(
  n0,
  _DASe,
  0,
  () => DescribeApplicationSnapshotRequest,
  () => DescribeApplicationSnapshotResponse
);
export var DescribeApplicationVersion = op(
  n0,
  _DAV,
  0,
  () => DescribeApplicationVersionRequest,
  () => DescribeApplicationVersionResponse
);
export var ListApplicationOperations = op(
  n0,
  _LAO,
  0,
  () => ListApplicationOperationsRequest,
  () => ListApplicationOperationsResponse
);
export var ListApplicationSnapshots = op(
  n0,
  _LAS,
  0,
  () => ListApplicationSnapshotsRequest,
  () => ListApplicationSnapshotsResponse
);
export var RollbackApplication = op(
  n0,
  _RA,
  0,
  () => RollbackApplicationRequest,
  () => RollbackApplicationResponse
);
export var UpdateApplication = op(
  n0,
  _UA,
  0,
  () => UpdateApplicationRequest,
  () => UpdateApplicationResponse
);
