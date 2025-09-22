// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { EndpointAlreadyExistsException as __EndpointAlreadyExistsException } from "../models/index";
import {
  _AAt,
  _ACRE,
  _ACRER,
  _ACRERd,
  _c,
  _CREC,
  _CRECu,
  _CRED,
  _CREDu,
  _e,
  _EAEE,
  _EC,
  _ED,
  _EGA,
  _EI,
  _hE,
  _M,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AddCustomRoutingEndpointsRequest = struct(
  n0,
  _ACRER,
  0,
  [_EC, _EGA],
  [() => CustomRoutingEndpointConfigurations, 0]
);
export var AddCustomRoutingEndpointsResponse = struct(
  n0,
  _ACRERd,
  0,
  [_ED, _EGA],
  [() => CustomRoutingEndpointDescriptions, 0]
);
export var CustomRoutingEndpointConfiguration = struct(n0, _CREC, 0, [_EI, _AAt], [0, 0]);
export var CustomRoutingEndpointDescription = struct(n0, _CRED, 0, [_EI], [0]);
export var EndpointAlreadyExistsException = error(
  n0,
  _EAEE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __EndpointAlreadyExistsException
);
export var CustomRoutingEndpointConfigurations = list(n0, _CRECu, 0, () => CustomRoutingEndpointConfiguration);
export var CustomRoutingEndpointDescriptions = list(n0, _CREDu, 0, () => CustomRoutingEndpointDescription);
export var AddCustomRoutingEndpoints = op(
  n0,
  _ACRE,
  0,
  () => AddCustomRoutingEndpointsRequest,
  () => AddCustomRoutingEndpointsResponse
);
