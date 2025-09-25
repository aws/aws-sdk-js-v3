// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AN, _AU, _CAPU, _CAPUR, _CAPURr, _SEDIS, _UT, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var CreateApplicationPresignedUrlRequest = struct(n0, _CAPUR, 0, [_AN, _UT, _SEDIS], [0, 0, 1]);
export var CreateApplicationPresignedUrlResponse = struct(n0, _CAPURr, 0, [_AU], [0]);
export var CreateApplicationPresignedUrl = op(
  n0,
  _CAPU,
  0,
  () => CreateApplicationPresignedUrlRequest,
  () => CreateApplicationPresignedUrlResponse
);
