// smithy-typescript generated code
import { error, list, map, op, sim, struct, struct as uni } from "@smithy/core/schema";

import { CustomerManagedKeyUnavailableException as __CustomerManagedKeyUnavailableException } from "../models/index";
import {
  _AAI,
  _ABIBB,
  _ABIJAOP,
  _ABIJAOPL,
  _ABIJAOPLs,
  _ABIJAOPs,
  _ABIJAOT,
  _ABIJAOTL,
  _ABIJDOP,
  _ABIJDOPL,
  _ABIJDOPLs,
  _ABIJDOPs,
  _ABIJDOT,
  _ABIJDOTL,
  _ABIJDSC,
  _ABIJDSCP,
  _ABIJDSOP,
  _ABIJDSOPL,
  _ABIJDSOPLs,
  _ABIJDSOPLss,
  _ABIJDSOPLsse,
  _ABIJDSOPs,
  _ABIJDSOPss,
  _ABIJDSOPsse,
  _ABIJDSOT,
  _ABIJDSOTL,
  _ABIJDSOTLs,
  _ABIJDSOTs,
  _ABIJE,
  _ABIJEL,
  _ABIJFOP,
  _ABIJFOPL,
  _ABIJFOPLs,
  _ABIJFOPs,
  _ABIJFOT,
  _ABIJFOTL,
  _ABIJI,
  _ABIJOP,
  _ABIJOPs,
  _ABIJOT,
  _ABIJOVS,
  _ABIJRIOC,
  _ABIJRSOP,
  _ABIJRSOPL,
  _ABIJTOP,
  _ABIJTOPL,
  _ABIJTOPLs,
  _ABIJTOPs,
  _ABIJTOT,
  _ABIJTOTL,
  _ABIJVPCCOP,
  _ABIJVPCCOPL,
  _ABIJVPCCOT,
  _ABIJVPCCOTL,
  _ABIJW,
  _ABIJWL,
  _ABIS,
  _ABISD,
  _ABRLSC,
  _ABRP,
  _Ac,
  _ACDU,
  _ADSP,
  _AEP,
  _AIAP,
  _AIn,
  _AIna,
  _Al,
  _Ana,
  _AOSP,
  _AP,
  _APSP,
  _APu,
  _Ar,
  _AT,
  _B,
  _BQP,
  _Bu,
  _c,
  _Cata,
  _CCa,
  _CCL,
  _CCO,
  _CCou,
  _CCP,
  _CCTO,
  _CD,
  _CDS,
  _CDSR,
  _CDSr,
  _CDSRr,
  _CDSRre,
  _CDSRrea,
  _CDT,
  _CEo,
  _CG,
  _CGL,
  _CGo,
  _CGR,
  _CHon,
  _CI,
  _CIl,
  _CLPR,
  _CLPRL,
  _CLPRo,
  _CMKUE,
  _CN,
  _CNo,
  _co,
  _Colu,
  _CP,
  _Cr,
  _CSA,
  _CSCIB,
  _CSr,
  _CSu,
  _CT,
  _CTL,
  _CTol,
  _CTon,
  _D,
  _d,
  _DABIJ,
  _DABIJR,
  _DABIJRe,
  _DACRa,
  _Das,
  _Dat,
  _DDP,
  _DDPDV,
  _DDSes,
  _DDSesc,
  _DDSRes,
  _DDSResc,
  _DDSRescr,
  _DDSRescri,
  _De,
  _Del,
  _DGa,
  _DI,
  _DIa,
  _DP,
  _DPa,
  _DPat,
  _DPLa,
  _DR,
  _DSa,
  _DSAa,
  _DSAat,
  _DSat,
  _DSata,
  _DSatao,
  _DSCa,
  _DSCFE,
  _DSEI,
  _DSI,
  _DSi,
  _DSIa,
  _DSIat,
  _DSIata,
  _DSLa,
  _DSN,
  _DSP,
  _DSPL,
  _DSRa,
  _DSRP,
  _DSUC,
  _DSV,
  _DTat,
  _DTDP,
  _DTDPDV,
  _DTSV,
  _DUa,
  _DUADQS,
  _DUAIS,
  _DVef,
  _E,
  _e,
  _EI,
  _EIP,
  _EP,
  _Er,
  _F,
  _FA,
  _FAo,
  _FF,
  _FFi,
  _FFM,
  _FI,
  _FIo,
  _FO,
  _Fo,
  _GSCG,
  _H,
  _h,
  _hE,
  _hQ,
  _IAMP,
  _IAn,
  _ICC,
  _ICL,
  _ICn,
  _ICnp,
  _Id_,
  _IDP,
  _IDPDV,
  _II,
  _IIn,
  _IM,
  _IPm,
  _IPRU,
  _IPVCP,
  _ISV,
  _JI,
  _JKP,
  _JP,
  _JS,
  _K,
  _LDSi,
  _LDSRis,
  _LDSRist,
  _LJKP,
  _LOe,
  _LSC,
  _LTM,
  _LTo,
  _LTS,
  _LUT,
  _M,
  _MAV,
  _MDP,
  _MFL,
  _MR,
  _mr,
  _MRa,
  _MSP,
  _N,
  _NCN,
  _NCT,
  _NDVe,
  _NPN,
  _NT,
  _nt,
  _OAP,
  _OAS,
  _OC,
  _OCL,
  _OCn,
  _OCu,
  _ODPO,
  _OP,
  _OPr,
  _OPv,
  _OT,
  _OVS,
  _Pa,
  _PCe,
  _PCr,
  _Per,
  _PFA,
  _PFAR,
  _PI,
  _PN,
  _PO,
  _Po,
  _PP,
  _Pri,
  _PSP,
  _PTh,
  _PTI,
  _PTM,
  _PTr,
  _Qu,
  _RA,
  _RCO,
  _RE,
  _RI,
  _RIAMP,
  _RIOC,
  _RJKP,
  _RLPDS,
  _RLPTC,
  _RLPTR,
  _RLPTRCL,
  _RLPTRL,
  _ROi,
  _RP,
  _RPe,
  _RS,
  _RTel,
  _SA,
  _SABIJ,
  _SABIJR,
  _SABIJRt,
  _SADT,
  _SBU,
  _Sche,
  _SDP,
  _SDPDV,
  _SEP,
  _SFRt,
  _SGI,
  _SI,
  _SIu,
  _SMFAR,
  _SNP,
  _Sour,
  _SP,
  _SPa,
  _SPn,
  _SPp,
  _SPtar,
  _SQ,
  _SSo,
  _SSP,
  _SSV,
  _St,
  _STu,
  _SU,
  _SVta,
  _T,
  _Ta,
  _TCO,
  _Te,
  _TG,
  _Th,
  _TI,
  _TIh,
  _TK,
  _TMVD,
  _TNa,
  _TOL,
  _TOra,
  _TPe,
  _TPr,
  _TPU,
  _TPw,
  _TQ,
  _TR,
  _TRC,
  _U,
  _UA,
  _UCO,
  _UDS,
  _UDSp,
  _UDSR,
  _UDSRp,
  _UDSRpd,
  _UDSRpda,
  _UK,
  _UKL,
  _UKn,
  _USN,
  _USp,
  _USpd,
  _VCAp,
  _VCP,
  _VPCC,
  _VPCCI,
  _VPCCIo,
  _VTa,
  _Wa,
  _War,
  _WG,
  Expression,
  n0,
  ResourcePermissionList,
  TagList,
} from "./schemas_0";
import { RowLevelPermissionDataSet } from "./schemas_20_Data";
import { DataSetRefreshProperties } from "./schemas_64_Describe";
import { SessionTagValue } from "./schemas_91_Set";
import { SensitiveS3Uri } from "./schemas_96_Describe";

/* eslint no-var: 0 */

export var AssetBundleImportBodyBlob = sim(n0, _ABIBB, 21, 8);
export var ColumnDescriptiveText = sim(n0, _CDT, 0, 8);
export var DataSetCalculatedFieldExpression = sim(n0, _DSCFE, 0, 8);
export var AmazonElasticsearchParameters = struct(n0, _AEP, 0, [_D], [0]);
export var AmazonOpenSearchParameters = struct(n0, _AOSP, 0, [_D], [0]);
export var AssetBundleImportJobAnalysisOverrideParameters = struct(n0, _ABIJAOP, 0, [_AIn, _N], [0, 0]);
export var AssetBundleImportJobAnalysisOverridePermissions = struct(
  n0,
  _ABIJAOPs,
  0,
  [_AIna, _Per],
  [64 | 0, () => AssetBundleResourcePermissions]
);
export var AssetBundleImportJobAnalysisOverrideTags = struct(n0, _ABIJAOT, 0, [_AIna, _Ta], [64 | 0, () => TagList]);
export var AssetBundleImportJobDashboardOverrideParameters = struct(n0, _ABIJDOP, 0, [_DI, _N], [0, 0]);
export var AssetBundleImportJobDashboardOverridePermissions = struct(
  n0,
  _ABIJDOPs,
  0,
  [_DIa, _Per, _LSC],
  [64 | 0, () => AssetBundleResourcePermissions, () => AssetBundleResourceLinkSharingConfiguration]
);
export var AssetBundleImportJobDashboardOverrideTags = struct(n0, _ABIJDOT, 0, [_DIa, _Ta], [64 | 0, () => TagList]);
export var AssetBundleImportJobDataSetOverrideParameters = struct(
  n0,
  _ABIJDSOP,
  0,
  [_DSI, _N, _DSRP],
  [0, 0, () => DataSetRefreshProperties]
);
export var AssetBundleImportJobDataSetOverridePermissions = struct(
  n0,
  _ABIJDSOPs,
  0,
  [_DSIa, _Per],
  [64 | 0, () => AssetBundleResourcePermissions]
);
export var AssetBundleImportJobDataSetOverrideTags = struct(n0, _ABIJDSOT, 0, [_DSIa, _Ta], [64 | 0, () => TagList]);
export var AssetBundleImportJobDataSourceCredentialPair = struct(n0, _ABIJDSCP, 8, [_U, _Pa], [0, 0]);
export var AssetBundleImportJobDataSourceCredentials = struct(
  n0,
  _ABIJDSC,
  0,
  [_CP, _SA],
  [[() => AssetBundleImportJobDataSourceCredentialPair, 0], 0]
);
export var AssetBundleImportJobDataSourceOverrideParameters = struct(
  n0,
  _ABIJDSOPss,
  0,
  [_DSIat, _N, _DSP, _VCP, _SP, _Cr],
  [
    0,
    0,
    () => DataSourceParameters,
    () => VpcConnectionProperties,
    () => SslProperties,
    [() => AssetBundleImportJobDataSourceCredentials, 0],
  ]
);
export var AssetBundleImportJobDataSourceOverridePermissions = struct(
  n0,
  _ABIJDSOPsse,
  0,
  [_DSIata, _Per],
  [64 | 0, () => AssetBundleResourcePermissions]
);
export var AssetBundleImportJobDataSourceOverrideTags = struct(
  n0,
  _ABIJDSOTs,
  0,
  [_DSIata, _Ta],
  [64 | 0, () => TagList]
);
export var AssetBundleImportJobError = struct(n0, _ABIJE, 0, [_Ar, _T, _M], [0, 0, 0]);
export var AssetBundleImportJobFolderOverrideParameters = struct(n0, _ABIJFOP, 0, [_FI, _N, _PFA], [0, 0, 0]);
export var AssetBundleImportJobFolderOverridePermissions = struct(
  n0,
  _ABIJFOPs,
  0,
  [_FIo, _Per],
  [64 | 0, () => AssetBundleResourcePermissions]
);
export var AssetBundleImportJobFolderOverrideTags = struct(n0, _ABIJFOT, 0, [_FIo, _Ta], [64 | 0, () => TagList]);
export var AssetBundleImportJobOverrideParameters = struct(
  n0,
  _ABIJOP,
  0,
  [_RIOC, _VPCC, _RS, _DSa, _DSat, _Th, _Ana, _Das, _F],
  [
    () => AssetBundleImportJobResourceIdOverrideConfiguration,
    () => AssetBundleImportJobVPCConnectionOverrideParametersList,
    () => AssetBundleImportJobRefreshScheduleOverrideParametersList,
    [() => AssetBundleImportJobDataSourceOverrideParametersList, 0],
    () => AssetBundleImportJobDataSetOverrideParametersList,
    () => AssetBundleImportJobThemeOverrideParametersList,
    () => AssetBundleImportJobAnalysisOverrideParametersList,
    () => AssetBundleImportJobDashboardOverrideParametersList,
    () => AssetBundleImportJobFolderOverrideParametersList,
  ]
);
export var AssetBundleImportJobOverridePermissions = struct(
  n0,
  _ABIJOPs,
  0,
  [_DSa, _DSat, _Th, _Ana, _Das, _F],
  [
    () => AssetBundleImportJobDataSourceOverridePermissionsList,
    () => AssetBundleImportJobDataSetOverridePermissionsList,
    () => AssetBundleImportJobThemeOverridePermissionsList,
    () => AssetBundleImportJobAnalysisOverridePermissionsList,
    () => AssetBundleImportJobDashboardOverridePermissionsList,
    () => AssetBundleImportJobFolderOverridePermissionsList,
  ]
);
export var AssetBundleImportJobOverrideTags = struct(
  n0,
  _ABIJOT,
  0,
  [_VPCC, _DSa, _DSat, _Th, _Ana, _Das, _F],
  [
    () => AssetBundleImportJobVPCConnectionOverrideTagsList,
    () => AssetBundleImportJobDataSourceOverrideTagsList,
    () => AssetBundleImportJobDataSetOverrideTagsList,
    () => AssetBundleImportJobThemeOverrideTagsList,
    () => AssetBundleImportJobAnalysisOverrideTagsList,
    () => AssetBundleImportJobDashboardOverrideTagsList,
    () => AssetBundleImportJobFolderOverrideTagsList,
  ]
);
export var AssetBundleImportJobOverrideValidationStrategy = struct(n0, _ABIJOVS, 0, [_SMFAR], [2]);
export var AssetBundleImportJobRefreshScheduleOverrideParameters = struct(
  n0,
  _ABIJRSOP,
  0,
  [_DSI, _SI, _SADT],
  [0, 0, 4]
);
export var AssetBundleImportJobResourceIdOverrideConfiguration = struct(n0, _ABIJRIOC, 0, [_PFAR], [0]);
export var AssetBundleImportJobThemeOverrideParameters = struct(n0, _ABIJTOP, 0, [_TI, _N], [0, 0]);
export var AssetBundleImportJobThemeOverridePermissions = struct(
  n0,
  _ABIJTOPs,
  0,
  [_TIh, _Per],
  [64 | 0, () => AssetBundleResourcePermissions]
);
export var AssetBundleImportJobThemeOverrideTags = struct(n0, _ABIJTOT, 0, [_TIh, _Ta], [64 | 0, () => TagList]);
export var AssetBundleImportJobVPCConnectionOverrideParameters = struct(
  n0,
  _ABIJVPCCOP,
  0,
  [_VPCCI, _N, _SIu, _SGI, _DR, _RA],
  [0, 0, 64 | 0, 64 | 0, 64 | 0, 0]
);
export var AssetBundleImportJobVPCConnectionOverrideTags = struct(
  n0,
  _ABIJVPCCOT,
  0,
  [_VPCCIo, _Ta],
  [64 | 0, () => TagList]
);
export var AssetBundleImportJobWarning = struct(n0, _ABIJW, 0, [_Ar, _M], [0, 0]);
export var AssetBundleImportSource = struct(n0, _ABIS, 0, [_B, _SU], [[() => AssetBundleImportBodyBlob, 0], 0]);
export var AssetBundleImportSourceDescription = struct(n0, _ABISD, 0, [_B, _SU], [[() => SensitiveS3Uri, 0], 0]);
export var AssetBundleResourceLinkSharingConfiguration = struct(
  n0,
  _ABRLSC,
  0,
  [_Per],
  [() => AssetBundleResourcePermissions]
);
export var AssetBundleResourcePermissions = struct(n0, _ABRP, 0, [_Pri, _Ac], [64 | 0, 64 | 0]);
export var AthenaParameters = struct(n0, _AP, 0, [_WG, _RA, _ICC], [0, 0, () => IdentityCenterConfiguration]);
export var AuroraParameters = struct(n0, _APu, 0, [_H, _Po, _Dat], [0, 1, 0]);
export var AuroraPostgreSqlParameters = struct(n0, _APSP, 0, [_H, _Po, _Dat], [0, 1, 0]);
export var AwsIotAnalyticsParameters = struct(n0, _AIAP, 0, [_DSN], [0]);
export var BigQueryParameters = struct(n0, _BQP, 0, [_PI, _DSRa], [0, 0]);
export var CalculatedColumn = struct(n0, _CCa, 0, [_CN, _CI, _E], [0, 0, [() => DataSetCalculatedFieldExpression, 0]]);
export var CastColumnTypeOperation = struct(n0, _CCTO, 0, [_CN, _NCT, _STu, _Fo], [0, 0, 0, 0]);
export var ColumnDescription = struct(n0, _CD, 0, [_Te], [[() => ColumnDescriptiveText, 0]]);
export var ColumnGroup = struct(n0, _CG, 0, [_GSCG], [() => GeoSpatialColumnGroup]);
export var ColumnLevelPermissionRule = struct(n0, _CLPR, 0, [_Pri, _CNo], [64 | 0, 64 | 0]);
export var ColumnTag = struct(n0, _CTol, 0, [_CGR, _CD], [0, [() => ColumnDescription, 0]]);
export var CreateColumnsOperation = struct(n0, _CCO, 0, [_Colu], [[() => CalculatedColumnList, 0]]);
export var CreateDataSetRequest = struct(
  n0,
  _CDSR,
  0,
  [_AAI, _DSI, _N, _PTM, _LTM, _IM, _CGo, _FF, _Per, _RLPDS, _RLPTC, _CLPRo, _Ta, _DSUC, _DP, _FAo, _PCe, _UA],
  [
    [0, 1],
    0,
    0,
    () => PhysicalTableMap,
    [() => LogicalTableMap, 0],
    0,
    () => ColumnGroupList,
    () => FieldFolderMap,
    () => ResourcePermissionList,
    () => RowLevelPermissionDataSet,
    [() => RowLevelPermissionTagConfiguration, 0],
    () => ColumnLevelPermissionRuleList,
    () => TagList,
    () => DataSetUsageConfiguration,
    () => DatasetParameterList,
    64 | 0,
    () => PerformanceConfiguration,
    0,
  ]
);
export var CreateDataSetResponse = struct(n0, _CDSRr, 0, [_Ar, _DSI, _IAn, _II, _RI, _St], [0, 0, 0, 0, 0, [1, 32]]);
export var CreateDataSourceRequest = struct(
  n0,
  _CDSRre,
  0,
  [_AAI, _DSIat, _N, _T, _DSP, _Cr, _Per, _VCP, _SP, _Ta, _FAo],
  [
    [0, 1],
    0,
    0,
    0,
    () => DataSourceParameters,
    [() => DataSourceCredentials, 0],
    () => ResourcePermissionList,
    () => VpcConnectionProperties,
    () => SslProperties,
    () => TagList,
    64 | 0,
  ]
);
export var CreateDataSourceResponse = struct(n0, _CDSRrea, 0, [_Ar, _DSIat, _CSr, _RI, _St], [0, 0, 0, 0, [1, 32]]);
export var CredentialPair = struct(n0, _CP, 0, [_U, _Pa, _ADSP], [0, 0, () => DataSourceParametersList]);
export var CustomConnectionParameters = struct(n0, _CCP, 0, [_CTon], [0]);
export var CustomerManagedKeyUnavailableException = error(
  n0,
  _CMKUE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M, _RI],
  [0, 0],

  __CustomerManagedKeyUnavailableException
);
export var CustomSql = struct(n0, _CSu, 0, [_DSAa, _N, _SQ, _Colu], [0, 0, 0, () => InputColumnList]);
export var DatabricksParameters = struct(n0, _DPa, 0, [_H, _Po, _SEP], [0, 1, 0]);
export var DataSet = struct(
  n0,
  _DSata,
  0,
  [_Ar, _DSI, _N, _CT, _LUT, _PTM, _LTM, _OC, _IM, _CSCIB, _CGo, _FF, _RLPDS, _RLPTC, _CLPRo, _DSUC, _DP, _PCe, _UA],
  [
    0,
    0,
    0,
    4,
    4,
    () => PhysicalTableMap,
    [() => LogicalTableMap, 0],
    [() => OutputColumnList, 0],
    0,
    1,
    () => ColumnGroupList,
    () => FieldFolderMap,
    () => RowLevelPermissionDataSet,
    [() => RowLevelPermissionTagConfiguration, 0],
    () => ColumnLevelPermissionRuleList,
    () => DataSetUsageConfiguration,
    () => DatasetParameterList,
    () => PerformanceConfiguration,
    0,
  ]
);
export var DatasetParameter = struct(
  n0,
  _DPat,
  0,
  [_SDP, _DDP, _IDP, _DTDP],
  [
    () => StringDatasetParameter,
    () => DecimalDatasetParameter,
    () => IntegerDatasetParameter,
    () => DateTimeDatasetParameter,
  ]
);
export var DataSetUsageConfiguration = struct(n0, _DSUC, 0, [_DUADQS, _DUAIS], [2, 2]);
export var DataSource = struct(
  n0,
  _DSatao,
  0,
  [_Ar, _DSIat, _N, _T, _St, _CT, _LUT, _DSP, _ADSP, _VCP, _SP, _EI, _SA],
  [
    0,
    0,
    0,
    0,
    0,
    4,
    4,
    () => DataSourceParameters,
    () => DataSourceParametersList,
    () => VpcConnectionProperties,
    () => SslProperties,
    () => DataSourceErrorInfo,
    0,
  ]
);
export var DataSourceCredentials = struct(n0, _DSCa, 8, [_CP, _CSA, _SA], [() => CredentialPair, 0, 0]);
export var DataSourceErrorInfo = struct(n0, _DSEI, 0, [_T, _M], [0, 0]);
export var DateTimeDatasetParameter = struct(
  n0,
  _DTDP,
  0,
  [_Id_, _N, _VTa, _TG, _DVef],
  [0, 0, 0, 0, () => DateTimeDatasetParameterDefaultValues]
);
export var DateTimeDatasetParameterDefaultValues = struct(n0, _DTDPDV, 0, [_SVta], [64 | 4]);
export var DecimalDatasetParameter = struct(
  n0,
  _DDP,
  0,
  [_Id_, _N, _VTa, _DVef],
  [0, 0, 0, () => DecimalDatasetParameterDefaultValues]
);
export var DecimalDatasetParameterDefaultValues = struct(n0, _DDPDV, 0, [_SVta], [64 | 1]);
export var DescribeAssetBundleImportJobRequest = struct(
  n0,
  _DABIJR,
  0,
  [_AAI, _ABIJI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DescribeAssetBundleImportJobResponse = struct(
  n0,
  _DABIJRe,
  0,
  [_JS, _Er, _RE, _Ar, _CT, _ABIJI, _AAI, _ABIS, _OP, _FA, _RI, _St, _OPv, _OT, _OVS, _Wa],
  [
    0,
    () => AssetBundleImportJobErrorList,
    () => AssetBundleImportJobErrorList,
    0,
    4,
    0,
    0,
    [() => AssetBundleImportSourceDescription, 0],
    [() => AssetBundleImportJobOverrideParameters, 0],
    0,
    0,
    [1, 32],
    () => AssetBundleImportJobOverridePermissions,
    () => AssetBundleImportJobOverrideTags,
    () => AssetBundleImportJobOverrideValidationStrategy,
    () => AssetBundleImportJobWarningList,
  ]
);
export var DescribeDataSetRequest = struct(
  n0,
  _DDSRes,
  0,
  [_AAI, _DSI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DescribeDataSetResponse = struct(n0, _DDSResc, 0, [_DSata, _RI, _St], [[() => DataSet, 0], 0, [1, 32]]);
export var DescribeDataSourceRequest = struct(
  n0,
  _DDSRescr,
  0,
  [_AAI, _DSIat],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DescribeDataSourceResponse = struct(n0, _DDSRescri, 0, [_DSatao, _RI, _St], [() => DataSource, 0, [1, 32]]);
export var ExasolParameters = struct(n0, _EP, 0, [_H, _Po], [0, 1]);
export var FieldFolder = struct(n0, _FFi, 0, [_d, _co], [0, 64 | 0]);
export var FilterOperation = struct(n0, _FO, 0, [_CEo], [[() => Expression, 0]]);
export var GeoSpatialColumnGroup = struct(n0, _GSCG, 0, [_N, _CCou, _Colu], [0, 0, 64 | 0]);
export var IdentityCenterConfiguration = struct(n0, _ICC, 0, [_EIP], [2]);
export var ImpalaParameters = struct(n0, _IPm, 0, [_H, _Po, _Dat, _SEP], [0, 1, 0, 0]);
export var InputColumn = struct(n0, _ICn, 0, [_N, _T, _STu], [0, 0, 0]);
export var IntegerDatasetParameter = struct(
  n0,
  _IDP,
  0,
  [_Id_, _N, _VTa, _DVef],
  [0, 0, 0, () => IntegerDatasetParameterDefaultValues]
);
export var IntegerDatasetParameterDefaultValues = struct(n0, _IDPDV, 0, [_SVta], [64 | 1]);
export var JiraParameters = struct(n0, _JP, 0, [_SBU], [0]);
export var JoinInstruction = struct(
  n0,
  _JI,
  0,
  [_LOe, _ROi, _LJKP, _RJKP, _T, _OCn],
  [0, 0, () => JoinKeyProperties, () => JoinKeyProperties, 0, 0]
);
export var JoinKeyProperties = struct(n0, _JKP, 0, [_UK], [2]);
export var ListDataSourcesRequest = struct(
  n0,
  _LDSRis,
  0,
  [_AAI, _NT, _MR],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _nt,
      },
    ],
    [
      1,
      {
        [_hQ]: _mr,
      },
    ],
  ]
);
export var ListDataSourcesResponse = struct(
  n0,
  _LDSRist,
  0,
  [_DSa, _NT, _RI, _St],
  [() => DataSourceList, 0, 0, [1, 32]]
);
export var LogicalTable = struct(
  n0,
  _LTo,
  0,
  [_Al, _DTat, _Sour],
  [0, [() => TransformOperationList, 0], () => LogicalTableSource]
);
export var LogicalTableSource = struct(n0, _LTS, 0, [_JI, _PTI, _DSAat], [() => JoinInstruction, 0, 0]);
export var ManifestFileLocation = struct(n0, _MFL, 0, [_Bu, _K], [0, 0]);
export var MariaDbParameters = struct(n0, _MDP, 0, [_H, _Po, _Dat], [0, 1, 0]);
export var MySqlParameters = struct(n0, _MSP, 0, [_H, _Po, _Dat], [0, 1, 0]);
export var NewDefaultValues = struct(n0, _NDVe, 0, [_SSV, _DSV, _DTSV, _ISV], [64 | 0, 64 | 1, 64 | 4, 64 | 1]);
export var OAuthParameters = struct(n0, _OAP, 0, [_TPU, _OAS, _IPVCP, _IPRU], [0, 0, () => VpcConnectionProperties, 0]);
export var OracleParameters = struct(n0, _OPr, 0, [_H, _Po, _Dat, _USN], [0, 1, 0, 2]);
export var OutputColumn = struct(n0, _OCu, 0, [_N, _De, _T, _STu], [0, [() => ColumnDescriptiveText, 0], 0, 0]);
export var OverrideDatasetParameterOperation = struct(n0, _ODPO, 0, [_PN, _NPN, _NDVe], [0, 0, () => NewDefaultValues]);
export var PerformanceConfiguration = struct(n0, _PCe, 0, [_UKn], [() => UniqueKeyList]);
export var PostgreSqlParameters = struct(n0, _PSP, 0, [_H, _Po, _Dat], [0, 1, 0]);
export var PrestoParameters = struct(n0, _PP, 0, [_H, _Po, _Cata], [0, 1, 0]);
export var ProjectOperation = struct(n0, _PO, 0, [_PCr], [64 | 0]);
export var RdsParameters = struct(n0, _RP, 0, [_IIn, _Dat], [0, 0]);
export var RedshiftIAMParameters = struct(n0, _RIAMP, 0, [_RA, _DUa, _DGa, _ACDU], [0, 0, 64 | 0, 2]);
export var RedshiftParameters = struct(
  n0,
  _RPe,
  0,
  [_H, _Po, _Dat, _CIl, _IAMP, _ICC],
  [0, 1, 0, 0, () => RedshiftIAMParameters, () => IdentityCenterConfiguration]
);
export var RelationalTable = struct(
  n0,
  _RTel,
  0,
  [_DSAa, _Cata, _Sche, _N, _ICnp],
  [0, 0, 0, 0, () => InputColumnList]
);
export var RenameColumnOperation = struct(n0, _RCO, 0, [_CN, _NCN], [0, 0]);
export var RowLevelPermissionTagConfiguration = struct(
  n0,
  _RLPTC,
  0,
  [_St, _TR, _TRC],
  [0, [() => RowLevelPermissionTagRuleList, 0], list(n0, _RLPTRCL, 0, 64 | 0)]
);
export var RowLevelPermissionTagRule = struct(
  n0,
  _RLPTR,
  0,
  [_TK, _CN, _TMVD, _MAV],
  [0, 0, 0, [() => SessionTagValue, 0]]
);
export var S3Parameters = struct(n0, _SPa, 0, [_MFL, _RA], [() => ManifestFileLocation, 0]);
export var S3Source = struct(n0, _SSo, 0, [_DSAa, _USp, _ICnp], [0, () => UploadSettings, () => InputColumnList]);
export var ServiceNowParameters = struct(n0, _SNP, 0, [_SBU], [0]);
export var SnowflakeParameters = struct(
  n0,
  _SPn,
  0,
  [_H, _Dat, _War, _AT, _DACRa, _OAP],
  [0, 0, 0, 0, 0, () => OAuthParameters]
);
export var SparkParameters = struct(n0, _SPp, 0, [_H, _Po], [0, 1]);
export var SqlServerParameters = struct(n0, _SSP, 0, [_H, _Po, _Dat], [0, 1, 0]);
export var SslProperties = struct(n0, _SP, 0, [_DSi], [2]);
export var StarburstParameters = struct(
  n0,
  _SPtar,
  0,
  [_H, _Po, _Cata, _PTr, _DACRa, _AT, _OAP],
  [0, 1, 0, 0, 0, 0, () => OAuthParameters]
);
export var StartAssetBundleImportJobRequest = struct(
  n0,
  _SABIJR,
  0,
  [_AAI, _ABIJI, _ABIS, _OP, _FA, _OPv, _OT, _OVS],
  [
    [0, 1],
    0,
    [() => AssetBundleImportSource, 0],
    [() => AssetBundleImportJobOverrideParameters, 0],
    0,
    () => AssetBundleImportJobOverridePermissions,
    () => AssetBundleImportJobOverrideTags,
    () => AssetBundleImportJobOverrideValidationStrategy,
  ]
);
export var StartAssetBundleImportJobResponse = struct(n0, _SABIJRt, 0, [_Ar, _ABIJI, _RI, _St], [0, 0, 0, [1, 32]]);
export var StringDatasetParameter = struct(
  n0,
  _SDP,
  0,
  [_Id_, _N, _VTa, _DVef],
  [0, 0, 0, () => StringDatasetParameterDefaultValues]
);
export var StringDatasetParameterDefaultValues = struct(n0, _SDPDV, 0, [_SVta], [64 | 0]);
export var TagColumnOperation = struct(n0, _TCO, 0, [_CN, _Ta], [0, [() => ColumnTagList, 0]]);
export var TeradataParameters = struct(n0, _TPe, 0, [_H, _Po, _Dat], [0, 1, 0]);
export var TrinoParameters = struct(n0, _TPr, 0, [_H, _Po, _Cata], [0, 1, 0]);
export var TwitterParameters = struct(n0, _TPw, 0, [_Qu, _MRa], [0, 1]);
export var UniqueKey = struct(n0, _UK, 0, [_CNo], [64 | 0]);
export var UntagColumnOperation = struct(n0, _UCO, 0, [_CN, _TNa], [0, 64 | 0]);
export var UpdateDataSetRequest = struct(
  n0,
  _UDSR,
  0,
  [_AAI, _DSI, _N, _PTM, _LTM, _IM, _CGo, _FF, _RLPDS, _RLPTC, _CLPRo, _DSUC, _DP, _PCe],
  [
    [0, 1],
    [0, 1],
    0,
    () => PhysicalTableMap,
    [() => LogicalTableMap, 0],
    0,
    () => ColumnGroupList,
    () => FieldFolderMap,
    () => RowLevelPermissionDataSet,
    [() => RowLevelPermissionTagConfiguration, 0],
    () => ColumnLevelPermissionRuleList,
    () => DataSetUsageConfiguration,
    () => DatasetParameterList,
    () => PerformanceConfiguration,
  ]
);
export var UpdateDataSetResponse = struct(n0, _UDSRp, 0, [_Ar, _DSI, _IAn, _II, _RI, _St], [0, 0, 0, 0, 0, [1, 32]]);
export var UpdateDataSourceRequest = struct(
  n0,
  _UDSRpd,
  0,
  [_AAI, _DSIat, _N, _DSP, _Cr, _VCP, _SP],
  [
    [0, 1],
    [0, 1],
    0,
    () => DataSourceParameters,
    [() => DataSourceCredentials, 0],
    () => VpcConnectionProperties,
    () => SslProperties,
  ]
);
export var UpdateDataSourceResponse = struct(n0, _UDSRpda, 0, [_Ar, _DSIat, _USpd, _RI, _St], [0, 0, 0, 0, [1, 32]]);
export var UploadSettings = struct(n0, _USp, 0, [_Fo, _SFRt, _CHon, _TQ, _Del], [0, 1, 2, 0, 0]);
export var VpcConnectionProperties = struct(n0, _VCP, 0, [_VCAp], [0]);
export var AssetBundleImportJobAnalysisOverrideParametersList = list(
  n0,
  _ABIJAOPL,
  0,
  () => AssetBundleImportJobAnalysisOverrideParameters
);
export var AssetBundleImportJobAnalysisOverridePermissionsList = list(
  n0,
  _ABIJAOPLs,
  0,
  () => AssetBundleImportJobAnalysisOverridePermissions
);
export var AssetBundleImportJobAnalysisOverrideTagsList = list(
  n0,
  _ABIJAOTL,
  0,
  () => AssetBundleImportJobAnalysisOverrideTags
);
export var AssetBundleImportJobDashboardOverrideParametersList = list(
  n0,
  _ABIJDOPL,
  0,
  () => AssetBundleImportJobDashboardOverrideParameters
);
export var AssetBundleImportJobDashboardOverridePermissionsList = list(
  n0,
  _ABIJDOPLs,
  0,
  () => AssetBundleImportJobDashboardOverridePermissions
);
export var AssetBundleImportJobDashboardOverrideTagsList = list(
  n0,
  _ABIJDOTL,
  0,
  () => AssetBundleImportJobDashboardOverrideTags
);
export var AssetBundleImportJobDataSetOverrideParametersList = list(
  n0,
  _ABIJDSOPL,
  0,
  () => AssetBundleImportJobDataSetOverrideParameters
);
export var AssetBundleImportJobDataSetOverridePermissionsList = list(
  n0,
  _ABIJDSOPLs,
  0,
  () => AssetBundleImportJobDataSetOverridePermissions
);
export var AssetBundleImportJobDataSetOverrideTagsList = list(
  n0,
  _ABIJDSOTL,
  0,
  () => AssetBundleImportJobDataSetOverrideTags
);
export var AssetBundleImportJobDataSourceOverrideParametersList = list(n0, _ABIJDSOPLss, 0, [
  () => AssetBundleImportJobDataSourceOverrideParameters,
  0,
]);
export var AssetBundleImportJobDataSourceOverridePermissionsList = list(
  n0,
  _ABIJDSOPLsse,
  0,
  () => AssetBundleImportJobDataSourceOverridePermissions
);
export var AssetBundleImportJobDataSourceOverrideTagsList = list(
  n0,
  _ABIJDSOTLs,
  0,
  () => AssetBundleImportJobDataSourceOverrideTags
);
export var AssetBundleImportJobErrorList = list(n0, _ABIJEL, 0, () => AssetBundleImportJobError);
export var AssetBundleImportJobFolderOverrideParametersList = list(
  n0,
  _ABIJFOPL,
  0,
  () => AssetBundleImportJobFolderOverrideParameters
);
export var AssetBundleImportJobFolderOverridePermissionsList = list(
  n0,
  _ABIJFOPLs,
  0,
  () => AssetBundleImportJobFolderOverridePermissions
);
export var AssetBundleImportJobFolderOverrideTagsList = list(
  n0,
  _ABIJFOTL,
  0,
  () => AssetBundleImportJobFolderOverrideTags
);
export var AssetBundleImportJobRefreshScheduleOverrideParametersList = list(
  n0,
  _ABIJRSOPL,
  0,
  () => AssetBundleImportJobRefreshScheduleOverrideParameters
);
export var AssetBundleImportJobThemeOverrideParametersList = list(
  n0,
  _ABIJTOPL,
  0,
  () => AssetBundleImportJobThemeOverrideParameters
);
export var AssetBundleImportJobThemeOverridePermissionsList = list(
  n0,
  _ABIJTOPLs,
  0,
  () => AssetBundleImportJobThemeOverridePermissions
);
export var AssetBundleImportJobThemeOverrideTagsList = list(
  n0,
  _ABIJTOTL,
  0,
  () => AssetBundleImportJobThemeOverrideTags
);
export var AssetBundleImportJobVPCConnectionOverrideParametersList = list(
  n0,
  _ABIJVPCCOPL,
  0,
  () => AssetBundleImportJobVPCConnectionOverrideParameters
);
export var AssetBundleImportJobVPCConnectionOverrideTagsList = list(
  n0,
  _ABIJVPCCOTL,
  0,
  () => AssetBundleImportJobVPCConnectionOverrideTags
);
export var AssetBundleImportJobWarningList = list(n0, _ABIJWL, 0, () => AssetBundleImportJobWarning);
export var AssetBundlePrincipalList = 64 | 0;

export var AssetBundleRestrictiveResourceIdList = 64 | 0;

export var CalculatedColumnList = list(n0, _CCL, 0, [() => CalculatedColumn, 0]);
export var ColumnGroupList = list(n0, _CGL, 0, () => ColumnGroup);
export var ColumnLevelPermissionRuleList = list(n0, _CLPRL, 0, () => ColumnLevelPermissionRule);
export var ColumnList = 64 | 0;

export var ColumnNameList = 64 | 0;

export var ColumnTagList = list(n0, _CTL, 0, [() => ColumnTag, 0]);
export var ColumnTagNames = 64 | 0;

export var DatabaseGroupList = 64 | 0;

export var DatasetParameterList = list(n0, _DPLa, 0, () => DatasetParameter);
export var DataSourceList = list(n0, _DSLa, 0, () => DataSource);
export var DataSourceParametersList = list(n0, _DSPL, 0, () => DataSourceParameters);
export var DateTimeDatasetParameterValueList = 64 | 4;

export var DecimalDatasetParameterValueList = 64 | 1;

export var FolderColumnList = 64 | 0;

export var InputColumnList = list(n0, _ICL, 0, () => InputColumn);
export var IntegerDatasetParameterValueList = 64 | 1;

export var OutputColumnList = list(n0, _OCL, 0, [() => OutputColumn, 0]);
export var PrincipalList = 64 | 0;

export var ProjectedColumnList = 64 | 0;

export var RowLevelPermissionTagRuleConfiguration = 64 | 0;

export var RowLevelPermissionTagRuleConfigurationList = list(n0, _RLPTRCL, 0, 64 | 0);
export var RowLevelPermissionTagRuleList = list(n0, _RLPTRL, 0, [() => RowLevelPermissionTagRule, 0]);
export var StringDatasetParameterValueList = 64 | 0;

export var TransformOperationList = list(n0, _TOL, 0, [() => TransformOperation, 0]);
export var UniqueKeyColumnNameList = 64 | 0;

export var UniqueKeyList = list(n0, _UKL, 0, () => UniqueKey);
export var FieldFolderMap = map(n0, _FFM, 0, 0, () => FieldFolder);
export var LogicalTableMap = map(n0, _LTM, 0, [0, 0], [() => LogicalTable, 0]);
export var PhysicalTableMap = map(n0, _PTM, 0, 0, () => PhysicalTable);
export var DataSourceParameters = uni(
  n0,
  _DSP,
  0,
  [
    _AEP,
    _AP,
    _APu,
    _APSP,
    _AIAP,
    _JP,
    _MDP,
    _MSP,
    _OPr,
    _PSP,
    _PP,
    _RP,
    _RPe,
    _SPa,
    _SNP,
    _SPn,
    _SPp,
    _SSP,
    _TPe,
    _TPw,
    _AOSP,
    _EP,
    _DPa,
    _SPtar,
    _TPr,
    _BQP,
    _IPm,
    _CCP,
  ],
  [
    () => AmazonElasticsearchParameters,
    () => AthenaParameters,
    () => AuroraParameters,
    () => AuroraPostgreSqlParameters,
    () => AwsIotAnalyticsParameters,
    () => JiraParameters,
    () => MariaDbParameters,
    () => MySqlParameters,
    () => OracleParameters,
    () => PostgreSqlParameters,
    () => PrestoParameters,
    () => RdsParameters,
    () => RedshiftParameters,
    () => S3Parameters,
    () => ServiceNowParameters,
    () => SnowflakeParameters,
    () => SparkParameters,
    () => SqlServerParameters,
    () => TeradataParameters,
    () => TwitterParameters,
    () => AmazonOpenSearchParameters,
    () => ExasolParameters,
    () => DatabricksParameters,
    () => StarburstParameters,
    () => TrinoParameters,
    () => BigQueryParameters,
    () => ImpalaParameters,
    () => CustomConnectionParameters,
  ]
);
export var PhysicalTable = uni(
  n0,
  _PTh,
  0,
  [_RTel, _CSu, _SSo],
  [() => RelationalTable, () => CustomSql, () => S3Source]
);
export var TransformOperation = uni(
  n0,
  _TOra,
  0,
  [_PO, _FO, _CCO, _RCO, _CCTO, _TCO, _UCO, _ODPO],
  [
    () => ProjectOperation,
    [() => FilterOperation, 0],
    [() => CreateColumnsOperation, 0],
    () => RenameColumnOperation,
    () => CastColumnTypeOperation,
    [() => TagColumnOperation, 0],
    () => UntagColumnOperation,
    () => OverrideDatasetParameterOperation,
  ]
);
export var CreateDataSet = op(
  n0,
  _CDS,
  {
    [_h]: ["POST", "/accounts/{AwsAccountId}/data-sets", 200],
  },
  () => CreateDataSetRequest,
  () => CreateDataSetResponse
);
export var CreateDataSource = op(
  n0,
  _CDSr,
  {
    [_h]: ["POST", "/accounts/{AwsAccountId}/data-sources", 200],
  },
  () => CreateDataSourceRequest,
  () => CreateDataSourceResponse
);
export var DescribeAssetBundleImportJob = op(
  n0,
  _DABIJ,
  {
    [_h]: ["GET", "/accounts/{AwsAccountId}/asset-bundle-import-jobs/{AssetBundleImportJobId}", 200],
  },
  () => DescribeAssetBundleImportJobRequest,
  () => DescribeAssetBundleImportJobResponse
);
export var DescribeDataSet = op(
  n0,
  _DDSes,
  {
    [_h]: ["GET", "/accounts/{AwsAccountId}/data-sets/{DataSetId}", 200],
  },
  () => DescribeDataSetRequest,
  () => DescribeDataSetResponse
);
export var DescribeDataSource = op(
  n0,
  _DDSesc,
  {
    [_h]: ["GET", "/accounts/{AwsAccountId}/data-sources/{DataSourceId}", 200],
  },
  () => DescribeDataSourceRequest,
  () => DescribeDataSourceResponse
);
export var ListDataSources = op(
  n0,
  _LDSi,
  {
    [_h]: ["GET", "/accounts/{AwsAccountId}/data-sources", 200],
  },
  () => ListDataSourcesRequest,
  () => ListDataSourcesResponse
);
export var StartAssetBundleImportJob = op(
  n0,
  _SABIJ,
  {
    [_h]: ["POST", "/accounts/{AwsAccountId}/asset-bundle-import-jobs/import", 200],
  },
  () => StartAssetBundleImportJobRequest,
  () => StartAssetBundleImportJobResponse
);
export var UpdateDataSet = op(
  n0,
  _UDS,
  {
    [_h]: ["PUT", "/accounts/{AwsAccountId}/data-sets/{DataSetId}", 200],
  },
  () => UpdateDataSetRequest,
  () => UpdateDataSetResponse
);
export var UpdateDataSource = op(
  n0,
  _UDSp,
  {
    [_h]: ["PUT", "/accounts/{AwsAccountId}/data-sources/{DataSourceId}", 200],
  },
  () => UpdateDataSourceRequest,
  () => UpdateDataSourceResponse
);
