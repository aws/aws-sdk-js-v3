// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DR, _eQN, _ERAOS, _ERAOSR, _ERAOSRn, _RV, _rV, _xN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var EnableReachabilityAnalyzerOrganizationSharingRequest = struct(n0, _ERAOSR, 0, [_DR], [2]);
export var EnableReachabilityAnalyzerOrganizationSharingResult = struct(
  n0,
  _ERAOSRn,
  0,
  [_RV],
  [
    [
      2,
      {
        [_eQN]: `ReturnValue`,
        [_xN]: _rV,
      },
    ],
  ]
);
export var EnableReachabilityAnalyzerOrganizationSharing = op(
  n0,
  _ERAOS,
  0,
  () => EnableReachabilityAnalyzerOrganizationSharingRequest,
  () => EnableReachabilityAnalyzerOrganizationSharingResult
);
