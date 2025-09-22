// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _a,
  _CA,
  _CPE,
  _CPER,
  _CPERr,
  _De,
  _DRP,
  _DRPR,
  _DRPRe,
  _EI,
  _EIn,
  _GRP,
  _GRPR,
  _GRPRe,
  _h,
  _hQ,
  _IEUn,
  _LP,
  _LPE,
  _LPEC,
  _LPECR,
  _LPECRi,
  _LPER,
  _LPERi,
  _LPR,
  _LPRi,
  _LTFR,
  _LTFRR,
  _LTFRRi,
  _LUA,
  _MR,
  _mR,
  _MU,
  _MUa,
  _NT,
  _nT,
  _PA,
  _PE,
  _PEC,
  _PECi,
  _PECSL,
  _PEi,
  _PESL,
  _PEVO,
  _Pi,
  _PN,
  _Po,
  _PRP,
  _PRPR,
  _PRPRu,
  _PS,
  _PSL,
  _RA,
  _RPEC,
  _RPECR,
  _RPECRe,
  _S,
  _SGI,
  _SI,
  _SR,
  _T,
  _TK,
  _TR,
  _TRR,
  _TRRa,
  _UR,
  _URR,
  _URRn,
  _VEO,
  _VI,
  _VO,
  n0,
} from "./schemas_0";
import { PipelineDestinationList, PipelineStatusReason } from "./schemas_1_Pipeline";
import { TagList } from "./schemas_5_Pipeline";

/* eslint no-var: 0 */

export var CreatePipelineEndpointRequest = struct(n0, _CPER, 0, [_PA, _VO], [0, () => PipelineEndpointVpcOptions]);
export var CreatePipelineEndpointResponse = struct(n0, _CPERr, 0, [_PA, _EI, _S, _VI], [0, 0, 0, 0]);
export var DeleteResourcePolicyRequest = struct(n0, _DRPR, 0, [_RA], [[0, 1]]);
export var DeleteResourcePolicyResponse = struct(n0, _DRPRe, 0, [], []);
export var GetResourcePolicyRequest = struct(n0, _GRPR, 0, [_RA], [[0, 1]]);
export var GetResourcePolicyResponse = struct(n0, _GRPRe, 0, [_RA, _Po], [0, 0]);
export var ListPipelineEndpointConnectionsRequest = struct(
  n0,
  _LPECR,
  0,
  [_MR, _NT],
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
export var ListPipelineEndpointConnectionsResponse = struct(
  n0,
  _LPECRi,
  0,
  [_NT, _PEC],
  [0, () => PipelineEndpointConnectionsSummaryList]
);
export var ListPipelineEndpointsRequest = struct(
  n0,
  _LPER,
  0,
  [_MR, _NT],
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
export var ListPipelineEndpointsResponse = struct(n0, _LPERi, 0, [_NT, _PE], [0, () => PipelineEndpointsSummaryList]);
export var ListPipelinesRequest = struct(
  n0,
  _LPR,
  0,
  [_MR, _NT],
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
export var ListPipelinesResponse = struct(n0, _LPRi, 0, [_NT, _Pi], [0, () => PipelineSummaryList]);
export var ListTagsForResourceRequest = struct(
  n0,
  _LTFRR,
  0,
  [_A],
  [
    [
      0,
      {
        [_hQ]: _a,
      },
    ],
  ]
);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_T], [() => TagList]);
export var PipelineEndpoint = struct(
  n0,
  _PEi,
  0,
  [_PA, _EI, _S, _VI, _VO, _IEUn],
  [0, 0, 0, 0, () => PipelineEndpointVpcOptions, 0]
);
export var PipelineEndpointConnection = struct(n0, _PECi, 0, [_PA, _EI, _S, _VEO], [0, 0, 0, 0]);
export var PipelineEndpointVpcOptions = struct(n0, _PEVO, 0, [_SI, _SGI], [64 | 0, 64 | 0]);
export var PipelineSummary = struct(
  n0,
  _PS,
  0,
  [_S, _SR, _PN, _PA, _MU, _MUa, _CA, _LUA, _De, _T],
  [0, () => PipelineStatusReason, 0, 0, 1, 1, 4, 4, () => PipelineDestinationList, () => TagList]
);
export var PutResourcePolicyRequest = struct(n0, _PRPR, 0, [_RA, _Po], [[0, 1], 0]);
export var PutResourcePolicyResponse = struct(n0, _PRPRu, 0, [_RA, _Po], [0, 0]);
export var RevokePipelineEndpointConnectionsRequest = struct(n0, _RPECR, 0, [_PA, _EIn], [0, 64 | 0]);
export var RevokePipelineEndpointConnectionsResponse = struct(n0, _RPECRe, 0, [_PA], [0]);
export var TagResourceRequest = struct(
  n0,
  _TRR,
  0,
  [_A, _T],
  [
    [
      0,
      {
        [_hQ]: _a,
      },
    ],
    () => TagList,
  ]
);
export var TagResourceResponse = struct(n0, _TRRa, 0, [], []);
export var UntagResourceRequest = struct(
  n0,
  _URR,
  0,
  [_A, _TK],
  [
    [
      0,
      {
        [_hQ]: _a,
      },
    ],
    64 | 0,
  ]
);
export var UntagResourceResponse = struct(n0, _URRn, 0, [], []);
export var PipelineEndpointConnectionsSummaryList = list(n0, _PECSL, 0, () => PipelineEndpointConnection);
export var PipelineEndpointIdsList = 64 | 0;

export var PipelineEndpointsSummaryList = list(n0, _PESL, 0, () => PipelineEndpoint);
export var PipelineSummaryList = list(n0, _PSL, 0, () => PipelineSummary);
export var StringList = 64 | 0;

export var CreatePipelineEndpoint = op(
  n0,
  _CPE,
  {
    [_h]: ["POST", "/2022-01-01/osis/createPipelineEndpoint", 200],
  },
  () => CreatePipelineEndpointRequest,
  () => CreatePipelineEndpointResponse
);
export var DeleteResourcePolicy = op(
  n0,
  _DRP,
  {
    [_h]: ["DELETE", "/2022-01-01/osis/resourcePolicy/{ResourceArn}", 200],
  },
  () => DeleteResourcePolicyRequest,
  () => DeleteResourcePolicyResponse
);
export var GetResourcePolicy = op(
  n0,
  _GRP,
  {
    [_h]: ["GET", "/2022-01-01/osis/resourcePolicy/{ResourceArn}", 200],
  },
  () => GetResourcePolicyRequest,
  () => GetResourcePolicyResponse
);
export var ListPipelineEndpointConnections = op(
  n0,
  _LPEC,
  {
    [_h]: ["GET", "/2022-01-01/osis/listPipelineEndpointConnections", 200],
  },
  () => ListPipelineEndpointConnectionsRequest,
  () => ListPipelineEndpointConnectionsResponse
);
export var ListPipelineEndpoints = op(
  n0,
  _LPE,
  {
    [_h]: ["GET", "/2022-01-01/osis/listPipelineEndpoints", 200],
  },
  () => ListPipelineEndpointsRequest,
  () => ListPipelineEndpointsResponse
);
export var ListPipelines = op(
  n0,
  _LP,
  {
    [_h]: ["GET", "/2022-01-01/osis/listPipelines", 200],
  },
  () => ListPipelinesRequest,
  () => ListPipelinesResponse
);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  {
    [_h]: ["GET", "/2022-01-01/osis/listTagsForResource", 200],
  },
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse
);
export var PutResourcePolicy = op(
  n0,
  _PRP,
  {
    [_h]: ["PUT", "/2022-01-01/osis/resourcePolicy/{ResourceArn}", 200],
  },
  () => PutResourcePolicyRequest,
  () => PutResourcePolicyResponse
);
export var RevokePipelineEndpointConnections = op(
  n0,
  _RPEC,
  {
    [_h]: ["POST", "/2022-01-01/osis/revokePipelineEndpointConnections", 200],
  },
  () => RevokePipelineEndpointConnectionsRequest,
  () => RevokePipelineEndpointConnectionsResponse
);
export var TagResource = op(
  n0,
  _TR,
  {
    [_h]: ["POST", "/2022-01-01/osis/tagResource", 200],
  },
  () => TagResourceRequest,
  () => TagResourceResponse
);
export var UntagResource = op(
  n0,
  _UR,
  {
    [_h]: ["POST", "/2022-01-01/osis/untagResource", 200],
  },
  () => UntagResourceRequest,
  () => UntagResourceResponse
);
