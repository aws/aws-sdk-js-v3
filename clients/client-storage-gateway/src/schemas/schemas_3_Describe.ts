// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CWLGARN,
  _DD,
  _DGIe,
  _DGII,
  _DGIO,
  _EII,
  _EIR,
  _ETnd,
  _GARN,
  _GC,
  _GI,
  _GN,
  _GNI,
  _GS,
  _GT,
  _GTa,
  _HE,
  _HEI,
  _IAp,
  _IApv,
  _LSU,
  _MA,
  _NIe,
  _NUAD,
  _SGC,
  _SUED,
  _SV,
  _T,
  _UGI,
  _UGII,
  _UGIO,
  _VPCE,
  n0,
  Tags,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeGatewayInformationInput = struct(n0, _DGII, 0, [_GARN], [0]);
export var DescribeGatewayInformationOutput = struct(
  n0,
  _DGIO,
  0,
  [
    _GARN,
    _GI,
    _GN,
    _GT,
    _GS,
    _GNI,
    _GTa,
    _NUAD,
    _LSU,
    _EII,
    _EIR,
    _T,
    _VPCE,
    _CWLGARN,
    _HE,
    _ETnd,
    _SUED,
    _DD,
    _GC,
    _SGC,
    _HEI,
    _SV,
  ],
  [0, 0, 0, 0, 0, [() => GatewayNetworkInterfaces, 0], 0, 0, 0, 0, 0, () => Tags, 0, 0, 0, 0, 0, 0, 0, 64 | 0, 0, 0]
);
export var NetworkInterface = struct(n0, _NIe, 8, [_IAp, _MA, _IApv], [0, 0, 0]);
export var UpdateGatewayInformationInput = struct(n0, _UGII, 0, [_GARN, _GN, _GT, _CWLGARN, _GC], [0, 0, 0, 0, 0]);
export var UpdateGatewayInformationOutput = struct(n0, _UGIO, 0, [_GARN, _GN], [0, 0]);
export var GatewayNetworkInterfaces = list(n0, _GNI, 0, [() => NetworkInterface, 0]);
export var SupportedGatewayCapacities = 64 | 0;

export var DescribeGatewayInformation = op(
  n0,
  _DGIe,
  0,
  () => DescribeGatewayInformationInput,
  () => DescribeGatewayInformationOutput
);
export var UpdateGatewayInformation = op(
  n0,
  _UGI,
  0,
  () => UpdateGatewayInformationInput,
  () => UpdateGatewayInformationOutput
);
