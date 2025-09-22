// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { NoDataRetentionException as __NoDataRetentionException } from "../models/index";
import { _c, _CARN, _e, _h, _hE, _M, _MSC, _NDRE, _UMSC, _UMSCI, _UMSCO, n0 } from "./schemas_0";
import { MediaStorageConfiguration } from "./schemas_12_MediaStorage";

/* eslint no-var: 0 */

export var NoDataRetentionException = error(
  n0,
  _NDRE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __NoDataRetentionException
);
export var UpdateMediaStorageConfigurationInput = struct(
  n0,
  _UMSCI,
  0,
  [_CARN, _MSC],
  [0, () => MediaStorageConfiguration]
);
export var UpdateMediaStorageConfigurationOutput = struct(n0, _UMSCO, 0, [], []);
export var UpdateMediaStorageConfiguration = op(
  n0,
  _UMSC,
  {
    [_h]: ["POST", "/updateMediaStorageConfiguration", 200],
  },
  () => UpdateMediaStorageConfigurationInput,
  () => UpdateMediaStorageConfigurationOutput
);
