// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _B, _DBMC, _DBMCR, _EBO, _h, _hH, _xaebo, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteBucketMetadataConfigurationRequest = struct(
  n0,
  _DBMCR,
  0,
  [_B, _EBO],
  [
    [0, 1],
    [
      0,
      {
        [_hH]: _xaebo,
      },
    ],
  ]
);
export var DeleteBucketMetadataConfiguration = op(
  n0,
  _DBMC,
  {
    [_h]: ["DELETE", "/?metadataConfiguration", 204],
  },
  () => DeleteBucketMetadataConfigurationRequest,
  () => Unit
);
