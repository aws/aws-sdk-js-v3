// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _AI,
  _CAr,
  _DA,
  _DN,
  _DVIC,
  _DVICe,
  _DVICR,
  _DVICRe,
  _DVICRes,
  _DVICResc,
  _IVC,
  _S,
  _SA,
  _UVIC,
  _UVICR,
  _UVICRp,
  _VEI,
  _VI,
  _VIC,
  _VICA,
  _VICN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteVpcIngressConnectionRequest = struct(n0, _DVICR, 0, [_VICA], [0]);
export var DeleteVpcIngressConnectionResponse = struct(n0, _DVICRe, 0, [_VIC], [() => VpcIngressConnection]);
export var DescribeVpcIngressConnectionRequest = struct(n0, _DVICRes, 0, [_VICA], [0]);
export var DescribeVpcIngressConnectionResponse = struct(n0, _DVICResc, 0, [_VIC], [() => VpcIngressConnection]);
export var IngressVpcConfiguration = struct(n0, _IVC, 0, [_VI, _VEI], [0, 0]);
export var UpdateVpcIngressConnectionRequest = struct(n0, _UVICR, 0, [_VICA, _IVC], [0, () => IngressVpcConfiguration]);
export var UpdateVpcIngressConnectionResponse = struct(n0, _UVICRp, 0, [_VIC], [() => VpcIngressConnection]);
export var VpcIngressConnection = struct(
  n0,
  _VIC,
  0,
  [_VICA, _VICN, _SA, _S, _AI, _DN, _IVC, _CAr, _DA],
  [0, 0, 0, 0, 0, 0, () => IngressVpcConfiguration, 4, 4]
);
export var DeleteVpcIngressConnection = op(
  n0,
  _DVIC,
  0,
  () => DeleteVpcIngressConnectionRequest,
  () => DeleteVpcIngressConnectionResponse
);
export var DescribeVpcIngressConnection = op(
  n0,
  _DVICe,
  0,
  () => DescribeVpcIngressConnectionRequest,
  () => DescribeVpcIngressConnectionResponse
);
export var UpdateVpcIngressConnection = op(
  n0,
  _UVIC,
  0,
  () => UpdateVpcIngressConnectionRequest,
  () => UpdateVpcIngressConnectionResponse
);
