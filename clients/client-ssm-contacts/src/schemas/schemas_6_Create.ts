// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { ServiceQuotaExceededException as __ServiceQuotaExceededException } from "../models/index";
import {
  _c,
  _CIo,
  _CR,
  _CRO,
  _CROR,
  _CRORr,
  _CRR,
  _CRRr,
  _e,
  _ET,
  _hE,
  _IT,
  _M,
  _Na,
  _NCI,
  _QC,
  _R,
  _RA,
  _RARN,
  _RI,
  _RIo,
  _ROI,
  _RT,
  _SCe,
  _SQEE,
  _ST,
  _Ta,
  _TRa,
  _TRR,
  _TRRa,
  _TZI,
  n0,
} from "./schemas_0";
import { RecurrenceSettings } from "./schemas_3_Rotation";
import { TagsList } from "./schemas_13_Resource";

/* eslint no-var: 0 */

export var CreateRotationOverrideRequest = struct(n0, _CROR, 0, [_RIo, _NCI, _ST, _ET, _IT], [0, 64 | 0, 4, 4, 0]);
export var CreateRotationOverrideResult = struct(n0, _CRORr, 0, [_ROI], [0]);
export var CreateRotationRequest = struct(
  n0,
  _CRR,
  0,
  [_Na, _CIo, _ST, _TZI, _R, _Ta, _IT],
  [0, 64 | 0, 4, 0, () => RecurrenceSettings, () => TagsList, 0]
);
export var CreateRotationResult = struct(n0, _CRRr, 0, [_RA], [0]);
export var ServiceQuotaExceededException = error(
  n0,
  _SQEE,
  {
    [_e]: _c,
    [_hE]: 402,
  },
  [_M, _RI, _RT, _QC, _SCe],
  [0, 0, 0, 0, 0],

  __ServiceQuotaExceededException
);
export var TagResourceRequest = struct(n0, _TRR, 0, [_RARN, _Ta], [0, () => TagsList]);
export var TagResourceResult = struct(n0, _TRRa, 0, [], []);
export var RotationOverrideContactsArnList = 64 | 0;

export var CreateRotation = op(
  n0,
  _CR,
  0,
  () => CreateRotationRequest,
  () => CreateRotationResult
);
export var CreateRotationOverride = op(
  n0,
  _CRO,
  0,
  () => CreateRotationOverrideRequest,
  () => CreateRotationOverrideResult
);
export var TagResource = op(
  n0,
  _TRa,
  0,
  () => TagResourceRequest,
  () => TagResourceResult
);
