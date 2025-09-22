// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _B,
  _CA,
  _CM,
  _CMD,
  _D,
  _E,
  _EBO,
  _h,
  _hH,
  _hP,
  _JTC,
  _JTCU,
  _REe,
  _UBMJTC,
  _UBMJTCR,
  _xaebo,
  _xasca,
  _xN,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var JournalTableConfigurationUpdates = struct(n0, _JTCU, 0, [_REe], [() => RecordExpiration]);
export var RecordExpiration = struct(n0, _REe, 0, [_E, _D], [0, 1]);
export var UpdateBucketMetadataJournalTableConfigurationRequest = struct(
  n0,
  _UBMJTCR,
  0,
  [_B, _CMD, _CA, _JTC, _EBO],
  [
    [0, 1],
    [
      0,
      {
        [_hH]: _CM,
      },
    ],
    [
      0,
      {
        [_hH]: _xasca,
      },
    ],
    [
      () => JournalTableConfigurationUpdates,
      {
        [_xN]: _JTC,
        [_hP]: 1,
      },
    ],
    [
      0,
      {
        [_hH]: _xaebo,
      },
    ],
  ]
);
export var UpdateBucketMetadataJournalTableConfiguration = op(
  n0,
  _UBMJTC,
  {
    [_h]: ["PUT", "/?metadataJournalTable", 200],
  },
  () => UpdateBucketMetadataJournalTableConfigurationRequest,
  () => Unit
);
