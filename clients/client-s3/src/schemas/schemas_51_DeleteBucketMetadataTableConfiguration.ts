// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _B, _DBMTC, _DBMTCR, _EBO, _h, _hH, _xaebo, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteBucketMetadataTableConfigurationRequest = struct(
  n0,
  _DBMTCR,
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
export var DeleteBucketMetadataTableConfiguration = op(
  n0,
  _DBMTC,
  {
    [_h]: ["DELETE", "/?metadataTable", 204],
  },
  () => DeleteBucketMetadataTableConfigurationRequest,
  () => Unit
);
