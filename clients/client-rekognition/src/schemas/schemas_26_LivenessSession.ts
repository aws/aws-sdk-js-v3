// smithy-typescript generated code
import { error, list, op, sim, struct } from "@smithy/core/schema";

import { SessionNotFoundException as __SessionNotFoundException } from "../models/index";
import {
  _AI,
  _AIu,
  _B,
  _BB,
  _C,
  _c,
  _Ch,
  _Con,
  _e,
  _GFLSR,
  _GFLSRR,
  _GFLSRRe,
  _L,
  _LIB,
  _M,
  _RI,
  _SIe,
  _SNFE,
  _SO,
  _St,
  _Ty,
  _Ve,
  BoundingBox,
  n0,
  S3Object,
} from "./schemas_0";

/* eslint no-var: 0 */

export var LivenessImageBlob = sim(n0, _LIB, 21, 8);
export var AuditImage = struct(
  n0,
  _AI,
  0,
  [_B, _SO, _BB],
  [[() => LivenessImageBlob, 0], () => S3Object, () => BoundingBox]
);
export var Challenge = struct(n0, _Ch, 0, [_Ty, _Ve], [0, 0]);
export var GetFaceLivenessSessionResultsRequest = struct(n0, _GFLSRR, 0, [_SIe], [0]);
export var GetFaceLivenessSessionResultsResponse = struct(
  n0,
  _GFLSRRe,
  0,
  [_SIe, _St, _Con, _RI, _AIu, _Ch],
  [0, 0, 1, [() => AuditImage, 0], [() => AuditImages, 0], () => Challenge]
);
export var SessionNotFoundException = error(
  n0,
  _SNFE,
  {
    [_e]: _c,
  },
  [_M, _C, _L],
  [0, 0, 0],

  __SessionNotFoundException
);
export var AuditImages = list(n0, _AIu, 0, [() => AuditImage, 0]);
export var GetFaceLivenessSessionResults = op(
  n0,
  _GFLSR,
  0,
  () => GetFaceLivenessSessionResultsRequest,
  () => GetFaceLivenessSessionResultsResponse
);
