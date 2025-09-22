// smithy-typescript generated code
import { error, list, op, sim, struct } from "@smithy/core/schema";

import {
  ConcurrentModificationException as __ConcurrentModificationException,
  InvalidArgumentException as __InvalidArgumentException,
  InvalidKMSResourceException as __InvalidKMSResourceException,
  InvalidSourceException as __InvalidSourceException,
  LimitExceededException as __LimitExceededException,
  ResourceInUseException as __ResourceInUseException,
  ResourceNotFoundException as __ResourceNotFoundException,
  ServiceUnavailableException as __ServiceUnavailableException,
} from "../models/index";
import {
  _ABH,
  _AC,
  _ADC,
  _ADD,
  _ADU,
  _AFD,
  _AK,
  _AN,
  _AO,
  _AOSSBH,
  _AOSSDC,
  _AOSSDD,
  _AOSSDU,
  _AOSSRO,
  _ARO,
  _AU,
  _AV,
  _AWSKMSKARN,
  _BARN,
  _BFC,
  _BFFPP,
  _BH,
  _BSB,
  _C,
  _c,
  _CA,
  _CARN,
  _CC,
  _CCN,
  _CCo,
  _CDIJKTU,
  _CDS,
  _CDSI,
  _CDSO,
  _CDSVI,
  _CE,
  _CEl,
  _CEo,
  _CF,
  _CI,
  _CIa,
  _CJDBCURL,
  _CME,
  _CO,
  _Co,
  _co,
  _Com,
  _CT,
  _CTJKM,
  _CTZ,
  _CWLO,
  _D,
  _Da,
  _DARN,
  _Dat,
  _DCL,
  _DD,
  _DDIF,
  _DDL,
  _DDN,
  _DDS,
  _DDSe,
  _DDSI,
  _DDSIe,
  _DDSO,
  _DDSOe,
  _De,
  _Des,
  _Det,
  _DFCC,
  _DI,
  _DIO,
  _DIS,
  _DKT,
  _DL,
  _DLO,
  _DN,
  _DPC,
  _DPSC,
  _DPSD,
  _DSAC,
  _DSARN,
  _DSC,
  _DSD,
  _DSDe,
  _DSEC,
  _DSECI,
  _DSI,
  _DSIL,
  _DSN,
  _DSS,
  _DST,
  _DSTe,
  _DSVPCC,
  _DTC,
  _DTCe,
  _DTCL,
  _DTL,
  _DTN,
  _DTNe,
  _E,
  _e,
  _EBH,
  _EC,
  _ECn,
  _ECr,
  _EDC,
  _EDCn,
  _EDD,
  _EDU,
  _EM,
  _En,
  _Enc,
  _EOP,
  _EP,
  _ERO,
  _ESDC,
  _ESDD,
  _ESDI,
  _ESDU,
  _ESTK,
  _Ex,
  _FD,
  _FE,
  _FPC,
  _FV,
  _hE,
  _HEAK,
  _HEAN,
  _HEAV,
  _HEBH,
  _HEC,
  _HECA,
  _HECAL,
  _HECATIS,
  _HECE,
  _HECET,
  _HECT,
  _HED,
  _HEDC,
  _HEDD,
  _HEDU,
  _HERC,
  _HERO,
  _HEU,
  _HJSD,
  _HMD,
  _HMT,
  _I,
  _IAE,
  _Id,
  _IDC,
  _IDD,
  _Ide,
  _IDU,
  _IFC,
  _IIS,
  _IKMSRE,
  _IN,
  _IRP,
  _ISE,
  _K,
  _KARN,
  _KMSEC,
  _KP,
  _KSARN,
  _KSSC,
  _KSSD,
  _KT,
  _L,
  _LEE,
  _LGN,
  _LSN,
  _LTFDS,
  _LTFDSI,
  _LTFDSO,
  _LTFDSOTL,
  _LUT,
  _m,
  _MDCN,
  _MPB,
  _MSKCARN,
  _MSKSC,
  _MSKSD,
  _N,
  _NEC,
  _OFC,
  _OSD,
  _OXJSD,
  _P,
  _Pa,
  _PC,
  _PF,
  _PFa,
  _PK,
  _PL,
  _PLVI,
  _PN,
  _Po,
  _PP,
  _PPL,
  _PR,
  _Pr,
  _PRB,
  _PRBI,
  _PRBO,
  _PRBRE,
  _PRBREL,
  _PRBRELu,
  _PRI,
  _PRO,
  _Pro,
  _Proc,
  _PS,
  _PSB,
  _PSD,
  _PT,
  _PV,
  _R,
  _RARN,
  _RB,
  _RC,
  _RDC,
  _RDD,
  _RDU,
  _Re,
  _Reg,
  _RFT,
  _RI,
  _RIS,
  _RIUE,
  _RNFE,
  _RO,
  _RR,
  _RRO,
  _RT,
  _S,
  _s,
  _SARN,
  _SAU,
  _SBC,
  _SBD,
  _SBH,
  _SBHp,
  _SBM,
  _SBU,
  _SC,
  _Sc,
  _SCc,
  _SCCN,
  _SD,
  _SDC,
  _SDCn,
  _SDCp,
  _SDD,
  _SDDn,
  _SDDp,
  _SDo,
  _SDSE,
  _SDSEI,
  _SDSEIt,
  _SDSEO,
  _SDSEOt,
  _SDSEt,
  _SDU,
  _SDUn,
  _SDUp,
  _Se,
  _SEC,
  _SEOP,
  _SGI,
  _SI,
  _SIMB,
  _SIu,
  _SK,
  _SKP,
  _SMC,
  _SMDCN,
  _SN,
  _So,
  _SPK,
  _SPLVI,
  _SR,
  _SRC,
  _SRO,
  _SROp,
  _SS,
  _SSB,
  _SSLM,
  _ST,
  _SU,
  _SUE,
  _SUp,
  _SVC,
  _SWT,
  _T,
  _Ta,
  _Tab,
  _Tag,
  _TCC,
  _TDS,
  _TDSI,
  _TDSITL,
  _TDSO,
  _TF,
  _THIMB,
  _TK,
  _TN,
  _TNa,
  _TNo,
  _Ty,
  _U,
  _UD,
  _UDI,
  _UDO,
  _UDS,
  _UDSI,
  _UDSO,
  _UK,
  _Ur,
  _Us,
  _V,
  _VC,
  _VCD,
  _VESN,
  _VI,
  _VIp,
  _WL,
  _WV,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var HttpEndpointAccessKey = sim(n0, _HEAK, 0, 8);
export var HttpEndpointAttributeName = sim(n0, _HEAN, 0, 8);
export var HttpEndpointAttributeValue = sim(n0, _HEAV, 0, 8);
export var HttpEndpointUrl = sim(n0, _HEU, 0, 8);
export var Password = sim(n0, _P, 0, 8);
export var SnowflakeAccountUrl = sim(n0, _SAU, 0, 8);
export var SnowflakeContentColumnName = sim(n0, _SCCN, 0, 8);
export var SnowflakeDatabase = sim(n0, _SD, 0, 8);
export var SnowflakeKeyPassphrase = sim(n0, _SKP, 0, 8);
export var SnowflakeMetaDataColumnName = sim(n0, _SMDCN, 0, 8);
export var SnowflakePrivateKey = sim(n0, _SPK, 0, 8);
export var SnowflakePrivateLinkVpceId = sim(n0, _SPLVI, 0, 8);
export var SnowflakeRole = sim(n0, _SR, 0, 8);
export var SnowflakeSchema = sim(n0, _SS, 0, 8);
export var SnowflakeTable = sim(n0, _ST, 0, 8);
export var SnowflakeUser = sim(n0, _SU, 0, 8);
export var Username = sim(n0, _U, 0, 8);
export var AmazonOpenSearchServerlessBufferingHints = struct(n0, _AOSSBH, 0, [_IIS, _SIMB], [1, 1]);
export var AmazonOpenSearchServerlessDestinationConfiguration = struct(
  n0,
  _AOSSDC,
  0,
  [_RARN, _CE, _IN, _BH, _RO, _SBM, _SC, _PC, _CWLO, _VC],
  [
    0,
    0,
    0,
    () => AmazonOpenSearchServerlessBufferingHints,
    () => AmazonOpenSearchServerlessRetryOptions,
    0,
    () => S3DestinationConfiguration,
    () => ProcessingConfiguration,
    () => CloudWatchLoggingOptions,
    () => VpcConfiguration,
  ]
);
export var AmazonOpenSearchServerlessDestinationDescription = struct(
  n0,
  _AOSSDD,
  0,
  [_RARN, _CE, _IN, _BH, _RO, _SBM, _SDD, _PC, _CWLO, _VCD],
  [
    0,
    0,
    0,
    () => AmazonOpenSearchServerlessBufferingHints,
    () => AmazonOpenSearchServerlessRetryOptions,
    0,
    () => S3DestinationDescription,
    () => ProcessingConfiguration,
    () => CloudWatchLoggingOptions,
    () => VpcConfigurationDescription,
  ]
);
export var AmazonOpenSearchServerlessDestinationUpdate = struct(
  n0,
  _AOSSDU,
  0,
  [_RARN, _CE, _IN, _BH, _RO, _SUp, _PC, _CWLO],
  [
    0,
    0,
    0,
    () => AmazonOpenSearchServerlessBufferingHints,
    () => AmazonOpenSearchServerlessRetryOptions,
    () => S3DestinationUpdate,
    () => ProcessingConfiguration,
    () => CloudWatchLoggingOptions,
  ]
);
export var AmazonOpenSearchServerlessRetryOptions = struct(n0, _AOSSRO, 0, [_DIS], [1]);
export var AmazonopensearchserviceBufferingHints = struct(n0, _ABH, 0, [_IIS, _SIMB], [1, 1]);
export var AmazonopensearchserviceDestinationConfiguration = struct(
  n0,
  _ADC,
  0,
  [_RARN, _DARN, _CEl, _IN, _TN, _IRP, _BH, _RO, _SBM, _SC, _PC, _CWLO, _VC, _DIO],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    () => AmazonopensearchserviceBufferingHints,
    () => AmazonopensearchserviceRetryOptions,
    0,
    () => S3DestinationConfiguration,
    () => ProcessingConfiguration,
    () => CloudWatchLoggingOptions,
    () => VpcConfiguration,
    () => DocumentIdOptions,
  ]
);
export var AmazonopensearchserviceDestinationDescription = struct(
  n0,
  _ADD,
  0,
  [_RARN, _DARN, _CEl, _IN, _TN, _IRP, _BH, _RO, _SBM, _SDD, _PC, _CWLO, _VCD, _DIO],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    () => AmazonopensearchserviceBufferingHints,
    () => AmazonopensearchserviceRetryOptions,
    0,
    () => S3DestinationDescription,
    () => ProcessingConfiguration,
    () => CloudWatchLoggingOptions,
    () => VpcConfigurationDescription,
    () => DocumentIdOptions,
  ]
);
export var AmazonopensearchserviceDestinationUpdate = struct(
  n0,
  _ADU,
  0,
  [_RARN, _DARN, _CEl, _IN, _TN, _IRP, _BH, _RO, _SUp, _PC, _CWLO, _DIO],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    () => AmazonopensearchserviceBufferingHints,
    () => AmazonopensearchserviceRetryOptions,
    () => S3DestinationUpdate,
    () => ProcessingConfiguration,
    () => CloudWatchLoggingOptions,
    () => DocumentIdOptions,
  ]
);
export var AmazonopensearchserviceRetryOptions = struct(n0, _ARO, 0, [_DIS], [1]);
export var AuthenticationConfiguration = struct(n0, _AC, 0, [_RARN, _C], [0, 0]);
export var BufferingHints = struct(n0, _BH, 0, [_SIMB, _IIS], [1, 1]);
export var CatalogConfiguration = struct(n0, _CC, 0, [_CARN, _WL], [0, 0]);
export var CloudWatchLoggingOptions = struct(n0, _CWLO, 0, [_E, _LGN, _LSN], [2, 0, 0]);
export var ConcurrentModificationException = error(
  n0,
  _CME,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __ConcurrentModificationException
);
export var CopyCommand = struct(n0, _CCo, 0, [_DTN, _DTC, _CO], [0, 0, 0]);
export var CreateDeliveryStreamInput = struct(
  n0,
  _CDSI,
  0,
  [
    _DSN,
    _DST,
    _DPSC,
    _KSSC,
    _DSECI,
    _SDC,
    _ESDC,
    _RDC,
    _EDC,
    _ADC,
    _SDCp,
    _HEDC,
    _T,
    _AOSSDC,
    _MSKSC,
    _SDCn,
    _IDC,
    _DSC,
  ],
  [
    0,
    0,
    () => DirectPutSourceConfiguration,
    () => KinesisStreamSourceConfiguration,
    () => DeliveryStreamEncryptionConfigurationInput,
    () => S3DestinationConfiguration,
    () => ExtendedS3DestinationConfiguration,
    [() => RedshiftDestinationConfiguration, 0],
    () => ElasticsearchDestinationConfiguration,
    () => AmazonopensearchserviceDestinationConfiguration,
    () => SplunkDestinationConfiguration,
    [() => HttpEndpointDestinationConfiguration, 0],
    () => TagDeliveryStreamInputTagList,
    () => AmazonOpenSearchServerlessDestinationConfiguration,
    () => MSKSourceConfiguration,
    [() => SnowflakeDestinationConfiguration, 0],
    () => IcebergDestinationConfiguration,
    () => DatabaseSourceConfiguration,
  ]
);
export var CreateDeliveryStreamOutput = struct(n0, _CDSO, 0, [_DSARN], [0]);
export var DatabaseColumnList = struct(n0, _DCL, 0, [_I, _Ex], [64 | 0, 64 | 0]);
export var DatabaseList = struct(n0, _DL, 0, [_I, _Ex], [64 | 0, 64 | 0]);
export var DatabaseSnapshotInfo = struct(
  n0,
  _DSI,
  0,
  [_Id, _Ta, _RT, _RB, _S, _FD],
  [0, 0, 4, 0, 0, () => FailureDescription]
);
export var DatabaseSourceAuthenticationConfiguration = struct(
  n0,
  _DSAC,
  0,
  [_SMC],
  [() => SecretsManagerConfiguration]
);
export var DatabaseSourceConfiguration = struct(
  n0,
  _DSC,
  0,
  [_Ty, _En, _Po, _SSLM, _D, _Tab, _Co, _SK, _SWT, _DSAC, _DSVPCC],
  [
    0,
    0,
    1,
    0,
    () => DatabaseList,
    () => DatabaseTableList,
    () => DatabaseColumnList,
    64 | 0,
    0,
    () => DatabaseSourceAuthenticationConfiguration,
    () => DatabaseSourceVPCConfiguration,
  ]
);
export var DatabaseSourceDescription = struct(
  n0,
  _DSD,
  0,
  [_Ty, _En, _Po, _SSLM, _D, _Tab, _Co, _SK, _SWT, _SI, _DSAC, _DSVPCC],
  [
    0,
    0,
    1,
    0,
    () => DatabaseList,
    () => DatabaseTableList,
    () => DatabaseColumnList,
    64 | 0,
    0,
    () => DatabaseSnapshotInfoList,
    () => DatabaseSourceAuthenticationConfiguration,
    () => DatabaseSourceVPCConfiguration,
  ]
);
export var DatabaseSourceVPCConfiguration = struct(n0, _DSVPCC, 0, [_VESN], [0]);
export var DatabaseTableList = struct(n0, _DTL, 0, [_I, _Ex], [64 | 0, 64 | 0]);
export var DataFormatConversionConfiguration = struct(
  n0,
  _DFCC,
  0,
  [_SCc, _IFC, _OFC, _E],
  [() => SchemaConfiguration, () => InputFormatConfiguration, () => OutputFormatConfiguration, 2]
);
export var DeleteDeliveryStreamInput = struct(n0, _DDSI, 0, [_DSN, _AFD], [0, 2]);
export var DeleteDeliveryStreamOutput = struct(n0, _DDSO, 0, [], []);
export var DeliveryStreamDescription = struct(
  n0,
  _DSDe,
  0,
  [_DSN, _DSARN, _DSS, _FD, _DSEC, _DST, _VI, _CT, _LUT, _So, _De, _HMD],
  [
    0,
    0,
    0,
    () => FailureDescription,
    () => DeliveryStreamEncryptionConfiguration,
    0,
    0,
    4,
    4,
    () => SourceDescription,
    [() => DestinationDescriptionList, 0],
    2,
  ]
);
export var DeliveryStreamEncryptionConfiguration = struct(
  n0,
  _DSEC,
  0,
  [_KARN, _KT, _S, _FD],
  [0, 0, 0, () => FailureDescription]
);
export var DeliveryStreamEncryptionConfigurationInput = struct(n0, _DSECI, 0, [_KARN, _KT], [0, 0]);
export var DescribeDeliveryStreamInput = struct(n0, _DDSIe, 0, [_DSN, _L, _ESDI], [0, 1, 0]);
export var DescribeDeliveryStreamOutput = struct(n0, _DDSOe, 0, [_DSDe], [[() => DeliveryStreamDescription, 0]]);
export var Deserializer = struct(n0, _Des, 0, [_OXJSD, _HJSD], [() => OpenXJsonSerDe, () => HiveJsonSerDe]);
export var DestinationDescription = struct(
  n0,
  _DD,
  0,
  [_DI, _SDD, _ESDD, _RDD, _EDD, _ADD, _SDDp, _HEDD, _SDDn, _AOSSDD, _IDD],
  [
    0,
    () => S3DestinationDescription,
    () => ExtendedS3DestinationDescription,
    [() => RedshiftDestinationDescription, 0],
    () => ElasticsearchDestinationDescription,
    () => AmazonopensearchserviceDestinationDescription,
    () => SplunkDestinationDescription,
    [() => HttpEndpointDestinationDescription, 0],
    [() => SnowflakeDestinationDescription, 0],
    () => AmazonOpenSearchServerlessDestinationDescription,
    () => IcebergDestinationDescription,
  ]
);
export var DestinationTableConfiguration = struct(
  n0,
  _DTCe,
  0,
  [_DTNe, _DDN, _UK, _PS, _SEOP],
  [0, 0, 64 | 0, () => PartitionSpec, 0]
);
export var DirectPutSourceConfiguration = struct(n0, _DPSC, 0, [_THIMB], [1]);
export var DirectPutSourceDescription = struct(n0, _DPSD, 0, [_THIMB], [1]);
export var DocumentIdOptions = struct(n0, _DIO, 0, [_DDIF], [0]);
export var DynamicPartitioningConfiguration = struct(n0, _DPC, 0, [_RO, _E], [() => RetryOptions, 2]);
export var ElasticsearchBufferingHints = struct(n0, _EBH, 0, [_IIS, _SIMB], [1, 1]);
export var ElasticsearchDestinationConfiguration = struct(
  n0,
  _EDC,
  0,
  [_RARN, _DARN, _CEl, _IN, _TN, _IRP, _BH, _RO, _SBM, _SC, _PC, _CWLO, _VC, _DIO],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    () => ElasticsearchBufferingHints,
    () => ElasticsearchRetryOptions,
    0,
    () => S3DestinationConfiguration,
    () => ProcessingConfiguration,
    () => CloudWatchLoggingOptions,
    () => VpcConfiguration,
    () => DocumentIdOptions,
  ]
);
export var ElasticsearchDestinationDescription = struct(
  n0,
  _EDD,
  0,
  [_RARN, _DARN, _CEl, _IN, _TN, _IRP, _BH, _RO, _SBM, _SDD, _PC, _CWLO, _VCD, _DIO],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    () => ElasticsearchBufferingHints,
    () => ElasticsearchRetryOptions,
    0,
    () => S3DestinationDescription,
    () => ProcessingConfiguration,
    () => CloudWatchLoggingOptions,
    () => VpcConfigurationDescription,
    () => DocumentIdOptions,
  ]
);
export var ElasticsearchDestinationUpdate = struct(
  n0,
  _EDU,
  0,
  [_RARN, _DARN, _CEl, _IN, _TN, _IRP, _BH, _RO, _SUp, _PC, _CWLO, _DIO],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    () => ElasticsearchBufferingHints,
    () => ElasticsearchRetryOptions,
    () => S3DestinationUpdate,
    () => ProcessingConfiguration,
    () => CloudWatchLoggingOptions,
    () => DocumentIdOptions,
  ]
);
export var ElasticsearchRetryOptions = struct(n0, _ERO, 0, [_DIS], [1]);
export var EncryptionConfiguration = struct(n0, _EC, 0, [_NEC, _KMSEC], [0, () => KMSEncryptionConfig]);
export var ExtendedS3DestinationConfiguration = struct(
  n0,
  _ESDC,
  0,
  [_RARN, _BARN, _Pr, _EOP, _BH, _CF, _EC, _CWLO, _PC, _SBM, _SBC, _DFCC, _DPC, _FE, _CTZ],
  [
    0,
    0,
    0,
    0,
    () => BufferingHints,
    0,
    () => EncryptionConfiguration,
    () => CloudWatchLoggingOptions,
    () => ProcessingConfiguration,
    0,
    () => S3DestinationConfiguration,
    () => DataFormatConversionConfiguration,
    () => DynamicPartitioningConfiguration,
    0,
    0,
  ]
);
export var ExtendedS3DestinationDescription = struct(
  n0,
  _ESDD,
  0,
  [_RARN, _BARN, _Pr, _EOP, _BH, _CF, _EC, _CWLO, _PC, _SBM, _SBD, _DFCC, _DPC, _FE, _CTZ],
  [
    0,
    0,
    0,
    0,
    () => BufferingHints,
    0,
    () => EncryptionConfiguration,
    () => CloudWatchLoggingOptions,
    () => ProcessingConfiguration,
    0,
    () => S3DestinationDescription,
    () => DataFormatConversionConfiguration,
    () => DynamicPartitioningConfiguration,
    0,
    0,
  ]
);
export var ExtendedS3DestinationUpdate = struct(
  n0,
  _ESDU,
  0,
  [_RARN, _BARN, _Pr, _EOP, _BH, _CF, _EC, _CWLO, _PC, _SBM, _SBU, _DFCC, _DPC, _FE, _CTZ],
  [
    0,
    0,
    0,
    0,
    () => BufferingHints,
    0,
    () => EncryptionConfiguration,
    () => CloudWatchLoggingOptions,
    () => ProcessingConfiguration,
    0,
    () => S3DestinationUpdate,
    () => DataFormatConversionConfiguration,
    () => DynamicPartitioningConfiguration,
    0,
    0,
  ]
);
export var FailureDescription = struct(n0, _FD, 0, [_Ty, _Det], [0, 0]);
export var HiveJsonSerDe = struct(n0, _HJSD, 0, [_TF], [64 | 0]);
export var HttpEndpointBufferingHints = struct(n0, _HEBH, 0, [_SIMB, _IIS], [1, 1]);
export var HttpEndpointCommonAttribute = struct(
  n0,
  _HECA,
  0,
  [_AN, _AV],
  [
    [() => HttpEndpointAttributeName, 0],
    [() => HttpEndpointAttributeValue, 0],
  ]
);
export var HttpEndpointConfiguration = struct(
  n0,
  _HEC,
  0,
  [_Ur, _N, _AK],
  [[() => HttpEndpointUrl, 0], 0, [() => HttpEndpointAccessKey, 0]]
);
export var HttpEndpointDescription = struct(n0, _HED, 0, [_Ur, _N], [[() => HttpEndpointUrl, 0], 0]);
export var HttpEndpointDestinationConfiguration = struct(
  n0,
  _HEDC,
  0,
  [_ECn, _BH, _CWLO, _RC, _PC, _RARN, _RO, _SBM, _SC, _SMC],
  [
    [() => HttpEndpointConfiguration, 0],
    () => HttpEndpointBufferingHints,
    () => CloudWatchLoggingOptions,
    [() => HttpEndpointRequestConfiguration, 0],
    () => ProcessingConfiguration,
    0,
    () => HttpEndpointRetryOptions,
    0,
    () => S3DestinationConfiguration,
    () => SecretsManagerConfiguration,
  ]
);
export var HttpEndpointDestinationDescription = struct(
  n0,
  _HEDD,
  0,
  [_ECn, _BH, _CWLO, _RC, _PC, _RARN, _RO, _SBM, _SDD, _SMC],
  [
    [() => HttpEndpointDescription, 0],
    () => HttpEndpointBufferingHints,
    () => CloudWatchLoggingOptions,
    [() => HttpEndpointRequestConfiguration, 0],
    () => ProcessingConfiguration,
    0,
    () => HttpEndpointRetryOptions,
    0,
    () => S3DestinationDescription,
    () => SecretsManagerConfiguration,
  ]
);
export var HttpEndpointDestinationUpdate = struct(
  n0,
  _HEDU,
  0,
  [_ECn, _BH, _CWLO, _RC, _PC, _RARN, _RO, _SBM, _SUp, _SMC],
  [
    [() => HttpEndpointConfiguration, 0],
    () => HttpEndpointBufferingHints,
    () => CloudWatchLoggingOptions,
    [() => HttpEndpointRequestConfiguration, 0],
    () => ProcessingConfiguration,
    0,
    () => HttpEndpointRetryOptions,
    0,
    () => S3DestinationUpdate,
    () => SecretsManagerConfiguration,
  ]
);
export var HttpEndpointRequestConfiguration = struct(
  n0,
  _HERC,
  0,
  [_CEo, _CA],
  [0, [() => HttpEndpointCommonAttributesList, 0]]
);
export var HttpEndpointRetryOptions = struct(n0, _HERO, 0, [_DIS], [1]);
export var IcebergDestinationConfiguration = struct(
  n0,
  _IDC,
  0,
  [_DTCL, _SEC, _TCC, _BH, _CWLO, _PC, _SBM, _RO, _RARN, _AO, _CC, _SC],
  [
    () => DestinationTableConfigurationList,
    () => SchemaEvolutionConfiguration,
    () => TableCreationConfiguration,
    () => BufferingHints,
    () => CloudWatchLoggingOptions,
    () => ProcessingConfiguration,
    0,
    () => RetryOptions,
    0,
    2,
    () => CatalogConfiguration,
    () => S3DestinationConfiguration,
  ]
);
export var IcebergDestinationDescription = struct(
  n0,
  _IDD,
  0,
  [_DTCL, _SEC, _TCC, _BH, _CWLO, _PC, _SBM, _RO, _RARN, _AO, _CC, _SDD],
  [
    () => DestinationTableConfigurationList,
    () => SchemaEvolutionConfiguration,
    () => TableCreationConfiguration,
    () => BufferingHints,
    () => CloudWatchLoggingOptions,
    () => ProcessingConfiguration,
    0,
    () => RetryOptions,
    0,
    2,
    () => CatalogConfiguration,
    () => S3DestinationDescription,
  ]
);
export var IcebergDestinationUpdate = struct(
  n0,
  _IDU,
  0,
  [_DTCL, _SEC, _TCC, _BH, _CWLO, _PC, _SBM, _RO, _RARN, _AO, _CC, _SC],
  [
    () => DestinationTableConfigurationList,
    () => SchemaEvolutionConfiguration,
    () => TableCreationConfiguration,
    () => BufferingHints,
    () => CloudWatchLoggingOptions,
    () => ProcessingConfiguration,
    0,
    () => RetryOptions,
    0,
    2,
    () => CatalogConfiguration,
    () => S3DestinationConfiguration,
  ]
);
export var InputFormatConfiguration = struct(n0, _IFC, 0, [_Des], [() => Deserializer]);
export var InvalidArgumentException = error(
  n0,
  _IAE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __InvalidArgumentException
);
export var InvalidKMSResourceException = error(
  n0,
  _IKMSRE,
  {
    [_e]: _c,
  },
  [_co, _m],
  [0, 0],

  __InvalidKMSResourceException
);
export var InvalidSourceException = error(
  n0,
  _ISE,
  {
    [_e]: _c,
  },
  [_co, _m],
  [0, 0],

  __InvalidSourceException
);
export var KinesisStreamSourceConfiguration = struct(n0, _KSSC, 0, [_KSARN, _RARN], [0, 0]);
export var KinesisStreamSourceDescription = struct(n0, _KSSD, 0, [_KSARN, _RARN, _DSTe], [0, 0, 4]);
export var KMSEncryptionConfig = struct(n0, _KMSEC, 0, [_AWSKMSKARN], [0]);
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
export var ListTagsForDeliveryStreamInput = struct(n0, _LTFDSI, 0, [_DSN, _ESTK, _L], [0, 0, 1]);
export var ListTagsForDeliveryStreamOutput = struct(
  n0,
  _LTFDSO,
  0,
  [_T, _HMT],
  [() => ListTagsForDeliveryStreamOutputTagList, 2]
);
export var MSKSourceConfiguration = struct(
  n0,
  _MSKSC,
  0,
  [_MSKCARN, _TNo, _AC, _RFT],
  [0, 0, () => AuthenticationConfiguration, 4]
);
export var MSKSourceDescription = struct(
  n0,
  _MSKSD,
  0,
  [_MSKCARN, _TNo, _AC, _DSTe, _RFT],
  [0, 0, () => AuthenticationConfiguration, 4, 4]
);
export var OpenXJsonSerDe = struct(n0, _OXJSD, 0, [_CDIJKTU, _CI, _CTJKM], [2, 2, 128 | 0]);
export var OrcSerDe = struct(
  n0,
  _OSD,
  0,
  [_SSB, _BSB, _RIS, _EP, _PT, _Com, _BFC, _BFFPP, _DKT, _FV],
  [1, 1, 1, 2, 1, 0, 64 | 0, 1, 1, 0]
);
export var OutputFormatConfiguration = struct(n0, _OFC, 0, [_Se], [() => Serializer]);
export var ParquetSerDe = struct(n0, _PSD, 0, [_BSB, _PSB, _Com, _EDCn, _MPB, _WV], [1, 1, 0, 2, 1, 0]);
export var PartitionField = struct(n0, _PF, 0, [_SN], [0]);
export var PartitionSpec = struct(n0, _PS, 0, [_Ide], [() => PartitionFields]);
export var ProcessingConfiguration = struct(n0, _PC, 0, [_E, _Pro], [2, () => ProcessorList]);
export var Processor = struct(n0, _Proc, 0, [_Ty, _Pa], [0, () => ProcessorParameterList]);
export var ProcessorParameter = struct(n0, _PP, 0, [_PN, _PV], [0, 0]);
export var PutRecordBatchInput = struct(n0, _PRBI, 0, [_DSN, _R], [0, () => PutRecordBatchRequestEntryList]);
export var PutRecordBatchOutput = struct(
  n0,
  _PRBO,
  0,
  [_FPC, _Enc, _RR],
  [1, 2, () => PutRecordBatchResponseEntryList]
);
export var PutRecordBatchResponseEntry = struct(n0, _PRBRE, 0, [_RI, _ECr, _EM], [0, 0, 0]);
export var PutRecordInput = struct(n0, _PRI, 0, [_DSN, _Re], [0, () => _Record]);
export var PutRecordOutput = struct(n0, _PRO, 0, [_RI, _Enc], [0, 2]);
export var _Record = struct(n0, _Re, 0, [_Da], [21]);
export var RedshiftDestinationConfiguration = struct(
  n0,
  _RDC,
  0,
  [_RARN, _CJDBCURL, _CCo, _U, _P, _RO, _SC, _PC, _SBM, _SBC, _CWLO, _SMC],
  [
    0,
    0,
    () => CopyCommand,
    [() => Username, 0],
    [() => Password, 0],
    () => RedshiftRetryOptions,
    () => S3DestinationConfiguration,
    () => ProcessingConfiguration,
    0,
    () => S3DestinationConfiguration,
    () => CloudWatchLoggingOptions,
    () => SecretsManagerConfiguration,
  ]
);
export var RedshiftDestinationDescription = struct(
  n0,
  _RDD,
  0,
  [_RARN, _CJDBCURL, _CCo, _U, _RO, _SDD, _PC, _SBM, _SBD, _CWLO, _SMC],
  [
    0,
    0,
    () => CopyCommand,
    [() => Username, 0],
    () => RedshiftRetryOptions,
    () => S3DestinationDescription,
    () => ProcessingConfiguration,
    0,
    () => S3DestinationDescription,
    () => CloudWatchLoggingOptions,
    () => SecretsManagerConfiguration,
  ]
);
export var RedshiftDestinationUpdate = struct(
  n0,
  _RDU,
  0,
  [_RARN, _CJDBCURL, _CCo, _U, _P, _RO, _SUp, _PC, _SBM, _SBU, _CWLO, _SMC],
  [
    0,
    0,
    () => CopyCommand,
    [() => Username, 0],
    [() => Password, 0],
    () => RedshiftRetryOptions,
    () => S3DestinationUpdate,
    () => ProcessingConfiguration,
    0,
    () => S3DestinationUpdate,
    () => CloudWatchLoggingOptions,
    () => SecretsManagerConfiguration,
  ]
);
export var RedshiftRetryOptions = struct(n0, _RRO, 0, [_DIS], [1]);
export var ResourceInUseException = error(
  n0,
  _RIUE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __ResourceInUseException
);
export var ResourceNotFoundException = error(
  n0,
  _RNFE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __ResourceNotFoundException
);
export var RetryOptions = struct(n0, _RO, 0, [_DIS], [1]);
export var S3DestinationConfiguration = struct(
  n0,
  _SDC,
  0,
  [_RARN, _BARN, _Pr, _EOP, _BH, _CF, _EC, _CWLO],
  [0, 0, 0, 0, () => BufferingHints, 0, () => EncryptionConfiguration, () => CloudWatchLoggingOptions]
);
export var S3DestinationDescription = struct(
  n0,
  _SDD,
  0,
  [_RARN, _BARN, _Pr, _EOP, _BH, _CF, _EC, _CWLO],
  [0, 0, 0, 0, () => BufferingHints, 0, () => EncryptionConfiguration, () => CloudWatchLoggingOptions]
);
export var S3DestinationUpdate = struct(
  n0,
  _SDU,
  0,
  [_RARN, _BARN, _Pr, _EOP, _BH, _CF, _EC, _CWLO],
  [0, 0, 0, 0, () => BufferingHints, 0, () => EncryptionConfiguration, () => CloudWatchLoggingOptions]
);
export var SchemaConfiguration = struct(n0, _SCc, 0, [_RARN, _CIa, _DN, _TNa, _Reg, _VI], [0, 0, 0, 0, 0, 0]);
export var SchemaEvolutionConfiguration = struct(n0, _SEC, 0, [_E], [2]);
export var SecretsManagerConfiguration = struct(n0, _SMC, 0, [_SARN, _RARN, _E], [0, 0, 2]);
export var Serializer = struct(n0, _Se, 0, [_PSD, _OSD], [() => ParquetSerDe, () => OrcSerDe]);
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
export var SnowflakeBufferingHints = struct(n0, _SBH, 0, [_SIMB, _IIS], [1, 1]);
export var SnowflakeDestinationConfiguration = struct(
  n0,
  _SDCn,
  0,
  [_AU, _PK, _KP, _Us, _Dat, _Sc, _Ta, _SRC, _DLO, _MDCN, _CCN, _SVC, _CWLO, _PC, _RARN, _RO, _SBM, _SC, _SMC, _BH],
  [
    [() => SnowflakeAccountUrl, 0],
    [() => SnowflakePrivateKey, 0],
    [() => SnowflakeKeyPassphrase, 0],
    [() => SnowflakeUser, 0],
    [() => SnowflakeDatabase, 0],
    [() => SnowflakeSchema, 0],
    [() => SnowflakeTable, 0],
    [() => SnowflakeRoleConfiguration, 0],
    0,
    [() => SnowflakeMetaDataColumnName, 0],
    [() => SnowflakeContentColumnName, 0],
    [() => SnowflakeVpcConfiguration, 0],
    () => CloudWatchLoggingOptions,
    () => ProcessingConfiguration,
    0,
    () => SnowflakeRetryOptions,
    0,
    () => S3DestinationConfiguration,
    () => SecretsManagerConfiguration,
    () => SnowflakeBufferingHints,
  ]
);
export var SnowflakeDestinationDescription = struct(
  n0,
  _SDDn,
  0,
  [_AU, _Us, _Dat, _Sc, _Ta, _SRC, _DLO, _MDCN, _CCN, _SVC, _CWLO, _PC, _RARN, _RO, _SBM, _SDD, _SMC, _BH],
  [
    [() => SnowflakeAccountUrl, 0],
    [() => SnowflakeUser, 0],
    [() => SnowflakeDatabase, 0],
    [() => SnowflakeSchema, 0],
    [() => SnowflakeTable, 0],
    [() => SnowflakeRoleConfiguration, 0],
    0,
    [() => SnowflakeMetaDataColumnName, 0],
    [() => SnowflakeContentColumnName, 0],
    [() => SnowflakeVpcConfiguration, 0],
    () => CloudWatchLoggingOptions,
    () => ProcessingConfiguration,
    0,
    () => SnowflakeRetryOptions,
    0,
    () => S3DestinationDescription,
    () => SecretsManagerConfiguration,
    () => SnowflakeBufferingHints,
  ]
);
export var SnowflakeDestinationUpdate = struct(
  n0,
  _SDUn,
  0,
  [_AU, _PK, _KP, _Us, _Dat, _Sc, _Ta, _SRC, _DLO, _MDCN, _CCN, _CWLO, _PC, _RARN, _RO, _SBM, _SUp, _SMC, _BH],
  [
    [() => SnowflakeAccountUrl, 0],
    [() => SnowflakePrivateKey, 0],
    [() => SnowflakeKeyPassphrase, 0],
    [() => SnowflakeUser, 0],
    [() => SnowflakeDatabase, 0],
    [() => SnowflakeSchema, 0],
    [() => SnowflakeTable, 0],
    [() => SnowflakeRoleConfiguration, 0],
    0,
    [() => SnowflakeMetaDataColumnName, 0],
    [() => SnowflakeContentColumnName, 0],
    () => CloudWatchLoggingOptions,
    () => ProcessingConfiguration,
    0,
    () => SnowflakeRetryOptions,
    0,
    () => S3DestinationUpdate,
    () => SecretsManagerConfiguration,
    () => SnowflakeBufferingHints,
  ]
);
export var SnowflakeRetryOptions = struct(n0, _SRO, 0, [_DIS], [1]);
export var SnowflakeRoleConfiguration = struct(n0, _SRC, 0, [_E, _SR], [2, [() => SnowflakeRole, 0]]);
export var SnowflakeVpcConfiguration = struct(n0, _SVC, 0, [_PLVI], [[() => SnowflakePrivateLinkVpceId, 0]]);
export var SourceDescription = struct(
  n0,
  _SDo,
  0,
  [_DPSD, _KSSD, _MSKSD, _DSD],
  [
    () => DirectPutSourceDescription,
    () => KinesisStreamSourceDescription,
    () => MSKSourceDescription,
    () => DatabaseSourceDescription,
  ]
);
export var SplunkBufferingHints = struct(n0, _SBHp, 0, [_IIS, _SIMB], [1, 1]);
export var SplunkDestinationConfiguration = struct(
  n0,
  _SDCp,
  0,
  [_HECE, _HECET, _HECT, _HECATIS, _RO, _SBM, _SC, _PC, _CWLO, _BH, _SMC],
  [
    0,
    0,
    0,
    1,
    () => SplunkRetryOptions,
    0,
    () => S3DestinationConfiguration,
    () => ProcessingConfiguration,
    () => CloudWatchLoggingOptions,
    () => SplunkBufferingHints,
    () => SecretsManagerConfiguration,
  ]
);
export var SplunkDestinationDescription = struct(
  n0,
  _SDDp,
  0,
  [_HECE, _HECET, _HECT, _HECATIS, _RO, _SBM, _SDD, _PC, _CWLO, _BH, _SMC],
  [
    0,
    0,
    0,
    1,
    () => SplunkRetryOptions,
    0,
    () => S3DestinationDescription,
    () => ProcessingConfiguration,
    () => CloudWatchLoggingOptions,
    () => SplunkBufferingHints,
    () => SecretsManagerConfiguration,
  ]
);
export var SplunkDestinationUpdate = struct(
  n0,
  _SDUp,
  0,
  [_HECE, _HECET, _HECT, _HECATIS, _RO, _SBM, _SUp, _PC, _CWLO, _BH, _SMC],
  [
    0,
    0,
    0,
    1,
    () => SplunkRetryOptions,
    0,
    () => S3DestinationUpdate,
    () => ProcessingConfiguration,
    () => CloudWatchLoggingOptions,
    () => SplunkBufferingHints,
    () => SecretsManagerConfiguration,
  ]
);
export var SplunkRetryOptions = struct(n0, _SROp, 0, [_DIS], [1]);
export var StartDeliveryStreamEncryptionInput = struct(
  n0,
  _SDSEI,
  0,
  [_DSN, _DSECI],
  [0, () => DeliveryStreamEncryptionConfigurationInput]
);
export var StartDeliveryStreamEncryptionOutput = struct(n0, _SDSEO, 0, [], []);
export var StopDeliveryStreamEncryptionInput = struct(n0, _SDSEIt, 0, [_DSN], [0]);
export var StopDeliveryStreamEncryptionOutput = struct(n0, _SDSEOt, 0, [], []);
export var TableCreationConfiguration = struct(n0, _TCC, 0, [_E], [2]);
export var Tag = struct(n0, _Tag, 0, [_K, _V], [0, 0]);
export var TagDeliveryStreamInput = struct(n0, _TDSI, 0, [_DSN, _T], [0, () => TagDeliveryStreamInputTagList]);
export var TagDeliveryStreamOutput = struct(n0, _TDSO, 0, [], []);
export var UntagDeliveryStreamInput = struct(n0, _UDSI, 0, [_DSN, _TK], [0, 64 | 0]);
export var UntagDeliveryStreamOutput = struct(n0, _UDSO, 0, [], []);
export var UpdateDestinationInput = struct(
  n0,
  _UDI,
  0,
  [_DSN, _CDSVI, _DI, _SDU, _ESDU, _RDU, _EDU, _ADU, _SDUp, _HEDU, _AOSSDU, _SDUn, _IDU],
  [
    0,
    0,
    0,
    () => S3DestinationUpdate,
    () => ExtendedS3DestinationUpdate,
    [() => RedshiftDestinationUpdate, 0],
    () => ElasticsearchDestinationUpdate,
    () => AmazonopensearchserviceDestinationUpdate,
    () => SplunkDestinationUpdate,
    [() => HttpEndpointDestinationUpdate, 0],
    () => AmazonOpenSearchServerlessDestinationUpdate,
    [() => SnowflakeDestinationUpdate, 0],
    () => IcebergDestinationUpdate,
  ]
);
export var UpdateDestinationOutput = struct(n0, _UDO, 0, [], []);
export var VpcConfiguration = struct(n0, _VC, 0, [_SIu, _RARN, _SGI], [64 | 0, 0, 64 | 0]);
export var VpcConfigurationDescription = struct(n0, _VCD, 0, [_SIu, _RARN, _SGI, _VIp], [64 | 0, 0, 64 | 0, 0]);
export var DatabaseColumnIncludeOrExcludeList = 64 | 0;

export var DatabaseIncludeOrExcludeList = 64 | 0;

export var DatabaseSnapshotInfoList = list(n0, _DSIL, 0, () => DatabaseSnapshotInfo);
export var DatabaseSurrogateKeyList = 64 | 0;

export var DatabaseTableIncludeOrExcludeList = 64 | 0;

export var DestinationDescriptionList = list(n0, _DDL, 0, [() => DestinationDescription, 0]);
export var DestinationTableConfigurationList = list(n0, _DTCL, 0, () => DestinationTableConfiguration);
export var HttpEndpointCommonAttributesList = list(n0, _HECAL, 0, [() => HttpEndpointCommonAttribute, 0]);
export var ListOfNonEmptyStrings = 64 | 0;

export var ListOfNonEmptyStringsWithoutWhitespace = 64 | 0;

export var ListTagsForDeliveryStreamOutputTagList = list(n0, _LTFDSOTL, 0, () => Tag);
export var PartitionFields = list(n0, _PFa, 0, () => PartitionField);
export var ProcessorList = list(n0, _PL, 0, () => Processor);
export var ProcessorParameterList = list(n0, _PPL, 0, () => ProcessorParameter);
export var PutRecordBatchRequestEntryList = list(n0, _PRBREL, 0, () => _Record);
export var PutRecordBatchResponseEntryList = list(n0, _PRBRELu, 0, () => PutRecordBatchResponseEntry);
export var SecurityGroupIdList = 64 | 0;

export var SubnetIdList = 64 | 0;

export var TagDeliveryStreamInputTagList = list(n0, _TDSITL, 0, () => Tag);
export var TagKeyList = 64 | 0;

export var ColumnToJsonKeyMappings = 128 | 0;

export var CreateDeliveryStream = op(
  n0,
  _CDS,
  0,
  () => CreateDeliveryStreamInput,
  () => CreateDeliveryStreamOutput
);
export var DeleteDeliveryStream = op(
  n0,
  _DDS,
  0,
  () => DeleteDeliveryStreamInput,
  () => DeleteDeliveryStreamOutput
);
export var DescribeDeliveryStream = op(
  n0,
  _DDSe,
  0,
  () => DescribeDeliveryStreamInput,
  () => DescribeDeliveryStreamOutput
);
export var ListTagsForDeliveryStream = op(
  n0,
  _LTFDS,
  0,
  () => ListTagsForDeliveryStreamInput,
  () => ListTagsForDeliveryStreamOutput
);
export var PutRecord = op(
  n0,
  _PR,
  0,
  () => PutRecordInput,
  () => PutRecordOutput
);
export var PutRecordBatch = op(
  n0,
  _PRB,
  0,
  () => PutRecordBatchInput,
  () => PutRecordBatchOutput
);
export var StartDeliveryStreamEncryption = op(
  n0,
  _SDSE,
  0,
  () => StartDeliveryStreamEncryptionInput,
  () => StartDeliveryStreamEncryptionOutput
);
export var StopDeliveryStreamEncryption = op(
  n0,
  _SDSEt,
  0,
  () => StopDeliveryStreamEncryptionInput,
  () => StopDeliveryStreamEncryptionOutput
);
export var TagDeliveryStream = op(
  n0,
  _TDS,
  0,
  () => TagDeliveryStreamInput,
  () => TagDeliveryStreamOutput
);
export var UntagDeliveryStream = op(
  n0,
  _UDS,
  0,
  () => UntagDeliveryStreamInput,
  () => UntagDeliveryStreamOutput
);
export var UpdateDestination = op(
  n0,
  _UD,
  0,
  () => UpdateDestinationInput,
  () => UpdateDestinationOutput
);
