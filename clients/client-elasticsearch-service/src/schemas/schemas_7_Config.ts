// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _AV, _CCI, _CCP, _CCPa, _CCPL, _CDCC, _CDCCR, _CDCCRa, _CV, _DN, _DR, _h, _PN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var CancelDomainConfigChangeRequest = struct(n0, _CDCCR, 0, [_DN, _DR], [[0, 1], 2]);
export var CancelDomainConfigChangeResponse = struct(
  n0,
  _CDCCRa,
  0,
  [_DR, _CCI, _CCP],
  [2, 64 | 0, () => CancelledChangePropertyList]
);
export var CancelledChangeProperty = struct(n0, _CCPa, 0, [_PN, _CV, _AV], [0, 0, 0]);
export var CancelledChangePropertyList = list(n0, _CCPL, 0, () => CancelledChangeProperty);
export var GUIDList = 64 | 0;

export var CancelDomainConfigChange = op(
  n0,
  _CDCC,
  {
    [_h]: ["POST", "/2015-01-01/es/domain/{DomainName}/config/cancel", 200],
  },
  () => CancelDomainConfigChangeRequest,
  () => CancelDomainConfigChangeResponse
);
