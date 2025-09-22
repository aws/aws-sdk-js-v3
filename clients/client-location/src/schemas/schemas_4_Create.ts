// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  ConflictException as __ConflictException,
  ServiceQuotaExceededException as __ServiceQuotaExceededException,
} from "../models/index";
import {
  _ATC,
  _ATCR,
  _ATCRs,
  _c,
  _CA,
  _CAo,
  _CE,
  _CGC,
  _CGCR,
  _CGCRr,
  _CK,
  _CKR,
  _CKRr,
  _CN,
  _CT,
  _CTR,
  _CTr,
  _CTRr,
  _De,
  _e,
  _EBE,
  _en,
  _ET,
  _h,
  _hE,
  _jN,
  _K,
  _KA,
  _KKEGQ,
  _KKI,
  _KN,
  _M,
  _m,
  _NE,
  _PF,
  _PP,
  _PPDS,
  _Re,
  _SQEE,
  _TA,
  _Ta,
  _TN,
  n0,
  Timestamp,
} from "./schemas_0";
import { ApiKeyRestrictions } from "./schemas_3_Key";
import { ApiKey } from "./schemas_25_Get";

/* eslint no-var: 0 */

export var AssociateTrackerConsumerRequest = struct(n0, _ATCR, 0, [_TN, _CA], [[0, 1], 0]);
export var AssociateTrackerConsumerResponse = struct(n0, _ATCRs, 0, [], []);
export var ConflictException = error(
  n0,
  _CE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_M],
  [
    [
      0,
      {
        [_jN]: _m,
      },
    ],
  ],

  __ConflictException
);
export var CreateGeofenceCollectionRequest = struct(
  n0,
  _CGCR,
  0,
  [_CN, _PP, _PPDS, _De, _Ta, _KKI],
  [0, 0, 0, 0, 128 | 0, 0]
);
export var CreateGeofenceCollectionResponse = struct(n0, _CGCRr, 0, [_CN, _CAo, _CT], [0, 0, [() => Timestamp, 0]]);
export var CreateKeyRequest = struct(
  n0,
  _CKR,
  0,
  [_KN, _Re, _De, _ET, _NE, _Ta],
  [0, [() => ApiKeyRestrictions, 0], 0, [() => Timestamp, 0], 2, 128 | 0]
);
export var CreateKeyResponse = struct(
  n0,
  _CKRr,
  0,
  [_K, _KA, _KN, _CT],
  [[() => ApiKey, 0], 0, 0, [() => Timestamp, 0]]
);
export var CreateTrackerRequest = struct(
  n0,
  _CTR,
  0,
  [_TN, _PP, _KKI, _PPDS, _De, _Ta, _PF, _EBE, _KKEGQ],
  [0, 0, 0, 0, 0, 128 | 0, 0, 2, 2]
);
export var CreateTrackerResponse = struct(n0, _CTRr, 0, [_TN, _TA, _CT], [0, 0, [() => Timestamp, 0]]);
export var ServiceQuotaExceededException = error(
  n0,
  _SQEE,
  {
    [_e]: _c,
    [_hE]: 402,
  },
  [_M],
  [
    [
      0,
      {
        [_jN]: _m,
      },
    ],
  ],

  __ServiceQuotaExceededException
);
export var AssociateTrackerConsumer = op(
  n0,
  _ATC,
  {
    [_h]: ["POST", "/tracking/v0/trackers/{TrackerName}/consumers", 200],
    [_en]: ["cp.tracking."],
  },
  () => AssociateTrackerConsumerRequest,
  () => AssociateTrackerConsumerResponse
);
export var CreateGeofenceCollection = op(
  n0,
  _CGC,
  {
    [_h]: ["POST", "/geofencing/v0/collections", 200],
    [_en]: ["cp.geofencing."],
  },
  () => CreateGeofenceCollectionRequest,
  () => CreateGeofenceCollectionResponse
);
export var CreateKey = op(
  n0,
  _CK,
  {
    [_h]: ["POST", "/metadata/v0/keys", 200],
    [_en]: ["cp.metadata."],
  },
  () => CreateKeyRequest,
  () => CreateKeyResponse
);
export var CreateTracker = op(
  n0,
  _CTr,
  {
    [_h]: ["POST", "/tracking/v0/trackers", 200],
    [_en]: ["cp.tracking."],
  },
  () => CreateTrackerRequest,
  () => CreateTrackerResponse
);
