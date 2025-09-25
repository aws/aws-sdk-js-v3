// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _CARN, _GSCE, _GSCEI, _GSCEO, _h, _P, _Pr, _R, _RE, _REL, _RELI, _SMCEC, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetSignalingChannelEndpointInput = struct(
  n0,
  _GSCEI,
  0,
  [_CARN, _SMCEC],
  [0, () => SingleMasterChannelEndpointConfiguration]
);
export var GetSignalingChannelEndpointOutput = struct(n0, _GSCEO, 0, [_REL], [() => ResourceEndpointList]);
export var ResourceEndpointListItem = struct(n0, _RELI, 0, [_P, _RE], [0, 0]);
export var SingleMasterChannelEndpointConfiguration = struct(n0, _SMCEC, 0, [_Pr, _R], [64 | 0, 0]);
export var ListOfProtocols = 64 | 0;

export var ResourceEndpointList = list(n0, _REL, 0, () => ResourceEndpointListItem);
export var GetSignalingChannelEndpoint = op(
  n0,
  _GSCE,
  {
    [_h]: ["POST", "/getSignalingChannelEndpoint", 200],
  },
  () => GetSignalingChannelEndpointInput,
  () => GetSignalingChannelEndpointOutput
);
