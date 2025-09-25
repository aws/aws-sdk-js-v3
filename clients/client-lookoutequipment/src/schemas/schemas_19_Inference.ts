// smithy-typescript generated code
import { struct } from "@smithy/core/schema";

import { _B, _CTD, _IICn, _IINC, _IOC, _ISIC, _ISOC, _ITZO, _KKI, _Pr, _SIC, _SOC, _TF, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var InferenceInputConfiguration = struct(
  n0,
  _IICn,
  0,
  [_SIC, _ITZO, _IINC],
  [() => InferenceS3InputConfiguration, 0, () => InferenceInputNameConfiguration]
);
export var InferenceInputNameConfiguration = struct(n0, _IINC, 0, [_TF, _CTD], [0, 0]);
export var InferenceOutputConfiguration = struct(n0, _IOC, 0, [_SOC, _KKI], [() => InferenceS3OutputConfiguration, 0]);
export var InferenceS3InputConfiguration = struct(n0, _ISIC, 0, [_B, _Pr], [0, 0]);
export var InferenceS3OutputConfiguration = struct(n0, _ISOC, 0, [_B, _Pr], [0, 0]);
