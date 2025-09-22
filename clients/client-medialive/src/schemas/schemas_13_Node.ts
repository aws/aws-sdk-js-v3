// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _Ar,
  _ar,
  _CI,
  _cI,
  _CNa,
  _cNa,
  _CNh,
  _cNh,
  _CNre,
  _CNRre,
  _CNRrea,
  _CNRS,
  _CNRSR,
  _CNRSRr,
  _CPG,
  _cPG,
  _CSon,
  _cSon,
  _DNe,
  _DNesc,
  _DNRel,
  _DNRele,
  _DNRescr,
  _DNRescri,
  _DNSe,
  _hQ,
  _ht,
  _I,
  _i,
  _IAn,
  _iAn,
  _iTd,
  _jN,
  _LINo,
  _lINo,
  _LNi,
  _LNRis,
  _LNRist,
  _lODNSi,
  _lONIM,
  _lONIMCR,
  _MIIa,
  _mIIa,
  _MR,
  _mR,
  _N,
  _n,
  _NIM,
  _nIM,
  _NIMCR,
  _NIMe,
  _nIMe,
  _NIMo,
  _NIo,
  _No,
  _no,
  _NRS,
  _nRS,
  _NT,
  _nT,
  _PIN,
  _pIN,
  _RIe,
  _rIe,
  _Rol,
  _rol,
  _SSdi,
  _sSdi,
  _SSM,
  _sSM,
  _SSMd,
  _SSMUR,
  _SSMURd,
  _St,
  _st,
  _Ta,
  _ta,
  _UNp,
  _UNRpd,
  _UNRpda,
  _UNS,
  _UNSR,
  _UNSRp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateNodeRegistrationScriptRequest = struct(
  n0,
  _CNRSR,
  0,
  [_CI, _I, _N, _NIM, _RIe, _Rol],
  [
    [0, 1],
    [
      0,
      {
        [_jN]: _i,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      () => __listOfNodeInterfaceMapping,
      {
        [_jN]: _nIM,
      },
    ],
    [
      0,
      {
        [_jN]: _rIe,
        [_iTd]: 1,
      },
    ],
    [
      0,
      {
        [_jN]: _rol,
      },
    ],
  ]
);
export var CreateNodeRegistrationScriptResponse = struct(
  n0,
  _CNRSRr,
  0,
  [_NRS],
  [
    [
      0,
      {
        [_jN]: _nRS,
      },
    ],
  ]
);
export var CreateNodeRequest = struct(
  n0,
  _CNRre,
  0,
  [_CI, _N, _NIM, _RIe, _Rol, _Ta],
  [
    [0, 1],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      () => __listOfNodeInterfaceMappingCreateRequest,
      {
        [_jN]: _nIM,
      },
    ],
    [
      0,
      {
        [_jN]: _rIe,
        [_iTd]: 1,
      },
    ],
    [
      0,
      {
        [_jN]: _rol,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _ta,
      },
    ],
  ]
);
export var CreateNodeResponse = struct(
  n0,
  _CNRrea,
  0,
  [_Ar, _CPG, _CI, _CSon, _I, _IAn, _N, _NIM, _Rol, _St, _SSM],
  [
    [
      0,
      {
        [_jN]: _ar,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _cPG,
      },
    ],
    [
      0,
      {
        [_jN]: _cI,
      },
    ],
    [
      0,
      {
        [_jN]: _cSon,
      },
    ],
    [
      0,
      {
        [_jN]: _i,
      },
    ],
    [
      0,
      {
        [_jN]: _iAn,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      () => __listOfNodeInterfaceMapping,
      {
        [_jN]: _nIM,
      },
    ],
    [
      0,
      {
        [_jN]: _rol,
      },
    ],
    [
      0,
      {
        [_jN]: _st,
      },
    ],
    [
      () => SdiSourceMappings,
      {
        [_jN]: _sSM,
      },
    ],
  ]
);
export var DeleteNodeRequest = struct(
  n0,
  _DNRel,
  0,
  [_CI, _NIo],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteNodeResponse = struct(
  n0,
  _DNRele,
  0,
  [_Ar, _CPG, _CI, _CSon, _I, _IAn, _N, _NIM, _Rol, _St, _SSM],
  [
    [
      0,
      {
        [_jN]: _ar,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _cPG,
      },
    ],
    [
      0,
      {
        [_jN]: _cI,
      },
    ],
    [
      0,
      {
        [_jN]: _cSon,
      },
    ],
    [
      0,
      {
        [_jN]: _i,
      },
    ],
    [
      0,
      {
        [_jN]: _iAn,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      () => __listOfNodeInterfaceMapping,
      {
        [_jN]: _nIM,
      },
    ],
    [
      0,
      {
        [_jN]: _rol,
      },
    ],
    [
      0,
      {
        [_jN]: _st,
      },
    ],
    [
      () => SdiSourceMappings,
      {
        [_jN]: _sSM,
      },
    ],
  ]
);
export var DescribeNodeRequest = struct(
  n0,
  _DNRescr,
  0,
  [_CI, _NIo],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DescribeNodeResponse = struct(
  n0,
  _DNRescri,
  0,
  [_Ar, _CPG, _CI, _CSon, _I, _IAn, _N, _NIM, _Rol, _St, _SSM],
  [
    [
      0,
      {
        [_jN]: _ar,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _cPG,
      },
    ],
    [
      0,
      {
        [_jN]: _cI,
      },
    ],
    [
      0,
      {
        [_jN]: _cSon,
      },
    ],
    [
      0,
      {
        [_jN]: _i,
      },
    ],
    [
      0,
      {
        [_jN]: _iAn,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      () => __listOfNodeInterfaceMapping,
      {
        [_jN]: _nIM,
      },
    ],
    [
      0,
      {
        [_jN]: _rol,
      },
    ],
    [
      0,
      {
        [_jN]: _st,
      },
    ],
    [
      () => SdiSourceMappings,
      {
        [_jN]: _sSM,
      },
    ],
  ]
);
export var DescribeNodeSummary = struct(
  n0,
  _DNSe,
  0,
  [_Ar, _CPG, _CI, _CSon, _I, _IAn, _MIIa, _N, _NIM, _Rol, _St, _SSM],
  [
    [
      0,
      {
        [_jN]: _ar,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _cPG,
      },
    ],
    [
      0,
      {
        [_jN]: _cI,
      },
    ],
    [
      0,
      {
        [_jN]: _cSon,
      },
    ],
    [
      0,
      {
        [_jN]: _i,
      },
    ],
    [
      0,
      {
        [_jN]: _iAn,
      },
    ],
    [
      0,
      {
        [_jN]: _mIIa,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      () => __listOfNodeInterfaceMapping,
      {
        [_jN]: _nIM,
      },
    ],
    [
      0,
      {
        [_jN]: _rol,
      },
    ],
    [
      0,
      {
        [_jN]: _st,
      },
    ],
    [
      () => SdiSourceMappings,
      {
        [_jN]: _sSM,
      },
    ],
  ]
);
export var ListNodesRequest = struct(
  n0,
  _LNRis,
  0,
  [_CI, _MR, _NT],
  [
    [0, 1],
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
export var ListNodesResponse = struct(
  n0,
  _LNRist,
  0,
  [_NT, _No],
  [
    [
      0,
      {
        [_jN]: _nT,
      },
    ],
    [
      () => __listOfDescribeNodeSummary,
      {
        [_jN]: _no,
      },
    ],
  ]
);
export var NodeInterfaceMapping = struct(
  n0,
  _NIMo,
  0,
  [_LINo, _NIMe, _PIN],
  [
    [
      0,
      {
        [_jN]: _lINo,
      },
    ],
    [
      0,
      {
        [_jN]: _nIMe,
      },
    ],
    [
      0,
      {
        [_jN]: _pIN,
      },
    ],
  ]
);
export var NodeInterfaceMappingCreateRequest = struct(
  n0,
  _NIMCR,
  0,
  [_LINo, _NIMe, _PIN],
  [
    [
      0,
      {
        [_jN]: _lINo,
      },
    ],
    [
      0,
      {
        [_jN]: _nIMe,
      },
    ],
    [
      0,
      {
        [_jN]: _pIN,
      },
    ],
  ]
);
export var SdiSourceMapping = struct(
  n0,
  _SSMd,
  0,
  [_CNa, _CNh, _SSdi],
  [
    [
      1,
      {
        [_jN]: _cNa,
      },
    ],
    [
      1,
      {
        [_jN]: _cNh,
      },
    ],
    [
      0,
      {
        [_jN]: _sSdi,
      },
    ],
  ]
);
export var SdiSourceMappingUpdateRequest = struct(
  n0,
  _SSMUR,
  0,
  [_CNa, _CNh, _SSdi],
  [
    [
      1,
      {
        [_jN]: _cNa,
      },
    ],
    [
      1,
      {
        [_jN]: _cNh,
      },
    ],
    [
      0,
      {
        [_jN]: _sSdi,
      },
    ],
  ]
);
export var UpdateNodeRequest = struct(
  n0,
  _UNRpd,
  0,
  [_CI, _N, _NIo, _Rol, _SSM],
  [
    [0, 1],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [0, 1],
    [
      0,
      {
        [_jN]: _rol,
      },
    ],
    [
      () => SdiSourceMappingsUpdateRequest,
      {
        [_jN]: _sSM,
      },
    ],
  ]
);
export var UpdateNodeResponse = struct(
  n0,
  _UNRpda,
  0,
  [_Ar, _CPG, _CI, _CSon, _I, _IAn, _N, _NIM, _Rol, _St, _SSM],
  [
    [
      0,
      {
        [_jN]: _ar,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _cPG,
      },
    ],
    [
      0,
      {
        [_jN]: _cI,
      },
    ],
    [
      0,
      {
        [_jN]: _cSon,
      },
    ],
    [
      0,
      {
        [_jN]: _i,
      },
    ],
    [
      0,
      {
        [_jN]: _iAn,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      () => __listOfNodeInterfaceMapping,
      {
        [_jN]: _nIM,
      },
    ],
    [
      0,
      {
        [_jN]: _rol,
      },
    ],
    [
      0,
      {
        [_jN]: _st,
      },
    ],
    [
      () => SdiSourceMappings,
      {
        [_jN]: _sSM,
      },
    ],
  ]
);
export var UpdateNodeStateRequest = struct(
  n0,
  _UNSR,
  0,
  [_CI, _NIo, _St],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_jN]: _st,
      },
    ],
  ]
);
export var UpdateNodeStateResponse = struct(
  n0,
  _UNSRp,
  0,
  [_Ar, _CPG, _CI, _CSon, _I, _IAn, _N, _NIM, _Rol, _St, _SSM],
  [
    [
      0,
      {
        [_jN]: _ar,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _cPG,
      },
    ],
    [
      0,
      {
        [_jN]: _cI,
      },
    ],
    [
      0,
      {
        [_jN]: _cSon,
      },
    ],
    [
      0,
      {
        [_jN]: _i,
      },
    ],
    [
      0,
      {
        [_jN]: _iAn,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      () => __listOfNodeInterfaceMapping,
      {
        [_jN]: _nIM,
      },
    ],
    [
      0,
      {
        [_jN]: _rol,
      },
    ],
    [
      0,
      {
        [_jN]: _st,
      },
    ],
    [
      () => SdiSourceMappings,
      {
        [_jN]: _sSM,
      },
    ],
  ]
);
export var __listOfDescribeNodeSummary = list(n0, _lODNSi, 0, [() => DescribeNodeSummary, 0]);
export var __listOfNodeInterfaceMapping = list(n0, _lONIM, 0, [() => NodeInterfaceMapping, 0]);
export var __listOfNodeInterfaceMappingCreateRequest = list(n0, _lONIMCR, 0, [
  () => NodeInterfaceMappingCreateRequest,
  0,
]);
export var SdiSourceMappings = list(n0, _SSM, 0, [() => SdiSourceMapping, 0]);
export var SdiSourceMappingsUpdateRequest = list(n0, _SSMURd, 0, [() => SdiSourceMappingUpdateRequest, 0]);
export var CreateNode = op(
  n0,
  _CNre,
  {
    [_ht]: ["POST", "/prod/clusters/{ClusterId}/nodes", 201],
  },
  () => CreateNodeRequest,
  () => CreateNodeResponse
);
export var CreateNodeRegistrationScript = op(
  n0,
  _CNRS,
  {
    [_ht]: ["POST", "/prod/clusters/{ClusterId}/nodeRegistrationScript", 200],
  },
  () => CreateNodeRegistrationScriptRequest,
  () => CreateNodeRegistrationScriptResponse
);
export var DeleteNode = op(
  n0,
  _DNe,
  {
    [_ht]: ["DELETE", "/prod/clusters/{ClusterId}/nodes/{NodeId}", 202],
  },
  () => DeleteNodeRequest,
  () => DeleteNodeResponse
);
export var DescribeNode = op(
  n0,
  _DNesc,
  {
    [_ht]: ["GET", "/prod/clusters/{ClusterId}/nodes/{NodeId}", 200],
  },
  () => DescribeNodeRequest,
  () => DescribeNodeResponse
);
export var ListNodes = op(
  n0,
  _LNi,
  {
    [_ht]: ["GET", "/prod/clusters/{ClusterId}/nodes", 200],
  },
  () => ListNodesRequest,
  () => ListNodesResponse
);
export var UpdateNode = op(
  n0,
  _UNp,
  {
    [_ht]: ["PUT", "/prod/clusters/{ClusterId}/nodes/{NodeId}", 201],
  },
  () => UpdateNodeRequest,
  () => UpdateNodeResponse
);
export var UpdateNodeState = op(
  n0,
  _UNS,
  {
    [_ht]: ["PUT", "/prod/clusters/{ClusterId}/nodes/{NodeId}/state", 201],
  },
  () => UpdateNodeStateRequest,
  () => UpdateNodeStateResponse
);
