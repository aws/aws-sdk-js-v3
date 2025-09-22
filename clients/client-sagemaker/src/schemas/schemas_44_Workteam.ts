// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _AEu,
  _AREP,
  _CCog,
  _CDr,
  _Ci,
  _CIl,
  _CMD,
  _CS,
  _CWR,
  _CWr,
  _CWre,
  _CWRr,
  _CWRre,
  _CWRrea,
  _D,
  _DWes,
  _DWesc,
  _DWRes,
  _DWResc,
  _DWRescr,
  _DWRescri,
  _FR,
  _Gr,
  _IAT,
  _IPC,
  _Is,
  _JU,
  _LE,
  _LUD,
  _LW,
  _LWi,
  _LWR,
  _LWRi,
  _LWRis,
  _LWRist,
  _MDe,
  _MDem,
  _MR,
  _NCa,
  _NCo,
  _NT,
  _NTAo,
  _OCFR,
  _OCi,
  _OMD,
  _PLI,
  _SBo,
  _Sco,
  _SDu,
  _SGI,
  _SIC,
  _SIou,
  _SO,
  _SPr,
  _St,
  _Sub,
  _T,
  _TE,
  _UG,
  _UIE,
  _UP,
  _UW,
  _UWp,
  _UWR,
  _UWRp,
  _UWRpd,
  _UWRpda,
  _VEI,
  _VIp,
  _VSI,
  _W,
  _WA,
  _WAC,
  _WAo,
  _WN,
  _WNo,
  _Wo,
  _Wor,
  _Work,
  _WVC,
  _WVCR,
  _WVCRo,
  n0,
  TagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ClientSecret = sim(n0, _CS, 0, 8);
export var CognitoConfig = struct(n0, _CCog, 0, [_UP, _CIl], [0, 0]);
export var CognitoMemberDefinition = struct(n0, _CMD, 0, [_UP, _UG, _CIl], [0, 0, 0]);
export var CreateWorkforceRequest = struct(
  n0,
  _CWR,
  0,
  [_CCog, _OCi, _SIC, _WN, _T, _WVC, _IAT],
  [
    () => CognitoConfig,
    [() => OidcConfig, 0],
    () => SourceIpConfig,
    0,
    () => TagList,
    () => WorkforceVpcConfigRequest,
    0,
  ]
);
export var CreateWorkforceResponse = struct(n0, _CWRr, 0, [_WA], [0]);
export var CreateWorkteamRequest = struct(
  n0,
  _CWRre,
  0,
  [_WNo, _WN, _MDe, _D, _NCo, _WAC, _T],
  [0, 0, () => MemberDefinitions, 0, () => NotificationConfiguration, () => WorkerAccessConfiguration, () => TagList]
);
export var CreateWorkteamResponse = struct(n0, _CWRrea, 0, [_WAo], [0]);
export var DescribeWorkforceRequest = struct(n0, _DWRes, 0, [_WN], [0]);
export var DescribeWorkforceResponse = struct(n0, _DWResc, 0, [_W], [() => Workforce]);
export var DescribeWorkteamRequest = struct(n0, _DWRescr, 0, [_WNo], [0]);
export var DescribeWorkteamResponse = struct(n0, _DWRescri, 0, [_Wo], [() => Workteam]);
export var IamPolicyConstraints = struct(n0, _IPC, 0, [_SIou, _VSI], [0, 0]);
export var ListWorkforcesRequest = struct(n0, _LWR, 0, [_SBo, _SO, _NCa, _NT, _MR], [0, 0, 0, 0, 1]);
export var ListWorkforcesResponse = struct(n0, _LWRi, 0, [_Wor, _NT], [() => Workforces, 0]);
export var ListWorkteamsRequest = struct(n0, _LWRis, 0, [_SBo, _SO, _NCa, _NT, _MR], [0, 0, 0, 0, 1]);
export var ListWorkteamsResponse = struct(n0, _LWRist, 0, [_Work, _NT], [() => Workteams, 0]);
export var MemberDefinition = struct(
  n0,
  _MDem,
  0,
  [_CMD, _OMD],
  [() => CognitoMemberDefinition, () => OidcMemberDefinition]
);
export var NotificationConfiguration = struct(n0, _NCo, 0, [_NTAo], [0]);
export var OidcConfig = struct(
  n0,
  _OCi,
  0,
  [_CIl, _CS, _Is, _AEu, _TE, _UIE, _LE, _JU, _Sco, _AREP],
  [0, [() => ClientSecret, 0], 0, 0, 0, 0, 0, 0, 0, 128 | 0]
);
export var OidcConfigForResponse = struct(
  n0,
  _OCFR,
  0,
  [_CIl, _Is, _AEu, _TE, _UIE, _LE, _JU, _Sco, _AREP],
  [0, 0, 0, 0, 0, 0, 0, 0, 128 | 0]
);
export var OidcMemberDefinition = struct(n0, _OMD, 0, [_Gr], [64 | 0]);
export var S3Presign = struct(n0, _SPr, 0, [_IPC], [() => IamPolicyConstraints]);
export var SourceIpConfig = struct(n0, _SIC, 0, [_Ci], [64 | 0]);
export var UpdateWorkforceRequest = struct(
  n0,
  _UWR,
  0,
  [_WN, _SIC, _OCi, _WVC, _IAT],
  [0, () => SourceIpConfig, [() => OidcConfig, 0], () => WorkforceVpcConfigRequest, 0]
);
export var UpdateWorkforceResponse = struct(n0, _UWRp, 0, [_W], [() => Workforce]);
export var UpdateWorkteamRequest = struct(
  n0,
  _UWRpd,
  0,
  [_WNo, _MDe, _D, _NCo, _WAC],
  [0, () => MemberDefinitions, 0, () => NotificationConfiguration, () => WorkerAccessConfiguration]
);
export var UpdateWorkteamResponse = struct(n0, _UWRpda, 0, [_Wo], [() => Workteam]);
export var WorkerAccessConfiguration = struct(n0, _WAC, 0, [_SPr], [() => S3Presign]);
export var Workforce = struct(
  n0,
  _W,
  0,
  [_WN, _WA, _LUD, _SIC, _SDu, _CCog, _OCi, _CDr, _WVC, _St, _FR, _IAT],
  [
    0,
    0,
    4,
    () => SourceIpConfig,
    0,
    () => CognitoConfig,
    () => OidcConfigForResponse,
    4,
    () => WorkforceVpcConfigResponse,
    0,
    0,
    0,
  ]
);
export var WorkforceVpcConfigRequest = struct(n0, _WVCR, 0, [_VIp, _SGI, _Sub], [0, 64 | 0, 64 | 0]);
export var WorkforceVpcConfigResponse = struct(n0, _WVCRo, 0, [_VIp, _SGI, _Sub, _VEI], [0, 64 | 0, 64 | 0, 0]);
export var Workteam = struct(
  n0,
  _Wo,
  0,
  [_WNo, _MDe, _WAo, _WA, _PLI, _D, _SDu, _CDr, _LUD, _NCo, _WAC],
  [
    0,
    () => MemberDefinitions,
    0,
    0,
    64 | 0,
    0,
    0,
    4,
    4,
    () => NotificationConfiguration,
    () => WorkerAccessConfiguration,
  ]
);
export var Cidrs = 64 | 0;

export var Groups = 64 | 0;

export var MemberDefinitions = list(n0, _MDe, 0, () => MemberDefinition);
export var ProductListings = 64 | 0;

export var Workforces = list(n0, _Wor, 0, () => Workforce);
export var WorkforceSecurityGroupIds = 64 | 0;

export var WorkforceSubnets = 64 | 0;

export var Workteams = list(n0, _Work, 0, () => Workteam);
export var AuthenticationRequestExtraParams = 128 | 0;

export var CreateWorkforce = op(
  n0,
  _CWr,
  0,
  () => CreateWorkforceRequest,
  () => CreateWorkforceResponse
);
export var CreateWorkteam = op(
  n0,
  _CWre,
  0,
  () => CreateWorkteamRequest,
  () => CreateWorkteamResponse
);
export var DescribeWorkforce = op(
  n0,
  _DWes,
  0,
  () => DescribeWorkforceRequest,
  () => DescribeWorkforceResponse
);
export var DescribeWorkteam = op(
  n0,
  _DWesc,
  0,
  () => DescribeWorkteamRequest,
  () => DescribeWorkteamResponse
);
export var ListWorkforces = op(
  n0,
  _LW,
  0,
  () => ListWorkforcesRequest,
  () => ListWorkforcesResponse
);
export var ListWorkteams = op(
  n0,
  _LWi,
  0,
  () => ListWorkteamsRequest,
  () => ListWorkteamsResponse
);
export var UpdateWorkforce = op(
  n0,
  _UW,
  0,
  () => UpdateWorkforceRequest,
  () => UpdateWorkforceResponse
);
export var UpdateWorkteam = op(
  n0,
  _UWp,
  0,
  () => UpdateWorkteamRequest,
  () => UpdateWorkteamResponse
);
