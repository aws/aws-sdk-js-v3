// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AE, _EET, _h, _IST, _KC, _LN, _RA, _SA, _SI, _SJTK, _SJTKR, _SJTKRt, _SN, _T, n0 } from "./schemas_0";
import { Tags } from "./schemas_3_Resource";

/* eslint no-var: 0 */

export var KinesisConfiguration = struct(n0, _KC, 0, [_SA, _AE], [0, 2]);
export var StreamJournalToKinesisRequest = struct(
  n0,
  _SJTKR,
  0,
  [_LN, _RA, _T, _IST, _EET, _KC, _SN],
  [[0, 1], 0, [() => Tags, 0], 4, 4, () => KinesisConfiguration, 0]
);
export var StreamJournalToKinesisResponse = struct(n0, _SJTKRt, 0, [_SI], [0]);
export var StreamJournalToKinesis = op(
  n0,
  _SJTK,
  {
    [_h]: ["POST", "/ledgers/{LedgerName}/journal-kinesis-streams", 200],
  },
  () => StreamJournalToKinesisRequest,
  () => StreamJournalToKinesisResponse
);
