// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CSN, _EI, _h, _PEICSA, _PEICSAR, _PEICSARu, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var PutEmailIdentityConfigurationSetAttributesRequest = struct(n0, _PEICSAR, 0, [_EI, _CSN], [[0, 1], 0]);
export var PutEmailIdentityConfigurationSetAttributesResponse = struct(n0, _PEICSARu, 0, [], []);
export var PutEmailIdentityConfigurationSetAttributes = op(
  n0,
  _PEICSA,
  {
    [_h]: ["PUT", "/v2/email/identities/{EmailIdentity}/configuration-set", 200],
  },
  () => PutEmailIdentityConfigurationSetAttributesRequest,
  () => PutEmailIdentityConfigurationSetAttributesResponse
);
