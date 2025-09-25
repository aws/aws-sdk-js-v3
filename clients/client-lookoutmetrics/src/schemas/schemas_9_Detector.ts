// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { ConflictException as __ConflictException } from "../models/index";
import {
  _AAD,
  _AADR,
  _AADRc,
  _ADA,
  _c,
  _CE,
  _DAD,
  _DADe,
  _DADR,
  _DADRe,
  _DADRel,
  _DADRele,
  _e,
  _h,
  _hE,
  _M,
  _RI,
  _RT,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ActivateAnomalyDetectorRequest = struct(n0, _AADR, 0, [_ADA], [0]);
export var ActivateAnomalyDetectorResponse = struct(n0, _AADRc, 0, [], []);
export var ConflictException = error(
  n0,
  _CE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_M, _RI, _RT],
  [0, 0, 0],

  __ConflictException
);
export var DeactivateAnomalyDetectorRequest = struct(n0, _DADR, 0, [_ADA], [0]);
export var DeactivateAnomalyDetectorResponse = struct(n0, _DADRe, 0, [], []);
export var DeleteAnomalyDetectorRequest = struct(n0, _DADRel, 0, [_ADA], [0]);
export var DeleteAnomalyDetectorResponse = struct(n0, _DADRele, 0, [], []);
export var ActivateAnomalyDetector = op(
  n0,
  _AAD,
  {
    [_h]: ["POST", "/ActivateAnomalyDetector", 200],
  },
  () => ActivateAnomalyDetectorRequest,
  () => ActivateAnomalyDetectorResponse
);
export var DeactivateAnomalyDetector = op(
  n0,
  _DAD,
  {
    [_h]: ["POST", "/DeactivateAnomalyDetector", 200],
  },
  () => DeactivateAnomalyDetectorRequest,
  () => DeactivateAnomalyDetectorResponse
);
export var DeleteAnomalyDetector = op(
  n0,
  _DADe,
  {
    [_h]: ["POST", "/DeleteAnomalyDetector", 200],
  },
  () => DeleteAnomalyDetectorRequest,
  () => DeleteAnomalyDetectorResponse
);
