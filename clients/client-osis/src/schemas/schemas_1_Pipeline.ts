// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { ResourceAlreadyExistsException as __ResourceAlreadyExistsException } from "../models/index";
import {
  _ATV,
  _BO,
  _c,
  _CA,
  _CB,
  _CP,
  _CPR,
  _CPRr,
  _CPS,
  _CPSh,
  _CPSha,
  _CPShan,
  _CPSL,
  _CPSLh,
  _CWLD,
  _D,
  _De,
  _E,
  _e,
  _EARO,
  _GP,
  _GPCP,
  _GPCPR,
  _GPCPRe,
  _GPR,
  _GPRe,
  _h,
  _hE,
  _IEU,
  _ILE,
  _KKA,
  _LG,
  _LPO,
  _LUA,
  _m,
  _MU,
  _MUa,
  _N,
  _P,
  _PA,
  _PBE,
  _PCB,
  _PD,
  _PDL,
  _PN,
  _PRA,
  _PSR,
  _RAEE,
  _S,
  _SGI,
  _SI,
  _SN,
  _SP,
  _SPR,
  _SPRt,
  _SPRto,
  _SPRtop,
  _SPt,
  _SR,
  _ST,
  _SVE,
  _SVEe,
  _SVEL,
  _T,
  _TNOS,
  _UP,
  _UPR,
  _UPRp,
  _VAO,
  _VE,
  _VEI,
  _VEL,
  _VEM,
  _VEp,
  _VES,
  _VI,
  _VO,
  n0,
} from "./schemas_0";
import { TagList } from "./schemas_5_Pipeline";

/* eslint no-var: 0 */

export var BufferOptions = struct(n0, _BO, 0, [_PBE], [2]);
export var ChangeProgressStage = struct(n0, _CPS, 0, [_N, _S, _D, _LUA], [0, 0, 0, 4]);
export var ChangeProgressStatus = struct(
  n0,
  _CPSh,
  0,
  [_ST, _S, _TNOS, _CPSha],
  [4, 0, 1, () => ChangeProgressStageList]
);
export var CloudWatchLogDestination = struct(n0, _CWLD, 0, [_LG], [0]);
export var CreatePipelineRequest = struct(
  n0,
  _CPR,
  0,
  [_PN, _MU, _MUa, _PCB, _LPO, _VO, _BO, _EARO, _T, _PRA],
  [
    0,
    1,
    1,
    0,
    () => LogPublishingOptions,
    () => VpcOptions,
    () => BufferOptions,
    () => EncryptionAtRestOptions,
    () => TagList,
    0,
  ]
);
export var CreatePipelineResponse = struct(n0, _CPRr, 0, [_P], [() => Pipeline]);
export var EncryptionAtRestOptions = struct(n0, _EARO, 0, [_KKA], [0]);
export var GetPipelineChangeProgressRequest = struct(n0, _GPCPR, 0, [_PN], [[0, 1]]);
export var GetPipelineChangeProgressResponse = struct(n0, _GPCPRe, 0, [_CPShan], [() => ChangeProgressStatusList]);
export var GetPipelineRequest = struct(n0, _GPR, 0, [_PN], [[0, 1]]);
export var GetPipelineResponse = struct(n0, _GPRe, 0, [_P], [() => Pipeline]);
export var LogPublishingOptions = struct(n0, _LPO, 0, [_ILE, _CWLD], [2, () => CloudWatchLogDestination]);
export var Pipeline = struct(
  n0,
  _P,
  0,
  [_PN, _PA, _MU, _MUa, _S, _SR, _PCB, _CA, _LUA, _IEU, _LPO, _VE, _BO, _EARO, _VES, _SVE, _De, _T, _PRA],
  [
    0,
    0,
    1,
    1,
    0,
    () => PipelineStatusReason,
    0,
    4,
    4,
    64 | 0,
    () => LogPublishingOptions,
    () => VpcEndpointsList,
    () => BufferOptions,
    () => EncryptionAtRestOptions,
    0,
    () => ServiceVpcEndpointsList,
    () => PipelineDestinationList,
    () => TagList,
    0,
  ]
);
export var PipelineDestination = struct(n0, _PD, 0, [_SN, _E], [0, 0]);
export var PipelineStatusReason = struct(n0, _PSR, 0, [_D], [0]);
export var ResourceAlreadyExistsException = error(
  n0,
  _RAEE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_m],
  [0],

  __ResourceAlreadyExistsException
);
export var ServiceVpcEndpoint = struct(n0, _SVEe, 0, [_SN, _VEI], [0, 0]);
export var StartPipelineRequest = struct(n0, _SPR, 0, [_PN], [[0, 1]]);
export var StartPipelineResponse = struct(n0, _SPRt, 0, [_P], [() => Pipeline]);
export var StopPipelineRequest = struct(n0, _SPRto, 0, [_PN], [[0, 1]]);
export var StopPipelineResponse = struct(n0, _SPRtop, 0, [_P], [() => Pipeline]);
export var UpdatePipelineRequest = struct(
  n0,
  _UPR,
  0,
  [_PN, _MU, _MUa, _PCB, _LPO, _BO, _EARO, _PRA],
  [[0, 1], 1, 1, 0, () => LogPublishingOptions, () => BufferOptions, () => EncryptionAtRestOptions, 0]
);
export var UpdatePipelineResponse = struct(n0, _UPRp, 0, [_P], [() => Pipeline]);
export var VpcAttachmentOptions = struct(n0, _VAO, 0, [_ATV, _CB], [2, 0]);
export var VpcEndpoint = struct(n0, _VEp, 0, [_VEI, _VI, _VO], [0, 0, () => VpcOptions]);
export var VpcOptions = struct(n0, _VO, 0, [_SI, _SGI, _VAO, _VEM], [64 | 0, 64 | 0, () => VpcAttachmentOptions, 0]);
export var Unit = "unit" as const;

export var ChangeProgressStageList = list(n0, _CPSL, 0, () => ChangeProgressStage);
export var ChangeProgressStatusList = list(n0, _CPSLh, 0, () => ChangeProgressStatus);
export var IngestEndpointUrlsList = 64 | 0;

export var PipelineDestinationList = list(n0, _PDL, 0, () => PipelineDestination);
export var SecurityGroupIds = 64 | 0;

export var ServiceVpcEndpointsList = list(n0, _SVEL, 0, () => ServiceVpcEndpoint);
export var SubnetIds = 64 | 0;

export var VpcEndpointsList = list(n0, _VEL, 0, () => VpcEndpoint);
export var CreatePipeline = op(
  n0,
  _CP,
  {
    [_h]: ["POST", "/2022-01-01/osis/createPipeline", 200],
  },
  () => CreatePipelineRequest,
  () => CreatePipelineResponse
);
export var GetPipeline = op(
  n0,
  _GP,
  {
    [_h]: ["GET", "/2022-01-01/osis/getPipeline/{PipelineName}", 200],
  },
  () => GetPipelineRequest,
  () => GetPipelineResponse
);
export var GetPipelineChangeProgress = op(
  n0,
  _GPCP,
  {
    [_h]: ["GET", "/2022-01-01/osis/getPipelineChangeProgress/{PipelineName}", 200],
  },
  () => GetPipelineChangeProgressRequest,
  () => GetPipelineChangeProgressResponse
);
export var StartPipeline = op(
  n0,
  _SP,
  {
    [_h]: ["PUT", "/2022-01-01/osis/startPipeline/{PipelineName}", 200],
  },
  () => StartPipelineRequest,
  () => StartPipelineResponse
);
export var StopPipeline = op(
  n0,
  _SPt,
  {
    [_h]: ["PUT", "/2022-01-01/osis/stopPipeline/{PipelineName}", 200],
  },
  () => StopPipelineRequest,
  () => StopPipelineResponse
);
export var UpdatePipeline = op(
  n0,
  _UP,
  {
    [_h]: ["PUT", "/2022-01-01/osis/updatePipeline/{PipelineName}", 200],
  },
  () => UpdatePipelineRequest,
  () => UpdatePipelineResponse
);
