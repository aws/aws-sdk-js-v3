// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  InsufficientCapacityException as __InsufficientCapacityException,
  LimitExceededException as __LimitExceededException,
} from "../models/index";
import { _AAZ, _AAZR, _AAZRs, _AZM, _c, _e, _FAi, _FN, _ICE, _LEE, _M, _s, _UT, n0 } from "./schemas_0";
import { AvailabilityZoneMappings } from "./schemas_5_Firewall";

/* eslint no-var: 0 */

export var AssociateAvailabilityZonesRequest = struct(
  n0,
  _AAZR,
  0,
  [_UT, _FAi, _FN, _AZM],
  [0, 0, 0, () => AvailabilityZoneMappings]
);
export var AssociateAvailabilityZonesResponse = struct(
  n0,
  _AAZRs,
  0,
  [_FAi, _FN, _AZM, _UT],
  [0, 0, () => AvailabilityZoneMappings, 0]
);
export var InsufficientCapacityException = error(
  n0,
  _ICE,
  {
    [_e]: _s,
  },
  [_M],
  [0],

  __InsufficientCapacityException
);
export var LimitExceededException = error(
  n0,
  _LEE,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __LimitExceededException
);
export var AssociateAvailabilityZones = op(
  n0,
  _AAZ,
  0,
  () => AssociateAvailabilityZonesRequest,
  () => AssociateAvailabilityZonesResponse
);
