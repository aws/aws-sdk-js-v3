// smithy-typescript generated code
import { list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _ACp,
  _AICA,
  _AICD,
  _AICL,
  _AICN,
  _AICp,
  _ALM,
  _Ar,
  _Arg,
  _ATp,
  _ATu,
  _AUd,
  _BU,
  _CA,
  _CAIC,
  _CAICR,
  _CAICRr,
  _CCon,
  _CE,
  _CEAIC,
  _CEAS,
  _CEV,
  _CFS,
  _CFSu,
  _Co,
  _CPA,
  _CPAR,
  _CPARr,
  _CRod,
  _CSR,
  _CSr,
  _CSRr,
  _CT,
  _CTA,
  _CTB,
  _CTl,
  _DAICe,
  _DAICRe,
  _DAICRes,
  _DG,
  _DI,
  _DIE,
  _DNi,
  _DPAe,
  _DPARes,
  _DPAResc,
  _DRS,
  _DSesc,
  _DSRe,
  _DSRes,
  _DU,
  _EFSFS,
  _EIr,
  _EISBI,
  _Er,
  _ERA,
  _ESSb,
  _EVSIG,
  _FR,
  _FSC,
  _FSI,
  _FSLFS,
  _HEFSU,
  _IS,
  _ITIM,
  _JLAIC,
  _JLAS,
  _JSAS,
  _KGAS,
  _KGIC,
  _KKI,
  _KSe,
  _KSer,
  _LAIC,
  _LAICR,
  _LAICRi,
  _LMT,
  _LS,
  _LSR,
  _LSRi,
  _MCa,
  _MPo,
  _MR,
  _MTA,
  _MTB,
  _MWS,
  _N,
  _NCa,
  _NT,
  _OSSw,
  _OSw,
  _OUPN,
  _PAC,
  _PAMC,
  _RAem,
  _Re,
  _SALM,
  _SAp,
  _SBo,
  _SCEAS,
  _SDN,
  _SDp,
  _SFS,
  _SIS,
  _SJLAS,
  _SL,
  _SMR,
  _SN,
  _SNC,
  _SO,
  _Spa,
  _SS,
  _SSS,
  _SSSp,
  _SSSpa,
  _SSSS,
  _St,
  _STh,
  _SUr,
  _T,
  _Ti,
  _Ty,
  _U,
  _UAIC,
  _UAICR,
  _UAICRp,
  _UPAp,
  _UPAR,
  _UPARp,
  _USp,
  _USR,
  _USRp,
  _V,
  n0,
  TagList,
} from "./schemas_0";
import { CodeRepositories, JupyterServerAppSettings, KernelGatewayAppSettings } from "./schemas_10_Describe";
import { ResourceSpec } from "./schemas_140_Describe";

/* eslint no-var: 0 */

export var AppImageConfigDetails = struct(
  n0,
  _AICD,
  0,
  [_AICA, _AICN, _CT, _LMT, _KGIC, _JLAIC, _CEAIC],
  [0, 0, 4, 4, () => KernelGatewayImageConfig, () => JupyterLabAppImageConfig, () => CodeEditorAppImageConfig]
);
export var CodeEditorAppImageConfig = struct(
  n0,
  _CEAIC,
  0,
  [_FSC, _CCon],
  [() => FileSystemConfig, () => ContainerConfig]
);
export var ContainerConfig = struct(n0, _CCon, 0, [_CA, _CE, _CEV], [64 | 0, 64 | 0, 128 | 0]);
export var CreateAppImageConfigRequest = struct(
  n0,
  _CAICR,
  0,
  [_AICN, _T, _KGIC, _JLAIC, _CEAIC],
  [0, () => TagList, () => KernelGatewayImageConfig, () => JupyterLabAppImageConfig, () => CodeEditorAppImageConfig]
);
export var CreateAppImageConfigResponse = struct(n0, _CAICRr, 0, [_AICA], [0]);
export var CreatePartnerAppRequest = struct(
  n0,
  _CPAR,
  0,
  [_N, _Ty, _ERA, _KKI, _MCa, _Ti, _ACp, _ATu, _EISBI, _CTl, _T],
  [0, 0, 0, 0, () => PartnerAppMaintenanceConfig, 0, () => PartnerAppConfig, 0, 2, [0, 4], () => TagList]
);
export var CreatePartnerAppResponse = struct(n0, _CPARr, 0, [_Ar], [0]);
export var CreateSpaceRequest = struct(
  n0,
  _CSR,
  0,
  [_DI, _SN, _T, _SS, _OSw, _SSS, _SDN],
  [0, 0, () => TagList, () => SpaceSettings, () => OwnershipSettings, () => SpaceSharingSettings, 0]
);
export var CreateSpaceResponse = struct(n0, _CSRr, 0, [_SAp], [0]);
export var DescribeAppImageConfigRequest = struct(n0, _DAICRe, 0, [_AICN], [0]);
export var DescribeAppImageConfigResponse = struct(
  n0,
  _DAICRes,
  0,
  [_AICA, _AICN, _CT, _LMT, _KGIC, _JLAIC, _CEAIC],
  [0, 0, 4, 4, () => KernelGatewayImageConfig, () => JupyterLabAppImageConfig, () => CodeEditorAppImageConfig]
);
export var DescribePartnerAppRequest = struct(n0, _DPARes, 0, [_Ar], [0]);
export var DescribePartnerAppResponse = struct(
  n0,
  _DPAResc,
  0,
  [_Ar, _N, _Ty, _St, _CT, _LMT, _ERA, _KKI, _BU, _MCa, _Ti, _V, _ACp, _ATu, _EISBI, _Er],
  [0, 0, 0, 0, 4, 4, 0, 0, 0, () => PartnerAppMaintenanceConfig, 0, 0, () => PartnerAppConfig, 0, 2, () => ErrorInfo]
);
export var DescribeSpaceRequest = struct(n0, _DSRe, 0, [_DI, _SN], [0, 0]);
export var DescribeSpaceResponse = struct(
  n0,
  _DSRes,
  0,
  [_DI, _SAp, _SN, _HEFSU, _St, _LMT, _CT, _FR, _SS, _OSw, _SSS, _SDN, _U],
  [0, 0, 0, 0, 0, 4, 4, 0, () => SpaceSettings, () => OwnershipSettings, () => SpaceSharingSettings, 0, 0]
);
export var EbsStorageSettings = struct(n0, _ESSb, 0, [_EVSIG], [1]);
export var EFSFileSystem = struct(n0, _EFSFS, 0, [_FSI], [0]);
export var ErrorInfo = struct(n0, _EIr, 0, [_Co, _Re], [0, 0]);
export var FileSystemConfig = struct(n0, _FSC, 0, [_MPo, _DU, _DG], [0, 1, 1]);
export var FSxLustreFileSystem = struct(n0, _FSLFS, 0, [_FSI], [0]);
export var JupyterLabAppImageConfig = struct(
  n0,
  _JLAIC,
  0,
  [_FSC, _CCon],
  [() => FileSystemConfig, () => ContainerConfig]
);
export var KernelGatewayImageConfig = struct(n0, _KGIC, 0, [_KSe, _FSC], [() => KernelSpecs, () => FileSystemConfig]);
export var KernelSpec = struct(n0, _KSer, 0, [_N, _DNi], [0, 0]);
export var ListAppImageConfigsRequest = struct(
  n0,
  _LAICR,
  0,
  [_MR, _NT, _NCa, _CTB, _CTA, _MTB, _MTA, _SBo, _SO],
  [1, 0, 0, 4, 4, 4, 4, 0, 0]
);
export var ListAppImageConfigsResponse = struct(n0, _LAICRi, 0, [_NT, _AICp], [0, () => AppImageConfigList]);
export var ListSpacesRequest = struct(n0, _LSR, 0, [_NT, _MR, _SO, _SBo, _DIE, _SNC], [0, 1, 0, 0, 0, 0]);
export var ListSpacesResponse = struct(n0, _LSRi, 0, [_Spa, _NT], [() => SpaceList, 0]);
export var OwnershipSettings = struct(n0, _OSw, 0, [_OUPN], [0]);
export var OwnershipSettingsSummary = struct(n0, _OSSw, 0, [_OUPN], [0]);
export var PartnerAppConfig = struct(n0, _PAC, 0, [_AUd, _Arg], [64 | 0, 128 | 0]);
export var PartnerAppMaintenanceConfig = struct(n0, _PAMC, 0, [_MWS], [0]);
export var S3FileSystem = struct(n0, _SFS, 0, [_SUr], [0]);
export var SpaceAppLifecycleManagement = struct(n0, _SALM, 0, [_IS], [() => SpaceIdleSettings]);
export var SpaceCodeEditorAppSettings = struct(
  n0,
  _SCEAS,
  0,
  [_DRS, _ALM],
  [() => ResourceSpec, () => SpaceAppLifecycleManagement]
);
export var SpaceDetails = struct(
  n0,
  _SDp,
  0,
  [_DI, _SN, _St, _CT, _LMT, _SSSpa, _SSSS, _OSSw, _SDN],
  [0, 0, 0, 4, 4, () => SpaceSettingsSummary, () => SpaceSharingSettingsSummary, () => OwnershipSettingsSummary, 0]
);
export var SpaceIdleSettings = struct(n0, _SIS, 0, [_ITIM], [1]);
export var SpaceJupyterLabAppSettings = struct(
  n0,
  _SJLAS,
  0,
  [_DRS, _CRod, _ALM],
  [() => ResourceSpec, () => CodeRepositories, () => SpaceAppLifecycleManagement]
);
export var SpaceSettings = struct(
  n0,
  _SS,
  0,
  [_JSAS, _KGAS, _CEAS, _JLAS, _ATp, _SSSp, _SMR, _CFS, _RAem],
  [
    () => JupyterServerAppSettings,
    () => KernelGatewayAppSettings,
    () => SpaceCodeEditorAppSettings,
    () => SpaceJupyterLabAppSettings,
    0,
    () => SpaceStorageSettings,
    0,
    () => CustomFileSystems,
    0,
  ]
);
export var SpaceSettingsSummary = struct(n0, _SSSpa, 0, [_ATp, _RAem, _SSSp], [0, 0, () => SpaceStorageSettings]);
export var SpaceSharingSettings = struct(n0, _SSS, 0, [_STh], [0]);
export var SpaceSharingSettingsSummary = struct(n0, _SSSS, 0, [_STh], [0]);
export var SpaceStorageSettings = struct(n0, _SSSp, 0, [_ESSb], [() => EbsStorageSettings]);
export var UpdateAppImageConfigRequest = struct(
  n0,
  _UAICR,
  0,
  [_AICN, _KGIC, _JLAIC, _CEAIC],
  [0, () => KernelGatewayImageConfig, () => JupyterLabAppImageConfig, () => CodeEditorAppImageConfig]
);
export var UpdateAppImageConfigResponse = struct(n0, _UAICRp, 0, [_AICA], [0]);
export var UpdatePartnerAppRequest = struct(
  n0,
  _UPAR,
  0,
  [_Ar, _MCa, _Ti, _ACp, _EISBI, _CTl, _T],
  [0, () => PartnerAppMaintenanceConfig, 0, () => PartnerAppConfig, 2, [0, 4], () => TagList]
);
export var UpdatePartnerAppResponse = struct(n0, _UPARp, 0, [_Ar], [0]);
export var UpdateSpaceRequest = struct(n0, _USR, 0, [_DI, _SN, _SS, _SDN], [0, 0, () => SpaceSettings, 0]);
export var UpdateSpaceResponse = struct(n0, _USRp, 0, [_SAp], [0]);
export var AppImageConfigList = list(n0, _AICL, 0, () => AppImageConfigDetails);
export var CustomFileSystems = list(n0, _CFS, 0, () => CustomFileSystem);
export var CustomImageContainerArguments = 64 | 0;

export var CustomImageContainerEntrypoint = 64 | 0;

export var KernelSpecs = list(n0, _KSe, 0, () => KernelSpec);
export var PartnerAppAdminUserList = 64 | 0;

export var SpaceList = list(n0, _SL, 0, () => SpaceDetails);
export var CustomImageContainerEnvironmentVariables = 128 | 0;

export var PartnerAppArguments = 128 | 0;

export var CustomFileSystem = uni(
  n0,
  _CFSu,
  0,
  [_EFSFS, _FSLFS, _SFS],
  [() => EFSFileSystem, () => FSxLustreFileSystem, () => S3FileSystem]
);
export var CreateAppImageConfig = op(
  n0,
  _CAIC,
  0,
  () => CreateAppImageConfigRequest,
  () => CreateAppImageConfigResponse
);
export var CreatePartnerApp = op(
  n0,
  _CPA,
  0,
  () => CreatePartnerAppRequest,
  () => CreatePartnerAppResponse
);
export var CreateSpace = op(
  n0,
  _CSr,
  0,
  () => CreateSpaceRequest,
  () => CreateSpaceResponse
);
export var DescribeAppImageConfig = op(
  n0,
  _DAICe,
  0,
  () => DescribeAppImageConfigRequest,
  () => DescribeAppImageConfigResponse
);
export var DescribePartnerApp = op(
  n0,
  _DPAe,
  0,
  () => DescribePartnerAppRequest,
  () => DescribePartnerAppResponse
);
export var DescribeSpace = op(
  n0,
  _DSesc,
  0,
  () => DescribeSpaceRequest,
  () => DescribeSpaceResponse
);
export var ListAppImageConfigs = op(
  n0,
  _LAIC,
  0,
  () => ListAppImageConfigsRequest,
  () => ListAppImageConfigsResponse
);
export var ListSpaces = op(
  n0,
  _LS,
  0,
  () => ListSpacesRequest,
  () => ListSpacesResponse
);
export var UpdateAppImageConfig = op(
  n0,
  _UAIC,
  0,
  () => UpdateAppImageConfigRequest,
  () => UpdateAppImageConfigResponse
);
export var UpdatePartnerApp = op(
  n0,
  _UPAp,
  0,
  () => UpdatePartnerAppRequest,
  () => UpdatePartnerAppResponse
);
export var UpdateSpace = op(
  n0,
  _USp,
  0,
  () => UpdateSpaceRequest,
  () => UpdateSpaceResponse
);
