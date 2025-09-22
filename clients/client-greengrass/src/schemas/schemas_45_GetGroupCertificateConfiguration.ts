// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CAEIM, _CEIM, _GGCC, _GGCCR, _GGCCRe, _GI, _h, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetGroupCertificateConfigurationRequest = struct(n0, _GGCCR, 0, [_GI], [[0, 1]]);
export var GetGroupCertificateConfigurationResponse = struct(n0, _GGCCRe, 0, [_CAEIM, _CEIM, _GI], [0, 0, 0]);
export var GetGroupCertificateConfiguration = op(
  n0,
  _GGCC,
  {
    [_h]: ["GET", "/greengrass/groups/{GroupId}/certificateauthorities/configuration/expiry", 200],
  },
  () => GetGroupCertificateConfigurationRequest,
  () => GetGroupCertificateConfigurationResponse
);
