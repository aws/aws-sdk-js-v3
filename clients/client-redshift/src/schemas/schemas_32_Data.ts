// smithy-typescript generated code
import { error, list, op, struct, struct as uni } from "@smithy/core/schema";

import { InvalidNamespaceFault as __InvalidNamespaceFault } from "../models/index";
import {
  _aQE,
  _c,
  _CIl,
  _CIo,
  _CTr,
  _DII,
  _DIIM,
  _DNe,
  _DNIM,
  _DNOM,
  _E,
  _e,
  _hE,
  _IA,
  _II,
  _IIL,
  _IIM,
  _IIn,
  _INF,
  _M,
  _m,
  _MR,
  _NIa,
  _NIU,
  _PI,
  _RNeg,
  _RNIM,
  _RNOM,
  _SAo,
  _SIer,
  _St,
  _TA,
  _WI,
  _xN,
  n0,
} from "./schemas_0";
import { IntegrationErrorList } from "./schemas_22_Integration";

/* eslint no-var: 0 */

export var DeregisterNamespaceInputMessage = struct(
  n0,
  _DNIM,
  0,
  [_NIa, _CIo],
  [() => NamespaceIdentifierUnion, 64 | 0]
);
export var DeregisterNamespaceOutputMessage = struct(n0, _DNOM, 0, [_St], [0]);
export var DescribeInboundIntegrationsMessage = struct(n0, _DIIM, 0, [_IA, _TA, _MR, _M], [0, 0, 1, 0]);
export var InboundIntegration = struct(
  n0,
  _II,
  0,
  [_IA, _SAo, _TA, _St, _E, _CTr],
  [0, 0, 0, 0, [() => IntegrationErrorList, 0], 4]
);
export var InboundIntegrationsMessage = struct(n0, _IIM, 0, [_M, _IIn], [0, [() => InboundIntegrationList, 0]]);
export var InvalidNamespaceFault = error(
  n0,
  _INF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidNamespaceFault`, 400],
  },
  [_m],
  [0],

  __InvalidNamespaceFault
);
export var ProvisionedIdentifier = struct(n0, _PI, 0, [_CIl], [0]);
export var RegisterNamespaceInputMessage = struct(n0, _RNIM, 0, [_NIa, _CIo], [() => NamespaceIdentifierUnion, 64 | 0]);
export var RegisterNamespaceOutputMessage = struct(n0, _RNOM, 0, [_St], [0]);
export var ServerlessIdentifier = struct(n0, _SIer, 0, [_NIa, _WI], [0, 0]);
export var ConsumerIdentifierList = 64 | 0;

export var InboundIntegrationList = list(n0, _IIL, 0, [
  () => InboundIntegration,
  {
    [_xN]: _II,
  },
]);
export var NamespaceIdentifierUnion = uni(
  n0,
  _NIU,
  0,
  [_SIer, _PI],
  [() => ServerlessIdentifier, () => ProvisionedIdentifier]
);
export var DeregisterNamespace = op(
  n0,
  _DNe,
  0,
  () => DeregisterNamespaceInputMessage,
  () => DeregisterNamespaceOutputMessage
);
export var DescribeInboundIntegrations = op(
  n0,
  _DII,
  0,
  () => DescribeInboundIntegrationsMessage,
  () => InboundIntegrationsMessage
);
export var RegisterNamespace = op(
  n0,
  _RNeg,
  0,
  () => RegisterNamespaceInputMessage,
  () => RegisterNamespaceOutputMessage
);
