// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _cD,
  _DN,
  _DNe,
  _DNR,
  _DNRe,
  _DNRes,
  _DNResc,
  _eC,
  _eM,
  _fR,
  _GNDS,
  _GNDSR,
  _GNDSRe,
  _GUS,
  _GUSR,
  _GUSRe,
  _nA,
  _nN,
  _nV,
  _st,
  _tNN,
  _tNV,
  _uI,
  _uS,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteNamespaceRequest = struct(n0, _DNR, 0, [], []);
export var DeleteNamespaceResponse = struct(n0, _DNRe, 0, [_nA, _nN], [0, 0]);
export var DescribeNamespaceRequest = struct(n0, _DNRes, 0, [_nN], [0]);
export var DescribeNamespaceResponse = struct(n0, _DNResc, 0, [_nA, _nN, _tNN, _tNV, _nV], [0, 0, 0, 1, 1]);
export var GetNamespaceDeletionStatusRequest = struct(n0, _GNDSR, 0, [], []);
export var GetNamespaceDeletionStatusResponse = struct(n0, _GNDSRe, 0, [_nA, _nN, _st, _eC, _eM], [0, 0, 0, 0, 0]);
export var GetUploadStatusRequest = struct(n0, _GUSR, 0, [_uI], [0]);
export var GetUploadStatusResponse = struct(
  n0,
  _GUSRe,
  0,
  [_uI, _uS, _nA, _nN, _nV, _fR, _cD],
  [0, 0, 0, 0, 1, 64 | 0, 4]
);
export var StringList = 64 | 0;

export var DeleteNamespace = op(
  n0,
  _DN,
  0,
  () => DeleteNamespaceRequest,
  () => DeleteNamespaceResponse
);
export var DescribeNamespace = op(
  n0,
  _DNe,
  0,
  () => DescribeNamespaceRequest,
  () => DescribeNamespaceResponse
);
export var GetNamespaceDeletionStatus = op(
  n0,
  _GNDS,
  0,
  () => GetNamespaceDeletionStatusRequest,
  () => GetNamespaceDeletionStatusResponse
);
export var GetUploadStatus = op(
  n0,
  _GUS,
  0,
  () => GetUploadStatusRequest,
  () => GetUploadStatusResponse
);
