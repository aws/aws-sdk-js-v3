// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  UnsupportedNetworkConfigurationException as __UnsupportedNetworkConfigurationException,
  WorkspacesDefaultRoleNotFoundException as __WorkspacesDefaultRoleNotFoundException,
} from "../models/index";
import {
  _AA,
  _AAp,
  _ACI,
  _ACSA,
  _ADC,
  _AIl,
  _Al,
  _As,
  _C,
  _c,
  _CAP,
  _CAPo,
  _CBAP,
  _CSGI,
  _CUN,
  _D,
  _DCAP,
  _DCAPR,
  _DCAPRe,
  _De,
  _DI,
  _Di,
  _DIA,
  _DIi,
  _DL,
  _DN,
  _DNi,
  _DO,
  _DT,
  _DWA,
  _DWAR,
  _DWARe,
  _DWCP,
  _DWDe,
  _DWDF,
  _DWDFL,
  _DWDRes,
  _DWDResc,
  _DWIe,
  _DWIRes,
  _DWIResc,
  _e,
  _EC,
  _ED,
  _EDL,
  _EEM,
  _EIA,
  _EM,
  _EMM,
  _ESS,
  _F,
  _Fi,
  _I,
  _IA,
  _IDCC,
  _iGI,
  _II,
  _IIA,
  _IIm,
  _IIRA,
  _IRIa,
  _IT,
  _Li,
  _m,
  _MEC,
  _MR,
  _MWCP,
  _MWCPR,
  _MWCPRo,
  _N,
  _NT,
  _OAI,
  _OS,
  _RC,
  _RI,
  _RT,
  _RWD,
  _RWDR,
  _RWDRe,
  _S,
  _SAIh,
  _SASA,
  _SI,
  _SP,
  _SPe,
  _SPt,
  _T,
  _Te,
  _TI,
  _U,
  _UA,
  _UCAP,
  _UCAPR,
  _UCAPRp,
  _UEALA,
  _UIT,
  _UNCE,
  _URp,
  _UWIP,
  _UWIPR,
  _UWIPRp,
  _V,
  _WAP,
  _WCP,
  _WD,
  _WDD,
  _WDN,
  _WDNo,
  _WDRNFE,
  _WI,
  _WIL,
  _WIor,
  _WSAD,
  _WSGI,
  _WT,
  n0,
  TagList,
} from "./schemas_0";
import { SamlProperties } from "./schemas_11_";
import { WorkspaceResourceAssociationList } from "./schemas_13_Describe";
import { OperatingSystem } from "./schemas_20_Workspace";
import { StreamingProperties } from "./schemas_22_";
import { WorkspaceAccessProperties } from "./schemas_25_Workspace";
import { CertificateBasedAuthProperties } from "./schemas_29_";
import { SelfservicePermissions } from "./schemas_31_Describe";

/* eslint no-var: 0 */

export var ActiveDirectoryConfig = struct(n0, _ADC, 0, [_DN, _SASA], [0, 0]);
export var ConnectionAliasPermission = struct(n0, _CAP, 0, [_SAIh, _AA], [0, 2]);
export var DefaultWorkspaceCreationProperties = struct(
  n0,
  _DWCP,
  0,
  [_EIA, _DO, _CSGI, _UEALA, _EMM, _IIRA],
  [2, 0, 0, 2, 2, 0]
);
export var DeployWorkspaceApplicationsRequest = struct(n0, _DWAR, 0, [_WI, _F], [0, 2]);
export var DeployWorkspaceApplicationsResult = struct(n0, _DWARe, 0, [_De], [() => WorkSpaceApplicationDeployment]);
export var DescribeConnectionAliasPermissionsRequest = struct(n0, _DCAPR, 0, [_AIl, _NT, _MR], [0, 0, 1]);
export var DescribeConnectionAliasPermissionsResult = struct(
  n0,
  _DCAPRe,
  0,
  [_AIl, _CAPo, _NT],
  [0, () => ConnectionAliasPermissions, 0]
);
export var DescribeWorkspaceDirectoriesFilter = struct(n0, _DWDF, 0, [_N, _V], [0, 64 | 0]);
export var DescribeWorkspaceDirectoriesRequest = struct(
  n0,
  _DWDRes,
  0,
  [_DIi, _WDN, _Li, _NT, _Fi],
  [64 | 0, 64 | 0, 1, 0, () => DescribeWorkspaceDirectoriesFilterList]
);
export var DescribeWorkspaceDirectoriesResult = struct(n0, _DWDResc, 0, [_Di, _NT], [() => DirectoryList, 0]);
export var DescribeWorkspaceImagesRequest = struct(n0, _DWIRes, 0, [_IIm, _IT, _NT, _MR], [64 | 0, 0, 0, 1]);
export var DescribeWorkspaceImagesResult = struct(n0, _DWIResc, 0, [_I, _NT], [() => WorkspaceImageList, 0]);
export var ErrorDetails = struct(n0, _ED, 0, [_EC, _EM], [0, 0]);
export var IDCConfig = struct(n0, _IDCC, 0, [_IA, _AAp], [0, 0]);
export var MicrosoftEntraConfig = struct(n0, _MEC, 0, [_TI, _ACSA], [0, 0]);
export var ModifyWorkspaceCreationPropertiesRequest = struct(
  n0,
  _MWCPR,
  0,
  [_RI, _WCP],
  [0, () => WorkspaceCreationProperties]
);
export var ModifyWorkspaceCreationPropertiesResult = struct(n0, _MWCPRo, 0, [], []);
export var RegisterWorkspaceDirectoryRequest = struct(
  n0,
  _RWDR,
  0,
  [_DI, _SI, _ESS, _Te, _T, _WDNo, _WDD, _UIT, _IIA, _MEC, _WT, _ADC],
  [0, 64 | 0, 2, 0, () => TagList, 0, 0, 0, 0, () => MicrosoftEntraConfig, 0, () => ActiveDirectoryConfig]
);
export var RegisterWorkspaceDirectoryResult = struct(n0, _RWDRe, 0, [_DI, _S], [0, 0]);
export var UnsupportedNetworkConfigurationException = error(
  n0,
  _UNCE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __UnsupportedNetworkConfigurationException
);
export var UpdateConnectionAliasPermissionRequest = struct(
  n0,
  _UCAPR,
  0,
  [_AIl, _CAP],
  [0, () => ConnectionAliasPermission]
);
export var UpdateConnectionAliasPermissionResult = struct(n0, _UCAPRp, 0, [], []);
export var UpdateResult = struct(n0, _URp, 0, [_UA, _D], [2, 0]);
export var UpdateWorkspaceImagePermissionRequest = struct(n0, _UWIPR, 0, [_II, _ACI, _SAIh], [0, 2, 0]);
export var UpdateWorkspaceImagePermissionResult = struct(n0, _UWIPRp, 0, [], []);
export var WorkSpaceApplicationDeployment = struct(n0, _WSAD, 0, [_As], [() => WorkspaceResourceAssociationList]);
export var WorkspaceCreationProperties = struct(
  n0,
  _WCP,
  0,
  [_EIA, _DO, _CSGI, _UEALA, _EMM, _IIRA],
  [2, 0, 0, 2, 2, 0]
);
export var WorkspaceDirectory = struct(
  n0,
  _WD,
  0,
  [
    _DI,
    _Al,
    _DNi,
    _RC,
    _SI,
    _DIA,
    _CUN,
    _IRIa,
    _DT,
    _WSGI,
    _S,
    _WCP,
    _iGI,
    _WAP,
    _Te,
    _SPe,
    _SP,
    _CBAP,
    _EEM,
    _MEC,
    _WDNo,
    _WDD,
    _UIT,
    _WT,
    _IDCC,
    _ADC,
    _SPt,
    _EM,
  ],
  [
    0,
    0,
    0,
    0,
    64 | 0,
    64 | 0,
    0,
    0,
    0,
    0,
    0,
    () => DefaultWorkspaceCreationProperties,
    64 | 0,
    () => WorkspaceAccessProperties,
    0,
    () => SelfservicePermissions,
    () => SamlProperties,
    () => CertificateBasedAuthProperties,
    0,
    () => MicrosoftEntraConfig,
    0,
    0,
    0,
    0,
    () => IDCConfig,
    () => ActiveDirectoryConfig,
    () => StreamingProperties,
    0,
  ]
);
export var WorkspaceImage = struct(
  n0,
  _WIor,
  0,
  [_II, _N, _D, _OS, _S, _RT, _EC, _EM, _C, _OAI, _U, _ED],
  [0, 0, 0, () => OperatingSystem, 0, 0, 0, 0, 4, 0, () => UpdateResult, () => ErrorDetailsList]
);
export var WorkspacesDefaultRoleNotFoundException = error(
  n0,
  _WDRNFE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __WorkspacesDefaultRoleNotFoundException
);
export var ConnectionAliasPermissions = list(n0, _CAPo, 0, () => ConnectionAliasPermission);
export var DescribeWorkspaceDirectoriesFilterList = list(n0, _DWDFL, 0, () => DescribeWorkspaceDirectoriesFilter);
export var DescribeWorkspaceDirectoriesFilterValues = 64 | 0;

export var DirectoryIdList = 64 | 0;

export var DirectoryList = list(n0, _DL, 0, () => WorkspaceDirectory);
export var DnsIpAddresses = 64 | 0;

export var ErrorDetailsList = list(n0, _EDL, 0, () => ErrorDetails);
export var SubnetIds = 64 | 0;

export var WorkspaceDirectoryNameList = 64 | 0;

export var WorkspaceImageIdList = 64 | 0;

export var WorkspaceImageList = list(n0, _WIL, 0, () => WorkspaceImage);
export var DeployWorkspaceApplications = op(
  n0,
  _DWA,
  0,
  () => DeployWorkspaceApplicationsRequest,
  () => DeployWorkspaceApplicationsResult
);
export var DescribeConnectionAliasPermissions = op(
  n0,
  _DCAP,
  0,
  () => DescribeConnectionAliasPermissionsRequest,
  () => DescribeConnectionAliasPermissionsResult
);
export var DescribeWorkspaceDirectories = op(
  n0,
  _DWDe,
  0,
  () => DescribeWorkspaceDirectoriesRequest,
  () => DescribeWorkspaceDirectoriesResult
);
export var DescribeWorkspaceImages = op(
  n0,
  _DWIe,
  0,
  () => DescribeWorkspaceImagesRequest,
  () => DescribeWorkspaceImagesResult
);
export var ModifyWorkspaceCreationProperties = op(
  n0,
  _MWCP,
  0,
  () => ModifyWorkspaceCreationPropertiesRequest,
  () => ModifyWorkspaceCreationPropertiesResult
);
export var RegisterWorkspaceDirectory = op(
  n0,
  _RWD,
  0,
  () => RegisterWorkspaceDirectoryRequest,
  () => RegisterWorkspaceDirectoryResult
);
export var UpdateConnectionAliasPermission = op(
  n0,
  _UCAP,
  0,
  () => UpdateConnectionAliasPermissionRequest,
  () => UpdateConnectionAliasPermissionResult
);
export var UpdateWorkspaceImagePermission = op(
  n0,
  _UWIP,
  0,
  () => UpdateWorkspaceImagePermissionRequest,
  () => UpdateWorkspaceImagePermissionResult
);
