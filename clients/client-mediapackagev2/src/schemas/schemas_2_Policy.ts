// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _CAC,
  _CGN,
  _CISA,
  _CN,
  _GCP,
  _GCPR,
  _GCPRe,
  _GOEP,
  _GOEPR,
  _GOEPRe,
  _h,
  _OEN,
  _PCP,
  _PCPR,
  _PCPRu,
  _Po,
  _POEP,
  _POEPR,
  _POEPRu,
  _SRA,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CdnAuthConfiguration = struct(n0, _CAC, 0, [_CISA, _SRA], [64 | 0, 0]);
export var GetChannelPolicyRequest = struct(
  n0,
  _GCPR,
  0,
  [_CGN, _CN],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetChannelPolicyResponse = struct(n0, _GCPRe, 0, [_CGN, _CN, _Po], [0, 0, 0]);
export var GetOriginEndpointPolicyRequest = struct(
  n0,
  _GOEPR,
  0,
  [_CGN, _CN, _OEN],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var GetOriginEndpointPolicyResponse = struct(
  n0,
  _GOEPRe,
  0,
  [_CGN, _CN, _OEN, _Po, _CAC],
  [0, 0, 0, 0, () => CdnAuthConfiguration]
);
export var PutChannelPolicyRequest = struct(n0, _PCPR, 0, [_CGN, _CN, _Po], [[0, 1], [0, 1], 0]);
export var PutChannelPolicyResponse = struct(n0, _PCPRu, 0, [], []);
export var PutOriginEndpointPolicyRequest = struct(
  n0,
  _POEPR,
  0,
  [_CGN, _CN, _OEN, _Po, _CAC],
  [[0, 1], [0, 1], [0, 1], 0, () => CdnAuthConfiguration]
);
export var PutOriginEndpointPolicyResponse = struct(n0, _POEPRu, 0, [], []);
export var CdnIdentifierSecretArns = 64 | 0;

export var GetChannelPolicy = op(
  n0,
  _GCP,
  {
    [_h]: ["GET", "/channelGroup/{ChannelGroupName}/channel/{ChannelName}/policy", 200],
  },
  () => GetChannelPolicyRequest,
  () => GetChannelPolicyResponse
);
export var GetOriginEndpointPolicy = op(
  n0,
  _GOEP,
  {
    [_h]: [
      "GET",
      "/channelGroup/{ChannelGroupName}/channel/{ChannelName}/originEndpoint/{OriginEndpointName}/policy",
      200,
    ],
  },
  () => GetOriginEndpointPolicyRequest,
  () => GetOriginEndpointPolicyResponse
);
export var PutChannelPolicy = op(
  n0,
  _PCP,
  {
    [_h]: ["PUT", "/channelGroup/{ChannelGroupName}/channel/{ChannelName}/policy", 200],
  },
  () => PutChannelPolicyRequest,
  () => PutChannelPolicyResponse
);
export var PutOriginEndpointPolicy = op(
  n0,
  _POEP,
  {
    [_h]: [
      "POST",
      "/channelGroup/{ChannelGroupName}/channel/{ChannelName}/originEndpoint/{OriginEndpointName}/policy",
      200,
    ],
  },
  () => PutOriginEndpointPolicyRequest,
  () => PutOriginEndpointPolicyResponse
);
