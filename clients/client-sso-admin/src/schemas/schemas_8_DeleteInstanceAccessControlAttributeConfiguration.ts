// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DIACAC, _DIACACR, _DIACACRe, _IA, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteInstanceAccessControlAttributeConfigurationRequest = struct(n0, _DIACACR, 0, [_IA], [0]);
export var DeleteInstanceAccessControlAttributeConfigurationResponse = struct(n0, _DIACACRe, 0, [], []);
export var DeleteInstanceAccessControlAttributeConfiguration = op(
  n0,
  _DIACAC,
  0,
  () => DeleteInstanceAccessControlAttributeConfigurationRequest,
  () => DeleteInstanceAccessControlAttributeConfigurationResponse
);
