// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aA, _aRAN, _aV, _eSNk, _h, _lSNo, _RDAVRM, _RDAVRMR, _RDAVRMRe, _rGNe, _rNe, _tSNe, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var RemoveDraftAppVersionResourceMappingsRequest = struct(
  n0,
  _RDAVRMR,
  0,
  [_aA, _rNe, _lSNo, _aRAN, _rGNe, _tSNe, _eSNk],
  [0, 64 | 0, 64 | 0, 64 | 0, 64 | 0, 64 | 0, 64 | 0]
);
export var RemoveDraftAppVersionResourceMappingsResponse = struct(n0, _RDAVRMRe, 0, [_aA, _aV], [0, 0]);
export var EntityNameList = 64 | 0;

export var String255List = 64 | 0;

export var RemoveDraftAppVersionResourceMappings = op(
  n0,
  _RDAVRM,
  {
    [_h]: ["POST", "/remove-draft-app-version-resource-mappings", 200],
  },
  () => RemoveDraftAppVersionResourceMappingsRequest,
  () => RemoveDraftAppVersionResourceMappingsResponse
);
