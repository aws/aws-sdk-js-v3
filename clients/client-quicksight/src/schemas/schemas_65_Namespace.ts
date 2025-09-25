// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AAI,
  _Ar,
  _CNR,
  _CNr,
  _CNRr,
  _CR,
  _CSr,
  _DNes,
  _DNRes,
  _DNResc,
  _h,
  _hQ,
  _IICAA,
  _IICIA,
  _ISd,
  _LNi,
  _LNR,
  _LNRi,
  _M,
  _MR,
  _mr,
  _N,
  _Na,
  _Nam,
  _NEam,
  _NIV,
  _NT,
  _nt,
  _RI,
  _St,
  _T,
  _Ta,
  n0,
  TagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateNamespaceRequest = struct(n0, _CNR, 0, [_AAI, _Na, _ISd, _Ta], [[0, 1], 0, 0, () => TagList]);
export var CreateNamespaceResponse = struct(
  n0,
  _CNRr,
  0,
  [_Ar, _N, _CR, _CSr, _ISd, _RI, _St],
  [0, 0, 0, 0, 0, 0, [1, 32]]
);
export var DescribeNamespaceRequest = struct(
  n0,
  _DNRes,
  0,
  [_AAI, _Na],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DescribeNamespaceResponse = struct(n0, _DNResc, 0, [_Na, _RI, _St], [() => NamespaceInfoV2, 0, [1, 32]]);
export var ListNamespacesRequest = struct(
  n0,
  _LNR,
  0,
  [_AAI, _NT, _MR],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _nt,
      },
    ],
    [
      1,
      {
        [_hQ]: _mr,
      },
    ],
  ]
);
export var ListNamespacesResponse = struct(n0, _LNRi, 0, [_Nam, _NT, _RI, _St], [() => Namespaces, 0, 0, [1, 32]]);
export var NamespaceError = struct(n0, _NEam, 0, [_T, _M], [0, 0]);
export var NamespaceInfoV2 = struct(
  n0,
  _NIV,
  0,
  [_N, _Ar, _CR, _CSr, _ISd, _NEam, _IICAA, _IICIA],
  [0, 0, 0, 0, 0, () => NamespaceError, 0, 0]
);
export var Namespaces = list(n0, _Nam, 0, () => NamespaceInfoV2);
export var CreateNamespace = op(
  n0,
  _CNr,
  {
    [_h]: ["POST", "/accounts/{AwsAccountId}", 200],
  },
  () => CreateNamespaceRequest,
  () => CreateNamespaceResponse
);
export var DescribeNamespace = op(
  n0,
  _DNes,
  {
    [_h]: ["GET", "/accounts/{AwsAccountId}/namespaces/{Namespace}", 200],
  },
  () => DescribeNamespaceRequest,
  () => DescribeNamespaceResponse
);
export var ListNamespaces = op(
  n0,
  _LNi,
  {
    [_h]: ["GET", "/accounts/{AwsAccountId}/namespaces", 200],
  },
  () => ListNamespacesRequest,
  () => ListNamespacesResponse
);
