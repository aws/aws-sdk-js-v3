// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AAI,
  _AAn,
  _AIn,
  _DAas,
  _DAP,
  _DAPR,
  _DAPRe,
  _DDPe,
  _DDPR,
  _DDPRe,
  _DI,
  _DTPe,
  _DTPes,
  _DTPR,
  _DTPRe,
  _DTPRes,
  _DTPResc,
  _GLP,
  _GP,
  _h,
  _LSC,
  _Per,
  _RI,
  _RLP,
  _RPev,
  _St,
  _TA,
  _TAem,
  _TAo,
  _TI,
  _TIe,
  _TIo,
  _UAP,
  _UAPR,
  _UAPRp,
  _UDP,
  _UDPR,
  _UDPRp,
  _ULPL,
  _URPL,
  _UTP,
  _UTPp,
  _UTPpd,
  _UTPR,
  _UTPRp,
  _UTPRpd,
  _UTPRpda,
  _UTPRpdat,
  _UTPRpdate,
  n0,
  ResourcePermission,
  ResourcePermissionList,
} from "./schemas_0";
import { LinkSharingConfiguration } from "./schemas_101_Dashboard";

/* eslint no-var: 0 */

export var DescribeAnalysisPermissionsRequest = struct(
  n0,
  _DAPR,
  0,
  [_AAI, _AIn],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DescribeAnalysisPermissionsResponse = struct(
  n0,
  _DAPRe,
  0,
  [_AIn, _AAn, _Per, _St, _RI],
  [0, 0, () => UpdateResourcePermissionList, [1, 32], 0]
);
export var DescribeDashboardPermissionsRequest = struct(
  n0,
  _DDPR,
  0,
  [_AAI, _DI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DescribeDashboardPermissionsResponse = struct(
  n0,
  _DDPRe,
  0,
  [_DI, _DAas, _Per, _St, _RI, _LSC],
  [0, 0, () => UpdateResourcePermissionList, [1, 32], 0, () => LinkSharingConfiguration]
);
export var DescribeTemplatePermissionsRequest = struct(
  n0,
  _DTPR,
  0,
  [_AAI, _TIe],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DescribeTemplatePermissionsResponse = struct(
  n0,
  _DTPRe,
  0,
  [_TIe, _TAem, _Per, _RI, _St],
  [0, 0, () => UpdateResourcePermissionList, 0, [1, 32]]
);
export var DescribeThemePermissionsRequest = struct(
  n0,
  _DTPRes,
  0,
  [_AAI, _TI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DescribeThemePermissionsResponse = struct(
  n0,
  _DTPResc,
  0,
  [_TI, _TA, _Per, _RI, _St],
  [0, 0, () => UpdateResourcePermissionList, 0, [1, 32]]
);
export var UpdateAnalysisPermissionsRequest = struct(
  n0,
  _UAPR,
  0,
  [_AAI, _AIn, _GP, _RPev],
  [[0, 1], [0, 1], () => UpdateResourcePermissionList, () => UpdateResourcePermissionList]
);
export var UpdateAnalysisPermissionsResponse = struct(
  n0,
  _UAPRp,
  0,
  [_AAn, _AIn, _Per, _RI, _St],
  [0, 0, () => UpdateResourcePermissionList, 0, [1, 32]]
);
export var UpdateDashboardPermissionsRequest = struct(
  n0,
  _UDPR,
  0,
  [_AAI, _DI, _GP, _RPev, _GLP, _RLP],
  [
    [0, 1],
    [0, 1],
    () => UpdateResourcePermissionList,
    () => UpdateResourcePermissionList,
    () => UpdateLinkPermissionList,
    () => UpdateLinkPermissionList,
  ]
);
export var UpdateDashboardPermissionsResponse = struct(
  n0,
  _UDPRp,
  0,
  [_DAas, _DI, _Per, _RI, _St, _LSC],
  [0, 0, () => UpdateResourcePermissionList, 0, [1, 32], () => LinkSharingConfiguration]
);
export var UpdateTemplatePermissionsRequest = struct(
  n0,
  _UTPR,
  0,
  [_AAI, _TIe, _GP, _RPev],
  [[0, 1], [0, 1], () => UpdateResourcePermissionList, () => UpdateResourcePermissionList]
);
export var UpdateTemplatePermissionsResponse = struct(
  n0,
  _UTPRp,
  0,
  [_TIe, _TAem, _Per, _RI, _St],
  [0, 0, () => UpdateResourcePermissionList, 0, [1, 32]]
);
export var UpdateThemePermissionsRequest = struct(
  n0,
  _UTPRpd,
  0,
  [_AAI, _TI, _GP, _RPev],
  [[0, 1], [0, 1], () => UpdateResourcePermissionList, () => UpdateResourcePermissionList]
);
export var UpdateThemePermissionsResponse = struct(
  n0,
  _UTPRpda,
  0,
  [_TI, _TA, _Per, _RI, _St],
  [0, 0, () => UpdateResourcePermissionList, 0, [1, 32]]
);
export var UpdateTopicPermissionsRequest = struct(
  n0,
  _UTPRpdat,
  0,
  [_AAI, _TIo, _GP, _RPev],
  [[0, 1], [0, 1], () => UpdateResourcePermissionList, () => UpdateResourcePermissionList]
);
export var UpdateTopicPermissionsResponse = struct(
  n0,
  _UTPRpdate,
  0,
  [_TIo, _TAo, _Per, _St, _RI],
  [0, 0, () => ResourcePermissionList, [1, 32], 0]
);
export var UpdateLinkPermissionList = list(n0, _ULPL, 0, () => ResourcePermission);
export var UpdateResourcePermissionList = list(n0, _URPL, 0, () => ResourcePermission);
export var DescribeAnalysisPermissions = op(
  n0,
  _DAP,
  {
    [_h]: ["GET", "/accounts/{AwsAccountId}/analyses/{AnalysisId}/permissions", 200],
  },
  () => DescribeAnalysisPermissionsRequest,
  () => DescribeAnalysisPermissionsResponse
);
export var DescribeDashboardPermissions = op(
  n0,
  _DDPe,
  {
    [_h]: ["GET", "/accounts/{AwsAccountId}/dashboards/{DashboardId}/permissions", 200],
  },
  () => DescribeDashboardPermissionsRequest,
  () => DescribeDashboardPermissionsResponse
);
export var DescribeTemplatePermissions = op(
  n0,
  _DTPe,
  {
    [_h]: ["GET", "/accounts/{AwsAccountId}/templates/{TemplateId}/permissions", 200],
  },
  () => DescribeTemplatePermissionsRequest,
  () => DescribeTemplatePermissionsResponse
);
export var DescribeThemePermissions = op(
  n0,
  _DTPes,
  {
    [_h]: ["GET", "/accounts/{AwsAccountId}/themes/{ThemeId}/permissions", 200],
  },
  () => DescribeThemePermissionsRequest,
  () => DescribeThemePermissionsResponse
);
export var UpdateAnalysisPermissions = op(
  n0,
  _UAP,
  {
    [_h]: ["PUT", "/accounts/{AwsAccountId}/analyses/{AnalysisId}/permissions", 200],
  },
  () => UpdateAnalysisPermissionsRequest,
  () => UpdateAnalysisPermissionsResponse
);
export var UpdateDashboardPermissions = op(
  n0,
  _UDP,
  {
    [_h]: ["PUT", "/accounts/{AwsAccountId}/dashboards/{DashboardId}/permissions", 200],
  },
  () => UpdateDashboardPermissionsRequest,
  () => UpdateDashboardPermissionsResponse
);
export var UpdateTemplatePermissions = op(
  n0,
  _UTP,
  {
    [_h]: ["PUT", "/accounts/{AwsAccountId}/templates/{TemplateId}/permissions", 200],
  },
  () => UpdateTemplatePermissionsRequest,
  () => UpdateTemplatePermissionsResponse
);
export var UpdateThemePermissions = op(
  n0,
  _UTPp,
  {
    [_h]: ["PUT", "/accounts/{AwsAccountId}/themes/{ThemeId}/permissions", 200],
  },
  () => UpdateThemePermissionsRequest,
  () => UpdateThemePermissionsResponse
);
export var UpdateTopicPermissions = op(
  n0,
  _UTPpd,
  {
    [_h]: ["PUT", "/accounts/{AwsAccountId}/topics/{TopicId}/permissions", 200],
  },
  () => UpdateTopicPermissionsRequest,
  () => UpdateTopicPermissionsResponse
);
