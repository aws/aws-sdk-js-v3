// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { ConflictException as __ConflictException } from "../models/index";
import { _AI, _C, _c, _CE, _e, _h, _hE, _IDT, _M, _PRS, _PRSR, _PRSRu, _RS, n0 } from "./schemas_0";
import { RetentionSettings } from "./schemas_4_RetentionSettings";

/* eslint no-var: 0 */

export var ConflictException = error(
  n0,
  _CE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_C, _M],
  [0, 0],

  __ConflictException
);
export var PutRetentionSettingsRequest = struct(n0, _PRSR, 0, [_AI, _RS], [[0, 1], () => RetentionSettings]);
export var PutRetentionSettingsResponse = struct(n0, _PRSRu, 0, [_RS, _IDT], [() => RetentionSettings, 5]);
export var PutRetentionSettings = op(
  n0,
  _PRS,
  {
    [_h]: ["PUT", "/accounts/{AccountId}/retention-settings", 204],
  },
  () => PutRetentionSettingsRequest,
  () => PutRetentionSettingsResponse
);
