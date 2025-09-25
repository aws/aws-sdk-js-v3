// smithy-typescript generated code
import { error, op, sim, struct } from "@smithy/core/schema";

import { ResourcePreconditionNotMetException as __ResourcePreconditionNotMetException } from "../models/index";
import {
  _B,
  _BA,
  _c,
  _CJKS,
  _CJKSR,
  _CJKSRa,
  _D,
  _DI,
  _DL,
  _DLR,
  _DTA,
  _e,
  _GB,
  _GBR,
  _GBRe,
  _GD,
  _GDR,
  _GDRe,
  _GR,
  _GRR,
  _GRRe,
  _h,
  _hE,
  _IT,
  _LN,
  _M,
  _N,
  _P,
  _R,
  _RN,
  _RPNME,
  _RT,
  _SI,
  _VH,
  n0,
} from "./schemas_0";
import { Unit } from "./schemas_1_Ledger";

/* eslint no-var: 0 */

export var IonText = sim(n0, _IT, 0, 8);
export var CancelJournalKinesisStreamRequest = struct(
  n0,
  _CJKSR,
  0,
  [_LN, _SI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var CancelJournalKinesisStreamResponse = struct(n0, _CJKSRa, 0, [_SI], [0]);
export var DeleteLedgerRequest = struct(n0, _DLR, 0, [_N], [[0, 1]]);
export var GetBlockRequest = struct(
  n0,
  _GBR,
  0,
  [_N, _BA, _DTA],
  [
    [0, 1],
    [() => ValueHolder, 0],
    [() => ValueHolder, 0],
  ]
);
export var GetBlockResponse = struct(
  n0,
  _GBRe,
  0,
  [_B, _P],
  [
    [() => ValueHolder, 0],
    [() => ValueHolder, 0],
  ]
);
export var GetDigestRequest = struct(n0, _GDR, 0, [_N], [[0, 1]]);
export var GetDigestResponse = struct(n0, _GDRe, 0, [_D, _DTA], [21, [() => ValueHolder, 0]]);
export var GetRevisionRequest = struct(
  n0,
  _GRR,
  0,
  [_N, _BA, _DI, _DTA],
  [[0, 1], [() => ValueHolder, 0], 0, [() => ValueHolder, 0]]
);
export var GetRevisionResponse = struct(
  n0,
  _GRRe,
  0,
  [_P, _R],
  [
    [() => ValueHolder, 0],
    [() => ValueHolder, 0],
  ]
);
export var ResourcePreconditionNotMetException = error(
  n0,
  _RPNME,
  {
    [_e]: _c,
    [_hE]: 412,
  },
  [_M, _RT, _RN],
  [0, 0, 0],

  __ResourcePreconditionNotMetException
);
export var ValueHolder = struct(n0, _VH, 8, [_IT], [[() => IonText, 0]]);
export var CancelJournalKinesisStream = op(
  n0,
  _CJKS,
  {
    [_h]: ["DELETE", "/ledgers/{LedgerName}/journal-kinesis-streams/{StreamId}", 200],
  },
  () => CancelJournalKinesisStreamRequest,
  () => CancelJournalKinesisStreamResponse
);
export var DeleteLedger = op(
  n0,
  _DL,
  {
    [_h]: ["DELETE", "/ledgers/{Name}", 200],
  },
  () => DeleteLedgerRequest,
  () => Unit
);
export var GetBlock = op(
  n0,
  _GB,
  {
    [_h]: ["POST", "/ledgers/{Name}/block", 200],
  },
  () => GetBlockRequest,
  () => GetBlockResponse
);
export var GetDigest = op(
  n0,
  _GD,
  {
    [_h]: ["POST", "/ledgers/{Name}/digest", 200],
  },
  () => GetDigestRequest,
  () => GetDigestResponse
);
export var GetRevision = op(
  n0,
  _GR,
  {
    [_h]: ["POST", "/ledgers/{Name}/revision", 200],
  },
  () => GetRevisionRequest,
  () => GetRevisionResponse
);
