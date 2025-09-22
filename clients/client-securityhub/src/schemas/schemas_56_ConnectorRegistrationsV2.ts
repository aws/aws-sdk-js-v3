// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ACut, _ASut, _CAon, _CIo, _CRV, _CRVR, _CRVRo, _h, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ConnectorRegistrationsV2Request = struct(n0, _CRVR, 0, [_ACut, _ASut], [0, 0]);
export var ConnectorRegistrationsV2Response = struct(n0, _CRVRo, 0, [_CAon, _CIo], [0, 0]);
export var ConnectorRegistrationsV2 = op(
  n0,
  _CRV,
  {
    [_h]: ["POST", "/connectorsv2/registrations", 200],
  },
  () => ConnectorRegistrationsV2Request,
  () => ConnectorRegistrationsV2Response
);
