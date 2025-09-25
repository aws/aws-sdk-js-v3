// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AI, _CRS, _GRS, _GRSR, _GRSRe, _h, _IDT, _RD, _RRS, _RS, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ConversationRetentionSettings = struct(n0, _CRS, 0, [_RD], [1]);
export var GetRetentionSettingsRequest = struct(n0, _GRSR, 0, [_AI], [[0, 1]]);
export var GetRetentionSettingsResponse = struct(n0, _GRSRe, 0, [_RS, _IDT], [() => RetentionSettings, 5]);
export var RetentionSettings = struct(
  n0,
  _RS,
  0,
  [_RRS, _CRS],
  [() => RoomRetentionSettings, () => ConversationRetentionSettings]
);
export var RoomRetentionSettings = struct(n0, _RRS, 0, [_RD], [1]);
export var GetRetentionSettings = op(
  n0,
  _GRS,
  {
    [_h]: ["GET", "/accounts/{AccountId}/retention-settings", 200],
  },
  () => GetRetentionSettingsRequest,
  () => GetRetentionSettingsResponse
);
