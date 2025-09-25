// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CAEIM, _CEIM, _GI, _h, _UGCC, _UGCCR, _UGCCRp, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateGroupCertificateConfigurationRequest = struct(n0, _UGCCR, 0, [_CEIM, _GI], [0, [0, 1]]);
export var UpdateGroupCertificateConfigurationResponse = struct(n0, _UGCCRp, 0, [_CAEIM, _CEIM, _GI], [0, 0, 0]);
export var UpdateGroupCertificateConfiguration = op(
  n0,
  _UGCC,
  {
    [_h]: ["PUT", "/greengrass/groups/{GroupId}/certificateauthorities/configuration/expiry", 200],
  },
  () => UpdateGroupCertificateConfigurationRequest,
  () => UpdateGroupCertificateConfigurationResponse
);
