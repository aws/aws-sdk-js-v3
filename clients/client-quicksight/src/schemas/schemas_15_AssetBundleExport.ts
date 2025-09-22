// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AAI,
  _ABCFOPC,
  _ABEJAOP,
  _ABEJAOPL,
  _ABEJDOP,
  _ABEJDOPL,
  _ABEJDSOP,
  _ABEJDSOPL,
  _ABEJDSOPLs,
  _ABEJDSOPs,
  _ABEJE,
  _ABEJEL,
  _ABEJFOP,
  _ABEJFOPL,
  _ABEJI,
  _ABEJRIOC,
  _ABEJRSOP,
  _ABEJRSOPL,
  _ABEJS,
  _ABEJSL,
  _ABEJTOP,
  _ABEJTOPL,
  _ABEJVPCCOP,
  _ABEJVPCCOPL,
  _ABEJVS,
  _ABEJW,
  _ABEJWL,
  _Ana,
  _Ar,
  _CFOPC,
  _CT,
  _DABEJ,
  _DABEJR,
  _DABEJRe,
  _Das,
  _DSa,
  _DSat,
  _DUo,
  _EFx,
  _Er,
  _F,
  _h,
  _hQ,
  _IAD,
  _IFM,
  _IFMn,
  _IP,
  _IT,
  _JS,
  _LABEJ,
  _LABEJR,
  _LABEJRi,
  _M,
  _MR,
  _mr,
  _NT,
  _nt,
  _PFAR,
  _Pr,
  _RAes,
  _RI,
  _RIOC,
  _RS,
  _SABEJ,
  _SABEJR,
  _SABEJRt,
  _SMFAR,
  _St,
  _T,
  _Th,
  _VPCC,
  _VSa,
  _Wa,
  n0,
} from "./schemas_0";
import { SensitiveS3Uri } from "./schemas_96_Describe";

/* eslint no-var: 0 */

export var AssetBundleCloudFormationOverridePropertyConfiguration = struct(
  n0,
  _ABCFOPC,
  0,
  [_RIOC, _VPCC, _RS, _DSa, _DSat, _Th, _Ana, _Das, _F],
  [
    () => AssetBundleExportJobResourceIdOverrideConfiguration,
    () => AssetBundleExportJobVPCConnectionOverridePropertiesList,
    () => AssetBundleExportJobRefreshScheduleOverridePropertiesList,
    () => AssetBundleExportJobDataSourceOverridePropertiesList,
    () => AssetBundleExportJobDataSetOverridePropertiesList,
    () => AssetBundleExportJobThemeOverridePropertiesList,
    () => AssetBundleExportJobAnalysisOverridePropertiesList,
    () => AssetBundleExportJobDashboardOverridePropertiesList,
    () => AssetBundleExportJobFolderOverridePropertiesList,
  ]
);
export var AssetBundleExportJobAnalysisOverrideProperties = struct(n0, _ABEJAOP, 0, [_Ar, _Pr], [0, 64 | 0]);
export var AssetBundleExportJobDashboardOverrideProperties = struct(n0, _ABEJDOP, 0, [_Ar, _Pr], [0, 64 | 0]);
export var AssetBundleExportJobDataSetOverrideProperties = struct(n0, _ABEJDSOP, 0, [_Ar, _Pr], [0, 64 | 0]);
export var AssetBundleExportJobDataSourceOverrideProperties = struct(n0, _ABEJDSOPs, 0, [_Ar, _Pr], [0, 64 | 0]);
export var AssetBundleExportJobError = struct(n0, _ABEJE, 0, [_Ar, _T, _M], [0, 0, 0]);
export var AssetBundleExportJobFolderOverrideProperties = struct(n0, _ABEJFOP, 0, [_Ar, _Pr], [0, 64 | 0]);
export var AssetBundleExportJobRefreshScheduleOverrideProperties = struct(n0, _ABEJRSOP, 0, [_Ar, _Pr], [0, 64 | 0]);
export var AssetBundleExportJobResourceIdOverrideConfiguration = struct(n0, _ABEJRIOC, 0, [_PFAR], [2]);
export var AssetBundleExportJobSummary = struct(
  n0,
  _ABEJS,
  0,
  [_JS, _Ar, _CT, _ABEJI, _IAD, _EFx, _IP, _IT],
  [0, 0, 4, 0, 2, 0, 2, 2]
);
export var AssetBundleExportJobThemeOverrideProperties = struct(n0, _ABEJTOP, 0, [_Ar, _Pr], [0, 64 | 0]);
export var AssetBundleExportJobValidationStrategy = struct(n0, _ABEJVS, 0, [_SMFAR], [2]);
export var AssetBundleExportJobVPCConnectionOverrideProperties = struct(n0, _ABEJVPCCOP, 0, [_Ar, _Pr], [0, 64 | 0]);
export var AssetBundleExportJobWarning = struct(n0, _ABEJW, 0, [_Ar, _M], [0, 0]);
export var DescribeAssetBundleExportJobRequest = struct(
  n0,
  _DABEJR,
  0,
  [_AAI, _ABEJI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DescribeAssetBundleExportJobResponse = struct(
  n0,
  _DABEJRe,
  0,
  [_JS, _DUo, _Er, _Ar, _CT, _ABEJI, _AAI, _RAes, _IAD, _EFx, _CFOPC, _RI, _St, _IP, _IT, _VSa, _Wa, _IFM, _IFMn],
  [
    0,
    [() => SensitiveS3Uri, 0],
    () => AssetBundleExportJobErrorList,
    0,
    4,
    0,
    0,
    64 | 0,
    2,
    0,
    () => AssetBundleCloudFormationOverridePropertyConfiguration,
    0,
    [1, 32],
    2,
    2,
    () => AssetBundleExportJobValidationStrategy,
    () => AssetBundleExportJobWarningList,
    2,
    0,
  ]
);
export var ListAssetBundleExportJobsRequest = struct(
  n0,
  _LABEJR,
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
export var ListAssetBundleExportJobsResponse = struct(
  n0,
  _LABEJRi,
  0,
  [_ABEJSL, _NT, _RI, _St],
  [() => AssetBundleExportJobSummaryList, 0, 0, [1, 32]]
);
export var StartAssetBundleExportJobRequest = struct(
  n0,
  _SABEJR,
  0,
  [_AAI, _ABEJI, _RAes, _IAD, _EFx, _CFOPC, _IP, _IT, _VSa, _IFM, _IFMn],
  [
    [0, 1],
    0,
    64 | 0,
    2,
    0,
    () => AssetBundleCloudFormationOverridePropertyConfiguration,
    2,
    2,
    () => AssetBundleExportJobValidationStrategy,
    2,
    0,
  ]
);
export var StartAssetBundleExportJobResponse = struct(n0, _SABEJRt, 0, [_Ar, _ABEJI, _RI, _St], [0, 0, 0, [1, 32]]);
export var AssetBundleExportJobAnalysisOverridePropertiesList = list(
  n0,
  _ABEJAOPL,
  0,
  () => AssetBundleExportJobAnalysisOverrideProperties
);
export var AssetBundleExportJobAnalysisPropertyToOverrideList = 64 | 0;

export var AssetBundleExportJobDashboardOverridePropertiesList = list(
  n0,
  _ABEJDOPL,
  0,
  () => AssetBundleExportJobDashboardOverrideProperties
);
export var AssetBundleExportJobDashboardPropertyToOverrideList = 64 | 0;

export var AssetBundleExportJobDataSetOverridePropertiesList = list(
  n0,
  _ABEJDSOPL,
  0,
  () => AssetBundleExportJobDataSetOverrideProperties
);
export var AssetBundleExportJobDataSetPropertyToOverrideList = 64 | 0;

export var AssetBundleExportJobDataSourceOverridePropertiesList = list(
  n0,
  _ABEJDSOPLs,
  0,
  () => AssetBundleExportJobDataSourceOverrideProperties
);
export var AssetBundleExportJobDataSourcePropertyToOverrideList = 64 | 0;

export var AssetBundleExportJobErrorList = list(n0, _ABEJEL, 0, () => AssetBundleExportJobError);
export var AssetBundleExportJobFolderOverridePropertiesList = list(
  n0,
  _ABEJFOPL,
  0,
  () => AssetBundleExportJobFolderOverrideProperties
);
export var AssetBundleExportJobFolderPropertyToOverrideList = 64 | 0;

export var AssetBundleExportJobRefreshScheduleOverridePropertiesList = list(
  n0,
  _ABEJRSOPL,
  0,
  () => AssetBundleExportJobRefreshScheduleOverrideProperties
);
export var AssetBundleExportJobRefreshSchedulePropertyToOverrideList = 64 | 0;

export var AssetBundleExportJobSummaryList = list(n0, _ABEJSL, 0, () => AssetBundleExportJobSummary);
export var AssetBundleExportJobThemeOverridePropertiesList = list(
  n0,
  _ABEJTOPL,
  0,
  () => AssetBundleExportJobThemeOverrideProperties
);
export var AssetBundleExportJobThemePropertyToOverrideList = 64 | 0;

export var AssetBundleExportJobVPCConnectionOverridePropertiesList = list(
  n0,
  _ABEJVPCCOPL,
  0,
  () => AssetBundleExportJobVPCConnectionOverrideProperties
);
export var AssetBundleExportJobVPCConnectionPropertyToOverrideList = 64 | 0;

export var AssetBundleExportJobWarningList = list(n0, _ABEJWL, 0, () => AssetBundleExportJobWarning);
export var AssetBundleResourceArns = 64 | 0;

export var DescribeAssetBundleExportJob = op(
  n0,
  _DABEJ,
  {
    [_h]: ["GET", "/accounts/{AwsAccountId}/asset-bundle-export-jobs/{AssetBundleExportJobId}", 200],
  },
  () => DescribeAssetBundleExportJobRequest,
  () => DescribeAssetBundleExportJobResponse
);
export var ListAssetBundleExportJobs = op(
  n0,
  _LABEJ,
  {
    [_h]: ["GET", "/accounts/{AwsAccountId}/asset-bundle-export-jobs", 200],
  },
  () => ListAssetBundleExportJobsRequest,
  () => ListAssetBundleExportJobsResponse
);
export var StartAssetBundleExportJob = op(
  n0,
  _SABEJ,
  {
    [_h]: ["POST", "/accounts/{AwsAccountId}/asset-bundle-export-jobs/export", 200],
  },
  () => StartAssetBundleExportJobRequest,
  () => StartAssetBundleExportJobResponse
);
