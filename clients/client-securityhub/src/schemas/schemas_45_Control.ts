// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CSont, _DRi, _h, _SCAta, _USCpd, _USCRpd, _USCRpda, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateStandardsControlRequest = struct(n0, _USCRpd, 0, [_SCAta, _CSont, _DRi], [[0, 1], 0, 0]);
export var UpdateStandardsControlResponse = struct(n0, _USCRpda, 0, [], []);
export var UpdateStandardsControl = op(
  n0,
  _USCpd,
  {
    [_h]: ["PATCH", "/standards/control/{StandardsControlArn+}", 200],
  },
  () => UpdateStandardsControlRequest,
  () => UpdateStandardsControlResponse
);
