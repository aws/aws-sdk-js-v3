// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { TooManyTagsException as __TooManyTagsException } from "../models/index";
import {
  _c,
  _CGR,
  _CGRI,
  _CGRO,
  _CM,
  _CMI,
  _CMO,
  _CR,
  _CRI,
  _CRO,
  _cT,
  _CVG,
  _CVGI,
  _CVGO,
  _CVN,
  _CVNI,
  _CVNO,
  _CVR,
  _CVRI,
  _CVRO,
  _CVS,
  _CVSI,
  _CVSO,
  _e,
  _gR,
  _gRN,
  _hE,
  _hQ,
  _ht,
  _k,
  _l,
  _LTFR,
  _LTFRI,
  _LTFRO,
  _m,
  _me,
  _mN,
  _mO,
  _nT,
  _r,
  _rA,
  _rN,
  _s,
  _ta,
  _tK,
  _TL,
  _TMTE,
  _TR,
  _TRa,
  _TRI,
  _TRO,
  _UR,
  _URI,
  _URO,
  _v,
  _vG,
  _vGN,
  _vN,
  _vNN,
  _vR,
  _vRN,
  _vS,
  _vSN,
  n0,
} from "./schemas_0";
import { RouteData, RouteSpec, VirtualNodeData, VirtualNodeSpec } from "./schemas_1_VirtualNode";
import { VirtualRouterData, VirtualRouterSpec } from "./schemas_2_Virtual";
import { VirtualGatewayData, VirtualGatewaySpec } from "./schemas_3_Virtual";
import { VirtualServiceData, VirtualServiceSpec } from "./schemas_4_Service";
import { GatewayRouteData, GatewayRouteSpec } from "./schemas_8_Route";
import { MeshData, MeshSpec } from "./schemas_14_VirtualNode";

/* eslint no-var: 0 */

export var CreateGatewayRouteInput = struct(
  n0,
  _CGRI,
  0,
  [_gRN, _mN, _vGN, _s, _ta, _cT, _mO],
  [
    0,
    [0, 1],
    [0, 1],
    () => GatewayRouteSpec,
    () => TagList,
    [0, 4],
    [
      0,
      {
        [_hQ]: _mO,
      },
    ],
  ]
);
export var CreateGatewayRouteOutput = struct(n0, _CGRO, 0, [_gR], [[() => GatewayRouteData, 16]]);
export var CreateMeshInput = struct(n0, _CMI, 0, [_mN, _s, _ta, _cT], [0, () => MeshSpec, () => TagList, [0, 4]]);
export var CreateMeshOutput = struct(n0, _CMO, 0, [_me], [[() => MeshData, 16]]);
export var CreateRouteInput = struct(
  n0,
  _CRI,
  0,
  [_rN, _mN, _vRN, _s, _ta, _cT, _mO],
  [
    0,
    [0, 1],
    [0, 1],
    () => RouteSpec,
    () => TagList,
    [0, 4],
    [
      0,
      {
        [_hQ]: _mO,
      },
    ],
  ]
);
export var CreateRouteOutput = struct(n0, _CRO, 0, [_r], [[() => RouteData, 16]]);
export var CreateVirtualGatewayInput = struct(
  n0,
  _CVGI,
  0,
  [_vGN, _mN, _s, _ta, _cT, _mO],
  [
    0,
    [0, 1],
    () => VirtualGatewaySpec,
    () => TagList,
    [0, 4],
    [
      0,
      {
        [_hQ]: _mO,
      },
    ],
  ]
);
export var CreateVirtualGatewayOutput = struct(n0, _CVGO, 0, [_vG], [[() => VirtualGatewayData, 16]]);
export var CreateVirtualNodeInput = struct(
  n0,
  _CVNI,
  0,
  [_vNN, _mN, _s, _ta, _cT, _mO],
  [
    0,
    [0, 1],
    () => VirtualNodeSpec,
    () => TagList,
    [0, 4],
    [
      0,
      {
        [_hQ]: _mO,
      },
    ],
  ]
);
export var CreateVirtualNodeOutput = struct(n0, _CVNO, 0, [_vN], [[() => VirtualNodeData, 16]]);
export var CreateVirtualRouterInput = struct(
  n0,
  _CVRI,
  0,
  [_vRN, _mN, _s, _ta, _cT, _mO],
  [
    0,
    [0, 1],
    () => VirtualRouterSpec,
    () => TagList,
    [0, 4],
    [
      0,
      {
        [_hQ]: _mO,
      },
    ],
  ]
);
export var CreateVirtualRouterOutput = struct(n0, _CVRO, 0, [_vR], [[() => VirtualRouterData, 16]]);
export var CreateVirtualServiceInput = struct(
  n0,
  _CVSI,
  0,
  [_vSN, _mN, _s, _ta, _cT, _mO],
  [
    0,
    [0, 1],
    () => VirtualServiceSpec,
    () => TagList,
    [0, 4],
    [
      0,
      {
        [_hQ]: _mO,
      },
    ],
  ]
);
export var CreateVirtualServiceOutput = struct(n0, _CVSO, 0, [_vS], [[() => VirtualServiceData, 16]]);
export var ListTagsForResourceInput = struct(
  n0,
  _LTFRI,
  0,
  [_rA, _nT, _l],
  [
    [
      0,
      {
        [_hQ]: _rA,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _l,
      },
    ],
  ]
);
export var ListTagsForResourceOutput = struct(n0, _LTFRO, 0, [_ta, _nT], [() => TagList, 0]);
export var TagRef = struct(n0, _TR, 0, [_k, _v], [0, 0]);
export var TagResourceInput = struct(
  n0,
  _TRI,
  0,
  [_rA, _ta],
  [
    [
      0,
      {
        [_hQ]: _rA,
      },
    ],
    () => TagList,
  ]
);
export var TagResourceOutput = struct(n0, _TRO, 0, [], []);
export var TooManyTagsException = error(
  n0,
  _TMTE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __TooManyTagsException
);
export var UntagResourceInput = struct(
  n0,
  _URI,
  0,
  [_rA, _tK],
  [
    [
      0,
      {
        [_hQ]: _rA,
      },
    ],
    64 | 0,
  ]
);
export var UntagResourceOutput = struct(n0, _URO, 0, [], []);
export var TagKeyList = 64 | 0;

export var TagList = list(n0, _TL, 0, () => TagRef);
export var CreateGatewayRoute = op(
  n0,
  _CGR,
  {
    [_ht]: ["PUT", "/v20190125/meshes/{meshName}/virtualGateway/{virtualGatewayName}/gatewayRoutes", 200],
  },
  () => CreateGatewayRouteInput,
  () => CreateGatewayRouteOutput
);
export var CreateMesh = op(
  n0,
  _CM,
  {
    [_ht]: ["PUT", "/v20190125/meshes", 200],
  },
  () => CreateMeshInput,
  () => CreateMeshOutput
);
export var CreateRoute = op(
  n0,
  _CR,
  {
    [_ht]: ["PUT", "/v20190125/meshes/{meshName}/virtualRouter/{virtualRouterName}/routes", 200],
  },
  () => CreateRouteInput,
  () => CreateRouteOutput
);
export var CreateVirtualGateway = op(
  n0,
  _CVG,
  {
    [_ht]: ["PUT", "/v20190125/meshes/{meshName}/virtualGateways", 200],
  },
  () => CreateVirtualGatewayInput,
  () => CreateVirtualGatewayOutput
);
export var CreateVirtualNode = op(
  n0,
  _CVN,
  {
    [_ht]: ["PUT", "/v20190125/meshes/{meshName}/virtualNodes", 200],
  },
  () => CreateVirtualNodeInput,
  () => CreateVirtualNodeOutput
);
export var CreateVirtualRouter = op(
  n0,
  _CVR,
  {
    [_ht]: ["PUT", "/v20190125/meshes/{meshName}/virtualRouters", 200],
  },
  () => CreateVirtualRouterInput,
  () => CreateVirtualRouterOutput
);
export var CreateVirtualService = op(
  n0,
  _CVS,
  {
    [_ht]: ["PUT", "/v20190125/meshes/{meshName}/virtualServices", 200],
  },
  () => CreateVirtualServiceInput,
  () => CreateVirtualServiceOutput
);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  {
    [_ht]: ["GET", "/v20190125/tags", 200],
  },
  () => ListTagsForResourceInput,
  () => ListTagsForResourceOutput
);
export var TagResource = op(
  n0,
  _TRa,
  {
    [_ht]: ["PUT", "/v20190125/tag", 200],
  },
  () => TagResourceInput,
  () => TagResourceOutput
);
export var UntagResource = op(
  n0,
  _UR,
  {
    [_ht]: ["PUT", "/v20190125/untag", 200],
  },
  () => UntagResourceInput,
  () => UntagResourceOutput
);
