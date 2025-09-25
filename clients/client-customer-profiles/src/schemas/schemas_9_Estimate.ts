// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ANt,
  _AVI,
  _AVIL,
  _DN,
  _EI,
  _Es,
  _GSE,
  _GSER,
  _GSERe,
  _h,
  _It,
  _LPAV,
  _M,
  _PAVR,
  _PAVRr,
  _SCt,
  _Sta,
  _Va,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AttributeValueItem = struct(n0, _AVI, 0, [_Va], [0]);
export var GetSegmentEstimateRequest = struct(
  n0,
  _GSER,
  0,
  [_DN, _EI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetSegmentEstimateResponse = struct(
  n0,
  _GSERe,
  0,
  [_DN, _EI, _Sta, _Es, _M, _SCt],
  [0, 0, 0, 0, 0, [1, 32]]
);
export var ProfileAttributeValuesRequest = struct(
  n0,
  _PAVR,
  0,
  [_DN, _ANt],
  [
    [0, 1],
    [0, 1],
  ]
);
export var ProfileAttributeValuesResponse = struct(
  n0,
  _PAVRr,
  0,
  [_DN, _ANt, _It, _SCt],
  [0, 0, () => AttributeValueItemList, [1, 32]]
);
export var AttributeValueItemList = list(n0, _AVIL, 0, () => AttributeValueItem);
export var GetSegmentEstimate = op(
  n0,
  _GSE,
  {
    [_h]: ["GET", "/domains/{DomainName}/segment-estimates/{EstimateId}", 200],
  },
  () => GetSegmentEstimateRequest,
  () => GetSegmentEstimateResponse
);
export var ListProfileAttributeValues = op(
  n0,
  _LPAV,
  {
    [_h]: ["GET", "/domains/{DomainName}/profile-attributes/{AttributeName}/values", 200],
  },
  () => ProfileAttributeValuesRequest,
  () => ProfileAttributeValuesResponse
);
