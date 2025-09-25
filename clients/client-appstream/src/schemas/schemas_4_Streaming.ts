// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _ABBN,
  _AIp,
  _CABBSURL,
  _CABBSURLR,
  _CABBSURLRr,
  _CIBSURL,
  _CIBSURLR,
  _CIBSURLRr,
  _CSURL,
  _CSURLR,
  _CSURLRr,
  _Ex,
  _FN,
  _N,
  _SCe,
  _SN,
  _SURL,
  _UI,
  _V,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateAppBlockBuilderStreamingURLRequest = struct(n0, _CABBSURLR, 0, [_ABBN, _V], [0, 1]);
export var CreateAppBlockBuilderStreamingURLResult = struct(n0, _CABBSURLRr, 0, [_SURL, _Ex], [0, 4]);
export var CreateImageBuilderStreamingURLRequest = struct(n0, _CIBSURLR, 0, [_N, _V], [0, 1]);
export var CreateImageBuilderStreamingURLResult = struct(n0, _CIBSURLRr, 0, [_SURL, _Ex], [0, 4]);
export var CreateStreamingURLRequest = struct(n0, _CSURLR, 0, [_SN, _FN, _UI, _AIp, _V, _SCe], [0, 0, 0, 0, 1, 0]);
export var CreateStreamingURLResult = struct(n0, _CSURLRr, 0, [_SURL, _Ex], [0, 4]);
export var CreateAppBlockBuilderStreamingURL = op(
  n0,
  _CABBSURL,
  0,
  () => CreateAppBlockBuilderStreamingURLRequest,
  () => CreateAppBlockBuilderStreamingURLResult
);
export var CreateImageBuilderStreamingURL = op(
  n0,
  _CIBSURL,
  0,
  () => CreateImageBuilderStreamingURLRequest,
  () => CreateImageBuilderStreamingURLResult
);
export var CreateStreamingURL = op(
  n0,
  _CSURL,
  0,
  () => CreateStreamingURLRequest,
  () => CreateStreamingURLResult
);
