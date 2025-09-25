// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AAI,
  _Ar,
  _ASMEIA,
  _AT,
  _B,
  _Ce,
  _CS,
  _CSD,
  _CSDu,
  _CSR,
  _CSRr,
  _CW,
  _CWR,
  _CWRr,
  _D,
  _DFL,
  _DIi,
  _DLO,
  _Do,
  _DS,
  _DSD,
  _DSDe,
  _DSes,
  _DSRe,
  _DSRes,
  _DW,
  _DWe,
  _DWes,
  _DWR,
  _DWRe,
  _DWRes,
  _ED,
  _EFL,
  _EIx,
  _ER,
  _ET,
  _FSI,
  _Fu,
  _HK,
  _HKF,
  _IAT,
  _IFLn,
  _IPD,
  _IPT,
  _IR,
  _K,
  _LR,
  _LW,
  _LWi,
  _LWis,
  _LWR,
  _LWRi,
  _MRa,
  _N,
  _NT,
  _OE,
  _OES,
  _OPU,
  _OPUWD,
  _OU,
  _OUWD,
  _Pa,
  _PALB,
  _PALBr,
  _PD,
  _PIa,
  _Pr,
  _S,
  _SAM,
  _Ser,
  _SFL,
  _SFLi,
  _SGI,
  _SI,
  _SIFL,
  _SIu,
  _SLD,
  _SPN,
  _SSO,
  _SSOe,
  _St,
  _STa,
  _Sta,
  _STag,
  _SWSS,
  _SWSSR,
  _SWSSRe,
  _T,
  _Ta,
  _To,
  _TS,
  _TSD,
  _TSRM,
  _Ty,
  _U,
  _UC,
  _US,
  _USR,
  _USRp,
  _V,
  _VEI,
  _VI,
  _W,
  _WD,
  _WDo,
  _WI,
  _Wo,
  _WS,
  _WSo,
  n0,
  Tags,
  Unit,
} from "./schemas_0";
import { HostKey } from "./schemas_26_Server";

/* eslint no-var: 0 */

export var CopyStepDetails = struct(n0, _CSD, 0, [_N, _DFL, _OE, _SFL], [0, () => InputFileLocation, 0, 0]);
export var CreateServerRequest = struct(
  n0,
  _CSR,
  0,
  [_Ce, _Do, _ED, _ET, _HK, _IPD, _IPT, _LR, _PALB, _PALBr, _Pr, _PD, _SPN, _T, _WD, _SLD, _SSO, _IAT],
  [
    0,
    0,
    () => EndpointDetails,
    0,
    [() => HostKey, 0],
    () => IdentityProviderDetails,
    0,
    0,
    0,
    0,
    64 | 0,
    () => ProtocolDetails,
    0,
    () => Tags,
    () => WorkflowDetails,
    64 | 0,
    () => S3StorageOptions,
    0,
  ]
);
export var CreateServerResponse = struct(n0, _CSRr, 0, [_SI], [0]);
export var CreateWorkflowRequest = struct(
  n0,
  _CWR,
  0,
  [_D, _St, _OES, _T],
  [0, () => WorkflowSteps, () => WorkflowSteps, () => Tags]
);
export var CreateWorkflowResponse = struct(n0, _CWRr, 0, [_WI], [0]);
export var CustomStepDetails = struct(n0, _CSDu, 0, [_N, _Ta, _TS, _SFL], [0, 0, 1, 0]);
export var DecryptStepDetails = struct(n0, _DSD, 0, [_N, _Ty, _SFL, _OE, _DFL], [0, 0, 0, 0, () => InputFileLocation]);
export var DeleteStepDetails = struct(n0, _DSDe, 0, [_N, _SFL], [0, 0]);
export var DeleteWorkflowRequest = struct(n0, _DWR, 0, [_WI], [0]);
export var DescribedServer = struct(
  n0,
  _DS,
  0,
  [
    _Ar,
    _Ce,
    _PD,
    _Do,
    _ED,
    _ET,
    _HKF,
    _IPD,
    _IPT,
    _LR,
    _PALB,
    _PALBr,
    _Pr,
    _SPN,
    _SI,
    _Sta,
    _T,
    _UC,
    _WD,
    _SLD,
    _SSO,
    _ASMEIA,
    _IAT,
  ],
  [
    0,
    0,
    () => ProtocolDetails,
    0,
    () => EndpointDetails,
    0,
    0,
    () => IdentityProviderDetails,
    0,
    0,
    0,
    0,
    64 | 0,
    0,
    0,
    0,
    () => Tags,
    1,
    () => WorkflowDetails,
    64 | 0,
    () => S3StorageOptions,
    64 | 0,
    0,
  ]
);
export var DescribedWorkflow = struct(
  n0,
  _DW,
  0,
  [_Ar, _D, _St, _OES, _WI, _T],
  [0, 0, () => WorkflowSteps, () => WorkflowSteps, 0, () => Tags]
);
export var DescribeServerRequest = struct(n0, _DSRe, 0, [_SI], [0]);
export var DescribeServerResponse = struct(n0, _DSRes, 0, [_Ser], [() => DescribedServer]);
export var DescribeWorkflowRequest = struct(n0, _DWRe, 0, [_WI], [0]);
export var DescribeWorkflowResponse = struct(n0, _DWRes, 0, [_W], [() => DescribedWorkflow]);
export var EfsFileLocation = struct(n0, _EFL, 0, [_FSI, _Pa], [0, 0]);
export var EndpointDetails = struct(n0, _ED, 0, [_AAI, _SIu, _VEI, _VI, _SGI], [64 | 0, 64 | 0, 0, 0, 64 | 0]);
export var IdentityProviderDetails = struct(n0, _IPD, 0, [_U, _IR, _DIi, _Fu, _SAM], [0, 0, 0, 0, 0]);
export var InputFileLocation = struct(n0, _IFLn, 0, [_SFLi, _EFL], [() => S3InputFileLocation, () => EfsFileLocation]);
export var ListedWorkflow = struct(n0, _LW, 0, [_WI, _D, _Ar], [0, 0, 0]);
export var ListWorkflowsRequest = struct(n0, _LWR, 0, [_MRa, _NT], [1, 0]);
export var ListWorkflowsResponse = struct(n0, _LWRi, 0, [_NT, _Wo], [0, () => ListedWorkflows]);
export var ProtocolDetails = struct(n0, _PD, 0, [_PIa, _TSRM, _SSOe, _AT], [0, 0, 0, 64 | 0]);
export var S3InputFileLocation = struct(n0, _SIFL, 0, [_B, _K], [0, 0]);
export var S3StorageOptions = struct(n0, _SSO, 0, [_DLO], [0]);
export var S3Tag = struct(n0, _STa, 0, [_K, _V], [0, 0]);
export var SendWorkflowStepStateRequest = struct(n0, _SWSSR, 0, [_WI, _EIx, _To, _S], [0, 0, 0, 0]);
export var SendWorkflowStepStateResponse = struct(n0, _SWSSRe, 0, [], []);
export var TagStepDetails = struct(n0, _TSD, 0, [_N, _T, _SFL], [0, () => S3Tags, 0]);
export var UpdateServerRequest = struct(
  n0,
  _USR,
  0,
  [_Ce, _PD, _ED, _ET, _HK, _IPD, _LR, _PALB, _PALBr, _Pr, _SPN, _SI, _WD, _SLD, _SSO, _IAT],
  [
    0,
    () => ProtocolDetails,
    () => EndpointDetails,
    0,
    [() => HostKey, 0],
    () => IdentityProviderDetails,
    0,
    0,
    0,
    64 | 0,
    0,
    0,
    () => WorkflowDetails,
    64 | 0,
    () => S3StorageOptions,
    0,
  ]
);
export var UpdateServerResponse = struct(n0, _USRp, 0, [_SI], [0]);
export var WorkflowDetail = struct(n0, _WDo, 0, [_WI, _ER], [0, 0]);
export var WorkflowDetails = struct(
  n0,
  _WD,
  0,
  [_OU, _OPU],
  [() => OnUploadWorkflowDetails, () => OnPartialUploadWorkflowDetails]
);
export var WorkflowStep = struct(
  n0,
  _WS,
  0,
  [_Ty, _CSD, _CSDu, _DSDe, _TSD, _DSD],
  [
    0,
    () => CopyStepDetails,
    () => CustomStepDetails,
    () => DeleteStepDetails,
    () => TagStepDetails,
    () => DecryptStepDetails,
  ]
);
export var AddressAllocationIds = 64 | 0;

export var As2Transports = 64 | 0;

export var ListedWorkflows = list(n0, _LWi, 0, () => ListedWorkflow);
export var OnPartialUploadWorkflowDetails = list(n0, _OPUWD, 0, () => WorkflowDetail);
export var OnUploadWorkflowDetails = list(n0, _OUWD, 0, () => WorkflowDetail);
export var Protocols = 64 | 0;

export var S3Tags = list(n0, _STag, 0, () => S3Tag);
export var SecurityGroupIds = 64 | 0;

export var StructuredLogDestinations = 64 | 0;

export var SubnetIds = 64 | 0;

export var WorkflowSteps = list(n0, _WSo, 0, () => WorkflowStep);
export var CreateServer = op(
  n0,
  _CS,
  0,
  () => CreateServerRequest,
  () => CreateServerResponse
);
export var CreateWorkflow = op(
  n0,
  _CW,
  0,
  () => CreateWorkflowRequest,
  () => CreateWorkflowResponse
);
export var DeleteWorkflow = op(
  n0,
  _DWe,
  2,
  () => DeleteWorkflowRequest,
  () => Unit
);
export var DescribeServer = op(
  n0,
  _DSes,
  0,
  () => DescribeServerRequest,
  () => DescribeServerResponse
);
export var DescribeWorkflow = op(
  n0,
  _DWes,
  0,
  () => DescribeWorkflowRequest,
  () => DescribeWorkflowResponse
);
export var ListWorkflows = op(
  n0,
  _LWis,
  0,
  () => ListWorkflowsRequest,
  () => ListWorkflowsResponse
);
export var SendWorkflowStepState = op(
  n0,
  _SWSS,
  0,
  () => SendWorkflowStepStateRequest,
  () => SendWorkflowStepStateResponse
);
export var UpdateServer = op(
  n0,
  _US,
  0,
  () => UpdateServerRequest,
  () => UpdateServerResponse
);
