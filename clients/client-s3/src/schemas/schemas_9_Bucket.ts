// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _B,
  _CA,
  _CM,
  _CMD,
  _Co,
  _EBO,
  _EDr,
  _GBW,
  _GBWO,
  _GBWR,
  _h,
  _HECRE,
  _hH,
  _HN,
  _hP,
  _HRC,
  _IDn,
  _K,
  _KPE,
  _PBW,
  _PBWR,
  _Pro,
  _RART,
  _Red,
  _RKPW,
  _RKW,
  _RR,
  _RRo,
  _Su,
  _WC,
  _xaebo,
  _xasca,
  _xN,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var Condition = struct(n0, _Co, 0, [_HECRE, _KPE], [0, 0]);
export var ErrorDocument = struct(n0, _EDr, 0, [_K], [0]);
export var GetBucketWebsiteOutput = struct(
  n0,
  _GBWO,
  {
    [_xN]: _WC,
  },
  [_RART, _IDn, _EDr, _RR],
  [() => RedirectAllRequestsTo, () => IndexDocument, () => ErrorDocument, [() => RoutingRules, 0]]
);
export var GetBucketWebsiteRequest = struct(
  n0,
  _GBWR,
  0,
  [_B, _EBO],
  [
    [0, 1],
    [
      0,
      {
        [_hH]: _xaebo,
      },
    ],
  ]
);
export var IndexDocument = struct(n0, _IDn, 0, [_Su], [0]);
export var PutBucketWebsiteRequest = struct(
  n0,
  _PBWR,
  0,
  [_B, _CMD, _CA, _WC, _EBO],
  [
    [0, 1],
    [
      0,
      {
        [_hH]: _CM,
      },
    ],
    [
      0,
      {
        [_hH]: _xasca,
      },
    ],
    [
      () => WebsiteConfiguration,
      {
        [_xN]: _WC,
        [_hP]: 1,
      },
    ],
    [
      0,
      {
        [_hH]: _xaebo,
      },
    ],
  ]
);
export var Redirect = struct(n0, _Red, 0, [_HN, _HRC, _Pro, _RKPW, _RKW], [0, 0, 0, 0, 0]);
export var RedirectAllRequestsTo = struct(n0, _RART, 0, [_HN, _Pro], [0, 0]);
export var RoutingRule = struct(n0, _RRo, 0, [_Co, _Red], [() => Condition, () => Redirect]);
export var WebsiteConfiguration = struct(
  n0,
  _WC,
  0,
  [_EDr, _IDn, _RART, _RR],
  [() => ErrorDocument, () => IndexDocument, () => RedirectAllRequestsTo, [() => RoutingRules, 0]]
);
export var RoutingRules = list(n0, _RR, 0, [
  () => RoutingRule,
  {
    [_xN]: _RRo,
  },
]);
export var GetBucketWebsite = op(
  n0,
  _GBW,
  {
    [_h]: ["GET", "/?website", 200],
  },
  () => GetBucketWebsiteRequest,
  () => GetBucketWebsiteOutput
);
export var PutBucketWebsite = op(
  n0,
  _PBW,
  {
    [_h]: ["PUT", "/?website", 200],
  },
  () => PutBucketWebsiteRequest,
  () => Unit
);
