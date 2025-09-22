// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _a,
  _aAT,
  _AL,
  _ALR,
  _ALRs,
  _aP,
  _AS,
  _au,
  _co,
  _cr,
  _cT,
  _CW,
  _CWR,
  _CWRr,
  _D,
  _d,
  _DL,
  _DLR,
  _DLRi,
  _dS,
  _DW,
  _DWC,
  _DWCR,
  _DWCRe,
  _DWe,
  _DWR,
  _DWRe,
  _DWRes,
  _DWResc,
  _en,
  _fTC,
  _fTE,
  _GT,
  _gT,
  _gV,
  _gVr,
  _h,
  _hH,
  _hQ,
  _i,
  _IRA,
  _lE,
  _lT,
  _LV,
  _LVR,
  _LVRi,
  _LW,
  _LWR,
  _LWRi,
  _mo,
  _mR,
  _mT,
  _n,
  _NAC,
  _nAC,
  _nD,
  _nT,
  _OCJ,
  _ORN,
  _oRN,
  _oU,
  _OUL,
  _p,
  _pLI,
  _pT,
  _rNAC,
  _rVC,
  _sCS,
  _sGI,
  _sI,
  _sSN,
  _st,
  _t,
  _UW,
  _UWC,
  _UWCR,
  _UWCRp,
  _UWR,
  _UWRp,
  _VC,
  _vC,
  _vI,
  _w,
  _WD,
  _wD,
  _wDS,
  _wI,
  _wi,
  _WL,
  _WN,
  _wN,
  _wND,
  _wo,
  _wOU,
  _wRA,
  _WS,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var Description = sim(n0, _D, 0, 8);
export var IamRoleArn = sim(n0, _IRA, 0, 8);
export var OrganizationRoleName = sim(n0, _ORN, 0, 8);
export var OverridableConfigurationJson = sim(n0, _OCJ, 0, {
  [_mT]: _a,
});
export var WorkspaceName = sim(n0, _WN, 0, 8);
export var AssociateLicenseRequest = struct(
  n0,
  _ALR,
  0,
  [_wI, _lT, _gT],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hH]: _GT,
      },
    ],
  ]
);
export var AssociateLicenseResponse = struct(n0, _ALRs, 0, [_w], [[() => WorkspaceDescription, 0]]);
export var AuthenticationSummary = struct(n0, _AS, 0, [_p, _sCS], [64 | 0, 0]);
export var CreateWorkspaceRequest = struct(
  n0,
  _CWR,
  0,
  [_aAT, _cT, _oRN, _pT, _sSN, _wDS, _wD, _wN, _wND, _wOU, _wRA, _aP, _t, _vC, _co, _nAC, _gV],
  [
    0,
    [0, 4],
    [() => OrganizationRoleName, 0],
    0,
    0,
    64 | 0,
    [() => Description, 0],
    [() => WorkspaceName, 0],
    64 | 0,
    [() => OrganizationalUnitList, 0],
    [() => IamRoleArn, 0],
    64 | 0,
    128 | 0,
    () => VpcConfiguration,
    [() => OverridableConfigurationJson, 0],
    () => NetworkAccessConfiguration,
    0,
  ]
);
export var CreateWorkspaceResponse = struct(n0, _CWRr, 0, [_w], [[() => WorkspaceDescription, 0]]);
export var DeleteWorkspaceRequest = struct(n0, _DWR, 0, [_wI], [[0, 1]]);
export var DeleteWorkspaceResponse = struct(n0, _DWRe, 0, [_w], [[() => WorkspaceDescription, 0]]);
export var DescribeWorkspaceConfigurationRequest = struct(n0, _DWCR, 0, [_wI], [[0, 1]]);
export var DescribeWorkspaceConfigurationResponse = struct(
  n0,
  _DWCRe,
  0,
  [_co, _gV],
  [[() => OverridableConfigurationJson, 0], 0]
);
export var DescribeWorkspaceRequest = struct(n0, _DWRes, 0, [_wI], [[0, 1]]);
export var DescribeWorkspaceResponse = struct(n0, _DWResc, 0, [_w], [[() => WorkspaceDescription, 0]]);
export var DisassociateLicenseRequest = struct(
  n0,
  _DLR,
  0,
  [_wI, _lT],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DisassociateLicenseResponse = struct(n0, _DLRi, 0, [_w], [[() => WorkspaceDescription, 0]]);
export var ListVersionsRequest = struct(
  n0,
  _LVR,
  0,
  [_mR, _nT, _wI],
  [
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      0,
      {
        [_hQ]: _wi,
      },
    ],
  ]
);
export var ListVersionsResponse = struct(n0, _LVRi, 0, [_nT, _gVr], [0, 64 | 0]);
export var ListWorkspacesRequest = struct(
  n0,
  _LWR,
  0,
  [_mR, _nT],
  [
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
  ]
);
export var ListWorkspacesResponse = struct(n0, _LWRi, 0, [_wo, _nT], [[() => WorkspaceList, 0], 0]);
export var NetworkAccessConfiguration = struct(n0, _NAC, 0, [_pLI, _vI], [64 | 0, 64 | 0]);
export var UpdateWorkspaceConfigurationRequest = struct(
  n0,
  _UWCR,
  0,
  [_co, _wI, _gV],
  [[() => OverridableConfigurationJson, 0], [0, 1], 0]
);
export var UpdateWorkspaceConfigurationResponse = struct(n0, _UWCRp, 0, [], []);
export var UpdateWorkspaceRequest = struct(
  n0,
  _UWR,
  0,
  [_aAT, _oRN, _pT, _sSN, _wDS, _wD, _wI, _wN, _wND, _wOU, _wRA, _vC, _rVC, _nAC, _rNAC],
  [
    0,
    [() => OrganizationRoleName, 0],
    0,
    0,
    64 | 0,
    [() => Description, 0],
    [0, 1],
    [() => WorkspaceName, 0],
    64 | 0,
    [() => OrganizationalUnitList, 0],
    [() => IamRoleArn, 0],
    () => VpcConfiguration,
    2,
    () => NetworkAccessConfiguration,
    2,
  ]
);
export var UpdateWorkspaceResponse = struct(n0, _UWRp, 0, [_w], [[() => WorkspaceDescription, 0]]);
export var VpcConfiguration = struct(n0, _VC, 0, [_sGI, _sI], [64 | 0, 64 | 0]);
export var WorkspaceDescription = struct(
  n0,
  _WD,
  0,
  [
    _aAT,
    _cr,
    _dS,
    _d,
    _en,
    _gV,
    _i,
    _mo,
    _n,
    _oRN,
    _nD,
    _oU,
    _pT,
    _sSN,
    _st,
    _wRA,
    _lT,
    _fTC,
    _lE,
    _fTE,
    _au,
    _t,
    _vC,
    _nAC,
    _gT,
  ],
  [
    0,
    4,
    64 | 0,
    [() => Description, 0],
    0,
    0,
    0,
    4,
    [() => WorkspaceName, 0],
    [() => OrganizationRoleName, 0],
    64 | 0,
    [() => OrganizationalUnitList, 0],
    0,
    0,
    0,
    [() => IamRoleArn, 0],
    0,
    2,
    4,
    4,
    () => AuthenticationSummary,
    128 | 0,
    () => VpcConfiguration,
    () => NetworkAccessConfiguration,
    0,
  ]
);
export var WorkspaceSummary = struct(
  n0,
  _WS,
  0,
  [_cr, _d, _en, _gV, _i, _mo, _n, _nD, _st, _au, _t, _lT, _gT],
  [
    4,
    [() => Description, 0],
    0,
    0,
    0,
    4,
    [() => WorkspaceName, 0],
    64 | 0,
    0,
    () => AuthenticationSummary,
    128 | 0,
    0,
    0,
  ]
);
export var DataSourceTypesList = 64 | 0;

export var GrafanaVersionList = 64 | 0;

export var NotificationDestinationsList = 64 | 0;

export var OrganizationalUnitList = list(n0, _OUL, 8, 0);
export var PrefixListIds = 64 | 0;

export var SecurityGroupIds = 64 | 0;

export var SubnetIds = 64 | 0;

export var VpceIds = 64 | 0;

export var WorkspaceList = list(n0, _WL, 0, [() => WorkspaceSummary, 0]);
export var AssociateLicense = op(
  n0,
  _AL,
  {
    [_h]: ["POST", "/workspaces/{workspaceId}/licenses/{licenseType}", 202],
  },
  () => AssociateLicenseRequest,
  () => AssociateLicenseResponse
);
export var CreateWorkspace = op(
  n0,
  _CW,
  {
    [_h]: ["POST", "/workspaces", 202],
  },
  () => CreateWorkspaceRequest,
  () => CreateWorkspaceResponse
);
export var DeleteWorkspace = op(
  n0,
  _DW,
  {
    [_h]: ["DELETE", "/workspaces/{workspaceId}", 202],
  },
  () => DeleteWorkspaceRequest,
  () => DeleteWorkspaceResponse
);
export var DescribeWorkspace = op(
  n0,
  _DWe,
  {
    [_h]: ["GET", "/workspaces/{workspaceId}", 200],
  },
  () => DescribeWorkspaceRequest,
  () => DescribeWorkspaceResponse
);
export var DescribeWorkspaceConfiguration = op(
  n0,
  _DWC,
  {
    [_h]: ["GET", "/workspaces/{workspaceId}/configuration", 200],
  },
  () => DescribeWorkspaceConfigurationRequest,
  () => DescribeWorkspaceConfigurationResponse
);
export var DisassociateLicense = op(
  n0,
  _DL,
  {
    [_h]: ["DELETE", "/workspaces/{workspaceId}/licenses/{licenseType}", 202],
  },
  () => DisassociateLicenseRequest,
  () => DisassociateLicenseResponse
);
export var ListVersions = op(
  n0,
  _LV,
  {
    [_h]: ["GET", "/versions", 200],
  },
  () => ListVersionsRequest,
  () => ListVersionsResponse
);
export var ListWorkspaces = op(
  n0,
  _LW,
  {
    [_h]: ["GET", "/workspaces", 200],
  },
  () => ListWorkspacesRequest,
  () => ListWorkspacesResponse
);
export var UpdateWorkspace = op(
  n0,
  _UW,
  {
    [_h]: ["PUT", "/workspaces/{workspaceId}", 202],
  },
  () => UpdateWorkspaceRequest,
  () => UpdateWorkspaceResponse
);
export var UpdateWorkspaceConfiguration = op(
  n0,
  _UWC,
  {
    [_h]: ["PUT", "/workspaces/{workspaceId}/configuration", 202],
  },
  () => UpdateWorkspaceConfigurationRequest,
  () => UpdateWorkspaceConfigurationResponse
);
