// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _C,
  _CA,
  _CE,
  _CEl,
  _DCe,
  _DCRes,
  _DCResc,
  _E,
  _h,
  _lOCE,
  _N,
  _NT,
  _O,
  _R,
  _S,
  _UC,
  _UCR,
  _UCRp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var Cluster = struct(n0, _C, 0, [_CA, _CE, _N, _S, _O, _NT], [0, () => __listOfClusterEndpoint, 0, 0, 0, 0]);
export var ClusterEndpoint = struct(n0, _CEl, 0, [_E, _R], [0, 0]);
export var DescribeClusterRequest = struct(n0, _DCRes, 0, [_CA], [[0, 1]]);
export var DescribeClusterResponse = struct(n0, _DCResc, 0, [_C], [() => Cluster]);
export var UpdateClusterRequest = struct(n0, _UCR, 0, [_CA, _NT], [0, 0]);
export var UpdateClusterResponse = struct(n0, _UCRp, 0, [_C], [() => Cluster]);
export var __listOfClusterEndpoint = list(n0, _lOCE, 0, () => ClusterEndpoint);
export var DescribeCluster = op(
  n0,
  _DCe,
  {
    [_h]: ["GET", "/cluster/{ClusterArn}", 200],
  },
  () => DescribeClusterRequest,
  () => DescribeClusterResponse
);
export var UpdateCluster = op(
  n0,
  _UC,
  {
    [_h]: ["PUT", "/cluster", 200],
  },
  () => UpdateClusterRequest,
  () => UpdateClusterResponse
);
