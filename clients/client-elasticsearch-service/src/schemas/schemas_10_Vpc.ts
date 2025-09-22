// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _DA,
  _DN,
  _DVE,
  _DVER,
  _DVERe,
  _h,
  _hQ,
  _LVE,
  _LVEFD,
  _LVEFDR,
  _LVEFDRi,
  _LVER,
  _LVERi,
  _NT,
  _nT,
  _S,
  _VEI,
  _VEO,
  _VES,
  _VESL,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteVpcEndpointRequest = struct(n0, _DVER, 0, [_VEI], [[0, 1]]);
export var DeleteVpcEndpointResponse = struct(n0, _DVERe, 0, [_VES], [() => VpcEndpointSummary]);
export var ListVpcEndpointsForDomainRequest = struct(
  n0,
  _LVEFDR,
  0,
  [_DN, _NT],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
  ]
);
export var ListVpcEndpointsForDomainResponse = struct(n0, _LVEFDRi, 0, [_VESL, _NT], [() => VpcEndpointSummaryList, 0]);
export var ListVpcEndpointsRequest = struct(
  n0,
  _LVER,
  0,
  [_NT],
  [
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
  ]
);
export var ListVpcEndpointsResponse = struct(n0, _LVERi, 0, [_VESL, _NT], [() => VpcEndpointSummaryList, 0]);
export var VpcEndpointSummary = struct(n0, _VES, 0, [_VEI, _VEO, _DA, _S], [0, 0, 0, 0]);
export var VpcEndpointSummaryList = list(n0, _VESL, 0, () => VpcEndpointSummary);
export var DeleteVpcEndpoint = op(
  n0,
  _DVE,
  {
    [_h]: ["DELETE", "/2015-01-01/es/vpcEndpoints/{VpcEndpointId}", 200],
  },
  () => DeleteVpcEndpointRequest,
  () => DeleteVpcEndpointResponse
);
export var ListVpcEndpoints = op(
  n0,
  _LVE,
  {
    [_h]: ["GET", "/2015-01-01/es/vpcEndpoints", 200],
  },
  () => ListVpcEndpointsRequest,
  () => ListVpcEndpointsResponse
);
export var ListVpcEndpointsForDomain = op(
  n0,
  _LVEFD,
  {
    [_h]: ["GET", "/2015-01-01/es/domain/{DomainName}/vpcEndpoints", 200],
  },
  () => ListVpcEndpointsForDomainRequest,
  () => ListVpcEndpointsForDomainResponse
);
