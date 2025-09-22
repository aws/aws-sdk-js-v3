// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _cCFA, _h, _i, _UCFA, _UCFAR, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateCampaignFlowAssociationRequest = struct(n0, _UCFAR, 0, [_i, _cCFA], [[0, 1], 0]);
export var UpdateCampaignFlowAssociation = op(
  n0,
  _UCFA,
  {
    [_h]: ["POST", "/v2/campaigns/{id}/flow", 200],
  },
  () => UpdateCampaignFlowAssociationRequest,
  () => Unit
);
