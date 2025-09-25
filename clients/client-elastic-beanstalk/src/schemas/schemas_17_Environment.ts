// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _Av, _CDNSA, _CDNSAM, _CDNSARM, _CNAMEP, _FQCNAME, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var CheckDNSAvailabilityMessage = struct(n0, _CDNSAM, 0, [_CNAMEP], [0]);
export var CheckDNSAvailabilityResultMessage = struct(n0, _CDNSARM, 0, [_Av, _FQCNAME], [2, 0]);
export var CheckDNSAvailability = op(
  n0,
  _CDNSA,
  0,
  () => CheckDNSAvailabilityMessage,
  () => CheckDNSAvailabilityResultMessage
);
