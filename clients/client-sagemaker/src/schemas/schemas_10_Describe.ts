// smithy-typescript generated code
import { list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _AAp,
  _ABRA,
  _AFRA,
  _AICN,
  _ALM,
  _AM,
  _AMHEFS,
  _ANAT,
  _ANp,
  _AQS,
  _ARA,
  _AScc,
  _ASGM,
  _ATp,
  _BILCA,
  _CAMRRA,
  _CAS,
  _CDR,
  _CDre,
  _CDRr,
  _CEAS,
  _CFSC,
  _CFSCu,
  _CI,
  _CIu,
  _CPUC,
  _CRo,
  _CRod,
  _CT,
  _CUP,
  _CUPR,
  _CUPRr,
  _DAescr,
  _DAIo,
  _DAo,
  _DARescr,
  _DARescri,
  _DDesc,
  _DDRescr,
  _DDRescri,
  _DDS,
  _DERA,
  _DESS,
  _DEVSIG,
  _DI,
  _DLU,
  _DNo,
  _DRo,
  _DRS,
  _DSFU,
  _DSNa,
  _DSo,
  _DSoc,
  _DSS,
  _DSSS,
  _DUPe,
  _DUPRe,
  _DUPRes,
  _DUS,
  _EDA,
  _EFSFSC,
  _EInv,
  _ERA,
  _ERAx,
  _ERIC,
  _ERx,
  _ESm,
  _ESS,
  _ETIPS,
  _FR,
  _FSI,
  _FSLFSC,
  _FSP,
  _GAS,
  _Gi,
  _HAT,
  _HEFSI,
  _HEFSKKI,
  _HEFSU,
  _HIT,
  _HMT,
  _HSMI,
  _HSMIVA,
  _HSMIVAL,
  _IAT,
  _IN,
  _IPOAS,
  _IPOASd,
  _IS,
  _ITIM,
  _IVN,
  _JLAS,
  _JSAS,
  _KGAS,
  _KKI,
  _KS,
  _LCA,
  _LHCT,
  _LM,
  _LMT,
  _LUAT,
  _MEVSIG,
  _MITIM,
  _MITIMa,
  _MPo,
  _MRS,
  _NOO,
  _PIro,
  _PSP,
  _QPA,
  _RD,
  _RM,
  _RS,
  _RSAS,
  _RSCU,
  _RSPMU,
  _RSSPAS,
  _RSSPDS,
  _RSSPDSFU,
  _RU,
  _SAe,
  _SAP,
  _SFSC,
  _SG,
  _SGI,
  _SGIFDB,
  _SIu,
  _SKKI,
  _SMIN,
  _SN,
  _SOP,
  _SSh,
  _SSOAA,
  _SSOMAII,
  _SSOUI,
  _SSOUV,
  _SSSp,
  _St,
  _SUr,
  _SWP,
  _SWPA,
  _SWPS,
  _T,
  _TBAS,
  _TIPS,
  _TP,
  _TSFS,
  _U,
  _UDp,
  _UDRp,
  _UDRpd,
  _UG,
  _Ui,
  _UPA,
  _UPN,
  _US,
  _USSn,
  _UUP,
  _UUPR,
  _UUPRp,
  _VA,
  _VIp,
  _VOTA,
  _WS,
  n0,
  TagList,
} from "./schemas_0";
import { ResourceSpec } from "./schemas_140_Describe";

/* eslint no-var: 0 */

export var AmazonQSettings = struct(n0, _AQS, 0, [_St, _QPA], [0, 0]);
export var AppLifecycleManagement = struct(n0, _ALM, 0, [_IS], [() => IdleSettings]);
export var CanvasAppSettings = struct(
  n0,
  _CAS,
  0,
  [_TSFS, _MRS, _WS, _IPOAS, _DDS, _KS, _GAS, _ESS],
  [
    () => TimeSeriesForecastingSettings,
    () => ModelRegisterSettings,
    () => WorkspaceSettings,
    () => IdentityProviderOAuthSettings,
    () => DirectDeploySettings,
    () => KendraSettings,
    () => GenerativeAiSettings,
    () => EmrServerlessSettings,
  ]
);
export var CodeEditorAppSettings = struct(
  n0,
  _CEAS,
  0,
  [_DRS, _CI, _LCA, _ALM, _BILCA],
  [() => ResourceSpec, () => CustomImages, 64 | 0, () => AppLifecycleManagement, 0]
);
export var CodeRepository = struct(n0, _CRo, 0, [_RU], [0]);
export var CreateDomainRequest = struct(
  n0,
  _CDR,
  0,
  [_DNo, _AM, _DUS, _DSo, _SIu, _VIp, _T, _ANAT, _HEFSKKI, _KKI, _ASGM, _TP, _DSS],
  [0, 0, () => UserSettings, () => DomainSettings, 64 | 0, 0, () => TagList, 0, 0, 0, 0, 0, () => DefaultSpaceSettings]
);
export var CreateDomainResponse = struct(n0, _CDRr, 0, [_DAo, _DI, _U], [0, 0, 0]);
export var CreateUserProfileRequest = struct(
  n0,
  _CUPR,
  0,
  [_DI, _UPN, _SSOUI, _SSOUV, _T, _US],
  [0, 0, 0, 0, () => TagList, () => UserSettings]
);
export var CreateUserProfileResponse = struct(n0, _CUPRr, 0, [_UPA], [0]);
export var CustomImage = struct(n0, _CIu, 0, [_IN, _IVN, _AICN], [0, 1, 0]);
export var CustomPosixUserConfig = struct(n0, _CPUC, 0, [_Ui, _Gi], [1, 1]);
export var DefaultEbsStorageSettings = struct(n0, _DESS, 0, [_DEVSIG, _MEVSIG], [1, 1]);
export var DefaultSpaceSettings = struct(
  n0,
  _DSS,
  0,
  [_ERx, _SG, _JSAS, _KGAS, _JLAS, _SSSp, _CPUC, _CFSC],
  [
    0,
    64 | 0,
    () => JupyterServerAppSettings,
    () => KernelGatewayAppSettings,
    () => JupyterLabAppSettings,
    () => DefaultSpaceStorageSettings,
    () => CustomPosixUserConfig,
    () => CustomFileSystemConfigs,
  ]
);
export var DefaultSpaceStorageSettings = struct(n0, _DSSS, 0, [_DESS], [() => DefaultEbsStorageSettings]);
export var DescribeAppRequest = struct(n0, _DARescr, 0, [_DI, _UPN, _SN, _ATp, _ANp], [0, 0, 0, 0, 0]);
export var DescribeAppResponse = struct(
  n0,
  _DARescri,
  0,
  [_AAp, _ATp, _ANp, _DI, _UPN, _SN, _St, _ETIPS, _RM, _LHCT, _LUAT, _CT, _FR, _RS, _BILCA],
  [0, 0, 0, 0, 0, 0, 0, 0, 2, 4, 4, 4, 0, () => ResourceSpec, 0]
);
export var DescribeDomainRequest = struct(n0, _DDRescr, 0, [_DI], [0]);
export var DescribeDomainResponse = struct(
  n0,
  _DDRescri,
  0,
  [
    _DAo,
    _DI,
    _DNo,
    _HEFSI,
    _SSOMAII,
    _SSOAA,
    _St,
    _CT,
    _LMT,
    _FR,
    _SGIFDB,
    _AM,
    _DUS,
    _DSo,
    _ANAT,
    _HEFSKKI,
    _SIu,
    _U,
    _VIp,
    _KKI,
    _ASGM,
    _TP,
    _DSS,
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    4,
    4,
    0,
    0,
    0,
    () => UserSettings,
    () => DomainSettings,
    0,
    0,
    64 | 0,
    0,
    0,
    0,
    0,
    0,
    () => DefaultSpaceSettings,
  ]
);
export var DescribeUserProfileRequest = struct(n0, _DUPRe, 0, [_DI, _UPN], [0, 0]);
export var DescribeUserProfileResponse = struct(
  n0,
  _DUPRes,
  0,
  [_DI, _UPA, _UPN, _HEFSU, _St, _LMT, _CT, _FR, _SSOUI, _SSOUV, _US],
  [0, 0, 0, 0, 0, 4, 4, 0, 0, 0, () => UserSettings]
);
export var DirectDeploySettings = struct(n0, _DDS, 0, [_St], [0]);
export var DockerSettings = struct(n0, _DSoc, 0, [_EDA, _VOTA, _RD], [0, 64 | 0, 0]);
export var DomainSettings = struct(
  n0,
  _DSo,
  0,
  [_SGI, _RSSPDS, _ERIC, _TIPS, _DSoc, _AQS, _USSn, _IAT],
  [
    64 | 0,
    () => RStudioServerProDomainSettings,
    0,
    () => TrustedIdentityPropagationSettings,
    () => DockerSettings,
    () => AmazonQSettings,
    () => UnifiedStudioSettings,
    0,
  ]
);
export var DomainSettingsForUpdate = struct(
  n0,
  _DSFU,
  0,
  [_RSSPDSFU, _ERIC, _SGI, _TIPS, _DSoc, _AQS, _USSn, _IAT],
  [
    () => RStudioServerProDomainSettingsForUpdate,
    0,
    64 | 0,
    () => TrustedIdentityPropagationSettings,
    () => DockerSettings,
    () => AmazonQSettings,
    () => UnifiedStudioSettings,
    0,
  ]
);
export var EFSFileSystemConfig = struct(n0, _EFSFSC, 0, [_FSI, _FSP], [0, 0]);
export var EmrServerlessSettings = struct(n0, _ESS, 0, [_ERA, _St], [0, 0]);
export var EmrSettings = struct(n0, _ESm, 0, [_ARA, _ERAx], [64 | 0, 64 | 0]);
export var FSxLustreFileSystemConfig = struct(n0, _FSLFSC, 0, [_FSI, _FSP], [0, 0]);
export var GenerativeAiSettings = struct(n0, _GAS, 0, [_ABRA], [0]);
export var HiddenSageMakerImage = struct(n0, _HSMI, 0, [_SMIN, _VA], [0, 64 | 0]);
export var IdentityProviderOAuthSetting = struct(n0, _IPOASd, 0, [_DSNa, _St, _SAe], [0, 0, 0]);
export var IdleSettings = struct(n0, _IS, 0, [_LM, _ITIM, _MITIM, _MITIMa], [0, 1, 1, 1]);
export var JupyterLabAppSettings = struct(
  n0,
  _JLAS,
  0,
  [_DRS, _CI, _LCA, _CRod, _ALM, _ESm, _BILCA],
  [
    () => ResourceSpec,
    () => CustomImages,
    64 | 0,
    () => CodeRepositories,
    () => AppLifecycleManagement,
    () => EmrSettings,
    0,
  ]
);
export var JupyterServerAppSettings = struct(
  n0,
  _JSAS,
  0,
  [_DRS, _LCA, _CRod],
  [() => ResourceSpec, 64 | 0, () => CodeRepositories]
);
export var KendraSettings = struct(n0, _KS, 0, [_St], [0]);
export var KernelGatewayAppSettings = struct(
  n0,
  _KGAS,
  0,
  [_DRS, _CI, _LCA],
  [() => ResourceSpec, () => CustomImages, 64 | 0]
);
export var ModelRegisterSettings = struct(n0, _MRS, 0, [_St, _CAMRRA], [0, 0]);
export var RSessionAppSettings = struct(n0, _RSAS, 0, [_DRS, _CI], [() => ResourceSpec, () => CustomImages]);
export var RStudioServerProAppSettings = struct(n0, _RSSPAS, 0, [_AScc, _UG], [0, 0]);
export var RStudioServerProDomainSettings = struct(
  n0,
  _RSSPDS,
  0,
  [_DERA, _RSCU, _RSPMU, _DRS],
  [0, 0, 0, () => ResourceSpec]
);
export var RStudioServerProDomainSettingsForUpdate = struct(
  n0,
  _RSSPDSFU,
  0,
  [_DERA, _DRS, _RSCU, _RSPMU],
  [0, () => ResourceSpec, 0, 0]
);
export var S3FileSystemConfig = struct(n0, _SFSC, 0, [_MPo, _SUr], [0, 0]);
export var SharingSettings = struct(n0, _SSh, 0, [_NOO, _SOP, _SKKI], [0, 0, 0]);
export var StudioWebPortalSettings = struct(
  n0,
  _SWPS,
  0,
  [_HMT, _HAT, _HIT, _HSMIVA],
  [64 | 0, 64 | 0, 64 | 0, () => HiddenSageMakerImageVersionAliasesList]
);
export var TensorBoardAppSettings = struct(n0, _TBAS, 0, [_DRS], [() => ResourceSpec]);
export var TimeSeriesForecastingSettings = struct(n0, _TSFS, 0, [_St, _AFRA], [0, 0]);
export var TrustedIdentityPropagationSettings = struct(n0, _TIPS, 0, [_St], [0]);
export var UnifiedStudioSettings = struct(
  n0,
  _USSn,
  0,
  [_SWPA, _DAIo, _DRo, _DI, _PIro, _EInv, _PSP, _SSOAA],
  [0, 0, 0, 0, 0, 0, 0, 0]
);
export var UpdateDomainRequest = struct(
  n0,
  _UDRp,
  0,
  [_DI, _DUS, _DSFU, _ASGM, _DSS, _SIu, _ANAT, _TP],
  [0, () => UserSettings, () => DomainSettingsForUpdate, 0, () => DefaultSpaceSettings, 64 | 0, 0, 0]
);
export var UpdateDomainResponse = struct(n0, _UDRpd, 0, [_DAo], [0]);
export var UpdateUserProfileRequest = struct(n0, _UUPR, 0, [_DI, _UPN, _US], [0, 0, () => UserSettings]);
export var UpdateUserProfileResponse = struct(n0, _UUPRp, 0, [_UPA], [0]);
export var UserSettings = struct(
  n0,
  _US,
  0,
  [
    _ERx,
    _SG,
    _SSh,
    _JSAS,
    _KGAS,
    _TBAS,
    _RSSPAS,
    _RSAS,
    _CAS,
    _CEAS,
    _JLAS,
    _SSSp,
    _DLU,
    _SWP,
    _CPUC,
    _CFSC,
    _SWPS,
    _AMHEFS,
  ],
  [
    0,
    64 | 0,
    () => SharingSettings,
    () => JupyterServerAppSettings,
    () => KernelGatewayAppSettings,
    () => TensorBoardAppSettings,
    () => RStudioServerProAppSettings,
    () => RSessionAppSettings,
    () => CanvasAppSettings,
    () => CodeEditorAppSettings,
    () => JupyterLabAppSettings,
    () => DefaultSpaceStorageSettings,
    0,
    0,
    () => CustomPosixUserConfig,
    () => CustomFileSystemConfigs,
    () => StudioWebPortalSettings,
    0,
  ]
);
export var WorkspaceSettings = struct(n0, _WS, 0, [_SAP, _SKKI], [0, 0]);
export var AssumableRoleArns = 64 | 0;

export var CodeRepositories = list(n0, _CRod, 0, () => CodeRepository);
export var CustomFileSystemConfigs = list(n0, _CFSC, 0, () => CustomFileSystemConfig);
export var CustomImages = list(n0, _CI, 0, () => CustomImage);
export var DomainSecurityGroupIds = 64 | 0;

export var ExecutionRoleArns = 64 | 0;

export var HiddenAppTypesList = 64 | 0;

export var HiddenInstanceTypesList = 64 | 0;

export var HiddenMlToolsList = 64 | 0;

export var HiddenSageMakerImageVersionAliasesList = list(n0, _HSMIVAL, 0, () => HiddenSageMakerImage);
export var IdentityProviderOAuthSettings = list(n0, _IPOAS, 0, () => IdentityProviderOAuthSetting);
export var LifecycleConfigArns = 64 | 0;

export var VersionAliasesList = 64 | 0;

export var VpcOnlyTrustedAccounts = 64 | 0;

export var CustomFileSystemConfig = uni(
  n0,
  _CFSCu,
  0,
  [_EFSFSC, _FSLFSC, _SFSC],
  [() => EFSFileSystemConfig, () => FSxLustreFileSystemConfig, () => S3FileSystemConfig]
);
export var CreateDomain = op(
  n0,
  _CDre,
  0,
  () => CreateDomainRequest,
  () => CreateDomainResponse
);
export var CreateUserProfile = op(
  n0,
  _CUP,
  0,
  () => CreateUserProfileRequest,
  () => CreateUserProfileResponse
);
export var DescribeApp = op(
  n0,
  _DAescr,
  0,
  () => DescribeAppRequest,
  () => DescribeAppResponse
);
export var DescribeDomain = op(
  n0,
  _DDesc,
  0,
  () => DescribeDomainRequest,
  () => DescribeDomainResponse
);
export var DescribeUserProfile = op(
  n0,
  _DUPe,
  0,
  () => DescribeUserProfileRequest,
  () => DescribeUserProfileResponse
);
export var UpdateDomain = op(
  n0,
  _UDp,
  0,
  () => UpdateDomainRequest,
  () => UpdateDomainResponse
);
export var UpdateUserProfile = op(
  n0,
  _UUP,
  0,
  () => UpdateUserProfileRequest,
  () => UpdateUserProfileResponse
);
