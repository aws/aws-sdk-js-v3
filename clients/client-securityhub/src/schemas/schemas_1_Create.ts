// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CIo, _CTl, _CTV, _CTVR, _CTVRr, _FMU, _h, _TIi, _TSU, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var CreateTicketV2Request = struct(n0, _CTVR, 0, [_CIo, _FMU, _CTl], [0, 0, [0, 4]]);
export var CreateTicketV2Response = struct(n0, _CTVRr, 0, [_TIi, _TSU], [0, 0]);
export var CreateTicketV2 = op(
  n0,
  _CTV,
  {
    [_h]: ["POST", "/ticketsv2", 200],
  },
  () => CreateTicketV2Request,
  () => CreateTicketV2Response
);
