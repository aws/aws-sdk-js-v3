// smithy-typescript generated code
import { error, list, map, struct } from "@smithy/core/schema";

import { OpsItemAccessDeniedException as __OpsItemAccessDeniedException } from "../models/index";
import { _aQE, _Arn, _c, _e, _M, _OIADE, _OIDV, _OII, _OIN, _OINp, _OIOD, _ROI, _ROIe, _Ty, _V, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var OpsItemAccessDeniedException = error(
  n0,
  _OIADE,
  {
    [_e]: _c,
    [_aQE]: [`OpsItemAccessDeniedException`, 403],
  },
  [_M],
  [0],

  __OpsItemAccessDeniedException
);
export var OpsItemDataValue = struct(n0, _OIDV, 0, [_V, _Ty], [0, 0]);
export var OpsItemNotification = struct(n0, _OIN, 0, [_Arn], [0]);
export var RelatedOpsItem = struct(n0, _ROIe, 0, [_OII], [0]);
export var OpsItemNotifications = list(n0, _OINp, 0, () => OpsItemNotification);
export var RelatedOpsItems = list(n0, _ROI, 0, () => RelatedOpsItem);
export var OpsItemOperationalData = map(n0, _OIOD, 0, 0, () => OpsItemDataValue);
