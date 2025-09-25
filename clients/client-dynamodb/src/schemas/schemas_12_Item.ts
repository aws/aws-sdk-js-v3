// smithy-typescript generated code
import { error, map, struct } from "@smithy/core/schema";

import { ReplicatedWriteConflictException as __ReplicatedWriteConflictException } from "../models/index";
import { _c, _e, _ICK, _ICKAM, _ICM, _m, _PIIAM, _RWCE, _SERGB, AttributeValue, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ItemCollectionMetrics = struct(n0, _ICM, 0, [_ICK, _SERGB], [() => ItemCollectionKeyAttributeMap, 64 | 1]);
export var ReplicatedWriteConflictException = error(
  n0,
  _RWCE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __ReplicatedWriteConflictException
);
export var ItemCollectionSizeEstimateRange = 64 | 1;

export var ItemCollectionKeyAttributeMap = map(n0, _ICKAM, 0, 0, () => AttributeValue);
export var PutItemInputAttributeMap = map(n0, _PIIAM, 0, 0, () => AttributeValue);
